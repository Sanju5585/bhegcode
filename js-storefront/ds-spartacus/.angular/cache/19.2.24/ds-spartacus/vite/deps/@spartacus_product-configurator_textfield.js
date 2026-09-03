import {
  CommonConfigurator,
  CommonConfiguratorUtilsService,
  ConfiguratorModelUtils,
  ConfiguratorRouter,
  ConfiguratorRouterExtractorService
} from "./chunk-2H7NFAMW.js";
import "./chunk-ZPMY6JFV.js";
import {
  cartGroup_actions
} from "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import {
  ActiveCartFacade,
  CART_MODIFICATION_NORMALIZER
} from "./chunk-KEAKWHYV.js";
import "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  ConfigModule,
  ConverterService,
  I18nModule,
  LoggerService,
  OCC_USER_ID_CURRENT,
  OccEndpointsService,
  StateModule,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  UserIdService,
  provideDefaultConfig,
  tryNormalizeHttpError,
  utilsGroup
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
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
  createFeatureSelector,
  createSelector,
  select
} from "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient
} from "./chunk-2A6OHZCE.js";
import {
  DefaultValueAccessor,
  FormControlDirective,
  FormsModule,
  NgControlStatus,
  ReactiveFormsModule,
  UntypedFormControl
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  catchError,
  filter,
  map,
  of,
  take,
  tap
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product-configurator/fesm2022/spartacus-product-configurator-textfield.mjs
var _c0 = () => ({
  cxRoute: "cart"
});
var _c1 = (a0, a1) => ({
  value: a0,
  attribute: a1
});
function ConfiguratorTextfieldFormComponent_ng_container_0_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6)(1, "cx-configurator-textfield-input-field", 7);
    ɵɵlistener("inputChange", function ConfiguratorTextfieldFormComponent_ng_container_0_ng_container_1_div_4_Template_cx_configurator_textfield_input_field_inputChange_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.updateConfiguration($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const attribute_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("attribute", attribute_r3);
  }
}
function ConfiguratorTextfieldFormComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(4, ConfiguratorTextfieldFormComponent_ng_container_0_ng_container_1_div_4_Template, 2, 1, "div", 4);
    ɵɵelement(5, "cx-configurator-textfield-add-to-cart-button", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "configurator.a11y.editAttributesAndValues"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", configuration_r4.configurationInfos);
    ɵɵadvance();
    ɵɵproperty("configuration", configuration_r4);
  }
}
function ConfiguratorTextfieldFormComponent_ng_container_0_ng_template_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelement(1, "cx-configurator-textfield-input-field-readonly", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const attribute_r5 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("attribute", attribute_r5);
  }
}
function ConfiguratorTextfieldFormComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(3, ConfiguratorTextfieldFormComponent_ng_container_0_ng_template_3_div_3_Template, 2, 1, "div", 4);
  }
  if (rf & 2) {
    const configuration_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "configurator.a11y.listOfAttributesAndValues"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", configuration_r4.configurationInfos);
  }
}
function ConfiguratorTextfieldFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorTextfieldFormComponent_ng_container_0_ng_container_1_Template, 6, 5, "ng-container", 2);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, ConfiguratorTextfieldFormComponent_ng_container_0_ng_template_3_Template, 4, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const readonly_r6 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r1.isEditable$))("ngIfElse", readonly_r6);
  }
}
var ConfiguratorTextfield;
(function(ConfiguratorTextfield2) {
  let ConfigurationStatus;
  (function(ConfigurationStatus2) {
    ConfigurationStatus2["SUCCESS"] = "SUCCESS";
    ConfigurationStatus2["ERROR"] = "ERROR";
  })(ConfigurationStatus = ConfiguratorTextfield2.ConfigurationStatus || (ConfiguratorTextfield2.ConfigurationStatus = {}));
})(ConfiguratorTextfield || (ConfiguratorTextfield = {}));
var CONFIGURATION_TEXTFIELD_FEATURE = "productConfigurationTextfield";
var CONFIGURATION_TEXTFIELD_DATA = "[ConfiguratorTextfield] Configuration Data";
var CREATE_CONFIGURATION = "[Configurator] Create Configuration Textfield";
var CREATE_CONFIGURATION_FAIL = "[Configurator] Create Configuration Textfield Fail";
var CREATE_CONFIGURATION_SUCCESS = "[Configurator] Create Configuration Textfield Success";
var UPDATE_CONFIGURATION = "[Configurator] Update Configuration Textfield";
var ADD_TO_CART = "[Configurator] Add to cart Textfield";
var ADD_TO_CART_FAIL = "[Configurator] Add to cart Textfield Fail";
var READ_CART_ENTRY_CONFIGURATION = "[Configurator] Read cart entry configuration Textfield";
var READ_CART_ENTRY_CONFIGURATION_FAIL = "[Configurator] Read cart entry configuration Textfield Fail";
var READ_CART_ENTRY_CONFIGURATION_SUCCESS = "[Configurator] Read cart entry configuration Textfield Success";
var READ_ORDER_ENTRY_CONFIGURATION = "[Configurator] Read order entry configuration textfield";
var READ_ORDER_ENTRY_CONFIGURATION_FAIL = "[Configurator] Read order entry configuration textfield Fail";
var READ_ORDER_ENTRY_CONFIGURATION_SUCCESS = "[Configurator] Read order entry configuration textfield Success";
var UPDATE_CART_ENTRY_CONFIGURATION = "[Configurator] Update cart entry configuration Textfield";
var UPDATE_CART_ENTRY_CONFIGURATION_FAIL = "[Configurator] Update cart entry configuration Textfield Fail";
var REMOVE_CONFIGURATION = "[Configurator] Remove Configuration Textfield";
var CreateConfiguration = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA);
    this.payload = payload;
    this.type = CREATE_CONFIGURATION;
  }
};
var CreateConfigurationFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA, payload);
    this.payload = payload;
    this.type = CREATE_CONFIGURATION_FAIL;
  }
};
var CreateConfigurationSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA);
    this.payload = payload;
    this.type = CREATE_CONFIGURATION_SUCCESS;
  }
};
var UpdateConfiguration = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA);
    this.payload = payload;
    this.type = UPDATE_CONFIGURATION;
  }
};
var AddToCart = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA);
    this.payload = payload;
    this.type = ADD_TO_CART;
  }
};
var AddToCartFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA, payload);
    this.payload = payload;
    this.type = ADD_TO_CART_FAIL;
  }
};
var UpdateCartEntryConfiguration = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA);
    this.payload = payload;
    this.type = UPDATE_CART_ENTRY_CONFIGURATION;
  }
};
var UpdateCartEntryConfigurationFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA, payload);
    this.payload = payload;
    this.type = UPDATE_CART_ENTRY_CONFIGURATION_FAIL;
  }
};
var ReadCartEntryConfiguration = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA);
    this.payload = payload;
    this.type = READ_CART_ENTRY_CONFIGURATION;
  }
};
var ReadCartEntryConfigurationSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA);
    this.payload = payload;
    this.type = READ_CART_ENTRY_CONFIGURATION_SUCCESS;
  }
};
var ReadCartEntryConfigurationFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA, payload);
    this.payload = payload;
    this.type = READ_CART_ENTRY_CONFIGURATION_FAIL;
  }
};
var ReadOrderEntryConfiguration = class extends utilsGroup.LoaderLoadAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA);
    this.payload = payload;
    this.type = READ_ORDER_ENTRY_CONFIGURATION;
  }
};
var ReadOrderEntryConfigurationSuccess = class extends utilsGroup.LoaderSuccessAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA);
    this.payload = payload;
    this.type = READ_ORDER_ENTRY_CONFIGURATION_SUCCESS;
  }
};
var ReadOrderEntryConfigurationFail = class extends utilsGroup.LoaderFailAction {
  constructor(payload) {
    super(CONFIGURATION_TEXTFIELD_DATA, payload);
    this.payload = payload;
    this.type = READ_ORDER_ENTRY_CONFIGURATION_FAIL;
  }
};
var RemoveConfiguration = class extends utilsGroup.LoaderResetAction {
  constructor() {
    super(CONFIGURATION_TEXTFIELD_DATA);
    this.type = REMOVE_CONFIGURATION;
  }
};
var configuratorTextfieldGroup_actions = Object.freeze({
  __proto__: null,
  ADD_TO_CART,
  ADD_TO_CART_FAIL,
  AddToCart,
  AddToCartFail,
  CREATE_CONFIGURATION,
  CREATE_CONFIGURATION_FAIL,
  CREATE_CONFIGURATION_SUCCESS,
  CreateConfiguration,
  CreateConfigurationFail,
  CreateConfigurationSuccess,
  READ_CART_ENTRY_CONFIGURATION,
  READ_CART_ENTRY_CONFIGURATION_FAIL,
  READ_CART_ENTRY_CONFIGURATION_SUCCESS,
  READ_ORDER_ENTRY_CONFIGURATION,
  READ_ORDER_ENTRY_CONFIGURATION_FAIL,
  READ_ORDER_ENTRY_CONFIGURATION_SUCCESS,
  REMOVE_CONFIGURATION,
  ReadCartEntryConfiguration,
  ReadCartEntryConfigurationFail,
  ReadCartEntryConfigurationSuccess,
  ReadOrderEntryConfiguration,
  ReadOrderEntryConfigurationFail,
  ReadOrderEntryConfigurationSuccess,
  RemoveConfiguration,
  UPDATE_CART_ENTRY_CONFIGURATION,
  UPDATE_CART_ENTRY_CONFIGURATION_FAIL,
  UPDATE_CONFIGURATION,
  UpdateCartEntryConfiguration,
  UpdateCartEntryConfigurationFail,
  UpdateConfiguration
});
var getConfigurationContentSelector = (state) => state.loaderState.value;
var getConfigurationsState = createFeatureSelector(CONFIGURATION_TEXTFIELD_FEATURE);
var getConfigurationContent = createSelector(getConfigurationsState, getConfigurationContentSelector);
var configuratorTextfieldGroup_selectors = Object.freeze({
  __proto__: null,
  getConfigurationContent,
  getConfigurationsState
});
var ConfiguratorTextfieldService = class _ConfiguratorTextfieldService {
  constructor(store, activeCartService, configuratorUtils, userIdService) {
    this.store = store;
    this.activeCartService = activeCartService;
    this.configuratorUtils = configuratorUtils;
    this.userIdService = userIdService;
    this.ensureConfigurationDefined = (configuration) => configuration ?? {
      configurationInfos: [],
      owner: ConfiguratorModelUtils.createInitialOwner()
    };
  }
  /**
   * Creates a default textfield configuration for a product specified by the configuration owner.
   *
   * @param owner - Configuration owner
   *
   * @returns {Observable<ConfiguratorTextfield.Configuration>}
   */
  createConfiguration(owner) {
    return this.store.pipe(
      select(getConfigurationsState),
      tap((configurationState) => {
        const configuration = configurationState.loaderState.value;
        const isAvailableForProduct = configuration !== void 0 && !ConfiguratorModelUtils.isInitialOwner(configuration.owner);
        const isLoading = configurationState.loaderState.loading;
        if (!isAvailableForProduct && !isLoading) {
          this.store.dispatch(new CreateConfiguration({
            productCode: owner.id,
            //owner Id is the product code in this case
            owner
          }));
        }
      }),
      map((configurationState) => configurationState.loaderState.value),
      filter((configuration) => !this.isConfigurationInitial(configuration)),
      //save to assume configuration is defined, see previous filter
      map(this.ensureConfigurationDefined)
    );
  }
  /**
   * Updates a textfield configuration, specified by the changed attribute.
   *
   * @param changedAttribute - Changed attribute
   */
  updateConfiguration(changedAttribute) {
    this.store.pipe(select(getConfigurationContent), take(1)).subscribe((oldConfiguration) => {
      if (oldConfiguration) {
        this.store.dispatch(new UpdateConfiguration(this.createNewConfigurationWithChange(changedAttribute, oldConfiguration)));
      }
    });
  }
  /**
   * Adds the textfield configuration to the cart
   *
   * @param productCode - Product code of the configuration root product. Cart entry carries refers to this product
   * @param configuration Textfield configuration
   */
  addToCart(productCode, configuration) {
    this.activeCartService.requireLoadedCart().pipe(take(1)).subscribe((cart) => {
      this.userIdService.getUserId().pipe(take(1)).subscribe((userId) => {
        const addToCartParameters = {
          userId,
          cartId: this.configuratorUtils.getCartId(cart),
          productCode,
          configuration,
          quantity: 1
        };
        this.store.dispatch(new AddToCart(addToCartParameters));
      });
    });
  }
  /**
   * Updates a cart entry, specified by its cart entry number.
   *
   * @param cartEntryNumber - Cart entry number
   * @param configuration Textfield configuration (list of alphanumeric attributes)
   */
  updateCartEntry(cartEntryNumber, configuration) {
    this.activeCartService.requireLoadedCart().pipe(take(1)).subscribe((cart) => {
      this.userIdService.getUserId().pipe(take(1)).subscribe((userId) => {
        const updateCartParameters = {
          userId,
          cartId: this.configuratorUtils.getCartId(cart),
          cartEntryNumber,
          configuration
        };
        this.store.dispatch(new UpdateCartEntryConfiguration(updateCartParameters));
      });
    });
  }
  /**
   * Returns a textfield configuration for a cart entry.
   *
   * @param owner - Configuration owner
   *
   * @returns {Observable<ConfiguratorTextfield.Configuration>}
   */
  readConfigurationForCartEntry(owner) {
    return this.activeCartService.requireLoadedCart().pipe(switchMap((cart) => this.userIdService.getUserId().pipe(take(1), map((userId) => ({
      cart,
      userId
    }))).pipe(
      map((cont) => ({
        userId: cont.userId,
        cartId: this.configuratorUtils.getCartId(cont.cart),
        cartEntryNumber: owner.id,
        owner
      })),
      tap((readFromCartEntryParameters) => this.store.dispatch(new ReadCartEntryConfiguration(readFromCartEntryParameters))),
      switchMap(() => this.store.pipe(select(getConfigurationContent))),
      filter((configuration) => !this.isConfigurationInitial(configuration)),
      //save to assume that the configuration exists, see previous filter
      map(this.ensureConfigurationDefined)
    )));
  }
  /**
   * Returns the textfield configuration attached to an order entry.
   *
   * @param {CommonConfigurator.Owner} owner - Configuration owner
   *
   * @returns {Observable<ConfiguratorTextfield.Configuration>}
   */
  readConfigurationForOrderEntry(owner) {
    const ownerIdParts = this.configuratorUtils.decomposeOwnerId(owner.id);
    const readFromOrderEntryParameters = {
      userId: OCC_USER_ID_CURRENT,
      orderId: ownerIdParts.documentId,
      orderEntryNumber: ownerIdParts.entryNumber,
      owner
    };
    this.store.dispatch(new ReadOrderEntryConfiguration(readFromOrderEntryParameters));
    return this.store.pipe(select(getConfigurationContent), filter((configuration) => !this.isConfigurationInitial(configuration)), map(this.ensureConfigurationDefined));
  }
  /**
   * Creates a textfield configuration supposed to be sent to the backend when an attribute
   * has been changed
   * @param changedAttribute Attribute changed by the end user
   * @param oldConfiguration Existing configuration to which the attribute change is applied to
   * @returns Textfield configuration (merge of existing configuration and the changed attribute)
   */
  createNewConfigurationWithChange(changedAttribute, oldConfiguration) {
    const newConfiguration = {
      configurationInfos: [],
      owner: oldConfiguration.owner
    };
    oldConfiguration.configurationInfos.forEach((info) => {
      if (info.configurationLabel === changedAttribute.configurationLabel) {
        changedAttribute.status = ConfiguratorTextfield.ConfigurationStatus.SUCCESS;
        newConfiguration.configurationInfos.push(changedAttribute);
      } else {
        newConfiguration.configurationInfos.push(info);
      }
    });
    return newConfiguration;
  }
  isConfigurationInitial(configuration) {
    return configuration === void 0 || ConfiguratorModelUtils.isInitialOwner(configuration.owner);
  }
  static {
    this.ɵfac = function ConfiguratorTextfieldService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorTextfieldService)(ɵɵinject(Store), ɵɵinject(ActiveCartFacade), ɵɵinject(CommonConfiguratorUtilsService), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorTextfieldService,
      factory: _ConfiguratorTextfieldService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorTextfieldService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: ActiveCartFacade
  }, {
    type: CommonConfiguratorUtilsService
  }, {
    type: UserIdService
  }], null);
})();
var ConfiguratorTextfieldAddToCartButtonComponent = class _ConfiguratorTextfieldAddToCartButtonComponent {
  constructor(configuratorTextfieldService) {
    this.configuratorTextfieldService = configuratorTextfieldService;
  }
  /**
   * Adds the textfield configuration to the cart or updates it
   */
  onAddToCart() {
    const owner = this.configuration.owner;
    switch (owner.type) {
      case CommonConfigurator.OwnerType.PRODUCT:
        this.configuratorTextfieldService.addToCart(owner.id, this.configuration);
        break;
      case CommonConfigurator.OwnerType.CART_ENTRY:
        this.configuratorTextfieldService.updateCartEntry(owner.id, this.configuration);
        break;
    }
  }
  /**
   * Returns button description. Button will display 'addToCart' or 'done' in case configuration indicates that owner is a cart entry
   * @returns Resource key of button description
   */
  getButtonText() {
    return this.configuration.owner.type === CommonConfigurator.OwnerType.CART_ENTRY ? "configurator.addToCart.buttonUpdateCart" : "configurator.addToCart.button";
  }
  static {
    this.ɵfac = function ConfiguratorTextfieldAddToCartButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorTextfieldAddToCartButtonComponent)(ɵɵdirectiveInject(ConfiguratorTextfieldService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorTextfieldAddToCartButtonComponent,
      selectors: [["cx-configurator-textfield-add-to-cart-button"]],
      inputs: {
        configuration: "configuration",
        productCode: "productCode"
      },
      standalone: false,
      decls: 4,
      vars: 7,
      consts: [[1, "cx-btn", "btn", "btn-block", "btn-primary", "cx-add-to-cart-btn", 3, "click", "routerLink"]],
      template: function ConfiguratorTextfieldAddToCartButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "button", 0);
          ɵɵpipe(1, "cxUrl");
          ɵɵlistener("click", function ConfiguratorTextfieldAddToCartButtonComponent_Template_button_click_0_listener() {
            return ctx.onAddToCart();
          });
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction0(6, _c0)));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, ctx.getButtonText()), "\n");
        }
      },
      dependencies: [RouterLink, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorTextfieldAddToCartButtonComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-textfield-add-to-cart-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<button
  class="cx-btn btn btn-block btn-primary cx-add-to-cart-btn"
  [routerLink]="{ cxRoute: 'cart' } | cxUrl"
  (click)="onAddToCart()"
>
  {{ getButtonText() | cxTranslate }}
</button>
`
    }]
  }], () => [{
    type: ConfiguratorTextfieldService
  }], {
    configuration: [{
      type: Input
    }],
    productCode: [{
      type: Input
    }]
  });
})();
var ConfiguratorTextfieldInputFieldComponent = class _ConfiguratorTextfieldInputFieldComponent {
  constructor() {
    this.PREFIX_TEXTFIELD = "cx-configurator-textfield";
    this.attributeInputForm = new UntypedFormControl("");
    this.inputChange = new EventEmitter();
  }
  ngOnInit() {
    this.attributeInputForm.setValue(this.attribute.configurationValue);
  }
  /**
   * Triggered if an attribute value is changed. Triggers the emission of the inputChange event emitter that is
   * in turn received in the form component
   */
  onInputChange() {
    const attribute = {
      configurationLabel: this.attribute.configurationLabel,
      configurationValue: this.attributeInputForm.value
    };
    this.inputChange.emit(attribute);
  }
  /**
   * Compiles an ID for the attribute label by using the label from the backend and a prefix 'label'
   * @param attribute Textfield configurator attribute. Carries the attribute label information from the backend
   * @returns ID
   */
  getIdLabel(attribute) {
    return this.PREFIX_TEXTFIELD + "label" + this.getLabelForIdGeneration(attribute);
  }
  /**
   * Compiles an ID for the attribute value by using the label from the backend
   * @param attribute Textfield configurator attribute. Carries the attribute label information from the backend
   * @returns ID
   */
  getId(attribute) {
    return this.PREFIX_TEXTFIELD + this.getLabelForIdGeneration(attribute);
  }
  getLabelForIdGeneration(attribute) {
    return attribute.configurationLabel.replace(/\s/g, "");
  }
  static {
    this.ɵfac = function ConfiguratorTextfieldInputFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorTextfieldInputFieldComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorTextfieldInputFieldComponent,
      selectors: [["cx-configurator-textfield-input-field"]],
      inputs: {
        attribute: "attribute"
      },
      outputs: {
        inputChange: "inputChange"
      },
      standalone: false,
      decls: 6,
      vars: 13,
      consts: [[1, "cx-configurator-textfield-label", 3, "id"], [1, "form-group"], [1, "form-control", 3, "change", "formControl"]],
      template: function ConfiguratorTextfieldInputFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "label", 0);
          ɵɵpipe(1, "cxTranslate");
          ɵɵtext(2);
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 1)(4, "input", 2);
          ɵɵpipe(5, "cxTranslate");
          ɵɵlistener("change", function ConfiguratorTextfieldInputFieldComponent_Template_input_change_4_listener() {
            return ctx.onInputChange();
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵpropertyInterpolate("id", ctx.getIdLabel(ctx.attribute));
          ɵɵattribute("aria-label", ɵɵpipeBind1(1, 5, "configurator.a11y.nameOfAttribute"));
          ɵɵadvance(2);
          ɵɵtextInterpolate(ctx.attribute.configurationLabel);
          ɵɵadvance(2);
          ɵɵproperty("formControl", ctx.attributeInputForm);
          ɵɵattribute("aria-label", ɵɵpipeBind2(5, 7, "configurator.a11y.valueOfAttributeFull", ɵɵpureFunction2(10, _c1, ctx.attribute.configurationValue, ctx.attribute.configurationLabel)));
        }
      },
      dependencies: [DefaultValueAccessor, NgControlStatus, FormControlDirective, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorTextfieldInputFieldComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-textfield-input-field",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<label
  id="{{ getIdLabel(attribute) }}"
  class="cx-configurator-textfield-label"
  [attr.aria-label]="'configurator.a11y.nameOfAttribute' | cxTranslate"
  >{{ attribute.configurationLabel }}</label
>
<div class="form-group">
  <input
    [formControl]="attributeInputForm"
    class="form-control"
    (change)="onInputChange()"
    [attr.aria-label]="
      'configurator.a11y.valueOfAttributeFull'
        | cxTranslate
          : {
              value: attribute.configurationValue,
              attribute: attribute.configurationLabel,
            }
    "
  />
</div>
`
    }]
  }], () => [], {
    attribute: [{
      type: Input
    }],
    inputChange: [{
      type: Output
    }]
  });
})();
var ConfiguratorTextfieldInputFieldReadonlyComponent = class _ConfiguratorTextfieldInputFieldReadonlyComponent {
  constructor() {
    this.PREFIX_TEXTFIELD = "cx-configurator-textfield";
  }
  /**
   * Compiles an ID for the attribute label by using the label from the backend and a prefix 'label'
   * @param {ConfiguratorTextfield.ConfigurationInfo} attribute Textfield configurator attribute. Carries the attribute label information from the backend
   * @returns {string} ID
   */
  getIdLabel(attribute) {
    return this.PREFIX_TEXTFIELD + "label" + this.getLabelForIdGeneration(attribute);
  }
  getLabelForIdGeneration(attribute) {
    return attribute.configurationLabel.replace(/\s/g, "");
  }
  static {
    this.ɵfac = function ConfiguratorTextfieldInputFieldReadonlyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorTextfieldInputFieldReadonlyComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorTextfieldInputFieldReadonlyComponent,
      selectors: [["cx-configurator-textfield-input-field-readonly"]],
      inputs: {
        attribute: "attribute"
      },
      standalone: false,
      decls: 7,
      vars: 11,
      consts: [[1, "cx-visually-hidden", 3, "id"], ["aria-hidden", "true"]],
      template: function ConfiguratorTextfieldInputFieldReadonlyComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "span", 0);
          ɵɵtext(1);
          ɵɵpipe(2, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(3, "label", 1);
          ɵɵtext(4);
          ɵɵelementEnd();
          ɵɵelementStart(5, "div", 1);
          ɵɵtext(6);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵpropertyInterpolate("id", ctx.getIdLabel(ctx.attribute));
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 5, "configurator.a11y.valueOfAttributeFull", ɵɵpureFunction2(8, _c1, ctx.attribute.configurationValue, ctx.attribute.configurationLabel)), "\n");
          ɵɵadvance(2);
          ɵɵattribute("aria-describedby", ctx.getIdLabel(ctx.attribute));
          ɵɵadvance();
          ɵɵtextInterpolate(ctx.attribute.configurationLabel);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ctx.attribute.configurationValue, "\n");
        }
      },
      dependencies: [TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorTextfieldInputFieldReadonlyComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-textfield-input-field-readonly",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<span id="{{ getIdLabel(attribute) }}" class="cx-visually-hidden">
  {{
    'configurator.a11y.valueOfAttributeFull'
      | cxTranslate
        : {
            value: attribute.configurationValue,
            attribute: attribute.configurationLabel,
          }
  }}
</span>
<label aria-hidden="true" attr.aria-describedby="{{ getIdLabel(attribute) }}">{{
  attribute.configurationLabel
}}</label>
<div aria-hidden="true">
  {{ attribute.configurationValue }}
</div>
`
    }]
  }], null, {
    attribute: [{
      type: Input
    }]
  });
})();
var ConfiguratorTextfieldFormComponent = class _ConfiguratorTextfieldFormComponent {
  constructor(configuratorTextfieldService, configRouterExtractorService) {
    this.configuratorTextfieldService = configuratorTextfieldService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.configuration$ = this.configRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => {
      switch (routerData.owner.type) {
        case CommonConfigurator.OwnerType.CART_ENTRY: {
          return this.configuratorTextfieldService.readConfigurationForCartEntry(routerData.owner);
        }
        case CommonConfigurator.OwnerType.ORDER_ENTRY: {
          return this.configuratorTextfieldService.readConfigurationForOrderEntry(routerData.owner);
        }
        default: {
          return this.configuratorTextfieldService.createConfiguration(routerData.owner);
        }
      }
    }));
    this.isEditable$ = this.configRouterExtractorService.extractRouterData().pipe(map((routerData) => routerData.pageType === ConfiguratorRouter.PageType.CONFIGURATION));
  }
  /**
   * Updates a configuration attribute
   * @param attribute - Configuration attribute, always containing a string typed value
   */
  updateConfiguration(attribute) {
    this.configuratorTextfieldService.updateConfiguration(attribute);
  }
  static {
    this.ɵfac = function ConfiguratorTextfieldFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorTextfieldFormComponent)(ɵɵdirectiveInject(ConfiguratorTextfieldService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorTextfieldFormComponent,
      selectors: [["cx-configurator-textfield-form"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["readonly", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "cx-visually-hidden"], ["class", "cx-attribute", 4, "ngFor", "ngForOf"], [3, "configuration"], [1, "cx-attribute"], [3, "inputChange", "attribute"], [3, "attribute"]],
      template: function ConfiguratorTextfieldFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorTextfieldFormComponent_ng_container_0_Template, 5, 4, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.configuration$));
        }
      },
      dependencies: [NgForOf, NgIf, ConfiguratorTextfieldInputFieldComponent, ConfiguratorTextfieldInputFieldReadonlyComponent, ConfiguratorTextfieldAddToCartButtonComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorTextfieldFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-textfield-form",
      standalone: false,
      template: `<ng-container *ngIf="configuration$ | async as configuration">
  <ng-container *ngIf="isEditable$ | async as isEditable; else readonly">
    <span class="cx-visually-hidden">
      {{ 'configurator.a11y.editAttributesAndValues' | cxTranslate }}
    </span>
    <div
      class="cx-attribute"
      *ngFor="let attribute of configuration.configurationInfos"
    >
      <cx-configurator-textfield-input-field
        [attribute]="attribute"
        (inputChange)="updateConfiguration($event)"
      ></cx-configurator-textfield-input-field>
    </div>

    <cx-configurator-textfield-add-to-cart-button
      [configuration]="configuration"
    ></cx-configurator-textfield-add-to-cart-button>
  </ng-container>
  <ng-template #readonly>
    <span class="cx-visually-hidden">
      {{ 'configurator.a11y.listOfAttributesAndValues' | cxTranslate }}
    </span>
    <div
      class="cx-attribute"
      *ngFor="let attribute of configuration.configurationInfos"
    >
      <cx-configurator-textfield-input-field-readonly
        [attribute]="attribute"
      ></cx-configurator-textfield-input-field-readonly>
    </div>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: ConfiguratorTextfieldService
  }, {
    type: ConfiguratorRouterExtractorService
  }], null);
})();
var TextfieldConfiguratorComponentsModule = class _TextfieldConfiguratorComponentsModule {
  static {
    this.ɵfac = function TextfieldConfiguratorComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextfieldConfiguratorComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TextfieldConfiguratorComponentsModule,
      declarations: [ConfiguratorTextfieldFormComponent, ConfiguratorTextfieldInputFieldComponent, ConfiguratorTextfieldInputFieldReadonlyComponent, ConfiguratorTextfieldAddToCartButtonComponent],
      imports: [RouterModule, FormsModule, ReactiveFormsModule, NgSelectModule, CommonModule, I18nModule, UrlModule],
      exports: [ConfiguratorTextfieldFormComponent, ConfiguratorTextfieldInputFieldComponent, ConfiguratorTextfieldInputFieldReadonlyComponent, ConfiguratorTextfieldAddToCartButtonComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          TextfieldConfigurationForm: {
            component: ConfiguratorTextfieldFormComponent
          }
        }
      })],
      imports: [RouterModule, FormsModule, ReactiveFormsModule, NgSelectModule, CommonModule, I18nModule, UrlModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextfieldConfiguratorComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, FormsModule, ReactiveFormsModule, NgSelectModule, CommonModule, I18nModule, UrlModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          TextfieldConfigurationForm: {
            component: ConfiguratorTextfieldFormComponent
          }
        }
      })],
      declarations: [ConfiguratorTextfieldFormComponent, ConfiguratorTextfieldInputFieldComponent, ConfiguratorTextfieldInputFieldReadonlyComponent, ConfiguratorTextfieldAddToCartButtonComponent],
      exports: [ConfiguratorTextfieldFormComponent, ConfiguratorTextfieldInputFieldComponent, ConfiguratorTextfieldInputFieldReadonlyComponent, ConfiguratorTextfieldAddToCartButtonComponent]
    }]
  }], null, null);
})();
var ConfiguratorTextfieldAdapter = class {
};
var ConfiguratorTextfieldConnector = class _ConfiguratorTextfieldConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  /**
   * Creates default configuration for a product that is textfield-configurable
   * @param productCode Product code
   * @param owner Owner of the configuration
   * @returns Observable of product configurations
   */
  createConfiguration(productCode, owner) {
    return this.adapter.createConfiguration(productCode, owner);
  }
  /**
   * Reads an existing configuration for a cart entry
   * @param parameters Attributes needed to read a product configuration for a cart entry
   * @returns Observable of product configurations
   */
  readConfigurationForCartEntry(parameters) {
    return this.adapter.readConfigurationForCartEntry(parameters);
  }
  /**
   * Reads an existing configuration for an order entry
   * @param {CommonConfigurator.ReadConfigurationFromOrderEntryParameters} parameters Attributes needed to read a product configuration for an order entry
   * @returns {Observable<ConfiguratorTextfield.Configuration>} Observable of product configurations
   */
  readConfigurationForOrderEntry(parameters) {
    return this.adapter.readConfigurationForOrderEntry(parameters);
  }
  /**
   * Updates a configuration that is attached to a cart entry
   * @param parameters Attributes needed to update a cart entries' configuration
   * @returns Observable of cart modifications
   */
  updateConfigurationForCartEntry(parameters) {
    return this.adapter.updateConfigurationForCartEntry(parameters);
  }
  /**
   * Adds a textfield-configurable product to the cart, and passes along its configuration
   * @param parameters Attributes needed to add a textfield product along with its configuration to the cart
   * @returns Observable of cart modifications
   */
  addToCart(parameters) {
    return this.adapter.addToCart(parameters);
  }
  static {
    this.ɵfac = function ConfiguratorTextfieldConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorTextfieldConnector)(ɵɵinject(ConfiguratorTextfieldAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorTextfieldConnector,
      factory: _ConfiguratorTextfieldConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorTextfieldConnector, [{
    type: Injectable
  }], () => [{
    type: ConfiguratorTextfieldAdapter
  }], null);
})();
var ConfiguratorTextfieldEffects = class _ConfiguratorTextfieldEffects {
  constructor(actions$, configuratorTextfieldConnector) {
    this.actions$ = actions$;
    this.configuratorTextfieldConnector = configuratorTextfieldConnector;
    this.logger = inject(LoggerService);
    this.createConfiguration$ = createEffect(() => this.actions$.pipe(ofType(CREATE_CONFIGURATION), map((action) => action.payload), switchMap((payload) => {
      return this.configuratorTextfieldConnector.createConfiguration(payload.productCode, payload.owner).pipe(switchMap((configuration) => {
        return [new CreateConfigurationSuccess(configuration)];
      }), catchError((error) => of(new CreateConfigurationFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.addToCart$ = createEffect(() => this.actions$.pipe(ofType(ADD_TO_CART), map((action) => action.payload), switchMap((payload) => {
      return this.configuratorTextfieldConnector.addToCart(payload).pipe(switchMap(() => {
        return [new RemoveConfiguration(), new cartGroup_actions.LoadCart({
          cartId: payload.cartId,
          userId: payload.userId
        })];
      }), catchError((error) => of(new AddToCartFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.updateCartEntry$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_CART_ENTRY_CONFIGURATION), map((action) => action.payload), switchMap((payload) => {
      return this.configuratorTextfieldConnector.updateConfigurationForCartEntry(payload).pipe(switchMap(() => {
        return [new RemoveConfiguration(), new cartGroup_actions.LoadCart({
          cartId: payload.cartId,
          userId: payload.userId
        })];
      }), catchError((error) => of(new UpdateCartEntryConfigurationFail(tryNormalizeHttpError(error, this.logger)))));
    })));
    this.readConfigurationForCartEntry$ = createEffect(() => this.actions$.pipe(ofType(READ_CART_ENTRY_CONFIGURATION), switchMap((action) => {
      const parameters = action.payload;
      return this.configuratorTextfieldConnector.readConfigurationForCartEntry(parameters).pipe(switchMap((result) => [new ReadCartEntryConfigurationSuccess(result)]), catchError((error) => [new ReadCartEntryConfigurationFail(tryNormalizeHttpError(error, this.logger))]));
    })));
    this.readConfigurationForOrderEntry$ = createEffect(() => this.actions$.pipe(ofType(READ_ORDER_ENTRY_CONFIGURATION), switchMap((action) => {
      const parameters = action.payload;
      return this.configuratorTextfieldConnector.readConfigurationForOrderEntry(parameters).pipe(switchMap((result) => [new ReadOrderEntryConfigurationSuccess(result)]), catchError((error) => [new ReadOrderEntryConfigurationFail(tryNormalizeHttpError(error, this.logger))]));
    })));
  }
  static {
    this.ɵfac = function ConfiguratorTextfieldEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorTextfieldEffects)(ɵɵinject(Actions), ɵɵinject(ConfiguratorTextfieldConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorTextfieldEffects,
      factory: _ConfiguratorTextfieldEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorTextfieldEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: ConfiguratorTextfieldConnector
  }], null);
})();
var configuratorTextfieldEffects = [ConfiguratorTextfieldEffects];
var initialState = {
  configurationInfos: [],
  owner: ConfiguratorModelUtils.createInitialOwner()
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CONFIGURATION_SUCCESS:
    case READ_CART_ENTRY_CONFIGURATION_SUCCESS:
    case READ_ORDER_ENTRY_CONFIGURATION_SUCCESS:
    case UPDATE_CONFIGURATION: {
      return __spreadValues(__spreadValues({}, state), action.payload);
    }
    case REMOVE_CONFIGURATION: {
      return initialState;
    }
  }
  return state;
}
function getConfiguratorTextfieldReducers() {
  return {
    loaderState: utilsGroup.loaderReducer(
      CONFIGURATION_TEXTFIELD_DATA,
      // @ts-ignore TODO (#12620)
      reducer
    )
  };
}
var configuratorTextfieldReducerToken = new InjectionToken("ConfiguratorReducers");
var configuratorTextfieldReducerProvider = {
  provide: configuratorTextfieldReducerToken,
  useFactory: getConfiguratorTextfieldReducers
};
var ConfiguratorTextfieldStoreModule = class _ConfiguratorTextfieldStoreModule {
  static {
    this.ɵfac = function ConfiguratorTextfieldStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorTextfieldStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorTextfieldStoreModule,
      imports: [CommonModule, StateModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [configuratorTextfieldReducerProvider],
      imports: [CommonModule, StateModule, StoreModule.forFeature(CONFIGURATION_TEXTFIELD_FEATURE, configuratorTextfieldReducerToken), EffectsModule.forFeature(configuratorTextfieldEffects)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorTextfieldStoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StateModule, StoreModule.forFeature(CONFIGURATION_TEXTFIELD_FEATURE, configuratorTextfieldReducerToken), EffectsModule.forFeature(configuratorTextfieldEffects)],
      providers: [configuratorTextfieldReducerProvider]
    }]
  }], null, null);
})();
var TextfieldConfiguratorCoreModule = class _TextfieldConfiguratorCoreModule {
  static {
    this.ɵfac = function TextfieldConfiguratorCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextfieldConfiguratorCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TextfieldConfiguratorCoreModule,
      imports: [ConfiguratorTextfieldStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [ConfiguratorTextfieldConnector],
      imports: [ConfiguratorTextfieldStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextfieldConfiguratorCoreModule, [{
    type: NgModule,
    args: [{
      imports: [ConfiguratorTextfieldStoreModule],
      providers: [ConfiguratorTextfieldConnector]
    }]
  }], null, null);
})();
var CONFIGURATOR_TYPE_TEXTFIELD$1 = "TEXTFIELD";
var OccConfiguratorTextfieldAddToCartSerializer = class _OccConfiguratorTextfieldAddToCartSerializer {
  constructor() {
  }
  /**
   * Converts addToCart parameters into the OCC format
   * @param source Add to cart parameters in generic format
   * @param target Add to cart parameters in OCC format. Optional, can be used in case converters should be chained
   * @returns Add to cart parameters in OCC format
   */
  convert(source, target) {
    const configurationInfos = [];
    source.configuration?.configurationInfos.forEach((info) => this.convertInfo(info, configurationInfos));
    const resultTarget = __spreadProps(__spreadValues({}, target), {
      userId: source.userId,
      cartId: source.cartId,
      product: {
        code: source.productCode
      },
      quantity: source.quantity,
      configurationInfos
    });
    return resultTarget;
  }
  convertInfo(source, occConfigurationInfos) {
    const occInfo = {
      configurationLabel: source.configurationLabel,
      configurationValue: source.configurationValue,
      status: source.status,
      configuratorType: CONFIGURATOR_TYPE_TEXTFIELD$1
    };
    occConfigurationInfos.push(occInfo);
  }
  static {
    this.ɵfac = function OccConfiguratorTextfieldAddToCartSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorTextfieldAddToCartSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorTextfieldAddToCartSerializer,
      factory: _OccConfiguratorTextfieldAddToCartSerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorTextfieldAddToCartSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OccConfiguratorTextfieldNormalizer = class _OccConfiguratorTextfieldNormalizer {
  constructor() {
  }
  /**
   * Converts addToCart parameters into the generic format
   * @param source Add to cart parameters in OCC format
   * @param target Optional result, can be provided in case converters should be chained
   * @returns Add to cart parameters in generic format
   */
  convert(source, target) {
    const resultTarget = __spreadValues(__spreadValues({}, target), source);
    return resultTarget;
  }
  static {
    this.ɵfac = function OccConfiguratorTextfieldNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorTextfieldNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorTextfieldNormalizer,
      factory: _OccConfiguratorTextfieldNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorTextfieldNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var CONFIGURATION_TEXTFIELD_NORMALIZER = new InjectionToken("ConfigurationNormalizer");
var CONFIGURATION_TEXTFIELD_ADD_TO_CART_SERIALIZER = new InjectionToken("ConfigurationAddToCartSerializer");
var CONFIGURATION_TEXTFIELD_UPDATE_CART_ENTRY_SERIALIZER = new InjectionToken("ConfigurationUpdateCartEntrySerializer");
var OccConfiguratorTextfieldAdapter = class _OccConfiguratorTextfieldAdapter {
  constructor(http, occEndpointsService, converterService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
  }
  createConfiguration(productCode, owner) {
    return this.http.get(this.occEndpointsService.buildUrl("createTextfieldConfiguration", {
      urlParams: {
        productCode
      }
    })).pipe(this.converterService.pipeable(CONFIGURATION_TEXTFIELD_NORMALIZER), map((resultConfiguration) => {
      return __spreadProps(__spreadValues({}, resultConfiguration), {
        owner
      });
    }));
  }
  addToCart(parameters) {
    const url = this.occEndpointsService.buildUrl("addTextfieldConfigurationToCart", {
      urlParams: {
        userId: parameters.userId,
        cartId: parameters.cartId
      }
    });
    const occAddToCartParameters = this.converterService.convert(parameters, CONFIGURATION_TEXTFIELD_ADD_TO_CART_SERIALIZER);
    return this.http.post(url, occAddToCartParameters).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }
  readConfigurationForCartEntry(parameters) {
    const url = this.occEndpointsService.buildUrl("readTextfieldConfigurationForCartEntry", {
      urlParams: {
        userId: parameters.userId,
        cartId: parameters.cartId,
        cartEntryNumber: parameters.cartEntryNumber
      }
    });
    return this.http.get(url).pipe(this.converterService.pipeable(CONFIGURATION_TEXTFIELD_NORMALIZER), map((resultConfiguration) => {
      return __spreadProps(__spreadValues({}, resultConfiguration), {
        owner: __spreadValues({}, parameters.owner)
      });
    }));
  }
  readConfigurationForOrderEntry(parameters) {
    const url = this.occEndpointsService.buildUrl("readTextfieldConfigurationForOrderEntry", {
      urlParams: {
        userId: parameters.userId,
        orderId: parameters.orderId,
        orderEntryNumber: parameters.orderEntryNumber
      }
    });
    return this.http.get(url).pipe(this.converterService.pipeable(CONFIGURATION_TEXTFIELD_NORMALIZER), map((resultConfiguration) => {
      return __spreadProps(__spreadValues({}, resultConfiguration), {
        owner: __spreadValues({}, parameters.owner)
      });
    }));
  }
  updateConfigurationForCartEntry(parameters) {
    const url = this.occEndpointsService.buildUrl("updateTextfieldConfigurationForCartEntry", {
      urlParams: {
        userId: parameters.userId,
        cartId: parameters.cartId,
        cartEntryNumber: parameters.cartEntryNumber
      }
    });
    const occUpdateCartEntryParameters = this.converterService.convert(parameters, CONFIGURATION_TEXTFIELD_UPDATE_CART_ENTRY_SERIALIZER);
    return this.http.post(url, occUpdateCartEntryParameters).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }
  static {
    this.ɵfac = function OccConfiguratorTextfieldAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorTextfieldAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorTextfieldAdapter,
      factory: _OccConfiguratorTextfieldAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorTextfieldAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
var CONFIGURATOR_TYPE_TEXTFIELD = "TEXTFIELD";
var OccConfiguratorTextfieldUpdateCartEntrySerializer = class _OccConfiguratorTextfieldUpdateCartEntrySerializer {
  constructor() {
  }
  /**
   * Converts the attributes for the updateCartEntry request into OCC format. Most attributes are just copied,
   * except for the backend configurator type that needs to be set to 'TEXTFIELD'
   * @param source Attributes for updating a cart entries' configuration in generic format
   * @returns ttributes for updating a cart entries' configuration in OCC format
   */
  convert(source) {
    const configurationInfos = [];
    source.configuration?.configurationInfos.forEach((info) => this.convertInfo(info, configurationInfos));
    const target = {
      userId: source.userId,
      cartId: source.cartId,
      cartEntryNumber: source.cartEntryNumber,
      configurationInfos
    };
    return target;
  }
  convertInfo(source, occConfigurationInfos) {
    const occInfo = {
      configurationLabel: source.configurationLabel,
      configurationValue: source.configurationValue,
      status: source.status,
      configuratorType: CONFIGURATOR_TYPE_TEXTFIELD
    };
    occConfigurationInfos.push(occInfo);
  }
  static {
    this.ɵfac = function OccConfiguratorTextfieldUpdateCartEntrySerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorTextfieldUpdateCartEntrySerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorTextfieldUpdateCartEntrySerializer,
      factory: _OccConfiguratorTextfieldUpdateCartEntrySerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorTextfieldUpdateCartEntrySerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function defaultOccConfiguratorTextfieldConfigFactory() {
  return {
    backend: {
      occ: {
        endpoints: {
          createTextfieldConfiguration: "products/${productCode}/configurator/textfield",
          addTextfieldConfigurationToCart: "users/${userId}/carts/${cartId}/entries/configurator/textfield",
          readTextfieldConfigurationForCartEntry: "users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/configurator/textfield",
          readTextfieldConfigurationForOrderEntry: "users/${userId}/orders/${orderId}/entries/${orderEntryNumber}/configurator/textfield",
          readTextfieldConfigurationForQuoteEntry: "users/${userId}/quotes/${quoteId}/entries/${quoteEntryNumber}/configurator/textfield",
          updateTextfieldConfigurationForCartEntry: "users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/configurator/textfield"
        }
      }
    }
  };
}
var TextfieldConfiguratorOccModule = class _TextfieldConfiguratorOccModule {
  static {
    this.ɵfac = function TextfieldConfiguratorOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextfieldConfiguratorOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TextfieldConfiguratorOccModule,
      imports: [CommonModule, ConfigModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: ConfiguratorTextfieldAdapter,
        useClass: OccConfiguratorTextfieldAdapter
      }, {
        provide: CONFIGURATION_TEXTFIELD_NORMALIZER,
        useExisting: OccConfiguratorTextfieldNormalizer,
        multi: true
      }, {
        provide: CONFIGURATION_TEXTFIELD_ADD_TO_CART_SERIALIZER,
        useExisting: OccConfiguratorTextfieldAddToCartSerializer,
        multi: true
      }, {
        provide: CONFIGURATION_TEXTFIELD_UPDATE_CART_ENTRY_SERIALIZER,
        useExisting: OccConfiguratorTextfieldUpdateCartEntrySerializer,
        multi: true
      }],
      imports: [CommonModule, ConfigModule.withConfigFactory(defaultOccConfiguratorTextfieldConfigFactory)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextfieldConfiguratorOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ConfigModule.withConfigFactory(defaultOccConfiguratorTextfieldConfigFactory)],
      providers: [{
        provide: ConfiguratorTextfieldAdapter,
        useClass: OccConfiguratorTextfieldAdapter
      }, {
        provide: CONFIGURATION_TEXTFIELD_NORMALIZER,
        useExisting: OccConfiguratorTextfieldNormalizer,
        multi: true
      }, {
        provide: CONFIGURATION_TEXTFIELD_ADD_TO_CART_SERIALIZER,
        useExisting: OccConfiguratorTextfieldAddToCartSerializer,
        multi: true
      }, {
        provide: CONFIGURATION_TEXTFIELD_UPDATE_CART_ENTRY_SERIALIZER,
        useExisting: OccConfiguratorTextfieldUpdateCartEntrySerializer,
        multi: true
      }]
    }]
  }], null, null);
})();
var TextfieldConfiguratorModule = class _TextfieldConfiguratorModule {
  static {
    this.ɵfac = function TextfieldConfiguratorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextfieldConfiguratorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TextfieldConfiguratorModule,
      imports: [TextfieldConfiguratorCoreModule, TextfieldConfiguratorComponentsModule, TextfieldConfiguratorOccModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [TextfieldConfiguratorCoreModule, TextfieldConfiguratorComponentsModule, TextfieldConfiguratorOccModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextfieldConfiguratorModule, [{
    type: NgModule,
    args: [{
      imports: [TextfieldConfiguratorCoreModule, TextfieldConfiguratorComponentsModule, TextfieldConfiguratorOccModule]
    }]
  }], null, null);
})();
export {
  CONFIGURATOR_TYPE_TEXTFIELD$1 as CONFIGURATOR_TYPE_TEXTFIELD,
  ConfiguratorTextfieldAddToCartButtonComponent,
  ConfiguratorTextfieldFormComponent,
  ConfiguratorTextfieldInputFieldComponent,
  ConfiguratorTextfieldInputFieldReadonlyComponent,
  OccConfiguratorTextfieldAdapter,
  OccConfiguratorTextfieldAddToCartSerializer,
  OccConfiguratorTextfieldNormalizer,
  TextfieldConfiguratorComponentsModule,
  TextfieldConfiguratorCoreModule,
  TextfieldConfiguratorModule,
  TextfieldConfiguratorOccModule
};
//# sourceMappingURL=@spartacus_product-configurator_textfield.js.map
