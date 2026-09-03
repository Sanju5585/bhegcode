import {
  CartConfigService,
  ProductImportInfoService,
  isEmpty
} from "./chunk-Q7WXRDFA.js";
import {
  AbstractOrderType,
  ActiveCartFacade,
  ActiveCartOrderEntriesContextToken,
  CartAddEntryFailEvent,
  CartAddEntrySuccessEvent,
  CartItemContext,
  CartOutlets,
  CartUiEventAddToCart,
  CartValidationFacade,
  CartValidationStatusCode,
  CartVoucherFacade,
  DeleteCartFailEvent,
  DeleteCartSuccessEvent,
  MultiCartFacade,
  OrderEntriesSource,
  PromotionLocation,
  SelectiveCartFacade
} from "./chunk-KEAKWHYV.js";
import {
  AtMessageDirective,
  AtMessageModule,
  BtnLikeLinkModule,
  CmsComponentData,
  CurrentProductService,
  DIALOG_TYPE,
  FocusDirective,
  FormErrorsModule,
  FormRequiredLegendComponent,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ItemCounterComponent,
  ItemCounterModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  MediaComponent,
  MediaModule,
  OutletContextData,
  OutletDirective,
  OutletModule,
  PAGE_LAYOUT_HANDLER,
  ProductListItemContext,
  ProgressButtonComponent,
  ProgressButtonModule,
  PromotionsComponent,
  PromotionsModule,
  SpinnerComponent,
  SpinnerModule,
  provideOutlet
} from "./chunk-D5RDRHN5.js";
import {
  AuthService,
  CmsService,
  CustomerCouponService,
  EventService,
  FeatureConfigService,
  FeatureDirective,
  FeatureToggles,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  ProductAvailabilityService,
  ProductScope,
  RoutingService,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  UserIdService,
  isNotNullable,
  provideDefaultConfig,
  useFeatureStyles
} from "./chunk-VIVIQI6G.js";
import {
  NavigationCancel,
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-S7KROBXW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentRef$1,
  Directive,
  ElementRef,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Optional,
  ViewChild,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  merge
} from "./chunk-FBVS4YZX.js";
import {
  ReplaySubject,
  combineLatest,
  filter,
  map,
  of,
  race,
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

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-components.mjs
var _c0 = (a0) => ({
  quantity: a0
});
function CartItemValidationWarningComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "span", 3);
    ɵɵelement(2, "cx-icon", 4);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 5);
    ɵɵpipe(7, "cxTranslate");
    ɵɵlistener("click", function CartItemValidationWarningComponent_ng_container_0_div_1_Template_button_click_6_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.isVisible = !ctx_r1.isVisible);
    });
    ɵɵelement(8, "cx-icon", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const cartModification_r3 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r1.iconTypes.INFO);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 4, "validation." + cartModification_r3.statusCode, ɵɵpureFunction1(9, _c0, cartModification_r3.quantityAdded)), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(7, 7, "common.close"));
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r1.iconTypes.CLOSE);
  }
}
function CartItemValidationWarningComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CartItemValidationWarningComponent_ng_container_0_div_1_Template, 9, 11, "div", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isVisible);
  }
}
var _c1 = (a0) => ({
  cxRoute: "product",
  params: a0
});
var _c2 = (a0, a1) => ({
  loading: a0,
  item: a1
});
var _c3 = (a0) => ({
  $implicit: a0
});
function CartItemComponent_ng_template_0_ng_template_0_Template(rf, ctx) {
}
function CartItemComponent_ng_template_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22)(1, "a", 23);
    ɵɵpipe(2, "cxUrl");
    ɵɵelementStart(3, "h3");
    ɵɵtext(4);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 2, ɵɵpureFunction1(4, _c1, ctx_r0.item.product)));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.item.product == null ? null : ctx_r0.item.product.name);
  }
}
function CartItemComponent_ng_template_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "cartItems.id"), " ", ctx_r0.item.product == null ? null : ctx_r0.item.product.code, " ");
  }
}
function CartItemComponent_ng_template_0_ng_template_12_Template(rf, ctx) {
}
function CartItemComponent_ng_template_0_ng_container_13_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", variant_r2.name, ": ", variant_r2.value, " ");
  }
}
function CartItemComponent_ng_template_0_ng_container_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵtemplate(1, CartItemComponent_ng_template_0_ng_container_13_div_1_div_1_Template, 2, 2, "div", 27);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", variant_r2.name && variant_r2.value);
  }
}
function CartItemComponent_ng_template_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CartItemComponent_ng_template_0_ng_container_13_div_1_Template, 2, 1, "div", 25);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.item.product == null ? null : ctx_r0.item.product.baseOptions[0] == null ? null : ctx_r0.item.product.baseOptions[0].selected == null ? null : ctx_r0.item.product.baseOptions[0].selected.variantOptionQualifiers);
  }
}
function CartItemComponent_ng_template_0_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.item.basePrice == null ? null : ctx_r0.item.basePrice.formattedValue, " ");
  }
}
function CartItemComponent_ng_template_0_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 29)(1, "div", 30);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(4, CartItemComponent_ng_template_0_div_14_div_4_Template, 2, 1, "div", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r0.compact ? "" : " col-md-3 col-lg-3 col-xl-2");
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.compact ? "" : " d-block d-md-none d-lg-none d-xl-none");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "cartItems.itemPrice"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.item.basePrice);
  }
}
function CartItemComponent_ng_template_0_div_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 32);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 3, "cartItems.quantityTitle"));
    ɵɵproperty("ngClass", ctx_r0.compact ? "" : " d-block d-md-none d-lg-none d-xl-none");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "cartItems.quantityFull"), " ");
  }
}
function CartItemComponent_ng_template_0_div_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 32);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 3, "cartItems.quantityTitle"));
    ɵɵproperty("ngClass", ctx_r0.compact ? "" : " d-block d-md-none d-lg-none d-xl-none");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "cartItems.quantity"), " ");
  }
}
function CartItemComponent_ng_template_0_ng_container_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.item.product == null ? null : ctx_r0.item.product.stock == null ? null : ctx_r0.item.product.stock.stockLevel, " ");
  }
}
function CartItemComponent_ng_template_0_ng_container_20_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "saveForLaterItems.forceInStock"), " ");
  }
}
function CartItemComponent_ng_template_0_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 33)(2, "div", 30);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(5, CartItemComponent_ng_template_0_ng_container_20_div_5_Template, 2, 1, "div", 34)(6, CartItemComponent_ng_template_0_ng_container_20_ng_template_6_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const forceInstock_r3 = ɵɵreference(7);
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.compact ? "" : " col-md-3 col-lg-3 col-xl-2");
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.compact ? "" : " d-block d-md-none d-lg-none d-xl-none");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 5, "saveForLaterItems.stock"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (ctx_r0.item.product == null ? null : ctx_r0.item.product.stock.stockLevel) >= 0)("ngIfElse", forceInstock_r3);
  }
}
function CartItemComponent_ng_template_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 35);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "addToCart.outOfStock"), " ");
  }
}
function CartItemComponent_ng_template_0_ng_template_22_Template(rf, ctx) {
}
function CartItemComponent_ng_template_0_div_24_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CartItemComponent_ng_template_0_div_24_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CartItemComponent_ng_template_0_div_24_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 39);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.options.optionalBtn)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c3, ɵɵpureFunction2(2, _c2, ctx_r0.quantityControl.disabled, ctx_r0.item)));
  }
}
function CartItemComponent_ng_template_0_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 36);
    ɵɵtemplate(1, CartItemComponent_ng_template_0_div_24_ng_container_1_Template, 2, 7, "ng-container", 12);
    ɵɵelementStart(2, "div", 37)(3, "button", 38);
    ɵɵpipe(4, "cxTranslate");
    ɵɵpipe(5, "cxTranslate");
    ɵɵlistener("click", function CartItemComponent_ng_template_0_div_24_Template_button_click_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.removeItem());
    });
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.isProductOutOfStock(ctx_r0.item.product));
    ɵɵadvance(2);
    ɵɵproperty("cxAtMessage", ɵɵpipeBind1(4, 5, "cartItems.itemRemoved"))("disabled", ctx_r0.quantityControl.disabled);
    ɵɵattribute("aria-label", ɵɵpipeBind1(5, 7, "addToCart.removeFromCart"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 9, "common.remove"), " ");
  }
}
function CartItemComponent_ng_template_0_ng_template_25_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 33)(1, "div", 30);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 16);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.compact ? "" : " col-md-3 col-xl-2");
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.compact ? "" : " d-block d-md-none d-lg-none d-xl-none");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "cartItems.total"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.item.totalPrice.formattedValue);
  }
}
function CartItemComponent_ng_template_0_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CartItemComponent_ng_template_0_ng_template_25_div_0_Template, 6, 6, "div", 40);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r0.item.totalPrice);
  }
}
function CartItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CartItemComponent_ng_template_0_ng_template_0_Template, 0, 0, "ng-template", 2);
    ɵɵelement(1, "cx-cart-item-validation-warning", 3);
    ɵɵelementStart(2, "div", 4)(3, "div", 5)(4, "a", 6);
    ɵɵpipe(5, "cxUrl");
    ɵɵelement(6, "cx-media", 7);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 8)(8, "div", 9)(9, "div", 4);
    ɵɵtemplate(10, CartItemComponent_ng_template_0_div_10_Template, 5, 6, "div", 10)(11, CartItemComponent_ng_template_0_div_11_Template, 3, 4, "div", 11)(12, CartItemComponent_ng_template_0_ng_template_12_Template, 0, 0, "ng-template", 2)(13, CartItemComponent_ng_template_0_ng_container_13_Template, 2, 1, "ng-container", 12);
    ɵɵelementEnd();
    ɵɵtemplate(14, CartItemComponent_ng_template_0_div_14_Template, 5, 6, "div", 13);
    ɵɵelementStart(15, "div", 14);
    ɵɵtemplate(16, CartItemComponent_ng_template_0_div_16_Template, 4, 7, "div", 15)(17, CartItemComponent_ng_template_0_div_17_Template, 4, 7, "div", 15);
    ɵɵelementStart(18, "div", 16);
    ɵɵelement(19, "cx-item-counter", 17);
    ɵɵelementEnd()();
    ɵɵtemplate(20, CartItemComponent_ng_template_0_ng_container_20_Template, 8, 7, "ng-container", 18);
    ɵɵelementEnd();
    ɵɵtemplate(21, CartItemComponent_ng_template_0_div_21_Template, 3, 3, "div", 19)(22, CartItemComponent_ng_template_0_ng_template_22_Template, 0, 0, "ng-template", 2);
    ɵɵelement(23, "cx-promotions", 20);
    ɵɵtemplate(24, CartItemComponent_ng_template_0_div_24_Template, 8, 11, "div", 21);
    ɵɵelementEnd()();
    ɵɵtemplate(25, CartItemComponent_ng_template_0_ng_template_25_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const total_r5 = ɵɵreference(26);
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("cxOutlet", ctx_r0.CartOutlets.ITEM_CONFIGURATOR_ISSUES);
    ɵɵadvance();
    ɵɵproperty("code", ctx_r0.item.product == null ? null : ctx_r0.item.product.code);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.compact ? "cx-compact row" : "row");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 26, ɵɵpureFunction1(28, _c1, ctx_r0.item.product)));
    ɵɵadvance(2);
    ɵɵproperty("container", ctx_r0.item.product == null ? null : ctx_r0.item.product.images == null ? null : ctx_r0.item.product.images.PRIMARY);
    ɵɵadvance(3);
    ɵɵproperty("ngClass", ctx_r0.compact ? "" : " col-md-3 col-lg-3 col-xl-5");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.code);
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r0.CartOutlets.ITEM_DETAILS);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.baseOptions == null ? null : ctx_r0.item.product.baseOptions.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.basePrice);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.compact ? "" : " col-3");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵclassProp("readonly-value", ctx_r0.readonly);
    ɵɵadvance();
    ɵɵproperty("control", ctx_r0.quantityControl)("readonly", !ctx_r0.item.updateable || ctx_r0.readonly || ctx_r0.options.isSaveForLater)("max", ctx_r0.item.product == null ? null : ctx_r0.item.product.stock == null ? null : ctx_r0.item.product.stock.stockLevel)("allowZero", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.options.isSaveForLater)("ngIfElse", total_r5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isProductOutOfStock(ctx_r0.item.product));
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r0.CartOutlets.ITEM_BUNDLE_DETAILS);
    ɵɵadvance();
    ɵɵproperty("promotions", ctx_r0.item.promotions);
    ɵɵadvance();
    ɵɵproperty("ngIf", (!ctx_r0.readonly || ctx_r0.options.isSaveForLater) && ctx_r0.item.updateable);
  }
}
var _c4 = (a0) => ({
  count: a0
});
var _c5 = () => [];
function AddedToCartDialogComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "addToCart.itemAddedToYourCart"), " ");
  }
}
function AddedToCartDialogComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "cxTranslate");
    ɵɵpipe(5, "cxTranslate");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r1.loaded$) ? ɵɵpipeBind1(3, 3, ctx_r1.addedEntryWasMerged$) ? ɵɵpipeBind1(4, 5, "addToCart.itemsIncrementedInYourCart") : ɵɵpipeBind1(5, 7, "addToCart.itemsAddedToYourCart") : ɵɵpipeBind1(6, 9, "addToCart.updatingCart"), " ");
  }
}
function AddedToCartDialogComponent_ng_container_10_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementStart(3, "span", 21);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "pickupOptionDialog.modalHeader"), ": ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.pickupStoreName);
  }
}
function AddedToCartDialogComponent_ng_container_10_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 22)(1, "div", 23)(2, "div");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div");
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 24);
    ɵɵelement(8, "cx-promotions", 25);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 26)(10, "button", 27);
    ɵɵlistener("click", function AddedToCartDialogComponent_ng_container_10_div_1_div_7_Template_button_click_10_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onAction("viewCart"));
    });
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 28);
    ɵɵlistener("click", function AddedToCartDialogComponent_ng_container_10_div_1_div_7_Template_button_click_13_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onAction("checkout"));
    });
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const cart_r4 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 9, "cartItems.cartTotal", ɵɵpureFunction1(16, _c4, cart_r4.totalUnitCount)), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(cart_r4.subTotal == null ? null : cart_r4.subTotal.formattedValue);
    ɵɵadvance(2);
    ɵɵproperty("promotions", (cart_r4.appliedOrderPromotions || ɵɵpureFunction0(18, _c5)).concat(cart_r4.potentialOrderPromotions || ɵɵpureFunction0(19, _c5)));
    ɵɵadvance(2);
    ɵɵclassProp("disabled", ctx_r1.form.dirty);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 12, "addToCart.viewCart"), " ");
    ɵɵadvance(2);
    ɵɵclassProp("disabled", ctx_r1.form.dirty);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 14, "addToCart.proceedToCheckout"), " ");
  }
}
function AddedToCartDialogComponent_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "div", 14)(2, "div", 15);
    ɵɵelement(3, "cx-cart-item", 16);
    ɵɵpipe(4, "async");
    ɵɵtemplate(5, AddedToCartDialogComponent_ng_container_10_div_1_div_5_Template, 5, 4, "div", 17);
    ɵɵelementEnd();
    ɵɵelement(6, "div", 18);
    ɵɵtemplate(7, AddedToCartDialogComponent_ng_container_10_div_1_div_7_Template, 16, 20, "div", 19);
    ɵɵpipe(8, "async");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const entry_r5 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("item", entry_r5)("compact", true)("quantityControl", ɵɵpipeBind1(4, 6, ctx_r1.getQuantityControl()))("promotionLocation", ctx_r1.promotionLocation);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.pickupStoreName);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(8, 8, ctx_r1.cart$));
  }
}
function AddedToCartDialogComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddedToCartDialogComponent_ng_container_10_div_1_Template, 9, 10, "div", 12);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r1.entry$));
  }
}
function AddedToCartDialogComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "div", 14)(2, "div", 29);
    ɵɵelement(3, "cx-spinner", 7);
    ɵɵelementEnd()()();
  }
}
var _c6 = ["addToCartDialogTriggerEl"];
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
function AppliedCouponsComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 4);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "voucher.vouchersApplied"), " ");
  }
}
function AppliedCouponsComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "span", 6);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const voucher_r1 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(voucher_r1.voucherCode);
  }
}
function AppliedCouponsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, AppliedCouponsComponent_div_0_div_1_Template, 4, 3, "div", 2);
    ɵɵelementContainerStart(2);
    ɵɵtemplate(3, AppliedCouponsComponent_div_0_div_3_Template, 3, 1, "div", 3);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.sortedVouchers.length > 0);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.sortedVouchers);
  }
}
function AppliedCouponsComponent_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "span", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 12);
    ɵɵpipe(5, "cxTranslate");
    ɵɵpipe(6, "cxTranslate");
    ɵɵlistener("click", function AppliedCouponsComponent_ng_template_1_div_2_Template_button_click_4_listener() {
      const voucher_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.removeVoucher(voucher_r4.voucherCode));
    });
    ɵɵelementStart(7, "span", 13);
    ɵɵelement(8, "cx-icon", 14);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const voucher_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate(voucher_r4.voucherCode);
    ɵɵadvance();
    ɵɵclassProp("disabled", ctx_r1.cartIsLoading);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(5, 7, "common.close"));
    ɵɵproperty("disabled", ctx_r1.cartIsLoading);
    ɵɵattribute("aria-label", ɵɵpipeBind1(6, 9, "common.close"));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r1.iconTypes.CLOSE);
  }
}
function AppliedCouponsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelementContainerStart(1);
    ɵɵtemplate(2, AppliedCouponsComponent_ng_template_1_div_2_Template, 9, 11, "div", 8);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.sortedVouchers);
  }
}
function CartCouponComponent_ng_container_0_ng_container_16_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 13)(1, "button", 14);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵlistener("click", function CartCouponComponent_ng_container_0_ng_container_16_div_9_Template_button_click_1_listener() {
      const coupon_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.applyCustomerCoupon(coupon_r4.couponId));
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const coupon_r4 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵclassProp("disabled", ɵɵpipeBind1(2, 4, ctx_r1.cartIsLoading$));
    ɵɵproperty("disabled", ɵɵpipeBind1(3, 6, ctx_r1.cartIsLoading$));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", coupon_r4.couponId, " ");
  }
}
function CartCouponComponent_ng_container_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8)(2, "div", 9);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 10);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 11);
    ɵɵtemplate(9, CartCouponComponent_ng_container_0_ng_container_16_div_9_Template, 5, 8, "div", 12);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "voucher.availableCoupons"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 5, "voucher.availableCouponsLabel"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r1.applicableCoupons);
  }
}
function CartCouponComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "form", 2);
    ɵɵlistener("ngSubmit", function CartCouponComponent_ng_container_0_Template_form_ngSubmit_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.applyVoucher());
    });
    ɵɵelementStart(3, "label", 3);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 4);
    ɵɵelement(7, "input", 5);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementStart(9, "button", 6);
    ɵɵpipe(10, "async");
    ɵɵpipe(11, "async");
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd()()()();
    ɵɵelement(14, "cx-applied-coupons", 7);
    ɵɵpipe(15, "async");
    ɵɵtemplate(16, CartCouponComponent_ng_container_0_ng_container_16_Template, 10, 7, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const cart_r5 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("formGroup", ctx_r1.couponForm);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 12, "voucher.addCoupon"), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(8, 14, "voucher.placeholder"));
    ɵɵattribute("aria-labelledby", "card-coupon-input-label");
    ɵɵadvance(2);
    ɵɵclassProp("disabled", ɵɵpipeBind1(10, 16, ctx_r1.cartIsLoading$));
    ɵɵproperty("disabled", ɵɵpipeBind1(11, 18, ctx_r1.cartIsLoading$) || !(ctx_r1.couponForm == null ? null : (tmp_7_0 = ctx_r1.couponForm.get("couponCode")) == null ? null : tmp_7_0.value));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 20, "voucher.apply"), " ");
    ɵɵadvance(2);
    ɵɵproperty("vouchers", cart_r5.appliedVouchers)("cartIsLoading", ɵɵpipeBind1(15, 22, ctx_r1.cartIsLoading$))("isReadOnly", false);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.applicableCoupons && ctx_r1.applicableCoupons.length > 0);
  }
}
var _c7 = ["cx-cart-item-list-row", ""];
var _c8 = (a0) => ({
  items: a0
});
var _c9 = (a0, a1) => ({
  item: a0,
  cartType: a1
});
var _c10 = (a0, a1, a2) => ({
  loading: a0,
  item: a1,
  options: a2
});
function CartItemListRowComponent_ng_template_0_ng_template_1_Template(rf, ctx) {
}
function CartItemListRowComponent_ng_template_0_a_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 23);
    ɵɵpipe(1, "cxUrl");
    ɵɵelement(2, "cx-media", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(4, _c1, ctx_r0.item.product)));
    ɵɵadvance(2);
    ɵɵproperty("container", ctx_r0.item.product == null ? null : ctx_r0.item.product.images == null ? null : ctx_r0.item.product.images.PRIMARY);
  }
}
function CartItemListRowComponent_ng_template_0_cx_media_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-media", 24);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("container", ctx_r0.item.product == null ? null : ctx_r0.item.product.images == null ? null : ctx_r0.item.product.images.PRIMARY);
  }
}
function CartItemListRowComponent_ng_template_0_div_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 27);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(4, _c1, ctx_r0.item.product)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.item.product == null ? null : ctx_r0.item.product.name);
  }
}
function CartItemListRowComponent_ng_template_0_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.item.product == null ? null : ctx_r0.item.product.name);
  }
}
function CartItemListRowComponent_ng_template_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵtemplate(1, CartItemListRowComponent_ng_template_0_div_7_a_1_Template, 3, 6, "a", 26)(2, CartItemListRowComponent_ng_template_0_div_7_span_2_Template, 2, 1, "span", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.options.disableItemLink);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.options.disableItemLink);
  }
}
function CartItemListRowComponent_ng_template_0_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "cartItems.id"), " ", ctx_r0.item.product == null ? null : ctx_r0.item.product.code, " ");
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_9_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.item.basePrice == null ? null : ctx_r0.item.basePrice.formattedValue, " ");
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 30);
    ɵɵtemplate(1, CartItemListRowComponent_ng_template_0_ng_container_9_div_1_div_1_Template, 2, 1, "div", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.basePrice);
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CartItemListRowComponent_ng_template_0_ng_container_9_div_1_Template, 2, 1, "div", 29);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.basePrice);
  }
}
function CartItemListRowComponent_ng_template_0_ng_template_10_Template(rf, ctx) {
}
function CartItemListRowComponent_ng_template_0_ng_template_12_Template(rf, ctx) {
}
function CartItemListRowComponent_ng_template_0_ng_template_13_Template(rf, ctx) {
}
function CartItemListRowComponent_ng_template_0_15_ng_template_0_Template(rf, ctx) {
}
function CartItemListRowComponent_ng_template_0_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CartItemListRowComponent_ng_template_0_15_ng_template_0_Template, 0, 0, "ng-template", 32);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("cxOutlet", ctx_r0.CartOutlets.ITEM_DELIVERY_DETAILS)("cxOutletContext", ɵɵpureFunction2(2, _c9, ctx_r0.item, ctx_r0.options.cartType));
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_16_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 36);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", variant_r2.name, ": ", variant_r2.value, " ");
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 34);
    ɵɵtemplate(1, CartItemListRowComponent_ng_template_0_ng_container_16_div_1_div_1_Template, 2, 2, "div", 35);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", variant_r2.name && variant_r2.value);
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CartItemListRowComponent_ng_template_0_ng_container_16_div_1_Template, 2, 1, "div", 33);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.item.product == null ? null : ctx_r0.item.product.baseOptions[0] == null ? null : ctx_r0.item.product.baseOptions[0].selected == null ? null : ctx_r0.item.product.baseOptions[0].selected.variantOptionQualifiers);
  }
}
function CartItemListRowComponent_ng_template_0_td_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.item.basePrice == null ? null : ctx_r0.item.basePrice.formattedValue, " ");
  }
}
function CartItemListRowComponent_ng_template_0_td_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 37)(1, "div", 38);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(4, CartItemListRowComponent_ng_template_0_td_17_div_4_Template, 2, 1, "div", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "cartItems.itemPrice"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.item.basePrice);
  }
}
function CartItemListRowComponent_ng_template_0_ng_template_18_Template(rf, ctx) {
}
function CartItemListRowComponent_ng_template_0_div_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 2, "cartItems.quantityTitle"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "cartItems.quantityFull"), " ");
  }
}
function CartItemListRowComponent_ng_template_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 39);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 2, "cartItems.quantityTitle"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "cartItems.quantity"), " ");
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.item.product == null ? null : ctx_r0.item.product.stock.stockLevel, " ");
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_24_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "saveForLaterItems.forceInStock"), " ");
  }
}
function CartItemListRowComponent_ng_template_0_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 40)(2, "div", 38);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(5, CartItemListRowComponent_ng_template_0_ng_container_24_div_5_Template, 2, 1, "div", 41)(6, CartItemListRowComponent_ng_template_0_ng_container_24_ng_template_6_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const forceInstock_r3 = ɵɵreference(7);
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "saveForLaterItems.stock"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (ctx_r0.item.product == null ? null : ctx_r0.item.product.stock == null ? null : ctx_r0.item.product.stock.stockLevel) >= 0)("ngIfElse", forceInstock_r3);
  }
}
function CartItemListRowComponent_ng_template_0_td_25_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CartItemListRowComponent_ng_template_0_td_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CartItemListRowComponent_ng_template_0_td_25_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 45);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.options.optionalBtn)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c3, ɵɵpureFunction3(2, _c10, ctx_r0.quantityControl.disabled, ctx_r0.item, ctx_r0.options)));
  }
}
function CartItemListRowComponent_ng_template_0_td_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 46);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "addToCart.outOfStock"), " ");
  }
}
function CartItemListRowComponent_ng_template_0_td_25_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 47);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function CartItemListRowComponent_ng_template_0_td_25_button_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.removeItem());
    });
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("cxAtMessage", ɵɵpipeBind1(1, 4, "cartItems.itemRemoved"))("disabled", ctx_r0.quantityControl.disabled);
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 6, "addToCart.removeFromCart"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 8, "common.remove"), " ");
  }
}
function CartItemListRowComponent_ng_template_0_td_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 42);
    ɵɵtemplate(1, CartItemListRowComponent_ng_template_0_td_25_ng_container_1_Template, 2, 8, "ng-container", 11)(2, CartItemListRowComponent_ng_template_0_td_25_span_2_Template, 3, 3, "span", 43)(3, CartItemListRowComponent_ng_template_0_td_25_button_3_Template, 5, 10, "button", 44);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.isProductOutOfStock(ctx_r0.item.product));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isProductOutOfStock(ctx_r0.item.product));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.readonly);
  }
}
function CartItemListRowComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 3);
    ɵɵtemplate(1, CartItemListRowComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 2);
    ɵɵelement(2, "cx-cart-item-validation-warning", 4);
    ɵɵelementStart(3, "div", 5);
    ɵɵtemplate(4, CartItemListRowComponent_ng_template_0_a_4_Template, 3, 6, "a", 6)(5, CartItemListRowComponent_ng_template_0_cx_media_5_Template, 1, 1, "cx-media", 7);
    ɵɵelementStart(6, "div", 8);
    ɵɵtemplate(7, CartItemListRowComponent_ng_template_0_div_7_Template, 3, 2, "div", 9)(8, CartItemListRowComponent_ng_template_0_div_8_Template, 3, 4, "div", 10)(9, CartItemListRowComponent_ng_template_0_ng_container_9_Template, 2, 1, "ng-container", 11)(10, CartItemListRowComponent_ng_template_0_ng_template_10_Template, 0, 0, "ng-template", 12);
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 13);
    ɵɵtemplate(12, CartItemListRowComponent_ng_template_0_ng_template_12_Template, 0, 0, "ng-template", 2)(13, CartItemListRowComponent_ng_template_0_ng_template_13_Template, 0, 0, "ng-template", 2);
    ɵɵelement(14, "cx-promotions", 14);
    ɵɵtemplate(15, CartItemListRowComponent_ng_template_0_15_Template, 1, 5, null, 11);
    ɵɵelementEnd();
    ɵɵtemplate(16, CartItemListRowComponent_ng_template_0_ng_container_16_Template, 2, 1, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵtemplate(17, CartItemListRowComponent_ng_template_0_td_17_Template, 5, 4, "td", 15)(18, CartItemListRowComponent_ng_template_0_ng_template_18_Template, 0, 0, "ng-template", 16);
    ɵɵelementStart(19, "td", 17);
    ɵɵtemplate(20, CartItemListRowComponent_ng_template_0_div_20_Template, 4, 6, "div", 18)(21, CartItemListRowComponent_ng_template_0_div_21_Template, 4, 6, "div", 18);
    ɵɵelementStart(22, "div", 19);
    ɵɵelement(23, "cx-item-counter", 20);
    ɵɵelementEnd()();
    ɵɵtemplate(24, CartItemListRowComponent_ng_template_0_ng_container_24_Template, 8, 5, "ng-container", 21)(25, CartItemListRowComponent_ng_template_0_td_25_Template, 4, 3, "td", 22);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const total_r5 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r0.CartOutlets.ITEM_CONFIGURATOR_ISSUES);
    ɵɵadvance();
    ɵɵproperty("code", ctx_r0.item.product == null ? null : ctx_r0.item.product.code);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.options.disableItemLink);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.options.disableItemLink);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.code);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isFlagQuote);
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r0.CartOutlets.CPQ_QUOTE)("cxOutletContext", ɵɵpureFunction1(28, _c8, ctx_r0.item));
    ɵɵadvance(2);
    ɵɵproperty("cxOutlet", ctx_r0.CartOutlets.ITEM_DETAILS);
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r0.CartOutlets.ITEM_BUNDLE_DETAILS);
    ɵɵadvance();
    ɵɵproperty("promotions", ctx_r0.item.promotions);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.readonly);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.product == null ? null : ctx_r0.item.product.baseOptions == null ? null : ctx_r0.item.product.baseOptions.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.basePrice);
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r0.CartOutlets.CPQ_QUOTE_MODULE)("cxOutletContext", ɵɵpureFunction1(30, _c8, ctx_r0.item));
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵclassProp("readonly-value", ctx_r0.readonly);
    ɵɵadvance();
    ɵɵproperty("control", ctx_r0.quantityControl)("readonly", !ctx_r0.item.updateable || ctx_r0.readonly || ctx_r0.options.isSaveForLater)("max", ctx_r0.item.product == null ? null : ctx_r0.item.product.stock == null ? null : ctx_r0.item.product.stock.stockLevel)("allowZero", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.options.isSaveForLater)("ngIfElse", total_r5);
    ɵɵadvance();
    ɵɵproperty("ngIf", (!ctx_r0.readonly || ctx_r0.options.isSaveForLater || ctx_r0.options.displayAddToCart) && ctx_r0.item.updateable);
  }
}
function CartItemListRowComponent_ng_template_1_td_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 40)(1, "div", 38);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 19);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "cartItems.total"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.item.totalPrice.formattedValue);
  }
}
function CartItemListRowComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CartItemListRowComponent_ng_template_1_td_0_Template, 6, 4, "td", 48);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.item.totalPrice);
  }
}
function CartItemListComponent_thead_4_ng_template_5_Template(rf, ctx) {
}
function CartItemListComponent_thead_4_th_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 11);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "cartItems.quantityFull"), " ");
  }
}
function CartItemListComponent_thead_4_th_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 11);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "cartItems.quantity"), " ");
  }
}
function CartItemListComponent_thead_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 12);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "saveForLaterItems.stock"), " ");
  }
}
function CartItemListComponent_thead_4_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 13);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "cartItems.actions"), " ");
  }
}
function CartItemListComponent_thead_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead")(1, "tr", 6)(2, "th", 7);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(5, CartItemListComponent_thead_4_ng_template_5_Template, 0, 0, "ng-template", 8)(6, CartItemListComponent_thead_4_th_6_Template, 3, 3, "th", 9)(7, CartItemListComponent_thead_4_th_7_Template, 3, 3, "th", 9)(8, CartItemListComponent_thead_4_ng_container_8_Template, 4, 3, "ng-container", 10)(9, CartItemListComponent_thead_4_ng_container_9_Template, 4, 3, "ng-container", 3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const totalHeader_r2 = ɵɵreference(8);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 8, "cartItems.item"), " ");
    ɵɵadvance(2);
    ɵɵproperty("cxOutlet", ctx_r0.CartOutlets.CPQ_QUOTE_HEADING)("cxOutletContext", ctx_r0.items);
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.options.isSaveForLater)("ngIfElse", totalHeader_r2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.readonly || ctx_r0.options.isSaveForLater || ctx_r0.options.displayAddToCart);
  }
}
function CartItemListComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "tr", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const control_r3 = ctx.ngIf;
    const ctx_r3 = ɵɵnextContext();
    const item_r5 = ctx_r3.$implicit;
    const i_r6 = ctx_r3.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("is-changed", control_r3.get("quantity").disabled);
    ɵɵadvance();
    ɵɵproperty("item", item_r5)("quantityControl", control_r3.get("quantity"))("readonly", ctx_r0.readonly)("promotionLocation", ctx_r0.promotionLocation)("options", ctx_r0.options);
    ɵɵattribute("aria-rowindex", i_r6 + 1);
  }
}
function CartItemListComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CartItemListComponent_ng_container_6_ng_container_1_Template, 2, 8, "ng-container", 14);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r0.getControl(item_r5)));
  }
}
function CartItemListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "cartItems.total"), " ");
  }
}
function OrderSummaryComponent_div_3_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "div", 6);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 7);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "orderCost.salesTax"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.cart.totalTax == null ? null : ctx_r0.cart.totalTax.formattedValue, " ");
  }
}
function OrderSummaryComponent_div_3_div_21_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "orderCost.discount"), " ", ctx_r0.cart.totalDiscounts == null ? null : ctx_r0.cart.totalDiscounts.formattedValue, " ");
  }
}
function OrderSummaryComponent_div_3_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", (ctx_r0.cart.totalPriceWithTax == null ? null : ctx_r0.cart.totalPriceWithTax.value) !== (ctx_r0.cart.totalPrice == null ? null : ctx_r0.cart.totalPrice.value) ? ɵɵpipeBind1(2, 2, "orderCost.grossTax") : ɵɵpipeBind1(3, 4, "orderCost.grossIncludeTax"), " ", ctx_r0.cart.totalTax == null ? null : ctx_r0.cart.totalTax.formattedValue, ". ");
  }
}
function OrderSummaryComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 7);
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 5)(8, "div", 6);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 7);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(14, OrderSummaryComponent_div_3_div_14_Template, 6, 4, "div", 8);
    ɵɵelementStart(15, "div", 9)(16, "div", 6);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(19, "div", 7);
    ɵɵtext(20);
    ɵɵelementEnd()();
    ɵɵtemplate(21, OrderSummaryComponent_div_3_div_21_Template, 3, 4, "div", 10)(22, OrderSummaryComponent_div_3_ng_template_22_Template, 4, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const cartWithoutNet_r2 = ɵɵreference(23);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 9, "orderCost.subtotal"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.cart.subTotal == null ? null : ctx_r0.cart.subTotal.formattedValue, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 11, (ctx_r0.cart.deliveryCost == null ? null : ctx_r0.cart.deliveryCost.formattedValue) ? "orderCost.shipping" : "orderCost.estimatedShipping"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", (ctx_r0.cart.deliveryCost == null ? null : ctx_r0.cart.deliveryCost.formattedValue) ? ctx_r0.cart.deliveryCost == null ? null : ctx_r0.cart.deliveryCost.formattedValue : ɵɵpipeBind1(13, 13, "orderCost.toBeDetermined"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.cart.net)("ngIfElse", cartWithoutNet_r2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 15, "orderCost.total"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.cart.totalPriceWithTax == null ? null : ctx_r0.cart.totalPriceWithTax.formattedValue, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r0.cart.totalDiscounts == null ? null : ctx_r0.cart.totalDiscounts.value) > 0);
  }
}
var _c11 = ["element"];
function ClearCartComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "button", 4, 0);
    ɵɵlistener("click", function ClearCartComponent_ng_container_0_div_1_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.openDialog($event));
    });
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 1, "clearCart.clearCart"), " ");
  }
}
function ClearCartComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ClearCartComponent_ng_container_0_div_1_Template, 5, 3, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cart_r3 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", cart_r3.totalItems > 0);
  }
}
function ClearCartDialogComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4)(2, "h3", 5);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 6);
    ɵɵpipe(6, "cxTranslate");
    ɵɵpipe(7, "cxTranslate");
    ɵɵlistener("click", function ClearCartDialogComponent_ng_container_2_Template_button_click_5_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.close("Close Clear Cart Dialog"));
    });
    ɵɵelementStart(8, "span", 7);
    ɵɵelement(9, "cx-icon", 8);
    ɵɵelementEnd()()();
    ɵɵelementStart(10, "div", 9)(11, "div", 10);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 11);
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(17, "div")(18, "div", 12)(19, "button", 13);
    ɵɵlistener("click", function ClearCartDialogComponent_ng_container_2_Template_button_click_19_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.close("Cancel Clear Cart"));
    });
    ɵɵtext(20);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(22, "button", 14);
    ɵɵlistener("click", function ClearCartDialogComponent_ng_container_2_Template_button_click_22_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.clearCart());
    });
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 8, "clearCart.clearCart"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(6, 10, "common.close"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(7, 12, "common.close"));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r2.iconTypes.CLOSE);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 14, "clearCart.allItemsWillBeRemoved"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 16, "clearCart.areYouSureToClearCart"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(21, 18, "common.cancel"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 20, "clearCart.clearCart"), " ");
  }
}
function ClearCartDialogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "h2", 15);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(4, "div", 16);
    ɵɵelement(5, "cx-spinner");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "clearCart.clearingCart"), " ");
  }
}
function CartValidationWarningsComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "span", 3);
    ɵɵelement(2, "cx-icon", 4);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span")(4, "a", 5);
    ɵɵpipe(5, "cxUrl");
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 6);
    ɵɵpipe(10, "cxTranslate");
    ɵɵpipe(11, "cxTranslate");
    ɵɵlistener("click", function CartValidationWarningsComponent_ng_container_0_div_1_Template_button_click_9_listener() {
      ɵɵrestoreView(_r1);
      const cartModification_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.removeMessage(cartModification_r2));
    });
    ɵɵelement(12, "cx-icon", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const cartModification_r2 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r2.iconTypes.ERROR);
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 7, ɵɵpureFunction1(15, _c1, cartModification_r2.entry.product)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", cartModification_r2.entry.product.name, " ");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 9, "validation.productOutOfStock"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(10, 11, "common.close"));
    ɵɵattribute("aria-label", ɵɵpipeBind1(11, 13, "common.close"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.CLOSE);
  }
}
function CartValidationWarningsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CartValidationWarningsComponent_ng_container_0_div_1_Template, 13, 17, "div", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cartModification_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.visibleWarnings[cartModification_r2.entry.product.code]);
  }
}
var _c12 = (a0) => ({
  code: a0
});
var _c13 = (a0) => ({
  isSaveForLater: false,
  optionalBtn: a0
});
function CartDetailsComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "cx-cart-validation-warnings");
    ɵɵelementStart(2, "h2", 4);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(5, "cx-promotions", 5)(6, "cx-cart-item-list", 6);
    ɵɵpipe(7, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entries_r1 = ɵɵnextContext().ngIf;
    const cart_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    const saveForLaterBtn_r4 = ɵɵreference(3);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 6, "cartDetails.cartName", ɵɵpureFunction1(11, _c12, cart_r2.code)), " ");
    ɵɵadvance(2);
    ɵɵproperty("promotions", (cart_r2.appliedOrderPromotions || ɵɵpureFunction0(13, _c5)).concat(cart_r2.potentialOrderPromotions || ɵɵpureFunction0(14, _c5)));
    ɵɵadvance();
    ɵɵproperty("items", entries_r1)("cartIsLoading", !ɵɵpipeBind1(7, 9, ctx_r2.cartLoaded$))("promotionLocation", ctx_r2.promotionLocation)("options", ɵɵpureFunction1(15, _c13, saveForLaterBtn_r4));
  }
}
function CartDetailsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CartDetailsComponent_ng_container_0_ng_container_1_div_1_Template, 8, 17, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cart_r2 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", cart_r2.totalItems > 0);
  }
}
function CartDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CartDetailsComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.entries$));
  }
}
function CartDetailsComponent_ng_template_2_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function CartDetailsComponent_ng_template_2_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_ir6 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.saveForLater(ctx_ir6.item));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_ir6 = ɵɵnextContext().$implicit;
    ɵɵproperty("disabled", ctx_ir6.loading);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "saveForLaterItems.saveForLater"), " ");
  }
}
function CartDetailsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CartDetailsComponent_ng_template_2_button_0_Template, 3, 4, "button", 7);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.selectiveCartEnabled);
  }
}
var _c14 = () => ({
  cxRoute: "checkout"
});
function CartTotalsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-order-summary", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cart_r1 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("cart", cart_r1);
  }
}
var _c15 = (a0) => ({
  isSaveForLater: true,
  optionalBtn: a0
});
function SaveForLaterComponent_ng_container_0_p_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p", 3);
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    ɵɵproperty("innerHTML", data_r1.content, ɵɵsanitizeHtml);
  }
}
function SaveForLaterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SaveForLaterComponent_ng_container_0_p_1_Template, 1, 1, "p", 2);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r1.data$));
  }
}
function SaveForLaterComponent_ng_container_2_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "div", 6);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(4, "cx-cart-item-list", 7);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entries_r3 = ɵɵnextContext().ngIf;
    const saveForLater_r4 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    const moveToCartBtn_r5 = ɵɵreference(5);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 6, "saveForLaterItems.itemTotal", ɵɵpureFunction1(11, _c4, saveForLater_r4.totalItems)), " ");
    ɵɵadvance(2);
    ɵɵproperty("items", entries_r3)("readonly", false)("cartIsLoading", !ɵɵpipeBind1(5, 9, ctx_r1.cartLoaded$))("promotionLocation", ctx_r1.CartLocation.SaveForLater)("options", ɵɵpureFunction1(13, _c15, moveToCartBtn_r5));
  }
}
function SaveForLaterComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SaveForLaterComponent_ng_container_2_ng_container_1_div_1_Template, 6, 15, "div", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const saveForLater_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", saveForLater_r4.totalItems > 0);
  }
}
function SaveForLaterComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SaveForLaterComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 1);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r1.entries$));
  }
}
function SaveForLaterComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function SaveForLaterComponent_ng_template_4_Template_button_click_0_listener() {
      const ctx_ir7 = ɵɵrestoreView(_r6).$implicit;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.moveToCart(ctx_ir7.item));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_ir7 = ctx.$implicit;
    ɵɵproperty("disabled", ctx_ir7.loading);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "saveForLaterItems.moveToCart"), " ");
  }
}
var AbstractOrderContextSource = class _AbstractOrderContextSource {
  constructor() {
    this.key$ = new ReplaySubject(1);
  }
  static {
    this.ɵfac = function AbstractOrderContextSource_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractOrderContextSource)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AbstractOrderContextSource,
      factory: _AbstractOrderContextSource.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractOrderContextSource, [{
    type: Injectable
  }], null, null);
})();
var AbstractOrderContext = class _AbstractOrderContext {
  static {
    this.ɵfac = function AbstractOrderContext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractOrderContext)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AbstractOrderContext,
      factory: _AbstractOrderContext.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractOrderContext, [{
    type: Injectable
  }], null, null);
})();
var AbstractOrderContextDirective = class _AbstractOrderContextDirective {
  constructor() {
    this.abstractOrderContextSource = inject(AbstractOrderContextSource);
  }
  ngOnChanges(changes) {
    const contextChanges = changes.cxAbstractOrderContext;
    if (contextChanges) {
      let abstractOrderKey;
      const type = contextChanges.currentValue.type;
      if (type === AbstractOrderType.CART) {
        abstractOrderKey = {
          type
        };
      } else {
        const id = contextChanges.currentValue.id;
        if (id) {
          abstractOrderKey = {
            type,
            id
          };
        } else {
          throw new Error("id required for order, quote or saved cart");
        }
      }
      this.abstractOrderContextSource.key$.next(abstractOrderKey);
    }
  }
  static {
    this.ɵfac = function AbstractOrderContextDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractOrderContextDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _AbstractOrderContextDirective,
      selectors: [["", "cxAbstractOrderContext", ""]],
      inputs: {
        cxAbstractOrderContext: "cxAbstractOrderContext"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([AbstractOrderContextSource, {
        provide: AbstractOrderContext,
        useExisting: AbstractOrderContextSource
      }]), ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractOrderContextDirective, [{
    type: Directive,
    args: [{
      selector: "[cxAbstractOrderContext]",
      providers: [AbstractOrderContextSource, {
        provide: AbstractOrderContext,
        useExisting: AbstractOrderContextSource
      }],
      standalone: false
    }]
  }], null, {
    cxAbstractOrderContext: [{
      type: Input
    }]
  });
})();
var AbstractOrderContextModule = class _AbstractOrderContextModule {
  static {
    this.ɵfac = function AbstractOrderContextModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AbstractOrderContextModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AbstractOrderContextModule,
      declarations: [AbstractOrderContextDirective],
      exports: [AbstractOrderContextDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AbstractOrderContextModule, [{
    type: NgModule,
    args: [{
      declarations: [AbstractOrderContextDirective],
      exports: [AbstractOrderContextDirective]
    }]
  }], null, null);
})();
var AddedToCartDialogEventListener = class _AddedToCartDialogEventListener {
  constructor(eventService, launchDialogService) {
    this.eventService = eventService;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.onAddToCart();
  }
  onAddToCart() {
    this.subscription.add(this.eventService.get(CartUiEventAddToCart).subscribe((event) => {
      this.openModal(event);
    }));
    this.subscription.add(this.eventService.get(CartAddEntryFailEvent).subscribe((event) => {
      this.closeModal(event);
    }));
  }
  /**
   * Opens modal based on CartUiEventAddToCart.
   * @param event Signals that a product has been added to the cart.
   */
  openModal(event) {
    const addToCartData = {
      productCode: event.productCode,
      quantity: event.quantity,
      numberOfEntriesBeforeAdd: event.numberOfEntriesBeforeAdd,
      pickupStoreName: event.pickupStoreName,
      addingEntryResult$: this.createCompletionObservable()
    };
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.ADDED_TO_CART, event?.triggerElementRef, void 0, addToCartData);
    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
  createCompletionObservable() {
    const addingEntryResult$ = new ReplaySubject(1);
    race([this.eventService.get(CartAddEntrySuccessEvent), this.eventService.get(CartAddEntryFailEvent)]).subscribe((completionEvent) => addingEntryResult$.next(completionEvent));
    return addingEntryResult$;
  }
  closeModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function AddedToCartDialogEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddedToCartDialogEventListener)(ɵɵinject(EventService), ɵɵinject(LaunchDialogService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _AddedToCartDialogEventListener,
      factory: _AddedToCartDialogEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddedToCartDialogEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: LaunchDialogService
  }], null);
})();
var CartItemContextSource = class _CartItemContextSource {
  constructor() {
    this.compact$ = new ReplaySubject(1);
    this.readonly$ = new ReplaySubject(1);
    this.item$ = new ReplaySubject(1);
    this.quantityControl$ = new ReplaySubject(1);
    this.location$ = new ReplaySubject(1);
    this.options$ = new ReplaySubject(1);
  }
  static {
    this.ɵfac = function CartItemContextSource_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartItemContextSource)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartItemContextSource,
      factory: _CartItemContextSource.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemContextSource, [{
    type: Injectable
  }], null, null);
})();
var CartItemValidationWarningComponent = class _CartItemValidationWarningComponent {
  constructor(cartValidationFacade) {
    this.cartValidationFacade = cartValidationFacade;
    this.iconTypes = ICON_TYPE;
    this.isVisible = true;
    this.cartModification$ = this.cartValidationFacade.getValidationResults().pipe(map((modificationList) => modificationList.find((modification) => modification.entry?.product?.code === this.code)));
  }
  static {
    this.ɵfac = function CartItemValidationWarningComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartItemValidationWarningComponent)(ɵɵdirectiveInject(CartValidationFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CartItemValidationWarningComponent,
      selectors: [["cx-cart-item-validation-warning"]],
      inputs: {
        code: "code"
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], [1, "alert", "alert-info"], [1, "alert-icon"], [3, "type"], ["type", "button", 1, "close", 3, "click", "title"]],
      template: function CartItemValidationWarningComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CartItemValidationWarningComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.cartModification$));
        }
      },
      dependencies: [NgIf, IconComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemValidationWarningComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-item-validation-warning",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="cartModification$ | async as cartModification">
  <div class="alert alert-info" *ngIf="isVisible">
    <span class="alert-icon">
      <cx-icon [type]="iconTypes.INFO"></cx-icon>
    </span>
    <span>
      {{
        'validation.' + cartModification.statusCode
          | cxTranslate
            : {
                quantity: cartModification.quantityAdded,
              }
      }}
    </span>

    <button
      class="close"
      type="button"
      title="{{ 'common.close' | cxTranslate }}"
      (click)="isVisible = !isVisible"
    >
      <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
    </button>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: CartValidationFacade
  }], {
    code: [{
      type: Input
    }]
  });
})();
var CartItemComponent = class _CartItemComponent {
  constructor(cartItemContextSource) {
    this.cartItemContextSource = cartItemContextSource;
    this.compact = false;
    this.readonly = false;
    this.promotionLocation = PromotionLocation.ActiveCart;
    this.options = {
      isSaveForLater: false,
      optionalBtn: null,
      displayAddToCart: false
    };
    this.iconTypes = ICON_TYPE;
    this.CartOutlets = CartOutlets;
    useFeatureStyles("a11yQTY2Quantity");
    useFeatureStyles("a11yCroppedFocusRing");
  }
  ngOnChanges(changes) {
    if (changes?.compact) {
      this.cartItemContextSource.compact$.next(this.compact);
    }
    if (changes?.readonly) {
      this.cartItemContextSource.readonly$.next(this.readonly);
    }
    if (changes?.item) {
      this.cartItemContextSource.item$.next(this.item);
    }
    if (changes?.quantityControl) {
      this.cartItemContextSource.quantityControl$.next(this.quantityControl);
    }
    if (changes?.promotionLocation) {
      this.cartItemContextSource.location$.next(this.promotionLocation);
    }
    if (changes?.options) {
      this.cartItemContextSource.options$.next(this.options);
    }
  }
  isProductOutOfStock(product) {
    return product && product.stock && product.stock.stockLevelStatus === "outOfStock";
  }
  removeItem() {
    this.quantityControl.setValue(0);
    this.quantityControl.markAsDirty();
  }
  static {
    this.ɵfac = function CartItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartItemComponent)(ɵɵdirectiveInject(CartItemContextSource));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CartItemComponent,
      selectors: [["cx-cart-item"]],
      inputs: {
        compact: "compact",
        item: "item",
        readonly: "readonly",
        quantityControl: "quantityControl",
        promotionLocation: "promotionLocation",
        options: "options"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([CartItemContextSource, {
        provide: CartItemContext,
        useExisting: CartItemContextSource
      }]), ɵɵNgOnChangesFeature],
      decls: 1,
      vars: 1,
      consts: [["total", ""], ["forceInstock", ""], [3, "cxOutlet"], [3, "code"], [3, "ngClass"], [1, "col-2", "cx-image-container"], ["tabindex", "0", 3, "routerLink"], ["format", "cartIcon", 3, "container"], [1, "cx-info", "col-10"], [1, "cx-info-container", "row"], ["class", "cx-name", 4, "ngIf"], ["class", "cx-code", 4, "ngIf"], [4, "ngIf"], ["class", "cx-price", 3, "ngClass", 4, "ngIf"], [1, "cx-quantity", 3, "ngClass"], ["class", "cx-label", "placement", "left", 3, "ngClass", "title", 4, "cxFeature"], [1, "cx-value"], [3, "control", "readonly", "max", "allowZero"], [4, "ngIf", "ngIfElse"], ["class", "cx-availability col-12", 4, "ngIf"], [3, "promotions"], ["class", "cx-actions col-12", 4, "ngIf"], [1, "cx-name"], [1, "cx-link", 3, "routerLink"], [1, "cx-code"], ["class", "cx-property", 4, "ngFor", "ngForOf"], [1, "cx-property"], ["class", "cx-label", 4, "ngIf"], [1, "cx-label"], [1, "cx-price", 3, "ngClass"], [1, "cx-label", 3, "ngClass"], ["class", "cx-value", 4, "ngIf"], ["placement", "left", 1, "cx-label", 3, "ngClass", "title"], [1, "cx-total", 3, "ngClass"], ["class", "cx-value", 4, "ngIf", "ngIfElse"], [1, "cx-availability", "col-12"], [1, "cx-actions", "col-12"], [1, "col-md-3", "cx-remove-btn"], [1, "btn", "btn-tertiary", 3, "click", "cxAtMessage", "disabled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cx-total", 3, "ngClass", 4, "ngIf"]],
      template: function CartItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CartItemComponent_ng_template_0_Template, 27, 30, "ng-template", 2);
        }
        if (rf & 2) {
          ɵɵproperty("cxOutlet", ctx.CartOutlets.ITEM);
        }
      },
      dependencies: [AtMessageDirective, CartItemValidationWarningComponent, NgClass, NgForOf, NgIf, NgTemplateOutlet, ItemCounterComponent, MediaComponent, OutletDirective, PromotionsComponent, RouterLink, FeatureDirective, TranslatePipe, UrlPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-item",
      providers: [CartItemContextSource, {
        provide: CartItemContext,
        useExisting: CartItemContextSource
      }],
      standalone: false,
      template: `<!-- Item Start Outlet -->
<ng-template [cxOutlet]="CartOutlets.ITEM">
  <ng-template [cxOutlet]="CartOutlets.ITEM_CONFIGURATOR_ISSUES"></ng-template>
  <cx-cart-item-validation-warning
    [code]="item.product?.code"
  ></cx-cart-item-validation-warning>
  <div [ngClass]="compact ? 'cx-compact row' : 'row'">
    <!-- Item Image -->
    <div class="col-2 cx-image-container">
      <a
        [routerLink]="{ cxRoute: 'product', params: item.product } | cxUrl"
        tabindex="0"
      >
        <cx-media
          [container]="item.product?.images?.PRIMARY"
          format="cartIcon"
        ></cx-media>
      </a>
    </div>
    <!-- Item Information -->
    <div class="cx-info col-10">
      <div class="cx-info-container row">
        <!-- Item Description -->
        <div [ngClass]="compact ? '' : ' col-md-3 col-lg-3 col-xl-5'">
          <div *ngIf="item.product?.name" class="cx-name">
            <a
              class="cx-link"
              [routerLink]="
                { cxRoute: 'product', params: item.product } | cxUrl
              "
              ><h3>{{ item.product?.name }}</h3></a
            >
          </div>
          <div *ngIf="item.product?.code" class="cx-code">
            {{ 'cartItems.id' | cxTranslate }} {{ item.product?.code }}
          </div>

          <!-- Item Details Outlet -->
          <ng-template [cxOutlet]="CartOutlets.ITEM_DETAILS"> </ng-template>

          <!-- Variants -->
          <ng-container *ngIf="item.product?.baseOptions?.length">
            <div
              *ngFor="
                let variant of item.product?.baseOptions[0]?.selected
                  ?.variantOptionQualifiers
              "
              class="cx-property"
            >
              <div class="cx-label" *ngIf="variant.name && variant.value">
                {{ variant.name }}: {{ variant.value }}
              </div>
            </div>
          </ng-container>
        </div>
        <!-- Item Price -->
        <div
          *ngIf="item.basePrice"
          class="cx-price"
          [ngClass]="compact ? '' : ' col-md-3 col-lg-3 col-xl-2'"
        >
          <div
            class="cx-label"
            [ngClass]="compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'"
          >
            {{ 'cartItems.itemPrice' | cxTranslate }}
          </div>
          <div *ngIf="item.basePrice" class="cx-value">
            {{ item.basePrice?.formattedValue }}
          </div>
        </div>
        <!-- Item Quantity -->
        <div class="cx-quantity" [ngClass]="compact ? '' : ' col-3'">
          <div
            *cxFeature="'a11yQTY2Quantity'"
            class="cx-label"
            [ngClass]="compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'"
            placement="left"
            title="{{ 'cartItems.quantityTitle' | cxTranslate }}"
          >
            {{ 'cartItems.quantityFull' | cxTranslate }}
          </div>
          <div
            *cxFeature="'!a11yQTY2Quantity'"
            class="cx-label"
            [ngClass]="compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'"
            placement="left"
            title="{{ 'cartItems.quantityTitle' | cxTranslate }}"
          >
            {{ 'cartItems.quantity' | cxTranslate }}
          </div>
          <div class="cx-value" [class.readonly-value]="readonly">
            <cx-item-counter
              [control]="quantityControl"
              [readonly]="
                !item.updateable || readonly || options.isSaveForLater
              "
              [max]="item.product?.stock?.stockLevel"
              [allowZero]="true"
            >
            </cx-item-counter>
          </div>
        </div>
        <!-- Total -->
        <ng-container *ngIf="options.isSaveForLater; else total">
          <div
            class="cx-total"
            [ngClass]="compact ? '' : ' col-md-3 col-lg-3 col-xl-2'"
          >
            <div
              class="cx-label"
              [ngClass]="
                compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'
              "
            >
              {{ 'saveForLaterItems.stock' | cxTranslate }}
            </div>
            <div
              *ngIf="item.product?.stock.stockLevel >= 0; else forceInstock"
              class="cx-value"
            >
              {{ item.product?.stock?.stockLevel }}
            </div>
            <ng-template #forceInstock>
              <div class="cx-value">
                {{ 'saveForLaterItems.forceInStock' | cxTranslate }}
              </div>
            </ng-template>
          </div>
        </ng-container>
      </div>
      <!-- Availability -->
      <div
        *ngIf="isProductOutOfStock(item.product)"
        class="cx-availability col-12"
      >
        {{ 'addToCart.outOfStock' | cxTranslate }}
      </div>

      <!-- Item Bundle Details Outlet -->
      <ng-template [cxOutlet]="CartOutlets.ITEM_BUNDLE_DETAILS"> </ng-template>

      <!-- Promotion -->

      <cx-promotions [promotions]="item.promotions"></cx-promotions>

      <!-- Actions -->
      <div
        *ngIf="(!readonly || options.isSaveForLater) && item.updateable"
        class="cx-actions col-12"
      >
        <ng-container *ngIf="!isProductOutOfStock(item.product)">
          <ng-container
            *ngTemplateOutlet="
              options.optionalBtn;
              context: {
                $implicit: { loading: quantityControl.disabled, item: item },
              }
            "
          ></ng-container>
        </ng-container>

        <div class="col-md-3 cx-remove-btn">
          <button
            (click)="removeItem()"
            [cxAtMessage]="'cartItems.itemRemoved' | cxTranslate"
            [disabled]="quantityControl.disabled"
            attr.aria-label="{{ 'addToCart.removeFromCart' | cxTranslate }}"
            class="btn btn-tertiary"
          >
            {{ 'common.remove' | cxTranslate }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <ng-template #total>
    <div
      *ngIf="item.totalPrice"
      class="cx-total"
      [ngClass]="compact ? '' : ' col-md-3 col-xl-2'"
    >
      <div
        class="cx-label"
        [ngClass]="compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'"
      >
        {{ 'cartItems.total' | cxTranslate }}
      </div>
      <div class="cx-value">{{ item.totalPrice.formattedValue }}</div>
    </div>
  </ng-template>
</ng-template>
`
    }]
  }], () => [{
    type: CartItemContextSource
  }], {
    compact: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    quantityControl: [{
      type: Input
    }],
    promotionLocation: [{
      type: Input
    }],
    options: [{
      type: Input
    }]
  });
})();
var AddedToCartDialogComponent = class _AddedToCartDialogComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.dismissModal("Cross click");
    }
  }
  constructor(activeCartFacade, launchDialogService, routingService, el) {
    this.activeCartFacade = activeCartFacade;
    this.launchDialogService = launchDialogService;
    this.routingService = routingService;
    this.el = el;
    this.iconTypes = ICON_TYPE;
    this.cart$ = this.activeCartFacade.getActive();
    this.loaded$ = this.activeCartFacade.isStable();
    this.promotionLocation = PromotionLocation.ActiveCart;
    this.quantity = 0;
    this.form = new UntypedFormGroup({});
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
    this.subscription = new Subscription();
    useFeatureStyles("a11yUpdatingCartNoNarration");
  }
  ngOnInit() {
    this.subscription.add(this.launchDialogService.data$.subscribe((dialogData) => {
      this.init(dialogData.productCode, dialogData.quantity, dialogData.numberOfEntriesBeforeAdd, dialogData.pickupStoreName, dialogData.addingEntryResult$);
    }));
    this.subscription.add(this.routingService.getRouterState().pipe(filter((state) => !!state.nextState)).subscribe(() => this.dismissModal("dismiss")));
  }
  /**
   * Returns an observable formControl with the quantity of the cartEntry,
   * but also updates the entry in case of a changed value.
   * The quantity can be set to zero in order to remove the entry.
   */
  getQuantityControl() {
    if (!this.quantityControl$) {
      this.quantityControl$ = this.entry$.pipe(filter((e) => !!e), map((entry) => this.getQuantityFormControl(entry)), switchMap(() => this.form.valueChanges.pipe(
        // eslint-disable-next-line import/no-deprecated
        startWith(null),
        tap((valueChange) => {
          if (valueChange) {
            this.activeCartFacade.updateEntry(valueChange.entryNumber, valueChange.quantity);
            if (valueChange.quantity === 0) {
              this.dismissModal("Removed");
            }
          } else {
            this.form.markAsPristine();
          }
        })
      )), map(() => this.form.get("quantity")), shareReplay({
        bufferSize: 1,
        refCount: true
      }));
    }
    return this.quantityControl$;
  }
  init(productCode, quantity, numberOfEntriesBeforeAdd, pickupStoreName, addingEntryResult$) {
    const productCode$ = addingEntryResult$ ? (
      // get the product code from the backend response, because it might be different
      // from the requested product code. That can e.g. happen for certain kinds of product variants
      addingEntryResult$.pipe(filter((event) => event instanceof CartAddEntrySuccessEvent), map((event) => {
        const productCodeFromEntry = event.entry?.product?.code;
        return productCodeFromEntry ? productCodeFromEntry : event.productCode;
      }))
    ) : of(productCode);
    this.entry$ = productCode$.pipe(switchMap((code) => this.activeCartFacade.getLastEntry(code)));
    this.quantity = quantity;
    this.pickupStoreName = pickupStoreName;
    this.addedEntryWasMerged$ = this.getAddedEntryWasMerged(numberOfEntriesBeforeAdd);
  }
  /**
   * Determines if the added entry was merged with an existing one.
   *
   * @param numberOfEntriesBeforeAdd Number of entries in cart before addToCart has been performed
   * @returns Has entry been merged?
   */
  getAddedEntryWasMerged(numberOfEntriesBeforeAdd) {
    return this.loaded$.pipe(filter((loaded) => loaded), switchMap(() => this.activeCartFacade.getEntries()), map((entries) => entries.length === numberOfEntriesBeforeAdd));
  }
  /**
   * Adds quantity and entryNumber form controls to the FormGroup.
   * Returns quantity form control.
   */
  getQuantityFormControl(entry) {
    if (!this.form.get("quantity")) {
      const quantity = new UntypedFormControl(entry?.quantity, {
        updateOn: "blur"
      });
      this.form.addControl("quantity", quantity);
      const entryNumber = new UntypedFormControl(entry?.entryNumber);
      this.form.addControl("entryNumber", entryNumber);
    } else {
      this.form.get("quantity")?.setValue(entry?.quantity);
    }
    return this.form.get("quantity");
  }
  dismissModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  onAction(action) {
    const actionDetails = {
      viewCart: {
        reason: "View Cart click",
        cxRoute: "cart"
      },
      checkout: {
        reason: "Proceed To Checkout click",
        cxRoute: "checkout"
      }
    };
    const {
      reason,
      cxRoute
    } = actionDetails[action];
    this.routingService.go({
      cxRoute
    });
    this.dismissModal(reason);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function AddedToCartDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddedToCartDialogComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AddedToCartDialogComponent,
      selectors: [["cx-added-to-cart-dialog"]],
      hostBindings: function AddedToCartDialogComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function AddedToCartDialogComponent_click_HostBindingHandler($event) {
            return ctx.handleClick($event);
          });
        }
      },
      standalone: false,
      decls: 14,
      vars: 14,
      consts: [["loading", ""], ["role", "dialog", "aria-labelledby", "dialogTitle", 1, "cx-modal-container", 3, "esc", "cxFocus"], [1, "cx-modal-content"], ["aria-live", "polite", "aria-atomic", "true", 1, "cx-dialog-header", "modal-header"], ["id", "dialogTitle", "class", "cx-dialog-title modal-title", "role", "none", 4, "cxFeature"], ["id", "dialogTitle", "class", "cx-dialog-title modal-title", 4, "cxFeature"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [4, "ngIf", "ngIfElse"], ["id", "dialogTitle", "role", "none", 1, "cx-dialog-title", "modal-title"], ["id", "dialogTitle", 1, "cx-dialog-title", "modal-title"], ["class", "cx-dialog-body modal-body", 4, "ngIf"], [1, "cx-dialog-body", "modal-body"], [1, "cx-dialog-row"], [1, "cx-dialog-item", "col-sm-12", "col-md-6"], [3, "item", "compact", "quantityControl", "promotionLocation"], ["class", "cx-dialog-pickup-store", 4, "ngIf"], [1, "cx-dialog-separator", "col-sm-12", "d-xs-block", "d-sm-block", "d-md-none"], ["class", "cx-dialog-actions col-sm-12 col-md-6", 4, "ngIf"], [1, "cx-dialog-pickup-store"], [1, "cx-dialog-pickup-store-name"], [1, "cx-dialog-actions", "col-sm-12", "col-md-6"], [1, "cx-dialog-total"], [1, "cx-dialog-promotions"], [3, "promotions"], [1, "cx-dialog-buttons"], ["autofocus", "", 1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-secondary", 3, "click"], [1, "col-sm-12"]],
      template: function AddedToCartDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 1);
          ɵɵlistener("esc", function AddedToCartDialogComponent_Template_div_esc_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.dismissModal("Escape pressed"));
          });
          ɵɵelementStart(1, "div", 2)(2, "div", 3);
          ɵɵtemplate(3, AddedToCartDialogComponent_div_3_Template, 3, 3, "div", 4)(4, AddedToCartDialogComponent_div_4_Template, 7, 11, "div", 5);
          ɵɵelementStart(5, "button", 6);
          ɵɵpipe(6, "cxTranslate");
          ɵɵpipe(7, "cxTranslate");
          ɵɵlistener("click", function AddedToCartDialogComponent_Template_button_click_5_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.dismissModal("Cross click"));
          });
          ɵɵelementStart(8, "span", 7);
          ɵɵelement(9, "cx-icon", 8);
          ɵɵelementEnd()()();
          ɵɵtemplate(10, AddedToCartDialogComponent_ng_container_10_Template, 3, 3, "ng-container", 9);
          ɵɵpipe(11, "async");
          ɵɵelementEnd();
          ɵɵtemplate(12, AddedToCartDialogComponent_ng_template_12_Template, 4, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          const loading_r6 = ɵɵreference(13);
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(3);
          ɵɵproperty("cxFeature", "a11yUpdatingCartNoNarration");
          ɵɵadvance();
          ɵɵproperty("cxFeature", "!a11yUpdatingCartNoNarration");
          ɵɵadvance();
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(6, 8, "common.close"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(7, 10, "addToCart.closeModal"));
          ɵɵadvance(4);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(11, 12, ctx.loaded$))("ngIfElse", loading_r6);
        }
      },
      dependencies: [NgIf, CartItemComponent, SpinnerComponent, PromotionsComponent, IconComponent, FocusDirective, FeatureDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddedToCartDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-added-to-cart-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  class="cx-modal-container"
  role="dialog"
  [cxFocus]="focusConfig"
  (esc)="dismissModal('Escape pressed')"
  aria-labelledby="dialogTitle"
>
  <div class="cx-modal-content">
    <!-- Modal Header -->
    <div
      aria-live="polite"
      aria-atomic="true"
      class="cx-dialog-header modal-header"
    >
      <div
        *cxFeature="'a11yUpdatingCartNoNarration'"
        id="dialogTitle"
        class="cx-dialog-title modal-title"
        role="none"
      >
        {{ 'addToCart.itemAddedToYourCart' | cxTranslate }}
      </div>
      <div
        *cxFeature="'!a11yUpdatingCartNoNarration'"
        id="dialogTitle"
        class="cx-dialog-title modal-title"
      >
        {{
          (loaded$ | async)
            ? (addedEntryWasMerged$ | async)
              ? ('addToCart.itemsIncrementedInYourCart' | cxTranslate)
              : ('addToCart.itemsAddedToYourCart' | cxTranslate)
            : ('addToCart.updatingCart' | cxTranslate)
        }}
      </div>
      <button
        type="button"
        class="close"
        title="{{ 'common.close' | cxTranslate }}"
        attr.aria-label="{{ 'addToCart.closeModal' | cxTranslate }}"
        (click)="dismissModal('Cross click')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>

    <!-- Modal Body -->
    <ng-container *ngIf="loaded$ | async; else loading">
      <div class="cx-dialog-body modal-body" *ngIf="entry$ | async as entry">
        <div class="cx-dialog-row">
          <div class="cx-dialog-item col-sm-12 col-md-6">
            <cx-cart-item
              [item]="entry"
              [compact]="true"
              [quantityControl]="getQuantityControl() | async"
              [promotionLocation]="promotionLocation"
            ></cx-cart-item>
            <div class="cx-dialog-pickup-store" *ngIf="pickupStoreName">
              {{ 'pickupOptionDialog.modalHeader' | cxTranslate }}:
              <span class="cx-dialog-pickup-store-name">{{
                pickupStoreName
              }}</span>
            </div>
          </div>
          <!-- Separator -->
          <div
            class="cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none"
          ></div>
          <!-- Total container -->
          <div
            class="cx-dialog-actions col-sm-12 col-md-6"
            *ngIf="cart$ | async as cart"
          >
            <div class="cx-dialog-total">
              <div>
                {{
                  'cartItems.cartTotal'
                    | cxTranslate: { count: cart.totalUnitCount }
                }}
              </div>

              <div>{{ cart.subTotal?.formattedValue }}</div>
            </div>

            <!-- Promotions -->
            <div class="cx-dialog-promotions">
              <cx-promotions
                [promotions]="
                  (cart.appliedOrderPromotions || []).concat(
                    cart.potentialOrderPromotions || []
                  )
                "
              ></cx-promotions>
            </div>

            <!-- Actions -->
            <div class="cx-dialog-buttons">
              <button
                [class.disabled]="form.dirty"
                (click)="onAction('viewCart')"
                class="btn btn-primary"
                autofocus
              >
                {{ 'addToCart.viewCart' | cxTranslate }}
              </button>
              <button
                [class.disabled]="form.dirty"
                (click)="onAction('checkout')"
                class="btn btn-secondary"
              >
                {{ 'addToCart.proceedToCheckout' | cxTranslate }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </ng-container>
  </div>

  <!-- Modal Body -->
  <ng-template #loading>
    <div class="cx-dialog-body modal-body">
      <div class="cx-dialog-row">
        <div class="col-sm-12">
          <cx-spinner aria-hidden="true"></cx-spinner>
        </div>
      </div>
    </div>
  </ng-template>
</div>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: LaunchDialogService
  }, {
    type: RoutingService
  }, {
    type: ElementRef
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
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
          ɵɵviewQuery(_c6, 5);
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
var AppliedCouponsComponent = class _AppliedCouponsComponent {
  constructor(cartVoucherService) {
    this.cartVoucherService = cartVoucherService;
    this.cartIsLoading = false;
    this.isReadOnly = false;
    this.iconTypes = ICON_TYPE;
  }
  get sortedVouchers() {
    this.vouchers = this.vouchers || [];
    return this.vouchers.slice().sort((a, b) => {
      return a.code && b.code ? a.code.localeCompare(b.code) : 0;
    });
  }
  removeVoucher(voucherId) {
    this.cartVoucherService.removeVoucher(voucherId);
  }
  static {
    this.ɵfac = function AppliedCouponsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppliedCouponsComponent)(ɵɵdirectiveInject(CartVoucherFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AppliedCouponsComponent,
      selectors: [["cx-applied-coupons"]],
      inputs: {
        vouchers: "vouchers",
        cartIsLoading: "cartIsLoading",
        isReadOnly: "isReadOnly"
      },
      standalone: false,
      decls: 3,
      vars: 2,
      consts: [["editableCoupons", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["class", "coupon-summary cx-coupon-card textonly", 4, "ngFor", "ngForOf"], [1, "cx-applied-coupon-title"], [1, "coupon-summary", "cx-coupon-card", "textonly"], [1, "cx-applied-coupon-code"], [1, "row"], ["class", "col-sm-12 col-md-6 col-lg-12 cx-coupon-card-grid", 4, "ngFor", "ngForOf"], [1, "col-sm-12", "col-md-6", "col-lg-12", "cx-coupon-card-grid"], [1, "cx-coupon-apply", "cx-coupon-card", "cx-coupon-list-wrap"], [1, "cx-cart-coupon-code"], ["type", "button", 1, "close", 3, "click", "title", "disabled"], ["aria-hidden", "true"], [3, "type"]],
      template: function AppliedCouponsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AppliedCouponsComponent_div_0_Template, 4, 2, "div", 1)(1, AppliedCouponsComponent_ng_template_1_Template, 3, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const editableCoupons_r5 = ɵɵreference(2);
          ɵɵproperty("ngIf", ctx.isReadOnly)("ngIfElse", editableCoupons_r5);
        }
      },
      dependencies: [NgForOf, NgIf, IconComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppliedCouponsComponent, [{
    type: Component,
    args: [{
      selector: "cx-applied-coupons",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div *ngIf="isReadOnly; else editableCoupons">
  <div *ngIf="sortedVouchers.length > 0">
    <div class="cx-applied-coupon-title">
      {{ 'voucher.vouchersApplied' | cxTranslate }}
    </div>
  </div>
  <ng-container>
    <div
      *ngFor="let voucher of sortedVouchers"
      class="coupon-summary cx-coupon-card textonly"
    >
      <span class="cx-applied-coupon-code">{{ voucher.voucherCode }}</span>
    </div>
  </ng-container>
</div>

<ng-template #editableCoupons>
  <div class="row">
    <ng-container>
      <div
        *ngFor="let voucher of sortedVouchers"
        class="col-sm-12 col-md-6 col-lg-12 cx-coupon-card-grid"
      >
        <div class="cx-coupon-apply cx-coupon-card cx-coupon-list-wrap">
          <span class="cx-cart-coupon-code">{{ voucher.voucherCode }}</span>
          <button
            type="button"
            class="close"
            title="{{ 'common.close' | cxTranslate }}"
            [attr.aria-label]="'common.close' | cxTranslate"
            (click)="removeVoucher(voucher.voucherCode)"
            [disabled]="cartIsLoading"
            [class.disabled]="cartIsLoading"
          >
            <span aria-hidden="true">
              <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
            </span>
          </button>
        </div>
      </div>
    </ng-container>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: CartVoucherFacade
  }], {
    vouchers: [{
      type: Input
    }],
    cartIsLoading: [{
      type: Input
    }],
    isReadOnly: [{
      type: Input
    }]
  });
})();
var CartCouponComponent = class _CartCouponComponent {
  constructor(cartVoucherService, formBuilder, customerCouponService, activeCartService) {
    this.cartVoucherService = cartVoucherService;
    this.formBuilder = formBuilder;
    this.customerCouponService = customerCouponService;
    this.activeCartService = activeCartService;
    this.MAX_CUSTOMER_COUPON_PAGE = 100;
    this.ignoreCloseEvent = false;
    this.subscription = new Subscription();
    this.couponBoxIsActive = false;
    this.featureConfigService = inject(FeatureConfigService, {
      optional: true
    });
  }
  ngOnInit() {
    if (this.customerCouponService) {
      this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
    }
    this.cart$ = combineLatest([this.activeCartService.getActive(), this.activeCartService.getActiveCartId(), this.customerCouponService.getCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE)]).pipe(tap(([cart, activeCardId, customerCoupons]) => {
      this.cartId = activeCardId;
      this.getApplicableCustomerCoupons(cart, customerCoupons.coupons ?? []);
    }), map(([cart]) => cart));
    this.cartIsLoading$ = this.activeCartService.isStable().pipe(map((loaded) => !loaded));
    this.cartVoucherService.resetAddVoucherProcessingState();
    this.couponForm = this.formBuilder.group({
      couponCode: ["", [Validators.required]]
    });
    this.subscription.add(this.cartVoucherService.getAddVoucherResultSuccess().subscribe((success) => {
      this.onSuccess(success);
    }));
    this.subscription.add(this.cartVoucherService.getAddVoucherResultError().subscribe((error) => {
      this.onError(error);
    }));
  }
  onError(error) {
    if (error) {
      this.customerCouponService.loadCustomerCoupons(this.MAX_CUSTOMER_COUPON_PAGE);
      this.cartVoucherService.resetAddVoucherProcessingState();
    }
  }
  onSuccess(success) {
    if (success) {
      this.couponForm.reset();
      this.cartVoucherService.resetAddVoucherProcessingState();
    }
  }
  getApplicableCustomerCoupons(cart, coupons) {
    this.applicableCoupons = coupons || [];
    if (cart.appliedVouchers) {
      cart.appliedVouchers.forEach((appliedVoucher) => {
        this.applicableCoupons = this.applicableCoupons.filter((coupon) => coupon.couponId !== appliedVoucher.code);
      });
    }
  }
  applyVoucher() {
    if (this.couponForm.valid) {
      this.cartVoucherService.addVoucher(this.couponForm.value.couponCode, this.cartId);
    } else {
      this.couponForm.markAllAsTouched();
    }
  }
  applyCustomerCoupon(couponId) {
    this.cartVoucherService.addVoucher(couponId, this.cartId);
    this.couponBoxIsActive = false;
  }
  close(event) {
    if (!this.ignoreCloseEvent) {
      this.couponBoxIsActive = false;
      if (event && event.target) {
        event.target.blur();
      }
    }
    this.ignoreCloseEvent = false;
  }
  disableClose() {
    this.ignoreCloseEvent = true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.cartVoucherService.resetAddVoucherProcessingState();
  }
  static {
    this.ɵfac = function CartCouponComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartCouponComponent)(ɵɵdirectiveInject(CartVoucherFacade), ɵɵdirectiveInject(UntypedFormBuilder), ɵɵdirectiveInject(CustomerCouponService), ɵɵdirectiveInject(ActiveCartFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CartCouponComponent,
      selectors: [["cx-cart-coupon"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "form-group"], [3, "ngSubmit", "formGroup"], ["id", "card-coupon-input-label", 1, "cx-cart-coupon-title"], [1, "cx-cart-coupon-container"], ["type", "text", "formControlName", "couponCode", 1, "form-control", "input-coupon-code", 3, "placeholder"], ["type", "submit", 1, "btn", "btn-block", "btn-secondary", "apply-coupon-button", 3, "disabled"], [3, "vouchers", "cartIsLoading", "isReadOnly"], [1, "cx-available-coupon"], [1, "title", "cx-cart-coupon-title"], [1, "message"], [1, "scroll"], ["class", "coupons card", 4, "ngFor", "ngForOf"], [1, "coupons", "card"], [1, "coupon-id", "link", 3, "click", "disabled"]],
      template: function CartCouponComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CartCouponComponent_ng_container_0_Template, 17, 24, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.cart$));
        }
      },
      dependencies: [NgForOf, NgIf, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, AppliedCouponsComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartCouponComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-coupon",
      standalone: false,
      template: `<ng-container *ngIf="cart$ | async as cart">
  <div class="form-group">
    <form (ngSubmit)="applyVoucher()" [formGroup]="couponForm">
      <label id="card-coupon-input-label" class="cx-cart-coupon-title">
        {{ 'voucher.addCoupon' | cxTranslate }}
      </label>

      <div class="cx-cart-coupon-container">
        <input
          [attr.aria-labelledby]="'card-coupon-input-label'"
          type="text"
          class="form-control input-coupon-code"
          formControlName="couponCode"
          placeholder="{{ 'voucher.placeholder' | cxTranslate }}"
        />
        <button
          class="btn btn-block btn-secondary apply-coupon-button"
          type="submit"
          [disabled]="
            (cartIsLoading$ | async) || !couponForm?.get('couponCode')?.value
          "
          [class.disabled]="cartIsLoading$ | async"
        >
          {{ 'voucher.apply' | cxTranslate }}
        </button>
      </div>
    </form>
  </div>

  <cx-applied-coupons
    [vouchers]="cart.appliedVouchers"
    [cartIsLoading]="cartIsLoading$ | async"
    [isReadOnly]="false"
  >
  </cx-applied-coupons>

  <ng-container *ngIf="applicableCoupons && applicableCoupons.length > 0">
    <div class="cx-available-coupon">
      <div class="title cx-cart-coupon-title">
        {{ 'voucher.availableCoupons' | cxTranslate }}
      </div>
      <div class="message">
        {{ 'voucher.availableCouponsLabel' | cxTranslate }}
      </div>
      <div class="scroll">
        <div class="coupons card" *ngFor="let coupon of applicableCoupons">
          <button
            (click)="applyCustomerCoupon(coupon.couponId)"
            class="coupon-id link"
            [disabled]="cartIsLoading$ | async"
            [class.disabled]="cartIsLoading$ | async"
          >
            {{ coupon.couponId }}
          </button>
        </div>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: CartVoucherFacade
  }, {
    type: UntypedFormBuilder
  }, {
    type: CustomerCouponService
  }, {
    type: ActiveCartFacade
  }], {
    featureConfigService: [{
      type: Optional
    }]
  });
})();
var CartCouponModule = class _CartCouponModule {
  static {
    this.ɵfac = function CartCouponModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartCouponModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartCouponModule,
      declarations: [CartCouponComponent, AppliedCouponsComponent],
      imports: [CommonModule, NgSelectModule, FormsModule, ReactiveFormsModule, I18nModule, IconModule, FormErrorsModule, FeaturesConfigModule, FormRequiredLegendComponent],
      exports: [CartCouponComponent, AppliedCouponsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartApplyCouponComponent: {
            component: CartCouponComponent
          }
        }
      })],
      imports: [CommonModule, NgSelectModule, FormsModule, ReactiveFormsModule, I18nModule, IconModule, FormErrorsModule, FeaturesConfigModule, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartCouponModule, [{
    type: NgModule,
    args: [{
      declarations: [CartCouponComponent, AppliedCouponsComponent],
      exports: [CartCouponComponent, AppliedCouponsComponent],
      imports: [CommonModule, NgSelectModule, FormsModule, ReactiveFormsModule, I18nModule, IconModule, FormErrorsModule, FeaturesConfigModule, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartApplyCouponComponent: {
            component: CartCouponComponent
          }
        }
      })]
    }]
  }], null, null);
})();
var CartItemValidationWarningModule = class _CartItemValidationWarningModule {
  static {
    this.ɵfac = function CartItemValidationWarningModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartItemValidationWarningModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartItemValidationWarningModule,
      declarations: [CartItemValidationWarningComponent],
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, IconModule],
      exports: [CartItemValidationWarningComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemValidationWarningModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, IconModule],
      exports: [CartItemValidationWarningComponent],
      declarations: [CartItemValidationWarningComponent]
    }]
  }], null, null);
})();
var CartItemListComponentService = class _CartItemListComponentService {
  showBasePriceWithDiscount() {
    return true;
  }
  static {
    this.ɵfac = function CartItemListComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartItemListComponentService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartItemListComponentService,
      factory: _CartItemListComponentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemListComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CartItemListRowComponent = class _CartItemListRowComponent extends CartItemComponent {
  constructor(cartItemContextSource) {
    super(cartItemContextSource);
    this.componentService = inject(CartItemListComponentService);
    this.isFlagQuote = this.componentService.showBasePriceWithDiscount();
    useFeatureStyles("a11yQTY2Quantity");
  }
  static {
    this.ɵfac = function CartItemListRowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartItemListRowComponent)(ɵɵdirectiveInject(CartItemContextSource));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CartItemListRowComponent,
      selectors: [["", "cx-cart-item-list-row", ""], ["cx-cart-item-list-row"]],
      standalone: false,
      features: [ɵɵProvidersFeature([CartItemContextSource, {
        provide: CartItemContext,
        useExisting: CartItemContextSource
      }]), ɵɵInheritDefinitionFeature],
      attrs: _c7,
      decls: 3,
      vars: 1,
      consts: [["total", ""], ["forceInstock", ""], [3, "cxOutlet"], ["role", "cell"], [3, "code"], [1, "cx-table-item-container"], ["tabindex", "0", 3, "routerLink", 4, "ngIf"], ["format", "cartIcon", 3, "container", 4, "ngIf"], [1, "cx-info"], ["class", "cx-name", 4, "ngIf"], ["class", "cx-code", 4, "ngIf"], [4, "ngIf"], ["role", "columnheader", 3, "cxOutlet", "cxOutletContext"], [1, "cx-cart-addons"], [3, "promotions"], ["role", "cell", "class", "cx-price cx-mobile-only", 4, "ngIf"], ["role", "cell", 3, "cxOutlet", "cxOutletContext"], ["role", "cell", 1, "cx-quantity"], ["class", "cx-mobile-header", "placement", "left", 3, "title", 4, "cxFeature"], [1, "cx-value"], [3, "control", "readonly", "max", "allowZero"], [4, "ngIf", "ngIfElse"], ["role", "cell", "class", "cx-actions", 4, "ngIf"], ["tabindex", "0", 3, "routerLink"], ["format", "cartIcon", 3, "container"], [1, "cx-name"], ["class", "cx-link", 3, "routerLink", 4, "ngIf"], [1, "cx-link", 3, "routerLink"], [1, "cx-code"], ["class", "cx-price", 4, "ngIf"], [1, "cx-price"], ["class", "cx-value", 4, "ngIf"], [3, "cxOutlet", "cxOutletContext"], ["class", "cx-property", 4, "ngFor", "ngForOf"], [1, "cx-property"], ["class", "cx-label", 4, "ngIf"], [1, "cx-label"], ["role", "cell", 1, "cx-price", "cx-mobile-only"], [1, "cx-mobile-header"], ["placement", "left", 1, "cx-mobile-header", 3, "title"], ["role", "cell", 1, "cx-total"], ["class", "cx-value", 4, "ngIf", "ngIfElse"], ["role", "cell", 1, "cx-actions"], ["role", "cell", "class", "cx-availability", 4, "ngIf"], ["class", "btn btn-tertiary cx-remove-btn", 3, "cxAtMessage", "disabled", "click", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "cell", 1, "cx-availability"], [1, "btn", "btn-tertiary", "cx-remove-btn", 3, "click", "cxAtMessage", "disabled"], ["role", "cell", "class", "cx-total", 4, "ngIf"]],
      template: function CartItemListRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CartItemListRowComponent_ng_template_0_Template, 26, 32, "ng-template", 2)(1, CartItemListRowComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("cxOutlet", ctx.CartOutlets.LIST_ITEM);
        }
      },
      dependencies: [AtMessageDirective, CartItemValidationWarningComponent, NgForOf, NgIf, NgTemplateOutlet, ItemCounterComponent, MediaComponent, OutletDirective, PromotionsComponent, RouterLink, FeatureDirective, TranslatePipe, UrlPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemListRowComponent, [{
    type: Component,
    args: [{
      selector: "[cx-cart-item-list-row], cx-cart-item-list-row",
      providers: [CartItemContextSource, {
        provide: CartItemContext,
        useExisting: CartItemContextSource
      }],
      standalone: false,
      template: `<!-- Item Start Outlet -->
<ng-template [cxOutlet]="CartOutlets.LIST_ITEM">
  <td role="cell">
    <ng-template
      [cxOutlet]="CartOutlets.ITEM_CONFIGURATOR_ISSUES"
    ></ng-template>
    <cx-cart-item-validation-warning
      [code]="item.product?.code"
    ></cx-cart-item-validation-warning>
    <div class="cx-table-item-container">
      <!-- Item Image -->
      <a
        *ngIf="!options.disableItemLink"
        [routerLink]="{ cxRoute: 'product', params: item.product } | cxUrl"
        tabindex="0"
      >
        <cx-media
          [container]="item.product?.images?.PRIMARY"
          format="cartIcon"
        ></cx-media>
      </a>
      <cx-media
        *ngIf="options.disableItemLink"
        [container]="item.product?.images?.PRIMARY"
        format="cartIcon"
      ></cx-media>
      <div class="cx-info">
        <div *ngIf="item.product?.name" class="cx-name">
          <a
            *ngIf="!options.disableItemLink"
            class="cx-link"
            [routerLink]="{ cxRoute: 'product', params: item.product } | cxUrl"
            >{{ item.product?.name }}</a
          >
          <span *ngIf="options.disableItemLink">{{ item.product?.name }}</span>
        </div>
        <div *ngIf="item.product?.code" class="cx-code">
          {{ 'cartItems.id' | cxTranslate }} {{ item.product?.code }}
        </div>
        <!-- Item Price -->
        <ng-container *ngIf="isFlagQuote">
          <div *ngIf="item.basePrice" class="cx-price">
            <div *ngIf="item.basePrice" class="cx-value">
              {{ item.basePrice?.formattedValue }}
            </div>
          </div></ng-container
        >
        <ng-template
          role="columnheader"
          [cxOutlet]="CartOutlets.CPQ_QUOTE"
          [cxOutletContext]="{
            items: item,
          }"
        ></ng-template>
      </div>
    </div>
    <div class="cx-cart-addons">
      <!-- Item Details Outlet -->
      <ng-template [cxOutlet]="CartOutlets.ITEM_DETAILS"> </ng-template>

      <!-- Item Bundle Details Outlet -->
      <ng-template [cxOutlet]="CartOutlets.ITEM_BUNDLE_DETAILS"> </ng-template>

      <!-- Promotion -->
      <cx-promotions [promotions]="item.promotions"></cx-promotions>

      <!-- Item Delivery Details Outlet -->
      <ng-template
        *ngIf="!readonly"
        [cxOutlet]="CartOutlets.ITEM_DELIVERY_DETAILS"
        [cxOutletContext]="{ item, cartType: options.cartType }"
      ></ng-template>
    </div>

    <!-- Variants -->
    <ng-container *ngIf="item.product?.baseOptions?.length">
      <div
        *ngFor="
          let variant of item.product?.baseOptions[0]?.selected
            ?.variantOptionQualifiers
        "
        class="cx-property"
      >
        <!-- cx-mobile-header -->
        <div class="cx-label" *ngIf="variant.name && variant.value">
          {{ variant.name }}: {{ variant.value }}
        </div>
      </div>
    </ng-container>
  </td>
  <!-- Mobile Item Price -->
  <td role="cell" *ngIf="item.basePrice" class="cx-price cx-mobile-only">
    <div class="cx-mobile-header">
      {{ 'cartItems.itemPrice' | cxTranslate }}
    </div>
    <div *ngIf="item.basePrice" class="cx-value">
      {{ item.basePrice?.formattedValue }}
    </div>
  </td>

  <!-- item price with discount -->
  <ng-template
    role="cell"
    [cxOutlet]="CartOutlets.CPQ_QUOTE_MODULE"
    [cxOutletContext]="{
      items: item,
    }"
  ></ng-template>

  <!-- Item Quantity -->
  <td role="cell" class="cx-quantity">
    <div
      *cxFeature="'a11yQTY2Quantity'"
      class="cx-mobile-header"
      placement="left"
      title="{{ 'cartItems.quantityTitle' | cxTranslate }}"
    >
      {{ 'cartItems.quantityFull' | cxTranslate }}
    </div>
    <div
      *cxFeature="'!a11yQTY2Quantity'"
      class="cx-mobile-header"
      placement="left"
      title="{{ 'cartItems.quantityTitle' | cxTranslate }}"
    >
      {{ 'cartItems.quantity' | cxTranslate }}
    </div>
    <div class="cx-value" [class.readonly-value]="readonly">
      <cx-item-counter
        [control]="quantityControl"
        [readonly]="!item.updateable || readonly || options.isSaveForLater"
        [max]="item.product?.stock?.stockLevel"
        [allowZero]="true"
      >
      </cx-item-counter>
    </div>
  </td>
  <!-- Total -->
  <ng-container *ngIf="options.isSaveForLater; else total">
    <td role="cell" class="cx-total">
      <div class="cx-mobile-header">
        {{ 'saveForLaterItems.stock' | cxTranslate }}
      </div>
      <div
        *ngIf="item.product?.stock?.stockLevel >= 0; else forceInstock"
        class="cx-value"
      >
        {{ item.product?.stock.stockLevel }}
      </div>
      <ng-template #forceInstock>
        <div class="cx-value">
          {{ 'saveForLaterItems.forceInStock' | cxTranslate }}
        </div>
      </ng-template>
    </td>
  </ng-container>

  <td
    role="cell"
    *ngIf="
      (!readonly || options.isSaveForLater || options.displayAddToCart) &&
      item.updateable
    "
    class="cx-actions"
  >
    <ng-container *ngIf="!isProductOutOfStock(item.product)">
      <ng-container
        *ngTemplateOutlet="
          options.optionalBtn;
          context: {
            $implicit: {
              loading: quantityControl.disabled,
              item: this.item,
              options: this.options,
            },
          }
        "
      ></ng-container>
    </ng-container>

    <!-- Availability -->
    <span
      role="cell"
      *ngIf="isProductOutOfStock(item.product)"
      class="cx-availability"
    >
      {{ 'addToCart.outOfStock' | cxTranslate }}
    </span>

    <button
      *ngIf="!readonly"
      (click)="removeItem()"
      [cxAtMessage]="'cartItems.itemRemoved' | cxTranslate"
      [disabled]="quantityControl.disabled"
      attr.aria-label="{{ 'addToCart.removeFromCart' | cxTranslate }}"
      class="btn btn-tertiary cx-remove-btn"
    >
      {{ 'common.remove' | cxTranslate }}
    </button>
  </td>
</ng-template>
<ng-template #total>
  <td role="cell" *ngIf="item.totalPrice" class="cx-total">
    <div class="cx-mobile-header">
      {{ 'cartItems.total' | cxTranslate }}
    </div>
    <div class="cx-value">{{ item.totalPrice.formattedValue }}</div>
  </td>
</ng-template>
`
    }]
  }], () => [{
    type: CartItemContextSource
  }], null);
})();
var CartItemListComponent = class _CartItemListComponent {
  set items(items) {
    this._setItems(items);
  }
  get items() {
    return this._items;
  }
  set setLoading(value) {
    if (!this.readonly) {
      value ? this.form.disable({
        emitEvent: false
      }) : this.form.enable({
        emitEvent: false
      });
      this.cd.markForCheck();
    }
  }
  constructor(activeCartService, selectiveCartService, userIdService, multiCartService, cd, outlet) {
    this.activeCartService = activeCartService;
    this.selectiveCartService = selectiveCartService;
    this.userIdService = userIdService;
    this.multiCartService = multiCartService;
    this.cd = cd;
    this.outlet = outlet;
    this.subscription = new Subscription();
    this.readonly = false;
    this.hasHeader = true;
    this.options = {
      isSaveForLater: false,
      optionalBtn: null,
      displayAddToCart: false
    };
    this._items = [];
    this.form = new UntypedFormGroup({});
    this.promotionLocation = PromotionLocation.ActiveCart;
    this.CartOutlets = CartOutlets;
    this.featureConfigService = inject(FeatureConfigService);
    useFeatureStyles("a11yQTY2Quantity");
    useFeatureStyles("a11yPickupOptionsTabs");
    useFeatureStyles("a11yCroppedFocusRing");
  }
  ngOnInit() {
    this.subscription.add(this.getInputsFromContext());
    this.subscription.add(this.userIdService?.getUserId().subscribe((userId) => this.userId = userId));
  }
  _setItems(items, options) {
    this.resolveItems(items, options);
    this.createForm();
  }
  getInputsFromContext() {
    return this.outlet?.context$.subscribe((context) => {
      let contextRequiresRerender = false;
      if (context.readonly !== void 0) {
        contextRequiresRerender = this.readonly !== context.readonly;
        this.readonly = context.readonly;
      }
      if (context.hasHeader !== void 0) {
        this.hasHeader = context.hasHeader;
      }
      if (context.options !== void 0) {
        this.options = context.options;
      }
      if (context.cartId !== void 0) {
        this.cartId = context.cartId;
      }
      if (context.promotionLocation !== void 0) {
        this.promotionLocation = context.promotionLocation;
      }
      if (context.cartIsLoading !== void 0) {
        this.setLoading = context.cartIsLoading;
      }
      this.updateItemsOnContextChange(context, contextRequiresRerender);
    });
  }
  updateItemsOnContextChange(context, contextRequiresRerender) {
    const preventRedundantRecreationEnabled = this.featureConfigService.isEnabled("a11yPreventCartItemsFormRedundantRecreation");
    if (context.items !== void 0 && (!preventRedundantRecreationEnabled || contextRequiresRerender || this.isItemsChanged(context.items))) {
      this.cd.markForCheck();
      this._setItems(context.items, {
        forceRerender: contextRequiresRerender
      });
    }
  }
  isItemsChanged(newItems) {
    return JSON.stringify(this.items) !== JSON.stringify(newItems);
  }
  /**
   * Resolves items passed to component input and updates 'items' field
   */
  resolveItems(items, options) {
    if (!items) {
      this._items = [];
      return;
    }
    if (items.every((item) => item.hasOwnProperty("orderEntry"))) {
      this.normalizeConsignmentEntries(items);
    } else {
      this.rerenderChangedItems(items, options);
    }
  }
  normalizeConsignmentEntries(items) {
    this._items = items.map((consignmentEntry) => {
      const entry = Object.assign({}, consignmentEntry.orderEntry);
      entry.quantity = consignmentEntry.quantity;
      return entry;
    });
  }
  /**
   * We'd like to avoid the unnecessary re-renders of unchanged cart items after the data reload.
   * OCC cart entries don't have any unique identifier that we could use in Angular `trackBy`.
   * So we update each array element to the new object only when it's any different to the previous one.
   */
  rerenderChangedItems(items, options) {
    let offset = 0;
    for (let i = 0; i - offset < Math.max(items.length, this._items.length); i++) {
      const index = i - offset;
      if (options?.forceRerender || JSON.stringify(this._items?.[index]) !== JSON.stringify(items[index])) {
        if (this._items[index]) {
          this.form?.removeControl(this.getControlName(this._items[index]));
        }
        if (!items[index]) {
          this._items.splice(index, 1);
          offset++;
        } else {
          this._items[index] = items[index];
        }
      }
    }
  }
  /**
   * Creates form models for list items
   */
  createForm() {
    this._items.forEach((item) => {
      const controlName = this.getControlName(item);
      const control = this.form.get(controlName);
      if (control) {
        if (control.get("quantity")?.value !== item.quantity) {
          control.patchValue({
            quantity: item.quantity
          }, {
            emitEvent: false
          });
        }
      } else {
        const group = new UntypedFormGroup({
          entryNumber: new UntypedFormControl(item.entryNumber),
          quantity: new UntypedFormControl(item.quantity, {
            updateOn: "blur"
          })
        });
        this.form.addControl(controlName, group);
      }
      if (!item.updateable || this.readonly) {
        this.form.controls[controlName].disable();
      }
    });
  }
  getControlName(item) {
    return item.entryNumber?.toString() || "";
  }
  removeEntry(item) {
    if (this.options.isSaveForLater) {
      this.selectiveCartService.removeEntry(item);
    } else if (this.cartId && this.userId) {
      this.multiCartService.removeEntry(this.userId, this.cartId, item.entryNumber);
    } else {
      this.activeCartService.removeEntry(item);
    }
    delete this.form.controls[this.getControlName(item)];
  }
  getControl(item) {
    return this.form.get(this.getControlName(item))?.valueChanges.pipe(
      // eslint-disable-next-line import/no-deprecated
      startWith(null),
      tap((value) => {
        if (item.updateable && value && !this.readonly) {
          if (this.options.isSaveForLater) {
            this.selectiveCartService.updateEntry(value.entryNumber, value.quantity);
          } else if (this.cartId && this.userId) {
            this.multiCartService.updateEntry(this.userId, this.cartId, value.entryNumber, value.quantity);
          } else {
            this.activeCartService.updateEntry(value.entryNumber, value.quantity);
          }
        }
      }),
      map(() => this.form.get(this.getControlName(item)))
    );
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function CartItemListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartItemListComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(SelectiveCartFacade), ɵɵdirectiveInject(UserIdService), ɵɵdirectiveInject(MultiCartFacade), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(OutletContextData, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CartItemListComponent,
      selectors: [["cx-cart-item-list"]],
      inputs: {
        readonly: "readonly",
        hasHeader: "hasHeader",
        options: "options",
        cartId: "cartId",
        items: "items",
        promotionLocation: "promotionLocation",
        setLoading: [0, "cartIsLoading", "setLoading"]
      },
      standalone: false,
      decls: 9,
      vars: 5,
      consts: [["totalHeader", ""], ["role", "table"], [1, "cx-visually-hidden"], [4, "ngIf"], [1, "cx-item-list-items"], [4, "ngFor", "ngForOf"], ["role", "row", 1, "cx-item-list-header"], ["role", "columnheader", "scope", "col", 1, "cx-item-list-desc"], ["role", "columnheader", 3, "cxOutlet", "cxOutletContext"], ["role", "columnheader", "scope", "col", "class", "cx-item-list-qty", 4, "cxFeature"], [4, "ngIf", "ngIfElse"], ["role", "columnheader", "scope", "col", 1, "cx-item-list-qty"], ["role", "columnheader", "scope", "col", 1, "cx-item-list-total"], ["role", "columnheader", "scope", "col", 1, "cx-item-list-actions"], [3, "is-changed", 4, "ngIf"], ["cx-cart-item-list-row", "", "role", "row", 1, "cx-item-list-row", 3, "item", "quantityControl", "readonly", "promotionLocation", "options"]],
      template: function CartItemListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "table", 1)(1, "caption", 2);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(4, CartItemListComponent_thead_4_Template, 10, 10, "thead", 3);
          ɵɵelementStart(5, "tbody", 4);
          ɵɵtemplate(6, CartItemListComponent_ng_container_6_Template, 3, 3, "ng-container", 5);
          ɵɵelementEnd()();
          ɵɵtemplate(7, CartItemListComponent_ng_template_7_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "cartItems.caption"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.hasHeader);
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.items);
        }
      },
      dependencies: [NgForOf, NgIf, OutletDirective, FeatureDirective, CartItemListRowComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartItemListComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-item-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<table role="table">
  <caption class="cx-visually-hidden">
    {{
      'cartItems.caption' | cxTranslate
    }}
  </caption>
  <thead *ngIf="hasHeader">
    <tr role="row" class="cx-item-list-header">
      <th role="columnheader" scope="col" class="cx-item-list-desc">
        {{ 'cartItems.item' | cxTranslate }}
      </th>

      <ng-template
        role="columnheader"
        [cxOutlet]="CartOutlets.CPQ_QUOTE_HEADING"
        [cxOutletContext]="items"
      ></ng-template>
      <th
        *cxFeature="'a11yQTY2Quantity'"
        role="columnheader"
        scope="col"
        class="cx-item-list-qty"
      >
        {{ 'cartItems.quantityFull' | cxTranslate }}
      </th>
      <th
        *cxFeature="'!a11yQTY2Quantity'"
        role="columnheader"
        scope="col"
        class="cx-item-list-qty"
      >
        {{ 'cartItems.quantity' | cxTranslate }}
      </th>
      <ng-container *ngIf="options.isSaveForLater; else totalHeader">
        <th role="columnheader" scope="col" class="cx-item-list-total">
          {{ 'saveForLaterItems.stock' | cxTranslate }}
        </th>
      </ng-container>
      <ng-container
        *ngIf="!readonly || options.isSaveForLater || options.displayAddToCart"
      >
        <th role="columnheader" scope="col" class="cx-item-list-actions">
          {{ 'cartItems.actions' | cxTranslate }}
        </th>
      </ng-container>
    </tr>
  </thead>
  <tbody class="cx-item-list-items">
    <ng-container *ngFor="let item of items; let i = index">
      <ng-container
        *ngIf="getControl(item) | async as control"
        [class.is-changed]="control.get('quantity').disabled"
      >
        <tr
          cx-cart-item-list-row
          role="row"
          class="cx-item-list-row"
          [item]="item"
          [quantityControl]="control.get('quantity')"
          [readonly]="readonly"
          [promotionLocation]="promotionLocation"
          [options]="options"
          [attr.aria-rowindex]="i + 1"
        ></tr>
      </ng-container>
    </ng-container>
  </tbody>
</table>

<ng-template #totalHeader>
  <th role="columnheader" scope="col" class="cx-item-list-total">
    {{ 'cartItems.total' | cxTranslate }}
  </th>
</ng-template>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: SelectiveCartFacade
  }, {
    type: UserIdService
  }, {
    type: MultiCartFacade
  }, {
    type: ChangeDetectorRef
  }, {
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], {
    readonly: [{
      type: Input
    }],
    hasHeader: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    cartId: [{
      type: Input
    }],
    items: [{
      type: Input,
      args: ["items"]
    }],
    promotionLocation: [{
      type: Input
    }],
    setLoading: [{
      type: Input,
      args: ["cartIsLoading"]
    }]
  });
})();
var OrderSummaryComponent = class _OrderSummaryComponent {
  constructor(outlet) {
    this.outlet = outlet;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    if (this.outlet?.context$) {
      this.subscription.add(this.outlet.context$.subscribe((context) => this.cart = context));
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function OrderSummaryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderSummaryComponent)(ɵɵdirectiveInject(OutletContextData, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderSummaryComponent,
      selectors: [["cx-order-summary"]],
      inputs: {
        cart: "cart"
      },
      standalone: false,
      decls: 5,
      vars: 6,
      consts: [["cartWithoutNet", ""], [1, "cx-summary-heading"], ["class", "cx-summary-partials", 4, "ngIf"], [3, "vouchers", "isReadOnly"], [1, "cx-summary-partials"], [1, "cx-summary-row"], [1, "col-6", "cx-summary-label"], [1, "col-6", "cx-summary-amount"], ["class", "cx-summary-row", 4, "ngIf", "ngIfElse"], [1, "cx-summary-row", "cx-summary-total"], ["class", "cx-summary-row", 4, "ngIf"]],
      template: function OrderSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "h3", 1);
          ɵɵtext(1);
          ɵɵpipe(2, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(3, OrderSummaryComponent_div_3_Template, 24, 17, "div", 2);
          ɵɵelement(4, "cx-applied-coupons", 3);
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 4, "orderCost.orderSummary"), "\n");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.cart);
          ɵɵadvance();
          ɵɵproperty("vouchers", ctx.cart.appliedVouchers)("isReadOnly", true);
        }
      },
      dependencies: [AppliedCouponsComponent, NgIf, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderSummaryComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-summary",
      standalone: false,
      template: `<h3 class="cx-summary-heading">
  {{ 'orderCost.orderSummary' | cxTranslate }}
</h3>

<div class="cx-summary-partials" *ngIf="cart">
  <div class="cx-summary-row">
    <div class="col-6 cx-summary-label">
      {{ 'orderCost.subtotal' | cxTranslate }}
    </div>
    <div class="col-6 cx-summary-amount">
      {{ cart.subTotal?.formattedValue }}
    </div>
  </div>
  <div class="cx-summary-row">
    <div class="col-6 cx-summary-label">
      {{
        (cart.deliveryCost?.formattedValue
          ? 'orderCost.shipping'
          : 'orderCost.estimatedShipping'
        ) | cxTranslate
      }}
    </div>
    <div class="col-6 cx-summary-amount">
      {{
        cart.deliveryCost?.formattedValue
          ? cart.deliveryCost?.formattedValue
          : ('orderCost.toBeDetermined' | cxTranslate)
      }}
    </div>
  </div>
  <div class="cx-summary-row" *ngIf="cart.net; else cartWithoutNet">
    <div class="col-6 cx-summary-label">
      {{ 'orderCost.salesTax' | cxTranslate }}
    </div>
    <div class="col-6 cx-summary-amount">
      {{ cart.totalTax?.formattedValue }}
    </div>
  </div>
  <div class="cx-summary-row cx-summary-total">
    <div class="col-6 cx-summary-label">
      {{ 'orderCost.total' | cxTranslate }}
    </div>
    <div class="col-6 cx-summary-amount">
      {{ cart.totalPriceWithTax?.formattedValue }}
    </div>
  </div>
  <div class="cx-summary-row" *ngIf="cart.totalDiscounts?.value > 0">
    {{ 'orderCost.discount' | cxTranslate }}
    {{ cart.totalDiscounts?.formattedValue }}
  </div>
  <ng-template #cartWithoutNet>
    <div class="cx-summary-row">
      {{
        cart.totalPriceWithTax?.value !== cart.totalPrice?.value
          ? ('orderCost.grossTax' | cxTranslate)
          : ('orderCost.grossIncludeTax' | cxTranslate)
      }}
      {{ cart.totalTax?.formattedValue }}.
    </div>
  </ng-template>
</div>

<cx-applied-coupons
  [vouchers]="cart.appliedVouchers"
  [isReadOnly]="true"
></cx-applied-coupons>
`
    }]
  }], () => [{
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], {
    cart: [{
      type: Input
    }]
  });
})();
var CartSharedModule = class _CartSharedModule {
  static {
    this.ɵfac = function CartSharedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartSharedModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartSharedModule,
      declarations: [CartItemComponent, OrderSummaryComponent, CartItemListComponent, CartItemListRowComponent],
      imports: [AtMessageModule, CartCouponModule, CartItemValidationWarningModule, CommonModule, I18nModule, IconModule, ItemCounterModule, MediaModule, OutletModule, PromotionsModule, ReactiveFormsModule, RouterModule, UrlModule, AddToCartModule, FeaturesConfigModule],
      exports: [CartItemComponent, CartItemListRowComponent, CartItemListComponent, OrderSummaryComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: CartOutlets.ORDER_SUMMARY,
        component: OrderSummaryComponent
      }), provideOutlet({
        id: CartOutlets.CART_ITEM_LIST,
        component: CartItemListComponent
      })],
      imports: [AtMessageModule, CartCouponModule, CartItemValidationWarningModule, CommonModule, I18nModule, IconModule, ItemCounterModule, MediaModule, OutletModule, PromotionsModule, ReactiveFormsModule, RouterModule, UrlModule, AddToCartModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartSharedModule, [{
    type: NgModule,
    args: [{
      imports: [AtMessageModule, CartCouponModule, CartItemValidationWarningModule, CommonModule, I18nModule, IconModule, ItemCounterModule, MediaModule, OutletModule, PromotionsModule, ReactiveFormsModule, RouterModule, UrlModule, AddToCartModule, FeaturesConfigModule],
      providers: [provideOutlet({
        id: CartOutlets.ORDER_SUMMARY,
        component: OrderSummaryComponent
      }), provideOutlet({
        id: CartOutlets.CART_ITEM_LIST,
        component: CartItemListComponent
      })],
      declarations: [CartItemComponent, OrderSummaryComponent, CartItemListComponent, CartItemListRowComponent],
      exports: [CartItemComponent, CartItemListRowComponent, CartItemListComponent, OrderSummaryComponent]
    }]
  }], null, null);
})();
var defaultAddedToCartLayoutConfig = {
  launch: {
    ADDED_TO_CART: {
      inlineRoot: true,
      component: AddedToCartDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var AddedToCartDialogModule = class _AddedToCartDialogModule {
  constructor(_addToCartDialogEventListener) {
  }
  static {
    this.ɵfac = function AddedToCartDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddedToCartDialogModule)(ɵɵinject(AddedToCartDialogEventListener));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AddedToCartDialogModule,
      declarations: [AddedToCartDialogComponent],
      imports: [CommonModule, ReactiveFormsModule, CartSharedModule, RouterModule, SpinnerModule, PromotionsModule, UrlModule, IconModule, I18nModule, ItemCounterModule, KeyboardFocusModule, FeaturesConfigModule, BtnLikeLinkModule],
      exports: [AddedToCartDialogComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultAddedToCartLayoutConfig)],
      imports: [CommonModule, ReactiveFormsModule, CartSharedModule, RouterModule, SpinnerModule, PromotionsModule, UrlModule, IconModule, I18nModule, ItemCounterModule, KeyboardFocusModule, FeaturesConfigModule, BtnLikeLinkModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddedToCartDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, CartSharedModule, RouterModule, SpinnerModule, PromotionsModule, UrlModule, IconModule, I18nModule, ItemCounterModule, KeyboardFocusModule, FeaturesConfigModule, BtnLikeLinkModule],
      providers: [provideDefaultConfig(defaultAddedToCartLayoutConfig)],
      declarations: [AddedToCartDialogComponent],
      exports: [AddedToCartDialogComponent]
    }]
  }], () => [{
    type: AddedToCartDialogEventListener
  }], null);
})();
var ClearCartComponent = class _ClearCartComponent {
  constructor(activeCartFacade, vcr, launchDialogService) {
    this.activeCartFacade = activeCartFacade;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.cart$ = this.activeCartFacade.getActive();
    this.subscription = new Subscription();
  }
  openDialog(event) {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.CLEAR_CART, this.element, this.vcr);
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
    event.stopPropagation();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function ClearCartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClearCartComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(LaunchDialogService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ClearCartComponent,
      selectors: [["cx-clear-cart"]],
      viewQuery: function ClearCartComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c11, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["element", ""], [4, "ngIf"], ["class", "clear-cart-wrapper", 4, "ngIf"], [1, "clear-cart-wrapper"], ["type", "button", 1, "btn", "btn-tertiary", "clear-cart-btn", 3, "click"]],
      template: function ClearCartComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ClearCartComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.cart$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearCartComponent, [{
    type: Component,
    args: [{
      selector: "cx-clear-cart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="cart$ | async as cart">
  <div *ngIf="cart.totalItems > 0" class="clear-cart-wrapper">
    <button
      #element
      (click)="openDialog($event)"
      class="btn btn-tertiary clear-cart-btn"
      type="button"
    >
      {{ 'clearCart.clearCart' | cxTranslate }}
    </button>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: ViewContainerRef
  }, {
    type: LaunchDialogService
  }], {
    element: [{
      type: ViewChild,
      args: ["element"]
    }]
  });
})();
var ClearCartDialogComponentService = class _ClearCartDialogComponentService {
  constructor(launchDialogService, globalMessageService, activeCartFacade, multiCartFacade, userIdService, eventService) {
    this.launchDialogService = launchDialogService;
    this.globalMessageService = globalMessageService;
    this.activeCartFacade = activeCartFacade;
    this.multiCartFacade = multiCartFacade;
    this.userIdService = userIdService;
    this.eventService = eventService;
  }
  /**
   * Clear the cart by deleting the active cart.
   */
  deleteActiveCart() {
    this.activeCartFacade.getActiveCartId().pipe(withLatestFrom(this.userIdService.getUserId()), take(1), tap(([cartId, userId]) => {
      this.multiCartFacade.deleteCart(cartId, userId);
    }), switchMap(() => merge(this.eventService.get(DeleteCartSuccessEvent).pipe(map(() => true)), this.eventService.get(DeleteCartFailEvent).pipe(map(() => false))).pipe(take(1))), tap(() => this.closeDialog("Close dialog after cart cleared"))).subscribe((success) => {
      this.displayGlobalMessage(success);
    });
  }
  /**
   * Close clear cart modal dialog
   *
   * @param reason to close dialog
   */
  closeDialog(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  /**
   * Display global message after clearing cart.
   * By default, only message displayed is of type `Success`. A negative scenario
   * related to cart has been handled in the occ layer already.
   *
   * @param success result of clear cart action
   */
  displayGlobalMessage(success) {
    if (success) {
      this.globalMessageService.add({
        key: "clearCart.cartClearedSuccessfully"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
  }
  static {
    this.ɵfac = function ClearCartDialogComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClearCartDialogComponentService)(ɵɵinject(LaunchDialogService), ɵɵinject(GlobalMessageService), ɵɵinject(ActiveCartFacade), ɵɵinject(MultiCartFacade), ɵɵinject(UserIdService), ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ClearCartDialogComponentService,
      factory: _ClearCartDialogComponentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearCartDialogComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: GlobalMessageService
  }, {
    type: ActiveCartFacade
  }, {
    type: MultiCartFacade
  }, {
    type: UserIdService
  }, {
    type: EventService
  }], null);
})();
var ClearCartDialogComponent = class _ClearCartDialogComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.close("Cross click");
    }
  }
  constructor(el, clearCartDialogComponentService) {
    this.el = el;
    this.clearCartDialogComponentService = clearCartDialogComponentService;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button.btn-primary",
      focusOnEscape: true
    };
    this.isClearing = false;
    this.iconTypes = ICON_TYPE;
  }
  clearCart() {
    this.isClearing = true;
    this.clearCartDialogComponentService.deleteActiveCart();
  }
  close(reason) {
    this.clearCartDialogComponentService.closeDialog(reason);
  }
  ngOnDestroy() {
    this.close("close dialog on component destroy");
  }
  static {
    this.ɵfac = function ClearCartDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClearCartDialogComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ClearCartDialogComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ClearCartDialogComponent,
      selectors: [["cx-clear-cart-dialog"]],
      hostBindings: function ClearCartDialogComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function ClearCartDialogComponent_click_HostBindingHandler($event) {
            return ctx.handleClick($event);
          });
        }
      },
      standalone: false,
      decls: 5,
      vars: 3,
      consts: [["loading", ""], ["role", "dialog", "aria-labelledby", "dialogTitle", 1, "modal-dialog", "modal-dialog-centered", "cx-clear-cart-dialog", 3, "esc", "cxFocus"], [1, "modal-content", "cx-clear-cart-container"], [4, "ngIf", "ngIfElse"], [1, "modal-header", "cx-clear-cart-header"], ["id", "dialogTitle", 1, "cx-clear-cart-title", "modal-title"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [1, "modal-body", "cx-clear-cart-body"], [1, "clear-cart-msg"], ["role", "alert", 1, "clear-cart-warning"], [1, "cx-clear-cart-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "cx-clear-cart-title", "modal-title"], [1, "cx-spinner"]],
      template: function ClearCartDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 1);
          ɵɵlistener("esc", function ClearCartDialogComponent_Template_div_esc_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.close("Escape clicked"));
          });
          ɵɵelementStart(1, "div", 2);
          ɵɵtemplate(2, ClearCartDialogComponent_ng_container_2_Template, 25, 22, "ng-container", 3);
          ɵɵelementEnd()();
          ɵɵtemplate(3, ClearCartDialogComponent_ng_template_3_Template, 6, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r4 = ɵɵreference(4);
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", !ctx.isClearing)("ngIfElse", loading_r4);
        }
      },
      dependencies: [NgIf, SpinnerComponent, IconComponent, FocusDirective, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearCartDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-clear-cart-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
  class="modal-dialog modal-dialog-centered cx-clear-cart-dialog"
  role="dialog"
  aria-labelledby="dialogTitle"
>
  <div class="modal-content cx-clear-cart-container">
    <ng-container *ngIf="!isClearing; else loading">
      <!-- Modal Header -->
      <div class="modal-header cx-clear-cart-header">
        <h3 id="dialogTitle" class="cx-clear-cart-title modal-title">
          {{ 'clearCart.clearCart' | cxTranslate }}
        </h3>

        <button
          (click)="close('Close Clear Cart Dialog')"
          [attr.aria-label]="'common.close' | cxTranslate"
          class="close"
          type="button"
          title="{{ 'common.close' | cxTranslate }}"
        >
          <span aria-hidden="true">
            <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
          </span>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body cx-clear-cart-body">
        <div class="clear-cart-msg">
          {{ 'clearCart.allItemsWillBeRemoved' | cxTranslate }}
        </div>
        <div class="clear-cart-warning" role="alert">
          {{ 'clearCart.areYouSureToClearCart' | cxTranslate }}
        </div>
        <div>
          <div class="cx-clear-cart-footer">
            <button
              (click)="close('Cancel Clear Cart')"
              class="btn btn-secondary"
              type="button"
            >
              {{ 'common.cancel' | cxTranslate }}
            </button>
            <button (click)="clearCart()" class="btn btn-primary" type="button">
              {{ 'clearCart.clearCart' | cxTranslate }}
            </button>
          </div>
        </div>
      </div>
    </ng-container>
  </div>
</div>

<ng-template #loading>
  <div class="modal-header cx-clear-cart-header">
    <h2 class="cx-clear-cart-title modal-title">
      {{ 'clearCart.clearingCart' | cxTranslate }}
    </h2>
  </div>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ClearCartDialogComponentService
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ClearCartDialogModule = class _ClearCartDialogModule {
  static {
    this.ɵfac = function ClearCartDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClearCartDialogModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ClearCartDialogModule,
      declarations: [ClearCartDialogComponent],
      imports: [CommonModule, SpinnerModule, I18nModule, IconModule, KeyboardFocusModule, FeaturesConfigModule],
      exports: [ClearCartDialogComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, SpinnerModule, I18nModule, IconModule, KeyboardFocusModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearCartDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SpinnerModule, I18nModule, IconModule, KeyboardFocusModule, FeaturesConfigModule],
      declarations: [ClearCartDialogComponent],
      exports: [ClearCartDialogComponent]
    }]
  }], null, null);
})();
var defaultClearCartLayoutConfig = {
  launch: {
    CLEAR_CART: {
      inline: true,
      component: ClearCartDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var ClearCartModule = class _ClearCartModule {
  static {
    this.ɵfac = function ClearCartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClearCartModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ClearCartModule,
      declarations: [ClearCartComponent],
      imports: [CommonModule, I18nModule, ClearCartDialogModule],
      exports: [ClearCartComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ClearCartComponent: {
            component: ClearCartComponent
          }
        }
      }), provideDefaultConfig(defaultClearCartLayoutConfig)],
      imports: [CommonModule, I18nModule, ClearCartDialogModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClearCartModule, [{
    type: NgModule,
    args: [{
      declarations: [ClearCartComponent],
      exports: [ClearCartComponent],
      imports: [CommonModule, I18nModule, ClearCartDialogModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ClearCartComponent: {
            component: ClearCartComponent
          }
        }
      }), provideDefaultConfig(defaultClearCartLayoutConfig)]
    }]
  }], null, null);
})();
var CartValidationWarningsComponent = class _CartValidationWarningsComponent {
  constructor(cartValidationFacade) {
    this.cartValidationFacade = cartValidationFacade;
    this.iconTypes = ICON_TYPE;
    this.visibleWarnings = {};
    this.cartModifications$ = this.cartValidationFacade.getValidationResults().pipe(map((modificationList) => {
      const result = modificationList.filter((modification) => modification.statusCode === CartValidationStatusCode.NO_STOCK);
      result.forEach((modification) => {
        if (modification.entry?.product?.code) {
          this.visibleWarnings[modification.entry.product.code] = true;
        }
      });
      return result;
    }));
  }
  removeMessage(cartModification) {
    if (cartModification.entry?.product?.code) {
      this.visibleWarnings[cartModification.entry.product.code] = false;
    }
  }
  static {
    this.ɵfac = function CartValidationWarningsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartValidationWarningsComponent)(ɵɵdirectiveInject(CartValidationFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CartValidationWarningsComponent,
      selectors: [["cx-cart-validation-warnings"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"], ["class", "alert alert-danger", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert-icon"], [3, "type"], [3, "routerLink"], ["type", "button", 1, "close", 3, "click", "title"]],
      template: function CartValidationWarningsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CartValidationWarningsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ɵɵpipeBind1(1, 1, ctx.cartModifications$));
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, IconComponent, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartValidationWarningsComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-validation-warnings",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngFor="let cartModification of cartModifications$ | async">
  <div
    class="alert alert-danger"
    *ngIf="visibleWarnings[cartModification.entry.product.code]"
  >
    <span class="alert-icon">
      <cx-icon [type]="iconTypes.ERROR"></cx-icon>
    </span>
    <span>
      <a
        [routerLink]="
          { cxRoute: 'product', params: cartModification.entry.product } | cxUrl
        "
      >
        {{ cartModification.entry.product.name }}
      </a>
      {{ 'validation.productOutOfStock' | cxTranslate }}
    </span>

    <button
      class="close"
      type="button"
      title="{{ 'common.close' | cxTranslate }}"
      [attr.aria-label]="'common.close' | cxTranslate"
      (click)="removeMessage(cartModification)"
    >
      <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
    </button>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: CartValidationFacade
  }], null);
})();
var CartDetailsComponent = class _CartDetailsComponent {
  constructor(activeCartService, selectiveCartService, authService, routingService, cartConfig) {
    this.activeCartService = activeCartService;
    this.selectiveCartService = selectiveCartService;
    this.authService = authService;
    this.routingService = routingService;
    this.cartConfig = cartConfig;
    this.loggedIn = false;
    this.promotionLocation = PromotionLocation.ActiveCart;
  }
  ngOnInit() {
    this.cart$ = this.activeCartService.getActive();
    this.entries$ = this.activeCartService.getEntries().pipe(filter((entries) => entries.length > 0));
    this.selectiveCartEnabled = this.cartConfig.isSelectiveCartEnabled();
    this.cartLoaded$ = combineLatest([this.activeCartService.isStable(), this.selectiveCartEnabled ? this.selectiveCartService.isStable() : of(false), this.authService.isUserLoggedIn()]).pipe(tap(([, , loggedIn]) => this.loggedIn = loggedIn), map(([cartLoaded, sflLoaded, loggedIn]) => loggedIn && this.selectiveCartEnabled ? cartLoaded && sflLoaded : cartLoaded));
  }
  saveForLater(item) {
    if (this.loggedIn) {
      this.activeCartService.removeEntry(item);
      this.selectiveCartService.addEntry(item.product?.code ?? "", item.quantity ?? 0);
    } else {
      this.routingService.go({
        cxRoute: "login"
      });
    }
  }
  static {
    this.ɵfac = function CartDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartDetailsComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(SelectiveCartFacade), ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(CartConfigService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CartDetailsComponent,
      selectors: [["cx-cart-details"]],
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [["saveForLaterBtn", ""], [4, "ngIf"], ["class", "cart-details-wrapper", 4, "ngIf"], [1, "cart-details-wrapper"], [1, "cx-total"], [3, "promotions"], [3, "items", "cartIsLoading", "promotionLocation", "options"], ["class", "btn btn-tertiary cx-sfl-btn", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-tertiary", "cx-sfl-btn", 3, "click", "disabled"]],
      template: function CartDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CartDetailsComponent_ng_container_0_Template, 3, 3, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, CartDetailsComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.cart$));
        }
      },
      dependencies: [CartItemListComponent, NgIf, PromotionsComponent, CartValidationWarningsComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="cart$ | async as cart">
  <ng-container *ngIf="entries$ | async as entries">
    <div *ngIf="cart.totalItems > 0" class="cart-details-wrapper">
      <cx-cart-validation-warnings></cx-cart-validation-warnings>

      <h2 class="cx-total">
        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}
      </h2>

      <cx-promotions
        [promotions]="
          (cart.appliedOrderPromotions || []).concat(
            cart.potentialOrderPromotions || []
          )
        "
      ></cx-promotions>

      <cx-cart-item-list
        [items]="entries"
        [cartIsLoading]="!(cartLoaded$ | async)"
        [promotionLocation]="promotionLocation"
        [options]="{
          isSaveForLater: false,
          optionalBtn: saveForLaterBtn,
        }"
      ></cx-cart-item-list>
    </div>
  </ng-container>
</ng-container>

<ng-template let-ctx #saveForLaterBtn>
  <button
    *ngIf="selectiveCartEnabled"
    class="btn btn-tertiary cx-sfl-btn"
    [disabled]="ctx.loading"
    (click)="saveForLater(ctx.item)"
    type="button"
  >
    {{ 'saveForLaterItems.saveForLater' | cxTranslate }}
  </button>
</ng-template>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: SelectiveCartFacade
  }, {
    type: AuthService
  }, {
    type: RoutingService
  }, {
    type: CartConfigService
  }], null);
})();
var CartValidationWarningsModule = class _CartValidationWarningsModule {
  static {
    this.ɵfac = function CartValidationWarningsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartValidationWarningsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartValidationWarningsModule,
      declarations: [CartValidationWarningsComponent],
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, IconModule],
      exports: [CartValidationWarningsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartValidationWarningsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, IconModule],
      exports: [CartValidationWarningsComponent],
      declarations: [CartValidationWarningsComponent]
    }]
  }], null, null);
})();
var CartDetailsModule = class _CartDetailsModule {
  static {
    this.ɵfac = function CartDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartDetailsModule,
      declarations: [CartDetailsComponent],
      imports: [CartSharedModule, CommonModule, CartCouponModule, RouterModule, UrlModule, PromotionsModule, I18nModule, CartValidationWarningsModule],
      exports: [CartDetailsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartComponent: {
            component: CartDetailsComponent
          }
        }
      })],
      imports: [CartSharedModule, CommonModule, CartCouponModule, RouterModule, UrlModule, PromotionsModule, I18nModule, CartValidationWarningsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CartSharedModule, CommonModule, CartCouponModule, RouterModule, UrlModule, PromotionsModule, I18nModule, CartValidationWarningsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartComponent: {
            component: CartDetailsComponent
          }
        }
      })],
      declarations: [CartDetailsComponent],
      exports: [CartDetailsComponent]
    }]
  }], null, null);
})();
var CartPageLayoutHandler = class _CartPageLayoutHandler {
  constructor(activeCartService, selectiveCartService, cartConfig) {
    this.activeCartService = activeCartService;
    this.selectiveCartService = selectiveCartService;
    this.cartConfig = cartConfig;
  }
  handle(slots$, pageTemplate, section) {
    if (pageTemplate === "CartPageTemplate" && !section) {
      return combineLatest([slots$, this.activeCartService.getActive(), this.getSelectiveCart(), this.activeCartService.getLoading()]).pipe(map(([slots, cart, selectiveCart, loadingCart]) => {
        const exclude = (arr, args) => arr.filter((item) => args.every((arg) => arg !== item));
        return isEmpty(cart) && loadingCart ? exclude(slots, ["TopContent", "CenterRightContentSlot", "EmptyCartMiddleContent"]) : cart.totalItems ? exclude(slots, ["EmptyCartMiddleContent"]) : selectiveCart?.totalItems ? exclude(slots, ["EmptyCartMiddleContent", "CenterRightContentSlot"]) : exclude(slots, ["TopContent", "CenterRightContentSlot"]);
      }));
    }
    return slots$;
  }
  getSelectiveCart() {
    return this.cartConfig.isSelectiveCartEnabled() ? this.selectiveCartService.getCart().pipe(startWith(null)) : of({});
  }
  static {
    this.ɵfac = function CartPageLayoutHandler_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartPageLayoutHandler)(ɵɵinject(ActiveCartFacade), ɵɵinject(SelectiveCartFacade), ɵɵinject(CartConfigService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CartPageLayoutHandler,
      factory: _CartPageLayoutHandler.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartPageLayoutHandler, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: SelectiveCartFacade
  }, {
    type: CartConfigService
  }], null);
})();
var CartProceedToCheckoutComponent = class _CartProceedToCheckoutComponent {
  constructor(router, cd) {
    this.router = router;
    this.cd = cd;
    this.cartValidationInProgress = false;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.cartValidationInProgress = false;
        this.cd?.markForCheck();
      }
    }));
  }
  disableButtonWhileNavigation() {
    this.cartValidationInProgress = true;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function CartProceedToCheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartProceedToCheckoutComponent)(ɵɵdirectiveInject(Router), ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CartProceedToCheckoutComponent,
      selectors: [["cx-cart-proceed-to-checkout"]],
      standalone: false,
      decls: 4,
      vars: 11,
      consts: [["tabindex", "-1", 3, "clickEvent", "disabled", "loading", "routerLink"]],
      template: function CartProceedToCheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "cx-progress-button", 0);
          ɵɵpipe(1, "cxUrl");
          ɵɵlistener("clickEvent", function CartProceedToCheckoutComponent_Template_cx_progress_button_clickEvent_0_listener() {
            return ctx.disableButtonWhileNavigation();
          });
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassMap("btn btn-primary btn-block");
          ɵɵproperty("disabled", ctx.cartValidationInProgress)("loading", ctx.cartValidationInProgress)("routerLink", ɵɵpipeBind1(1, 6, ɵɵpureFunction0(10, _c14)));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 8, ctx.cartValidationInProgress ? "validation.inProgress" : "cartDetails.proceedToCheckout"), "\n");
        }
      },
      dependencies: [ProgressButtonComponent, RouterLink, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartProceedToCheckoutComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-proceed-to-checkout",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<cx-progress-button
  (clickEvent)="disableButtonWhileNavigation()"
  [class]="'btn btn-primary btn-block'"
  [disabled]="cartValidationInProgress"
  [loading]="cartValidationInProgress"
  [routerLink]="{ cxRoute: 'checkout' } | cxUrl"
  tabindex="-1"
>
  {{
    (cartValidationInProgress
      ? 'validation.inProgress'
      : 'cartDetails.proceedToCheckout'
    ) | cxTranslate
  }}
</cx-progress-button>
`
    }]
  }], () => [{
    type: Router
  }, {
    type: ChangeDetectorRef
  }], null);
})();
var CartProceedToCheckoutModule = class _CartProceedToCheckoutModule {
  static {
    this.ɵfac = function CartProceedToCheckoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartProceedToCheckoutModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartProceedToCheckoutModule,
      declarations: [CartProceedToCheckoutComponent],
      imports: [CommonModule, ProgressButtonModule, RouterModule, I18nModule, UrlModule],
      exports: [CartProceedToCheckoutComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartProceedToCheckoutComponent: {
            component: CartProceedToCheckoutComponent
          }
        }
      })],
      imports: [CommonModule, ProgressButtonModule, RouterModule, I18nModule, UrlModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartProceedToCheckoutModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ProgressButtonModule, RouterModule, I18nModule, UrlModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartProceedToCheckoutComponent: {
            component: CartProceedToCheckoutComponent
          }
        }
      })],
      declarations: [CartProceedToCheckoutComponent],
      exports: [CartProceedToCheckoutComponent]
    }]
  }], null, null);
})();
var CartTotalsComponent = class _CartTotalsComponent {
  constructor(activeCartService) {
    this.activeCartService = activeCartService;
  }
  ngOnInit() {
    this.cart$ = this.activeCartService.getActive();
  }
  static {
    this.ɵfac = function CartTotalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartTotalsComponent)(ɵɵdirectiveInject(ActiveCartFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CartTotalsComponent,
      selectors: [["cx-cart-totals"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [3, "cart"]],
      template: function CartTotalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CartTotalsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.cart$));
        }
      },
      dependencies: [NgIf, OrderSummaryComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartTotalsComponent, [{
    type: Component,
    args: [{
      selector: "cx-cart-totals",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-container *ngIf="cart$ | async as cart">\n  <cx-order-summary [cart]="cart"></cx-order-summary>\n</ng-container>\n'
    }]
  }], () => [{
    type: ActiveCartFacade
  }], null);
})();
var CartTotalsModule = class _CartTotalsModule {
  static {
    this.ɵfac = function CartTotalsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartTotalsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartTotalsModule,
      declarations: [CartTotalsComponent],
      imports: [CommonModule, CartSharedModule],
      exports: [CartTotalsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartTotalsComponent: {
            component: CartTotalsComponent
          }
        }
      })],
      imports: [CommonModule, CartSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartTotalsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CartSharedModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CartTotalsComponent: {
            component: CartTotalsComponent
          }
        }
      })],
      declarations: [CartTotalsComponent],
      exports: [CartTotalsComponent]
    }]
  }], null, null);
})();
var ActiveCartOrderEntriesContext = class _ActiveCartOrderEntriesContext {
  constructor(importInfoService, activeCartFacade) {
    this.importInfoService = importInfoService;
    this.activeCartFacade = activeCartFacade;
    this.type = OrderEntriesSource.ACTIVE_CART;
  }
  addEntries(products) {
    return this.add(products).pipe(switchMap((cartId) => this.importInfoService.getResults(cartId)), take(products.length));
  }
  getEntries() {
    return this.activeCartFacade.getEntries();
  }
  add(products) {
    this.activeCartFacade.addEntries(this.mapProductsToOrderEntries(products));
    return this.activeCartFacade.getActiveCartId();
  }
  mapProductsToOrderEntries(products) {
    return products.map((product) => ({
      product: {
        code: product.productCode
      },
      quantity: product.quantity
    }));
  }
  static {
    this.ɵfac = function ActiveCartOrderEntriesContext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActiveCartOrderEntriesContext)(ɵɵinject(ProductImportInfoService), ɵɵinject(ActiveCartFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ActiveCartOrderEntriesContext,
      factory: _ActiveCartOrderEntriesContext.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActiveCartOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductImportInfoService
  }, {
    type: ActiveCartFacade
  }], null);
})();
var SaveForLaterComponent = class _SaveForLaterComponent {
  constructor(cmsService, cartService, selectiveCartService) {
    this.cmsService = cmsService;
    this.cartService = cartService;
    this.selectiveCartService = selectiveCartService;
    this.CartLocation = PromotionLocation;
  }
  ngOnInit() {
    this.isCartEmpty$ = this.cartService.getActive().pipe(map((cart) => !(cart && cart.totalItems && cart.totalItems > 0)));
    this.saveForLater$ = this.selectiveCartService.getCart();
    this.entries$ = this.selectiveCartService.getEntries().pipe(filter((entries) => entries.length > 0));
    this.cartLoaded$ = combineLatest([this.cartService.isStable(), this.selectiveCartService.isStable()]).pipe(map(([cartLoaded, sflLoaded]) => cartLoaded && sflLoaded));
    this.data$ = this.cmsService.getComponentData("EmptyCartParagraphComponent");
  }
  moveToCart(item) {
    this.selectiveCartService.removeEntry(item);
    this.cartService.addEntry(item.product?.code ?? "", item.quantity ?? 0);
  }
  static {
    this.ɵfac = function SaveForLaterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SaveForLaterComponent)(ɵɵdirectiveInject(CmsService), ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(SelectiveCartFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SaveForLaterComponent,
      selectors: [["cx-save-for-later"]],
      standalone: false,
      decls: 6,
      vars: 6,
      consts: [["moveToCartBtn", ""], [4, "ngIf"], ["class", "cx-empty-cart-info", 3, "innerHTML", 4, "ngIf"], [1, "cx-empty-cart-info", 3, "innerHTML"], ["class", "cart-details-wrapper", 4, "ngIf"], [1, "cart-details-wrapper"], [1, "cx-total"], [3, "items", "readonly", "cartIsLoading", "promotionLocation", "options"], ["type", "button", 1, "btn", "btn-tertiary", "cx-sfl-btn", 3, "click", "disabled"]],
      template: function SaveForLaterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SaveForLaterComponent_ng_container_0_Template, 3, 3, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, SaveForLaterComponent_ng_container_2_Template, 3, 3, "ng-container", 1);
          ɵɵpipe(3, "async");
          ɵɵtemplate(4, SaveForLaterComponent_ng_template_4_Template, 3, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.isCartEmpty$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx.saveForLater$));
        }
      },
      dependencies: [NgIf, CartItemListComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveForLaterComponent, [{
    type: Component,
    args: [{
      selector: "cx-save-for-later",
      standalone: false,
      template: `<ng-container *ngIf="isCartEmpty$ | async">
  <p
    *ngIf="data$ | async as data"
    [innerHTML]="data.content"
    class="cx-empty-cart-info"
  ></p>
</ng-container>

<ng-container *ngIf="saveForLater$ | async as saveForLater">
  <ng-container *ngIf="entries$ | async as entries">
    <div *ngIf="saveForLater.totalItems > 0" class="cart-details-wrapper">
      <div class="cx-total">
        {{
          'saveForLaterItems.itemTotal'
            | cxTranslate: { count: saveForLater.totalItems }
        }}
      </div>
      <cx-cart-item-list
        [items]="entries"
        [readonly]="false"
        [cartIsLoading]="!(cartLoaded$ | async)"
        [promotionLocation]="CartLocation.SaveForLater"
        [options]="{
          isSaveForLater: true,
          optionalBtn: moveToCartBtn,
        }"
      ></cx-cart-item-list>
    </div>
  </ng-container>
</ng-container>

<ng-template let-ctx #moveToCartBtn>
  <button
    class="btn btn-tertiary cx-sfl-btn"
    [disabled]="ctx.loading"
    (click)="moveToCart(ctx.item)"
    type="button"
  >
    {{ 'saveForLaterItems.moveToCart' | cxTranslate }}
  </button>
</ng-template>
`
    }]
  }], () => [{
    type: CmsService
  }, {
    type: ActiveCartFacade
  }, {
    type: SelectiveCartFacade
  }], null);
})();
var SaveForLaterModule = class _SaveForLaterModule {
  static {
    this.ɵfac = function SaveForLaterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SaveForLaterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SaveForLaterModule,
      declarations: [SaveForLaterComponent],
      imports: [CommonModule, I18nModule, CartSharedModule],
      exports: [SaveForLaterComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          SaveForLaterComponent: {
            component: SaveForLaterComponent
          }
        }
      })],
      imports: [CommonModule, I18nModule, CartSharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveForLaterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, CartSharedModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          SaveForLaterComponent: {
            component: SaveForLaterComponent
          }
        }
      })],
      declarations: [SaveForLaterComponent],
      exports: [SaveForLaterComponent]
    }]
  }], null, null);
})();
var CartBaseComponentsModule = class _CartBaseComponentsModule {
  static {
    this.ɵfac = function CartBaseComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartBaseComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartBaseComponentsModule,
      imports: [CommonModule, CartDetailsModule, CartProceedToCheckoutModule, CartTotalsModule, CartSharedModule, SaveForLaterModule, ClearCartModule, OutletModule],
      exports: [CartDetailsModule, CartProceedToCheckoutModule, CartTotalsModule, CartSharedModule, ClearCartModule, AddedToCartDialogModule, SaveForLaterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: PAGE_LAYOUT_HANDLER,
        useExisting: CartPageLayoutHandler,
        multi: true
      }, {
        provide: ActiveCartOrderEntriesContextToken,
        useExisting: ActiveCartOrderEntriesContext
      }],
      imports: [CommonModule, CartDetailsModule, CartProceedToCheckoutModule, CartTotalsModule, CartSharedModule, SaveForLaterModule, ClearCartModule, OutletModule.forChild(), CartDetailsModule, CartProceedToCheckoutModule, CartTotalsModule, CartSharedModule, ClearCartModule, AddedToCartDialogModule, SaveForLaterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartBaseComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CartDetailsModule, CartProceedToCheckoutModule, CartTotalsModule, CartSharedModule, SaveForLaterModule, ClearCartModule, OutletModule.forChild()],
      exports: [CartDetailsModule, CartProceedToCheckoutModule, CartTotalsModule, CartSharedModule, ClearCartModule, AddedToCartDialogModule, SaveForLaterModule],
      providers: [{
        provide: PAGE_LAYOUT_HANDLER,
        useExisting: CartPageLayoutHandler,
        multi: true
      }, {
        provide: ActiveCartOrderEntriesContextToken,
        useExisting: ActiveCartOrderEntriesContext
      }]
    }]
  }], null, null);
})();
var CartValidationComponentsModule = class _CartValidationComponentsModule {
  static {
    this.ɵfac = function CartValidationComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CartValidationComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CartValidationComponentsModule,
      imports: [CartValidationWarningsModule, CartItemValidationWarningModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CartValidationWarningsModule, CartItemValidationWarningModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartValidationComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CartValidationWarningsModule, CartItemValidationWarningModule],
      providers: []
    }]
  }], null, null);
})();

export {
  AbstractOrderContext,
  AbstractOrderContextDirective,
  AbstractOrderContextModule,
  CartItemListComponentService,
  CartBaseComponentsModule
};
//# sourceMappingURL=chunk-ZPMY6JFV.js.map
