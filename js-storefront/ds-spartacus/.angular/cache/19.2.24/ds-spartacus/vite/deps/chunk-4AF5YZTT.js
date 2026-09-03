import {
  CART_ACCESS_CODE_NORMALIZER,
  CART_GUEST_USER_NORMALIZER,
  CART_VALIDATION_NORMALIZER,
  CartAccessCodeAdapter,
  CartAdapter,
  CartEntryAdapter,
  CartGuestUserAdapter,
  CartValidationAdapter,
  CartVoucherAdapter
} from "./chunk-Q7WXRDFA.js";
import {
  CART_MODIFICATION_NORMALIZER,
  CART_NORMALIZER,
  CART_VOUCHER_NORMALIZER,
  ORDER_ENTRY_PROMOTIONS_NORMALIZER
} from "./chunk-KEAKWHYV.js";
import {
  ConverterService,
  InterceptorUtil,
  LoggerService,
  OCC_CART_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
  PRODUCT_NORMALIZER,
  USE_CLIENT_TOKEN,
  backOff,
  isServerError,
  provideDefaultConfigFactory,
  tryNormalizeHttpError
} from "./chunk-VIVIQI6G.js";
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from "./chunk-2A6OHZCE.js";
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
import {
  Injectable,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import {
  catchError,
  map
} from "./chunk-R6FETK65.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-occ.mjs
var OccCartNormalizer = class _OccCartNormalizer {
  constructor(converter) {
    this.converter = converter;
  }
  convert(source, target) {
    if (target === void 0) {
      target = __spreadValues({}, source);
    }
    this.removeDuplicatePromotions(source, target);
    this.handleQuoteCode(source, target);
    if (source.entries) {
      target.entries = source.entries.map((entry) => __spreadProps(__spreadValues({}, entry), {
        product: this.converter.convert(entry.product, PRODUCT_NORMALIZER),
        promotions: this.converter.convert({
          item: entry,
          promotions: target?.appliedProductPromotions
        }, ORDER_ENTRY_PROMOTIONS_NORMALIZER)
      }));
    }
    return target;
  }
  handleQuoteCode(source, target) {
    if (source.sapQuote) {
      target.quoteCode = source.sapQuote.code;
    }
  }
  /**
   * Remove all duplicate promotions
   */
  removeDuplicatePromotions(source, target) {
    if (source && source.potentialOrderPromotions) {
      target.potentialOrderPromotions = this.removeDuplicateItems(source.potentialOrderPromotions);
    }
    if (source && source.potentialProductPromotions) {
      target.potentialProductPromotions = this.removeDuplicateItems(source.potentialProductPromotions);
    }
    if (source && source.appliedOrderPromotions) {
      target.appliedOrderPromotions = this.removeDuplicateItems(source.appliedOrderPromotions);
    }
    if (source && source.appliedProductPromotions) {
      target.appliedProductPromotions = this.removeDuplicateItems(source.appliedProductPromotions);
    }
  }
  removeDuplicateItems(itemList) {
    return itemList.filter((p, i, a) => {
      const b = a.map((el) => JSON.stringify(el));
      return i === b.indexOf(JSON.stringify(p));
    });
  }
  static {
    this.ɵfac = function OccCartNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCartNormalizer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCartNormalizer,
      factory: _OccCartNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var OrderEntryPromotionsNormalizer = class _OrderEntryPromotionsNormalizer {
  convert(source, target) {
    target = this.getProductPromotion(source.item, source.promotions);
    return target;
  }
  /**
   * Get consumed promotions for the given order entry
   *
   * @param item
   * @param promotions
   * @returns consumed promotions for this entry
   */
  getProductPromotion(item, promotions) {
    const entryPromotions = [];
    promotions?.forEach((promotion) => {
      if (promotion.description && promotion.consumedEntries) {
        for (const consumedEntry of promotion.consumedEntries) {
          if (this.isConsumedByEntry(consumedEntry, item)) {
            entryPromotions.push(promotion);
          }
        }
      }
    });
    return entryPromotions;
  }
  isConsumedByEntry(consumedEntry, entry) {
    const consumedEntryNumber = consumedEntry.orderEntryNumber;
    if (entry && entry.entries && entry.entries.length > 0) {
      for (const subEntry of entry.entries) {
        if (subEntry.entryNumber === consumedEntryNumber) {
          return true;
        }
      }
      return false;
    } else {
      return consumedEntryNumber === entry?.entryNumber;
    }
  }
  static {
    this.ɵfac = function OrderEntryPromotionsNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderEntryPromotionsNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderEntryPromotionsNormalizer,
      factory: _OrderEntryPromotionsNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderEntryPromotionsNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccCartAccessCodeAdapter = class _OccCartAccessCodeAdapter {
  constructor() {
    this.logger = inject(LoggerService);
    this.http = inject(HttpClient);
    this.occEndpointsService = inject(OccEndpointsService);
    this.converterService = inject(ConverterService);
  }
  getCartAccessCode(userId, cartId) {
    return this.http.post(this.getCartAccessCodeEndpoint(userId, cartId), null).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isServerError,
      maxTries: 2
    }), this.converterService.pipeable(CART_ACCESS_CODE_NORMALIZER));
  }
  getCartAccessCodeEndpoint(userId, cartId) {
    return this.occEndpointsService.buildUrl("cartAccessCode", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  static {
    this.ɵfac = function OccCartAccessCodeAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCartAccessCodeAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCartAccessCodeAdapter,
      factory: _OccCartAccessCodeAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartAccessCodeAdapter, [{
    type: Injectable
  }], null, null);
})();
var OccCartEntryAdapter = class _OccCartEntryAdapter {
  constructor(http, occEndpointsService, converterService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
  }
  add(userId, cartId, productCode, quantity = 1, pickupStore) {
    const url = this.occEndpointsService.buildUrl("addEntries", {
      urlParams: {
        userId,
        cartId,
        quantity
      }
    });
    if (url.includes(`quantity=${quantity}`)) {
      const httpHeaders = new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      });
      return this.http.post(url, {}, {
        headers: httpHeaders,
        params: {
          code: productCode
        }
      }).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    const toAdd = __spreadValues({
      quantity,
      product: {
        code: productCode
      }
    }, pickupStore && {
      deliveryPointOfService: {
        name: pickupStore
      }
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(url, toAdd, {
      headers
    }).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }
  update(userId, cartId, entryNumber, qty, pickupStore, pickupToDelivery = false) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const url = this.occEndpointsService.buildUrl("updateEntries", {
      urlParams: {
        userId,
        cartId,
        entryNumber
      }
    });
    if (pickupStore === void 0 && pickupToDelivery) {
      return this.http.put(url, {
        quantity: qty
      }, {
        headers
      }).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    let params = {};
    if (pickupStore) {
      params = {
        deliveryPointOfService: {
          name: pickupStore
        }
      };
    }
    return this.http.patch(url, __spreadValues({
      quantity: qty
    }, params), {
      headers
    }).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }
  remove(userId, cartId, entryNumber) {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    const url = this.occEndpointsService.buildUrl("removeEntries", {
      urlParams: {
        userId,
        cartId,
        entryNumber
      }
    });
    return this.http.delete(url, {
      headers
    });
  }
  static {
    this.ɵfac = function OccCartEntryAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCartEntryAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCartEntryAdapter,
      factory: _OccCartEntryAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartEntryAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var CONTENT_TYPE_JSON_HEADER = {
  "Content-Type": "application/json"
};
var OccCartGuestUserAdapter = class _OccCartGuestUserAdapter {
  constructor() {
    this.logger = inject(LoggerService);
    this.http = inject(HttpClient);
    this.occEndpointsService = inject(OccEndpointsService);
    this.converterService = inject(ConverterService);
  }
  getRequestHeaders() {
    return InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, new HttpHeaders(__spreadValues({}, CONTENT_TYPE_JSON_HEADER)));
  }
  createCartGuestUser(userId, cartId, guestUserDetails) {
    return this.http.post(this.getCartGuestUserEndpoint(userId, cartId), guestUserDetails, {
      headers: this.getRequestHeaders()
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isServerError,
      maxTries: 2
    }), this.converterService.pipeable(CART_GUEST_USER_NORMALIZER));
  }
  updateCartGuestUser(userId, cartId, guestUserDetails) {
    return this.http.patch(this.getCartGuestUserEndpoint(userId, cartId), guestUserDetails, {
      headers: this.getRequestHeaders()
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isServerError,
      maxTries: 2
    }), this.converterService.pipeable(CART_GUEST_USER_NORMALIZER));
  }
  getCartGuestUserEndpoint(userId, cartId) {
    return this.occEndpointsService.buildUrl("cartGuestUser", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  static {
    this.ɵfac = function OccCartGuestUserAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCartGuestUserAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCartGuestUserAdapter,
      factory: _OccCartGuestUserAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartGuestUserAdapter, [{
    type: Injectable
  }], null, null);
})();
var OccCartValidationAdapter = class _OccCartValidationAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  validate(cartId, userId) {
    const url = this.occEndpoints.buildUrl("validate", {
      urlParams: {
        cartId,
        userId
      }
    });
    return this.http.post(url, null).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(CART_VALIDATION_NORMALIZER));
  }
  static {
    this.ɵfac = function OccCartValidationAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCartValidationAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCartValidationAdapter,
      factory: _OccCartValidationAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartValidationAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccCartVoucherAdapter = class _OccCartVoucherAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  getCartVoucherEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("cartVoucher", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  getHeaders(userId) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    if (userId === OCC_USER_ID_ANONYMOUS) {
      headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    }
    return headers;
  }
  add(userId, cartId, voucherId) {
    const url = this.getCartVoucherEndpoint(userId, cartId);
    const toAdd = JSON.stringify({});
    const params = new HttpParams().set("voucherId", voucherId);
    const headers = this.getHeaders(userId);
    return this.http.post(url, toAdd, {
      headers,
      params
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), this.converter.pipeable(CART_VOUCHER_NORMALIZER));
  }
  remove(userId, cartId, voucherId) {
    const url = this.getCartVoucherEndpoint(userId, cartId) + "/" + encodeURIComponent(voucherId);
    const headers = this.getHeaders(userId);
    return this.http.delete(url, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }));
  }
  static {
    this.ɵfac = function OccCartVoucherAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCartVoucherAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCartVoucherAdapter,
      factory: _OccCartVoucherAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartVoucherAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccCartAdapter = class _OccCartAdapter {
  constructor(http, occEndpointsService, converterService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
  }
  loadAll(userId) {
    return this.http.get(this.occEndpointsService.buildUrl("carts", {
      urlParams: {
        userId
      }
    })).pipe(map((cartList) => cartList.carts ?? []), this.converterService.pipeableMany(CART_NORMALIZER));
  }
  load(userId, cartId) {
    if (cartId === OCC_CART_ID_CURRENT) {
      return this.loadAll(userId).pipe(map((carts) => carts.find((cart) => cart["saveTime"] === void 0)));
    } else {
      return this.http.get(this.occEndpointsService.buildUrl("cart", {
        urlParams: {
          userId,
          cartId
        }
      })).pipe(this.converterService.pipeable(CART_NORMALIZER));
    }
  }
  create(userId, oldCartId, toMergeCartGuid) {
    const toAdd = JSON.stringify({});
    const params = {};
    if (oldCartId) {
      params["oldCartId"] = oldCartId;
    }
    if (toMergeCartGuid) {
      params["toMergeCartGuid"] = toMergeCartGuid;
    }
    return this.http.post(this.occEndpointsService.buildUrl("createCart", {
      urlParams: {
        userId
      },
      queryParams: params
    }), toAdd).pipe(this.converterService.pipeable(CART_NORMALIZER));
  }
  delete(userId, cartId) {
    let headers = new HttpHeaders();
    if (userId === OCC_USER_ID_ANONYMOUS) {
      headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    }
    return this.http.delete(this.occEndpointsService.buildUrl("deleteCart", {
      urlParams: {
        userId,
        cartId
      }
    }), {
      headers
    });
  }
  save(userId, cartId, saveCartName, saveCartDescription) {
    const endpoint = this.occEndpointsService.buildUrl("saveCart", {
      urlParams: {
        userId,
        cartId,
        saveCartName,
        saveCartDescription
      }
    });
    let httpParams = new HttpParams();
    httpParams = httpParams.set("saveCartName", saveCartName).set("saveCartDescription", saveCartDescription);
    return this.http.patch(endpoint, httpParams).pipe(map((cartResponse) => cartResponse.savedCartData), this.converterService.pipeable(CART_NORMALIZER));
  }
  addEmail(userId, cartId, email) {
    let headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
    const httpParams = new HttpParams().set("email", email);
    const url = this.occEndpointsService.buildUrl("addEmail", {
      urlParams: {
        userId,
        cartId
      }
    });
    return this.http.put(url, httpParams, {
      headers
    });
  }
  static {
    this.ɵfac = function OccCartAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCartAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCartAdapter,
      factory: _OccCartAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCartAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
function defaultOccCartConfigFactory() {
  return {
    backend: {
      occ: {
        endpoints: {
          /* eslint-disable max-len */
          carts: "users/${userId}/carts?fields=carts(DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user,saveTime,name,description)",
          cart: "users/${userId}/carts/${cartId}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user,saveTime,name,description",
          createCart: "users/${userId}/carts?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user",
          addEntries: "users/${userId}/carts/${cartId}/entries",
          updateEntries: "users/${userId}/carts/${cartId}/entries/${entryNumber}",
          removeEntries: "users/${userId}/carts/${cartId}/entries/${entryNumber}",
          addEmail: "users/${userId}/carts/${cartId}/email",
          deleteCart: "users/${userId}/carts/${cartId}",
          cartVoucher: "users/${userId}/carts/${cartId}/vouchers",
          saveCart: "/users/${userId}/carts/${cartId}/save",
          validate: "users/${userId}/carts/${cartId}/validate?fields=DEFAULT",
          cartAccessCode: "users/${userId}/carts/${cartId}/accessCode",
          cartGuestUser: "users/${userId}/carts/${cartId}/guestuser"
          /* eslint-enable */
        }
      }
    }
  };
}
var CartBaseOccModule = class _CartBaseOccModule {
  static {
    this.ɵfac = function CartBaseOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartBaseOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartBaseOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultOccCartConfigFactory), {
        provide: CartAdapter,
        useClass: OccCartAdapter
      }, {
        provide: CART_NORMALIZER,
        useExisting: OccCartNormalizer,
        multi: true
      }, {
        provide: ORDER_ENTRY_PROMOTIONS_NORMALIZER,
        useExisting: OrderEntryPromotionsNormalizer,
        multi: true
      }, {
        provide: CartEntryAdapter,
        useClass: OccCartEntryAdapter
      }, {
        provide: CartVoucherAdapter,
        useClass: OccCartVoucherAdapter
      }, {
        provide: CartValidationAdapter,
        useClass: OccCartValidationAdapter
      }, {
        provide: CartAccessCodeAdapter,
        useClass: OccCartAccessCodeAdapter
      }, {
        provide: CartGuestUserAdapter,
        useClass: OccCartGuestUserAdapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartBaseOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfigFactory(defaultOccCartConfigFactory), {
        provide: CartAdapter,
        useClass: OccCartAdapter
      }, {
        provide: CART_NORMALIZER,
        useExisting: OccCartNormalizer,
        multi: true
      }, {
        provide: ORDER_ENTRY_PROMOTIONS_NORMALIZER,
        useExisting: OrderEntryPromotionsNormalizer,
        multi: true
      }, {
        provide: CartEntryAdapter,
        useClass: OccCartEntryAdapter
      }, {
        provide: CartVoucherAdapter,
        useClass: OccCartVoucherAdapter
      }, {
        provide: CartValidationAdapter,
        useClass: OccCartValidationAdapter
      }, {
        provide: CartAccessCodeAdapter,
        useClass: OccCartAccessCodeAdapter
      }, {
        provide: CartGuestUserAdapter,
        useClass: OccCartGuestUserAdapter
      }]
    }]
  }], null, null);
})();

export {
  OccCartNormalizer,
  OrderEntryPromotionsNormalizer,
  OccCartAccessCodeAdapter,
  OccCartEntryAdapter,
  OccCartGuestUserAdapter,
  OccCartValidationAdapter,
  OccCartVoucherAdapter,
  OccCartAdapter,
  CartBaseOccModule
};
//# sourceMappingURL=chunk-4AF5YZTT.js.map
