import {
  CHECKOUT_NORMALIZER,
  CheckoutAdapter,
  CheckoutBillingAddressAdapter,
  CheckoutCoreModule,
  CheckoutDeliveryAddressAdapter,
  CheckoutDeliveryModesAdapter,
  CheckoutPaymentAdapter,
  DELIVERY_MODE_NORMALIZER,
  PAYMENT_CARD_TYPE_NORMALIZER,
  PAYMENT_DETAILS_SERIALIZER
} from "./chunk-PLJ7TW6I.js";
import {
  CheckoutComponentsModule
} from "./chunk-WVN4XMLZ.js";
import "./chunk-X6DUCLWC.js";
import "./chunk-UIW5AQFA.js";
import "./chunk-XTCFQJ22.js";
import "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-OOT34BER.js";
import "./chunk-LZQV6UAH.js";
import "./chunk-KEAKWHYV.js";
import "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  ADDRESS_NORMALIZER,
  ADDRESS_SERIALIZER,
  ConverterService,
  HttpParamsURIEncoder,
  LoggerService,
  OccEndpointsService,
  PAYMENT_DETAILS_NORMALIZER,
  backOff,
  isJaloError,
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
  HttpHeaders,
  HttpParams
} from "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import {
  CommonModule
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
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
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  catchError,
  map,
  mergeMap,
  throwError
} from "./chunk-R6FETK65.js";
import "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base-occ.mjs
var OccCheckoutBillingAddressAdapter = class _OccCheckoutBillingAddressAdapter {
  constructor() {
    this.logger = inject(LoggerService);
    this.http = inject(HttpClient);
    this.occEndpoints = inject(OccEndpointsService);
    this.converter = inject(ConverterService);
  }
  setBillingAddress(userId, cartId, address) {
    return this.http.put(this.getSetBillingAddressEndpoint(userId, cartId), address).pipe(catchError((error) => throwError(tryNormalizeHttpError(error, this.logger))), backOff({
      shouldRetry: isJaloError
    }));
  }
  getSetBillingAddressEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("setBillingAddress", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  static {
    this.ɵfac = function OccCheckoutBillingAddressAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutBillingAddressAdapter)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutBillingAddressAdapter,
      factory: _OccCheckoutBillingAddressAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutBillingAddressAdapter, [{
    type: Injectable
  }], null, null);
})();
var OccCheckoutDeliveryAddressAdapter = class _OccCheckoutDeliveryAddressAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  createAddress(userId, cartId, address) {
    address = this.converter.convert(address, ADDRESS_SERIALIZER);
    return this.http.post(this.getCreateDeliveryAddressEndpoint(userId, cartId), address, {
      headers: new HttpHeaders().set("Content-Type", "application/json")
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(ADDRESS_NORMALIZER));
  }
  getCreateDeliveryAddressEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("createDeliveryAddress", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  setAddress(userId, cartId, addressId) {
    return this.http.put(this.getSetDeliveryAddressEndpoint(userId, cartId, addressId), {}).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getSetDeliveryAddressEndpoint(userId, cartId, addressId) {
    return this.occEndpoints.buildUrl("setDeliveryAddress", {
      urlParams: {
        userId,
        cartId
      },
      queryParams: {
        addressId
      }
    });
  }
  clearCheckoutDeliveryAddress(userId, cartId) {
    return this.http.delete(this.getRemoveDeliveryAddressEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getRemoveDeliveryAddressEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("removeDeliveryAddress", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  static {
    this.ɵfac = function OccCheckoutDeliveryAddressAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutDeliveryAddressAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutDeliveryAddressAdapter,
      factory: _OccCheckoutDeliveryAddressAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutDeliveryAddressAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccCheckoutDeliveryModesAdapter = class _OccCheckoutDeliveryModesAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  setMode(userId, cartId, deliveryModeId) {
    return this.http.put(this.getSetDeliveryModeEndpoint(userId, cartId, deliveryModeId), {}).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getSetDeliveryModeEndpoint(userId, cartId, deliveryModeId) {
    return this.occEndpoints.buildUrl("setDeliveryMode", {
      urlParams: {
        userId,
        cartId
      },
      queryParams: {
        deliveryModeId
      }
    });
  }
  getSupportedModes(userId, cartId) {
    return this.http.get(this.getDeliveryModesEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), map((listResponse) => listResponse.deliveryModes ?? []), this.converter.pipeableMany(DELIVERY_MODE_NORMALIZER));
  }
  getDeliveryModesEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("deliveryModes", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  clearCheckoutDeliveryMode(userId, cartId) {
    return this.http.delete(this.getClearDeliveryModeEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getClearDeliveryModeEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("clearDeliveryMode", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  static {
    this.ɵfac = function OccCheckoutDeliveryModesAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutDeliveryModesAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutDeliveryModesAdapter,
      factory: _OccCheckoutDeliveryModesAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutDeliveryModesAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccCheckoutPaymentAdapter = class _OccCheckoutPaymentAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
    if (typeof DOMParser !== "undefined") {
      this.domparser = new DOMParser();
    }
  }
  createPaymentDetails(userId, cartId, paymentDetails) {
    paymentDetails = this.converter.convert(paymentDetails, PAYMENT_DETAILS_SERIALIZER);
    return this.getProviderSubInfo(userId, cartId).pipe(map((data) => {
      const labelsMap = this.convertToMap(data.mappingLabels.entry);
      return {
        url: data.postUrl,
        parameters: this.getParamsForPaymentProvider(paymentDetails, data.parameters.entry, labelsMap),
        mappingLabels: labelsMap
      };
    }), mergeMap((sub) => (
      // create a subscription directly with payment provider
      this.createSubWithProvider(sub.url, sub.parameters).pipe(map((response) => this.extractPaymentDetailsFromHtml(response)), mergeMap((fromPaymentProvider) => {
        fromPaymentProvider["defaultPayment"] = paymentDetails.defaultPayment ?? false;
        fromPaymentProvider["savePaymentInfo"] = true;
        return this.createDetailsWithParameters(userId, cartId, fromPaymentProvider).pipe(catchError((error) => {
          throw tryNormalizeHttpError(error, this.logger);
        }), backOff({
          shouldRetry: isJaloError
        }), this.converter.pipeable(PAYMENT_DETAILS_NORMALIZER));
      }))
    )));
  }
  setPaymentDetails(userId, cartId, paymentDetailsId) {
    return this.http.put(this.getSetPaymentDetailsEndpoint(userId, cartId, paymentDetailsId), {}).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getSetPaymentDetailsEndpoint(userId, cartId, paymentDetailsId) {
    return this.occEndpoints.buildUrl("setCartPaymentDetails", {
      urlParams: {
        userId,
        cartId
      },
      queryParams: {
        paymentDetailsId
      }
    });
  }
  getPaymentCardTypes() {
    return this.http.get(this.getPaymentCardTypesEndpoint()).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), map((cardTypeList) => cardTypeList.cardTypes ?? []), this.converter.pipeableMany(PAYMENT_CARD_TYPE_NORMALIZER));
  }
  getPaymentCardTypesEndpoint() {
    return this.occEndpoints.buildUrl("cardTypes");
  }
  getProviderSubInfo(userId, cartId) {
    return this.http.get(this.getPaymentProviderSubInfoEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getPaymentProviderSubInfoEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("paymentProviderSubInfo", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  createSubWithProvider(postUrl, parameters) {
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "text/html"
    });
    let httpParams = new HttpParams({
      encoder: new HttpParamsURIEncoder()
    });
    Object.keys(parameters).forEach((key) => {
      httpParams = httpParams.append(key, parameters[key]);
    });
    return this.http.post(postUrl, httpParams, {
      headers,
      responseType: "text"
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  createDetailsWithParameters(userId, cartId, parameters) {
    let httpParams = new HttpParams({
      encoder: new HttpParamsURIEncoder()
    });
    Object.keys(parameters).forEach((key) => {
      httpParams = httpParams.append(key, parameters[key]);
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    });
    return this.http.post(this.getCreatePaymentDetailsEndpoint(userId, cartId), httpParams, {
      headers
    }).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }));
  }
  getCreatePaymentDetailsEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("createPaymentDetails", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  getParamsForPaymentProvider(paymentDetails, parameters, mappingLabels) {
    const params = this.convertToMap(parameters);
    params[mappingLabels["hybris_account_holder_name"]] = paymentDetails.accountHolderName;
    params[mappingLabels["hybris_card_type"]] = paymentDetails.cardType?.code;
    params[mappingLabels["hybris_card_number"]] = paymentDetails.cardNumber;
    if (mappingLabels["hybris_combined_expiry_date"] === "true") {
      params[mappingLabels["hybris_card_expiry_date"]] = paymentDetails.expiryMonth + mappingLabels["hybris_separator_expiry_date"] + paymentDetails.expiryYear;
    } else {
      params[mappingLabels["hybris_card_expiration_month"]] = paymentDetails.expiryMonth;
      params[mappingLabels["hybris_card_expiration_year"]] = paymentDetails.expiryYear;
    }
    params[mappingLabels["hybris_card_cvn"]] = paymentDetails.cvn;
    params[mappingLabels["hybris_billTo_country"]] = paymentDetails.billingAddress?.country?.isocode;
    params[mappingLabels["hybris_billTo_firstname"]] = paymentDetails.billingAddress?.firstName;
    params[mappingLabels["hybris_billTo_lastname"]] = paymentDetails.billingAddress?.lastName;
    params[mappingLabels["hybris_billTo_street1"]] = paymentDetails.billingAddress?.line1 + " " + paymentDetails.billingAddress?.line2;
    params[mappingLabels["hybris_billTo_city"]] = paymentDetails.billingAddress?.town;
    if (paymentDetails.billingAddress?.region) {
      params[mappingLabels["hybris_billTo_region"]] = paymentDetails.billingAddress.region.isocodeShort;
    } else {
      params[mappingLabels["hybris_billTo_region"]] = "";
    }
    params[mappingLabels["hybris_billTo_postalcode"]] = paymentDetails.billingAddress?.postalCode;
    return params;
  }
  extractPaymentDetailsFromHtml(html) {
    const domdoc = this.domparser.parseFromString(html, "text/xml");
    const responseForm = domdoc.getElementsByTagName("form")[0];
    const inputs = responseForm.getElementsByTagName("input");
    const values = {};
    for (let i = 0; inputs[i]; i++) {
      const input = inputs[i];
      const name = input.getAttribute("name");
      const value = input.getAttribute("value");
      if (name && name !== "{}" && value && value !== "") {
        values[name] = value;
      }
    }
    return values;
  }
  convertToMap(paramList) {
    return paramList.reduce(function(result, item) {
      const key = item.key;
      result[key] = item.value;
      return result;
    }, {});
  }
  static {
    this.ɵfac = function OccCheckoutPaymentAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutPaymentAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutPaymentAdapter,
      factory: _OccCheckoutPaymentAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutPaymentAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var OccCheckoutAdapter = class _OccCheckoutAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
    this.logger = inject(LoggerService);
  }
  getCheckoutDetails(userId, cartId) {
    return this.http.get(this.getGetCheckoutDetailsEndpoint(userId, cartId)).pipe(catchError((error) => {
      throw tryNormalizeHttpError(error, this.logger);
    }), backOff({
      shouldRetry: isJaloError
    }), this.converter.pipeable(CHECKOUT_NORMALIZER));
  }
  getGetCheckoutDetailsEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("getCheckoutDetails", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  static {
    this.ɵfac = function OccCheckoutAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccCheckoutAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccCheckoutAdapter,
      factory: _OccCheckoutAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccCheckoutAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var DELIVERY_ENDPOINT = "users/${userId}/carts/${cartId}/addresses/delivery";
var DELIVERY_MODE_ENDPOINT = "users/${userId}/carts/${cartId}/deliverymode";
var defaultOccCheckoutConfig = {
  backend: {
    occ: {
      endpoints: {
        setDeliveryAddress: DELIVERY_ENDPOINT,
        cardTypes: "cardtypes",
        createDeliveryAddress: DELIVERY_ENDPOINT,
        removeDeliveryAddress: DELIVERY_ENDPOINT,
        deliveryMode: DELIVERY_MODE_ENDPOINT,
        setDeliveryMode: DELIVERY_MODE_ENDPOINT,
        clearDeliveryMode: DELIVERY_MODE_ENDPOINT,
        deliveryModes: `${DELIVERY_MODE_ENDPOINT}s`,
        setCartPaymentDetails: "users/${userId}/carts/${cartId}/paymentdetails",
        paymentProviderSubInfo: "users/${userId}/carts/${cartId}/payment/sop/request?responseUrl=sampleUrl",
        createPaymentDetails: "users/${userId}/carts/${cartId}/payment/sop/response",
        getCheckoutDetails: "users/${userId}/carts/${cartId}?fields=deliveryAddress(FULL),deliveryMode(FULL),paymentInfo(FULL)",
        setBillingAddress: "users/${userId}/carts/${cartId}/addresses/billing"
      }
    }
  }
};
var CheckoutOccModule = class _CheckoutOccModule {
  static {
    this.ɵfac = function CheckoutOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccCheckoutConfig), {
        provide: CheckoutAdapter,
        useClass: OccCheckoutAdapter
      }, {
        provide: CheckoutDeliveryAddressAdapter,
        useClass: OccCheckoutDeliveryAddressAdapter
      }, {
        provide: CheckoutDeliveryModesAdapter,
        useClass: OccCheckoutDeliveryModesAdapter
      }, {
        provide: CheckoutPaymentAdapter,
        useClass: OccCheckoutPaymentAdapter
      }, {
        provide: CheckoutBillingAddressAdapter,
        useClass: OccCheckoutBillingAddressAdapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccCheckoutConfig), {
        provide: CheckoutAdapter,
        useClass: OccCheckoutAdapter
      }, {
        provide: CheckoutDeliveryAddressAdapter,
        useClass: OccCheckoutDeliveryAddressAdapter
      }, {
        provide: CheckoutDeliveryModesAdapter,
        useClass: OccCheckoutDeliveryModesAdapter
      }, {
        provide: CheckoutPaymentAdapter,
        useClass: OccCheckoutPaymentAdapter
      }, {
        provide: CheckoutBillingAddressAdapter,
        useClass: OccCheckoutBillingAddressAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/checkout/fesm2022/spartacus-checkout-base.mjs
var CheckoutModule = class _CheckoutModule {
  static {
    this.ɵfac = function CheckoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CheckoutModule,
      imports: [CheckoutComponentsModule, CheckoutCoreModule, CheckoutOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CheckoutComponentsModule, CheckoutCoreModule, CheckoutOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckoutModule, [{
    type: NgModule,
    args: [{
      imports: [CheckoutComponentsModule, CheckoutCoreModule, CheckoutOccModule]
    }]
  }], null, null);
})();
export {
  CheckoutModule
};
//# sourceMappingURL=@spartacus_checkout_base.js.map
