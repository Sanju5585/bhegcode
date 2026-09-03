import {
  Configurator,
  RulebasedConfiguratorConnector
} from "./chunk-CUFULLR5.js";
import {
  CommonConfigurator,
  ConfiguratorModelUtils,
  ConfiguratorType
} from "./chunk-2H7NFAMW.js";
import "./chunk-X6DUCLWC.js";
import "./chunk-UIW5AQFA.js";
import "./chunk-ZPMY6JFV.js";
import "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import "./chunk-OOT34BER.js";
import {
  CART_MODIFICATION_NORMALIZER
} from "./chunk-KEAKWHYV.js";
import "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  ConverterService,
  LanguageService,
  LoggerService,
  OccEndpointsService,
  TranslationService,
  provideDefaultConfigFactory
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
  HttpClient
} from "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import {
  CommonModule,
  formatCurrency,
  getCurrencySymbol,
  getLocaleId
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
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
  ɵɵinject
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  map,
  of,
  take
} from "./chunk-R6FETK65.js";
import "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product-configurator/fesm2022/spartacus-product-configurator-rulebased-cpq.mjs
var Cpq;
(function(Cpq2) {
  let DisplayAs;
  (function(DisplayAs2) {
    DisplayAs2[DisplayAs2["RADIO_BUTTON"] = 1] = "RADIO_BUTTON";
    DisplayAs2[DisplayAs2["CHECK_BOX"] = 2] = "CHECK_BOX";
    DisplayAs2[DisplayAs2["DROPDOWN"] = 3] = "DROPDOWN";
    DisplayAs2[DisplayAs2["LIST_BOX"] = 4] = "LIST_BOX";
    DisplayAs2[DisplayAs2["LIST_BOX_MULTI"] = 5] = "LIST_BOX_MULTI";
    DisplayAs2[DisplayAs2["READ_ONLY"] = 71] = "READ_ONLY";
    DisplayAs2[DisplayAs2["INPUT"] = 95] = "INPUT";
    DisplayAs2[DisplayAs2["AUTO_COMPLETE_CUSTOM"] = 102] = "AUTO_COMPLETE_CUSTOM";
  })(DisplayAs = Cpq2.DisplayAs || (Cpq2.DisplayAs = {}));
  let DataType;
  (function(DataType2) {
    DataType2["INPUT_STRING"] = "String";
    DataType2["INPUT_NUMBER"] = "Number";
    DataType2["QTY_ATTRIBUTE_LEVEL"] = "Quantity";
    DataType2["QTY_VALUE_LEVEL"] = "Attr.Quantity";
    DataType2["N_A"] = "N/A";
  })(DataType = Cpq2.DataType || (Cpq2.DataType = {}));
})(Cpq || (Cpq = {}));
var CpqConfiguratorNormalizerUtilsService = class _CpqConfiguratorNormalizerUtilsService {
  constructor(languageService) {
    this.languageService = languageService;
    this.logger = inject(LoggerService);
  }
  /**
   * Converts quantity to be shown in the overview page
   *
   * @param {Cpq.Value} value - CPQ Value
   * @param {Cpq.Attribute} attribute - CPQ Attribute
   * @returns {number} - Quantity
   */
  convertQuantity(value, attribute) {
    if (!value.selected) {
      return void 0;
    }
    const configuratorDataType = this.convertDataType(attribute);
    let quantity;
    switch (configuratorDataType) {
      case Configurator.DataType.USER_SELECTION_QTY_ATTRIBUTE_LEVEL:
        quantity = Number(attribute.quantity);
        break;
      case Configurator.DataType.USER_SELECTION_QTY_VALUE_LEVEL:
        quantity = Number(value.quantity);
        break;
      default:
        quantity = void 0;
    }
    return quantity;
  }
  /**
   * Converts value price
   *
   * @param { Cpq.Value} value - CPQ Value
   * @param {string} currency - Currency code ISO
   * @returns {Configurator.PriceDetails}
   */
  convertValuePrice(value, currency) {
    let price;
    if (value.price) {
      price = {
        currencyIso: currency,
        value: parseFloat(value.price)
      };
      this.formatPriceForLocale(price, this.getLanguage());
    }
    return price;
  }
  /**
   * Calculates total value price
   *
   * @param {number} quantity - Quantity
   * @param {Configurator.PriceDetails} valuePrice - PriceDetails of the single value price
   * @returns {Configurator.PriceDetails } - total value price
   */
  calculateValuePriceTotal(quantity, valuePrice) {
    let valuePriceTotal;
    if (valuePrice) {
      const calculationQuantity = quantity ? quantity : 1;
      valuePriceTotal = {
        currencyIso: valuePrice.currencyIso,
        value: calculationQuantity * valuePrice.value
      };
      this.formatPriceForLocale(valuePriceTotal, this.getLanguage());
    }
    return valuePriceTotal;
  }
  /**
   * Calculates total attribute price
   *
   * @param {Configurator.Attribute} attribute - Configurator Attribute
   * @param {string} currency - Currency
   * @returns {Configurator.PriceDetails} - total attribute price
   */
  calculateAttributePriceTotal(attribute, currency) {
    const priceTotal = attribute.values?.filter((entry) => entry.selected && entry.valuePriceTotal).reduce((total, item) => total + (item.valuePriceTotal?.value ?? 0), 0);
    const attributePriceTotal = {
      currencyIso: currency,
      value: priceTotal ?? 0
    };
    this.formatPriceForLocale(attributePriceTotal, this.getLanguage());
    return attributePriceTotal;
  }
  /**
   * Formats price for given PriceDetails object and Locale
   *
   * @param {Configurator.PriceDetails} price - Price details
   * @param {string} availableLocale - Original locale
   */
  formatPriceForLocale(price, availableLocale) {
    const currencySymbol = getCurrencySymbol(price.currencyIso, "narrow", availableLocale);
    price.formattedValue = formatCurrency(price.value, availableLocale, currencySymbol, price.currencyIso);
  }
  /**
   * Converts the CPQ Attribute data type into the Configurator Attribute data type
   *
   * @param {Cpq.Attribute} cpqAttribute - CPQ Attribute
   * @returns {Configurator.DataType} Data type of the configurator attribute
   */
  convertDataType(cpqAttribute) {
    let dataType;
    switch (cpqAttribute.dataType) {
      case Cpq.DataType.INPUT_STRING: {
        dataType = Configurator.DataType.INPUT_STRING;
        break;
      }
      case Cpq.DataType.INPUT_NUMBER: {
        dataType = Configurator.DataType.INPUT_NUMBER;
        break;
      }
      case Cpq.DataType.N_A: {
        dataType = Configurator.DataType.USER_SELECTION_NO_QTY;
        break;
      }
      case Cpq.DataType.QTY_ATTRIBUTE_LEVEL: {
        dataType = Configurator.DataType.USER_SELECTION_QTY_ATTRIBUTE_LEVEL;
        break;
      }
      case Cpq.DataType.QTY_VALUE_LEVEL: {
        if (cpqAttribute.displayAs === Cpq.DisplayAs.RADIO_BUTTON || cpqAttribute.displayAs === Cpq.DisplayAs.DROPDOWN) {
          dataType = Configurator.DataType.USER_SELECTION_NO_QTY;
        } else if (cpqAttribute.displayAs === Cpq.DisplayAs.CHECK_BOX && !cpqAttribute.isLineItem) {
          dataType = Configurator.DataType.USER_SELECTION_NO_QTY;
        } else {
          dataType = Configurator.DataType.USER_SELECTION_QTY_VALUE_LEVEL;
        }
        break;
      }
      default: {
        dataType = Configurator.DataType.NOT_IMPLEMENTED;
      }
    }
    return dataType;
  }
  /**
   * Converts price summary
   *
   * @param {cpqConfiguration: Cpq.Configuration} cpqConfiguration - CPQ configuration
   * @returns {Configurator.PriceSummary} - price summary
   */
  convertPriceSummary(cpqConfiguration) {
    const priceSummary = {};
    if (cpqConfiguration.currencyISOCode) {
      const currency = cpqConfiguration.currencyISOCode;
      if (cpqConfiguration?.responder?.totalPrice && cpqConfiguration?.currencySign) {
        const currencySign = cpqConfiguration?.currencySign;
        const totalPriceAsString = cpqConfiguration.responder.totalPrice.replace(currencySign, "");
        const totalPrice = {
          currencyIso: currency,
          value: parseFloat(totalPriceAsString)
        };
        this.formatPriceForLocale(totalPrice, this.getLanguage());
        priceSummary.currentTotal = totalPrice;
      }
      if (cpqConfiguration?.responder?.baseProductPrice) {
        const basePriceAsString = cpqConfiguration.responder.baseProductPrice;
        const basePrice = {
          currencyIso: currency,
          value: parseFloat(basePriceAsString)
        };
        this.formatPriceForLocale(basePrice, this.getLanguage());
        priceSummary.basePrice = basePrice;
      }
      if (priceSummary.currentTotal && priceSummary.basePrice) {
        const selectedOptionsPrice = {
          currencyIso: currency,
          value: priceSummary.currentTotal.value - priceSummary.basePrice.value
        };
        this.formatPriceForLocale(selectedOptionsPrice, this.getLanguage());
        priceSummary.selectedOptions = selectedOptionsPrice;
      }
    }
    return priceSummary;
  }
  /**
   * Verifies whether at least one value of a CPQ Attribute has an assigned product
   *
   * @param {Cpq.Value[]} attributeValues - CPQ Attribute values
   * @returns {boolean} - true, if at least one value of a CPQ Attribute has an assigned product
   */
  hasAnyProducts(attributeValues) {
    return attributeValues.some((value) => value?.productSystemId);
  }
  /**
   * Convert attribute label
   *
   * @param {attribute: Cpq.Attribute} attribute - CPQ Attribute
   * @returns {string} - attribute label
   */
  convertAttributeLabel(attribute) {
    return attribute.label ? attribute.label : attribute.name ? attribute.name : "";
  }
  /**
   * Gets the current language.
   *
   * @return {string} - current language
   */
  getLanguage() {
    const lang = this.getActiveLanguage();
    try {
      getLocaleId(lang);
      return lang;
    } catch {
      this.reportMissingLocaleData(lang);
      return "en";
    }
  }
  /**
   * Gets the active language.
   *
   * @return {string} - active language
   */
  getActiveLanguage() {
    let result;
    this.languageService.getActive().subscribe((lang) => result = lang).unsubscribe();
    return result ?? "en";
  }
  /**
   * Logs the message for the missing local data.
   *
   * @param {string} lang - Active language
   */
  reportMissingLocaleData(lang) {
    if (isDevMode()) {
      this.logger.warn(`CpqConfiguratorNormalizerUtilsService: No locale data registered for '${lang}' (see https://angular.io/api/common/registerLocaleData).`);
    }
  }
  static {
    this.ɵfac = function CpqConfiguratorNormalizerUtilsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorNormalizerUtilsService)(ɵɵinject(LanguageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CpqConfiguratorNormalizerUtilsService,
      factory: _CpqConfiguratorNormalizerUtilsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorNormalizerUtilsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: LanguageService
  }], null);
})();
var CpqConfiguratorNormalizer = class _CpqConfiguratorNormalizer {
  constructor(cpqConfiguratorNormalizerUtilsService, translation) {
    this.cpqConfiguratorNormalizerUtilsService = cpqConfiguratorNormalizerUtilsService;
    this.translation = translation;
  }
  convert(source, target) {
    const resultTarget = __spreadProps(__spreadValues({}, target), {
      configId: source.configurationId ? source.configurationId : "",
      //if empty, will later be populated with final value
      complete: !source.incompleteAttributes?.length,
      consistent: !source.invalidMessages?.length && !source.failedValidations?.length && !source.incompleteMessages?.length && !source.errorMessages?.length,
      totalNumberOfIssues: this.generateTotalNumberOfIssues(source),
      productCode: source.productSystemId,
      priceSummary: this.cpqConfiguratorNormalizerUtilsService.convertPriceSummary(source),
      groups: [],
      flatGroups: [],
      owner: ConfiguratorModelUtils.createInitialOwner(),
      interactionState: {},
      errorMessages: this.generateErrorMessages(source),
      warningMessages: this.generateWarningMessages(source),
      pricingEnabled: true
    });
    source.tabs?.forEach((tab) => this.convertGroup(tab, source.attributes ?? [], source.currencyISOCode, resultTarget.groups, resultTarget.flatGroups));
    if (!resultTarget.groups || resultTarget.groups.length === 0) {
      this.convertGenericGroup(source.attributes ?? [], source.incompleteAttributes ?? [], source.currencyISOCode, resultTarget.groups, resultTarget.flatGroups);
    }
    return resultTarget;
  }
  generateTotalNumberOfIssues(source) {
    const numberOfIssues = (source.incompleteAttributes?.length ?? 0) + (source.incompleteMessages?.length ?? 0) + (source.invalidMessages?.length ?? 0) + (source.failedValidations?.length ?? 0) + (source.errorMessages?.length ?? 0);
    return numberOfIssues;
  }
  generateWarningMessages(source) {
    let warnMsgs = [];
    warnMsgs = warnMsgs.concat(source.failedValidations ?? []);
    warnMsgs = warnMsgs.concat(source.incompleteMessages ?? []);
    return warnMsgs;
  }
  generateErrorMessages(source) {
    let errorMsgs = [];
    errorMsgs = errorMsgs.concat(source.errorMessages ?? []);
    errorMsgs = errorMsgs.concat(source.invalidMessages ?? []);
    return errorMsgs;
  }
  convertGroup(source, sourceAttributes, currency, groupList, flatGroupList) {
    const attributes = [];
    if (source.isSelected) {
      sourceAttributes.forEach((sourceAttribute) => this.convertAttribute(sourceAttribute, source.id, currency, attributes));
    }
    const group = {
      id: source.id.toString(),
      name: source.name,
      description: source.displayName,
      configurable: true,
      complete: !source.isIncomplete,
      consistent: true,
      groupType: Configurator.GroupType.ATTRIBUTE_GROUP,
      attributes,
      subGroups: []
    };
    flatGroupList.push(group);
    groupList.push(group);
  }
  convertGenericGroup(sourceAttributes, incompleteAttributes, currency, groupList, flatGroupList) {
    const attributes = [];
    sourceAttributes.forEach((sourceAttribute) => this.convertAttribute(sourceAttribute, 1, currency, attributes));
    const group = {
      id: "1",
      name: "_GEN",
      configurable: true,
      complete: incompleteAttributes.length === 0,
      consistent: true,
      groupType: Configurator.GroupType.ATTRIBUTE_GROUP,
      attributes,
      subGroups: []
    };
    this.translation.translate("configurator.group.general").pipe(take(1)).subscribe((generalText) => group.description = generalText);
    groupList.push(group);
    flatGroupList.push(group);
  }
  convertAttribute(sourceAttribute, groupId, currency, attributeList) {
    const attribute = {
      attrCode: sourceAttribute.stdAttrCode,
      name: this.mapPAId(sourceAttribute),
      description: sourceAttribute.description,
      label: this.cpqConfiguratorNormalizerUtilsService.convertAttributeLabel(sourceAttribute),
      required: sourceAttribute.required,
      isLineItem: sourceAttribute.isLineItem,
      uiType: this.convertAttributeType(sourceAttribute),
      dataType: this.cpqConfiguratorNormalizerUtilsService.convertDataType(sourceAttribute),
      quantity: Number(sourceAttribute.quantity),
      groupId: groupId.toString(),
      userInput: sourceAttribute.userInput,
      hasConflicts: sourceAttribute.hasConflict,
      selectedSingleValue: void 0,
      images: [],
      visible: true
    };
    if (sourceAttribute.values && sourceAttribute.displayAs !== Cpq.DisplayAs.INPUT) {
      const values = [];
      sourceAttribute.values.forEach((value) => this.convertValue(value, sourceAttribute, currency, values));
      attribute.values = values;
      this.setSelectedSingleValue(attribute);
    }
    attribute.attributePriceTotal = this.cpqConfiguratorNormalizerUtilsService.calculateAttributePriceTotal(attribute, currency);
    this.compileAttributeIncomplete(attribute);
    attributeList.push(attribute);
  }
  /**
   * In case the CPQ API is called via REST, the attribute id is returned using field name pA_ID.
   * If we call CPQ via OCC the attribute is mapped to field name PA_ID.
   * This can't be changed easily and is related to the non-standard conform name 'pA_ID';
   * @param sourceAttribute source attribute
   * @returns value of PA_ID or pA_ID, depending on which field is filled.
   */
  mapPAId(sourceAttribute) {
    return sourceAttribute.pA_ID ? sourceAttribute.pA_ID.toString() : sourceAttribute.PA_ID.toString();
  }
  setSelectedSingleValue(attribute) {
    const values = attribute.values;
    if (values) {
      const selectedValues = values.map((entry) => entry).filter((entry) => entry.selected);
      if (selectedValues && selectedValues.length === 1) {
        attribute.selectedSingleValue = selectedValues[0].valueCode;
      }
    }
  }
  convertValueDisplay(sourceValue, sourceAttribute, value) {
    if (sourceAttribute.displayAs === Cpq.DisplayAs.DROPDOWN && sourceValue.selected && sourceValue.paV_ID === 0) {
      this.translation.translate("configurator.attribute.dropDownSelectMsg").pipe(take(1)).subscribe((text) => value.valueDisplay = text);
    } else {
      value.valueDisplay = sourceValue.valueDisplay;
    }
  }
  convertValueCode(valueCode) {
    return valueCode === 0 ? Configurator.RetractValueCode : valueCode.toString();
  }
  convertValue(sourceValue, sourceAttribute, currency, values) {
    if (this.hasValueToBeIgnored(sourceAttribute, sourceValue)) {
      return;
    }
    const value = {
      valueCode: this.convertValueCode(sourceValue.paV_ID),
      name: sourceValue.valueCode,
      description: sourceValue.description,
      productSystemId: sourceValue.productSystemId,
      selected: sourceValue.selected,
      quantity: this.cpqConfiguratorNormalizerUtilsService.convertQuantity(sourceValue, sourceAttribute),
      valuePrice: this.cpqConfiguratorNormalizerUtilsService.convertValuePrice(sourceValue, currency),
      images: []
    };
    this.convertValueDisplay(sourceValue, sourceAttribute, value);
    value.valuePriceTotal = this.cpqConfiguratorNormalizerUtilsService.calculateValuePriceTotal(value.quantity ?? 1, value.valuePrice);
    values.push(value);
  }
  convertAttributeType(sourceAttribute) {
    const displayAs = sourceAttribute.displayAs;
    const displayAsProduct = sourceAttribute.values && this.cpqConfiguratorNormalizerUtilsService.hasAnyProducts(sourceAttribute.values) ? true : false;
    const isEnabled = sourceAttribute.isEnabled ?? false;
    if (!isEnabled && (displayAs === Cpq.DisplayAs.RADIO_BUTTON || displayAs === Cpq.DisplayAs.DROPDOWN || displayAs === Cpq.DisplayAs.CHECK_BOX || displayAs === Cpq.DisplayAs.INPUT)) {
      return Configurator.UiType.READ_ONLY;
    }
    return this.findUiTypeFromDisplayType(displayAs, displayAsProduct, sourceAttribute);
  }
  findUiTypeFromDisplayType(displayAs, displayAsProduct, sourceAttribute) {
    let uiType;
    switch (displayAs) {
      case Cpq.DisplayAs.RADIO_BUTTON: {
        uiType = displayAsProduct ? Configurator.UiType.RADIOBUTTON_PRODUCT : Configurator.UiType.RADIOBUTTON;
        break;
      }
      case Cpq.DisplayAs.DROPDOWN: {
        uiType = displayAsProduct ? Configurator.UiType.DROPDOWN_PRODUCT : Configurator.UiType.DROPDOWN;
        break;
      }
      case Cpq.DisplayAs.CHECK_BOX: {
        uiType = displayAsProduct ? Configurator.UiType.CHECKBOXLIST_PRODUCT : Configurator.UiType.CHECKBOXLIST;
        break;
      }
      case Cpq.DisplayAs.INPUT: {
        uiType = sourceAttribute.dataType === Cpq.DataType.INPUT_STRING ? Configurator.UiType.STRING : Configurator.UiType.NOT_IMPLEMENTED;
        break;
      }
      default: {
        uiType = Configurator.UiType.NOT_IMPLEMENTED;
      }
    }
    return uiType;
  }
  compileAttributeIncomplete(attribute) {
    attribute.incomplete = false;
    switch (attribute.uiType) {
      case Configurator.UiType.RADIOBUTTON:
      case Configurator.UiType.RADIOBUTTON_PRODUCT:
      case Configurator.UiType.DROPDOWN:
      case Configurator.UiType.DROPDOWN_PRODUCT:
      case Configurator.UiType.SINGLE_SELECTION_IMAGE: {
        if (!attribute.selectedSingleValue || attribute.selectedSingleValue === Configurator.RetractValueCode) {
          attribute.incomplete = true;
        }
        break;
      }
      case Configurator.UiType.NUMERIC:
      case Configurator.UiType.STRING: {
        if (!attribute.userInput) {
          attribute.incomplete = true;
        }
        break;
      }
      case Configurator.UiType.CHECKBOXLIST:
      case Configurator.UiType.CHECKBOXLIST_PRODUCT:
      case Configurator.UiType.CHECKBOX:
      case Configurator.UiType.MULTI_SELECTION_IMAGE: {
        const isOneValueSelected = attribute.values?.find((value) => value.selected) !== void 0 ? true : false;
        if (!isOneValueSelected) {
          attribute.incomplete = true;
        }
        break;
      }
    }
  }
  hasValueToBeIgnored(attribute, value) {
    const selectedValues = attribute.values?.map((entry) => entry).filter((entry) => entry.selected && entry.paV_ID !== 0);
    return (attribute.displayAs === Cpq.DisplayAs.DROPDOWN && attribute.required && selectedValues && selectedValues.length > 0 && value.paV_ID === 0) ?? false;
  }
  static {
    this.ɵfac = function CpqConfiguratorNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorNormalizer)(ɵɵinject(CpqConfiguratorNormalizerUtilsService), ɵɵinject(TranslationService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CpqConfiguratorNormalizer,
      factory: _CpqConfiguratorNormalizer.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorNormalizer, [{
    type: Injectable
  }], () => [{
    type: CpqConfiguratorNormalizerUtilsService
  }, {
    type: TranslationService
  }], null);
})();
var INITIAL_OV_VALUE_ATTRIBUTE_NAME = "";
var CpqConfiguratorOverviewNormalizer = class _CpqConfiguratorOverviewNormalizer {
  constructor(cpqConfiguratorNormalizerUtilsService, translation) {
    this.cpqConfiguratorNormalizerUtilsService = cpqConfiguratorNormalizerUtilsService;
    this.translation = translation;
    this.NO_OPTION_SELECTED = 0;
  }
  convert(source, target) {
    const resultTarget = __spreadProps(__spreadValues({}, target), {
      configId: source.configurationId ? source.configurationId : "",
      productCode: source.productSystemId,
      priceSummary: this.cpqConfiguratorNormalizerUtilsService.convertPriceSummary(source),
      groups: source.tabs?.flatMap((tab) => this.convertTab(tab, source.currencyISOCode)).filter((tab) => tab.attributes && tab.attributes.length > 0),
      totalNumberOfIssues: this.calculateTotalNumberOfIssues(source)
    });
    return resultTarget;
  }
  convertTab(tab, currency) {
    let ovAttributes = [];
    tab.attributes?.forEach((attr) => {
      ovAttributes = ovAttributes.concat(this.convertAttribute(attr, currency));
    });
    const groupOverview = {
      id: tab.id.toString(),
      groupDescription: tab.displayName,
      attributes: ovAttributes
    };
    if (groupOverview.id === "0") {
      this.translation.translate("configurator.group.general").pipe(take(1)).subscribe((generalText) => groupOverview.groupDescription = generalText);
    }
    return groupOverview;
  }
  convertAttribute(attr, currency) {
    const attributeOverviewType = attr?.values && this.cpqConfiguratorNormalizerUtilsService.hasAnyProducts(attr?.values) ? Configurator.AttributeOverviewType.BUNDLE : Configurator.AttributeOverviewType.GENERAL;
    const ovAttr = [];
    this.convertAttributeValue(attr, currency).forEach((ovValue) => {
      ovAttr.push(__spreadProps(__spreadValues({}, ovValue), {
        type: attributeOverviewType,
        attribute: this.cpqConfiguratorNormalizerUtilsService.convertAttributeLabel(attr),
        attributeId: attr.stdAttrCode.toString()
      }));
    });
    return ovAttr;
  }
  convertAttributeValue(attr, currency) {
    const ovValues = [];
    switch (attr.displayAs) {
      case Cpq.DisplayAs.INPUT:
        if (attr?.dataType === Cpq.DataType.INPUT_STRING) {
          if (attr.userInput && attr.userInput.length > 0) {
            ovValues.push(this.extractValueUserInput(attr, currency));
          }
        } else {
          ovValues.push({
            attribute: INITIAL_OV_VALUE_ATTRIBUTE_NAME,
            value: "NOT_IMPLEMENTED"
          });
        }
        break;
      case Cpq.DisplayAs.RADIO_BUTTON:
      case Cpq.DisplayAs.DROPDOWN:
        const selectedValue = attr.values?.find((val) => val.selected && val.paV_ID !== this.NO_OPTION_SELECTED);
        if (selectedValue) {
          ovValues.push(this.extractValue(selectedValue, attr, currency));
        }
        break;
      case Cpq.DisplayAs.CHECK_BOX:
        attr.values?.filter((val) => val.selected)?.forEach((valueSelected) => {
          ovValues.push(this.extractValue(valueSelected, attr, currency));
        });
        break;
      default:
        ovValues.push({
          attribute: INITIAL_OV_VALUE_ATTRIBUTE_NAME,
          value: "NOT_IMPLEMENTED"
        });
    }
    return ovValues;
  }
  extractValue(valueSelected, attr, currency) {
    const ovValue = {
      attribute: INITIAL_OV_VALUE_ATTRIBUTE_NAME,
      value: valueSelected.valueDisplay ?? valueSelected.paV_ID.toString(),
      valueId: valueSelected.paV_ID.toString(),
      productCode: valueSelected.productSystemId,
      quantity: this.cpqConfiguratorNormalizerUtilsService.convertQuantity(valueSelected, attr),
      valuePrice: this.cpqConfiguratorNormalizerUtilsService.convertValuePrice(valueSelected, currency)
    };
    ovValue.valuePriceTotal = this.cpqConfiguratorNormalizerUtilsService.calculateValuePriceTotal(ovValue.quantity ?? 1, ovValue.valuePrice);
    return ovValue;
  }
  extractValueUserInput(attr, currency) {
    const value = attr.values ? attr.values[0] : void 0;
    const ovValue = {
      attribute: INITIAL_OV_VALUE_ATTRIBUTE_NAME,
      value: attr.userInput ?? attr.stdAttrCode.toString(),
      valueId: value?.paV_ID.toString(),
      quantity: 1
    };
    if (value) {
      ovValue.valuePrice = this.cpqConfiguratorNormalizerUtilsService.convertValuePrice(value, currency);
      ovValue.valuePriceTotal = this.cpqConfiguratorNormalizerUtilsService.calculateValuePriceTotal(ovValue.quantity ?? 1, ovValue.valuePrice);
    }
    return ovValue;
  }
  calculateTotalNumberOfIssues(source) {
    const numberOfIssues = (source.incompleteAttributes?.length ?? 0) + (source.incompleteMessages?.length ?? 0) + (source.invalidMessages?.length ?? 0) + (source.failedValidations?.length ?? 0) + (source.errorMessages?.length ?? 0);
    return numberOfIssues;
  }
  static {
    this.ɵfac = function CpqConfiguratorOverviewNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorOverviewNormalizer)(ɵɵinject(CpqConfiguratorNormalizerUtilsService), ɵɵinject(TranslationService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CpqConfiguratorOverviewNormalizer,
      factory: _CpqConfiguratorOverviewNormalizer.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorOverviewNormalizer, [{
    type: Injectable
  }], () => [{
    type: CpqConfiguratorNormalizerUtilsService
  }, {
    type: TranslationService
  }], null);
})();
var CpqConfiguratorUtils = class {
  /**
   * Collects information that we need to fire a CPQ update
   *
   * @param {Configurator.Attribute} attribute Configurator attribute
   * @returns {CpqUpdateInformation} Update information
   */
  static getUpdateInformation(attribute) {
    const attributeCode = attribute.attrCode;
    const groupId = attribute.groupId;
    if (attributeCode && groupId) {
      return {
        standardAttributeCode: attributeCode.toString(),
        tabId: groupId
      };
    } else {
      throw new Error("Attribute code of group id not present: " + JSON.stringify(attribute));
    }
  }
  /**
   * Finds first changed attribute
   * @param {Configurator.Configuration} source Configuration
   * @returns {Configurator.Attribute} First attribute of first group
   */
  static findFirstChangedAttribute(source) {
    const firstGroup = source.groups[0];
    if (firstGroup.attributes) {
      return firstGroup.attributes[0];
    } else {
      throw new Error("No changed attributes found");
    }
  }
};
var VALUE_SEPARATOR = ",";
var CpqConfiguratorSerializer = class _CpqConfiguratorSerializer {
  convert(source) {
    const attribute = CpqConfiguratorUtils.findFirstChangedAttribute(source);
    let updateAttribute;
    if (source.updateType === Configurator.UpdateType.ATTRIBUTE_QUANTITY) {
      updateAttribute = this.convertQuantity(attribute, source.configId);
    } else {
      updateAttribute = this.convertAttribute(attribute, source.configId);
    }
    return updateAttribute;
  }
  convertQuantity(attribute, configId) {
    const updateInformation = CpqConfiguratorUtils.getUpdateInformation(attribute);
    const updateAttribute = {
      configurationId: configId,
      standardAttributeCode: updateInformation.standardAttributeCode,
      changeAttributeValue: {
        quantity: attribute.quantity
      },
      tabId: updateInformation.tabId
    };
    return updateAttribute;
  }
  convertAttribute(attribute, configurationId) {
    const updateInformation = CpqConfiguratorUtils.getUpdateInformation(attribute);
    const updateAttribute = {
      configurationId,
      standardAttributeCode: updateInformation.standardAttributeCode,
      changeAttributeValue: {},
      tabId: updateInformation.tabId
    };
    if (attribute.uiType === Configurator.UiType.DROPDOWN || attribute.uiType === Configurator.UiType.DROPDOWN_PRODUCT || attribute.uiType === Configurator.UiType.RADIOBUTTON || attribute.uiType === Configurator.UiType.RADIOBUTTON_PRODUCT || attribute.uiType === Configurator.UiType.SINGLE_SELECTION_IMAGE) {
      updateAttribute.changeAttributeValue.attributeValueIds = this.processSelectedSingleValue(attribute.selectedSingleValue);
    } else if (attribute.uiType === Configurator.UiType.CHECKBOXLIST || attribute.uiType === Configurator.UiType.CHECKBOXLIST_PRODUCT || attribute.uiType === Configurator.UiType.CHECKBOX || attribute.uiType === Configurator.UiType.MULTI_SELECTION_IMAGE) {
      updateAttribute.changeAttributeValue.attributeValueIds = this.prepareValueIds(attribute);
    } else if (attribute.uiType === Configurator.UiType.STRING || attribute.uiType === Configurator.UiType.NUMERIC) {
      updateAttribute.changeAttributeValue.userInput = attribute.userInput;
      if (!updateAttribute.changeAttributeValue?.userInput) {
        updateAttribute.changeAttributeValue.userInput = " ";
      }
    }
    return updateAttribute;
  }
  processValueCode(valueCode) {
    return valueCode && valueCode === Configurator.RetractValueCode ? "0" : valueCode;
  }
  processSelectedSingleValue(singleValue) {
    let processedValue = this.processValueCode(singleValue);
    if (!processedValue) {
      processedValue = VALUE_SEPARATOR;
    }
    return processedValue;
  }
  prepareValueIds(attribute) {
    let valueIds = "";
    const selectedValues = attribute.values?.filter((value) => value.selected);
    if (selectedValues && selectedValues.length > 0) {
      selectedValues.forEach((value) => {
        valueIds += value.valueCode + VALUE_SEPARATOR;
      });
    } else {
      valueIds = VALUE_SEPARATOR;
    }
    return valueIds;
  }
  static {
    this.ɵfac = function CpqConfiguratorSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CpqConfiguratorSerializer,
      factory: _CpqConfiguratorSerializer.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorSerializer, [{
    type: Injectable
  }], null, null);
})();
var CpqConfiguratorValueSerializer = class _CpqConfiguratorValueSerializer {
  convert(source) {
    const attribute = CpqConfiguratorUtils.findFirstChangedAttribute(source);
    const updateValue = this.convertAttribute(attribute, source.configId);
    return updateValue;
  }
  convertAttribute(attribute, configurationId) {
    const updateInfo = CpqConfiguratorUtils.getUpdateInformation(attribute);
    const value = this.findFirstChangedValue(attribute);
    const updateAttribute = {
      configurationId,
      standardAttributeCode: updateInfo.standardAttributeCode,
      attributeValueId: value.valueCode,
      quantity: value.quantity ?? 1,
      tabId: updateInfo.tabId
    };
    return updateAttribute;
  }
  findFirstChangedValue(attribute) {
    if (attribute.values && attribute.values.length > 0) {
      return attribute.values[0];
    } else {
      throw new Error("No values present");
    }
  }
  static {
    this.ɵfac = function CpqConfiguratorValueSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorValueSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CpqConfiguratorValueSerializer,
      factory: _CpqConfiguratorValueSerializer.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorValueSerializer, [{
    type: Injectable
  }], null, null);
})();
var CPQ_CONFIGURATOR_NORMALIZER = new InjectionToken("CpqConfiguratorNormalizer");
var CPQ_CONFIGURATOR_SERIALIZER = new InjectionToken("CpqConfiguratorSerializer");
var CPQ_CONFIGURATOR_QUANTITY_SERIALIZER = new InjectionToken("CpqConfiguratorValueSerializer");
var CPQ_CONFIGURATOR_OVERVIEW_NORMALIZER = new InjectionToken("CpqConfiguratorOverviewNormalizer");
var CpqConfiguratorCommonModule = class _CpqConfiguratorCommonModule {
  static {
    this.ɵfac = function CpqConfiguratorCommonModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorCommonModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CpqConfiguratorCommonModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: CPQ_CONFIGURATOR_NORMALIZER,
        useClass: CpqConfiguratorNormalizer,
        multi: true
      }, {
        provide: CPQ_CONFIGURATOR_SERIALIZER,
        useClass: CpqConfiguratorSerializer,
        multi: true
      }, {
        provide: CPQ_CONFIGURATOR_QUANTITY_SERIALIZER,
        useClass: CpqConfiguratorValueSerializer,
        multi: true
      }, {
        provide: CPQ_CONFIGURATOR_OVERVIEW_NORMALIZER,
        useClass: CpqConfiguratorOverviewNormalizer,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorCommonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [{
        provide: CPQ_CONFIGURATOR_NORMALIZER,
        useClass: CpqConfiguratorNormalizer,
        multi: true
      }, {
        provide: CPQ_CONFIGURATOR_SERIALIZER,
        useClass: CpqConfiguratorSerializer,
        multi: true
      }, {
        provide: CPQ_CONFIGURATOR_QUANTITY_SERIALIZER,
        useClass: CpqConfiguratorValueSerializer,
        multi: true
      }, {
        provide: CPQ_CONFIGURATOR_OVERVIEW_NORMALIZER,
        useClass: CpqConfiguratorOverviewNormalizer,
        multi: true
      }]
    }]
  }], null, null);
})();
var CPQ_CONFIGURATOR_ADD_TO_CART_SERIALIZER = new InjectionToken("CpqConfiguratorAddToCartSerializer");
var CPQ_CONFIGURATOR_UPDATE_CART_ENTRY_SERIALIZER = new InjectionToken("CpqConfiguratorUpdateCartEntrySerializer");
var OccConfiguratorCpqAddToCartSerializer = class _OccConfiguratorCpqAddToCartSerializer {
  convert(source, target) {
    const resultTarget = __spreadProps(__spreadValues({}, target), {
      userId: source.userId,
      cartId: source.cartId,
      product: {
        code: source.productCode
      },
      quantity: source.quantity,
      configId: source.configId
    });
    return resultTarget;
  }
  static {
    this.ɵfac = function OccConfiguratorCpqAddToCartSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorCpqAddToCartSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorCpqAddToCartSerializer,
      factory: _OccConfiguratorCpqAddToCartSerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorCpqAddToCartSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccConfiguratorCpqUpdateCartEntrySerializer = class _OccConfiguratorCpqUpdateCartEntrySerializer {
  convert(source, target) {
    const resultTarget = __spreadProps(__spreadValues({}, target), {
      userId: source.userId,
      cartId: source.cartId,
      entryNumber: source.cartEntryNumber,
      configId: source.configuration.configId
    });
    return resultTarget;
  }
  static {
    this.ɵfac = function OccConfiguratorCpqUpdateCartEntrySerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorCpqUpdateCartEntrySerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorCpqUpdateCartEntrySerializer,
      factory: _OccConfiguratorCpqUpdateCartEntrySerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorCpqUpdateCartEntrySerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function defaultOccCpqConfiguratorConfigFactory() {
  return {
    backend: {
      occ: {
        endpoints: {
          getCpqAccessData: "users/${userId}/access/cpqconfigurator",
          addCpqConfigurationToCart: "users/${userId}/carts/${cartId}/entries/cpqconfigurator",
          readCpqConfigurationForCartEntry: "users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/cpqconfigurator",
          readCpqConfigurationForOrderEntry: "users/${userId}/orders/${orderId}/entries/${orderEntryNumber}/cpqconfigurator",
          updateCpqConfigurationForCartEntry: "users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/cpqconfigurator",
          createCpqConfiguration: "products/${productCode}/configurators/cpqconfigurator",
          readCpqConfiguration: "cpqconfigurator/${configurationId}/configuration?tabId=${tabId}",
          readCpqConfigurationOverview: "cpqconfigurator/${configurationId}/configurationOverview",
          updateCpqAttribute: "cpqconfigurator/${configurationId}/attributes/${attributeCode}?tabId=${tabId}",
          updateCpqAttributeValueQuantity: "cpqconfigurator/${configurationId}/attributes/${attributeCode}/values/${attributeValueId}?tabId=${tabId}",
          readCpqConfigurationForCartEntryFull: "users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/cpqconfigurator/configuration",
          readCpqConfigurationForOrderEntryFull: "users/${userId}/orders/${orderId}/entries/${orderEntryNumber}/cpqconfigurator/configuration",
          readCpqConfigurationForQuoteEntryFull: "users/${userId}/quotes/${quoteId}/entries/${quoteEntryNumber}/cpqconfigurator/configuration",
          readCpqConfigurationForSavedCartEntryFull: "users/${userId}/savedCarts/${savedCartId}/entries/${entryNumber}/cpqconfigurator/configuration"
        }
      }
    }
  };
}
var CpqConfiguratorOccService = class _CpqConfiguratorOccService {
  constructor(http, occEndpointsService, converterService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
  }
  addToCart(parameters) {
    const url = this.occEndpointsService.buildUrl("addCpqConfigurationToCart", {
      urlParams: {
        userId: parameters.userId,
        cartId: parameters.cartId
      }
    });
    const occAddToCartParameters = this.converterService.convert(parameters, CPQ_CONFIGURATOR_ADD_TO_CART_SERIALIZER);
    return this.http.post(url, occAddToCartParameters).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }
  updateCartEntry(parameters) {
    const url = this.occEndpointsService.buildUrl("updateCpqConfigurationForCartEntry", {
      urlParams: {
        userId: parameters.userId,
        cartId: parameters.cartId,
        cartEntryNumber: parameters.cartEntryNumber
      }
    });
    const occUpdateCartEntryParameters = this.converterService.convert(parameters, CPQ_CONFIGURATOR_UPDATE_CART_ENTRY_SERIALIZER);
    return this.http.put(url, occUpdateCartEntryParameters).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }
  getConfigIdForCartEntry(parameters) {
    const url = this.occEndpointsService.buildUrl("readCpqConfigurationForCartEntry", {
      urlParams: {
        userId: parameters.userId,
        cartId: parameters.cartId,
        cartEntryNumber: parameters.cartEntryNumber
      }
    });
    return this.http.get(url).pipe(map((response) => {
      return response.configId;
    }));
  }
  getConfigIdForOrderEntry(parameters) {
    const url = this.occEndpointsService.buildUrl("readCpqConfigurationForOrderEntry", {
      urlParams: {
        userId: parameters.userId,
        orderId: parameters.orderId,
        orderEntryNumber: parameters.orderEntryNumber
      }
    });
    return this.http.get(url).pipe(map((response) => {
      return response.configId;
    }));
  }
  /**
   * Creates a new default runtime configuration for the given product id
   * and read it from the CPQ system over OCC.
   *
   * @param {string} productSystemId - Product system ID
   * @returns {Observable<Configurator.Configuration>} - Created configuration
   */
  createConfiguration(productSystemId) {
    return this.callCreateConfiguration(productSystemId).pipe(this.converterService.pipeable(CPQ_CONFIGURATOR_NORMALIZER));
  }
  /**
   * Retrieves a configuration from the CPQ system over OCC by its configuration ID and for a certain tab.
   *
   * @param {string} configId - Configuration ID
   * @param {string} tabId - Tab ID
   * @returns {Observable<Configurator.Configuration>} - Retrieved configuration
   */
  readConfiguration(configId, tabId) {
    return this.callReadConfiguration(configId, tabId).pipe(this.converterService.pipeable(CPQ_CONFIGURATOR_NORMALIZER));
  }
  /**
   * Retrieves a configuration overview from the CPQ system over OCC by its configuration ID.
   *
   * @param {string} configId - Configuration ID
   * @returns {Observable<Configurator.Overview>} - Retrieved overview
   */
  readConfigurationOverview(configId) {
    return this.callReadConfigurationOverview(configId).pipe(this.converterService.pipeable(CPQ_CONFIGURATOR_OVERVIEW_NORMALIZER));
  }
  /**
   * Updates an attribute of the runtime configuration for the given configuration id and attribute code
   * and read the desired configuration tab from the CPQ system over OCC.
   *
   * @param {Configurator.Configuration} configuration - Configuration
   * @returns {Observable<Configurator.Configuration>} - Updated configuration
   */
  updateAttribute(configuration) {
    const updateAttribute = this.converterService.convert(configuration, CPQ_CONFIGURATOR_SERIALIZER);
    return this.callUpdateAttribute(updateAttribute).pipe(this.converterService.pipeable(CPQ_CONFIGURATOR_NORMALIZER));
  }
  /**
   * Updates a quantity for an attribute of the runtime configuration for the given configuration id and attribute code
   * and read the desired configuration tab from the CPQ system over OCC.
   *
   * @param {Configurator.Configuration} configuration - Configuration
   * @returns {Observable<Configurator.Configuration>} - Updated configuration
   */
  updateValueQuantity(configuration) {
    const updateValue = this.converterService.convert(configuration, CPQ_CONFIGURATOR_QUANTITY_SERIALIZER);
    return this.callUpdateValue(updateValue).pipe(this.converterService.pipeable(CPQ_CONFIGURATOR_NORMALIZER));
  }
  /**
   * Retrieves a configuration assigned to a cart entry.
   *
   * @param {CommonConfigurator.ReadConfigurationFromCartEntryParameters} parameters - Cart entry parameters
   * @returns {Observable<Configurator.Configuration>} - Retrieved configuration
   */
  readConfigurationForCartEntry(parameters) {
    return this.callReadConfigurationForCartEntry(parameters).pipe(this.converterService.pipeable(CPQ_CONFIGURATOR_NORMALIZER));
  }
  /**
   * Retrieves a configuration assigned to an order entry.
   *
   * @param {CommonConfigurator.ReadConfigurationFromOrderEntryParameters} parameters - Order entry parameters
   * @returns {Observable<Configurator.Configuration>} - Retrieved configuration
   */
  readConfigurationForOrderEntry(parameters) {
    return this.callReadConfigurationForOrderEntry(parameters).pipe(this.converterService.pipeable(CPQ_CONFIGURATOR_NORMALIZER));
  }
  callCreateConfiguration(productSystemId) {
    const url = this.occEndpointsService.buildUrl("createCpqConfiguration", {
      urlParams: {
        productCode: productSystemId
      }
    });
    return this.http.get(url);
  }
  callReadConfiguration(configId, tabId) {
    const url = this.occEndpointsService.buildUrl("readCpqConfiguration", {
      urlParams: {
        configurationId: configId
      },
      queryParams: tabId ? {
        tabId
      } : void 0
    });
    return this.http.get(url);
  }
  callReadConfigurationOverview(configId) {
    const url = this.occEndpointsService.buildUrl("readCpqConfigurationOverview", {
      urlParams: {
        configurationId: configId
      }
    });
    return this.http.get(url);
  }
  callUpdateAttribute(updateAttribute) {
    const url = this.occEndpointsService.buildUrl("updateCpqAttribute", {
      urlParams: {
        configurationId: updateAttribute.configurationId,
        attributeCode: updateAttribute.standardAttributeCode
      },
      queryParams: {
        tabId: updateAttribute.tabId
      }
    });
    return this.http.patch(url, updateAttribute.changeAttributeValue);
  }
  callUpdateValue(updateValue) {
    const url = this.occEndpointsService.buildUrl("updateCpqAttributeValueQuantity", {
      urlParams: {
        configurationId: updateValue.configurationId,
        attributeCode: updateValue.standardAttributeCode,
        attributeValueId: updateValue.attributeValueId
      },
      queryParams: {
        tabId: updateValue.tabId
      }
    });
    return this.http.patch(url, {
      quantity: updateValue.quantity
    });
  }
  callReadConfigurationForCartEntry(parameters) {
    const url = this.occEndpointsService.buildUrl("readCpqConfigurationForCartEntryFull", {
      urlParams: {
        userId: parameters.userId,
        cartId: parameters.cartId,
        cartEntryNumber: parameters.cartEntryNumber
      }
    });
    return this.http.get(url);
  }
  callReadConfigurationForOrderEntry(parameters) {
    let url;
    const ownerType = parameters.owner.type;
    if (ownerType === CommonConfigurator.OwnerType.ORDER_ENTRY) {
      url = this.occEndpointsService.buildUrl("readCpqConfigurationForOrderEntryFull", {
        urlParams: {
          userId: parameters.userId,
          orderId: parameters.orderId,
          orderEntryNumber: parameters.orderEntryNumber
        }
      });
    } else if (ownerType === CommonConfigurator.OwnerType.QUOTE_ENTRY) {
      url = this.occEndpointsService.buildUrl("readCpqConfigurationForQuoteEntryFull", {
        urlParams: {
          userId: parameters.userId,
          quoteId: parameters.orderId,
          quoteEntryNumber: parameters.orderEntryNumber
        }
      });
    } else {
      url = this.occEndpointsService.buildUrl("readCpqConfigurationForSavedCartEntryFull", {
        urlParams: {
          userId: parameters.userId,
          savedCartId: parameters.orderId,
          entryNumber: parameters.orderEntryNumber
        }
      });
    }
    return this.http.get(url);
  }
  static {
    this.ɵfac = function CpqConfiguratorOccService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorOccService)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CpqConfiguratorOccService,
      factory: _CpqConfiguratorOccService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorOccService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var CpqConfiguratorOccAdapter = class _CpqConfiguratorOccAdapter {
  constructor(cpqOccService) {
    this.cpqOccService = cpqOccService;
  }
  getConfiguratorType() {
    return ConfiguratorType.CPQ;
  }
  createConfiguration(owner) {
    return this.cpqOccService.createConfiguration(owner.id).pipe(map((configResponse) => {
      configResponse.owner = owner;
      return configResponse;
    }));
  }
  readConfiguration(configId, groupId, owner) {
    return this.cpqOccService.readConfiguration(configId, groupId).pipe(map((configResponse) => {
      configResponse.owner = owner;
      return configResponse;
    }));
  }
  updateConfiguration(configuration) {
    const updateMethod = configuration.updateType === Configurator.UpdateType.VALUE_QUANTITY ? this.cpqOccService.updateValueQuantity : this.cpqOccService.updateAttribute;
    return updateMethod.call(this.cpqOccService, configuration).pipe(map((configResponse) => {
      configResponse.owner = configuration.owner;
      return configResponse;
    }));
  }
  updateConfigurationOverview() {
    throw new Error("Update the configuration overview is not supported for the CPQ configurator");
  }
  addToCart(parameters) {
    return this.cpqOccService.addToCart(parameters);
  }
  readConfigurationForCartEntry(parameters) {
    return this.cpqOccService.readConfigurationForCartEntry(parameters).pipe(map((configResponse) => {
      configResponse.owner = parameters.owner;
      return configResponse;
    }));
  }
  updateConfigurationForCartEntry(parameters) {
    return this.cpqOccService.updateCartEntry(parameters);
  }
  readConfigurationForOrderEntry(parameters) {
    return this.cpqOccService.readConfigurationForOrderEntry(parameters).pipe(map((configResponse) => {
      configResponse.owner = parameters.owner;
      return configResponse;
    }));
  }
  readPriceSummary(configuration) {
    return of(configuration);
  }
  getConfigurationOverview(configId) {
    return this.cpqOccService.readConfigurationOverview(configId);
  }
  searchVariants() {
    throw new Error("searchVariants is not supported for the CPQ configurator");
  }
  static {
    this.ɵfac = function CpqConfiguratorOccAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorOccAdapter)(ɵɵinject(CpqConfiguratorOccService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CpqConfiguratorOccAdapter,
      factory: _CpqConfiguratorOccAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorOccAdapter, [{
    type: Injectable
  }], () => [{
    type: CpqConfiguratorOccService
  }], null);
})();
var CpqConfiguratorOccModule = class _CpqConfiguratorOccModule {
  static {
    this.ɵfac = function CpqConfiguratorOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqConfiguratorOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CpqConfiguratorOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultOccCpqConfiguratorConfigFactory), {
        provide: CPQ_CONFIGURATOR_ADD_TO_CART_SERIALIZER,
        useExisting: OccConfiguratorCpqAddToCartSerializer,
        multi: true
      }, {
        provide: CPQ_CONFIGURATOR_UPDATE_CART_ENTRY_SERIALIZER,
        useExisting: OccConfiguratorCpqUpdateCartEntrySerializer,
        multi: true
      }, {
        provide: RulebasedConfiguratorConnector.CONFIGURATOR_ADAPTER_LIST,
        useClass: CpqConfiguratorOccAdapter,
        multi: true
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqConfiguratorOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfigFactory(defaultOccCpqConfiguratorConfigFactory), {
        provide: CPQ_CONFIGURATOR_ADD_TO_CART_SERIALIZER,
        useExisting: OccConfiguratorCpqAddToCartSerializer,
        multi: true
      }, {
        provide: CPQ_CONFIGURATOR_UPDATE_CART_ENTRY_SERIALIZER,
        useExisting: OccConfiguratorCpqUpdateCartEntrySerializer,
        multi: true
      }, {
        provide: RulebasedConfiguratorConnector.CONFIGURATOR_ADAPTER_LIST,
        useClass: CpqConfiguratorOccAdapter,
        multi: true
      }]
    }]
  }], null, null);
})();
var RulebasedCpqConfiguratorModule = class _RulebasedCpqConfiguratorModule {
  static {
    this.ɵfac = function RulebasedCpqConfiguratorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RulebasedCpqConfiguratorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RulebasedCpqConfiguratorModule,
      imports: [CpqConfiguratorCommonModule, CpqConfiguratorOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CpqConfiguratorCommonModule, CpqConfiguratorOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RulebasedCpqConfiguratorModule, [{
    type: NgModule,
    args: [{
      imports: [CpqConfiguratorCommonModule, CpqConfiguratorOccModule]
    }]
  }], null, null);
})();
export {
  CPQ_CONFIGURATOR_ADD_TO_CART_SERIALIZER,
  CPQ_CONFIGURATOR_NORMALIZER,
  CPQ_CONFIGURATOR_OVERVIEW_NORMALIZER,
  CPQ_CONFIGURATOR_QUANTITY_SERIALIZER,
  CPQ_CONFIGURATOR_SERIALIZER,
  CPQ_CONFIGURATOR_UPDATE_CART_ENTRY_SERIALIZER,
  Cpq,
  CpqConfiguratorCommonModule,
  CpqConfiguratorNormalizer,
  CpqConfiguratorNormalizerUtilsService,
  CpqConfiguratorOccAdapter,
  CpqConfiguratorOccModule,
  CpqConfiguratorOccService,
  CpqConfiguratorOverviewNormalizer,
  CpqConfiguratorSerializer,
  CpqConfiguratorUtils,
  CpqConfiguratorValueSerializer,
  OccConfiguratorCpqAddToCartSerializer,
  OccConfiguratorCpqUpdateCartEntrySerializer,
  RulebasedCpqConfiguratorModule
};
//# sourceMappingURL=@spartacus_product-configurator_rulebased_cpq.js.map
