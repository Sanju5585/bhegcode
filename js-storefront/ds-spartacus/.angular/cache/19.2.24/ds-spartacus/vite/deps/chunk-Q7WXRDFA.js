import {
  UserProfileFacade
} from "./chunk-YJXUXPBZ.js";
import {
  ActiveCartFacade,
  AddCartVoucherEvent,
  AddCartVoucherFailEvent,
  AddCartVoucherSuccessEvent,
  CartAccessCodeFacade,
  CartAddEntryEvent,
  CartAddEntryFailEvent,
  CartAddEntrySuccessEvent,
  CartConfig,
  CartGuestUserFacade,
  CartPageEvent,
  CartRemoveEntryFailEvent,
  CartRemoveEntrySuccessEvent,
  CartType,
  CartUpdateEntryFailEvent,
  CartUpdateEntrySuccessEvent,
  CartValidationFacade,
  CartValidationStatusCode,
  CartVoucherFacade,
  CreateCartEvent,
  CreateCartFailEvent,
  CreateCartSuccessEvent,
  DeleteCartEvent,
  DeleteCartFailEvent,
  DeleteCartSuccessEvent,
  MergeCartSuccessEvent,
  MultiCartFacade,
  ProductImportStatus,
  RemoveCartVoucherEvent,
  RemoveCartVoucherFailEvent,
  RemoveCartVoucherSuccessEvent,
  SelectiveCartFacade
} from "./chunk-KEAKWHYV.js";
import {
  NavigationEvent
} from "./chunk-D5RDRHN5.js";
import {
  BASE_SITE_CONTEXT_ID,
  BaseSiteService,
  CommandService,
  CommandStrategy,
  ConfigInitializerService,
  EMAIL_PATTERN,
  EventService,
  FeatureConfigService,
  GlobalMessageService,
  GlobalMessageType,
  HttpErrorHandler,
  HttpResponseStatus,
  LoggerService,
  MODULE_INITIALIZER,
  OAUTH_REDIRECT_FLOW_KEY,
  OCC_CART_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_GUEST,
  PROCESS_FEATURE,
  Priority,
  QueryService,
  RoutingService,
  SemanticPathService,
  SiteContextParamsService,
  StateEventService,
  StateModule,
  StatePersistenceService,
  StorageSyncType,
  UserIdService,
  WindowRef,
  authGroup_actions,
  createFrom,
  getLastValueSync,
  isNotUndefined,
  process_selectors,
  siteContextGroup_actions,
  tryNormalizeHttpError,
  utilsGroup,
  withdrawOn
} from "./chunk-VIVIQI6G.js";
import {
  Router
} from "./chunk-EBCNDD52.js";
import {
  Actions,
  EffectsFeatureModule,
  EffectsModule,
  createEffect,
  ofType
} from "./chunk-6KXUHIAW.js";
import {
  ActionsSubject,
  META_REDUCERS,
  Store,
  StoreFeatureModule,
  StoreModule,
  createFeatureSelector,
  createSelector,
  select
} from "./chunk-2FUOVDAV.js";
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
import {
  Injectable,
  InjectionToken,
  NgModule,
  inject,
  isDevMode,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  lastValueFrom,
  using
} from "./chunk-FBVS4YZX.js";
import {
  ReplaySubject,
  catchError,
  combineLatest,
  concat,
  concatMap,
  debounce,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  filter,
  from,
  groupBy,
  map,
  mergeMap,
  of,
  pairwise,
  shareReplay,
  take,
  tap,
  timer,
  withLatestFrom
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-core.mjs
var MULTI_CART_FEATURE = "cart";
var MULTI_CART_DATA = "[Multi Cart] Multi Cart Data";
var ADD_VOUCHER_PROCESS_ID = "addVoucher";
var CART_ADD_ENTRY = "[Cart-entry] Add Entry";
var CART_ADD_ENTRY_SUCCESS = "[Cart-entry] Add Entry Success";
var CART_ADD_ENTRY_FAIL = "[Cart-entry] Add Entry Fail";
var CART_REMOVE_ENTRY = "[Cart-entry] Remove Entry";
var CART_REMOVE_ENTRY_SUCCESS = "[Cart-entry] Remove Entry Success";
var CART_REMOVE_ENTRY_FAIL = "[Cart-entry] Remove Entry Fail";
var CART_UPDATE_ENTRY = "[Cart-entry] Update Entry";
var CART_UPDATE_ENTRY_SUCCESS = "[Cart-entry] Update Entry Success";
var CART_UPDATE_ENTRY_FAIL = "[Cart-entry] Update Entry Fail";
var CartAddEntry = class extends utilsGroup.EntityProcessesIncrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_ADD_ENTRY;
  }
};
var CartAddEntrySuccess = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_ADD_ENTRY_SUCCESS;
  }
};
var CartAddEntryFail = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_ADD_ENTRY_FAIL;
    this.error = payload.error;
  }
};
var CartRemoveEntry = class extends utilsGroup.EntityProcessesIncrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_REMOVE_ENTRY;
  }
};
var CartRemoveEntrySuccess = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_REMOVE_ENTRY_SUCCESS;
  }
};
var CartRemoveEntryFail = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_REMOVE_ENTRY_FAIL;
    this.error = payload.error;
  }
};
var CartUpdateEntry = class extends utilsGroup.EntityProcessesIncrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_UPDATE_ENTRY;
  }
};
var CartUpdateEntrySuccess = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_UPDATE_ENTRY_SUCCESS;
  }
};
var CartUpdateEntryFail = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_UPDATE_ENTRY_FAIL;
    this.error = payload.error;
  }
};
var CART_ADD_VOUCHER = "[Cart-voucher] Add Cart Vouchers";
var CART_ADD_VOUCHER_FAIL = "[Cart-voucher] Add Cart Voucher Fail";
var CART_ADD_VOUCHER_SUCCESS = "[Cart-voucher] Add Cart Voucher Success";
var CART_RESET_ADD_VOUCHER = "[Cart-voucher] Reset Add Cart Voucher";
var CART_REMOVE_VOUCHER = "[Cart-voucher] Remove Cart Voucher";
var CART_REMOVE_VOUCHER_FAIL = "[Cart-voucher] Remove Cart Voucher Fail";
var CART_REMOVE_VOUCHER_SUCCESS = "[Cart-voucher] Remove Cart Voucher Success";
var CartAddVoucher = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
    this.payload = payload;
    this.type = CART_ADD_VOUCHER;
  }
};
var CartAddVoucherFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = CART_ADD_VOUCHER_FAIL;
  }
};
var CartAddVoucherSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
    this.payload = payload;
    this.type = CART_ADD_VOUCHER_SUCCESS;
  }
};
var CartResetAddVoucher = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, ADD_VOUCHER_PROCESS_ID);
    this.type = CART_RESET_ADD_VOUCHER;
  }
};
var CartRemoveVoucher = class extends utilsGroup.EntityProcessesIncrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_REMOVE_VOUCHER;
  }
};
var CartRemoveVoucherFail = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_REMOVE_VOUCHER_FAIL;
    this.error = payload.error;
  }
};
var CartRemoveVoucherSuccess = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CART_REMOVE_VOUCHER_SUCCESS;
  }
};
var CREATE_CART = "[Cart] Create Cart";
var CREATE_CART_FAIL = "[Cart] Create Cart Fail";
var CREATE_CART_SUCCESS = "[Cart] Create Cart Success";
var LOAD_CART = "[Cart] Load Cart";
var LOAD_CART_FAIL = "[Cart] Load Cart Fail";
var LOAD_CART_SUCCESS = "[Cart] Load Cart Success";
var LOAD_CARTS_SUCCESS = "[Cart] Load Carts Success";
var ADD_EMAIL_TO_CART = "[Cart] Add Email to Cart";
var ADD_EMAIL_TO_CART_FAIL = "[Cart] Add Email to Cart Fail";
var ADD_EMAIL_TO_CART_SUCCESS = "[Cart] Add Email to Cart Success";
var MERGE_CART = "[Cart] Merge Cart";
var MERGE_CART_SUCCESS = "[Cart] Merge Cart Success";
var MERGE_CART_ABORT = "[Cart] Merge Cart Abort";
var RESET_CART_DETAILS = "[Cart] Reset Cart Details";
var REMOVE_CART = "[Cart] Remove Cart";
var DELETE_CART = "[Cart] Delete Cart";
var DELETE_CART_SUCCESS = "[Cart] Delete Cart Success";
var DELETE_CART_FAIL = "[Cart] Delete Cart Fail";
var CreateCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.tempCartId);
    this.payload = payload;
    this.type = CREATE_CART;
  }
};
var CreateCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.tempCartId, payload.error);
    this.payload = payload;
    this.type = CREATE_CART_FAIL;
  }
};
var CreateCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CREATE_CART_SUCCESS;
  }
};
var AddEmailToCart = class extends utilsGroup.EntityProcessesIncrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = ADD_EMAIL_TO_CART;
  }
};
var AddEmailToCartFail = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = ADD_EMAIL_TO_CART_FAIL;
    this.error = payload.error;
  }
};
var AddEmailToCartSuccess = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = ADD_EMAIL_TO_CART_SUCCESS;
  }
};
var LoadCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = LOAD_CART;
  }
};
var LoadCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId, payload.error);
    this.payload = payload;
    this.type = LOAD_CART_FAIL;
  }
};
var LoadCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = LOAD_CART_SUCCESS;
  }
};
var LoadCartsSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.map((cart) => cart?.code ?? ""));
    this.payload = payload;
    this.type = LOAD_CARTS_SUCCESS;
  }
};
var MergeCart = class {
  constructor(payload) {
    this.payload = payload;
    this.type = MERGE_CART;
  }
};
var MergeCartAndIncrementProcessesCount = class extends utilsGroup.EntityProcessesIncrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = MERGE_CART;
  }
};
var MergeCartSuccess = class extends utilsGroup.EntityRemoveAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.oldCartId);
    this.payload = payload;
    this.type = MERGE_CART_SUCCESS;
  }
};
var MergeCartAbort = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = MERGE_CART_ABORT;
    this.error = payload.error;
  }
};
var ResetCartDetails = class extends utilsGroup.ProcessesLoaderResetAction {
  constructor() {
    super(MULTI_CART_DATA);
    this.type = RESET_CART_DETAILS;
  }
};
var RemoveCart = class extends utilsGroup.EntityRemoveAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = REMOVE_CART;
  }
};
var DeleteCart = class {
  constructor(payload) {
    this.payload = payload;
    this.type = DELETE_CART;
  }
};
var DeleteCartSuccess = class extends utilsGroup.EntityRemoveAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = DELETE_CART_SUCCESS;
  }
};
var DeleteCartFail = class {
  constructor(payload) {
    this.payload = payload;
    this.type = DELETE_CART_FAIL;
    this.error = payload.error;
  }
};
var CART_PROCESSES_INCREMENT = "[Cart] Cart Processes Increment";
var CART_PROCESSES_DECREMENT = "[Cart] Cart Processes Decrement";
var SET_ACTIVE_CART_ID = "[Cart] Set Active Cart Id";
var CLEAR_CART_STATE = "[Cart] Clear Cart State";
var SET_CART_TYPE_INDEX = "[Cart] Set cart type index";
var SET_CART_DATA = "[Cart] Set cart data";
var CartProcessesIncrement = class extends utilsGroup.EntityProcessesIncrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload);
    this.payload = payload;
    this.type = CART_PROCESSES_INCREMENT;
  }
};
var CartProcessesDecrement = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload);
    this.payload = payload;
    this.type = CART_PROCESSES_DECREMENT;
  }
};
var SetActiveCartId = class {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_ACTIVE_CART_ID;
  }
};
var ClearCartState = class extends utilsGroup.EntityRemoveAllAction {
  constructor() {
    super(MULTI_CART_DATA);
    this.type = CLEAR_CART_STATE;
  }
};
var SetCartTypeIndex = class {
  constructor(payload) {
    this.payload = payload;
    this.type = SET_CART_TYPE_INDEX;
  }
};
var SetCartData = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = SET_CART_DATA;
  }
};
var cartGroup_actions = Object.freeze({
  __proto__: null,
  ADD_EMAIL_TO_CART,
  ADD_EMAIL_TO_CART_FAIL,
  ADD_EMAIL_TO_CART_SUCCESS,
  AddEmailToCart,
  AddEmailToCartFail,
  AddEmailToCartSuccess,
  CART_ADD_ENTRY,
  CART_ADD_ENTRY_FAIL,
  CART_ADD_ENTRY_SUCCESS,
  CART_ADD_VOUCHER,
  CART_ADD_VOUCHER_FAIL,
  CART_ADD_VOUCHER_SUCCESS,
  CART_PROCESSES_DECREMENT,
  CART_PROCESSES_INCREMENT,
  CART_REMOVE_ENTRY,
  CART_REMOVE_ENTRY_FAIL,
  CART_REMOVE_ENTRY_SUCCESS,
  CART_REMOVE_VOUCHER,
  CART_REMOVE_VOUCHER_FAIL,
  CART_REMOVE_VOUCHER_SUCCESS,
  CART_RESET_ADD_VOUCHER,
  CART_UPDATE_ENTRY,
  CART_UPDATE_ENTRY_FAIL,
  CART_UPDATE_ENTRY_SUCCESS,
  CLEAR_CART_STATE,
  CREATE_CART,
  CREATE_CART_FAIL,
  CREATE_CART_SUCCESS,
  CartAddEntry,
  CartAddEntryFail,
  CartAddEntrySuccess,
  CartAddVoucher,
  CartAddVoucherFail,
  CartAddVoucherSuccess,
  CartProcessesDecrement,
  CartProcessesIncrement,
  CartRemoveEntry,
  CartRemoveEntryFail,
  CartRemoveEntrySuccess,
  CartRemoveVoucher,
  CartRemoveVoucherFail,
  CartRemoveVoucherSuccess,
  CartResetAddVoucher,
  CartUpdateEntry,
  CartUpdateEntryFail,
  CartUpdateEntrySuccess,
  ClearCartState,
  CreateCart,
  CreateCartFail,
  CreateCartSuccess,
  DELETE_CART,
  DELETE_CART_FAIL,
  DELETE_CART_SUCCESS,
  DeleteCart,
  DeleteCartFail,
  DeleteCartSuccess,
  LOAD_CART,
  LOAD_CARTS_SUCCESS,
  LOAD_CART_FAIL,
  LOAD_CART_SUCCESS,
  LoadCart,
  LoadCartFail,
  LoadCartSuccess,
  LoadCartsSuccess,
  MERGE_CART,
  MERGE_CART_ABORT,
  MERGE_CART_SUCCESS,
  MergeCart,
  MergeCartAbort,
  MergeCartAndIncrementProcessesCount,
  MergeCartSuccess,
  REMOVE_CART,
  RESET_CART_DETAILS,
  RemoveCart,
  ResetCartDetails,
  SET_ACTIVE_CART_ID,
  SET_CART_DATA,
  SET_CART_TYPE_INDEX,
  SetActiveCartId,
  SetCartData,
  SetCartTypeIndex
});
var CartEntryAdapter = class {
};
var CartEntryConnector = class _CartEntryConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  add(userId, cartId, productCode, quantity, pickupStore) {
    return this.adapter.add(userId, cartId, productCode, quantity, pickupStore);
  }
  update(userId, cartId, entryNumber, qty, pickupStore, pickupToDelivery = false) {
    return this.adapter.update(userId, cartId, entryNumber, qty, pickupStore, pickupToDelivery);
  }
  remove(userId, cartId, entryNumber) {
    return this.adapter.remove(userId, cartId, entryNumber);
  }
  static {
    this.ɵfac = function CartEntryConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartEntryConnector)(ɵɵinject(CartEntryAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartEntryConnector,
      factory: _CartEntryConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartEntryConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CartEntryAdapter
  }], null);
})();
var CartEntryEffects = class _CartEntryEffects {
  constructor(actions$, cartEntryConnector) {
    this.actions$ = actions$;
    this.cartEntryConnector = cartEntryConnector;
    this.contextChange$ = this.actions$.pipe(ofType(siteContextGroup_actions.CURRENCY_CHANGE, siteContextGroup_actions.LANGUAGE_CHANGE));
    this.logger = inject(LoggerService);
    this.addEntry$ = createEffect(() => this.actions$.pipe(ofType(CART_ADD_ENTRY), map((action) => action.payload), concatMap((payload) => {
      return this.cartEntryConnector.add(payload.userId, payload.cartId, payload.productCode, payload.quantity, payload.pickupStore).pipe(map((cartModification) => new CartAddEntrySuccess(__spreadValues(__spreadValues({}, payload), cartModification))), catchError((error) => from([new CartAddEntryFail(__spreadProps(__spreadValues({}, payload), {
        error: tryNormalizeHttpError(error, this.logger)
      })), new LoadCart({
        cartId: payload.cartId,
        userId: payload.userId
      })])));
    }), withdrawOn(this.contextChange$)));
    this.removeEntry$ = createEffect(() => this.actions$.pipe(ofType(CART_REMOVE_ENTRY), map((action) => action.payload), concatMap((payload) => this.cartEntryConnector.remove(payload.userId, payload.cartId, payload.entryNumber).pipe(map(() => {
      return new CartRemoveEntrySuccess(__spreadValues({}, payload));
    }), catchError((error) => from([new CartRemoveEntryFail(__spreadProps(__spreadValues({}, payload), {
      error: tryNormalizeHttpError(error, this.logger)
    })), new LoadCart({
      cartId: payload.cartId,
      userId: payload.userId
    })])))), withdrawOn(this.contextChange$)));
    this.updateEntry$ = createEffect(() => this.actions$.pipe(ofType(CART_UPDATE_ENTRY), map((action) => action.payload), concatMap((payload) => this.cartEntryConnector.update(payload.userId, payload.cartId, payload.entryNumber, payload.quantity, payload.pickupStore, payload.pickupToDelivery).pipe(map(() => {
      return new CartUpdateEntrySuccess(__spreadValues({}, payload));
    }), catchError((error) => from([new CartUpdateEntryFail(__spreadProps(__spreadValues({}, payload), {
      error: tryNormalizeHttpError(error, this.logger)
    })), new LoadCart({
      cartId: payload.cartId,
      userId: payload.userId
    })])))), withdrawOn(this.contextChange$)));
  }
  static {
    this.ɵfac = function CartEntryEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartEntryEffects)(ɵɵinject(Actions), ɵɵinject(CartEntryConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartEntryEffects,
      factory: _CartEntryEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartEntryEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: CartEntryConnector
  }], null);
})();
var CartVoucherAdapter = class {
};
var CartVoucherConnector = class _CartVoucherConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  add(userId, cartId, voucherId) {
    return this.adapter.add(userId, cartId, voucherId);
  }
  remove(userId, cartId, voucherId) {
    return this.adapter.remove(userId, cartId, voucherId);
  }
  static {
    this.ɵfac = function CartVoucherConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartVoucherConnector)(ɵɵinject(CartVoucherAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartVoucherConnector,
      factory: _CartVoucherConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartVoucherConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CartVoucherAdapter
  }], null);
})();
var CartVoucherEffects = class _CartVoucherEffects {
  constructor(actions$, cartVoucherConnector, messageService) {
    this.actions$ = actions$;
    this.cartVoucherConnector = cartVoucherConnector;
    this.messageService = messageService;
    this.logger = inject(LoggerService);
    this.addCartVoucher$ = createEffect(() => this.actions$.pipe(ofType(CART_ADD_VOUCHER), map((action) => action.payload), mergeMap((payload) => {
      return this.cartVoucherConnector.add(payload.userId, payload.cartId, payload.voucherId).pipe(map(() => {
        this.showGlobalMessage("voucher.applyVoucherSuccess", payload.voucherId, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        return new CartAddVoucherSuccess(__spreadValues({}, payload));
      }), catchError((error) => from([new CartAddVoucherFail(__spreadProps(__spreadValues({}, payload), {
        error: tryNormalizeHttpError(error, this.logger)
      })), new CartProcessesDecrement(payload.cartId), new LoadCart({
        userId: payload.userId,
        cartId: payload.cartId
      })])));
    })));
    this.removeCartVoucher$ = createEffect(() => this.actions$.pipe(ofType(CART_REMOVE_VOUCHER), map((action) => action.payload), mergeMap((payload) => {
      return this.cartVoucherConnector.remove(payload.userId, payload.cartId, payload.voucherId).pipe(map(() => {
        this.showGlobalMessage("voucher.removeVoucherSuccess", payload.voucherId, GlobalMessageType.MSG_TYPE_INFO);
        return new CartRemoveVoucherSuccess({
          userId: payload.userId,
          cartId: payload.cartId,
          voucherId: payload.voucherId
        });
      }), catchError((error) => from([new CartRemoveVoucherFail({
        error: tryNormalizeHttpError(error, this.logger),
        cartId: payload.cartId,
        userId: payload.userId,
        voucherId: payload.voucherId
      }), new LoadCart({
        userId: payload.userId,
        cartId: payload.cartId
      })])));
    })));
  }
  showGlobalMessage(text, param, messageType) {
    this.messageService.add({
      key: text,
      params: {
        voucherCode: param
      }
    }, messageType);
  }
  static {
    this.ɵfac = function CartVoucherEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartVoucherEffects)(ɵɵinject(Actions), ɵɵinject(CartVoucherConnector), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartVoucherEffects,
      factory: _CartVoucherEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartVoucherEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: CartVoucherConnector
  }, {
    type: GlobalMessageService
  }], null);
})();
function getCartIdByUserId(cart, userId) {
  if (userId === OCC_USER_ID_ANONYMOUS) {
    return cart?.guid ?? "";
  }
  return cart?.code ?? "";
}
function isSelectiveCart(cartId = "") {
  return cartId.startsWith("selectivecart");
}
function isCartNotFoundError(error) {
  return error.reason === "notFound" && error.subjectType === "cart" && !isSelectiveCart(error.subject);
}
function voucherExceededError(error) {
  return error.message === "coupon.already.redeemed";
}
function voucherInvalidError(error) {
  return error.message === "coupon.invalid.code.provided";
}
function isVoucherError(error) {
  return error.type === "VoucherOperationError";
}
function isCartError(error) {
  return error.type === "CartError" || error.type === "CartAddressError" || error.type === "CartEntryError" || error.type === "CartEntryGroupError";
}
function isTempCartId(cartId) {
  return cartId.startsWith("temp-");
}
function isEmpty(cart) {
  return !cart || typeof cart === "object" && Object.keys(cart).length === 0;
}
function isEmail(str) {
  if (str) {
    return str.match(EMAIL_PATTERN) ? true : false;
  }
  return false;
}
function isJustLoggedIn(userId, previousUserId) {
  return userId !== OCC_USER_ID_ANONYMOUS && // not logged out
  previousUserId !== userId;
}
var getMultiCartState = createFeatureSelector(MULTI_CART_FEATURE);
var getMultiCartEntities = createSelector(getMultiCartState, (state) => state.carts);
var getCartEntitySelectorFactory = (cartId) => {
  return createSelector(getMultiCartEntities, (state) => utilsGroup.entityProcessesLoaderStateSelector(state, cartId));
};
var getCartSelectorFactory = (cartId) => {
  return createSelector(getMultiCartEntities, (state) => utilsGroup.entityValueSelector(state, cartId));
};
var getCartIsStableSelectorFactory = (cartId) => {
  return createSelector(getMultiCartEntities, (state) => utilsGroup.entityIsStableSelector(state, cartId));
};
var getCartHasPendingProcessesSelectorFactory = (cartId) => {
  return createSelector(getMultiCartEntities, (state) => utilsGroup.entityHasPendingProcessesSelector(state, cartId));
};
var getCartEntriesSelectorFactory = (cartId) => {
  return createSelector(getCartSelectorFactory(cartId), (state) => {
    return state && state.entries ? state.entries : [];
  });
};
var getCartEntrySelectorFactory = (cartId, productCode) => {
  return createSelector(getCartEntriesSelectorFactory(cartId), (state) => {
    return state.find((entry) => entry.product?.code === productCode);
  });
};
var getCartsSelectorFactory = createSelector(getMultiCartEntities, (state) => Object.keys(state.entities).map((key) => utilsGroup.entityValueSelector(state, key)));
var getCartTypeIndex = createSelector(getMultiCartState, (state) => state.index);
var getCartIdByTypeFactory = (type) => {
  return createSelector(getCartTypeIndex, (state) => {
    return state && state[type];
  });
};
var CartAdapter = class {
};
var CartConnector = class _CartConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  loadAll(userId) {
    return this.adapter.loadAll(userId);
  }
  load(userId, cartId) {
    return this.adapter.load(userId, cartId);
  }
  create(userId, oldCartId, toMergeCartGuid) {
    return this.adapter.create(userId, oldCartId, toMergeCartGuid);
  }
  delete(userId, cartId) {
    return this.adapter.delete(userId, cartId);
  }
  save(userId, cartId, saveCartName, saveCartDescription) {
    return this.adapter.save(userId, cartId, saveCartName, saveCartDescription);
  }
  addEmail(userId, cartId, email) {
    return this.adapter.addEmail(userId, cartId, email);
  }
  static {
    this.ɵfac = function CartConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartConnector)(ɵɵinject(CartAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartConnector,
      factory: _CartConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CartAdapter
  }], null);
})();
var CartEffects = class _CartEffects {
  handleLoadCartError(payload, error) {
    if (error?.error?.errors) {
      const couponExpiredErrors = error.error.errors.filter((err) => err.reason === "invalid");
      if (couponExpiredErrors.length > 0) {
        return of(new LoadCart(__spreadValues({}, payload)));
      }
      const cartNotFoundErrors = error.error.errors.filter((err) => isCartNotFoundError(err) || err.reason === "UnknownResourceError");
      if (cartNotFoundErrors.length > 0) {
        return of(new RemoveCart({
          cartId: payload.cartId
        }));
      }
    }
    return of(new LoadCartFail(__spreadProps(__spreadValues({}, payload), {
      error: tryNormalizeHttpError(error, this.logger)
    })));
  }
  constructor(actions$, cartConnector, store) {
    this.actions$ = actions$;
    this.cartConnector = cartConnector;
    this.store = store;
    this.contextChange$ = this.actions$.pipe(ofType(siteContextGroup_actions.CURRENCY_CHANGE, siteContextGroup_actions.LANGUAGE_CHANGE));
    this.logger = inject(LoggerService);
    this.loadCart$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CART), map((action) => action.payload), groupBy((payload) => payload.cartId), mergeMap((group$) => group$.pipe(switchMap((payload) => {
      return of(payload).pipe(withLatestFrom(this.store.pipe(select(getCartHasPendingProcessesSelectorFactory(payload.cartId)))));
    }), filter(([_, hasPendingProcesses]) => !hasPendingProcesses), map(([payload]) => payload), switchMap((payload) => {
      return this.cartConnector.load(payload.userId, payload.cartId).pipe(mergeMap((cart) => {
        let actions = [];
        if (cart) {
          actions.push(new LoadCartSuccess(__spreadProps(__spreadValues({}, payload), {
            cart,
            cartId: getCartIdByUserId(cart, payload.userId)
          })));
          if (payload.cartId === OCC_CART_ID_CURRENT) {
            actions.push(new RemoveCart({
              cartId: OCC_CART_ID_CURRENT
            }));
          }
        } else {
          actions = [new LoadCartFail(__spreadProps(__spreadValues({}, payload), {
            error: {}
          }))];
        }
        return actions;
      }), catchError((error) => this.handleLoadCartError(payload, error)));
    }))), withdrawOn(this.contextChange$)));
    this.createCart$ = createEffect(() => this.actions$.pipe(ofType(CREATE_CART), map((action) => action.payload), mergeMap((payload) => {
      return this.cartConnector.create(payload.userId, payload.oldCartId, payload.toMergeCartGuid).pipe(switchMap((cart) => {
        const conditionalActions = [];
        if (payload.oldCartId) {
          conditionalActions.push(new MergeCartSuccess({
            extraData: payload.extraData,
            userId: payload.userId,
            tempCartId: payload.tempCartId,
            cartId: getCartIdByUserId(cart, payload.userId),
            oldCartId: payload.oldCartId
          }));
        }
        return [new CreateCartSuccess(__spreadProps(__spreadValues({}, payload), {
          cart,
          cartId: getCartIdByUserId(cart, payload.userId)
        })), new RemoveCart({
          cartId: payload.tempCartId
        }), ...conditionalActions];
      }), catchError((error) => of(new CreateCartFail(__spreadProps(__spreadValues({}, payload), {
        error: tryNormalizeHttpError(error, this.logger)
      })))));
    }), withdrawOn(this.contextChange$)));
    this.mergeCart$ = createEffect(() => this.actions$.pipe(ofType(MERGE_CART), map((action) => action.payload), switchMap((payload) => {
      return this.cartConnector.load(payload.userId, OCC_CART_ID_CURRENT).pipe(mergeMap((currentCart) => {
        if (currentCart?.code !== payload.cartId) {
          return of(new CreateCart({
            userId: payload.userId,
            oldCartId: payload.cartId,
            toMergeCartGuid: currentCart ? currentCart.guid : void 0,
            extraData: payload.extraData,
            tempCartId: payload.tempCartId
          }));
        } else {
          return of(new CreateCartSuccess({
            userId: payload.userId,
            cart: currentCart,
            cartId: getCartIdByUserId(currentCart, payload.userId),
            extraData: payload.extraData,
            tempCartId: payload.tempCartId
          }), new MergeCartAbort({
            cartId: getCartIdByUserId(currentCart, payload.userId)
          }));
        }
      }), catchError((error) => concat(of(new MergeCartAbort({
        cartId: payload.cartId,
        error: tryNormalizeHttpError(error, this.logger)
      })), of(new RemoveCart({
        cartId: payload.cartId
      })))), filter(isNotUndefined));
    }), withdrawOn(this.contextChange$)));
    this.refresh$ = createEffect(() => this.actions$.pipe(ofType(CART_ADD_VOUCHER_SUCCESS), map((action) => action.payload), concatMap((payload) => from([new CartProcessesDecrement(payload.cartId), new LoadCart({
      userId: payload.userId,
      cartId: payload.cartId
    })]))));
    this.refreshWithoutProcesses$ = createEffect(() => this.actions$.pipe(ofType(CART_ADD_ENTRY_SUCCESS, CART_REMOVE_ENTRY_SUCCESS, CART_UPDATE_ENTRY_SUCCESS, CART_REMOVE_VOUCHER_SUCCESS), map((action) => action.payload), map((payload) => new LoadCart({
      userId: payload.userId,
      cartId: payload.cartId
    }))));
    this.resetCartDetailsOnSiteContextChange$ = createEffect(() => this.actions$.pipe(ofType(siteContextGroup_actions.LANGUAGE_CHANGE, siteContextGroup_actions.CURRENCY_CHANGE), mergeMap(() => {
      return [new ResetCartDetails()];
    })));
    this.addEmail$ = createEffect(() => this.actions$.pipe(ofType(ADD_EMAIL_TO_CART), map((action) => action.payload), mergeMap((payload) => this.cartConnector.addEmail(payload.userId, payload.cartId, payload.email).pipe(mergeMap(() => {
      return [new AddEmailToCartSuccess(__spreadValues({}, payload)), new LoadCart({
        userId: payload.userId,
        cartId: payload.cartId
      })];
    }), catchError((error) => from([new AddEmailToCartFail(__spreadProps(__spreadValues({}, payload), {
      error: tryNormalizeHttpError(error, this.logger)
    })), new LoadCart({
      userId: payload.userId,
      cartId: payload.cartId
    })])))), withdrawOn(this.contextChange$)));
    this.deleteCart$ = createEffect(() => this.actions$.pipe(ofType(DELETE_CART), map((action) => action.payload), mergeMap((payload) => this.cartConnector.delete(payload.userId, payload.cartId).pipe(map(() => {
      return new DeleteCartSuccess(__spreadValues({}, payload));
    }), catchError((error) => from([
      new DeleteCartFail(__spreadProps(__spreadValues({}, payload), {
        error: tryNormalizeHttpError(error, this.logger)
      })),
      // Error might happen in higher backend layer and cart could still be removed.
      // When load fail with NotFound error then RemoveCart action will kick in and clear that cart in our state.
      new LoadCart(__spreadValues({}, payload))
    ]))))));
  }
  static {
    this.ɵfac = function CartEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartEffects)(ɵɵinject(Actions), ɵɵinject(CartConnector), ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartEffects,
      factory: _CartEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: CartConnector
  }, {
    type: Store
  }], null);
})();
var MultiCartEffectsService = class _MultiCartEffectsService {
  /**
   * Verifies if cart is the active cart or saved cart and returns the appropriate cart type
   * @param action
   * @returns cart type
   */
  getActiveCartTypeOnLoadSuccess(action) {
    if (action?.payload?.extraData?.active) {
      if (action.payload?.cart.saveTime) {
        return new SetCartTypeIndex({
          cartType: CartType.ACTIVE,
          cartId: ""
        });
      }
      return new SetCartTypeIndex({
        cartType: CartType.ACTIVE,
        cartId: action.meta.entityId
      });
    }
  }
  static {
    this.ɵfac = function MultiCartEffectsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MultiCartEffectsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MultiCartEffectsService,
      factory: _MultiCartEffectsService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiCartEffectsService, [{
    type: Injectable
  }], null, null);
})();
var MultiCartEffects = class _MultiCartEffects {
  /**
   * Verifies if cart is the current cart and returns the appropriate cart type
   * @param action
   * @returns cart type needed on load
   */
  getActiveCartTypeOnLoad(action) {
    if (action?.payload?.cartId === OCC_CART_ID_CURRENT) {
      return new SetCartTypeIndex({
        cartType: CartType.ACTIVE,
        cartId: ""
      });
    }
    return void 0;
  }
  /**
   * Verifies if cart is the active cart or saved cart and returns the appropriate cart type
   * @param action
   * @returns cart type
   */
  getActiveCartTypeOnLoadSuccess(action) {
    return this.multiCartEffectsService.getActiveCartTypeOnLoadSuccess(action);
  }
  /**
   * Verifies if cart is active and returns the appropriate cart type
   * @param action
   * @returns cart type needed on creation
   */
  getActiveCartTypeOnCreate(action) {
    if (action?.payload?.extraData?.active) {
      return new SetCartTypeIndex({
        cartType: CartType.ACTIVE,
        cartId: action.meta.entityId
      });
    }
    return void 0;
  }
  constructor(actions$, multiCartEffectsService) {
    this.actions$ = actions$;
    this.multiCartEffectsService = multiCartEffectsService;
    this.processesIncrement$ = createEffect(() => this.actions$.pipe(ofType(CART_ADD_VOUCHER), map((action) => action.payload), map((payload) => new CartProcessesIncrement(payload.cartId))));
    this.setSelectiveId$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CART_SUCCESS), map((action) => {
      switch (action.type) {
        case LOAD_CART_SUCCESS: {
          const payload = action.payload;
          if (isSelectiveCart(payload.cartId)) {
            return new SetCartTypeIndex({
              cartType: CartType.SELECTIVE,
              cartId: payload.cartId
            });
          }
          break;
        }
      }
    }), filter(isNotUndefined)));
    this.setActiveCartId$ = createEffect(() => this.actions$.pipe(ofType(LOAD_CART_SUCCESS, LOAD_CART, CREATE_CART_SUCCESS, CREATE_CART, SET_ACTIVE_CART_ID), map((action) => {
      switch (action.type) {
        case LOAD_CART: {
          return this.getActiveCartTypeOnLoad(action);
        }
        case LOAD_CART_SUCCESS: {
          return this.getActiveCartTypeOnLoadSuccess(action);
        }
        case CREATE_CART: {
          return this.getActiveCartTypeOnCreate(action);
        }
        case CREATE_CART_SUCCESS: {
          return new SetCartTypeIndex({
            cartType: action?.payload?.extraData?.active ? CartType.ACTIVE : CartType.NEW_CREATED,
            cartId: action.meta.entityId
          });
        }
        case SET_ACTIVE_CART_ID:
          return new SetCartTypeIndex({
            cartType: CartType.ACTIVE,
            cartId: action.payload
          });
      }
      return void 0;
    }), filter(isNotUndefined)));
  }
  static {
    this.ɵfac = function MultiCartEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MultiCartEffects)(ɵɵinject(Actions), ɵɵinject(MultiCartEffectsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MultiCartEffects,
      factory: _MultiCartEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiCartEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: MultiCartEffectsService
  }], null);
})();
var effects = [CartEntryEffects, CartVoucherEffects, CartEffects, MultiCartEffects];
var cartTypeIndexInitialState = {
  [CartType.ACTIVE]: ""
};
function cartTypeIndexReducer(state = cartTypeIndexInitialState, action) {
  switch (action.type) {
    case SET_CART_TYPE_INDEX:
      return __spreadProps(__spreadValues({}, state), {
        [action.payload.cartType]: action.payload.cartId
      });
    case REMOVE_CART:
    case DELETE_CART_SUCCESS: {
      if (action.payload?.cartId === state[CartType.ACTIVE]) {
        return __spreadProps(__spreadValues({}, state), {
          [CartType.ACTIVE]: ""
        });
      }
      return state;
    }
    case CLEAR_CART_STATE:
      return cartTypeIndexInitialState;
  }
  return state;
}
var cartEntitiesInitialState = void 0;
function cartEntitiesReducer(state = cartEntitiesInitialState, action) {
  switch (action.type) {
    case LOAD_CARTS_SUCCESS:
      return action.payload;
    case LOAD_CART_SUCCESS:
    case CREATE_CART_SUCCESS:
    case SET_CART_DATA:
      return action.payload.cart;
  }
  return state;
}
function clearMultiCartState(reducer) {
  return function(state, action) {
    if (action.type === authGroup_actions.LOGOUT) {
      state = void 0;
    }
    return reducer(state, action);
  };
}
var multiCartMetaReducers = [clearMultiCartState];
var multiCartReducerToken = new InjectionToken("MultiCartReducers");
function getMultiCartReducers() {
  return {
    carts: utilsGroup.entityProcessesLoaderReducer(MULTI_CART_DATA, cartEntitiesReducer),
    index: cartTypeIndexReducer
  };
}
var multiCartReducerProvider = {
  provide: multiCartReducerToken,
  useFactory: getMultiCartReducers
};
var multiCartGroup_selectors = Object.freeze({
  __proto__: null,
  getCartEntitySelectorFactory,
  getCartEntriesSelectorFactory,
  getCartEntrySelectorFactory,
  getCartHasPendingProcessesSelectorFactory,
  getCartIdByTypeFactory,
  getCartIsStableSelectorFactory,
  getCartSelectorFactory,
  getCartTypeIndex,
  getCartsSelectorFactory,
  getMultiCartEntities,
  getMultiCartState
});
var MultiCartStatePersistenceService = class _MultiCartStatePersistenceService {
  constructor(statePersistenceService, store, siteContextParamsService) {
    this.statePersistenceService = statePersistenceService;
    this.store = store;
    this.siteContextParamsService = siteContextParamsService;
    this.subscription = new Subscription();
  }
  initSync() {
    this.subscription.add(this.statePersistenceService.syncWithStorage({
      key: "cart",
      state$: this.getCartState(),
      context$: this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]),
      storageType: StorageSyncType.LOCAL_STORAGE,
      onRead: (state) => this.onRead(state)
    }));
  }
  getCartState() {
    return this.store.pipe(
      // Since getCartState() may be called while the module is lazy loded
      // The cart state slice may not exist yet in the first store emissions.
      filter((store) => !!store.cart),
      select(getMultiCartState),
      filter((state) => !!state),
      map((state) => state.index),
      distinctUntilKeyChanged("Active"),
      map((indexState) => {
        return {
          active: indexState[CartType.ACTIVE] ?? ""
        };
      })
    );
  }
  onRead(state) {
    this.store.dispatch(new ClearCartState());
    if (state) {
      this.store.dispatch(new SetActiveCartId(state.active));
    } else {
      this.store.dispatch(new SetActiveCartId(""));
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function MultiCartStatePersistenceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MultiCartStatePersistenceService)(ɵɵinject(StatePersistenceService), ɵɵinject(Store), ɵɵinject(SiteContextParamsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MultiCartStatePersistenceService,
      factory: _MultiCartStatePersistenceService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiCartStatePersistenceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: StatePersistenceService
  }, {
    type: Store
  }, {
    type: SiteContextParamsService
  }], null);
})();
function cartStatePersistenceFactory(cartStatePersistenceService, configInit) {
  return () => lastValueFrom(configInit.getStable("context").pipe(tap(() => {
    cartStatePersistenceService.initSync();
  })));
}
function uninitializeActiveCartMetaReducerFactory() {
  const metaReducer = (reducer) => (state, action) => {
    const newState = __spreadValues({}, state);
    if (action.type === "@ngrx/store/init") {
      newState.cart = __spreadValues(__spreadValues({}, newState.cart), {
        index: {
          [CartType.ACTIVE]: void 0
        }
      });
    }
    return reducer(newState, action);
  };
  return metaReducer;
}
var CartPersistenceModule = class _CartPersistenceModule {
  static {
    this.ɵfac = function CartPersistenceModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartPersistenceModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartPersistenceModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: MODULE_INITIALIZER,
        useFactory: cartStatePersistenceFactory,
        deps: [MultiCartStatePersistenceService, ConfigInitializerService],
        multi: true
      }, {
        provide: META_REDUCERS,
        useFactory: uninitializeActiveCartMetaReducerFactory,
        multi: true
      }]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartPersistenceModule, [{
    type: NgModule,
    args: [{
      imports: [],
      providers: [{
        provide: MODULE_INITIALIZER,
        useFactory: cartStatePersistenceFactory,
        deps: [MultiCartStatePersistenceService, ConfigInitializerService],
        multi: true
      }, {
        provide: META_REDUCERS,
        useFactory: uninitializeActiveCartMetaReducerFactory,
        multi: true
      }]
    }]
  }], null, null);
})();
var CartAccessCodeAdapter = class {
};
var CartAccessCodeConnector = class _CartAccessCodeConnector {
  constructor() {
    this.adapter = inject(CartAccessCodeAdapter);
  }
  getCartAccessCode(userId, cartId) {
    return this.adapter.getCartAccessCode(userId, cartId);
  }
  static {
    this.ɵfac = function CartAccessCodeConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartAccessCodeConnector)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartAccessCodeConnector,
      factory: _CartAccessCodeConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartAccessCodeConnector, [{
    type: Injectable
  }], null, null);
})();
var CART_ACCESS_CODE_NORMALIZER = new InjectionToken("CartAccessCodeNormalizer");
var CartGuestUserAdapter = class {
};
var CartGuestUserConnector = class _CartGuestUserConnector {
  constructor() {
    this.adapter = inject(CartGuestUserAdapter);
  }
  createCartGuestUser(userId, cartId, guestUserDetails) {
    return this.adapter.createCartGuestUser(userId, cartId, guestUserDetails);
  }
  updateCartGuestUser(userId, cartId, guestUserDetails) {
    return this.adapter.updateCartGuestUser(userId, cartId, guestUserDetails);
  }
  static {
    this.ɵfac = function CartGuestUserConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartGuestUserConnector)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartGuestUserConnector,
      factory: _CartGuestUserConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartGuestUserConnector, [{
    type: Injectable
  }], null, null);
})();
var CART_GUEST_USER_NORMALIZER = new InjectionToken("CartGuestUserNormalizer");
var CART_VALIDATION_NORMALIZER = new InjectionToken("CartValidationNormalizer");
var CartValidationAdapter = class {
};
var CartValidationConnector = class _CartValidationConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  validate(cartId, userId) {
    return this.adapter.validate(cartId, userId);
  }
  static {
    this.ɵfac = function CartValidationConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartValidationConnector)(ɵɵinject(CartValidationAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartValidationConnector,
      factory: _CartValidationConnector.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartValidationConnector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CartValidationAdapter
  }], null);
})();
var CartEventBuilder = class _CartEventBuilder {
  constructor(actionsSubject, event, activeCartService, stateEventService) {
    this.actionsSubject = actionsSubject;
    this.event = event;
    this.activeCartService = activeCartService;
    this.stateEventService = stateEventService;
    this.register();
  }
  /**
   * Registers events for the active cart
   */
  register() {
    this.registerCreateCart();
    this.registerAddEntry();
    this.registerRemoveEntry();
    this.registerUpdateEntry();
    this.registerDeleteCart();
    this.registerAddCartVoucher();
    this.registerRemoveCartVoucher();
    this.registerMergeCartSuccess();
  }
  /**
   * Register events for adding entry to the active cart
   */
  registerAddEntry() {
    this.registerMapped({
      action: CART_ADD_ENTRY,
      event: CartAddEntryEvent
    });
    this.registerMapped({
      action: CART_ADD_ENTRY_SUCCESS,
      event: CartAddEntrySuccessEvent
    });
    this.registerMapped({
      action: CART_ADD_ENTRY_FAIL,
      event: CartAddEntryFailEvent
    });
  }
  registerRemoveEntry() {
    this.registerMapped({
      action: CART_REMOVE_ENTRY_SUCCESS,
      event: CartRemoveEntrySuccessEvent
    });
    this.registerMapped({
      action: CART_REMOVE_ENTRY_FAIL,
      event: CartRemoveEntryFailEvent
    });
  }
  registerUpdateEntry() {
    this.registerMapped({
      action: CART_UPDATE_ENTRY_SUCCESS,
      event: CartUpdateEntrySuccessEvent
    });
    this.registerMapped({
      action: CART_UPDATE_ENTRY_FAIL,
      event: CartUpdateEntryFailEvent
    });
  }
  registerMergeCartSuccess() {
    this.registerMapped({
      action: MERGE_CART_SUCCESS,
      event: MergeCartSuccessEvent
    });
  }
  registerCreateCart() {
    this.stateEventService.register({
      action: CREATE_CART,
      event: CreateCartEvent
    });
    this.stateEventService.register({
      action: CREATE_CART_SUCCESS,
      event: CreateCartSuccessEvent
    });
    this.stateEventService.register({
      action: CREATE_CART_FAIL,
      event: CreateCartFailEvent
    });
  }
  /**
   * Registers delete cart events
   */
  registerDeleteCart() {
    this.stateEventService.register({
      action: DELETE_CART,
      event: DeleteCartEvent,
      factory: (action) => createFrom(DeleteCartEvent, __spreadProps(__spreadValues({}, action.payload), {
        cartCode: action.payload.cartId
      }))
    });
    this.stateEventService.register({
      action: DELETE_CART_SUCCESS,
      event: DeleteCartSuccessEvent,
      factory: (action) => createFrom(DeleteCartSuccessEvent, __spreadProps(__spreadValues({}, action.payload), {
        cartCode: action.payload.cartId
      }))
    });
    this.stateEventService.register({
      action: DELETE_CART_FAIL,
      event: DeleteCartFailEvent,
      factory: (action) => createFrom(DeleteCartFailEvent, __spreadProps(__spreadValues({}, action.payload), {
        cartCode: action.payload.cartId
      }))
    });
  }
  registerAddCartVoucher() {
    this.stateEventService.register({
      action: CART_ADD_VOUCHER,
      event: AddCartVoucherEvent
    });
    this.stateEventService.register({
      action: CART_ADD_VOUCHER_SUCCESS,
      event: AddCartVoucherSuccessEvent
    });
    this.stateEventService.register({
      action: CART_ADD_VOUCHER_FAIL,
      event: AddCartVoucherFailEvent
    });
  }
  registerRemoveCartVoucher() {
    this.stateEventService.register({
      action: CART_REMOVE_VOUCHER,
      event: RemoveCartVoucherEvent
    });
    this.stateEventService.register({
      action: CART_REMOVE_VOUCHER_SUCCESS,
      event: RemoveCartVoucherSuccessEvent
    });
    this.stateEventService.register({
      action: CART_REMOVE_VOUCHER_FAIL,
      event: RemoveCartVoucherFailEvent
    });
  }
  /**
   * Registers a stream of target events mapped from the source actions that contain the cart id equal to the active cart id.
   *
   * @param mapping mapping declaration - from `action` string type to `event` class type
   *   (an with optional `factory` function - by default `action.payload` will be assigned to the properties of the event instance).
   */
  registerMapped(mapping) {
    const eventStream$ = this.getAction(mapping.action).pipe(switchMap((action) => {
      return of(action).pipe(withLatestFrom(this.activeCartService.getActive(), this.activeCartService.getActiveCartId()));
    }), filter(([action, _activeCart, activeCartId]) => action.payload["cartId"] === activeCartId), map(([action, activeCart]) => createFrom(mapping.event, __spreadProps(__spreadValues({}, action.payload), {
      cartCode: activeCart.code,
      entry: action.payload.entry ? action.payload.entry : activeCart.entries?.[Number(action.payload.entryNumber)]
    }))));
    return this.event.register(mapping.event, eventStream$);
  }
  /**
   * Returns a stream of actions only of a given type(s)
   *
   * @param actionType type(s) of actions
   */
  getAction(actionType) {
    return this.actionsSubject.pipe(ofType(...[].concat(actionType)));
  }
  static {
    this.ɵfac = function CartEventBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartEventBuilder)(ɵɵinject(ActionsSubject), ɵɵinject(EventService), ɵɵinject(ActiveCartFacade), ɵɵinject(StateEventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartEventBuilder,
      factory: _CartEventBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartEventBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActionsSubject
  }, {
    type: EventService
  }, {
    type: ActiveCartFacade
  }, {
    type: StateEventService
  }], null);
})();
var CartEventModule = class _CartEventModule {
  constructor(_CartEventBuilder) {
  }
  static {
    this.ɵfac = function CartEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartEventModule)(ɵɵinject(CartEventBuilder));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: CartEventBuilder
  }], null);
})();
var CartPageEventBuilder = class _CartPageEventBuilder {
  constructor(eventService) {
    this.eventService = eventService;
    this.register();
  }
  register() {
    this.eventService.register(CartPageEvent, this.buildCartPageEvent());
  }
  buildCartPageEvent() {
    return this.eventService.get(NavigationEvent).pipe(filter((navigationEvent) => navigationEvent.semanticRoute === "cart"), map((navigationEvent) => createFrom(CartPageEvent, {
      navigation: navigationEvent
    })));
  }
  static {
    this.ɵfac = function CartPageEventBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartPageEventBuilder)(ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartPageEventBuilder,
      factory: _CartPageEventBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartPageEventBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }], null);
})();
var CartPageEventModule = class _CartPageEventModule {
  constructor(_cartPageEventBuilder) {
  }
  static {
    this.ɵfac = function CartPageEventModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartPageEventModule)(ɵɵinject(CartPageEventBuilder));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartPageEventModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartPageEventModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: CartPageEventBuilder
  }], null);
})();
var ActiveCartService = class _ActiveCartService {
  constructor(multiCartFacade, userIdService, winRef) {
    this.multiCartFacade = multiCartFacade;
    this.userIdService = userIdService;
    this.winRef = winRef;
    this.subscription = new Subscription();
    this.activeCartId$ = this.userIdService.getUserId().pipe(
      // We want to wait the initialization of cartId until the userId is initialized
      // We have take(1) to not trigger this stream, when userId changes.
      take(1),
      switchMap(() => this.multiCartFacade.getCartIdByType(CartType.ACTIVE)),
      // We also wait until we initialize cart from localStorage
      filter((cartId) => cartId !== void 0),
      // fallback to current when we don't have particular cart id
      map((cartId) => cartId === "" ? OCC_CART_ID_CURRENT : cartId)
    );
    this.cartEntity$ = this.activeCartId$.pipe(switchMap((cartId) => this.multiCartFacade.getCartEntity(cartId)));
    this.shouldLoadCartOnCodeFlow = true;
    this.checkInitLoad = void 0;
    this.initActiveCart();
    this.detectUserChange();
  }
  initActiveCart() {
    const cartValue$ = this.cartEntity$.pipe(
      map((cartEntity) => {
        return {
          cart: cartEntity.value,
          isStable: !cartEntity.loading && cartEntity.processesCount === 0,
          loaded: Boolean((cartEntity.error || cartEntity.success) && !cartEntity.loading)
        };
      }),
      // we want to emit empty carts even if those are not stable
      // on merge cart action we want to switch to empty cart so no one would use old cartId which can be already obsolete
      // so on merge action the resulting stream looks like this: old_cart -> {} -> new_cart
      filter(({
        isStable,
        cart
      }) => isStable || isEmpty(cart))
    );
    const loading = cartValue$.pipe(withLatestFrom(this.activeCartId$, this.userIdService.getUserId()), tap(([{
      cart,
      loaded,
      isStable
    }, cartId, userId]) => {
      if (isStable && isEmpty(cart) && !loaded && !isTempCartId(cartId) && this.shouldLoadCartOnCodeFlow) {
        this.load(cartId, userId);
      }
    }));
    this.activeCart$ = using(() => loading.subscribe(), () => cartValue$).pipe(
      // Normalization for empty cart value returned as empty object.
      map(({
        cart
      }) => cart ? cart : {}),
      distinctUntilChanged(),
      shareReplay({
        bufferSize: 1,
        refCount: true
      })
    );
  }
  detectUserChange() {
    this.subscription.add(this.userIdService.getUserId().pipe(
      // We never trigger cart merge/load on app initialization here and that's why we wait with pairwise for a change of userId.
      pairwise(),
      // We need cartId once we have the previous and current userId. We don't want to subscribe to cartId stream before.
      withLatestFrom(this.activeCartId$)
    ).subscribe(([[previousUserId, userId], cartId]) => {
      if (isJustLoggedIn(userId, previousUserId)) {
        this.loadOrMerge(cartId, userId, previousUserId);
      }
    }));
    if (this.isLoggedInWithCodeFlow()) {
      this.shouldLoadCartOnCodeFlow = false;
      this.subscription.add(this.userIdService.getUserId().pipe(withLatestFrom(this.activeCartId$)).subscribe(([userId, cartId]) => {
        this.loadOrMerge(cartId, userId, OCC_USER_ID_ANONYMOUS);
        this.winRef?.localStorage?.removeItem(OAUTH_REDIRECT_FLOW_KEY);
      }));
    }
  }
  /**
   * Returns active cart
   */
  getActive() {
    return this.activeCart$;
  }
  /**
   * Waits for the cart to be stable before returning the active cart.
   */
  takeActive() {
    return this.isStable().pipe(filter((isStable) => isStable), switchMap(() => this.getActive()), filter((cart) => !!cart), take(1));
  }
  /**
   * Returns active cart id
   */
  getActiveCartId() {
    return this.activeCart$.pipe(withLatestFrom(this.userIdService.getUserId()), map(([cart, userId]) => getCartIdByUserId(cart, userId)), distinctUntilChanged());
  }
  /**
   * Waits for the cart to be stable before returning the active cart's ID.
   */
  takeActiveCartId() {
    return this.isStable().pipe(filter((isStable) => isStable), switchMap(() => this.getActiveCartId()), filter((cartId) => !!cartId), take(1));
  }
  /**
   * Returns cart entries
   */
  getEntries() {
    return this.activeCartId$.pipe(switchMap((cartId) => this.multiCartFacade.getEntries(cartId)), distinctUntilChanged());
  }
  /**
   * Returns last cart entry for provided product code.
   * Needed to cover processes where multiple entries can share the same product code
   * (e.g. promotions or configurable products)
   *
   * @param productCode
   */
  getLastEntry(productCode) {
    return this.activeCartId$.pipe(switchMap((cartId) => this.multiCartFacade.getLastEntry(cartId, productCode)), distinctUntilChanged());
  }
  /**
   * Returns cart loading state
   */
  getLoading() {
    return this.cartEntity$.pipe(map((cartEntity) => Boolean(cartEntity.loading)), distinctUntilChanged());
  }
  /**
   * Returns true when cart is stable (not loading and not pending processes on cart)
   */
  isStable() {
    return this.activeCartId$.pipe(switchMap((cartId) => this.multiCartFacade.isStable(cartId)));
  }
  /**
   * Loads cart in every case except anonymous user and current cart combination
   */
  load(cartId, userId) {
    if (!(userId === OCC_USER_ID_ANONYMOUS && cartId === OCC_CART_ID_CURRENT)) {
      this.multiCartFacade.loadCart({
        userId,
        cartId,
        extraData: {
          active: true
        }
      });
    }
  }
  /**
   * Loads cart upon login, whenever there's an existing cart, merge it into the current user cart
   * cartId will be defined (not '', null, undefined)
   */
  loadOrMerge(cartId, userId, previousUserId) {
    if (cartId === OCC_CART_ID_CURRENT || // It covers the case when you are logged in and then asm user login, you don't want to merge, but only load emulated user cart
    // Similarly when you are logged in as asm user and you logout and want to resume previous user session
    previousUserId !== OCC_USER_ID_ANONYMOUS) {
      this.multiCartFacade.loadCart({
        userId,
        cartId,
        extraData: {
          active: true
        }
      });
    } else if (Boolean(getLastValueSync(this.isGuestCart()))) {
      this.guestCartMerge(cartId);
    } else {
      this.multiCartFacade.mergeToCurrentCart({
        userId,
        cartId,
        extraData: {
          active: true
        }
      });
    }
  }
  // TODO: Remove once backend is updated
  /**
   * Temporary method to merge guest cart with user cart because of backend limitation
   * This is for an edge case
   */
  guestCartMerge(cartId) {
    this.getEntries().pipe(take(1)).subscribe((entries) => {
      this.multiCartFacade.deleteCart(cartId, OCC_USER_ID_ANONYMOUS);
      this.addEntriesGuestMerge(entries);
    });
  }
  /**
   * Adds entries from guest cart to user cart
   */
  addEntriesGuestMerge(cartEntries) {
    const entriesToAdd = cartEntries.map((entry) => ({
      productCode: entry.product?.code ?? "",
      quantity: entry.quantity ?? 0
    }));
    this.requireLoadedCart(true).pipe(withLatestFrom(this.userIdService.getUserId())).subscribe(([cart, userId]) => {
      this.multiCartFacade.addEntries(userId, getCartIdByUserId(cart, userId), entriesToAdd);
    });
  }
  isCartCreating(cartState, cartId) {
    return isTempCartId(cartId) && (cartState.loading || cartState.success || cartState.error);
  }
  /**
   * Check if user is just logged in with code flow
   */
  isLoggedInWithCodeFlow() {
    return !!this.winRef?.localStorage?.getItem(OAUTH_REDIRECT_FLOW_KEY);
  }
  requireLoadedCart(forGuestMerge = false) {
    this.checkInitLoad = this.checkInitLoad === void 0;
    const cartSelector$ = (forGuestMerge ? this.cartEntity$.pipe(filter(() => !Boolean(getLastValueSync(this.isGuestCart())))) : this.cartEntity$).pipe(filter((cartState) => !cartState.loading || !!this.checkInitLoad));
    return this.activeCartId$.pipe(
      // Avoid load/create call when there are new cart creating at the moment
      withLatestFrom(cartSelector$),
      filter(([cartId, cartState]) => !this.isCartCreating(cartState, cartId)),
      map(([, cartState]) => cartState),
      take(1)
    ).pipe(
      withLatestFrom(this.userIdService.getUserId()),
      tap(([cartState, userId]) => {
        if (isEmpty(cartState.value) && userId !== OCC_USER_ID_ANONYMOUS && !cartState.loading) {
          this.load(OCC_CART_ID_CURRENT, userId);
        }
        this.checkInitLoad = false;
      }),
      switchMap(() => cartSelector$),
      // create cart can happen to anonymous user if it is empty or to any other user if it is loaded and empty
      withLatestFrom(this.userIdService.getUserId()),
      filter(([cartState, userId]) => Boolean(userId === OCC_USER_ID_ANONYMOUS || cartState.success || cartState.error)),
      take(1)
    ).pipe(
      tap(([cartState, userId]) => {
        if (isEmpty(cartState.value)) {
          this.multiCartFacade.createCart({
            userId,
            extraData: {
              active: true
            }
          });
        }
      }),
      switchMap(() => cartSelector$),
      filter((cartState) => Boolean(cartState.success || cartState.error)),
      // wait for active cart id to point to code/guid to avoid some work on temp cart entity
      withLatestFrom(this.activeCartId$),
      filter(([cartState, cartId]) => !this.isCartCreating(cartState, cartId)),
      map(([cartState]) => cartState.value),
      filter((cart) => !isEmpty(cart)),
      take(1)
    );
  }
  /**
   * Add entry to active cart
   *
   * @param productCode
   * @param quantity
   * @param pickupStore
   */
  addEntry(productCode, quantity, pickupStore) {
    this.requireLoadedCart().pipe(withLatestFrom(this.userIdService.getUserId())).subscribe(([cart, userId]) => {
      this.multiCartFacade.addEntry(userId, getCartIdByUserId(cart, userId), productCode, quantity, pickupStore);
    });
  }
  /**
   * Remove entry
   *
   * @param entry
   */
  removeEntry(entry) {
    this.activeCartId$.pipe(withLatestFrom(this.userIdService.getUserId()), take(1)).subscribe(([cartId, userId]) => {
      this.multiCartFacade.removeEntry(userId, cartId, entry.entryNumber);
    });
  }
  /**
   * Update entry
   *
   * @param entryNumber
   * @param quantity
   * @param pickupStore
   * @param pickupToDelivery
   */
  updateEntry(entryNumber, quantity, pickupStore, pickupToDelivery = false) {
    this.activeCartId$.pipe(withLatestFrom(this.userIdService.getUserId()), take(1)).subscribe(([cartId, userId]) => {
      this.multiCartFacade.updateEntry(userId, cartId, entryNumber, quantity, pickupStore, pickupToDelivery);
    });
  }
  /**
   * Returns cart entry
   *
   * @param productCode
   */
  getEntry(productCode) {
    return this.activeCartId$.pipe(switchMap((cartId) => this.multiCartFacade.getEntry(cartId, productCode)), distinctUntilChanged());
  }
  /**
   * Assign email to cart
   *
   * @param email
   */
  addEmail(email) {
    this.activeCartId$.pipe(withLatestFrom(this.userIdService.getUserId()), take(1)).subscribe(([cartId, userId]) => {
      this.multiCartFacade.assignEmail(cartId, userId, email);
    });
  }
  /**
   * Get assigned user to cart
   */
  getAssignedUser() {
    return this.activeCart$.pipe(map((cart) => cart.user));
  }
  // TODO: Make cart required param in 4.0
  /**
   * Returns observable of true for guest cart
   */
  isGuestCart(cart) {
    return cart ? of(this.isCartUserGuest(cart)) : this.activeCart$.pipe(map((activeCart) => this.isCartUserGuest(activeCart)), distinctUntilChanged());
  }
  isCartUserGuest(cart) {
    const cartUser = cart.user;
    return Boolean(cartUser && (cartUser.name === OCC_USER_ID_GUEST || isEmail(cartUser.uid?.split("|").slice(1).join("|"))));
  }
  /**
   * Add multiple entries to a cart
   *
   * @param cartEntries : list of entries to add (OrderEntry[])
   */
  addEntries(cartEntries) {
    const entriesToAdd = cartEntries.map((entry) => ({
      productCode: entry.product?.code ?? "",
      quantity: entry.quantity ?? 0
    }));
    this.requireLoadedCart().pipe(withLatestFrom(this.userIdService.getUserId())).subscribe(([cart, userId]) => {
      if (cart) {
        this.multiCartFacade.addEntries(userId, getCartIdByUserId(cart, userId), entriesToAdd);
      }
    });
  }
  /**
   * Reloads active cart
   */
  reloadActiveCart() {
    combineLatest([this.getActiveCartId(), this.userIdService.takeUserId()]).pipe(take(1), map(([cartId, userId]) => {
      this.multiCartFacade.loadCart({
        cartId,
        userId,
        extraData: {
          active: true
        }
      });
    })).subscribe();
  }
  hasPickupItems() {
    return this.getActive().pipe(map((cart) => cart.pickupItemsQuantity ? cart.pickupItemsQuantity > 0 : false));
  }
  hasDeliveryItems() {
    return this.getActive().pipe(map((cart) => cart.deliveryItemsQuantity ? cart.deliveryItemsQuantity > 0 : false));
  }
  getPickupEntries() {
    return this.getEntries().pipe(map((entries) => entries.filter((entry) => entry.deliveryPointOfService !== void 0)));
  }
  getDeliveryEntries() {
    return this.getEntries().pipe(map((entries) => entries.filter((entry) => entry.deliveryPointOfService === void 0)));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function ActiveCartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActiveCartService)(ɵɵinject(MultiCartFacade), ɵɵinject(UserIdService), ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ActiveCartService,
      factory: _ActiveCartService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveCartService, [{
    type: Injectable
  }], () => [{
    type: MultiCartFacade
  }, {
    type: UserIdService
  }, {
    type: WindowRef
  }], null);
})();
var CartAccessCodeService = class _CartAccessCodeService {
  constructor() {
    this.queryService = inject(QueryService);
    this.commandService = inject(CommandService);
    this.cartAccessCodeConnector = inject(CartAccessCodeConnector);
    this.getCartAccessCodeCommand = this.commandService.create(({
      userId,
      cartId
    }) => this.cartAccessCodeConnector.getCartAccessCode(userId, cartId));
  }
  getCartAccessCode(userId, cartId) {
    return this.getCartAccessCodeCommand.execute({
      userId,
      cartId
    });
  }
  static {
    this.ɵfac = function CartAccessCodeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartAccessCodeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartAccessCodeService,
      factory: _CartAccessCodeService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartAccessCodeService, [{
    type: Injectable
  }], null, null);
})();
var CartGuestUserService = class _CartGuestUserService {
  constructor() {
    this.queryService = inject(QueryService);
    this.commandService = inject(CommandService);
    this.cartGuestUserConnector = inject(CartGuestUserConnector);
    this.createCartGuestUserCommand = this.commandService.create(({
      userId,
      cartId,
      guestUserDetails
    }) => this.cartGuestUserConnector.createCartGuestUser(userId, cartId, guestUserDetails));
    this.updateCartGuestUserCommand = this.commandService.create(({
      userId,
      cartId,
      guestUserDetails
    }) => this.cartGuestUserConnector.updateCartGuestUser(userId, cartId, guestUserDetails));
  }
  createCartGuestUser(userId, cartId, guestUserDetails) {
    return this.createCartGuestUserCommand.execute({
      userId,
      cartId,
      guestUserDetails
    });
  }
  updateCartGuestUser(userId, cartId, guestUserDetails) {
    return this.updateCartGuestUserCommand.execute({
      userId,
      cartId,
      guestUserDetails
    });
  }
  static {
    this.ɵfac = function CartGuestUserService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartGuestUserService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartGuestUserService,
      factory: _CartGuestUserService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartGuestUserService, [{
    type: Injectable
  }], null, null);
})();
var CartValidationStateService = class _CartValidationStateService {
  constructor(routingService) {
    this.routingService = routingService;
    this.NAVIGATION_SKIPS = 2;
    this.navigationIdCount = 0;
    this.subscription = new Subscription();
    this.cartValidationResult$ = new ReplaySubject(1);
    this.checkForValidationResultClear$ = this.routingService.getRouterState().pipe(withLatestFrom(this.cartValidationResult$), tap(([routerState, cartModifications]) => {
      if (this.navigationIdCount + this.NAVIGATION_SKIPS <= routerState.navigationId && cartModifications.length) {
        this.cartValidationResult$.next([]);
        this.navigationIdCount = routerState.navigationId;
      }
    }));
    this.setInitialState();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  setInitialState() {
    this.setNavigationIdStep();
    this.subscription.add(this.checkForValidationResultClear$.subscribe());
  }
  updateValidationResultAndRoutingId(cartModification) {
    this.cartValidationResult$.next(cartModification);
    this.setNavigationIdStep();
  }
  setNavigationIdStep() {
    this.routingService.getRouterState().pipe(take(1)).subscribe((routerState) => this.navigationIdCount = routerState.navigationId);
  }
  static {
    this.ɵfac = function CartValidationStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartValidationStateService)(ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartValidationStateService,
      factory: _CartValidationStateService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartValidationStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }], null);
})();
var CartValidationService = class _CartValidationService {
  constructor(cartValidationConnector, command, userIdService, activeCartFacade, cartValidationStateService) {
    this.cartValidationConnector = cartValidationConnector;
    this.command = command;
    this.userIdService = userIdService;
    this.activeCartFacade = activeCartFacade;
    this.cartValidationStateService = cartValidationStateService;
    this.validateCartCommand = this.command.create(() => combineLatest([this.activeCartFacade.getActiveCartId(), this.userIdService.takeUserId(), this.activeCartFacade.isStable()]).pipe(filter(([_, __, loaded]) => loaded), take(1), switchMap(([cartId, userId]) => this.cartValidationConnector.validate(cartId, userId))), {
      strategy: CommandStrategy.CancelPrevious
    });
  }
  /**
   * Validates cart and returns cart modification list.
   */
  validateCart() {
    return this.validateCartCommand.execute();
  }
  /**
   * Returns cart modification results
   */
  getValidationResults() {
    return this.cartValidationStateService.cartValidationResult$;
  }
  static {
    this.ɵfac = function CartValidationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartValidationService)(ɵɵinject(CartValidationConnector), ɵɵinject(CommandService), ɵɵinject(UserIdService), ɵɵinject(ActiveCartFacade), ɵɵinject(CartValidationStateService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartValidationService,
      factory: _CartValidationService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartValidationService, [{
    type: Injectable
  }], () => [{
    type: CartValidationConnector
  }, {
    type: CommandService
  }, {
    type: UserIdService
  }, {
    type: ActiveCartFacade
  }, {
    type: CartValidationStateService
  }], null);
})();
var CartVoucherService = class _CartVoucherService {
  constructor(store, activeCartFacade, userIdService) {
    this.store = store;
    this.activeCartFacade = activeCartFacade;
    this.userIdService = userIdService;
  }
  addVoucher(voucherId, cartId) {
    this.combineUserAndCartId(cartId).subscribe(([occUserId, cartIdentifier]) => this.store.dispatch(new CartAddVoucher({
      userId: occUserId,
      cartId: cartIdentifier,
      voucherId
    })));
  }
  removeVoucher(voucherId, cartId) {
    this.combineUserAndCartId(cartId).subscribe(([occUserId, cartIdentifier]) => this.store.dispatch(new CartRemoveVoucher({
      userId: occUserId,
      cartId: cartIdentifier,
      voucherId
    })));
  }
  /**
   * Get add voucher process error flag
   */
  getAddVoucherResultError() {
    return this.store.pipe(select(process_selectors.getProcessErrorFactory(ADD_VOUCHER_PROCESS_ID)));
  }
  /**
   * Get add voucher process success flag
   */
  getAddVoucherResultSuccess() {
    return this.store.pipe(select(process_selectors.getProcessSuccessFactory(ADD_VOUCHER_PROCESS_ID)));
  }
  /**
   * Get add voucher process loading flag
   */
  getAddVoucherResultLoading() {
    return this.store.pipe(select(process_selectors.getProcessLoadingFactory(ADD_VOUCHER_PROCESS_ID)));
  }
  /**
   * Reset add voucher process
   */
  resetAddVoucherProcessingState() {
    this.store.dispatch(new CartResetAddVoucher());
  }
  combineUserAndCartId(cartId) {
    if (cartId) {
      return this.userIdService.getUserId().pipe(take(1), map((userId) => [userId, cartId]));
    } else {
      return combineLatest([this.userIdService.getUserId(), this.activeCartFacade.getActiveCartId()]).pipe(take(1));
    }
  }
  static {
    this.ɵfac = function CartVoucherService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartVoucherService)(ɵɵinject(Store), ɵɵinject(ActiveCartFacade), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartVoucherService,
      factory: _CartVoucherService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartVoucherService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: ActiveCartFacade
  }, {
    type: UserIdService
  }], null);
})();
var MultiCartService = class _MultiCartService {
  constructor(store, userIdService) {
    this.store = store;
    this.userIdService = userIdService;
    this.featureConfigService = inject(FeatureConfigService);
    this.windowRef = inject(WindowRef);
  }
  /**
   * Returns cart from store as an observable
   *
   * @param cartId
   */
  getCart(cartId) {
    return this.store.pipe(select(getCartSelectorFactory(cartId)));
  }
  /**
   * Returns a list of carts from store as an observable
   *
   */
  getCarts() {
    return this.store.pipe(select(getCartsSelectorFactory));
  }
  /**
   * Returns cart entity from store (cart with loading, error, success flags) as an observable
   *
   * @param cartId
   */
  getCartEntity(cartId) {
    return this.store.pipe(select(getCartEntitySelectorFactory(cartId)));
  }
  /**
   * Returns true when there are no operations on that in progress and it is not currently loading
   *
   * @param cartId
   */
  isStable(cartId) {
    return this.store.pipe(
      select(getCartIsStableSelectorFactory(cartId)),
      // We dispatch a lot of actions just after finishing some process or loading, so we want this flag not to flicker.
      // This flickering should only be avoided when switching from false to true
      // Start of loading should be showed instantly (no debounce)
      // Extra actions are only dispatched after some loading
      debounce((isStable) => isStable ? timer(0) : of(void 0)),
      distinctUntilChanged()
    );
  }
  /**
   * Simple random temp cart id generator
   */
  generateTempCartId() {
    const array = new Uint32Array(1);
    this.windowRef.nativeWindow?.crypto.getRandomValues(array);
    const pseudoUuid = array[0].toString(36).substring(2, 11);
    return `temp-${pseudoUuid}`;
  }
  /**
   * Create or merge cart
   *
   * @param params Object with userId, oldCartId, toMergeCartGuid and extraData
   */
  createCart({
    userId,
    oldCartId,
    toMergeCartGuid,
    extraData
  }) {
    const tempCartId = this.generateTempCartId();
    this.store.dispatch(new CreateCart({
      extraData,
      userId,
      oldCartId,
      toMergeCartGuid,
      tempCartId
    }));
    return this.getCartIdByType(extraData?.active ? CartType.ACTIVE : CartType.NEW_CREATED).pipe(switchMap((cartId) => this.getCart(cartId)), filter(isNotUndefined));
  }
  /**
   * Merge provided cart to current user cart
   *
   * @param params Object with userId, cartId and extraData
   */
  mergeToCurrentCart({
    userId,
    cartId,
    extraData
  }) {
    const tempCartId = this.generateTempCartId();
    if (this.featureConfigService.isEnabled("incrementProcessesCountForMergeCart") || this.featureConfigService.isEnabled("authorizationCodeFlowByDefault")) {
      this.store.dispatch(new MergeCartAndIncrementProcessesCount({
        userId,
        cartId,
        extraData,
        tempCartId
      }));
    } else {
      this.store.dispatch(new MergeCart({
        userId,
        cartId,
        extraData,
        tempCartId
      }));
    }
  }
  /**
   * Load cart
   *
   * @param params Object with userId, cartId and extraData
   */
  loadCart({
    cartId,
    userId,
    extraData
  }) {
    this.store.dispatch(new LoadCart({
      userId,
      cartId,
      extraData
    }));
  }
  /**
   * Get cart entries as an observable
   * @param cartId
   */
  getEntries(cartId) {
    return this.store.pipe(select(getCartEntriesSelectorFactory(cartId)));
  }
  /**
   * Get last entry for specific product code from cart.
   * Needed to cover processes where multiple entries can share the same product code
   * (e.g. promotions or configurable products)
   *
   * @param cartId
   * @param productCode
   */
  getLastEntry(cartId, productCode) {
    return this.store.pipe(select(getCartEntriesSelectorFactory(cartId)), map((entries) => {
      const filteredEntries = entries.filter((entry) => entry.product?.code === productCode);
      return filteredEntries ? filteredEntries[filteredEntries.length - 1] : void 0;
    }));
  }
  /**
   * Add entry to cart
   *
   * @param userId
   * @param cartId
   * @param productCode
   * @param quantity
   * @param pickupStore
   */
  addEntry(userId, cartId, productCode, quantity, pickupStore) {
    this.store.dispatch(new CartAddEntry({
      userId,
      cartId,
      productCode,
      quantity,
      pickupStore
    }));
  }
  /**
   * Add multiple entries to cart
   *
   * @param userId
   * @param cartId
   * @param products Array with items (productCode and quantity)
   */
  addEntries(userId, cartId, products) {
    products.forEach((product) => {
      this.store.dispatch(new CartAddEntry({
        userId,
        cartId,
        productCode: product.productCode,
        quantity: product.quantity
      }));
    });
  }
  /**
   * Remove entry from cart
   *
   * @param userId
   * @param cartId
   * @param entryNumber
   */
  removeEntry(userId, cartId, entryNumber) {
    this.store.dispatch(new CartRemoveEntry({
      userId,
      cartId,
      entryNumber: `${entryNumber}`
    }));
  }
  /**
   * Update entry in cart. For quantity = 0 it removes entry
   *
   * @param userId
   * @param cartId
   * @param entryNumber
   * @param quantity
   * @param pickupStore
   * @param pickupToDelivery
   */
  updateEntry(userId, cartId, entryNumber, quantity, pickupStore, pickupToDelivery = false) {
    if (quantity !== void 0 && quantity <= 0) {
      this.removeEntry(userId, cartId, entryNumber);
    } else {
      this.store.dispatch(new CartUpdateEntry({
        userId,
        cartId,
        pickupStore,
        pickupToDelivery,
        entryNumber: `${entryNumber}`,
        quantity
      }));
    }
  }
  /**
   * Get first entry from cart matching the specified product code
   *
   * @param cartId
   * @param productCode
   */
  getEntry(cartId, productCode) {
    return this.store.pipe(select(getCartEntrySelectorFactory(cartId, productCode)));
  }
  /**
   * Assign email to the cart
   *
   * @param cartId
   * @param userId
   * @param email
   */
  assignEmail(cartId, userId, email) {
    this.store.dispatch(new AddEmailToCart({
      userId,
      cartId,
      email
    }));
  }
  removeCart(cartId) {
    this.store.dispatch(new RemoveCart({
      cartId
    }));
  }
  /**
   * Delete cart
   *
   * @param cartId
   * @param userId
   */
  deleteCart(cartId, userId) {
    this.store.dispatch(new DeleteCart({
      userId,
      cartId
    }));
  }
  /**
   * Reloads the cart with specified id.
   *
   * @param cartId
   * @param extraData
   */
  reloadCart(cartId, extraData) {
    this.userIdService.takeUserId().subscribe((userId) => this.store.dispatch(new LoadCart({
      userId,
      cartId,
      extraData
    })));
  }
  /**
   * Get the cart id based on cart type
   *
   * @param cartType
   */
  getCartIdByType(cartType) {
    return this.store.pipe(select(getCartIdByTypeFactory(cartType)), distinctUntilChanged());
  }
  static {
    this.ɵfac = function MultiCartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MultiCartService)(ɵɵinject(Store), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MultiCartService,
      factory: _MultiCartService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiCartService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }], null);
})();
var SelectiveCartService = class _SelectiveCartService {
  constructor(userProfileFacade, multiCartFacade, baseSiteService, userIdService) {
    this.userProfileFacade = userProfileFacade;
    this.multiCartFacade = multiCartFacade;
    this.baseSiteService = baseSiteService;
    this.userIdService = userIdService;
  }
  /**
   * Initialize the stream when first call this function
   */
  getCart() {
    if (!this.selectiveCart$) {
      this.selectiveCart$ = combineLatest([this.getSelectiveCartId(), this.userProfileFacade.get(), this.userIdService.getUserId(), this.baseSiteService.getActive()]).pipe(distinctUntilChanged(), tap(([selectiveId, user, userId, activeBaseSite]) => {
        if (!Boolean(selectiveId) && userId !== OCC_USER_ID_ANONYMOUS && user?.customerId) {
          this.multiCartFacade.loadCart({
            userId,
            cartId: `selectivecart${activeBaseSite}${user.customerId}`
          });
        }
      }), filter(([selectiveId]) => Boolean(selectiveId)), switchMap(([selectiveId]) => this.multiCartFacade.getCart(selectiveId)), shareReplay({
        bufferSize: 1,
        refCount: true
      }));
    }
    return this.selectiveCart$;
  }
  getEntries() {
    return this.getSelectiveCartId().pipe(switchMap((selectiveId) => this.multiCartFacade.getEntries(selectiveId)));
  }
  isStable() {
    return this.getSelectiveCartId().pipe(switchMap((selectiveId) => this.multiCartFacade.isStable(selectiveId)));
  }
  addEntry(productCode, quantity) {
    this.getSelectiveIdWithUserId().subscribe(([selectiveId, userId]) => {
      this.multiCartFacade.addEntry(userId, selectiveId, productCode, quantity);
    });
  }
  removeEntry(entry) {
    this.getSelectiveIdWithUserId().subscribe(([selectiveId, userId]) => {
      this.multiCartFacade.removeEntry(userId, selectiveId, entry.entryNumber);
    });
  }
  updateEntry(entryNumber, quantity) {
    this.getSelectiveIdWithUserId().subscribe(([selectiveId, userId]) => {
      this.multiCartFacade.updateEntry(userId, selectiveId, entryNumber, quantity);
    });
  }
  getEntry(productCode) {
    return this.getSelectiveCartId().pipe(switchMap((selectiveId) => this.multiCartFacade.getEntry(selectiveId, productCode)));
  }
  getSelectiveCartId() {
    return this.multiCartFacade.getCartIdByType(CartType.SELECTIVE);
  }
  getSelectiveIdWithUserId() {
    return this.getSelectiveCartId().pipe(distinctUntilChanged(), withLatestFrom(this.userIdService.getUserId()), take(1));
  }
  static {
    this.ɵfac = function SelectiveCartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectiveCartService)(ɵɵinject(UserProfileFacade), ɵɵinject(MultiCartFacade), ɵɵinject(BaseSiteService), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SelectiveCartService,
      factory: _SelectiveCartService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectiveCartService, [{
    type: Injectable
  }], () => [{
    type: UserProfileFacade
  }, {
    type: MultiCartFacade
  }, {
    type: BaseSiteService
  }, {
    type: UserIdService
  }], null);
})();
var facadeProviders = [ActiveCartService, {
  provide: ActiveCartFacade,
  useExisting: ActiveCartService
}, CartVoucherService, {
  provide: CartVoucherFacade,
  useExisting: CartVoucherService
}, MultiCartService, {
  provide: MultiCartFacade,
  useExisting: MultiCartService
}, SelectiveCartService, {
  provide: SelectiveCartFacade,
  useExisting: SelectiveCartService
}, CartValidationService, {
  provide: CartValidationFacade,
  useExisting: CartValidationService
}, CartAccessCodeService, {
  provide: CartAccessCodeFacade,
  useExisting: CartAccessCodeService
}, CartGuestUserService, {
  provide: CartGuestUserFacade,
  useExisting: CartGuestUserService
}];
var BadCartRequestHandler = class _BadCartRequestHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.BAD_REQUEST;
  }
  getPriority() {
    return Priority.NORMAL;
  }
  hasMatch(errorResponse) {
    return super.hasMatch(errorResponse) && this.getErrors(errorResponse).some(isCartError);
  }
  handleError(request, response) {
    this.handleCartNotFoundError(request, response);
    this.handleOtherCartErrors(request, response);
  }
  handleCartNotFoundError(_request, response) {
    this.getErrors(response).filter((e) => isCartNotFoundError(e)).forEach(() => {
      this.globalMessageService.add({
        key: "httpHandlers.cartNotFound"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  handleOtherCartErrors(_request, response) {
    this.getErrors(response).filter((e) => e.reason !== "notFound" || e.subjectType !== "cart").forEach((error) => {
      this.globalMessageService.add(error.message ? error.message : {
        key: "httpHandlers.otherCartErrors"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  getErrors(response) {
    return (response.error?.errors || []).filter((error) => error.type !== "JaloObjectNoLongerValidError");
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵBadCartRequestHandler_BaseFactory;
      return function BadCartRequestHandler_Factory(__ngFactoryType__) {
        return (ɵBadCartRequestHandler_BaseFactory || (ɵBadCartRequestHandler_BaseFactory = ɵɵgetInheritedFactory(_BadCartRequestHandler)))(__ngFactoryType__ || _BadCartRequestHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BadCartRequestHandler,
      factory: _BadCartRequestHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadCartRequestHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var BadVoucherRequestHandler = class _BadVoucherRequestHandler extends HttpErrorHandler {
  constructor() {
    super(...arguments);
    this.responseStatus = HttpResponseStatus.BAD_REQUEST;
  }
  getPriority() {
    return Priority.NORMAL;
  }
  hasMatch(errorResponse) {
    return super.hasMatch(errorResponse) && this.getErrors(errorResponse).some(isVoucherError);
  }
  handleError(request, response) {
    this.handleVoucherExceededError(request, response);
    this.handleVoucherInvalidError(request, response);
  }
  handleVoucherExceededError(_request, response) {
    this.getErrors(response).filter((e) => voucherExceededError(e)).forEach(() => {
      this.globalMessageService.add({
        key: "httpHandlers.voucherExceeded"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  handleVoucherInvalidError(_request, response) {
    this.getErrors(response).filter((e) => voucherInvalidError(e)).forEach(() => {
      this.globalMessageService.add({
        key: "httpHandlers.invalidCodeProvided"
      }, GlobalMessageType.MSG_TYPE_ERROR);
    });
  }
  getErrors(response) {
    return (response.error?.errors || []).filter((error) => error.type !== "JaloObjectNoLongerValidError");
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵBadVoucherRequestHandler_BaseFactory;
      return function BadVoucherRequestHandler_Factory(__ngFactoryType__) {
        return (ɵBadVoucherRequestHandler_BaseFactory || (ɵBadVoucherRequestHandler_BaseFactory = ɵɵgetInheritedFactory(_BadVoucherRequestHandler)))(__ngFactoryType__ || _BadVoucherRequestHandler);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BadVoucherRequestHandler,
      factory: _BadVoucherRequestHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadVoucherRequestHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MultiCartStoreModule = class _MultiCartStoreModule {
  static {
    this.ɵfac = function MultiCartStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MultiCartStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MultiCartStoreModule,
      imports: [CommonModule, StateModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [multiCartReducerProvider, MultiCartEffectsService],
      imports: [CommonModule, StateModule, StoreModule.forFeature(MULTI_CART_FEATURE, multiCartReducerToken, {
        metaReducers: multiCartMetaReducers
      }), EffectsModule.forFeature(effects)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MultiCartStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StateModule, StoreModule.forFeature(MULTI_CART_FEATURE, multiCartReducerToken, {
        metaReducers: multiCartMetaReducers
      }), EffectsModule.forFeature(effects)],
      providers: [multiCartReducerProvider, MultiCartEffectsService]
    }]
  }], null, null);
})();
var CartBaseCoreModule = class _CartBaseCoreModule {
  static {
    this.ɵfac = function CartBaseCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartBaseCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartBaseCoreModule,
      imports: [CartEventModule, MultiCartStoreModule, CartPersistenceModule, CartPageEventModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [CartConnector, CartEntryConnector, CartVoucherConnector, CartValidationConnector, CartAccessCodeConnector, CartGuestUserConnector, ...facadeProviders, {
        provide: HttpErrorHandler,
        useExisting: BadCartRequestHandler,
        multi: true
      }, {
        provide: HttpErrorHandler,
        useExisting: BadVoucherRequestHandler,
        multi: true
      }],
      imports: [CartEventModule, MultiCartStoreModule, CartPersistenceModule, CartPageEventModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartBaseCoreModule, [{
    type: NgModule,
    args: [{
      imports: [CartEventModule, MultiCartStoreModule, CartPersistenceModule, CartPageEventModule],
      providers: [CartConnector, CartEntryConnector, CartVoucherConnector, CartValidationConnector, CartAccessCodeConnector, CartGuestUserConnector, ...facadeProviders, {
        provide: HttpErrorHandler,
        useExisting: BadCartRequestHandler,
        multi: true
      }, {
        provide: HttpErrorHandler,
        useExisting: BadVoucherRequestHandler,
        multi: true
      }]
    }]
  }], null, null);
})();
var CartConfigService = class _CartConfigService {
  constructor(config) {
    this.config = config;
  }
  isSelectiveCartEnabled() {
    return Boolean(this.config?.cart?.selectiveCart?.enabled);
  }
  isCartValidationEnabled() {
    return Boolean(this.config?.cart?.validation?.enabled);
  }
  static {
    this.ɵfac = function CartConfigService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartConfigService)(ɵɵinject(CartConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartConfigService,
      factory: _CartConfigService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartConfigService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CartConfig
  }], null);
})();
var CartValidationGuard = class _CartValidationGuard {
  constructor(cartValidationService, semanticPathService, router, globalMessageService, activeCartService, cartValidationStateService, cartConfigService) {
    this.cartValidationService = cartValidationService;
    this.semanticPathService = semanticPathService;
    this.router = router;
    this.globalMessageService = globalMessageService;
    this.activeCartService = activeCartService;
    this.cartValidationStateService = cartValidationStateService;
    this.cartConfigService = cartConfigService;
    this.GLOBAL_MESSAGE_TIMEOUT = 1e4;
  }
  canActivate() {
    return !this.cartConfigService.isCartValidationEnabled() ? of(true) : this.cartValidationService.validateCart().pipe(withLatestFrom(this.activeCartService.getEntries()), map(([cartModificationList, cartEntries]) => {
      this.cartValidationStateService.updateValidationResultAndRoutingId(cartModificationList.cartModifications ?? []);
      if (cartModificationList.cartModifications !== void 0 && cartModificationList.cartModifications.length !== 0) {
        let validationResultMessage;
        const modification = cartModificationList.cartModifications[0];
        if (cartEntries.length === 1 && cartEntries[0].product?.code === modification.entry?.product?.code && modification.statusCode === CartValidationStatusCode.NO_STOCK) {
          validationResultMessage = {
            key: "validation.cartEntryRemoved",
            params: {
              name: modification.entry?.product?.name
            }
          };
        } else {
          validationResultMessage = {
            key: "validation.cartEntriesChangeDuringCheckout"
          };
        }
        this.globalMessageService.add(validationResultMessage, GlobalMessageType.MSG_TYPE_ERROR, this.GLOBAL_MESSAGE_TIMEOUT);
        this.activeCartService.reloadActiveCart();
        return this.router.parseUrl(this.semanticPathService.get("cart") ?? "");
      }
      return true;
    }));
  }
  static {
    this.ɵfac = function CartValidationGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartValidationGuard)(ɵɵinject(CartValidationFacade), ɵɵinject(SemanticPathService), ɵɵinject(Router), ɵɵinject(GlobalMessageService), ɵɵinject(ActiveCartFacade), ɵɵinject(CartValidationStateService), ɵɵinject(CartConfigService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartValidationGuard,
      factory: _CartValidationGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartValidationGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CartValidationFacade
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }, {
    type: GlobalMessageService
  }, {
    type: ActiveCartFacade
  }, {
    type: CartValidationStateService
  }, {
    type: CartConfigService
  }], null);
})();
var ProductImportInfoService = class _ProductImportInfoService {
  constructor(actionsSubject) {
    this.actionsSubject = actionsSubject;
    this.logger = inject(LoggerService);
  }
  /**
   * Get emission of add entry results from actions subject
   *
   * @param {string} cartId
   * @returns {Observable<ProductImportInfo>}
   */
  getResults(cartId) {
    return this.actionsSubject.pipe(ofType(CART_ADD_ENTRY_SUCCESS, CART_ADD_ENTRY_FAIL), filter((action) => action.payload.cartId === cartId), map((action) => this.mapMessages(action)));
  }
  /**
   * Map actions to summary messages
   *
   * @param {CartActions.CartAddEntrySuccess | CartActions.CartAddEntryFail} action
   * @returns ProductImportInfo
   */
  mapMessages(action) {
    const {
      productCode
    } = action.payload;
    if (action instanceof CartAddEntrySuccess) {
      const {
        quantity,
        quantityAdded,
        entry,
        statusCode
      } = action.payload;
      if (statusCode === ProductImportStatus.LOW_STOCK) {
        return {
          productCode,
          statusCode,
          productName: entry?.product?.name,
          quantity,
          quantityAdded
        };
      }
      if (statusCode === ProductImportStatus.SUCCESS || statusCode === ProductImportStatus.NO_STOCK) {
        return {
          productCode,
          statusCode,
          productName: entry?.product?.name
        };
      }
    } else if (action instanceof CartAddEntryFail) {
      const {
        error
      } = action.payload;
      if (error?.details[0]?.type === "UnknownIdentifierError") {
        return {
          productCode,
          statusCode: ProductImportStatus.UNKNOWN_IDENTIFIER
        };
      }
    }
    if (isDevMode()) {
      this.logger.warn("Unrecognized cart add entry action type while mapping messages", action);
    }
    return {
      productCode,
      statusCode: ProductImportStatus.UNKNOWN_ERROR
    };
  }
  static {
    this.ɵfac = function ProductImportInfoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductImportInfoService)(ɵɵinject(ActionsSubject));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductImportInfoService,
      factory: _ProductImportInfoService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductImportInfoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActionsSubject
  }], null);
})();

export {
  MULTI_CART_FEATURE,
  MULTI_CART_DATA,
  ADD_VOUCHER_PROCESS_ID,
  cartGroup_actions,
  CartEntryAdapter,
  CartEntryConnector,
  CartVoucherAdapter,
  CartVoucherConnector,
  getCartIdByUserId,
  isSelectiveCart,
  isCartNotFoundError,
  voucherExceededError,
  voucherInvalidError,
  isVoucherError,
  isCartError,
  isTempCartId,
  isEmpty,
  isEmail,
  isJustLoggedIn,
  CartAdapter,
  CartConnector,
  MultiCartEffectsService,
  multiCartGroup_selectors,
  MultiCartStatePersistenceService,
  cartStatePersistenceFactory,
  uninitializeActiveCartMetaReducerFactory,
  CartPersistenceModule,
  CartAccessCodeAdapter,
  CartAccessCodeConnector,
  CART_ACCESS_CODE_NORMALIZER,
  CartGuestUserAdapter,
  CartGuestUserConnector,
  CART_GUEST_USER_NORMALIZER,
  CART_VALIDATION_NORMALIZER,
  CartValidationAdapter,
  CartValidationConnector,
  CartEventBuilder,
  CartEventModule,
  CartPageEventBuilder,
  CartPageEventModule,
  ActiveCartService,
  CartAccessCodeService,
  CartGuestUserService,
  CartValidationStateService,
  CartValidationService,
  CartVoucherService,
  MultiCartService,
  SelectiveCartService,
  CartBaseCoreModule,
  CartConfigService,
  CartValidationGuard,
  ProductImportInfoService
};
//# sourceMappingURL=chunk-Q7WXRDFA.js.map
