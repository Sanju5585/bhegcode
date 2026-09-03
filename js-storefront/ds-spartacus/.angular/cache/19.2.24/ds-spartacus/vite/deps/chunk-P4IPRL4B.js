import {
  ActiveCartFacade,
  CartOutlets,
  CartUiEventAddToCart
} from "./chunk-KEAKWHYV.js";
import {
  CmsComponentData,
  CurrentProductService,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ItemCounterComponent,
  ItemCounterModule,
  OutletDirective,
  OutletModule,
  ProductListItemContext
} from "./chunk-D5RDRHN5.js";
import {
  EventService,
  FeatureConfigService,
  FeatureDirective,
  FeatureToggles,
  FeaturesConfigModule,
  I18nModule,
  ProductAvailabilityService,
  ProductScope,
  TranslatePipe,
  isNotNullable,
  provideDefaultConfig,
  useFeatureStyles
} from "./chunk-VIVIQI6G.js";
import {
  FormGroupDirective,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-S7KROBXW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef$1,
  HostListener,
  Input,
  NgModule,
  Optional,
  ViewChild,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  filter,
  map,
  take
} from "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-components-add-to-cart.mjs
var _c0 = ["addToCartDialogTriggerEl"];
function AddToCartComponent_form_0_div_1_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "addToCart.quantityFull"));
  }
}
function AddToCartComponent_form_0_div_1_label_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "addToCart.quantity"));
  }
}
function AddToCartComponent_form_0_div_1_cx_item_counter_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-item-counter", 11);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("max", ctx_r1.maxQuantity)("control", ctx_r1.addToCartForm.get("quantity"))("ariaDescribedById", "add-to-card-stock-info");
  }
}
function AddToCartComponent_form_0_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getInventory());
  }
}
function AddToCartComponent_form_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, AddToCartComponent_form_0_div_1_label_1_Template, 3, 3, "label", 7)(2, AddToCartComponent_form_0_div_1_label_2_Template, 3, 3, "label", 7);
    ɵɵelementStart(3, "div", 8);
    ɵɵtemplate(4, AddToCartComponent_form_0_div_1_cx_item_counter_4_Template, 1, 3, "cx-item-counter", 9);
    ɵɵelementStart(5, "span", 10);
    ɵɵtemplate(6, AddToCartComponent_form_0_div_1_span_6_Template, 2, 1, "span", 4);
    ɵɵpipe(7, "async");
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.hasStock);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(7, 5, ctx_r1.showInventory$));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.hasStock ? ɵɵpipeBind1(9, 7, "addToCart.inStock") : ɵɵpipeBind1(10, 9, "addToCart.outOfStock"), "");
  }
}
function AddToCartComponent_form_0_ng_container_2_ng_template_1_Template(rf, ctx) {
}
function AddToCartComponent_form_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddToCartComponent_form_0_ng_container_2_ng_template_1_Template, 0, 0, "ng-template", 12);
    ɵɵtwoWayListener("cxComponentRefChange", function AddToCartComponent_form_0_ng_container_2_Template_ng_template_cxComponentRefChange_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      ɵɵtwoWayBindingSet(ctx_r1.pickupOptionCompRef, $event) || (ctx_r1.pickupOptionCompRef = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("cxComponentRefChange", function AddToCartComponent_form_0_ng_container_2_Template_ng_template_cxComponentRefChange_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onPickupOptionsCompLoaded());
    });
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r1.CartOutlets.ADD_TO_CART_PICKUP_OPTION);
    ɵɵtwoWayProperty("cxComponentRef", ctx_r1.pickupOptionCompRef);
  }
}
function AddToCartComponent_form_0_button_3_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵelement(1, "cx-icon", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.iconTypes.REPEAT);
  }
}
function AddToCartComponent_form_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 13, 0);
    ɵɵpipe(2, "cxTranslate");
    ɵɵpipe(3, "cxTranslate");
    ɵɵtemplate(4, AddToCartComponent_form_0_button_3_span_4_Template, 2, 1, "span", 14);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementStart(6, "span", 15);
    ɵɵpipe(7, "cxTranslate");
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", (ctx_r1.options == null ? null : ctx_r1.options.displayAddToCart) ? "btn btn-tertiary" : "btn btn-primary btn-block")("disabled", ctx_r1.disabled || ctx_r1.quantity <= 0 || ctx_r1.quantity > ctx_r1.maxQuantity);
    ɵɵattribute("aria-label", (ctx_r1.product == null ? null : ctx_r1.product.name) ? ɵɵpipeBind1(2, 6, "addToCart.addToCart") + ", " + (ctx_r1.product == null ? null : ctx_r1.product.name) : ɵɵpipeBind1(3, 8, "addToCart.addToCart"));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", (ctx_r1.options == null ? null : ctx_r1.options.addToCartString) === ɵɵpipeBind1(5, 10, "addToCart.buyItAgain"));
    ɵɵadvance(2);
    ɵɵproperty("ngClass", (ctx_r1.options == null ? null : ctx_r1.options.addToCartString) === ɵɵpipeBind1(7, 12, "addToCart.buyItAgain") ? "buyItAgainLink" : "");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", (tmp_8_0 = ctx_r1.options == null ? null : ctx_r1.options.addToCartString) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : ɵɵpipeBind1(9, 14, "addToCart.addToCart"), " ");
  }
}
function AddToCartComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 2);
    ɵɵlistener("submit", function AddToCartComponent_form_0_Template_form_submit_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.addToCart());
    });
    ɵɵtemplate(1, AddToCartComponent_form_0_div_1_Template, 11, 11, "div", 3)(2, AddToCartComponent_form_0_ng_container_2_Template, 2, 2, "ng-container", 4)(3, AddToCartComponent_form_0_button_3_Template, 10, 16, "button", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("formGroup", ctx_r1.addToCartForm);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showQuantity);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hasStock);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hasStock);
  }
}
var AddToCartComponent = class _AddToCartComponent {
  /**
   * We disable the dialog launch on quantity input,
   * as it causes an unexpected change of context.
   * The expectation is only for the quantity to get updated in the Qty field.
   */
  handleKeyboardEvent(event) {
    const eventTarget = event.target;
    const isQuantityInput = eventTarget.ariaLabel === "Quantity" && eventTarget.tagName === "INPUT";
    if (event.key === "Enter" && isQuantityInput) {
      event.preventDefault();
    }
  }
  constructor(currentProductService, cd, activeCartService, component, eventService, productListItemContext) {
    this.currentProductService = currentProductService;
    this.cd = cd;
    this.activeCartService = activeCartService;
    this.component = component;
    this.eventService = eventService;
    this.productListItemContext = productListItemContext;
    this.showQuantity = true;
    this.disabled = false;
    this.hasStock = false;
    this.inventoryThreshold = false;
    this.showInventory$ = this.component?.data$.pipe(map((data) => data.inventoryDisplay));
    this.quantity = 1;
    this.subscription = new Subscription();
    this.addToCartForm = new UntypedFormGroup({
      quantity: new UntypedFormControl(1, {
        updateOn: "blur"
      })
    });
    this.CartOutlets = CartOutlets;
    this.iconTypes = ICON_TYPE;
    this.featureConfigService = inject(FeatureConfigService);
    this.featureToggles = inject(FeatureToggles);
    this.productAvailabilityService = inject(ProductAvailabilityService);
    useFeatureStyles("a11yQTY2Quantity");
  }
  ngOnInit() {
    if (this.product) {
      this.productCode = this.product.code ?? "";
      this.setStockInfo(this.product);
    } else if (this.productCode) {
      this.quantity = 1;
      this.hasStock = true;
      this.cd.markForCheck();
    } else {
      let product$;
      if (this.productListItemContext) {
        product$ = this.productListItemContext.product$;
      } else if (this.featureToggles.showRealTimeStockInPDP) {
        product$ = this.currentProductService.getProduct([ProductScope.UNIT, ProductScope.DETAILS]);
      } else {
        product$ = this.currentProductService.getProduct();
      }
      this.subscription.add(product$.pipe(filter(isNotNullable)).subscribe((product) => {
        this.productCode = product.code ?? "";
        this.product = product;
        this.setStockInfo(product);
      }));
    }
  }
  setStockInfo(product) {
    this.quantity = 1;
    this.addToCartForm.controls["quantity"].setValue(1);
    this.inventoryThreshold = product.stock?.isValueRounded ?? false;
    if (this.productListItemContext) {
      this.showQuantity = false;
    }
    if (this.featureToggles.showRealTimeStockInPDP && product.sapUnit?.sapCode) {
      this.productAvailabilityService.getRealTimeStock(this.productCode, product.sapUnit?.sapCode).pipe(take(1)).subscribe(({
        quantity,
        status
      }) => {
        this.maxQuantity = Number(quantity);
        this.hasStock = Boolean(status && status !== "OUT_OF_STOCK");
        this.cd.markForCheck();
      });
    } else {
      this.hasStock = Boolean(product.stock?.stockLevelStatus !== "outOfStock");
      if (this.hasStock && product.stock?.stockLevel) {
        this.maxQuantity = product.stock.stockLevel;
      }
      this.cd.markForCheck();
    }
  }
  /**
   * In specific scenarios, we need to omit displaying the stock level or append a plus to the value.
   * When backoffice forces a product to be in stock, omit showing the stock level.
   * When product stock level is limited by a threshold value, append '+' at the end.
   * When out of stock, display no numerical value.
   */
  getInventory() {
    if (this.hasStock) {
      const quantityDisplay = this.maxQuantity ? this.maxQuantity.toString() : "";
      return this.inventoryThreshold ? quantityDisplay + "+" : quantityDisplay;
    } else {
      return "";
    }
  }
  updateCount(value) {
    this.quantity = value;
  }
  addToCart() {
    let quantity = 0;
    if (this.savedCart) {
      quantity = this.getQuantityFromSavedCart(this.productCode);
    } else {
      quantity = this.addToCartForm.get("quantity")?.value;
    }
    if (!this.productCode || quantity <= 0) {
      return;
    }
    if (this.pickupOptionCompRef instanceof ComponentRef$1) {
      this.pickupOptionCompRef.instance.intendedPickupLocation$.pipe(take(1)).subscribe((intendedPickupLocation) => {
        this.pickupStore = intendedPickupLocation?.pickupOption === "pickup" ? intendedPickupLocation.name : void 0;
      });
    }
    this.activeCartService.getEntries().pipe(take(1)).subscribe((cartEntries) => {
      this.activeCartService.addEntry(this.productCode, quantity, this.pickupStore);
      this.eventService.dispatch(this.createCartUiEventAddToCart(this.productCode, quantity, cartEntries.length, this.pickupStore));
    });
  }
  createCartUiEventAddToCart(productCode, quantity, numberOfEntriesBeforeAdd, storeName) {
    const newEvent = new CartUiEventAddToCart();
    newEvent.productCode = productCode;
    newEvent.quantity = quantity;
    newEvent.numberOfEntriesBeforeAdd = numberOfEntriesBeforeAdd;
    newEvent.pickupStoreName = storeName;
    newEvent.triggerElementRef = this.addToCartDialogTriggerEl;
    return newEvent;
  }
  onPickupOptionsCompLoaded() {
    if (this.featureConfigService.isEnabled("a11yPickupOptionsTabs") && this.pickupOptionCompRef instanceof ComponentRef$1) {
      this.subscription.add(this.pickupOptionCompRef.instance.intendedPickupChange.subscribe((intendedPickupLocation) => {
        this.disabled = intendedPickupLocation?.pickupOption === "pickup" && !intendedPickupLocation.displayName;
      }));
    }
  }
  getQuantityFromSavedCart(productCode) {
    return this.savedCart?.entries?.find((e) => e?.product?.code === productCode)?.quantity ?? 0;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function AddToCartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddToCartComponent)(ɵɵdirectiveInject(CurrentProductService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(CmsComponentData), ɵɵdirectiveInject(EventService), ɵɵdirectiveInject(ProductListItemContext, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AddToCartComponent,
      selectors: [["cx-add-to-cart"]],
      viewQuery: function AddToCartComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.addToCartDialogTriggerEl = _t.first);
        }
      },
      hostBindings: function AddToCartComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("keydown", function AddToCartComponent_keydown_HostBindingHandler($event) {
            return ctx.handleKeyboardEvent($event);
          }, false, ɵɵresolveDocument);
        }
      },
      inputs: {
        productCode: "productCode",
        showQuantity: "showQuantity",
        options: "options",
        pickupStore: "pickupStore",
        savedCart: "savedCart",
        product: "product"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["addToCartDialogTriggerEl", ""], [3, "formGroup", "submit", 4, "ngIf"], [3, "submit", "formGroup"], ["class", "quantity", 4, "ngIf"], [4, "ngIf"], ["type", "submit", 3, "ngClass", "disabled", 4, "ngIf"], [1, "quantity"], [4, "cxFeature"], [1, "cx-counter-stock"], [3, "max", "control", "ariaDescribedById", 4, "ngIf"], ["id", "add-to-card-stock-info", 1, "info"], [3, "max", "control", "ariaDescribedById"], [3, "cxComponentRefChange", "cxOutlet", "cxComponentRef"], ["type", "submit", 3, "ngClass", "disabled"], ["class", "repeat-icon", 4, "ngIf"], [3, "ngClass"], [1, "repeat-icon"], [3, "type"]],
      template: function AddToCartComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AddToCartComponent_form_0_Template, 4, 4, "form", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.productCode);
        }
      },
      dependencies: [NgClass, NgIf, ɵNgNoValidate, NgControlStatusGroup, FormGroupDirective, IconComponent, ItemCounterComponent, OutletDirective, FeatureDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToCartComponent, [{
    type: Component,
    args: [{
      selector: "cx-add-to-cart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<form *ngIf="productCode" [formGroup]="addToCartForm" (submit)="addToCart()">
  <div class="quantity" *ngIf="showQuantity">
    <label *cxFeature="'a11yQTY2Quantity'">{{
      'addToCart.quantityFull' | cxTranslate
    }}</label>
    <label *cxFeature="'!a11yQTY2Quantity'">{{
      'addToCart.quantity' | cxTranslate
    }}</label>
    <div class="cx-counter-stock">
      <cx-item-counter
        *ngIf="hasStock"
        [max]="maxQuantity"
        [control]="addToCartForm.get('quantity')"
        [ariaDescribedById]="'add-to-card-stock-info'"
      ></cx-item-counter>

      <span class="info" id="add-to-card-stock-info">
        <span *ngIf="showInventory$ | async">{{ getInventory() }}</span>
        {{
          hasStock
            ? ('addToCart.inStock' | cxTranslate)
            : ('addToCart.outOfStock' | cxTranslate)
        }}</span
      >
    </div>
  </div>

  <ng-container *ngIf="hasStock">
    <ng-template
      [cxOutlet]="CartOutlets.ADD_TO_CART_PICKUP_OPTION"
      [(cxComponentRef)]="pickupOptionCompRef"
      (cxComponentRefChange)="onPickupOptionsCompLoaded()"
    ></ng-template>
  </ng-container>

  <button
    #addToCartDialogTriggerEl
    *ngIf="hasStock"
    [ngClass]="
      options?.displayAddToCart
        ? 'btn btn-tertiary'
        : 'btn btn-primary btn-block'
    "
    type="submit"
    [disabled]="disabled || quantity <= 0 || quantity > maxQuantity"
    [attr.aria-label]="
      product?.name
        ? ('addToCart.addToCart' | cxTranslate) + ', ' + product?.name
        : ('addToCart.addToCart' | cxTranslate)
    "
  >
    <span
      *ngIf="
        options?.addToCartString === ('addToCart.buyItAgain' | cxTranslate)
      "
      class="repeat-icon"
      ><cx-icon [type]="iconTypes.REPEAT"></cx-icon
    ></span>
    <span
      [ngClass]="
        options?.addToCartString === ('addToCart.buyItAgain' | cxTranslate)
          ? 'buyItAgainLink'
          : ''
      "
    >
      {{ options?.addToCartString ?? ('addToCart.addToCart' | cxTranslate) }}
    </span>
  </button>
</form>
`
    }]
  }], () => [{
    type: CurrentProductService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ActiveCartFacade
  }, {
    type: CmsComponentData
  }, {
    type: EventService
  }, {
    type: ProductListItemContext,
    decorators: [{
      type: Optional
    }]
  }], {
    productCode: [{
      type: Input
    }],
    showQuantity: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    pickupStore: [{
      type: Input
    }],
    savedCart: [{
      type: Input
    }],
    product: [{
      type: Input
    }],
    addToCartDialogTriggerEl: [{
      type: ViewChild,
      args: ["addToCartDialogTriggerEl"]
    }],
    handleKeyboardEvent: [{
      type: HostListener,
      args: ["document:keydown", ["$event"]]
    }]
  });
})();
var AddToCartModule = class _AddToCartModule {
  static {
    this.ɵfac = function AddToCartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddToCartModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AddToCartModule,
      declarations: [AddToCartComponent],
      imports: [CommonModule, ReactiveFormsModule, I18nModule, IconModule, ItemCounterModule, OutletModule, FeaturesConfigModule],
      exports: [AddToCartComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ProductAddToCartComponent: {
            component: AddToCartComponent,
            data: {
              inventoryDisplay: false
            }
          }
        }
      })],
      imports: [CommonModule, ReactiveFormsModule, I18nModule, IconModule, ItemCounterModule, OutletModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToCartModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, I18nModule, IconModule, ItemCounterModule, OutletModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ProductAddToCartComponent: {
            component: AddToCartComponent,
            data: {
              inventoryDisplay: false
            }
          }
        }
      })],
      declarations: [AddToCartComponent],
      exports: [AddToCartComponent]
    }]
  }], null, null);
})();

export {
  AddToCartComponent,
  AddToCartModule
};
//# sourceMappingURL=chunk-P4IPRL4B.js.map
