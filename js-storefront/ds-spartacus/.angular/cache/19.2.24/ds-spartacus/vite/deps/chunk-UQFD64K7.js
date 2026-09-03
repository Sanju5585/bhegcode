import {
  ROUTE_PARAMS
} from "./chunk-NOGPYLJ7.js";
import {
  UserProfileFacade
} from "./chunk-YJXUXPBZ.js";
import {
  UserAccountFacade
} from "./chunk-LZQV6UAH.js";
import {
  BREAKPOINT,
  CustomFormValidators,
  DatePickerComponent,
  DatePickerModule,
  DatePickerService,
  FocusDirective,
  FormErrorsComponent,
  FormErrorsModule,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  FormUtils,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  NgSelectA11yDirective,
  NgSelectA11yModule,
  OutletContextData,
  PaginationComponent,
  PaginationModule,
  PasswordVisibilityToggleDirective,
  PasswordVisibilityToggleModule,
  PopoverDirective,
  PopoverModule,
  SplitViewComponent,
  SplitViewModule,
  TableComponent,
  TableLayout,
  TableModule,
  TableService,
  TrapFocus,
  ViewComponent
} from "./chunk-D5RDRHN5.js";
import {
  AuthGuard,
  B2BUserRight,
  B2BUserRole,
  ContentPageMetaResolver,
  CurrencyService,
  CxDatePipe,
  DefaultRoutePageMetaResolver,
  FeatureConfigService,
  FeatureDirective,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  HttpErrorHandler,
  HttpResponseStatus,
  I18nModule,
  LoggerService,
  PageMetaResolver,
  PageType,
  Priority,
  RoutingService,
  SemanticPathService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserAddressService,
  UserIdService,
  authGroup_actions,
  isNotNullable,
  isNotUndefined,
  provideDefaultConfig,
  provideDefaultConfigFactory,
  siteContextGroup_actions,
  tryNormalizeHttpError,
  useFeatureStyles,
  utilsGroup
} from "./chunk-VIVIQI6G.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-EBCNDD52.js";
import {
  NgOptionComponent,
  NgSelectComponent,
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
import {
  Actions,
  EffectsFeatureModule,
  EffectsModule,
  createEffect,
  ofType
} from "./chunk-6KXUHIAW.js";
import {
  Store,
  StoreFeatureModule,
  StoreModule,
  combineReducers,
  createFeatureSelector,
  createSelector
} from "./chunk-2FUOVDAV.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormArrayName,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-S7KROBXW.js";
import {
  isPlatformBrowser
} from "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  HostBinding,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Optional,
  PLATFORM_ID,
  ViewChild,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate2,
  ɵɵpropertyInterpolate3,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  defer,
  queueScheduler,
  using
} from "./chunk-FBVS4YZX.js";
import {
  BehaviorSubject,
  EMPTY,
  ReplaySubject,
  Subject,
  auditTime,
  catchError,
  combineLatest,
  distinctUntilChanged,
  filter,
  first,
  from,
  groupBy,
  map,
  mergeMap,
  observeOn,
  of,
  pairwise,
  shareReplay,
  startWith,
  take,
  tap,
  withLatestFrom
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-administration-core.mjs
var B2BUserAdapter = class {
};
var B2BUserConnector = class _B2BUserConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId, orgUnitCustomerId) {
    return this.adapter.load(userId, orgUnitCustomerId);
  }
  create(userId, orgCustomer) {
    return this.adapter.create(userId, orgCustomer);
  }
  update(userId, orgCustomerId, orgCustomer) {
    return this.adapter.update(userId, orgCustomerId, orgCustomer);
  }
  getList(userId, params) {
    return this.adapter.loadList(userId, params);
  }
  getApprovers(userId, orgUnitCustomerId, params) {
    return this.adapter.loadApprovers(userId, orgUnitCustomerId, params);
  }
  assignApprover(userId, orgCustomerId, approverId) {
    return this.adapter.assignApprover(userId, orgCustomerId, approverId);
  }
  unassignApprover(userId, orgCustomerId, approverId) {
    return this.adapter.unassignApprover(userId, orgCustomerId, approverId);
  }
  getPermissions(userId, orgUnitCustomerId, params) {
    return this.adapter.loadPermissions(userId, orgUnitCustomerId, params);
  }
  assignPermission(userId, orgCustomerId, permissionId) {
    return this.adapter.assignPermission(userId, orgCustomerId, permissionId);
  }
  unassignPermission(userId, orgCustomerId, permissionId) {
    return this.adapter.unassignPermission(userId, orgCustomerId, permissionId);
  }
  getUserGroups(userId, orgUnitCustomerId, params) {
    return this.adapter.loadUserGroups(userId, orgUnitCustomerId, params);
  }
  assignUserGroup(userId, orgCustomerId, userGroupId) {
    return this.adapter.assignUserGroup(userId, orgCustomerId, userGroupId);
  }
  unassignUserGroup(userId, orgCustomerId, userGroupId) {
    return this.adapter.unassignUserGroup(userId, orgCustomerId, userGroupId);
  }
  static {
    this.ɵfac = function B2BUserConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _B2BUserConnector)(ɵɵinject(B2BUserAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _B2BUserConnector,
      factory: _B2BUserConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(B2BUserConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: B2BUserAdapter
  }], null);
})();
var BudgetAdapter = class {
};
var BudgetConnector = class _BudgetConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId, budgetCode) {
    return this.adapter.load(userId, budgetCode);
  }
  getList(userId, params) {
    return this.adapter.loadList(userId, params);
  }
  create(userId, budget) {
    return this.adapter.create(userId, budget);
  }
  update(userId, budgetCode, budget) {
    return this.adapter.update(userId, budgetCode, budget);
  }
  static {
    this.ɵfac = function BudgetConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetConnector)(ɵɵinject(BudgetAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BudgetConnector,
      factory: _BudgetConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: BudgetAdapter
  }], null);
})();
var CostCenterAdapter = class {
};
var CostCenterConnector = class _CostCenterConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId, costCenterCode) {
    return this.adapter.load(userId, costCenterCode);
  }
  getList(userId, params) {
    return this.adapter.loadList(userId, params);
  }
  create(userId, costCenter) {
    return this.adapter.create(userId, costCenter);
  }
  update(userId, costCenterCode, costCenter) {
    return this.adapter.update(userId, costCenterCode, costCenter);
  }
  getBudgets(userId, costCenterCode, params) {
    return this.adapter.loadBudgets(userId, costCenterCode, params);
  }
  assignBudget(userId, costCenterCode, budgetCode) {
    return this.adapter.assignBudget(userId, costCenterCode, budgetCode);
  }
  unassignBudget(userId, costCenterCode, budgetCode) {
    return this.adapter.unassignBudget(userId, costCenterCode, budgetCode);
  }
  static {
    this.ɵfac = function CostCenterConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterConnector)(ɵɵinject(CostCenterAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CostCenterConnector,
      factory: _CostCenterConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CostCenterAdapter
  }], null);
})();
var OrgUnitAdapter = class {
};
var OrgUnitConnector = class _OrgUnitConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId, orgUnitId) {
    return this.adapter.load(userId, orgUnitId);
  }
  create(userId, orgUnit) {
    return this.adapter.create(userId, orgUnit);
  }
  update(userId, orgUnitId, orgUnit) {
    return this.adapter.update(userId, orgUnitId, orgUnit);
  }
  getList(userId) {
    return this.adapter.loadList(userId);
  }
  getApprovalProcesses(userId) {
    return this.adapter.loadApprovalProcesses(userId);
  }
  getTree(userId) {
    return this.adapter.loadTree(userId);
  }
  getUsers(userId, orgUnitId, roleId, params) {
    return this.adapter.loadUsers(userId, orgUnitId, roleId, params);
  }
  assignRole(userId, orgCustomerId, roleId) {
    return this.adapter.assignRole(userId, orgCustomerId, roleId);
  }
  unassignRole(userId, orgCustomerId, roleId) {
    return this.adapter.unassignRole(userId, orgCustomerId, roleId);
  }
  assignApprover(userId, orgUnitId, orgCustomerId, roleId) {
    return this.adapter.assignApprover(userId, orgUnitId, orgCustomerId, roleId);
  }
  unassignApprover(userId, orgUnitId, orgCustomerId, roleId) {
    return this.adapter.unassignApprover(userId, orgUnitId, orgCustomerId, roleId);
  }
  getAddresses(userId, orgUnitId) {
    return this.adapter.loadAddresses(userId, orgUnitId);
  }
  createAddress(userId, orgUnitId, address) {
    return this.adapter.createAddress(userId, orgUnitId, address);
  }
  updateAddress(userId, orgUnitId, addressId, address) {
    return this.adapter.updateAddress(userId, orgUnitId, addressId, address);
  }
  deleteAddress(userId, orgUnitId, addressId) {
    return this.adapter.deleteAddress(userId, orgUnitId, addressId);
  }
  static {
    this.ɵfac = function OrgUnitConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrgUnitConnector)(ɵɵinject(OrgUnitAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrgUnitConnector,
      factory: _OrgUnitConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrgUnitConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrgUnitAdapter
  }], null);
})();
var PermissionAdapter = class {
};
var PermissionConnector = class _PermissionConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId, permissionCode) {
    return this.adapter.load(userId, permissionCode);
  }
  getList(userId, params) {
    return this.adapter.loadList(userId, params);
  }
  create(userId, permission) {
    return this.adapter.create(userId, permission);
  }
  update(userId, permissionCode, permission) {
    return this.adapter.update(userId, permissionCode, permission);
  }
  getTypes() {
    return this.adapter.loadTypes();
  }
  static {
    this.ɵfac = function PermissionConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionConnector)(ɵɵinject(PermissionAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PermissionConnector,
      factory: _PermissionConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: PermissionAdapter
  }], null);
})();
var UserGroupAdapter = class {
};
var UserGroupConnector = class _UserGroupConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId, userGroupId) {
    return this.adapter.load(userId, userGroupId);
  }
  getList(userId, params) {
    return this.adapter.loadList(userId, params);
  }
  getAvailableOrderApprovalPermissions(userId, userGroupId, params) {
    return this.adapter.loadAvailableOrderApprovalPermissions(userId, userGroupId, params);
  }
  getAvailableOrgCustomers(userId, userGroupId, params) {
    return this.adapter.loadAvailableOrgCustomers(userId, userGroupId, params);
  }
  create(userId, userGroup) {
    return this.adapter.create(userId, userGroup);
  }
  delete(userId, userGroupId) {
    return this.adapter.delete(userId, userGroupId);
  }
  update(userId, userGroupId, userGroup) {
    return this.adapter.update(userId, userGroupId, userGroup);
  }
  assignMember(userId, userGroupId, orgCustomerId) {
    return this.adapter.assignMember(userId, userGroupId, orgCustomerId);
  }
  assignOrderApprovalPermission(userId, userGroupId, orderApprovalPermissionCode) {
    return this.adapter.assignOrderApprovalPermission(userId, userGroupId, orderApprovalPermissionCode);
  }
  unassignMember(userId, userGroupId, orgCustomerId) {
    return this.adapter.unassignMember(userId, userGroupId, orgCustomerId);
  }
  unassignAllMembers(userId, userGroupId) {
    return this.adapter.unassignAllMembers(userId, userGroupId);
  }
  unassignOrderApprovalPermission(userId, userGroupId, orderApprovalPermissionCode) {
    return this.adapter.unassignOrderApprovalPermission(userId, userGroupId, orderApprovalPermissionCode);
  }
  static {
    this.ɵfac = function UserGroupConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupConnector)(ɵɵinject(UserGroupAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGroupConnector,
      factory: _UserGroupConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserGroupAdapter
  }], null);
})();
var AdminGuard = class _AdminGuard {
  constructor(userAccountFacade, routingService, globalMessageService) {
    this.userAccountFacade = userAccountFacade;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
  }
  canActivate() {
    return this.userAccountFacade.get().pipe(filter((user) => !!user && Object.keys(user).length > 0), map((user) => user?.roles), map((roles) => {
      const hasRole = Array.isArray(roles) && roles.includes(B2BUserRole.ADMIN);
      if (!hasRole) {
        this.routingService.go({
          cxRoute: "organization"
        });
        this.globalMessageService.add({
          key: "organization.notification.noSufficientPermissions"
        }, GlobalMessageType.MSG_TYPE_WARNING);
      }
      return hasRole;
    }));
  }
  static {
    this.ɵfac = function AdminGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdminGuard)(ɵɵinject(UserAccountFacade), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AdminGuard,
      factory: _AdminGuard.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminGuard, [{
    type: Injectable
  }], () => [{
    type: UserAccountFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }], null);
})();
var ORGANIZATION_FEATURE = "organization";
var BUDGET_FEATURE = "budget";
var BUDGET_ENTITIES = "budget-entities";
var BUDGET_LIST = "budget-list";
var COST_CENTER_FEATURE = "costCenter";
var COST_CENTER_ENTITIES = "costCenter-entities";
var COST_CENTER_LIST = "costCenter-list";
var COST_CENTER_ASSIGNED_BUDGETS = "costCenter-assigned-budgets";
var PERMISSION_FEATURE = "permission";
var PERMISSION_ENTITIES = "permission-entities";
var PERMISSION_LIST = "permission-list";
var PERMISSION_TYPES = "permission-types";
var PERMISSION_TYPES_LIST = "permission-types-list";
var ORG_UNIT_FEATURE = "orgUnit";
var ORG_UNIT_NODE_LIST = "orgUnitNode-list";
var ORG_UNIT_ENTITIES = "orgUnit-entities";
var ORG_UNIT_TREE_ENTITY = "orgUnit-tree";
var ORG_UNIT_APPROVAL_PROCESSES_ENTITIES = "orgUnit-approval-processes";
var ORG_UNIT_ASSIGNED_USERS = "orgUnit-assigned-users";
var ORG_UNIT_TREE = "tree";
var ORG_UNIT_APPROVAL_PROCESSES = "approvalProcesses";
var ORG_UNIT_NODES = "availableOrgUnitNodes";
var B2B_USER_FEATURE = "b2bUser";
var B2B_USER_ENTITIES = "b2bUser-entities";
var USER_LIST = "b2bUser-list";
var B2B_USER_APPROVERS = "b2bUser-approvers";
var B2B_USER_PERMISSIONS = "b2bUser-permissions";
var B2B_USER_USER_GROUPS = "b2bUser-user-groups";
var USER_GROUP_FEATURE = "userGroup";
var USER_GROUP_ENTITIES = "userGroup-entities";
var USER_GROUP_LIST = "userGroup-list";
var USER_GROUP_PERMISSIONS = "userGroup-available-order-approval-permissions";
var USER_GROUP_AVAILABLE_CUSTOMERS = "userGroup-available-org-customers";
var ADDRESS_ENTITIES = "addresses-entities";
var ADDRESS_LIST = "addresses-list";
var LOAD_BUDGET = "[Budget] Load Budget Data";
var LOAD_BUDGET_FAIL = "[Budget] Load Budget Data Fail";
var LOAD_BUDGET_SUCCESS = "[Budget] Load Budget Data Success";
var LOAD_BUDGETS = "[Budget] Load Budgets";
var LOAD_BUDGETS_FAIL = "[Budget] Load Budgets Fail";
var LOAD_BUDGETS_SUCCESS = "[Budget] Load Budgets Success";
var CREATE_BUDGET = "[Budget] Create Budget";
var CREATE_BUDGET_FAIL = "[Budget] Create Budget Fail";
var CREATE_BUDGET_SUCCESS = "[Budget] Create Budget Success";
var UPDATE_BUDGET = "[Budget] Update Budget";
var UPDATE_BUDGET_FAIL = "[Budget] Update Budget Fail";
var UPDATE_BUDGET_SUCCESS = "[Budget] Update Budget Success";
var LoadBudget = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.budgetCode);
    this.payload = payload;
    this.type = LOAD_BUDGET;
  }
};
var LoadBudgetFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.budgetCode, payload.error);
    this.payload = payload;
    this.type = LOAD_BUDGET_FAIL;
  }
};
var LoadBudgetSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, Array.isArray(payload) ? payload.map((budget) => budget?.code ?? "") : payload?.code ?? "");
    this.payload = payload;
    this.type = LOAD_BUDGET_SUCCESS;
  }
};
var LoadBudgets = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(BUDGET_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_BUDGETS;
  }
};
var LoadBudgetsFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(BUDGET_LIST, utilsGroup.serializeSearchConfig(payload.params), payload.error);
    this.payload = payload;
    this.type = LOAD_BUDGETS_FAIL;
  }
};
var LoadBudgetsSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(BUDGET_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_BUDGETS_SUCCESS;
  }
};
var CreateBudget = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.budget.code ?? null);
    this.payload = payload;
    this.type = CREATE_BUDGET;
  }
};
var CreateBudgetFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.budgetCode, payload.error);
    this.payload = payload;
    this.type = CREATE_BUDGET_FAIL;
  }
};
var CreateBudgetSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.code ?? null, payload);
    this.payload = payload;
    this.type = CREATE_BUDGET_SUCCESS;
  }
};
var UpdateBudget = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.budget.code ?? "");
    this.payload = payload;
    this.type = UPDATE_BUDGET;
  }
};
var UpdateBudgetFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.budgetCode, payload.error);
    this.payload = payload;
    this.type = UPDATE_BUDGET_FAIL;
  }
};
var UpdateBudgetSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.code ?? "", payload);
    this.payload = payload;
    this.type = UPDATE_BUDGET_SUCCESS;
  }
};
var budget_action = Object.freeze({
  __proto__: null,
  CREATE_BUDGET,
  CREATE_BUDGET_FAIL,
  CREATE_BUDGET_SUCCESS,
  CreateBudget,
  CreateBudgetFail,
  CreateBudgetSuccess,
  LOAD_BUDGET,
  LOAD_BUDGETS,
  LOAD_BUDGETS_FAIL,
  LOAD_BUDGETS_SUCCESS,
  LOAD_BUDGET_FAIL,
  LOAD_BUDGET_SUCCESS,
  LoadBudget,
  LoadBudgetFail,
  LoadBudgetSuccess,
  LoadBudgets,
  LoadBudgetsFail,
  LoadBudgetsSuccess,
  UPDATE_BUDGET,
  UPDATE_BUDGET_FAIL,
  UPDATE_BUDGET_SUCCESS,
  UpdateBudget,
  UpdateBudgetFail,
  UpdateBudgetSuccess
});
var LOAD_ORG_UNIT = "[B2BUnit] Load B2BUnit Data";
var LOAD_ORG_UNIT_FAIL = "[B2BUnit] Load B2BUnit Data Fail";
var LOAD_ORG_UNIT_SUCCESS = "[B2BUnit] Load B2BUnit Data Success";
var LOAD_UNIT_NODE = "[B2BUnitNode] Load B2BUnitNode Data";
var LOAD_UNIT_NODE_FAIL = "[B2BUnitNode] Load B2BUnitNode Data Fail";
var LOAD_UNIT_NODE_SUCCESS = "[B2BUnitNode] Load B2BUnitNode Data Success";
var LOAD_UNIT_NODES = "[B2BUnitNode] Load B2BUnitNodes";
var LOAD_UNIT_NODES_FAIL = "[B2BUnitNode] Load B2BUnitNodes Fail";
var LOAD_UNIT_NODES_SUCCESS = "[B2BUnitNode] Load B2BUnitNodes Success";
var CREATE_ORG_UNIT = "[B2BUnit] Create B2BUnitNode";
var CREATE_ORG_UNIT_FAIL = "[B2BUnit] Create B2BUnitNode Fail";
var CREATE_ORG_UNIT_SUCCESS = "[B2BUnit] Create B2BUnitNode Success";
var UPDATE_ORG_UNIT = "[B2BUnit] Update B2BUnitNode";
var UPDATE_ORG_UNIT_FAIL = "[B2BUnit] Update B2BUnitNode Fail";
var UPDATE_ORG_UNIT_SUCCESS = "[B2BUnit] Update B2BUnitNode Success";
var LOAD_UNIT_TREE = "[B2BUnitNode] Load Tree";
var LOAD_UNIT_TREE_FAIL = "[B2BUnitNode] Load Tree Fail";
var LOAD_UNIT_TREE_SUCCESS = "[B2BUnitNode] Load Tree Success";
var LOAD_APPROVAL_PROCESSES = "[B2BApprovalProcess] Load Approval Processes";
var LOAD_APPROVAL_PROCESSES_FAIL = "[B2BApprovalProcess] Load Approval Processes Fail";
var LOAD_APPROVAL_PROCESSES_SUCCESS = "[B2BApprovalProcess] Load Approval Processes Success";
var LOAD_ASSIGNED_USERS = "[B2BUnit] Load Users";
var LOAD_ASSIGNED_USERS_SUCCESS = "[B2BUnit] Load Users success";
var LOAD_ASSIGNED_USERS_FAIL = "[B2BUnit] Load Users fail";
var ASSIGN_ROLE = "[B2BUnit] Assign Role";
var ASSIGN_ROLE_SUCCESS = "[B2BUnit] Assign Role success";
var ASSIGN_ROLE_FAIL = "[B2BUnit] Assign Role fail";
var UNASSIGN_ROLE = "[B2BUnit] Unassign Role";
var UNASSIGN_ROLE_SUCCESS = "[B2BUnit] Unassign Role success";
var UNASSIGN_ROLE_FAIL = "[B2BUnit] Unassign Role fail";
var ASSIGN_APPROVER = "[B2BUnit] Assign Approver";
var ASSIGN_APPROVER_SUCCESS = "[B2BUnit] Assign Approver success";
var ASSIGN_APPROVER_FAIL = "[B2BUnit] Assign Approver fail";
var UNASSIGN_APPROVER = "[B2BUnit] Unassign Approver";
var UNASSIGN_APPROVER_SUCCESS = "[B2BUnit] Unassign Approver success";
var UNASSIGN_APPROVER_FAIL = "[B2BUnit] Unassign Approver fail";
var CREATE_ADDRESS = "[B2BUnit] Create address";
var CREATE_ADDRESS_SUCCESS = "[B2BUnit] Create address success";
var CREATE_ADDRESS_FAIL = "[B2BUnit] Create address fail";
var UPDATE_ADDRESS = "[B2BUnit] Update address";
var UPDATE_ADDRESS_SUCCESS = "[B2BUnit] Update address success";
var UPDATE_ADDRESS_FAIL = "[B2BUnit] Update address fail";
var DELETE_ADDRESS = "[B2BUnit] Delete address";
var DELETE_ADDRESS_SUCCESS = "[B2BUnit] Delete address success";
var DELETE_ADDRESS_FAIL = "[B2BUnit] Delete address fail";
var LOAD_ADDRESS_SUCCESS = "[B2BUnit] Load address success";
var LOAD_ADDRESSES = "[B2BUnit] Load addresses";
var LOAD_ADDRESSES_SUCCESS = "[B2BUnit] Load addresses success";
var LOAD_ADDRESSES_FAIL = "[B2BUnit] Load addresses fail";
var CLEAR_ASSIGNED_USERS = "[B2BUnit] Clear Assigned Users";
var LoadOrgUnit = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ORG_UNIT_ENTITIES, payload.orgUnitId);
    this.payload = payload;
    this.type = LOAD_ORG_UNIT;
  }
};
var LoadOrgUnitFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ORG_UNIT_ENTITIES, payload.orgUnitId, payload.error);
    this.payload = payload;
    this.type = LOAD_ORG_UNIT_FAIL;
  }
};
var LoadOrgUnitSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ORG_UNIT_ENTITIES, Array.isArray(payload) ? payload.map((orgUnit) => orgUnit?.uid ?? "") : payload?.uid ?? "");
    this.payload = payload;
    this.type = LOAD_ORG_UNIT_SUCCESS;
  }
};
var LoadOrgUnitNodes = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ORG_UNIT_NODE_LIST, ORG_UNIT_NODES);
    this.payload = payload;
    this.type = LOAD_UNIT_NODES;
  }
};
var LoadOrgUnitNodesFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ORG_UNIT_NODE_LIST, ORG_UNIT_NODES, payload.error);
    this.payload = payload;
    this.type = LOAD_UNIT_NODES_FAIL;
  }
};
var LoadOrgUnitNodesSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ORG_UNIT_NODE_LIST, ORG_UNIT_NODES);
    this.payload = payload;
    this.type = LOAD_UNIT_NODES_SUCCESS;
  }
};
var CreateUnit = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ORG_UNIT_ENTITIES, payload.unit.uid ?? null);
    this.payload = payload;
    this.type = CREATE_ORG_UNIT;
  }
};
var CreateUnitFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ORG_UNIT_ENTITIES, payload.unitCode, payload.error);
    this.payload = payload;
    this.type = CREATE_ORG_UNIT_FAIL;
  }
};
var CreateUnitSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ORG_UNIT_ENTITIES, payload.uid ?? null, payload);
    this.payload = payload;
    this.type = CREATE_ORG_UNIT_SUCCESS;
  }
};
var UpdateUnit = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ORG_UNIT_ENTITIES, payload.unit.uid ?? "");
    this.payload = payload;
    this.type = UPDATE_ORG_UNIT;
  }
};
var UpdateUnitFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ORG_UNIT_ENTITIES, payload.unitCode, payload.error);
    this.payload = payload;
    this.type = UPDATE_ORG_UNIT_FAIL;
  }
};
var UpdateUnitSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ORG_UNIT_ENTITIES, payload.uid ?? "", payload);
    this.payload = payload;
    this.type = UPDATE_ORG_UNIT_SUCCESS;
  }
};
var LoadTree = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ORG_UNIT_TREE_ENTITY, ORG_UNIT_TREE);
    this.payload = payload;
    this.type = LOAD_UNIT_TREE;
  }
};
var LoadTreeFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ORG_UNIT_TREE_ENTITY, ORG_UNIT_TREE, payload.error);
    this.payload = payload;
    this.type = LOAD_UNIT_TREE_FAIL;
  }
};
var LoadTreeSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ORG_UNIT_TREE_ENTITY, ORG_UNIT_TREE);
    this.payload = payload;
    this.type = LOAD_UNIT_TREE_SUCCESS;
  }
};
var LoadApprovalProcesses = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ORG_UNIT_APPROVAL_PROCESSES_ENTITIES, ORG_UNIT_APPROVAL_PROCESSES);
    this.payload = payload;
    this.type = LOAD_APPROVAL_PROCESSES;
  }
};
var LoadApprovalProcessesFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ORG_UNIT_APPROVAL_PROCESSES_ENTITIES, ORG_UNIT_APPROVAL_PROCESSES, payload.error);
    this.payload = payload;
    this.type = LOAD_APPROVAL_PROCESSES_FAIL;
  }
};
var LoadApprovalProcessesSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ORG_UNIT_APPROVAL_PROCESSES_ENTITIES, ORG_UNIT_APPROVAL_PROCESSES);
    this.payload = payload;
    this.type = LOAD_APPROVAL_PROCESSES_SUCCESS;
  }
};
var LoadAssignedUsers = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ORG_UNIT_ASSIGNED_USERS, utilsGroup.serializeSearchConfig(payload.params, `${payload.orgUnitId},${payload.roleId}`));
    this.payload = payload;
    this.type = LOAD_ASSIGNED_USERS;
  }
};
var ClearAssignedUsers = class extends utilsGroup.EntityRemoveAction {
  constructor(payload) {
    super(ORG_UNIT_ASSIGNED_USERS, utilsGroup.serializeSearchConfig(payload.params, `${payload.orgUnitId},${payload.roleId}`));
    this.payload = payload;
    this.type = CLEAR_ASSIGNED_USERS;
  }
};
var LoadAssignedUsersFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ORG_UNIT_ASSIGNED_USERS, utilsGroup.serializeSearchConfig(payload.params, `${payload.orgUnitId},${payload.roleId}`), payload.error);
    this.payload = payload;
    this.type = LOAD_ASSIGNED_USERS_FAIL;
  }
};
var LoadAssignedUsersSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ORG_UNIT_ASSIGNED_USERS, utilsGroup.serializeSearchConfig(payload.params, `${payload.orgUnitId},${payload.roleId}`));
    this.payload = payload;
    this.type = LOAD_ASSIGNED_USERS_SUCCESS;
  }
};
var AssignRole = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId);
    this.payload = payload;
    this.type = ASSIGN_ROLE;
  }
};
var AssignRoleFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId, payload.error);
    this.payload = payload;
    this.type = ASSIGN_ROLE_FAIL;
  }
};
var AssignRoleSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.uid, payload);
    this.payload = payload;
    this.type = ASSIGN_ROLE_SUCCESS;
  }
};
var UnassignRole = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId);
    this.payload = payload;
    this.type = UNASSIGN_ROLE;
  }
};
var UnassignRoleFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId, payload.error);
    this.payload = payload;
    this.type = UNASSIGN_ROLE_FAIL;
  }
};
var UnassignRoleSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.uid, payload);
    this.payload = payload;
    this.type = UNASSIGN_ROLE_SUCCESS;
  }
};
var AssignApprover = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId);
    this.payload = payload;
    this.type = ASSIGN_APPROVER;
  }
};
var AssignApproverFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId, payload.error);
    this.payload = payload;
    this.type = ASSIGN_APPROVER_FAIL;
  }
};
var AssignApproverSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.uid, payload);
    this.payload = payload;
    this.type = ASSIGN_APPROVER_SUCCESS;
  }
};
var UnassignApprover = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId);
    this.payload = payload;
    this.type = UNASSIGN_APPROVER;
  }
};
var UnassignApproverFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId, payload.error);
    this.payload = payload;
    this.type = UNASSIGN_APPROVER_FAIL;
  }
};
var UnassignApproverSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.uid, payload);
    this.payload = payload;
    this.type = UNASSIGN_APPROVER_SUCCESS;
  }
};
var CreateAddress = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ADDRESS_ENTITIES, payload.address.id ?? null);
    this.payload = payload;
    this.type = CREATE_ADDRESS;
  }
};
var CreateAddressFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ADDRESS_ENTITIES, payload.addressId, payload.error);
    this.payload = payload;
    this.type = CREATE_ADDRESS_FAIL;
  }
};
var CreateAddressSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ADDRESS_ENTITIES, payload.id ?? null, payload);
    this.payload = payload;
    this.type = CREATE_ADDRESS_SUCCESS;
  }
};
var UpdateAddress = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ADDRESS_ENTITIES, payload.address.id ?? "");
    this.payload = payload;
    this.type = UPDATE_ADDRESS;
  }
};
var UpdateAddressFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ADDRESS_ENTITIES, payload.addressId, payload.error);
    this.payload = payload;
    this.type = UPDATE_ADDRESS_FAIL;
  }
};
var UpdateAddressSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ADDRESS_ENTITIES, payload.id ?? "", payload);
    this.payload = payload;
    this.type = UPDATE_ADDRESS_SUCCESS;
  }
};
var DeleteAddress = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ADDRESS_ENTITIES, payload.addressId);
    this.payload = payload;
    this.type = DELETE_ADDRESS;
  }
};
var DeleteAddressFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ADDRESS_ENTITIES, payload.addressId, payload.error);
    this.payload = payload;
    this.type = DELETE_ADDRESS_FAIL;
  }
};
var DeleteAddressSuccess = class extends utilsGroup.EntityRemoveAction {
  constructor(payload) {
    super(ADDRESS_ENTITIES, payload.id ?? "");
    this.payload = payload;
    this.type = DELETE_ADDRESS_SUCCESS;
  }
};
var LoadAddressSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ADDRESS_ENTITIES, Array.isArray(payload) ? payload.map((address) => address?.id ?? "") : payload?.id ?? "");
    this.payload = payload;
    this.type = LOAD_ADDRESS_SUCCESS;
  }
};
var LoadAddresses = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(ADDRESS_LIST, payload.orgUnitId);
    this.payload = payload;
    this.type = LOAD_ADDRESSES;
  }
};
var LoadAddressesFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(ADDRESS_LIST, payload.orgUnitId, payload.error);
    this.payload = payload;
    this.type = LOAD_ADDRESSES_FAIL;
  }
};
var LoadAddressesSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(ADDRESS_LIST, payload.orgUnitId);
    this.payload = payload;
    this.type = LOAD_ADDRESSES_SUCCESS;
  }
};
var orgUnit_action = Object.freeze({
  __proto__: null,
  ASSIGN_APPROVER,
  ASSIGN_APPROVER_FAIL,
  ASSIGN_APPROVER_SUCCESS,
  ASSIGN_ROLE,
  ASSIGN_ROLE_FAIL,
  ASSIGN_ROLE_SUCCESS,
  AssignApprover,
  AssignApproverFail,
  AssignApproverSuccess,
  AssignRole,
  AssignRoleFail,
  AssignRoleSuccess,
  CLEAR_ASSIGNED_USERS,
  CREATE_ADDRESS,
  CREATE_ADDRESS_FAIL,
  CREATE_ADDRESS_SUCCESS,
  CREATE_ORG_UNIT,
  CREATE_ORG_UNIT_FAIL,
  CREATE_ORG_UNIT_SUCCESS,
  ClearAssignedUsers,
  CreateAddress,
  CreateAddressFail,
  CreateAddressSuccess,
  CreateUnit,
  CreateUnitFail,
  CreateUnitSuccess,
  DELETE_ADDRESS,
  DELETE_ADDRESS_FAIL,
  DELETE_ADDRESS_SUCCESS,
  DeleteAddress,
  DeleteAddressFail,
  DeleteAddressSuccess,
  LOAD_ADDRESSES,
  LOAD_ADDRESSES_FAIL,
  LOAD_ADDRESSES_SUCCESS,
  LOAD_ADDRESS_SUCCESS,
  LOAD_APPROVAL_PROCESSES,
  LOAD_APPROVAL_PROCESSES_FAIL,
  LOAD_APPROVAL_PROCESSES_SUCCESS,
  LOAD_ASSIGNED_USERS,
  LOAD_ASSIGNED_USERS_FAIL,
  LOAD_ASSIGNED_USERS_SUCCESS,
  LOAD_ORG_UNIT,
  LOAD_ORG_UNIT_FAIL,
  LOAD_ORG_UNIT_SUCCESS,
  LOAD_UNIT_NODE,
  LOAD_UNIT_NODES,
  LOAD_UNIT_NODES_FAIL,
  LOAD_UNIT_NODES_SUCCESS,
  LOAD_UNIT_NODE_FAIL,
  LOAD_UNIT_NODE_SUCCESS,
  LOAD_UNIT_TREE,
  LOAD_UNIT_TREE_FAIL,
  LOAD_UNIT_TREE_SUCCESS,
  LoadAddressSuccess,
  LoadAddresses,
  LoadAddressesFail,
  LoadAddressesSuccess,
  LoadApprovalProcesses,
  LoadApprovalProcessesFail,
  LoadApprovalProcessesSuccess,
  LoadAssignedUsers,
  LoadAssignedUsersFail,
  LoadAssignedUsersSuccess,
  LoadOrgUnit,
  LoadOrgUnitFail,
  LoadOrgUnitNodes,
  LoadOrgUnitNodesFail,
  LoadOrgUnitNodesSuccess,
  LoadOrgUnitSuccess,
  LoadTree,
  LoadTreeFail,
  LoadTreeSuccess,
  UNASSIGN_APPROVER,
  UNASSIGN_APPROVER_FAIL,
  UNASSIGN_APPROVER_SUCCESS,
  UNASSIGN_ROLE,
  UNASSIGN_ROLE_FAIL,
  UNASSIGN_ROLE_SUCCESS,
  UPDATE_ADDRESS,
  UPDATE_ADDRESS_FAIL,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ORG_UNIT,
  UPDATE_ORG_UNIT_FAIL,
  UPDATE_ORG_UNIT_SUCCESS,
  UnassignApprover,
  UnassignApproverFail,
  UnassignApproverSuccess,
  UnassignRole,
  UnassignRoleFail,
  UnassignRoleSuccess,
  UpdateAddress,
  UpdateAddressFail,
  UpdateAddressSuccess,
  UpdateUnit,
  UpdateUnitFail,
  UpdateUnitSuccess
});
var LOAD_USER_GROUP = "[UserGroup] Load UserGroup Data";
var LOAD_USER_GROUP_FAIL = "[UserGroup] Load UserGroup Data Fail";
var LOAD_USER_GROUP_SUCCESS = "[UserGroup] Load UserGroup Data Success";
var LOAD_USER_GROUPS = "[UserGroup] Load UserGroups";
var LOAD_USER_GROUPS_FAIL = "[UserGroup] Load UserGroups Fail";
var LOAD_USER_GROUPS_SUCCESS = "[UserGroup] Load UserGroups Success";
var LOAD_USER_GROUP_PERMISSIONS = "[UserGroup] Load Permissions Data";
var LOAD_USER_GROUP_PERMISSIONS_FAIL = "[UserGroup] Load Permissions Data Fail";
var LOAD_USER_GROUP_PERMISSIONS_SUCCESS = "[UserGroup] Load Permissions Data Success";
var LOAD_USER_GROUP_AVAILABLE_CUSTOMERS = "[UserGroup] Load Customers Data";
var LOAD_USER_GROUP_AVAILABLE_CUSTOMERS_FAIL = "[UserGroup] Load Customers Data Fail";
var LOAD_USER_GROUP_AVAILABLE_CUSTOMERS_SUCCESS = "[UserGroup] Load Customers Data Success";
var CREATE_USER_GROUP = "[UserGroup] Create UserGroup";
var CREATE_USER_GROUP_FAIL = "[UserGroup] Create UserGroup Fail";
var CREATE_USER_GROUP_SUCCESS = "[UserGroup] Create UserGroup Success";
var USER_GROUP_ASSIGN_MEMBER = "[UserGroup] Assign Member";
var USER_GROUP_ASSIGN_MEMBER_FAIL = "[UserGroup] Assign Member Fail";
var USER_GROUP_ASSIGN_MEMBER_SUCCESS = "[UserGroup] Assign Member Success";
var USER_GROUP_ASSIGN_PERMISSION = "[UserGroup] Assign Permissions";
var USER_GROUP_ASSIGN_PERMISSION_FAIL = "[UserGroup] Assign Permissions Fail";
var USER_GROUP_ASSIGN_PERMISSION_SUCCESS = "[UserGroup] Assign Permissions Success";
var UPDATE_USER_GROUP = "[UserGroup] Update UserGroup";
var UPDATE_USER_GROUP_FAIL = "[UserGroup] Update UserGroup Fail";
var UPDATE_USER_GROUP_SUCCESS = "[UserGroup] Update UserGroup Success";
var DELETE_USER_GROUP = "[UserGroup] Delete UserGroup";
var DELETE_USER_GROUP_FAIL = "[UserGroup] Delete UserGroup Fail";
var DELETE_USER_GROUP_SUCCESS = "[UserGroup] Delete UserGroup Success";
var USER_GROUP_UNASSIGN_ALL_MEMBERS = "[UserGroup] Unassign Members";
var USER_GROUP_UNASSIGN_ALL_MEMBERS_FAIL = "[UserGroup] Unassign Members Fail";
var USER_GROUP_UNASSIGN_ALL_MEMBERS_SUCCESS = "[UserGroup] Unassign Members Success";
var USER_GROUP_UNASSIGN_MEMBER = "[UserGroup] Unassign Member";
var USER_GROUP_UNASSIGN_MEMBER_FAIL = "[UserGroup] Unassign Member Fail";
var USER_GROUP_UNASSIGN_MEMBER_SUCCESS = "[UserGroup] Unassign Member Success";
var USER_GROUP_UNASSIGN_PERMISSION = "[UserGroup] Unassign Permission";
var USER_GROUP_UNASSIGN_PERMISSION_FAIL = "[UserGroup] Unassign Permission Fail";
var USER_GROUP_UNASSIGN_PERMISSION_SUCCESS = "[UserGroup] Unassign Permission Success";
var LoadUserGroup = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId);
    this.payload = payload;
    this.type = LOAD_USER_GROUP;
  }
};
var LoadUserGroupFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId, payload.error);
    this.payload = payload;
    this.type = LOAD_USER_GROUP_FAIL;
  }
};
var LoadUserGroupSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, Array.isArray(payload) ? payload.map((userGroup) => userGroup?.uid ?? "") : payload?.uid ?? "");
    this.payload = payload;
    this.type = LOAD_USER_GROUP_SUCCESS;
  }
};
var LoadUserGroups = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(USER_GROUP_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_USER_GROUPS;
  }
};
var LoadUserGroupsFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(USER_GROUP_LIST, utilsGroup.serializeSearchConfig(payload.params), payload.error);
    this.payload = payload;
    this.type = LOAD_USER_GROUPS_FAIL;
  }
};
var LoadUserGroupsSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(USER_GROUP_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_USER_GROUPS_SUCCESS;
  }
};
var LoadPermissions$1 = class LoadPermissions extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(USER_GROUP_PERMISSIONS, utilsGroup.serializeSearchConfig(payload.params, payload.userGroupId));
    this.payload = payload;
    this.type = LOAD_USER_GROUP_PERMISSIONS;
  }
};
var LoadPermissionsFail$1 = class LoadPermissionsFail extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(USER_GROUP_PERMISSIONS, utilsGroup.serializeSearchConfig(payload.params, payload.userGroupId), payload.error);
    this.payload = payload;
    this.type = LOAD_USER_GROUP_PERMISSIONS_FAIL;
  }
};
var LoadPermissionsSuccess$1 = class LoadPermissionsSuccess extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(USER_GROUP_PERMISSIONS, utilsGroup.serializeSearchConfig(payload.params, payload.userGroupId));
    this.payload = payload;
    this.type = LOAD_USER_GROUP_PERMISSIONS_SUCCESS;
  }
};
var LoadAvailableOrgCustomers = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(USER_GROUP_AVAILABLE_CUSTOMERS, utilsGroup.serializeSearchConfig(payload.params, payload.userGroupId));
    this.payload = payload;
    this.type = LOAD_USER_GROUP_AVAILABLE_CUSTOMERS;
  }
};
var LoadAvailableOrgCustomersFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(USER_GROUP_AVAILABLE_CUSTOMERS, utilsGroup.serializeSearchConfig(payload.params, payload.userGroupId), payload.error);
    this.payload = payload;
    this.type = LOAD_USER_GROUP_AVAILABLE_CUSTOMERS_FAIL;
  }
};
var LoadAvailableOrgCustomersSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(USER_GROUP_AVAILABLE_CUSTOMERS, utilsGroup.serializeSearchConfig(payload.params, payload.userGroupId));
    this.payload = payload;
    this.type = LOAD_USER_GROUP_AVAILABLE_CUSTOMERS_SUCCESS;
  }
};
var CreateUserGroup = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroup.uid ?? null);
    this.payload = payload;
    this.type = CREATE_USER_GROUP;
  }
};
var CreateUserGroupFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId, payload.error);
    this.payload = payload;
    this.type = CREATE_USER_GROUP_FAIL;
  }
};
var CreateUserGroupSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.uid ?? null, payload);
    this.payload = payload;
    this.type = CREATE_USER_GROUP_SUCCESS;
  }
};
var AssignMember = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.customerId);
    this.payload = payload;
    this.type = USER_GROUP_ASSIGN_MEMBER;
  }
};
var AssignMemberFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.customerId, payload.error);
    this.payload = payload;
    this.type = USER_GROUP_ASSIGN_MEMBER_FAIL;
  }
};
var AssignMemberSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.customerId, payload);
    this.payload = payload;
    this.type = USER_GROUP_ASSIGN_MEMBER_SUCCESS;
  }
};
var AssignPermission = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionUid);
    this.payload = payload;
    this.type = USER_GROUP_ASSIGN_PERMISSION;
  }
};
var AssignPermissionFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionUid, payload.error);
    this.payload = payload;
    this.type = USER_GROUP_ASSIGN_PERMISSION_FAIL;
  }
};
var AssignPermissionSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionUid, payload);
    this.payload = payload;
    this.type = USER_GROUP_ASSIGN_PERMISSION_SUCCESS;
  }
};
var UpdateUserGroup = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroup.uid ?? "");
    this.payload = payload;
    this.type = UPDATE_USER_GROUP;
  }
};
var UpdateUserGroupFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId, payload.error);
    this.payload = payload;
    this.type = UPDATE_USER_GROUP_FAIL;
  }
};
var UpdateUserGroupSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.uid ?? "", payload);
    this.payload = payload;
    this.type = UPDATE_USER_GROUP_SUCCESS;
  }
};
var DeleteUserGroup = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId);
    this.payload = payload;
    this.type = DELETE_USER_GROUP;
  }
};
var DeleteUserGroupFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId, payload.error);
    this.payload = payload;
    this.type = DELETE_USER_GROUP_FAIL;
  }
};
var DeleteUserGroupSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.uid ?? "", payload);
    this.payload = payload;
    this.type = DELETE_USER_GROUP_SUCCESS;
  }
};
var UnassignMember = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.customerId);
    this.payload = payload;
    this.type = USER_GROUP_UNASSIGN_MEMBER;
  }
};
var UnassignMemberFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.customerId, payload.error);
    this.payload = payload;
    this.type = USER_GROUP_UNASSIGN_MEMBER_FAIL;
  }
};
var UnassignMemberSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.customerId, payload);
    this.payload = payload;
    this.type = USER_GROUP_UNASSIGN_MEMBER_SUCCESS;
  }
};
var UnassignAllMembers = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId);
    this.payload = payload;
    this.type = USER_GROUP_UNASSIGN_ALL_MEMBERS;
  }
};
var UnassignAllMembersFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId, payload.error);
    this.payload = payload;
    this.type = USER_GROUP_UNASSIGN_ALL_MEMBERS_FAIL;
  }
};
var UnassignAllMembersSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.uid ?? "", payload);
    this.payload = payload;
    this.type = USER_GROUP_UNASSIGN_ALL_MEMBERS_SUCCESS;
  }
};
var UnassignPermission = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionUid);
    this.payload = payload;
    this.type = USER_GROUP_UNASSIGN_PERMISSION;
  }
};
var UnassignPermissionFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionUid, payload.error);
    this.payload = payload;
    this.type = USER_GROUP_UNASSIGN_PERMISSION_FAIL;
  }
};
var UnassignPermissionSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionUid, payload);
    this.payload = payload;
    this.type = USER_GROUP_UNASSIGN_PERMISSION_SUCCESS;
  }
};
var userGroup_action = Object.freeze({
  __proto__: null,
  AssignMember,
  AssignMemberFail,
  AssignMemberSuccess,
  AssignPermission,
  AssignPermissionFail,
  AssignPermissionSuccess,
  CREATE_USER_GROUP,
  CREATE_USER_GROUP_FAIL,
  CREATE_USER_GROUP_SUCCESS,
  CreateUserGroup,
  CreateUserGroupFail,
  CreateUserGroupSuccess,
  DELETE_USER_GROUP,
  DELETE_USER_GROUP_FAIL,
  DELETE_USER_GROUP_SUCCESS,
  DeleteUserGroup,
  DeleteUserGroupFail,
  DeleteUserGroupSuccess,
  LOAD_USER_GROUP,
  LOAD_USER_GROUPS,
  LOAD_USER_GROUPS_FAIL,
  LOAD_USER_GROUPS_SUCCESS,
  LOAD_USER_GROUP_AVAILABLE_CUSTOMERS,
  LOAD_USER_GROUP_AVAILABLE_CUSTOMERS_FAIL,
  LOAD_USER_GROUP_AVAILABLE_CUSTOMERS_SUCCESS,
  LOAD_USER_GROUP_FAIL,
  LOAD_USER_GROUP_PERMISSIONS,
  LOAD_USER_GROUP_PERMISSIONS_FAIL,
  LOAD_USER_GROUP_PERMISSIONS_SUCCESS,
  LOAD_USER_GROUP_SUCCESS,
  LoadAvailableOrgCustomers,
  LoadAvailableOrgCustomersFail,
  LoadAvailableOrgCustomersSuccess,
  LoadPermissions: LoadPermissions$1,
  LoadPermissionsFail: LoadPermissionsFail$1,
  LoadPermissionsSuccess: LoadPermissionsSuccess$1,
  LoadUserGroup,
  LoadUserGroupFail,
  LoadUserGroupSuccess,
  LoadUserGroups,
  LoadUserGroupsFail,
  LoadUserGroupsSuccess,
  UPDATE_USER_GROUP,
  UPDATE_USER_GROUP_FAIL,
  UPDATE_USER_GROUP_SUCCESS,
  USER_GROUP_ASSIGN_MEMBER,
  USER_GROUP_ASSIGN_MEMBER_FAIL,
  USER_GROUP_ASSIGN_MEMBER_SUCCESS,
  USER_GROUP_ASSIGN_PERMISSION,
  USER_GROUP_ASSIGN_PERMISSION_FAIL,
  USER_GROUP_ASSIGN_PERMISSION_SUCCESS,
  USER_GROUP_UNASSIGN_ALL_MEMBERS,
  USER_GROUP_UNASSIGN_ALL_MEMBERS_FAIL,
  USER_GROUP_UNASSIGN_ALL_MEMBERS_SUCCESS,
  USER_GROUP_UNASSIGN_MEMBER,
  USER_GROUP_UNASSIGN_MEMBER_FAIL,
  USER_GROUP_UNASSIGN_MEMBER_SUCCESS,
  USER_GROUP_UNASSIGN_PERMISSION,
  USER_GROUP_UNASSIGN_PERMISSION_FAIL,
  USER_GROUP_UNASSIGN_PERMISSION_SUCCESS,
  UnassignAllMembers,
  UnassignAllMembersFail,
  UnassignAllMembersSuccess,
  UnassignMember,
  UnassignMemberFail,
  UnassignMemberSuccess,
  UnassignPermission,
  UnassignPermissionFail,
  UnassignPermissionSuccess,
  UpdateUserGroup,
  UpdateUserGroupFail,
  UpdateUserGroupSuccess
});
var LOAD_PERMISSION = "[Permission] Load Permission Data";
var LOAD_PERMISSION_FAIL = "[Permission] Load Permission Data Fail";
var LOAD_PERMISSION_SUCCESS = "[Permission] Load Permission Data Success";
var LOAD_PERMISSIONS = "[Permission] Load Permissions";
var LOAD_PERMISSIONS_FAIL = "[Permission] Load Permissions Fail";
var LOAD_PERMISSIONS_SUCCESS = "[Permission] Load Permissions Success";
var CREATE_PERMISSION = "[Permission] Create Permission";
var CREATE_PERMISSION_FAIL = "[Permission] Create Permission Fail";
var CREATE_PERMISSION_SUCCESS = "[Permission] Create Permission Success";
var UPDATE_PERMISSION = "[Permission] Update Permission";
var UPDATE_PERMISSION_FAIL = "[Permission] Update Permission Fail";
var UPDATE_PERMISSION_SUCCESS = "[Permission] Update Permission Success";
var LOAD_PERMISSION_TYPES = "[Permission Types] Load Permission Types";
var LOAD_PERMISSION_TYPES_FAIL = "[Permission Types] Load Permission Types Fail";
var LOAD_PERMISSION_TYPES_SUCCESS = "[Permission Types] Load Permission Types Success";
var LoadPermission = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionCode);
    this.payload = payload;
    this.type = LOAD_PERMISSION;
  }
};
var LoadPermissionFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionCode, payload.error);
    this.payload = payload;
    this.type = LOAD_PERMISSION_FAIL;
  }
};
var LoadPermissionSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, Array.isArray(payload) ? payload.map((permission) => permission?.code ?? "") : payload?.code ?? "");
    this.payload = payload;
    this.type = LOAD_PERMISSION_SUCCESS;
  }
};
var LoadPermissions2 = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PERMISSION_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_PERMISSIONS;
  }
};
var LoadPermissionsFail2 = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PERMISSION_LIST, utilsGroup.serializeSearchConfig(payload.params), payload.error);
    this.payload = payload;
    this.type = LOAD_PERMISSIONS_FAIL;
  }
};
var LoadPermissionsSuccess2 = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PERMISSION_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_PERMISSIONS_SUCCESS;
  }
};
var CreatePermission = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permission.code ?? null);
    this.payload = payload;
    this.type = CREATE_PERMISSION;
  }
};
var CreatePermissionFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionCode, payload.error);
    this.payload = payload;
    this.type = CREATE_PERMISSION_FAIL;
  }
};
var CreatePermissionSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.code ?? null, payload);
    this.payload = payload;
    this.type = CREATE_PERMISSION_SUCCESS;
  }
};
var UpdatePermission = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permission.code ?? "");
    this.payload = payload;
    this.type = UPDATE_PERMISSION;
  }
};
var UpdatePermissionFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionCode, payload.error);
    this.payload = payload;
    this.type = UPDATE_PERMISSION_FAIL;
  }
};
var UpdatePermissionSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.code ?? "", payload);
    this.payload = payload;
    this.type = UPDATE_PERMISSION_SUCCESS;
  }
};
var LoadPermissionTypes = class extends utilsGroup.EntityLoadAction {
  constructor() {
    super(PERMISSION_TYPES_LIST, PERMISSION_TYPES);
    this.type = LOAD_PERMISSION_TYPES;
  }
};
var LoadPermissionTypesFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PERMISSION_TYPES_LIST, PERMISSION_TYPES, payload.error);
    this.payload = payload;
    this.type = LOAD_PERMISSION_TYPES_FAIL;
  }
};
var LoadPermissionTypesSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PERMISSION_TYPES_LIST, PERMISSION_TYPES);
    this.payload = payload;
    this.type = LOAD_PERMISSION_TYPES_SUCCESS;
  }
};
var permission_action = Object.freeze({
  __proto__: null,
  CREATE_PERMISSION,
  CREATE_PERMISSION_FAIL,
  CREATE_PERMISSION_SUCCESS,
  CreatePermission,
  CreatePermissionFail,
  CreatePermissionSuccess,
  LOAD_PERMISSION,
  LOAD_PERMISSIONS,
  LOAD_PERMISSIONS_FAIL,
  LOAD_PERMISSIONS_SUCCESS,
  LOAD_PERMISSION_FAIL,
  LOAD_PERMISSION_SUCCESS,
  LOAD_PERMISSION_TYPES,
  LOAD_PERMISSION_TYPES_FAIL,
  LOAD_PERMISSION_TYPES_SUCCESS,
  LoadPermission,
  LoadPermissionFail,
  LoadPermissionSuccess,
  LoadPermissionTypes,
  LoadPermissionTypesFail,
  LoadPermissionTypesSuccess,
  LoadPermissions: LoadPermissions2,
  LoadPermissionsFail: LoadPermissionsFail2,
  LoadPermissionsSuccess: LoadPermissionsSuccess2,
  UPDATE_PERMISSION,
  UPDATE_PERMISSION_FAIL,
  UPDATE_PERMISSION_SUCCESS,
  UpdatePermission,
  UpdatePermissionFail,
  UpdatePermissionSuccess
});
var LOAD_COST_CENTER = "[CostCenter] Load CostCenter Data";
var LOAD_COST_CENTER_FAIL = "[CostCenter] Load CostCenter Data Fail";
var LOAD_COST_CENTER_SUCCESS = "[CostCenter] Load CostCenter Data Success";
var LOAD_COST_CENTERS = "[CostCenter] Load CostCenters";
var LOAD_COST_CENTERS_FAIL = "[CostCenter] Load CostCenters Fail";
var LOAD_COST_CENTERS_SUCCESS = "[CostCenter] Load CostCenters Success";
var CREATE_COST_CENTER = "[CostCenter] Create CostCenter";
var CREATE_COST_CENTER_FAIL = "[CostCenter] Create CostCenter Fail";
var CREATE_COST_CENTER_SUCCESS = "[CostCenter] Create CostCenter Success";
var UPDATE_COST_CENTER = "[CostCenter] Update CostCenter";
var UPDATE_COST_CENTER_FAIL = "[CostCenter] Update CostCenter Fail";
var UPDATE_COST_CENTER_SUCCESS = "[CostCenter] Update CostCenter Success";
var LOAD_ASSIGNED_BUDGETS = "[CostCenter] Load Budgets";
var LOAD_ASSIGNED_BUDGETS_SUCCESS = "[CostCenter] Load Budgets success";
var LOAD_ASSIGNED_BUDGETS_FAIL = "[CostCenter] Load Budgets fail";
var ASSIGN_BUDGET = "[CostCenter] Assign Budget";
var ASSIGN_BUDGET_SUCCESS = "[CostCenter] Assign Budget success";
var ASSIGN_BUDGET_FAIL = "[CostCenter] Assign Budget fail";
var UNASSIGN_BUDGET = "[CostCenter] Unassign Budget";
var UNASSIGN_BUDGET_SUCCESS = "[CostCenter] Unassign Budget success";
var UNASSIGN_BUDGET_FAIL = "[CostCenter] Unassign Budget fail";
var LoadCostCenter = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(COST_CENTER_ENTITIES, payload.costCenterCode);
    this.payload = payload;
    this.type = LOAD_COST_CENTER;
  }
};
var LoadCostCenterFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(COST_CENTER_ENTITIES, payload.costCenterCode, payload.error);
    this.payload = payload;
    this.type = LOAD_COST_CENTER_FAIL;
  }
};
var LoadCostCenterSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(COST_CENTER_ENTITIES, Array.isArray(payload) ? payload.map((costCenter) => costCenter?.code ?? "") : payload?.code ?? "");
    this.payload = payload;
    this.type = LOAD_COST_CENTER_SUCCESS;
  }
};
var LoadCostCenters = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(COST_CENTER_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_COST_CENTERS;
  }
};
var LoadCostCentersFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(COST_CENTER_LIST, utilsGroup.serializeSearchConfig(payload.params), payload.error);
    this.payload = payload;
    this.type = LOAD_COST_CENTERS_FAIL;
  }
};
var LoadCostCentersSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(COST_CENTER_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_COST_CENTERS_SUCCESS;
  }
};
var CreateCostCenter = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(COST_CENTER_ENTITIES, payload.costCenter.code ?? null);
    this.payload = payload;
    this.type = CREATE_COST_CENTER;
  }
};
var CreateCostCenterFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(COST_CENTER_ENTITIES, payload.costCenterCode, payload.error);
    this.payload = payload;
    this.type = CREATE_COST_CENTER_FAIL;
  }
};
var CreateCostCenterSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(COST_CENTER_ENTITIES, payload.code ?? null, payload);
    this.payload = payload;
    this.type = CREATE_COST_CENTER_SUCCESS;
  }
};
var UpdateCostCenter = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(COST_CENTER_ENTITIES, payload.costCenter.code ?? "");
    this.payload = payload;
    this.type = UPDATE_COST_CENTER;
  }
};
var UpdateCostCenterFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(COST_CENTER_ENTITIES, payload.costCenterCode, payload.error);
    this.payload = payload;
    this.type = UPDATE_COST_CENTER_FAIL;
  }
};
var UpdateCostCenterSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(COST_CENTER_ENTITIES, payload.code ?? "", payload);
    this.payload = payload;
    this.type = UPDATE_COST_CENTER_SUCCESS;
  }
};
var LoadAssignedBudgets = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(COST_CENTER_ASSIGNED_BUDGETS, utilsGroup.serializeSearchConfig(payload.params, payload.costCenterCode));
    this.payload = payload;
    this.type = LOAD_ASSIGNED_BUDGETS;
  }
};
var LoadAssignedBudgetsFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(COST_CENTER_ASSIGNED_BUDGETS, utilsGroup.serializeSearchConfig(payload.params, payload.costCenterCode), payload.error);
    this.payload = payload;
    this.type = LOAD_ASSIGNED_BUDGETS_FAIL;
  }
};
var LoadAssignedBudgetsSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(COST_CENTER_ASSIGNED_BUDGETS, utilsGroup.serializeSearchConfig(payload.params, payload.costCenterCode));
    this.payload = payload;
    this.type = LOAD_ASSIGNED_BUDGETS_SUCCESS;
  }
};
var AssignBudget = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.budgetCode);
    this.payload = payload;
    this.type = ASSIGN_BUDGET;
  }
};
var AssignBudgetFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.budgetCode, payload.error);
    this.payload = payload;
    this.type = ASSIGN_BUDGET_FAIL;
  }
};
var AssignBudgetSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.code, payload);
    this.payload = payload;
    this.type = ASSIGN_BUDGET_SUCCESS;
  }
};
var UnassignBudget = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.budgetCode);
    this.payload = payload;
    this.type = UNASSIGN_BUDGET;
  }
};
var UnassignBudgetFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.budgetCode, payload.error);
    this.payload = payload;
    this.type = UNASSIGN_BUDGET_FAIL;
  }
};
var UnassignBudgetSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(BUDGET_ENTITIES, payload.code, payload);
    this.payload = payload;
    this.type = UNASSIGN_BUDGET_SUCCESS;
  }
};
var costCenter_action = Object.freeze({
  __proto__: null,
  ASSIGN_BUDGET,
  ASSIGN_BUDGET_FAIL,
  ASSIGN_BUDGET_SUCCESS,
  AssignBudget,
  AssignBudgetFail,
  AssignBudgetSuccess,
  CREATE_COST_CENTER,
  CREATE_COST_CENTER_FAIL,
  CREATE_COST_CENTER_SUCCESS,
  CreateCostCenter,
  CreateCostCenterFail,
  CreateCostCenterSuccess,
  LOAD_ASSIGNED_BUDGETS,
  LOAD_ASSIGNED_BUDGETS_FAIL,
  LOAD_ASSIGNED_BUDGETS_SUCCESS,
  LOAD_COST_CENTER,
  LOAD_COST_CENTERS,
  LOAD_COST_CENTERS_FAIL,
  LOAD_COST_CENTERS_SUCCESS,
  LOAD_COST_CENTER_FAIL,
  LOAD_COST_CENTER_SUCCESS,
  LoadAssignedBudgets,
  LoadAssignedBudgetsFail,
  LoadAssignedBudgetsSuccess,
  LoadCostCenter,
  LoadCostCenterFail,
  LoadCostCenterSuccess,
  LoadCostCenters,
  LoadCostCentersFail,
  LoadCostCentersSuccess,
  UNASSIGN_BUDGET,
  UNASSIGN_BUDGET_FAIL,
  UNASSIGN_BUDGET_SUCCESS,
  UPDATE_COST_CENTER,
  UPDATE_COST_CENTER_FAIL,
  UPDATE_COST_CENTER_SUCCESS,
  UnassignBudget,
  UnassignBudgetFail,
  UnassignBudgetSuccess,
  UpdateCostCenter,
  UpdateCostCenterFail,
  UpdateCostCenterSuccess
});
var LOAD_B2B_USER = "[B2BUser] Load B2BUser Data";
var LOAD_B2B_USER_FAIL = "[B2BUser] Load B2BUser Data Fail";
var LOAD_B2B_USER_SUCCESS = "[B2BUser] Load B2BUser Data Success";
var CREATE_B2B_USER = "[B2BUser] Create B2BUser Data";
var CREATE_B2B_USER_FAIL = "[B2BUser] Create B2BUser Data Fail";
var CREATE_B2B_USER_SUCCESS = "[B2BUser] Create B2BUser Data Success";
var UPDATE_B2B_USER = "[B2BUser] Update B2BUser Data";
var UPDATE_B2B_USER_FAIL = "[B2BUser] Update B2BUser Data Fail";
var UPDATE_B2B_USER_SUCCESS = "[B2BUser] Update B2BUser Data Success";
var LOAD_B2B_USERS = "[B2BUser] Load B2BUsers";
var LOAD_B2B_USERS_FAIL = "[B2BUser] Load B2BUsers Fail";
var LOAD_B2B_USERS_SUCCESS = "[B2BUser] Load B2BUsers Success";
var LOAD_B2B_USER_APPROVERS = "[B2BUser] Load B2BUser Approvers";
var LOAD_B2B_USER_APPROVERS_FAIL = "[B2BUser] Load B2BUser Approvers Fail";
var LOAD_B2B_USER_APPROVERS_SUCCESS = "[B2BUser] Load B2BUser Approvers Success";
var ASSIGN_B2B_USER_APPROVER = "[B2BUser] Assign B2BUser Approver";
var ASSIGN_B2B_USER_APPROVER_FAIL = "[B2BUser] Assign B2BUser Approver Fail";
var ASSIGN_B2B_USER_APPROVER_SUCCESS = "[B2BUser] Assign B2BUser Approver Success";
var UNASSIGN_B2B_USER_APPROVER = "[B2BUser] Unassign B2BUser Approver";
var UNASSIGN_B2B_USER_APPROVER_FAIL = "[B2BUser] Unassign B2BUser Approver Fail";
var UNASSIGN_B2B_USER_APPROVER_SUCCESS = "[B2BUser] Unassign B2BUser Approver Success";
var LOAD_B2B_USER_PERMISSIONS = "[B2BUser] Load B2BUser Permissions";
var LOAD_B2B_USER_PERMISSIONS_FAIL = "[B2BUser] Load B2BUser Permissions Fail";
var LOAD_B2B_USER_PERMISSIONS_SUCCESS = "[B2BUser] Load B2BUser Permissions Success";
var ASSIGN_B2B_USER_PERMISSION = "[B2BUser] Assign B2BUser Permission";
var ASSIGN_B2B_USER_PERMISSION_FAIL = "[B2BUser] Assign B2BUser Permission Fail";
var ASSIGN_B2B_USER_PERMISSION_SUCCESS = "[B2BUser] Assign B2BUser Permission Success";
var UNASSIGN_B2B_USER_PERMISSION = "[B2BUser] Unassign B2BUser Permission";
var UNASSIGN_B2B_USER_PERMISSION_FAIL = "[B2BUser] Unassign B2BUser Permission Fail";
var UNASSIGN_B2B_USER_PERMISSION_SUCCESS = "[B2BUser] Unassign B2BUser Permission Success";
var LOAD_B2B_USER_USER_GROUPS = "[B2BUser] Load B2BUser User Groups";
var LOAD_B2B_USER_USER_GROUPS_FAIL = "[B2BUser] Load B2BUser User Groups Fail";
var LOAD_B2B_USER_USER_GROUPS_SUCCESS = "[B2BUser] Load B2BUser User Groups Success";
var ASSIGN_B2B_USER_USER_GROUP = "[B2BUser] Assign B2BUser User Group";
var ASSIGN_B2B_USER_USER_GROUP_FAIL = "[B2BUser] Assign B2BUser User Group Fail";
var ASSIGN_B2B_USER_USER_GROUP_SUCCESS = "[B2BUser] Assign B2BUser User Group Success";
var UNASSIGN_B2B_USER_USER_GROUP = "[B2BUser] Unassign B2BUser User Group";
var UNASSIGN_B2B_USER_USER_GROUP_FAIL = "[B2BUser] Unassign B2BUser User Group Fail";
var UNASSIGN_B2B_USER_USER_GROUP_SUCCESS = "[B2BUser] Unassign B2BUser User Group Success";
var LoadB2BUser = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId);
    this.payload = payload;
    this.type = LOAD_B2B_USER;
  }
};
var LoadB2BUserFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId, payload.error);
    this.payload = payload;
    this.type = LOAD_B2B_USER_FAIL;
  }
};
var LoadB2BUserSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, Array.isArray(payload) ? payload.map((orgUnitCustomer) => orgUnitCustomer?.customerId ?? "") : payload?.customerId ?? "");
    this.payload = payload;
    this.type = LOAD_B2B_USER_SUCCESS;
  }
};
var CreateB2BUser = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomer.customerId ?? null);
    this.payload = payload;
    this.type = CREATE_B2B_USER;
  }
};
var CreateB2BUserFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId, payload.error);
    this.payload = payload;
    this.type = CREATE_B2B_USER_FAIL;
  }
};
var CreateB2BUserSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.customerId ?? null, payload);
    this.payload = payload;
    this.type = CREATE_B2B_USER_SUCCESS;
  }
};
var UpdateB2BUser = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomer.customerId ?? "");
    this.payload = payload;
    this.type = UPDATE_B2B_USER;
  }
};
var UpdateB2BUserFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.orgCustomerId, payload.error);
    this.payload = payload;
    this.type = UPDATE_B2B_USER_FAIL;
  }
};
var UpdateB2BUserSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.customerId ?? "", payload);
    this.payload = payload;
    this.type = UPDATE_B2B_USER_SUCCESS;
  }
};
var LoadB2BUsers = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(USER_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_B2B_USERS;
  }
};
var LoadB2BUsersFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(USER_LIST, utilsGroup.serializeSearchConfig(payload.params), payload.error);
    this.payload = payload;
    this.type = LOAD_B2B_USERS_FAIL;
  }
};
var LoadB2BUsersSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(USER_LIST, utilsGroup.serializeSearchConfig(payload.params));
    this.payload = payload;
    this.type = LOAD_B2B_USERS_SUCCESS;
  }
};
var LoadB2BUserApprovers = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_APPROVERS, utilsGroup.serializeSearchConfig(payload.params, payload.orgCustomerId));
    this.payload = payload;
    this.type = LOAD_B2B_USER_APPROVERS;
  }
};
var LoadB2BUserApproversFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_APPROVERS, utilsGroup.serializeSearchConfig(payload.params, payload.orgCustomerId), payload.error);
    this.payload = payload;
    this.type = LOAD_B2B_USER_APPROVERS_FAIL;
  }
};
var LoadB2BUserApproversSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_APPROVERS, utilsGroup.serializeSearchConfig(payload.params, payload.orgCustomerId));
    this.payload = payload;
    this.type = LOAD_B2B_USER_APPROVERS_SUCCESS;
  }
};
var AssignB2BUserApprover = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.approverId);
    this.payload = payload;
    this.type = ASSIGN_B2B_USER_APPROVER;
  }
};
var AssignB2BUserApproverFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.approverId, payload.error);
    this.payload = payload;
    this.type = ASSIGN_B2B_USER_APPROVER_FAIL;
  }
};
var AssignB2BUserApproverSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.approverId, payload);
    this.payload = payload;
    this.type = ASSIGN_B2B_USER_APPROVER_SUCCESS;
  }
};
var UnassignB2BUserApprover = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.approverId);
    this.payload = payload;
    this.type = UNASSIGN_B2B_USER_APPROVER;
  }
};
var UnassignB2BUserApproverFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.approverId, payload.error);
    this.payload = payload;
    this.type = UNASSIGN_B2B_USER_APPROVER_FAIL;
  }
};
var UnassignB2BUserApproverSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_ENTITIES, payload.approverId, payload);
    this.payload = payload;
    this.type = UNASSIGN_B2B_USER_APPROVER_SUCCESS;
  }
};
var LoadB2BUserPermissions = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_PERMISSIONS, utilsGroup.serializeSearchConfig(payload.params, payload.orgCustomerId));
    this.payload = payload;
    this.type = LOAD_B2B_USER_PERMISSIONS;
  }
};
var LoadB2BUserPermissionsFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_PERMISSIONS, payload.orgCustomerId, payload.error);
    this.payload = payload;
    this.type = LOAD_B2B_USER_PERMISSIONS_FAIL;
  }
};
var LoadB2BUserPermissionsSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_PERMISSIONS, utilsGroup.serializeSearchConfig(payload.params, payload.orgCustomerId));
    this.payload = payload;
    this.type = LOAD_B2B_USER_PERMISSIONS_SUCCESS;
  }
};
var AssignB2BUserPermission = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionId);
    this.payload = payload;
    this.type = ASSIGN_B2B_USER_PERMISSION;
  }
};
var AssignB2BUserPermissionFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionId, payload.error);
    this.payload = payload;
    this.type = ASSIGN_B2B_USER_PERMISSION_FAIL;
  }
};
var AssignB2BUserPermissionSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionId, payload);
    this.payload = payload;
    this.type = ASSIGN_B2B_USER_PERMISSION_SUCCESS;
  }
};
var UnassignB2BUserPermission = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionId);
    this.payload = payload;
    this.type = UNASSIGN_B2B_USER_PERMISSION;
  }
};
var UnassignB2BUserPermissionFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionId, payload.error);
    this.payload = payload;
    this.type = UNASSIGN_B2B_USER_PERMISSION_FAIL;
  }
};
var UnassignB2BUserPermissionSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PERMISSION_ENTITIES, payload.permissionId, payload);
    this.payload = payload;
    this.type = UNASSIGN_B2B_USER_PERMISSION_SUCCESS;
  }
};
var LoadB2BUserUserGroups = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(B2B_USER_USER_GROUPS, utilsGroup.serializeSearchConfig(payload.params, payload.orgCustomerId));
    this.payload = payload;
    this.type = LOAD_B2B_USER_USER_GROUPS;
  }
};
var LoadB2BUserUserGroupsFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(B2B_USER_USER_GROUPS, utilsGroup.serializeSearchConfig(payload.params, payload.orgCustomerId), payload.error);
    this.payload = payload;
    this.type = LOAD_B2B_USER_USER_GROUPS_FAIL;
  }
};
var LoadB2BUserUserGroupsSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(B2B_USER_USER_GROUPS, utilsGroup.serializeSearchConfig(payload.params, payload.orgCustomerId));
    this.payload = payload;
    this.type = LOAD_B2B_USER_USER_GROUPS_SUCCESS;
  }
};
var AssignB2BUserUserGroup = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId);
    this.payload = payload;
    this.type = ASSIGN_B2B_USER_USER_GROUP;
  }
};
var AssignB2BUserUserGroupFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId, payload.error);
    this.payload = payload;
    this.type = ASSIGN_B2B_USER_USER_GROUP_FAIL;
  }
};
var AssignB2BUserUserGroupSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.uid, payload);
    this.payload = payload;
    this.type = ASSIGN_B2B_USER_USER_GROUP_SUCCESS;
  }
};
var UnassignB2BUserUserGroup = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId);
    this.payload = payload;
    this.type = UNASSIGN_B2B_USER_USER_GROUP;
  }
};
var UnassignB2BUserUserGroupFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.userGroupId, payload.error);
    this.payload = payload;
    this.type = UNASSIGN_B2B_USER_USER_GROUP_FAIL;
  }
};
var UnassignB2BUserUserGroupSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(USER_GROUP_ENTITIES, payload.uid, payload);
    this.payload = payload;
    this.type = UNASSIGN_B2B_USER_USER_GROUP_SUCCESS;
  }
};
var b2bUser_action = Object.freeze({
  __proto__: null,
  ASSIGN_B2B_USER_APPROVER,
  ASSIGN_B2B_USER_APPROVER_FAIL,
  ASSIGN_B2B_USER_APPROVER_SUCCESS,
  ASSIGN_B2B_USER_PERMISSION,
  ASSIGN_B2B_USER_PERMISSION_FAIL,
  ASSIGN_B2B_USER_PERMISSION_SUCCESS,
  ASSIGN_B2B_USER_USER_GROUP,
  ASSIGN_B2B_USER_USER_GROUP_FAIL,
  ASSIGN_B2B_USER_USER_GROUP_SUCCESS,
  AssignB2BUserApprover,
  AssignB2BUserApproverFail,
  AssignB2BUserApproverSuccess,
  AssignB2BUserPermission,
  AssignB2BUserPermissionFail,
  AssignB2BUserPermissionSuccess,
  AssignB2BUserUserGroup,
  AssignB2BUserUserGroupFail,
  AssignB2BUserUserGroupSuccess,
  CREATE_B2B_USER,
  CREATE_B2B_USER_FAIL,
  CREATE_B2B_USER_SUCCESS,
  CreateB2BUser,
  CreateB2BUserFail,
  CreateB2BUserSuccess,
  LOAD_B2B_USER,
  LOAD_B2B_USERS,
  LOAD_B2B_USERS_FAIL,
  LOAD_B2B_USERS_SUCCESS,
  LOAD_B2B_USER_APPROVERS,
  LOAD_B2B_USER_APPROVERS_FAIL,
  LOAD_B2B_USER_APPROVERS_SUCCESS,
  LOAD_B2B_USER_FAIL,
  LOAD_B2B_USER_PERMISSIONS,
  LOAD_B2B_USER_PERMISSIONS_FAIL,
  LOAD_B2B_USER_PERMISSIONS_SUCCESS,
  LOAD_B2B_USER_SUCCESS,
  LOAD_B2B_USER_USER_GROUPS,
  LOAD_B2B_USER_USER_GROUPS_FAIL,
  LOAD_B2B_USER_USER_GROUPS_SUCCESS,
  LoadB2BUser,
  LoadB2BUserApprovers,
  LoadB2BUserApproversFail,
  LoadB2BUserApproversSuccess,
  LoadB2BUserFail,
  LoadB2BUserPermissions,
  LoadB2BUserPermissionsFail,
  LoadB2BUserPermissionsSuccess,
  LoadB2BUserSuccess,
  LoadB2BUserUserGroups,
  LoadB2BUserUserGroupsFail,
  LoadB2BUserUserGroupsSuccess,
  LoadB2BUsers,
  LoadB2BUsersFail,
  LoadB2BUsersSuccess,
  UNASSIGN_B2B_USER_APPROVER,
  UNASSIGN_B2B_USER_APPROVER_FAIL,
  UNASSIGN_B2B_USER_APPROVER_SUCCESS,
  UNASSIGN_B2B_USER_PERMISSION,
  UNASSIGN_B2B_USER_PERMISSION_FAIL,
  UNASSIGN_B2B_USER_PERMISSION_SUCCESS,
  UNASSIGN_B2B_USER_USER_GROUP,
  UNASSIGN_B2B_USER_USER_GROUP_FAIL,
  UNASSIGN_B2B_USER_USER_GROUP_SUCCESS,
  UPDATE_B2B_USER,
  UPDATE_B2B_USER_FAIL,
  UPDATE_B2B_USER_SUCCESS,
  UnassignB2BUserApprover,
  UnassignB2BUserApproverFail,
  UnassignB2BUserApproverSuccess,
  UnassignB2BUserPermission,
  UnassignB2BUserPermissionFail,
  UnassignB2BUserPermissionSuccess,
  UnassignB2BUserUserGroup,
  UnassignB2BUserUserGroupFail,
  UnassignB2BUserUserGroupSuccess,
  UpdateB2BUser,
  UpdateB2BUserFail,
  UpdateB2BUserSuccess
});
var CLEAR_ORGANIZATION_DATA = "[Organization] Clear Data";
var OrganizationClearData = class {
  constructor() {
    this.type = CLEAR_ORGANIZATION_DATA;
  }
};
var organization_action = Object.freeze({
  __proto__: null,
  CLEAR_ORGANIZATION_DATA,
  OrganizationClearData
});
var getOrganizationState = createFeatureSelector(ORGANIZATION_FEATURE);
var getPermissionManagementState = createSelector(getOrganizationState, (state) => state[PERMISSION_FEATURE]);
var getPermissionsState = createSelector(getPermissionManagementState, (state) => state && state.entities);
var getPermissionState = (permissionId) => createSelector(getPermissionsState, (state) => utilsGroup.entityLoaderStateSelector(state, permissionId));
var getPermissionTypesState = createSelector(getPermissionManagementState, (state) => state && state.permissionTypes);
var getPermission = (permissionCode) => createSelector(getPermissionsState, (state) => utilsGroup.entityLoaderStateSelector(state, permissionCode));
var getPermissionValue = (permissionCode) => {
  return createSelector(getPermission(permissionCode), (permissionState) => utilsGroup.loaderValueSelector(permissionState));
};
var getPermissionList = (params) => createSelector(getPermissionManagementState, (state) => utilsGroup.denormalizeSearch(state, params));
var getPermissionTypes = () => createSelector(getPermissionTypesState, (state) => utilsGroup.entityLoaderStateSelector(state, PERMISSION_TYPES));
var permission_selector = Object.freeze({
  __proto__: null,
  getPermission,
  getPermissionList,
  getPermissionManagementState,
  getPermissionState,
  getPermissionTypes,
  getPermissionTypesState,
  getPermissionValue,
  getPermissionsState
});
var getB2BUserManagementState = createSelector(getOrganizationState, (state) => state[B2B_USER_FEATURE]);
var getB2BUsersState = createSelector(getB2BUserManagementState, (state) => state && state.entities);
var getB2BUserState = (orgCustomerId) => createSelector(getB2BUsersState, (state) => utilsGroup.entityLoaderStateSelector(state, orgCustomerId));
var getB2BUserValue = (orgCustomerId) => {
  return createSelector(getB2BUserState(orgCustomerId), (b2BUserState) => utilsGroup.loaderValueSelector(b2BUserState));
};
var getUserList = (params) => createSelector(getB2BUserManagementState, (state) => utilsGroup.denormalizeSearch(state, params));
var getB2BUserApprovers = (code, params) => createSelector(getB2BUserManagementState, getB2BUsersState, (state, approvers) => utilsGroup.denormalizeCustomB2BSearch(state.approvers, approvers, params, code));
var getB2BUserPermissions = (code, params) => createSelector(getB2BUserManagementState, getPermissionsState, (state, permissions) => utilsGroup.denormalizeCustomB2BSearch(state.permissions, permissions, params, code));
var getUserGroupsState$1 = createSelector(getOrganizationState, (state) => state[USER_GROUP_FEATURE].entities);
var getB2BUserUserGroups = (code, params) => createSelector(getB2BUserManagementState, getUserGroupsState$1, (state, userGroups) => utilsGroup.denormalizeCustomB2BSearch(state.userGroups, userGroups, params, code));
var b2bUser_selector = Object.freeze({
  __proto__: null,
  getB2BUserApprovers,
  getB2BUserManagementState,
  getB2BUserPermissions,
  getB2BUserState,
  getB2BUserUserGroups,
  getB2BUserValue,
  getB2BUsersState,
  getUserList
});
var LoadStatus;
(function(LoadStatus2) {
  LoadStatus2[LoadStatus2["SUCCESS"] = 0] = "SUCCESS";
  LoadStatus2[LoadStatus2["ERROR"] = 1] = "ERROR";
})(LoadStatus || (LoadStatus = {}));
function getItemStatus(itemState) {
  return itemState.pipe(observeOn(queueScheduler), pairwise(), filter(([previousState]) => previousState.loading ?? false), map(([_previousState, currentState]) => ({
    status: currentState.success ? LoadStatus.SUCCESS : currentState.error ? LoadStatus.ERROR : null,
    item: currentState.value
  })));
}
var B2BUserService = class _B2BUserService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  load(orgCustomerId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadB2BUser({
        userId,
        orgCustomerId
      })),
      error: () => {
      }
    });
  }
  loadList(params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadB2BUsers({
        userId,
        params
      })),
      error: () => {
      }
    });
  }
  getB2BUserValue(orgCustomerId) {
    return this.store.select(getB2BUserValue(orgCustomerId)).pipe(filter((b2bUser) => Boolean(b2bUser)));
  }
  get(orgCustomerId) {
    const loading$ = this.getB2BUserState(orgCustomerId).pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.load(orgCustomerId);
      }
    }));
    return using(() => loading$.subscribe(), () => this.getB2BUserValue(orgCustomerId));
  }
  getList(params) {
    return this.getUserList(params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadList(params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  getErrorState(orgCustomerId) {
    return this.getB2BUserState(orgCustomerId).pipe(map((state) => state.error ?? false));
  }
  create(orgCustomer) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new CreateB2BUser({
        userId,
        orgCustomer
      })),
      error: () => {
      }
    });
  }
  update(orgCustomerId, orgCustomer) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UpdateB2BUser({
        userId,
        orgCustomerId,
        orgCustomer
      })),
      error: () => {
      }
    });
  }
  getLoadingStatus(orgCustomerId) {
    return getItemStatus(this.getB2BUserState(orgCustomerId));
  }
  loadApprovers(orgCustomerId, params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadB2BUserApprovers({
        userId,
        orgCustomerId,
        params
      })),
      error: () => {
      }
    });
  }
  getApprovers(orgCustomerId, params) {
    return this.getB2BUserApproverList(orgCustomerId, params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadApprovers(orgCustomerId, params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  assignApprover(orgCustomerId, approverId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new AssignB2BUserApprover({
        userId,
        orgCustomerId,
        approverId
      })),
      error: () => {
      }
    });
  }
  unassignApprover(orgCustomerId, approverId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UnassignB2BUserApprover({
        userId,
        orgCustomerId,
        approverId
      })),
      error: () => {
      }
    });
  }
  loadPermissions(orgCustomerId, params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadB2BUserPermissions({
        userId,
        orgCustomerId,
        params
      })),
      error: () => {
      }
    });
  }
  getPermissions(orgCustomerId, params) {
    return this.getB2BUserPermissionList(orgCustomerId, params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadPermissions(orgCustomerId, params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  assignPermission(orgCustomerId, permissionId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new AssignB2BUserPermission({
        userId,
        orgCustomerId,
        permissionId
      })),
      error: () => {
      }
    });
  }
  unassignPermission(orgCustomerId, permissionId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UnassignB2BUserPermission({
        userId,
        orgCustomerId,
        permissionId
      })),
      error: () => {
      }
    });
  }
  loadUserGroups(orgCustomerId, params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadB2BUserUserGroups({
        userId,
        orgCustomerId,
        params
      })),
      error: () => {
      }
    });
  }
  getUserGroups(orgCustomerId, params) {
    return this.getB2BUserUserGroupList(orgCustomerId, params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadUserGroups(orgCustomerId, params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  assignUserGroup(orgCustomerId, userGroupId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new AssignB2BUserUserGroup({
        userId,
        orgCustomerId,
        userGroupId
      })),
      error: () => {
      }
    });
  }
  unassignUserGroup(orgCustomerId, userGroupId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UnassignB2BUserUserGroup({
        userId,
        orgCustomerId,
        userGroupId
      })),
      error: () => {
      }
    });
  }
  /**
   * Get list of all roles for B2BUser sorted by increasing privileges.
   *
   * This list is not driven by the backend (lack of API), but reflects roles
   * from the backend: `b2badmingroup`, `b2bcustomergroup`, `b2bmanagergroup` and `b2bapprovergroup`.
   *
   * If you reconfigure those roles in the backend or extend the list, you should change
   * this implementation accordingly.
   */
  getAllRoles() {
    return [B2BUserRole.CUSTOMER, B2BUserRole.MANAGER, B2BUserRole.APPROVER, B2BUserRole.ADMIN];
  }
  /**
   * Get list of all rights for B2BUser.
   *
   * This list is not driven by the backend (lack of API), but reflects rights
   * from the backend: `unitorderviewer'.
   *
   * If you reconfigure those rights in the backend or extend the list, you should change
   * this implementation accordingly.
   */
  getAllRights() {
    return [B2BUserRight.UNITORDERVIEWER];
  }
  getB2BUserApproverList(orgCustomerId, params) {
    return this.store.select(getB2BUserApprovers(orgCustomerId, params));
  }
  getB2BUserPermissionList(orgCustomerId, params) {
    return this.store.select(getB2BUserPermissions(orgCustomerId, params));
  }
  getB2BUserUserGroupList(orgCustomerId, params) {
    return this.store.select(getB2BUserUserGroups(orgCustomerId, params));
  }
  getB2BUserState(orgCustomerId) {
    return this.store.select(getB2BUserState(orgCustomerId));
  }
  getUserList(params) {
    return this.store.select(getUserList(params));
  }
  isUpdatingUserAllowed() {
    return true;
  }
  static {
    this.ɵfac = function B2BUserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _B2BUserService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _B2BUserService,
      factory: _B2BUserService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(B2BUserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var BudgetEffects = class _BudgetEffects {
  constructor(actions$, budgetConnector) {
    this.actions$ = actions$;
    this.budgetConnector = budgetConnector;
    this.logger = inject(LoggerService);
    this.loadBudget$ = createEffect(() => this.actions$.pipe(ofType(LOAD_BUDGET), map((action) => action.payload), switchMap(({
      userId,
      budgetCode
    }) => {
      return this.budgetConnector.get(userId, budgetCode).pipe(map((budget) => {
        return new LoadBudgetSuccess([budget]);
      }), catchError((error) => of(new LoadBudgetFail({
        budgetCode,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.loadBudgets$ = createEffect(() => this.actions$.pipe(ofType(LOAD_BUDGETS), map((action) => action.payload), switchMap((payload) => this.budgetConnector.getList(payload.userId, payload.params).pipe(switchMap((budgets) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(budgets, "code");
      return [new LoadBudgetSuccess(values), new LoadBudgetsSuccess({
        page,
        params: payload.params
      })];
    }), catchError((error) => of(new LoadBudgetsFail({
      params: payload.params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
    this.createBudget$ = createEffect(() => this.actions$.pipe(ofType(CREATE_BUDGET), map((action) => action.payload), switchMap((payload) => this.budgetConnector.create(payload.userId, payload.budget).pipe(switchMap((data) => [new CreateBudgetSuccess(data), new OrganizationClearData()]), catchError((error) => from([new CreateBudgetFail({
      budgetCode: payload.budget.code ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.updateBudget$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_BUDGET), map((action) => action.payload), switchMap((payload) => this.budgetConnector.update(payload.userId, payload.budgetCode, payload.budget).pipe(switchMap((data) => [new UpdateBudgetSuccess(data), new OrganizationClearData()]), catchError((error) => from([new UpdateBudgetFail({
      budgetCode: payload.budget.code ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
  }
  static {
    this.ɵfac = function BudgetEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetEffects)(ɵɵinject(Actions), ɵɵinject(BudgetConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BudgetEffects,
      factory: _BudgetEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: BudgetConnector
  }], null);
})();
var OrgUnitEffects = class _OrgUnitEffects {
  constructor(actions$, orgUnitConnector) {
    this.actions$ = actions$;
    this.orgUnitConnector = orgUnitConnector;
    this.logger = inject(LoggerService);
    this.featureConfigService = inject(FeatureConfigService, {
      optional: true
    });
    this.loadOrgUnit$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ORG_UNIT), map((action) => action.payload), switchMap(({
      userId,
      orgUnitId
    }) => {
      return this.orgUnitConnector.get(userId, orgUnitId).pipe(switchMap((orgUnit) => {
        const {
          values,
          page
        } = utilsGroup.normalizeListPage({
          values: orgUnit.addresses ?? []
        }, "id");
        return [new LoadOrgUnitSuccess([orgUnit]), new LoadAddressSuccess(values), new LoadAddressesSuccess({
          page,
          orgUnitId
        })];
      }), catchError((error) => of(new LoadOrgUnitFail({
        orgUnitId,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.loadAvailableOrgUnits$ = createEffect(() => this.actions$.pipe(ofType(LOAD_UNIT_NODES), map((action) => action.payload), switchMap((payload) => this.orgUnitConnector.getList(payload.userId).pipe(map((orgUnitsList) => new LoadOrgUnitNodesSuccess(orgUnitsList)), catchError((error) => of(new LoadOrgUnitNodesFail({
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
    this.createUnit$ = createEffect(() => this.actions$.pipe(ofType(CREATE_ORG_UNIT), map((action) => action.payload), switchMap((payload) => this.orgUnitConnector.create(payload.userId, payload.unit).pipe(switchMap((data) => [new CreateUnitSuccess(data), new OrganizationClearData()]), catchError((error) => from([new CreateUnitFail({
      unitCode: payload.unit.uid ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.updateUnit$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_ORG_UNIT), map((action) => action.payload), switchMap((payload) => this.orgUnitConnector.update(payload.userId, payload.unitCode, payload.unit).pipe(switchMap((_data) => [
      // Workaround for empty response
      new UpdateUnitSuccess(payload.unit),
      new OrganizationClearData()
    ]), catchError((error) => from([new UpdateUnitFail({
      unitCode: payload.unit.uid ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.loadTree$ = createEffect(() => this.actions$.pipe(ofType(LOAD_UNIT_TREE), map((action) => action.payload), switchMap(({
      userId
    }) => {
      return this.orgUnitConnector.getTree(userId).pipe(map((orgUnit) => new LoadTreeSuccess(orgUnit)), catchError((error) => of(new LoadTreeFail({
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.loadApprovalProcesses$ = createEffect(() => this.actions$.pipe(ofType(LOAD_APPROVAL_PROCESSES), map((action) => action.payload), switchMap(({
      userId
    }) => {
      return this.orgUnitConnector.getApprovalProcesses(userId).pipe(map((approvalProcesses) => new LoadApprovalProcessesSuccess(approvalProcesses)), catchError((error) => of(new LoadApprovalProcessesFail({
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.loadUsers$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ASSIGNED_USERS), map((action) => action.payload), groupBy(({
      orgUnitId,
      roleId,
      params
    }) => utilsGroup.serializeParams([orgUnitId, roleId], params)), mergeMap((group) => group.pipe(switchMap(({
      userId,
      orgUnitId,
      roleId,
      params
    }) => {
      return this.orgUnitConnector.getUsers(userId, orgUnitId, roleId, params).pipe(switchMap((users) => {
        const {
          values,
          page
        } = utilsGroup.normalizeListPage(users, "customerId");
        return [new LoadB2BUserSuccess(values), new LoadAssignedUsersSuccess({
          orgUnitId,
          roleId,
          page,
          params
        })];
      }), catchError((error) => of(new LoadAssignedUsersFail({
        orgUnitId,
        roleId,
        params,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })))));
    this.assignRoleToUser = createEffect(() => this.actions$.pipe(ofType(ASSIGN_ROLE), map((action) => action.payload), switchMap(({
      userId,
      orgCustomerId,
      roleId
    }) => this.orgUnitConnector.assignRole(userId, orgCustomerId, roleId).pipe(map(() => new AssignRoleSuccess({
      uid: orgCustomerId,
      roleId,
      selected: true
    })), catchError((error) => of(new AssignRoleFail({
      orgCustomerId,
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
    this.unassignRoleToUser$ = createEffect(() => this.actions$.pipe(ofType(UNASSIGN_ROLE), map((action) => action.payload), switchMap(({
      userId,
      orgCustomerId,
      roleId
    }) => this.orgUnitConnector.unassignRole(userId, orgCustomerId, roleId).pipe(map(() => new UnassignRoleSuccess({
      uid: orgCustomerId,
      roleId,
      selected: false
    })), catchError((error) => of(new UnassignRoleFail({
      orgCustomerId,
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
    this.assignApprover = createEffect(() => this.actions$.pipe(ofType(ASSIGN_APPROVER), map((action) => action.payload), mergeMap(({
      userId,
      orgUnitId,
      orgCustomerId,
      roleId
    }) => this.orgUnitConnector.assignApprover(userId, orgUnitId, orgCustomerId, roleId).pipe(switchMap(() => [new AssignApproverSuccess({
      uid: orgCustomerId,
      roleId,
      selected: true
    }), new OrganizationClearData()]), catchError((error) => from([new AssignApproverFail({
      orgCustomerId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.unassignApprover = createEffect(() => this.actions$.pipe(ofType(UNASSIGN_APPROVER), map((action) => action.payload), mergeMap(({
      userId,
      orgUnitId,
      orgCustomerId,
      roleId
    }) => this.orgUnitConnector.unassignApprover(userId, orgUnitId, orgCustomerId, roleId).pipe(switchMap(() => [new UnassignApproverSuccess({
      uid: orgCustomerId,
      roleId,
      selected: false
    }), new OrganizationClearData()]), catchError((error) => from([new UnassignApproverFail({
      orgCustomerId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.createAddress$ = createEffect(() => this.actions$.pipe(ofType(CREATE_ADDRESS), map((action) => action.payload), switchMap((payload) => this.orgUnitConnector.createAddress(payload.userId, payload.orgUnitId, payload.address).pipe(switchMap((data) => [new CreateAddressSuccess(data), new CreateAddressSuccess(
      // TODO (CXSPA-5630): Remove feature flag in next major.
      this.featureConfigService?.isEnabled("fixMyCompanyUnitAddressCreation") ? {
        id: payload.address.id
      } : {
        id: void 0
      }
    ), new OrganizationClearData()]), catchError((error) => from([new CreateAddressFail({
      addressId: payload.address.id ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.updateAddress$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_ADDRESS), map((action) => action.payload), switchMap(({
      userId,
      orgUnitId,
      addressId,
      address
    }) => this.orgUnitConnector.updateAddress(userId, orgUnitId, addressId, address).pipe(switchMap(() => [
      // commented out due to no response from backend on PATCH request
      // new OrgUnitActions.UpdateAddressSuccess(data),
      new UpdateAddressSuccess(address),
      new OrganizationClearData()
    ]), catchError((error) => from([new UpdateAddressFail({
      addressId: address.id ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.deleteAddress$ = createEffect(() => this.actions$.pipe(ofType(DELETE_ADDRESS), map((action) => action.payload), switchMap((payload) => this.orgUnitConnector.deleteAddress(payload.userId, payload.orgUnitId, payload.addressId).pipe(switchMap(() => [new DeleteAddressSuccess({
      id: payload.addressId
    }), new OrganizationClearData()]), catchError((error) => from([new DeleteAddressFail({
      addressId: payload.addressId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
  }
  static {
    this.ɵfac = function OrgUnitEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrgUnitEffects)(ɵɵinject(Actions), ɵɵinject(OrgUnitConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrgUnitEffects,
      factory: _OrgUnitEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrgUnitEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: OrgUnitConnector
  }], null);
})();
var PermissionEffects = class _PermissionEffects {
  constructor(actions$, permissionConnector) {
    this.actions$ = actions$;
    this.permissionConnector = permissionConnector;
    this.logger = inject(LoggerService);
    this.loadPermission$ = createEffect(() => this.actions$.pipe(ofType(LOAD_PERMISSION), map((action) => action.payload), switchMap(({
      userId,
      permissionCode
    }) => {
      return this.permissionConnector.get(userId, permissionCode).pipe(map((permission) => {
        return new LoadPermissionSuccess([permission]);
      }), catchError((error) => of(new LoadPermissionFail({
        permissionCode,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.loadPermissions$ = createEffect(() => this.actions$.pipe(ofType(LOAD_PERMISSIONS), map((action) => action.payload), switchMap((payload) => this.permissionConnector.getList(payload.userId, payload.params).pipe(switchMap((permissions) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(permissions, "code");
      return [new LoadPermissionSuccess(values), new LoadPermissionsSuccess2({
        page,
        params: payload.params
      })];
    }), catchError((error) => of(new LoadPermissionsFail2({
      params: payload.params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
    this.createPermission$ = createEffect(() => this.actions$.pipe(ofType(CREATE_PERMISSION), map((action) => action.payload), switchMap((payload) => this.permissionConnector.create(payload.userId, payload.permission).pipe(switchMap((data) => [new CreatePermissionSuccess(data), new OrganizationClearData()]), catchError((error) => from([new CreatePermissionFail({
      permissionCode: payload.permission.code ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.updatePermission$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_PERMISSION), map((action) => action.payload), switchMap((payload) => this.permissionConnector.update(payload.userId, payload.permissionCode, payload.permission).pipe(switchMap((data) => [new UpdatePermissionSuccess(data), new OrganizationClearData()]), catchError((error) => from([new UpdatePermissionFail({
      permissionCode: payload.permission.code ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.loadPermissionTypes$ = createEffect(() => this.actions$.pipe(ofType(LOAD_PERMISSION_TYPES), switchMap(() => this.permissionConnector.getTypes().pipe(map((permissionTypeList) => new LoadPermissionTypesSuccess(permissionTypeList)), catchError((error) => of(new LoadPermissionTypesFail({
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
  }
  static {
    this.ɵfac = function PermissionEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionEffects)(ɵɵinject(Actions), ɵɵinject(PermissionConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PermissionEffects,
      factory: _PermissionEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: PermissionConnector
  }], null);
})();
var CostCenterEffects = class _CostCenterEffects {
  constructor(actions$, costCenterConnector) {
    this.actions$ = actions$;
    this.costCenterConnector = costCenterConnector;
    this.logger = inject(LoggerService);
    this.loadCostCenter$ = createEffect(() => this.actions$.pipe(ofType(LOAD_COST_CENTER), map((action) => action.payload), switchMap(({
      userId,
      costCenterCode
    }) => {
      return this.costCenterConnector.get(userId, costCenterCode).pipe(map((costCenter) => {
        return new LoadCostCenterSuccess([costCenter]);
      }), catchError((error) => of(new LoadCostCenterFail({
        costCenterCode,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.loadCostCenters$ = createEffect(() => this.actions$.pipe(ofType(LOAD_COST_CENTERS), map((action) => action.payload), switchMap((payload) => this.costCenterConnector.getList(payload.userId, payload.params).pipe(switchMap((costCenters) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(costCenters, "code");
      return [new LoadCostCenterSuccess(values), new LoadCostCentersSuccess({
        page,
        params: payload.params
      })];
    }), catchError((error) => of(new LoadCostCentersFail({
      params: payload.params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
    this.createCostCenter$ = createEffect(() => this.actions$.pipe(ofType(CREATE_COST_CENTER), map((action) => action.payload), switchMap((payload) => this.costCenterConnector.create(payload.userId, payload.costCenter).pipe(switchMap((data) => [new CreateCostCenterSuccess(data), new OrganizationClearData()]), catchError((error) => from([new CreateCostCenterFail({
      costCenterCode: payload.costCenter.code ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.updateCostCenter$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_COST_CENTER), map((action) => action.payload), switchMap((payload) => this.costCenterConnector.update(payload.userId, payload.costCenterCode, payload.costCenter).pipe(switchMap((data) => [new UpdateCostCenterSuccess(data), new OrganizationClearData()]), catchError((error) => from([new UpdateCostCenterFail({
      costCenterCode: payload.costCenter.code ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.loadAssignedBudgets$ = createEffect(() => this.actions$.pipe(ofType(LOAD_ASSIGNED_BUDGETS), map((action) => action.payload), groupBy(({
      costCenterCode,
      params
    }) => utilsGroup.serializeParams(costCenterCode, params)), mergeMap((group) => group.pipe(switchMap(({
      userId,
      costCenterCode,
      params
    }) => this.costCenterConnector.getBudgets(userId, costCenterCode, params).pipe(switchMap((budgets) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(budgets, "code");
      return [new LoadBudgetSuccess(values), new LoadAssignedBudgetsSuccess({
        costCenterCode,
        page,
        params
      })];
    }), catchError((error) => of(new LoadAssignedBudgetsFail({
      costCenterCode,
      params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))))));
    this.assignBudgetToCostCenter$ = createEffect(() => this.actions$.pipe(ofType(ASSIGN_BUDGET), map((action) => action.payload), mergeMap(({
      userId,
      costCenterCode,
      budgetCode
    }) => this.costCenterConnector.assignBudget(userId, costCenterCode, budgetCode).pipe(switchMap(() => [new AssignBudgetSuccess({
      code: budgetCode,
      selected: true
    }), new OrganizationClearData()]), catchError((error) => from([new AssignBudgetFail({
      budgetCode,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.unassignBudgetToCostCenter$ = createEffect(() => this.actions$.pipe(ofType(UNASSIGN_BUDGET), map((action) => action.payload), mergeMap(({
      userId,
      costCenterCode,
      budgetCode
    }) => this.costCenterConnector.unassignBudget(userId, costCenterCode, budgetCode).pipe(switchMap(() => [new UnassignBudgetSuccess({
      code: budgetCode,
      selected: false
    }), new OrganizationClearData()]), catchError((error) => from([new UnassignBudgetFail({
      budgetCode,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
  }
  static {
    this.ɵfac = function CostCenterEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterEffects)(ɵɵinject(Actions), ɵɵinject(CostCenterConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CostCenterEffects,
      factory: _CostCenterEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: CostCenterConnector
  }], null);
})();
var B2BUserEffects = class _B2BUserEffects {
  constructor(actions$, b2bUserConnector, routingService, userAccountFacade, userIdService) {
    this.actions$ = actions$;
    this.b2bUserConnector = b2bUserConnector;
    this.routingService = routingService;
    this.userAccountFacade = userAccountFacade;
    this.userIdService = userIdService;
    this.logger = inject(LoggerService);
    this.loadB2BUser$ = createEffect(() => this.actions$.pipe(ofType(LOAD_B2B_USER), map((action) => action.payload), switchMap(({
      userId,
      orgCustomerId
    }) => {
      return this.b2bUserConnector.get(userId, orgCustomerId).pipe(map((b2bUser) => {
        return new LoadB2BUserSuccess([b2bUser]);
      }), catchError((error) => of(new LoadB2BUserFail({
        orgCustomerId,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.createB2BUser$ = createEffect(() => this.actions$.pipe(ofType(CREATE_B2B_USER), map((action) => action.payload), switchMap(({
      userId,
      orgCustomer
    }) => this.b2bUserConnector.create(userId, orgCustomer).pipe(switchMap((data) => {
      const isAssignedToApprovers = orgCustomer.isAssignedToApprovers;
      return this.routingService.getRouterState().pipe(take(1), tap((route) => this.redirectToDetails(route, data)), switchMap(() => {
        const successActions = [new CreateB2BUserSuccess(data), new CreateB2BUserSuccess({
          customerId: orgCustomer.customerId,
          orgUnit: orgCustomer.orgUnit
        }), new OrganizationClearData()];
        if (isAssignedToApprovers) {
          successActions.splice(1, 0, new AssignApprover({
            userId,
            orgUnitId: orgCustomer.orgUnit?.uid ?? "",
            orgCustomerId: data.customerId ?? "",
            roleId: B2BUserRole.APPROVER
          }));
        }
        return successActions;
      }));
    }), catchError((error) => from([new CreateB2BUserFail({
      orgCustomerId: orgCustomer.customerId ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.updateB2BUser$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_B2B_USER), map((action) => action.payload), switchMap(({
      userId,
      orgCustomerId,
      orgCustomer
    }) => {
      const isAssignedToApprovers = orgCustomer.isAssignedToApprovers;
      return this.b2bUserConnector.update(userId, orgCustomerId, orgCustomer).pipe(switchMap((_data) => {
        const successActions = [
          // TODO: change for 'payload: data' when backend API start to return user data on PATCH
          new UpdateB2BUserSuccess(orgCustomer)
        ];
        if (isAssignedToApprovers) {
          successActions.push(new AssignApprover({
            userId,
            orgUnitId: orgCustomer.orgUnit?.uid ?? "",
            orgCustomerId,
            roleId: B2BUserRole.APPROVER
          }));
        }
        return successActions;
      }), catchError((error) => from([new UpdateB2BUserFail({
        orgCustomerId: orgCustomer.customerId ?? "",
        error: tryNormalizeHttpError(error, this.logger)
      }), new OrganizationClearData()])));
    })));
    this.checkSelfEmailUpdate$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_B2B_USER_SUCCESS), map((action) => action.payload), withLatestFrom(this.userAccountFacade.get(), this.userIdService.getUserId()), switchMap(([payload, currentUser]) => {
      const currentUserEmailMatch = payload.customerId === currentUser?.customerId && payload.email !== currentUser?.displayUid;
      if (currentUserEmailMatch) {
        this.routingService.go({
          cxRoute: "login"
        });
      }
      return currentUserEmailMatch ? [new authGroup_actions.Logout()] : [new OrganizationClearData()];
    })));
    this.loadB2BUsers$ = createEffect(() => this.actions$.pipe(ofType(LOAD_B2B_USERS), map((action) => action.payload), switchMap((payload) => this.b2bUserConnector.getList(payload.userId, payload.params).pipe(switchMap((b2bUsers) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(b2bUsers, "customerId");
      return [new LoadB2BUserSuccess(values), new LoadB2BUsersSuccess({
        page,
        params: payload.params
      })];
    }), catchError((error) => of(new LoadB2BUsersFail({
      params: payload.params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
    this.loadB2BUserApprovers$ = createEffect(() => this.actions$.pipe(ofType(LOAD_B2B_USER_APPROVERS), map((action) => action.payload), groupBy(({
      orgCustomerId,
      params
    }) => utilsGroup.serializeParams(orgCustomerId, params)), mergeMap((group) => group.pipe(switchMap((payload) => this.b2bUserConnector.getApprovers(payload.userId, payload.orgCustomerId, payload.params).pipe(switchMap((approvers) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(approvers, "customerId");
      return [new LoadB2BUserSuccess(values), new LoadB2BUserApproversSuccess({
        orgCustomerId: payload.orgCustomerId,
        page,
        params: payload.params
      })];
    }), catchError((error) => of(new LoadB2BUserApproversFail({
      orgCustomerId: payload.orgCustomerId,
      params: payload.params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))))));
    this.loadB2BUserPermissions$ = createEffect(() => this.actions$.pipe(ofType(LOAD_B2B_USER_PERMISSIONS), map((action) => action.payload), groupBy(({
      orgCustomerId,
      params
    }) => utilsGroup.serializeParams(orgCustomerId, params)), mergeMap((group) => group.pipe(switchMap((payload) => this.b2bUserConnector.getPermissions(payload.userId, payload.orgCustomerId, payload.params).pipe(switchMap((permissions) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(permissions, "code");
      return [new LoadPermissionSuccess(values), new LoadB2BUserPermissionsSuccess({
        orgCustomerId: payload.orgCustomerId,
        page,
        params: payload.params
      })];
    }), catchError((error) => of(new LoadB2BUserPermissionsFail({
      orgCustomerId: payload.orgCustomerId,
      params: payload.params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))))));
    this.loadB2BUserUserGroups$ = createEffect(() => this.actions$.pipe(ofType(LOAD_B2B_USER_USER_GROUPS), map((action) => action.payload), groupBy(({
      orgCustomerId,
      params
    }) => utilsGroup.serializeParams(orgCustomerId, params)), mergeMap((group) => group.pipe(switchMap((payload) => this.b2bUserConnector.getUserGroups(payload.userId, payload.orgCustomerId, payload.params).pipe(switchMap((userGroups) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(userGroups, "uid");
      return [new LoadUserGroupSuccess(values), new LoadB2BUserUserGroupsSuccess({
        orgCustomerId: payload.orgCustomerId,
        page,
        params: payload.params
      })];
    }), catchError((error) => of(new LoadB2BUserUserGroupsFail({
      orgCustomerId: payload.orgCustomerId,
      params: payload.params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))))));
    this.assignApproverToB2BUser$ = createEffect(() => this.actions$.pipe(ofType(ASSIGN_B2B_USER_APPROVER), map((action) => action.payload), mergeMap((payload) => this.b2bUserConnector.assignApprover(payload.userId, payload.orgCustomerId, payload.approverId).pipe(switchMap((data) => [
      new AssignB2BUserApproverSuccess({
        // Occ returned email, but we use customerId in store
        approverId: payload.approverId,
        selected: data.selected
      })
      // Clearing data in this case causes unexpected behavior (#10468)
      // new OrganizationActions.OrganizationClearData(),
    ]), catchError((error) => from([new AssignB2BUserApproverFail({
      orgCustomerId: payload.orgCustomerId,
      approverId: payload.approverId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.unassignApproverFromB2BUser$ = createEffect(() => this.actions$.pipe(ofType(UNASSIGN_B2B_USER_APPROVER), map((action) => action.payload), mergeMap((payload) => this.b2bUserConnector.unassignApprover(payload.userId, payload.orgCustomerId, payload.approverId).pipe(switchMap((data) => [
      new UnassignB2BUserApproverSuccess({
        // Occ returned email, but we use customerId in store
        approverId: payload.approverId,
        selected: data.selected
      })
      // Clearing data in this case causes unexpected behavior (#10468)
      // new OrganizationActions.OrganizationClearData(),
    ]), catchError((error) => from([new UnassignB2BUserApproverFail({
      orgCustomerId: payload.orgCustomerId,
      approverId: payload.approverId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.assignPermissionToB2BUser$ = createEffect(() => this.actions$.pipe(ofType(ASSIGN_B2B_USER_PERMISSION), map((action) => action.payload), mergeMap((payload) => this.b2bUserConnector.assignPermission(payload.userId, payload.orgCustomerId, payload.permissionId).pipe(switchMap((data) => [new AssignB2BUserPermissionSuccess({
      permissionId: data.id,
      selected: data.selected
    }), new OrganizationClearData()]), catchError((error) => from([new AssignB2BUserPermissionFail({
      orgCustomerId: payload.orgCustomerId,
      permissionId: payload.permissionId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.unassignPermissionFromB2BUser$ = createEffect(() => this.actions$.pipe(ofType(UNASSIGN_B2B_USER_PERMISSION), map((action) => action.payload), mergeMap((payload) => this.b2bUserConnector.unassignPermission(payload.userId, payload.orgCustomerId, payload.permissionId).pipe(switchMap((data) => [new UnassignB2BUserPermissionSuccess({
      permissionId: data.id,
      selected: data.selected
    }), new OrganizationClearData()]), catchError((error) => from([new UnassignB2BUserPermissionFail({
      orgCustomerId: payload.orgCustomerId,
      permissionId: payload.permissionId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.assignUserGroupToB2BUser$ = createEffect(() => this.actions$.pipe(ofType(ASSIGN_B2B_USER_USER_GROUP), map((action) => action.payload), mergeMap((payload) => this.b2bUserConnector.assignUserGroup(payload.userId, payload.orgCustomerId, payload.userGroupId).pipe(switchMap((data) => [new AssignB2BUserUserGroupSuccess({
      uid: data.id,
      selected: data.selected
    }), new OrganizationClearData()]), catchError((error) => from([new AssignB2BUserUserGroupFail({
      orgCustomerId: payload.orgCustomerId,
      userGroupId: payload.userGroupId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.unassignUserGroupFromB2BUser$ = createEffect(() => this.actions$.pipe(ofType(UNASSIGN_B2B_USER_USER_GROUP), map((action) => action.payload), mergeMap((payload) => this.b2bUserConnector.unassignUserGroup(payload.userId, payload.orgCustomerId, payload.userGroupId).pipe(switchMap(
      // TODO: Workaround because occ doesn't respond here
      // (data) =>
      //   new B2BUserActions.DeleteB2BUserUserGroupSuccess({
      //     uid: data.id,
      //     selected: data.selected,
      //   })
      () => [new UnassignB2BUserUserGroupSuccess({
        uid: payload.userGroupId,
        selected: false
      }), new OrganizationClearData()]
    ), catchError((error) => from([new UnassignB2BUserUserGroupFail({
      orgCustomerId: payload.orgCustomerId,
      userGroupId: payload.userGroupId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
  }
  redirectToDetails(route, data) {
    if (route?.state?.context?.id !== "/organization/units") {
      this.routingService.go({
        cxRoute: "orgUserDetails",
        params: data
      });
    }
  }
  static {
    this.ɵfac = function B2BUserEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _B2BUserEffects)(ɵɵinject(Actions), ɵɵinject(B2BUserConnector), ɵɵinject(RoutingService), ɵɵinject(UserAccountFacade), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _B2BUserEffects,
      factory: _B2BUserEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(B2BUserEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: B2BUserConnector
  }, {
    type: RoutingService
  }, {
    type: UserAccountFacade
  }, {
    type: UserIdService
  }], null);
})();
var UserGroupEffects = class _UserGroupEffects {
  constructor(actions$, userGroupConnector) {
    this.actions$ = actions$;
    this.userGroupConnector = userGroupConnector;
    this.logger = inject(LoggerService);
    this.loadUserGroup$ = createEffect(() => this.actions$.pipe(ofType(LOAD_USER_GROUP), map((action) => action.payload), switchMap(({
      userId,
      userGroupId
    }) => {
      return this.userGroupConnector.get(userId, userGroupId).pipe(map((userGroup) => {
        return new LoadUserGroupSuccess([userGroup]);
      }), catchError((error) => of(new LoadUserGroupFail({
        userGroupId,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.loadUserGroups$ = createEffect(() => this.actions$.pipe(ofType(LOAD_USER_GROUPS), map((action) => action.payload), switchMap((payload) => this.userGroupConnector.getList(payload.userId, payload.params).pipe(switchMap((userGroups) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(userGroups, "uid");
      return [new LoadUserGroupSuccess(values), new LoadUserGroupsSuccess({
        page,
        params: payload.params
      })];
    }), catchError((error) => of(new LoadUserGroupsFail({
      params: payload.params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
    this.loadAvailableOrderApprovalPermissions$ = createEffect(() => this.actions$.pipe(ofType(LOAD_USER_GROUP_PERMISSIONS), map((action) => action.payload), groupBy(({
      userGroupId,
      params
    }) => utilsGroup.serializeParams(userGroupId, params)), mergeMap((group) => group.pipe(switchMap((payload) => this.userGroupConnector.getAvailableOrderApprovalPermissions(payload.userId, payload.userGroupId, payload.params).pipe(switchMap((permissions) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(permissions, "code");
      return [new LoadPermissionSuccess(values), new LoadPermissionsSuccess$1({
        userGroupId: payload.userGroupId,
        page,
        params: payload.params
      })];
    }), catchError((error) => of(new LoadPermissionsFail$1({
      userGroupId: payload.userGroupId,
      params: payload.params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))))));
    this.loadAvailableOrgCustomers$ = createEffect(() => this.actions$.pipe(ofType(LOAD_USER_GROUP_AVAILABLE_CUSTOMERS), map((action) => action.payload), groupBy(({
      userGroupId,
      params
    }) => utilsGroup.serializeParams(userGroupId, params)), mergeMap((group) => group.pipe(switchMap((payload) => this.userGroupConnector.getAvailableOrgCustomers(payload.userId, payload.userGroupId, payload.params).pipe(switchMap((customers) => {
      const {
        values,
        page
      } = utilsGroup.normalizeListPage(customers, "customerId");
      return [new LoadB2BUserSuccess(values), new LoadAvailableOrgCustomersSuccess({
        userGroupId: payload.userGroupId,
        page,
        params: payload.params
      })];
    }), catchError((error) => of(new LoadAvailableOrgCustomersFail({
      userGroupId: payload.userGroupId,
      params: payload.params,
      error: tryNormalizeHttpError(error, this.logger)
    })))))))));
    this.createUserGroup$ = createEffect(() => this.actions$.pipe(ofType(CREATE_USER_GROUP), map((action) => action.payload), switchMap((payload) => this.userGroupConnector.create(payload.userId, payload.userGroup).pipe(switchMap((data) => [new CreateUserGroupSuccess(data), new OrganizationClearData()]), catchError((error) => from([new CreateUserGroupFail({
      userGroupId: payload.userGroup.uid ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.updateUserGroup$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_USER_GROUP), map((action) => action.payload), switchMap((payload) => this.userGroupConnector.update(payload.userId, payload.userGroupId, payload.userGroup).pipe(switchMap(() => [
      // TODO: Workaround for empty PATCH response:
      new UpdateUserGroupSuccess(payload.userGroup),
      new OrganizationClearData()
    ]), catchError((error) => from([new UpdateUserGroupFail({
      userGroupId: payload.userGroup.uid ?? "",
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.deleteUserGroup$ = createEffect(() => this.actions$.pipe(ofType(DELETE_USER_GROUP), map((action) => action.payload), switchMap((payload) => this.userGroupConnector.delete(payload.userId, payload.userGroupId).pipe(switchMap((data) => [new DeleteUserGroupSuccess(data), new OrganizationClearData()]), catchError((error) => from([new DeleteUserGroupFail({
      userGroupId: payload.userGroupId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.assignPermissionToUserGroup$ = createEffect(() => this.actions$.pipe(ofType(USER_GROUP_ASSIGN_PERMISSION), map((action) => action.payload), mergeMap((payload) => this.userGroupConnector.assignOrderApprovalPermission(payload.userId, payload.userGroupId, payload.permissionUid).pipe(switchMap((data) => [new AssignPermissionSuccess({
      permissionUid: data.id,
      selected: data.selected
    }), new OrganizationClearData()]), catchError((error) => from([new AssignPermissionFail({
      userGroupId: payload.userGroupId,
      permissionUid: payload.permissionUid,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.assignMemberUnitUserGroup$ = createEffect(() => this.actions$.pipe(ofType(USER_GROUP_ASSIGN_MEMBER), map((action) => action.payload), mergeMap((payload) => this.userGroupConnector.assignMember(payload.userId, payload.userGroupId, payload.customerId).pipe(switchMap(() => [new AssignMemberSuccess({
      customerId: payload.customerId,
      selected: true
    }), new OrganizationClearData()]), catchError((error) => from([new AssignMemberFail({
      userGroupId: payload.userGroupId,
      customerId: payload.customerId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.unassignMemberFromUserGroup$ = createEffect(() => this.actions$.pipe(ofType(USER_GROUP_UNASSIGN_MEMBER), map((action) => action.payload), mergeMap((payload) => this.userGroupConnector.unassignMember(payload.userId, payload.userGroupId, payload.customerId).pipe(switchMap(() => [new UnassignMemberSuccess({
      customerId: payload.customerId,
      selected: false
    }), new OrganizationClearData()]), catchError((error) => from([new UnassignMemberFail({
      userGroupId: payload.userGroupId,
      customerId: payload.customerId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.unassignPermissionFromUserGroup$ = createEffect(() => this.actions$.pipe(ofType(USER_GROUP_UNASSIGN_PERMISSION), map((action) => action.payload), mergeMap((payload) => this.userGroupConnector.unassignOrderApprovalPermission(payload.userId, payload.userGroupId, payload.permissionUid).pipe(switchMap((data) => [new UnassignPermissionSuccess({
      permissionUid: data.id,
      selected: data.selected
    }), new OrganizationClearData()]), catchError((error) => from([new UnassignPermissionFail({
      userGroupId: payload.userGroupId,
      permissionUid: payload.permissionUid,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
    this.unassignAllMembersFromUserGroup$ = createEffect(() => this.actions$.pipe(ofType(USER_GROUP_UNASSIGN_ALL_MEMBERS), map((action) => action.payload), switchMap((payload) => this.userGroupConnector.unassignAllMembers(payload.userId, payload.userGroupId).pipe(switchMap(() => [new UnassignAllMembersSuccess({
      selected: false
    }), new OrganizationClearData()]), catchError((error) => from([new UnassignAllMembersFail({
      userGroupId: payload.userGroupId,
      error: tryNormalizeHttpError(error, this.logger)
    }), new OrganizationClearData()]))))));
  }
  static {
    this.ɵfac = function UserGroupEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupEffects)(ɵɵinject(Actions), ɵɵinject(UserGroupConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGroupEffects,
      factory: _UserGroupEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: UserGroupConnector
  }], null);
})();
var effects = [BudgetEffects, OrgUnitEffects, UserGroupEffects, PermissionEffects, CostCenterEffects, B2BUserEffects];
var b2bUserInitialState = void 0;
var b2bUsersInitialState = void 0;
function b2bUserEntitiesReducer(state = b2bUserInitialState, action) {
  switch (action.type) {
    case LOAD_B2B_USER_SUCCESS:
    case CREATE_B2B_USER_SUCCESS:
    case UPDATE_B2B_USER_SUCCESS:
      return action.payload;
    case ASSIGN_ROLE_SUCCESS:
    case ASSIGN_APPROVER_SUCCESS:
      return __spreadProps(__spreadValues({}, state), {
        selected: action.payload?.selected,
        roles: [...state?.roles || [], action.payload?.roleId]
      });
    case UNASSIGN_ROLE_SUCCESS:
    case UNASSIGN_APPROVER_SUCCESS:
      return __spreadProps(__spreadValues({}, state), {
        selected: action.payload?.selected,
        roles: [...state?.roles || []].filter((role) => role !== action.payload?.roleId)
      });
    case ASSIGN_B2B_USER_APPROVER_SUCCESS:
    case UNASSIGN_B2B_USER_APPROVER_SUCCESS:
    case USER_GROUP_ASSIGN_MEMBER_SUCCESS:
    case USER_GROUP_UNASSIGN_MEMBER_SUCCESS:
    case USER_GROUP_UNASSIGN_ALL_MEMBERS_SUCCESS:
      return __spreadValues(__spreadValues({}, state), action.payload);
  }
  return state;
}
function userListReducer(state = b2bUsersInitialState, action) {
  switch (action.type) {
    case LOAD_B2B_USERS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
function b2bUserApproverListReducer(state = b2bUsersInitialState, action) {
  switch (action.type) {
    case LOAD_B2B_USER_APPROVERS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
function b2bUserPermissionListReducer(state = b2bUsersInitialState, action) {
  switch (action.type) {
    case LOAD_B2B_USER_PERMISSIONS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
function b2bUserUserGroupListReducer(state = b2bUsersInitialState, action) {
  switch (action.type) {
    case LOAD_B2B_USER_USER_GROUPS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
var budgetInitialState = void 0;
var budgetsInitialState = void 0;
function budgetsEntitiesReducer(state = budgetInitialState, action) {
  switch (action.type) {
    case LOAD_BUDGET_SUCCESS:
    case CREATE_BUDGET_SUCCESS:
    case UPDATE_BUDGET_SUCCESS:
      return action.payload;
    case UNASSIGN_BUDGET_SUCCESS:
    case ASSIGN_BUDGET_SUCCESS:
      return __spreadValues(__spreadValues({}, state), action.payload);
  }
  return state;
}
function budgetsListReducer(state = budgetsInitialState, action) {
  switch (action.type) {
    case LOAD_BUDGETS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
var costCenterInitialState = void 0;
var costCentersInitialState = void 0;
function costCentersEntitiesReducer(state = costCenterInitialState, action) {
  switch (action.type) {
    case LOAD_COST_CENTER_SUCCESS:
    case CREATE_COST_CENTER_SUCCESS:
    case UPDATE_COST_CENTER_SUCCESS:
      return action.payload;
  }
  return state;
}
function costCentersListReducer(state = costCentersInitialState, action) {
  switch (action.type) {
    case LOAD_COST_CENTERS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
function costCenterAssignedBudgetsListReducer(state = costCentersInitialState, action) {
  switch (action.type) {
    case LOAD_ASSIGNED_BUDGETS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
var orgUnitInitialState = void 0;
var orgUnitsInitialState = void 0;
function orgUnitEntitiesReducer(state = orgUnitInitialState, action) {
  switch (action.type) {
    case LOAD_ORG_UNIT_SUCCESS:
    case CREATE_ORG_UNIT_SUCCESS:
      return action.payload;
    case UPDATE_ORG_UNIT_SUCCESS:
      return __spreadValues(__spreadValues({}, state), action.payload);
  }
  return state;
}
function orgUnitUserListReducer(state = orgUnitsInitialState, action) {
  switch (action.type) {
    case LOAD_ASSIGNED_USERS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
function orgUnitAddressListReducer(state = orgUnitsInitialState, action) {
  switch (action.type) {
    case LOAD_ADDRESSES_SUCCESS:
      return action.payload.page;
  }
  return state;
}
var permissionInitialState = void 0;
var permissionsInitialState = void 0;
function permissionsEntitiesReducer(state = permissionInitialState, action) {
  switch (action.type) {
    case LOAD_PERMISSION_SUCCESS:
    case CREATE_PERMISSION_SUCCESS:
    case UPDATE_PERMISSION_SUCCESS:
      return action.payload;
    case USER_GROUP_ASSIGN_PERMISSION_SUCCESS:
    case USER_GROUP_UNASSIGN_PERMISSION_SUCCESS:
    case ASSIGN_B2B_USER_PERMISSION_SUCCESS:
    case UNASSIGN_B2B_USER_PERMISSION_SUCCESS:
      return __spreadValues(__spreadValues({}, state), action.payload);
  }
  return state;
}
function permissionsListReducer(state = permissionsInitialState, action) {
  switch (action.type) {
    case LOAD_PERMISSIONS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
var userGroupInitialState = void 0;
var userGroupsInitialState = void 0;
function userGroupEntitiesReducer(state = userGroupInitialState, action) {
  switch (action.type) {
    case LOAD_USER_GROUP_SUCCESS:
    case CREATE_USER_GROUP_SUCCESS:
    case UPDATE_USER_GROUP_SUCCESS:
      return action.payload;
    case ASSIGN_B2B_USER_USER_GROUP_SUCCESS:
    case UNASSIGN_B2B_USER_USER_GROUP_SUCCESS:
      return __spreadValues(__spreadValues({}, state), action.payload);
  }
  return state;
}
function userGroupsListReducer(state = userGroupsInitialState, action) {
  switch (action.type) {
    case LOAD_USER_GROUPS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
function userGroupAvailableOrderApprovalPermissionsListReducer(state = userGroupsInitialState, action) {
  switch (action.type) {
    case LOAD_USER_GROUP_PERMISSIONS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
function userGroupAvailablOrgCustomersListReducer(state = userGroupsInitialState, action) {
  switch (action.type) {
    case LOAD_USER_GROUP_AVAILABLE_CUSTOMERS_SUCCESS:
      return action.payload.page;
  }
  return state;
}
function getReducers() {
  return {
    [BUDGET_FEATURE]: combineReducers({
      entities: utilsGroup.entityLoaderReducer(BUDGET_ENTITIES, budgetsEntitiesReducer),
      list: utilsGroup.entityLoaderReducer(BUDGET_LIST, budgetsListReducer)
    }),
    [PERMISSION_FEATURE]: combineReducers({
      entities: utilsGroup.entityLoaderReducer(PERMISSION_ENTITIES, permissionsEntitiesReducer),
      list: utilsGroup.entityLoaderReducer(PERMISSION_LIST, permissionsListReducer),
      permissionTypes: utilsGroup.entityLoaderReducer(PERMISSION_TYPES_LIST)
    }),
    [ORG_UNIT_FEATURE]: combineReducers({
      entities: utilsGroup.entityLoaderReducer(ORG_UNIT_ENTITIES, orgUnitEntitiesReducer),
      availableOrgUnitNodes: utilsGroup.entityLoaderReducer(ORG_UNIT_NODE_LIST),
      tree: utilsGroup.entityLoaderReducer(ORG_UNIT_TREE_ENTITY),
      approvalProcesses: utilsGroup.entityLoaderReducer(ORG_UNIT_APPROVAL_PROCESSES_ENTITIES),
      users: utilsGroup.entityLoaderReducer(ORG_UNIT_ASSIGNED_USERS, orgUnitUserListReducer),
      addressList: utilsGroup.entityLoaderReducer(ADDRESS_LIST, orgUnitAddressListReducer),
      addressEntities: utilsGroup.entityLoaderReducer(ADDRESS_ENTITIES)
    }),
    [USER_GROUP_FEATURE]: combineReducers({
      entities: utilsGroup.entityLoaderReducer(USER_GROUP_ENTITIES, userGroupEntitiesReducer),
      list: utilsGroup.entityLoaderReducer(USER_GROUP_LIST, userGroupsListReducer),
      permissions: utilsGroup.entityLoaderReducer(USER_GROUP_PERMISSIONS, userGroupAvailableOrderApprovalPermissionsListReducer),
      customers: utilsGroup.entityLoaderReducer(USER_GROUP_AVAILABLE_CUSTOMERS, userGroupAvailablOrgCustomersListReducer)
    }),
    [COST_CENTER_FEATURE]: combineReducers({
      entities: utilsGroup.entityLoaderReducer(COST_CENTER_ENTITIES, costCentersEntitiesReducer),
      list: utilsGroup.entityLoaderReducer(COST_CENTER_LIST, costCentersListReducer),
      budgets: utilsGroup.entityLoaderReducer(COST_CENTER_ASSIGNED_BUDGETS, costCenterAssignedBudgetsListReducer)
    }),
    [B2B_USER_FEATURE]: combineReducers({
      entities: utilsGroup.entityLoaderReducer(B2B_USER_ENTITIES, b2bUserEntitiesReducer),
      list: utilsGroup.entityLoaderReducer(USER_LIST, userListReducer),
      approvers: utilsGroup.entityLoaderReducer(B2B_USER_APPROVERS, b2bUserApproverListReducer),
      permissions: utilsGroup.entityLoaderReducer(B2B_USER_PERMISSIONS, b2bUserPermissionListReducer),
      userGroups: utilsGroup.entityLoaderReducer(B2B_USER_USER_GROUPS, b2bUserUserGroupListReducer)
    })
  };
}
var reducerToken = new InjectionToken("OrganizationReducers");
var reducerProvider = {
  provide: reducerToken,
  useFactory: getReducers
};
function clearOrganizationState(reducer) {
  return function(state, action) {
    if (action.type === CLEAR_ORGANIZATION_DATA) {
      state = void 0;
    }
    if (action.type === authGroup_actions.LOGOUT) {
      state = void 0;
    }
    if (action.type === siteContextGroup_actions.LANGUAGE_CHANGE) {
      state = void 0;
    }
    return reducer(state, action);
  };
}
var metaReducers = [clearOrganizationState];
var getBudgetManagementState = createSelector(getOrganizationState, (state) => state[BUDGET_FEATURE]);
var getBudgetsState = createSelector(getBudgetManagementState, (state) => state && state.entities);
var getBudget = (budgetCode) => createSelector(getBudgetsState, (state) => utilsGroup.entityLoaderStateSelector(state, budgetCode));
var getBudgetValue = (budgetCode) => {
  return createSelector(getBudget(budgetCode), (budgetState) => utilsGroup.loaderValueSelector(budgetState));
};
var getBudgetList = (params) => createSelector(getBudgetManagementState, (state) => utilsGroup.denormalizeSearch(state, params));
var budget_selector = Object.freeze({
  __proto__: null,
  getBudget,
  getBudgetList,
  getBudgetManagementState,
  getBudgetValue,
  getBudgetsState
});
var getB2BOrgUnitState = createSelector(getOrganizationState, (state) => state[ORG_UNIT_FEATURE]);
var getOrgUnitsNodeListState = createSelector(getB2BOrgUnitState, (state) => state && state.availableOrgUnitNodes);
var getOrgUnitsState = createSelector(getB2BOrgUnitState, (state) => state && state.entities);
var getOrgUnitsTreeState = createSelector(getB2BOrgUnitState, (state) => state && state.tree);
var getAddressesState = createSelector(getB2BOrgUnitState, (state) => state && state.addressEntities);
var getApprovalProcessesState = createSelector(getB2BOrgUnitState, (state) => state && state.approvalProcesses);
var getOrgUnit = (orgUnitId) => createSelector(getOrgUnitsState, (state) => utilsGroup.entityLoaderStateSelector(state, orgUnitId));
var getOrgUnitValue = (orgUnitId) => {
  return createSelector(getOrgUnit(orgUnitId), (orgUnitState) => utilsGroup.loaderValueSelector(orgUnitState));
};
var getOrgUnitState = (orgUnitId) => createSelector(getOrgUnitsState, (state) => utilsGroup.entityLoaderStateSelector(state, orgUnitId));
var getOrgUnitList = () => createSelector(getOrgUnitsNodeListState, (state) => utilsGroup.entityLoaderStateSelector(state, ORG_UNIT_NODES));
var getOrgUnitTree = () => createSelector(getOrgUnitsTreeState, (state) => utilsGroup.entityLoaderStateSelector(state, ORG_UNIT_TREE));
var getApprovalProcesses = () => createSelector(getApprovalProcessesState, (state) => utilsGroup.entityLoaderStateSelector(state, ORG_UNIT_APPROVAL_PROCESSES));
var getAssignedUsers = (orgUnitId, roleId, params) => createSelector(getB2BOrgUnitState, getB2BUsersState, (state, users) => utilsGroup.denormalizeCustomB2BSearch(state.users, users, params, `${orgUnitId},${roleId}`));
var getB2BAddresses = (orgUnitId, params) => createSelector(getB2BOrgUnitState, (state) => utilsGroup.denormalizeCustomB2BSearch(state.addressList, state.addressEntities, params, orgUnitId));
var getB2BAddress = (addressId) => createSelector(getAddressesState, (state) => utilsGroup.entityLoaderStateSelector(state, addressId));
var orgUnit_selector = Object.freeze({
  __proto__: null,
  getAddressesState,
  getApprovalProcesses,
  getApprovalProcessesState,
  getAssignedUsers,
  getB2BAddress,
  getB2BAddresses,
  getB2BOrgUnitState,
  getOrgUnit,
  getOrgUnitList,
  getOrgUnitState,
  getOrgUnitTree,
  getOrgUnitValue,
  getOrgUnitsNodeListState,
  getOrgUnitsState,
  getOrgUnitsTreeState
});
var getUserGroupManagementState = createSelector(getOrganizationState, (state) => state[USER_GROUP_FEATURE]);
var getUserGroupsState = createSelector(getUserGroupManagementState, (state) => state && state.entities);
var getUserGroup = (userGroupId) => createSelector(getUserGroupsState, (state) => utilsGroup.entityLoaderStateSelector(state, userGroupId));
var getUserGroupValue = (userGroupId) => {
  return createSelector(getUserGroup(userGroupId), (userGroupState) => utilsGroup.loaderValueSelector(userGroupState));
};
var getUserGroupList = (params) => createSelector(getUserGroupManagementState, (state) => utilsGroup.denormalizeSearch(state, params));
var getAvailableOrgCustomers = (code, params) => createSelector(getUserGroupManagementState, getB2BUsersState, (state, customers) => utilsGroup.denormalizeCustomB2BSearch(state.customers, customers, params, code));
var getAvailableOrderApprovalPermissions = (code, params) => createSelector(getUserGroupManagementState, getPermissionsState, (state, permissions) => utilsGroup.denormalizeCustomB2BSearch(state.permissions, permissions, params, code));
var getUserGroupState = (code) => createSelector(getUserGroupsState, (state) => utilsGroup.entityLoaderStateSelector(state, code));
var userGroup_selector = Object.freeze({
  __proto__: null,
  getAvailableOrderApprovalPermissions,
  getAvailableOrgCustomers,
  getUserGroup,
  getUserGroupList,
  getUserGroupManagementState,
  getUserGroupState,
  getUserGroupValue,
  getUserGroupsState
});
var getCostCenterManagementState = createSelector(getOrganizationState, (state) => state[COST_CENTER_FEATURE]);
var getCostCentersState = createSelector(getCostCenterManagementState, (state) => state && state.entities);
var getCostCenter = (costCenterCode) => createSelector(getCostCentersState, (state) => utilsGroup.entityLoaderStateSelector(state, costCenterCode));
var getCostCenterValue = (costCenterCode) => {
  return createSelector(getCostCenter(costCenterCode), (costCenterState) => utilsGroup.loaderValueSelector(costCenterState));
};
var getCostCenterList = (params) => createSelector(getCostCenterManagementState, (state) => utilsGroup.denormalizeSearch(state, params));
var getAssignedBudgets = (code, params) => createSelector(getCostCenterManagementState, getBudgetsState, (state, budgets) => utilsGroup.denormalizeCustomB2BSearch(state.budgets, budgets, params, code));
var getCostCenterState = (code) => createSelector(getCostCentersState, (state) => utilsGroup.entityLoaderStateSelector(state, code));
var costCenter_selector = Object.freeze({
  __proto__: null,
  getAssignedBudgets,
  getCostCenter,
  getCostCenterList,
  getCostCenterManagementState,
  getCostCenterState,
  getCostCenterValue,
  getCostCentersState
});
var BudgetService = class _BudgetService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  loadBudget(budgetCode) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadBudget({
        userId,
        budgetCode
      })),
      error: () => {
      }
    });
  }
  loadBudgets(params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadBudgets({
        userId,
        params
      })),
      error: () => {
      }
    });
  }
  getBudgetState(budgetCode) {
    return this.store.select(getBudget(budgetCode));
  }
  getBudgetValue(budgetCode) {
    return this.store.select(getBudgetValue(budgetCode)).pipe(filter((budget) => Boolean(budget)));
  }
  getBudgetList(params) {
    return this.store.select(getBudgetList(params));
  }
  get(budgetCode) {
    const loading$ = this.getBudgetState(budgetCode).pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.loadBudget(budgetCode);
      }
    }));
    return using(() => loading$.subscribe(), () => this.getBudgetValue(budgetCode));
  }
  getList(params) {
    return this.getBudgetList(params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadBudgets(params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  getCostCenters(budgetCode) {
    return this.get(budgetCode).pipe(map((budget) => ({
      values: budget.costCenters ?? []
    })));
  }
  getErrorState(budgetCode) {
    return this.getBudgetState(budgetCode).pipe(map((state) => state.error ?? false));
  }
  create(budget) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new CreateBudget({
        userId,
        budget
      })),
      error: () => {
      }
    });
  }
  update(budgetCode, budget) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UpdateBudget({
        userId,
        budgetCode,
        budget
      })),
      error: () => {
      }
    });
  }
  getLoadingStatus(budgetCode) {
    return getItemStatus(this.getBudgetState(budgetCode));
  }
  static {
    this.ɵfac = function BudgetService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BudgetService,
      factory: _BudgetService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var CostCenterService = class _CostCenterService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  load(costCenterCode) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadCostCenter({
        userId,
        costCenterCode
      })),
      error: () => {
      }
    });
  }
  loadList(params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadCostCenters({
        userId,
        params
      })),
      error: () => {
      }
    });
  }
  getCostCenter(costCenterCode) {
    return this.store.select(getCostCenter(costCenterCode));
  }
  getCostCenterValue(costCenterCode) {
    return this.store.select(getCostCenterValue(costCenterCode)).pipe(filter((costCenter) => Boolean(costCenter)));
  }
  getCostCenterList(params) {
    return this.store.select(getCostCenterList(params));
  }
  getBudgetList(costCenterCode, params) {
    return this.store.select(getAssignedBudgets(costCenterCode, params));
  }
  get(costCenterCode) {
    const loading$ = this.getCostCenter(costCenterCode).pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.load(costCenterCode);
      }
    }));
    return using(() => loading$.subscribe(), () => this.getCostCenterValue(costCenterCode));
  }
  getList(params) {
    return this.getCostCenterList(params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadList(params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  getCostCenterState(costCenterCode) {
    return this.store.select(getCostCenterState(costCenterCode));
  }
  create(costCenter) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new CreateCostCenter({
        userId,
        costCenter
      })),
      error: () => {
      }
    });
  }
  update(costCenterCode, costCenter) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UpdateCostCenter({
        userId,
        costCenterCode,
        costCenter
      })),
      error: () => {
      }
    });
  }
  getLoadingStatus(costCenterCode) {
    return getItemStatus(this.getCostCenter(costCenterCode));
  }
  loadBudgets(costCenterCode, params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadAssignedBudgets({
        userId,
        costCenterCode,
        params
      })),
      error: () => {
      }
    });
  }
  getBudgets(costCenterCode, params) {
    return this.getBudgetList(costCenterCode, params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadBudgets(costCenterCode, params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  assignBudget(costCenterCode, budgetCode) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new AssignBudget({
        userId,
        costCenterCode,
        budgetCode
      })),
      error: () => {
      }
    });
  }
  unassignBudget(costCenterCode, budgetCode) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UnassignBudget({
        userId,
        costCenterCode,
        budgetCode
      })),
      error: () => {
      }
    });
  }
  getErrorState(costCenterCode) {
    return this.getCostCenterState(costCenterCode).pipe(map((state) => state.error ?? false));
  }
  static {
    this.ɵfac = function CostCenterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CostCenterService,
      factory: _CostCenterService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var OrgUnitService = class _OrgUnitService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  clearAssignedUsersList(orgUnitId, roleId, params) {
    this.store.dispatch(new ClearAssignedUsers({
      orgUnitId,
      roleId,
      params
    }));
  }
  load(orgUnitId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadOrgUnit({
        userId,
        orgUnitId
      })),
      error: () => {
      }
    });
  }
  loadList() {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadOrgUnitNodes({
        userId
      })),
      error: () => {
      }
    });
  }
  loadTree() {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadTree({
        userId
      })),
      error: () => {
      }
    });
  }
  loadApprovalProcesses() {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadApprovalProcesses({
        userId
      })),
      error: () => {
      }
    });
  }
  loadUsers(orgUnitId, roleId, params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadAssignedUsers({
        userId,
        orgUnitId,
        roleId,
        params
      })),
      error: () => {
      }
    });
  }
  loadAddresses(orgUnitId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadOrgUnit({
        userId,
        orgUnitId
      })),
      error: () => {
      }
    });
  }
  getOrgUnit(orgUnitId) {
    return this.store.select(getOrgUnit(orgUnitId));
  }
  getOrgUnitValue(orgUnitId) {
    return this.store.select(getOrgUnitValue(orgUnitId)).pipe(filter((orgUnit) => Boolean(orgUnit)));
  }
  getTreeState() {
    return this.store.select(getOrgUnitTree());
  }
  getOrgUnitsList() {
    return this.store.select(getOrgUnitList());
  }
  getAddressesState(orgUnitId) {
    return this.store.select(getB2BAddresses(orgUnitId));
  }
  getAddressState(addressId) {
    return this.store.select(getB2BAddress(addressId));
  }
  getAssignedUsers(orgUnitId, roleId, params) {
    return this.store.select(getAssignedUsers(orgUnitId, roleId, params));
  }
  getApprovalProcessesList() {
    return this.store.select(getApprovalProcesses());
  }
  get(orgUnitId) {
    const loading$ = this.getOrgUnit(orgUnitId).pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.load(orgUnitId);
      }
    }));
    return using(() => loading$.subscribe(), () => this.getOrgUnitValue(orgUnitId));
  }
  getCostCenters(orgUnitId) {
    return this.get(orgUnitId).pipe(map((orgUnit) => ({
      values: orgUnit.costCenters ?? []
    })));
  }
  findUnitChildrenInTree(orginitId, unit) {
    return unit.id === orginitId ? unit.children ?? [] : (unit.children ?? []).flatMap((child) => this.findUnitChildrenInTree(orginitId, child));
  }
  getChildUnits(orgUnitId) {
    return this.getTree().pipe(map((tree) => ({
      values: tree ? this.findUnitChildrenInTree(orgUnitId, tree) : []
    })));
  }
  getTree() {
    return this.getTreeState().pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadTree();
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  getApprovalProcesses() {
    return this.getApprovalProcessesList().pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadApprovalProcesses();
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  getList() {
    return this.getOrgUnitsList().pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadList();
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  getActiveUnitList() {
    return this.getList().pipe(map((units) => units?.filter((unit) => unit.active)), map((units) => units?.sort(this.sortUnitList)));
  }
  sortUnitList(a, b) {
    return (a.id ?? "").toLowerCase() < (b.id ?? "").toLowerCase() ? -1 : (a.id ?? "").toLowerCase() > (b.id ?? "").toLowerCase() ? 1 : 0;
  }
  getUsers(orgUnitId, roleId, params) {
    return this.getAssignedUsers(orgUnitId, roleId, params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadUsers(orgUnitId, roleId, params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  getErrorState(orgCustomerId) {
    return this.getOrgUnitState(orgCustomerId).pipe(map((state) => state.error ?? false));
  }
  create(unit) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new CreateUnit({
        userId,
        unit
      })),
      error: () => {
      }
    });
  }
  update(unitCode, unit) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UpdateUnit({
        userId,
        unitCode,
        unit
      })),
      error: () => {
      }
    });
  }
  getLoadingStatus(orgUnitId) {
    return getItemStatus(this.getOrgUnit(orgUnitId));
  }
  assignRole(orgCustomerId, roleId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new AssignRole({
        userId,
        orgCustomerId,
        roleId
      })),
      error: () => {
      }
    });
  }
  unassignRole(orgCustomerId, roleId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UnassignRole({
        userId,
        orgCustomerId,
        roleId
      })),
      error: () => {
      }
    });
  }
  assignApprover(orgUnitId, orgCustomerId, roleId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new AssignApprover({
        orgUnitId,
        userId,
        orgCustomerId,
        roleId
      })),
      error: () => {
      }
    });
  }
  unassignApprover(orgUnitId, orgCustomerId, roleId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UnassignApprover({
        orgUnitId,
        userId,
        orgCustomerId,
        roleId
      })),
      error: () => {
      }
    });
  }
  createAddress(orgUnitId, address) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new CreateAddress({
        userId,
        orgUnitId,
        address
      })),
      error: () => {
      }
    });
  }
  getAddresses(orgUnitId) {
    return this.getAddressesState(orgUnitId).pipe(observeOn(queueScheduler), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.loadAddresses(orgUnitId);
      }
    }), filter((state) => Boolean(state.success || state.error)), map((state) => state.value));
  }
  getAddress(orgUnitId, addressId) {
    return this.getAddressState(addressId).pipe(observeOn(queueScheduler), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.loadAddresses(orgUnitId);
      }
    }), filter((state) => Boolean(state.success || state.error)), map((state) => state.value));
  }
  updateAddress(orgUnitId, addressId, address) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UpdateAddress({
        userId,
        orgUnitId,
        addressId,
        address
      })),
      error: () => {
      }
    });
  }
  getAddressLoadingStatus(addressId) {
    return getItemStatus(this.getAddressState(addressId));
  }
  deleteAddress(orgUnitId, addressId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new DeleteAddress({
        userId,
        orgUnitId,
        addressId
      })),
      error: () => {
      }
    });
  }
  getOrgUnitState(orgUnitId) {
    return this.store.select(getOrgUnitState(orgUnitId));
  }
  isUpdatingUnitAllowed() {
    return true;
  }
  static {
    this.ɵfac = function OrgUnitService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrgUnitService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrgUnitService,
      factory: _OrgUnitService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrgUnitService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var OrganizationPageMetaResolver = class _OrganizationPageMetaResolver extends PageMetaResolver {
  constructor(contentPageMetaResolver, translation, semanticPath, routingService) {
    super();
    this.contentPageMetaResolver = contentPageMetaResolver;
    this.translation = translation;
    this.semanticPath = semanticPath;
    this.routingService = routingService;
    this.pageTemplate = "CompanyPageTemplate";
    this.pageType = PageType.CONTENT_PAGE;
    this.ORGANIZATION_TRANSLATION_KEY = "organization.breadcrumb";
    this.ORGANIZATION_SEMANTIC_ROUTE = "organization";
    this.organizationPageBreadcrumb$ = defer(() => this.routingService.getRouterState()).pipe(map((routerState) => routerState?.state?.semanticRoute), distinctUntilChanged(), switchMap((semanticRoute) => semanticRoute === this.ORGANIZATION_SEMANTIC_ROUTE ? of([]) : this.translation.translate(this.ORGANIZATION_TRANSLATION_KEY).pipe(map((label) => [{
      label,
      link: this.semanticPath.get(this.ORGANIZATION_SEMANTIC_ROUTE)
    }]))));
    this.breadcrumbs$ = combineLatest([this.organizationPageBreadcrumb$, defer(() => this.contentPageMetaResolver.resolveBreadcrumbs())]).pipe(map(([organizationPageBreadcrumb, breadcrumbs = []]) => {
      const [home, ...restBreadcrumbs] = breadcrumbs;
      return [home, ...organizationPageBreadcrumb, ...restBreadcrumbs];
    }), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  resolveTitle() {
    return this.contentPageMetaResolver.resolveTitle();
  }
  resolveDescription() {
    return this.contentPageMetaResolver.resolveDescription();
  }
  resolveRobots() {
    return this.contentPageMetaResolver.resolveRobots();
  }
  /**
   * Returns list of breadcrumbs for:
   * - the home page
   * - the organization home page
   * - the organization's child pages (i.e. cost center list)
   * - sub-routes of the organization's child pages (i.e. cost center details, edit cost center, ...)
   */
  resolveBreadcrumbs() {
    return this.breadcrumbs$;
  }
  static {
    this.ɵfac = function OrganizationPageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganizationPageMetaResolver)(ɵɵinject(ContentPageMetaResolver), ɵɵinject(TranslationService), ɵɵinject(SemanticPathService), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrganizationPageMetaResolver,
      factory: _OrganizationPageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationPageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ContentPageMetaResolver
  }, {
    type: TranslationService
  }, {
    type: SemanticPathService
  }, {
    type: RoutingService
  }], null);
})();
var OrganizationPageMetaModule = class _OrganizationPageMetaModule {
  static {
    this.ɵfac = function OrganizationPageMetaModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganizationPageMetaModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrganizationPageMetaModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: PageMetaResolver,
        useExisting: OrganizationPageMetaResolver,
        multi: true
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationPageMetaModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: PageMetaResolver,
        useExisting: OrganizationPageMetaResolver,
        multi: true
      }]
    }]
  }], null, null);
})();
var PermissionService = class _PermissionService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  loadPermission(permissionCode) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadPermission({
        userId,
        permissionCode
      })),
      error: () => {
      }
    });
  }
  loadPermissions(params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadPermissions2({
        userId,
        params
      })),
      error: () => {
      }
    });
  }
  loadPermissionTypes() {
    this.userIdService.takeUserId(true).subscribe({
      next: () => this.store.dispatch(new LoadPermissionTypes()),
      error: () => {
      }
    });
  }
  getPermission(permissionCode) {
    return this.store.select(getPermission(permissionCode));
  }
  getPermissionValue(permissionCode) {
    return this.store.select(getPermissionValue(permissionCode)).pipe(filter((permission) => Boolean(permission)));
  }
  getPermissionList(params) {
    return this.store.select(getPermissionList(params));
  }
  getPermissionTypeList() {
    return this.store.select(getPermissionTypes());
  }
  get(permissionCode) {
    const loading$ = this.getPermission(permissionCode).pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.loadPermission(permissionCode);
      }
    }));
    return using(() => loading$.subscribe(), () => this.getPermissionValue(permissionCode));
  }
  getTypes() {
    return this.getPermissionTypeList().pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadPermissionTypes();
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  getList(params) {
    return this.getPermissionList(params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadPermissions(params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  create(permission) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new CreatePermission({
        userId,
        permission
      })),
      error: () => {
      }
    });
  }
  update(permissionCode, permission) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UpdatePermission({
        userId,
        permissionCode,
        permission
      })),
      error: () => {
      }
    });
  }
  getLoadingStatus(permissionCode) {
    return getItemStatus(this.getPermission(permissionCode));
  }
  getPermissionState(code) {
    return this.store.select(getPermissionState(code));
  }
  getErrorState(permissionCode) {
    return this.getPermissionState(permissionCode).pipe(map((state) => state.error ?? false));
  }
  static {
    this.ɵfac = function PermissionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PermissionService,
      factory: _PermissionService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var UserGroupService = class _UserGroupService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
  }
  load(userGroupId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadUserGroup({
        userId,
        userGroupId
      })),
      error: () => {
      }
    });
  }
  loadList(params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadUserGroups({
        userId,
        params
      })),
      error: () => {
      }
    });
  }
  getUserGroup(userGroupId) {
    return this.store.select(getUserGroup(userGroupId));
  }
  getUserGroupValue(userGroupId) {
    return this.store.select(getUserGroupValue(userGroupId)).pipe(filter((userGroup) => Boolean(userGroup)));
  }
  getUserGroupList(params) {
    return this.store.select(getUserGroupList(params));
  }
  getAvailableOrgCustomersList(userGroupId, params) {
    return this.store.select(getAvailableOrgCustomers(userGroupId, params));
  }
  getAvailableOrderApprovalPermissionsList(userGroupId, params) {
    return this.store.select(getAvailableOrderApprovalPermissions(userGroupId, params));
  }
  get(userGroupUid) {
    const loading$ = this.getUserGroup(userGroupUid).pipe(auditTime(0), tap((state) => {
      if (!(state.loading || state.success || state.error)) {
        this.load(userGroupUid);
      }
    }));
    return using(() => loading$.subscribe(), () => this.getUserGroupValue(userGroupUid));
  }
  getList(params) {
    return this.getUserGroupList(params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadList(params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  create(userGroup) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new CreateUserGroup({
        userId,
        userGroup
      })),
      error: () => {
      }
    });
  }
  update(userGroupId, userGroup) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UpdateUserGroup({
        userId,
        userGroupId,
        userGroup
      })),
      error: () => {
      }
    });
  }
  getLoadingStatus(budgetCode) {
    return getItemStatus(this.getUserGroup(budgetCode));
  }
  delete(userGroupId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new DeleteUserGroup({
        userId,
        userGroupId
      })),
      error: () => {
      }
    });
  }
  loadAvailableOrgCustomers(userGroupId, params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadAvailableOrgCustomers({
        userId,
        userGroupId,
        params
      })),
      error: () => {
      }
    });
  }
  loadAvailableOrderApprovalPermissions(userGroupId, params) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new LoadPermissions$1({
        userId,
        userGroupId,
        params
      })),
      error: () => {
      }
    });
  }
  getAvailableOrgCustomers(userGroupId, params) {
    return this.getAvailableOrgCustomersList(userGroupId, params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadAvailableOrgCustomers(userGroupId, params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  getAvailableOrderApprovalPermissions(userGroupId, params) {
    return this.getAvailableOrderApprovalPermissionsList(userGroupId, params).pipe(observeOn(queueScheduler), tap((process) => {
      if (!(process.loading || process.success || process.error)) {
        this.loadAvailableOrderApprovalPermissions(userGroupId, params);
      }
    }), filter((process) => Boolean(process.success || process.error)), map((result) => result.value));
  }
  assignMember(userGroupId, customerId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new AssignMember({
        userId,
        userGroupId,
        customerId
      })),
      error: () => {
      }
    });
  }
  unassignMember(userGroupId, customerId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UnassignMember({
        userId,
        userGroupId,
        customerId
      })),
      error: () => {
      }
    });
  }
  unassignAllMembers(userGroupId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UnassignAllMembers({
        userId,
        userGroupId
      })),
      error: () => {
      }
    });
  }
  assignPermission(userGroupId, permissionUid) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new AssignPermission({
        userId,
        userGroupId,
        permissionUid
      })),
      error: () => {
      }
    });
  }
  unassignPermission(userGroupId, permissionUid) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => this.store.dispatch(new UnassignPermission({
        userId,
        userGroupId,
        permissionUid
      })),
      error: () => {
      }
    });
  }
  getUserGroupState(code) {
    return this.store.select(getUserGroupState(code));
  }
  getErrorState(code) {
    return this.getUserGroupState(code).pipe(map((state) => state.error ?? false));
  }
  static {
    this.ɵfac = function UserGroupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGroupService,
      factory: _UserGroupService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var OrgUnitGuard = class _OrgUnitGuard {
  constructor(globalMessageService, orgUnitService, semanticPathService, router) {
    this.globalMessageService = globalMessageService;
    this.orgUnitService = orgUnitService;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    const isUpdatingUnitAllowed = this.orgUnitService.isUpdatingUnitAllowed();
    if (!isUpdatingUnitAllowed) {
      this.globalMessageService.add({
        key: "organization.notification.notExist"
      }, GlobalMessageType.MSG_TYPE_WARNING);
      return this.router.parseUrl(this.semanticPathService.get("organization") ?? "");
    }
    return isUpdatingUnitAllowed;
  }
  static {
    this.ɵfac = function OrgUnitGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrgUnitGuard)(ɵɵinject(GlobalMessageService), ɵɵinject(OrgUnitService), ɵɵinject(SemanticPathService), ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrgUnitGuard,
      factory: _OrgUnitGuard.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrgUnitGuard, [{
    type: Injectable
  }], () => [{
    type: GlobalMessageService
  }, {
    type: OrgUnitService
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var UserGuard = class _UserGuard {
  constructor(globalMessageService, b2bUserService, semanticPathService, router) {
    this.globalMessageService = globalMessageService;
    this.b2bUserService = b2bUserService;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    const isUpdatingUserAllowed = this.b2bUserService.isUpdatingUserAllowed();
    if (!isUpdatingUserAllowed) {
      this.globalMessageService.add({
        key: "organization.notification.notExist"
      }, GlobalMessageType.MSG_TYPE_WARNING);
      return this.router.parseUrl(this.semanticPathService.get("organization") ?? "");
    }
    return isUpdatingUserAllowed;
  }
  static {
    this.ɵfac = function UserGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGuard)(ɵɵinject(GlobalMessageService), ɵɵinject(B2BUserService), ɵɵinject(SemanticPathService), ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGuard,
      factory: _UserGuard.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGuard, [{
    type: Injectable
  }], () => [{
    type: GlobalMessageService
  }, {
    type: B2BUserService
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var OrganizationsGuardsModule = class _OrganizationsGuardsModule {
  static {
    this.ɵfac = function OrganizationsGuardsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganizationsGuardsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrganizationsGuardsModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [AdminGuard, UserGuard, OrgUnitGuard]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationsGuardsModule, [{
    type: NgModule,
    args: [{
      // To ensure effective over-providing from within the child injector of a lazy-loaded module
      // by other extension libraries or end-user customizations, it's essential to provide guards manually
      // in the child injector and not in the root injector (providedIn: 'root').
      //
      // If guards were provided in the root injector, the only place to over-provide them or their dependencies
      // would be the root injector (root module), which would break lazy loading for those guards and their dependencies.
      providers: [AdminGuard, UserGuard, OrgUnitGuard]
    }]
  }], null, null);
})();
var OrganizationBadRequestHandler = class _OrganizationBadRequestHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.BAD_REQUEST;
    this.costCenterMask = /ambiguous unique keys \{code\=(.*)\} for model B2BCostCenterModel/;
    this.unitMask = /ambiguous unique keys \{uid\=(.*)\} for model B2BUnitModel/;
    this.permissionMask = /Approval Permission with code\: (.*) already exists\./;
    this.unknownMask = /Model saving error\./;
  }
  hasMatch(errorResponse) {
    return super.hasMatch(errorResponse) && this.matchMask(errorResponse);
  }
  handleError(_request, response) {
    this.getErrors(response).forEach(({
      message
    }) => {
      if (message) {
        this.handleOrganizationConflict(message, this.costCenterMask, "costCenter");
        this.handleOrganizationConflict(message, this.unitMask, "unit");
        this.handleOrganizationConflict(message, this.permissionMask, "permission");
        this.handleOrganizationConflict(message, this.unknownMask, "unknown");
      }
    });
  }
  matchMask(response) {
    return this.getErrors(response).some((error) => [this.costCenterMask, this.unitMask, this.permissionMask, this.unknownMask].some((mask) => mask.test(error.message ?? "")));
  }
  handleOrganizationConflict(message, mask, key) {
    const result = message.match(mask);
    const params = {
      code: result?.[1]
    };
    if (result) {
      this.globalMessageService.add({
        key: `organization.httpHandlers.conflict.${key}`,
        params
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  getErrors(response) {
    return (response.error?.errors || []).filter((error) => error.type === "ModelSavingError" || error.type === "DuplicateUidError");
  }
  getPriority() {
    return Priority.NORMAL;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOrganizationBadRequestHandler_BaseFactory;
      return function OrganizationBadRequestHandler_Factory(__ngFactoryType__) {
        return (ɵOrganizationBadRequestHandler_BaseFactory || (ɵOrganizationBadRequestHandler_BaseFactory = ɵɵgetInheritedFactory(_OrganizationBadRequestHandler)))(__ngFactoryType__ || _OrganizationBadRequestHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrganizationBadRequestHandler,
      factory: _OrganizationBadRequestHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationBadRequestHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OrganizationConflictHandler = class _OrganizationConflictHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.CONFLICT;
    this.budgetMask = /Budget with code \[(.*)\] already exists/;
    this.userMask = /User already exists/;
    this.userGroupMask = /Member Permission with the same id already exists/;
    this.unitMask = /Organizational unit with uid \[(.*)\] already exists/;
  }
  hasMatch(errorResponse) {
    return super.hasMatch(errorResponse) && this.matchMask(errorResponse);
  }
  handleError(request, response) {
    return this.getErrors(response).forEach(({
      message
    }) => {
      if (message) {
        this.handleConflict(message, this.budgetMask, "budget");
        this.handleConflict(message, this.userMask, "user", request?.body?.email);
        this.handleConflict(message, this.userGroupMask, "userGroup", request?.body?.uid);
        this.handleConflict(message, this.unitMask, "unit");
      }
    });
  }
  matchMask(response) {
    return this.getErrors(response).some((error) => [this.budgetMask, this.userMask, this.userGroupMask, this.unitMask].some((mask) => mask.test(error.message ?? "")));
  }
  handleConflict(message, mask, key, code) {
    const result = message.match(mask);
    const params = {
      code: result?.[1] ?? code
    };
    if (result) {
      this.globalMessageService.add({
        key: `organization.httpHandlers.conflict.${key}`,
        params
      }, GlobalMessageType.MSG_TYPE_ERROR);
    }
  }
  getErrors(response) {
    return (response.error?.errors || []).filter((error) => error.type === "AlreadyExistsError");
  }
  getPriority() {
    return Priority.NORMAL;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵOrganizationConflictHandler_BaseFactory;
      return function OrganizationConflictHandler_Factory(__ngFactoryType__) {
        return (ɵOrganizationConflictHandler_BaseFactory || (ɵOrganizationConflictHandler_BaseFactory = ɵɵgetInheritedFactory(_OrganizationConflictHandler)))(__ngFactoryType__ || _OrganizationConflictHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrganizationConflictHandler,
      factory: _OrganizationConflictHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationConflictHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OrganizationStoreModule = class _OrganizationStoreModule {
  static {
    this.ɵfac = function OrganizationStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrganizationStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrganizationStoreModule,
      imports: [StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [reducerProvider],
      imports: [StoreModule.forFeature(ORGANIZATION_FEATURE, reducerToken, {
        metaReducers
      }), EffectsModule.forFeature(effects)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrganizationStoreModule, [{
    type: NgModule,
    args: [{
      imports: [StoreModule.forFeature(ORGANIZATION_FEATURE, reducerToken, {
        metaReducers
      }), EffectsModule.forFeature(effects)],
      providers: [reducerProvider]
    }]
  }], null, null);
})();
var AdministrationCoreModule = class _AdministrationCoreModule {
  static forRoot() {
    return {
      ngModule: _AdministrationCoreModule,
      providers: [BudgetConnector, OrgUnitConnector, UserGroupConnector, PermissionConnector, CostCenterConnector, B2BUserConnector]
    };
  }
  static {
    this.ɵfac = function AdministrationCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdministrationCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AdministrationCoreModule,
      imports: [OrganizationPageMetaModule, OrganizationStoreModule, OrganizationsGuardsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: HttpErrorHandler,
        useExisting: OrganizationConflictHandler,
        multi: true
      }, {
        provide: HttpErrorHandler,
        useExisting: OrganizationBadRequestHandler,
        multi: true
      }],
      imports: [OrganizationPageMetaModule, OrganizationStoreModule, OrganizationsGuardsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministrationCoreModule, [{
    type: NgModule,
    args: [{
      imports: [OrganizationPageMetaModule, OrganizationStoreModule, OrganizationsGuardsModule],
      providers: [{
        provide: HttpErrorHandler,
        useExisting: OrganizationConflictHandler,
        multi: true
      }, {
        provide: HttpErrorHandler,
        useExisting: OrganizationBadRequestHandler,
        multi: true
      }]
    }]
  }], null, null);
})();
var B2B_USER_NORMALIZER = new InjectionToken("B2BUserNormalizer");
var B2B_USER_SERIALIZER = new InjectionToken("B2BUserSerializer");
var B2B_USERS_NORMALIZER = new InjectionToken("UserListNormalizer");
var BUDGET_NORMALIZER = new InjectionToken("BudgetNormalizer");
var BUDGETS_NORMALIZER = new InjectionToken("BudgetsListNormalizer");
var BUDGET_SERIALIZER = new InjectionToken("BudgetSerializer");
var B2BUNIT_NODE_NORMALIZER = new InjectionToken("B2BUnitNodeNormalizer");
var B2BUNIT_NODE_LIST_NORMALIZER = new InjectionToken("B2BUnitNodeListNormalizer");
var B2BUNIT_NORMALIZER = new InjectionToken("B2BUnitNormalizer");
var B2BUNIT_SERIALIZER = new InjectionToken("B2BUnitSerializer");
var B2BUNIT_APPROVAL_PROCESSES_NORMALIZER = new InjectionToken("B2BUnitApprovalProcessNormalizer");
var PERMISSION_NORMALIZER = new InjectionToken("PermissionNormalizer");
var PERMISSIONS_NORMALIZER = new InjectionToken("PermissionsListNormalizer");
var PERMISSION_TYPE_NORMALIZER = new InjectionToken("PermissionTypeNormalizer");
var PERMISSION_TYPES_NORMALIZER = new InjectionToken("PermissionTypesListNormalizer");
var PERMISSION_SERIALIZER = new InjectionToken("PermissionSerializer");
var USER_GROUP_NORMALIZER = new InjectionToken("UserGroupNormalizer");
var USER_GROUP_SERIALIZER = new InjectionToken("UserGroupSerializer");
var USER_GROUPS_NORMALIZER = new InjectionToken("UserGroupListNormalizer");
var Period;
(function(Period2) {
  Period2["DAY"] = "DAY";
  Period2["WEEK"] = "WEEK";
  Period2["MONTH"] = "MONTH";
  Period2["QUARTER"] = "QUARTER";
  Period2["YEAR"] = "YEAR";
})(Period || (Period = {}));

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-administration-components.mjs
var _c0 = () => ({
  autofocus: true,
  focusOnEscape: true
});
function NotificationMessageComponent_cx_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-icon", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("type", ctx_r0.messageIcon);
  }
}
var _c1 = ["vcr"];
var _c2 = [[["", "actions", ""]], [["", "info", ""]], [["", "main", ""]]];
var _c3 = ["[actions]", "[info]", "[main]"];
var _c4 = (a0) => ({
  item: a0
});
var _c5 = () => ({
  placement: "auto",
  class: "hint-popover",
  appendToBody: true,
  displayCloseButton: true
});
function CardComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.i18nRoot + "_title");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 4, ctx_r0.i18nRoot + ".title", ɵɵpureFunction1(7, _c4, ɵɵpipeBind1(2, 2, ctx_r0.item$))), " ");
  }
}
function CardComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 3, ctx_r0.i18nRoot + ".title", ɵɵpureFunction1(6, _c4, ɵɵpipeBind1(2, 1, ctx_r0.item$))), " ");
  }
}
function CardComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 14);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵelement(3, "cx-icon", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const detailHint_r2 = ɵɵreference(23);
    ɵɵproperty("cxPopover", detailHint_r2)("cxPopoverOptions", ɵɵpureFunction0(9, _c5));
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 5, "organization.information"))("title", ɵɵpipeBind1(2, 7, "organization.information"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r0.iconTypes.INFO);
  }
}
function CardComponent_button_16_cx_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-icon", 18);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("click", function CardComponent_button_16_cx_icon_2_Template_cx_icon_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.closeView($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 1, "common.close"));
  }
}
function CardComponent_button_16_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(1, 1, ctx_r0.previousLabel));
  }
}
function CardComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 16);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtemplate(2, CardComponent_button_16_cx_icon_2_Template, 2, 3, "cx-icon", 17)(3, CardComponent_button_16_ng_template_3_Template, 2, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const prevLabel_r4 = ɵɵreference(4);
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 3, "common.close"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.previous === true)("ngIfElse", prevLabel_r4);
  }
}
function CardComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r0.i18nRoot + ".hint"), " ");
  }
}
var _c6 = [[["", "main", ""]]];
var _c7 = ["[main]"];
var _c8 = (a0) => ({
  autofocus: "input",
  refreshFocus: a0
});
function FormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 2);
    ɵɵlistener("submit", function FormComponent_form_0_Template_form_submit_0_listener() {
      const form_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.save(form_r2));
    });
    ɵɵelementStart(1, "cx-org-card", 3, 0)(3, "button", 4);
    ɵɵpipe(4, "async");
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 5)(8, "span", 6);
    ɵɵlistener("click", function FormComponent_form_0_Template_span_click_8_listener($event) {
      ɵɵrestoreView(_r1);
      const card_r4 = ɵɵreference(2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.back($event, card_r4));
    });
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(11, "section", 7);
    ɵɵprojection(12, 0, ["ngProjectAs", "[main]", 5, ["", "main", ""]]);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const form_r2 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("previous", false)("i18nRoot", ctx_r2.i18n)("subtitle", ctx_r2.subtitle)("cxFocus", ɵɵpureFunction1(13, _c8, form_r2));
    ɵɵadvance(2);
    ɵɵproperty("disabled", form_r2.disabled || ɵɵpipeBind1(4, 7, ctx_r2.disabled$));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 9, "organization.save"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 11, "organization.cancel"));
  }
}
var _c9 = [[["", "actions", ""]]];
var _c10 = ["[actions]"];
var _c11 = (a0) => ({
  title: a0
});
var _c12 = (a0) => ({
  count: a0
});
var _c13 = (a0) => ({
  cxRoute: a0
});
var _c14 = (a0, a1) => ({
  property: a0,
  value: a1
});
function ListComponent_ng_container_1_cx_view_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("id", ctx_r2.viewType + "_title");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 2, ctx_r2.viewType + ".header", ɵɵpureFunction1(5, _c12, ctx_r2.getListCount(data_r2))), " ");
  }
}
function ListComponent_ng_container_1_cx_view_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, ctx_r2.viewType + ".header", ɵɵpureFunction1(4, _c12, ctx_r2.getListCount(data_r2))), " ");
  }
}
function ListComponent_ng_container_1_cx_view_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const structure_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, structure_r4.type + ".sortBy"));
  }
}
function ListComponent_ng_container_1_cx_view_1_ng_select_15_ng_option_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ng-option", 22);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const sort_r6 = ctx.$implicit;
    const structure_r4 = ɵɵnextContext(3).ngIf;
    ɵɵproperty("value", sort_r6.code);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, structure_r4.type + ".sort." + sort_r6.code), " ");
  }
}
function ListComponent_ng_container_1_cx_view_1_ng_select_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ng-select", 20);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("change", function ListComponent_ng_container_1_cx_view_1_ng_select_15_Template_ng_select_change_0_listener() {
      ɵɵrestoreView(_r5);
      const data_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.sort(data_r2.pagination));
    });
    ɵɵtwoWayListener("ngModelChange", function ListComponent_ng_container_1_cx_view_1_ng_select_15_Template_ng_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(3);
      ɵɵtwoWayBindingSet(ctx_r2.sortCode, $event) || (ctx_r2.sortCode = $event);
      return ɵɵresetView($event);
    });
    ɵɵtemplate(2, ListComponent_ng_container_1_cx_view_1_ng_select_15_ng_option_2_Template, 3, 4, "ng-option", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext().ngIf;
    const structure_r4 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("searchable", false)("clearable", false)("tabIndex", 0);
    ɵɵtwoWayProperty("ngModel", ctx_r2.sortCode);
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 6, ctx_r2.sortCode ? structure_r4.type + ".sort." + ctx_r2.sortCode : structure_r4.type + ".sortBy"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", data_r2.sorts);
  }
}
function ListComponent_ng_container_1_cx_view_1_ng_container_17_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 24);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const structure_r4 = ɵɵnextContext(3).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(6, _c13, structure_r4.type + "Create")));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, ctx_r2.getCreateButtonLabel()), " ");
  }
}
function ListComponent_ng_container_1_cx_view_1_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ListComponent_ng_container_1_cx_view_1_ng_container_17_a_1_Template, 4, 8, "a", 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.hideAddButton);
  }
}
function ListComponent_ng_container_1_cx_view_1_cx_table_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-table", 25);
    ɵɵpipe(1, "async");
    ɵɵlistener("launch", function ListComponent_ng_container_1_cx_view_1_cx_table_18_Template_cx_table_launch_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.launchItem($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const data_r2 = ɵɵnextContext().ngIf;
    const structure_r4 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("structure", structure_r4)("data", data_r2.values)("i18nRoot", ctx_r2.domainType)("currentItem", ɵɵpureFunction2(6, _c14, ctx_r2.key, ɵɵpipeBind1(1, 4, ctx_r2.currentKey$)));
  }
}
function ListComponent_ng_container_1_cx_view_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-view", 6)(1, "div", 7)(2, "div", 8)(3, "h2");
    ɵɵtemplate(4, ListComponent_ng_container_1_cx_view_1_span_4_Template, 3, 7, "span", 9)(5, ListComponent_ng_container_1_cx_view_1_ng_container_5_Template, 3, 6, "ng-container", 10);
    ɵɵelementStart(6, "button", 11);
    ɵɵpipe(7, "cxTranslate");
    ɵɵpipe(8, "cxTranslate");
    ɵɵpipe(9, "cxTranslate");
    ɵɵpipe(10, "cxTranslate");
    ɵɵelement(11, "cx-icon", 12);
    ɵɵelementEnd()()();
    ɵɵelementStart(12, "div", 13)(13, "label");
    ɵɵtemplate(14, ListComponent_ng_container_1_cx_view_1_span_14_Template, 3, 3, "span", 4)(15, ListComponent_ng_container_1_cx_view_1_ng_select_15_Template, 3, 8, "ng-select", 14);
    ɵɵelementEnd();
    ɵɵprojection(16);
    ɵɵtemplate(17, ListComponent_ng_container_1_cx_view_1_ng_container_17_Template, 2, 1, "ng-container", 15);
    ɵɵelementEnd()();
    ɵɵtemplate(18, ListComponent_ng_container_1_cx_view_1_cx_table_18_Template, 2, 9, "cx-table", 16);
    ɵɵelementStart(19, "div", 17)(20, "cx-pagination", 18);
    ɵɵlistener("viewPageEvent", function ListComponent_ng_container_1_cx_view_1_Template_cx_pagination_viewPageEvent_20_listener($event) {
      const data_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.browse(data_r2.pagination, $event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const data_r2 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext(2);
    const emptyList_r8 = ɵɵreference(4);
    const listHint_r9 = ɵɵreference(6);
    const showButton_r10 = ɵɵreference(8);
    ɵɵattribute("aria-labelledby", ctx_r2.viewType + "_title");
    ɵɵadvance(4);
    ɵɵproperty("cxFeature", "a11yRegionAssociatedHeaders");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yRegionAssociatedHeaders");
    ɵɵadvance();
    ɵɵproperty("cxPopover", listHint_r9)("cxPopoverOptions", ɵɵpureFunction0(25, _c5));
    ɵɵattribute("aria-label", ɵɵpipeBind2(8, 17, "organization.information", ɵɵpureFunction1(26, _c11, ɵɵpipeBind1(7, 15, ctx_r2.viewType + ".groupName"))))("title", ɵɵpipeBind2(10, 22, "organization.information", ɵɵpureFunction1(28, _c11, ɵɵpipeBind1(9, 20, ctx_r2.viewType + ".groupName"))));
    ɵɵadvance(5);
    ɵɵproperty("type", ctx_r2.iconTypes.INFO);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", data_r2.pagination == null ? null : data_r2.pagination.sort);
    ɵɵadvance();
    ɵɵproperty("ngIf", data_r2.pagination == null ? null : data_r2.pagination.sort);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.createButtonType === ctx_r2.createButtonAllTypes.LINK)("ngIfElse", showButton_r10);
    ɵɵadvance();
    ɵɵproperty("ngIf", data_r2.values && data_r2.values.length > 0)("ngIfElse", emptyList_r8);
    ɵɵadvance(2);
    ɵɵproperty("pagination", data_r2.pagination);
  }
}
function ListComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ListComponent_ng_container_1_cx_view_1_Template, 21, 30, "cx-view", 5);
    ɵɵpipe(2, "async");
    ɵɵelement(3, "router-outlet");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.listData$));
  }
}
function ListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 26);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "organization.messages.emptyList"), " ");
  }
}
function ListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r2.viewType + ".hint"), " ");
  }
}
function ListComponent_ng_template_7_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 28);
    ɵɵlistener("click", function ListComponent_ng_template_7_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onCreateButtonClick());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r2.getCreateButtonLabel()), " ");
  }
}
function ListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ListComponent_ng_template_7_button_0_Template, 3, 3, "button", 27);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r2.hideAddButton);
  }
}
var _c15 = (a0, a1) => ({
  cxRoute: a0,
  params: a1
});
function CellComponent_a_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CellComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 2);
    ɵɵpipe(1, "cxUrl");
    ɵɵtemplate(2, CellComponent_a_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const text_r2 = ɵɵreference(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction2(5, _c15, ctx_r0.route, ctx_r0.routeModel)))("tabIndex", ctx_r0.tabIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", text_r2);
  }
}
function CellComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("title", ctx_r0.property);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.property);
  }
}
function AssignCellComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵlistener("click", function AssignCellComponent_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.toggleAssign());
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.isAssigned ? "unassign" : "assign", " ");
  }
}
var _c16 = [[["", "actions", ""]], [["", "main", ""]], [["", "info", ""]]];
var _c17 = ["[actions]", "[main]", "[info]"];
var _c18 = () => ({
  autofocus: true
});
function SubListComponent_ng_container_4_ng_container_1_cx_table_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-table", 7);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const data_r1 = ɵɵnextContext().ngIf;
    const structure_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("structure", structure_r2)("data", data_r1.values)("i18nRoot", ctx_r2.domainType)("currentItem", ɵɵpureFunction2(6, _c14, ctx_r2.key, ɵɵpipeBind1(1, 4, ctx_r2.subKey$)));
  }
}
function SubListComponent_ng_container_4_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 8)(1, "cx-pagination", 9);
    ɵɵlistener("viewPageEvent", function SubListComponent_ng_container_4_ng_container_1_div_3_Template_cx_pagination_viewPageEvent_1_listener($event) {
      ɵɵrestoreView(_r4);
      const data_r1 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.browse(data_r1.pagination, $event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("pagination", data_r1.pagination);
  }
}
function SubListComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "section");
    ɵɵtemplate(2, SubListComponent_ng_container_4_ng_container_1_cx_table_2_Template, 2, 9, "cx-table", 5);
    ɵɵelementEnd();
    ɵɵtemplate(3, SubListComponent_ng_container_4_ng_container_1_div_3_Template, 2, 1, "div", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    ɵɵnextContext(2);
    const emptyList_r5 = ɵɵreference(7);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", data_r1.values && data_r1.values.length > 0)("ngIfElse", emptyList_r5);
    ɵɵadvance();
    ɵɵproperty("ngIf", data_r1.pagination && data_r1.pagination.totalPages !== void 0 && data_r1.pagination.totalPages > 1);
  }
}
function SubListComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, SubListComponent_ng_container_4_ng_container_1_Template, 4, 3, "ng-container", 4);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.listData$));
  }
}
function SubListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "organization.messages.emptyList"));
  }
}
var _c19 = () => ({
  focusOnEscape: true
});
var _c20 = () => ({
  autofocus: "button.primary"
});
function ConfirmationMessageComponent_p_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 7);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r0.messageTitle), " ");
  }
}
function ConfirmationMessageComponent_cx_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-icon", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("type", ctx_r0.messageIcon);
  }
}
function ToggleStatusComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function ToggleStatusComponent_button_0_Template_button_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.toggle(item_r2));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.isDisabled(item_r2) || ɵɵpipeBind1(1, 2, ctx_r2.isInEditMode$) && item_r2.active && ctx_r2.disabled !== true);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "organization." + (item_r2.active ? "disable" : "enable")), "\n");
  }
}
function DeleteItemComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 1);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function DeleteItemComponent_button_0_Template_button_click_0_listener() {
      const item_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.delete(item_r2));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ɵɵpipeBind1(1, 2, ctx_r2.isInEditMode$));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "organization.delete"), "\n");
  }
}
var _c21 = ["*"];
function DisableInfoComponent_ng_container_0_section_1_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r0.i18nRoot + ".info.disabledEnable"), " ");
  }
}
function DisableInfoComponent_ng_container_0_section_1_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r0.i18nRoot + ".info.disabledCreate"), " ");
  }
}
function DisableInfoComponent_ng_container_0_section_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r0.i18nRoot + ".info.disabledEdit"), " ");
  }
}
function DisableInfoComponent_ng_container_0_section_1_li_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r0.i18nRoot + ".info.disabledDisable"), " ");
  }
}
function DisableInfoComponent_ng_container_0_section_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "section");
    ɵɵelement(1, "cx-icon", 1);
    ɵɵelementStart(2, "ul");
    ɵɵtemplate(3, DisableInfoComponent_ng_container_0_section_1_li_3_Template, 3, 3, "li", 0)(4, DisableInfoComponent_ng_container_0_section_1_li_4_Template, 3, 3, "li", 0)(5, DisableInfoComponent_ng_container_0_section_1_li_5_Template, 3, 3, "li", 0)(6, DisableInfoComponent_ng_container_0_section_1_li_6_Template, 3, 3, "li", 0);
    ɵɵprojection(7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext().ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.iconTypes.INFO);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.displayDisabledEnable(item_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.displayDisabledCreate(item_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.displayDisabledEdit(item_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.displayDisabledDisable(item_r2));
  }
}
function DisableInfoComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DisableInfoComponent_ng_container_0_section_1_Template, 8, 5, "section", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.displayDisabledCreate(item_r2) || ctx_r0.displayDisabledEdit(item_r2) || ctx_r0.displayDisabledEnable(item_r2) || ctx_r0.displayDisabledDisable(item_r2) || ctx_r0.displayCustomInfo);
  }
}
function ActiveLinkCellComponent_a_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ActiveLinkCellComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 2);
    ɵɵpipe(1, "cxUrl");
    ɵɵtemplate(2, ActiveLinkCellComponent_a_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const text_r2 = ɵɵreference(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction2(5, _c15, ctx_r0.route, ctx_r0.routeModel)))("tabIndex", ctx_r0.tabIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", text_r2);
  }
}
function ActiveLinkCellComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("title", ctx_r0.property);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.property);
  }
}
function AmountCellComponent_a_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function AmountCellComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 2);
    ɵɵpipe(1, "cxUrl");
    ɵɵtemplate(2, AmountCellComponent_a_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const text_r2 = ɵɵreference(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction2(5, _c15, ctx_r0.route, ctx_r0.routeModel)))("tabIndex", ctx_r0.tabIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", text_r2);
  }
}
function AmountCellComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("title", ctx_r0.property);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.property);
  }
}
function DateRangeCellComponent_a_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DateRangeCellComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 2);
    ɵɵpipe(1, "cxUrl");
    ɵɵtemplate(2, DateRangeCellComponent_a_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const text_r2 = ɵɵreference(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction2(5, _c15, ctx_r0.route, ctx_r0.routeModel)))("tabindex", ctx_r0.tabIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", text_r2);
  }
}
function DateRangeCellComponent_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵpipe(1, "cxDate");
    ɵɵpipe(2, "cxDate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxDate");
    ɵɵpipe(5, "cxDate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate2("title", "", ɵɵpipeBind1(1, 5, ctx_r0.model.startDate), " - ", ɵɵpipeBind1(2, 7, ctx_r0.model.endDate), "");
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(4, 9, ctx_r0.model.startDate), " - ", ɵɵpipeBind1(5, 11, ctx_r0.model.endDate), " ");
  }
}
function DateRangeCellComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DateRangeCellComponent_ng_template_1_span_0_Template, 6, 13, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.hasRange);
  }
}
function LimitCellComponent_a_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function LimitCellComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 2);
    ɵɵpipe(1, "cxUrl");
    ɵɵtemplate(2, LimitCellComponent_a_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const threshold_r2 = ɵɵreference(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction2(5, _c15, ctx_r0.route, ctx_r0.routeModel)))("tabindex", ctx_r0.tabIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", threshold_r2);
  }
}
function LimitCellComponent_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate3("title", "", ctx_r0.model.threshold, " ", ctx_r0.model.currency == null ? null : ctx_r0.model.currency.symbol, " ", ɵɵpipeBind1(1, 7, "orgPurchaseLimit.per." + ctx_r0.model.periodRange), "");
    ɵɵadvance(2);
    ɵɵtextInterpolate3(" ", ctx_r0.model.threshold, " ", ctx_r0.model.currency == null ? null : ctx_r0.model.currency.symbol, " ", ɵɵpipeBind1(3, 9, "orgPurchaseLimit.per." + ctx_r0.model.periodRange), " ");
  }
}
function LimitCellComponent_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate2("title", "", ctx_r0.model.threshold, " ", ctx_r0.model.currency == null ? null : ctx_r0.model.currency.symbol, "");
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ctx_r0.model.threshold, " ", ctx_r0.model.currency == null ? null : ctx_r0.model.currency.symbol, " ");
  }
}
function LimitCellComponent_ng_template_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ctx_r0.model.orderApprovalPermissionType.name);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.model.orderApprovalPermissionType.name, " ");
  }
}
function LimitCellComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, LimitCellComponent_ng_template_1_span_0_Template, 4, 11, "span", 4)(1, LimitCellComponent_ng_template_1_span_1_Template, 2, 5, "span", 4)(2, LimitCellComponent_ng_template_1_span_2_Template, 2, 2, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.isTimeSpanThreshold);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isOrderThreshold);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isExceedPermission);
  }
}
function RolesCellComponent_a_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function RolesCellComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 2);
    ɵɵpipe(1, "cxUrl");
    ɵɵtemplate(2, RolesCellComponent_a_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const text_r2 = ɵɵreference(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction2(5, _c15, ctx_r0.route, ctx_r0.routeModel)))("tabindex", ctx_r0.tabIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", text_r2);
  }
}
function RolesCellComponent_ng_template_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 7);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    ɵɵproperty("innerText", ɵɵpipeBind1(1, 1, "organization.userRoles." + role_r3));
  }
}
function RolesCellComponent_ng_template_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1, "-");
    ɵɵelementEnd();
  }
}
function RolesCellComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 4);
    ɵɵtemplate(1, RolesCellComponent_ng_template_1_li_1_Template, 2, 3, "li", 5)(2, RolesCellComponent_ng_template_1_li_2_Template, 2, 0, "li", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.model.roles);
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r0.model.roles == null ? null : ctx_r0.model.roles.length) === 0);
  }
}
function StatusCellComponent_a_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function StatusCellComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 2);
    ɵɵpipe(1, "cxUrl");
    ɵɵtemplate(2, StatusCellComponent_a_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const text_r2 = ɵɵreference(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction2(5, _c15, ctx_r0.route, ctx_r0.routeModel)))("tabindex", ctx_r0.tabIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", text_r2);
  }
}
function StatusCellComponent_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassProp("is-active", ctx_r0.isActive);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 4, ctx_r0.label));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 6, ctx_r0.label), "");
  }
}
function StatusCellComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, StatusCellComponent_ng_template_1_span_0_Template, 4, 8, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.label);
  }
}
function UnitCellComponent_a_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function UnitCellComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 2);
    ɵɵpipe(1, "cxUrl");
    ɵɵtemplate(2, UnitCellComponent_a_0_ng_container_2_Template, 1, 0, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const text_r2 = ɵɵreference(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction2(5, _c15, ctx_r0.route, ctx_r0.routeModel)))("tabIndex", ctx_r0.tabIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", text_r2);
  }
}
function UnitCellComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("title", ctx_r0.property);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.property);
  }
}
var _c22 = () => ({
  placement: "auto",
  class: "my-company-popover",
  appendToBody: true,
  displayCloseButton: true
});
var _c23 = (a0) => ({
  cxRoute: "orgCostCenterDetails",
  params: a0
});
var _c24 = (a0) => ({
  cxRoute: "orgUnitDetails",
  params: a0
});
function CostCenterDetailsCellComponent_ng_template_0_div_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "a", 4);
    ɵɵpipe(5, "cxUrl");
    ɵɵtext(6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 3, "orgCostCenter.unit"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 5, ɵɵpureFunction1(7, _c24, ctx_r0.model.unit)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.model.unit == null ? null : ctx_r0.model.unit.name, " ");
  }
}
function CostCenterDetailsCellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "label");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 4);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 3)(9, "label");
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "span", 5);
    ɵɵtext(13);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 3)(15, "label");
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(18, "span", 5);
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(21, "div", 3)(22, "label");
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(25, "span", 5);
    ɵɵtext(26);
    ɵɵelementEnd()();
    ɵɵtemplate(27, CostCenterDetailsCellComponent_ng_template_0_div_27_Template, 7, 9, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 14, "orgCostCenter.name"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 16, ɵɵpureFunction1(26, _c23, ctx_r0.model)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.model.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 18, "orgCostCenter.code"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.model.code, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(17, 20, "orgCostCenter.active"));
    ɵɵadvance(2);
    ɵɵclassProp("is-active", ctx_r0.model.active)("is-inactive", !ctx_r0.model.active);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 22, ctx_r0.model.active ? "organization.enabled" : "organization.disabled"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(24, 24, "orgCostCenter.currency"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.model.currency == null ? null : ctx_r0.model.currency.isocode, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.model.unit);
  }
}
var _c25 = (a0) => ({
  refreshFocus: a0
});
var _c26 = (a0) => ({
  cxRoute: "orgBudgetEdit",
  params: a0
});
var _c27 = (a0) => ({
  cxRoute: "orgBudgetCostCenters",
  params: a0
});
function BudgetDetailsComponent_cx_org_card_0_a_56_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 11);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(6, _c27, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "orgBudget.links.costCenters"), " ");
  }
}
function BudgetDetailsComponent_cx_org_card_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cx-org-card", 1)(1, "a", 2);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "cxUrl");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(6, "cx-org-toggle-status", 3)(7, "cx-org-disable-info", 4);
    ɵɵelementStart(8, "section", 5)(9, "div", 6)(10, "label");
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "span", 7);
    ɵɵtext(14);
    ɵɵelementEnd()();
    ɵɵelementStart(15, "div", 6)(16, "label");
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(19, "span", 7);
    ɵɵtext(20);
    ɵɵelementEnd()();
    ɵɵelementStart(21, "div", 6)(22, "label");
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(25, "span", 7);
    ɵɵtext(26);
    ɵɵpipe(27, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(28, "div", 6)(29, "label");
    ɵɵtext(30);
    ɵɵpipe(31, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(32, "span", 7);
    ɵɵtext(33);
    ɵɵpipe(34, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(35, "div", 6)(36, "label");
    ɵɵtext(37);
    ɵɵpipe(38, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(39, "span", 7);
    ɵɵtext(40);
    ɵɵpipe(41, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(42, "div", 6)(43, "label");
    ɵɵtext(44);
    ɵɵpipe(45, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(46, "span", 7);
    ɵɵtext(47);
    ɵɵelementEnd()();
    ɵɵelementStart(48, "div", 6)(49, "label");
    ɵɵtext(50);
    ɵɵpipe(51, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(52, "a", 8);
    ɵɵpipe(53, "cxUrl");
    ɵɵtext(54);
    ɵɵelementEnd()()();
    ɵɵelementStart(55, "section", 9);
    ɵɵtemplate(56, BudgetDetailsComponent_cx_org_card_0_a_56_Template, 4, 8, "a", 10);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const model_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cxFocus", ɵɵpureFunction1(52, _c25, model_r1));
    ɵɵadvance();
    ɵɵclassProp("disabled", !model_r1.active || ɵɵpipeBind1(2, 24, ctx_r1.isInEditMode$));
    ɵɵproperty("routerLink", ɵɵpipeBind1(3, 26, ɵɵpureFunction1(54, _c26, model_r1)));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 28, "organization.edit"), " ");
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 30, "orgBudget.name"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(18, 32, "orgBudget.code"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.code, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(24, 34, "orgBudget.startDate"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 36, model_r1.startDate), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(31, 38, "orgBudget.endDate"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(34, 40, model_r1.endDate), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(38, 42, "orgBudget.active"));
    ɵɵadvance(2);
    ɵɵclassProp("is-active", model_r1.active);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(41, 44, model_r1.active ? "organization.enabled" : "organization.disabled"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(45, 46, "orgBudget.amount"));
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", model_r1.budget, " ", model_r1.currency == null ? null : model_r1.currency.isocode, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(51, 48, "orgBudget.unit"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(53, 50, ɵɵpureFunction1(56, _c24, model_r1.orgUnit)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", model_r1.orgUnit == null ? null : model_r1.orgUnit.name, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", model_r1.code);
  }
}
var _c28 = (a0) => ({
  label: a0
});
var _c29 = () => ({
  required: "true"
});
function BudgetFormComponent_ng_container_1_label_50_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 11)(1, "span", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(5, "ng-select", 17);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-form-errors", 18);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_9_0;
    let tmp_11_0;
    const units_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", ctx_r1.form.get("orgUnit"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 12, "orgBudget.businessUnits"), " ");
    ɵɵadvance(3);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(18, _c29))("searchable", true)("clearable", false)("items", units_r3)("readonly", (tmp_9_0 = (tmp_9_0 = ctx_r1.form.get("orgUnit.uid")) == null ? null : tmp_9_0.disabled) !== null && tmp_9_0 !== void 0 ? tmp_9_0 : false)("placeholder", ɵɵpipeBind1(6, 14, "orgBudget.businessUnits"));
    ɵɵattribute("aria-invalid", ((tmp_11_0 = ctx_r1.form.get("uid")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx_r1.form.get("uid")) == null ? null : tmp_11_0.invalid))("aria-errormessage", "uidError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(19, _c28, ɵɵpipeBind1(8, 16, "orgBudget.businessUnits")))("control", ctx_r1.form.get("orgUnit.uid"));
  }
}
function BudgetFormComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0, 2);
    ɵɵelement(1, "cx-form-required-legend");
    ɵɵelementStart(2, "label")(3, "span", 3);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelement(6, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelementStart(7, "input", 4);
    ɵɵpipe(8, "cxTranslate");
    ɵɵlistener("blur", function BudgetFormComponent_ng_container_1_Template_input_blur_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.createCodeWithName(ctx_r1.form.get("name"), ctx_r1.form.get("code")));
    });
    ɵɵelementEnd();
    ɵɵelement(9, "cx-form-errors", 5);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "label")(12, "span", 3);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelement(15, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(16, "input", 6);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelement(18, "cx-form-errors", 7);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "label")(21, "span", 8);
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelement(24, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelementStart(25, "cx-date-picker", 9);
    ɵɵlistener("update", function BudgetFormComponent_ng_container_1_Template_cx_date_picker_update_25_listener() {
      let tmp_2_0;
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView((tmp_2_0 = ctx_r1.form.get("endDate")) == null ? null : tmp_2_0.updateValueAndValidity());
    });
    ɵɵelementEnd()();
    ɵɵelementStart(26, "label")(27, "span", 8);
    ɵɵtext(28);
    ɵɵpipe(29, "cxTranslate");
    ɵɵelement(30, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelementStart(31, "cx-date-picker", 10);
    ɵɵlistener("update", function BudgetFormComponent_ng_container_1_Template_cx_date_picker_update_31_listener() {
      let tmp_2_0;
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView((tmp_2_0 = ctx_r1.form.get("startDate")) == null ? null : tmp_2_0.updateValueAndValidity());
    });
    ɵɵelementEnd()();
    ɵɵelementStart(32, "label", 11)(33, "span", 3);
    ɵɵtext(34);
    ɵɵpipe(35, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(36, "ng-select", 12);
    ɵɵpipe(37, "async");
    ɵɵpipe(38, "cxTranslate");
    ɵɵelement(39, "cx-form-errors", 13);
    ɵɵpipe(40, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(41, "label")(42, "span", 8);
    ɵɵtext(43);
    ɵɵpipe(44, "cxTranslate");
    ɵɵelement(45, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(46, "input", 14);
    ɵɵpipe(47, "cxTranslate");
    ɵɵelement(48, "cx-form-errors", 15);
    ɵɵpipe(49, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(50, BudgetFormComponent_ng_container_1_label_50_Template, 9, 21, "label", 16);
    ɵɵpipe(51, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_10_0;
    let tmp_16_0;
    let tmp_20_0;
    let tmp_24_0;
    let tmp_30_0;
    let tmp_36_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 41, "orgBudget.name"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 43, "orgBudget.name"));
    ɵɵattribute("aria-invalid", ((tmp_4_0 = ctx_r1.form.get("name")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r1.form.get("name")) == null ? null : tmp_4_0.invalid))("aria-errormessage", "nameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(73, _c28, ɵɵpipeBind1(10, 45, "orgBudget.name")))("control", ctx_r1.form.get("name"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 47, "orgBudget.code"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(17, 49, "orgBudget.code"));
    ɵɵattribute("aria-invalid", ((tmp_10_0 = ctx_r1.form.get("code")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx_r1.form.get("code")) == null ? null : tmp_10_0.invalid))("aria-errormessage", "codeError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(75, _c28, ɵɵpipeBind1(19, 51, "orgBudget.code")))("control", ctx_r1.form.get("code"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 53, "orgBudget.startDate"), " ");
    ɵɵadvance(3);
    ɵɵproperty("control", ctx_r1.form.get("startDate"))("max", (tmp_16_0 = ctx_r1.form.get("endDate")) == null ? null : tmp_16_0.value)("required", true);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(29, 55, "orgBudget.endDate"), " ");
    ɵɵadvance(3);
    ɵɵproperty("control", ctx_r1.form.get("endDate"))("min", (tmp_20_0 = ctx_r1.form.get("startDate")) == null ? null : tmp_20_0.value)("required", true);
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r1.form.get("currency"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(35, 57, "orgBudget.currency"));
    ɵɵadvance(2);
    ɵɵclassProp("invalid", (tmp_24_0 = (tmp_24_0 = ctx_r1.form.get("currency.isocode")) == null ? null : tmp_24_0.invalid) !== null && tmp_24_0 !== void 0 ? tmp_24_0 : false);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(77, _c29))("searchable", false)("clearable", false)("items", ɵɵpipeBind1(37, 59, ctx_r1.currencies$))("placeholder", ɵɵpipeBind1(38, 61, "orgBudget.currency"));
    ɵɵattribute("aria-invalid", ((tmp_30_0 = ctx_r1.form.get("isocode")) == null ? null : tmp_30_0.touched) && ((tmp_30_0 = ctx_r1.form.get("isocode")) == null ? null : tmp_30_0.invalid))("aria-errormessage", "isocodeError");
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(78, _c28, ɵɵpipeBind1(40, 63, "orgBudget.currency")))("control", ctx_r1.form.get("currency.isocode"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(44, 65, "orgBudget.amount"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(47, 67, "orgBudget.amount"));
    ɵɵattribute("aria-invalid", ((tmp_36_0 = ctx_r1.form.get("budget")) == null ? null : tmp_36_0.touched) && ((tmp_36_0 = ctx_r1.form.get("budget")) == null ? null : tmp_36_0.invalid))("aria-errormessage", "budgetError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(80, _c28, ɵɵpipeBind1(49, 69, "orgBudget.amount")))("control", ctx_r1.form.get("budget"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(51, 71, ctx_r1.units$));
  }
}
var _c30 = (a0) => ({
  cxRoute: "orgBudgetDetails",
  params: a0
});
function BudgetDetailsCellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "label");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 4);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 3)(9, "label");
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "span", 5);
    ɵɵtext(13);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 3)(15, "label");
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(18, "span", 5);
    ɵɵtext(19);
    ɵɵpipe(20, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(21, "div", 3)(22, "label");
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(25, "span", 5);
    ɵɵtext(26);
    ɵɵpipe(27, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(28, "div", 3)(29, "label");
    ɵɵtext(30);
    ɵɵpipe(31, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(32, "span", 5);
    ɵɵtext(33);
    ɵɵpipe(34, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(35, "div", 3)(36, "label");
    ɵɵtext(37);
    ɵɵpipe(38, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(39, "span", 5);
    ɵɵtext(40);
    ɵɵelementEnd()();
    ɵɵelementStart(41, "div", 3)(42, "label");
    ɵɵtext(43);
    ɵɵpipe(44, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(45, "a", 4);
    ɵɵpipe(46, "cxUrl");
    ɵɵtext(47);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 19, "orgBudget.name"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 21, ɵɵpureFunction1(43, _c30, ctx_r0.model)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.model.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 23, "orgBudget.code"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.model.code, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(17, 25, "orgBudget.startDate"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 27, ctx_r0.model.startDate), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(24, 29, "orgBudget.endDate"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 31, ctx_r0.model.endDate), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(31, 33, "orgBudget.active"));
    ɵɵadvance(2);
    ɵɵclassProp("is-active", ctx_r0.model.active);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(34, 35, ctx_r0.model.active ? "organization.enabled" : "organization.disabled"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(38, 37, "orgBudget.amount"));
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", ctx_r0.model.budget, " ", ctx_r0.model.currency == null ? null : ctx_r0.model.currency.isocode, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(44, 39, "orgBudget.unit"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(46, 41, ɵɵpureFunction1(45, _c24, ctx_r0.model.orgUnit)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.model.orgUnit == null ? null : ctx_r0.model.orgUnit.name, " ");
  }
}
var _c31 = (a0) => ({
  cxRoute: "orgCostCenterEdit",
  params: a0
});
var _c32 = (a0) => ({
  cxRoute: "orgCostCenterBudgets",
  params: a0
});
function CostCenterDetailsComponent_cx_org_card_0_a_42_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 11);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(6, _c32, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "orgCostCenter.budget.link"), " ");
  }
}
function CostCenterDetailsComponent_cx_org_card_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cx-org-card", 1)(1, "a", 2);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "cxUrl");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(6, "cx-org-toggle-status", 3)(7, "cx-org-disable-info", 4);
    ɵɵelementStart(8, "section", 5)(9, "div", 6)(10, "label");
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "span", 7);
    ɵɵtext(14);
    ɵɵelementEnd()();
    ɵɵelementStart(15, "div", 6)(16, "label");
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(19, "span", 7);
    ɵɵtext(20);
    ɵɵelementEnd()();
    ɵɵelementStart(21, "div", 6)(22, "label");
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(25, "span", 7);
    ɵɵtext(26);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(28, "div", 6)(29, "label");
    ɵɵtext(30);
    ɵɵpipe(31, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(32, "span", 7);
    ɵɵtext(33);
    ɵɵelementEnd()();
    ɵɵelementStart(34, "div", 6)(35, "label");
    ɵɵtext(36);
    ɵɵpipe(37, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(38, "a", 8);
    ɵɵpipe(39, "cxUrl");
    ɵɵtext(40);
    ɵɵelementEnd()()();
    ɵɵelementStart(41, "section", 9);
    ɵɵtemplate(42, CostCenterDetailsComponent_cx_org_card_0_a_42_Template, 4, 8, "a", 10);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const model_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cxFocus", ɵɵpureFunction1(41, _c25, model_r1));
    ɵɵadvance();
    ɵɵclassProp("disabled", !model_r1.active || ɵɵpipeBind1(2, 21, ctx_r1.isInEditMode$));
    ɵɵproperty("routerLink", ɵɵpipeBind1(3, 23, ɵɵpureFunction1(43, _c31, model_r1)));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 25, "organization.edit"), " ");
    ɵɵadvance(7);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 27, "orgCostCenter.name"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(18, 29, "orgCostCenter.code"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.code, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(24, 31, "orgCostCenter.active"));
    ɵɵadvance(2);
    ɵɵclassProp("is-active", model_r1.active)("is-inactive", !model_r1.active);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 33, model_r1.active ? "organization.enabled" : "organization.disabled"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(31, 35, "orgCostCenter.currency"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.currency == null ? null : model_r1.currency.isocode, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(37, 37, "orgCostCenter.unit"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(39, 39, ɵɵpureFunction1(45, _c24, model_r1.unit)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", model_r1.unit == null ? null : model_r1.unit.name, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", model_r1.code);
  }
}
function CostCenterFormComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0, 2);
    ɵɵelement(1, "cx-form-required-legend");
    ɵɵelementStart(2, "label")(3, "span", 3);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelement(6, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelementStart(7, "input", 4);
    ɵɵpipe(8, "cxTranslate");
    ɵɵlistener("blur", function CostCenterFormComponent_ng_container_1_Template_input_blur_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.createCodeWithName(ctx_r1.form.get("name"), ctx_r1.form.get("code")));
    });
    ɵɵelementEnd();
    ɵɵelement(9, "cx-form-errors", 5);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "label")(12, "span", 3);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelement(15, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(16, "input", 6);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelement(18, "cx-form-errors", 7);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "label", 8)(21, "span", 3);
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelement(24, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(25, "ng-select", 9);
    ɵɵpipe(26, "async");
    ɵɵpipe(27, "cxTranslate");
    ɵɵelement(28, "cx-form-errors", 10);
    ɵɵpipe(29, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(30, "label", 11)(31, "span", 3);
    ɵɵtext(32);
    ɵɵpipe(33, "cxTranslate");
    ɵɵelement(34, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(35, "ng-select", 12);
    ɵɵpipe(36, "async");
    ɵɵpipe(37, "cxTranslate");
    ɵɵelement(38, "cx-form-errors", 10);
    ɵɵpipe(39, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_10_0;
    let tmp_15_0;
    let tmp_28_0;
    let tmp_29_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(5, 33, "orgCostCenter.name"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 35, "orgCostCenter.name"));
    ɵɵattribute("aria-invalid", ((tmp_4_0 = ctx_r1.form.get("name")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r1.form.get("name")) == null ? null : tmp_4_0.invalid))("aria-errormessage", "nameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(61, _c28, ɵɵpipeBind1(10, 37, "orgCostCenter.name")))("control", ctx_r1.form.get("name"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(14, 39, "orgCostCenter.code"));
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(17, 41, "orgCostCenter.code"));
    ɵɵattribute("aria-invalid", ((tmp_10_0 = ctx_r1.form.get("code")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx_r1.form.get("code")) == null ? null : tmp_10_0.invalid))("aria-errormessage", "codeError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(63, _c28, ɵɵpipeBind1(19, 43, "orgCostCenter.code")))("control", ctx_r1.form.get("code"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(23, 45, "orgCostCenter.currency"));
    ɵɵadvance(3);
    ɵɵclassProp("invalid", (tmp_15_0 = (tmp_15_0 = ctx_r1.form.get("currency.isocode")) == null ? null : tmp_15_0.invalid) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : false);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(65, _c29))("searchable", false)("clearable", false)("items", ɵɵpipeBind1(26, 47, ctx_r1.currencies$))("placeholder", ɵɵpipeBind1(27, 49, "orgCostCenter.currency"));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(66, _c28, ɵɵpipeBind1(29, 51, "orgCostCenter.currency")))("control", ctx_r1.form.get("currency.isocode"));
    ɵɵadvance(2);
    ɵɵproperty("formGroup", ctx_r1.form.get("unit"));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(33, 53, "orgCostCenter.unit"));
    ɵɵadvance(3);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(68, _c29))("searchable", true)("clearable", false)("items", (tmp_28_0 = ɵɵpipeBind1(36, 55, ctx_r1.units$)) !== null && tmp_28_0 !== void 0 ? tmp_28_0 : null)("readonly", (tmp_29_0 = (tmp_29_0 = ctx_r1.form.get("unit.uid")) == null ? null : tmp_29_0.disabled) !== null && tmp_29_0 !== void 0 ? tmp_29_0 : false)("placeholder", ɵɵpipeBind1(37, 57, "orgCostCenter.unit"));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(69, _c28, ɵɵpipeBind1(39, 59, "orgCostCenter.unit")))("control", ctx_r1.form.get("unit.uid"));
  }
}
var _c33 = (a0) => ({
  cxRoute: "orgPurchaseLimitEdit",
  params: a0
});
var _c34 = () => ({
  disabledEnable: false
});
function PermissionDetailsComponent_cx_org_card_0_div_28_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 7);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 3, "orgPurchaseLimit.threshold"));
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", model_r1.threshold, " ", model_r1.currency == null ? null : model_r1.currency.symbol, " ");
  }
}
function PermissionDetailsComponent_cx_org_card_0_div_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 7);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "orgPurchaseLimit.periodRange"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.periodRange, " ");
  }
}
function PermissionDetailsComponent_cx_org_card_0_a_34_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 10);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(4, _c24, model_r1.orgUnit)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", model_r1.orgUnit == null ? null : model_r1.orgUnit.name, " ");
  }
}
function PermissionDetailsComponent_cx_org_card_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cx-org-card", 1)(1, "a", 2);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "cxUrl");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(6, "cx-org-toggle-status", 3)(7, "cx-org-disable-info", 4);
    ɵɵelementStart(8, "section", 5)(9, "div", 6)(10, "label");
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "span", 7);
    ɵɵtext(14);
    ɵɵelementEnd()();
    ɵɵelementStart(15, "div", 6)(16, "label");
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(19, "span", 7);
    ɵɵtext(20);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(22, "div", 6)(23, "label");
    ɵɵtext(24);
    ɵɵpipe(25, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(26, "span", 7);
    ɵɵtext(27);
    ɵɵelementEnd()();
    ɵɵtemplate(28, PermissionDetailsComponent_cx_org_card_0_div_28_Template, 6, 5, "div", 8)(29, PermissionDetailsComponent_cx_org_card_0_div_29_Template, 6, 4, "div", 8);
    ɵɵelementStart(30, "div", 6)(31, "label");
    ɵɵtext(32);
    ɵɵpipe(33, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(34, PermissionDetailsComponent_cx_org_card_0_a_34_Template, 3, 6, "a", 9);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const model_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cxFocus", ɵɵpureFunction1(35, _c25, model_r1));
    ɵɵadvance();
    ɵɵclassProp("disabled", !model_r1.active || ɵɵpipeBind1(2, 19, ctx_r1.isInEditMode$));
    ɵɵproperty("routerLink", ɵɵpipeBind1(3, 21, ɵɵpureFunction1(37, _c33, model_r1)));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 23, "organization.edit"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", false);
    ɵɵadvance();
    ɵɵproperty("displayInfoConfig", ɵɵpureFunction0(39, _c34));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 25, "orgPurchaseLimit.code"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.code, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(18, 27, "orgPurchaseLimit.active"));
    ɵɵadvance(2);
    ɵɵclassProp("is-active", model_r1.active);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(21, 29, model_r1.active ? "organization.enabled" : "organization.disabled"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(25, 31, "orgPurchaseLimit.orderApprovalPermissionType"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.orderApprovalPermissionType == null ? null : model_r1.orderApprovalPermissionType.name, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", model_r1.threshold || model_r1.threshold === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", model_r1.periodRange);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(33, 33, "orgPurchaseLimit.unit"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", model_r1.code);
  }
}
function PermissionFormComponent_ng_container_1_label_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 8)(1, "span", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(5, "ng-select", 11);
    ɵɵpipe(6, "async");
    ɵɵpipe(7, "cxTranslate");
    ɵɵelement(8, "cx-form-errors", 10);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", ctx_r0.form.get("orderApprovalPermissionType"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 10, "orgPurchaseLimit.orderApprovalPermissionType"), " ");
    ɵɵadvance(3);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(18, _c29))("searchable", false)("clearable", false)("items", (tmp_7_0 = ɵɵpipeBind1(6, 12, ctx_r0.types$)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : null)("readonly", ctx_r0.form.disabled)("placeholder", ɵɵpipeBind1(7, 14, "orgPurchaseLimit.orderApprovalPermissionType"));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(19, _c28, ɵɵpipeBind1(9, 16, "orgPurchaseLimit.orderApprovalPermissionType")))("control", ctx_r0.form.get("orderApprovalPermissionType.code"));
  }
}
function PermissionFormComponent_ng_container_1_label_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label")(1, "span", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(5, "ng-select", 12);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-form-errors", 10);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 8, "orgPurchaseLimit.periodRange"), " ");
    ɵɵadvance(3);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(14, _c29))("searchable", false)("clearable", false)("items", ctx_r0.periods)("placeholder", ɵɵpipeBind1(6, 10, "orgPurchaseLimit.periodRange"));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(15, _c28, ɵɵpipeBind1(8, 12, "orgPurchaseLimit.periodRange")))("control", ctx_r0.form.get("periodRange"));
  }
}
function PermissionFormComponent_ng_container_1_label_14_ng_select_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-select", 14);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const currencies_r2 = ctx.ngIf;
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(7, _c29))("searchable", false)("clearable", false)("items", currencies_r2)("placeholder", ɵɵpipeBind1(1, 5, "orgPurchaseLimit.currency"));
  }
}
function PermissionFormComponent_ng_container_1_label_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 8)(1, "span", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵtemplate(5, PermissionFormComponent_ng_container_1_label_14_ng_select_5_Template, 2, 8, "ng-select", 13);
    ɵɵpipe(6, "async");
    ɵɵelement(7, "cx-form-errors", 10);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("formGroup", ctx_r0.form.get("currency"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "orgPurchaseLimit.currency"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ɵɵpipeBind1(6, 7, ctx_r0.currencies$));
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(11, _c28, ɵɵpipeBind1(8, 9, "orgPurchaseLimit.currency")))("control", ctx_r0.form.get("currency.isocode"));
  }
}
function PermissionFormComponent_ng_container_1_label_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label")(1, "span", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(5, "input", 15);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-form-errors", 16);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 6, "orgPurchaseLimit.threshold"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(6, 8, "orgPurchaseLimit.threshold"));
    ɵɵattribute("aria-invalid", ((tmp_4_0 = ctx_r0.form.get("threshold")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r0.form.get("threshold")) == null ? null : tmp_4_0.invalid))("aria-errormessage", "thresholdError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(12, _c28, ɵɵpipeBind1(8, 10, "orgPurchaseLimit.threshold")))("control", ctx_r0.form.get("threshold"));
  }
}
function PermissionFormComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 2);
    ɵɵelement(1, "cx-form-required-legend");
    ɵɵelementStart(2, "label")(3, "span", 3);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelement(6, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(7, "input", 4);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelement(9, "cx-form-errors", 5);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(11, PermissionFormComponent_ng_container_1_label_11_Template, 10, 21, "label", 6);
    ɵɵpipe(12, "async");
    ɵɵtemplate(13, PermissionFormComponent_ng_container_1_label_13_Template, 9, 17, "label", 7)(14, PermissionFormComponent_ng_container_1_label_14_Template, 9, 13, "label", 6)(15, PermissionFormComponent_ng_container_1_label_15_Template, 9, 14, "label", 7);
    ɵɵelementStart(16, "label", 8)(17, "span", 3);
    ɵɵtext(18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelement(20, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(21, "ng-select", 9);
    ɵɵpipe(22, "async");
    ɵɵpipe(23, "cxTranslate");
    ɵɵelement(24, "cx-form-errors", 10);
    ɵɵpipe(25, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_8_0;
    let tmp_17_0;
    let tmp_18_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r0.form);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 21, "orgPurchaseLimit.code"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 23, "orgPurchaseLimit.code"));
    ɵɵattribute("aria-invalid", ((tmp_4_0 = ctx_r0.form.get("code")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r0.form.get("code")) == null ? null : tmp_4_0.invalid))("aria-errormessage", "codeError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(37, _c28, ɵɵpipeBind1(10, 25, "orgPurchaseLimit.code")))("control", ctx_r0.form.get("code"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (tmp_8_0 = ɵɵpipeBind1(12, 27, ctx_r0.types$)) == null ? null : tmp_8_0.length);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.form.get("periodRange"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.form.get("currency"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.form.get("threshold"));
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r0.form.get("orgUnit"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 29, "orgPurchaseLimit.orgUnit"), " ");
    ɵɵadvance(3);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(39, _c29))("searchable", true)("clearable", false)("items", (tmp_17_0 = ɵɵpipeBind1(22, 31, ctx_r0.units$)) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : null)("readonly", (tmp_18_0 = (tmp_18_0 = ctx_r0.form.get("orgUnit")) == null ? null : tmp_18_0.disabled) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : false)("placeholder", ɵɵpipeBind1(23, 33, "orgPurchaseLimit.orgUnit"));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(40, _c28, ɵɵpipeBind1(25, 35, "orgPurchaseLimit.orgUnit")))("control", ctx_r0.form.get("orgUnit.uid"));
  }
}
var _c35 = () => ({
  disabledDisable: true
});
var _c36 = (a0) => ({
  cxRoute: "orgUnitEdit",
  params: a0
});
var _c37 = (a0) => ({
  cxRoute: "orgUnitUserList",
  params: a0
});
var _c38 = (a0) => ({
  cxRoute: "orgUnitApprovers",
  params: a0
});
var _c39 = (a0) => ({
  cxRoute: "orgUnitAddressList",
  params: a0
});
var _c40 = (a0) => ({
  cxRoute: "orgUnitCostCenters",
  params: a0
});
var _c41 = (a0) => ({
  cxRoute: "orgUnitChildren",
  params: a0
});
function UnitDetailsComponent_cx_org_card_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 11);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "cxUrl");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("disabled", !model_r1.active || ɵɵpipeBind1(1, 4, ctx_r1.isInEditMode$));
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 6, ɵɵpureFunction1(10, _c36, model_r1)));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 8, "organization.edit"), " ");
  }
}
function UnitDetailsComponent_cx_org_card_0_cx_org_toggle_status_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-org-toggle-status", 12);
  }
}
function UnitDetailsComponent_cx_org_card_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 7);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "orgUnit.approvalProcess"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.approvalProcess == null ? null : model_r1.approvalProcess.name, " ");
  }
}
function UnitDetailsComponent_cx_org_card_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "a", 13);
    ɵɵpipe(5, "cxTranslate");
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 4, "orgUnit.parentUnit"));
    ɵɵadvance(2);
    ɵɵproperty("ariaLabel", (tmp_4_0 = model_r1.parentOrgUnit == null ? null : model_r1.parentOrgUnit.name) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ɵɵpipeBind1(5, 6, "orgUnit.parentUnit"))("routerLink", ɵɵpipeBind1(6, 8, ɵɵpureFunction1(10, _c24, model_r1.parentOrgUnit)));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.parentOrgUnit == null ? null : model_r1.parentOrgUnit.name, " ");
  }
}
function UnitDetailsComponent_cx_org_card_0_ng_container_27_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 15);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext(2).ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(6, _c41, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "orgUnit.links.units"), " ");
  }
}
function UnitDetailsComponent_cx_org_card_0_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UnitDetailsComponent_cx_org_card_0_ng_container_27_a_1_Template, 4, 8, "a", 14);
    ɵɵelementStart(2, "a", 15);
    ɵɵpipe(3, "cxUrl");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "a", 16);
    ɵɵpipe(7, "cxUrl");
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "a", 16);
    ɵɵpipe(11, "cxUrl");
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(14, "a", 16);
    ɵɵpipe(15, "cxUrl");
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isUpdatingUnitAllowed);
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(3, 9, ɵɵpureFunction1(25, _c37, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 11, "orgUnit.links.users"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(7, 13, ɵɵpureFunction1(27, _c38, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 15, "orgUnit.links.approvers"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(11, 17, ɵɵpureFunction1(29, _c39, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 19, "orgUnit.links.shippingAddresses"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(15, 21, ɵɵpureFunction1(31, _c40, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 23, "orgUnit.links.costCenters"), " ");
  }
}
function UnitDetailsComponent_cx_org_card_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cx-org-card", 1);
    ɵɵtemplate(1, UnitDetailsComponent_cx_org_card_0_a_1_Template, 5, 12, "a", 2)(2, UnitDetailsComponent_cx_org_card_0_cx_org_toggle_status_2_Template, 1, 0, "cx-org-toggle-status", 3);
    ɵɵelement(3, "cx-org-disable-info", 4);
    ɵɵelementStart(4, "section", 5)(5, "div", 6)(6, "label");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "span", 7);
    ɵɵtext(10);
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 6)(12, "label");
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(15, "span", 7);
    ɵɵtext(16);
    ɵɵelementEnd()();
    ɵɵelementStart(17, "div", 6)(18, "label");
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(21, "span", 7);
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(24, UnitDetailsComponent_cx_org_card_0_div_24_Template, 6, 4, "div", 8)(25, UnitDetailsComponent_cx_org_card_0_div_25_Template, 8, 12, "div", 8);
    ɵɵelementEnd();
    ɵɵelementStart(26, "section", 9);
    ɵɵtemplate(27, UnitDetailsComponent_cx_org_card_0_ng_container_27_Template, 18, 33, "ng-container", 10);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const model_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cxFocus", ɵɵpureFunction1(24, _c25, model_r1))("showHint", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isUpdatingUnitAllowed);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isUpdatingUnitAllowed);
    ɵɵadvance();
    ɵɵproperty("displayInfoConfig", ɵɵpureFunction0(26, _c35));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 16, "orgUnit.name"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(14, 18, "orgUnit.uid"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.uid, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(20, 20, "orgUnit.active"));
    ɵɵadvance(2);
    ɵɵclassProp("is-active", model_r1.active);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 22, model_r1.active ? "organization.enabled" : "organization.disabled"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", model_r1.approvalProcess == null ? null : model_r1.approvalProcess.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", model_r1.parentOrgUnit);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", model_r1.uid);
  }
}
var _c42 = () => ({});
function UnitFormComponent_ng_container_1_ng_select_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-select", 14);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "cxTranslate");
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("searchable", false)("clearable", false)("items", ɵɵpipeBind1(1, 7, ctx_r1.approvalProcess$))("placeholder", ɵɵpipeBind1(2, 9, "orgUnit.approvalProcess"))("cxNgSelectA11y", ɵɵpureFunction0(11, _c42));
    ɵɵattribute("aria-invalid", ((tmp_8_0 = ctx_r1.form.get("code")) == null ? null : tmp_8_0.touched) && ((tmp_8_0 = ctx_r1.form.get("code")) == null ? null : tmp_8_0.invalid))("aria-errormessage", "codeError");
  }
}
function UnitFormComponent_ng_container_1_ng_select_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-select", 15);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "cxTranslate");
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(10, _c29))("searchable", false)("items", ɵɵpipeBind1(1, 6, ctx_r1.approvalProcess$))("placeholder", ɵɵpipeBind1(2, 8, "orgUnit.approvalProcess"));
    ɵɵattribute("aria-invalid", ((tmp_7_0 = ctx_r1.form.get("code")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx_r1.form.get("code")) == null ? null : tmp_7_0.invalid))("aria-errormessage", "codeError");
  }
}
function UnitFormComponent_ng_container_1_ng_container_30_ng_select_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-select", 20);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "cxTranslate");
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_10_0;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(12, _c29))("searchable", true)("clearable", false)("items", (tmp_7_0 = ɵɵpipeBind1(1, 8, ctx_r1.units$)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : null)("placeholder", ɵɵpipeBind1(2, 10, "orgUnit.form.parentOrgUnit"))("cxNgSelectA11y", ɵɵpureFunction0(13, _c42));
    ɵɵattribute("aria-invalid", ((tmp_10_0 = ctx_r1.form.get("uid")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx_r1.form.get("uid")) == null ? null : tmp_10_0.invalid))("aria-errormessage", "codeError");
  }
}
function UnitFormComponent_ng_container_1_ng_container_30_ng_select_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ng-select", 21);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "cxTranslate");
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_9_0;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(11, _c29))("searchable", true)("clearable", false)("items", (tmp_7_0 = ɵɵpipeBind1(1, 7, ctx_r1.units$)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : null)("placeholder", ɵɵpipeBind1(2, 9, "orgUnit.form.parentOrgUnit"));
    ɵɵattribute("aria-invalid", ((tmp_9_0 = ctx_r1.form.get("uid")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx_r1.form.get("uid")) == null ? null : tmp_9_0.invalid))("aria-errormessage", "parentUnitUidError");
  }
}
function UnitFormComponent_ng_container_1_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label", 16)(2, "span", 4);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelement(5, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵtemplate(6, UnitFormComponent_ng_container_1_ng_container_30_ng_select_6_Template, 3, 14, "ng-select", 17)(7, UnitFormComponent_ng_container_1_ng_container_30_ng_select_7_Template, 3, 12, "ng-select", 18);
    ɵɵelement(8, "cx-form-errors", 19);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 5, "orgUnit.form.parentOrgUnit"), " ");
    ɵɵadvance(3);
    ɵɵproperty("cxFeature", "a11yApprovalProcessWithNoClearable");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yApprovalProcessWithNoClearable");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(9, _c28, ɵɵpipeBind1(9, 7, "orgUnit.form.parentOrgUnit")))("control", ctx_r1.form.get("parentOrgUnit.uid"));
  }
}
function UnitFormComponent_ng_container_1_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "orgUnit.form.parentOrgUnitNotes"));
  }
}
function UnitFormComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0, 3);
    ɵɵelement(1, "cx-form-required-legend");
    ɵɵelementStart(2, "label")(3, "span", 4)(4, "span");
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(7, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelementStart(8, "input", 5);
    ɵɵpipe(9, "cxTranslate");
    ɵɵlistener("blur", function UnitFormComponent_ng_container_1_Template_input_blur_8_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.createUidWithName(ctx_r1.form.get("name"), ctx_r1.form.get("uid")));
    });
    ɵɵelementEnd();
    ɵɵelement(10, "cx-form-errors", 6);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "label")(13, "span", 4)(14, "span");
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(17, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(18, "input", 7);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelement(20, "cx-form-errors", 8);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(22, "label", 9)(23, "span", 4);
    ɵɵtext(24);
    ɵɵpipe(25, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(26, UnitFormComponent_ng_container_1_ng_select_26_Template, 3, 12, "ng-select", 10)(27, UnitFormComponent_ng_container_1_ng_select_27_Template, 3, 11, "ng-select", 11);
    ɵɵelement(28, "cx-form-errors", 12);
    ɵɵpipe(29, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(30, UnitFormComponent_ng_container_1_ng_container_30_Template, 10, 11, "ng-container", 13)(31, UnitFormComponent_ng_container_1_ng_template_31_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_11_0;
    const parentOrgUnitNotes_r3 = ɵɵreference(32);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 20, "orgUnit.name"));
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(9, 22, "orgUnit.name"));
    ɵɵattribute("aria-invalid", ((tmp_5_0 = ctx_r1.form.get("name")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.form.get("name")) == null ? null : tmp_5_0.invalid))("aria-errormessage", "nameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(36, _c28, ɵɵpipeBind1(11, 24, "orgUnit.name")))("control", ctx_r1.form.get("name"));
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(16, 26, "orgUnit.uid"));
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(19, 28, "orgUnit.uid"));
    ɵɵattribute("aria-invalid", ((tmp_11_0 = ctx_r1.form.get("uid")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx_r1.form.get("uid")) == null ? null : tmp_11_0.invalid))("aria-errormessage", "uidError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(38, _c28, ɵɵpipeBind1(21, 30, "orgUnit.uid")))("control", ctx_r1.form.get("uid"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(25, 32, "orgUnit.approvalProcess"));
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "a11yApprovalProcessWithNoClearable");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yApprovalProcessWithNoClearable");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(40, _c28, ɵɵpipeBind1(29, 34, "orgUnit.approvalProcess")))("control", ctx_r1.form.get("approvalProcess.code"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.form.get("parentOrgUnit"))("ngIfElse", parentOrgUnitNotes_r3);
  }
}
function UnitAddressDetailsComponent_ng_container_0_cx_org_card_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cx-org-card", 2);
    ɵɵpipe(1, "cxTranslate");
    ɵɵelementStart(2, "a", 3);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(5, "cx-org-delete-item", 4);
    ɵɵelementStart(6, "section", 5)(7, "div", 6)(8, "label");
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "span", 7);
    ɵɵtext(12);
    ɵɵelementEnd()();
    ɵɵelementStart(13, "div", 6)(14, "label");
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(17, "span", 7)(18, "a", 8);
    ɵɵpipe(19, "cxUrl");
    ɵɵtext(20);
    ɵɵelementEnd()()();
    ɵɵelementStart(21, "div", 9)(22, "label");
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(25, "span", 7);
    ɵɵtext(26);
    ɵɵelementEnd()();
    ɵɵelementStart(27, "div", 6)(28, "label");
    ɵɵtext(29);
    ɵɵpipe(30, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(31, "span", 7);
    ɵɵtext(32);
    ɵɵpipe(33, "async");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const model_r1 = ctx.ngIf;
    const unit_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("subtitle", ɵɵpipeBind2(1, 14, "orgUnitAddress.details.subtitle", ɵɵpureFunction1(31, _c4, unit_r2)))("cxFocus", ɵɵpureFunction1(33, _c25, model_r1));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 17, "organization.edit"), " ");
    ɵɵadvance(2);
    ɵɵproperty("additionalParam", unit_r2.uid);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 19, "orgUnit.name"));
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", model_r1.firstName, " ", model_r1.lastName, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(16, 21, "orgUnit.unit"));
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(19, 23, ɵɵpureFunction1(35, _c24, unit_r2)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", unit_r2.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(24, 25, "orgUnitAddress.formattedAddress"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.formattedAddress, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(30, 27, "orgUnitAddress.country"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", (tmp_16_0 = ɵɵpipeBind1(33, 29, ctx_r2.getCountry(model_r1.country == null ? null : model_r1.country.isocode))) == null ? null : tmp_16_0.name, " ");
  }
}
function UnitAddressDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UnitAddressDetailsComponent_ng_container_0_cx_org_card_1_Template, 34, 37, "cx-org-card", 1);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.model$));
  }
}
function LinkCellComponent_ng_container_0_a_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function LinkCellComponent_ng_container_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 3);
    ɵɵpipe(1, "cxUrl");
    ɵɵtemplate(2, LinkCellComponent_ng_container_0_a_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const uid_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    const text_r3 = ɵɵreference(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction2(5, _c15, ctx_r1.route, ctx_r1.getRouterModel(uid_r1))))("tabIndex", ctx_r1.tabIndex);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", text_r3);
  }
}
function LinkCellComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, LinkCellComponent_ng_container_0_a_1_Template, 3, 8, "a", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const text_r3 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.linkable)("ngIfElse", text_r3);
  }
}
function LinkCellComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("title", ctx_r1.property);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.property);
  }
}
function UnitAddressFormComponent_ng_container_4_ng_container_77_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 24)(1, "span", 4);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(5, "ng-select", 25);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-form-errors", 6);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const regions_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(3, 8, "orgUnitAddress.state"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(6, 10, "orgUnitAddress.selectOne"));
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(14, _c29))("searchable", true)("clearable", false)("items", regions_r1);
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(15, _c28, ɵɵpipeBind1(8, 12, "orgUnitAddress.state")))("control", ctx_r1.form.get("region.isocode"));
  }
}
function UnitAddressFormComponent_ng_container_4_ng_container_77_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UnitAddressFormComponent_ng_container_4_ng_container_77_label_1_Template, 9, 17, "label", 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const regions_r1 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", regions_r1.length > 0);
  }
}
function UnitAddressFormComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 2);
    ɵɵelement(1, "cx-form-required-legend");
    ɵɵelementStart(2, "label", 3)(3, "span", 4);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelement(6, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(7, "ng-select", 5);
    ɵɵpipe(8, "cxTranslate");
    ɵɵpipe(9, "async");
    ɵɵelement(10, "cx-form-errors", 6);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "label")(13, "span", 4);
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(16, "ng-select", 7);
    ɵɵpipe(17, "cxTranslate");
    ɵɵpipe(18, "async");
    ɵɵelementEnd();
    ɵɵelementStart(19, "label")(20, "span", 4);
    ɵɵtext(21);
    ɵɵpipe(22, "cxTranslate");
    ɵɵelement(23, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(24, "input", 8);
    ɵɵpipe(25, "cxTranslate");
    ɵɵelement(26, "cx-form-errors", 9);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(28, "label")(29, "span", 4);
    ɵɵtext(30);
    ɵɵpipe(31, "cxTranslate");
    ɵɵelement(32, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(33, "input", 10);
    ɵɵpipe(34, "cxTranslate");
    ɵɵelement(35, "cx-form-errors", 11);
    ɵɵpipe(36, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(37, "label", 12)(38, "span", 4);
    ɵɵtext(39);
    ɵɵpipe(40, "cxTranslate");
    ɵɵelement(41, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(42, "input", 13);
    ɵɵpipe(43, "cxTranslate");
    ɵɵelement(44, "cx-form-errors", 14);
    ɵɵpipe(45, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(46, "label", 12)(47, "span", 15);
    ɵɵtext(48);
    ɵɵpipe(49, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(50, "input", 16);
    ɵɵpipe(51, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(52, "label", 12)(53, "span", 15);
    ɵɵtext(54);
    ɵɵpipe(55, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(56, "input", 17);
    ɵɵpipe(57, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(58, "label")(59, "span", 4);
    ɵɵtext(60);
    ɵɵpipe(61, "cxTranslate");
    ɵɵelement(62, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(63, "input", 18);
    ɵɵpipe(64, "cxTranslate");
    ɵɵelement(65, "cx-form-errors", 19);
    ɵɵpipe(66, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(67, "label")(68, "span", 4);
    ɵɵtext(69);
    ɵɵpipe(70, "cxTranslate");
    ɵɵelement(71, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(72, "input", 20);
    ɵɵpipe(73, "cxTranslate");
    ɵɵelement(74, "cx-form-errors", 21);
    ɵɵpipe(75, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(76, "label");
    ɵɵtemplate(77, UnitAddressFormComponent_ng_container_4_ng_container_77_Template, 2, 1, "ng-container", 22);
    ɵɵpipe(78, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_23_0;
    let tmp_29_0;
    let tmp_39_0;
    let tmp_45_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(5, 49, "orgUnitAddress.country"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 51, "orgUnitAddress.selectOne"));
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(103, _c29))("searchable", true)("clearable", false)("items", ɵɵpipeBind1(9, 53, ctx_r1.countries$));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(104, _c28, ɵɵpipeBind1(11, 55, "orgUnitAddress.country")))("control", ctx_r1.form.get("country.isocode"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(15, 57, "orgUnitAddress.titles"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(17, 59, "orgUnitAddress.selectOne"));
    ɵɵproperty("searchable", false)("clearable", false)("items", ɵɵpipeBind1(18, 61, ctx_r1.titles$));
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(22, 63, "orgUnitAddress.firstName"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(25, 65, "orgUnitAddress.firstName"));
    ɵɵattribute("aria-invalid", ((tmp_17_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_17_0.touched) && ((tmp_17_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_17_0.invalid))("aria-errormessage", "firstNameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(106, _c28, ɵɵpipeBind1(27, 67, "orgUnitAddress.firstName")))("control", ctx_r1.form.get("firstName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(31, 69, "orgUnitAddress.lastName"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(34, 71, "orgUnitAddress.lastName"));
    ɵɵattribute("aria-invalid", ((tmp_23_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_23_0.touched) && ((tmp_23_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_23_0.invalid))("aria-errormessage", "lastNameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(108, _c28, ɵɵpipeBind1(36, 73, "orgUnitAddress.lastName")))("control", ctx_r1.form.get("lastName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(40, 75, "orgUnitAddress.address1"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(43, 77, "orgUnitAddress.streetAddress"));
    ɵɵattribute("aria-invalid", ((tmp_29_0 = ctx_r1.form.get("line1")) == null ? null : tmp_29_0.touched) && ((tmp_29_0 = ctx_r1.form.get("line1")) == null ? null : tmp_29_0.invalid))("aria-errormessage", "line1Error");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(110, _c28, ɵɵpipeBind1(45, 79, "orgUnitAddress.address1")))("control", ctx_r1.form.get("line1"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(49, 81, "orgUnitAddress.address2"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(51, 83, "orgUnitAddress.aptSuite"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(55, 85, "orgUnitAddress.phoneNumber"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(57, 87, "orgUnitAddress.phoneNumber"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(61, 89, "orgUnitAddress.city"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(64, 91, "orgUnitAddress.city"));
    ɵɵattribute("aria-invalid", ((tmp_39_0 = ctx_r1.form.get("town")) == null ? null : tmp_39_0.touched) && ((tmp_39_0 = ctx_r1.form.get("town")) == null ? null : tmp_39_0.invalid))("aria-errormessage", "townError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(112, _c28, ɵɵpipeBind1(66, 93, "orgUnitAddress.city")))("control", ctx_r1.form.get("town"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(70, 95, "orgUnitAddress.zipCode"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(73, 97, "orgUnitAddress.zipCode"));
    ɵɵattribute("aria-invalid", ((tmp_45_0 = ctx_r1.form.get("postalCode")) == null ? null : tmp_45_0.touched) && ((tmp_45_0 = ctx_r1.form.get("postalCode")) == null ? null : tmp_45_0.invalid))("aria-errormessage", "postalCodeError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(114, _c28, ɵɵpipeBind1(75, 99, "orgUnitAddress.zipCode")))("control", ctx_r1.form.get("postalCode"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ɵɵpipeBind1(78, 101, ctx_r1.regions$));
  }
}
var _c43 = () => ({
  disabledCreate: true,
  disabledEnable: false,
  disabledEdit: false
});
var _c44 = (a0) => ({
  cxRoute: "orgUnitUserRoles",
  params: a0
});
function UnitUserRolesCellComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 1);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const uid_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(6, _c44, ctx_r1.getRouterModel(uid_r1))));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "orgUser.links.rolesAndRights"), " ");
  }
}
function UnitUserListComponent_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 3);
    ɵɵpipe(1, "async");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("disabled", !((tmp_1_0 = ɵɵpipeBind1(1, 3, ctx_r0.unit$)) == null ? null : tmp_1_0.active));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "organization.create"), " ");
  }
}
function UnitUserRolesFormComponent_form_0_label_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 10)(1, "input", 11);
    ɵɵlistener("change", function UnitUserRolesFormComponent_form_0_label_12_Template_input_change_1_listener() {
      ɵɵrestoreView(_r5);
      const form_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.save(form_r2));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 12);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const role_r6 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("formControlName", role_r6);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "organization.userRoles." + role_r6), " ");
  }
}
function UnitUserRolesFormComponent_form_0_label_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 10)(1, "input", 11);
    ɵɵlistener("change", function UnitUserRolesFormComponent_form_0_label_17_Template_input_change_1_listener() {
      ɵɵrestoreView(_r7);
      const form_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.save(form_r2));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 12);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const right_r8 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("formControlName", right_r8);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "organization.userRights." + right_r8), " ");
  }
}
function UnitUserRolesFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 2);
    ɵɵlistener("submit", function UnitUserRolesFormComponent_form_0_Template_form_submit_0_listener() {
      const form_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.save(form_r2));
    });
    ɵɵelementStart(1, "cx-org-card", 3, 0)(3, "a", 4)(4, "span", 5);
    ɵɵlistener("click", function UnitUserRolesFormComponent_form_0_Template_span_click_4_listener($event) {
      ɵɵrestoreView(_r1);
      const card_r4 = ɵɵreference(2);
      return ɵɵresetView(card_r4.closeView($event));
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "section", 6)(8, "fieldset", 7)(9, "legend", 8);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(12, UnitUserRolesFormComponent_form_0_label_12_Template, 5, 4, "label", 9);
    ɵɵelementEnd();
    ɵɵelementStart(13, "fieldset", 7)(14, "legend", 8);
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(17, UnitUserRolesFormComponent_form_0_label_17_Template, 5, 4, "label", 9);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const form_r2 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("previous", false)("cxFocus", ɵɵpureFunction1(14, _c8, form_r2));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 8, "organization.done"), " ");
    ɵɵadvance(2);
    ɵɵproperty("formGroup", form_r2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 10, "orgUser.roles"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.availableRoles);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 12, "orgUser.rights"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.availableRights);
  }
}
function ToggleLinkCellComponent_a_0_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function ToggleLinkCellComponent_a_0_button_2_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.toggleItem($event));
    });
    ɵɵelement(3, "cx-icon", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("aria-expanded", ctx_r1.expanded)("aria-label", ɵɵpipeBind1(1, 4, "orgUnit.tree.explore"))("title", ɵɵpipeBind1(2, 6, "orgUnit.tree.explore"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r1.expanded ? "CARET_DOWN" : "CARET_RIGHT");
  }
}
function ToggleLinkCellComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 1);
    ɵɵpipe(1, "cxUrl");
    ɵɵlistener("keydown", function ToggleLinkCellComponent_a_0_Template_a_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onKeydown($event));
    });
    ɵɵtemplate(2, ToggleLinkCellComponent_a_0_button_2_Template, 4, 8, "button", 2);
    ɵɵelementStart(3, "span", 3);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.model.uid)("routerLink", ɵɵpipeBind1(1, 7, ɵɵpureFunction2(9, _c15, ctx_r1.route, ctx_r1.routeModel)));
    ɵɵattribute("aria-haspopup", ctx_r1.isSwitchable)("data-depth", ctx_r1.model.depthLevel);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.isSwitchable);
    ɵɵadvance();
    ɵɵpropertyInterpolate("title", ctx_r1.combinedName);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.combinedName);
  }
}
var _c45 = (a0) => ({
  cxRoute: "orgUserDetails",
  params: a0
});
function UserDetailsCellComponent_ng_container_0_ng_template_1_ng_container_19_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 11);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const role_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerText", ɵɵpipeBind1(1, 1, "organization.userRoles." + role_r1));
  }
}
function UserDetailsCellComponent_ng_container_0_ng_template_1_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UserDetailsCellComponent_ng_container_0_ng_template_1_ng_container_19_li_1_Template, 2, 3, "li", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.availableRoles.includes(role_r1));
  }
}
function UserDetailsCellComponent_ng_container_0_ng_template_1_li_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1, "-");
    ɵɵelementEnd();
  }
}
function UserDetailsCellComponent_ng_container_0_ng_template_1_div_21_ng_container_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 11);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const right_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerText", ɵɵpipeBind1(1, 1, "organization.userRights." + right_r3));
  }
}
function UserDetailsCellComponent_ng_container_0_ng_template_1_div_21_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UserDetailsCellComponent_ng_container_0_ng_template_1_div_21_ng_container_5_li_1_Template, 2, 3, "li", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const right_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.availableRights.includes(right_r3));
  }
}
function UserDetailsCellComponent_ng_container_0_ng_template_1_div_21_li_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1, "-");
    ɵɵelementEnd();
  }
}
function UserDetailsCellComponent_ng_container_0_ng_template_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "ul", 7);
    ɵɵtemplate(5, UserDetailsCellComponent_ng_container_0_ng_template_1_div_21_ng_container_5_Template, 2, 1, "ng-container", 8)(6, UserDetailsCellComponent_ng_container_0_ng_template_1_div_21_li_6_Template, 2, 0, "li", 1);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const model_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 3, "orgUser.rights"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", model_r4.roles);
    ɵɵadvance();
    ɵɵproperty("ngIf", (model_r4.roles == null ? null : model_r4.roles.length) === 0);
  }
}
function UserDetailsCellComponent_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "label");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 5);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 6)(9, "label");
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "span", 7);
    ɵɵtext(13);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 4)(15, "label");
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(18, "ul", 7);
    ɵɵtemplate(19, UserDetailsCellComponent_ng_container_0_ng_template_1_ng_container_19_Template, 2, 1, "ng-container", 8)(20, UserDetailsCellComponent_ng_container_0_ng_template_1_li_20_Template, 2, 0, "li", 1);
    ɵɵelementEnd()();
    ɵɵtemplate(21, UserDetailsCellComponent_ng_container_0_ng_template_1_div_21_Template, 7, 5, "div", 9);
    ɵɵelementStart(22, "div", 4)(23, "label");
    ɵɵtext(24);
    ɵɵpipe(25, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(26, "a", 5);
    ɵɵpipe(27, "cxUrl");
    ɵɵtext(28);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const model_r4 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 12, "orgUser.name"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 14, ɵɵpureFunction1(24, _c45, model_r4)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(model_r4.name);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 16, "orgUser.uid"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r4.uid, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(17, 18, "orgUser.roles"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", model_r4.roles);
    ɵɵadvance();
    ɵɵproperty("ngIf", (model_r4.roles == null ? null : model_r4.roles.length) === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hasRight(model_r4));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(25, 20, "orgUser.orgUnit"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(27, 22, ɵɵpureFunction1(26, _c24, model_r4.orgUnit)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", model_r4.orgUnit == null ? null : model_r4.orgUnit.name, " ");
  }
}
function UserDetailsCellComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UserDetailsCellComponent_ng_container_0_ng_template_1_Template, 29, 28, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementStart(3, "button", 2);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const model_r4 = ctx.ngIf;
    const details_r5 = ɵɵreference(2);
    ɵɵadvance(3);
    ɵɵproperty("cxPopover", details_r5)("cxPopoverOptions", ɵɵpureFunction0(3, _c22));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", model_r4 == null ? null : model_r4.name, " ");
  }
}
var _c46 = (a0) => ({
  uid: a0
});
function UnitDetailsCellComponent_ng_template_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 5);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "orgUnit.approvalProcess"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.model.approvalProcess == null ? null : ctx_r0.model.approvalProcess.name, " ");
  }
}
function UnitDetailsCellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "label");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 4);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 3)(9, "label");
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "span", 5);
    ɵɵtext(13);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 3)(15, "label");
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(18, "span", 5);
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(21, UnitDetailsCellComponent_ng_template_0_div_21_Template, 6, 4, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 10, "orgUnit.name"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 12, ɵɵpureFunction1(22, _c24, ɵɵpureFunction1(20, _c46, ctx_r0.model.id))));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.model.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 14, "orgUnit.uid"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.model.id, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(17, 16, "orgUnit.active"));
    ɵɵadvance(2);
    ɵɵclassProp("is-active", ctx_r0.model.active);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 18, ctx_r0.model.active ? "organization.enabled" : "organization.disabled"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.model.approvalProcess == null ? null : ctx_r0.model.approvalProcess.name);
  }
}
function UserFormComponent_ng_container_1_label_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 18)(1, "input", 19);
    ɵɵlistener("change", function UserFormComponent_ng_container_1_label_42_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.updateRoles($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 20);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("value", role_r3)("checked", ctx_r1.roles == null ? null : ctx_r1.roles.value == null ? null : ctx_r1.roles.value.includes(role_r3))("disabled", (ctx_r1.form == null ? null : ctx_r1.form.status) === "DISABLED");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, "organization.userRoles." + role_r3), " ");
  }
}
function UserFormComponent_ng_container_1_label_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 18)(1, "input", 19);
    ɵɵlistener("change", function UserFormComponent_ng_container_1_label_47_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.updateRoles($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 20);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const right_r5 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("value", right_r5)("checked", ctx_r1.roles == null ? null : ctx_r1.roles.value == null ? null : ctx_r1.roles.value.includes(right_r5))("disabled", (ctx_r1.form == null ? null : ctx_r1.form.status) === "DISABLED");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, "organization.userRights." + right_r5), " ");
  }
}
function UserFormComponent_ng_container_1_div_58_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21)(1, "label", 18);
    ɵɵelement(2, "input", 22);
    ɵɵelementStart(3, "span", 20);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 1, "orgUser.assignApprover"));
  }
}
function UserFormComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 2);
    ɵɵelement(1, "cx-form-required-legend");
    ɵɵelementStart(2, "label")(3, "span", 3);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(6, "ng-select", 4);
    ɵɵpipe(7, "async");
    ɵɵpipe(8, "cxTranslate");
    ɵɵelement(9, "cx-form-errors", 5);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "label")(12, "span", 3);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelement(15, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(16, "input", 6);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelement(18, "cx-form-errors", 7);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "label")(21, "span", 3);
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelement(24, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(25, "input", 8);
    ɵɵpipe(26, "cxTranslate");
    ɵɵelement(27, "cx-form-errors", 9);
    ɵɵpipe(28, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(29, "label")(30, "span", 3);
    ɵɵtext(31);
    ɵɵpipe(32, "cxTranslate");
    ɵɵelement(33, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(34, "input", 10);
    ɵɵpipe(35, "cxTranslate");
    ɵɵelement(36, "cx-form-errors", 11);
    ɵɵpipe(37, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(38, "fieldset", 12)(39, "legend", 3);
    ɵɵtext(40);
    ɵɵpipe(41, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(42, UserFormComponent_ng_container_1_label_42_Template, 5, 6, "label", 13);
    ɵɵelementEnd();
    ɵɵelementStart(43, "fieldset", 14)(44, "legend", 3);
    ɵɵtext(45);
    ɵɵpipe(46, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(47, UserFormComponent_ng_container_1_label_47_Template, 5, 6, "label", 13);
    ɵɵelementEnd();
    ɵɵelementStart(48, "label", 15)(49, "span", 3);
    ɵɵtext(50);
    ɵɵpipe(51, "cxTranslate");
    ɵɵelement(52, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(53, "ng-select", 16);
    ɵɵpipe(54, "async");
    ɵɵpipe(55, "cxTranslate");
    ɵɵelement(56, "cx-form-errors", 5);
    ɵɵpipe(57, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(58, UserFormComponent_ng_container_1_div_58_Template, 6, 3, "div", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    let tmp_17_0;
    let tmp_23_0;
    let tmp_36_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 40, "orgUser.title"));
    ɵɵadvance(2);
    ɵɵproperty("searchable", false)("clearable", false)("items", ɵɵpipeBind1(7, 42, ctx_r1.titles$))("placeholder", ɵɵpipeBind1(8, 44, "orgUser.title"));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(78, _c28, ɵɵpipeBind1(10, 46, "orgUser.title")))("control", ctx_r1.form.get("titleCode"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 48, "orgUser.firstName"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(17, 50, "orgUser.firstName"));
    ɵɵattribute("aria-invalid", ((tmp_11_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx_r1.form.get("firstName")) == null ? null : tmp_11_0.invalid))("aria-errormessage", "firstNameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(80, _c28, ɵɵpipeBind1(19, 52, "orgUser.firstName")))("control", ctx_r1.form.get("firstName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 54, "orgUser.lastName"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(26, 56, "orgUser.lastName"));
    ɵɵattribute("aria-invalid", ((tmp_17_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_17_0.touched) && ((tmp_17_0 = ctx_r1.form.get("lastName")) == null ? null : tmp_17_0.invalid))("aria-errormessage", "lastNameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(82, _c28, ɵɵpipeBind1(28, 58, "orgUser.lastName")))("control", ctx_r1.form.get("lastName"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(32, 60, "orgUser.email"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(35, 62, "orgUser.email"));
    ɵɵattribute("aria-invalid", ((tmp_23_0 = ctx_r1.form.get("email")) == null ? null : tmp_23_0.touched) && ((tmp_23_0 = ctx_r1.form.get("email")) == null ? null : tmp_23_0.invalid))("aria-errormessage", "emailError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(84, _c28, ɵɵpipeBind1(37, 64, "orgUser.email")))("control", ctx_r1.form.get("email"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(41, 66, "orgUser.roles"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.availableRoles);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(46, 68, "orgUser.rights"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.availableRights);
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r1.form.get("orgUnit"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(51, 70, "orgUser.orgUnit"), " ");
    ɵɵadvance(3);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(86, _c29))("searchable", true)("clearable", false)("items", (tmp_36_0 = ɵɵpipeBind1(54, 72, ctx_r1.units$)) !== null && tmp_36_0 !== void 0 ? tmp_36_0 : null)("placeholder", ɵɵpipeBind1(55, 74, "orgUser.orgUnit"));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(87, _c28, ɵɵpipeBind1(57, 76, "orgUser.orgUnit")))("control", ctx_r1.form.get("orgUnit.uid"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.isAssignedToApprovers);
  }
}
var _c47 = (a0) => ({
  cxRoute: "orgUserGroupEdit",
  params: a0
});
var _c48 = (a0) => ({
  cxRoute: "orgUserGroupUsers",
  params: a0
});
var _c49 = (a0) => ({
  cxRoute: "orgUserGroupPermissions",
  params: a0
});
function UserGroupDetailsComponent_cx_org_card_0_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 10);
    ɵɵpipe(2, "cxUrl");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 10);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 4, ɵɵpureFunction1(12, _c48, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 6, "orgUserGroup.links.user"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 8, ɵɵpureFunction1(14, _c49, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 10, "orgUserGroup.links.permission"), " ");
  }
}
function UserGroupDetailsComponent_cx_org_card_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cx-org-card", 1)(1, "a", 2);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "cxUrl");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(6, "cx-org-delete-item", 3);
    ɵɵelementStart(7, "section", 4)(8, "div", 5)(9, "label");
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "span", 6);
    ɵɵtext(13);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 5)(15, "label");
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(18, "span", 6);
    ɵɵtext(19);
    ɵɵelementEnd()();
    ɵɵelementStart(20, "div", 5)(21, "label");
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(24, "a", 7);
    ɵɵpipe(25, "cxUrl");
    ɵɵtext(26);
    ɵɵelementEnd()()();
    ɵɵelementStart(27, "section", 8);
    ɵɵtemplate(28, UserGroupDetailsComponent_cx_org_card_0_ng_container_28_Template, 9, 16, "ng-container", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const model_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cxFocus", ɵɵpureFunction1(27, _c25, model_r1));
    ɵɵadvance();
    ɵɵclassProp("disabled", ɵɵpipeBind1(2, 13, ctx_r1.isInEditMode$));
    ɵɵproperty("routerLink", ɵɵpipeBind1(3, 15, ɵɵpureFunction1(29, _c47, model_r1)));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 17, "organization.edit"), " ");
    ɵɵadvance(6);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 19, "orgUserGroup.name"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(17, 21, "orgUserGroup.uid"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.uid, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(23, 23, "orgUserGroup.orgUnit"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(25, 25, ɵɵpureFunction1(31, _c24, model_r1.orgUnit)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", model_r1.orgUnit == null ? null : model_r1.orgUnit.name, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", model_r1.uid);
  }
}
function UserGroupFormComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0, 2);
    ɵɵelement(1, "cx-form-required-legend");
    ɵɵelementStart(2, "label")(3, "span", 3);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelement(6, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelementStart(7, "input", 4);
    ɵɵpipe(8, "cxTranslate");
    ɵɵlistener("blur", function UserGroupFormComponent_ng_container_1_Template_input_blur_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.createUidWithName(ctx_r1.form.get("name"), ctx_r1.form.get("uid")));
    });
    ɵɵelementEnd();
    ɵɵelement(9, "cx-form-errors", 5);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "label")(12, "span", 3);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelement(15, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(16, "input", 6);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelement(18, "cx-form-errors", 7);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "label", 8)(21, "span", 3);
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelement(24, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(25, "ng-select", 9);
    ɵɵpipe(26, "async");
    ɵɵpipe(27, "cxTranslate");
    ɵɵelement(28, "cx-form-errors", 10);
    ɵɵpipe(29, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_10_0;
    let tmp_19_0;
    let tmp_20_0;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(5, 23, "orgUserGroup.name"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 25, "orgUserGroup.name"));
    ɵɵattribute("aria-invalid", ((tmp_4_0 = ctx_r1.form.get("name")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r1.form.get("name")) == null ? null : tmp_4_0.invalid))("aria-errormessage", "nameError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(43, _c28, ɵɵpipeBind1(10, 27, "orgUserGroup.name")))("control", ctx_r1.form.get("name"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(14, 29, "orgUserGroup.uid"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(17, 31, "orgUserGroup.uid"));
    ɵɵattribute("aria-invalid", ((tmp_10_0 = ctx_r1.form.get("uid")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx_r1.form.get("uid")) == null ? null : tmp_10_0.invalid))("aria-errormessage", "uidError");
    ɵɵadvance(2);
    ɵɵproperty("translationParams", ɵɵpureFunction1(45, _c28, ɵɵpipeBind1(19, 33, "orgUserGroup.uid")))("control", ctx_r1.form.get("uid"));
    ɵɵadvance(2);
    ɵɵproperty("formGroup", ctx_r1.form.get("orgUnit"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(23, 35, "orgUserGroup.orgUnit"), " ");
    ɵɵadvance(3);
    ɵɵproperty("inputAttrs", ɵɵpureFunction0(47, _c29))("searchable", true)("clearable", false)("items", (tmp_19_0 = ɵɵpipeBind1(26, 37, ctx_r1.units$)) !== null && tmp_19_0 !== void 0 ? tmp_19_0 : null)("readonly", (tmp_20_0 = (tmp_20_0 = ctx_r1.form.get("orgUnit.uid")) == null ? null : tmp_20_0.disabled) !== null && tmp_20_0 !== void 0 ? tmp_20_0 : false)("placeholder", ɵɵpipeBind1(27, 39, "orgUserGroup.orgUnit"));
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(48, _c28, ɵɵpipeBind1(29, 41, "orgUserGroup.orgUnit")))("control", ctx_r1.form.get("orgUnit.uid"));
  }
}
var _c50 = (a0) => ({
  cxRoute: "orgPurchaseLimitDetails",
  params: a0
});
function PermissionDetailsCellComponent_ng_template_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 5);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 3, "orgPurchaseLimit.threshold"));
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", ctx_r0.model.threshold, " ", ctx_r0.model.currency == null ? null : ctx_r0.model.currency.symbol, " ");
  }
}
function PermissionDetailsCellComponent_ng_template_0_div_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "label");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 5);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "orgPurchaseLimit.periodRange"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.model.periodRange, " ");
  }
}
function PermissionDetailsCellComponent_ng_template_0_a_27_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 4);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(4, _c24, ctx_r0.model.orgUnit)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.model.orgUnit == null ? null : ctx_r0.model.orgUnit.name, " ");
  }
}
function PermissionDetailsCellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "label");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 4);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 3)(9, "label");
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "span", 5);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(15, "div", 3)(16, "label");
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(19, "span", 5);
    ɵɵtext(20);
    ɵɵelementEnd()();
    ɵɵtemplate(21, PermissionDetailsCellComponent_ng_template_0_div_21_Template, 6, 5, "div", 6)(22, PermissionDetailsCellComponent_ng_template_0_div_22_Template, 6, 4, "div", 6);
    ɵɵelementStart(23, "div", 3)(24, "label");
    ɵɵtext(25);
    ɵɵpipe(26, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(27, PermissionDetailsCellComponent_ng_template_0_a_27_Template, 3, 6, "a", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 13, "orgPurchaseLimit.code"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 15, ɵɵpureFunction1(25, _c50, ctx_r0.model)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.model.code, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 17, "orgPurchaseLimit.active"));
    ɵɵadvance(2);
    ɵɵclassProp("is-active", ctx_r0.model.active);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 19, ctx_r0.model.active ? "organization.enabled" : "organization.disabled"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(18, 21, "orgPurchaseLimit.orderApprovalPermissionType"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.model.orderApprovalPermissionType == null ? null : ctx_r0.model.orderApprovalPermissionType.name, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.model.threshold || ctx_r0.model.threshold === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.model.periodRange);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(26, 23, "orgPurchaseLimit.unit"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.model.code);
  }
}
var _c51 = ["subList"];
function UserChangePasswordFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 1);
    ɵɵlistener("submit", function UserChangePasswordFormComponent_form_0_Template_form_submit_0_listener() {
      const form_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.save(form_r2));
    });
    ɵɵelementStart(1, "cx-org-card", 2)(2, "button", 3);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 4);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "section", 5);
    ɵɵelement(9, "cx-form-required-legend");
    ɵɵelementStart(10, "label", 6)(11, "span", 7);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelement(14, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(15, "input", 8);
    ɵɵpipe(16, "cxTranslate");
    ɵɵpipe(17, "cxTranslate");
    ɵɵelement(18, "cx-form-errors", 9);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "label")(21, "span", 7);
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelement(24, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(25, "input", 10);
    ɵɵpipe(26, "cxTranslate");
    ɵɵpipe(27, "cxTranslate");
    ɵɵelement(28, "cx-form-errors", 11);
    ɵɵpipe(29, "cxTranslate");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_17_0;
    const form_r2 = ctx.ngIf;
    ɵɵproperty("formGroup", form_r2);
    ɵɵadvance();
    ɵɵproperty("previous", false)("cxFocus", ɵɵpureFunction1(39, _c8, form_r2));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 19, "organization.save"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 21, "organization.cancel"), " ");
    ɵɵadvance(6);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(13, 23, "orgUser.password.newPassword"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(16, 25, "orgUser.password.newPassword"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(17, 27, "orgUser.password.newPassword"))("aria-invalid", ((tmp_10_0 = form_r2.get("password")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = form_r2.get("password")) == null ? null : tmp_10_0.invalid))("aria-errormessage", "passwordError");
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(41, _c28, ɵɵpipeBind1(19, 29, "orgUser.password.newPassword")))("control", form_r2.get("password"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(23, 31, "orgUser.password.confirmPassword"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(26, 33, "orgUser.password.confirmPassword"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(27, 35, "orgUser.password.confirmPassword"))("aria-invalid", ((tmp_17_0 = form_r2.get("confirmPassword")) == null ? null : tmp_17_0.touched) && ((tmp_17_0 = form_r2.get("confirmPassword")) == null ? null : tmp_17_0.invalid))("aria-errormessage", "confirmPasswordError");
    ɵɵadvance(3);
    ɵɵproperty("translationParams", ɵɵpureFunction1(43, _c28, ɵɵpipeBind1(29, 37, "orgUser.password.confirmPassword")))("control", form_r2.get("confirmPassword"));
  }
}
var _c52 = (a0) => ({
  cxRoute: "orgUserEdit",
  params: a0
});
var _c53 = (a0) => ({
  cxRoute: "orgUserChangePassword",
  params: a0
});
var _c54 = (a0) => ({
  cxRoute: "orgUserApprovers",
  params: a0
});
var _c55 = (a0) => ({
  cxRoute: "orgUserUserGroups",
  params: a0
});
var _c56 = (a0) => ({
  cxRoute: "orgUserPermissions",
  params: a0
});
function UserDetailsComponent_cx_org_card_0_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 15);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "cxUrl");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("disabled", !model_r1.active || ɵɵpipeBind1(1, 4, ctx_r1.isInEditMode$));
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 6, ɵɵpureFunction1(10, _c52, model_r1)));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 8, "organization.edit"), " ");
  }
}
function UserDetailsComponent_cx_org_card_0_cx_org_toggle_status_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-org-toggle-status", 16);
  }
}
function UserDetailsComponent_cx_org_card_0_ng_container_22_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 18);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const role_r3 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerText", ɵɵpipeBind1(1, 1, "organization.userRoles." + role_r3));
  }
}
function UserDetailsComponent_cx_org_card_0_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UserDetailsComponent_cx_org_card_0_ng_container_22_li_1_Template, 2, 3, "li", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.availableRoles.includes(role_r3));
  }
}
function UserDetailsComponent_cx_org_card_0_li_23_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1, "-");
    ɵɵelementEnd();
  }
}
function UserDetailsComponent_cx_org_card_0_ng_container_24_ng_container_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 18);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const role_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerText", ɵɵpipeBind1(1, 1, "organization.userRights." + role_r4));
  }
}
function UserDetailsComponent_cx_org_card_0_ng_container_24_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, UserDetailsComponent_cx_org_card_0_ng_container_24_ng_container_6_li_1_Template, 2, 3, "li", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.availableRights.includes(role_r4));
  }
}
function UserDetailsComponent_cx_org_card_0_ng_container_24_li_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtext(1, "-");
    ɵɵelementEnd();
  }
}
function UserDetailsComponent_cx_org_card_0_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 7)(2, "label");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "ul", 8);
    ɵɵtemplate(6, UserDetailsComponent_cx_org_card_0_ng_container_24_ng_container_6_Template, 2, 1, "ng-container", 10)(7, UserDetailsComponent_cx_org_card_0_ng_container_24_li_7_Template, 2, 0, "li", 11);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 3, "orgUser.rights"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", model_r1.roles);
    ɵɵadvance();
    ɵɵproperty("ngIf", (model_r1.roles == null ? null : model_r1.roles.length) === 0);
  }
}
function UserDetailsComponent_cx_org_card_0_a_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 19);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(4, _c24, model_r1.orgUnit)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", model_r1.orgUnit == null ? null : model_r1.orgUnit.name, " ");
  }
}
function UserDetailsComponent_cx_org_card_0_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate(model_r1.orgUnit == null ? null : model_r1.orgUnit.name);
  }
}
function UserDetailsComponent_cx_org_card_0_a_33_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 21);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵclassProp("disabled", !model_r1.active);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 4, ɵɵpureFunction1(8, _c53, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 6, "orgUser.links.password"), " ");
  }
}
function UserDetailsComponent_cx_org_card_0_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 22);
    ɵɵpipe(2, "cxUrl");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 22);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "a", 22);
    ɵɵpipe(10, "cxUrl");
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const model_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 6, ɵɵpureFunction1(18, _c54, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 8, "orgUser.links.approvers"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 10, ɵɵpureFunction1(20, _c55, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 12, "orgUser.links.userGroup"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(10, 14, ɵɵpureFunction1(22, _c56, model_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 16, "orgUser.links.permission"), " ");
  }
}
function UserDetailsComponent_cx_org_card_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "cx-org-card", 2);
    ɵɵtemplate(1, UserDetailsComponent_cx_org_card_0_a_1_Template, 5, 12, "a", 3)(2, UserDetailsComponent_cx_org_card_0_cx_org_toggle_status_2_Template, 1, 0, "cx-org-toggle-status", 4);
    ɵɵelement(3, "cx-org-disable-info", 5);
    ɵɵelementStart(4, "section", 6)(5, "div", 7)(6, "label");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "span", 8);
    ɵɵtext(10);
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 9)(12, "label");
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(15, "span", 8);
    ɵɵtext(16);
    ɵɵelementEnd()();
    ɵɵelementStart(17, "div", 7)(18, "label");
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(21, "ul", 8);
    ɵɵtemplate(22, UserDetailsComponent_cx_org_card_0_ng_container_22_Template, 2, 1, "ng-container", 10)(23, UserDetailsComponent_cx_org_card_0_li_23_Template, 2, 0, "li", 11);
    ɵɵelementEnd()();
    ɵɵtemplate(24, UserDetailsComponent_cx_org_card_0_ng_container_24_Template, 8, 5, "ng-container", 11);
    ɵɵelementStart(25, "div", 7)(26, "label");
    ɵɵtext(27);
    ɵɵpipe(28, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(29, UserDetailsComponent_cx_org_card_0_a_29_Template, 3, 6, "a", 12)(30, UserDetailsComponent_cx_org_card_0_ng_template_30_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(32, "div", 9);
    ɵɵtemplate(33, UserDetailsComponent_cx_org_card_0_a_33_Template, 4, 10, "a", 13);
    ɵɵelementEnd()();
    ɵɵelementStart(34, "section", 14);
    ɵɵtemplate(35, UserDetailsComponent_cx_org_card_0_ng_container_35_Template, 13, 24, "ng-container", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const model_r1 = ctx.ngIf;
    const showOrgUnitValueWithoutNavigation_r5 = ɵɵreference(31);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cxFocus", ɵɵpureFunction1(24, _c25, model_r1));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isUpdatingUserAllowed);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isUpdatingUserAllowed);
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 16, "orgUser.name"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(14, 18, "orgUser.uid"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", model_r1.displayUid, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(20, 20, "orgUser.roles"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", model_r1.roles);
    ɵɵadvance();
    ɵɵproperty("ngIf", (model_r1.roles == null ? null : model_r1.roles.length) === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hasRight(model_r1));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(28, 22, "orgUser.orgUnit"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.isUpdatingUserAllowed)("ngIfElse", showOrgUnitValueWithoutNavigation_r5);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", model_r1.customerId && ctx_r1.isUpdatingUserAllowed);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", model_r1.customerId);
  }
}
var _c57 = (a0) => ({
  cxRoute: "orgUserGroupDetails",
  params: a0
});
function UserGroupDetailsCellComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "label");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 4);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 3)(9, "label");
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "span", 5);
    ɵɵtext(13);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 3)(15, "label");
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(18, "a", 4);
    ɵɵpipe(19, "cxUrl");
    ɵɵtext(20);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 8, "orgUserGroup.name"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 10, ɵɵpureFunction1(18, _c57, ctx_r0.model)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.model.name);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(11, 12, "orgUserGroup.uid"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.model.uid, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(17, 14, "orgUserGroup.orgUnit"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(19, 16, ɵɵpureFunction1(20, _c24, ctx_r0.model.orgUnit)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.model.orgUnit == null ? null : ctx_r0.model.orgUnit.name, " ");
  }
}
var DEFAULT_INFO_TIMEOUT = 3e3;
var MessageService = class _MessageService {
  constructor() {
    this.data$ = new ReplaySubject();
  }
  get() {
    return this.data$;
  }
  add(message) {
    message = __spreadValues(__spreadValues({}, this.getDefaultMessage(message)), message);
    message.events = new Subject();
    this.data$.next(message);
    return message.events;
  }
  close(message) {
    message?.next({
      close: true
    });
  }
  /**
   * Sets the message type to INFO, and adds a default timeout
   * for info messages.
   */
  getDefaultMessage(message) {
    const defaultMessage = {
      type: GlobalMessageType.MSG_TYPE_INFO
    };
    if (!message.type || message.type === GlobalMessageType.MSG_TYPE_INFO && !message.timeout) {
      defaultMessage.timeout = DEFAULT_INFO_TIMEOUT;
    }
    return defaultMessage;
  }
  clear() {
    this.data$.next(void 0);
  }
  static {
    this.ɵfac = function MessageService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MessageService,
      factory: _MessageService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var MessageData = class {
};
var BaseMessageComponent = class _BaseMessageComponent {
  constructor(messageData, platformId) {
    this.messageData = messageData;
    this.platformId = platformId;
    this.terminated = false;
  }
  ngOnInit() {
    this.message = this.messageData.message ?? {};
    this.messageTitle = this.messageData.messageTitle;
    this.type = this.resolveType();
    this.messageIcon = this.messageData.messageIcon;
    if (this.messageData.timeout) {
      this.handleAutoHide();
    }
  }
  close() {
    this.messageData.events?.next({
      close: true
    });
  }
  resolveType() {
    if (!this.messageData.type || this.messageData.type === GlobalMessageType.MSG_TYPE_INFO) {
      return "info";
    }
    if (this.messageData.type === GlobalMessageType.MSG_TYPE_ERROR) {
      return "error";
    }
    if (this.messageData.type === GlobalMessageType.MSG_TYPE_WARNING) {
      return "warning";
    }
  }
  handleAutoHide() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.close();
      }, this.messageData.timeout);
    }
  }
  static {
    this.ɵfac = function BaseMessageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BaseMessageComponent)(ɵɵdirectiveInject(MessageData), ɵɵdirectiveInject(PLATFORM_ID));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _BaseMessageComponent,
      hostVars: 4,
      hostBindings: function BaseMessageComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.type);
          ɵɵclassProp("terminated", ctx.terminated);
        }
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseMessageComponent, [{
    type: Directive
  }], () => [{
    type: MessageData
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], {
    type: [{
      type: HostBinding,
      args: ["class"]
    }],
    terminated: [{
      type: HostBinding,
      args: ["class.terminated"]
    }]
  });
})();
var NotificationMessageComponent = class _NotificationMessageComponent extends BaseMessageComponent {
  constructor() {
    super(...arguments);
    this.closeIcon = ICON_TYPE.CLOSE;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵNotificationMessageComponent_BaseFactory;
      return function NotificationMessageComponent_Factory(__ngFactoryType__) {
        return (ɵNotificationMessageComponent_BaseFactory || (ɵNotificationMessageComponent_BaseFactory = ɵɵgetInheritedFactory(_NotificationMessageComponent)))(__ngFactoryType__ || _NotificationMessageComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _NotificationMessageComponent,
      selectors: [["cx-org-notification"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 9,
      vars: 13,
      consts: [[1, "inner", 3, "esc", "cxFocus"], [3, "type", 4, "ngIf"], ["type", "button", 1, "close", 3, "click"], [3, "type"]],
      template: function NotificationMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("esc", function NotificationMessageComponent_Template_div_esc_0_listener() {
            return ctx.close();
          });
          ɵɵtemplate(1, NotificationMessageComponent_cx_icon_1_Template, 1, 1, "cx-icon", 1);
          ɵɵelementStart(2, "p");
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "button", 2);
          ɵɵpipe(6, "cxTranslate");
          ɵɵpipe(7, "cxTranslate");
          ɵɵlistener("click", function NotificationMessageComponent_Template_button_click_5_listener() {
            return ctx.close();
          });
          ɵɵelement(8, "cx-icon", 3);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("cxFocus", ɵɵpureFunction0(12, _c0));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.messageIcon);
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(4, 6, ctx.message));
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(6, 8, "common.close"))("title", ɵɵpipeBind1(7, 10, "common.close"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.closeIcon);
        }
      },
      dependencies: [NgIf, IconComponent, FocusDirective, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationMessageComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-notification",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  class="inner"
  [cxFocus]="{ autofocus: true, focusOnEscape: true }"
  (esc)="close()"
>
  <cx-icon *ngIf="messageIcon" [type]="messageIcon"></cx-icon>
  <p>{{ message | cxTranslate }}</p>
  <button
    class="close"
    (click)="close()"
    type="button"
    attr.aria-label="{{ 'common.close' | cxTranslate }}"
    attr.title="{{ 'common.close' | cxTranslate }}"
  >
    <cx-icon [type]="closeIcon"></cx-icon>
  </button>
</div>
`
    }]
  }], null, null);
})();
var MessageRenderService = class _MessageRenderService {
  constructor(componentFactoryResolver) {
    this.componentFactoryResolver = componentFactoryResolver;
  }
  getComponent(msg) {
    return this.componentFactoryResolver.resolveComponentFactory(msg.component || NotificationMessageComponent);
  }
  getInjector(componentData, parent) {
    return Injector.create({
      providers: [{
        provide: MessageData,
        useValue: componentData
      }],
      parent
    });
  }
  static {
    this.ɵfac = function MessageRenderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageRenderService)(ɵɵinject(ComponentFactoryResolver$1));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MessageRenderService,
      factory: _MessageRenderService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageRenderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }], null);
})();
var MessageComponent = class _MessageComponent {
  constructor(messageService, renderService) {
    this.messageService = messageService;
    this.renderService = renderService;
    this.subscription = new Subscription();
  }
  ngAfterViewInit() {
    this.subscription.add(this.messageService.get().subscribe((msg) => {
      if (msg) {
        this.render(msg);
      } else {
        this.vcr?.clear();
      }
    }));
  }
  render(msg) {
    const ref = this.vcr.createComponent(this.renderService.getComponent(msg), 0, this.renderService.getInjector(msg, this.vcr.injector));
    ref.injector.get(ChangeDetectorRef).markForCheck();
    this.subscription.add(msg.events?.pipe(filter((event) => !!event.close)).subscribe(() => this.terminate(ref)));
  }
  /**
   * Terminates the message component in 2 steps. It starts to toggle the terminate
   * state of the component and shortly after destroys the component completely. The
   * termination state allows the CSS layer to play an animation before destroying.
   */
  terminate(ref) {
    ref.instance.terminated = true;
    ref.injector.get(ChangeDetectorRef).markForCheck();
    setTimeout(() => {
      ref.destroy();
    }, 500);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function MessageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageComponent)(ɵɵdirectiveInject(MessageService), ɵɵdirectiveInject(MessageRenderService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MessageComponent,
      selectors: [["cx-org-message"]],
      viewQuery: function MessageComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c1, 5, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.vcr = _t.first);
        }
      },
      standalone: false,
      decls: 2,
      vars: 0,
      consts: [["vcr", ""]],
      template: function MessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainer(0, null, 0);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-message",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: "<ng-container #vcr></ng-container>\n"
    }]
  }], () => [{
    type: MessageService
  }, {
    type: MessageRenderService
  }], {
    vcr: [{
      type: ViewChild,
      args: ["vcr", {
        read: ViewContainerRef
      }]
    }]
  });
})();
var NotificationMessageModule = class _NotificationMessageModule {
  static {
    this.ɵfac = function NotificationMessageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationMessageModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _NotificationMessageModule,
      declarations: [NotificationMessageComponent],
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationMessageModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule],
      declarations: [NotificationMessageComponent]
    }]
  }], null, null);
})();
var MessageModule = class _MessageModule {
  static {
    this.ɵfac = function MessageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MessageModule,
      declarations: [MessageComponent],
      imports: [CommonModule, NotificationMessageModule],
      exports: [MessageComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, NotificationMessageModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, NotificationMessageModule],
      declarations: [MessageComponent],
      exports: [MessageComponent]
    }]
  }], null, null);
})();
var CurrentItemService = class _CurrentItemService {
  constructor(routingService) {
    this.routingService = routingService;
    this.key$ = this.routingService.getParams().pipe(map((params) => params[this.getParamKey()]), distinctUntilChanged());
    this.item$ = this.key$.pipe(switchMap((code) => code ? this.getItem(code) : of(void 0)));
    this.b2bUnit$ = this.routingService.getParams().pipe(map((params) => params[ROUTE_PARAMS.unitCode]), distinctUntilChanged());
  }
  getRouterParam(paramKey) {
    return this.routingService.getParams().pipe(map((params) => params[paramKey]));
  }
  static {
    this.ɵfac = function CurrentItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentItemService)(ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrentItemService,
      factory: _CurrentItemService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentItemService, [{
    type: Injectable
  }], () => [{
    type: RoutingService
  }], null);
})();
var FormService = class _FormService {
  getForm(item) {
    if (this.form && !!item) {
      this.patchData(item);
      return this.form;
    }
    if (!this.form) {
      this.build(item);
    }
    this.form?.reset();
    this.form?.enable();
    this.patchData(item);
    return this.form;
  }
  patchData(item) {
    this.toggleFreeze(item);
    this.form?.patchValue(__spreadValues(__spreadValues({}, this.defaultValue), item));
  }
  toggleFreeze(item) {
    if (this.form?.enabled && item?.active === false) {
      this.form.disable();
    }
    if (this.form?.disabled && item?.active === true) {
      this.form.enable();
    }
  }
  /**
   * returns the default form value.
   */
  get defaultValue() {
    return {};
  }
  static {
    this.ɵfac = function FormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _FormService,
      factory: _FormService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormService, [{
    type: Injectable
  }], null, null);
})();
var ItemService = class _ItemService {
  constructor(currentItemService, routingService, formService) {
    this.currentItemService = currentItemService;
    this.routingService = routingService;
    this.formService = formService;
    this.key$ = this.currentItemService.key$;
    this.current$ = this.currentItemService.item$;
    this.isInEditMode$ = new BehaviorSubject(false);
    this.unit$ = this.currentItemService.b2bUnit$;
    this.error$ = this.key$.pipe(switchMap((key) => this.currentItemService.getError(key)));
  }
  save(form, key) {
    if (form.invalid) {
      form.markAllAsTouched();
      FormUtils.deepUpdateValueAndValidity(form);
      return EMPTY;
    } else {
      const formValue = form.value;
      form.disable();
      return key ? this.update(key, formValue) : this.create(formValue);
    }
  }
  getForm(item) {
    return this.formService.getForm(item);
  }
  /**
   * Launches the detailed route for the given item item.
   */
  launchDetails(item) {
    const cxRoute = this.getDetailsRoute();
    const params = this.buildRouteParams(item);
    if (cxRoute && item && Object.keys(item).length > 0) {
      this.routingService.go({
        cxRoute,
        params
      });
    }
  }
  /**
   * Returns the route parameters that are used when launching the
   * details page. The route parameters default to the actual item,
   * but can be further populated in implementations.
   *
   * Customized route parameters are useful in case the actual item
   * doesn't match the expected route parameters. You can manipulate
   * the parameter data.
   */
  buildRouteParams(item) {
    return item;
  }
  getRouterParam(key) {
    return this.currentItemService.getRouterParam(key);
  }
  /**
   * Sets to true when the user is on the entity item form page
   */
  setEditMode(isInEdit) {
    this.isInEditMode$.next(isInEdit);
  }
  static {
    this.ɵfac = function ItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemService)(ɵɵinject(CurrentItemService), ɵɵinject(RoutingService), ɵɵinject(FormService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ItemService,
      factory: _ItemService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemService, [{
    type: Injectable
  }], () => [{
    type: CurrentItemService
  }, {
    type: RoutingService
  }, {
    type: FormService
  }], null);
})();
var CardComponent = class _CardComponent {
  constructor(itemService, messageService) {
    this.itemService = itemService;
    this.messageService = messageService;
    this.previous = true;
    this.showHint = false;
    this.iconTypes = ICON_TYPE;
    this.item$ = this.itemService.current$.pipe(tap((item) => this.refreshMessages(item)));
  }
  /**
   * The views are router based, which means if we close a view, the router outlet is
   * cleaned immediately. To prevent this, we're closing the view manually, before
   * navigating back.
   */
  closeView(event) {
    event.stopPropagation();
    this.view.toggle(true);
    setTimeout(() => {
      event.target?.parentElement?.click();
    }, 500);
    return false;
  }
  get previousLabel() {
    return this.previous;
  }
  refreshMessages(item) {
    if (this.itemKey !== void 0 && item?.code !== this.itemKey && item?.uid !== this.itemKey && item?.customerId !== this.itemKey) {
      this.messageService.clear();
    }
    this.itemKey = item?.code ?? item?.uid ?? item?.customerId;
  }
  static {
    this.ɵfac = function CardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(MessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CardComponent,
      selectors: [["cx-org-card"]],
      viewQuery: function CardComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(ViewComponent, 5, ViewComponent);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.view = _t.first);
        }
      },
      hostAttrs: [1, "content-wrapper"],
      inputs: {
        i18nRoot: "i18nRoot",
        previous: "previous",
        subtitle: "subtitle",
        showHint: "showHint"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([MessageService])],
      ngContentSelectors: _c3,
      decls: 24,
      vars: 21,
      consts: [["detailHint", ""], ["prevLabel", ""], ["role", "tabpanel", 1, "card", 3, "viewTitle"], [1, "header"], [1, "title-bar"], [1, "title"], [3, "id", 4, "cxFeature"], [4, "cxFeature"], [3, "cxPopover", "cxPopoverOptions", 4, "ngIf"], [1, "actions"], ["class", "link btn btn-link btn-sm close", "routerLink", "../", 4, "ngIf"], [1, "main"], ["aria-live", "assertive"], [3, "id"], [3, "cxPopover", "cxPopoverOptions"], [3, "type"], ["routerLink", "../", 1, "link", "btn", "btn-link", "btn-sm", "close"], ["type", "CLOSE", 3, "title", "click", 4, "ngIf", "ngIfElse"], ["type", "CLOSE", 3, "click", "title"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c2);
          ɵɵelementStart(0, "cx-view", 2);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "cxTranslate");
          ɵɵelementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3");
          ɵɵtemplate(7, CardComponent_span_7_Template, 4, 9, "span", 6)(8, CardComponent_ng_container_8_Template, 4, 8, "ng-container", 7)(9, CardComponent_button_9_Template, 4, 10, "button", 8);
          ɵɵelementEnd();
          ɵɵelementStart(10, "h4");
          ɵɵtext(11);
          ɵɵpipe(12, "async");
          ɵɵpipe(13, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(14, "div", 9);
          ɵɵprojection(15);
          ɵɵelementEnd()();
          ɵɵtemplate(16, CardComponent_button_16_Template, 5, 5, "button", 10);
          ɵɵelementEnd();
          ɵɵelementStart(17, "div", 11);
          ɵɵelement(18, "cx-org-message", 12);
          ɵɵprojection(19, 1);
          ɵɵprojection(20, 2);
          ɵɵelementEnd()();
          ɵɵelement(21, "router-outlet");
          ɵɵtemplate(22, CardComponent_ng_template_22_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("viewTitle", ɵɵpipeBind2(2, 9, ctx.i18nRoot + ".title", ɵɵpureFunction1(17, _c4, ɵɵpipeBind1(1, 7, ctx.item$))));
          ɵɵattribute("aria-labelledby", ctx.i18nRoot + "_title");
          ɵɵadvance(7);
          ɵɵproperty("cxFeature", "a11yRegionAssociatedHeaders");
          ɵɵadvance();
          ɵɵproperty("cxFeature", "!a11yRegionAssociatedHeaders");
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.showHint);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ctx.subtitle || ɵɵpipeBind2(13, 14, ctx.i18nRoot + ".subtitle", ɵɵpureFunction1(19, _c4, ɵɵpipeBind1(12, 12, ctx.item$))), " ");
          ɵɵadvance(5);
          ɵɵproperty("ngIf", !!ctx.previous);
        }
      },
      dependencies: [NgIf, ViewComponent, RouterOutlet, RouterLink, IconComponent, MessageComponent, PopoverDirective, FeatureDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [MessageService],
      standalone: false,
      template: `<cx-view
  [viewTitle]="i18nRoot + '.title' | cxTranslate: { item: item$ | async }"
  class="card"
  role="tabpanel"
  [attr.aria-labelledby]="i18nRoot + '_title'"
>
  <div class="header">
    <div class="title-bar">
      <div class="title">
        <h3>
          <span
            *cxFeature="'a11yRegionAssociatedHeaders'"
            id="{{ i18nRoot + '_title' }}"
          >
            {{ i18nRoot + '.title' | cxTranslate: { item: item$ | async } }}
          </span>
          <ng-container *cxFeature="'!a11yRegionAssociatedHeaders'">
            {{ i18nRoot + '.title' | cxTranslate: { item: item$ | async } }}
          </ng-container>
          <button
            *ngIf="showHint"
            [cxPopover]="detailHint"
            [cxPopoverOptions]="{
              placement: 'auto',
              class: 'hint-popover',
              appendToBody: true,
              displayCloseButton: true,
            }"
            [attr.aria-label]="'organization.information' | cxTranslate"
            [attr.title]="'organization.information' | cxTranslate"
          >
            <cx-icon [type]="iconTypes.INFO"> </cx-icon>
          </button>
        </h3>
        <h4>
          {{
            subtitle ||
              (i18nRoot + '.subtitle' | cxTranslate: { item: item$ | async })
          }}
        </h4>
      </div>
      <div class="actions">
        <ng-content select="[actions]"></ng-content>
      </div>
    </div>
    <button
      *ngIf="!!previous"
      class="link btn btn-link btn-sm close"
      [attr.aria-label]="'common.close' | cxTranslate"
      routerLink="../"
    >
      <cx-icon
        *ngIf="previous === true; else prevLabel"
        type="CLOSE"
        title="{{ 'common.close' | cxTranslate }}"
        (click)="closeView($event)"
      ></cx-icon>
      <ng-template #prevLabel>{{ previousLabel | cxTranslate }}</ng-template>
    </button>
  </div>

  <div class="main">
    <cx-org-message aria-live="assertive"></cx-org-message>
    <ng-content select="[info]"></ng-content>
    <ng-content select="[main]"></ng-content>
  </div>
</cx-view>

<router-outlet></router-outlet>

<ng-template #detailHint>
  <p>
    {{ i18nRoot + '.hint' | cxTranslate }}
  </p>
</ng-template>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: MessageService
  }], {
    i18nRoot: [{
      type: Input
    }],
    previous: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    showHint: [{
      type: Input
    }],
    view: [{
      type: ViewChild,
      args: [ViewComponent, {
        read: ViewComponent
      }]
    }]
  });
})();
var CardModule = class _CardModule {
  static {
    this.ɵfac = function CardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CardModule,
      declarations: [CardComponent],
      imports: [CommonModule, SplitViewModule, RouterModule, I18nModule, IconModule, UrlModule, MessageModule, PopoverModule, FeaturesConfigModule],
      exports: [CardComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, SplitViewModule, RouterModule, I18nModule, IconModule, UrlModule, MessageModule, PopoverModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SplitViewModule, RouterModule, I18nModule, IconModule, UrlModule, MessageModule, PopoverModule, FeaturesConfigModule],
      declarations: [CardComponent],
      exports: [CardComponent]
    }]
  }], null, null);
})();
var ItemActiveDirective = class _ItemActiveDirective {
  constructor(itemService, messageService) {
    this.itemService = itemService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.subscription = this.itemService.current$.pipe(distinctUntilChanged((previous, current) => previous?.active === current?.active), filter(isNotNullable), filter((item) => item.active === false)).subscribe((item) => this.handleDisabledItems(item));
  }
  handleDisabledItems(item) {
    this.messageService.add({
      message: {
        key: "organization.notification.disabled",
        params: {
          item
        }
      },
      type: GlobalMessageType.MSG_TYPE_ERROR
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function ItemActiveDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemActiveDirective)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(MessageService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ItemActiveDirective,
      selectors: [["", "cxOrgItemActive", ""]],
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemActiveDirective, [{
    type: Directive,
    args: [{
      selector: "[cxOrgItemActive]",
      standalone: false
    }]
  }], () => [{
    type: ItemService
  }, {
    type: MessageService
  }], null);
})();
var ItemActiveModule = class _ItemActiveModule {
  static {
    this.ɵfac = function ItemActiveModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemActiveModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ItemActiveModule,
      declarations: [ItemActiveDirective],
      imports: [CommonModule],
      exports: [ItemActiveDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemActiveModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [ItemActiveDirective],
      exports: [ItemActiveDirective]
    }]
  }], null, null);
})();
var DISABLED_STATUS = "DISABLED";
var FormComponent = class _FormComponent {
  constructor(itemService, messageService) {
    this.itemService = itemService;
    this.messageService = messageService;
    this.animateBack = true;
    this.form$ = this.itemService.current$.pipe(map((item) => {
      this.setI18nRoot(item);
      if (!item) {
        item = {};
      }
      return this.itemService.getForm(item);
    }));
    this.disabled$ = this.form$.pipe(switchMap((form) => form?.statusChanges ?? EMPTY), map((status) => status === DISABLED_STATUS));
  }
  save(form) {
    this.itemService.key$.pipe(first(), switchMap((key) => this.itemService.save(form, key).pipe(take(1), map((data) => ({
      item: data.item,
      status: data.status,
      action: key ? "update" : "create"
    }))))).subscribe(({
      item,
      action,
      status
    }) => {
      if (status === LoadStatus.SUCCESS) {
        this.itemService.launchDetails(item);
        this.notify(item, action);
      }
      form.enable();
    });
  }
  notify(item, action) {
    this.messageService?.add({
      message: {
        key: `${this.i18nRoot}.messages.${action}`,
        params: {
          item
        }
      }
    });
  }
  setI18nRoot(item) {
    this.i18n = this.i18nRoot + (item ? ".edit" : ".create");
  }
  back(event, card) {
    if (this.animateBack) {
      card.closeView(event);
    }
  }
  ngOnInit() {
    this.itemService.setEditMode(true);
  }
  ngOnDestroy() {
    this.itemService.setEditMode(false);
  }
  static {
    this.ɵfac = function FormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(MessageService, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _FormComponent,
      selectors: [["cx-org-form"]],
      hostAttrs: [1, "content-wrapper"],
      inputs: {
        i18nRoot: "i18nRoot",
        animateBack: "animateBack",
        subtitle: "subtitle"
      },
      standalone: false,
      ngContentSelectors: _c7,
      decls: 2,
      vars: 3,
      consts: [["card", ""], [3, "submit", 4, "ngIf"], [3, "submit"], ["cxOrgItemActive", "", 3, "previous", "i18nRoot", "subtitle", "cxFocus"], ["actions", "", 1, "button", "btn", "btn-sm", "primary", "btn-primary", 3, "disabled"], ["actions", "", "routerLink", "../", "type", "button", 1, "link", "btn", "btn-link", "btn-sm"], [3, "click"], ["main", "", 1, "details"]],
      template: function FormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c6);
          ɵɵtemplate(0, FormComponent_form_0_Template, 13, 15, "form", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.form$));
        }
      },
      dependencies: [NgIf, ɵNgNoValidate, NgControlStatusGroup, NgForm, RouterLink, CardComponent, ItemActiveDirective, FocusDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      standalone: false,
      template: `<form *ngIf="form$ | async as form" (submit)="save(form)">
  <cx-org-card
    #card
    [previous]="false"
    [i18nRoot]="i18n"
    cxOrgItemActive
    [subtitle]="subtitle"
    [cxFocus]="{ autofocus: 'input', refreshFocus: form }"
  >
    <button
      actions
      class="button btn btn-sm primary btn-primary"
      [disabled]="form.disabled || (disabled$ | async)"
    >
      {{ 'organization.save' | cxTranslate }}
    </button>
    <button
      actions
      class="link btn btn-link btn-sm"
      routerLink="../"
      type="button"
    >
      <!--
        We leverage the soft-close feature from the split view, so that the animation
        has time to kick in before the router outlet is deleted.
       -->
      <span (click)="back($event, card)">{{
        'organization.cancel' | cxTranslate
      }}</span>
    </button>

    <section main class="details">
      <ng-content select="[main]" ngProjectAs="[main]"></ng-content>
    </section>
  </cx-org-card>
</form>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: MessageService,
    decorators: [{
      type: Optional
    }]
  }], {
    i18nRoot: [{
      type: Input
    }],
    animateBack: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }]
  });
})();
var FormModule = class _FormModule {
  static {
    this.ɵfac = function FormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FormModule,
      declarations: [FormComponent],
      imports: [CommonModule, FormsModule, I18nModule, RouterModule, CardModule, MessageModule, ItemActiveModule, KeyboardFocusModule],
      exports: [FormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, I18nModule, RouterModule, CardModule, MessageModule, ItemActiveModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, I18nModule, RouterModule, CardModule, MessageModule, ItemActiveModule, KeyboardFocusModule],
      declarations: [FormComponent],
      exports: [FormComponent]
    }]
  }], null, null);
})();
var CreateButtonType;
(function(CreateButtonType2) {
  CreateButtonType2["LINK"] = "LINK";
  CreateButtonType2["BUTTON"] = "BUTTON";
})(CreateButtonType || (CreateButtonType = {}));
var ListService = class _ListService {
  get viewType() {
    return this.tableType;
  }
  get domainType() {
    return this._domainType ?? this.viewType;
  }
  constructor(tableService) {
    this.tableService = tableService;
    this.defaultTableStructure = {
      options: {
        layout: TableLayout.VERTICAL_STACKED
      },
      lg: {
        options: {
          layout: TableLayout.VERTICAL
        }
      }
    };
    this.ghostData = {
      values: new Array(10)
    };
    this.notification$ = new Subject();
    this.pagination$ = new BehaviorSubject({
      pageSize: 10
    });
  }
  /**
   * Indicates the unique key for the item model. The key is different for various
   * organizations, i.e. `budget.code`, `user.uid`.
   */
  key() {
    return "code";
  }
  /**
   * Loads the data by delegating to the `load` method, which must be implemented
   * in specific implementations of this abstract class.
   *
   * The load method is streamed from the `pagination$` stream, which is initialized
   * with default pagination and structure drive properties.
   */
  getData(...args) {
    return this.pagination$.pipe(
      // we merge any configured pagination from the table structure
      switchMap((pagination2) => this.getStructure().pipe(map((config) => __spreadValues(__spreadValues({}, pagination2), config.options?.pagination)))),
      switchMap((pagination2) => this.load(pagination2, ...args)),
      startWith(this.ghostData)
    );
  }
  /**
   * Returns the `TableStructure` for the `OrganizationTableType`.
   *
   * The table structure is build by the `TableService` based on configuration.
   * The `defaultTableStructure` is deep merged as a fallback configuration.
   */
  getStructure() {
    return this.tableService.buildStructure(this.viewType, this.defaultTableStructure);
  }
  /**
   * Views the page.
   */
  view(pagination2, nextPage) {
    this.pagination$.next(__spreadProps(__spreadValues({}, pagination2), {
      currentPage: nextPage
    }));
  }
  /**
   * Updates the sort code for the PaginationModel.
   *
   * The `currentPage` is reset to 0.
   */
  sort(pagination2, _obsoleteSort) {
    this.view(pagination2, 0);
  }
  /**
   * Indicates whether the given data equals to the ghost data.
   *
   * This is used to validate the initial loading state, which is
   * different from the loading state; the loading state occurs
   * while sorting and paginating, where as the initial loading state
   * only happens at the very first load.
   */
  hasGhostData(data) {
    return data === this.ghostData;
  }
  /**
   * This method will return what kind of UI element to be used for create option in UI
   */
  getCreateButtonType() {
    return CreateButtonType.LINK;
  }
  /**
   * This method will be called when the button to create new item is clicked.
   */
  onCreateButtonClick() {
  }
  /**
   * This method will return the label for create button
   */
  getCreateButtonLabel() {
    return {
      key: "organization.add"
    };
  }
  static {
    this.ɵfac = function ListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListService)(ɵɵinject(TableService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ListService,
      factory: _ListService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListService, [{
    type: Injectable
  }], () => [{
    type: TableService
  }], null);
})();
var ListComponent = class _ListComponent {
  constructor(service, organizationItemService) {
    this.service = service;
    this.organizationItemService = organizationItemService;
    this.trapFocus = TrapFocus;
    this.hasGhostData = false;
    this.viewType = this.service.viewType;
    this.domainType = this.service.domainType;
    this.iconTypes = ICON_TYPE;
    this.createButtonAllTypes = CreateButtonType;
    this.createButtonType = this.service.getCreateButtonType();
    this.currentKey$ = this.organizationItemService.key$;
    this.structure$ = this.service.getStructure();
    this.listData$ = this.service.getData().pipe(tap((data) => {
      this.sortCode = data?.pagination?.sort;
      this.hasGhostData = this.service.hasGhostData(data);
    }));
    this.key = this.service.key();
    this.hideAddButton = false;
    useFeatureStyles("a11yTextSpacingAdjustments");
    useFeatureStyles("a11yCroppedFocusRing");
  }
  /**
   * Returns the total number of items.
   */
  getListCount(dataTable) {
    return dataTable.pagination?.totalResults;
  }
  /**
   * Browses to the given page number
   */
  browse(pagination2, pageNumber) {
    if (pagination2) {
      this.service.view(pagination2, pageNumber);
    }
  }
  /**
   * Navigates to the detailed view of the selected list item.
   */
  launchItem(event) {
    this.organizationItemService.launchDetails(event);
  }
  /**
   * Sorts the list.
   */
  sort(pagination2) {
    if (pagination2) {
      this.service.sort(__spreadValues(__spreadValues({}, pagination2), {
        sort: this.sortCode
      }));
    }
  }
  /**
   * Function to call when 'Manage Users' button is clicked
   */
  onCreateButtonClick() {
    this.service.onCreateButtonClick();
  }
  /**
   * Returns the label for Create button
   */
  getCreateButtonLabel() {
    return this.service.getCreateButtonLabel();
  }
  static {
    this.ɵfac = function ListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListComponent)(ɵɵdirectiveInject(ListService), ɵɵdirectiveInject(ItemService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ListComponent,
      selectors: [["cx-org-list"]],
      hostVars: 4,
      hostBindings: function ListComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.viewType);
          ɵɵclassProp("ghost", ctx.hasGhostData);
        }
      },
      inputs: {
        key: "key",
        hideAddButton: "hideAddButton"
      },
      standalone: false,
      ngContentSelectors: _c10,
      decls: 9,
      vars: 4,
      consts: [["emptyList", ""], ["listHint", ""], ["showButton", ""], [3, "hideMode"], [4, "ngIf"], ["class", "list", "role", "region", 4, "ngIf"], ["role", "region", 1, "list"], [1, "header"], ["aria-live", "polite", 1, "title"], [3, "id", 4, "cxFeature"], [4, "cxFeature"], [3, "cxPopover", "cxPopoverOptions"], [3, "type"], [1, "actions"], ["name", "sort", "class", "sort", 3, "searchable", "clearable", "tabIndex", "ngModel", "change", "ngModelChange", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["role", "tree", 3, "structure", "data", "i18nRoot", "currentItem", "launch", 4, "ngIf", "ngIfElse"], [1, "footer"], [3, "viewPageEvent", "pagination"], [3, "id"], ["name", "sort", 1, "sort", 3, "change", "ngModelChange", "searchable", "clearable", "tabIndex", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "button btn btn-sm primary btn-primary create", "routerLinkActive", "disabled", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "disabled", 1, "button", "btn", "btn-sm", "primary", "btn-primary", "create", 3, "routerLink"], ["role", "tree", 3, "launch", "structure", "data", "i18nRoot", "currentItem"], [1, "instruction", "is-empty"], ["class", "button btn btn-sm primary btn-primary create", 3, "click", 4, "ngIf"], [1, "button", "btn", "btn-sm", "primary", "btn-primary", "create", 3, "click"]],
      template: function ListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c9);
          ɵɵelementStart(0, "cx-split-view", 3);
          ɵɵtemplate(1, ListComponent_ng_container_1_Template, 4, 3, "ng-container", 4);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
          ɵɵtemplate(3, ListComponent_ng_template_3_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(5, ListComponent_ng_template_5_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor)(7, ListComponent_ng_template_7_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("hideMode", false);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx.structure$));
        }
      },
      dependencies: [NgForOf, NgIf, RouterOutlet, RouterLink, RouterLinkActive, SplitViewComponent, ViewComponent, TableComponent, IconComponent, PaginationComponent, NgSelectComponent, NgOptionComponent, NgControlStatus, NgModel, PopoverDirective, FeatureDirective, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<cx-split-view [hideMode]="false">
  <ng-container *ngIf="structure$ | async as structure">
    <cx-view
      class="list"
      *ngIf="listData$ | async as data"
      role="region"
      [attr.aria-labelledby]="viewType + '_title'"
    >
      <div class="header">
        <div aria-live="polite" class="title">
          <!-- TODO: (CXSPA-6624) - Remove feature flag next major release -->
          <h2>
            <span
              *cxFeature="'a11yRegionAssociatedHeaders'"
              id="{{ viewType + '_title' }}"
            >
              {{
                viewType + '.header'
                  | cxTranslate: { count: getListCount(data) }
              }}
            </span>
            <ng-container *cxFeature="'!a11yRegionAssociatedHeaders'">
              {{
                viewType + '.header'
                  | cxTranslate: { count: getListCount(data) }
              }}
            </ng-container>
            <button
              [cxPopover]="listHint"
              [cxPopoverOptions]="{
                placement: 'auto',
                class: 'hint-popover',
                appendToBody: true,
                displayCloseButton: true,
              }"
              [attr.aria-label]="
                'organization.information'
                  | cxTranslate
                    : { title: viewType + '.groupName' | cxTranslate }
              "
              [attr.title]="
                'organization.information'
                  | cxTranslate
                    : { title: viewType + '.groupName' | cxTranslate }
              "
            >
              <cx-icon [type]="iconTypes.INFO"> </cx-icon>
            </button>
          </h2>
        </div>

        <div class="actions">
          <label>
            <span *ngIf="data.pagination?.sort">{{
              structure.type + '.sortBy' | cxTranslate
            }}</span>
            <ng-select
              name="sort"
              class="sort"
              *ngIf="data.pagination?.sort"
              [searchable]="false"
              [clearable]="false"
              (change)="sort($any(data.pagination))"
              [tabIndex]="0"
              [(ngModel)]="sortCode"
              [attr.aria-label]="
                (sortCode
                  ? structure.type + '.sort.' + sortCode
                  : structure.type + '.sortBy'
                ) | cxTranslate
              "
            >
              <ng-option *ngFor="let sort of data.sorts" [value]="sort.code">
                {{ structure.type + '.sort.' + sort.code | cxTranslate }}
              </ng-option>
            </ng-select>
          </label>

          <ng-content select="[actions]"></ng-content>

          <ng-container
            *ngIf="
              createButtonType === createButtonAllTypes.LINK;
              else showButton
            "
          >
            <a
              *ngIf="!hideAddButton"
              class="button btn btn-sm primary btn-primary create"
              [routerLink]="{ cxRoute: structure.type + 'Create' } | cxUrl"
              routerLinkActive="disabled"
            >
              {{ getCreateButtonLabel() | cxTranslate }}
            </a>
          </ng-container>
        </div>
      </div>

      <cx-table
        *ngIf="data.values && data.values.length > 0; else emptyList"
        [structure]="structure"
        [data]="data.values"
        [i18nRoot]="domainType"
        [currentItem]="{ property: key, value: currentKey$ | async }"
        (launch)="launchItem($event)"
        role="tree"
      >
      </cx-table>

      <div class="footer">
        <cx-pagination
          [pagination]="data.pagination"
          (viewPageEvent)="browse($any(data.pagination), $event)"
        ></cx-pagination>
      </div>
    </cx-view>

    <!-- nested split views are rendered inside child routes -->
    <router-outlet></router-outlet>
  </ng-container>
</cx-split-view>

<ng-template #emptyList>
  <p class="instruction is-empty">
    {{ 'organization.messages.emptyList' | cxTranslate }}
  </p>
</ng-template>

<ng-template #listHint>
  <p>
    {{ viewType + '.hint' | cxTranslate }}
  </p>
</ng-template>

<ng-template #showButton>
  <button
    *ngIf="!hideAddButton"
    class="button btn btn-sm primary btn-primary create"
    (click)="onCreateButtonClick()"
  >
    {{ getCreateButtonLabel() | cxTranslate }}
  </button>
</ng-template>
`
    }]
  }], () => [{
    type: ListService
  }, {
    type: ItemService
  }], {
    hasGhostData: [{
      type: HostBinding,
      args: ["class.ghost"]
    }],
    viewType: [{
      type: HostBinding,
      args: ["class"]
    }],
    key: [{
      type: Input
    }],
    hideAddButton: [{
      type: Input
    }]
  });
})();
var ListModule = class _ListModule {
  static {
    this.ɵfac = function ListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ListModule,
      declarations: [ListComponent],
      imports: [CommonModule, RouterModule, SplitViewModule, TableModule, IconModule, UrlModule, I18nModule, PaginationModule, NgSelectModule, FormsModule, MessageModule, KeyboardFocusModule, PopoverModule, FeaturesConfigModule],
      exports: [ListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, SplitViewModule, TableModule, IconModule, UrlModule, I18nModule, PaginationModule, NgSelectModule, FormsModule, MessageModule, KeyboardFocusModule, PopoverModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, SplitViewModule, TableModule, IconModule, UrlModule, I18nModule, PaginationModule, NgSelectModule, FormsModule, MessageModule, KeyboardFocusModule, PopoverModule, FeaturesConfigModule],
      declarations: [ListComponent],
      exports: [ListComponent]
    }]
  }], null, null);
})();
var CellComponent = class _CellComponent {
  constructor(outlet) {
    this.outlet = outlet;
  }
  get tabIndex() {
    return -1;
  }
  get model() {
    return this.outlet.context;
  }
  get property() {
    return this.model?.[this.outlet?.context?._field];
  }
  /**
   * Indicates wether the cell is linkable.
   *
   * If the cells is linkable, an anchor link is created to the detailed route
   * of the given `_type`.
   *
   * Defaults to `false`.
   */
  get linkable() {
    return this.property !== void 0 && (this.cellOptions.linkable ?? false);
  }
  /**
   * Helper method to access the cell options.
   */
  get cellOptions() {
    return this.outlet.context?._options?.cells?.[this.outlet.context?._field] ?? {};
  }
  /**
   * Generates the configurable route to the detail page of the given context item.
   */
  get route() {
    return this.outlet.context._type + "Details";
  }
  get routeModel() {
    return this.outlet.context;
  }
  get type() {
    return this.model._type;
  }
  /**
   * Indicates whether the item is loaded.
   */
  get hasItem() {
    return !!this.item && Object.keys(this.item).length > 0;
  }
  get item() {
    if (!this.outlet.context) {
      return null;
    }
    const _a = this.outlet.context, {
      _field,
      _options,
      _type,
      _i18nRoot
    } = _a, all = __objRest(_a, [
      "_field",
      "_options",
      "_type",
      "_i18nRoot"
    ]);
    return all;
  }
  static {
    this.ɵfac = function CellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CellComponent)(ɵɵdirectiveInject(OutletContextData));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CellComponent,
      selectors: [["cx-org-cell"]],
      standalone: false,
      decls: 3,
      vars: 2,
      consts: [["text", ""], [3, "routerLink", "tabIndex", 4, "ngIf", "ngIfElse"], [3, "routerLink", "tabIndex"], [4, "ngTemplateOutlet"], [1, "text", 3, "title"]],
      template: function CellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CellComponent_a_0_Template, 3, 8, "a", 1)(1, CellComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const text_r2 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.linkable)("ngIfElse", text_r2);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, RouterLink, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<a\n  *ngIf="linkable; else text"\n  [routerLink]="{ cxRoute: route, params: routeModel } | cxUrl"\n  [tabIndex]="tabIndex"\n>\n  <ng-container *ngTemplateOutlet="text"></ng-container>\n</a>\n\n<ng-template #text>\n  <span class="text" title="{{ property }}">{{ property }}</span>\n</ng-template>\n'
    }]
  }], () => [{
    type: OutletContextData
  }], null);
})();
var AssignCellComponent = class _AssignCellComponent extends CellComponent {
  constructor(outlet, organizationItemService, messageService, organizationSubListService) {
    super(outlet);
    this.outlet = outlet;
    this.organizationItemService = organizationItemService;
    this.messageService = messageService;
    this.organizationSubListService = organizationSubListService;
  }
  get isAssigned() {
    return this.item?.selected;
  }
  toggleAssign() {
    const isAssigned = this.isAssigned;
    this.organizationItemService.key$.pipe(first(), switchMap((key) => isAssigned ? this.unassign?.(key, this.link) : this.assign(key, this.link)), take(1), filter((data) => data.status === LoadStatus.SUCCESS)).subscribe((data) => this.notify(data.item, isAssigned ? "unassigned" : "assigned"));
  }
  assign(key, linkKey) {
    return this.organizationSubListService.assign?.(key, linkKey) ?? EMPTY;
  }
  unassign(key, linkKey) {
    return this.organizationSubListService.unassign?.(key, linkKey) ?? EMPTY;
  }
  /**
   * Returns the key for the linked object.
   *
   * At the moment, we're using a generic approach to assign objects,
   * but the object do not have a normalized shape. Therefor, we need
   * to evaluate the context to return the right key for the associated
   * item.
   */
  get link() {
    return this.outlet.context.code ?? this.outlet.context.customerId ?? this.outlet.context.uid;
  }
  notify(item, state) {
    this.messageService.add({
      message: {
        key: `${this.organizationSubListService.viewType}.${state}`,
        params: {
          item
        }
      }
    });
  }
  static {
    this.ɵfac = function AssignCellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssignCellComponent)(ɵɵdirectiveInject(OutletContextData), ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(MessageService), ɵɵdirectiveInject(ListService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AssignCellComponent,
      selectors: [["cx-org-assign-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 1,
      consts: [["type", "button", "class", "link", 3, "click", 4, "ngIf"], ["type", "button", 1, "link", 3, "click"]],
      template: function AssignCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AssignCellComponent_button_0_Template, 2, 1, "button", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.hasItem);
        }
      },
      dependencies: [NgIf],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssignCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-assign-cell",
      template: `
    <button type="button" *ngIf="hasItem" (click)="toggleAssign()" class="link">
      {{ isAssigned ? 'unassign' : 'assign' }}
    </button>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false
    }]
  }], () => [{
    type: OutletContextData
  }, {
    type: ItemService
  }, {
    type: MessageService
  }, {
    type: ListService
  }], null);
})();
var SubListComponent = class _SubListComponent extends ListComponent {
  constructor() {
    super(...arguments);
    this.hostClass = "";
    this.previous = true;
    this.key = this.service.key();
    this.showHint = false;
    this.hasGhostData = false;
    this.listData$ = this.currentKey$.pipe(switchMap((key) => this.service.getData(key)), tap((data) => {
      this.hasGhostData = this.service.hasGhostData(data);
    }));
    this.dataStructure$ = this.service.getStructure();
  }
  set routerKey(key) {
    this.subKey$ = this.organizationItemService.getRouterParam(key);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSubListComponent_BaseFactory;
      return function SubListComponent_Factory(__ngFactoryType__) {
        return (ɵSubListComponent_BaseFactory || (ɵSubListComponent_BaseFactory = ɵɵgetInheritedFactory(_SubListComponent)))(__ngFactoryType__ || _SubListComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SubListComponent,
      selectors: [["cx-org-sub-list"]],
      viewQuery: function SubListComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(MessageService, 5, MessageService);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.messageService = _t.first);
        }
      },
      hostAttrs: [1, "content-wrapper"],
      hostVars: 2,
      hostBindings: function SubListComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ghost", ctx.hasGhostData);
        }
      },
      inputs: {
        previous: "previous",
        key: "key",
        showHint: "showHint",
        routerKey: "routerKey"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      ngContentSelectors: _c17,
      decls: 8,
      vars: 8,
      consts: [["emptyList", ""], [3, "previous", "i18nRoot", "showHint", "cxFocus"], ["main", "", 4, "ngIf"], ["main", ""], [4, "ngIf"], [3, "structure", "data", "i18nRoot", "currentItem", 4, "ngIf", "ngIfElse"], ["class", "footer", 4, "ngIf"], [3, "structure", "data", "i18nRoot", "currentItem"], [1, "footer"], [3, "viewPageEvent", "pagination"], [1, "is-empty"]],
      template: function SubListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef(_c16);
          ɵɵelementStart(0, "cx-org-card", 1);
          ɵɵprojection(1, 0, ["ngProjectAs", "[actions]", 5, ["", "actions", ""]]);
          ɵɵprojection(2, 1, ["ngProjectAs", "[main]", 5, ["", "main", ""]]);
          ɵɵprojection(3, 2, ["ngProjectAs", "[info]", 5, ["", "info", ""]]);
          ɵɵtemplate(4, SubListComponent_ng_container_4_Template, 3, 3, "ng-container", 2);
          ɵɵpipe(5, "async");
          ɵɵelementEnd();
          ɵɵtemplate(6, SubListComponent_ng_template_6_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("previous", ctx.previous)("i18nRoot", ctx.viewType)("showHint", ctx.showHint)("cxFocus", ɵɵpureFunction0(7, _c18));
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ɵɵpipeBind1(5, 5, ctx.dataStructure$));
        }
      },
      dependencies: [NgIf, CardComponent, TableComponent, PaginationComponent, FocusDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-sub-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      standalone: false,
      template: `<cx-org-card
  [previous]="previous"
  [i18nRoot]="viewType"
  [showHint]="showHint"
  [cxFocus]="{ autofocus: true }"
>
  <ng-content select="[actions]" ngProjectAs="[actions]"></ng-content>
  <ng-content select="[main]" ngProjectAs="[main]"></ng-content>
  <ng-content select="[info]" ngProjectAs="[info]"></ng-content>

  <ng-container main *ngIf="dataStructure$ | async as structure">
    <ng-container *ngIf="listData$ | async as data">
      <section>
        <cx-table
          *ngIf="data.values && data.values.length > 0; else emptyList"
          [structure]="structure"
          [data]="data.values"
          [i18nRoot]="domainType"
          [currentItem]="{ property: key, value: subKey$ | async }"
        >
        </cx-table>
      </section>

      <div
        class="footer"
        *ngIf="
          data.pagination &&
          data.pagination.totalPages !== undefined &&
          data.pagination.totalPages > 1
        "
      >
        <cx-pagination
          [pagination]="data.pagination"
          (viewPageEvent)="browse(data.pagination, $event)"
        ></cx-pagination>
      </div>
    </ng-container>
  </ng-container>
</cx-org-card>

<ng-template #emptyList>
  <p class="is-empty">{{ 'organization.messages.emptyList' | cxTranslate }}</p>
</ng-template>
`
    }]
  }], null, {
    messageService: [{
      type: ViewChild,
      args: [MessageService, {
        read: MessageService
      }]
    }],
    previous: [{
      type: Input
    }],
    key: [{
      type: Input
    }],
    showHint: [{
      type: Input
    }],
    routerKey: [{
      type: Input
    }],
    hasGhostData: [{
      type: HostBinding,
      args: ["class.ghost"]
    }]
  });
})();
var SubListModule = class _SubListModule {
  static {
    this.ɵfac = function SubListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SubListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SubListModule,
      declarations: [SubListComponent, AssignCellComponent],
      imports: [CommonModule, I18nModule, CardModule, TableModule, PaginationModule, MessageModule, KeyboardFocusModule],
      exports: [SubListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, CardModule, TableModule, PaginationModule, MessageModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, CardModule, TableModule, PaginationModule, MessageModule, KeyboardFocusModule],
      declarations: [SubListComponent, AssignCellComponent],
      exports: [SubListComponent]
    }]
  }], null, null);
})();
var SharedOrganizationModule = class _SharedOrganizationModule {
  static {
    this.ɵfac = function SharedOrganizationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SharedOrganizationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SharedOrganizationModule,
      imports: [ListModule, SubListModule, FormModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ListModule, SubListModule, FormModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedOrganizationModule, [{
    type: NgModule,
    args: [{
      imports: [ListModule, SubListModule, FormModule]
    }]
  }], null, null);
})();
var MAX_OCC_INTEGER_VALUE = 2147483647;
var ItemExistsDirective = class _ItemExistsDirective {
  constructor(itemService, messageService) {
    this.itemService = itemService;
    this.messageService = messageService;
  }
  ngOnInit() {
    this.subscription = this.itemService.error$.pipe(filter((error) => error)).subscribe(() => this.handleErrorMessage());
  }
  handleErrorMessage() {
    this.messageService.add({
      message: {
        key: "organization.notification.notExist"
      },
      type: GlobalMessageType.MSG_TYPE_ERROR
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function ItemExistsDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemExistsDirective)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(MessageService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ItemExistsDirective,
      selectors: [["", "cxOrgItemExists", ""]],
      standalone: false
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemExistsDirective, [{
    type: Directive,
    args: [{
      selector: "[cxOrgItemExists]",
      standalone: false
    }]
  }], () => [{
    type: ItemService
  }, {
    type: MessageService
  }], null);
})();
var ConfirmationMessageComponent = class _ConfirmationMessageComponent extends BaseMessageComponent {
  constructor(data, platformId, messageService) {
    super(data, platformId);
    this.data = data;
    this.platformId = platformId;
    this.messageService = messageService;
    this.cancelText = {
      key: "organization.confirmation.cancel"
    };
    this.confirmText = {
      key: "organization.confirmation.confirm"
    };
  }
  ngOnInit() {
    super.ngOnInit();
    this.cancelText = this.messageData.cancel ?? this.cancelText;
    this.confirmText = this.messageData.confirm ?? this.confirmText;
  }
  /**
   * Emits a confirmation event to the data events.
   *
   * The original author of the event message or other parties can observe
   * the event data.
   */
  confirm() {
    this.data.events?.next({
      confirm: true
    });
  }
  static {
    this.ɵfac = function ConfirmationMessageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmationMessageComponent)(ɵɵdirectiveInject(MessageData), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(MessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfirmationMessageComponent,
      selectors: [["cx-org-confirmation"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 14,
      vars: 15,
      consts: [[1, "inner", 3, "esc", "cxFocus"], ["class", "messageTitle", 4, "ngIf"], [1, "message"], [3, "type", 4, "ngIf"], [1, "actions", 3, "cxFocus"], [1, "button", "btn", "btn-sm", "cancel", 3, "click"], [1, "button", "btn", "btn-sm", "primary", "btn-primary", "confirm", 3, "click"], [1, "messageTitle"], [3, "type"]],
      template: function ConfirmationMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("esc", function ConfirmationMessageComponent_Template_div_esc_0_listener() {
            return ctx.close();
          });
          ɵɵtemplate(1, ConfirmationMessageComponent_p_1_Template, 3, 3, "p", 1);
          ɵɵelementStart(2, "div", 2);
          ɵɵtemplate(3, ConfirmationMessageComponent_cx_icon_3_Template, 1, 1, "cx-icon", 3);
          ɵɵelementStart(4, "p");
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(7, "div", 4)(8, "button", 5);
          ɵɵlistener("click", function ConfirmationMessageComponent_Template_button_click_8_listener() {
            return ctx.close();
          });
          ɵɵtext(9);
          ɵɵpipe(10, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(11, "button", 6);
          ɵɵlistener("click", function ConfirmationMessageComponent_Template_button_click_11_listener() {
            return ctx.confirm();
          });
          ɵɵtext(12);
          ɵɵpipe(13, "cxTranslate");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("cxFocus", ɵɵpureFunction0(13, _c19));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.messageTitle);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.messageIcon);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 7, ctx.message), " ");
          ɵɵadvance(2);
          ɵɵproperty("cxFocus", ɵɵpureFunction0(14, _c20));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 9, ctx.cancelText), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 11, ctx.confirmText), " ");
        }
      },
      dependencies: [NgIf, IconComponent, FocusDirective, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationMessageComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-confirmation",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="inner" [cxFocus]="{ focusOnEscape: true }" (esc)="close()">
  <p class="messageTitle" *ngIf="messageTitle">
    {{ messageTitle | cxTranslate }}
  </p>
  <div class="message">
    <cx-icon *ngIf="messageIcon" [type]="messageIcon"></cx-icon>
    <p>
      {{ message | cxTranslate }}
    </p>
  </div>
  <div class="actions" [cxFocus]="{ autofocus: 'button.primary' }">
    <button class="button btn btn-sm cancel" (click)="close()">
      {{ cancelText | cxTranslate }}
    </button>

    <button
      class="button btn btn-sm primary btn-primary confirm"
      (click)="confirm()"
    >
      {{ confirmText | cxTranslate }}
    </button>
  </div>
</div>
`
    }]
  }], () => [{
    type: MessageData
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: MessageService
  }], null);
})();
var DisableInfoService = class _DisableInfoService {
  isItemDisabled(item) {
    return item?.active === false;
  }
  isParentDisabled(item) {
    return (item.orgUnit || item.unit || item.parentOrgUnit)?.active === false && !this.isRootUnit(item);
  }
  isRootUnit(item) {
    return Boolean(item?.uid && item?.name && !item?.orgUnit && !item?.unit && (!item?.parentOrgUnit || item?.uid === item?.parentOrgUnit));
  }
  static {
    this.ɵfac = function DisableInfoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisableInfoService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DisableInfoService,
      factory: _DisableInfoService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisableInfoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ToggleStatusComponent = class _ToggleStatusComponent {
  constructor(itemService, messageService, disableInfoService) {
    this.itemService = itemService;
    this.messageService = messageService;
    this.disableInfoService = disableInfoService;
    this.key = "code";
    this.current$ = this.itemService.current$;
    this.isInEditMode$ = this.itemService.isInEditMode$;
    this.subscription = new Subscription();
  }
  toggle(item) {
    if (!item.active) {
      this.update(item);
    } else {
      if (!this.confirmation) {
        this.confirmation = this.messageService.add({
          message: {
            key: this.i18nRoot + ".messages.deactivate",
            params: {
              item
            }
          },
          messageTitle: {
            key: this.i18nRoot + ".messages.deactivateTitle",
            params: {
              item
            }
          },
          confirm: {
            key: "organization.confirmation.disable"
          },
          component: ConfirmationMessageComponent
        });
        this.subscription.add(this.confirmation.pipe(first()).subscribe((event) => {
          if (event.close) {
            this.confirmation = null;
          }
          if (event.confirm) {
            this.messageService.close(this.confirmation);
            this.update(item);
            this.confirmation = null;
          }
        }));
      }
    }
  }
  /**
   * Indicates whether the status can be toggled or not.
   */
  isDisabled(item) {
    return this.disabled ?? (this.disableInfoService.isParentDisabled(item) || this.disableInfoService.isRootUnit(item));
  }
  update(item) {
    this.itemService.update(item[this.key], this.getPatchedItem(item)).pipe(take(1), filter((data) => data.status === LoadStatus.SUCCESS)).subscribe((data) => this.notify(__spreadValues(__spreadValues({}, item), data.item)));
  }
  getPatchedItem(item) {
    const patch = {};
    Object.assign(patch, {
      [this.key]: item[this.key]
    });
    patch.active = !item.active;
    return patch;
  }
  notify(item) {
    this.messageService.add({
      message: {
        key: `${this.i18nRoot}.messages.${item.active ? "confirmEnabled" : "confirmDisabled"}`,
        params: {
          item
        }
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function ToggleStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToggleStatusComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(MessageService), ɵɵdirectiveInject(DisableInfoService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ToggleStatusComponent,
      selectors: [["cx-org-toggle-status"]],
      hostAttrs: [1, "content-wrapper"],
      inputs: {
        i18nRoot: "i18nRoot",
        key: "key",
        disabled: "disabled"
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["class", "button btn btn-sm active", 3, "disabled", "click", 4, "ngIf"], [1, "button", "btn", "btn-sm", "active", 3, "click", "disabled"]],
      template: function ToggleStatusComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ToggleStatusComponent_button_0_Template, 4, 6, "button", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.current$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleStatusComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-toggle-status",
      host: {
        class: "content-wrapper"
      },
      standalone: false,
      template: `<button
  *ngIf="current$ | async as item"
  class="button btn btn-sm active"
  [disabled]="
    isDisabled(item) ||
    ((isInEditMode$ | async) && item.active && disabled !== true)
  "
  (click)="toggle(item)"
>
  {{ 'organization.' + (item.active ? 'disable' : 'enable') | cxTranslate }}
</button>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: MessageService
  }, {
    type: DisableInfoService
  }], {
    i18nRoot: [{
      type: Input
    }],
    key: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var ConfirmationMessageModule = class _ConfirmationMessageModule {
  static {
    this.ɵfac = function ConfirmationMessageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmationMessageModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfirmationMessageModule,
      declarations: [ConfirmationMessageComponent],
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationMessageModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule],
      declarations: [ConfirmationMessageComponent]
    }]
  }], null, null);
})();
var ToggleStatusModule = class _ToggleStatusModule {
  static {
    this.ɵfac = function ToggleStatusModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToggleStatusModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ToggleStatusModule,
      declarations: [ToggleStatusComponent],
      imports: [CommonModule, I18nModule, MessageModule, ConfirmationMessageModule],
      exports: [ToggleStatusComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, MessageModule, ConfirmationMessageModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleStatusModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, MessageModule, ConfirmationMessageModule],
      declarations: [ToggleStatusComponent],
      exports: [ToggleStatusComponent]
    }]
  }], null, null);
})();
var DeleteItemComponent = class _DeleteItemComponent {
  constructor(itemService, messageService) {
    this.itemService = itemService;
    this.messageService = messageService;
    this.key = "code";
    this.current$ = this.itemService.current$;
    this.isInEditMode$ = this.itemService.isInEditMode$;
    this.subscription = new Subscription();
  }
  delete(item) {
    if (!this.confirmation) {
      this.confirmation = this.messageService.add({
        message: {
          key: this.i18nRoot + ".messages.delete",
          params: {
            item
          }
        },
        messageTitle: {
          key: this.i18nRoot + ".messages.deleteTitle",
          params: {
            item
          }
        },
        component: ConfirmationMessageComponent
      });
      this.subscription.add(this.confirmation.pipe(first()).subscribe((event) => {
        if (event.close) {
          this.confirmation = null;
        }
        if (event.confirm) {
          this.messageService.close(this.confirmation);
          this.confirmDelete(item);
          this.confirmation = null;
        }
      }));
    }
  }
  confirmDelete(item) {
    this.itemService.delete?.(item[this.key], this.additionalParam).pipe(take(1), filter((data) => data.status === LoadStatus.SUCCESS)).subscribe((data) => this.notify(__spreadValues(__spreadValues({}, item), data.item)));
  }
  notify(item) {
    this.messageService.add({
      message: {
        key: `${this.i18nRoot}.messages.deleted`,
        params: {
          item
        }
      }
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function DeleteItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeleteItemComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(MessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DeleteItemComponent,
      selectors: [["cx-org-delete-item"]],
      hostAttrs: [1, "content-wrapper"],
      inputs: {
        i18nRoot: "i18nRoot",
        key: "key",
        additionalParam: "additionalParam"
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["class", "button btn btn-sm active", 3, "disabled", "click", 4, "ngIf"], [1, "button", "btn", "btn-sm", "active", 3, "click", "disabled"]],
      template: function DeleteItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, DeleteItemComponent_button_0_Template, 4, 6, "button", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.current$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteItemComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-delete-item",
      host: {
        class: "content-wrapper"
      },
      standalone: false,
      template: `<button
  *ngIf="current$ | async as item"
  class="button btn btn-sm active"
  [disabled]="isInEditMode$ | async"
  (click)="delete(item)"
>
  {{ 'organization.delete' | cxTranslate }}
</button>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: MessageService
  }], {
    i18nRoot: [{
      type: Input
    }],
    key: [{
      type: Input
    }],
    additionalParam: [{
      type: Input
    }]
  });
})();
var DeleteItemModule = class _DeleteItemModule {
  static {
    this.ɵfac = function DeleteItemModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeleteItemModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _DeleteItemModule,
      declarations: [DeleteItemComponent],
      imports: [CommonModule, I18nModule, MessageModule, ConfirmationMessageModule],
      exports: [DeleteItemComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, MessageModule, ConfirmationMessageModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteItemModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, MessageModule, ConfirmationMessageModule],
      declarations: [DeleteItemComponent],
      exports: [DeleteItemComponent]
    }]
  }], null, null);
})();
var DisableInfoComponent = class _DisableInfoComponent {
  constructor(itemService, disableInfoService) {
    this.itemService = itemService;
    this.disableInfoService = disableInfoService;
    this.displayCustomInfo = false;
    this.current$ = this.itemService.current$;
    this.iconTypes = ICON_TYPE;
  }
  get defaultInfoConfig() {
    return {
      disabledCreate: false,
      disabledEdit: true,
      disabledEnable: true,
      disabledDisable: false
    };
  }
  ngOnInit() {
    this.displayInfoConfig = __spreadValues(__spreadValues({}, this.defaultInfoConfig), this.displayInfoConfig);
  }
  displayDisabledCreate(item) {
    return this.displayInfoConfig?.disabledCreate && this.disableInfoService.isItemDisabled(item);
  }
  displayDisabledEdit(item) {
    return this.displayInfoConfig?.disabledEdit && this.disableInfoService.isItemDisabled(item);
  }
  displayDisabledEnable(item) {
    return this.displayInfoConfig?.disabledEnable && this.disableInfoService.isParentDisabled(item);
  }
  displayDisabledDisable(item) {
    return this.displayInfoConfig?.disabledDisable && this.disableInfoService.isRootUnit(item);
  }
  static {
    this.ɵfac = function DisableInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisableInfoComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(DisableInfoService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DisableInfoComponent,
      selectors: [["cx-org-disable-info"]],
      hostAttrs: [1, "content-wrapper"],
      inputs: {
        i18nRoot: "i18nRoot",
        displayInfoConfig: "displayInfoConfig",
        displayCustomInfo: "displayCustomInfo"
      },
      standalone: false,
      ngContentSelectors: _c21,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [3, "type"]],
      template: function DisableInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵtemplate(0, DisableInfoComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.current$));
        }
      },
      dependencies: [NgIf, IconComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisableInfoComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-disable-info",
      host: {
        class: "content-wrapper"
      },
      standalone: false,
      template: `<ng-container *ngIf="current$ | async as item">
  <section
    *ngIf="
      displayDisabledCreate(item) ||
      displayDisabledEdit(item) ||
      displayDisabledEnable(item) ||
      displayDisabledDisable(item) ||
      displayCustomInfo
    "
  >
    <cx-icon [type]="iconTypes.INFO"></cx-icon>
    <ul>
      <li *ngIf="displayDisabledEnable(item)">
        {{ i18nRoot + '.info.disabledEnable' | cxTranslate }}
      </li>
      <li *ngIf="displayDisabledCreate(item)">
        {{ i18nRoot + '.info.disabledCreate' | cxTranslate }}
      </li>
      <li *ngIf="displayDisabledEdit(item)">
        {{ i18nRoot + '.info.disabledEdit' | cxTranslate }}
      </li>
      <li *ngIf="displayDisabledDisable(item)">
        {{ i18nRoot + '.info.disabledDisable' | cxTranslate }}
      </li>
      <ng-content></ng-content>
    </ul>
  </section>
</ng-container>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: DisableInfoService
  }], {
    i18nRoot: [{
      type: Input
    }],
    displayInfoConfig: [{
      type: Input
    }],
    displayCustomInfo: [{
      type: Input
    }]
  });
})();
var DisableInfoModule = class _DisableInfoModule {
  static {
    this.ɵfac = function DisableInfoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DisableInfoModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _DisableInfoModule,
      declarations: [DisableInfoComponent],
      imports: [CommonModule, IconModule, I18nModule],
      exports: [DisableInfoComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, IconModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisableInfoModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconModule, I18nModule],
      declarations: [DisableInfoComponent],
      exports: [DisableInfoComponent]
    }]
  }], null, null);
})();
var SubListService = class _SubListService extends ListService {
  constructor() {
    super(...arguments);
    this.defaultTableStructure = {
      options: {
        layout: TableLayout.VERTICAL
      }
    };
    this.ghostData = {
      values: new Array(3)
    };
  }
  // TODO: abstract
  assign(_key, ..._args) {
    return EMPTY;
  }
  unassign(_key, ..._args) {
    return EMPTY;
  }
  /**
   * As we can't filter with the backend API, we do this client side.
   */
  filterSelected(list) {
    if (!list) {
      return list;
    }
    const {
      pagination: pagination2,
      sorts,
      values
    } = list;
    return {
      pagination: pagination2,
      sorts,
      values: values.filter((value) => value.selected)
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵSubListService_BaseFactory;
      return function SubListService_Factory(__ngFactoryType__) {
        return (ɵSubListService_BaseFactory || (ɵSubListService_BaseFactory = ɵɵgetInheritedFactory(_SubListService)))(__ngFactoryType__ || _SubListService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SubListService,
      factory: _SubListService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubListService, [{
    type: Injectable
  }], null, null);
})();
var ActiveLinkCellComponent = class _ActiveLinkCellComponent extends CellComponent {
  get tabIndex() {
    return 0;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵActiveLinkCellComponent_BaseFactory;
      return function ActiveLinkCellComponent_Factory(__ngFactoryType__) {
        return (ɵActiveLinkCellComponent_BaseFactory || (ɵActiveLinkCellComponent_BaseFactory = ɵɵgetInheritedFactory(_ActiveLinkCellComponent)))(__ngFactoryType__ || _ActiveLinkCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ActiveLinkCellComponent,
      selectors: [["cx-org-active-link-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 2,
      consts: [["text", ""], [3, "routerLink", "tabIndex", 4, "ngIf", "ngIfElse"], [3, "routerLink", "tabIndex"], [4, "ngTemplateOutlet"], [1, "text", 3, "title"]],
      template: function ActiveLinkCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ActiveLinkCellComponent_a_0_Template, 3, 8, "a", 1)(1, ActiveLinkCellComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const text_r2 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.linkable)("ngIfElse", text_r2);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, RouterLink, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveLinkCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-active-link-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<a\n  *ngIf="linkable; else text"\n  [routerLink]="{ cxRoute: route, params: routeModel } | cxUrl"\n  [tabIndex]="tabIndex"\n>\n  <ng-container *ngTemplateOutlet="text"></ng-container>\n</a>\n\n<ng-template #text>\n  <span class="text" title="{{ property }}">{{ property }}</span>\n</ng-template>\n'
    }]
  }], null, null);
})();
var AmountCellComponent = class _AmountCellComponent extends CellComponent {
  get property() {
    if (this.budget && this.currency) {
      return this.budget + " " + this.currency;
    }
    return void 0;
  }
  get budget() {
    return this.model.budget;
  }
  get currency() {
    return this.model.currency?.isocode || this.model.currency;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵAmountCellComponent_BaseFactory;
      return function AmountCellComponent_Factory(__ngFactoryType__) {
        return (ɵAmountCellComponent_BaseFactory || (ɵAmountCellComponent_BaseFactory = ɵɵgetInheritedFactory(_AmountCellComponent)))(__ngFactoryType__ || _AmountCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AmountCellComponent,
      selectors: [["cx-org-amount-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 2,
      consts: [["text", ""], [3, "routerLink", "tabIndex", 4, "ngIf", "ngIfElse"], [3, "routerLink", "tabIndex"], [4, "ngTemplateOutlet"], [1, "text", 3, "title"]],
      template: function AmountCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AmountCellComponent_a_0_Template, 3, 8, "a", 1)(1, AmountCellComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const text_r2 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.linkable)("ngIfElse", text_r2);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, RouterLink, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmountCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-amount-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<a\n  *ngIf="linkable; else text"\n  [routerLink]="{ cxRoute: route, params: routeModel } | cxUrl"\n  [tabIndex]="tabIndex"\n>\n  <ng-container *ngTemplateOutlet="text"></ng-container>\n</a>\n\n<ng-template #text>\n  <span class="text" title="{{ property }}">{{ property }}</span>\n</ng-template>\n'
    }]
  }], null, null);
})();
var DateRangeCellComponent = class _DateRangeCellComponent extends CellComponent {
  get linkable() {
    return this.hasRange && (this.cellOptions.linkable ?? false);
  }
  get hasRange() {
    return !!this.model.startDate && !!this.model.endDate;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDateRangeCellComponent_BaseFactory;
      return function DateRangeCellComponent_Factory(__ngFactoryType__) {
        return (ɵDateRangeCellComponent_BaseFactory || (ɵDateRangeCellComponent_BaseFactory = ɵɵgetInheritedFactory(_DateRangeCellComponent)))(__ngFactoryType__ || _DateRangeCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DateRangeCellComponent,
      selectors: [["cx-org-date-range-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 2,
      consts: [["text", ""], [3, "routerLink", "tabindex", 4, "ngIf", "ngIfElse"], [3, "routerLink", "tabindex"], [4, "ngTemplateOutlet"], ["class", "text", 3, "title", 4, "ngIf"], [1, "text", 3, "title"]],
      template: function DateRangeCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, DateRangeCellComponent_a_0_Template, 3, 8, "a", 1)(1, DateRangeCellComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const text_r2 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.linkable)("ngIfElse", text_r2);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, RouterLink, UrlPipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-date-range-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<a\n  *ngIf="linkable; else text"\n  [routerLink]="{ cxRoute: route, params: routeModel } | cxUrl"\n  [tabindex]="tabIndex"\n>\n  <ng-container *ngTemplateOutlet="text"></ng-container>\n</a>\n\n<ng-template #text>\n  <span\n    class="text"\n    title="{{ model.startDate | cxDate }} - {{ model.endDate | cxDate }}"\n    *ngIf="hasRange"\n  >\n    {{ model.startDate | cxDate }} - {{ model.endDate | cxDate }}\n  </span>\n</ng-template>\n'
    }]
  }], null, null);
})();
var LimitCellComponent = class _LimitCellComponent extends CellComponent {
  get isTimeSpanThreshold() {
    return this.model.orderApprovalPermissionType?.code === "B2BOrderThresholdTimespanPermission";
  }
  get isOrderThreshold() {
    return this.model.orderApprovalPermissionType?.code === "B2BOrderThresholdPermission";
  }
  get isExceedPermission() {
    return this.model.orderApprovalPermissionType?.code === "B2BBudgetExceededPermission";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵLimitCellComponent_BaseFactory;
      return function LimitCellComponent_Factory(__ngFactoryType__) {
        return (ɵLimitCellComponent_BaseFactory || (ɵLimitCellComponent_BaseFactory = ɵɵgetInheritedFactory(_LimitCellComponent)))(__ngFactoryType__ || _LimitCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LimitCellComponent,
      selectors: [["cx-org-limit-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 2,
      consts: [["threshold", ""], [3, "routerLink", "tabindex", 4, "ngIf", "ngIfElse"], [3, "routerLink", "tabindex"], [4, "ngTemplateOutlet"], ["class", "text", 3, "title", 4, "ngIf"], [1, "text", 3, "title"]],
      template: function LimitCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, LimitCellComponent_a_0_Template, 3, 8, "a", 1)(1, LimitCellComponent_ng_template_1_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const threshold_r2 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.linkable)("ngIfElse", threshold_r2);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, RouterLink, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LimitCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-limit-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<a
  *ngIf="linkable; else threshold"
  [routerLink]="{ cxRoute: route, params: routeModel } | cxUrl"
  [tabindex]="tabIndex"
>
  <ng-container *ngTemplateOutlet="threshold"></ng-container>
</a>

<ng-template #threshold>
  <span
    class="text"
    title="{{ model.threshold }} {{ model.currency?.symbol }} {{
      'orgPurchaseLimit.per.' + model.periodRange | cxTranslate
    }}"
    *ngIf="isTimeSpanThreshold"
  >
    {{ model.threshold }} {{ model.currency?.symbol }}
    {{ 'orgPurchaseLimit.per.' + model.periodRange | cxTranslate }}
  </span>

  <span
    class="text"
    title="{{ model.threshold }} {{ model.currency?.symbol }}"
    *ngIf="isOrderThreshold"
  >
    {{ model.threshold }} {{ model.currency?.symbol }}
  </span>

  <span
    class="text"
    title="{{ model.orderApprovalPermissionType.name }}"
    *ngIf="isExceedPermission"
  >
    {{ model.orderApprovalPermissionType.name }}
  </span>
</ng-template>
`
    }]
  }], null, null);
})();
var RolesCellComponent = class _RolesCellComponent extends CellComponent {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵRolesCellComponent_BaseFactory;
      return function RolesCellComponent_Factory(__ngFactoryType__) {
        return (ɵRolesCellComponent_BaseFactory || (ɵRolesCellComponent_BaseFactory = ɵɵgetInheritedFactory(_RolesCellComponent)))(__ngFactoryType__ || _RolesCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _RolesCellComponent,
      selectors: [["cx-org-roles-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 2,
      consts: [["text", ""], [3, "routerLink", "tabindex", 4, "ngIf", "ngIfElse"], [3, "routerLink", "tabindex"], [4, "ngTemplateOutlet"], [1, "text"], ["class", "li", 3, "innerText", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "li", 3, "innerText"]],
      template: function RolesCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, RolesCellComponent_a_0_Template, 3, 8, "a", 1)(1, RolesCellComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const text_r2 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.linkable)("ngIfElse", text_r2);
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, RouterLink, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-roles-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<a
  *ngIf="linkable; else text"
  [routerLink]="{ cxRoute: route, params: routeModel } | cxUrl"
  [tabindex]="tabIndex"
>
  <ng-container *ngTemplateOutlet="text"></ng-container>
</a>

<ng-template #text>
  <ul class="text">
    <li
      *ngFor="let role of model.roles"
      class="li"
      [innerText]="'organization.userRoles.' + role | cxTranslate"
    ></li>
    <li *ngIf="model.roles?.length === 0">-</li>
  </ul>
</ng-template>
`
    }]
  }], null, null);
})();
var StatusCellComponent = class _StatusCellComponent extends CellComponent {
  get label() {
    if (this.isActive === void 0) {
      return;
    }
    return this.isActive ? "organization.enabled" : "organization.disabled";
  }
  get isActive() {
    return this.model.active;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵStatusCellComponent_BaseFactory;
      return function StatusCellComponent_Factory(__ngFactoryType__) {
        return (ɵStatusCellComponent_BaseFactory || (ɵStatusCellComponent_BaseFactory = ɵɵgetInheritedFactory(_StatusCellComponent)))(__ngFactoryType__ || _StatusCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _StatusCellComponent,
      selectors: [["cx-org-status-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 2,
      consts: [["text", ""], [3, "routerLink", "tabindex", 4, "ngIf", "ngIfElse"], [3, "routerLink", "tabindex"], [4, "ngTemplateOutlet"], ["class", "text", 3, "title", "is-active", 4, "ngIf"], [1, "text", 3, "title"]],
      template: function StatusCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, StatusCellComponent_a_0_Template, 3, 8, "a", 1)(1, StatusCellComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const text_r2 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.linkable)("ngIfElse", text_r2);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, RouterLink, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-status-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<a\n  *ngIf="linkable; else text"\n  [routerLink]="{ cxRoute: route, params: routeModel } | cxUrl"\n  [tabindex]="tabIndex"\n>\n  <ng-container *ngTemplateOutlet="text"></ng-container>\n</a>\n\n<ng-template #text>\n  <span\n    class="text"\n    title="{{ label | cxTranslate }}"\n    [class.is-active]="isActive"\n    *ngIf="label"\n  >\n    {{ label | cxTranslate }}</span\n  >\n</ng-template>\n'
    }]
  }], null, null);
})();
var UnitCellComponent = class _UnitCellComponent extends CellComponent {
  get property() {
    return this.model.unit?.name ?? this.model.orgUnit?.name;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUnitCellComponent_BaseFactory;
      return function UnitCellComponent_Factory(__ngFactoryType__) {
        return (ɵUnitCellComponent_BaseFactory || (ɵUnitCellComponent_BaseFactory = ɵɵgetInheritedFactory(_UnitCellComponent)))(__ngFactoryType__ || _UnitCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitCellComponent,
      selectors: [["cx-org-unit-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 2,
      consts: [["text", ""], [3, "routerLink", "tabIndex", 4, "ngIf", "ngIfElse"], [3, "routerLink", "tabIndex"], [4, "ngTemplateOutlet"], [1, "text", 3, "title"]],
      template: function UnitCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UnitCellComponent_a_0_Template, 3, 8, "a", 1)(1, UnitCellComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const text_r2 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.linkable)("ngIfElse", text_r2);
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, RouterLink, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<a\n  *ngIf="linkable; else text"\n  [routerLink]="{ cxRoute: route, params: routeModel } | cxUrl"\n  [tabIndex]="tabIndex"\n>\n  <ng-container *ngTemplateOutlet="text"></ng-container>\n</a>\n\n<ng-template #text>\n  <span class="text" title="{{ property }}">{{ property }}</span>\n</ng-template>\n'
    }]
  }], null, null);
})();
var CellModule = class _CellModule {
  static {
    this.ɵfac = function CellModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CellModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CellModule,
      declarations: [CellComponent, ActiveLinkCellComponent, AmountCellComponent, DateRangeCellComponent, LimitCellComponent, RolesCellComponent, StatusCellComponent, UnitCellComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule],
      declarations: [CellComponent, ActiveLinkCellComponent, AmountCellComponent, DateRangeCellComponent, LimitCellComponent, RolesCellComponent, StatusCellComponent, UnitCellComponent]
    }]
  }], null, null);
})();
var OrganizationTableType;
(function(OrganizationTableType2) {
  OrganizationTableType2["BUDGET"] = "orgBudget";
  OrganizationTableType2["BUDGET_ASSIGNED_COST_CENTERS"] = "orgBudgetAssignedCostCenters";
  OrganizationTableType2["COST_CENTER"] = "orgCostCenter";
  OrganizationTableType2["COST_CENTER_BUDGETS"] = "orgCostCenterBudgets";
  OrganizationTableType2["COST_CENTER_ASSIGNED_BUDGETS"] = "orgCostCenterAssignedBudgets";
  OrganizationTableType2["UNIT"] = "orgUnit";
  OrganizationTableType2["UNIT_USERS"] = "orgUnitUsers";
  OrganizationTableType2["UNIT_CHILDREN"] = "orgUnitChildren";
  OrganizationTableType2["UNIT_APPROVERS"] = "orgUnitApprovers";
  OrganizationTableType2["UNIT_ASSIGNED_APPROVERS"] = "orgUnitAssignedApprovers";
  OrganizationTableType2["UNIT_ADDRESS"] = "orgUnitAddress";
  OrganizationTableType2["UNIT_COST_CENTERS"] = "orgUnitCostCenters";
  OrganizationTableType2["USER_GROUP"] = "orgUserGroup";
  OrganizationTableType2["USER_GROUP_USERS"] = "orgUserGroupUsers";
  OrganizationTableType2["USER_GROUP_ASSIGNED_USERS"] = "orgUserGroupAssignedUsers";
  OrganizationTableType2["USER_GROUP_PERMISSIONS"] = "orgUserGroupPermissions";
  OrganizationTableType2["USER_GROUP_ASSIGNED_PERMISSIONS"] = "orgUserGroupAssignedPermissions";
  OrganizationTableType2["USER"] = "orgUser";
  OrganizationTableType2["USER_APPROVERS"] = "orgUserApprovers";
  OrganizationTableType2["USER_ASSIGNED_APPROVERS"] = "orgUserAssignedApprovers";
  OrganizationTableType2["USER_PERMISSIONS"] = "orgUserPermissions";
  OrganizationTableType2["USER_ASSIGNED_PERMISSIONS"] = "orgUserAssignedPermissions";
  OrganizationTableType2["USER_USER_GROUPS"] = "orgUserUserGroups";
  OrganizationTableType2["USER_ASSIGNED_USER_GROUPS"] = "orgUserAssignedUserGroups";
  OrganizationTableType2["PERMISSION"] = "orgPurchaseLimit";
})(OrganizationTableType || (OrganizationTableType = {}));
var CostCenterDetailsCellComponent = class _CostCenterDetailsCellComponent extends CellComponent {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCostCenterDetailsCellComponent_BaseFactory;
      return function CostCenterDetailsCellComponent_Factory(__ngFactoryType__) {
        return (ɵCostCenterDetailsCellComponent_BaseFactory || (ɵCostCenterDetailsCellComponent_BaseFactory = ɵɵgetInheritedFactory(_CostCenterDetailsCellComponent)))(__ngFactoryType__ || _CostCenterDetailsCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CostCenterDetailsCellComponent,
      selectors: [["cx-org-cost-center-details-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 4,
      consts: [["details", ""], [1, "button", "btn", "btn-sm", "text", 3, "cxPopover", "cxPopoverOptions"], [1, "popover-details"], [1, "property"], [1, "value", 3, "routerLink"], [1, "value"], ["class", "property", 4, "ngIf"]],
      template: function CostCenterDetailsCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CostCenterDetailsCellComponent_ng_template_0_Template, 28, 28, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementStart(2, "button", 1);
          ɵɵtext(3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const details_r2 = ɵɵreference(1);
          ɵɵadvance(2);
          ɵɵproperty("cxPopover", details_r2)("cxPopoverOptions", ɵɵpureFunction0(3, _c22));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.model.name, "\n");
        }
      },
      dependencies: [NgIf, PopoverDirective, RouterLink, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterDetailsCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-cost-center-details-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template #details>
  <div class="popover-details">
    <div class="property">
      <label>{{ 'orgCostCenter.name' | cxTranslate }}</label>
      <a
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgCostCenterDetails',
            params: model,
          } | cxUrl
        "
      >
        {{ model.name }}
      </a>
    </div>

    <div class="property">
      <label>{{ 'orgCostCenter.code' | cxTranslate }}</label>
      <span class="value">
        {{ model.code }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgCostCenter.active' | cxTranslate }}</label>
      <span
        class="value"
        [class.is-active]="model.active"
        [class.is-inactive]="!model.active"
      >
        {{
          (model.active ? 'organization.enabled' : 'organization.disabled')
            | cxTranslate
        }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgCostCenter.currency' | cxTranslate }}</label>

      <span class="value">
        {{ model.currency?.isocode }}
      </span>
    </div>

    <div class="property" *ngIf="model.unit">
      <label>{{ 'orgCostCenter.unit' | cxTranslate }}</label>
      <a
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgUnitDetails',
            params: model.unit,
          } | cxUrl
        "
      >
        {{ model.unit?.name }}
      </a>
    </div>
  </div>
</ng-template>

<button
  class="button btn btn-sm text"
  [cxPopover]="details"
  [cxPopoverOptions]="{
    placement: 'auto',
    class: 'my-company-popover',
    appendToBody: true,
    displayCloseButton: true,
  }"
>
  {{ model.name }}
</button>
`
    }]
  }], null, null);
})();
var BudgetCostCenterListService = class _BudgetCostCenterListService extends SubListService {
  constructor(tableService, budgetService) {
    super(tableService);
    this.tableService = tableService;
    this.budgetService = budgetService;
    this.tableType = OrganizationTableType.BUDGET_ASSIGNED_COST_CENTERS;
    this._domainType = OrganizationTableType.COST_CENTER;
  }
  load(_pagination, code) {
    return this.budgetService.getCostCenters(code).pipe(filter((list) => Boolean(list)), map((costCenter) => this.filterSelected(costCenter)));
  }
  /**
   * As we can't filter with the backend API, we do this client side.
   */
  filterSelected({
    pagination: pagination2,
    sorts,
    values
  }) {
    return {
      pagination: pagination2,
      sorts,
      values: values.filter((value) => value.active)
    };
  }
  static {
    this.ɵfac = function BudgetCostCenterListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetCostCenterListService)(ɵɵinject(TableService), ɵɵinject(BudgetService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BudgetCostCenterListService,
      factory: _BudgetCostCenterListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetCostCenterListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: BudgetService
  }], null);
})();
var BudgetCostCenterListComponent = class _BudgetCostCenterListComponent {
  static {
    this.ɵfac = function BudgetCostCenterListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetCostCenterListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BudgetCostCenterListComponent,
      selectors: [["cx-org-budget-cost-center-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: BudgetCostCenterListService
      }])],
      decls: 1,
      vars: 0,
      template: function BudgetCostCenterListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "cx-org-sub-list");
        }
      },
      dependencies: [SubListComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetCostCenterListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-budget-cost-center-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: BudgetCostCenterListService
      }],
      standalone: false,
      template: "<cx-org-sub-list></cx-org-sub-list>\n"
    }]
  }], null, null);
})();
var CurrentBudgetService = class _CurrentBudgetService extends CurrentItemService {
  constructor(routingService, budgetService) {
    super(routingService);
    this.routingService = routingService;
    this.budgetService = budgetService;
  }
  getDetailsRoute() {
    return "orgBudgetDetails";
  }
  getParamKey() {
    return ROUTE_PARAMS.budgetCode;
  }
  getItem(code) {
    return this.budgetService.get(code);
  }
  getError(code) {
    return this.budgetService.getErrorState(code);
  }
  static {
    this.ɵfac = function CurrentBudgetService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentBudgetService)(ɵɵinject(RoutingService), ɵɵinject(BudgetService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrentBudgetService,
      factory: _CurrentBudgetService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentBudgetService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: BudgetService
  }], null);
})();
var BudgetFormService = class _BudgetFormService extends FormService {
  constructor(datePickerService) {
    super();
    this.datePickerService = datePickerService;
  }
  build() {
    const form = new UntypedFormGroup({});
    form.setControl("code", new UntypedFormControl("", [Validators.required, CustomFormValidators.noSpecialCharacters]));
    form.setControl("name", new UntypedFormControl("", Validators.required));
    form.setControl("startDate", new UntypedFormControl("", [Validators.required, CustomFormValidators.patternValidation((date) => this.datePickerService.isValidFormat(date))]));
    form.setControl("endDate", new UntypedFormControl("", [Validators.required, CustomFormValidators.patternValidation((date) => this.datePickerService.isValidFormat(date))]));
    form.setControl("budget", new UntypedFormControl("", [Validators.required, CustomFormValidators.mustBePositive]));
    form.setControl("currency", new UntypedFormGroup({
      isocode: new UntypedFormControl(void 0, Validators.required)
    }));
    form.setControl("orgUnit", new UntypedFormGroup({
      uid: new UntypedFormControl(void 0, Validators.required)
    }));
    form.setValidators(CustomFormValidators.dateRange("startDate", "endDate", (date) => this.datePickerService.getDate(date)));
    this.form = form;
  }
  static {
    this.ɵfac = function BudgetFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetFormService)(ɵɵinject(DatePickerService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BudgetFormService,
      factory: _BudgetFormService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: DatePickerService
  }], null);
})();
var BudgetItemService = class _BudgetItemService extends ItemService {
  constructor(currentItemService, routingService, formService, budgetService) {
    super(currentItemService, routingService, formService);
    this.currentItemService = currentItemService;
    this.routingService = routingService;
    this.formService = formService;
    this.budgetService = budgetService;
  }
  /**
   * @override
   * Returns the budget for the given code.
   *
   * Loads the budget each time, to ensure accurate data is resolved.
   */
  load(code) {
    this.budgetService.loadBudget(code);
    return this.budgetService.get(code);
  }
  update(code, value) {
    this.budgetService.update(code, value);
    return this.budgetService.getLoadingStatus(value.code ?? "");
  }
  create(value) {
    this.budgetService.create(value);
    return this.budgetService.getLoadingStatus(value.code ?? "");
  }
  /**
   * @override
   * Returns 'budgetDetails'
   */
  getDetailsRoute() {
    return "orgBudgetDetails";
  }
  static {
    this.ɵfac = function BudgetItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetItemService)(ɵɵinject(CurrentBudgetService), ɵɵinject(RoutingService), ɵɵinject(BudgetFormService), ɵɵinject(BudgetService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BudgetItemService,
      factory: _BudgetItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrentBudgetService
  }, {
    type: RoutingService
  }, {
    type: BudgetFormService
  }, {
    type: BudgetService
  }], null);
})();
var BudgetDetailsComponent = class _BudgetDetailsComponent {
  ngOnInit() {
    this.model$ = this.itemService.key$.pipe(switchMap((code) => this.itemService.load(code)), startWith({}));
  }
  constructor(itemService) {
    this.itemService = itemService;
    this.isInEditMode$ = this.itemService.isInEditMode$;
  }
  static {
    this.ɵfac = function BudgetDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetDetailsComponent)(ɵɵdirectiveInject(ItemService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BudgetDetailsComponent,
      selectors: [["cx-org-budget-details"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: BudgetItemService
      }])],
      decls: 2,
      vars: 3,
      consts: [["i18nRoot", "orgBudget.details", 3, "cxFocus", 4, "ngIf"], ["i18nRoot", "orgBudget.details", 3, "cxFocus"], ["actions", "", 1, "link", "btn", "btn-link", "btn-sm", "edit", 3, "routerLink"], ["actions", "", "i18nRoot", "orgBudget"], ["info", "", "i18nRoot", "orgBudget"], ["main", "", "cxOrgItemExists", "", 1, "details"], [1, "property"], [1, "value"], [1, "value", 3, "routerLink"], ["main", "", 1, "link-list"], ["class", "link", "routerLinkActive", "is-current", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "is-current", 1, "link", 3, "routerLink"]],
      template: function BudgetDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, BudgetDetailsComponent_cx_org_card_0_Template, 57, 58, "cx-org-card", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.model$));
        }
      },
      dependencies: [NgIf, CardComponent, RouterLink, RouterLinkActive, ToggleStatusComponent, ItemExistsDirective, DisableInfoComponent, FocusDirective, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-budget-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: ItemService,
        useExisting: BudgetItemService
      }],
      host: {
        class: "content-wrapper"
      },
      standalone: false,
      template: `<cx-org-card
  *ngIf="model$ | async as model"
  i18nRoot="orgBudget.details"
  [cxFocus]="{ refreshFocus: model }"
>
  <a
    actions
    class="link btn btn-link btn-sm edit"
    [class.disabled]="!model.active || (isInEditMode$ | async)"
    [routerLink]="{ cxRoute: 'orgBudgetEdit', params: model } | cxUrl"
  >
    {{ 'organization.edit' | cxTranslate }}
  </a>

  <cx-org-toggle-status actions i18nRoot="orgBudget"></cx-org-toggle-status>

  <cx-org-disable-info info i18nRoot="orgBudget"> </cx-org-disable-info>

  <section main class="details" cxOrgItemExists>
    <div class="property">
      <label>{{ 'orgBudget.name' | cxTranslate }}</label>
      <span class="value">
        {{ model.name }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.code' | cxTranslate }}</label>
      <span class="value">
        {{ model.code }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.startDate' | cxTranslate }}</label>
      <span class="value">
        {{ model.startDate | cxDate }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.endDate' | cxTranslate }}</label>
      <span class="value">
        {{ model.endDate | cxDate }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.active' | cxTranslate }}</label>
      <span class="value" [class.is-active]="model.active">
        {{
          (model.active ? 'organization.enabled' : 'organization.disabled')
            | cxTranslate
        }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.amount' | cxTranslate }}</label>
      <span class="value">
        {{ model.budget }} {{ model.currency?.isocode }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.unit' | cxTranslate }}</label>
      <a
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgUnitDetails',
            params: model.orgUnit,
          } | cxUrl
        "
      >
        {{ model.orgUnit?.name }}
      </a>
    </div>
  </section>

  <section main class="link-list">
    <a
      *ngIf="model.code"
      class="link"
      [routerLink]="{ cxRoute: 'orgBudgetCostCenters', params: model } | cxUrl"
      routerLinkActive="is-current"
    >
      {{ 'orgBudget.links.costCenters' | cxTranslate }}
    </a>
  </section>
</cx-org-card>
`
    }]
  }], () => [{
    type: ItemService
  }], null);
})();
function createCodeForEntityName(name, code) {
  if (!code?.value) {
    const codeFromName = name?.value?.replace(/\s+/g, "-").toLowerCase();
    code?.patchValue(codeFromName);
  }
}
var BudgetFormComponent = class _BudgetFormComponent {
  constructor(itemService, unitService, currencyService) {
    this.itemService = itemService;
    this.unitService = unitService;
    this.currencyService = currencyService;
    this.form = this.itemService.getForm();
    this.units$ = this.unitService.getActiveUnitList().pipe(tap((units) => {
      if (units && units.length === 1) {
        this.form?.get("orgUnit.uid")?.setValue(units[0]?.id);
      }
    }));
    this.currencies$ = this.currencyService.getAll().pipe(tap((currency) => {
      if (currency.length === 1) {
        this.form?.get("currency.isocode")?.setValue(currency[0]?.isocode);
      }
    }));
  }
  ngOnInit() {
    this.unitService.loadList();
  }
  createCodeWithName(name, code) {
    createCodeForEntityName(name, code);
  }
  static {
    this.ɵfac = function BudgetFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetFormComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(OrgUnitService), ɵɵdirectiveInject(CurrencyService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BudgetFormComponent,
      selectors: [["cx-org-budget-form"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: BudgetItemService
      }, {
        provide: CurrentItemService,
        useExisting: CurrentBudgetService
      }])],
      decls: 2,
      vars: 1,
      consts: [["i18nRoot", "orgBudget"], ["main", "", 3, "formGroup", 4, "ngIf"], ["main", "", 3, "formGroup"], [1, "label-content", "required"], ["type", "text", "required", "", "formControlName", "name", 1, "form-control", 3, "blur", "placeholder"], ["id", "nameError", 3, "translationParams", "control"], ["type", "text", "required", "", "formControlName", "code", 1, "form-control", 3, "placeholder"], ["id", "codeError", 3, "translationParams", "control"], [1, "label-content"], ["label", "orgBudget.startDate", 3, "update", "control", "max", "required"], ["label", "orgBudget.endDate", 3, "update", "control", "min", "required"], [3, "formGroup"], ["formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder"], ["id", "isocodeError", 3, "translationParams", "control"], ["required", "true", "type", "number", "formControlName", "budget", "min", "0", 1, "form-control", 3, "placeholder"], ["id", "budgetError", 3, "translationParams", "control"], [3, "formGroup", 4, "ngIf"], ["formControlName", "uid", "bindLabel", "name", "bindValue", "id", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "readonly", "placeholder"], ["id", "uidError", 3, "translationParams", "control"]],
      template: function BudgetFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-form", 0);
          ɵɵtemplate(1, BudgetFormComponent_ng_container_1_Template, 52, 82, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.form);
        }
      },
      dependencies: [NgIf, FormComponent, NgSelectComponent, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinValidator, FormGroupDirective, FormControlName, FormErrorsComponent, DatePickerComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-budget-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ItemService,
        useExisting: BudgetItemService
      }, {
        provide: CurrentItemService,
        useExisting: CurrentBudgetService
      }],
      standalone: false,
      template: `<cx-org-form i18nRoot="orgBudget">
  <ng-container *ngIf="form" [formGroup]="form" main>
    <cx-form-required-legend />
    <label>
      <span class="label-content required">
        {{ 'orgBudget.name' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        type="text"
        class="form-control"
        required
        placeholder="{{ 'orgBudget.name' | cxTranslate }}"
        formControlName="name"
        (blur)="createCodeWithName(form.get('name'), form.get('code'))"
        [attr.aria-invalid]="
          form.get('name')?.touched && form.get('name')?.invalid
        "
        [attr.aria-errormessage]="'nameError'"
      />

      <cx-form-errors
        id="nameError"
        [translationParams]="{
          label: 'orgBudget.name' | cxTranslate,
        }"
        [control]="form.get('name')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required">
        {{ 'orgBudget.code' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        class="form-control"
        type="text"
        required
        placeholder="{{ 'orgBudget.code' | cxTranslate }}"
        formControlName="code"
        [attr.aria-invalid]="
          form.get('code')?.touched && form.get('code')?.invalid
        "
        [attr.aria-errormessage]="'codeError'"
      />

      <cx-form-errors
        id="codeError"
        [translationParams]="{
          label: 'orgBudget.code' | cxTranslate,
        }"
        [control]="form.get('code')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content">
        {{ 'orgBudget.startDate' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <cx-date-picker
        [control]="$any(form.get('startDate'))"
        [max]="form.get('endDate')?.value"
        [required]="true"
        (update)="form.get('endDate')?.updateValueAndValidity()"
        label="orgBudget.startDate"
      ></cx-date-picker>
    </label>

    <label>
      <span class="label-content">
        {{ 'orgBudget.endDate' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>

      <cx-date-picker
        [control]="$any(form.get('endDate'))"
        [min]="form.get('startDate')?.value"
        [required]="true"
        (update)="form.get('startDate')?.updateValueAndValidity()"
        label="orgBudget.endDate"
      ></cx-date-picker>
    </label>

    <label [formGroup]="$any(form.get('currency'))">
      <span class="label-content required">{{
        'orgBudget.currency' | cxTranslate
      }}</span>
      <ng-select
        [inputAttrs]="{ required: 'true' }"
        formControlName="isocode"
        [attr.aria-invalid]="
          form.get('isocode')?.touched && form.get('isocode')?.invalid
        "
        [attr.aria-errormessage]="'isocodeError'"
        [searchable]="false"
        [clearable]="false"
        [items]="currencies$ | async"
        bindLabel="name"
        bindValue="isocode"
        [class.invalid]="form.get('currency.isocode')?.invalid ?? false"
        appendTo="cx-org-list"
        [placeholder]="'orgBudget.currency' | cxTranslate"
      >
      </ng-select>

      <cx-form-errors
        id="isocodeError"
        [translationParams]="{
          label: 'orgBudget.currency' | cxTranslate,
        }"
        [control]="form.get('currency.isocode')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content">
        {{ 'orgBudget.amount' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        type="number"
        class="form-control"
        placeholder="{{ 'orgBudget.amount' | cxTranslate }}"
        formControlName="budget"
        min="0"
        [attr.aria-invalid]="
          form.get('budget')?.touched && form.get('budget')?.invalid
        "
        [attr.aria-errormessage]="'budgetError'"
      />

      <cx-form-errors
        id="budgetError"
        [translationParams]="{
          label: 'orgBudget.amount' | cxTranslate,
        }"
        [control]="form.get('budget')"
      ></cx-form-errors>
    </label>

    <label
      *ngIf="units$ | async as units"
      [formGroup]="$any(form.get('orgUnit'))"
    >
      <span class="label-content required">
        {{ 'orgBudget.businessUnits' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <ng-select
        [inputAttrs]="{ required: 'true' }"
        formControlName="uid"
        [attr.aria-invalid]="
          form.get('uid')?.touched && form.get('uid')?.invalid
        "
        [attr.aria-errormessage]="'uidError'"
        [searchable]="true"
        [clearable]="false"
        [items]="units"
        bindLabel="name"
        bindValue="id"
        [readonly]="form.get('orgUnit.uid')?.disabled ?? false"
        appendTo="cx-org-list"
        [placeholder]="'orgBudget.businessUnits' | cxTranslate"
      >
      </ng-select>

      <cx-form-errors
        id="uidError"
        [translationParams]="{
          label: 'orgBudget.businessUnits' | cxTranslate,
        }"
        [control]="form.get('orgUnit.uid')"
      ></cx-form-errors>
    </label>
  </ng-container>
</cx-org-form>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: OrgUnitService
  }, {
    type: CurrencyService
  }], null);
})();
var BudgetListService = class _BudgetListService extends ListService {
  constructor(tableService, budgetService) {
    super(tableService);
    this.tableService = tableService;
    this.budgetService = budgetService;
    this.tableType = OrganizationTableType.BUDGET;
  }
  load(pagination2) {
    return this.budgetService.getList(pagination2).pipe(filter(isNotUndefined), map((raw) => this.convertBudgets(raw)));
  }
  /**
   * Populates budget data to a convenient table data model, so that we
   * can skip specific conversion in the view logic where possible.
   */
  convertBudgets({
    pagination: pagination2,
    sorts,
    values
  }) {
    const budgetModels = {
      pagination: pagination2,
      sorts,
      values: values.map((value) => __spreadProps(__spreadValues({}, value), {
        currency: value.currency?.isocode,
        unit: value.orgUnit
      }))
    };
    return budgetModels;
  }
  static {
    this.ɵfac = function BudgetListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetListService)(ɵɵinject(TableService), ɵɵinject(BudgetService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BudgetListService,
      factory: _BudgetListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: BudgetService
  }], null);
})();
var BudgetRoutePageMetaResolver = class _BudgetRoutePageMetaResolver extends DefaultRoutePageMetaResolver {
  constructor(translation, currentItemService) {
    super(translation);
    this.currentItemService = currentItemService;
  }
  getParams() {
    return this.currentItemService.item$;
  }
  static {
    this.ɵfac = function BudgetRoutePageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetRoutePageMetaResolver)(ɵɵinject(TranslationService), ɵɵinject(CurrentBudgetService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BudgetRoutePageMetaResolver,
      factory: _BudgetRoutePageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetRoutePageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: CurrentBudgetService
  }], null);
})();
var budgetCmsConfig = {
  cmsComponents: {
    ManageBudgetsListComponent: {
      component: ListComponent,
      providers: [{
        provide: ListService,
        useExisting: BudgetListService
      }, {
        provide: ItemService,
        useExisting: BudgetItemService
      }],
      childRoutes: {
        parent: {
          data: {
            cxPageMeta: {
              breadcrumb: "orgBudget.breadcrumbs.list",
              resolver: BudgetRoutePageMetaResolver
            }
          }
        },
        children: [{
          path: "create",
          component: BudgetFormComponent
        }, {
          path: `:${ROUTE_PARAMS.budgetCode}`,
          component: BudgetDetailsComponent,
          data: {
            cxPageMeta: {
              breadcrumb: "orgBudget.breadcrumbs.details"
            }
          },
          children: [{
            path: `edit`,
            component: BudgetFormComponent
          }, {
            path: "cost-centers",
            component: BudgetCostCenterListComponent
          }]
        }]
      },
      guards: [AuthGuard, AdminGuard]
    }
  }
};
function budgetTableConfigFactory() {
  return budgetTableConfig;
}
var budgetTableConfig = {
  table: {
    [OrganizationTableType.BUDGET]: {
      cells: ["name", "active", "amount", "dateRange", "unit"],
      options: {
        cells: {
          name: {
            dataComponent: ActiveLinkCellComponent,
            linkable: true
          },
          active: {
            dataComponent: StatusCellComponent
          },
          amount: {
            dataComponent: AmountCellComponent
          },
          dateRange: {
            dataComponent: DateRangeCellComponent
          },
          unit: {
            dataComponent: UnitCellComponent
          }
        }
      }
    },
    [OrganizationTableType.BUDGET_ASSIGNED_COST_CENTERS]: {
      cells: ["name"],
      options: {
        cells: {
          name: {
            dataComponent: CostCenterDetailsCellComponent
          }
        },
        pagination: {
          pageSize: MAX_OCC_INTEGER_VALUE
        }
      }
    }
  }
};
var BudgetCostCenterListModule = class _BudgetCostCenterListModule {
  static {
    this.ɵfac = function BudgetCostCenterListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetCostCenterListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BudgetCostCenterListModule,
      declarations: [BudgetCostCenterListComponent],
      imports: [CommonModule, SubListModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, SubListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetCostCenterListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SubListModule],
      declarations: [BudgetCostCenterListComponent]
    }]
  }], null, null);
})();
var ItemExistsModule = class _ItemExistsModule {
  static {
    this.ɵfac = function ItemExistsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ItemExistsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ItemExistsModule,
      declarations: [ItemExistsDirective],
      imports: [CommonModule],
      exports: [ItemExistsDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ItemExistsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [ItemExistsDirective],
      exports: [ItemExistsDirective]
    }]
  }], null, null);
})();
var BudgetDetailsModule = class _BudgetDetailsModule {
  static {
    this.ɵfac = function BudgetDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BudgetDetailsModule,
      declarations: [BudgetDetailsComponent],
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule],
      declarations: [BudgetDetailsComponent]
    }]
  }], null, null);
})();
var BudgetFormModule = class _BudgetFormModule {
  static {
    this.ɵfac = function BudgetFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BudgetFormModule,
      declarations: [BudgetFormComponent],
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, ItemActiveModule, DatePickerModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, ItemActiveModule, DatePickerModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, ItemActiveModule, DatePickerModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [BudgetFormComponent]
    }]
  }], null, null);
})();
var BudgetComponentsModule = class _BudgetComponentsModule {
  static {
    this.ɵfac = function BudgetComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BudgetComponentsModule,
      imports: [SharedOrganizationModule, BudgetDetailsModule, BudgetFormModule, BudgetCostCenterListModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(budgetCmsConfig), provideDefaultConfigFactory(budgetTableConfigFactory)],
      imports: [SharedOrganizationModule, BudgetDetailsModule, BudgetFormModule, BudgetCostCenterListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [SharedOrganizationModule, BudgetDetailsModule, BudgetFormModule, BudgetCostCenterListModule],
      providers: [provideDefaultConfig(budgetCmsConfig), provideDefaultConfigFactory(budgetTableConfigFactory)]
    }]
  }], null, null);
})();
var BudgetDetailsCellComponent = class _BudgetDetailsCellComponent extends CellComponent {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵBudgetDetailsCellComponent_BaseFactory;
      return function BudgetDetailsCellComponent_Factory(__ngFactoryType__) {
        return (ɵBudgetDetailsCellComponent_BaseFactory || (ɵBudgetDetailsCellComponent_BaseFactory = ɵɵgetInheritedFactory(_BudgetDetailsCellComponent)))(__ngFactoryType__ || _BudgetDetailsCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BudgetDetailsCellComponent,
      selectors: [["cx-org-budget-details-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 4,
      consts: [["details", ""], [1, "button", "btn", "btn-sm", "text", 3, "cxPopover", "cxPopoverOptions"], [1, "popover-details"], [1, "property"], [1, "value", 3, "routerLink"], [1, "value"]],
      template: function BudgetDetailsCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, BudgetDetailsCellComponent_ng_template_0_Template, 48, 47, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementStart(2, "button", 1);
          ɵɵtext(3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const details_r2 = ɵɵreference(1);
          ɵɵadvance(2);
          ɵɵproperty("cxPopover", details_r2)("cxPopoverOptions", ɵɵpureFunction0(3, _c22));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.model.name, "\n");
        }
      },
      dependencies: [PopoverDirective, RouterLink, TranslatePipe, CxDatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetDetailsCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-budget-details-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template #details>
  <div class="popover-details">
    <div class="property">
      <label>{{ 'orgBudget.name' | cxTranslate }}</label>
      <a
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgBudgetDetails',
            params: model,
          } | cxUrl
        "
      >
        {{ model.name }}
      </a>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.code' | cxTranslate }}</label>
      <span class="value">
        {{ model.code }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.startDate' | cxTranslate }}</label>
      <span class="value">
        {{ model.startDate | cxDate }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.endDate' | cxTranslate }}</label>
      <span class="value">
        {{ model.endDate | cxDate }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.active' | cxTranslate }}</label>
      <span class="value" [class.is-active]="model.active">
        {{
          (model.active ? 'organization.enabled' : 'organization.disabled')
            | cxTranslate
        }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.amount' | cxTranslate }}</label>
      <span class="value">
        {{ model.budget }} {{ model.currency?.isocode }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgBudget.unit' | cxTranslate }}</label>
      <a
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgUnitDetails',
            params: model.orgUnit,
          } | cxUrl
        "
      >
        {{ model.orgUnit?.name }}
      </a>
    </div>
  </div>
</ng-template>

<button
  class="button btn btn-sm text"
  [cxPopover]="details"
  [cxPopoverOptions]="{
    placement: 'auto',
    class: 'my-company-popover',
    appendToBody: true,
    displayCloseButton: true,
  }"
>
  {{ model.name }}
</button>
`
    }]
  }], null, null);
})();
var BudgetDetailsCellModule = class _BudgetDetailsCellModule {
  static {
    this.ɵfac = function BudgetDetailsCellModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BudgetDetailsCellModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BudgetDetailsCellModule,
      declarations: [BudgetDetailsCellComponent],
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      exports: [BudgetDetailsCellComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BudgetDetailsCellModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      declarations: [BudgetDetailsCellComponent],
      exports: [BudgetDetailsCellComponent]
    }]
  }], null, null);
})();
var CostCenterBudgetListService = class _CostCenterBudgetListService extends SubListService {
  constructor(tableService, costCenterService, budgetService) {
    super(tableService);
    this.tableService = tableService;
    this.costCenterService = costCenterService;
    this.budgetService = budgetService;
    this.tableType = OrganizationTableType.COST_CENTER_BUDGETS;
    this._domainType = OrganizationTableType.BUDGET;
  }
  load(pagination2, code) {
    return this.costCenterService.getBudgets(code, pagination2);
  }
  /**
   * @override
   * Assign budget to the cost center.
   */
  assign(costCenterCode, budgetCode) {
    this.costCenterService.assignBudget(costCenterCode, budgetCode);
    return this.budgetService.getLoadingStatus(budgetCode);
  }
  /**
   * @override
   * Unassign the budget from the cost center.
   */
  unassign(costCenterCode, budgetCode) {
    this.costCenterService.unassignBudget(costCenterCode, budgetCode);
    return this.budgetService.getLoadingStatus(budgetCode);
  }
  static {
    this.ɵfac = function CostCenterBudgetListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterBudgetListService)(ɵɵinject(TableService), ɵɵinject(CostCenterService), ɵɵinject(BudgetService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CostCenterBudgetListService,
      factory: _CostCenterBudgetListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterBudgetListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: CostCenterService
  }, {
    type: BudgetService
  }], null);
})();
var CostCenterAssignedBudgetListService = class _CostCenterAssignedBudgetListService extends CostCenterBudgetListService {
  constructor() {
    super(...arguments);
    this.tableType = OrganizationTableType.COST_CENTER_ASSIGNED_BUDGETS;
  }
  load(pagination2, code) {
    return super.load(pagination2, code).pipe(map((budgets) => this.filterSelected(budgets)));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCostCenterAssignedBudgetListService_BaseFactory;
      return function CostCenterAssignedBudgetListService_Factory(__ngFactoryType__) {
        return (ɵCostCenterAssignedBudgetListService_BaseFactory || (ɵCostCenterAssignedBudgetListService_BaseFactory = ɵɵgetInheritedFactory(_CostCenterAssignedBudgetListService)))(__ngFactoryType__ || _CostCenterAssignedBudgetListService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CostCenterAssignedBudgetListService,
      factory: _CostCenterAssignedBudgetListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterAssignedBudgetListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CostCenterAssignedBudgetListComponent = class _CostCenterAssignedBudgetListComponent {
  static {
    this.ɵfac = function CostCenterAssignedBudgetListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterAssignedBudgetListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CostCenterAssignedBudgetListComponent,
      selectors: [["cx-org-cost-center-assigned-budget-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: CostCenterAssignedBudgetListService
      }])],
      decls: 4,
      vars: 3,
      consts: [["actions", "", "routerLink", "assign", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function CostCenterAssignedBudgetListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list")(1, "a", 0);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "organization.assign"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterAssignedBudgetListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-cost-center-assigned-budget-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: CostCenterAssignedBudgetListService
      }],
      standalone: false,
      template: `<cx-org-sub-list>
  <a actions class="link btn btn-link btn-sm" routerLink="assign">
    {{ 'organization.assign' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var CostCenterBudgetListComponent = class _CostCenterBudgetListComponent {
  static {
    this.ɵfac = function CostCenterBudgetListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterBudgetListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CostCenterBudgetListComponent,
      selectors: [["cx-org-cost-center-budget-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: CostCenterBudgetListService
      }])],
      decls: 4,
      vars: 4,
      consts: [[3, "previous"], ["actions", "", "routerLink", "../", 1, "link"]],
      template: function CostCenterBudgetListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list", 0)(1, "a", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("previous", false);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "organization.done"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterBudgetListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-cost-center-budget-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: CostCenterBudgetListService
      }],
      standalone: false,
      template: `<cx-org-sub-list [previous]="false">
  <a actions class="link" routerLink="../">
    {{ 'organization.done' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var CostCenterBudgetListModule = class _CostCenterBudgetListModule {
  static {
    this.ɵfac = function CostCenterBudgetListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterBudgetListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CostCenterBudgetListModule,
      declarations: [CostCenterAssignedBudgetListComponent, CostCenterBudgetListComponent],
      imports: [ListModule, I18nModule, RouterModule, SubListModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ListModule, I18nModule, RouterModule, SubListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterBudgetListModule, [{
    type: NgModule,
    args: [{
      imports: [ListModule, I18nModule, RouterModule, SubListModule],
      declarations: [CostCenterAssignedBudgetListComponent, CostCenterBudgetListComponent]
    }]
  }], null, null);
})();
var CurrentCostCenterService = class _CurrentCostCenterService extends CurrentItemService {
  constructor(routingService, costCenterService) {
    super(routingService);
    this.routingService = routingService;
    this.costCenterService = costCenterService;
  }
  getParamKey() {
    return ROUTE_PARAMS.costCenterCode;
  }
  getItem(code) {
    return this.costCenterService.get(code);
  }
  getError(code) {
    return this.costCenterService.getErrorState(code);
  }
  static {
    this.ɵfac = function CurrentCostCenterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentCostCenterService)(ɵɵinject(RoutingService), ɵɵinject(CostCenterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrentCostCenterService,
      factory: _CurrentCostCenterService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentCostCenterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: CostCenterService
  }], null);
})();
var CostCenterFormService = class _CostCenterFormService extends FormService {
  build() {
    const form = new UntypedFormGroup({});
    form.setControl("code", new UntypedFormControl("", [Validators.required, CustomFormValidators.noSpecialCharacters]));
    form.setControl("name", new UntypedFormControl("", Validators.required));
    form.setControl("currency", new UntypedFormGroup({
      isocode: new UntypedFormControl(void 0, Validators.required)
    }));
    form.setControl("unit", new UntypedFormGroup({
      uid: new UntypedFormControl(void 0, Validators.required)
    }));
    this.form = form;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCostCenterFormService_BaseFactory;
      return function CostCenterFormService_Factory(__ngFactoryType__) {
        return (ɵCostCenterFormService_BaseFactory || (ɵCostCenterFormService_BaseFactory = ɵɵgetInheritedFactory(_CostCenterFormService)))(__ngFactoryType__ || _CostCenterFormService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CostCenterFormService,
      factory: _CostCenterFormService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CostCenterItemService = class _CostCenterItemService extends ItemService {
  constructor(currentItemService, routingService, formService, costCenterService) {
    super(currentItemService, routingService, formService);
    this.currentItemService = currentItemService;
    this.routingService = routingService;
    this.formService = formService;
    this.costCenterService = costCenterService;
  }
  load(code) {
    this.costCenterService.load(code);
    return this.costCenterService.get(code);
  }
  update(code, value) {
    this.costCenterService.update(code, value);
    return this.costCenterService.getLoadingStatus(value.code ?? "");
  }
  create(value) {
    this.costCenterService.create(value);
    return this.costCenterService.getLoadingStatus(value.code ?? "");
  }
  getDetailsRoute() {
    return "orgCostCenterDetails";
  }
  static {
    this.ɵfac = function CostCenterItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterItemService)(ɵɵinject(CurrentCostCenterService), ɵɵinject(RoutingService), ɵɵinject(CostCenterFormService), ɵɵinject(CostCenterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CostCenterItemService,
      factory: _CostCenterItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrentCostCenterService
  }, {
    type: RoutingService
  }, {
    type: CostCenterFormService
  }, {
    type: CostCenterService
  }], null);
})();
var CostCenterDetailsComponent = class _CostCenterDetailsComponent {
  constructor(itemService) {
    this.itemService = itemService;
    this.model$ = this.itemService.key$.pipe(switchMap((code) => this.itemService.load(code)), startWith({}));
    this.isInEditMode$ = this.itemService.isInEditMode$;
  }
  static {
    this.ɵfac = function CostCenterDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterDetailsComponent)(ɵɵdirectiveInject(ItemService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CostCenterDetailsComponent,
      selectors: [["cx-org-cost-center-details"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: CostCenterItemService
      }])],
      decls: 2,
      vars: 3,
      consts: [["i18nRoot", "orgCostCenter.details", 3, "cxFocus", 4, "ngIf"], ["i18nRoot", "orgCostCenter.details", 3, "cxFocus"], ["actions", "", 1, "link", "edit", 3, "routerLink"], ["actions", "", "i18nRoot", "orgCostCenter"], ["info", "", "i18nRoot", "orgCostCenter"], ["main", "", "cxOrgItemExists", "", 1, "details"], [1, "property"], [1, "value"], [1, "value", 3, "routerLink"], ["main", "", 1, "link-list"], ["class", "link", "routerLinkActive", "is-current", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "is-current", 1, "link", 3, "routerLink"]],
      template: function CostCenterDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CostCenterDetailsComponent_cx_org_card_0_Template, 43, 47, "cx-org-card", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.model$));
        }
      },
      dependencies: [NgIf, CardComponent, RouterLink, RouterLinkActive, ToggleStatusComponent, ItemExistsDirective, DisableInfoComponent, FocusDirective, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-cost-center-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: ItemService,
        useExisting: CostCenterItemService
      }],
      host: {
        class: "content-wrapper"
      },
      standalone: false,
      template: `<cx-org-card
  *ngIf="model$ | async as model"
  i18nRoot="orgCostCenter.details"
  [cxFocus]="{ refreshFocus: model }"
>
  <a
    actions
    class="link edit"
    [class.disabled]="!model.active || (isInEditMode$ | async)"
    [routerLink]="{ cxRoute: 'orgCostCenterEdit', params: model } | cxUrl"
  >
    {{ 'organization.edit' | cxTranslate }}
  </a>

  <cx-org-toggle-status actions i18nRoot="orgCostCenter"></cx-org-toggle-status>

  <cx-org-disable-info info i18nRoot="orgCostCenter"> </cx-org-disable-info>

  <section main class="details" cxOrgItemExists>
    <div class="property">
      <label>{{ 'orgCostCenter.name' | cxTranslate }}</label>
      <span class="value">
        {{ model.name }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgCostCenter.code' | cxTranslate }}</label>
      <span class="value">
        {{ model.code }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgCostCenter.active' | cxTranslate }}</label>
      <span
        class="value"
        [class.is-active]="model.active"
        [class.is-inactive]="!model.active"
      >
        {{
          (model.active ? 'organization.enabled' : 'organization.disabled')
            | cxTranslate
        }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgCostCenter.currency' | cxTranslate }}</label>

      <span class="value">
        {{ model.currency?.isocode }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgCostCenter.unit' | cxTranslate }}</label>
      <a
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgUnitDetails',
            params: model.unit,
          } | cxUrl
        "
      >
        {{ model.unit?.name }}
      </a>
    </div>
  </section>

  <section main class="link-list">
    <a
      *ngIf="model.code"
      class="link"
      [routerLink]="{ cxRoute: 'orgCostCenterBudgets', params: model } | cxUrl"
      routerLinkActive="is-current"
    >
      {{ 'orgCostCenter.budget.link' | cxTranslate }}
    </a>
  </section>
</cx-org-card>
`
    }]
  }], () => [{
    type: ItemService
  }], null);
})();
var CostCenterFormComponent = class _CostCenterFormComponent {
  /**
   * Initialize the business unit for the cost center.
   *
   * If there's a unit provided, we disable the form control.
   */
  set unitKey(value) {
    if (value) {
      this.form?.get("unit.uid")?.setValue(value);
      this.form?.get("unit")?.disable();
    }
  }
  constructor(itemService, unitService, currencyService) {
    this.itemService = itemService;
    this.unitService = unitService;
    this.currencyService = currencyService;
    this.form = this.itemService.getForm();
    this.units$ = this.unitService.getActiveUnitList().pipe(tap((units) => {
      if (units && units.length === 1) {
        this.form?.get("unit.uid")?.setValue(units[0]?.id);
      }
    }));
    this.currencies$ = this.currencyService.getAll().pipe(tap((currency) => {
      if (currency.length === 1) {
        this.form?.get("currency.isocode")?.setValue(currency[0]?.isocode);
      }
    }));
  }
  createCodeWithName(name, code) {
    createCodeForEntityName(name, code);
  }
  static {
    this.ɵfac = function CostCenterFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterFormComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(OrgUnitService), ɵɵdirectiveInject(CurrencyService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CostCenterFormComponent,
      selectors: [["cx-org-cost-center-form"]],
      hostAttrs: [1, "content-wrapper"],
      inputs: {
        unitKey: "unitKey"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: CostCenterItemService
      }, {
        provide: CurrentItemService,
        useExisting: CurrentCostCenterService
      }])],
      decls: 2,
      vars: 1,
      consts: [["i18nRoot", "orgCostCenter"], ["main", "", 3, "formGroup", 4, "ngIf"], ["main", "", 3, "formGroup"], [1, "label-content", "required"], ["type", "text", "required", "", "formControlName", "name", 1, "form-control", 3, "blur", "placeholder"], ["id", "nameError", 3, "translationParams", "control"], ["type", "text", "required", "", "formControlName", "code", 1, "form-control", 3, "placeholder"], ["id", "codeError", 3, "translationParams", "control"], ["formGroupName", "currency"], ["formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder"], [3, "translationParams", "control"], [3, "formGroup"], ["formControlName", "uid", "bindLabel", "name", "bindValue", "id", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "readonly", "placeholder"]],
      template: function CostCenterFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-form", 0);
          ɵɵtemplate(1, CostCenterFormComponent_ng_container_1_Template, 40, 71, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.form);
        }
      },
      dependencies: [NgIf, FormComponent, NgSelectComponent, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormGroupName, FormErrorsComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-cost-center-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ItemService,
        useExisting: CostCenterItemService
      }, {
        provide: CurrentItemService,
        useExisting: CurrentCostCenterService
      }],
      standalone: false,
      template: `<cx-org-form i18nRoot="orgCostCenter">
  <ng-container *ngIf="form" [formGroup]="form" main>
    <cx-form-required-legend />
    <label>
      <span class="label-content required"
        >{{ 'orgCostCenter.name' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        type="text"
        class="form-control"
        required
        placeholder="{{ 'orgCostCenter.name' | cxTranslate }}"
        formControlName="name"
        (blur)="createCodeWithName(form.get('name'), form.get('code'))"
        [attr.aria-invalid]="
          form.get('name')?.touched && form.get('name')?.invalid
        "
        [attr.aria-errormessage]="'nameError'"
      />

      <cx-form-errors
        id="nameError"
        [translationParams]="{
          label: 'orgCostCenter.name' | cxTranslate,
        }"
        [control]="form.get('name')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'orgCostCenter.code' | cxTranslate }}<cx-form-required-asterisks />
      </span>
      <input
        class="form-control"
        type="text"
        required
        placeholder="{{ 'orgCostCenter.code' | cxTranslate }}"
        formControlName="code"
        [attr.aria-invalid]="
          form.get('code')?.touched && form.get('code')?.invalid
        "
        [attr.aria-errormessage]="'codeError'"
      />

      <cx-form-errors
        id="codeError"
        [translationParams]="{
          label: 'orgCostCenter.code' | cxTranslate,
        }"
        [control]="form.get('code')"
      ></cx-form-errors>
    </label>

    <label formGroupName="currency">
      <span class="label-content required"
        >{{ 'orgCostCenter.currency' | cxTranslate
        }}<cx-form-required-asterisks />
      </span>
      <ng-select
        [inputAttrs]="{ required: 'true' }"
        formControlName="isocode"
        [searchable]="false"
        [clearable]="false"
        [items]="currencies$ | async"
        bindLabel="name"
        bindValue="isocode"
        [class.invalid]="form.get('currency.isocode')?.invalid ?? false"
        appendTo="cx-org-list"
        [placeholder]="'orgCostCenter.currency' | cxTranslate"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{
          label: 'orgCostCenter.currency' | cxTranslate,
        }"
        [control]="form.get('currency.isocode')"
      ></cx-form-errors>
    </label>

    <label [formGroup]="$any(form.get('unit'))">
      <span class="label-content required"
        >{{ 'orgCostCenter.unit' | cxTranslate }}<cx-form-required-asterisks />
      </span>
      <ng-select
        [inputAttrs]="{ required: 'true' }"
        formControlName="uid"
        [searchable]="true"
        [clearable]="false"
        [items]="(units$ | async) ?? null"
        bindLabel="name"
        bindValue="id"
        [readonly]="form.get('unit.uid')?.disabled ?? false"
        appendTo="cx-org-list"
        [placeholder]="'orgCostCenter.unit' | cxTranslate"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{
          label: 'orgCostCenter.unit' | cxTranslate,
        }"
        [control]="form.get('unit.uid')"
      ></cx-form-errors>
    </label>
  </ng-container>
</cx-org-form>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: OrgUnitService
  }, {
    type: CurrencyService
  }], {
    unitKey: [{
      type: Input
    }]
  });
})();
var CostCenterListService = class _CostCenterListService extends ListService {
  constructor(tableService, costCenterService) {
    super(tableService);
    this.tableService = tableService;
    this.costCenterService = costCenterService;
    this.tableType = OrganizationTableType.COST_CENTER;
  }
  load(pagination2) {
    return this.costCenterService.getList(pagination2).pipe(filter(isNotUndefined), map((raw) => this.convertCostCenters(raw)));
  }
  /**
   * Populates the cost center data to a convenient table data model, so that we
   * can skip specific conversion in the view logic where possible.
   */
  convertCostCenters({
    pagination: pagination2,
    sorts,
    values
  }) {
    const costCenterModels = {
      pagination: pagination2,
      sorts,
      values: values.map((value) => __spreadProps(__spreadValues({}, value), {
        currency: value.currency?.isocode
      }))
    };
    return costCenterModels;
  }
  static {
    this.ɵfac = function CostCenterListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterListService)(ɵɵinject(TableService), ɵɵinject(CostCenterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CostCenterListService,
      factory: _CostCenterListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: CostCenterService
  }], null);
})();
var CostCenterRoutePageMetaResolver = class _CostCenterRoutePageMetaResolver extends DefaultRoutePageMetaResolver {
  constructor(translation, currentItemService) {
    super(translation);
    this.currentItemService = currentItemService;
  }
  getParams() {
    return this.currentItemService.item$;
  }
  static {
    this.ɵfac = function CostCenterRoutePageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterRoutePageMetaResolver)(ɵɵinject(TranslationService), ɵɵinject(CurrentCostCenterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CostCenterRoutePageMetaResolver,
      factory: _CostCenterRoutePageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterRoutePageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: CurrentCostCenterService
  }], null);
})();
var costCenterCmsConfig = {
  cmsComponents: {
    ManageCostCentersListComponent: {
      component: ListComponent,
      providers: [{
        provide: ListService,
        useExisting: CostCenterListService
      }, {
        provide: ItemService,
        useExisting: CostCenterItemService
      }],
      childRoutes: {
        parent: {
          data: {
            cxPageMeta: {
              breadcrumb: "orgCostCenter.breadcrumbs.list",
              resolver: CostCenterRoutePageMetaResolver
            }
          }
        },
        children: [{
          path: "create",
          component: CostCenterFormComponent
        }, {
          path: `:${ROUTE_PARAMS.costCenterCode}`,
          component: CostCenterDetailsComponent,
          data: {
            cxPageMeta: {
              breadcrumb: "orgCostCenter.breadcrumbs.details"
            }
          },
          children: [{
            path: "edit",
            component: CostCenterFormComponent
          }, {
            path: "budgets",
            data: {
              cxPageMeta: {
                breadcrumb: "orgCostCenter.breadcrumbs.budgets"
              }
            },
            children: [{
              path: "",
              component: CostCenterAssignedBudgetListComponent
            }, {
              path: "assign",
              component: CostCenterBudgetListComponent
            }]
          }]
        }]
      },
      guards: [AuthGuard, AdminGuard]
    }
  }
};
function costCenterTableConfigFactory() {
  return costCenterTableConfig;
}
var costCenterTableConfig = {
  table: {
    [OrganizationTableType.COST_CENTER]: {
      cells: ["name", "active", "currency", "unit"],
      options: {
        cells: {
          name: {
            dataComponent: ActiveLinkCellComponent,
            linkable: true
          },
          active: {
            dataComponent: StatusCellComponent
          },
          currency: {
            dataComponent: CellComponent
          },
          unit: {
            dataComponent: UnitCellComponent
          }
        }
      }
    },
    [OrganizationTableType.COST_CENTER_ASSIGNED_BUDGETS]: {
      cells: ["name", "actions"],
      options: {
        cells: {
          name: {
            dataComponent: BudgetDetailsCellComponent
          },
          actions: {
            dataComponent: AssignCellComponent
          }
        },
        pagination: {
          pageSize: MAX_OCC_INTEGER_VALUE
        }
      }
    },
    [OrganizationTableType.COST_CENTER_BUDGETS]: {
      cells: ["name", "actions"],
      options: {
        cells: {
          name: {
            dataComponent: BudgetDetailsCellComponent
          },
          actions: {
            dataComponent: AssignCellComponent
          }
        }
      }
    }
  }
};
var CostCenterDetailsModule = class _CostCenterDetailsModule {
  static {
    this.ɵfac = function CostCenterDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CostCenterDetailsModule,
      declarations: [CostCenterDetailsComponent],
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule],
      exports: [CostCenterDetailsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule],
      declarations: [CostCenterDetailsComponent],
      exports: [CostCenterDetailsComponent]
    }]
  }], null, null);
})();
var CostCenterFormModule = class _CostCenterFormModule {
  static {
    this.ɵfac = function CostCenterFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CostCenterFormModule,
      declarations: [CostCenterFormComponent],
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, ItemActiveModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [CostCenterFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [CurrencyService, OrgUnitService],
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, ItemActiveModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, ItemActiveModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [CostCenterFormComponent],
      exports: [CostCenterFormComponent],
      providers: [CurrencyService, OrgUnitService]
    }]
  }], null, null);
})();
var CostCenterComponentsModule = class _CostCenterComponentsModule {
  static {
    this.ɵfac = function CostCenterComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CostCenterComponentsModule,
      imports: [SharedOrganizationModule, CostCenterDetailsModule, CostCenterFormModule, CostCenterBudgetListModule, BudgetDetailsCellModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(costCenterCmsConfig), provideDefaultConfigFactory(costCenterTableConfigFactory)],
      imports: [SharedOrganizationModule, CostCenterDetailsModule, CostCenterFormModule, CostCenterBudgetListModule, BudgetDetailsCellModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [SharedOrganizationModule, CostCenterDetailsModule, CostCenterFormModule, CostCenterBudgetListModule, BudgetDetailsCellModule],
      providers: [provideDefaultConfig(costCenterCmsConfig), provideDefaultConfigFactory(costCenterTableConfigFactory)]
    }]
  }], null, null);
})();
var CurrentPermissionService = class _CurrentPermissionService extends CurrentItemService {
  constructor(routingService, permissionService) {
    super(routingService);
    this.routingService = routingService;
    this.permissionService = permissionService;
  }
  getParamKey() {
    return ROUTE_PARAMS.permissionCode;
  }
  getItem(code) {
    return this.permissionService.get(code);
  }
  getError(code) {
    return this.permissionService.getErrorState(code);
  }
  static {
    this.ɵfac = function CurrentPermissionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentPermissionService)(ɵɵinject(RoutingService), ɵɵinject(PermissionService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrentPermissionService,
      factory: _CurrentPermissionService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentPermissionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: PermissionService
  }], null);
})();
var PermissionType;
(function(PermissionType2) {
  PermissionType2["ORDER"] = "B2BOrderThresholdPermission";
  PermissionType2["TIME_SPAN"] = "B2BOrderThresholdTimespanPermission";
  PermissionType2["EXCEEDED"] = "B2BBudgetExceededPermission";
})(PermissionType || (PermissionType = {}));
var PermissionFormService = class _PermissionFormService extends FormService {
  constructor() {
    super(...arguments);
    this.subscription = new Subscription();
  }
  /**
   * @override
   * Builds a generic sub form for permissions and amends the form
   * based on the for approval permission type.
   */
  build() {
    const form = new UntypedFormGroup({});
    form.setControl("code", new UntypedFormControl("", [Validators.required, CustomFormValidators.noSpecialCharacters]));
    form.setControl("orgUnit", new UntypedFormGroup({
      uid: new UntypedFormControl(void 0, Validators.required)
    }));
    form.setControl("orderApprovalPermissionType", new UntypedFormGroup({
      code: new UntypedFormControl(void 0, Validators.required)
    }));
    this.subscription.add(form.get("orderApprovalPermissionType")?.get("code")?.valueChanges.pipe(distinctUntilChanged(), filter((code) => !!code)).subscribe((code) => this.amend(form, code)));
    this.form = form;
  }
  /**
   * @override
   * The form is using  `B2BBudgetExceededPermission` by default.
   */
  get defaultValue() {
    return {
      orderApprovalPermissionType: {
        code: PermissionType.EXCEEDED
      }
    };
  }
  /**
   * Amends the form structure based on the `PermissionType`.
   */
  amend(form, code) {
    if (code === PermissionType.EXCEEDED) {
      form.removeControl("periodRange");
      form.removeControl("currency");
      form.removeControl("threshold");
    }
    if (code === PermissionType.TIME_SPAN || code === PermissionType.ORDER) {
      if (!form.get("currency")) {
        form.setControl("currency", new UntypedFormGroup({
          isocode: new UntypedFormControl(void 0, Validators.required)
        }));
      }
      if (!form.get("threshold")) {
        form.setControl("threshold", new UntypedFormControl("", Validators.required));
      }
    }
    if (code === PermissionType.ORDER) {
      form.removeControl("periodRange");
    }
    if (code === PermissionType.TIME_SPAN) {
      if (!form.get("periodRange")) {
        form.setControl("periodRange", new UntypedFormControl("", Validators.required));
      }
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  patchData(item) {
    super.patchData(item);
    if (item?.code !== void 0) {
      this.form?.get("orderApprovalPermissionType")?.disable();
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵPermissionFormService_BaseFactory;
      return function PermissionFormService_Factory(__ngFactoryType__) {
        return (ɵPermissionFormService_BaseFactory || (ɵPermissionFormService_BaseFactory = ɵɵgetInheritedFactory(_PermissionFormService)))(__ngFactoryType__ || _PermissionFormService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PermissionFormService,
      factory: _PermissionFormService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PermissionItemService = class _PermissionItemService extends ItemService {
  constructor(currentItemService, routingService, formService, permissionService) {
    super(currentItemService, routingService, formService);
    this.currentItemService = currentItemService;
    this.routingService = routingService;
    this.formService = formService;
    this.permissionService = permissionService;
  }
  load(code) {
    this.permissionService.loadPermission(code);
    return this.permissionService.get(code);
  }
  update(code, value) {
    this.permissionService.update(code, value);
    return this.permissionService.getLoadingStatus(value.code ?? "");
  }
  create(value) {
    this.permissionService.create(value);
    return this.permissionService.getLoadingStatus(value.code ?? "");
  }
  getDetailsRoute() {
    return "orgPurchaseLimitDetails";
  }
  static {
    this.ɵfac = function PermissionItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionItemService)(ɵɵinject(CurrentPermissionService), ɵɵinject(RoutingService), ɵɵinject(PermissionFormService), ɵɵinject(PermissionService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PermissionItemService,
      factory: _PermissionItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrentPermissionService
  }, {
    type: RoutingService
  }, {
    type: PermissionFormService
  }, {
    type: PermissionService
  }], null);
})();
var PermissionDetailsComponent = class _PermissionDetailsComponent {
  constructor(itemService) {
    this.itemService = itemService;
    this.model$ = this.itemService.key$.pipe(switchMap((code) => this.itemService.load(code)), startWith({}));
    this.isInEditMode$ = this.itemService.isInEditMode$;
  }
  static {
    this.ɵfac = function PermissionDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionDetailsComponent)(ɵɵdirectiveInject(ItemService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PermissionDetailsComponent,
      selectors: [["cx-org-permission-details"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: PermissionItemService
      }])],
      decls: 2,
      vars: 3,
      consts: [["i18nRoot", "orgPurchaseLimit.details", 3, "cxFocus", 4, "ngIf"], ["i18nRoot", "orgPurchaseLimit.details", 3, "cxFocus"], ["actions", "", 1, "link", "btn", "btn-link", "btn-sm", "edit", 3, "routerLink"], ["actions", "", "i18nRoot", "orgPurchaseLimit", 3, "disabled"], ["info", "", "i18nRoot", "orgPurchaseLimit", 3, "displayInfoConfig"], ["main", "", "cxOrgItemExists", "", 1, "details"], [1, "property"], [1, "value"], ["class", "property", 4, "ngIf"], ["class", "value", 3, "routerLink", 4, "ngIf"], [1, "value", 3, "routerLink"]],
      template: function PermissionDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, PermissionDetailsComponent_cx_org_card_0_Template, 35, 40, "cx-org-card", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.model$));
        }
      },
      dependencies: [NgIf, CardComponent, RouterLink, ToggleStatusComponent, ItemExistsDirective, DisableInfoComponent, FocusDirective, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-permission-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: ItemService,
        useExisting: PermissionItemService
      }],
      host: {
        class: "content-wrapper"
      },
      standalone: false,
      template: `<cx-org-card
  *ngIf="model$ | async as model"
  i18nRoot="orgPurchaseLimit.details"
  [cxFocus]="{ refreshFocus: model }"
>
  <a
    actions
    class="link btn btn-link btn-sm edit"
    [class.disabled]="!model.active || (isInEditMode$ | async)"
    [routerLink]="{ cxRoute: 'orgPurchaseLimitEdit', params: model } | cxUrl"
  >
    {{ 'organization.edit' | cxTranslate }}
  </a>

  <cx-org-toggle-status
    actions
    i18nRoot="orgPurchaseLimit"
    [disabled]="false"
  ></cx-org-toggle-status>

  <cx-org-disable-info
    info
    i18nRoot="orgPurchaseLimit"
    [displayInfoConfig]="{ disabledEnable: false }"
  >
  </cx-org-disable-info>

  <section main class="details" cxOrgItemExists>
    <div class="property">
      <label>{{ 'orgPurchaseLimit.code' | cxTranslate }}</label>
      <span class="value">
        {{ model.code }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgPurchaseLimit.active' | cxTranslate }}</label>
      <span class="value" [class.is-active]="model.active">
        {{
          (model.active ? 'organization.enabled' : 'organization.disabled')
            | cxTranslate
        }}
      </span>
    </div>

    <div class="property">
      <label>{{
        'orgPurchaseLimit.orderApprovalPermissionType' | cxTranslate
      }}</label>
      <span class="value">
        {{ model.orderApprovalPermissionType?.name }}
      </span>
    </div>

    <div class="property" *ngIf="model.threshold || model.threshold === 0">
      <label>{{ 'orgPurchaseLimit.threshold' | cxTranslate }}</label>
      <span class="value">
        {{ model.threshold }} {{ model.currency?.symbol }}
      </span>
    </div>

    <div class="property" *ngIf="model.periodRange">
      <label>{{ 'orgPurchaseLimit.periodRange' | cxTranslate }}</label>
      <span class="value">
        {{ model.periodRange }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgPurchaseLimit.unit' | cxTranslate }}</label>
      <a
        *ngIf="model.code"
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgUnitDetails',
            params: model.orgUnit,
          } | cxUrl
        "
      >
        {{ model.orgUnit?.name }}
      </a>
    </div>
  </section>
</cx-org-card>
`
    }]
  }], () => [{
    type: ItemService
  }], null);
})();
var PermissionDetailsModule = class _PermissionDetailsModule {
  static {
    this.ɵfac = function PermissionDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PermissionDetailsModule,
      declarations: [PermissionDetailsComponent],
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule],
      exports: [PermissionDetailsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule],
      declarations: [PermissionDetailsComponent],
      exports: [PermissionDetailsComponent]
    }]
  }], null, null);
})();
var PermissionFormComponent = class _PermissionFormComponent {
  constructor(itemService, unitService, currencyService, permissionService) {
    this.itemService = itemService;
    this.unitService = unitService;
    this.currencyService = currencyService;
    this.permissionService = permissionService;
    this.form = this.itemService.getForm();
    this.units$ = this.unitService.getActiveUnitList().pipe(tap((units) => {
      if (units && units.length === 1) {
        this.form?.get("orgUnit.uid")?.setValue(units[0].id);
      }
    }));
    this.currencies$ = this.currencyService.getAll().pipe(tap((currency) => {
      if (currency.length === 1) {
        this.form?.get("currency.isocode")?.setValue(currency[0]?.isocode);
      }
    }));
    this.types$ = this.permissionService.getTypes();
    this.periods = Object.keys(Period);
  }
  ngOnInit() {
    this.unitService.loadList();
  }
  static {
    this.ɵfac = function PermissionFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionFormComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(OrgUnitService), ɵɵdirectiveInject(CurrencyService), ɵɵdirectiveInject(PermissionService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PermissionFormComponent,
      selectors: [["cx-org-permission-form"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: PermissionItemService
      }, {
        provide: CurrentItemService,
        useExisting: CurrentPermissionService
      }])],
      decls: 2,
      vars: 1,
      consts: [["i18nRoot", "orgPurchaseLimit"], ["main", "", 3, "formGroup", 4, "ngIf"], ["main", "", 3, "formGroup"], [1, "label-content", "required"], ["type", "text", "required", "", "formControlName", "code", 1, "form-control", 3, "placeholder"], ["id", "codeError", 3, "translationParams", "control"], [3, "formGroup", 4, "ngIf"], [4, "ngIf"], [3, "formGroup"], ["formControlName", "uid", "bindLabel", "name", "bindValue", "id", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "readonly", "placeholder"], [3, "translationParams", "control"], ["formControlName", "code", "bindLabel", "name", "bindValue", "code", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "readonly", "placeholder"], ["formControlName", "periodRange", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder"], ["formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder", 4, "ngIf"], ["formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder"], ["type", "number", "required", "", "formControlName", "threshold", 1, "form-control", 3, "placeholder"], ["id", "thresholdError", 3, "translationParams", "control"]],
      template: function PermissionFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-form", 0);
          ɵɵtemplate(1, PermissionFormComponent_ng_container_1_Template, 26, 42, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.form);
        }
      },
      dependencies: [NgIf, NgSelectComponent, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, FormComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-permission-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ItemService,
        useExisting: PermissionItemService
      }, {
        provide: CurrentItemService,
        useExisting: CurrentPermissionService
      }],
      standalone: false,
      template: `<cx-org-form i18nRoot="orgPurchaseLimit">
  <ng-container *ngIf="form" [formGroup]="form" main>
    <cx-form-required-legend />
    <label>
      <span class="label-content required">
        {{ 'orgPurchaseLimit.code' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        class="form-control"
        type="text"
        required
        placeholder="{{ 'orgPurchaseLimit.code' | cxTranslate }}"
        formControlName="code"
        [attr.aria-invalid]="
          form.get('code')?.touched && form.get('code')?.invalid
        "
        [attr.aria-errormessage]="'codeError'"
      />

      <cx-form-errors
        id="codeError"
        [translationParams]="{ label: 'orgPurchaseLimit.code' | cxTranslate }"
        [control]="form.get('code')"
      ></cx-form-errors>
    </label>

    <label
      *ngIf="(types$ | async)?.length"
      [formGroup]="$any(form.get('orderApprovalPermissionType'))"
    >
      <span class="label-content required">
        {{ 'orgPurchaseLimit.orderApprovalPermissionType' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <ng-select
        [inputAttrs]="{ required: 'true' }"
        formControlName="code"
        [searchable]="false"
        [clearable]="false"
        [items]="(types$ | async) ?? null"
        bindLabel="name"
        bindValue="code"
        [readonly]="form.disabled"
        appendTo="cx-org-list"
        [placeholder]="
          'orgPurchaseLimit.orderApprovalPermissionType' | cxTranslate
        "
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{
          label: 'orgPurchaseLimit.orderApprovalPermissionType' | cxTranslate,
        }"
        [control]="form.get('orderApprovalPermissionType.code')"
      ></cx-form-errors>
    </label>

    <label *ngIf="form.get('periodRange')">
      <span class="label-content required">
        {{ 'orgPurchaseLimit.periodRange' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <ng-select
        [inputAttrs]="{ required: 'true' }"
        formControlName="periodRange"
        [searchable]="false"
        [clearable]="false"
        [items]="periods"
        appendTo="cx-org-list"
        [placeholder]="'orgPurchaseLimit.periodRange' | cxTranslate"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{
          label: 'orgPurchaseLimit.periodRange' | cxTranslate,
        }"
        [control]="form.get('periodRange')"
      ></cx-form-errors>
    </label>

    <label
      *ngIf="form.get('currency')"
      [formGroup]="$any(form.get('currency'))"
    >
      <span class="label-content required">
        {{ 'orgPurchaseLimit.currency' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <ng-select
        *ngIf="currencies$ | async as currencies"
        [inputAttrs]="{ required: 'true' }"
        formControlName="isocode"
        [searchable]="false"
        [clearable]="false"
        [items]="currencies"
        bindLabel="name"
        bindValue="isocode"
        [placeholder]="'orgPurchaseLimit.currency' | cxTranslate"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{
          label: 'orgPurchaseLimit.currency' | cxTranslate,
        }"
        [control]="form.get('currency.isocode')"
      ></cx-form-errors>
    </label>

    <label *ngIf="form.get('threshold')">
      <span class="label-content required">
        {{ 'orgPurchaseLimit.threshold' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        class="form-control"
        type="number"
        required
        placeholder="{{ 'orgPurchaseLimit.threshold' | cxTranslate }}"
        formControlName="threshold"
        [attr.aria-invalid]="
          form.get('threshold')?.touched && form.get('threshold')?.invalid
        "
        [attr.aria-errormessage]="'thresholdError'"
      />

      <cx-form-errors
        id="thresholdError"
        [translationParams]="{
          label: 'orgPurchaseLimit.threshold' | cxTranslate,
        }"
        [control]="form.get('threshold')"
      ></cx-form-errors>
    </label>

    <label [formGroup]="$any(form.get('orgUnit'))">
      <span class="label-content required">
        {{ 'orgPurchaseLimit.orgUnit' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <ng-select
        [inputAttrs]="{ required: 'true' }"
        formControlName="uid"
        [searchable]="true"
        [clearable]="false"
        [items]="(units$ | async) ?? null"
        bindLabel="name"
        bindValue="id"
        [readonly]="form.get('orgUnit')?.disabled ?? false"
        appendTo="cx-org-list"
        [placeholder]="'orgPurchaseLimit.orgUnit' | cxTranslate"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{
          label: 'orgPurchaseLimit.orgUnit' | cxTranslate,
        }"
        [control]="form.get('orgUnit.uid')"
      ></cx-form-errors>
    </label>
  </ng-container>
</cx-org-form>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: OrgUnitService
  }, {
    type: CurrencyService
  }, {
    type: PermissionService
  }], null);
})();
var PermissionFormModule = class _PermissionFormModule {
  static {
    this.ɵfac = function PermissionFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PermissionFormModule,
      declarations: [PermissionFormComponent],
      imports: [CommonModule, RouterModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FormModule, ItemActiveModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [PermissionFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FormModule, ItemActiveModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FormModule, ItemActiveModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [PermissionFormComponent],
      exports: [PermissionFormComponent]
    }]
  }], null, null);
})();
var PermissionListService = class _PermissionListService extends ListService {
  constructor(tableService, permissionsService) {
    super(tableService);
    this.tableService = tableService;
    this.permissionsService = permissionsService;
    this.tableType = OrganizationTableType.PERMISSION;
  }
  load(pagination2) {
    return this.permissionsService.getList(pagination2).pipe(filter(isNotUndefined), map((raw) => this.convertPermissions(raw)));
  }
  /**
   * Populates the permission data to a convenient table data model, so that we
   * can skip specific conversion in the view logic where possible.
   */
  convertPermissions({
    pagination: pagination2,
    sorts,
    values
  }) {
    const permissionGroupModels = {
      pagination: pagination2,
      sorts,
      values: values.map((value) => __spreadProps(__spreadValues({}, value), {
        unit: value.orgUnit
      }))
    };
    return permissionGroupModels;
  }
  static {
    this.ɵfac = function PermissionListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionListService)(ɵɵinject(TableService), ɵɵinject(PermissionService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PermissionListService,
      factory: _PermissionListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: PermissionService
  }], null);
})();
var PermissionRoutePageMetaResolver = class _PermissionRoutePageMetaResolver extends DefaultRoutePageMetaResolver {
  constructor(translation, currentItemService) {
    super(translation);
    this.currentItemService = currentItemService;
  }
  getParams() {
    return this.currentItemService.item$;
  }
  static {
    this.ɵfac = function PermissionRoutePageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionRoutePageMetaResolver)(ɵɵinject(TranslationService), ɵɵinject(CurrentPermissionService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PermissionRoutePageMetaResolver,
      factory: _PermissionRoutePageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionRoutePageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: CurrentPermissionService
  }], null);
})();
var permissionCmsConfig = {
  cmsComponents: {
    ManagePermissionsListComponent: {
      component: ListComponent,
      providers: [{
        provide: ListService,
        useExisting: PermissionListService
      }, {
        provide: ItemService,
        useExisting: PermissionItemService
      }],
      childRoutes: {
        parent: {
          data: {
            cxPageMeta: {
              breadcrumb: "orgPurchaseLimit.breadcrumbs.list",
              resolver: PermissionRoutePageMetaResolver
            }
          }
        },
        children: [{
          path: "create",
          component: PermissionFormComponent
        }, {
          path: `:${ROUTE_PARAMS.permissionCode}`,
          component: PermissionDetailsComponent,
          data: {
            cxPageMeta: {
              breadcrumb: "orgPurchaseLimit.breadcrumbs.details"
            }
          },
          children: [{
            path: "edit",
            component: PermissionFormComponent
          }]
        }]
      },
      guards: [AuthGuard, AdminGuard]
    }
  }
};
function permissionTableConfigFactory() {
  return permisionTableConfig;
}
var permisionTableConfig = {
  table: {
    [OrganizationTableType.PERMISSION]: {
      cells: ["code", "active", "limit", "unit"],
      options: {
        cells: {
          code: {
            dataComponent: ActiveLinkCellComponent,
            linkable: true
          },
          active: {
            dataComponent: StatusCellComponent
          },
          unit: {
            dataComponent: UnitCellComponent
          },
          limit: {
            dataComponent: LimitCellComponent
          }
        }
      }
    }
  }
};
var PermissionComponentsModule = class _PermissionComponentsModule {
  static {
    this.ɵfac = function PermissionComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PermissionComponentsModule,
      imports: [SharedOrganizationModule, PermissionDetailsModule, PermissionFormModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(permissionCmsConfig), provideDefaultConfigFactory(permissionTableConfigFactory)],
      imports: [SharedOrganizationModule, PermissionDetailsModule, PermissionFormModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [SharedOrganizationModule, PermissionDetailsModule, PermissionFormModule],
      providers: [provideDefaultConfig(permissionCmsConfig), provideDefaultConfigFactory(permissionTableConfigFactory)]
    }]
  }], null, null);
})();
var CurrentUnitService = class _CurrentUnitService extends CurrentItemService {
  constructor(routingService, orgUnitService) {
    super(routingService);
    this.routingService = routingService;
    this.orgUnitService = orgUnitService;
  }
  getParamKey() {
    return ROUTE_PARAMS.unitCode;
  }
  getItem(code) {
    return this.orgUnitService.get(code);
  }
  getError(code) {
    return this.orgUnitService.getErrorState(code);
  }
  static {
    this.ɵfac = function CurrentUnitService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentUnitService)(ɵɵinject(RoutingService), ɵɵinject(OrgUnitService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrentUnitService,
      factory: _CurrentUnitService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUnitService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: OrgUnitService
  }], null);
})();
var UnitFormService = class _UnitFormService extends FormService {
  patchData(item) {
    this.toggleParentUnit(item);
    super.patchData(item);
  }
  build() {
    const form = new UntypedFormGroup({});
    form.setControl("uid", new UntypedFormControl("", [Validators.required, CustomFormValidators.noSpecialCharacters]));
    form.setControl("name", new UntypedFormControl("", Validators.required));
    form.setControl("approvalProcess", new UntypedFormGroup({
      code: new UntypedFormControl(null)
    }));
    this.form = form;
    this.toggleParentUnit();
  }
  toggleParentUnit(item) {
    if (this.isRootUnit(item)) {
      this.form?.removeControl("parentOrgUnit");
    } else if (!this.form?.get("parentOrgUnit")) {
      this.form?.setControl("parentOrgUnit", new UntypedFormGroup({
        uid: new UntypedFormControl(null, Validators.required)
      }));
    }
  }
  isRootUnit(item) {
    return Boolean(item?.uid && item?.name && (!item?.parentOrgUnit || item?.uid === item?.parentOrgUnit));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUnitFormService_BaseFactory;
      return function UnitFormService_Factory(__ngFactoryType__) {
        return (ɵUnitFormService_BaseFactory || (ɵUnitFormService_BaseFactory = ɵɵgetInheritedFactory(_UnitFormService)))(__ngFactoryType__ || _UnitFormService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitFormService,
      factory: _UnitFormService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UnitItemService = class _UnitItemService extends ItemService {
  constructor(currentItemService, routingService, formService, unitService) {
    super(currentItemService, routingService, formService);
    this.currentItemService = currentItemService;
    this.routingService = routingService;
    this.formService = formService;
    this.unitService = unitService;
  }
  /**
   * @override
   * Returns the unit for the given code.
   *
   * Loads the unit each time, to ensure accurate data is resolved.
   */
  load(code) {
    this.unitService.load(code);
    return this.unitService.get(code);
  }
  update(code, value) {
    this.unitService.update(code, value);
    return this.unitService.getLoadingStatus(value.uid ?? "");
  }
  create(value) {
    this.unitService.create(value);
    return this.unitService.getLoadingStatus(value.uid ?? "");
  }
  /**
   * @override
   * Returns 'unitDetails'
   */
  getDetailsRoute() {
    return "orgUnitDetails";
  }
  static {
    this.ɵfac = function UnitItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitItemService)(ɵɵinject(CurrentUnitService), ɵɵinject(RoutingService), ɵɵinject(UnitFormService), ɵɵinject(OrgUnitService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitItemService,
      factory: _UnitItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrentUnitService
  }, {
    type: RoutingService
  }, {
    type: UnitFormService
  }, {
    type: OrgUnitService
  }], null);
})();
var UnitDetailsComponent = class _UnitDetailsComponent {
  constructor(itemService, orgUnitService) {
    this.itemService = itemService;
    this.orgUnitService = orgUnitService;
    this.model$ = this.itemService.key$.pipe(switchMap((code) => this.itemService.load(code)), startWith({}));
    this.isInEditMode$ = this.itemService.isInEditMode$;
    this.isUpdatingUnitAllowed = this.orgUnitService ? this.orgUnitService.isUpdatingUnitAllowed() : true;
  }
  static {
    this.ɵfac = function UnitDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitDetailsComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(OrgUnitService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitDetailsComponent,
      selectors: [["cx-org-unit-details"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: UnitItemService
      }])],
      decls: 2,
      vars: 3,
      consts: [["i18nRoot", "orgUnit.details", 3, "cxFocus", "showHint", 4, "ngIf"], ["i18nRoot", "orgUnit.details", 3, "cxFocus", "showHint"], ["actions", "", "class", "link btn btn-link btn-sm edit", 3, "disabled", "routerLink", 4, "ngIf"], ["actions", "", "key", "uid", "i18nRoot", "orgUnit", 4, "ngIf"], ["info", "", "i18nRoot", "orgUnit", 3, "displayInfoConfig"], ["main", "", "cxOrgItemExists", "", 1, "details"], [1, "property"], [1, "value"], ["class", "property", 4, "ngIf"], ["main", "", 1, "link-list"], [4, "ngIf"], ["actions", "", 1, "link", "btn", "btn-link", "btn-sm", "edit", 3, "routerLink"], ["actions", "", "key", "uid", "i18nRoot", "orgUnit"], [1, "value", 3, "ariaLabel", "routerLink"], ["class", "link btn btn-link btn-sm", "routerLinkActive", "is-current", 3, "routerLink", 4, "ngIf"], ["routerLinkActive", "is-current", 1, "link", "btn", "btn-link", "btn-sm", 3, "routerLink"], ["routerLinkActive", "is-current", 1, "link", 3, "routerLink"]],
      template: function UnitDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UnitDetailsComponent_cx_org_card_0_Template, 28, 27, "cx-org-card", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.model$));
        }
      },
      dependencies: [NgIf, CardComponent, RouterLink, RouterLinkActive, ToggleStatusComponent, ItemExistsDirective, FocusDirective, DisableInfoComponent, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: ItemService,
        useExisting: UnitItemService
      }],
      host: {
        class: "content-wrapper"
      },
      standalone: false,
      template: `<cx-org-card
  *ngIf="model$ | async as model"
  i18nRoot="orgUnit.details"
  [cxFocus]="{ refreshFocus: model }"
  [showHint]="true"
>
  <a
    actions
    *ngIf="isUpdatingUnitAllowed"
    class="link btn btn-link btn-sm edit"
    [class.disabled]="!model.active || (isInEditMode$ | async)"
    [routerLink]="{ cxRoute: 'orgUnitEdit', params: model } | cxUrl"
  >
    {{ 'organization.edit' | cxTranslate }}
  </a>

  <cx-org-toggle-status
    actions
    key="uid"
    *ngIf="isUpdatingUnitAllowed"
    i18nRoot="orgUnit"
  ></cx-org-toggle-status>

  <cx-org-disable-info
    info
    i18nRoot="orgUnit"
    [displayInfoConfig]="{ disabledDisable: true }"
  >
  </cx-org-disable-info>

  <section main class="details" cxOrgItemExists>
    <div class="property">
      <label>{{ 'orgUnit.name' | cxTranslate }}</label>
      <span class="value">
        {{ model.name }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgUnit.uid' | cxTranslate }}</label>
      <span class="value">
        {{ model.uid }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgUnit.active' | cxTranslate }}</label>
      <span class="value" [class.is-active]="model.active">
        {{
          (model.active ? 'organization.enabled' : 'organization.disabled')
            | cxTranslate
        }}
      </span>
    </div>

    <div class="property" *ngIf="model.approvalProcess?.name">
      <label>{{ 'orgUnit.approvalProcess' | cxTranslate }}</label>
      <span class="value">
        {{ model.approvalProcess?.name }}
      </span>
    </div>

    <div class="property" *ngIf="model.parentOrgUnit">
      <label>{{ 'orgUnit.parentUnit' | cxTranslate }}</label>
      <a
        class="value"
        [ariaLabel]="
          model.parentOrgUnit?.name ?? ('orgUnit.parentUnit' | cxTranslate)
        "
        [routerLink]="
          {
            cxRoute: 'orgUnitDetails',
            params: model.parentOrgUnit,
          } | cxUrl
        "
      >
        {{ model.parentOrgUnit?.name }}
      </a>
    </div>
  </section>

  <section main class="link-list">
    <ng-container *ngIf="model.uid">
      <a
        class="link btn btn-link btn-sm"
        *ngIf="isUpdatingUnitAllowed"
        [routerLink]="{ cxRoute: 'orgUnitChildren', params: model } | cxUrl"
        routerLinkActive="is-current"
      >
        {{ 'orgUnit.links.units' | cxTranslate }}
      </a>
      <a
        class="link btn btn-link btn-sm"
        [routerLink]="{ cxRoute: 'orgUnitUserList', params: model } | cxUrl"
        routerLinkActive="is-current"
      >
        {{ 'orgUnit.links.users' | cxTranslate }}
      </a>
      <a
        class="link"
        [routerLink]="{ cxRoute: 'orgUnitApprovers', params: model } | cxUrl"
        routerLinkActive="is-current"
      >
        {{ 'orgUnit.links.approvers' | cxTranslate }}
      </a>
      <a
        class="link"
        [routerLink]="{ cxRoute: 'orgUnitAddressList', params: model } | cxUrl"
        routerLinkActive="is-current"
      >
        {{ 'orgUnit.links.shippingAddresses' | cxTranslate }}
      </a>
      <a
        class="link"
        [routerLink]="{ cxRoute: 'orgUnitCostCenters', params: model } | cxUrl"
        routerLinkActive="is-current"
      >
        {{ 'orgUnit.links.costCenters' | cxTranslate }}
      </a>
    </ng-container>
  </section>
</cx-org-card>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: OrgUnitService
  }], null);
})();
var UnitDetailsModule = class _UnitDetailsModule {
  static {
    this.ɵfac = function UnitDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitDetailsModule,
      declarations: [UnitDetailsComponent],
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, KeyboardFocusModule, DisableInfoModule],
      exports: [UnitDetailsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, KeyboardFocusModule, DisableInfoModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, KeyboardFocusModule, DisableInfoModule],
      declarations: [UnitDetailsComponent],
      exports: [UnitDetailsComponent]
    }]
  }], null, null);
})();
var UnitFormComponent = class _UnitFormComponent {
  constructor(itemService, unitService) {
    this.itemService = itemService;
    this.unitService = unitService;
    this.i18nRoot = "orgUnit";
    this.createChildUnit = false;
    this.form = this.itemService.getForm();
    this.units$ = this.itemService.unit$.pipe(tap((unit) => {
      this.form?.get("parentOrgUnit.uid")?.setValue(unit);
      if (this.createChildUnit) {
        this.form?.get("parentOrgUnit")?.disable();
      }
    }), switchMap(() => this.unitService.getActiveUnitList().pipe(map((units) => units?.filter((unit) => unit.id !== this.form?.value.uid)), tap((units) => {
      if (units && units.length === 1) {
        this.form?.get("parentOrgUnit.uid")?.setValue(units[0]?.id);
      }
    }))));
    this.approvalProcess$ = this.unitService.getApprovalProcesses().pipe(filter(isNotUndefined), filter((items) => items.length > 0));
  }
  ngOnInit() {
    this.unitService.loadList();
  }
  createUidWithName(name, code) {
    createCodeForEntityName(name, code);
  }
  static {
    this.ɵfac = function UnitFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitFormComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(OrgUnitService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitFormComponent,
      selectors: [["cx-org-unit-form"]],
      hostAttrs: [1, "content-wrapper"],
      inputs: {
        i18nRoot: "i18nRoot",
        createChildUnit: "createChildUnit"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: UnitItemService
      }, {
        provide: CurrentItemService,
        useExisting: CurrentUnitService
      }])],
      decls: 2,
      vars: 2,
      consts: [["parentOrgUnitNotes", ""], [3, "i18nRoot"], ["main", "", 3, "formGroup", 4, "ngIf"], ["main", "", 3, "formGroup"], [1, "label-content", "required"], ["type", "text", "required", "", "formControlName", "name", 1, "form-control", 3, "blur", "placeholder"], ["id", "nameError", 3, "translationParams", "control"], ["type", "text", "required", "", "formControlName", "uid", 1, "form-control", 3, "placeholder"], ["id", "uidError", 3, "translationParams", "control"], ["formGroupName", "approvalProcess", 1, "full-width"], ["formControlName", "code", "bindLabel", "name", "bindValue", "code", "appendTo", "cx-org-list", 3, "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y", 4, "cxFeature"], ["formControlName", "code", "bindLabel", "name", "bindValue", "code", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "items", "placeholder", 4, "cxFeature"], ["id", "codeError", 3, "translationParams", "control"], [4, "ngIf", "ngIfElse"], ["formControlName", "code", "bindLabel", "name", "bindValue", "code", "appendTo", "cx-org-list", 3, "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], ["formControlName", "code", "bindLabel", "name", "bindValue", "code", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "items", "placeholder"], ["formGroupName", "parentOrgUnit"], ["formControlName", "uid", "bindLabel", "name", "bindValue", "id", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y", 4, "cxFeature"], ["formControlName", "uid", "bindLabel", "name", "bindValue", "id", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder", 4, "cxFeature"], ["id", "parentUnitUidError", 3, "translationParams", "control"], ["formControlName", "uid", "bindLabel", "name", "bindValue", "id", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder", "cxNgSelectA11y"], ["formControlName", "uid", "bindLabel", "name", "bindValue", "id", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder"], [1, "notes-content"]],
      template: function UnitFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-form", 1);
          ɵɵtemplate(1, UnitFormComponent_ng_container_1_Template, 33, 42, "ng-container", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("i18nRoot", ctx.i18nRoot);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.form);
        }
      },
      dependencies: [NgIf, FormComponent, NgSelectComponent, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormGroupName, FormErrorsComponent, FeatureDirective, NgSelectA11yDirective, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ItemService,
        useExisting: UnitItemService
      }, {
        provide: CurrentItemService,
        useExisting: CurrentUnitService
      }],
      standalone: false,
      template: `<cx-org-form [i18nRoot]="i18nRoot">
  <ng-container *ngIf="form" [formGroup]="form" main>
    <cx-form-required-legend />
    <label>
      <span class="label-content required">
        <span>{{ 'orgUnit.name' | cxTranslate }}</span>
        <cx-form-required-asterisks />
      </span>
      <input
        type="text"
        class="form-control"
        required
        placeholder="{{ 'orgUnit.name' | cxTranslate }}"
        formControlName="name"
        (blur)="createUidWithName(form.get('name'), form.get('uid'))"
        [attr.aria-invalid]="
          form.get('name')?.touched && form.get('name')?.invalid
        "
        [attr.aria-errormessage]="'nameError'"
      />

      <cx-form-errors
        id="nameError"
        [translationParams]="{
          label: 'orgUnit.name' | cxTranslate,
        }"
        [control]="form.get('name')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required">
        <span>{{ 'orgUnit.uid' | cxTranslate }}</span>
        <cx-form-required-asterisks />
      </span>
      <input
        class="form-control"
        type="text"
        required
        placeholder="{{ 'orgUnit.uid' | cxTranslate }}"
        formControlName="uid"
        [attr.aria-invalid]="
          form.get('uid')?.touched && form.get('uid')?.invalid
        "
        [attr.aria-errormessage]="'uidError'"
      />

      <cx-form-errors
        id="uidError"
        [translationParams]="{
          label: 'orgUnit.uid' | cxTranslate,
        }"
        [control]="form.get('uid')"
      ></cx-form-errors>
    </label>

    <label formGroupName="approvalProcess" class="full-width">
      <span class="label-content required">{{
        'orgUnit.approvalProcess' | cxTranslate
      }}</span>
      <ng-select
        *cxFeature="'a11yApprovalProcessWithNoClearable'"
        formControlName="code"
        [searchable]="false"
        [clearable]="false"
        [items]="approvalProcess$ | async"
        bindLabel="name"
        bindValue="code"
        appendTo="cx-org-list"
        [placeholder]="'orgUnit.approvalProcess' | cxTranslate"
        [attr.aria-invalid]="
          form.get('code')?.touched && form.get('code')?.invalid
        "
        [attr.aria-errormessage]="'codeError'"
        [cxNgSelectA11y]="{}"
      >
      </ng-select>
      <ng-select
        *cxFeature="'!a11yApprovalProcessWithNoClearable'"
        [inputAttrs]="{ required: 'true' }"
        formControlName="code"
        [searchable]="false"
        [items]="approvalProcess$ | async"
        bindLabel="name"
        bindValue="code"
        appendTo="cx-org-list"
        [placeholder]="'orgUnit.approvalProcess' | cxTranslate"
        [attr.aria-invalid]="
          form.get('code')?.touched && form.get('code')?.invalid
        "
        [attr.aria-errormessage]="'codeError'"
      >
      </ng-select>

      <cx-form-errors
        id="codeError"
        [translationParams]="{
          label: 'orgUnit.approvalProcess' | cxTranslate,
        }"
        [control]="form.get('approvalProcess.code')"
      ></cx-form-errors>
    </label>
    <ng-container *ngIf="form.get('parentOrgUnit'); else parentOrgUnitNotes">
      <label formGroupName="parentOrgUnit">
        <span class="label-content required">
          {{ 'orgUnit.form.parentOrgUnit' | cxTranslate }}
          <cx-form-required-asterisks />
        </span>
        <ng-select
          *cxFeature="'a11yApprovalProcessWithNoClearable'"
          [inputAttrs]="{ required: 'true' }"
          formControlName="uid"
          [searchable]="true"
          [clearable]="false"
          [items]="(units$ | async) ?? null"
          bindLabel="name"
          bindValue="id"
          appendTo="cx-org-list"
          [placeholder]="'orgUnit.form.parentOrgUnit' | cxTranslate"
          [cxNgSelectA11y]="{}"
          [attr.aria-invalid]="
            form.get('uid')?.touched && form.get('uid')?.invalid
          "
          [attr.aria-errormessage]="'codeError'"
        >
        </ng-select>
        <ng-select
          *cxFeature="'!a11yApprovalProcessWithNoClearable'"
          [inputAttrs]="{ required: 'true' }"
          formControlName="uid"
          [searchable]="true"
          [clearable]="false"
          [items]="(units$ | async) ?? null"
          bindLabel="name"
          bindValue="id"
          appendTo="cx-org-list"
          [placeholder]="'orgUnit.form.parentOrgUnit' | cxTranslate"
          [attr.aria-invalid]="
            form.get('uid')?.touched && form.get('uid')?.invalid
          "
          [attr.aria-errormessage]="'parentUnitUidError'"
        >
        </ng-select>

        <cx-form-errors
          id="parentUnitUidError"
          [translationParams]="{
            label: 'orgUnit.form.parentOrgUnit' | cxTranslate,
          }"
          [control]="form.get('parentOrgUnit.uid')"
        ></cx-form-errors>
      </label>
    </ng-container>
    <ng-template #parentOrgUnitNotes>
      <span class="notes-content">{{
        'orgUnit.form.parentOrgUnitNotes' | cxTranslate
      }}</span>
    </ng-template>
  </ng-container>
</cx-org-form>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: OrgUnitService
  }], {
    i18nRoot: [{
      type: Input
    }],
    createChildUnit: [{
      type: Input
    }]
  });
})();
var UnitFormModule = class _UnitFormModule {
  static {
    this.ɵfac = function UnitFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitFormModule,
      declarations: [UnitFormComponent],
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, ItemActiveModule, FeaturesConfigModule, NgSelectA11yModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [UnitFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, ItemActiveModule, FeaturesConfigModule, NgSelectA11yModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, ItemActiveModule, FeaturesConfigModule, NgSelectA11yModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [UnitFormComponent],
      exports: [UnitFormComponent]
    }]
  }], null, null);
})();
var CurrentUnitAddressService = class _CurrentUnitAddressService extends CurrentItemService {
  constructor(routingService, unitService) {
    super(routingService);
    this.routingService = routingService;
    this.unitService = unitService;
    this.item$ = this.b2bUnit$.pipe(filter((unitUid) => Boolean(unitUid)), switchMap((unitUid) => this.key$.pipe(switchMap((code) => this.getItem(unitUid, code)))));
  }
  getDetailsRoute() {
    return "orgUnitAddressDetails";
  }
  getParamKey() {
    return ROUTE_PARAMS.addressCode;
  }
  getItem(unitUid, addressId) {
    return addressId ? this.unitService.getAddress(unitUid, addressId) : of(void 0);
  }
  getError(code) {
    return this.unitService.getErrorState(code);
  }
  static {
    this.ɵfac = function CurrentUnitAddressService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentUnitAddressService)(ɵɵinject(RoutingService), ɵɵinject(OrgUnitService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrentUnitAddressService,
      factory: _CurrentUnitAddressService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUnitAddressService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: OrgUnitService
  }], null);
})();
var UnitAddressFormService = class _UnitAddressFormService extends FormService {
  constructor(userAddressService, userProfileFacade) {
    super();
    this.userAddressService = userAddressService;
    this.userProfileFacade = userProfileFacade;
  }
  build() {
    const form = new UntypedFormGroup({});
    form.setControl("id", new UntypedFormControl(""));
    form.setControl("titleCode", new UntypedFormControl(""));
    form.setControl("firstName", new UntypedFormControl("", Validators.required));
    form.setControl("lastName", new UntypedFormControl("", Validators.required));
    form.setControl("line1", new UntypedFormControl("", Validators.required));
    form.setControl("line2", new UntypedFormControl(""));
    form.setControl("town", new UntypedFormControl("", Validators.required));
    form.setControl("country", new UntypedFormGroup({
      isocode: new UntypedFormControl(null, Validators.required)
    }));
    form.setControl("region", new UntypedFormGroup({
      isocode: new UntypedFormControl(null, Validators.required)
    }));
    form.setControl("postalCode", new UntypedFormControl("", Validators.required));
    form.setControl("phone", new UntypedFormControl(""));
    form.setControl("cellphone", new UntypedFormControl(""));
    this.form = form;
  }
  getCountries() {
    return this.userAddressService.getDeliveryCountries().pipe(tap((countries) => {
      if (Object.keys(countries).length === 0) {
        this.userAddressService.loadDeliveryCountries();
      }
    }));
  }
  getTitles() {
    return this.userProfileFacade.getTitles();
  }
  getRegions() {
    let selectedCountryCode = this.form?.get("country.isocode")?.value;
    let newCountryCode;
    return this.getForm()?.get("country.isocode")?.valueChanges.pipe(filter((countryIsoCode) => Boolean(countryIsoCode)), switchMap((countryIsoCode) => {
      newCountryCode = countryIsoCode;
      return this.userAddressService.getRegions(countryIsoCode);
    }), tap((regions) => {
      const regionControl = this.form?.get("region.isocode");
      if (!regions || regions.length === 0) {
        regionControl?.disable();
      } else {
        regionControl?.enable();
      }
      if (selectedCountryCode && newCountryCode !== selectedCountryCode) {
        regionControl?.reset();
      }
      selectedCountryCode = newCountryCode;
    })) ?? of([]);
  }
  static {
    this.ɵfac = function UnitAddressFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAddressFormService)(ɵɵinject(UserAddressService), ɵɵinject(UserProfileFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitAddressFormService,
      factory: _UnitAddressFormService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAddressFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserAddressService
  }, {
    type: UserProfileFacade
  }], null);
})();
var UnitAddressItemService = class _UnitAddressItemService extends ItemService {
  constructor(currentItemService, routingService, formService, unitService) {
    super(currentItemService, routingService, formService);
    this.currentItemService = currentItemService;
    this.routingService = routingService;
    this.formService = formService;
    this.unitService = unitService;
    this.featureConfigService = inject(FeatureConfigService, {
      optional: true
    });
    this.unitRouteParam$ = this.routingService.getParams().pipe(map((params) => params[ROUTE_PARAMS.unitCode]), distinctUntilChanged());
  }
  load(unitUid, addressId) {
    return this.unitService.getAddress(unitUid, addressId).pipe(filter(isNotUndefined));
  }
  update(addressCode, address) {
    this.unitRouteParam$.pipe(first()).subscribe((unitCode) => {
      this.unitService.updateAddress(unitCode, addressCode, address);
    });
    return this.unitService.getAddressLoadingStatus(addressCode);
  }
  create(value) {
    if (this.featureConfigService?.isEnabled("fixMyCompanyUnitAddressCreation")) {
      value.id = "new";
    }
    this.unitRouteParam$.pipe(first()).subscribe((unitCode) => this.unitService.createAddress(unitCode, value));
    return this.unitService.getAddressLoadingStatus(value.id ?? "");
  }
  getDetailsRoute() {
    return this.currentItemService.getDetailsRoute();
  }
  delete(addressId, unitUid) {
    this.launchList();
    this.unitService.deleteAddress(unitUid, addressId);
    return this.unitService.getAddressLoadingStatus(addressId);
  }
  launchDetails(item) {
    if (!item.id) {
      this.launchList();
    } else {
      this.unitRouteParam$.pipe(first()).subscribe((unitCode) => {
        this.routingService.go({
          cxRoute: this.getDetailsRoute(),
          params: __spreadProps(__spreadValues({}, item), {
            uid: unitCode
          })
        });
      });
    }
  }
  launchList() {
    this.unitRouteParam$.pipe(first()).subscribe((unitCode) => {
      this.routingService.go({
        cxRoute: "orgUnitAddressList",
        params: {
          uid: unitCode
        }
      });
    });
  }
  static {
    this.ɵfac = function UnitAddressItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAddressItemService)(ɵɵinject(CurrentUnitAddressService), ɵɵinject(RoutingService), ɵɵinject(UnitAddressFormService), ɵɵinject(OrgUnitService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitAddressItemService,
      factory: _UnitAddressItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAddressItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrentUnitAddressService
  }, {
    type: RoutingService
  }, {
    type: UnitAddressFormService
  }, {
    type: OrgUnitService
  }], null);
})();
var UnitAddressDetailsComponent = class _UnitAddressDetailsComponent {
  getCountry(isoCode) {
    return this.userAddressService.getDeliveryCountries().pipe(tap((countries) => {
      if (Object.keys(countries).length === 0) {
        this.userAddressService.loadDeliveryCountries();
      }
    }), map((countries) => countries.find((country) => country.isocode === isoCode)));
  }
  constructor(itemService, currentUnitService, userAddressService) {
    this.itemService = itemService;
    this.currentUnitService = currentUnitService;
    this.userAddressService = userAddressService;
    this.unit$ = this.currentUnitService.item$;
    this.model$ = this.itemService.key$.pipe(withLatestFrom(this.unit$), switchMap(([code, unit]) => this.itemService.load(unit?.uid, code)), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  static {
    this.ɵfac = function UnitAddressDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAddressDetailsComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(CurrentUnitService), ɵɵdirectiveInject(UserAddressService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitAddressDetailsComponent,
      selectors: [["cx-org-unit-address-details"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: UnitAddressItemService
      }])],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["i18nRoot", "orgUnitAddress.details", 3, "subtitle", "cxFocus", 4, "ngIf"], ["i18nRoot", "orgUnitAddress.details", 3, "subtitle", "cxFocus"], ["actions", "", "routerLink", "edit", 1, "link", "btn", "btn-link", "btn-sm"], ["actions", "", "key", "id", "i18nRoot", "orgUnitAddress", 3, "additionalParam"], ["main", "", 1, "details"], [1, "property"], [1, "value"], [3, "routerLink"], [1, "property", "full-width"]],
      template: function UnitAddressDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UnitAddressDetailsComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.unit$));
        }
      },
      dependencies: [NgIf, CardComponent, RouterLink, DeleteItemComponent, FocusDirective, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAddressDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-address-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ItemService,
        useExisting: UnitAddressItemService
      }],
      standalone: false,
      template: `<ng-container *ngIf="unit$ | async as unit">
  <cx-org-card
    *ngIf="model$ | async as model"
    i18nRoot="orgUnitAddress.details"
    [subtitle]="'orgUnitAddress.details.subtitle' | cxTranslate: { item: unit }"
    [cxFocus]="{ refreshFocus: model }"
  >
    <a class="link btn btn-link btn-sm" actions routerLink="edit">
      {{ 'organization.edit' | cxTranslate }}
    </a>

    <cx-org-delete-item
      actions
      key="id"
      [additionalParam]="unit.uid"
      i18nRoot="orgUnitAddress"
    ></cx-org-delete-item>

    <section main class="details">
      <div class="property">
        <label>{{ 'orgUnit.name' | cxTranslate }}</label>
        <span class="value"> {{ model.firstName }} {{ model.lastName }} </span>
      </div>

      <div class="property">
        <label>{{ 'orgUnit.unit' | cxTranslate }}</label>
        <span class="value">
          <a
            [routerLink]="
              {
                cxRoute: 'orgUnitDetails',
                params: unit,
              } | cxUrl
            "
          >
            {{ unit.name }}
          </a>
        </span>
      </div>

      <div class="property full-width">
        <label>{{ 'orgUnitAddress.formattedAddress' | cxTranslate }}</label>
        <span class="value">
          {{ model.formattedAddress }}
        </span>
      </div>

      <div class="property">
        <label>{{ 'orgUnitAddress.country' | cxTranslate }}</label>
        <span class="value">
          {{ (getCountry(model.country?.isocode) | async)?.name }}
        </span>
      </div>
    </section>
  </cx-org-card>
</ng-container>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: CurrentUnitService
  }, {
    type: UserAddressService
  }], null);
})();
var UnitAddressDetailsModule = class _UnitAddressDetailsModule {
  static {
    this.ɵfac = function UnitAddressDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAddressDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitAddressDetailsModule,
      declarations: [UnitAddressDetailsComponent],
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, DeleteItemModule, KeyboardFocusModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, DeleteItemModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAddressDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, DeleteItemModule, KeyboardFocusModule],
      declarations: [UnitAddressDetailsComponent]
    }]
  }], null, null);
})();
var LinkCellComponent = class _LinkCellComponent extends CellComponent {
  constructor(outlet, itemService) {
    super(outlet);
    this.outlet = outlet;
    this.itemService = itemService;
    this.unitKey$ = this.itemService.key$;
  }
  get tabIndex() {
    return 0;
  }
  getRouterModel(uid) {
    return __spreadProps(__spreadValues({}, this.outlet.context), {
      uid
    });
  }
  static {
    this.ɵfac = function LinkCellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LinkCellComponent)(ɵɵdirectiveInject(OutletContextData), ɵɵdirectiveInject(ItemService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LinkCellComponent,
      selectors: [["cx-org-link-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 3,
      consts: [["text", ""], [4, "ngIf"], [3, "routerLink", "tabIndex", 4, "ngIf", "ngIfElse"], [3, "routerLink", "tabIndex"], [4, "ngTemplateOutlet"], [1, "text", 3, "title"]],
      template: function LinkCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, LinkCellComponent_ng_container_0_Template, 2, 2, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, LinkCellComponent_ng_template_2_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.unitKey$));
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, RouterLink, AsyncPipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinkCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-link-cell",
      template: `
    <ng-container *ngIf="unitKey$ | async as uid">
      <a
        *ngIf="linkable; else text"
        [routerLink]="{ cxRoute: route, params: getRouterModel(uid) } | cxUrl"
        [tabIndex]="tabIndex"
      >
        <ng-container *ngTemplateOutlet="text"></ng-container>
      </a>
    </ng-container>

    <ng-template #text>
      <span class="text" title="{{ property }}">{{ property }}</span>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false
    }]
  }], () => [{
    type: OutletContextData
  }, {
    type: ItemService
  }], null);
})();
var UnitAddressListService = class _UnitAddressListService extends SubListService {
  constructor(tableService, orgUnitService) {
    super(tableService);
    this.tableService = tableService;
    this.orgUnitService = orgUnitService;
    this.tableType = OrganizationTableType.UNIT_ADDRESS;
    this._domainType = OrganizationTableType.UNIT_ADDRESS;
  }
  load(_pagination, code) {
    return this.orgUnitService.getAddresses(code);
  }
  static {
    this.ɵfac = function UnitAddressListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAddressListService)(ɵɵinject(TableService), ɵɵinject(OrgUnitService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitAddressListService,
      factory: _UnitAddressListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAddressListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: OrgUnitService
  }], null);
})();
var UnitAddressListComponent = class _UnitAddressListComponent {
  constructor() {
    this.routerKey = ROUTE_PARAMS.addressCode;
  }
  static {
    this.ɵfac = function UnitAddressListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAddressListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitAddressListComponent,
      selectors: [["cx-org-unit-address-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UnitAddressListService
      }])],
      decls: 4,
      vars: 5,
      consts: [["key", "id", 1, "has-nested-view", 3, "routerKey", "showHint"], ["actions", "", "routerLink", "create", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UnitAddressListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list", 0)(1, "a", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("routerKey", ctx.routerKey)("showHint", true);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "organization.create"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAddressListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-address-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UnitAddressListService
      }],
      standalone: false,
      template: `<cx-org-sub-list
  key="id"
  [routerKey]="routerKey"
  class="has-nested-view"
  [showHint]="true"
>
  <a actions class="link btn btn-link btn-sm" routerLink="create">
    {{ 'organization.create' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UnitAddressListModule = class _UnitAddressListModule {
  static {
    this.ɵfac = function UnitAddressListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAddressListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitAddressListModule,
      declarations: [UnitAddressListComponent, LinkCellComponent],
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, SubListModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, SubListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAddressListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, SubListModule],
      declarations: [UnitAddressListComponent, LinkCellComponent]
    }]
  }], null, null);
})();
var UnitAddressFormComponent = class _UnitAddressFormComponent {
  constructor(itemService, formService, currentUnitService) {
    this.itemService = itemService;
    this.formService = formService;
    this.currentUnitService = currentUnitService;
    this.form = this.itemService.getForm();
    this.key$ = this.itemService.key$;
    this.countries$ = this.formService.getCountries();
    this.titles$ = this.formService.getTitles();
    this.regions$ = this.formService.getRegions();
    this.unit$ = this.currentUnitService.item$;
  }
  /* eslint @angular-eslint/no-empty-lifecycle-method: 1 */
  ngOnInit() {
  }
  static {
    this.ɵfac = function UnitAddressFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAddressFormComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(UnitAddressFormService), ɵɵdirectiveInject(CurrentUnitService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitAddressFormComponent,
      selectors: [["cx-org-unit-address-form"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: UnitAddressItemService
      }])],
      decls: 5,
      vars: 12,
      consts: [["i18nRoot", "orgUnitAddress", 3, "animateBack", "subtitle"], ["main", "", 3, "formGroup", 4, "ngIf"], ["main", "", 3, "formGroup"], ["formGroupName", "country"], [1, "label-content", "required"], ["formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", "appendTo", "cx-org-list", 1, "country-select", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder"], [3, "translationParams", "control"], ["formControlName", "titleCode", "bindLabel", "name", "bindValue", "code", "appendTo", "cx-org-list", 3, "searchable", "clearable", "items", "placeholder"], ["required", "true", "type", "text", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], ["id", "firstNameError", 3, "translationParams", "control"], ["required", "true", "type", "text", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["id", "lastNameError", 3, "translationParams", "control"], [1, "full-width"], ["required", "true", "type", "text", "formControlName", "line1", 1, "form-control", 3, "placeholder"], ["id", "line1Error", 3, "translationParams", "control"], [1, "label-content"], ["type", "text", "formControlName", "line2", 1, "form-control", 3, "placeholder"], ["type", "text", "formControlName", "phone", 1, "form-control", 3, "placeholder"], ["required", "true", "type", "text", "formControlName", "town", 1, "form-control", 3, "placeholder"], ["id", "townError", 3, "translationParams", "control"], ["required", "true", "type", "text", "formControlName", "postalCode", 1, "form-control", 3, "placeholder"], ["id", "postalCodeError", 3, "translationParams", "control"], [4, "ngIf"], ["class", "full-width", "formGroupName", "region", 4, "ngIf"], ["formGroupName", "region", 1, "full-width"], ["formControlName", "isocode", "bindLabel", "name", "bindValue", "isocode", "appendTo", "cx-org-list", 1, "region-select", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder"]],
      template: function UnitAddressFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-form", 0);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
          ɵɵpipe(3, "cxTranslate");
          ɵɵtemplate(4, UnitAddressFormComponent_ng_container_4_Template, 79, 116, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("animateBack", !ɵɵpipeBind1(1, 3, ctx.key$))("subtitle", ɵɵpipeBind2(3, 7, "orgUnitAddress.details.subtitle", ɵɵpureFunction1(10, _c4, ɵɵpipeBind1(2, 5, ctx.unit$))));
          ɵɵadvance(4);
          ɵɵproperty("ngIf", ctx.form);
        }
      },
      dependencies: [NgIf, FormComponent, NgSelectComponent, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormGroupName, FormErrorsComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAddressFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-address-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ItemService,
        useExisting: UnitAddressItemService
      }],
      standalone: false,
      template: `<cx-org-form
  i18nRoot="orgUnitAddress"
  [animateBack]="!(key$ | async)"
  [subtitle]="
    'orgUnitAddress.details.subtitle' | cxTranslate: { item: (unit$ | async) }
  "
>
  <ng-container *ngIf="form" [formGroup]="form" main>
    <cx-form-required-legend />
    <label formGroupName="country">
      <span class="label-content required"
        >{{ 'orgUnitAddress.country' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <ng-select
        [inputAttrs]="{ required: 'true' }"
        class="country-select"
        formControlName="isocode"
        [searchable]="true"
        [clearable]="false"
        [items]="countries$ | async"
        bindLabel="name"
        bindValue="isocode"
        placeholder="{{ 'orgUnitAddress.selectOne' | cxTranslate }}"
        appendTo="cx-org-list"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{ label: 'orgUnitAddress.country' | cxTranslate }"
        [control]="form.get('country.isocode')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required">{{
        'orgUnitAddress.titles' | cxTranslate
      }}</span>
      <ng-select
        formControlName="titleCode"
        [searchable]="false"
        [clearable]="false"
        [items]="titles$ | async"
        bindLabel="name"
        bindValue="code"
        placeholder="{{ 'orgUnitAddress.selectOne' | cxTranslate }}"
        appendTo="cx-org-list"
      >
      </ng-select>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'orgUnitAddress.firstName' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        class="form-control"
        type="text"
        placeholder="{{ 'orgUnitAddress.firstName' | cxTranslate }}"
        formControlName="firstName"
        [attr.aria-invalid]="
          form.get('firstName')?.touched && form.get('firstName')?.invalid
        "
        [attr.aria-errormessage]="'firstNameError'"
      />

      <cx-form-errors
        id="firstNameError"
        [translationParams]="{
          label: 'orgUnitAddress.firstName' | cxTranslate,
        }"
        [control]="form.get('firstName')"
      ></cx-form-errors>
    </label>
    <label>
      <span class="label-content required"
        >{{ 'orgUnitAddress.lastName' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        type="text"
        class="form-control"
        placeholder="{{ 'orgUnitAddress.lastName' | cxTranslate }}"
        formControlName="lastName"
        [attr.aria-invalid]="
          form.get('lastName')?.touched && form.get('lastName')?.invalid
        "
        [attr.aria-errormessage]="'lastNameError'"
      />

      <cx-form-errors
        id="lastNameError"
        [translationParams]="{ label: 'orgUnitAddress.lastName' | cxTranslate }"
        [control]="form.get('lastName')"
      ></cx-form-errors>
    </label>

    <label class="full-width">
      <span class="label-content required"
        >{{ 'orgUnitAddress.address1' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        type="text"
        class="form-control"
        placeholder="{{ 'orgUnitAddress.streetAddress' | cxTranslate }}"
        formControlName="line1"
        [attr.aria-invalid]="
          form.get('line1')?.touched && form.get('line1')?.invalid
        "
        [attr.aria-errormessage]="'line1Error'"
      />

      <cx-form-errors
        id="line1Error"
        [translationParams]="{ label: 'orgUnitAddress.address1' | cxTranslate }"
        [control]="form.get('line1')"
      ></cx-form-errors>
    </label>

    <label class="full-width">
      <span class="label-content">{{
        'orgUnitAddress.address2' | cxTranslate
      }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="{{ 'orgUnitAddress.aptSuite' | cxTranslate }}"
        formControlName="line2"
      />
    </label>

    <label class="full-width">
      <span class="label-content">{{
        'orgUnitAddress.phoneNumber' | cxTranslate
      }}</span>
      <input
        type="text"
        class="form-control"
        placeholder="{{ 'orgUnitAddress.phoneNumber' | cxTranslate }}"
        formControlName="phone"
      />
    </label>

    <label>
      <span class="label-content required"
        >{{ 'orgUnitAddress.city' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        type="text"
        class="form-control"
        placeholder="{{ 'orgUnitAddress.city' | cxTranslate }}"
        formControlName="town"
        [attr.aria-invalid]="
          form.get('town')?.touched && form.get('town')?.invalid
        "
        [attr.aria-errormessage]="'townError'"
      />

      <cx-form-errors
        id="townError"
        [translationParams]="{ label: 'orgUnitAddress.city' | cxTranslate }"
        [control]="form.get('town')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'orgUnitAddress.zipCode' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        required="true"
        type="text"
        class="form-control"
        placeholder="{{ 'orgUnitAddress.zipCode' | cxTranslate }}"
        formControlName="postalCode"
        [attr.aria-invalid]="
          form.get('postalCode')?.touched && form.get('postalCode')?.invalid
        "
        [attr.aria-errormessage]="'postalCodeError'"
      />

      <cx-form-errors
        id="postalCodeError"
        [translationParams]="{ label: 'orgUnitAddress.zipCode' | cxTranslate }"
        [control]="form.get('postalCode')"
      ></cx-form-errors>
    </label>

    <label></label>

    <ng-container *ngIf="regions$ | async as regions">
      <label
        class="full-width"
        formGroupName="region"
        *ngIf="regions.length > 0"
      >
        <span class="label-content required"
          >{{ 'orgUnitAddress.state' | cxTranslate }}
          <cx-form-required-asterisks />
        </span>
        <ng-select
          [inputAttrs]="{ required: 'true' }"
          class="region-select"
          formControlName="isocode"
          [searchable]="true"
          [clearable]="false"
          [items]="regions"
          bindLabel="name"
          bindValue="isocode"
          placeholder="{{ 'orgUnitAddress.selectOne' | cxTranslate }}"
          appendTo="cx-org-list"
        >
        </ng-select>

        <cx-form-errors
          [translationParams]="{ label: 'orgUnitAddress.state' | cxTranslate }"
          [control]="form.get('region.isocode')"
        ></cx-form-errors>
      </label>
    </ng-container>
  </ng-container>
</cx-org-form>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: UnitAddressFormService
  }, {
    type: CurrentUnitService
  }], null);
})();
var UnitAddressFormModule = class _UnitAddressFormModule {
  static {
    this.ɵfac = function UnitAddressFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAddressFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitAddressFormModule,
      declarations: [UnitAddressFormComponent],
      imports: [CommonModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAddressFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [UnitAddressFormComponent]
    }]
  }], null, null);
})();
var UnitAddressModule = class _UnitAddressModule {
  static {
    this.ɵfac = function UnitAddressModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAddressModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitAddressModule,
      imports: [UnitAddressListModule, UnitAddressDetailsModule, UnitAddressFormModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [UnitAddressListModule, UnitAddressDetailsModule, UnitAddressFormModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAddressModule, [{
    type: NgModule,
    args: [{
      imports: [UnitAddressListModule, UnitAddressDetailsModule, UnitAddressFormModule]
    }]
  }], null, null);
})();
var UnitApproverListService = class _UnitApproverListService extends SubListService {
  constructor(tableService, unitService, userService) {
    super(tableService);
    this.tableService = tableService;
    this.unitService = unitService;
    this.userService = userService;
    this.tableType = OrganizationTableType.UNIT_APPROVERS;
    this._domainType = OrganizationTableType.USER;
  }
  load(pagination2, code) {
    return this.unitService.getUsers(code, B2BUserRole.APPROVER, pagination2);
  }
  /**
   * @override
   * Assign budget to the cost center.
   */
  assign(unitId, customerId) {
    this.unitService.assignApprover(unitId, customerId, B2BUserRole.APPROVER);
    return this.userService.getLoadingStatus(customerId);
  }
  /**
   * @override
   * Unassign the budget from the cost center.
   */
  unassign(unitId, customerId) {
    this.unitService.unassignApprover(unitId, customerId, B2BUserRole.APPROVER);
    return this.userService.getLoadingStatus(customerId);
  }
  static {
    this.ɵfac = function UnitApproverListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitApproverListService)(ɵɵinject(TableService), ɵɵinject(OrgUnitService), ɵɵinject(B2BUserService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitApproverListService,
      factory: _UnitApproverListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitApproverListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: OrgUnitService
  }, {
    type: B2BUserService
  }], null);
})();
var UnitAssignedApproverListService = class _UnitAssignedApproverListService extends UnitApproverListService {
  constructor() {
    super(...arguments);
    this.tableType = OrganizationTableType.UNIT_ASSIGNED_APPROVERS;
  }
  load(pagination2, code) {
    this.unitService.clearAssignedUsersList(code, B2BUserRole.APPROVER, pagination2);
    return super.load(pagination2, code).pipe(map((users) => this.filterSelected(users)));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUnitAssignedApproverListService_BaseFactory;
      return function UnitAssignedApproverListService_Factory(__ngFactoryType__) {
        return (ɵUnitAssignedApproverListService_BaseFactory || (ɵUnitAssignedApproverListService_BaseFactory = ɵɵgetInheritedFactory(_UnitAssignedApproverListService)))(__ngFactoryType__ || _UnitAssignedApproverListService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitAssignedApproverListService,
      factory: _UnitAssignedApproverListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAssignedApproverListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UnitAssignedApproverListComponent = class _UnitAssignedApproverListComponent {
  static {
    this.ɵfac = function UnitAssignedApproverListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAssignedApproverListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitAssignedApproverListComponent,
      selectors: [["cx-org-unit-assigned-approver-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UnitAssignedApproverListService
      }])],
      decls: 4,
      vars: 4,
      consts: [[3, "showHint"], ["actions", "", "routerLink", "assign", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UnitAssignedApproverListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list", 0)(1, "a", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("showHint", true);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "organization.assign"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAssignedApproverListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-assigned-approver-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UnitAssignedApproverListService
      }],
      standalone: false,
      template: `<cx-org-sub-list [showHint]="true">
  <a actions class="link btn btn-link btn-sm" routerLink="assign">
    {{ 'organization.assign' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UnitApproverListComponent = class _UnitApproverListComponent {
  static {
    this.ɵfac = function UnitApproverListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitApproverListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitApproverListComponent,
      selectors: [["cx-org-unit-approver-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UnitApproverListService
      }])],
      decls: 4,
      vars: 4,
      consts: [[3, "previous"], ["actions", "", "routerLink", "../", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UnitApproverListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list", 0)(1, "a", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("previous", false);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "organization.done"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitApproverListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-approver-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UnitApproverListService
      }],
      standalone: false,
      template: `<cx-org-sub-list [previous]="false">
  <a actions class="link btn btn-link btn-sm" routerLink="../">
    {{ 'organization.done' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UnitApproverListModule = class _UnitApproverListModule {
  static {
    this.ɵfac = function UnitApproverListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitApproverListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitApproverListModule,
      declarations: [UnitApproverListComponent, UnitAssignedApproverListComponent],
      imports: [I18nModule, RouterModule, SubListModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [I18nModule, RouterModule, SubListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitApproverListModule, [{
    type: NgModule,
    args: [{
      imports: [I18nModule, RouterModule, SubListModule],
      declarations: [UnitApproverListComponent, UnitAssignedApproverListComponent]
    }]
  }], null, null);
})();
var UnitChildrenService = class _UnitChildrenService extends SubListService {
  constructor(tableService, orgUnitService) {
    super(tableService);
    this.tableService = tableService;
    this.orgUnitService = orgUnitService;
    this.tableType = OrganizationTableType.UNIT_CHILDREN;
    this._domainType = OrganizationTableType.UNIT;
  }
  // method to be adjusted for proper children list when ready
  load(_pagination, code) {
    return this.orgUnitService.getChildUnits(code);
  }
  static {
    this.ɵfac = function UnitChildrenService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitChildrenService)(ɵɵinject(TableService), ɵɵinject(OrgUnitService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitChildrenService,
      factory: _UnitChildrenService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitChildrenService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: OrgUnitService
  }], null);
})();
var UnitChildrenComponent = class _UnitChildrenComponent {
  constructor(currentUnitService) {
    this.currentUnitService = currentUnitService;
    this.unit$ = this.currentUnitService ? this.currentUnitService.item$ : of({
      active: true
    });
  }
  static {
    this.ɵfac = function UnitChildrenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitChildrenComponent)(ɵɵdirectiveInject(CurrentUnitService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitChildrenComponent,
      selectors: [["cx-org-unit-children"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UnitChildrenService
      }])],
      decls: 6,
      vars: 10,
      consts: [[3, "showHint"], ["actions", "", "routerLink", "create", 1, "link", "btn", "btn-link", "btn-sm"], ["info", "", "i18nRoot", "orgUnitChildren", 3, "displayInfoConfig"]],
      template: function UnitChildrenComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list", 0)(1, "a", 1);
          ɵɵpipe(2, "async");
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelement(5, "cx-org-disable-info", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_1_0;
          ɵɵproperty("showHint", true);
          ɵɵadvance();
          ɵɵclassProp("disabled", !((tmp_1_0 = ɵɵpipeBind1(2, 5, ctx.unit$)) == null ? null : tmp_1_0.active));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "organization.create"), " ");
          ɵɵadvance(2);
          ɵɵproperty("displayInfoConfig", ɵɵpureFunction0(9, _c43));
        }
      },
      dependencies: [RouterLink, SubListComponent, DisableInfoComponent, TranslatePipe, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitChildrenComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-children",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UnitChildrenService
      }],
      standalone: false,
      template: `<cx-org-sub-list [showHint]="true">
  <a
    actions
    class="link btn btn-link btn-sm"
    routerLink="create"
    [class.disabled]="!(unit$ | async)?.active"
  >
    {{ 'organization.create' | cxTranslate }}
  </a>
  <cx-org-disable-info
    info
    i18nRoot="orgUnitChildren"
    [displayInfoConfig]="{
      disabledCreate: true,
      disabledEnable: false,
      disabledEdit: false,
    }"
  >
  </cx-org-disable-info>
</cx-org-sub-list>
`
    }]
  }], () => [{
    type: CurrentUnitService
  }], null);
})();
var UnitChildrenModule = class _UnitChildrenModule {
  static {
    this.ɵfac = function UnitChildrenModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitChildrenModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitChildrenModule,
      declarations: [UnitChildrenComponent],
      imports: [ListModule, I18nModule, RouterModule, SubListModule, CommonModule, DisableInfoModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ListModule, I18nModule, RouterModule, SubListModule, CommonModule, DisableInfoModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitChildrenModule, [{
    type: NgModule,
    args: [{
      imports: [ListModule, I18nModule, RouterModule, SubListModule, CommonModule, DisableInfoModule],
      declarations: [UnitChildrenComponent]
    }]
  }], null, null);
})();
var UnitCostCenterListService = class _UnitCostCenterListService extends SubListService {
  constructor(tableService, unitService) {
    super(tableService);
    this.tableService = tableService;
    this.unitService = unitService;
    this.tableType = OrganizationTableType.UNIT_COST_CENTERS;
    this._domainType = OrganizationTableType.COST_CENTER;
  }
  load(_pagination, code) {
    return this.unitService.getCostCenters(code);
  }
  static {
    this.ɵfac = function UnitCostCenterListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitCostCenterListService)(ɵɵinject(TableService), ɵɵinject(OrgUnitService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitCostCenterListService,
      factory: _UnitCostCenterListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitCostCenterListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: OrgUnitService
  }], null);
})();
var UnitCostCenterListComponent = class _UnitCostCenterListComponent {
  constructor(currentUnitService) {
    this.currentUnitService = currentUnitService;
    this.unit$ = this.currentUnitService ? this.currentUnitService.item$ : of({
      active: true
    });
  }
  static {
    this.ɵfac = function UnitCostCenterListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitCostCenterListComponent)(ɵɵdirectiveInject(CurrentUnitService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitCostCenterListComponent,
      selectors: [["cx-org-unit-cost-centers"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UnitCostCenterListService
      }])],
      decls: 6,
      vars: 10,
      consts: [[3, "showHint"], ["actions", "", "routerLink", "create", 1, "link", "btn", "btn-link", "btn-sm"], ["info", "", "i18nRoot", "orgUnitCostCenters", 3, "displayInfoConfig"]],
      template: function UnitCostCenterListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list", 0)(1, "a", 1);
          ɵɵpipe(2, "async");
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelement(5, "cx-org-disable-info", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_1_0;
          ɵɵproperty("showHint", true);
          ɵɵadvance();
          ɵɵclassProp("disabled", !((tmp_1_0 = ɵɵpipeBind1(2, 5, ctx.unit$)) == null ? null : tmp_1_0.active));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "organization.create"), " ");
          ɵɵadvance(2);
          ɵɵproperty("displayInfoConfig", ɵɵpureFunction0(9, _c43));
        }
      },
      dependencies: [RouterLink, SubListComponent, DisableInfoComponent, TranslatePipe, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitCostCenterListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-cost-centers",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UnitCostCenterListService
      }],
      standalone: false,
      template: `<cx-org-sub-list [showHint]="true">
  <a
    actions
    class="link btn btn-link btn-sm"
    routerLink="create"
    [class.disabled]="!(unit$ | async)?.active"
  >
    {{ 'organization.create' | cxTranslate }}
  </a>
  <cx-org-disable-info
    info
    i18nRoot="orgUnitCostCenters"
    [displayInfoConfig]="{
      disabledCreate: true,
      disabledEnable: false,
      disabledEdit: false,
    }"
  >
  </cx-org-disable-info>
</cx-org-sub-list>
`
    }]
  }], () => [{
    type: CurrentUnitService
  }], null);
})();
var UnitCostCenterListModule = class _UnitCostCenterListModule {
  static {
    this.ɵfac = function UnitCostCenterListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitCostCenterListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitCostCenterListModule,
      declarations: [UnitCostCenterListComponent],
      imports: [I18nModule, RouterModule, SubListModule, CommonModule, DisableInfoModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [I18nModule, RouterModule, SubListModule, CommonModule, DisableInfoModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitCostCenterListModule, [{
    type: NgModule,
    args: [{
      imports: [I18nModule, RouterModule, SubListModule, CommonModule, DisableInfoModule],
      declarations: [UnitCostCenterListComponent]
    }]
  }], null, null);
})();
var UnitUserRolesCellComponent = class _UnitUserRolesCellComponent extends CellComponent {
  constructor(outlet, itemService, b2bUserService) {
    super(outlet);
    this.outlet = outlet;
    this.itemService = itemService;
    this.b2bUserService = b2bUserService;
    this.unitKey$ = this.itemService.key$;
    this.isUpdatingUserAllowed = this.b2bUserService.isUpdatingUserAllowed();
  }
  getRouterModel(uid) {
    return __spreadProps(__spreadValues({}, this.outlet.context), {
      uid
    });
  }
  static {
    this.ɵfac = function UnitUserRolesCellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitUserRolesCellComponent)(ɵɵdirectiveInject(OutletContextData), ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(B2BUserService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitUserRolesCellComponent,
      selectors: [["cx-org-unit-user-link-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["class", "button", 3, "routerLink", 4, "ngIf"], [1, "button", 3, "routerLink"]],
      template: function UnitUserRolesCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UnitUserRolesCellComponent_a_0_Template, 4, 8, "a", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.isUpdatingUserAllowed && ctx.hasItem && ɵɵpipeBind1(1, 1, ctx.unitKey$));
        }
      },
      dependencies: [NgIf, RouterLink, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUserRolesCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-user-link-cell",
      template: `
    <a
      class="button"
      *ngIf="isUpdatingUserAllowed && hasItem && (unitKey$ | async) as uid"
      [routerLink]="
        { cxRoute: 'orgUnitUserRoles', params: getRouterModel(uid) } | cxUrl
      "
    >
      {{ 'orgUser.links.rolesAndRights' | cxTranslate }}
    </a>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false
    }]
  }], () => [{
    type: OutletContextData
  }, {
    type: ItemService
  }, {
    type: B2BUserService
  }], null);
})();
var UnitUserListService = class _UnitUserListService extends SubListService {
  constructor(tableService, unitService) {
    super(tableService);
    this.tableService = tableService;
    this.unitService = unitService;
    this.tableType = OrganizationTableType.UNIT_USERS;
    this._domainType = OrganizationTableType.USER;
  }
  load(pagination2, code) {
    return this.unitService.getUsers(code, B2BUserRole.CUSTOMER, pagination2);
  }
  static {
    this.ɵfac = function UnitUserListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitUserListService)(ɵɵinject(TableService), ɵɵinject(OrgUnitService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitUserListService,
      factory: _UnitUserListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUserListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: OrgUnitService
  }], null);
})();
var UnitUserListComponent = class _UnitUserListComponent {
  constructor(currentUnitService, b2bUserService) {
    this.currentUnitService = currentUnitService;
    this.b2bUserService = b2bUserService;
    this.routerKey = ROUTE_PARAMS.userCode;
    this.unit$ = this.currentUnitService ? this.currentUnitService.item$ : of({
      active: true
    });
    this.isUpdatingUserAllowed = this.b2bUserService.isUpdatingUserAllowed();
  }
  static {
    this.ɵfac = function UnitUserListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitUserListComponent)(ɵɵdirectiveInject(CurrentUnitService), ɵɵdirectiveInject(B2BUserService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitUserListComponent,
      selectors: [["cx-org-unit-user-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UnitUserListService
      }])],
      decls: 3,
      vars: 5,
      consts: [["key", "customerId", 3, "routerKey", "showHint"], ["actions", "", "class", "link btn btn-link btn-sm", "routerLink", "create", 3, "disabled", 4, "ngIf"], ["info", "", "i18nRoot", "orgUnitUsers", 3, "displayInfoConfig"], ["actions", "", "routerLink", "create", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UnitUserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list", 0);
          ɵɵtemplate(1, UnitUserListComponent_a_1_Template, 4, 7, "a", 1);
          ɵɵelement(2, "cx-org-disable-info", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("routerKey", ctx.routerKey)("showHint", true);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isUpdatingUserAllowed);
          ɵɵadvance();
          ɵɵproperty("displayInfoConfig", ɵɵpureFunction0(4, _c43));
        }
      },
      dependencies: [NgIf, RouterLink, SubListComponent, DisableInfoComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUserListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-user-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UnitUserListService
      }],
      standalone: false,
      template: `<cx-org-sub-list key="customerId" [routerKey]="routerKey" [showHint]="true">
  <a
    *ngIf="isUpdatingUserAllowed"
    actions
    class="link btn btn-link btn-sm"
    routerLink="create"
    [class.disabled]="!(unit$ | async)?.active"
  >
    {{ 'organization.create' | cxTranslate }}
  </a>
  <cx-org-disable-info
    info
    i18nRoot="orgUnitUsers"
    [displayInfoConfig]="{
      disabledCreate: true,
      disabledEnable: false,
      disabledEdit: false,
    }"
  >
  </cx-org-disable-info>
</cx-org-sub-list>
`
    }]
  }], () => [{
    type: CurrentUnitService
  }, {
    type: B2BUserService
  }], null);
})();
var UnitUserListModule = class _UnitUserListModule {
  static {
    this.ɵfac = function UnitUserListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitUserListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitUserListModule,
      declarations: [UnitUserListComponent, UnitUserRolesCellComponent],
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, SubListModule, DisableInfoModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, SubListModule, DisableInfoModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUserListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, RouterModule, UrlModule, SubListModule, DisableInfoModule],
      declarations: [UnitUserListComponent, UnitUserRolesCellComponent]
    }]
  }], null, null);
})();
var CurrentUnitUserService = class _CurrentUnitUserService extends CurrentItemService {
  constructor(routingService, b2bUserService) {
    super(routingService);
    this.routingService = routingService;
    this.b2bUserService = b2bUserService;
  }
  getDetailsRoute() {
    return "orgUnitUserList";
  }
  getParamKey() {
    return ROUTE_PARAMS.userCode;
  }
  getItem(customerId) {
    return this.b2bUserService.get(customerId);
  }
  getError(code) {
    return this.b2bUserService.getErrorState(code);
  }
  static {
    this.ɵfac = function CurrentUnitUserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentUnitUserService)(ɵɵinject(RoutingService), ɵɵinject(B2BUserService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrentUnitUserService,
      factory: _CurrentUnitUserService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUnitUserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: B2BUserService
  }], null);
})();
var UnitUserRolesFormService = class _UnitUserRolesFormService extends FormService {
  constructor(userService) {
    super();
    this.userService = userService;
    this.availableRoles = this.userService.getAllRoles();
    this.availableRights = this.userService.getAllRights();
  }
  getForm(item) {
    this.form = null;
    return super.getForm(item);
  }
  build() {
    const form = new UntypedFormGroup({});
    this.availableRoles.forEach((role) => form.addControl(role, new UntypedFormControl()));
    this.availableRights.forEach((right) => form.addControl(right, new UntypedFormControl()));
    this.form = form;
  }
  patchData(item) {
    super.patchData(item);
    if (item) {
      item.roles?.forEach((role) => {
        this.form?.get(role)?.setValue(true);
      });
    }
  }
  static {
    this.ɵfac = function UnitUserRolesFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitUserRolesFormService)(ɵɵinject(B2BUserService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitUserRolesFormService,
      factory: _UnitUserRolesFormService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUserRolesFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: B2BUserService
  }], null);
})();
var UnitUserRolesItemService = class _UnitUserRolesItemService extends ItemService {
  constructor(currentItemService, routingService, formService, unitService, b2bUserService) {
    super(currentItemService, routingService, formService);
    this.currentItemService = currentItemService;
    this.routingService = routingService;
    this.formService = formService;
    this.unitService = unitService;
    this.b2bUserService = b2bUserService;
  }
  save(form, key) {
    form.get("orgUnit")?.enable();
    return super.save(form, key);
  }
  load(unitUid) {
    return this.b2bUserService.get(unitUid);
  }
  update(customerId, _user) {
    return this.b2bUserService.getLoadingStatus(customerId);
  }
  create(_customer) {
    return this.b2bUserService.getLoadingStatus("");
  }
  getDetailsRoute() {
    return this.currentItemService.getDetailsRoute();
  }
  static {
    this.ɵfac = function UnitUserRolesItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitUserRolesItemService)(ɵɵinject(CurrentUnitUserService), ɵɵinject(RoutingService), ɵɵinject(UnitUserRolesFormService), ɵɵinject(OrgUnitService), ɵɵinject(B2BUserService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitUserRolesItemService,
      factory: _UnitUserRolesItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUserRolesItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrentUnitUserService
  }, {
    type: RoutingService
  }, {
    type: UnitUserRolesFormService
  }, {
    type: OrgUnitService
  }, {
    type: B2BUserService
  }], null);
})();
var CurrentUserService = class _CurrentUserService extends CurrentItemService {
  constructor(routingService, b2bUserService) {
    super(routingService);
    this.routingService = routingService;
    this.b2bUserService = b2bUserService;
    this.name$ = this.item$.pipe(map((user) => user?.name));
  }
  getParamKey() {
    return ROUTE_PARAMS.userCode;
  }
  getItem(code) {
    return this.b2bUserService.get(code);
  }
  getError(code) {
    return this.b2bUserService.getErrorState(code);
  }
  static {
    this.ɵfac = function CurrentUserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentUserService)(ɵɵinject(RoutingService), ɵɵinject(B2BUserService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrentUserService,
      factory: _CurrentUserService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: B2BUserService
  }], null);
})();
var UserFormService = class _UserFormService extends FormService {
  build() {
    const form = new UntypedFormGroup({});
    form.setControl("customerId", new UntypedFormControl(""));
    form.setControl("titleCode", new UntypedFormControl(""));
    form.setControl("firstName", new UntypedFormControl("", Validators.required));
    form.setControl("lastName", new UntypedFormControl("", Validators.required));
    form.setControl("email", new UntypedFormControl("", [Validators.required, CustomFormValidators.emailValidator]));
    form.setControl("orgUnit", new UntypedFormGroup({
      uid: new UntypedFormControl(void 0, Validators.required)
    }));
    form.setControl("roles", new UntypedFormArray([]));
    form.setControl("isAssignedToApprovers", new UntypedFormControl(false));
    form.get("roles")?.valueChanges.subscribe((roles) => {
      if (roles.includes(B2BUserRole.APPROVER)) {
        form.get("isAssignedToApprovers")?.enable();
      } else {
        form.get("isAssignedToApprovers")?.disable();
        form.get("isAssignedToApprovers")?.reset();
      }
    });
    this.form = form;
  }
  patchData(item) {
    super.patchData(item);
    if (item) {
      const roles = this.form?.get("roles");
      const emailFormControl = this.form?.get("email");
      item.roles?.forEach((role) => {
        if (!roles.value.includes(role)) {
          roles.push(new UntypedFormControl(role));
        }
      });
      if (item.displayUid && emailFormControl) {
        emailFormControl.setValue(item.displayUid);
      }
    }
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUserFormService_BaseFactory;
      return function UserFormService_Factory(__ngFactoryType__) {
        return (ɵUserFormService_BaseFactory || (ɵUserFormService_BaseFactory = ɵɵgetInheritedFactory(_UserFormService)))(__ngFactoryType__ || _UserFormService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserFormService,
      factory: _UserFormService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UserItemService = class _UserItemService extends ItemService {
  constructor(currentItemService, routingService, formService, userService) {
    super(currentItemService, routingService, formService);
    this.currentItemService = currentItemService;
    this.routingService = routingService;
    this.formService = formService;
    this.userService = userService;
  }
  load(code) {
    this.userService.load(code);
    return this.userService.get(code);
  }
  update(code, value) {
    delete value.approvers;
    this.userService.update(code, value);
    return this.userService.getLoadingStatus(code);
  }
  create(value) {
    this.userService.create(value);
    return this.userService.getLoadingStatus(value.uid ?? "");
  }
  getDetailsRoute() {
    return "orgUserDetails";
  }
  // @override to avoid errors while creation
  launchDetails(item) {
    if (item.customerId !== null) {
      super.launchDetails(item);
    }
  }
  static {
    this.ɵfac = function UserItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserItemService)(ɵɵinject(CurrentUserService), ɵɵinject(RoutingService), ɵɵinject(UserFormService), ɵɵinject(B2BUserService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserItemService,
      factory: _UserItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrentUserService
  }, {
    type: RoutingService
  }, {
    type: UserFormService
  }, {
    type: B2BUserService
  }], null);
})();
var UnitUserRolesFormComponent = class _UnitUserRolesFormComponent {
  constructor(itemService, formService, userService, userItemService) {
    this.itemService = itemService;
    this.formService = formService;
    this.userService = userService;
    this.userItemService = userItemService;
    this.form$ = this.itemService.current$.pipe(tap((item) => {
      if (!this.item) {
        this.item = item;
      }
      if (this.item?.roles?.join() !== item?.roles?.join()) {
        this.item = __spreadValues(__spreadValues({}, this.item), item);
      }
    }), map((item) => this.formService.getForm(item)));
    this.availableRoles = this.userService.getAllRoles();
    this.availableRights = this.userService.getAllRights();
  }
  save(form) {
    form.disable();
    const rolesAndRights = [...this.availableRoles, ...this.availableRights].filter((role) => !!form.get(role)?.value);
    this.userItemService.update(this.item?.customerId ?? "", {
      roles: rolesAndRights
    }).pipe(take(1), filter((data) => data.status === LoadStatus.SUCCESS)).subscribe((data) => {
      this.notify(__spreadValues(__spreadValues({}, this.item), data.item));
      form.enable();
    });
  }
  notify(item) {
    this.messageService.add({
      message: {
        key: "orgUnitUserRoles.messages.rolesUpdated",
        params: {
          item
        }
      }
    });
  }
  static {
    this.ɵfac = function UnitUserRolesFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitUserRolesFormComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(UnitUserRolesFormService), ɵɵdirectiveInject(B2BUserService), ɵɵdirectiveInject(UserItemService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitUserRolesFormComponent,
      selectors: [["cx-org-unit-user-roles"]],
      viewQuery: function UnitUserRolesFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(MessageService, 5, MessageService);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.messageService = _t.first);
        }
      },
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: UnitUserRolesItemService
      }])],
      decls: 2,
      vars: 3,
      consts: [["card", ""], [3, "submit", 4, "ngIf"], [3, "submit"], ["i18nRoot", "orgUnitUserRoles", 3, "previous", "cxFocus"], ["actions", "", "routerLink", "../../"], [3, "click"], ["main", "", 1, "details", 3, "formGroup"], [1, "full-width"], [1, "label-content", "required"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "checkbox", 3, "change", "formControlName"], [1, "form-check-label"]],
      template: function UnitUserRolesFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UnitUserRolesFormComponent_form_0_Template, 18, 16, "form", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.form$));
        }
      },
      dependencies: [NgForOf, NgIf, CardComponent, ɵNgNoValidate, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgForm, RouterLink, FormGroupDirective, FormControlName, FocusDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUserRolesFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-user-roles",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ItemService,
        useExisting: UnitUserRolesItemService
      }],
      standalone: false,
      template: `<form *ngIf="form$ | async as form" (submit)="save(form)">
  <cx-org-card
    #card
    [previous]="false"
    i18nRoot="orgUnitUserRoles"
    [cxFocus]="{ autofocus: 'input', refreshFocus: form }"
  >
    <a actions routerLink="../../">
      <span (click)="card.closeView($event)">
        {{ 'organization.done' | cxTranslate }}
      </span>
    </a>

    <section main class="details" [formGroup]="form">
      <fieldset class="full-width">
        <legend class="label-content required">
          {{ 'orgUser.roles' | cxTranslate }}
        </legend>
        <label class="form-check" *ngFor="let role of availableRoles">
          <input
            type="checkbox"
            [formControlName]="role"
            (change)="save(form)"
          />
          <span class="form-check-label">
            {{ 'organization.userRoles.' + role | cxTranslate }}
          </span>
        </label>
      </fieldset>
      <fieldset class="full-width">
        <legend class="label-content required">
          {{ 'orgUser.rights' | cxTranslate }}
        </legend>
        <label class="form-check" *ngFor="let right of availableRights">
          <input
            type="checkbox"
            [formControlName]="right"
            (change)="save(form)"
          />
          <span class="form-check-label">
            {{ 'organization.userRights.' + right | cxTranslate }}
          </span>
        </label>
      </fieldset>
    </section>
  </cx-org-card>
</form>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: UnitUserRolesFormService
  }, {
    type: B2BUserService
  }, {
    type: UserItemService
  }], {
    messageService: [{
      type: ViewChild,
      args: [MessageService, {
        read: MessageService
      }]
    }]
  });
})();
var UnitUserRolesModule = class _UnitUserRolesModule {
  static {
    this.ɵfac = function UnitUserRolesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitUserRolesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitUserRolesModule,
      declarations: [UnitUserRolesFormComponent],
      imports: [CommonModule, CardModule, FormsModule, RouterModule, UrlModule, I18nModule, ReactiveFormsModule, KeyboardFocusModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, CardModule, FormsModule, RouterModule, UrlModule, I18nModule, ReactiveFormsModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUserRolesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, FormsModule, RouterModule, UrlModule, I18nModule, ReactiveFormsModule, KeyboardFocusModule],
      declarations: [UnitUserRolesFormComponent]
    }]
  }], null, null);
})();
var UnitUsersModule = class _UnitUsersModule {
  static {
    this.ɵfac = function UnitUsersModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitUsersModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitUsersModule,
      imports: [UnitUserListModule, UnitUserRolesModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [UnitUserListModule, UnitUserRolesModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUsersModule, [{
    type: NgModule,
    args: [{
      imports: [UnitUserListModule, UnitUserRolesModule]
    }]
  }], null, null);
})();
var TREE_TOGGLE;
(function(TREE_TOGGLE2) {
  TREE_TOGGLE2[TREE_TOGGLE2["EXPANDED"] = 0] = "EXPANDED";
  TREE_TOGGLE2[TREE_TOGGLE2["COLLAPSED"] = 1] = "COLLAPSED";
})(TREE_TOGGLE || (TREE_TOGGLE = {}));
var UnitTreeService = class _UnitTreeService {
  constructor() {
    this.minimalExpanded = 1;
    this.globalToggle$ = new BehaviorSubject(void 0);
    this.treeToggle$ = new BehaviorSubject(/* @__PURE__ */ new Map());
  }
  /**
   * Initializes the unit tree with an active unit.
   *
   * The active unit will be collapsed.
   */
  initialize(root, activeUnitId) {
    if (activeUnitId) {
      this.expandUntilActiveNode(root, activeUnitId);
    }
  }
  /**
   * Sets the global toggle state to _collapsed_ and clears the toggle state
   * for individual units.
   */
  collapseAll() {
    this.globalToggle$.next(TREE_TOGGLE.COLLAPSED);
    this.treeToggle$.next(/* @__PURE__ */ new Map());
  }
  /**
   * Sets the global toggle state to _expanded_ and clears the toggle state
   * for individual units.
   */
  expandAll() {
    this.globalToggle$.next(TREE_TOGGLE.EXPANDED);
    this.treeToggle$.next(/* @__PURE__ */ new Map());
  }
  /**
   * Indicates whether the give unit is expanded.
   *
   * The returned (boolean) expand state is driven by the global toggle
   * state (expand / collapse all) and the toggle state for individual units.
   * There's also the `minimalExpanded` taken into consideration.
   */
  isExpanded(unitId, level) {
    const toggleState = this.treeToggle$.value?.get(unitId);
    if (this.globalToggle$.value === TREE_TOGGLE.COLLAPSED && toggleState !== TREE_TOGGLE.EXPANDED) {
      return false;
    }
    return (
      // the current node is expanded
      toggleState === TREE_TOGGLE.EXPANDED || // the node is not collapsed, but globally expanded ("expand all") or above
      // the minimum visible nodes
      (this.globalToggle$.value === TREE_TOGGLE.EXPANDED || level < this.minimalExpanded) && toggleState !== TREE_TOGGLE.COLLAPSED
    );
  }
  toggle(unit) {
    const currentState = this.treeToggle$.value;
    currentState.set(unit.id ?? "", this.isExpanded(unit.id ?? "", unit.depthLevel) ? TREE_TOGGLE.COLLAPSED : TREE_TOGGLE.EXPANDED);
    this.treeToggle$.next(currentState);
  }
  /**
   * Expands all tree nodes till the active unit, to ensure that the
   * full tree is collapsed till the active item.
   *
   * This is useful while navigating the tree by the router.
   */
  expandUntilActiveNode(node, activeUnitId) {
    const hasActiveChild = (n, id) => !!n.children?.find((child) => child.id === id || hasActiveChild(child, id));
    const findInvolvedTreeNodes = (n, activeItems = []) => {
      if (hasActiveChild(n, activeUnitId)) {
        activeItems.push(n.id ?? "");
      }
      n.children?.forEach((child) => {
        findInvolvedTreeNodes(child, activeItems);
      });
      return activeItems;
    };
    const m = this.treeToggle$.value;
    findInvolvedTreeNodes(node).forEach((activeId) => {
      if (m.get(activeId) !== TREE_TOGGLE.EXPANDED) {
        m.set(activeId, TREE_TOGGLE.EXPANDED);
      }
    });
    if (m !== this.treeToggle$.value) {
      this.treeToggle$.next(m);
    }
  }
  static {
    this.ɵfac = function UnitTreeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitTreeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitTreeService,
      factory: _UnitTreeService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitTreeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UnitListComponent = class _UnitListComponent {
  constructor(unitTreeService, orgUnitService) {
    this.unitTreeService = unitTreeService;
    this.orgUnitService = orgUnitService;
    this.isUpdatingUnitAllowed = this.orgUnitService ? this.orgUnitService.isUpdatingUnitAllowed() : true;
  }
  expandAll() {
    this.unitTreeService.expandAll();
  }
  collapseAll() {
    this.unitTreeService.collapseAll();
  }
  static {
    this.ɵfac = function UnitListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitListComponent)(ɵɵdirectiveInject(UnitTreeService), ɵɵdirectiveInject(OrgUnitService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitListComponent,
      selectors: [["cx-org-unit-list"]],
      standalone: false,
      decls: 8,
      vars: 7,
      consts: [[3, "hideAddButton"], ["actions", ""], [1, "link", "btn", "btn-link", "btn-sm", 3, "click"]],
      template: function UnitListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-list", 0);
          ɵɵelementContainerStart(1, 1);
          ɵɵelementStart(2, "button", 2);
          ɵɵlistener("click", function UnitListComponent_Template_button_click_2_listener() {
            return ctx.expandAll();
          });
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "button", 2);
          ɵɵlistener("click", function UnitListComponent_Template_button_click_5_listener() {
            return ctx.collapseAll();
          });
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementContainerEnd();
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("hideAddButton", !ctx.isUpdatingUnitAllowed);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "orgUnit.tree.expandAll"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 5, "orgUnit.tree.collapseAll"), " ");
        }
      },
      dependencies: [ListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<cx-org-list [hideAddButton]="!isUpdatingUnitAllowed">
  <ng-container actions>
    <button class="link btn btn-link btn-sm" (click)="expandAll()">
      {{ 'orgUnit.tree.expandAll' | cxTranslate }}
    </button>
    <button class="link btn btn-link btn-sm" (click)="collapseAll()">
      {{ 'orgUnit.tree.collapseAll' | cxTranslate }}
    </button>
  </ng-container>
</cx-org-list>
`
    }]
  }], () => [{
    type: UnitTreeService
  }, {
    type: OrgUnitService
  }], null);
})();
var ToggleLinkCellComponent = class _ToggleLinkCellComponent extends CellComponent {
  get depthLevel() {
    return this.model.depthLevel;
  }
  constructor(outlet, unitTreeService) {
    super(outlet);
    this.outlet = outlet;
    this.unitTreeService = unitTreeService;
    this.elementRef = inject(ElementRef);
    this.routingService = inject(RoutingService);
  }
  get combinedName() {
    return this.property ? `${this.property} (${this.count})` : "";
  }
  get expanded() {
    return this.model.expanded;
  }
  /**
   * Counts the number of descendants
   */
  get count() {
    return this.model.count;
  }
  toggleItem(event) {
    event.preventDefault();
    event.stopPropagation();
    this.unitTreeService.toggle(this.model);
  }
  /**
   * Indicates whether the tree item should have a toggle navigation.
   *
   * The toggle navigation is used in case the tree item has descendants,
   * and if the tree item level is not configured to be shown anyway.
   */
  get isSwitchable() {
    return this.count > 0;
  }
  // TODO: leverage these methods when available from future PR.
  get hasItem() {
    return !!this.item && Object.keys(this.item).length > 0;
  }
  get item() {
    if (!this.outlet.context) {
      return null;
    }
    const _a = this.outlet.context, {
      _field,
      _options,
      _type,
      _i18nRoot
    } = _a, all = __objRest(_a, [
      "_field",
      "_options",
      "_type",
      "_i18nRoot"
    ]);
    return all;
  }
  onKeydown(event) {
    const tableElement = this.elementRef?.nativeElement.closest("table");
    const siblingElements = tableElement.querySelectorAll(`cx-org-toggle-link-cell a`);
    const currentSelectedIndex = Array.from(siblingElements).findIndex((element) => {
      return element === event.target;
    });
    switch (event.key) {
      case "ArrowDown":
        this.onArrowDown(event, currentSelectedIndex, siblingElements);
        break;
      case "ArrowUp":
        this.onArrowUp(event, currentSelectedIndex, siblingElements);
        break;
      case "ArrowRight":
        this.onArrowRight(event);
        break;
      case "ArrowLeft":
        this.onArrowLeft(event);
        break;
      case " ":
      case "Enter":
        this.onSpace(event, siblingElements);
        break;
    }
  }
  onSpace(event, siblingElements) {
    event.preventDefault();
    siblingElements.forEach((element) => {
      element.tabIndex = -1;
    });
    event.target.tabIndex = 0;
    this.routingService?.go({
      cxRoute: this.route,
      params: this.routeModel
    }).then(() => {
      this.restoreFocus();
    });
  }
  onArrowDown(event, currentSelectedIndex, siblingElements) {
    event.preventDefault();
    siblingElements[currentSelectedIndex + 1]?.focus();
  }
  onArrowUp(event, currentSelectedIndex, siblingElements) {
    event.preventDefault();
    siblingElements[currentSelectedIndex + -1]?.focus();
  }
  onArrowRight(event) {
    if (!this.expanded && this.isSwitchable) {
      this.toggleItem(event);
      this.restoreFocus();
    }
  }
  onArrowLeft(event) {
    if (this.expanded && this.isSwitchable) {
      this.toggleItem(event);
      this.restoreFocus();
    }
  }
  restoreFocus() {
    const focusedElementId = document.activeElement?.id || "";
    this.unitTreeService.treeToggle$.pipe(take(1)).subscribe(() => {
      setTimeout(() => {
        document.getElementById(focusedElementId)?.focus();
      }, 0);
    });
  }
  static {
    this.ɵfac = function ToggleLinkCellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ToggleLinkCellComponent)(ɵɵdirectiveInject(OutletContextData), ɵɵdirectiveInject(UnitTreeService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ToggleLinkCellComponent,
      selectors: [["cx-org-toggle-link-cell"]],
      hostVars: 2,
      hostBindings: function ToggleLinkCellComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵstyleProp("--cx-depth-level", ctx.depthLevel);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 1,
      consts: [["class", "hide-focus-border", "role", "treeitem", 3, "id", "routerLink", "keydown", 4, "ngIf"], ["role", "treeitem", 1, "hide-focus-border", 3, "keydown", "id", "routerLink"], ["class", "button btn btn-sm tree-item-toggle", "type", "button", "tabindex", "-1", 3, "click", 4, "ngIf"], [1, "text", 3, "title"], ["type", "button", "tabindex", "-1", 1, "button", "btn", "btn-sm", "tree-item-toggle", 3, "click"], [3, "type"]],
      template: function ToggleLinkCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ToggleLinkCellComponent_a_0_Template, 5, 12, "a", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.hasItem);
        }
      },
      dependencies: [NgIf, RouterLink, IconComponent, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleLinkCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-toggle-link-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<a
  *ngIf="hasItem"
  [id]="model.uid"
  class="hide-focus-border"
  [routerLink]="{ cxRoute: route, params: routeModel } | cxUrl"
  (keydown)="onKeydown($event)"
  [attr.aria-haspopup]="isSwitchable"
  [attr.data-depth]="model.depthLevel"
  role="treeitem"
>
  <button
    *ngIf="isSwitchable"
    class="button btn btn-sm tree-item-toggle"
    type="button"
    [attr.aria-expanded]="expanded"
    [attr.aria-label]="'orgUnit.tree.explore' | cxTranslate"
    [attr.title]="'orgUnit.tree.explore' | cxTranslate"
    (click)="toggleItem($event)"
    tabindex="-1"
  >
    <cx-icon [type]="expanded ? 'CARET_DOWN' : 'CARET_RIGHT'"></cx-icon>
  </button>
  <span class="text" title="{{ combinedName }}">{{ combinedName }}</span>
</a>
`
    }]
  }], () => [{
    type: OutletContextData
  }, {
    type: UnitTreeService
  }], {
    depthLevel: [{
      type: HostBinding,
      args: ["style.--cx-depth-level"]
    }]
  });
})();
var UnitListModule = class _UnitListModule {
  static {
    this.ɵfac = function UnitListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitListModule,
      declarations: [UnitListComponent, ToggleLinkCellComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule, ListModule],
      exports: [ToggleLinkCellComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule, ListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule, ListModule],
      declarations: [UnitListComponent, ToggleLinkCellComponent],
      exports: [ToggleLinkCellComponent]
    }]
  }], null, null);
})();
var UserDetailsCellComponent = class _UserDetailsCellComponent extends CellComponent {
  constructor(b2bUserService, outlet) {
    super(outlet);
    this.b2bUserService = b2bUserService;
    this.outlet = outlet;
    this.availableRoles = this.b2bUserService.getAllRoles().map((role) => role.toString());
    this.availableRights = this.b2bUserService.getAllRights().map((right) => right.toString());
    this.b2bUserModel = super.model;
  }
  hasRight(model) {
    return (model.roles ?? []).some((role) => this.availableRights.includes(role));
  }
  static {
    this.ɵfac = function UserDetailsCellComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserDetailsCellComponent)(ɵɵdirectiveInject(B2BUserService), ɵɵdirectiveInject(OutletContextData));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserDetailsCellComponent,
      selectors: [["cx-org-user-details-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 1,
      consts: [["details", ""], [4, "ngIf"], ["ariaLabel", "{model?.name ?? ('orgUser.name' | cxTranslate)}", 1, "button", "btn", "btn-sm", "text", 3, "cxPopover", "cxPopoverOptions"], [1, "popover-details"], [1, "property"], [1, "value", 3, "routerLink"], [1, "property", "full-width"], [1, "value"], [4, "ngFor", "ngForOf"], ["class", "property", 4, "ngIf"], [3, "innerText", 4, "ngIf"], [3, "innerText"]],
      template: function UserDetailsCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UserDetailsCellComponent_ng_container_0_Template, 5, 4, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.b2bUserModel);
        }
      },
      dependencies: [NgForOf, NgIf, PopoverDirective, RouterLink, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDetailsCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-details-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="b2bUserModel as model">
  <ng-template #details>
    <div class="popover-details">
      <div class="property">
        <label>{{ 'orgUser.name' | cxTranslate }}</label>
        <a
          class="value"
          [routerLink]="
            {
              cxRoute: 'orgUserDetails',
              params: model,
            } | cxUrl
          "
          >{{ model.name }}</a
        >
      </div>

      <div class="property full-width">
        <label>{{ 'orgUser.uid' | cxTranslate }}</label>
        <span class="value">
          {{ model.uid }}
        </span>
      </div>

      <div class="property">
        <label>{{ 'orgUser.roles' | cxTranslate }}</label>
        <ul class="value">
          <ng-container *ngFor="let role of model.roles">
            <li
              *ngIf="availableRoles.includes(role)"
              [innerText]="'organization.userRoles.' + role | cxTranslate"
            ></li>
          </ng-container>
          <li *ngIf="model.roles?.length === 0">-</li>
        </ul>
      </div>

      <div class="property" *ngIf="hasRight(model)">
        <label>{{ 'orgUser.rights' | cxTranslate }}</label>
        <ul class="value">
          <ng-container *ngFor="let right of model.roles">
            <li
              *ngIf="availableRights.includes(right)"
              [innerText]="'organization.userRights.' + right | cxTranslate"
            ></li>
          </ng-container>
          <li *ngIf="model.roles?.length === 0">-</li>
        </ul>
      </div>

      <div class="property">
        <label>{{ 'orgUser.orgUnit' | cxTranslate }}</label>
        <a
          class="value"
          [routerLink]="
            {
              cxRoute: 'orgUnitDetails',
              params: model.orgUnit,
            } | cxUrl
          "
        >
          {{ model.orgUnit?.name }}
        </a>
      </div>
    </div>
  </ng-template>

  <button
    class="button btn btn-sm text"
    ariaLabel="{model?.name ?? ('orgUser.name' | cxTranslate)}"
    [cxPopover]="details"
    [cxPopoverOptions]="{
      placement: 'auto',
      class: 'my-company-popover',
      appendToBody: true,
      displayCloseButton: true,
    }"
  >
    {{ model?.name }}
  </button>
</ng-container>
`
    }]
  }], () => [{
    type: B2BUserService
  }, {
    type: OutletContextData
  }], null);
})();
var UnitDetailsCellComponent = class _UnitDetailsCellComponent extends CellComponent {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUnitDetailsCellComponent_BaseFactory;
      return function UnitDetailsCellComponent_Factory(__ngFactoryType__) {
        return (ɵUnitDetailsCellComponent_BaseFactory || (ɵUnitDetailsCellComponent_BaseFactory = ɵɵgetInheritedFactory(_UnitDetailsCellComponent)))(__ngFactoryType__ || _UnitDetailsCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitDetailsCellComponent,
      selectors: [["cx-org-unit-details-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 4,
      consts: [["details", ""], [1, "button", "btn", "btn-sm", "text", 3, "cxPopover", "cxPopoverOptions"], [1, "popover-details"], [1, "property"], [1, "value", 3, "routerLink"], [1, "value"], ["class", "property", 4, "ngIf"]],
      template: function UnitDetailsCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UnitDetailsCellComponent_ng_template_0_Template, 22, 24, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementStart(2, "button", 1);
          ɵɵtext(3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const details_r2 = ɵɵreference(1);
          ɵɵadvance(2);
          ɵɵproperty("cxPopover", details_r2)("cxPopoverOptions", ɵɵpureFunction0(3, _c22));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.model.name, "\n");
        }
      },
      dependencies: [NgIf, PopoverDirective, RouterLink, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitDetailsCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-details-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template #details>
  <div class="popover-details">
    <div class="property">
      <label>{{ 'orgUnit.name' | cxTranslate }}</label>
      <a
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgUnitDetails',
            params: { uid: model.id },
          } | cxUrl
        "
      >
        {{ model.name }}
      </a>
    </div>

    <div class="property">
      <label>{{ 'orgUnit.uid' | cxTranslate }}</label>
      <span class="value">
        {{ model.id }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgUnit.active' | cxTranslate }}</label>
      <span class="value" [class.is-active]="model.active">
        {{
          (model.active ? 'organization.enabled' : 'organization.disabled')
            | cxTranslate
        }}
      </span>
    </div>

    <div class="property" *ngIf="model.approvalProcess?.name">
      <label>{{ 'orgUnit.approvalProcess' | cxTranslate }}</label>
      <span class="value">
        {{ model.approvalProcess?.name }}
      </span>
    </div>
  </div>
</ng-template>

<button
  class="button btn btn-sm text"
  [cxPopover]="details"
  [cxPopoverOptions]="{
    placement: 'auto',
    class: 'my-company-popover',
    appendToBody: true,
    displayCloseButton: true,
  }"
>
  {{ model.name }}
</button>
`
    }]
  }], null, null);
})();
var CurrentUnitChildService = class _CurrentUnitChildService extends CurrentUnitService {
  getParamKey() {
    return "childUnitCode";
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵCurrentUnitChildService_BaseFactory;
      return function CurrentUnitChildService_Factory(__ngFactoryType__) {
        return (ɵCurrentUnitChildService_BaseFactory || (ɵCurrentUnitChildService_BaseFactory = ɵɵgetInheritedFactory(_CurrentUnitChildService)))(__ngFactoryType__ || _CurrentUnitChildService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrentUnitChildService,
      factory: _CurrentUnitChildService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUnitChildService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UnitChildItemService = class _UnitChildItemService extends UnitItemService {
  constructor(currentItemService, routingService, formService, unitService) {
    super(currentItemService, routingService, formService, unitService);
    this.currentItemService = currentItemService;
    this.routingService = routingService;
    this.formService = formService;
    this.unitService = unitService;
  }
  save(form, key) {
    form.get("parentOrgUnit")?.enable();
    return super.save(form, key);
  }
  /**
   * @override
   * Returns 'unitDetails'
   */
  getDetailsRoute() {
    return "orgUnitChildren";
  }
  buildRouteParams(item) {
    return {
      uid: item.parentOrgUnit?.uid
    };
  }
  static {
    this.ɵfac = function UnitChildItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitChildItemService)(ɵɵinject(CurrentUnitChildService), ɵɵinject(RoutingService), ɵɵinject(UnitFormService), ɵɵinject(OrgUnitService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitChildItemService,
      factory: _UnitChildItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitChildItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrentUnitChildService
  }, {
    type: RoutingService
  }, {
    type: UnitFormService
  }, {
    type: OrgUnitService
  }], null);
})();
var UnitChildCreateComponent = class _UnitChildCreateComponent {
  constructor(unitService) {
    this.unitService = unitService;
    this.unitKey$ = this.unitService.key$;
  }
  static {
    this.ɵfac = function UnitChildCreateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitChildCreateComponent)(ɵɵdirectiveInject(CurrentUnitService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitChildCreateComponent,
      selectors: [["cx-org-unit-child-create"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([
        // we provide a specific version of the `UnitItemService` to
        // let the form component work with child units.
        {
          provide: UnitItemService,
          useExisting: UnitChildItemService
        }
      ])],
      decls: 1,
      vars: 1,
      consts: [["i18nRoot", "orgUnit.children", 3, "createChildUnit"]],
      template: function UnitChildCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "cx-org-unit-form", 0);
        }
        if (rf & 2) {
          ɵɵproperty("createChildUnit", true);
        }
      },
      dependencies: [UnitFormComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitChildCreateComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-child-create",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [
        // we provide a specific version of the `UnitItemService` to
        // let the form component work with child units.
        {
          provide: UnitItemService,
          useExisting: UnitChildItemService
        }
      ],
      standalone: false,
      template: '<cx-org-unit-form\n  [createChildUnit]="true"\n  i18nRoot="orgUnit.children"\n></cx-org-unit-form>\n'
    }]
  }], () => [{
    type: CurrentUnitService
  }], null);
})();
var UnitChildCreateModule = class _UnitChildCreateModule {
  static {
    this.ɵfac = function UnitChildCreateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitChildCreateModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitChildCreateModule,
      declarations: [UnitChildCreateComponent],
      imports: [CommonModule, UnitFormModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, UnitFormModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitChildCreateModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UnitFormModule],
      declarations: [UnitChildCreateComponent]
    }]
  }], null, null);
})();
var UnitCostCenterItemService = class _UnitCostCenterItemService extends CostCenterItemService {
  save(form, key) {
    form.get("unit")?.enable();
    return super.save(form, key);
  }
  /**
   * @override
   * Returns 'orgUnitCostCenters'
   */
  getDetailsRoute() {
    return "orgUnitCostCenters";
  }
  buildRouteParams(item) {
    return {
      uid: item.unit?.uid
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUnitCostCenterItemService_BaseFactory;
      return function UnitCostCenterItemService_Factory(__ngFactoryType__) {
        return (ɵUnitCostCenterItemService_BaseFactory || (ɵUnitCostCenterItemService_BaseFactory = ɵɵgetInheritedFactory(_UnitCostCenterItemService)))(__ngFactoryType__ || _UnitCostCenterItemService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitCostCenterItemService,
      factory: _UnitCostCenterItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitCostCenterItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UnitCostCenterCreateComponent = class _UnitCostCenterCreateComponent {
  constructor(unitService) {
    this.unitService = unitService;
    this.unitKey$ = this.unitService.key$;
  }
  static {
    this.ɵfac = function UnitCostCenterCreateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitCostCenterCreateComponent)(ɵɵdirectiveInject(CurrentUnitService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitCostCenterCreateComponent,
      selectors: [["cx-org-unit-cost-center-create"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([
        // we provide a specific version of the `CostCenterItemService` to
        // let the form component work with unit cost centers.
        {
          provide: CostCenterItemService,
          useExisting: UnitCostCenterItemService
        }
      ])],
      decls: 2,
      vars: 3,
      consts: [[3, "unitKey"]],
      template: function UnitCostCenterCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "cx-org-cost-center-form", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("unitKey", ɵɵpipeBind1(1, 1, ctx.unitKey$));
        }
      },
      dependencies: [CostCenterFormComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitCostCenterCreateComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-cost-center-create",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [
        // we provide a specific version of the `CostCenterItemService` to
        // let the form component work with unit cost centers.
        {
          provide: CostCenterItemService,
          useExisting: UnitCostCenterItemService
        }
      ],
      standalone: false,
      template: '<cx-org-cost-center-form [unitKey]="unitKey$ | async"></cx-org-cost-center-form>\n'
    }]
  }], () => [{
    type: CurrentUnitService
  }], null);
})();
var UnitCostCenterCreateModule = class _UnitCostCenterCreateModule {
  static {
    this.ɵfac = function UnitCostCenterCreateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitCostCenterCreateModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitCostCenterCreateModule,
      declarations: [UnitCostCenterCreateComponent],
      imports: [CommonModule, CostCenterFormModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, CostCenterFormModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitCostCenterCreateModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CostCenterFormModule],
      declarations: [UnitCostCenterCreateComponent]
    }]
  }], null, null);
})();
var UnitUserItemService = class _UnitUserItemService extends UserItemService {
  save(form, key) {
    form.get("orgUnit")?.enable();
    return super.save(form, key);
  }
  /**
   * @override
   * Returns 'unitDetails'
   */
  getDetailsRoute() {
    return "orgUnitUserList";
  }
  buildRouteParams(item) {
    return {
      uid: item.orgUnit?.uid
    };
  }
  // @override to default method
  launchDetails(item) {
    const cxRoute = this.getDetailsRoute();
    const params = this.buildRouteParams(item);
    if (cxRoute && item && Object.keys(item).length > 0) {
      this.routingService.go({
        cxRoute,
        params
      });
    }
  }
  create(value) {
    value.customerId = "new";
    this.userService.create(value);
    return this.userService.getLoadingStatus(value.customerId ?? "");
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUnitUserItemService_BaseFactory;
      return function UnitUserItemService_Factory(__ngFactoryType__) {
        return (ɵUnitUserItemService_BaseFactory || (ɵUnitUserItemService_BaseFactory = ɵɵgetInheritedFactory(_UnitUserItemService)))(__ngFactoryType__ || _UnitUserItemService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitUserItemService,
      factory: _UnitUserItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUserItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UserFormComponent = class _UserFormComponent {
  /**
   * Initialize the business unit for the user.
   *
   * If there's a unit provided, we disable the unit form control.
   */
  set unitKey(value) {
    if (value) {
      this.form?.get("orgUnit.uid")?.setValue(value);
      this.form?.get("orgUnit")?.disable();
    }
  }
  constructor(itemService, unitService, userProfileFacade, b2bUserService) {
    this.itemService = itemService;
    this.unitService = unitService;
    this.userProfileFacade = userProfileFacade;
    this.b2bUserService = b2bUserService;
    this.form = this.itemService.getForm();
    this.units$ = this.unitService.getActiveUnitList().pipe(tap((units) => {
      if (units && units.length === 1) {
        this.form?.get("orgUnit.uid")?.setValue(units[0]?.id);
      }
    }));
    this.titles$ = this.userProfileFacade.getTitles();
    this.availableRoles = this.b2bUserService.getAllRoles();
    this.availableRights = this.b2bUserService.getAllRights();
  }
  ngOnInit() {
    this.unitService.loadList();
  }
  updateRoles(event) {
    const {
      checked,
      value
    } = event.target;
    if (checked) {
      this.roles.push(new UntypedFormControl(value));
    } else {
      this.roles.removeAt(this.roles.value.indexOf(value));
    }
  }
  get roles() {
    return this.form?.get("roles");
  }
  get isAssignedToApprovers() {
    return this.form?.get("isAssignedToApprovers");
  }
  static {
    this.ɵfac = function UserFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserFormComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(OrgUnitService), ɵɵdirectiveInject(UserProfileFacade), ɵɵdirectiveInject(B2BUserService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserFormComponent,
      selectors: [["cx-org-user-form"]],
      hostAttrs: [1, "content-wrapper"],
      inputs: {
        unitKey: "unitKey"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: UserItemService
      }, {
        provide: CurrentItemService,
        useExisting: CurrentUserService
      }])],
      decls: 2,
      vars: 1,
      consts: [["i18nRoot", "orgUser"], ["main", "", 3, "formGroup", 4, "ngIf"], ["main", "", 3, "formGroup"], [1, "label-content", "required"], ["formControlName", "titleCode", "bindLabel", "name", "bindValue", "code", "appendTo", "cx-org-list", 3, "searchable", "clearable", "items", "placeholder"], [3, "translationParams", "control"], ["type", "text", "required", "", "formControlName", "firstName", 1, "form-control", 3, "placeholder"], ["id", "firstNameError", 3, "translationParams", "control"], ["type", "text", "required", "", "formControlName", "lastName", 1, "form-control", 3, "placeholder"], ["id", "lastNameError", 3, "translationParams", "control"], ["type", "email", "required", "", "formControlName", "email", 1, "form-control", 3, "placeholder"], ["id", "emailError", 3, "translationParams", "control"], ["required", "true", "formArrayName", "roles", 1, "full-width"], ["class", "form-check", 4, "ngFor", "ngForOf"], ["required", "true", 1, "full-width"], [3, "formGroup"], ["formControlName", "uid", "bindLabel", "name", "bindValue", "id", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "placeholder"], ["class", "full-width", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "change", "value", "checked", "disabled"], [1, "form-check-label"], [1, "full-width"], ["type", "checkbox", "formControlName", "isAssignedToApprovers", 1, "form-check-input"]],
      template: function UserFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-form", 0);
          ɵɵtemplate(1, UserFormComponent_ng_container_1_Template, 59, 89, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.form);
        }
      },
      dependencies: [NgForOf, NgIf, FormComponent, NgSelectComponent, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormArrayName, FormErrorsComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ItemService,
        useExisting: UserItemService
      }, {
        provide: CurrentItemService,
        useExisting: CurrentUserService
      }],
      standalone: false,
      template: `<cx-org-form i18nRoot="orgUser">
  <ng-container main *ngIf="form" [formGroup]="form">
    <cx-form-required-legend />
    <label>
      <span class="label-content required">{{
        'orgUser.title' | cxTranslate
      }}</span>
      <ng-select
        formControlName="titleCode"
        [searchable]="false"
        [clearable]="false"
        [items]="titles$ | async"
        bindLabel="name"
        bindValue="code"
        appendTo="cx-org-list"
        [placeholder]="'orgUser.title' | cxTranslate"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{ label: 'orgUser.title' | cxTranslate }"
        [control]="form.get('titleCode')"
      ></cx-form-errors>
    </label>
    <label>
      <span class="label-content required">
        {{ 'orgUser.firstName' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        type="text"
        class="form-control"
        required
        placeholder="{{ 'orgUser.firstName' | cxTranslate }}"
        formControlName="firstName"
        [attr.aria-invalid]="
          form.get('firstName')?.touched && form.get('firstName')?.invalid
        "
        [attr.aria-errormessage]="'firstNameError'"
      />

      <cx-form-errors
        id="firstNameError"
        [translationParams]="{ label: 'orgUser.firstName' | cxTranslate }"
        [control]="form.get('firstName')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required">
        {{ 'orgUser.lastName' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        type="text"
        class="form-control"
        required
        placeholder="{{ 'orgUser.lastName' | cxTranslate }}"
        formControlName="lastName"
        [attr.aria-invalid]="
          form.get('lastName')?.touched && form.get('lastName')?.invalid
        "
        [attr.aria-errormessage]="'lastNameError'"
      />

      <cx-form-errors
        id="lastNameError"
        [translationParams]="{ label: 'orgUser.lastName' | cxTranslate }"
        [control]="form.get('lastName')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required">
        {{ 'orgUser.email' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        class="form-control"
        type="email"
        required
        placeholder="{{ 'orgUser.email' | cxTranslate }}"
        formControlName="email"
        [attr.aria-invalid]="
          form.get('email')?.touched && form.get('email')?.invalid
        "
        [attr.aria-errormessage]="'emailError'"
      />

      <cx-form-errors
        id="emailError"
        [translationParams]="{ label: 'orgUser.email' | cxTranslate }"
        [control]="form.get('email')"
      ></cx-form-errors>
    </label>

    <fieldset required="true" class="full-width" formArrayName="roles">
      <legend class="label-content required">
        {{ 'orgUser.roles' | cxTranslate }}
      </legend>

      <label
        class="form-check"
        *ngFor="let role of availableRoles; let i = index"
      >
        <input
          type="checkbox"
          class="form-check-input"
          [value]="role"
          [checked]="roles?.value?.includes(role)"
          (change)="updateRoles($any($event))"
          [disabled]="form?.status === 'DISABLED'"
        />
        <span class="form-check-label">
          {{ 'organization.userRoles.' + role | cxTranslate }}
        </span>
      </label>
    </fieldset>

    <fieldset required="true" class="full-width">
      <legend class="label-content required">
        {{ 'orgUser.rights' | cxTranslate }}
      </legend>

      <label
        class="form-check"
        *ngFor="let right of availableRights; let i = index"
      >
        <input
          type="checkbox"
          class="form-check-input"
          [value]="right"
          [checked]="roles?.value?.includes(right)"
          (change)="updateRoles($any($event))"
          [disabled]="form?.status === 'DISABLED'"
        />
        <span class="form-check-label">
          {{ 'organization.userRights.' + right | cxTranslate }}
        </span>
      </label>
    </fieldset>

    <label [formGroup]="$any(form.get('orgUnit'))">
      <span class="label-content required">
        {{ 'orgUser.orgUnit' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <ng-select
        [inputAttrs]="{ required: 'true' }"
        formControlName="uid"
        [searchable]="true"
        [clearable]="false"
        [items]="(units$ | async) ?? null"
        bindLabel="name"
        bindValue="id"
        appendTo="cx-org-list"
        [placeholder]="'orgUser.orgUnit' | cxTranslate"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{ label: 'orgUser.orgUnit' | cxTranslate }"
        [control]="form.get('orgUnit.uid')"
      ></cx-form-errors>
    </label>

    <div *ngIf="isAssignedToApprovers" class="full-width">
      <label class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          formControlName="isAssignedToApprovers"
        />
        <span class="form-check-label">{{
          'orgUser.assignApprover' | cxTranslate
        }}</span>
      </label>
    </div>
  </ng-container>
</cx-org-form>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: OrgUnitService
  }, {
    type: UserProfileFacade
  }, {
    type: B2BUserService
  }], {
    unitKey: [{
      type: Input
    }]
  });
})();
var UnitUserCreateComponent = class _UnitUserCreateComponent {
  constructor(unitService) {
    this.unitService = unitService;
    this.unitKey$ = this.unitService.key$;
  }
  static {
    this.ɵfac = function UnitUserCreateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitUserCreateComponent)(ɵɵdirectiveInject(CurrentUnitService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UnitUserCreateComponent,
      selectors: [["cx-org-unit-user-create"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([
        // we provide a specific version of the `UnitItemService` to
        // let the form component work with child units.
        {
          provide: UserItemService,
          useExisting: UnitUserItemService
        }
      ])],
      decls: 2,
      vars: 3,
      consts: [["i18nRoot", "orgUnit.users", 3, "unitKey"]],
      template: function UnitUserCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "cx-org-user-form", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("unitKey", ɵɵpipeBind1(1, 1, ctx.unitKey$));
        }
      },
      dependencies: [UserFormComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUserCreateComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-unit-user-create",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [
        // we provide a specific version of the `UnitItemService` to
        // let the form component work with child units.
        {
          provide: UserItemService,
          useExisting: UnitUserItemService
        }
      ],
      standalone: false,
      template: '<cx-org-user-form\n  [unitKey]="unitKey$ | async"\n  i18nRoot="orgUnit.users"\n></cx-org-user-form>\n'
    }]
  }], () => [{
    type: CurrentUnitService
  }], null);
})();
var UserFormModule = class _UserFormModule {
  static {
    this.ɵfac = function UserFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserFormModule,
      declarations: [UserFormComponent],
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [UserFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, FormModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [UserFormComponent],
      exports: [UserFormComponent]
    }]
  }], null, null);
})();
var UnitUserCreateModule = class _UnitUserCreateModule {
  static {
    this.ɵfac = function UnitUserCreateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitUserCreateModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitUserCreateModule,
      declarations: [UnitUserCreateComponent],
      imports: [CommonModule, UserFormModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, UserFormModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitUserCreateModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UserFormModule],
      declarations: [UnitUserCreateComponent]
    }]
  }], null, null);
})();
var UnitAddressRoutePageMetaResolver = class _UnitAddressRoutePageMetaResolver extends DefaultRoutePageMetaResolver {
  constructor(translation, currentItemService) {
    super(translation);
    this.currentItemService = currentItemService;
  }
  getParams() {
    return this.currentItemService.item$;
  }
  static {
    this.ɵfac = function UnitAddressRoutePageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitAddressRoutePageMetaResolver)(ɵɵinject(TranslationService), ɵɵinject(CurrentUnitAddressService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitAddressRoutePageMetaResolver,
      factory: _UnitAddressRoutePageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitAddressRoutePageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: CurrentUnitAddressService
  }], null);
})();
var UnitListService = class _UnitListService extends ListService {
  constructor(tableService, unitService, unitItemService, unitTreeService) {
    super(tableService);
    this.tableService = tableService;
    this.unitService = unitService;
    this.unitItemService = unitItemService;
    this.unitTreeService = unitTreeService;
    this.tableType = OrganizationTableType.UNIT;
  }
  load() {
    return this.unitService.getTree().pipe(switchMap((node) => this.unitItemService.key$.pipe(map((key) => {
      if (node) {
        this.unitTreeService.initialize(node, key);
      }
      return node;
    }))), switchMap((tree) => this.unitTreeService.treeToggle$.pipe(map(() => tree))), map((tree) => this.convertListItem(tree)));
  }
  convertListItem(unit, depthLevel = 0, pagination2 = {
    totalResults: 0
  }) {
    let values = [];
    if (!unit) {
      return void 0;
    }
    const node = __spreadProps(__spreadValues({}, unit), {
      count: unit.children?.length ?? 0,
      expanded: this.unitTreeService.isExpanded(unit.id ?? "", depthLevel),
      depthLevel,
      // tmp, should be normalized
      uid: unit.id ?? "",
      children: [...unit.children ?? []].sort((unitA, unitB) => (unitA.name ?? "").localeCompare(unitB.name ?? ""))
    });
    values.push(node);
    pagination2.totalResults++;
    node.children?.forEach((childUnit) => {
      const childList = this.convertListItem(childUnit, depthLevel + 1, pagination2)?.values;
      if (node.expanded && childList && childList.length > 0) {
        values = values.concat(childList);
      }
    });
    return {
      values,
      pagination: pagination2
    };
  }
  key() {
    return "uid";
  }
  static {
    this.ɵfac = function UnitListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitListService)(ɵɵinject(TableService), ɵɵinject(OrgUnitService), ɵɵinject(UnitItemService), ɵɵinject(UnitTreeService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitListService,
      factory: _UnitListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: OrgUnitService
  }, {
    type: UnitItemService
  }, {
    type: UnitTreeService
  }], null);
})();
var UnitRoutePageMetaResolver = class _UnitRoutePageMetaResolver extends DefaultRoutePageMetaResolver {
  constructor(translation, currentItemService) {
    super(translation);
    this.currentItemService = currentItemService;
  }
  getParams() {
    return this.currentItemService.item$;
  }
  static {
    this.ɵfac = function UnitRoutePageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitRoutePageMetaResolver)(ɵɵinject(TranslationService), ɵɵinject(CurrentUnitService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UnitRoutePageMetaResolver,
      factory: _UnitRoutePageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitRoutePageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: CurrentUnitService
  }], null);
})();
var unitsCmsConfig = {
  cmsComponents: {
    ManageUnitsListComponent: {
      component: UnitListComponent,
      providers: [{
        provide: ListService,
        useExisting: UnitListService
      }, {
        provide: ItemService,
        useExisting: UnitItemService
      }],
      childRoutes: {
        parent: {
          data: {
            cxPageMeta: {
              breadcrumb: "orgUnit.breadcrumbs.list",
              resolver: UnitRoutePageMetaResolver
            }
          }
        },
        children: [{
          path: "create",
          component: UnitFormComponent,
          canActivate: [OrgUnitGuard]
        }, {
          path: `:${ROUTE_PARAMS.unitCode}`,
          component: UnitDetailsComponent,
          data: {
            cxPageMeta: {
              breadcrumb: "orgUnit.breadcrumbs.details"
            }
          },
          children: [{
            path: "edit",
            component: UnitFormComponent,
            canActivate: [OrgUnitGuard]
          }, {
            path: "children",
            component: UnitChildrenComponent,
            canActivate: [OrgUnitGuard],
            data: {
              cxPageMeta: {
                breadcrumb: "orgUnit.breadcrumbs.children"
              }
            },
            children: [{
              path: "create",
              component: UnitChildCreateComponent
            }]
          }, {
            path: "approvers",
            data: {
              cxPageMeta: {
                breadcrumb: "orgUnit.breadcrumbs.approvers"
              }
            },
            children: [{
              path: "",
              component: UnitAssignedApproverListComponent
            }, {
              path: "assign",
              component: UnitApproverListComponent
            }]
          }, {
            path: "users",
            component: UnitUserListComponent,
            data: {
              cxPageMeta: {
                breadcrumb: "orgUnit.breadcrumbs.users"
              }
            },
            children: [{
              path: "create",
              component: UnitUserCreateComponent,
              canActivate: [UserGuard]
            }, {
              path: `:${ROUTE_PARAMS.userCode}/roles`,
              component: UnitUserRolesFormComponent,
              canActivate: [UserGuard]
            }]
          }, {
            path: "cost-centers",
            component: UnitCostCenterListComponent,
            data: {
              cxPageMeta: {
                breadcrumb: "orgUnit.breadcrumbs.costCenters"
              }
            },
            children: [{
              path: "create",
              component: UnitCostCenterCreateComponent
            }]
          }, {
            path: "addresses",
            component: UnitAddressListComponent,
            data: {
              cxPageMeta: {
                breadcrumb: "orgUnit.breadcrumbs.addresses",
                resolver: UnitAddressRoutePageMetaResolver
              }
            },
            children: [{
              path: "create",
              component: UnitAddressFormComponent
            }, {
              path: `:${ROUTE_PARAMS.addressCode}`,
              data: {
                cxPageMeta: {
                  breadcrumb: "orgUnit.breadcrumbs.addressDetails"
                }
              },
              children: [{
                path: "",
                component: UnitAddressDetailsComponent
              }, {
                path: "edit",
                component: UnitAddressFormComponent
              }]
            }]
          }]
        }]
      },
      guards: [AuthGuard, AdminGuard]
    }
  }
};
function unitsTableConfigFactory() {
  return unitsTableConfig;
}
var unitsTableConfig = {
  table: {
    [OrganizationTableType.UNIT]: {
      cells: ["name"],
      options: {
        layout: TableLayout.VERTICAL,
        cells: {
          name: {
            dataComponent: ToggleLinkCellComponent,
            linkable: true
          },
          active: {
            dataComponent: StatusCellComponent
          },
          uid: {
            dataComponent: CellComponent
          }
        }
      },
      [BREAKPOINT.lg]: {
        cells: ["name", "active", "uid"]
      }
    },
    [OrganizationTableType.UNIT_USERS]: {
      cells: ["name", "roles"],
      options: {
        pagination: {
          pageSize: MAX_OCC_INTEGER_VALUE
        },
        cells: {
          name: {
            dataComponent: UserDetailsCellComponent
          },
          roles: {
            dataComponent: UnitUserRolesCellComponent
          }
        }
      }
    },
    [OrganizationTableType.UNIT_CHILDREN]: {
      cells: ["name", "active"],
      options: {
        pagination: {
          pageSize: MAX_OCC_INTEGER_VALUE
        },
        cells: {
          name: {
            dataComponent: UnitDetailsCellComponent
          },
          active: {
            dataComponent: StatusCellComponent
          }
        }
      }
    },
    [OrganizationTableType.UNIT_APPROVERS]: {
      cells: ["name", "orgUnit", "actions"],
      options: {
        cells: {
          name: {
            dataComponent: UserDetailsCellComponent
          },
          actions: {
            dataComponent: AssignCellComponent
          },
          orgUnit: {
            dataComponent: UnitCellComponent
          }
        }
      }
    },
    [OrganizationTableType.UNIT_ASSIGNED_APPROVERS]: {
      cells: ["name", "orgUnit", "actions"],
      options: {
        pagination: {
          pageSize: MAX_OCC_INTEGER_VALUE
        },
        cells: {
          name: {
            dataComponent: UserDetailsCellComponent
          },
          actions: {
            dataComponent: AssignCellComponent
          },
          orgUnit: {
            dataComponent: UnitCellComponent
          }
        }
      }
    },
    [OrganizationTableType.UNIT_COST_CENTERS]: {
      cells: ["name"],
      options: {
        cells: {
          name: {
            dataComponent: CostCenterDetailsCellComponent
          }
        },
        pagination: {
          pageSize: MAX_OCC_INTEGER_VALUE
        }
      }
    },
    [OrganizationTableType.UNIT_ADDRESS]: {
      cells: ["formattedAddress"],
      options: {
        pagination: {
          pageSize: MAX_OCC_INTEGER_VALUE
        },
        cells: {
          formattedAddress: {
            dataComponent: LinkCellComponent,
            linkable: true
          }
        }
      }
    }
  }
};
var UnitsComponentsModule = class _UnitsComponentsModule {
  static {
    this.ɵfac = function UnitsComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitsComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitsComponentsModule,
      imports: [RouterModule, UnitListModule, UnitDetailsModule, UnitFormModule, UnitChildrenModule, UnitApproverListModule, UnitUsersModule, UnitCostCenterListModule, UnitAddressModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(unitsCmsConfig), provideDefaultConfigFactory(unitsTableConfigFactory)],
      imports: [RouterModule, UnitListModule, UnitDetailsModule, UnitFormModule, UnitChildrenModule, UnitApproverListModule, UnitUsersModule, UnitCostCenterListModule, UnitAddressModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitsComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, UnitListModule, UnitDetailsModule, UnitFormModule, UnitChildrenModule, UnitApproverListModule, UnitUsersModule, UnitCostCenterListModule, UnitAddressModule],
      providers: [provideDefaultConfig(unitsCmsConfig), provideDefaultConfigFactory(unitsTableConfigFactory)]
    }]
  }], null, null);
})();
var CurrentUserGroupService = class _CurrentUserGroupService extends CurrentItemService {
  constructor(routingService, userGroupService) {
    super(routingService);
    this.routingService = routingService;
    this.userGroupService = userGroupService;
  }
  getParamKey() {
    return ROUTE_PARAMS.userGroupCode;
  }
  getItem(code) {
    return this.userGroupService.get(code);
  }
  getError(code) {
    return this.userGroupService.getErrorState(code);
  }
  static {
    this.ɵfac = function CurrentUserGroupService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CurrentUserGroupService)(ɵɵinject(RoutingService), ɵɵinject(UserGroupService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CurrentUserGroupService,
      factory: _CurrentUserGroupService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CurrentUserGroupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: UserGroupService
  }], null);
})();
var UserGroupFormService = class _UserGroupFormService extends FormService {
  build() {
    const form = new UntypedFormGroup({});
    form.setControl("uid", new UntypedFormControl("", [Validators.required, CustomFormValidators.noSpecialCharacters]));
    form.setControl("name", new UntypedFormControl("", Validators.required));
    form.setControl("orgUnit", new UntypedFormGroup({
      uid: new UntypedFormControl(void 0, Validators.required)
    }));
    this.form = form;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUserGroupFormService_BaseFactory;
      return function UserGroupFormService_Factory(__ngFactoryType__) {
        return (ɵUserGroupFormService_BaseFactory || (ɵUserGroupFormService_BaseFactory = ɵɵgetInheritedFactory(_UserGroupFormService)))(__ngFactoryType__ || _UserGroupFormService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGroupFormService,
      factory: _UserGroupFormService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UserGroupItemService = class _UserGroupItemService extends ItemService {
  constructor(currentItemService, routingService, formService, userGroupService) {
    super(currentItemService, routingService, formService);
    this.currentItemService = currentItemService;
    this.routingService = routingService;
    this.formService = formService;
    this.userGroupService = userGroupService;
  }
  load(code) {
    this.userGroupService.load(code);
    return this.userGroupService.get(code);
  }
  update(code, value) {
    this.userGroupService.update(code, value);
    return this.userGroupService.getLoadingStatus(value.uid ?? "");
  }
  delete(code) {
    this.launchList();
    this.userGroupService.delete(code);
    return this.userGroupService.getLoadingStatus(code);
  }
  create(value) {
    this.userGroupService.create(value);
    return this.userGroupService.getLoadingStatus(value.uid ?? "");
  }
  getDetailsRoute() {
    return "orgUserGroupDetails";
  }
  launchList() {
    this.routingService.go({
      cxRoute: "orgUserGroup"
    });
  }
  static {
    this.ɵfac = function UserGroupItemService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupItemService)(ɵɵinject(CurrentUserGroupService), ɵɵinject(RoutingService), ɵɵinject(UserGroupFormService), ɵɵinject(UserGroupService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGroupItemService,
      factory: _UserGroupItemService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupItemService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CurrentUserGroupService
  }, {
    type: RoutingService
  }, {
    type: UserGroupFormService
  }, {
    type: UserGroupService
  }], null);
})();
var UserGroupDetailsComponent = class _UserGroupDetailsComponent {
  constructor(itemService) {
    this.itemService = itemService;
    this.model$ = this.itemService.key$.pipe(switchMap((code) => this.itemService.load(code)), startWith({}));
    this.isInEditMode$ = this.itemService.isInEditMode$;
  }
  static {
    this.ɵfac = function UserGroupDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupDetailsComponent)(ɵɵdirectiveInject(ItemService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserGroupDetailsComponent,
      selectors: [["cx-org-user-group-details"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: UserGroupItemService
      }])],
      decls: 2,
      vars: 3,
      consts: [["i18nRoot", "orgUserGroup.details", 3, "cxFocus", 4, "ngIf"], ["i18nRoot", "orgUserGroup.details", 3, "cxFocus"], ["actions", "", 1, "link", "btn", "btn-link", "btn-sm", "edit", 3, "routerLink"], ["actions", "", "key", "uid", "i18nRoot", "orgUserGroup"], ["main", "", "cxOrgItemExists", "", 1, "details"], [1, "property"], [1, "value"], [1, "value", 3, "routerLink"], ["main", "", 1, "link-list"], [4, "ngIf"], ["routerLinkActive", "is-current", 1, "link", 3, "routerLink"]],
      template: function UserGroupDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UserGroupDetailsComponent_cx_org_card_0_Template, 29, 33, "cx-org-card", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.model$));
        }
      },
      dependencies: [NgIf, CardComponent, RouterLink, RouterLinkActive, DeleteItemComponent, ItemExistsDirective, FocusDirective, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-group-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: ItemService,
        useExisting: UserGroupItemService
      }],
      host: {
        class: "content-wrapper"
      },
      standalone: false,
      template: `<cx-org-card
  *ngIf="model$ | async as model"
  i18nRoot="orgUserGroup.details"
  [cxFocus]="{ refreshFocus: model }"
>
  <a
    actions
    class="link btn btn-link btn-sm edit"
    [routerLink]="{ cxRoute: 'orgUserGroupEdit', params: model } | cxUrl"
    [class.disabled]="isInEditMode$ | async"
  >
    {{ 'organization.edit' | cxTranslate }}
  </a>

  <cx-org-delete-item
    actions
    key="uid"
    i18nRoot="orgUserGroup"
  ></cx-org-delete-item>

  <section main class="details" cxOrgItemExists>
    <div class="property">
      <label>{{ 'orgUserGroup.name' | cxTranslate }}</label>
      <span class="value">
        {{ model.name }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgUserGroup.uid' | cxTranslate }}</label>
      <span class="value">
        {{ model.uid }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgUserGroup.orgUnit' | cxTranslate }}</label>
      <a
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgUnitDetails',
            params: model.orgUnit,
          } | cxUrl
        "
      >
        {{ model.orgUnit?.name }}
      </a>
    </div>
  </section>

  <section main class="link-list">
    <ng-container *ngIf="model.uid">
      <a
        class="link"
        [routerLink]="{ cxRoute: 'orgUserGroupUsers', params: model } | cxUrl"
        routerLinkActive="is-current"
      >
        {{ 'orgUserGroup.links.user' | cxTranslate }}
      </a>
      <a
        class="link"
        [routerLink]="
          { cxRoute: 'orgUserGroupPermissions', params: model } | cxUrl
        "
        routerLinkActive="is-current"
      >
        {{ 'orgUserGroup.links.permission' | cxTranslate }}
      </a>
    </ng-container>
  </section>
</cx-org-card>
`
    }]
  }], () => [{
    type: ItemService
  }], null);
})();
var UserGroupDetailsModule = class _UserGroupDetailsModule {
  static {
    this.ɵfac = function UserGroupDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserGroupDetailsModule,
      declarations: [UserGroupDetailsComponent],
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, DeleteItemModule, ItemExistsModule, KeyboardFocusModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, DeleteItemModule, ItemExistsModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, DeleteItemModule, ItemExistsModule, KeyboardFocusModule],
      declarations: [UserGroupDetailsComponent]
    }]
  }], null, null);
})();
var UserGroupFormComponent = class _UserGroupFormComponent {
  constructor(itemService, unitService) {
    this.itemService = itemService;
    this.unitService = unitService;
    this.form = this.itemService.getForm();
    this.units$ = this.unitService.getActiveUnitList().pipe(tap((units) => {
      if (units && units.length === 1) {
        this.form?.get("orgUnit.uid")?.setValue(units[0]?.id);
      }
    }));
  }
  ngOnInit() {
    this.unitService.loadList();
  }
  createUidWithName(name, code) {
    createCodeForEntityName(name, code);
  }
  static {
    this.ɵfac = function UserGroupFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupFormComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(OrgUnitService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserGroupFormComponent,
      selectors: [["cx-org-user-group-form"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: UserGroupItemService
      }])],
      decls: 2,
      vars: 1,
      consts: [["i18nRoot", "orgUserGroup"], ["main", "", 3, "formGroup", 4, "ngIf"], ["main", "", 3, "formGroup"], [1, "label-content", "required"], ["type", "text", "required", "", "formControlName", "name", 1, "form-control", 3, "blur", "placeholder"], ["id", "nameError", 3, "translationParams", "control"], ["type", "text", "required", "", "formControlName", "uid", 1, "form-control", 3, "placeholder"], ["id", "uidError", 3, "translationParams", "control"], [3, "formGroup"], ["formControlName", "uid", "bindLabel", "name", "bindValue", "id", "appendTo", "cx-org-list", 3, "inputAttrs", "searchable", "clearable", "items", "readonly", "placeholder"], [3, "translationParams", "control"]],
      template: function UserGroupFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-form", 0);
          ɵɵtemplate(1, UserGroupFormComponent_ng_container_1_Template, 30, 50, "ng-container", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.form);
        }
      },
      dependencies: [NgIf, NgSelectComponent, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, FormComponent, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-group-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ItemService,
        useExisting: UserGroupItemService
      }],
      standalone: false,
      template: `<cx-org-form i18nRoot="orgUserGroup">
  <ng-container *ngIf="form" [formGroup]="form" main>
    <cx-form-required-legend />
    <label>
      <span class="label-content required"
        >{{ 'orgUserGroup.name' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        type="text"
        class="form-control"
        required
        placeholder="{{ 'orgUserGroup.name' | cxTranslate }}"
        formControlName="name"
        (blur)="createUidWithName(form.get('name'), form.get('uid'))"
        [attr.aria-invalid]="
          form.get('name')?.touched && form.get('name')?.invalid
        "
        [attr.aria-errormessage]="'nameError'"
      />

      <cx-form-errors
        id="nameError"
        [translationParams]="{ label: 'orgUserGroup.name' | cxTranslate }"
        [control]="form.get('name')"
      ></cx-form-errors>
    </label>

    <label>
      <span class="label-content required"
        >{{ 'orgUserGroup.uid' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <input
        class="form-control"
        type="text"
        required
        placeholder="{{ 'orgUserGroup.uid' | cxTranslate }}"
        formControlName="uid"
        [attr.aria-invalid]="
          form.get('uid')?.touched && form.get('uid')?.invalid
        "
        [attr.aria-errormessage]="'uidError'"
      />

      <cx-form-errors
        id="uidError"
        [translationParams]="{ label: 'orgUserGroup.uid' | cxTranslate }"
        [control]="form.get('uid')"
      ></cx-form-errors>
    </label>

    <label [formGroup]="$any(form.get('orgUnit'))">
      <span class="label-content required"
        >{{ 'orgUserGroup.orgUnit' | cxTranslate }}
        <cx-form-required-asterisks />
      </span>
      <ng-select
        [inputAttrs]="{ required: 'true' }"
        formControlName="uid"
        [searchable]="true"
        [clearable]="false"
        [items]="(units$ | async) ?? null"
        bindLabel="name"
        bindValue="id"
        [readonly]="form.get('orgUnit.uid')?.disabled ?? false"
        appendTo="cx-org-list"
        [placeholder]="'orgUserGroup.orgUnit' | cxTranslate"
      >
      </ng-select>

      <cx-form-errors
        [translationParams]="{ label: 'orgUserGroup.orgUnit' | cxTranslate }"
        [control]="form.get('orgUnit.uid')"
      ></cx-form-errors>
    </label>
  </ng-container>
</cx-org-form>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: OrgUnitService
  }], null);
})();
var UserGroupFormModule = class _UserGroupFormModule {
  static {
    this.ɵfac = function UserGroupFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserGroupFormModule,
      declarations: [UserGroupFormComponent],
      imports: [CommonModule, RouterModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FormModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FormModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, FormModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [UserGroupFormComponent]
    }]
  }], null, null);
})();
var UserGroupPermissionListService = class _UserGroupPermissionListService extends SubListService {
  constructor(tableService, userGroupService, permissionService) {
    super(tableService);
    this.tableService = tableService;
    this.userGroupService = userGroupService;
    this.permissionService = permissionService;
    this.tableType = OrganizationTableType.USER_GROUP_PERMISSIONS;
    this._domainType = OrganizationTableType.PERMISSION;
  }
  /**
   *
   * @override
   * Loads all b2b users.
   *
   * @param code The user group code.
   */
  load(pagination2, code) {
    return this.userGroupService.getAvailableOrderApprovalPermissions(code, pagination2);
  }
  /**
   * @override
   * Assign user to the user group.
   */
  assign(userGroupCode, permissionCode) {
    this.userGroupService.assignPermission(userGroupCode, permissionCode);
    return this.permissionService.getLoadingStatus(permissionCode);
  }
  /**
   * @override
   * Unassigns the user from the user group.
   */
  unassign(userGroupCode, permissionCode) {
    this.userGroupService.unassignPermission(userGroupCode, permissionCode);
    return this.permissionService.getLoadingStatus(permissionCode);
  }
  static {
    this.ɵfac = function UserGroupPermissionListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupPermissionListService)(ɵɵinject(TableService), ɵɵinject(UserGroupService), ɵɵinject(PermissionService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGroupPermissionListService,
      factory: _UserGroupPermissionListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupPermissionListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: UserGroupService
  }, {
    type: PermissionService
  }], null);
})();
var UserGroupAssignedPermissionsListService = class _UserGroupAssignedPermissionsListService extends UserGroupPermissionListService {
  constructor() {
    super(...arguments);
    this.tableType = OrganizationTableType.USER_GROUP_ASSIGNED_PERMISSIONS;
  }
  /**
   * @override
   * Load all b2b users assigned to the given user group
   */
  load(pagination2, code) {
    return super.load(pagination2, code).pipe(map((users) => this.filterSelected(users)));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUserGroupAssignedPermissionsListService_BaseFactory;
      return function UserGroupAssignedPermissionsListService_Factory(__ngFactoryType__) {
        return (ɵUserGroupAssignedPermissionsListService_BaseFactory || (ɵUserGroupAssignedPermissionsListService_BaseFactory = ɵɵgetInheritedFactory(_UserGroupAssignedPermissionsListService)))(__ngFactoryType__ || _UserGroupAssignedPermissionsListService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGroupAssignedPermissionsListService,
      factory: _UserGroupAssignedPermissionsListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupAssignedPermissionsListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UserGroupAssignedPermissionListComponent = class _UserGroupAssignedPermissionListComponent {
  static {
    this.ɵfac = function UserGroupAssignedPermissionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupAssignedPermissionListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserGroupAssignedPermissionListComponent,
      selectors: [["cx-org-user-group-assigned-permission-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UserGroupAssignedPermissionsListService
      }])],
      decls: 4,
      vars: 3,
      consts: [["actions", "", "routerLink", "assign", 1, "link"]],
      template: function UserGroupAssignedPermissionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list")(1, "a", 0);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "organization.assign"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupAssignedPermissionListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-group-assigned-permission-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UserGroupAssignedPermissionsListService
      }],
      standalone: false,
      template: `<cx-org-sub-list>
  <a actions class="link" routerLink="assign">
    {{ 'organization.assign' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UserGroupPermissionListComponent = class _UserGroupPermissionListComponent {
  static {
    this.ɵfac = function UserGroupPermissionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupPermissionListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserGroupPermissionListComponent,
      selectors: [["cx-org-user-group-permission-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UserGroupPermissionListService
      }])],
      decls: 4,
      vars: 4,
      consts: [[3, "previous"], ["actions", "", "routerLink", "../", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UserGroupPermissionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list", 0)(1, "a", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("previous", false);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "organization.done"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupPermissionListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-group-permission-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UserGroupPermissionListService
      }],
      standalone: false,
      template: `<cx-org-sub-list [previous]="false">
  <a actions class="link btn btn-link btn-sm" routerLink="../">
    {{ 'organization.done' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UserGroupPermissionModule = class _UserGroupPermissionModule {
  static {
    this.ɵfac = function UserGroupPermissionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupPermissionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserGroupPermissionModule,
      declarations: [UserGroupPermissionListComponent, UserGroupAssignedPermissionListComponent],
      imports: [CommonModule, I18nModule, RouterModule, SubListModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, RouterModule, SubListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupPermissionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, RouterModule, SubListModule],
      declarations: [UserGroupPermissionListComponent, UserGroupAssignedPermissionListComponent]
    }]
  }], null, null);
})();
var PermissionDetailsCellComponent = class _PermissionDetailsCellComponent extends CellComponent {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵPermissionDetailsCellComponent_BaseFactory;
      return function PermissionDetailsCellComponent_Factory(__ngFactoryType__) {
        return (ɵPermissionDetailsCellComponent_BaseFactory || (ɵPermissionDetailsCellComponent_BaseFactory = ɵɵgetInheritedFactory(_PermissionDetailsCellComponent)))(__ngFactoryType__ || _PermissionDetailsCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PermissionDetailsCellComponent,
      selectors: [["cx-org-permission-details-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 4,
      consts: [["details", ""], [1, "button", "btn", "btn-sm", "text", 3, "cxPopover", "cxPopoverOptions"], [1, "popover-details"], [1, "property"], [1, "value", 3, "routerLink"], [1, "value"], ["class", "property", 4, "ngIf"], ["class", "value", 3, "routerLink", 4, "ngIf"]],
      template: function PermissionDetailsCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, PermissionDetailsCellComponent_ng_template_0_Template, 28, 27, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementStart(2, "button", 1);
          ɵɵtext(3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const details_r2 = ɵɵreference(1);
          ɵɵadvance(2);
          ɵɵproperty("cxPopover", details_r2)("cxPopoverOptions", ɵɵpureFunction0(3, _c22));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.model.code, "\n");
        }
      },
      dependencies: [NgIf, PopoverDirective, RouterLink, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionDetailsCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-permission-details-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template #details>
  <div class="popover-details">
    <div class="property">
      <label>{{ 'orgPurchaseLimit.code' | cxTranslate }}</label>
      <a
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgPurchaseLimitDetails',
            params: model,
          } | cxUrl
        "
      >
        {{ model.code }}
      </a>
    </div>

    <div class="property">
      <label>{{ 'orgPurchaseLimit.active' | cxTranslate }}</label>
      <span class="value" [class.is-active]="model.active">
        {{
          (model.active ? 'organization.enabled' : 'organization.disabled')
            | cxTranslate
        }}
      </span>
    </div>

    <div class="property">
      <label>{{
        'orgPurchaseLimit.orderApprovalPermissionType' | cxTranslate
      }}</label>
      <span class="value">
        {{ model.orderApprovalPermissionType?.name }}
      </span>
    </div>

    <div class="property" *ngIf="model.threshold || model.threshold === 0">
      <label>{{ 'orgPurchaseLimit.threshold' | cxTranslate }}</label>
      <span class="value">
        {{ model.threshold }} {{ model.currency?.symbol }}
      </span>
    </div>

    <div class="property" *ngIf="model.periodRange">
      <label>{{ 'orgPurchaseLimit.periodRange' | cxTranslate }}</label>
      <span class="value">
        {{ model.periodRange }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgPurchaseLimit.unit' | cxTranslate }}</label>
      <a
        *ngIf="model.code"
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgUnitDetails',
            params: model.orgUnit,
          } | cxUrl
        "
      >
        {{ model.orgUnit?.name }}
      </a>
    </div>
  </div>
</ng-template>

<button
  class="button btn btn-sm text"
  [cxPopover]="details"
  [cxPopoverOptions]="{
    placement: 'auto',
    class: 'my-company-popover',
    appendToBody: true,
    displayCloseButton: true,
  }"
>
  {{ model.code }}
</button>
`
    }]
  }], null, null);
})();
var UserGroupListService = class _UserGroupListService extends ListService {
  constructor(tableService, userGroupService) {
    super(tableService);
    this.tableService = tableService;
    this.userGroupService = userGroupService;
    this.tableType = OrganizationTableType.USER_GROUP;
  }
  key() {
    return "uid";
  }
  load(pagination2) {
    return this.userGroupService.getList(pagination2).pipe(filter(isNotUndefined), map((raw) => this.convertUserGroups(raw)));
  }
  /**
   * Populates the cost center data to a convenient table data model, so that we
   * can skip specific conversion in the view logic where possible.
   */
  convertUserGroups({
    pagination: pagination2,
    sorts,
    values
  }) {
    const userGroupModels = {
      pagination: pagination2,
      sorts,
      values: values.map((value) => __spreadProps(__spreadValues({}, value), {
        unit: value.orgUnit
      }))
    };
    return userGroupModels;
  }
  static {
    this.ɵfac = function UserGroupListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupListService)(ɵɵinject(TableService), ɵɵinject(UserGroupService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGroupListService,
      factory: _UserGroupListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: UserGroupService
  }], null);
})();
var UserGroupRoutePageMetaResolver = class _UserGroupRoutePageMetaResolver extends DefaultRoutePageMetaResolver {
  constructor(translation, currentItemService) {
    super(translation);
    this.currentItemService = currentItemService;
  }
  getParams() {
    return this.currentItemService.item$;
  }
  static {
    this.ɵfac = function UserGroupRoutePageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupRoutePageMetaResolver)(ɵɵinject(TranslationService), ɵɵinject(CurrentUserGroupService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGroupRoutePageMetaResolver,
      factory: _UserGroupRoutePageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupRoutePageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: CurrentUserGroupService
  }], null);
})();
var UserGroupUserListService = class _UserGroupUserListService extends SubListService {
  constructor(tableService, userGroupService, userService) {
    super(tableService);
    this.tableService = tableService;
    this.userGroupService = userGroupService;
    this.userService = userService;
    this.tableType = OrganizationTableType.USER_GROUP_USERS;
    this._domainType = OrganizationTableType.USER;
  }
  /**
   *
   * @override
   * Loads all b2b users.
   *
   * @param code The user group code.
   */
  load(pagination2, code) {
    return this.userGroupService.getAvailableOrgCustomers(code, pagination2);
  }
  /**
   * @override
   * Assign user to the user group.
   */
  assign(userGroupCode, customerId) {
    this.userGroupService.assignMember(userGroupCode, customerId);
    return this.userService.getLoadingStatus(customerId);
  }
  /**
   * @override
   * Unassigns the user from the user group.
   */
  unassign(userGroupCode, customerId) {
    this.userGroupService.unassignMember(userGroupCode, customerId);
    return this.userService.getLoadingStatus(customerId);
  }
  unassignAllMembers(userGroupCode) {
    this.userGroupService.unassignAllMembers(userGroupCode);
    return this.userGroupService.getLoadingStatus(userGroupCode);
  }
  static {
    this.ɵfac = function UserGroupUserListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupUserListService)(ɵɵinject(TableService), ɵɵinject(UserGroupService), ɵɵinject(B2BUserService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGroupUserListService,
      factory: _UserGroupUserListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupUserListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: UserGroupService
  }, {
    type: B2BUserService
  }], null);
})();
var UserGroupAssignedUserListService = class _UserGroupAssignedUserListService extends UserGroupUserListService {
  constructor() {
    super(...arguments);
    this.tableType = OrganizationTableType.USER_GROUP_ASSIGNED_USERS;
  }
  /**
   * @override
   * Load all b2b users assigned to the given user group
   */
  load(pagination2, code) {
    return super.load(pagination2, code).pipe(map((users) => this.filterSelected(users)));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUserGroupAssignedUserListService_BaseFactory;
      return function UserGroupAssignedUserListService_Factory(__ngFactoryType__) {
        return (ɵUserGroupAssignedUserListService_BaseFactory || (ɵUserGroupAssignedUserListService_BaseFactory = ɵɵgetInheritedFactory(_UserGroupAssignedUserListService)))(__ngFactoryType__ || _UserGroupAssignedUserListService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserGroupAssignedUserListService,
      factory: _UserGroupAssignedUserListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupAssignedUserListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UserGroupAssignedUserListComponent = class _UserGroupAssignedUserListComponent {
  static {
    this.ɵfac = function UserGroupAssignedUserListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupAssignedUserListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserGroupAssignedUserListComponent,
      selectors: [["cx-org-user-group-assigned-user-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UserGroupAssignedUserListService
      }])],
      decls: 4,
      vars: 3,
      consts: [["actions", "", "routerLink", "assign", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UserGroupAssignedUserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list")(1, "a", 0);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "organization.assign"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupAssignedUserListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-group-assigned-user-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UserGroupAssignedUserListService
      }],
      standalone: false,
      template: `<cx-org-sub-list>
  <a actions class="link btn btn-link btn-sm" routerLink="assign">
    {{ 'organization.assign' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UserGroupUserListComponent = class _UserGroupUserListComponent {
  constructor(currentUserGroupService, userGroupUserListService) {
    this.currentUserGroupService = currentUserGroupService;
    this.userGroupUserListService = userGroupUserListService;
  }
  unassignAll() {
    this.currentUserGroupService.key$.pipe(first(), switchMap((key) => this.userGroupUserListService.unassignAllMembers(key).pipe(take(1), filter((data) => data.status === LoadStatus.SUCCESS)))).subscribe((data) => {
      this.notify(data.item);
    });
  }
  notify(item) {
    this.subList.messageService.add({
      message: {
        key: `orgUserGroupUsers.unassignAllConfirmation`,
        params: {
          item
        }
      }
    });
  }
  static {
    this.ɵfac = function UserGroupUserListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupUserListComponent)(ɵɵdirectiveInject(CurrentUserGroupService), ɵɵdirectiveInject(UserGroupUserListService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserGroupUserListComponent,
      selectors: [["cx-org-user-group-user-list"]],
      viewQuery: function UserGroupUserListComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c51, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.subList = _t.first);
        }
      },
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UserGroupUserListService
      }])],
      decls: 8,
      vars: 7,
      consts: [["subList", ""], [3, "previous"], ["actions", "", 1, "link", 3, "click"], ["actions", "", "routerLink", "../", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UserGroupUserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "cx-org-sub-list", 1, 0)(2, "button", 2);
          ɵɵlistener("click", function UserGroupUserListComponent_Template_button_click_2_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.unassignAll());
          });
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "a", 3);
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("previous", false);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "orgUserGroupUsers.unassignAll"), " ");
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 5, "organization.done"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupUserListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-group-user-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UserGroupUserListService
      }],
      standalone: false,
      template: `<cx-org-sub-list [previous]="false" #subList>
  <button actions (click)="unassignAll()" class="link">
    {{ 'orgUserGroupUsers.unassignAll' | cxTranslate }}
  </button>
  <a actions class="link btn btn-link btn-sm" routerLink="../">
    {{ 'organization.done' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], () => [{
    type: CurrentUserGroupService
  }, {
    type: UserGroupUserListService
  }], {
    subList: [{
      type: ViewChild,
      args: ["subList"]
    }]
  });
})();
var userGroupCmsConfig = {
  cmsComponents: {
    ManageUserGroupsListComponent: {
      component: ListComponent,
      providers: [{
        provide: ListService,
        useExisting: UserGroupListService
      }, {
        provide: ItemService,
        useExisting: UserGroupItemService
      }],
      childRoutes: {
        parent: {
          data: {
            cxPageMeta: {
              breadcrumb: "orgUserGroup.breadcrumbs.list",
              resolver: UserGroupRoutePageMetaResolver
            }
          }
        },
        children: [{
          path: "create",
          component: UserGroupFormComponent
        }, {
          path: `:${ROUTE_PARAMS.userGroupCode}`,
          component: UserGroupDetailsComponent,
          data: {
            cxPageMeta: {
              breadcrumb: "orgUserGroup.breadcrumbs.details"
            }
          },
          children: [{
            path: "edit",
            component: UserGroupFormComponent
          }, {
            path: "users",
            data: {
              cxPageMeta: {
                breadcrumb: "orgUserGroup.breadcrumbs.users"
              }
            },
            children: [{
              path: "",
              component: UserGroupAssignedUserListComponent
            }, {
              path: "assign",
              component: UserGroupUserListComponent
            }]
          }, {
            path: "purchase-limits",
            data: {
              cxPageMeta: {
                breadcrumb: "orgUserGroup.breadcrumbs.permissions"
              }
            },
            children: [{
              path: "",
              component: UserGroupAssignedPermissionListComponent
            }, {
              path: "assign",
              component: UserGroupPermissionListComponent
            }]
          }]
        }]
      },
      guards: [AuthGuard, AdminGuard]
    }
  }
};
function userGroupTableConfigFactory() {
  return userGroupTableConfig;
}
var userGroupTableConfig = {
  table: {
    [OrganizationTableType.USER_GROUP]: {
      cells: ["name", "uid", "unit"],
      options: {
        dataComponent: CellComponent,
        cells: {
          name: {
            dataComponent: ActiveLinkCellComponent,
            linkable: true
          },
          uid: {
            dataComponent: CellComponent
          },
          unit: {
            dataComponent: UnitCellComponent
          }
        }
      }
    },
    [OrganizationTableType.USER_GROUP_ASSIGNED_USERS]: {
      cells: ["name", "actions"],
      options: {
        cells: {
          name: {
            dataComponent: UserDetailsCellComponent
          },
          actions: {
            dataComponent: AssignCellComponent
          }
        },
        pagination: {
          pageSize: MAX_OCC_INTEGER_VALUE
        }
      }
    },
    [OrganizationTableType.USER_GROUP_USERS]: {
      cells: ["name", "actions"],
      options: {
        cells: {
          name: {
            dataComponent: UserDetailsCellComponent
          },
          actions: {
            dataComponent: AssignCellComponent
          }
        }
      }
    },
    [OrganizationTableType.USER_GROUP_PERMISSIONS]: {
      cells: ["code", "actions"],
      options: {
        cells: {
          code: {
            dataComponent: PermissionDetailsCellComponent
          },
          actions: {
            dataComponent: AssignCellComponent
          }
        }
      }
    },
    [OrganizationTableType.USER_GROUP_ASSIGNED_PERMISSIONS]: {
      cells: ["code", "actions"],
      options: {
        cells: {
          code: {
            dataComponent: PermissionDetailsCellComponent
          },
          actions: {
            dataComponent: AssignCellComponent
          }
        },
        pagination: {
          pageSize: MAX_OCC_INTEGER_VALUE
        }
      }
    }
  }
};
var UserGroupUserModule = class _UserGroupUserModule {
  static {
    this.ɵfac = function UserGroupUserModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupUserModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserGroupUserModule,
      declarations: [UserGroupAssignedUserListComponent, UserGroupUserListComponent],
      imports: [CommonModule, I18nModule, RouterModule, SubListModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, RouterModule, SubListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupUserModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, RouterModule, SubListModule],
      declarations: [UserGroupAssignedUserListComponent, UserGroupUserListComponent]
    }]
  }], null, null);
})();
var UserGroupComponentsModule = class _UserGroupComponentsModule {
  static {
    this.ɵfac = function UserGroupComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserGroupComponentsModule,
      imports: [SharedOrganizationModule, UserGroupDetailsModule, UserGroupFormModule, UserGroupPermissionModule, UserGroupUserModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(userGroupCmsConfig), provideDefaultConfigFactory(userGroupTableConfigFactory)],
      imports: [SharedOrganizationModule, UserGroupDetailsModule, UserGroupFormModule, UserGroupPermissionModule, UserGroupUserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [SharedOrganizationModule, UserGroupDetailsModule, UserGroupFormModule, UserGroupPermissionModule, UserGroupUserModule],
      providers: [provideDefaultConfig(userGroupCmsConfig), provideDefaultConfigFactory(userGroupTableConfigFactory)]
    }]
  }], null, null);
})();
var UserApproverListService = class _UserApproverListService extends SubListService {
  constructor(tableService, userService) {
    super(tableService);
    this.tableService = tableService;
    this.userService = userService;
    this.tableType = OrganizationTableType.USER_APPROVERS;
    this._domainType = OrganizationTableType.USER_GROUP;
  }
  load(pagination2, code) {
    return this.userService.getApprovers(code, pagination2);
  }
  /**
   * @override
   * Assign approver to the user.
   */
  assign(userCode, approverId) {
    this.userService.assignApprover(userCode, approverId);
    return this.userService.getLoadingStatus(approverId);
  }
  /**
   * @override
   * Unassign the approver from the user.
   */
  unassign(userCode, approverId) {
    this.userService.unassignApprover(userCode, approverId);
    return this.userService.getLoadingStatus(approverId);
  }
  static {
    this.ɵfac = function UserApproverListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserApproverListService)(ɵɵinject(TableService), ɵɵinject(B2BUserService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserApproverListService,
      factory: _UserApproverListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserApproverListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: B2BUserService
  }], null);
})();
var UserAssignedApproverListService = class _UserAssignedApproverListService extends UserApproverListService {
  constructor() {
    super(...arguments);
    this.tableType = OrganizationTableType.USER_ASSIGNED_APPROVERS;
  }
  load(pagination2, code) {
    return super.load(pagination2, code).pipe(map((users) => this.filterSelected(users)));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUserAssignedApproverListService_BaseFactory;
      return function UserAssignedApproverListService_Factory(__ngFactoryType__) {
        return (ɵUserAssignedApproverListService_BaseFactory || (ɵUserAssignedApproverListService_BaseFactory = ɵɵgetInheritedFactory(_UserAssignedApproverListService)))(__ngFactoryType__ || _UserAssignedApproverListService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserAssignedApproverListService,
      factory: _UserAssignedApproverListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAssignedApproverListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UserAssignedApproverListComponent = class _UserAssignedApproverListComponent {
  static {
    this.ɵfac = function UserAssignedApproverListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAssignedApproverListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserAssignedApproverListComponent,
      selectors: [["cx-org-user-assigned-approver-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UserAssignedApproverListService
      }])],
      decls: 4,
      vars: 3,
      consts: [["actions", "", "routerLink", "assign", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UserAssignedApproverListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list")(1, "a", 0);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "organization.assign"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAssignedApproverListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-assigned-approver-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UserAssignedApproverListService
      }],
      standalone: false,
      template: `<cx-org-sub-list>
  <a actions class="link btn btn-link btn-sm" routerLink="assign">
    {{ 'organization.assign' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UserApproverListComponent = class _UserApproverListComponent {
  static {
    this.ɵfac = function UserApproverListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserApproverListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserApproverListComponent,
      selectors: [["cx-org-user-approver-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UserApproverListService
      }])],
      decls: 4,
      vars: 4,
      consts: [[3, "previous"], ["actions", "", "routerLink", "../", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UserApproverListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list", 0)(1, "button", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("previous", false);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "organization.done"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserApproverListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-approver-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UserApproverListService
      }],
      standalone: false,
      template: `<cx-org-sub-list [previous]="false">
  <button actions class="link btn btn-link btn-sm" routerLink="../">
    {{ 'organization.done' | cxTranslate }}
  </button>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UserApproverListModule = class _UserApproverListModule {
  static {
    this.ɵfac = function UserApproverListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserApproverListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserApproverListModule,
      declarations: [UserApproverListComponent, UserAssignedApproverListComponent],
      imports: [ListModule, I18nModule, RouterModule, SubListModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ListModule, I18nModule, RouterModule, SubListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserApproverListModule, [{
    type: NgModule,
    args: [{
      imports: [ListModule, I18nModule, RouterModule, SubListModule],
      declarations: [UserApproverListComponent, UserAssignedApproverListComponent]
    }]
  }], null, null);
})();
var UserChangePasswordFormService = class _UserChangePasswordFormService extends FormService {
  /**
   * @override
   * Adds the password and confirmPassword field. Also adds the customerId field,
   * so that the customerId can be used during persistent.
   */
  build() {
    const passwordValidators = CustomFormValidators.passwordValidators;
    const form = new UntypedFormGroup({});
    form.setControl("customerId", new UntypedFormControl(""));
    form.setControl("password", new UntypedFormControl("", [Validators.required, ...passwordValidators]));
    form.setControl("confirmPassword", new UntypedFormControl("", [Validators.required, ...passwordValidators]));
    form.setValidators(CustomFormValidators.passwordsMustMatch("password", "confirmPassword"));
    this.form = form;
  }
  getForm(item) {
    this.form = null;
    return super.getForm(item);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUserChangePasswordFormService_BaseFactory;
      return function UserChangePasswordFormService_Factory(__ngFactoryType__) {
        return (ɵUserChangePasswordFormService_BaseFactory || (ɵUserChangePasswordFormService_BaseFactory = ɵɵgetInheritedFactory(_UserChangePasswordFormService)))(__ngFactoryType__ || _UserChangePasswordFormService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserChangePasswordFormService,
      factory: _UserChangePasswordFormService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserChangePasswordFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UserChangePasswordFormComponent = class _UserChangePasswordFormComponent {
  constructor(itemService, formService, messageService) {
    this.itemService = itemService;
    this.formService = formService;
    this.messageService = messageService;
    this.form$ = this.itemService.current$.pipe(map((item) => this.formService.getForm(item)));
    useFeatureStyles("a11yPasswordVisibliltyBtnValueOverflow");
  }
  save(form) {
    this.itemService.current$.pipe(first(), switchMap((item) => this.itemService.save(form, form.value.customerId).pipe(take(1), filter((data) => data.status === LoadStatus.SUCCESS), map((data) => __spreadValues(__spreadValues({}, item), data.item))))).subscribe((data) => {
      this.notify(data);
      this.itemService.launchDetails(data);
    });
  }
  notify(item) {
    this.messageService.add({
      message: {
        key: `orgUser.messages.updatePassword`,
        params: {
          item
        }
      }
    });
  }
  static {
    this.ɵfac = function UserChangePasswordFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserChangePasswordFormComponent)(ɵɵdirectiveInject(UserItemService), ɵɵdirectiveInject(UserChangePasswordFormService), ɵɵdirectiveInject(MessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserChangePasswordFormComponent,
      selectors: [["cx-org-user-change-password-form"]],
      hostAttrs: ["ngSkipHydration", "true", 1, "content-wrapper"],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[3, "formGroup", "submit", 4, "ngIf"], [3, "submit", "formGroup"], ["i18nRoot", "orgUser.password", 3, "previous", "cxFocus"], ["actions", "", 1, "button", "btn", "btn-sm", "primary", "btn-primary"], ["actions", "", "routerLink", "../", "type", "button", 1, "link", "btn", "btn-link", "btn-sm"], ["main", "", 1, "details"], [1, "full-width"], [1, "label-content"], ["required", "true", "type", "password", "name", "password", "formControlName", "password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "passwordError", 3, "translationParams", "control"], ["required", "true", "type", "password", "name", "confirmPassword", "formControlName", "confirmPassword", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "confirmPasswordError", 3, "translationParams", "control"]],
      template: function UserChangePasswordFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UserChangePasswordFormComponent_form_0_Template, 30, 45, "form", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.form$));
        }
      },
      dependencies: [NgIf, RouterLink, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, CardComponent, FocusDirective, PasswordVisibilityToggleDirective, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserChangePasswordFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-change-password-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper",
        ngSkipHydration: "true"
      },
      standalone: false,
      template: `<form *ngIf="form$ | async as form" [formGroup]="form" (submit)="save(form)">
  <cx-org-card
    [previous]="false"
    i18nRoot="orgUser.password"
    [cxFocus]="{ autofocus: 'input', refreshFocus: form }"
  >
    <button actions class="button btn btn-sm primary btn-primary">
      {{ 'organization.save' | cxTranslate }}
    </button>
    <button
      actions
      class="link btn btn-link btn-sm"
      routerLink="../"
      type="button"
    >
      {{ 'organization.cancel' | cxTranslate }}
    </button>

    <section main class="details">
      <cx-form-required-legend />

      <label class="full-width">
        <span class="label-content"
          >{{ 'orgUser.password.newPassword' | cxTranslate }}
          <cx-form-required-asterisks />
        </span>
        <input
          required="true"
          class="form-control"
          type="password"
          name="password"
          placeholder="{{ 'orgUser.password.newPassword' | cxTranslate }}"
          formControlName="password"
          [attr.aria-label]="'orgUser.password.newPassword' | cxTranslate"
          cxPasswordVisibilitySwitch
          [attr.aria-invalid]="
            form.get('password')?.touched && form.get('password')?.invalid
          "
          [attr.aria-errormessage]="'passwordError'"
        />

        <cx-form-errors
          id="passwordError"
          [translationParams]="{
            label: 'orgUser.password.newPassword' | cxTranslate,
          }"
          [control]="form.get('password')"
        ></cx-form-errors>
      </label>
      <label>
        <span class="label-content"
          >{{ 'orgUser.password.confirmPassword' | cxTranslate }}
          <cx-form-required-asterisks />
        </span>
        <input
          required="true"
          class="form-control"
          type="password"
          name="confirmPassword"
          placeholder="{{ 'orgUser.password.confirmPassword' | cxTranslate }}"
          formControlName="confirmPassword"
          [attr.aria-label]="'orgUser.password.confirmPassword' | cxTranslate"
          [attr.aria-invalid]="
            form.get('confirmPassword')?.touched &&
            form.get('confirmPassword')?.invalid
          "
          [attr.aria-errormessage]="'confirmPasswordError'"
          cxPasswordVisibilitySwitch
        />

        <cx-form-errors
          id="confirmPasswordError"
          [translationParams]="{
            label: 'orgUser.password.confirmPassword' | cxTranslate,
          }"
          [control]="form.get('confirmPassword')"
        ></cx-form-errors>
      </label>
    </section>
  </cx-org-card>
</form>
`
    }]
  }], () => [{
    type: UserItemService
  }, {
    type: UserChangePasswordFormService
  }, {
    type: MessageService
  }], null);
})();
var UserChangePasswordFormModule = class _UserChangePasswordFormModule {
  static {
    this.ɵfac = function UserChangePasswordFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserChangePasswordFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserChangePasswordFormModule,
      declarations: [UserChangePasswordFormComponent],
      imports: [CommonModule, RouterModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, CardModule, KeyboardFocusModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, CardModule, KeyboardFocusModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserChangePasswordFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, NgSelectModule, UrlModule, I18nModule, ReactiveFormsModule, FormErrorsModule, CardModule, KeyboardFocusModule, PasswordVisibilityToggleModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [UserChangePasswordFormComponent]
    }]
  }], null, null);
})();
var UserDetailsComponent = class _UserDetailsComponent {
  constructor(itemService, b2bUserService) {
    this.itemService = itemService;
    this.b2bUserService = b2bUserService;
    this.model$ = this.itemService.key$.pipe(switchMap((code) => this.itemService.load(code)), startWith({}));
    this.isInEditMode$ = this.itemService.isInEditMode$;
    this.isUpdatingUserAllowed = this.b2bUserService.isUpdatingUserAllowed();
    this.availableRoles = this.b2bUserService.getAllRoles().map((role) => role.toString());
    this.availableRights = this.b2bUserService.getAllRights().map((right) => right.toString());
  }
  hasRight(model) {
    return (model.roles ?? []).some((role) => this.availableRights.includes(role));
  }
  static {
    this.ɵfac = function UserDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserDetailsComponent)(ɵɵdirectiveInject(ItemService), ɵɵdirectiveInject(B2BUserService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserDetailsComponent,
      selectors: [["cx-org-user-details"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ItemService,
        useExisting: UserItemService
      }])],
      decls: 2,
      vars: 3,
      consts: [["showOrgUnitValueWithoutNavigation", ""], ["i18nRoot", "orgUser.details", 3, "cxFocus", 4, "ngIf"], ["i18nRoot", "orgUser.details", 3, "cxFocus"], ["actions", "", "class", "link btn btn-link btn-sm edit", 3, "disabled", "routerLink", 4, "ngIf"], ["actions", "", "key", "customerId", "i18nRoot", "orgUser", 4, "ngIf"], ["info", "", "i18nRoot", "orgUser"], ["main", "", "cxOrgItemExists", "", 1, "details"], [1, "property"], [1, "value"], [1, "property", "full-width"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "value", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["class", "link btn btn-link btn-sm", 3, "disabled", "routerLink", 4, "ngIf"], ["main", "", 1, "link-list"], ["actions", "", 1, "link", "btn", "btn-link", "btn-sm", "edit", 3, "routerLink"], ["actions", "", "key", "customerId", "i18nRoot", "orgUser"], [3, "innerText", 4, "ngIf"], [3, "innerText"], [1, "value", 3, "routerLink"], [1, "orgUnit"], [1, "link", "btn", "btn-link", "btn-sm", 3, "routerLink"], ["routerLinkActive", "is-current", 1, "link", "btn", "btn-link", "btn-sm", 3, "routerLink"]],
      template: function UserDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UserDetailsComponent_cx_org_card_0_Template, 36, 26, "cx-org-card", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.model$));
        }
      },
      dependencies: [NgForOf, NgIf, CardComponent, RouterLink, RouterLinkActive, ToggleStatusComponent, ItemExistsDirective, DisableInfoComponent, FocusDirective, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: ItemService,
        useExisting: UserItemService
      }],
      host: {
        class: "content-wrapper"
      },
      standalone: false,
      template: `<cx-org-card
  *ngIf="model$ | async as model"
  i18nRoot="orgUser.details"
  [cxFocus]="{ refreshFocus: model }"
>
  <a
    actions
    *ngIf="isUpdatingUserAllowed"
    class="link btn btn-link btn-sm edit"
    [class.disabled]="!model.active || (isInEditMode$ | async)"
    [routerLink]="{ cxRoute: 'orgUserEdit', params: model } | cxUrl"
  >
    {{ 'organization.edit' | cxTranslate }}
  </a>

  <cx-org-toggle-status
    actions
    *ngIf="isUpdatingUserAllowed"
    key="customerId"
    i18nRoot="orgUser"
  ></cx-org-toggle-status>

  <cx-org-disable-info info i18nRoot="orgUser"> </cx-org-disable-info>

  <section main class="details" cxOrgItemExists>
    <div class="property">
      <label>{{ 'orgUser.name' | cxTranslate }}</label>
      <span class="value">
        {{ model.name }}
      </span>
    </div>

    <div class="property full-width">
      <label>{{ 'orgUser.uid' | cxTranslate }}</label>
      <span class="value">
        {{ model.displayUid }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgUser.roles' | cxTranslate }}</label>
      <ul class="value">
        <ng-container *ngFor="let role of model.roles">
          <li
            *ngIf="availableRoles.includes(role)"
            [innerText]="'organization.userRoles.' + role | cxTranslate"
          ></li>
        </ng-container>
        <li *ngIf="model.roles?.length === 0">-</li>
      </ul>
    </div>

    <ng-container *ngIf="hasRight(model)">
      <div class="property">
        <label>{{ 'orgUser.rights' | cxTranslate }}</label>
        <ul class="value">
          <ng-container *ngFor="let role of model.roles">
            <li
              *ngIf="availableRights.includes(role)"
              [innerText]="'organization.userRights.' + role | cxTranslate"
            ></li>
          </ng-container>
          <li *ngIf="model.roles?.length === 0">-</li>
        </ul>
      </div>
    </ng-container>

    <div class="property">
      <label>{{ 'orgUser.orgUnit' | cxTranslate }}</label>
      <a
        *ngIf="isUpdatingUserAllowed; else showOrgUnitValueWithoutNavigation"
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgUnitDetails',
            params: model.orgUnit,
          } | cxUrl
        "
      >
        {{ model.orgUnit?.name }}
      </a>
      <ng-template #showOrgUnitValueWithoutNavigation>
        <div class="orgUnit">{{ model.orgUnit?.name }}</div>
      </ng-template>
    </div>
    <div class="property full-width">
      <a
        *ngIf="model.customerId && isUpdatingUserAllowed"
        class="link btn btn-link btn-sm"
        [class.disabled]="!model.active"
        [routerLink]="
          { cxRoute: 'orgUserChangePassword', params: model } | cxUrl
        "
      >
        {{ 'orgUser.links.password' | cxTranslate }}
      </a>
    </div>
  </section>

  <section main class="link-list">
    <ng-container *ngIf="model.customerId">
      <a
        class="link btn btn-link btn-sm"
        [routerLink]="{ cxRoute: 'orgUserApprovers', params: model } | cxUrl"
        routerLinkActive="is-current"
      >
        {{ 'orgUser.links.approvers' | cxTranslate }}
      </a>
      <a
        class="link btn btn-link btn-sm"
        [routerLink]="{ cxRoute: 'orgUserUserGroups', params: model } | cxUrl"
        routerLinkActive="is-current"
      >
        {{ 'orgUser.links.userGroup' | cxTranslate }}
      </a>

      <a
        class="link btn btn-link btn-sm"
        [routerLink]="{ cxRoute: 'orgUserPermissions', params: model } | cxUrl"
        routerLinkActive="is-current"
      >
        {{ 'orgUser.links.permission' | cxTranslate }}
      </a>
    </ng-container>
  </section>
</cx-org-card>
`
    }]
  }], () => [{
    type: ItemService
  }, {
    type: B2BUserService
  }], null);
})();
var UserDetailsModule = class _UserDetailsModule {
  static {
    this.ɵfac = function UserDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserDetailsModule,
      declarations: [UserDetailsComponent],
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule],
      exports: [UserDetailsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, RouterModule, UrlModule, I18nModule, ToggleStatusModule, ItemExistsModule, DisableInfoModule, KeyboardFocusModule],
      declarations: [UserDetailsComponent],
      exports: [UserDetailsComponent]
    }]
  }], null, null);
})();
var UserPermissionListService = class _UserPermissionListService extends SubListService {
  constructor(tableService, userService, permissionService) {
    super(tableService);
    this.tableService = tableService;
    this.userService = userService;
    this.permissionService = permissionService;
    this.tableType = OrganizationTableType.USER_PERMISSIONS;
    this._domainType = OrganizationTableType.PERMISSION;
  }
  load(pagination2, code) {
    return this.userService.getPermissions(code, pagination2);
  }
  /**
   * @override
   * Assign permission to the user.
   */
  assign(userCode, code) {
    this.userService.assignPermission(userCode, code);
    return this.permissionService.getLoadingStatus(code);
  }
  /**
   * @override
   * Unassign the permission from the user.
   */
  unassign(userCode, code) {
    this.userService.unassignPermission(userCode, code);
    return this.permissionService.getLoadingStatus(code);
  }
  static {
    this.ɵfac = function UserPermissionListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPermissionListService)(ɵɵinject(TableService), ɵɵinject(B2BUserService), ɵɵinject(PermissionService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserPermissionListService,
      factory: _UserPermissionListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPermissionListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: B2BUserService
  }, {
    type: PermissionService
  }], null);
})();
var UserAssignedPermissionListService = class _UserAssignedPermissionListService extends UserPermissionListService {
  constructor() {
    super(...arguments);
    this.tableType = OrganizationTableType.USER_ASSIGNED_PERMISSIONS;
  }
  load(pagination2, code) {
    return super.load(pagination2, code).pipe(map((result) => this.filterSelected(result)));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUserAssignedPermissionListService_BaseFactory;
      return function UserAssignedPermissionListService_Factory(__ngFactoryType__) {
        return (ɵUserAssignedPermissionListService_BaseFactory || (ɵUserAssignedPermissionListService_BaseFactory = ɵɵgetInheritedFactory(_UserAssignedPermissionListService)))(__ngFactoryType__ || _UserAssignedPermissionListService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserAssignedPermissionListService,
      factory: _UserAssignedPermissionListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAssignedPermissionListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UserAssignedPermissionListComponent = class _UserAssignedPermissionListComponent {
  static {
    this.ɵfac = function UserAssignedPermissionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAssignedPermissionListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserAssignedPermissionListComponent,
      selectors: [["cx-org-user-assigned-permission-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UserAssignedPermissionListService
      }])],
      decls: 4,
      vars: 3,
      consts: [["actions", "", "routerLink", "assign", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UserAssignedPermissionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list")(1, "a", 0);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "organization.assign"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAssignedPermissionListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-assigned-permission-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UserAssignedPermissionListService
      }],
      standalone: false,
      template: `<cx-org-sub-list>
  <a actions class="link btn btn-link btn-sm" routerLink="assign">
    {{ 'organization.assign' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UserPermissionListComponent = class _UserPermissionListComponent {
  static {
    this.ɵfac = function UserPermissionListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPermissionListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserPermissionListComponent,
      selectors: [["cx-org-user-permission-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UserPermissionListService
      }])],
      decls: 4,
      vars: 4,
      consts: [[3, "previous"], ["actions", "", "routerLink", "../", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UserPermissionListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list", 0)(1, "button", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("previous", false);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "organization.done"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPermissionListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-permission-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UserPermissionListService
      }],
      standalone: false,
      template: `<cx-org-sub-list [previous]="false">
  <button actions class="link btn btn-link btn-sm" routerLink="../">
    {{ 'organization.done' | cxTranslate }}
  </button>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UserPermissionListModule = class _UserPermissionListModule {
  static {
    this.ɵfac = function UserPermissionListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPermissionListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserPermissionListModule,
      declarations: [UserPermissionListComponent, UserAssignedPermissionListComponent],
      imports: [ListModule, I18nModule, RouterModule, SubListModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ListModule, I18nModule, RouterModule, SubListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPermissionListModule, [{
    type: NgModule,
    args: [{
      imports: [ListModule, I18nModule, RouterModule, SubListModule],
      declarations: [UserPermissionListComponent, UserAssignedPermissionListComponent]
    }]
  }], null, null);
})();
var UserUserGroupListService = class _UserUserGroupListService extends SubListService {
  constructor(tableService, userService, userGroupService) {
    super(tableService);
    this.tableService = tableService;
    this.userService = userService;
    this.userGroupService = userGroupService;
    this.tableType = OrganizationTableType.USER_USER_GROUPS;
    this._domainType = OrganizationTableType.USER_GROUP;
  }
  load(pagination2, code) {
    return this.userService.getUserGroups(code, pagination2);
  }
  /**
   * @override
   * Assign user group to the user.
   */
  assign(userCode, userGroupCode) {
    this.userService.assignUserGroup(userCode, userGroupCode);
    return this.userGroupService.getLoadingStatus(userGroupCode);
  }
  /**
   * @override
   * Unassign the user group from the user.
   */
  unassign(userCode, userGroupCode) {
    this.userService.unassignUserGroup(userCode, userGroupCode);
    return this.userGroupService.getLoadingStatus(userGroupCode);
  }
  static {
    this.ɵfac = function UserUserGroupListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserUserGroupListService)(ɵɵinject(TableService), ɵɵinject(B2BUserService), ɵɵinject(UserGroupService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserUserGroupListService,
      factory: _UserUserGroupListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserUserGroupListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: B2BUserService
  }, {
    type: UserGroupService
  }], null);
})();
var UserAssignedUserGroupListService = class _UserAssignedUserGroupListService extends UserUserGroupListService {
  constructor() {
    super(...arguments);
    this.tableType = OrganizationTableType.USER_ASSIGNED_USER_GROUPS;
  }
  load(pagination2, code) {
    return super.load(pagination2, code).pipe(filter((list) => Boolean(list)), map((userGroups) => this.filterSelected(userGroups)));
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUserAssignedUserGroupListService_BaseFactory;
      return function UserAssignedUserGroupListService_Factory(__ngFactoryType__) {
        return (ɵUserAssignedUserGroupListService_BaseFactory || (ɵUserAssignedUserGroupListService_BaseFactory = ɵɵgetInheritedFactory(_UserAssignedUserGroupListService)))(__ngFactoryType__ || _UserAssignedUserGroupListService);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserAssignedUserGroupListService,
      factory: _UserAssignedUserGroupListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAssignedUserGroupListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var UserAssignedUserGroupListComponent = class _UserAssignedUserGroupListComponent {
  static {
    this.ɵfac = function UserAssignedUserGroupListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserAssignedUserGroupListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserAssignedUserGroupListComponent,
      selectors: [["cx-org-user-assigned-user-group-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UserAssignedUserGroupListService
      }])],
      decls: 4,
      vars: 3,
      consts: [["actions", "", "routerLink", "assign", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UserAssignedUserGroupListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list")(1, "a", 0);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "organization.assign"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserAssignedUserGroupListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-assigned-user-group-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UserAssignedUserGroupListService
      }],
      standalone: false,
      template: `<cx-org-sub-list>
  <a actions class="link btn btn-link btn-sm" routerLink="assign">
    {{ 'organization.assign' | cxTranslate }}
  </a>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UserUserGroupListComponent = class _UserUserGroupListComponent {
  static {
    this.ɵfac = function UserUserGroupListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserUserGroupListComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserUserGroupListComponent,
      selectors: [["cx-org-user-user-group-list"]],
      hostAttrs: [1, "content-wrapper"],
      standalone: false,
      features: [ɵɵProvidersFeature([{
        provide: ListService,
        useExisting: UserUserGroupListService
      }])],
      decls: 4,
      vars: 4,
      consts: [[3, "previous"], ["actions", "", "routerLink", "../", 1, "link", "btn", "btn-link", "btn-sm"]],
      template: function UserUserGroupListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-org-sub-list", 0)(1, "button", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("previous", false);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "organization.done"), " ");
        }
      },
      dependencies: [RouterLink, SubListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserUserGroupListComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-user-group-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "content-wrapper"
      },
      providers: [{
        provide: ListService,
        useExisting: UserUserGroupListService
      }],
      standalone: false,
      template: `<cx-org-sub-list [previous]="false">
  <button actions class="link btn btn-link btn-sm" routerLink="../">
    {{ 'organization.done' | cxTranslate }}
  </button>
</cx-org-sub-list>
`
    }]
  }], null, null);
})();
var UserUserGroupsModule = class _UserUserGroupsModule {
  static {
    this.ɵfac = function UserUserGroupsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserUserGroupsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserUserGroupsModule,
      declarations: [UserUserGroupListComponent, UserAssignedUserGroupListComponent],
      imports: [ListModule, I18nModule, RouterModule, SubListModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ListModule, I18nModule, RouterModule, SubListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserUserGroupsModule, [{
    type: NgModule,
    args: [{
      imports: [ListModule, I18nModule, RouterModule, SubListModule],
      declarations: [UserUserGroupListComponent, UserAssignedUserGroupListComponent]
    }]
  }], null, null);
})();
var UserGroupDetailsCellComponent = class _UserGroupDetailsCellComponent extends CellComponent {
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵUserGroupDetailsCellComponent_BaseFactory;
      return function UserGroupDetailsCellComponent_Factory(__ngFactoryType__) {
        return (ɵUserGroupDetailsCellComponent_BaseFactory || (ɵUserGroupDetailsCellComponent_BaseFactory = ɵɵgetInheritedFactory(_UserGroupDetailsCellComponent)))(__ngFactoryType__ || _UserGroupDetailsCellComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _UserGroupDetailsCellComponent,
      selectors: [["cx-org-user-group-details-cell"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 4,
      consts: [["details", ""], [1, "button", "btn", "btn-sm", "text", 3, "cxPopover", "cxPopoverOptions"], [1, "popover-details"], [1, "property"], [1, "value", 3, "routerLink"], [1, "value"]],
      template: function UserGroupDetailsCellComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, UserGroupDetailsCellComponent_ng_template_0_Template, 21, 22, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementStart(2, "button", 1);
          ɵɵtext(3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const details_r2 = ɵɵreference(1);
          ɵɵadvance(2);
          ɵɵproperty("cxPopover", details_r2)("cxPopoverOptions", ɵɵpureFunction0(3, _c22));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.model == null ? null : ctx.model.name, "\n");
        }
      },
      dependencies: [PopoverDirective, RouterLink, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupDetailsCellComponent, [{
    type: Component,
    args: [{
      selector: "cx-org-user-group-details-cell",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-template #details>
  <div class="popover-details">
    <div class="property">
      <label>{{ 'orgUserGroup.name' | cxTranslate }}</label>
      <a
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgUserGroupDetails',
            params: model,
          } | cxUrl
        "
        >{{ model.name }}</a
      >
    </div>

    <div class="property">
      <label>{{ 'orgUserGroup.uid' | cxTranslate }}</label>
      <span class="value">
        {{ model.uid }}
      </span>
    </div>

    <div class="property">
      <label>{{ 'orgUserGroup.orgUnit' | cxTranslate }}</label>
      <a
        class="value"
        [routerLink]="
          {
            cxRoute: 'orgUnitDetails',
            params: model.orgUnit,
          } | cxUrl
        "
      >
        {{ model.orgUnit?.name }}
      </a>
    </div>
  </div>
</ng-template>

<button
  class="button btn btn-sm text"
  [cxPopover]="details"
  [cxPopoverOptions]="{
    placement: 'auto',
    class: 'my-company-popover',
    appendToBody: true,
    displayCloseButton: true,
  }"
>
  {{ model?.name }}
</button>
`
    }]
  }], null, null);
})();
var UserListService = class _UserListService extends ListService {
  constructor(tableService, userService) {
    super(tableService);
    this.tableService = tableService;
    this.userService = userService;
    this.tableType = OrganizationTableType.USER;
  }
  key() {
    return "customerId";
  }
  load(pagination2) {
    return this.userService.getList(pagination2).pipe(filter(isNotUndefined), map((raw) => this.convertUsers(raw)));
  }
  /**
   * Populates the cost center data to a convenient table data model, so that we
   * can skip specific conversion in the view logic where possible.
   */
  convertUsers({
    pagination: pagination2,
    sorts,
    values
  }) {
    const availableRoles = this.userService.getAllRoles();
    const userModels = {
      pagination: pagination2,
      sorts,
      values: values.map((value) => __spreadProps(__spreadValues({}, value), {
        unit: value.orgUnit,
        roles: value.roles?.filter((role) => availableRoles.includes(role))
      }))
    };
    return userModels;
  }
  static {
    this.ɵfac = function UserListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserListService)(ɵɵinject(TableService), ɵɵinject(B2BUserService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserListService,
      factory: _UserListService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserListService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TableService
  }, {
    type: B2BUserService
  }], null);
})();
var UserRoutePageMetaResolver = class _UserRoutePageMetaResolver extends DefaultRoutePageMetaResolver {
  constructor(translation, currentItemService) {
    super(translation);
    this.currentItemService = currentItemService;
  }
  getParams() {
    return this.currentItemService.item$;
  }
  static {
    this.ɵfac = function UserRoutePageMetaResolver_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserRoutePageMetaResolver)(ɵɵinject(TranslationService), ɵɵinject(CurrentUserService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _UserRoutePageMetaResolver,
      factory: _UserRoutePageMetaResolver.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserRoutePageMetaResolver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: CurrentUserService
  }], null);
})();
var userCmsConfig = {
  cmsComponents: {
    ManageUsersListComponent: {
      component: ListComponent,
      providers: [{
        provide: ListService,
        useExisting: UserListService
      }, {
        provide: ItemService,
        useExisting: UserItemService
      }],
      childRoutes: {
        parent: {
          data: {
            cxPageMeta: {
              breadcrumb: "orgUser.breadcrumbs.list",
              resolver: UserRoutePageMetaResolver
            }
          }
        },
        children: [{
          path: "create",
          component: UserFormComponent,
          canActivate: [UserGuard]
        }, {
          path: `:${ROUTE_PARAMS.userCode}`,
          component: UserDetailsComponent,
          data: {
            cxPageMeta: {
              breadcrumb: "orgUser.breadcrumbs.details"
            }
          },
          children: [{
            path: `edit`,
            component: UserFormComponent,
            canActivate: [UserGuard]
          }, {
            path: `change-password`,
            component: UserChangePasswordFormComponent,
            canActivate: [UserGuard]
          }, {
            path: "user-groups",
            data: {
              cxPageMeta: {
                breadcrumb: "orgUser.breadcrumbs.userGroups"
              }
            },
            children: [{
              path: "",
              component: UserAssignedUserGroupListComponent
            }, {
              path: "assign",
              component: UserUserGroupListComponent
            }]
          }, {
            path: "approvers",
            data: {
              cxPageMeta: {
                breadcrumb: "orgUser.breadcrumbs.approvers"
              }
            },
            children: [{
              path: "",
              component: UserAssignedApproverListComponent
            }, {
              path: "assign",
              component: UserApproverListComponent
            }]
          }, {
            path: "purchase-limits",
            data: {
              cxPageMeta: {
                breadcrumb: "orgUser.breadcrumbs.permissions"
              }
            },
            children: [{
              path: "",
              component: UserAssignedPermissionListComponent
            }, {
              path: "assign",
              component: UserPermissionListComponent
            }]
          }]
        }]
      },
      guards: [AuthGuard, AdminGuard]
    }
  }
};
function userTableConfigFactory() {
  return userTableConfig;
}
var actions = {
  dataComponent: AssignCellComponent
};
var pagination = {
  pageSize: MAX_OCC_INTEGER_VALUE
};
var userTableConfig = {
  table: {
    [OrganizationTableType.USER]: {
      cells: ["name", "active", "uid", "roles", "unit"],
      options: {
        cells: {
          name: {
            dataComponent: ActiveLinkCellComponent,
            linkable: true
          },
          active: {
            dataComponent: StatusCellComponent
          },
          uid: {
            dataComponent: CellComponent
          },
          roles: {
            dataComponent: RolesCellComponent
          },
          unit: {
            dataComponent: UnitCellComponent
          }
        }
      }
    },
    [OrganizationTableType.USER_APPROVERS]: {
      cells: ["name", "actions"],
      options: {
        cells: {
          name: {
            dataComponent: UserDetailsCellComponent
          },
          actions
        }
      }
    },
    [OrganizationTableType.USER_ASSIGNED_APPROVERS]: {
      cells: ["name", "actions"],
      options: {
        cells: {
          name: {
            dataComponent: UserDetailsCellComponent
          },
          actions
        },
        pagination
      }
    },
    [OrganizationTableType.USER_USER_GROUPS]: {
      cells: ["name", "actions"],
      options: {
        cells: {
          name: {
            dataComponent: UserGroupDetailsCellComponent
          },
          actions
        }
      }
    },
    [OrganizationTableType.USER_ASSIGNED_USER_GROUPS]: {
      cells: ["name", "actions"],
      options: {
        cells: {
          name: {
            dataComponent: UserGroupDetailsCellComponent
          },
          actions
        },
        pagination
      }
    },
    [OrganizationTableType.USER_PERMISSIONS]: {
      cells: ["code", "actions"],
      options: {
        cells: {
          code: {
            dataComponent: PermissionDetailsCellComponent
          },
          actions
        }
      }
    },
    [OrganizationTableType.USER_ASSIGNED_PERMISSIONS]: {
      cells: ["code", "actions"],
      options: {
        cells: {
          code: {
            dataComponent: PermissionDetailsCellComponent
          },
          actions
        },
        pagination
      }
    }
  }
};
var UserComponentsModule = class _UserComponentsModule {
  static {
    this.ɵfac = function UserComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserComponentsModule,
      imports: [ListModule, UserChangePasswordFormModule, UserDetailsModule, UserFormModule, UserPermissionListModule, UserUserGroupsModule, UserApproverListModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(userCmsConfig), provideDefaultConfigFactory(userTableConfigFactory)],
      imports: [ListModule, UserChangePasswordFormModule, UserDetailsModule, UserFormModule, UserPermissionListModule, UserUserGroupsModule, UserApproverListModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [ListModule, UserChangePasswordFormModule, UserDetailsModule, UserFormModule, UserPermissionListModule, UserUserGroupsModule, UserApproverListModule],
      providers: [provideDefaultConfig(userCmsConfig), provideDefaultConfigFactory(userTableConfigFactory)]
    }]
  }], null, null);
})();
var AdministrationComponentsModule = class _AdministrationComponentsModule {
  static {
    this.ɵfac = function AdministrationComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdministrationComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AdministrationComponentsModule,
      imports: [BudgetComponentsModule, CostCenterComponentsModule, UnitsComponentsModule, UserGroupComponentsModule, UserComponentsModule, PermissionComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [BudgetComponentsModule, CostCenterComponentsModule, UnitsComponentsModule, UserGroupComponentsModule, UserComponentsModule, PermissionComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministrationComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [BudgetComponentsModule, CostCenterComponentsModule, UnitsComponentsModule, UserGroupComponentsModule, UserComponentsModule, PermissionComponentsModule]
    }]
  }], null, null);
})();
var CostCenterDetailsCellModule = class _CostCenterDetailsCellModule {
  static {
    this.ɵfac = function CostCenterDetailsCellModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CostCenterDetailsCellModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CostCenterDetailsCellModule,
      declarations: [CostCenterDetailsCellComponent],
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      exports: [CostCenterDetailsCellComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CostCenterDetailsCellModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      declarations: [CostCenterDetailsCellComponent],
      exports: [CostCenterDetailsCellComponent]
    }]
  }], null, null);
})();
var PermissionDetailsCellModule = class _PermissionDetailsCellModule {
  static {
    this.ɵfac = function PermissionDetailsCellModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PermissionDetailsCellModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PermissionDetailsCellModule,
      declarations: [PermissionDetailsCellComponent],
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      exports: [PermissionDetailsCellComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PermissionDetailsCellModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      declarations: [PermissionDetailsCellComponent],
      exports: [PermissionDetailsCellComponent]
    }]
  }], null, null);
})();
var UnitDetailsCellModule = class _UnitDetailsCellModule {
  static {
    this.ɵfac = function UnitDetailsCellModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UnitDetailsCellModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UnitDetailsCellModule,
      declarations: [UnitDetailsCellComponent],
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      exports: [UnitDetailsCellComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UnitDetailsCellModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      declarations: [UnitDetailsCellComponent],
      exports: [UnitDetailsCellComponent]
    }]
  }], null, null);
})();
var UserGroupDetailsCellModule = class _UserGroupDetailsCellModule {
  static {
    this.ɵfac = function UserGroupDetailsCellModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserGroupDetailsCellModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserGroupDetailsCellModule,
      declarations: [UserGroupDetailsCellComponent],
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      exports: [UserGroupDetailsCellComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserGroupDetailsCellModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      declarations: [UserGroupDetailsCellComponent],
      exports: [UserGroupDetailsCellComponent]
    }]
  }], null, null);
})();
var UserDetailsCellModule = class _UserDetailsCellModule {
  static {
    this.ɵfac = function UserDetailsCellModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserDetailsCellModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _UserDetailsCellModule,
      declarations: [UserDetailsCellComponent],
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      exports: [UserDetailsCellComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDetailsCellModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PopoverModule, RouterModule, I18nModule, UrlModule],
      declarations: [UserDetailsCellComponent],
      exports: [UserDetailsCellComponent]
    }]
  }], null, null);
})();

export {
  B2BUserAdapter,
  BudgetAdapter,
  CostCenterAdapter,
  OrgUnitAdapter,
  PermissionAdapter,
  UserGroupAdapter,
  AdminGuard,
  B2BUserService,
  OrgUnitService,
  OrganizationPageMetaResolver,
  AdministrationCoreModule,
  B2B_USER_NORMALIZER,
  B2B_USER_SERIALIZER,
  B2B_USERS_NORMALIZER,
  BUDGET_NORMALIZER,
  BUDGETS_NORMALIZER,
  BUDGET_SERIALIZER,
  B2BUNIT_NODE_NORMALIZER,
  B2BUNIT_NODE_LIST_NORMALIZER,
  B2BUNIT_NORMALIZER,
  B2BUNIT_SERIALIZER,
  B2BUNIT_APPROVAL_PROCESSES_NORMALIZER,
  PERMISSION_NORMALIZER,
  PERMISSIONS_NORMALIZER,
  PERMISSION_TYPE_NORMALIZER,
  PERMISSION_TYPES_NORMALIZER,
  PERMISSION_SERIALIZER,
  USER_GROUP_NORMALIZER,
  USER_GROUP_SERIALIZER,
  USER_GROUPS_NORMALIZER,
  ItemService,
  CreateButtonType,
  ListService,
  ListComponent,
  ListModule,
  OrganizationTableType,
  UnitListComponent,
  ToggleLinkCellComponent,
  UnitListService,
  unitsCmsConfig,
  UserListService,
  userCmsConfig,
  AdministrationComponentsModule
};
//# sourceMappingURL=chunk-UQFD64K7.js.map
