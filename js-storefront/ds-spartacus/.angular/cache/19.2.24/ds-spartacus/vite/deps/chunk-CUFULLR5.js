import {
  CommonConfigurator,
  CommonConfiguratorUtilsService,
  ConfiguratorModelUtils,
  ConfiguratorProductScope,
  ConfiguratorRouter,
  ConfiguratorRouterExtractorService,
  ConfiguratorType
} from "./chunk-2H7NFAMW.js";
import {
  CheckoutQueryFacade
} from "./chunk-X6DUCLWC.js";
import {
  OrderHistoryFacade
} from "./chunk-UIW5AQFA.js";
import {
  MULTI_CART_DATA,
  cartGroup_actions
} from "./chunk-Q7WXRDFA.js";
import {
  ActiveCartFacade,
  CART_MODIFICATION_NORMALIZER,
  MultiCartFacade
} from "./chunk-KEAKWHYV.js";
import {
  BREAKPOINT,
  BreakpointService,
  CarouselComponent,
  CarouselModule,
  DIALOG_TYPE,
  DirectionMode,
  DirectionService,
  FocusDirective,
  HamburgerMenuComponent,
  HamburgerMenuModule,
  HamburgerMenuService,
  ICON_TYPE,
  IconComponent,
  IconModule,
  IntersectionService,
  ItemCounterComponent,
  ItemCounterModule,
  KeyboardFocusModule,
  KeyboardFocusService,
  LAUNCH_CALLER,
  LaunchDialogService,
  MediaComponent,
  MediaModule,
  PopoverDirective,
  PopoverModule,
  ProductCarouselItemComponent,
  ProductCarouselModule,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import {
  Config,
  ConfigModule,
  ConverterService,
  CxNumericPipe,
  EventService,
  FeatureConfigService,
  FeatureDirective,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LanguageService,
  LanguageSetEvent,
  LoggerService,
  LogoutEvent,
  OCC_HTTP_TOKEN,
  ObjectComparisonUtils,
  OccConfig,
  OccEndpointsService,
  ProductScope,
  ProductService,
  RoutingService,
  StateModule,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserIdService,
  WindowRef,
  provideDefaultConfig,
  tryNormalizeHttpError,
  useFeatureStyles,
  utilsGroup
} from "./chunk-VIVIQI6G.js";
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
import {
  HttpClient,
  HttpContext,
  HttpHeaders
} from "./chunk-2A6OHZCE.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormControlDirective,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgSelectOption,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  UntypedFormControl,
  ɵNgSelectMultipleOption
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  Location,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  NumberSymbol,
  formatNumber,
  getLocaleId,
  getLocaleNumberSymbol
} from "./chunk-S7KROBXW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  inject,
  isDevMode,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpropertyInterpolate1,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  merge
} from "./chunk-FBVS4YZX.js";
import {
  BehaviorSubject,
  EMPTY,
  ReplaySubject,
  catchError,
  combineLatest,
  debounce,
  delay,
  delayWhen,
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  filter,
  first,
  map,
  mergeMap,
  of,
  shareReplay,
  skip,
  take,
  tap,
  timer
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product-configurator/fesm2022/spartacus-product-configurator-rulebased.mjs
function ConfiguratorAddToCartButtonComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "label");
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(7, "cx-item-counter", 7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵpipe(10, "cxTranslate");
    ɵɵpipe(11, "cxTranslate");
    ɵɵlistener("click", function ConfiguratorAddToCartButtonComponent_ng_container_0_ng_container_1_ng_container_2_Template_button_click_8_listener() {
      ɵɵrestoreView(_r1);
      const container_r2 = ɵɵnextContext(2).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onAddToCart(container_r2.configuration, container_r2.routerData));
    });
    ɵɵelement(12, "cx-icon", 9);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const container_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 6, "configurator.addToCart.quantity"));
    ɵɵadvance(2);
    ɵɵproperty("control", ctx_r2.quantityControl);
    ɵɵadvance();
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(9, 8, ctx_r2.getButtonResourceKey(container_r2.routerData, container_r2.configuration)));
    ɵɵproperty("disabled", ctx_r2.addToCartButtonDisabled);
    ɵɵattribute("aria-label", ɵɵpipeBind1(10, 10, ctx_r2.getButtonResourceKey(container_r2.routerData, container_r2.configuration)) + " " + ɵɵpipeBind2(11, 12, "configurator.a11y.addToCartPrices", ctx_r2.extractConfigPrices(container_r2.configuration)));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r2.iconType.CART_PLUS);
  }
}
function ConfiguratorAddToCartButtonComponent_ng_container_0_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 10);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "cxTranslate");
    ɵɵpipe(4, "cxTranslate");
    ɵɵlistener("click", function ConfiguratorAddToCartButtonComponent_ng_container_0_ng_container_1_ng_container_3_Template_button_click_1_listener() {
      ɵɵrestoreView(_r4);
      const container_r2 = ɵɵnextContext(2).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onAddToCart(container_r2.configuration, container_r2.routerData));
    });
    ɵɵtext(5);
    ɵɵpipe(6, "async");
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const container_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind1(3, 4, ctx_r2.getButtonResourceKey(container_r2.routerData, container_r2.configuration, ɵɵpipeBind1(2, 2, ctx_r2.isQuoteCartActive()))) + " " + ɵɵpipeBind2(4, 6, "configurator.a11y.addToCartPrices", ctx_r2.extractConfigPrices(container_r2.configuration)));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 11, ctx_r2.getButtonResourceKey(container_r2.routerData, container_r2.configuration, ɵɵpipeBind1(6, 9, ctx_r2.isQuoteCartActive()))), " ");
  }
}
function ConfiguratorAddToCartButtonComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵtemplate(2, ConfiguratorAddToCartButtonComponent_ng_container_0_ng_container_1_ng_container_2_Template, 13, 15, "ng-container", 1)(3, ConfiguratorAddToCartButtonComponent_ng_container_0_ng_container_1_ng_container_3_Template, 8, 13, "ng-container", 1);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const container_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.isCartEntry(container_r2.routerData));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isCartEntry(container_r2.routerData));
  }
}
function ConfiguratorAddToCartButtonComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 11)(1, "button", 12);
    ɵɵlistener("click", function ConfiguratorAddToCartButtonComponent_ng_container_0_ng_template_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.leaveConfigurationOverview());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "configurator.addToCart.buttonClose"), " ");
  }
}
function ConfiguratorAddToCartButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAddToCartButtonComponent_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 2)(2, ConfiguratorAddToCartButtonComponent_ng_container_0_ng_template_2_Template, 4, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const container_r2 = ctx.ngIf;
    const displayOnly_r6 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !container_r2.routerData.displayOnly)("ngIfElse", displayOnly_r6);
  }
}
function ConfiguratorAttributeFooterComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.attribute.defaultRequiredMessage"), " ");
  }
}
function ConfiguratorAttributeFooterComponent_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.attribute.singleSelectRequiredMessage"), " ");
  }
}
function ConfiguratorAttributeFooterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵelement(3, "cx-icon", 2);
    ɵɵtemplate(4, ConfiguratorAttributeFooterComponent_div_0_ng_container_4_Template, 3, 3, "ng-container", 3)(5, ConfiguratorAttributeFooterComponent_div_0_ng_container_5_Template, 3, 3, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.createAttributeUiKey("attribute-msg", ctx_r0.attribute.name));
    ɵɵattribute("aria-label", ctx_r0.isUserInput(ctx_r0.attribute) ? ɵɵpipeBind1(1, 5, "configurator.attribute.defaultRequiredMessage") : ɵɵpipeBind1(2, 7, "configurator.attribute.singleSelectRequiredMessage"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r0.iconType.ERROR);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isUserInput(ctx_r0.attribute));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isDropDown(ctx_r0.attribute));
  }
}
function ConfiguratorShowMoreComponent_ng_container_0_button_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ... ", ɵɵpipeBind1(2, 1, "configurator.button.less"), "");
  }
}
function ConfiguratorShowMoreComponent_ng_container_0_button_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1("  ... ", ɵɵpipeBind1(1, 1, "configurator.button.more"), "");
  }
}
function ConfiguratorShowMoreComponent_ng_container_0_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function ConfiguratorShowMoreComponent_ng_container_0_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.toggleShowMore());
    });
    ɵɵtemplate(1, ConfiguratorShowMoreComponent_ng_container_0_button_2_ng_container_1_Template, 3, 3, "ng-container", 5)(2, ConfiguratorShowMoreComponent_ng_container_0_button_2_ng_template_2_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const less_r3 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("tabindex", ctx_r1.tabIndex);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showHiddenText)("ngIfElse", less_r3);
  }
}
function ConfiguratorShowMoreComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 2);
    ɵɵtemplate(2, ConfiguratorShowMoreComponent_ng_container_0_button_2_Template, 4, 3, "button", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("innerHTML", ctx_r1.textToShow, ɵɵsanitizeHtml);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showMore);
  }
}
var _c0 = (a0) => ({
  attribute: a0
});
var _c1 = (a0) => ({
  param: a0
});
function ConfiguratorAttributeHeaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelement(1, "cx-icon", 9);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.iconTypes.WARNING);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "configurator.attribute.notVisibleAttributeMsg"), "\n");
  }
}
function ConfiguratorAttributeHeaderComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label", 10);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "cxTranslate");
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementStart(5, "span");
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("cx-required-error", ɵɵpipeBind1(2, 8, ctx_r0.showRequiredMessageForDomainAttribute$));
    ɵɵpropertyInterpolate("id", ctx_r0.createAttributeUiKey("label", ctx_r0.attribute.name));
    ɵɵattribute("aria-label", !ctx_r0.attribute.required ? ɵɵpipeBind2(3, 10, "configurator.a11y.attribute", ɵɵpureFunction1(16, _c0, ctx_r0.attribute.label)) : ɵɵpipeBind2(4, 13, "configurator.a11y.requiredAttribute", ɵɵpureFunction1(18, _c1, ctx_r0.attribute.label)));
    ɵɵadvance(4);
    ɵɵclassProp("cx-required-icon", ctx_r0.attribute.required);
    ɵɵattribute("aria-describedby", ctx_r0.createAttributeUiKey("label", ctx_r0.attribute.name));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.getLabel(ctx_r0.expMode, ctx_r0.attribute.label, ctx_r0.attribute.name));
  }
}
function ConfiguratorAttributeHeaderComponent_ng_container_2_cx_configurator_show_options_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-show-options", 13);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("attributeComponentContext", ctx_r0.attributeComponentContext);
  }
}
function ConfiguratorAttributeHeaderComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 11)(2, "label", 10);
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "cxTranslate");
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementStart(6, "span");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵtemplate(8, ConfiguratorAttributeHeaderComponent_ng_container_2_cx_configurator_show_options_8_Template, 1, 1, "cx-configurator-show-options", 12);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassProp("cx-required-error", ɵɵpipeBind1(3, 9, ctx_r0.showRequiredMessageForDomainAttribute$));
    ɵɵpropertyInterpolate("id", ctx_r0.createAttributeUiKey("label", ctx_r0.attribute.name));
    ɵɵattribute("aria-label", !ctx_r0.attribute.required ? ɵɵpipeBind2(4, 11, "configurator.a11y.attribute", ɵɵpureFunction1(17, _c0, ctx_r0.attribute.label)) : ɵɵpipeBind2(5, 14, "configurator.a11y.requiredAttribute", ɵɵpureFunction1(19, _c1, ctx_r0.attribute.label)));
    ɵɵadvance(4);
    ɵɵclassProp("cx-required-icon", ctx_r0.attribute.required);
    ɵɵattribute("aria-describedby", ctx_r0.createAttributeUiKey("label", ctx_r0.attribute.name));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.getLabel(ctx_r0.expMode, ctx_r0.attribute.label, ctx_r0.attribute.name));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.attribute.domainOnDemand);
  }
}
function ConfiguratorAttributeHeaderComponent_cx_configurator_show_more_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-show-more", 14);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("text", ctx_r0.attribute.description)("textSize", ctx_r0.getAttributeDescriptionLength())("productName", ctx_r0.getLabel(ctx_r0.expMode, ctx_r0.attribute.label, ctx_r0.attribute.name))("tabIndex", 0);
  }
}
function ConfiguratorAttributeHeaderComponent_div_4_cx_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-icon", 9);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("type", ctx_r0.iconTypes.WARNING);
  }
}
function ConfiguratorAttributeHeaderComponent_div_4_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 18);
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function ConfiguratorAttributeHeaderComponent_div_4_ng_container_3_ng_container_1_Template_a_click_1_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.navigateToGroup());
    })("keydown.enter", function ConfiguratorAttributeHeaderComponent_div_4_ng_container_3_ng_container_1_Template_a_keydown_enter_1_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.navigateToGroup());
    });
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind2(2, 2, "configurator.a11y.navigateToConflict", ɵɵpureFunction1(7, _c0, ctx_r0.attribute.label)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 5, ctx_r0.getConflictMessageKey()), " ");
  }
}
function ConfiguratorAttributeHeaderComponent_div_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAttributeHeaderComponent_div_4_ng_container_3_ng_container_1_Template, 5, 9, "ng-container", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    const withoutLink_r3 = ɵɵreference(11);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isNavigationToConflictEnabled())("ngIfElse", withoutLink_r3);
  }
}
function ConfiguratorAttributeHeaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtemplate(2, ConfiguratorAttributeHeaderComponent_div_4_cx_icon_2_Template, 1, 1, "cx-icon", 16)(3, ConfiguratorAttributeHeaderComponent_div_4_ng_container_3_Template, 2, 2, "ng-container", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const conflictGroup_r4 = ɵɵreference(9);
    ɵɵpropertyInterpolate("id", ctx_r0.createAttributeUiKey("attribute-msg", ctx_r0.attribute.name));
    ɵɵattribute("aria-live", ctx_r0.isConflictResolutionActive() ? "assertive" : "off")("aria-atomic", ctx_r0.isConflictResolutionActive() ? true : false)("role", ctx_r0.isConflictResolutionActive() ? "alert" : null)("aria-label", ctx_r0.isConflictResolutionActive() ? ɵɵpipeBind1(1, 8, "configurator.a11y.conflictDetected") : "");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.isAttributeGroup());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isAttributeGroup())("ngIfElse", conflictGroup_r4);
  }
}
function ConfiguratorAttributeHeaderComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵpipe(1, "cxTranslate");
    ɵɵelement(2, "cx-icon", 20);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.createAttributeUiKey("attribute-msg", ctx_r0.attribute.name));
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 4, ctx_r0.getRequiredMessageKey()));
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r0.iconTypes.ERROR);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 6, ctx_r0.getRequiredMessageKey()), "\n");
  }
}
function ConfiguratorAttributeHeaderComponent_img_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 21);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("src", ctx_r0.image == null ? null : ctx_r0.image.url, ɵɵsanitizeUrl);
    ɵɵpropertyInterpolate("alt", ctx_r0.image == null ? null : ctx_r0.image.altText);
    ɵɵpropertyInterpolate("title", ctx_r0.image == null ? null : ctx_r0.image.altText);
  }
}
function ConfiguratorAttributeHeaderComponent_ng_template_8_a_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 18);
    ɵɵlistener("click", function ConfiguratorAttributeHeaderComponent_ng_template_8_a_0_Template_a_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.navigateToGroup());
    })("keydown.enter", function ConfiguratorAttributeHeaderComponent_ng_template_8_a_0_Template_a_keydown_enter_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.navigateToGroup());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r0.getConflictMessageKey()), " ");
  }
}
function ConfiguratorAttributeHeaderComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfiguratorAttributeHeaderComponent_ng_template_8_a_0_Template, 3, 3, "a", 22);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.isNavigationToGroupEnabled);
  }
}
function ConfiguratorAttributeHeaderComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r0.getConflictMessageKey()), " ");
  }
}
function ConfiguratorPriceComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.styleClass);
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 3, "configurator.a11y.valueSurcharge"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.price, " ");
  }
}
function ConfiguratorPriceComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxNumeric");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 3);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 3, "configurator.a11y.valueSurcharge"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.quantityWithPrice(ɵɵpipeBind1(4, 5, ctx_r0.formula == null ? null : ctx_r0.formula.quantity)), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.priceTotal);
  }
}
function ConfiguratorPriceComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorPriceComponent_ng_container_0_ng_container_1_Template, 4, 5, "ng-container", 0)(2, ConfiguratorPriceComponent_ng_container_0_ng_container_2_Template, 7, 7, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.displayPriceOnly());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.displayQuantityAndPrice());
  }
}
var _c2 = (a0) => ({
  "cx-product-card-selected": a0
});
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "configurator.attribute.id"), ": ", product_r1.code, " ");
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_cx_configurator_show_more_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-show-more", 14);
  }
  if (rf & 2) {
    const product_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("text", product_r1.description)("textSize", 45)("productName", product_r1.code)("tabIndex", 0);
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_cx_configurator_attribute_quantity_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-configurator-attribute-quantity", 23);
    ɵɵlistener("changeQuantity", function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_cx_configurator_attribute_quantity_3_Template_cx_configurator_attribute_quantity_changeQuantity_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onChangeQuantity($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("quantityOptions", ctx_r2.extractQuantityParameters());
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 27);
    ɵɵlistener("click", function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_container_1_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r2.onHandleDeselect());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r1 = ɵɵnextContext(4).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("cxFocus", ctx_r2.focusConfig);
    ɵɵattribute("aria-label", ctx_r2.getAriaLabelMultiSelected(product_r1))("aria-describedby", ctx_r2.createAttributeUiKey("label", ctx_r2.productCardOptions.attributeName));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 4, "configurator.button.remove"), " ");
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 28);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_container_1_ng_template_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r2.onHandleSelect());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r1 = ɵɵnextContext(4).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.productCardOptions.disableAllButtons || ɵɵpipeBind1(1, 5, ctx_r2.loading$))("cxFocus", ctx_r2.focusConfig);
    ɵɵattribute("aria-label", ctx_r2.getAriaLabelMultiUnselected(product_r1))("aria-describedby", ctx_r2.createAttributeUiKey("label", ctx_r2.productCardOptions.attributeName));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 7, "configurator.button.add"), " ");
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_container_1_button_1_Template, 3, 6, "button", 26)(2, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_container_1_ng_template_2_Template, 4, 9, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const select_r6 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.productCardOptions == null ? null : ctx_r2.productCardOptions.productBoundValue == null ? null : ctx_r2.productCardOptions.productBoundValue.selected)("ngIfElse", select_r6);
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 28);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(5);
      return ɵɵresetView(ctx_r2.onHandleSelect());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r1 = ɵɵnextContext(4).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.productCardOptions.disableAllButtons || ɵɵpipeBind1(1, 5, ctx_r2.loading$))("cxFocus", ctx_r2.focusConfig);
    ɵɵattribute("aria-label", ctx_r2.getAriaLabelSingleUnselected(product_r1))("aria-describedby", ctx_r2.createAttributeUiKey("label", ctx_r2.productCardOptions.attributeName));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 7, "configurator.button.select"), " ");
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_ng_template_1_ng_container_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 32);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_ng_template_1_ng_container_0_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext(7);
      return ɵɵresetView(ctx_r2.onHandleDeselect());
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r1 = ɵɵnextContext(6).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r2.productCardOptions.hideRemoveButton || ɵɵpipeBind1(1, 5, ctx_r2.loading$))("cxFocus", ctx_r2.focusConfig);
    ɵɵattribute("aria-label", ctx_r2.getAriaLabelSingleSelected(product_r1))("aria-describedby", ctx_r2.createAttributeUiKey("label", ctx_r2.productCardOptions.attributeName));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 7, "configurator.button.deselect"), " ");
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_ng_template_1_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 33);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r1 = ɵɵnextContext(6).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getAriaLabelSingleSelectedNoButton(product_r1), " ");
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_ng_template_1_ng_container_0_button_1_Template, 4, 9, "button", 30)(2, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_ng_template_1_ng_container_0_span_2_Template, 2, 1, "span", 31);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r2.productCardOptions == null ? null : ctx_r2.productCardOptions.hideRemoveButton));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.productCardOptions == null ? null : ctx_r2.productCardOptions.hideRemoveButton);
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵproperty("ngIf", ctx_r2.isValueCodeDefined(ctx_r2.productCardOptions == null ? null : ctx_r2.productCardOptions.productBoundValue == null ? null : ctx_r2.productCardOptions.productBoundValue.valueCode));
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_button_0_Template, 4, 9, "button", 29)(1, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const deselect_r9 = ɵɵreference(2);
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", !(ctx_r2.productCardOptions == null ? null : ctx_r2.productCardOptions.productBoundValue == null ? null : ctx_r2.productCardOptions.productBoundValue.selected))("ngIfElse", deselect_r9);
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtemplate(1, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_container_1_Template, 4, 2, "ng-container", 25)(2, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_ng_template_2_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const single_r10 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.productCardOptions == null ? null : ctx_r2.productCardOptions.multiSelect)("ngIfElse", single_r10);
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15)(1, "div", 16)(2, "div", 17);
    ɵɵtemplate(3, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_cx_configurator_attribute_quantity_3_Template, 1, 1, "cx-configurator-attribute-quantity", 18);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 19);
    ɵɵelement(5, "cx-configurator-price", 20);
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 21);
    ɵɵtemplate(7, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_div_7_Template, 4, 2, "div", 22);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.showQuantity);
    ɵɵadvance(2);
    ɵɵproperty("formula", ctx_r2.extractPriceFormulaParameters());
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !(ctx_r2.productCardOptions == null ? null : ctx_r2.productCardOptions.singleDropdown));
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 34);
    ɵɵelement(2, "cx-icon", 35);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r2.createAttributeUiKey("attribute-msg", ctx_r2.productCardOptions.attributeName));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "configurator.attribute.deselectionNotPossible"), " ");
  }
}
function ConfiguratorAttributeProductCardComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementStart(3, "div", 5)(4, "div", 6);
    ɵɵelement(5, "cx-media", 7);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 8)(7, "div", 9)(8, "p");
    ɵɵtext(9);
    ɵɵelementEnd()();
    ɵɵtemplate(10, ConfiguratorAttributeProductCardComponent_ng_container_0_div_10_Template, 3, 4, "div", 10)(11, ConfiguratorAttributeProductCardComponent_ng_container_0_cx_configurator_show_more_11_Template, 1, 4, "cx-configurator-show-more", 11);
    ɵɵelementEnd()();
    ɵɵtemplate(12, ConfiguratorAttributeProductCardComponent_ng_container_0_div_12_Template, 8, 3, "div", 12)(13, ConfiguratorAttributeProductCardComponent_ng_container_0_ng_container_13_Template, 5, 4, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const product_r1 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c2, ctx_r2.isProductCardSelected()));
    ɵɵattribute("aria-label", ɵɵpipeBind2(2, 8, "configurator.a11y.itemOfAttribute", ɵɵpureFunction1(13, _c0, ctx_r2.productCardOptions.attributeLabel)));
    ɵɵadvance(4);
    ɵɵproperty("container", product_r1.images == null ? null : product_r1.images.PRIMARY);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", product_r1.name, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", product_r1.code);
    ɵɵadvance();
    ɵɵproperty("ngIf", product_r1.description && product_r1.code);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.productCardOptions.singleDropdown || ctx_r2.hasPriceDisplay());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.showDeselectionNotPossible);
  }
}
var _c3 = (a0) => ({
  key: a0
});
function ConfiguratorAttributeCheckBoxListComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5)(1, "cx-configurator-attribute-quantity", 6);
    ɵɵlistener("changeQuantity", function ConfiguratorAttributeCheckBoxListComponent_div_3_div_1_Template_cx_configurator_attribute_quantity_changeQuantity_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onChangeQuantity($event));
    });
    ɵɵelementEnd();
    ɵɵelement(2, "cx-configurator-price", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("quantityOptions", ctx_r1.extractQuantityParameters(ctx_r1.attribute.quantity, !ctx_r1.attribute.required));
    ɵɵadvance();
    ɵɵproperty("formula", ctx_r1.extractPriceFormulaParameters());
  }
}
function ConfiguratorAttributeCheckBoxListComponent_div_3_ng_container_2_cx_configurator_show_more_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-show-more", 15);
  }
  if (rf & 2) {
    const value_r4 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("text", value_r4.description)("textSize", ctx_r1.getValueDescriptionLength())("productName", ctx_r1.getLabel(ctx_r1.expMode, value_r4.valueDisplay, value_r4.valueCode))("tabIndex", 0);
  }
}
function ConfiguratorAttributeCheckBoxListComponent_div_3_ng_container_2_cx_configurator_attribute_quantity_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-configurator-attribute-quantity", 6);
    ɵɵlistener("changeQuantity", function ConfiguratorAttributeCheckBoxListComponent_div_3_ng_container_2_cx_configurator_attribute_quantity_9_Template_cx_configurator_attribute_quantity_changeQuantity_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r5 = ɵɵnextContext();
      const value_r4 = ctx_r5.$implicit;
      const i_r7 = ctx_r5.index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onChangeValueQuantity($event, value_r4.valueCode, i_r7));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const value_r4 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("quantityOptions", ctx_r1.extractQuantityParameters(value_r4.quantity, ctx_r1.allowZeroValueQuantity));
  }
}
function ConfiguratorAttributeCheckBoxListComponent_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8)(2, "div", 9)(3, "input", 10);
    ɵɵlistener("change", function ConfiguratorAttributeCheckBoxListComponent_div_3_ng_container_2_Template_input_change_3_listener() {
      const value_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onSelect(value_r4.valueCode));
    });
    ɵɵelementEnd();
    ɵɵelementStart(4, "label", 11);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵtemplate(6, ConfiguratorAttributeCheckBoxListComponent_div_3_ng_container_2_cx_configurator_show_more_6_Template, 1, 4, "cx-configurator-show-more", 12);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 13);
    ɵɵelement(8, "cx-configurator-price", 7);
    ɵɵelementEnd()();
    ɵɵtemplate(9, ConfiguratorAttributeCheckBoxListComponent_div_3_ng_container_2_cx_configurator_attribute_quantity_9_Template, 1, 1, "cx-configurator-attribute-quantity", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const value_r4 = ctx.$implicit;
    const i_r7 = ctx.index;
    const changedPrices_r8 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("id", ctx_r1.createAttributeValueIdForConfigurator(ctx_r1.attribute, value_r4.valueCode));
    ɵɵpropertyInterpolate("name", ctx_r1.createAttributeIdForConfigurator(ctx_r1.attribute));
    ɵɵproperty("cxFocus", ɵɵpureFunction1(14, _c3, ctx_r1.attribute.name + "-" + value_r4.name))("value", value_r4.valueCode)("formControl", ctx_r1.attributeCheckBoxForms[i_r7]);
    ɵɵattribute("aria-label", ctx_r1.getAriaLabelGeneric(ctx_r1.attribute, ctx_r1.enrichValueWithPrice(value_r4, changedPrices_r8)))("aria-describedby", ctx_r1.createAttributeUiKey("label", ctx_r1.attribute.name))("aria-live", ctx_r1.isLastSelected(ctx_r1.attribute.name, value_r4.valueCode) ? "polite" : null);
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r1.createValueUiKey("label", ctx_r1.attribute.name, value_r4.valueCode));
    ɵɵpropertyInterpolate("for", ctx_r1.createAttributeValueIdForConfigurator(ctx_r1.attribute, value_r4.valueCode));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getLabel(ctx_r1.expMode, value_r4.valueDisplay, value_r4.valueCode));
    ɵɵadvance();
    ɵɵproperty("ngIf", value_r4.description);
    ɵɵadvance(2);
    ɵɵproperty("formula", ctx_r1.extractValuePriceFormulaParameters(ctx_r1.enrichValueWithPrice(value_r4, changedPrices_r8)));
    ɵɵadvance();
    ɵɵproperty("ngIf", value_r4.selected && ctx_r1.withQuantity && !ctx_r1.withQuantityOnAttributeLevel);
  }
}
function ConfiguratorAttributeCheckBoxListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, ConfiguratorAttributeCheckBoxListComponent_div_3_div_1_Template, 3, 2, "div", 3)(2, ConfiguratorAttributeCheckBoxListComponent_div_3_ng_container_2_Template, 10, 16, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r1.createAttributeIdForConfigurator(ctx_r1.attribute));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.withQuantityOnAttributeLevel);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.attribute.values);
  }
}
function ConfiguratorAttributeCheckBoxComponent_div_5_cx_configurator_show_more_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-show-more", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("text", ctx_r1.attributeValue.description)("textSize", ctx_r1.getValueDescriptionLength())("productName", ctx_r1.getLabel(ctx_r1.expMode, ctx_r1.attributeValue.valueDisplay, ctx_r1.attributeValue.valueCode))("tabIndex", 0);
  }
}
function ConfiguratorAttributeCheckBoxComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "input", 5);
    ɵɵlistener("change", function ConfiguratorAttributeCheckBoxComponent_div_5_Template_input_change_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelect(ctx_r1.attributeValue.valueCode));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 6);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, ConfiguratorAttributeCheckBoxComponent_div_5_cx_configurator_show_more_5_Template, 1, 4, "cx-configurator-show-more", 7);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 8);
    ɵɵelement(7, "cx-configurator-price", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const changedPrices_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("id", ctx_r1.createAttributeValueIdForConfigurator(ctx_r1.attribute, ctx_r1.attributeValue.valueCode));
    ɵɵpropertyInterpolate("name", ctx_r1.createAttributeIdForConfigurator(ctx_r1.attribute));
    ɵɵproperty("value", ctx_r1.attributeValue.valueCode)("cxFocus", ɵɵpureFunction1(13, _c3, ctx_r1.attribute.name + "-" + ctx_r1.attributeValue.name))("formControl", ctx_r1.attributeCheckBoxForm);
    ɵɵattribute("aria-label", ctx_r1.getAriaLabelGeneric(ctx_r1.attribute, ctx_r1.enrichValueWithPrice(ctx_r1.attributeValue, changedPrices_r3)))("aria-live", ctx_r1.isLastSelected(ctx_r1.attribute.name, ctx_r1.attributeValue.valueCode) ? "polite" : null)("aria-describedby", ctx_r1.createAttributeUiKey("label", ctx_r1.attribute.name));
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r1.createValueUiKey("label", ctx_r1.attribute.name, ctx_r1.attributeValue.valueCode));
    ɵɵpropertyInterpolate("for", ctx_r1.createAttributeValueIdForConfigurator(ctx_r1.attribute, ctx_r1.attributeValue.valueCode));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getLabel(ctx_r1.expMode, ctx_r1.attributeValue.valueDisplay, ctx_r1.attributeValue.valueCode));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.attributeValue.description);
    ɵɵadvance(2);
    ɵɵproperty("formula", ctx_r1.extractValuePriceFormulaParameters(ctx_r1.enrichValueWithPrice(ctx_r1.attributeValue, changedPrices_r3)));
  }
}
var _c4 = (a0) => ({
  "cx-required-error-msg ": a0
});
var _c5 = (a0, a1) => ({
  value: a0,
  attribute: a1
});
function ConfiguratorAttributeInputFieldComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "label", 3);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.createAttributeUiKey("labelForDate", ctx_r0.attribute.name));
    ɵɵattribute("aria-label", ctx_r0.isUserInputEmpty ? ɵɵpipeBind2(1, 2, "configurator.a11y.valueOfDateAttributeBlank", ɵɵpureFunction1(8, _c0, ctx_r0.attribute.label)) : ɵɵpipeBind2(2, 5, "configurator.a11y.valueOfDateAttributeFull", ɵɵpureFunction2(10, _c5, ctx_r0.attribute.userInput, ctx_r0.attribute.label)));
  }
}
var _c6 = (a0) => ({
  pattern: a0
});
function ConfiguratorAttributeNumericInputFieldComponent_label_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.getHelpTextForInterval());
  }
}
function ConfiguratorAttributeNumericInputFieldComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "cx-icon", 6);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.createAttributeUiKey("attribute-msg", ctx_r0.attribute.name));
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.iconType.ERROR);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 3, "configurator.attribute.wrongNumericFormatMessage", ɵɵpureFunction1(6, _c6, ctx_r0.numericFormatPattern)), "\n");
  }
}
function ConfiguratorAttributeNumericInputFieldComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "cx-icon", 6);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r0.createAttributeUiKey("attribute-msg", ctx_r0.attribute.name));
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.iconType.ERROR);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "configurator.attribute.wrongIntervalFormat"), "\n");
  }
}
var _c7 = (a0) => ({
  count: a0
});
function ConfiguratorAttributeDropDownComponent_ng_container_0_div_1_option_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const changedPrices_r4 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("selected", item_r3.selected)("label", ctx_r1.getLabel(ctx_r1.expMode, item_r3.valueDisplay, item_r3.valueCode, ctx_r1.enrichValueWithPrice(item_r3, changedPrices_r4)))("value", item_r3.valueCode);
    ɵɵattribute("aria-label", ctx_r1.getAriaLabel(item_r3, ctx_r1.attribute));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getLabel(ctx_r1.expMode, item_r3.valueDisplay, item_r3.valueCode, ctx_r1.enrichValueWithPrice(item_r3, changedPrices_r4)), " ");
  }
}
function ConfiguratorAttributeDropDownComponent_ng_container_0_div_1_cx_configurator_show_more_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-show-more", 12);
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("text", ctx_r1.getSelectedValueDescription())("textSize", ctx_r1.getValueDescriptionLength())("productName", ctx_r1.getLabel(ctx_r1.expMode, (tmp_6_0 = ctx_r1.getSelectedValue()) == null ? null : tmp_6_0.valueDisplay, (tmp_6_0 = ctx_r1.getSelectedValue()) == null ? null : tmp_6_0.valueCode, ctx_r1.getSelectedValue()))("tabIndex", 0);
  }
}
function ConfiguratorAttributeDropDownComponent_ng_container_0_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelement(1, "cx-configurator-price", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const changedPrices_r4 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("formula", ctx_r1.extractValuePriceFormulaParameters(ctx_r1.enrichValueWithPrice(ctx_r1.getSelectedValue(), changedPrices_r4)));
  }
}
function ConfiguratorAttributeDropDownComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "label", 5);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6)(5, "select", 7);
    ɵɵpipe(6, "async");
    ɵɵlistener("change", function ConfiguratorAttributeDropDownComponent_ng_container_0_div_1_Template_select_change_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onSelect(ctx_r1.attributeDropDownForm.value));
    });
    ɵɵtemplate(7, ConfiguratorAttributeDropDownComponent_ng_container_0_div_1_option_7_Template, 2, 5, "option", 8);
    ɵɵelementEnd();
    ɵɵtemplate(8, ConfiguratorAttributeDropDownComponent_ng_container_0_div_1_cx_configurator_show_more_8_Template, 1, 4, "cx-configurator-show-more", 9);
    ɵɵelementEnd();
    ɵɵtemplate(9, ConfiguratorAttributeDropDownComponent_ng_container_0_div_1_div_9_Template, 2, 1, "div", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵpropertyInterpolate("for", ctx_r1.createAttributeIdForConfigurator(ctx_r1.attribute));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 10, "configurator.a11y.listbox", ɵɵpureFunction1(15, _c7, ctx_r1.attribute.values.length)), " ");
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("id", ctx_r1.createAttributeIdForConfigurator(ctx_r1.attribute));
    ɵɵproperty("ngClass", ɵɵpureFunction1(17, _c4, ɵɵpipeBind1(6, 13, ctx_r1.showRequiredErrorMessage$)))("formControl", ctx_r1.attributeDropDownForm)("cxFocus", ɵɵpureFunction1(19, _c3, ctx_r1.attribute.name));
    ɵɵattribute("aria-describedby", ctx_r1.createAttributeUiKey("label", ctx_r1.attribute.name));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.attribute.values);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getSelectedValueDescription());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.withQuantity && ctx_r1.getSelectedValue());
  }
}
function ConfiguratorAttributeDropDownComponent_ng_container_0_div_2_cx_configurator_price_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-price", 14);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("formula", ctx_r1.extractPriceFormulaParameters());
  }
}
function ConfiguratorAttributeDropDownComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15)(1, "cx-configurator-attribute-quantity", 16);
    ɵɵlistener("changeQuantity", function ConfiguratorAttributeDropDownComponent_ng_container_0_div_2_Template_cx_configurator_attribute_quantity_changeQuantity_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onChangeQuantity($event, ctx_r1.attributeDropDownForm));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, ConfiguratorAttributeDropDownComponent_ng_container_0_div_2_cx_configurator_price_2_Template, 1, 1, "cx-configurator-price", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("quantityOptions", ctx_r1.extractQuantityParameters(ctx_r1.attributeDropDownForm));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getSelectedValuePrice());
  }
}
function ConfiguratorAttributeDropDownComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAttributeDropDownComponent_ng_container_0_div_1_Template, 10, 21, "div", 2)(2, ConfiguratorAttributeDropDownComponent_ng_container_0_div_2_Template, 3, 2, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.attribute.values && ctx_r1.attribute.values.length !== 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.withQuantity);
  }
}
function ConfiguratorAttributeDropDownComponent_cx_configurator_attribute_numeric_input_field_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-attribute-numeric-input-field", 18);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 1, "configurator.a11y.additionalValue"));
  }
}
function ConfiguratorAttributeDropDownComponent_cx_configurator_attribute_input_field_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-attribute-input-field", 18);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 1, "configurator.a11y.additionalValue"));
  }
}
function ConfiguratorAttributeMultiSelectionBundleComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "cx-configurator-attribute-quantity", 5);
    ɵɵlistener("changeQuantity", function ConfiguratorAttributeMultiSelectionBundleComponent_div_0_div_1_Template_cx_configurator_attribute_quantity_changeQuantity_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onChangeAttributeQuantity($event));
    });
    ɵɵelementEnd();
    ɵɵelement(2, "cx-configurator-price", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("quantityOptions", ctx_r1.extractQuantityParameters(ctx_r1.attribute.quantity));
    ɵɵadvance();
    ɵɵproperty("formula", ctx_r1.extractPriceFormulaParameters());
  }
}
function ConfiguratorAttributeMultiSelectionBundleComponent_div_0_cx_configurator_attribute_product_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-configurator-attribute-product-card", 7);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "async");
    ɵɵlistener("handleDeselect", function ConfiguratorAttributeMultiSelectionBundleComponent_div_0_cx_configurator_attribute_product_card_2_Template_cx_configurator_attribute_product_card_handleDeselect_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDeselect($event));
    })("handleQuantity", function ConfiguratorAttributeMultiSelectionBundleComponent_div_0_cx_configurator_attribute_product_card_2_Template_cx_configurator_attribute_product_card_handleQuantity_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onChangeValueQuantity($event));
    })("handleSelect", function ConfiguratorAttributeMultiSelectionBundleComponent_div_0_cx_configurator_attribute_product_card_2_Template_cx_configurator_attribute_product_card_handleSelect_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onSelect($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const value_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("id", ctx_r1.createAttributeValueIdForConfigurator(ctx_r1.attribute, value_r4.valueCode));
    ɵɵproperty("productCardOptions", ctx_r1.extractProductCardParameters(ɵɵpipeBind1(1, 2, ctx_r1.loading$), ɵɵpipeBind1(2, 4, ctx_r1.preventAction$), value_r4, i_r5));
  }
}
function ConfiguratorAttributeMultiSelectionBundleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, ConfiguratorAttributeMultiSelectionBundleComponent_div_0_div_1_Template, 3, 2, "div", 2)(2, ConfiguratorAttributeMultiSelectionBundleComponent_div_0_cx_configurator_attribute_product_card_2_Template, 3, 6, "cx-configurator-attribute-product-card", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r1.createAttributeIdForConfigurator(ctx_r1.attribute));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.withQuantityOnAttributeLevel);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.attribute == null ? null : ctx_r1.attribute.values);
  }
}
var _c8 = (a0) => ({
  value: a0
});
var _c9 = () => ({
  placement: "auto",
  class: "cx-value-description",
  appendToBody: true,
  displayCloseButton: true
});
function ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_ng_container_1_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 12);
  }
  if (rf & 2) {
    const image_r4 = ctx.ngIf;
    const value_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("src", image_r4 == null ? null : image_r4.url, ɵɵsanitizeUrl);
    ɵɵpropertyInterpolate("alt", image_r4 == null ? null : image_r4.altText);
    ɵɵpropertyInterpolate("title", image_r4 == null ? null : image_r4.altText);
    ɵɵproperty("ngClass", ctx_r2.getImgStyleClasses(ctx_r2.attribute, value_r5, "cx-img"));
  }
}
function ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_ng_container_1_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 13);
  }
  if (rf & 2) {
    const value_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.getImgStyleClasses(ctx_r2.attribute, value_r5, "cx-img-dummy"));
  }
}
function ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_ng_container_1_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 14);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵelement(3, "cx-icon", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const value_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind2(1, 5, "configurator.a11y.description", ɵɵpureFunction1(11, _c8, ctx_r2.getImageLabel(ctx_r2.expMode, value_r5.valueDisplay, value_r5.valueCode))));
    ɵɵproperty("cxPopover", value_r5.description)("cxPopoverOptions", ɵɵpureFunction0(13, _c9));
    ɵɵattribute("aria-label", ɵɵpipeBind2(2, 8, "configurator.a11y.description", ɵɵpureFunction1(14, _c8, ctx_r2.getImageLabel(ctx_r2.expMode, value_r5.valueDisplay, value_r5.valueCode))));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.INFO);
  }
}
function ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "input", 5);
    ɵɵlistener("click", function ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_ng_container_1_div_1_Template_input_click_1_listener() {
      ɵɵrestoreView(_r1);
      const i_r2 = ɵɵnextContext().index;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(!ctx_r2.isReadOnly(ctx_r2.attribute) && ctx_r2.onSelect(i_r2));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 6)(3, "label", 7);
    ɵɵtemplate(4, ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_ng_container_1_div_1_img_4_Template, 1, 4, "img", 8)(5, ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_ng_container_1_div_1_div_5_Template, 1, 1, "div", 9);
    ɵɵtext(6);
    ɵɵtemplate(7, ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_ng_container_1_div_1_button_7_Template, 4, 16, "button", 10);
    ɵɵelement(8, "cx-configurator-price", 11);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const value_r5 = ctx_r5.$implicit;
    const i_r2 = ctx_r5.index;
    const changedPrices_r7 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r2.createAttributeValueIdForConfigurator(ctx_r2.attribute, value_r5.valueCode));
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r2.createAttributeValueIdForConfigurator(ctx_r2.attribute, value_r5.valueCode) + "-input");
    ɵɵpropertyInterpolate("name", ctx_r2.createAttributeIdForConfigurator(ctx_r2.attribute));
    ɵɵproperty("value", value_r5.valueCode)("formControl", ctx_r2.attributeCheckBoxForms[i_r2])("cxFocus", ɵɵpureFunction1(19, _c3, ctx_r2.attribute.name + "-" + value_r5.name));
    ɵɵattribute("aria-label", ctx_r2.getAriaLabelGeneric(ctx_r2.attribute, ctx_r2.enrichValueWithPrice(value_r5, changedPrices_r7)))("aria-live", ctx_r2.isLastSelected(ctx_r2.attribute.name, value_r5.valueCode) ? "polite" : null)("aria-describedby", ctx_r2.createAttributeUiKey("label", ctx_r2.attribute.name))("checked", ctx_r2.attributeCheckBoxForms[i_r2].value ? "checked" : null);
    ɵɵadvance(2);
    ɵɵstyleProp("cursor", !ctx_r2.isReadOnly(ctx_r2.attribute) ? "pointer" : "default");
    ɵɵpropertyInterpolate("id", ctx_r2.createValueUiKey("label", ctx_r2.attribute.name, value_r5.valueCode));
    ɵɵpropertyInterpolate("for", ctx_r2.createAttributeValueIdForConfigurator(ctx_r2.attribute, value_r5.valueCode) + "-input");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getImage(value_r5));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.getImage(value_r5));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getImageLabel(ctx_r2.expMode, value_r5.valueDisplay, value_r5.valueCode), " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", value_r5.description);
    ɵɵadvance();
    ɵɵproperty("formula", ctx_r2.extractValuePriceFormulaParameters(ctx_r2.enrichValueWithPrice(value_r5, changedPrices_r7)));
  }
}
function ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_ng_container_1_div_1_Template, 9, 21, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const value_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isValueDisplayed(ctx_r2.attribute, value_r5));
  }
}
function ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.attribute.values);
  }
}
function ConfiguratorAttributeRadioButtonComponent_div_4_cx_configurator_price_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-price", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("formula", ctx_r1.extractPriceFormulaParameters());
  }
}
function ConfiguratorAttributeRadioButtonComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5)(1, "cx-configurator-attribute-quantity", 6);
    ɵɵlistener("changeQuantity", function ConfiguratorAttributeRadioButtonComponent_div_4_Template_cx_configurator_attribute_quantity_changeQuantity_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onChangeQuantity($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, ConfiguratorAttributeRadioButtonComponent_div_4_cx_configurator_price_2_Template, 1, 1, "cx-configurator-price", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("quantityOptions", ctx_r1.extractQuantityParameters());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getSelectedValuePrice());
  }
}
function ConfiguratorAttributeRadioButtonComponent_ng_container_5_div_1_cx_configurator_show_more_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-show-more", 16);
  }
  if (rf & 2) {
    const value_r4 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("text", value_r4.description)("textSize", ctx_r1.getValueDescriptionLength())("productName", ctx_r1.getLabel(ctx_r1.expMode, value_r4.valueDisplay, value_r4.valueCode))("tabIndex", 0);
  }
}
function ConfiguratorAttributeRadioButtonComponent_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10)(1, "div", 11)(2, "input", 12);
    ɵɵlistener("change", function ConfiguratorAttributeRadioButtonComponent_ng_container_5_div_1_Template_input_change_2_listener() {
      const value_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onSelect(value_r4.valueCode));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 13);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵtemplate(5, ConfiguratorAttributeRadioButtonComponent_ng_container_5_div_1_cx_configurator_show_more_5_Template, 1, 4, "cx-configurator-show-more", 14);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 15);
    ɵɵelement(7, "cx-configurator-price", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const value_r4 = ctx.$implicit;
    const changedPrices_r5 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("id", ctx_r1.createAttributeValueIdForConfigurator(ctx_r1.attribute, value_r4.valueCode));
    ɵɵpropertyInterpolate("name", ctx_r1.createAttributeIdForConfigurator(ctx_r1.attribute));
    ɵɵproperty("formControl", ctx_r1.attributeRadioButtonForm)("value", value_r4.valueCode)("cxFocus", ɵɵpureFunction1(16, _c3, ctx_r1.attribute.name + "-" + value_r4.name));
    ɵɵattribute("required", ctx_r1.attribute.required === true ? "required" : null)("name", ctx_r1.createAttributeIdForConfigurator(ctx_r1.attribute))("aria-label", ctx_r1.getAriaLabel(ctx_r1.enrichValueWithPrice(value_r4, changedPrices_r5), ctx_r1.attribute))("aria-live", ctx_r1.listenForPriceChanges && ctx_r1.attributeRadioButtonForm.value === value_r4.valueCode ? "polite" : null)("checked", ctx_r1.attributeRadioButtonForm.value === value_r4.valueCode ? "checked" : null)("aria-describedby", ctx_r1.createAttributeUiKey("label", ctx_r1.attribute.name));
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r1.createValueUiKey("label", ctx_r1.attribute.name, value_r4.valueCode));
    ɵɵpropertyInterpolate("for", ctx_r1.createAttributeValueIdForConfigurator(ctx_r1.attribute, value_r4.valueCode));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getLabel(ctx_r1.expMode, value_r4.valueDisplay, value_r4.valueCode));
    ɵɵadvance();
    ɵɵproperty("ngIf", value_r4.description);
    ɵɵadvance(2);
    ɵɵproperty("formula", ctx_r1.extractValuePriceFormulaParameters(ctx_r1.enrichValueWithPrice(value_r4, changedPrices_r5)));
  }
}
function ConfiguratorAttributeRadioButtonComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAttributeRadioButtonComponent_ng_container_5_div_1_Template, 8, 18, "div", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.attribute.values);
  }
}
function ConfiguratorAttributeRadioButtonComponent_cx_configurator_attribute_numeric_input_field_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-attribute-numeric-input-field", 17);
  }
}
function ConfiguratorAttributeRadioButtonComponent_cx_configurator_attribute_input_field_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-attribute-input-field", 17);
  }
}
function ConfiguratorAttributeReadOnlyComponent_ng_container_2_ng_container_1_div_1_cx_configurator_show_more_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-show-more", 12);
  }
  if (rf & 2) {
    const value_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("text", value_r1.description)("textSize", ctx_r1.getValueDescriptionLength())("productName", ctx_r1.getLabel(ctx_r1.expMode, value_r1.valueDisplay, value_r1.valueCode))("tabIndex", 0);
  }
}
function ConfiguratorAttributeReadOnlyComponent_ng_container_2_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "span", 6);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 7)(4, "label", 8);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵtemplate(6, ConfiguratorAttributeReadOnlyComponent_ng_container_2_ng_container_1_div_1_cx_configurator_show_more_6_Template, 1, 4, "cx-configurator-show-more", 9);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 10);
    ɵɵelement(8, "cx-configurator-price", 11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const changedPrices_r3 = ctx.ngIf;
    const value_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r1.createValueUiKey("aria-label", ctx_r1.attribute.name, value_r1.valueCode));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getAriaLabel(ctx_r1.attribute, ctx_r1.enrichValueWithPrice(value_r1, changedPrices_r3)), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("id", ctx_r1.createValueUiKey("label", ctx_r1.attribute.name, value_r1.valueCode));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getLabel(ctx_r1.expMode, value_r1.valueDisplay, value_r1.valueCode));
    ɵɵadvance();
    ɵɵproperty("ngIf", value_r1.description);
    ɵɵadvance(2);
    ɵɵproperty("formula", ctx_r1.extractValuePriceFormulaParameters(ctx_r1.enrichValueWithPrice(value_r1, changedPrices_r3)));
  }
}
function ConfiguratorAttributeReadOnlyComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAttributeReadOnlyComponent_ng_container_2_ng_container_1_div_1_Template, 9, 6, "div", 4);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", value_r1.selected && ɵɵpipeBind1(2, 1, ctx_r1.changedPrices$));
  }
}
function ConfiguratorAttributeReadOnlyComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAttributeReadOnlyComponent_ng_container_2_ng_container_1_Template, 3, 3, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.attribute.values);
  }
}
function ConfiguratorAttributeReadOnlyComponent_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 6);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 14)(4, "span", 15);
    ɵɵtext(5);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r1.createValueUiKey("aria-label", ctx_r1.attribute.name, ctx_r1.attribute.selectedSingleValue));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getAriaLabel(ctx_r1.attribute), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.attribute.selectedSingleValue);
  }
}
function ConfiguratorAttributeReadOnlyComponent_ng_template_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 6);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 14)(4, "span", 15);
    ɵɵtext(5);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r1.createValueUiKey("aria-label", ctx_r1.attribute.name, ctx_r1.attribute.userInput));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getAriaLabel(ctx_r1.attribute), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r1.attribute.userInput);
  }
}
function ConfiguratorAttributeReadOnlyComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfiguratorAttributeReadOnlyComponent_ng_template_3_ng_container_0_Template, 6, 3, "ng-container", 13)(1, ConfiguratorAttributeReadOnlyComponent_ng_template_3_ng_container_1_Template, 6, 3, "ng-container", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.attribute.selectedSingleValue);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.attribute.userInput);
  }
}
var _c10 = (a0, a1, a2) => ({
  value: a0,
  attribute: a1,
  price: a2
});
function ConfiguratorAttributeSingleSelectionBundleDropdownComponent_div_0_option_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 7);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵpipe(3, "cxTranslate");
    ɵɵtext(4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const item_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("label", ctx_r1.getLabel(false, item_r3.valueDisplay, void 0, item_r3))("selected", item_r3.selected)("value", item_r3.valueCode)("value", item_r3.valueCode);
    ɵɵattribute("aria-label", ctx_r1.isRetractValue(item_r3.valueCode) ? ɵɵpipeBind2(1, 6, "configurator.a11y.forAttribute", ɵɵpureFunction2(15, _c5, item_r3.valueDisplay, ctx_r1.attribute.label)) : item_r3.valuePrice && (item_r3.valuePrice == null ? null : item_r3.valuePrice.value) !== 0 ? ɵɵpipeBind2(2, 9, "configurator.a11y.selectedValueOfAttributeFullWithPrice", ɵɵpureFunction3(18, _c10, item_r3.valueDisplay, ctx_r1.attribute.label, (tmp_7_0 = item_r3.valuePriceTotal == null ? null : item_r3.valuePriceTotal.formattedValue) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : 0)) : ɵɵpipeBind2(3, 12, "configurator.a11y.selectedValueOfAttributeFull", ɵɵpureFunction2(22, _c5, item_r3.valueDisplay, ctx_r1.attribute.label)));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r1.getLabel(false, item_r3.valueDisplay, void 0, item_r3), " ");
  }
}
function ConfiguratorAttributeSingleSelectionBundleDropdownComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3)(1, "label", 4);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "select", 5);
    ɵɵpipe(5, "async");
    ɵɵlistener("change", function ConfiguratorAttributeSingleSelectionBundleDropdownComponent_div_0_Template_select_change_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelect(ctx_r1.attributeDropDownForm.value));
    });
    ɵɵtemplate(6, ConfiguratorAttributeSingleSelectionBundleDropdownComponent_div_0_option_6_Template, 5, 25, "option", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵpropertyInterpolate("for", ctx_r1.createAttributeIdForConfigurator(ctx_r1.attribute));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 8, "configurator.a11y.listbox", ɵɵpureFunction1(13, _c7, ctx_r1.attribute.values == null ? null : ctx_r1.attribute.values.length)), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("id", ctx_r1.createAttributeIdForConfigurator(ctx_r1.attribute));
    ɵɵproperty("ngClass", ɵɵpureFunction1(15, _c4, ɵɵpipeBind1(5, 11, ctx_r1.showRequiredErrorMessage$)))("formControl", ctx_r1.attributeDropDownForm)("cxFocus", ɵɵpureFunction1(17, _c3, ctx_r1.attribute.name));
    ɵɵattribute("aria-describedby", ctx_r1.createAttributeUiKey("label", ctx_r1.attribute.name));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.attribute.values);
  }
}
function ConfiguratorAttributeSingleSelectionBundleDropdownComponent_cx_configurator_attribute_product_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-configurator-attribute-product-card", 8);
    ɵɵlistener("handleDeselect", function ConfiguratorAttributeSingleSelectionBundleDropdownComponent_cx_configurator_attribute_product_card_1_Template_cx_configurator_attribute_product_card_handleDeselect_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onSelect(ctx_r1.RETRACT_VALUE_CODE));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r1.createAttributeValueIdForConfigurator(ctx_r1.attribute, ctx_r1.selectedValue.valueCode));
    ɵɵproperty("productCardOptions", ctx_r1.extractProductCardParameters());
  }
}
function ConfiguratorAttributeSingleSelectionBundleDropdownComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9)(1, "cx-configurator-attribute-quantity", 10);
    ɵɵlistener("changeQuantity", function ConfiguratorAttributeSingleSelectionBundleDropdownComponent_div_2_Template_cx_configurator_attribute_quantity_changeQuantity_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onChangeQuantity($event, ctx_r1.attributeDropDownForm));
    });
    ɵɵelementEnd();
    ɵɵelement(2, "cx-configurator-price", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("quantityOptions", ctx_r1.extractQuantityParameters(ctx_r1.attributeDropDownForm));
    ɵɵadvance();
    ɵɵproperty("formula", ctx_r1.extractPriceFormulaParameters());
  }
}
function ConfiguratorAttributeSingleSelectionBundleComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "cx-configurator-attribute-quantity", 5);
    ɵɵlistener("changeQuantity", function ConfiguratorAttributeSingleSelectionBundleComponent_div_0_div_1_Template_cx_configurator_attribute_quantity_changeQuantity_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onChangeQuantity($event));
    });
    ɵɵelementEnd();
    ɵɵelement(2, "cx-configurator-price", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("quantityOptions", ctx_r1.extractQuantityParameters());
    ɵɵadvance();
    ɵɵproperty("formula", ctx_r1.extractPriceFormulaParameters());
  }
}
function ConfiguratorAttributeSingleSelectionBundleComponent_div_0_cx_configurator_attribute_product_card_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-configurator-attribute-product-card", 7);
    ɵɵlistener("handleDeselect", function ConfiguratorAttributeSingleSelectionBundleComponent_div_0_cx_configurator_attribute_product_card_2_Template_cx_configurator_attribute_product_card_handleDeselect_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onSelect(""));
    })("handleSelect", function ConfiguratorAttributeSingleSelectionBundleComponent_div_0_cx_configurator_attribute_product_card_2_Template_cx_configurator_attribute_product_card_handleSelect_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onSelect($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const value_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("id", ctx_r1.createAttributeValueIdForConfigurator(ctx_r1.attribute, value_r4.valueCode))("productCardOptions", ctx_r1.extractProductCardParameters(value_r4, i_r5));
  }
}
function ConfiguratorAttributeSingleSelectionBundleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, ConfiguratorAttributeSingleSelectionBundleComponent_div_0_div_1_Template, 3, 2, "div", 2)(2, ConfiguratorAttributeSingleSelectionBundleComponent_div_0_cx_configurator_attribute_product_card_2_Template, 1, 2, "cx-configurator-attribute-product-card", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r1.createAttributeIdForConfigurator(ctx_r1.attribute));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.withQuantity);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.attribute == null ? null : ctx_r1.attribute.values);
  }
}
var _c11 = (a0) => ({
  placement: "auto",
  class: a0,
  appendToBody: true,
  displayCloseButton: true
});
function ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_ng_container_1_div_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 12);
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const value_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("src", (tmp_6_0 = ctx_r2.getImage(value_r2)) == null ? null : tmp_6_0.url, ɵɵsanitizeUrl);
    ɵɵpropertyInterpolate("alt", (tmp_7_0 = ctx_r2.getImage(value_r2)) == null ? null : tmp_7_0.altText);
    ɵɵpropertyInterpolate("title", (tmp_8_0 = ctx_r2.getImage(value_r2)) == null ? null : tmp_8_0.altText);
    ɵɵproperty("ngClass", ctx_r2.getImgStyleClasses(ctx_r2.attribute, value_r2, "cx-img"));
  }
}
function ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_ng_container_1_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 13);
  }
  if (rf & 2) {
    const value_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.getImgStyleClasses(ctx_r2.attribute, value_r2, "cx-img-dummy"));
  }
}
function ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_ng_container_1_div_1_button_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 14);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
    ɵɵelement(3, "cx-icon", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const value_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind2(1, 5, "configurator.a11y.description", ɵɵpureFunction1(11, _c8, ctx_r2.getImageLabel(ctx_r2.expMode, value_r2.valueDisplay, value_r2.valueCode))));
    ɵɵproperty("cxPopover", value_r2.description)("cxPopoverOptions", ɵɵpureFunction1(13, _c11, ctx_r2.getValueDescriptionStyleClasses()));
    ɵɵattribute("aria-label", ɵɵpipeBind2(2, 8, "configurator.a11y.description", ɵɵpureFunction1(15, _c8, ctx_r2.getImageLabel(ctx_r2.expMode, value_r2.valueDisplay, value_r2.valueCode))));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.INFO);
  }
}
function ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "input", 5);
    ɵɵlistener("click", function ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_ng_container_1_div_1_Template_input_click_1_listener() {
      ɵɵrestoreView(_r1);
      const value_r2 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(!ctx_r2.isReadOnly(ctx_r2.attribute) && ctx_r2.onClick(value_r2.valueCode));
    });
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 6)(3, "label", 7);
    ɵɵtemplate(4, ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_ng_container_1_div_1_img_4_Template, 1, 4, "img", 8)(5, ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_ng_container_1_div_1_div_5_Template, 1, 1, "div", 9);
    ɵɵtext(6);
    ɵɵtemplate(7, ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_ng_container_1_div_1_button_7_Template, 4, 17, "button", 10);
    ɵɵelement(8, "cx-configurator-price", 11);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const value_r2 = ɵɵnextContext().$implicit;
    const changedPrices_r4 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵpropertyInterpolate("id", ctx_r2.createAttributeValueIdForConfigurator(ctx_r2.attribute, value_r2.valueCode));
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r2.createAttributeValueIdForConfigurator(ctx_r2.attribute, value_r2.valueCode) + "-input");
    ɵɵpropertyInterpolate("name", ctx_r2.createAttributeIdForConfigurator(ctx_r2.attribute));
    ɵɵproperty("value", value_r2.valueCode)("formControl", ctx_r2.attributeRadioButtonForm)("value", value_r2.valueCode)("cxFocus", ɵɵpureFunction1(23, _c3, ctx_r2.attribute.name + "-" + value_r2.name));
    ɵɵattribute("name", ctx_r2.createAttributeIdForConfigurator(ctx_r2.attribute))("required", ctx_r2.attribute.required === true ? "required" : null)("checked", ctx_r2.attributeRadioButtonForm.value === value_r2.valueCode ? "checked" : null)("aria-checked", ctx_r2.attributeRadioButtonForm.value === value_r2.valueCode ? "true" : "false")("aria-label", ctx_r2.getAriaLabelGeneric(ctx_r2.attribute, ctx_r2.enrichValueWithPrice(value_r2, changedPrices_r4)))("aria-live", ctx_r2.listenForPriceChanges && ctx_r2.attributeRadioButtonForm.value === value_r2.valueCode ? "polite" : null)("aria-describedby", ctx_r2.createAttributeUiKey("label", ctx_r2.attribute.name));
    ɵɵadvance(2);
    ɵɵstyleProp("cursor", !ctx_r2.isReadOnly(ctx_r2.attribute) ? "pointer" : "default");
    ɵɵpropertyInterpolate("id", ctx_r2.createValueUiKey("label", ctx_r2.attribute.name, value_r2.valueCode));
    ɵɵpropertyInterpolate("for", ctx_r2.createAttributeValueIdForConfigurator(ctx_r2.attribute, value_r2.valueCode) + "-input");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getImage(value_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.getImage(value_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getImageLabel(ctx_r2.expMode, value_r2.valueDisplay, value_r2.valueCode), " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", value_r2.description);
    ɵɵadvance();
    ɵɵproperty("formula", ctx_r2.extractValuePriceFormulaParameters(ctx_r2.enrichValueWithPrice(value_r2, changedPrices_r4)));
  }
}
function ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_ng_container_1_div_1_Template, 9, 25, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const value_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isValueDisplayed(ctx_r2.attribute, value_r2));
  }
}
function ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.attribute.values);
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.header.multipleWarnings"), "");
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_button_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-icon", 10);
    ɵɵelementContainerEnd();
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_button_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-icon", 11);
    ɵɵelementContainerEnd();
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵlistener("click", function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleWarnings());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵtemplate(3, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_button_5_ng_container_3_Template, 2, 0, "ng-container", 0)(4, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_button_5_ng_container_4_Template, 2, 0, "ng-container", 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("aria-expanded", ctx_r1.showWarnings);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 4, "configurator.header.reviewWarnings"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.showWarnings);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showWarnings);
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const warningMessage_r3 = ctx.$implicit;
    const configuration_r4 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("open", ctx_r1.showWarnings || (configuration_r4 == null ? null : configuration_r4.warningMessages == null ? null : configuration_r4.warningMessages.length) === 1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", warningMessage_r3, " ");
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "span", 2);
    ɵɵelement(3, "cx-icon", 3);
    ɵɵelementEnd();
    ɵɵtemplate(4, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_span_4_Template, 3, 3, "span", 4)(5, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_button_5_Template, 5, 6, "button", 5);
    ɵɵelementStart(6, "div", 6);
    ɵɵtemplate(7, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_div_7_Template, 2, 3, "div", 7);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const configuration_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ((tmp_3_0 = configuration_r4 == null ? null : configuration_r4.warningMessages == null ? null : configuration_r4.warningMessages.length) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0) > 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ((tmp_4_0 = configuration_r4 == null ? null : configuration_r4.warningMessages == null ? null : configuration_r4.warningMessages.length) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0) > 1);
    ɵɵadvance();
    ɵɵclassProp("inline", (configuration_r4 == null ? null : configuration_r4.warningMessages == null ? null : configuration_r4.warningMessages.length) === 1);
    ɵɵadvance();
    ɵɵproperty("ngForOf", configuration_r4.warningMessages);
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.header.multipleErrors"), "");
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_button_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-icon", 10);
    ɵɵelementContainerEnd();
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_button_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-icon", 11);
    ɵɵelementContainerEnd();
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 20);
    ɵɵlistener("click", function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleErrors());
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵtemplate(3, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_button_5_ng_container_3_Template, 2, 0, "ng-container", 0)(4, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_button_5_ng_container_4_Template, 2, 0, "ng-container", 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("aria-expanded", ctx_r1.showErrors);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 4, "configurator.header.reviewErrors"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.showErrors);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showErrors);
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const errorMessage_r6 = ctx.$implicit;
    const configuration_r4 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("open", ctx_r1.showErrors || (configuration_r4 == null ? null : configuration_r4.errorMessages == null ? null : configuration_r4.errorMessages.length) === 1);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", errorMessage_r6, " ");
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 13)(2, "span", 2);
    ɵɵelement(3, "cx-icon", 14);
    ɵɵelementEnd();
    ɵɵtemplate(4, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_span_4_Template, 3, 3, "span", 15)(5, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_button_5_Template, 5, 6, "button", 16);
    ɵɵelementStart(6, "div", 17);
    ɵɵtemplate(7, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_div_7_Template, 2, 3, "div", 18);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const configuration_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ((tmp_3_0 = configuration_r4 == null ? null : configuration_r4.errorMessages == null ? null : configuration_r4.errorMessages.length) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0) > 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ((tmp_4_0 = configuration_r4 == null ? null : configuration_r4.errorMessages == null ? null : configuration_r4.errorMessages.length) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0) > 1);
    ɵɵadvance();
    ɵɵclassProp("inline", (configuration_r4 == null ? null : configuration_r4.errorMessages == null ? null : configuration_r4.errorMessages.length) === 1);
    ɵɵadvance();
    ɵɵproperty("ngForOf", configuration_r4.errorMessages);
  }
}
function ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_1_Template, 8, 5, "ng-container", 0)(2, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_ng_container_2_Template, 8, 5, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const configuration_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", ((tmp_2_0 = configuration_r4 == null ? null : configuration_r4.warningMessages == null ? null : configuration_r4.warningMessages.length) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : 0) > 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ((tmp_3_0 = configuration_r4 == null ? null : configuration_r4.errorMessages == null ? null : configuration_r4.errorMessages.length) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0) > 0);
  }
}
function ConfiguratorConflictDescriptionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-icon", 1);
    ɵɵtext(2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.iconTypes.WARNING);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.currentGroup.name, "\n");
  }
}
var _c12 = (a0) => ({
  number: a0
});
function ConfiguratorConflictSuggestionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementStart(4, "span", 2);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "span", 2);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind2(2, 3, "configurator.conflict.suggestionTitle", ɵɵpureFunction1(15, _c12, ctx_r0.suggestionNumber + 1)) + " " + ɵɵpipeBind2(3, 6, "configurator.conflict.suggestionText", ɵɵpureFunction1(17, _c0, ctx_r0.attribute.label)));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind2(6, 9, "configurator.conflict.suggestionTitle", ɵɵpureFunction1(19, _c12, ctx_r0.suggestionNumber + 1)));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind2(9, 12, "configurator.conflict.suggestionText", ɵɵpureFunction1(21, _c0, ctx_r0.attribute.label)));
  }
}
function ConfiguratorExitButtonComponent_ng_container_0_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.button.exit"), " ");
  }
}
function ConfiguratorExitButtonComponent_ng_container_0_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.button.exitMobile"), " ");
  }
}
function ConfiguratorExitButtonComponent_ng_container_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorExitButtonComponent_ng_container_0_ng_container_4_ng_container_1_Template, 3, 3, "ng-container", 0);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, ConfiguratorExitButtonComponent_ng_container_0_ng_container_4_ng_container_3_Template, 3, 3, "ng-container", 0);
    ɵɵpipe(4, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r1.isDesktop()));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx_r1.isMobile()));
  }
}
function ConfiguratorExitButtonComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.button.cancelConfigurationMobile"), " ");
  }
}
function ConfiguratorExitButtonComponent_ng_container_0_ng_container_5_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.button.cancelConfiguration"), " ");
  }
}
function ConfiguratorExitButtonComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorExitButtonComponent_ng_container_0_ng_container_5_ng_container_1_Template, 3, 3, "ng-container", 0);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, ConfiguratorExitButtonComponent_ng_container_0_ng_container_5_ng_container_3_Template, 3, 3, "ng-container", 0);
    ɵɵpipe(4, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r1.isMobile()));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx_r1.isDesktop()));
  }
}
function ConfiguratorExitButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵpipe(3, "cxTranslate");
    ɵɵlistener("click", function ConfiguratorExitButtonComponent_ng_container_0_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.exitConfiguration());
    });
    ɵɵtemplate(4, ConfiguratorExitButtonComponent_ng_container_0_ng_container_4_Template, 5, 6, "ng-container", 0)(5, ConfiguratorExitButtonComponent_ng_container_0_ng_container_5_Template, 5, 6, "ng-container", 0);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const container_r3 = ctx.ngIf;
    ɵɵadvance();
    ɵɵattribute("title", container_r3.routerData.isOwnerCartEntry ? ɵɵpipeBind1(2, 3, "configurator.button.cancelConfiguration") : ɵɵpipeBind1(3, 5, "configurator.button.exit"));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !container_r3.routerData.isOwnerCartEntry);
    ɵɵadvance();
    ɵɵproperty("ngIf", container_r3.routerData.isOwnerCartEntry);
  }
}
var _c13 = (a0, a1, a2, a3, a4, a5, a6) => ({
  componentKey: "Header",
  attribute: a0,
  owner: a1,
  group: a2,
  language: a3,
  expMode: a4,
  isNavigationToGroupEnabled: a5,
  isPricingAsync: a6
});
var _c14 = (a0, a1, a2, a3, a4, a5, a6) => ({
  componentKey: a0,
  attribute: a1,
  owner: a2,
  group: a3,
  language: a4,
  expMode: a5,
  isPricingAsync: a6
});
var _c15 = (a0, a1, a2, a3, a4, a5) => ({
  componentKey: "Footer",
  attribute: a0,
  owner: a1,
  group: a2,
  language: a3,
  expMode: a4,
  isPricingAsync: a5
});
function ConfiguratorGroupComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-configurator-conflict-description", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("currentGroup", ctx_r0.group);
  }
}
function ConfiguratorGroupComponent_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-configurator-conflict-suggestion", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const attribute_r3 = ctx_r1.$implicit;
    const indexOfAttribute_r4 = ctx_r1.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("currentGroup", ctx_r0.group)("attribute", attribute_r3)("suggestionNumber", indexOfAttribute_r4);
  }
}
function ConfiguratorGroupComponent_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 6);
    ɵɵpipe(2, "async");
    ɵɵelement(3, "div", 6);
    ɵɵpipe(4, "async");
    ɵɵelement(5, "div", 6);
    ɵɵpipe(6, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const activeLanguage_r5 = ctx.ngIf;
    const attribute_r3 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("cxConfiguratorAttributeComponent", ɵɵpureFunction7(9, _c13, attribute_r3, ctx_r0.owner, ctx_r0.group, activeLanguage_r5, (tmp_5_0 = ɵɵpipeBind1(2, 3, ctx_r0.expMode)) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false, ctx_r0.isNavigationToGroupEnabled, ctx_r0.isPricingAsync));
    ɵɵadvance(2);
    ɵɵproperty("cxConfiguratorAttributeComponent", ɵɵpureFunction7(17, _c14, ctx_r0.getComponentKey(attribute_r3), attribute_r3, ctx_r0.owner, ctx_r0.group, activeLanguage_r5, (tmp_6_0 = ɵɵpipeBind1(4, 5, ctx_r0.expMode)) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : false, ctx_r0.isPricingAsync));
    ɵɵadvance(2);
    ɵɵproperty("cxConfiguratorAttributeComponent", ɵɵpureFunction6(25, _c15, attribute_r3, ctx_r0.owner, ctx_r0.group, activeLanguage_r5, (tmp_7_0 = ɵɵpipeBind1(6, 7, ctx_r0.expMode)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : false, ctx_r0.isPricingAsync));
  }
}
function ConfiguratorGroupComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtemplate(1, ConfiguratorGroupComponent_div_2_ng_container_1_Template, 2, 3, "ng-container", 1)(2, ConfiguratorGroupComponent_div_2_ng_container_2_Template, 7, 32, "ng-container", 1);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const attribute_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("cx-hidden", !attribute_r3.visible);
    ɵɵpropertyInterpolate("id", ctx_r0.createAttributeUiKey("group-attribute", attribute_r3.name));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isConflictGroupType(ctx_r0.group.groupType));
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 5, ctx_r0.activeLanguage$));
  }
}
function ConfiguratorConflictSolverDialogComponent_ng_container_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-configurator-group", 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const conflictGroup_r1 = ctx.ngIf;
    const routerData_r2 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("group", conflictGroup_r1)("owner", routerData_r2.owner)("isNavigationToGroupEnabled", false);
  }
}
function ConfiguratorConflictSolverDialogComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorConflictSolverDialogComponent_ng_container_19_ng_container_1_Template, 2, 3, "ng-container", 10);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.conflictGroup$));
  }
}
var _c16 = () => [0, 1, 2];
function ConfiguratorFormComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-configurator-group", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r1 = ctx.ngIf;
    const configuration_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("group", group_r1)("owner", configuration_r2.owner)("isNavigationToGroupEnabled", ctx_r2.isNavigationToGroupEnabled(configuration_r2))("isPricingAsync", configuration_r2.isPricingAsync);
  }
}
function ConfiguratorFormComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorFormComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 4, "ng-container", 2);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.currentGroup$));
  }
}
function ConfiguratorFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorFormComponent_ng_container_0_ng_container_1_Template, 3, 3, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r2 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    const ghostForm_r4 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isDialogActive(configuration_r2))("ngIfElse", ghostForm_r4);
  }
}
function ConfiguratorFormComponent_ng_template_2_ng_container_0_div_15_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "div", 20);
    ɵɵelementContainerEnd();
  }
}
function ConfiguratorFormComponent_ng_template_2_ng_container_0_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15)(1, "div", 16);
    ɵɵelement(2, "div", 17)(3, "div", 18);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 19);
    ɵɵtemplate(5, ConfiguratorFormComponent_ng_template_2_ng_container_0_div_15_ng_container_5_Template, 2, 0, "ng-container", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    ɵɵadvance(5);
    ɵɵproperty("ngIf", i_r5 !== 0);
  }
}
function ConfiguratorFormComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5)(2, "div", 6);
    ɵɵelement(3, "div", 7)(4, "div", 8);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 9);
    ɵɵelement(6, "div", 10)(7, "div", 11);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 5)(9, "div", 6);
    ɵɵelement(10, "div", 7)(11, "div", 8);
    ɵɵelementStart(12, "div", 12);
    ɵɵelement(13, "div", 13);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 9);
    ɵɵtemplate(15, ConfiguratorFormComponent_ng_template_2_ng_container_0_div_15_Template, 6, 1, "div", 14);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(15);
    ɵɵproperty("ngForOf", ɵɵpureFunction0(1, _c16));
  }
}
function ConfiguratorFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfiguratorFormComponent_ng_template_2_ng_container_0_Template, 16, 2, "ng-container", 4);
  }
  if (rf & 2) {
    ɵɵproperty("ngForOf", ɵɵpureFunction0(1, _c16));
  }
}
var _c17 = ["groupItem"];
var _c18 = () => ({
  key: "cx-menu-back"
});
var _c19 = () => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9, 1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵpipe(3, "cxTranslate");
    ɵɵlistener("click", function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const currentGroup_r2 = ɵɵnextContext(3).ngIf;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.navigateUp(currentGroup_r2));
    })("keydown", function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_1_button_1_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r3 = ɵɵnextContext(2);
      const group_r5 = ctx_r3.$implicit;
      const groupIndex_r6 = ctx_r3.index;
      const currentGroup_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.switchGroupOnArrowPress($event, groupIndex_r6, group_r5, currentGroup_r2));
    });
    ɵɵelement(4, "cx-icon", 10);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const parentGroup_r7 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext(6);
    ɵɵproperty("cxFocus", ɵɵpureFunction0(11, _c18));
    ɵɵattribute("aria-selected", false)("aria-label", ctx_r2.isConflictGroupType(parentGroup_r7.groupType) ? ɵɵpipeBind1(2, 5, "configurator.a11y.conflictBack") : ɵɵpipeBind1(3, 7, "configurator.a11y.groupBack"));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r2.iconTypes.CARET_LEFT);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 9, "configurator.button.back"), " ");
  }
}
function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_1_button_1_Template, 7, 12, "button", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const parentGroup_r7 = ctx.ngIf;
    const groupIndex_r6 = ɵɵnextContext().index;
    ɵɵadvance();
    ɵɵproperty("ngIf", parentGroup_r7 !== null && groupIndex_r6 === 0);
  }
}
function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_3_cx_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-icon", 21);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxTranslate");
  }
  if (rf & 2) {
    const group_r5 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵpropertyInterpolate("id", ctx_r2.createIconId(ctx_r2.iconTypes.CARET_RIGHT, group_r5.id));
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(1, 4, "configurator.icon.subgroup"));
    ɵɵproperty("type", ctx_r2.iconTypes.CARET_RIGHT);
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 6, "configurator.a11y.iconSubGroup"));
  }
}
function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 11, 1);
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "async");
    ɵɵlistener("click", function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_3_Template_button_click_1_listener() {
      ɵɵrestoreView(_r8);
      const group_r5 = ɵɵnextContext().$implicit;
      const currentGroup_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.click(group_r5, currentGroup_r2));
    })("keydown", function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_3_Template_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r3 = ɵɵnextContext();
      const group_r5 = ctx_r3.$implicit;
      const groupIndex_r6 = ctx_r3.index;
      const currentGroup_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.switchGroupOnArrowPress($event, groupIndex_r6, group_r5, currentGroup_r2));
    });
    ɵɵelementStart(5, "span", 12);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 13)(8, "div", 14);
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 15);
    ɵɵelement(11, "cx-icon", 16);
    ɵɵpipe(12, "cxTranslate");
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 15);
    ɵɵelement(15, "cx-icon", 17);
    ɵɵpipe(16, "cxTranslate");
    ɵɵpipe(17, "cxTranslate");
    ɵɵelement(18, "cx-icon", 18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(21, "div", 19);
    ɵɵtemplate(22, ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_3_cx_icon_22_Template, 3, 8, "cx-icon", 20);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r5 = ɵɵnextContext().$implicit;
    const currentGroup_r2 = ɵɵnextContext().ngIf;
    const configuration_r9 = ɵɵnextContext(3).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("DISABLED", !group_r5.configurable)("cx-menu-conflict", ctx_r2.isConflictGroupType(group_r5.groupType))("active", ctx_r2.isGroupSelected(group_r5.id, currentGroup_r2.id))("disable", !group_r5.configurable);
    ɵɵpropertyInterpolate("id", group_r5.id);
    ɵɵpropertyInterpolate("ngClass", ɵɵpipeBind1(3, 32, ctx_r2.getGroupStatusStyles(group_r5, configuration_r9)));
    ɵɵproperty("cxFocus", ɵɵpureFunction1(48, _c3, group_r5.id))("tabindex", ctx_r2.getTabIndex(group_r5, currentGroup_r2.id));
    ɵɵattribute("aria-describedby", ɵɵpipeBind1(4, 34, ctx_r2.getAriaDescribedby(group_r5, configuration_r9)))("aria-selected", ctx_r2.isGroupSelected(group_r5.id, currentGroup_r2.id))("aria-controls", ctx_r2.isGroupSelected(group_r5.id, currentGroup_r2.id) ? ctx_r2.createAriaControls(group_r5.id) : null)("aria-label", ctx_r2.getAriaLabel(group_r5));
    ɵɵadvance(4);
    ɵɵpropertyInterpolate("title", group_r5.description);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getGroupMenuTitle(group_r5));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.getConflictNumber(group_r5), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("id", ctx_r2.createIconId(ctx_r2.iconTypes.WARNING, group_r5.id));
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(12, 36, "configurator.icon.groupConflict"));
    ɵɵproperty("type", ctx_r2.iconTypes.WARNING);
    ɵɵattribute("aria-label", ɵɵpipeBind1(13, 38, "configurator.a11y.iconConflict"));
    ɵɵadvance(4);
    ɵɵpropertyInterpolate("id", ctx_r2.createIconId(ctx_r2.iconTypes.ERROR, group_r5.id));
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(16, 40, "configurator.icon.groupIncomplete"));
    ɵɵproperty("type", ctx_r2.iconTypes.ERROR);
    ɵɵattribute("aria-label", ɵɵpipeBind1(17, 42, "configurator.a11y.iconIncomplete"));
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("id", ctx_r2.createIconId(ctx_r2.iconTypes.SUCCESS, group_r5.id));
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(19, 44, "configurator.icon.groupComplete"));
    ɵɵproperty("type", ctx_r2.iconTypes.SUCCESS);
    ɵɵattribute("aria-label", ɵɵpipeBind1(20, 46, "configurator.a11y.iconComplete"));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r2.hasSubGroups(group_r5));
  }
}
function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_ng_container_3_Template, 23, 50, "ng-container", 6);
    ɵɵpipe(4, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r2.displayedParentGroup$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx_r2.displayMenuItem(group_r5)));
  }
}
function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_ng_container_1_Template, 5, 6, "ng-container", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const groups_r10 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngForOf", groups_r10)("ngForTrackBy", ctx_r2.trackByFn);
  }
}
function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_ng_container_1_Template, 2, 2, "ng-container", 6);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.currentGroup$));
  }
}
function ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3)(2, "span", 4);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "span", 5);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(8, ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_ng_container_8_Template, 3, 3, "ng-container", 6);
    ɵɵpipe(9, "async");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "configurator.a11y.listOfGroups"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 5, "configurator.a11y.inListOfGroups"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(9, 7, ctx_r2.displayedGroups$));
  }
}
function ConfiguratorGroupMenuComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorGroupMenuComponent_ng_container_0_ng_container_1_Template, 10, 9, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r9 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    const ghostGroups_r11 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isDialogActive(configuration_r9))("ngIfElse", ghostGroups_r11);
  }
}
function ConfiguratorGroupMenuComponent_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵelement(1, "div", 25);
    ɵɵelementEnd();
  }
}
function ConfiguratorGroupMenuComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtemplate(1, ConfiguratorGroupMenuComponent_ng_template_2_div_1_Template, 2, 0, "div", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpureFunction0(1, _c19));
  }
}
function ConfiguratorGroupTitleComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-hamburger-menu");
    ɵɵelementContainerEnd();
  }
}
function ConfiguratorGroupTitleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, ConfiguratorGroupTitleComponent_ng_container_0_ng_container_2_Template, 2, 0, "ng-container", 3);
    ɵɵpipe(3, "async");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 2, ctx_r1.isMobile()));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.getGroupTitle(group_r1), " ");
  }
}
function ConfiguratorGroupTitleComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 4);
  }
}
function ConfiguratorOverviewAttributeComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 5);
    ɵɵelement(4, "cx-configurator-price", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.attributeOverview.attribute, " ");
    ɵɵadvance(2);
    ɵɵproperty("formula", ctx_r0.extractPriceFormulaParameters());
  }
}
function ConfiguratorOverviewAttributeComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "cx-configurator-price", 6);
    ɵɵelementEnd();
    ɵɵelementStart(2, "div", 4);
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("formula", ctx_r0.extractPriceFormulaParameters());
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.attributeOverview.attribute, " ");
  }
}
function ConfiguratorOverviewBundleAttributeComponent_ng_container_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "configurator.attribute.id"), ": ", ctx_r0.attributeOverview.productCode, "");
  }
}
function ConfiguratorOverviewBundleAttributeComponent_ng_container_0_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "span", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 15);
    ɵɵtext(5);
    ɵɵpipe(6, "cxNumeric");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "configurator.attribute.quantity"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 4, ctx_r0.attributeOverview.quantity));
  }
}
function ConfiguratorOverviewBundleAttributeComponent_ng_container_0_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16)(1, "span", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 15);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "configurator.overviewForm.itemPrice"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.attributeOverview.valuePrice == null ? null : ctx_r0.attributeOverview.valuePrice.formattedValue);
  }
}
function ConfiguratorOverviewBundleAttributeComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2);
    ɵɵelement(3, "cx-media", 3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 4);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 5)(7, "div");
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵtemplate(9, ConfiguratorOverviewBundleAttributeComponent_ng_container_0_span_9_Template, 3, 4, "span", 6)(10, ConfiguratorOverviewBundleAttributeComponent_ng_container_0_div_10_Template, 7, 6, "div", 7)(11, ConfiguratorOverviewBundleAttributeComponent_ng_container_0_div_11_Template, 6, 4, "div", 8);
    ɵɵelementEnd()();
    ɵɵelementStart(12, "div", 9)(13, "span", 10);
    ɵɵtext(14);
    ɵɵelementEnd();
    ɵɵelement(15, "cx-configurator-price", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("container", ctx_r0.getProductPrimaryImage(product_r2));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.getAriaLabel(), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.attributeOverview.value, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.attributeOverview == null ? null : ctx_r0.attributeOverview.productCode);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.displayQuantity());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.displayPrice());
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.attributeOverview.attribute);
    ɵɵadvance();
    ɵɵproperty("formula", ctx_r0.extractPriceFormulaParameters());
  }
}
var _c20 = (a0) => ({
  group: a0
});
function ConfiguratorOverviewFilterBarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 2);
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("keydown.delete", function ConfiguratorOverviewFilterBarComponent_ng_container_0_Template_button_keydown_delete_1_listener() {
      const filter_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onAttrFilterRemove(ctx_r2.config, filter_r2));
    })("click", function ConfiguratorOverviewFilterBarComponent_ng_container_0_Template_button_click_1_listener() {
      const filter_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onAttrFilterRemove(ctx_r2.config, filter_r2));
    });
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementStart(5, "span", 3);
    ɵɵelement(6, "cx-icon", 4);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵpropertyInterpolate1("id", "cx-overview-filter-applied-", filter_r2 === ctx_r2.attributeFilterTypes.PRICE_RELEVANT ? ctx_r2.attributeFilterTypes.PRICE_RELEVANT : ctx_r2.attributeFilterTypes.USER_INPUT, "");
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(2, 5, filter_r2 === ctx_r2.attributeFilterTypes.PRICE_RELEVANT ? "configurator.overviewFilter.removeByPrice" : "configurator.overviewFilter.removeMySelections"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, filter_r2 === ctx_r2.attributeFilterTypes.PRICE_RELEVANT ? "configurator.overviewFilter.byPrice" : "configurator.overviewFilter.mySelections"), " ");
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.CLOSE);
  }
}
function ConfiguratorOverviewFilterBarComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 2);
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("keydown.delete", function ConfiguratorOverviewFilterBarComponent_ng_container_1_Template_button_keydown_delete_1_listener() {
      const groupId_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onGroupFilterRemove(ctx_r2.config, groupId_r5));
    })("click", function ConfiguratorOverviewFilterBarComponent_ng_container_1_Template_button_click_1_listener() {
      const groupId_r5 = ɵɵrestoreView(_r4).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onGroupFilterRemove(ctx_r2.config, groupId_r5));
    });
    ɵɵtext(3);
    ɵɵelementStart(4, "span", 3);
    ɵɵelement(5, "cx-icon", 4);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const groupId_r5 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵpropertyInterpolate1("id", "cx-overview-filter-applied-", groupId_r5, "");
    ɵɵpropertyInterpolate("title", ɵɵpipeBind2(2, 5, "configurator.overviewFilter.removeByGroup", ɵɵpureFunction1(8, _c20, ctx_r2.getGroupFilterDescription(ctx_r2.config.overview, groupId_r5))));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.getGroupFilterDescription(ctx_r2.config.overview, groupId_r5), " ");
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r2.iconTypes.CLOSE);
  }
}
function ConfiguratorOverviewFilterBarComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 5);
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("keydown.delete", function ConfiguratorOverviewFilterBarComponent_ng_container_2_Template_button_keydown_delete_1_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onRemoveAll(ctx_r2.config));
    })("click", function ConfiguratorOverviewFilterBarComponent_ng_container_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onRemoveAll(ctx_r2.config));
    });
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementStart(5, "span", 3);
    ɵɵelement(6, "cx-icon", 4);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(2, 3, "configurator.overviewFilter.removeAllFilters"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 5, "configurator.overviewFilter.removeAll"), " ");
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.CLOSE);
  }
}
var _c21 = (a0) => ({
  groupName: a0
});
function ConfiguratorOverviewFilterComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-configurator-overview-filter-bar", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("config", ctx_r0.config);
  }
}
function ConfiguratorOverviewFilterComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "input", 6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵlistener("change", function ConfiguratorOverviewFilterComponent_ng_container_1_Template_input_change_6_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onFilter(ctx_r0.config));
    });
    ɵɵelementEnd();
    ɵɵelementStart(8, "label", 7);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(11, "div", 4)(12, "div", 5)(13, "input", 8);
    ɵɵpipe(14, "cxTranslate");
    ɵɵlistener("change", function ConfiguratorOverviewFilterComponent_ng_container_1_Template_input_change_13_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onFilter(ctx_r0.config));
    });
    ɵɵelementEnd();
    ɵɵelementStart(15, "label", 9);
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 7, "configurator.overviewFilter.byOption"), " ");
    ɵɵadvance(4);
    ɵɵproperty("formControl", ctx_r0.priceFilter);
    ɵɵattribute("aria-label", ɵɵpipeBind1(7, 9, "configurator.a11y.filterOverviewByPrice"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 11, "configurator.overviewFilter.byPrice"), "");
    ɵɵadvance(4);
    ɵɵproperty("formControl", ctx_r0.mySelectionsFilter);
    ɵɵattribute("aria-label", ɵɵpipeBind1(14, 13, "configurator.a11y.filterOverviewByMySelections"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 15, "configurator.overviewFilter.mySelections"), "");
  }
}
function ConfiguratorOverviewFilterComponent_ng_container_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4)(2, "div", 5)(3, "input", 11);
    ɵɵpipe(4, "cxTranslate");
    ɵɵlistener("change", function ConfiguratorOverviewFilterComponent_ng_container_3_ng_container_4_Template_input_change_3_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onFilter(ctx_r0.config));
    });
    ɵɵelementEnd();
    ɵɵelementStart(5, "label", 12);
    ɵɵtext(6);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("id", "cx-configurator-overview-filter-option-group-" + group_r4.id);
    ɵɵpropertyInterpolate("name", "config-overview-group-filter-" + group_r4.id);
    ɵɵproperty("formControl", ctx_r0.groupFilters[i_r5]);
    ɵɵattribute("aria-label", ɵɵpipeBind2(4, 6, "configurator.a11y.filterOverviewByGroup", ɵɵpureFunction1(9, _c21, group_r4.groupDescription)));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("for", "cx-configurator-overview-filter-option-group-" + group_r4.id);
    ɵɵadvance();
    ɵɵtextInterpolate(group_r4.groupDescription);
  }
}
function ConfiguratorOverviewFilterComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(4, ConfiguratorOverviewFilterComponent_ng_container_3_ng_container_4_Template, 7, 11, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "configurator.overviewFilter.byGroup"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.config.overview.possibleGroups);
  }
}
function ConfiguratorOverviewFilterComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.overviewFilter.noFiltersAvailable"), "\n");
  }
}
var _c22 = ["filterButton"];
var _c23 = (a0) => ({
  numAppliedFilters: a0
});
function ConfiguratorOverviewFilterButtonComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 5, 1);
    ɵɵpipe(3, "cxTranslate");
    ɵɵlistener("click", function ConfiguratorOverviewFilterButtonComponent_ng_container_0_ng_container_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const configurationWithOv_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.openFilterModal(configurationWithOv_r2));
    });
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configurationWithOv_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵpropertyInterpolate("title", ɵɵpipeBind2(3, 2, ctx_r2.getNumFilters(configurationWithOv_r2.overview) > 0 ? "configurator.a11y.filterOverviewWithCount" : "configurator.a11y.filterOverview", ɵɵpureFunction1(8, _c23, ctx_r2.getNumFilters(configurationWithOv_r2.overview))));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 5, ctx_r2.getNumFilters(configurationWithOv_r2.overview) > 0 ? "configurator.button.filterOverviewWithCount" : "configurator.button.filterOverview", ɵɵpureFunction1(10, _c23, ctx_r2.getNumFilters(configurationWithOv_r2.overview))), " ");
  }
}
function ConfiguratorOverviewFilterButtonComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorOverviewFilterButtonComponent_ng_container_0_ng_container_1_Template, 6, 12, "ng-container", 3);
    ɵɵpipe(2, "async");
    ɵɵelement(3, "cx-configurator-overview-filter-bar", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configurationWithOv_r2 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ɵɵpipeBind1(2, 2, ctx_r2.isDisplayOnlyVariant()) || (configurationWithOv_r2.overview.possibleGroups == null ? null : configurationWithOv_r2.overview.possibleGroups.length) !== 1);
    ɵɵadvance(2);
    ɵɵproperty("config", configurationWithOv_r2);
  }
}
function ConfiguratorOverviewFilterButtonComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 6);
  }
}
function ConfiguratorOverviewFilterDialogComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8);
    ɵɵelement(2, "cx-configurator-overview-filter", 9);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const config_r1 = ctx.ngIf;
    ɵɵadvance(2);
    ɵɵproperty("config", config_r1)("showFilterBar", false);
  }
}
var _c24 = (a0) => ({
  overviewGroups: a0,
  level: 1,
  idPrefix: ""
});
var _c25 = (a0, a1, a2) => ({
  overviewGroups: a0,
  level: a1,
  idPrefix: a2
});
var _c26 = () => [0, 1, 2, 3, 4, 5];
function ConfiguratorOverviewFormComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfiguratorOverviewFormComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorOverviewFormComponent_ng_container_0_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r1 = ɵɵnextContext().ngIf;
    ɵɵnextContext();
    const groups_r2 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", groups_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c24, configuration_r1.overview == null ? null : configuration_r1.overview.groups));
  }
}
function ConfiguratorOverviewFormComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorOverviewFormComponent_ng_container_0_ng_container_1_Template, 2, 4, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r1 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    const noAttributes_r4 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hasAttributes(configuration_r1))("ngIfElse", noAttributes_r4);
  }
}
function ConfiguratorOverviewFormComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "h2");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "p");
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "configurator.overviewForm.noAttributeHeader"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 4, "configurator.overviewForm.noAttributeText"));
  }
}
function ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h2")(2, "span", 6);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "span", 12);
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r5 = ɵɵnextContext().$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 2, "configurator.a11y.group", ɵɵpureFunction1(5, _c20, group_r5.groupDescription)), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", group_r5.groupDescription, " ");
  }
}
function ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 6);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "h2", 12)(5, "span");
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r5 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 2, "configurator.a11y.group", ɵɵpureFunction1(5, _c20, group_r5.groupDescription)), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(group_r5.groupDescription);
  }
}
function ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_div_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-configurator-overview-attribute", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const attributeOverview_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("attributeOverview", attributeOverview_r6);
  }
}
function ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_div_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-configurator-cpq-overview-attribute", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const attributeOverview_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("attributeOverview", attributeOverview_r6);
  }
}
function ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_div_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-configurator-overview-attribute", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const attributeOverview_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("attributeOverview", attributeOverview_r6);
  }
}
function ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵelementContainerStart(1, 14);
    ɵɵtemplate(2, ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_div_4_ng_container_2_Template, 2, 1, "ng-container", 15)(3, ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_div_4_ng_container_3_Template, 2, 1, "ng-container", 15)(4, ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_div_4_ng_container_4_Template, 2, 1, "ng-container", 16);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const attributeOverview_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const group_r5 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.getStyleClasses(group_r5.attributes, i_r7));
    ɵɵadvance();
    ɵɵproperty("ngSwitch", attributeOverview_r6 == null ? null : attributeOverview_r6.type);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r2.attributeOverviewType.GENERAL);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r2.attributeOverviewType.BUNDLE);
  }
}
function ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r5 = ɵɵnextContext().$implicit;
    const ctx_r7 = ɵɵnextContext();
    const level_r9 = ctx_r7.level;
    const idPrefix_r10 = ctx_r7.idPrefix;
    const ctx_r2 = ɵɵnextContext();
    const groups_r2 = ɵɵreference(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", groups_r2)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c25, group_r5.subGroups, level_r9 + 1, ctx_r2.getPrefixId(idPrefix_r10, group_r5.id)));
  }
}
function ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8);
    ɵɵtemplate(2, ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_ng_container_2_Template, 7, 7, "ng-container", 9)(3, ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_ng_container_3_Template, 7, 7, "ng-container", 9)(4, ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_div_4_Template, 5, 4, "div", 10)(5, ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_ng_container_5_Template, 2, 6, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r5 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext();
    const level_r9 = ctx_r7.level;
    const idPrefix_r10 = ctx_r7.idPrefix;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r2.getGroupId(idPrefix_r10, group_r5.id));
    ɵɵproperty("ngClass", ctx_r2.getGroupLevelStyleClasses(level_r9, group_r5.subGroups));
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yConfiguratorOverviewHeaderVPC");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yConfiguratorOverviewHeaderVPC");
    ɵɵadvance();
    ɵɵproperty("ngForOf", group_r5.attributes);
    ɵɵadvance();
    ɵɵproperty("ngIf", (group_r5.subGroups == null ? null : group_r5.subGroups.length) > 0);
  }
}
function ConfiguratorOverviewFormComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(3, ConfiguratorOverviewFormComponent_ng_template_4_ng_container_3_Template, 6, 6, "ng-container", 7);
  }
  if (rf & 2) {
    const overviewGroups_r11 = ctx.overviewGroups;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "configurator.a11y.listOfAttributesAndValues"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", overviewGroups_r11);
  }
}
function ConfiguratorOverviewFormComponent_ng_template_6_ng_container_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 21);
    ɵɵelement(2, "div", 22);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 23);
    ɵɵelement(4, "div", 24);
    ɵɵelementEnd();
    ɵɵelement(5, "div", 25);
    ɵɵelementContainerEnd();
  }
}
function ConfiguratorOverviewFormComponent_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 18);
    ɵɵelement(2, "div", 19);
    ɵɵelementStart(3, "div", 20);
    ɵɵtemplate(4, ConfiguratorOverviewFormComponent_ng_template_6_ng_container_0_ng_container_4_Template, 6, 0, "ng-container", 7);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ɵɵpureFunction0(1, _c26));
  }
}
function ConfiguratorOverviewFormComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfiguratorOverviewFormComponent_ng_template_6_ng_container_0_Template, 5, 2, "ng-container", 7);
  }
  if (rf & 2) {
    ɵɵproperty("ngForOf", ɵɵpureFunction0(1, _c16));
  }
}
function ConfiguratorOverviewMenuComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfiguratorOverviewMenuComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorOverviewMenuComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const groups_r2 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", groups_r2)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c24, ctx_r0.config.overview.groups));
  }
}
function ConfiguratorOverviewMenuComponent_ng_template_1_ng_container_1_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfiguratorOverviewMenuComponent_ng_template_1_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorOverviewMenuComponent_ng_template_1_ng_container_1_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r4 = ɵɵnextContext().$implicit;
    const ctx_r5 = ɵɵnextContext();
    const level_r7 = ctx_r5.level;
    const idPrefix_r5 = ctx_r5.idPrefix;
    const ctx_r0 = ɵɵnextContext();
    const groups_r2 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", groups_r2)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c25, group_r4.subGroups, level_r7 + 1, ctx_r0.getPrefixId(idPrefix_r5, group_r4.id)));
  }
}
function ConfiguratorOverviewMenuComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 4)(2, "button", 5);
    ɵɵpipe(3, "cxTranslate");
    ɵɵlistener("click", function ConfiguratorOverviewMenuComponent_ng_template_1_ng_container_1_Template_button_click_2_listener() {
      const group_r4 = ɵɵrestoreView(_r3).$implicit;
      const idPrefix_r5 = ɵɵnextContext().idPrefix;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.navigateToGroup(idPrefix_r5, group_r4.id));
    });
    ɵɵelementStart(4, "span", 6);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelement(6, "cx-icon", 7);
    ɵɵelementEnd();
    ɵɵtemplate(7, ConfiguratorOverviewMenuComponent_ng_template_1_ng_container_1_ng_container_7_Template, 2, 6, "ng-container", 1);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const ctx_r5 = ɵɵnextContext();
    const level_r7 = ctx_r5.level;
    const idPrefix_r5 = ctx_r5.idPrefix;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r0.getGroupLevelStyleClasses(level_r7));
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r0.getMenuItemId(idPrefix_r5, group_r4.id));
    ɵɵattribute("aria-label", ɵɵpipeBind2(3, 6, "configurator.a11y.groupName", ɵɵpureFunction1(9, _c20, group_r4.groupDescription)));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", group_r4.groupDescription, "");
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.iconTypes.ARROW_LEFT);
    ɵɵadvance();
    ɵɵproperty("ngIf", (group_r4.subGroups == null ? null : group_r4.subGroups.length) > 0);
  }
}
function ConfiguratorOverviewMenuComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, ConfiguratorOverviewMenuComponent_ng_template_1_ng_container_1_Template, 8, 11, "ng-container", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const overviewGroups_r8 = ctx.overviewGroups;
    ɵɵadvance();
    ɵɵproperty("ngForOf", overviewGroups_r8);
  }
}
var _c27 = (a0, a1) => ({
  entityKey: a0,
  ownerType: a1
});
var _c28 = (a0, a1) => ({
  cxRoute: a0,
  params: a1
});
var _c29 = (a0, a1) => ({
  resolveIssues: true,
  skipConflicts: a0,
  productCode: a1
});
var _c30 = (a0) => ({
  resolveIssues: true,
  productCode: a0
});
function ConfiguratorOverviewNotificationBannerComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelement(1, "cx-icon", 4);
    ɵɵelementStart(2, "div", 5);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementStart(5, "button", 6);
    ɵɵpipe(6, "cxUrl");
    ɵɵpipe(7, "async");
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const numberOfIssues_r1 = ctx.ngIf;
    const routerData_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("type", ctx_r2.iconTypes.ERROR);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 5, "configurator.notificationBanner.numberOfIssues", ɵɵpureFunction1(14, _c7, numberOfIssues_r1)), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 8, ɵɵpureFunction2(19, _c28, "configure" + routerData_r2.owner.configuratorType, ɵɵpureFunction2(16, _c27, routerData_r2.owner.id, routerData_r2.owner.type))))("queryParams", ɵɵpureFunction2(22, _c29, ɵɵpipeBind1(7, 10, ctx_r2.skipConflictsOnIssueNavigation$), routerData_r2.productCode));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 12, "configurator.header.resolveIssues"), " ");
  }
}
function ConfiguratorOverviewNotificationBannerComponent_ng_container_0_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "cx-icon", 4);
    ɵɵelementStart(2, "div", 8);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementStart(5, "button", 9);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const numberOfConflicts_r4 = ctx.ngIf;
    const routerData_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("type", ctx_r2.iconTypes.WARNING);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 5, "configurator.notificationBanner.numberOfConflicts", ɵɵpureFunction1(12, _c7, numberOfConflicts_r4)), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 8, ɵɵpureFunction2(17, _c28, "configure" + routerData_r2.owner.configuratorType, ɵɵpureFunction2(14, _c27, routerData_r2.owner.id, routerData_r2.owner.type))))("queryParams", ɵɵpureFunction1(20, _c30, routerData_r2.productCode));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 10, "configurator.header.resolveConflicts"), " ");
  }
}
function ConfiguratorOverviewNotificationBannerComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorOverviewNotificationBannerComponent_ng_container_0_ng_container_1_div_1_Template, 10, 25, "div", 1);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, ConfiguratorOverviewNotificationBannerComponent_ng_container_0_ng_container_1_div_3_Template, 9, 22, "div", 2);
    ɵɵpipe(4, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r2.numberOfIssues$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx_r2.numberOfConflicts$));
  }
}
function ConfiguratorOverviewNotificationBannerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorOverviewNotificationBannerComponent_ng_container_0_ng_container_1_Template, 5, 6, "ng-container", 0);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.configurationOverview$));
  }
}
var _c31 = ["menuTab"];
var _c32 = ["filterTab"];
var _c33 = () => [0, 1];
var _c34 = () => [0, 1, 2, 3];
function ConfiguratorOverviewSidebarComponent_ng_container_0_cx_configurator_overview_filter_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-overview-filter", 7);
  }
  if (rf & 2) {
    const configurationWithOv_r3 = ɵɵnextContext().ngIf;
    ɵɵproperty("config", configurationWithOv_r3);
  }
}
function ConfiguratorOverviewSidebarComponent_ng_container_0_cx_configurator_overview_menu_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configurator-overview-menu", 7);
  }
  if (rf & 2) {
    const configurationWithOv_r3 = ɵɵnextContext().ngIf;
    ɵɵproperty("config", configurationWithOv_r3);
  }
}
function ConfiguratorOverviewSidebarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4)(2, "button", 5, 1);
    ɵɵlistener("keydown", function ConfiguratorOverviewSidebarComponent_ng_container_0_Template_button_keydown_2_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.switchTabOnArrowPress($event, "#menuTab"));
    })("keydown.enter", function ConfiguratorOverviewSidebarComponent_ng_container_0_Template_button_keydown_enter_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenu());
    })("keydown.space", function ConfiguratorOverviewSidebarComponent_ng_container_0_Template_button_keydown_space_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenu());
    })("click", function ConfiguratorOverviewSidebarComponent_ng_container_0_Template_button_click_2_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onMenu());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 5, 2);
    ɵɵlistener("keydown", function ConfiguratorOverviewSidebarComponent_ng_container_0_Template_button_keydown_6_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.switchTabOnArrowPress($event, "#filterTab"));
    })("keydown.enter", function ConfiguratorOverviewSidebarComponent_ng_container_0_Template_button_keydown_enter_6_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFilter());
    })("keydown.space", function ConfiguratorOverviewSidebarComponent_ng_container_0_Template_button_keydown_space_6_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFilter());
    })("click", function ConfiguratorOverviewSidebarComponent_ng_container_0_Template_button_click_6_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFilter());
    });
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(10, ConfiguratorOverviewSidebarComponent_ng_container_0_cx_configurator_overview_filter_10_Template, 1, 1, "cx-configurator-overview-filter", 6)(11, ConfiguratorOverviewSidebarComponent_ng_container_0_cx_configurator_overview_menu_11_Template, 1, 1, "cx-configurator-overview-menu", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵclassProp("active", !ctx_r1.showFilter);
    ɵɵproperty("tabindex", ctx_r1.getTabIndexForMenuTab());
    ɵɵattribute("aria-selected", !ctx_r1.showFilter);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 12, "configurator.overviewSidebar.menu"), " ");
    ɵɵadvance(2);
    ɵɵclassProp("active", ctx_r1.showFilter);
    ɵɵproperty("tabindex", ctx_r1.getTabIndexForFilterTab());
    ɵɵattribute("aria-selected", ctx_r1.showFilter);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 14, "configurator.overviewSidebar.filter"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.showFilter);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.showFilter);
  }
}
function ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "div", 13);
    ɵɵelementEnd();
  }
}
function ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 15);
    ɵɵtemplate(2, ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_4_div_2_Template, 2, 0, "div", 16);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpureFunction0(1, _c34));
  }
}
function ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "div", 13);
    ɵɵelementEnd();
  }
}
function ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "div", 13);
    ɵɵelementEnd();
  }
}
function ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 15);
    ɵɵtemplate(2, ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_5_div_2_Template, 2, 0, "div", 16);
    ɵɵelementStart(3, "div", 17);
    ɵɵtemplate(4, ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_5_div_4_Template, 2, 0, "div", 16);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpureFunction0(2, _c16));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpureFunction0(3, _c16));
  }
}
function ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵelement(1, "div", 13);
    ɵɵelementEnd();
  }
}
function ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 11);
    ɵɵtemplate(2, ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_6_div_2_Template, 2, 0, "div", 16);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpureFunction0(1, _c33));
  }
}
function ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 11)(2, "div", 12);
    ɵɵelement(3, "div", 13);
    ɵɵelementEnd();
    ɵɵtemplate(4, ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_4_Template, 3, 2, "ng-container", 14)(5, ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_5_Template, 5, 4, "ng-container", 14)(6, ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_ng_container_6_Template, 3, 2, "ng-container", 14);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    ɵɵadvance(4);
    ɵɵproperty("ngIf", i_r4 === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r4 === 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", i_r4 === 2);
  }
}
function ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_ng_container_1_Template, 7, 3, "ng-container", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpureFunction0(1, _c16));
  }
}
function ConfiguratorOverviewSidebarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelement(1, "div", 9);
    ɵɵtemplate(2, ConfiguratorOverviewSidebarComponent_ng_template_2_ng_container_2_Template, 2, 2, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ɵɵpureFunction0(1, _c33));
  }
}
function ConfiguratorPreviousNextButtonsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 1);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "cxTranslate");
    ɵɵlistener("click", function ConfiguratorPreviousNextButtonsComponent_ng_container_0_ng_container_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const configuration_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onPrevious(configuration_r2));
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 2);
    ɵɵpipe(8, "async");
    ɵɵpipe(9, "async");
    ɵɵpipe(10, "cxTranslate");
    ɵɵlistener("click", function ConfiguratorPreviousNextButtonsComponent_ng_container_0_ng_container_1_Template_button_click_7_listener() {
      ɵɵrestoreView(_r1);
      const configuration_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onNext(configuration_r2));
    });
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("disabled", ɵɵpipeBind1(2, 6, ctx_r2.isFirstGroup(configuration_r2.owner)));
    ɵɵattribute("aria-label", ɵɵpipeBind2(4, 10, "configurator.a11y.previous", ɵɵpureFunction1(24, _c20, ɵɵpipeBind1(3, 8, ctx_r2.getPreviousGroupDescription(configuration_r2)))));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 13, "configurator.button.previous"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ɵɵpipeBind1(8, 15, ctx_r2.isLastGroup(configuration_r2.owner)));
    ɵɵattribute("aria-label", ɵɵpipeBind2(10, 19, "configurator.a11y.next", ɵɵpureFunction1(26, _c20, ɵɵpipeBind1(9, 17, ctx_r2.getNextGroupDescription(configuration_r2)))));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 22, "configurator.button.next"), " ");
  }
}
function ConfiguratorPreviousNextButtonsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorPreviousNextButtonsComponent_ng_container_0_ng_container_1_Template, 13, 28, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", configuration_r2.groups.length > 1);
  }
}
function ConfiguratorPriceSummaryComponent_ng_container_0_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 6)(2, "div", 4);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 5);
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 7)(8, "div", 4);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 5);
    ɵɵtext(12);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r1 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, "configurator.priceSummary.basePrice"), ": ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", configuration_r1 == null ? null : configuration_r1.priceSummary == null ? null : configuration_r1.priceSummary.basePrice == null ? null : configuration_r1.priceSummary.basePrice.formattedValue, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 6, "configurator.priceSummary.selectedOptions"), ": ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", configuration_r1 == null ? null : configuration_r1.priceSummary == null ? null : configuration_r1.priceSummary.selectedOptions == null ? null : configuration_r1.priceSummary.selectedOptions.formattedValue, " ");
  }
}
function ConfiguratorPriceSummaryComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2);
    ɵɵtemplate(3, ConfiguratorPriceSummaryComponent_ng_container_0_ng_container_1_ng_container_3_Template, 13, 8, "ng-container", 0);
    ɵɵelementStart(4, "div", 3)(5, "div", 4);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 5);
    ɵɵtext(9);
    ɵɵelementEnd()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !configuration_r1.hideBasePriceAndSelectedOptions);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 3, "configurator.priceSummary.totalPricePerItem"), ": ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", configuration_r1 == null ? null : configuration_r1.priceSummary == null ? null : configuration_r1.priceSummary.currentTotal == null ? null : configuration_r1.priceSummary.currentTotal.formattedValue, " ");
  }
}
function ConfiguratorPriceSummaryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorPriceSummaryComponent_ng_container_0_ng_container_1_Template, 10, 5, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r1 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", configuration_r1.pricingEnabled);
  }
}
var _c35 = (a0) => ({
  product: a0
});
var _c36 = (a0) => ({
  name: a0
});
var _c37 = (a0) => ({
  logsys: a0
});
var _c38 = (a0) => ({
  version: a0
});
function ConfiguratorProductTitleComponent_ng_container_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14)(2, "span", 15);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelement(5, "cx-icon", 16);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const product_r3 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 3, "configurator.header.showMore"));
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r1.iconTypes.CARET_DOWN);
    ɵɵattribute("aria-label", ɵɵpipeBind2(6, 5, "configurator.a11y.showMoreProductInfo", ɵɵpureFunction1(8, _c35, product_r3.name)));
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 17);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(4, "cx-icon", 16);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const product_r3 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, "configurator.header.showLess"), " ");
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r1.iconTypes.CARET_UP);
    ɵɵattribute("aria-label", ɵɵpipeBind2(5, 5, "configurator.a11y.showLessProductInfo", ɵɵpureFunction1(8, _c35, product_r3.name)));
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_span_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r3 = ɵɵnextContext().ngIf;
    ɵɵattribute("title", ɵɵpipeBind1(1, 2, "configurator.a11y.productName"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", product_r3.name, " ");
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_span_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r3 = ɵɵnextContext().ngIf;
    ɵɵattribute("title", ɵɵpipeBind1(1, 2, "configurator.a11y.productCode"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", product_r3.code, " ");
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_span_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const product_r3 = ɵɵnextContext().ngIf;
    ɵɵattribute("title", ɵɵpipeBind1(1, 2, "configurator.a11y.productDescription"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", product_r3.description, " ");
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 19)(2, "span", 20);
    ɵɵpipe(3, "cxTranslate");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 21);
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind2(3, 3, "configurator.a11y.kbKeyName", ɵɵpureFunction1(8, _c36, configuration_r4.kbKey.kbName)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 6, "configurator.header.kbKeyName"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", configuration_r4.kbKey.kbName, " ");
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 19)(2, "span", 20);
    ɵɵpipe(3, "cxTranslate");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 21);
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind2(3, 3, "configurator.a11y.kbKeyLogsys", ɵɵpureFunction1(8, _c37, configuration_r4.kbKey.kbLogsys)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 6, "configurator.header.kbKeyLogsys"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", configuration_r4.kbKey.kbLogsys, " ");
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 19)(2, "span", 20);
    ɵɵpipe(3, "cxTranslate");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 21);
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind2(3, 3, "configurator.a11y.kbKeyVersion", ɵɵpureFunction1(8, _c38, configuration_r4.kbKey.kbVersion)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 6, "configurator.header.kbKeyVersion"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", configuration_r4.kbKey.kbVersion, " ");
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 19)(2, "span", 20);
    ɵɵpipe(3, "cxTranslate");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 21);
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind2(3, 3, "configurator.a11y.kbKeyBuildNr", ɵɵpureFunction1(8, _c12, configuration_r4.kbKey.kbBuildNumber)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 6, "configurator.header.kbKeyBuildNr"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", configuration_r4.kbKey.kbBuildNumber, " ");
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 18);
    ɵɵtemplate(2, ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_ng_container_1_ng_container_2_Template, 8, 10, "ng-container", 6)(3, ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_ng_container_1_ng_container_3_Template, 8, 10, "ng-container", 6)(4, ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_ng_container_1_ng_container_4_Template, 8, 10, "ng-container", 6)(5, ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_ng_container_1_ng_container_5_Template, 8, 10, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵproperty("ngIf", configuration_r4.kbKey.kbName);
    ɵɵadvance();
    ɵɵproperty("ngIf", configuration_r4.kbKey.kbLogsys);
    ɵɵadvance();
    ɵɵproperty("ngIf", configuration_r4.kbKey.kbVersion);
    ɵɵadvance();
    ɵɵproperty("ngIf", configuration_r4.kbKey.kbBuildNumber);
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_ng_container_1_Template, 6, 4, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const configuration_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", configuration_r4.kbKey);
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_ng_container_1_Template, 2, 1, "ng-container", 6);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r1.configuration$));
  }
}
function ConfiguratorProductTitleComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2)(2, "div", 3)(3, "span", 4);
    ɵɵtext(4);
    ɵɵelementEnd()();
    ɵɵelementStart(5, "button", 5);
    ɵɵlistener("click", function ConfiguratorProductTitleComponent_ng_container_0_Template_button_click_5_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.triggerDetails());
    });
    ɵɵtemplate(6, ConfiguratorProductTitleComponent_ng_container_0_ng_container_6_Template, 7, 10, "ng-container", 6)(7, ConfiguratorProductTitleComponent_ng_container_0_ng_container_7_Template, 6, 10, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 7)(9, "div", 8);
    ɵɵelement(10, "cx-media", 9);
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 10)(12, "div", 11);
    ɵɵtemplate(13, ConfiguratorProductTitleComponent_ng_container_0_span_13_Template, 3, 4, "span", 6);
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 12);
    ɵɵtemplate(15, ConfiguratorProductTitleComponent_ng_container_0_span_15_Template, 3, 4, "span", 6);
    ɵɵelementEnd();
    ɵɵelementStart(16, "div", 13);
    ɵɵtemplate(17, ConfiguratorProductTitleComponent_ng_container_0_span_17_Template, 3, 4, "span", 6);
    ɵɵelementEnd();
    ɵɵtemplate(18, ConfiguratorProductTitleComponent_ng_container_0_ng_container_18_Template, 3, 3, "ng-container", 6);
    ɵɵpipe(19, "async");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const product_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("cxConfiguratorMainAriaLabelledBy", "cxConfigProductName");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", product_r3.name, " ");
    ɵɵadvance();
    ɵɵattribute("aria-expanded", ctx_r1.showMore);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.showMore);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showMore);
    ɵɵadvance();
    ɵɵclassProp("open", ctx_r1.showMore);
    ɵɵadvance(2);
    ɵɵproperty("container", product_r3 == null ? null : product_r3.images == null ? null : product_r3.images.PRIMARY);
    ɵɵadvance();
    ɵɵattribute("aria-hidden", ctx_r1.showMore ? false : true);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", product_r3.name);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", product_r3.code);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", product_r3.description);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(19, 13, ctx_r1.expMode));
  }
}
function ConfiguratorProductTitleComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 22);
  }
}
function ConfiguratorRestartDialogComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵlistener("esc", function ConfiguratorRestartDialogComponent_ng_container_1_ng_container_1_Template_div_esc_1_listener() {
      const product_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.backToPDP(product_r2));
    });
    ɵɵelementStart(2, "div", 3)(3, "h3", 4);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "button", 5);
    ɵɵpipe(7, "cxTranslate");
    ɵɵlistener("click", function ConfiguratorRestartDialogComponent_ng_container_1_ng_container_1_Template_button_click_6_listener() {
      const product_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.backToPDP(product_r2));
    });
    ɵɵelementStart(8, "span", 6);
    ɵɵelement(9, "cx-icon", 7);
    ɵɵelementEnd()()();
    ɵɵelementStart(10, "div", 8)(11, "div", 9);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(14, "button", 10);
    ɵɵlistener("click", function ConfiguratorRestartDialogComponent_ng_container_1_ng_container_1_Template_button_click_14_listener() {
      const product_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.resume(product_r2));
    });
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(17, "button", 11);
    ɵɵlistener("click", function ConfiguratorRestartDialogComponent_ng_container_1_ng_container_1_Template_button_click_17_listener() {
      ɵɵrestoreView(_r1);
      const dialogData_r4 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.restart(dialogData_r4.owner));
    });
    ɵɵtext(18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("cxFocus", ctx_r2.focusConfig);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 7, "configurator.restartDialog.title"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(7, 9, "configurator.a11y.closeRestartDialog"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.CLOSE);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 11, "configurator.restartDialog.description"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 13, "configurator.restartDialog.resumeButton"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 15, "configurator.restartDialog.restartButton"), " ");
  }
}
function ConfiguratorRestartDialogComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorRestartDialogComponent_ng_container_1_ng_container_1_Template, 20, 17, "ng-container", 1);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.product$));
  }
}
var _c39 = ["configTab"];
var _c40 = ["overviewTab"];
function ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6)(1, "a", 7, 1);
    ɵɵpipe(3, "cxTranslate");
    ɵɵpipe(4, "cxTranslate");
    ɵɵlistener("keydown", function ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template_a_keydown_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.switchTabOnArrowPress($event, "#configTab"));
    })("keydown.enter", function ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template_a_keydown_enter_1_listener() {
      ɵɵrestoreView(_r1);
      const routerData_r3 = ɵɵnextContext(3).ngIf;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navigateToConfiguration(routerData_r3));
    })("keydown.space", function ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template_a_keydown_space_1_listener() {
      ɵɵrestoreView(_r1);
      const routerData_r3 = ɵɵnextContext(3).ngIf;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navigateToConfiguration(routerData_r3));
    })("click", function ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template_a_click_1_listener() {
      ɵɵrestoreView(_r1);
      const routerData_r3 = ɵɵnextContext(3).ngIf;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navigateToConfiguration(routerData_r3));
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "a", 7, 2);
    ɵɵpipe(9, "cxTranslate");
    ɵɵpipe(10, "cxTranslate");
    ɵɵlistener("keydown", function ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template_a_keydown_7_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.switchTabOnArrowPress($event, "#overviewTab"));
    })("keydown.enter", function ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template_a_keydown_enter_7_listener() {
      ɵɵrestoreView(_r1);
      const routerData_r3 = ɵɵnextContext(3).ngIf;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navigateToOverview(routerData_r3));
    })("keydown.space", function ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template_a_keydown_space_7_listener() {
      ɵɵrestoreView(_r1);
      const routerData_r3 = ɵɵnextContext(3).ngIf;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navigateToOverview(routerData_r3));
    })("click", function ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template_a_click_7_listener() {
      ɵɵrestoreView(_r1);
      const routerData_r3 = ɵɵnextContext(3).ngIf;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navigateToOverview(routerData_r3));
    });
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const pageType_r4 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵclassProp("active", !ctx_r1.isOverviewPage(pageType_r4));
    ɵɵproperty("tabindex", ctx_r1.getTabIndexForConfigTab(pageType_r4));
    ɵɵattribute("aria-selected", !ctx_r1.isOverviewPage(pageType_r4))("aria-label", !ctx_r1.isOverviewPage(pageType_r4) ? ɵɵpipeBind1(3, 12, "configurator.a11y.configurationPage") : ɵɵpipeBind1(4, 14, "configurator.a11y.configurationPageLink"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 16, "configurator.tabBar.configuration"));
    ɵɵadvance(2);
    ɵɵclassProp("active", ctx_r1.isOverviewPage(pageType_r4));
    ɵɵproperty("tabindex", ctx_r1.getTabIndexForOverviewTab(pageType_r4));
    ɵɵattribute("aria-selected", ctx_r1.isOverviewPage(pageType_r4))("aria-label", ctx_r1.isOverviewPage(pageType_r4) ? ɵɵpipeBind1(9, 18, "configurator.a11y.overviewPage") : ɵɵpipeBind1(10, 20, "configurator.a11y.overviewPageLink"));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 22, "configurator.tabBar.overview"));
  }
}
function ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_div_1_Template, 13, 24, "div", 5);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r1.pageType$));
  }
}
function ConfiguratorTabBarComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorTabBarComponent_ng_container_0_ng_container_1_ng_container_1_Template, 3, 3, "ng-container", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const routerData_r3 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", !routerData_r3.displayOnly);
  }
}
function ConfiguratorTabBarComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 8);
  }
}
function ConfiguratorTabBarComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorTabBarComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, ConfiguratorTabBarComponent_ng_container_0_ng_template_3_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ghostTabBar_r5 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r1.configuration$))("ngIfElse", ghostTabBar_r5);
  }
}
var _c41 = (a0) => ({
  title: a0
});
function ConfiguratorVariantCarouselComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-product-carousel-item", 4);
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    ɵɵproperty("item", item_r1);
  }
}
function ConfiguratorVariantCarouselComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵelement(2, "cx-carousel", 3);
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "async");
    ɵɵpipe(5, "cxTranslate");
    ɵɵtemplate(6, ConfiguratorVariantCarouselComponent_ng_container_0_ng_template_6_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const items_r2 = ctx.ngIf;
    const carouselItem_r3 = ɵɵreference(7);
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("items", items_r2)("title", ɵɵpipeBind1(3, 4, ctx_r3.title$))("template", carouselItem_r3);
    ɵɵattribute("aria-label", ɵɵpipeBind2(5, 8, "productCarousel.carouselLabel", ɵɵpureFunction1(11, _c41, ɵɵpipeBind1(4, 6, ctx_r3.title$))));
  }
}
var Configurator;
(function(Configurator2) {
  let GroupType;
  (function(GroupType2) {
    GroupType2["ATTRIBUTE_GROUP"] = "AttributeGroup";
    GroupType2["SUB_ITEM_GROUP"] = "SubItemGroup";
    GroupType2["CONFLICT_HEADER_GROUP"] = "ConflictHeaderGroup";
    GroupType2["CONFLICT_GROUP"] = "ConflictGroup";
  })(GroupType = Configurator2.GroupType || (Configurator2.GroupType = {}));
  let UiType;
  (function(UiType2) {
    UiType2["NOT_IMPLEMENTED"] = "not_implemented";
    UiType2["RADIOBUTTON"] = "radioGroup";
    UiType2["RADIOBUTTON_ADDITIONAL_INPUT"] = "radioGroup_add";
    UiType2["CHECKBOX"] = "checkBox";
    UiType2["CHECKBOXLIST"] = "checkBoxList";
    UiType2["DROPDOWN"] = "dropdown";
    UiType2["DROPDOWN_ADDITIONAL_INPUT"] = "dropdown_add";
    UiType2["LISTBOX"] = "listbox";
    UiType2["LISTBOX_MULTI"] = "listboxmulti";
    UiType2["READ_ONLY"] = "readonly";
    UiType2["READ_ONLY_SINGLE_SELECTION_IMAGE"] = "read_only_single_selection_image";
    UiType2["READ_ONLY_MULTI_SELECTION_IMAGE"] = "read_only_multi_selection_image";
    UiType2["STRING"] = "string";
    UiType2["NUMERIC"] = "numeric";
    UiType2["SAP_DATE"] = "sap_date";
    UiType2["AUTO_COMPLETE_CUSTOM"] = "input_autocomplete";
    UiType2["MULTI_SELECTION_IMAGE"] = "multi_selection_image";
    UiType2["SINGLE_SELECTION_IMAGE"] = "single_selection_image";
    UiType2["CHECKBOXLIST_PRODUCT"] = "checkBoxListProduct";
    UiType2["DROPDOWN_PRODUCT"] = "dropdownProduct";
    UiType2["RADIOBUTTON_PRODUCT"] = "radioGroupProduct";
  })(UiType = Configurator2.UiType || (Configurator2.UiType = {}));
  let ImageFormatType;
  (function(ImageFormatType2) {
    ImageFormatType2["VALUE_IMAGE"] = "VALUE_IMAGE";
    ImageFormatType2["ATTRIBUTE_IMAGE"] = "ATTRIBUTE_IMAGE";
  })(ImageFormatType = Configurator2.ImageFormatType || (Configurator2.ImageFormatType = {}));
  let ImageType;
  (function(ImageType2) {
    ImageType2["PRIMARY"] = "PRIMARY";
    ImageType2["GALLERY"] = "GALLERY";
  })(ImageType = Configurator2.ImageType || (Configurator2.ImageType = {}));
  let DataType;
  (function(DataType2) {
    DataType2["INPUT_STRING"] = "String";
    DataType2["INPUT_NUMBER"] = "Number";
    DataType2["USER_SELECTION_QTY_ATTRIBUTE_LEVEL"] = "UserSelectionWithAttributeQuantity";
    DataType2["USER_SELECTION_QTY_VALUE_LEVEL"] = "UserSelectionWithValueQuantity";
    DataType2["USER_SELECTION_NO_QTY"] = "UserSelectionWithoutQuantity";
    DataType2["NOT_IMPLEMENTED"] = "not_implemented";
  })(DataType = Configurator2.DataType || (Configurator2.DataType = {}));
  let UpdateType;
  (function(UpdateType2) {
    UpdateType2["ATTRIBUTE"] = "Attribute";
    UpdateType2["ATTRIBUTE_QUANTITY"] = "AttributeQuantity";
    UpdateType2["VALUE_QUANTITY"] = "ValueQuantity";
  })(UpdateType = Configurator2.UpdateType || (Configurator2.UpdateType = {}));
  let AttributeOverviewType;
  (function(AttributeOverviewType2) {
    AttributeOverviewType2["GENERAL"] = "general";
    AttributeOverviewType2["BUNDLE"] = "bundle";
  })(AttributeOverviewType = Configurator2.AttributeOverviewType || (Configurator2.AttributeOverviewType = {}));
  let ValidationType;
  (function(ValidationType2) {
    ValidationType2["NONE"] = "NONE";
    ValidationType2["NUMERIC"] = "NUMERIC";
    ValidationType2["SAP_DATE"] = "SAP_DATE";
  })(ValidationType = Configurator2.ValidationType || (Configurator2.ValidationType = {}));
  let OverviewFilter;
  (function(OverviewFilter2) {
    OverviewFilter2["VISIBLE"] = "PRIMARY";
    OverviewFilter2["USER_INPUT"] = "USER_INPUT";
    OverviewFilter2["PRICE_RELEVANT"] = "PRICE_RELEVANT";
  })(OverviewFilter = Configurator2.OverviewFilter || (Configurator2.OverviewFilter = {}));
  Configurator2.ConflictIdPrefix = "CONFLICT";
  Configurator2.ConflictHeaderId = "CONFLICT_HEADER";
  Configurator2.CustomUiTypeIndicator = "___";
  Configurator2.RetractValueCode = "###RETRACT_VALUE_CODE###";
})(Configurator || (Configurator = {}));
var CONFIGURATOR_FEATURE = "productConfigurator";
var CONFIGURATOR_DATA = "[Configurator] Configuration Data";
var READ_CART_ENTRY_CONFIGURATION = "[Configurator] Read Cart Entry Configuration";
var READ_CART_ENTRY_CONFIGURATION_SUCCESS = "[Configurator] Read Cart Entry Configuration Success";
var READ_CART_ENTRY_CONFIGURATION_FAIL = "[Configurator] Read Cart Entry Configuration Fail";
var READ_ORDER_ENTRY_CONFIGURATION = "[Configurator] Read Order Entry Configuration";
var READ_ORDER_ENTRY_CONFIGURATION_SUCCESS = "[Configurator] Read Order Entry Configuration Success";
var READ_ORDER_ENTRY_CONFIGURATION_FAIL = "[Configurator] Read Order Entry Configuration Fail";
var ADD_TO_CART = "[Configurator] Add to cart";
var UPDATE_CART_ENTRY = "[Configurator] Update cart entry";
var UPDATE_CART_ENTRY_SUCCESS = "[Configurator] Update cart entry success";
var ADD_NEXT_OWNER = "[Configurator] Add next owner";
var SET_NEXT_OWNER_CART_ENTRY = "[Configurator] Set next owner cart entry";
var REMOVE_CART_BOUND_CONFIGURATIONS = "[Configurator] Remove cart bound configurations";
var ReadCartEntryConfiguration = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = READ_CART_ENTRY_CONFIGURATION;
  }
};
var ReadCartEntryConfigurationSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = READ_CART_ENTRY_CONFIGURATION_SUCCESS;
  }
};
var ReadCartEntryConfigurationFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey, payload.error);
    this.payload = payload;
    this.type = READ_CART_ENTRY_CONFIGURATION_FAIL;
  }
};
var ReadOrderEntryConfiguration = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = READ_ORDER_ENTRY_CONFIGURATION;
  }
};
var ReadOrderEntryConfigurationSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = READ_ORDER_ENTRY_CONFIGURATION_SUCCESS;
  }
};
var ReadOrderEntryConfigurationFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey, payload.error);
    this.payload = payload;
    this.type = READ_ORDER_ENTRY_CONFIGURATION_FAIL;
  }
};
var AddToCart = class extends utilsGroup.EntityProcessesIncrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = ADD_TO_CART;
  }
};
var UpdateCartEntry = class extends utilsGroup.EntityProcessesIncrementAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = UPDATE_CART_ENTRY;
  }
};
var AddNextOwner = class {
  constructor(payload) {
    this.payload = payload;
    this.type = ADD_NEXT_OWNER;
  }
};
var RemoveCartBoundConfigurations = class {
  constructor() {
    this.type = REMOVE_CART_BOUND_CONFIGURATIONS;
  }
};
var SetNextOwnerCartEntry = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.configuration.owner.key);
    this.payload = payload;
    this.type = SET_NEXT_OWNER_CART_ENTRY;
  }
};
var SEARCH_VARIANTS = "[Configurator] Search Variants";
var SEARCH_VARIANTS_FAIL = "[Configurator]  Search Variants fail";
var SEARCH_VARIANTS_SUCCESS = "[Configurator] Search Variants success";
var SearchVariants = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = SEARCH_VARIANTS;
  }
};
var SearchVariantsFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey, payload.error);
    this.payload = payload;
    this.type = SEARCH_VARIANTS_FAIL;
  }
};
var SearchVariantsSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey);
    this.payload = payload;
    this.type = SEARCH_VARIANTS_SUCCESS;
  }
};
var CREATE_CONFIGURATION = "[Configurator] Create Configuration";
var CREATE_CONFIGURATION_FAIL = "[Configurator] Create Configuration Fail";
var CREATE_CONFIGURATION_SUCCESS = "[Configurator] Create Configuration Sucess";
var READ_CONFIGURATION = "[Configurator] Read Configuration";
var READ_CONFIGURATION_FAIL = "[Configurator] Read Configuration Fail";
var READ_CONFIGURATION_SUCCESS = "[Configurator] Read Configuration Sucess";
var UPDATE_CONFIGURATION = "[Configurator] Update Configuration";
var UPDATE_CONFIGURATION_FAIL = "[Configurator] Update Configuration Fail";
var UPDATE_CONFIGURATION_SUCCESS = "[Configurator] Update Configuration Success";
var UPDATE_CONFIGURATION_FINALIZE_SUCCESS = "[Configurator] Update Configuration finalize success";
var UPDATE_CONFIGURATION_FINALIZE_FAIL = "[Configurator] Update Configuration finalize fail";
var CHANGE_GROUP = "[Configurator] Change group";
var CHANGE_GROUP_FINALIZE = "[Configurator] Change group finalize";
var REMOVE_CONFIGURATION = "[Configurator] Remove configuration";
var UPDATE_PRICE_SUMMARY = "[Configurator] Update Configuration Summary Price";
var UPDATE_PRICE_SUMMARY_FAIL = "[Configurator] Update Configuration Price Summary fail";
var UPDATE_PRICE_SUMMARY_SUCCESS = "[Configurator] Update Configuration Price Summary success";
var GET_CONFIGURATION_OVERVIEW = "[Configurator] Get Configuration Overview";
var GET_CONFIGURATION_OVERVIEW_FAIL = "[Configurator] Get Configuration Overview fail";
var GET_CONFIGURATION_OVERVIEW_SUCCESS = "[Configurator] Get Configuration Overview success";
var UPDATE_CONFIGURATION_OVERVIEW = "[Configurator] Update Configuration Overview";
var UPDATE_CONFIGURATION_OVERVIEW_FAIL = "[Configurator] Update Configuration Overview fail";
var UPDATE_CONFIGURATION_OVERVIEW_SUCCESS = "[Configurator] Update Configuration Overview success";
var SET_INTERACTION_STATE = "[Configurator] Set interaction state";
var SET_CURRENT_GROUP = "[Configurator] Set current group to State";
var SET_MENU_PARENT_GROUP = "[Configurator] Set current parent group for menu to State";
var SET_GROUPS_VISITED = "[Configurator] Set groups to visited";
var REMOVE_PRODUCT_BOUND_CONFIGURATIONS = "[Configurator] Remove product bound configurations";
var DISMISS_CONFLICT_DIALOG = "[Configurator] Dismiss conflict dialog";
var CHECK_CONFLICT_DIALOG = "[Configurator] Check conflict dialog";
var READ_ATTRIBUTE_DOMAIN = "[Configurator] Read Attribute Domain";
var CreateConfiguration = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = CREATE_CONFIGURATION;
  }
};
var CreateConfigurationFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey, payload.error);
    this.payload = payload;
    this.type = CREATE_CONFIGURATION_FAIL;
  }
};
var CreateConfigurationSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = CREATE_CONFIGURATION_SUCCESS;
  }
};
var ReadConfiguration = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.configuration.owner.key);
    this.payload = payload;
    this.type = READ_CONFIGURATION;
  }
};
var ReadConfigurationFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey, payload.error);
    this.payload = payload;
    this.type = READ_CONFIGURATION_FAIL;
  }
};
var ReadConfigurationSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = READ_CONFIGURATION_SUCCESS;
  }
};
var UpdateConfiguration = class extends utilsGroup.EntityProcessesIncrementAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = UPDATE_CONFIGURATION;
    this.meta.loader = {
      load: true
    };
  }
};
var UpdateConfigurationFail = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.configuration.owner.key);
    this.payload = payload;
    this.type = UPDATE_CONFIGURATION_FAIL;
    this.meta.loader = {
      error: payload.error
    };
    this.error = payload.error;
  }
};
var UpdateConfigurationSuccess = class extends utilsGroup.EntityProcessesDecrementAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = UPDATE_CONFIGURATION_SUCCESS;
  }
};
var UpdateConfigurationFinalizeSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = UPDATE_CONFIGURATION_FINALIZE_SUCCESS;
  }
};
var UpdateConfigurationFinalizeFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key, {});
    this.payload = payload;
    this.type = UPDATE_CONFIGURATION_FINALIZE_FAIL;
  }
};
var UpdatePriceSummary = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = UPDATE_PRICE_SUMMARY;
  }
};
var UpdatePriceSummaryFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey, payload.error);
    this.payload = payload;
    this.type = UPDATE_PRICE_SUMMARY_FAIL;
  }
};
var UpdatePriceSummarySuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = UPDATE_PRICE_SUMMARY_SUCCESS;
  }
};
var ChangeGroup = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.configuration.owner.key);
    this.payload = payload;
    this.type = CHANGE_GROUP;
  }
};
var ChangeGroupFinalize = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = CHANGE_GROUP_FINALIZE;
  }
};
var RemoveConfiguration = class extends utilsGroup.EntityLoaderResetAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey);
    this.payload = payload;
    this.type = REMOVE_CONFIGURATION;
  }
};
var GetConfigurationOverview = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = GET_CONFIGURATION_OVERVIEW;
  }
};
var GetConfigurationOverviewFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey, payload.error);
    this.payload = payload;
    this.type = GET_CONFIGURATION_OVERVIEW_FAIL;
  }
};
var GetConfigurationOverviewSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey);
    this.payload = payload;
    this.type = GET_CONFIGURATION_OVERVIEW_SUCCESS;
  }
};
var UpdateConfigurationOverview = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.owner.key);
    this.payload = payload;
    this.type = UPDATE_CONFIGURATION_OVERVIEW;
  }
};
var UpdateConfigurationOverviewFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey, payload.error);
    this.payload = payload;
    this.type = UPDATE_CONFIGURATION_OVERVIEW_FAIL;
  }
};
var UpdateConfigurationOverviewSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.ownerKey);
    this.payload = payload;
    this.type = UPDATE_CONFIGURATION_OVERVIEW_SUCCESS;
  }
};
var SetInteractionState = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.entityKey, payload.interactionState);
    this.payload = payload;
    this.type = SET_INTERACTION_STATE;
  }
};
var SetCurrentGroup = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.entityKey, payload.currentGroup);
    this.payload = payload;
    this.type = SET_CURRENT_GROUP;
  }
};
var SetMenuParentGroup = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.entityKey, payload.menuParentGroup);
    this.payload = payload;
    this.type = SET_MENU_PARENT_GROUP;
  }
};
var SetGroupsVisited = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.entityKey, payload.visitedGroups);
    this.payload = payload;
    this.type = SET_GROUPS_VISITED;
  }
};
var RemoveProductBoundConfigurations = class {
  constructor() {
    this.type = REMOVE_PRODUCT_BOUND_CONFIGURATIONS;
  }
};
var DissmissConflictDialoge = class extends utilsGroup.EntitySuccessAction {
  constructor(ownerKey) {
    super(CONFIGURATOR_DATA, ownerKey);
    this.ownerKey = ownerKey;
    this.type = DISMISS_CONFLICT_DIALOG;
  }
};
var CheckConflictDialoge = class extends utilsGroup.EntitySuccessAction {
  constructor(ownerKey) {
    super(CONFIGURATOR_DATA, ownerKey);
    this.ownerKey = ownerKey;
    this.type = CHECK_CONFLICT_DIALOG;
  }
};
var ReadAttributeDomain = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(CONFIGURATOR_DATA, payload.configuration.owner.key);
    this.payload = payload;
    this.type = READ_ATTRIBUTE_DOMAIN;
  }
};
var configuratorGroup_actions = Object.freeze({
  __proto__: null,
  ADD_NEXT_OWNER,
  ADD_TO_CART,
  AddNextOwner,
  AddToCart,
  CHANGE_GROUP,
  CHANGE_GROUP_FINALIZE,
  CHECK_CONFLICT_DIALOG,
  CREATE_CONFIGURATION,
  CREATE_CONFIGURATION_FAIL,
  CREATE_CONFIGURATION_SUCCESS,
  ChangeGroup,
  ChangeGroupFinalize,
  CheckConflictDialoge,
  CreateConfiguration,
  CreateConfigurationFail,
  CreateConfigurationSuccess,
  DISMISS_CONFLICT_DIALOG,
  DissmissConflictDialoge,
  GET_CONFIGURATION_OVERVIEW,
  GET_CONFIGURATION_OVERVIEW_FAIL,
  GET_CONFIGURATION_OVERVIEW_SUCCESS,
  GetConfigurationOverview,
  GetConfigurationOverviewFail,
  GetConfigurationOverviewSuccess,
  READ_ATTRIBUTE_DOMAIN,
  READ_CART_ENTRY_CONFIGURATION,
  READ_CART_ENTRY_CONFIGURATION_FAIL,
  READ_CART_ENTRY_CONFIGURATION_SUCCESS,
  READ_CONFIGURATION,
  READ_CONFIGURATION_FAIL,
  READ_CONFIGURATION_SUCCESS,
  READ_ORDER_ENTRY_CONFIGURATION,
  READ_ORDER_ENTRY_CONFIGURATION_FAIL,
  READ_ORDER_ENTRY_CONFIGURATION_SUCCESS,
  REMOVE_CART_BOUND_CONFIGURATIONS,
  REMOVE_CONFIGURATION,
  REMOVE_PRODUCT_BOUND_CONFIGURATIONS,
  ReadAttributeDomain,
  ReadCartEntryConfiguration,
  ReadCartEntryConfigurationFail,
  ReadCartEntryConfigurationSuccess,
  ReadConfiguration,
  ReadConfigurationFail,
  ReadConfigurationSuccess,
  ReadOrderEntryConfiguration,
  ReadOrderEntryConfigurationFail,
  ReadOrderEntryConfigurationSuccess,
  RemoveCartBoundConfigurations,
  RemoveConfiguration,
  RemoveProductBoundConfigurations,
  SEARCH_VARIANTS,
  SEARCH_VARIANTS_FAIL,
  SEARCH_VARIANTS_SUCCESS,
  SET_CURRENT_GROUP,
  SET_GROUPS_VISITED,
  SET_INTERACTION_STATE,
  SET_MENU_PARENT_GROUP,
  SET_NEXT_OWNER_CART_ENTRY,
  SearchVariants,
  SearchVariantsFail,
  SearchVariantsSuccess,
  SetCurrentGroup,
  SetGroupsVisited,
  SetInteractionState,
  SetMenuParentGroup,
  SetNextOwnerCartEntry,
  UPDATE_CART_ENTRY,
  UPDATE_CART_ENTRY_SUCCESS,
  UPDATE_CONFIGURATION,
  UPDATE_CONFIGURATION_FAIL,
  UPDATE_CONFIGURATION_FINALIZE_FAIL,
  UPDATE_CONFIGURATION_FINALIZE_SUCCESS,
  UPDATE_CONFIGURATION_OVERVIEW,
  UPDATE_CONFIGURATION_OVERVIEW_FAIL,
  UPDATE_CONFIGURATION_OVERVIEW_SUCCESS,
  UPDATE_CONFIGURATION_SUCCESS,
  UPDATE_PRICE_SUMMARY,
  UPDATE_PRICE_SUMMARY_FAIL,
  UPDATE_PRICE_SUMMARY_SUCCESS,
  UpdateCartEntry,
  UpdateConfiguration,
  UpdateConfigurationFail,
  UpdateConfigurationFinalizeFail,
  UpdateConfigurationFinalizeSuccess,
  UpdateConfigurationOverview,
  UpdateConfigurationOverviewFail,
  UpdateConfigurationOverviewSuccess,
  UpdateConfigurationSuccess,
  UpdatePriceSummary,
  UpdatePriceSummaryFail,
  UpdatePriceSummarySuccess
});
var getConfigurationsState = createFeatureSelector(CONFIGURATOR_FEATURE);
var getConfigurationState = createSelector(getConfigurationsState, (state) => state.configurations);
var getConfigurationProcessLoaderStateFactory = (code) => {
  return createSelector(getConfigurationState, (details) => utilsGroup.entityProcessesLoaderStateSelector(details, code));
};
var hasPendingChanges = (code) => {
  return createSelector(getConfigurationState, (details) => utilsGroup.entityHasPendingProcessesSelector(details, code));
};
var getConfigurationFactory = (code) => {
  return createSelector(getConfigurationProcessLoaderStateFactory(code), (configurationState) => utilsGroup.loaderValueSelector(configurationState));
};
var getCurrentGroup = (ownerKey) => {
  return createSelector(getConfigurationFactory(ownerKey), (configuration) => configuration?.interactionState?.currentGroup);
};
var isGroupVisited = (ownerKey, groupId) => {
  return createSelector(getConfigurationFactory(ownerKey), (configuration) => {
    const groupsVisited = configuration?.interactionState?.groupsVisited;
    return groupsVisited ? groupsVisited[groupId] : false;
  });
};
var areGroupsVisited = (ownerKey, groupIds) => {
  return createSelector(getConfigurationFactory(ownerKey), (configuration) => {
    return groupIds.map((id) => {
      const groupsVisited = configuration?.interactionState?.groupsVisited;
      return groupsVisited ? groupsVisited[id] : false;
    }).filter((visited) => !visited).length === 0;
  });
};
var configuratorGroup_selectors = Object.freeze({
  __proto__: null,
  areGroupsVisited,
  getConfigurationFactory,
  getConfigurationProcessLoaderStateFactory,
  getConfigurationState,
  getConfigurationsState,
  getCurrentGroup,
  hasPendingChanges,
  isGroupVisited
});
var ConfiguratorUtilsService = class _ConfiguratorUtilsService {
  /**
   * Determines the direct parent group for an attribute group
   * @param {Configurator.Group[]} groups - List of groups where we search for parent
   * @param {Configurator.Group} group - If already part of groups, no further search is needed, and we return the provided parent group
   * @param {Configurator.Group} parentGroup - Optional parent group.
   * @returns {Configurator.Group | undefined} - Parent group. Might be undefined
   */
  getParentGroup(groups, group, parentGroup) {
    if (groups.includes(group)) {
      return parentGroup;
    }
    return groups.map((currentGroup) => {
      return currentGroup.subGroups ? this.getParentGroup(currentGroup.subGroups, group, currentGroup) : void 0;
    }).filter((foundGroup) => foundGroup).pop();
  }
  /**
   * Finds group identified by its ID, and ensures that we always get a valid group.
   * If nothing is found in the configuration group list, this methods returns the first group.
   *
   * The exceptional case can happen if e.g. an edit in a conflict was done that
   * resolved the conflict, or if a group vanished due to object dependencies.
   * @param {Configurator.Group[]} groups - List of groups
   * @param {string} groupId - Group id
   * @returns {Configurator.Group} - Group identified by its id, if available. Otherwise first group
   */
  getGroupById(groups, groupId) {
    const currentGroup = groups.find((group) => group.id === groupId);
    if (currentGroup) {
      return currentGroup;
    }
    const groupFound = this.getGroupFromSubGroups(groups, groupId);
    return groupFound ? groupFound : groups[0];
  }
  /**
   * Finds group identified by its ID. If nothing is found, this
   * methods returns undefined
   * @param {Configurator.Group[]} groups - List of groups
   * @param {string} groupId - Group id
   * @returns {Configurator.Group | undefined} - Group identified by its id, if available. Otherwise undefined
   */
  getOptionalGroupById(groups, groupId) {
    const currentGroup = groups.find((group) => group.id === groupId);
    return currentGroup ? currentGroup : this.getGroupFromSubGroups(groups, groupId);
  }
  getGroupByIdIfPresent(groups, groupId) {
    const currentGroup = groups.find((group) => group.id === groupId);
    if (currentGroup) {
      return currentGroup;
    }
    return this.getGroupFromSubGroups(groups, groupId);
  }
  getGroupFromSubGroups(groups, groupId) {
    const groupFound = groups.map((group) => {
      return group.subGroups ? this.getGroupByIdIfPresent(group.subGroups, groupId) : void 0;
    }).filter((foundGroup) => foundGroup).pop();
    return groupFound;
  }
  /**
   * Verifies whether the current group has a subgroups.
   *
   * @param {Configurator.Group} group - Current group
   * @return {boolean} - 'True' if the current group has any subgroups, otherwise 'false'
   */
  hasSubGroups(group) {
    return group.subGroups ? group.subGroups.length > 0 : false;
  }
  /**
   * Verifies whether the configuration has been created.
   *
   * @param {Configurator.Configuration} configuration - Configuration
   * @return {boolean} - 'True' if the configuration hass been created, otherwise 'false'
   */
  isConfigurationCreated(configuration) {
    const configId = configuration?.configId;
    return configId !== void 0 && configId.length !== 0 && configuration !== void 0 && (configuration.flatGroups.length > 0 || configuration.overview !== void 0);
  }
  /**
   * Creates configuration extract.
   *
   * @param {Configurator.Attribute} changedAttribute - changed configuration
   * @param {Configurator.Configuration} configuration - configuration
   * @param {Configurator.UpdateType} updateType - updated type
   * @return {Configurator.Configuration} - Configuration
   */
  createConfigurationExtract(changedAttribute, configuration, updateType) {
    if (!updateType) {
      updateType = Configurator.UpdateType.ATTRIBUTE;
    }
    const newConfiguration = {
      configId: configuration.configId,
      groups: [],
      flatGroups: [],
      interactionState: {
        isConflictResolutionMode: configuration.interactionState.isConflictResolutionMode
      },
      owner: configuration.owner,
      productCode: configuration.productCode,
      updateType
    };
    const groupPath = [];
    if (changedAttribute.groupId) {
      this.buildGroupPath(changedAttribute.groupId, configuration.groups, groupPath);
    } else {
      throw Error("GroupId must be available at attribute level during update");
    }
    const groupPathLength = groupPath.length;
    if (groupPathLength === 0) {
      throw new Error("At this point we expect that group is available in the configuration: " + changedAttribute.groupId + ", " + JSON.stringify(configuration.groups.map((cGroup) => cGroup.id)));
    }
    let currentGroupInExtract = this.buildGroupForExtract(groupPath[groupPathLength - 1]);
    let currentLeafGroupInExtract = currentGroupInExtract;
    newConfiguration.groups.push(currentGroupInExtract);
    for (let index = groupPath.length - 1; index > 0; index--) {
      currentLeafGroupInExtract = this.buildGroupForExtract(groupPath[index - 1]);
      currentGroupInExtract.subGroups = [currentLeafGroupInExtract];
      currentGroupInExtract = currentLeafGroupInExtract;
    }
    currentLeafGroupInExtract.attributes = [changedAttribute];
    return newConfiguration;
  }
  /**
   * Builds group path.
   *
   * @param {string} groupId - Group ID
   * @param { Configurator.Group[]} groupList - List of groups
   * @param { Configurator.Group[]} groupPath - Path of groups
   * @return {boolean} - 'True' if the group has been found, otherwise 'false'
   */
  buildGroupPath(groupId, groupList, groupPath) {
    let haveFoundGroup = false;
    const group = groupList.find((currentGroup) => currentGroup.id === groupId);
    if (group) {
      groupPath.push(group);
      haveFoundGroup = true;
    } else {
      groupList.filter((currentGroup) => currentGroup.subGroups).forEach((currentGroup) => {
        if (currentGroup.subGroups && this.buildGroupPath(groupId, currentGroup.subGroups, groupPath)) {
          groupPath.push(currentGroup);
          haveFoundGroup = true;
        }
      });
    }
    return haveFoundGroup;
  }
  /**
   * Retrieves the configuration from state, and throws an error in case the configuration is
   * not available
   * @param {StateUtils.ProcessesLoaderState<Configurator.Configuration>} configurationState - Process loader state containing product configuration
   * @returns {Configurator.Configuration} - The actual product configuration
   */
  getConfigurationFromState(configurationState) {
    const configuration = configurationState.value;
    if (configuration) {
      return configuration;
    } else {
      throw new Error("Configuration must be defined at this point");
    }
  }
  buildGroupForExtract(group) {
    const changedGroup = {
      groupType: group.groupType,
      id: group.id,
      subGroups: []
    };
    return changedGroup;
  }
  static {
    this.ɵfac = function ConfiguratorUtilsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorUtilsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorUtilsService,
      factory: _ConfiguratorUtilsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorUtilsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfiguratorCartService = class _ConfiguratorCartService {
  constructor(store, activeCartService, commonConfigUtilsService, checkoutQueryFacade, userIdService, configuratorUtilsService) {
    this.store = store;
    this.activeCartService = activeCartService;
    this.commonConfigUtilsService = commonConfigUtilsService;
    this.checkoutQueryFacade = checkoutQueryFacade;
    this.userIdService = userIdService;
    this.configuratorUtilsService = configuratorUtilsService;
  }
  /**
   * Reads a configuration that is attached to a cart entry, dispatching the respective action.
   *
   * @param owner Configuration owner
   * @returns Observable of product configurations
   */
  readConfigurationForCartEntry(owner) {
    return this.store.pipe(
      select(getConfigurationProcessLoaderStateFactory(owner.key)),
      //needed as we cannot read the cart in general and for the OV
      //in parallel, this can lead to cache issues with promotions
      delayWhen(() => this.activeCartService.isStable().pipe(filter((stable) => stable))),
      delayWhen(() => this.checkoutQueryFacade.getCheckoutDetailsState().pipe(map((state) => state.loading), filter((loading) => !loading))),
      tap((configurationState) => {
        if (this.configurationNeedsReading(configurationState)) {
          this.activeCartService.requireLoadedCart().pipe(take(1)).subscribe((cart) => {
            this.userIdService.getUserId().pipe(take(1)).subscribe((userId) => {
              const readFromCartEntryParameters = {
                userId,
                cartId: this.commonConfigUtilsService.getCartId(cart),
                cartEntryNumber: owner.id,
                owner
              };
              this.store.dispatch(new ReadCartEntryConfiguration(readFromCartEntryParameters));
            });
          });
        }
      }),
      filter((configurationState) => configurationState.value !== void 0 && this.isConfigurationCreated(configurationState.value)),
      //save to assume configuration is defined after previous filter
      map((configurationState) => this.configuratorUtilsService.getConfigurationFromState(configurationState))
    );
  }
  /**
   * Reads a read-only configuration that is attached to a document entry, dispatching the respective action.
   * The document can be an order, a quote or a saved cart
   *
   * @param owner Configuration owner
   * @returns Observable of product configurations
   */
  readConfigurationForOrderEntry(owner) {
    return this.store.pipe(
      select(getConfigurationProcessLoaderStateFactory(owner.key)),
      tap((configurationState) => {
        if (this.configurationNeedsReading(configurationState)) {
          const ownerIdParts = this.commonConfigUtilsService.decomposeOwnerId(owner.id);
          this.userIdService.getUserId().pipe(take(1)).subscribe((userId) => {
            const readFromOrderEntryParameters = {
              userId,
              orderId: ownerIdParts.documentId,
              orderEntryNumber: ownerIdParts.entryNumber,
              owner
            };
            this.store.dispatch(new ReadOrderEntryConfiguration(readFromOrderEntryParameters));
          });
        }
      }),
      filter((configurationState) => configurationState.value !== void 0 && this.isConfigurationCreated(configurationState.value)),
      //save to assume configuration is defined after previous filter
      map((configurationState) => this.configuratorUtilsService.getConfigurationFromState(configurationState))
    );
  }
  /**
   * Adds a configuration to the cart, specified by the product code, a configuration ID and configuration owner key.
   *
   * @param productCode - Product code
   * @param configId - Configuration ID
   * @param owner - Configuration owner
   * @param quantity - Quantity
   */
  addToCart(productCode, configId, owner, quantity) {
    this.activeCartService.requireLoadedCart().pipe(take(1)).subscribe((cart) => {
      this.userIdService.getUserId().pipe(take(1)).subscribe((userId) => {
        const addToCartParameters = {
          userId,
          cartId: this.commonConfigUtilsService.getCartId(cart),
          productCode,
          quantity: quantity ?? 1,
          configId,
          owner
        };
        this.store.dispatch(new AddToCart(addToCartParameters));
      });
    });
  }
  /**
   * Updates a cart entry, specified by the configuration.
   * The cart entry number for the entry that owns the configuration can be told
   * from the configuration's owner ID
   *
   * @param configuration - Configuration
   */
  updateCartEntry(configuration) {
    this.activeCartService.requireLoadedCart().pipe(take(1)).subscribe((cart) => {
      this.userIdService.getUserId().pipe(take(1)).subscribe((userId) => {
        const parameters = {
          userId,
          cartId: this.commonConfigUtilsService.getCartId(cart),
          cartEntryNumber: configuration.owner.id,
          configuration
        };
        this.store.dispatch(new UpdateCartEntry(parameters));
      });
    });
  }
  /**
   * Can be used to check if the active cart has any product configuration issues.
   *
   * @returns True if and only if there is at least one cart entry with product configuration issues
   */
  activeCartHasIssues() {
    return this.activeCartService.requireLoadedCart().pipe(map((cart) => {
      return cart ? cart.entries : [];
    }), map((entries) => entries ? entries.filter((entry) => this.commonConfigUtilsService.getNumberOfIssues(entry)) : []), map((entries) => entries.length > 0));
  }
  /**
   * Retrieves cart entry by a cart entry number.
   *
   * @param {string} entryNumber - Entry number
   * @returns {Observable<OrderEntry | undefined>} - Cart entry
   */
  getEntry(entryNumber) {
    return this.activeCartService.requireLoadedCart().pipe(map((cart) => {
      return cart.entries ? cart.entries : [];
    }), map((entries) => {
      const filteredEntries = entries.filter((entry) => entry.entryNumber?.toString() === entryNumber);
      return filteredEntries ? filteredEntries[filteredEntries.length - 1] : void 0;
    }));
  }
  /**
   * Remove all configurations that are linked to cart entries
   */
  removeCartBoundConfigurations() {
    this.store.dispatch(new RemoveCartBoundConfigurations());
  }
  isConfigurationCreated(configuration) {
    const configId = configuration.configId;
    return configId.length !== 0;
  }
  configurationNeedsReading(configurationState) {
    const configuration = configurationState.value;
    return configuration === void 0 || !this.isConfigurationCreated(configuration) && !configurationState.loading && !configurationState.error;
  }
  static {
    this.ɵfac = function ConfiguratorCartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorCartService)(ɵɵinject(Store), ɵɵinject(ActiveCartFacade), ɵɵinject(CommonConfiguratorUtilsService), ɵɵinject(CheckoutQueryFacade), ɵɵinject(UserIdService), ɵɵinject(ConfiguratorUtilsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorCartService,
      factory: _ConfiguratorCartService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorCartService, [{
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
    type: CheckoutQueryFacade
  }, {
    type: UserIdService
  }, {
    type: ConfiguratorUtilsService
  }], null);
})();
var ConfiguratorCommonsService = class _ConfiguratorCommonsService {
  constructor(store, commonConfigUtilsService, configuratorCartService, activeCartService, configuratorUtils) {
    this.store = store;
    this.commonConfigUtilsService = commonConfigUtilsService;
    this.configuratorCartService = configuratorCartService;
    this.activeCartService = activeCartService;
    this.configuratorUtils = configuratorUtils;
    this.logger = inject(LoggerService);
  }
  /**
   * Verifies whether there are any pending configuration changes.
   *
   * @param owner - Configuration owner
   *
   * @returns {Observable<boolean>} Returns true if there are any pending changes, otherwise false
   */
  hasPendingChanges(owner) {
    return this.store.pipe(select(hasPendingChanges(owner.key)));
  }
  /**
   * Verifies whether the configuration is loading.
   *
   * @param owner - Configuration owner
   *
   * @returns {Observable<boolean>} Returns true if the configuration is loading, otherwise false
   */
  isConfigurationLoading(owner) {
    return this.store.pipe(select(getConfigurationProcessLoaderStateFactory(owner.key)), map((configurationState) => configurationState.loading ?? false));
  }
  /**
   * Returns a configuration for an owner. Emits only if there are valid configurations
   * available for the requested owner, does not trigger the re-read or
   * creation of the configuration in case it's not there
   *
   * @param owner - Configuration owner
   *
   * @returns {Observable<Configurator.Configuration>}
   */
  getConfiguration(owner) {
    return this.store.pipe(select(getConfigurationFactory(owner.key)), filter((configuration) => this.configuratorUtils.isConfigurationCreated(configuration)));
  }
  /**
   * Returns a configuration if it exists or creates a new one.
   * Emits if there is a valid configuration available and triggers
   * the configuration creation or read from backend in case it is not
   * available
   *
   * @param owner - Configuration owner
   * @returns {Observable<Configurator.Configuration>}
   */
  getOrCreateConfiguration(owner, configIdTemplate) {
    switch (owner.type) {
      case CommonConfigurator.OwnerType.CART_ENTRY: {
        return this.configuratorCartService.readConfigurationForCartEntry(owner);
      }
      case CommonConfigurator.OwnerType.ORDER_ENTRY:
      case CommonConfigurator.OwnerType.QUOTE_ENTRY:
      case CommonConfigurator.OwnerType.SAVED_CART_ENTRY: {
        return this.configuratorCartService.readConfigurationForOrderEntry(owner);
      }
      default: {
        return this.getOrCreateConfigurationForProduct(owner, configIdTemplate);
      }
    }
  }
  /**
   * Updates a configuration, specified by the configuration owner key, group ID and a changed attribute.
   *
   * @param ownerKey - Configuration owner key
   * @param changedAttribute - Changes attribute
   */
  updateConfiguration(ownerKey, changedAttribute, updateType) {
    if (!updateType) {
      updateType = Configurator.UpdateType.ATTRIBUTE;
    }
    this.activeCartService.getActive().pipe(take(1), switchMap((cart) => this.activeCartService.isStable().pipe(take(1), tap((stable) => {
      if (isDevMode() && cart.code && !stable) {
        this.logger.warn("Cart is busy, no configuration updates possible");
      }
    }), filter((stable) => !cart.code || stable), switchMap(() => this.store.pipe(select(getConfigurationFactory(ownerKey)), take(1)))))).subscribe((configuration) => {
      this.store.dispatch(new UpdateConfiguration(this.configuratorUtils.createConfigurationExtract(changedAttribute, configuration, updateType)));
    });
  }
  /**
   * Returns a configuration with an overview. Emits valid configurations which
   * include the overview aspect.
   * When calling this function it is assumed that the configuration itself is already
   * available (or its loading is triggered). If not, the function will return an empty observable.
   *
   * @param configuration - Configuration
   * @returns Observable of configurations including the overview
   */
  getConfigurationWithOverview(configuration) {
    return this.filterNotLoadingAndCreatedConfiguration(this.store.pipe(select(getConfigurationProcessLoaderStateFactory(configuration.owner.key)))).pipe(tap((config) => {
      if (!this.hasConfigurationOverview(config)) {
        this.store.dispatch(new GetConfigurationOverview(configuration));
      }
    }), filter((config) => this.hasConfigurationOverview(config)));
  }
  filterNotLoadingAndCreatedConfiguration(loaderState$) {
    return loaderState$.pipe(filter((configurationState) => configurationState.loading === false), filter((configurationState) => this.configuratorUtils.isConfigurationCreated(configurationState.value)), map((configurationState) => configurationState.value));
  }
  /**
   * Updates configuration overview according to group and attribute filters
   *
   * @param configuration - Configuration. Can contain filters in its overview facet
   */
  updateConfigurationOverview(configuration) {
    this.store.dispatch(new UpdateConfigurationOverview(configuration));
  }
  /**
   * Removes a configuration.
   *
   * @param owner - Configuration owner
   */
  removeConfiguration(owner) {
    this.store.dispatch(new RemoveConfiguration({
      ownerKey: owner.key
    }));
  }
  /**
   * Dismisses conflict solver dialog
   *
   * @param owner - Configuration owner
   */
  dismissConflictSolverDialog(owner) {
    this.store.dispatch(new DissmissConflictDialoge(owner.key));
  }
  /**
   * Check if we need to launch conflict solver dialog
   *
   * @param owner - Configuration owner
   */
  checkConflictSolverDialog(owner) {
    this.store.dispatch(new CheckConflictDialoge(owner.key));
  }
  /**
   * Checks if the configuration contains conflicts that are displayed as conflict groups. Note
   * that in case conflicts are displayed by the conflict solver dialog, they are not taken into
   * account for this method
   *
   * @param owner - Configuration owner
   *
   * @returns {Observable<boolean>} - Returns true if the configuration has conflicts, otherwise false
   */
  hasConflicts(owner) {
    return this.getConfiguration(owner).pipe(map((configuration) => (
      //We expect that the first group must always be the conflict group
      configuration.immediateConflictResolution === false && configuration.groups[0]?.groupType === Configurator.GroupType.CONFLICT_HEADER_GROUP
    )));
  }
  /**
   * Forces the creation of a new default configuration for the given owner
   * @param owner - Configuration owner
   */
  forceNewConfiguration(owner) {
    this.store.dispatch(new RemoveConfiguration({
      ownerKey: owner.key
    }));
    this.store.dispatch(new CreateConfiguration({
      owner,
      configIdTemplate: void 0,
      forceReset: true
    }));
  }
  getOrCreateConfigurationForProduct(owner, configIdTemplate) {
    return this.store.pipe(
      select(getConfigurationProcessLoaderStateFactory(owner.key)),
      tap((configurationState) => {
        if ((configurationState.value === void 0 || !this.configuratorUtils.isConfigurationCreated(configurationState.value)) && configurationState.loading !== true && configurationState.error !== true) {
          this.store.dispatch(new CreateConfiguration({
            owner,
            configIdTemplate
          }));
        }
      }),
      filter((configurationState) => configurationState.value !== void 0 && this.configuratorUtils.isConfigurationCreated(configurationState.value)),
      //save to assume configuration is defined after previous filter
      map((configurationState) => this.configuratorUtils.getConfigurationFromState(configurationState))
    );
  }
  hasConfigurationOverview(configuration) {
    return configuration.overview !== void 0;
  }
  /**
   * Removes product bound configurations that is linked to state
   */
  removeProductBoundConfigurations() {
    this.store.dispatch(new RemoveProductBoundConfigurations());
  }
  /**
   * Fetches the domain values for the given attribute
   *
   * @param owner Configuration Owner
   * @param group  UI Group the attribute belongs to
   * @param attribute Attribute itself
   */
  readAttributeDomain(owner, group, attribute) {
    this.store.pipe(select(getConfigurationFactory(owner.key)), take(1)).subscribe((configuration) => this.store.dispatch(new ReadAttributeDomain({
      configuration,
      groupId: group.id,
      attributeKey: attribute.key ?? attribute.name
    })));
  }
  static {
    this.ɵfac = function ConfiguratorCommonsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorCommonsService)(ɵɵinject(Store), ɵɵinject(CommonConfiguratorUtilsService), ɵɵinject(ConfiguratorCartService), ɵɵinject(ActiveCartFacade), ɵɵinject(ConfiguratorUtilsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorCommonsService,
      factory: _ConfiguratorCommonsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorCommonsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: CommonConfiguratorUtilsService
  }, {
    type: ConfiguratorCartService
  }, {
    type: ActiveCartFacade
  }, {
    type: ConfiguratorUtilsService
  }], null);
})();
var ConfiguratorGroupStatusService = class _ConfiguratorGroupStatusService {
  constructor(store, configuratorUtilsService) {
    this.store = store;
    this.configuratorUtilsService = configuratorUtilsService;
  }
  /**
   * Verifies whether the group has been visited.
   *
   * @param {CommonConfigurator.Owner} owner - Configuration owner
   * @param {string} groupId - Group ID
   * @returns {Observable<boolean>} Has group been visited?
   */
  isGroupVisited(owner, groupId) {
    return this.store.select(isGroupVisited(owner.key, groupId));
  }
  /**
   * Returns the first non-conflict group of the configuration which is not completed
   * and undefined if all are completed.
   *
   * @param {Configurator.Configuration} configuration - Configuration
   *
   * @return {Configurator.Group} - First incomplete group or undefined
   */
  getFirstIncompleteGroup(configuration) {
    return configuration.flatGroups ? configuration.flatGroups.filter((group) => group.groupType !== Configurator.GroupType.CONFLICT_GROUP).find((group) => !group.complete) : void 0;
  }
  /**
   * Determines whether the group has been visited or not.
   *
   * @param {Configurator.Configuration} configuration - Configuration
   * @param {string} groupId - Group ID
   */
  setGroupStatusVisited(configuration, groupId) {
    const group = this.configuratorUtilsService.getGroupById(configuration.groups, groupId);
    const parentGroup = this.configuratorUtilsService.getParentGroup(configuration.groups, this.configuratorUtilsService.getGroupById(configuration.groups, groupId));
    const visitedGroupIds = [];
    visitedGroupIds.push(group.id);
    if (parentGroup) {
      this.getParentGroupStatusVisited(configuration, group.id, parentGroup, visitedGroupIds);
    }
    this.store.dispatch(new SetGroupsVisited({
      entityKey: configuration.owner.key,
      visitedGroups: visitedGroupIds
    }));
  }
  areGroupsVisited(owner, groupIds) {
    return this.store.select(areGroupsVisited(owner.key, groupIds));
  }
  getParentGroupStatusVisited(configuration, groupId, parentGroup, visitedGroupIds) {
    const subGroups = [];
    parentGroup.subGroups.forEach((subGroup) => {
      if (subGroup.id === groupId) {
        return;
      }
      subGroups.push(subGroup.id);
    });
    this.areGroupsVisited(configuration.owner, subGroups).pipe(take(1)).subscribe((isVisited) => {
      if (isVisited) {
        visitedGroupIds.push(parentGroup.id);
        const grandParentGroup = this.configuratorUtilsService.getParentGroup(configuration.groups, this.configuratorUtilsService.getGroupById(configuration.groups, parentGroup.id));
        if (grandParentGroup) {
          this.getParentGroupStatusVisited(configuration, parentGroup.id, grandParentGroup, visitedGroupIds);
        }
      }
    });
  }
  static {
    this.ɵfac = function ConfiguratorGroupStatusService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorGroupStatusService)(ɵɵinject(Store), ɵɵinject(ConfiguratorUtilsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorGroupStatusService,
      factory: _ConfiguratorGroupStatusService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorGroupStatusService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: ConfiguratorUtilsService
  }], null);
})();
var ConfiguratorGroupsService = class _ConfiguratorGroupsService {
  constructor(store, configuratorCommonsService, configuratorUtilsService, configuratorGroupStatusService) {
    this.store = store;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorUtilsService = configuratorUtilsService;
    this.configuratorGroupStatusService = configuratorGroupStatusService;
  }
  /**
   * Returns the current group Id.
   * In case no group Id is being set before returns the first group of the configuration.
   * Return null when configuration contains no groups.
   *
   * @param {CommonConfigurator.Owner} owner configuration owner
   * @returns {Observable<string>} Group ID
   */
  getCurrentGroupId(owner) {
    return this.configuratorCommonsService.getConfiguration(owner).pipe(map((configuration) => {
      if (configuration.interactionState.currentGroup) {
        return configuration.interactionState.currentGroup;
      } else {
        return configuration.groups[0]?.id;
      }
    }));
  }
  /**
   * Return the first conflict group of a configuration or undefined
   * if not present
   *
   * @param {Configurator.Configuration} configuration - Configuration
   * @returns {Configurator.Group} Conflict group
   */
  getFirstConflictGroup(configuration) {
    return configuration.flatGroups.find((group) => group.groupType === Configurator.GroupType.CONFLICT_GROUP);
  }
  /**
   * Navigates to the first non-conflict group of the configuration which is not completed.
   * This method assumes that the configuration has incomplete groups,
   * the caller has to verify this prior to calling this method. In case no incomplete group is
   * present, nothing will happen
   *
   * @param {CommonConfigurator.Owner} owner - Configuration owner
   */
  navigateToFirstIncompleteGroup(owner) {
    this.configuratorCommonsService.getConfiguration(owner).pipe(take(1)).subscribe((configuration) => {
      const groupId = this.configuratorGroupStatusService.getFirstIncompleteGroup(configuration)?.id;
      if (groupId) {
        this.navigateToGroup(configuration, groupId, true);
      }
    });
  }
  /**
   * Navigates to the first conflict group and sets the conflict header as parent group.
   * This method assumes that the configuration has conflicts,
   * the caller has to verify this prior to calling this method. In case no conflict group
   * is present, nothing will happen
   *
   * @param {CommonConfigurator.Owner} owner Configuration Owner
   */
  navigateToConflictSolver(owner) {
    this.configuratorCommonsService.getConfiguration(owner).pipe(take(1)).subscribe((configuration) => {
      const groupId = this.getFirstConflictGroup(configuration)?.id;
      if (groupId) {
        this.navigateToGroup(configuration, groupId, true, true);
      }
    });
  }
  /**
   * Returns the parent group of the subgroup that is displayed in the group menu.
   *
   * @param {CommonConfigurator.Owner} owner - Configuration owner
   * @returns {Observable<Configurator.Group>} Group
   */
  getMenuParentGroup(owner) {
    return this.configuratorCommonsService.getConfiguration(owner).pipe(map((configuration) => {
      const menuParentGroup = configuration.interactionState.menuParentGroup;
      return menuParentGroup ? this.configuratorUtilsService.getOptionalGroupById(configuration.groups, menuParentGroup) : void 0;
    }));
  }
  /**
   * Set the parent group, specified by the group ID, which is displayed in the group menu.
   *
   * @param {CommonConfigurator.Owner} owner - Configuration owner
   * @param {string} groupId - Group ID. Can be ommitted, in this case parent group will be cleared, in case we are on root level
   */
  setMenuParentGroup(owner, groupId) {
    this.store.dispatch(new SetMenuParentGroup({
      entityKey: owner.key,
      menuParentGroup: groupId
    }));
  }
  /**
   * Returns the group that is currently visited.
   *
   * @param {CommonConfigurator.Owner} owner - Configuration owner
   * @return {Observable<Configurator.Group>} Current group
   */
  getCurrentGroup(owner) {
    return this.getCurrentGroupId(owner).pipe(switchMap((currentGroupId) => {
      return this.configuratorCommonsService.getConfiguration(owner).pipe(map((configuration) => this.configuratorUtilsService.getGroupById(configuration.groups, currentGroupId)));
    }));
  }
  /**
   * Retrieves a conflict group for immediate conflict resolution.
   *
   * @param {CommonConfigurator.Owner} owner - Configuration owner
   * @return {Observable<Configurator.Group | undefined} - Conflict group
   */
  getConflictGroupForImmediateConflictResolution(owner) {
    return this.configuratorCommonsService.getConfiguration(owner).pipe(
      //needed because we need have the form to react first on showConflictSolverDialog
      delay(0),
      map((configuration) => {
        if (configuration.interactionState.showConflictSolverDialog) {
          return configuration.flatGroups.find((group) => group.groupType === Configurator.GroupType.CONFLICT_GROUP);
        }
        return void 0;
      })
    );
  }
  /**
   * Determines whether the group has been visited or not.
   *
   * @param {CommonConfigurator.Owner} owner - Owner
   * @param {string} groupId - Group ID
   */
  setGroupStatusVisited(owner, groupId) {
    this.configuratorCommonsService.getConfiguration(owner).pipe(map((configuration) => this.configuratorGroupStatusService.setGroupStatusVisited(configuration, groupId)), take(1)).subscribe();
  }
  /**
   * Navigates to the group, specified by its group ID.
   *
   * @param {Configurator.Configuration}configuration - Configuration
   * @param {string} groupId - Group ID
   * @param {boolean} setStatus - Group status will be set for previous group, default true
   * @param {boolean} conflictResolutionMode - Parameter with default (false). If set to true, we enter the conflict resolution mode, i.e.
   *  if a conflict is solved, the system will navigate to the next conflict present
   */
  navigateToGroup(configuration, groupId, setStatus = true, conflictResolutionMode = false) {
    if (setStatus) {
      this.getCurrentGroup(configuration.owner).pipe(take(1)).subscribe((currentGroup) => {
        this.configuratorGroupStatusService.setGroupStatusVisited(configuration, currentGroup.id);
      });
    }
    const parentGroup = this.configuratorUtilsService.getParentGroup(configuration.groups, this.configuratorUtilsService.getGroupById(configuration.groups, groupId));
    this.store.dispatch(new ChangeGroup({
      configuration,
      groupId,
      parentGroupId: parentGroup ? parentGroup.id : void 0,
      conflictResolutionMode
    }));
  }
  /**
   * Returns the group ID of the group that is coming after the current one in a sequential order.
   *
   * @param {CommonConfigurator.Owner} owner - Configuration owner
   * @return {Observable<string> | undefined} ID of next group
   */
  getNextGroupId(owner) {
    return this.getNeighboringGroupId(owner, 1);
  }
  /**
   * Returns the description of the next group.
   *
   * @param {Configurator.Configuration} configuration - configuration
   * @returns {Observable<string>}  The description of the next group
   */
  getNextGroupDescription(configuration) {
    return this.getNextGroupId(configuration.owner).pipe(map((groupId) => groupId ? this.getDescriptionForGroupId(groupId, configuration) : ""));
  }
  getDescriptionForGroupId(groupId, configuration) {
    if (groupId) {
      const group = this.configuratorUtilsService.getGroupById(configuration.groups, groupId);
      return group.description || "";
    }
    return "";
  }
  /**
   * Returns the group ID of the group that is preceding the current one in a sequential order.
   *
   * @param {CommonConfigurator.Owner} owner - Configuration owner
   * @return {Observable<string | undefined >} ID of previous group
   */
  getPreviousGroupId(owner) {
    return this.getNeighboringGroupId(owner, -1);
  }
  /**
   * Returns the description of the previous group.
   *
   * @param {Configurator.Configuration} configuration - configuration
   * @returns {Observable<string>}  The description of the previous group
   */
  getPreviousGroupDescription(configuration) {
    return this.getPreviousGroupId(configuration.owner).pipe(map((groupId) => groupId ? this.getDescriptionForGroupId(groupId, configuration) : ""));
  }
  /**
   * Verifies whether the group has been visited
   *
   * @param {CommonConfigurator.Owner} owner - Configuration owner
   * @param {string} groupId - Group ID
   * @return {Observable<boolean>} Has been visited?
   */
  isGroupVisited(owner, groupId) {
    return this.configuratorGroupStatusService.isGroupVisited(owner, groupId);
  }
  /**
   * Returns a parent group for the given group.
   *
   * @param {Configurator.Group[]} groups - List of groups where we search for the parent group
   * @param {Configurator.Group} group - Given group
   * @return {Configurator.Group} Parent group or undefined if group is a top-level group
   */
  getParentGroup(groups, group) {
    return this.configuratorUtilsService.getParentGroup(groups, group);
  }
  /**
   * Verifies whether the given group has sub groups.
   *
   * @param {Configurator.Group} group - Given group
   * @return {boolean} Sub groups available?
   */
  hasSubGroups(group) {
    return this.configuratorUtilsService.hasSubGroups(group);
  }
  isConflictGroupInImmediateConflictResolutionMode(groupType, immediateConflictResolution = false) {
    if (groupType) {
      return groupType === Configurator.GroupType.CONFLICT_GROUP && immediateConflictResolution;
    }
    return false;
  }
  /**
   * Retrieves a group ID of the neighboring group.
   *
   * @param {CommonConfigurator.Owner} owner - Configuration owner
   * @param {number} neighboringIndex - Index of neighboring group
   * @return {Observable<string>} group ID of the neighboring group
   */
  getNeighboringGroupId(owner, neighboringIndex) {
    return this.getCurrentGroupId(owner).pipe(switchMap((currentGroupId) => {
      return this.configuratorCommonsService.getConfiguration(owner).pipe(map((configuration) => {
        let nextGroup;
        configuration.flatGroups.forEach((group, index) => {
          if (group.id === currentGroupId && configuration.flatGroups && configuration.flatGroups[index + neighboringIndex] && //Check if neighboring group exists
          !this.isConflictGroupInImmediateConflictResolutionMode(configuration.flatGroups[index + neighboringIndex]?.groupType, configuration.immediateConflictResolution)) {
            nextGroup = configuration.flatGroups[index + neighboringIndex].id;
          }
        });
        return nextGroup;
      }), take(1));
    }));
  }
  /**
   * Verifies whether the current group is conflict one.
   *
   * @param {Configurator.GroupType} groupType - Group type
   * @return {boolean} - 'True' if the current group is conflict one, otherwise 'false'.
   */
  isConflictGroupType(groupType) {
    return groupType === Configurator.GroupType.CONFLICT_HEADER_GROUP || groupType === Configurator.GroupType.CONFLICT_GROUP;
  }
  static {
    this.ɵfac = function ConfiguratorGroupsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorGroupsService)(ɵɵinject(Store), ɵɵinject(ConfiguratorCommonsService), ɵɵinject(ConfiguratorUtilsService), ɵɵinject(ConfiguratorGroupStatusService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorGroupsService,
      factory: _ConfiguratorGroupsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorGroupsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Store
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorUtilsService
  }, {
    type: ConfiguratorGroupStatusService
  }], null);
})();
var ConfiguratorStorefrontUtilsService = class _ConfiguratorStorefrontUtilsService {
  constructor(configuratorGroupsService, windowRef, keyboardFocusService) {
    this.configuratorGroupsService = configuratorGroupsService;
    this.windowRef = windowRef;
    this.keyboardFocusService = keyboardFocusService;
    this.productService = inject(ProductService);
    this.routingService = inject(RoutingService);
    this.CX_PREFIX = "cx";
    this.SEPARATOR = "--";
    this.CONFIGURATOR_PREFIX = this.CX_PREFIX + "-configurator";
    this.ADD_TO_CART_BUTTON_HEIGHT = 82;
    this.logger = inject(LoggerService);
  }
  /**
   * Does the configuration belong to a cart entry, or has the group been visited already?
   * In both cases we need to render indications for mandatory attributes.
   * This method emits only once and then stops further emissions.
   *
   * @param {CommonConfigurator.Owner} owner -
   * @param {string} groupId - Group ID
   * @return {Observable<boolean>} - Returns 'Observable<true>' if the cart entry or group are visited, otherwise 'Observable<false>'
   */
  isCartEntryOrGroupVisited(owner, groupId) {
    return this.configuratorGroupsService.isGroupVisited(owner, groupId).pipe(take(1), map((result) => result ? true : owner.type === CommonConfigurator.OwnerType.CART_ENTRY));
  }
  /**
   * Assemble an attribute value with the currently selected values from a checkbox list.
   *
   * @param {UntypedFormControl[]} controlArray - Control array
   * @param {Configurator.Attribute} attribute -  Configuration attribute
   * @return {Configurator.Value[]} - list of configurator values
   */
  assembleValuesForMultiSelectAttributes(controlArray, attribute) {
    const localAssembledValues = [];
    for (let i = 0; i < controlArray.length; i++) {
      const value = attribute.values ? attribute.values[i] : void 0;
      if (value) {
        const localAttributeValue = {
          valueCode: value.valueCode
        };
        localAttributeValue.name = value.name;
        localAttributeValue.quantity = value.quantity;
        localAttributeValue.selected = controlArray[i].value;
        localAssembledValues.push(localAttributeValue);
      } else {
        if (isDevMode()) {
          this.logger.warn("ControlArray does not match values, at least one value could not been found");
        }
      }
    }
    return localAssembledValues;
  }
  /**
   * Scrolls to the corresponding HTML element.
   *
   * @param {Element | HTMLElement} element - HTML element
   */
  scroll(element) {
    let topOffset = 0;
    if (element instanceof HTMLElement) {
      topOffset = element.offsetTop;
    }
    this.windowRef.nativeWindow?.scroll(0, topOffset);
  }
  /**
   * Scrolls to the corresponding configuration element in the HTML tree.
   *
   * @param {string} selector - Selector of the HTML element
   */
  scrollToConfigurationElement(selector) {
    if (this.windowRef.isBrowser()) {
      const element = this.getElement(selector);
      if (element) {
        this.scroll(element);
      }
    }
  }
  /**
   * Focus the first attribute in the form.
   */
  focusFirstAttribute() {
    this.focusFirstActiveElement("cx-configurator-form");
  }
  /**
   * Focus the first active element inside the given host element
   *
   * @param selector - query selector of the host element
   */
  focusFirstActiveElement(selector) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    const element = this.getElement(selector);
    if (element) {
      const focusableElements = this.keyboardFocusService.findFocusable(element);
      if (focusableElements && focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }
  getFocusableElementById(focusableElements, id) {
    return focusableElements.find((focusableElement) => {
      if (id) {
        if (focusableElement.nodeName.toLocaleLowerCase().indexOf(id) !== -1 || focusableElement.id.indexOf(id) !== -1) {
          return focusableElement;
        }
      }
    });
  }
  getFocusableConflictDescription(focusableElements) {
    return this.getFocusableElementById(focusableElements, "cx-configurator-conflict-description");
  }
  getFocusableElementByValueUiKey(focusableElements, valueUiKey) {
    return this.getFocusableElementById(focusableElements, valueUiKey);
  }
  getFocusableElementByAttributeId(focusableElements, attributeName) {
    return this.getFocusableElementById(focusableElements, attributeName);
  }
  createAttributeValueUiKey(attributeId, valueId) {
    return attributeId + this.SEPARATOR + valueId;
  }
  /**
   * Creates unique key for config attribute on the UI
   *
   * @param prefix for key depending on usage (e.g. uiType, label)
   * @param attributeId
   */
  createAttributeUiKey(prefix, attributeId) {
    return this.CONFIGURATOR_PREFIX + this.SEPARATOR + prefix + this.SEPARATOR + attributeId;
  }
  /**
   * Focus a value in the form.
   *
   * @param {Configurator.Attribute} attribute - Attribute
   */
  focusValue(attribute) {
    if (!this.windowRef.isBrowser()) {
      return;
    }
    const form = this.getElement("cx-configurator-form");
    if (form) {
      const focusableElements = this.keyboardFocusService.findFocusable(form);
      if (focusableElements.length > 0) {
        this.focusOnElements(focusableElements, attribute);
      }
    }
  }
  focusOnElements(focusableElements, attribute) {
    let foundFocusableElement = this.getFocusableConflictDescription(focusableElements);
    if (!foundFocusableElement) {
      foundFocusableElement = this.focusOnElementForConflicting(attribute, foundFocusableElement, focusableElements);
    }
    if (foundFocusableElement) {
      foundFocusableElement.focus();
    }
  }
  focusOnElementForConflicting(attribute, foundFocusableElement, focusableElements) {
    const selectedValue = attribute.values?.find((value) => value.selected);
    if (selectedValue) {
      const valueUiKey = this.createAttributeValueUiKey(attribute.name, selectedValue.valueCode);
      foundFocusableElement = this.getFocusableElementByValueUiKey(focusableElements, valueUiKey);
    }
    if (!foundFocusableElement) {
      foundFocusableElement = this.getFocusableElementByAttributeId(focusableElements, attribute.name);
    }
    return foundFocusableElement;
  }
  /**
   * Retrieves a unique prefix ID.
   *
   * @param {string | undefined} prefix - prefix that we need to make the ID unique
   * @param {string} groupId - group ID
   * @returns {string} - prefix ID
   */
  getPrefixId(idPrefix, groupId) {
    return idPrefix ? idPrefix + this.SEPARATOR + groupId : this.CX_PREFIX + this.SEPARATOR + groupId;
  }
  /**
   * Generates a group ID.
   *
   * @param {string} groupId - group ID
   * @returns {string | undefined} - generated group ID
   */
  createGroupId(groupId) {
    if (groupId) {
      return groupId + "-group";
    }
  }
  /**
   * Generates a unique overview group ID from the local group ID
   * and a prefix that reflects the parent groups in the group hierarchy
   *
   * @param {string} prefix - prefix that we need to make the ID unique
   * @param {string} groupId - group ID
   * @returns {string} - generated group ID
   */
  createOvGroupId(prefix, groupId) {
    return this.getPrefixId(prefix, groupId) + "-ovGroup";
  }
  /**
   * Generates a unique overview menu item ID from the local group ID
   * and a prefix that reflects the parent groups in the group hierarchy
   *
   * @param {string} prefix - prefix that we need to make the ID unique
   * @param {string} groupId - group ID
   * @returns {string} - generated group ID
   */
  createOvMenuItemId(prefix, groupId) {
    return this.getPrefixId(prefix, groupId) + "-ovMenuItem";
  }
  /**
   * Persist the keyboard focus state for the given key.
   * The focus is stored globally or for the given group.
   *
   * @param {string} key - key
   * @param {string} group? - Group
   */
  setFocus(key, group) {
    if (key) {
      this.keyboardFocusService.set(key, group);
    }
  }
  /**
   * Change styling of element
   *
   * @param {string} querySelector - querySelector
   * @param {string} property - CSS property
   * @param {string} value - CSS value
   */
  changeStyling(querySelector, property, value) {
    const element = this.getElement(querySelector);
    if (element) {
      element.style.setProperty(property, value);
    }
  }
  /**
   * Removes styling for element
   *
   * @param {string} querySelector - querySelector
   * @param {string} property - CSS property
   */
  removeStyling(querySelector, property) {
    const element = this.getElement(querySelector);
    if (element) {
      element.style.removeProperty(property);
    }
  }
  /**
   * Get HTML element based on querySelector when running in browser
   *
   * @param querySelector - querySelector
   * @returns selected HTML element
   */
  getElement(querySelector) {
    if (this.windowRef.isBrowser()) {
      return this.windowRef.document.querySelector(querySelector);
    }
  }
  /**
   * Retrieves a list of HTML elements based on querySelector when running in browser
   *
   * @param {string} querySelector - querySelector
   * @returns {HTMLElement[] | undefined} - List of HTML elements
   */
  getElements(querySelector) {
    if (this.windowRef.isBrowser()) {
      return Array.from(this.windowRef.document.querySelectorAll(querySelector));
    }
  }
  /**
   * Retrieves a number of pixels that the document is currently scrolled vertically.
   *
   * @returns {number | undefined} - Number of pixels that the document is currently scrolled vertically.
   */
  getVerticallyScrolledPixels() {
    if (this.windowRef.isBrowser()) {
      return this.windowRef.nativeWindow?.scrollY;
    }
    return void 0;
  }
  /**
   * Verifies whether the element has a scrollbar.
   *
   * @param {string} querySelector - Element query selector
   * @returns {boolean} - 'True', if the element has a scrollbar, otherwise 'false'
   */
  hasScrollbar(querySelector) {
    const element = this.getElement(querySelector);
    if (element) {
      return element.scrollHeight > element.clientHeight;
    }
    return false;
  }
  isInViewport(element) {
    if (element) {
      const bounding = element.getBoundingClientRect();
      const height = element.offsetHeight;
      const width = element.offsetWidth;
      return bounding.top >= -height && bounding.left >= -width && bounding.right <= (this.windowRef.nativeWindow?.innerWidth || element.clientWidth) + width && bounding.bottom <= (this.windowRef.nativeWindow?.innerHeight || element.clientHeight) + height;
    }
    return false;
  }
  getHeight(querySelector) {
    const element = this.getElement(querySelector);
    const isElementInViewport = this.isInViewport(element);
    if (isElementInViewport && element?.offsetHeight) {
      return element?.offsetHeight;
    }
    return 0;
  }
  /**
   * Retrieves the actual height of the spare viewport.
   *
   * SPA header, variant configuration overview header and "Add to cart" button occupy certain height of the viewport, that's why
   * if SPA header, variant configuration overview header and "Add to cart" button are in the viewport,
   * they will be subtracted from the actual viewport height.
   *
   * @returns {number} - Height of the spare viewport.
   */
  getSpareViewportHeight() {
    if (this.windowRef.isBrowser()) {
      const spaHeaderHeight = this.getHeight("header");
      const ovHeaderHeight = this.getHeight(".VariantConfigOverviewHeader");
      const addToCartHeight = this.getHeight("cx-configurator-add-to-cart-button") !== 0 ? this.getHeight("cx-configurator-add-to-cart-button") : this.ADD_TO_CART_BUTTON_HEIGHT;
      const occupiedHeight = spaHeaderHeight + ovHeaderHeight + addToCartHeight * 2;
      return this.windowRef.nativeWindow ? this.windowRef.nativeWindow.innerHeight - occupiedHeight : 0;
    }
    return 0;
  }
  /**
   * Ensure that the element is always visible.
   *
   * @param {string} querySelector - Element query selector
   * @param {HTMLElement | undefined} element - Element that should be visible within the scrollable element.
   */
  ensureElementVisible(querySelector, element) {
    const container = this.getElement(querySelector);
    if (element && container) {
      if (element.offsetTop > container.scrollTop) {
        const offsetBottom = element.offsetTop + element.offsetHeight;
        if (offsetBottom > container.scrollTop) {
          container.scrollTop = offsetBottom - container.offsetHeight;
        }
      } else {
        container.scrollTop = element.getBoundingClientRect()?.top - 10;
      }
    }
  }
  /**
   * Verifies whether a product is a variant product in the display only view.
   *
   * @returns - if `baseProduct` property of the current product is defined
   * and provides the product code of the base product,
   * and the current product is in the display only view
   * then returns `true`, otherwise `false`.
   */
  isDisplayOnlyVariant() {
    return this.routingService.getRouterState().pipe(switchMap((routerState) => {
      return routerState.state.params.displayOnly && routerState.state.queryParams.productCode ? this.productService.get(routerState.state.queryParams.productCode, ProductScope.LIST) : of(void 0);
    }), map((product) => {
      return (product && !!product.baseProduct) ?? false;
    }));
  }
  /**
   * Set the last selected attribute and value.
   * Needed for accessibility of checkboxes for delta rendering
   *
   * @param attributeName - Attribute name
   * @param valueCode - Value code
   */
  setLastSelected(attributeName, valueCode) {
    this.lastSelected = {
      attributeName,
      valueCode
    };
  }
  /**
   * Check if the attribute and value are the last selected.
   *
   * @param attributeName - Attribute name
   * @param valueCode - Value code
   * @returns 'True', if the attribute and value are the last selected, otherwise 'false'
   */
  isLastSelected(attributeName, valueCode) {
    return !!this.lastSelected && this.lastSelected.attributeName === attributeName && this.lastSelected.valueCode === valueCode;
  }
  static {
    this.ɵfac = function ConfiguratorStorefrontUtilsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorStorefrontUtilsService)(ɵɵinject(ConfiguratorGroupsService), ɵɵinject(WindowRef), ɵɵinject(KeyboardFocusService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorStorefrontUtilsService,
      factory: _ConfiguratorStorefrontUtilsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorStorefrontUtilsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConfiguratorGroupsService
  }, {
    type: WindowRef
  }, {
    type: KeyboardFocusService
  }], null);
})();
var ConfiguratorQuantityService = class _ConfiguratorQuantityService {
  constructor() {
    this._quantity = new ReplaySubject(1);
  }
  /**
   * Sets the configuration quantity.
   *
   * @param quantity
   */
  setQuantity(quantity) {
    this._quantity.next(quantity);
  }
  /**
   * Retrieves the configuration quantity.
   *
   * @returns {Observable<number>} - Configuration quantity.
   */
  getQuantity() {
    return this._quantity;
  }
  static {
    this.ɵfac = function ConfiguratorQuantityService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorQuantityService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorQuantityService,
      factory: _ConfiguratorQuantityService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorQuantityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CX_SELECTOR = "cx-configurator-add-to-cart-button";
var ConfiguratorAddToCartButtonComponent = class _ConfiguratorAddToCartButtonComponent {
  constructor(routingService, configuratorCommonsService, configuratorCartService, configuratorGroupsService, configRouterExtractorService, globalMessageService, orderHistoryFacade, commonConfiguratorUtilsService, configUtils, intersectionService, configuratorQuantityService) {
    this.routingService = routingService;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorCartService = configuratorCartService;
    this.configuratorGroupsService = configuratorGroupsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.globalMessageService = globalMessageService;
    this.orderHistoryFacade = orderHistoryFacade;
    this.commonConfiguratorUtilsService = commonConfiguratorUtilsService;
    this.configUtils = configUtils;
    this.intersectionService = intersectionService;
    this.configuratorQuantityService = configuratorQuantityService;
    this.subscription = new Subscription();
    this.multiCartFacade = inject(MultiCartFacade);
    this.focusService = inject(KeyboardFocusService);
    this.activeCartFacade = inject(ActiveCartFacade);
    this.quantityControl = new UntypedFormControl(1);
    this.iconType = ICON_TYPE;
    this.addToCartButtonDisabled = false;
    this.container$ = this.configRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => this.configuratorCommonsService.getConfiguration(routerData.owner).pipe(map((configuration) => ({
      routerData,
      configuration
    }))).pipe(switchMap((cont) => this.configuratorCommonsService.hasPendingChanges(cont.configuration.owner).pipe(map((hasPendingChanges2) => ({
      routerData: cont.routerData,
      configuration: cont.configuration,
      hasPendingChanges: hasPendingChanges2
    })))))));
  }
  ngOnInit() {
    this.makeAddToCartButtonSticky();
    this.configuratorQuantityService.getQuantity().pipe(take(1)).subscribe((quantity) => {
      this.quantityControl.setValue(quantity);
    });
    this.subscription.add(this.quantityControl.valueChanges.pipe(distinctUntilChanged()).subscribe(() => this.configuratorQuantityService.setQuantity(this.quantityControl.value)));
  }
  navigateToCart() {
    this.routingService.go("cart");
  }
  navigateToOverview(configuratorType, owner, productCode) {
    this.routingService.go({
      cxRoute: "configure" + configuratorType,
      params: {
        ownerType: "cartEntry",
        entityKey: owner.id
      }
    }, {
      replaceUrl: true
    }).then(() => {
      this.routingService.go({
        cxRoute: "configureOverview" + configuratorType,
        params: {
          ownerType: "cartEntry",
          entityKey: owner.id
        }
      }, {
        queryParams: {
          productCode
        }
      }).then(() => {
        this.focusOverviewInTabBar();
      });
    });
  }
  focusOverviewInTabBar() {
    this.configRouterExtractorService.extractRouterData().pipe(
      switchMap((routerData) => this.configuratorCommonsService.getConfiguration(routerData.owner)),
      filter((configuration) => configuration.overview != null),
      take(1),
      delay(0)
      //we need to consider the re-rendering of the page
    ).subscribe(() => {
      this.focusService.clear();
      this.configUtils.focusFirstActiveElement("cx-configurator-tab-bar");
    });
  }
  displayConfirmationMessage(key) {
    this.globalMessageService.add({
      key
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
  isQuoteCartActive() {
    return this.activeCartFacade.getActive().pipe(map((cart) => cart.quoteCode !== void 0));
  }
  getTranslationKeyForAddToCart(isAddToCart) {
    return this.isQuoteCartActive().pipe(map((isActive) => {
      if (isActive) {
        return "configurator.addToCart.confirmationQuoteUpdate";
      } else {
        if (!isAddToCart) {
          return "configurator.addToCart.confirmationUpdate";
        } else {
          return "configurator.addToCart.confirmation";
        }
      }
    }));
  }
  /**
   * Performs the navigation to the corresponding location (cart or overview pages).
   *
   * @param {string} configuratorType - Configurator type
   * @param {CommonConfigurator.Owner} owner - Owner
   * @param {boolean} isAdd - Is add to cart
   * @param {boolean} isOverview - Is overview page
   * @param {boolean} showMessage - Show message
   */
  performNavigation(configuratorType, owner, isAdd, isOverview, showMessage, productCode) {
    if (isOverview) {
      this.navigateToCart();
    } else {
      this.navigateToOverview(configuratorType, owner, productCode);
    }
    if (showMessage) {
      this.getTranslationKeyForAddToCart(isAdd).pipe(take(1)).subscribe((translationKey) => {
        this.displayConfirmationMessage(translationKey);
      });
    }
  }
  /**
   * Decides on the resource key for the button. Depending on the business process (owner of the configuration) and the
   * need for a cart update, the text will differ.
   *
   * @param routerData - Reflects the current router state
   * @param configuration - Configuration
   * @param isQuoteActive - Is quote active
   * @returns - The resource key that controls the button description
   */
  getButtonResourceKey(routerData, configuration, isQuoteActive = false) {
    if ((routerData.isOwnerCartEntry || isQuoteActive) && configuration.isCartEntryUpdateRequired) {
      return "configurator.addToCart.buttonUpdateCart";
    } else if (routerData.isOwnerCartEntry && !configuration.isCartEntryUpdateRequired) {
      if (isQuoteActive) {
        return "configurator.addToCart.buttonForQuote";
      } else {
        return "configurator.addToCart.buttonAfterAddToCart";
      }
    } else {
      return "configurator.addToCart.button";
    }
  }
  /**
   * Verifies whether it is a cart entry.
   *
   * @param {ConfiguratorRouter.Data} routerData - Reflects the current router state
   * @returns {boolean} - 'true' if it is a cart entry, otherwise 'false'
   */
  isCartEntry(routerData) {
    return routerData.isOwnerCartEntry ? routerData.isOwnerCartEntry : false;
  }
  /**
   * Triggers action and navigation, both depending on the context. Might result in an addToCart, updateCartEntry,
   * just a cart navigation or a browser back navigation
   * @param {Configurator.Configuration} configuration - Configuration
   * @param {ConfiguratorRouter.Data} routerData - Reflects the current router state
   */
  onAddToCart(configuration, routerData) {
    const pageType = routerData.pageType;
    const configuratorType = configuration.owner.configuratorType;
    const isOverview = pageType === ConfiguratorRouter.PageType.OVERVIEW;
    const isOwnerCartEntry = routerData.owner.type === CommonConfigurator.OwnerType.CART_ENTRY;
    const owner = configuration.owner;
    const productCode = !!routerData.productCode ? routerData.productCode : configuration.productCode;
    const currentGroup = configuration.interactionState.currentGroup;
    if (currentGroup) {
      this.configuratorGroupsService.setGroupStatusVisited(configuration.owner, currentGroup);
    }
    this.container$.pipe(filter((cont) => !cont.hasPendingChanges), take(1)).subscribe(() => {
      if (isOwnerCartEntry) {
        this.onUpdateCart(configuration, configuratorType, owner, isOverview, productCode);
      } else {
        this.onAddToCartForProduct(owner, configuration, configuratorType, isOverview, productCode);
      }
    });
  }
  onAddToCartForProduct(owner, configuration, configuratorType, isOverview, productCode) {
    this.addToCartButtonDisabled = true;
    const quantity = this.quantityControl.value;
    this.configuratorCartService.addToCart(owner.id, configuration.configId, owner, quantity);
    this.configuratorCommonsService.getConfiguration(owner).pipe(filter((configWithNextOwner) => configWithNextOwner.nextOwner !== void 0), take(1)).subscribe((configWithNextOwner) => {
      this.navigateForProductBound(configWithNextOwner, configuratorType, isOverview, productCode);
    });
  }
  navigateForProductBound(configWithNextOwner, configuratorType, isOverview, productCode) {
    const nextOwner = configWithNextOwner.nextOwner ?? ConfiguratorModelUtils.createInitialOwner();
    this.performNavigation(configuratorType, nextOwner, true, isOverview, true, productCode);
    if (!isOverview) {
      this.configuratorCommonsService.removeConfiguration(nextOwner);
    }
  }
  onUpdateCart(configuration, configuratorType, owner, isOverview, productCode) {
    if (configuration.isCartEntryUpdateRequired) {
      this.configuratorCartService.updateCartEntry(configuration);
    }
    this.performNavigation(configuratorType, owner, false, isOverview, configuration.isCartEntryUpdateRequired ?? false, productCode);
    if (configuration.isCartEntryUpdateRequired && !isOverview) {
      this.configuratorCommonsService.removeConfiguration(owner);
    }
  }
  leaveConfigurationOverview() {
    this.container$.pipe(take(1)).subscribe((container) => {
      if (container.routerData.owner.type === CommonConfigurator.OwnerType.ORDER_ENTRY) {
        this.goToOrderDetails(container.routerData.owner);
      } else if (container.routerData.owner.type === CommonConfigurator.OwnerType.QUOTE_ENTRY) {
        this.goToQuoteDetails(container.routerData.owner);
      } else if (container.routerData.owner.type === CommonConfigurator.OwnerType.SAVED_CART_ENTRY) {
        this.goToSavedCartDetails(container.routerData.owner);
      } else if (container.routerData.owner.type === CommonConfigurator.OwnerType.CART_ENTRY && !container.routerData.navigateToCheckout) {
        this.routingService.go({
          cxRoute: "cart"
        });
      } else if (container.routerData.owner.type === CommonConfigurator.OwnerType.PRODUCT) {
        this.routingService.go({
          cxRoute: "product",
          params: {
            code: container.routerData.owner.id
          }
        });
      } else {
        this.routingService.go({
          cxRoute: "checkoutReviewOrder"
        });
      }
    });
  }
  goToOrderDetails(owner) {
    this.orderHistoryFacade.loadOrderDetails(this.commonConfiguratorUtilsService.decomposeOwnerId(owner.id).documentId);
    this.orderHistoryFacade.getOrderDetails().pipe(filter((order) => order !== void 0), take(1)).subscribe((order) => this.routingService.go({
      cxRoute: "orderDetails",
      params: order
    }));
  }
  goToQuoteDetails(owner) {
    const entryKeys = this.commonConfiguratorUtilsService.decomposeOwnerId(owner.id);
    this.routingService.go({
      cxRoute: "quoteDetails",
      params: {
        quoteId: entryKeys.documentId
      }
    });
  }
  /**
   * Navigates to the quote that is attached to the saved cart. At the moment we
   * only support saved carts if linked to quotes.
   * @param owner Configuration owner
   */
  goToSavedCartDetails(owner) {
    const entryKeys = this.commonConfiguratorUtilsService.decomposeOwnerId(owner.id);
    this.multiCartFacade.getCart(entryKeys.documentId).pipe(take(1)).subscribe((cart) => {
      this.routingService.go({
        cxRoute: "quoteDetails",
        params: {
          quoteId: cart.quoteCode
        }
      });
    });
  }
  extractConfigPrices(configuration) {
    const priceSummary = configuration.priceSummary;
    const basePrice = priceSummary?.basePrice?.formattedValue;
    const selectedOptions = priceSummary?.selectedOptions?.formattedValue;
    const totalPrice = priceSummary?.currentTotal?.formattedValue;
    const prices = {
      basePrice,
      selectedOptions,
      totalPrice
    };
    if (!basePrice || basePrice === "-") {
      prices.basePrice = "0";
    }
    if (!selectedOptions || selectedOptions === "-") {
      prices.selectedOptions = "0";
    }
    if (!totalPrice || totalPrice === "-") {
      prices.totalPrice = "0";
    }
    return prices;
  }
  makeAddToCartButtonSticky() {
    const options = {
      rootMargin: "9999px 0px -100px 0px"
    };
    this.subscription.add(this.container$.pipe(take(1), delay(0), map(() => this.configUtils.getElement("cx-configurator-price-summary")), switchMap((priceSummary) => priceSummary ? this.intersectionService.isIntersecting(priceSummary, options) : of(void 0)), filter((isIntersecting) => isIntersecting !== void 0)).subscribe((isIntersecting) => {
      if (isIntersecting) {
        this.configUtils.changeStyling(CX_SELECTOR, "position", "sticky");
      } else {
        this.configUtils.changeStyling(CX_SELECTOR, "position", "fixed");
      }
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function ConfiguratorAddToCartButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAddToCartButtonComponent)(ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorCartService), ɵɵdirectiveInject(ConfiguratorGroupsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(OrderHistoryFacade), ɵɵdirectiveInject(CommonConfiguratorUtilsService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService), ɵɵdirectiveInject(IntersectionService), ɵɵdirectiveInject(ConfiguratorQuantityService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAddToCartButtonComponent,
      selectors: [["cx-configurator-add-to-cart-button"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["displayOnly", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "cx-add-to-cart-btn-container"], [1, "cx-quantity-add-to-cart-container"], [1, "cx-quantity-add-to-cart-row"], [1, "cx-quantity"], [3, "control"], [1, "cx-btn", "btn", "btn-block", "btn-primary", "cx-add-to-cart-btn", 3, "click", "disabled", "title"], [3, "type"], [1, "cx-btn", "btn", "btn-block", "btn-primary", "cx-add-to-cart-btn", 3, "click"], [1, "cx-display-only-btn-container"], [1, "cx-btn", "btn", "btn-block", "btn-secondary", "cx-display-only-btn", 3, "click"]],
      template: function ConfiguratorAddToCartButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorAddToCartButtonComponent_ng_container_0_Template, 4, 2, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.container$));
        }
      },
      dependencies: [NgIf, ItemCounterComponent, IconComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAddToCartButtonComponent, [{
    type: Component,
    args: [{
      selector: CX_SELECTOR,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="container$ | async as container">
  <ng-container *ngIf="!container.routerData.displayOnly; else displayOnly">
    <div class="cx-add-to-cart-btn-container">
      <ng-container *ngIf="!isCartEntry(container.routerData)">
        <div class="cx-quantity-add-to-cart-container">
          <div class="cx-quantity-add-to-cart-row">
            <div class="cx-quantity">
              <label>{{
                'configurator.addToCart.quantity' | cxTranslate
              }}</label>
              <cx-item-counter [control]="quantityControl"></cx-item-counter>
            </div>
            <button
              class="cx-btn btn btn-block btn-primary cx-add-to-cart-btn"
              [disabled]="addToCartButtonDisabled"
              (click)="
                onAddToCart(container.configuration, container.routerData)
              "
              [attr.aria-label]="
                (getButtonResourceKey(
                  container.routerData,
                  container.configuration
                ) | cxTranslate) +
                ' ' +
                ('configurator.a11y.addToCartPrices'
                  | cxTranslate: extractConfigPrices(container.configuration))
              "
              title="{{
                getButtonResourceKey(
                  container.routerData,
                  container.configuration
                ) | cxTranslate
              }}"
            >
              <cx-icon [type]="iconType.CART_PLUS"></cx-icon>
            </button>
          </div>
        </div>
      </ng-container>
      <ng-container *ngIf="isCartEntry(container.routerData)">
        <button
          class="cx-btn btn btn-block btn-primary cx-add-to-cart-btn"
          (click)="onAddToCart(container.configuration, container.routerData)"
          [attr.aria-label]="
            (getButtonResourceKey(
              container.routerData,
              container.configuration,
              isQuoteCartActive() | async
            ) | cxTranslate) +
            ' ' +
            ('configurator.a11y.addToCartPrices'
              | cxTranslate: extractConfigPrices(container.configuration))
          "
        >
          {{
            getButtonResourceKey(
              container.routerData,
              container.configuration,
              isQuoteCartActive() | async
            ) | cxTranslate
          }}
        </button>
      </ng-container>
    </div>
  </ng-container>
  <ng-template #displayOnly>
    <div class="cx-display-only-btn-container">
      <button
        class="cx-btn btn btn-block btn-secondary cx-display-only-btn"
        (click)="leaveConfigurationOverview()"
      >
        {{ 'configurator.addToCart.buttonClose' | cxTranslate }}
      </button>
    </div>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorCartService
  }, {
    type: ConfiguratorGroupsService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: GlobalMessageService
  }, {
    type: OrderHistoryFacade
  }, {
    type: CommonConfiguratorUtilsService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }, {
    type: IntersectionService
  }, {
    type: ConfiguratorQuantityService
  }], null);
})();
var ConfiguratorAddToCartButtonModule = class _ConfiguratorAddToCartButtonModule {
  static {
    this.ɵfac = function ConfiguratorAddToCartButtonModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAddToCartButtonModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAddToCartButtonModule,
      declarations: [ConfiguratorAddToCartButtonComponent],
      imports: [CommonModule, I18nModule, ItemCounterModule, IconModule],
      exports: [ConfiguratorAddToCartButtonComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorAddToCartButton: {
            component: ConfiguratorAddToCartButtonComponent
          }
        }
      })],
      imports: [CommonModule, I18nModule, ItemCounterModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAddToCartButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, ItemCounterModule, IconModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorAddToCartButton: {
            component: ConfiguratorAddToCartButtonComponent
          }
        }
      })],
      declarations: [ConfiguratorAddToCartButtonComponent],
      exports: [ConfiguratorAddToCartButtonComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeCompositionConfig = class _ConfiguratorAttributeCompositionConfig {
  static {
    this.ɵfac = function ConfiguratorAttributeCompositionConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeCompositionConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorAttributeCompositionConfig,
      factory: function ConfiguratorAttributeCompositionConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _ConfiguratorAttributeCompositionConfig)();
        } else {
          __ngConditionalFactory__ = ɵɵinject(Config);
        }
        return __ngConditionalFactory__;
      },
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeCompositionConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var ConfiguratorAttributeCompositionContext = class _ConfiguratorAttributeCompositionContext {
  static {
    this.ɵfac = function ConfiguratorAttributeCompositionContext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeCompositionContext)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorAttributeCompositionContext,
      factory: _ConfiguratorAttributeCompositionContext.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeCompositionContext, [{
    type: Injectable
  }], null, null);
})();
var ConfiguratorAttributeCompositionDirective = class _ConfiguratorAttributeCompositionDirective {
  constructor(vcr, configuratorAttributeCompositionConfig) {
    this.vcr = vcr;
    this.configuratorAttributeCompositionConfig = configuratorAttributeCompositionConfig;
    this.logger = inject(LoggerService);
    this.attrComponentAssignment = this.configuratorAttributeCompositionConfig.productConfigurator?.assignment ?? [];
  }
  ngOnInit() {
    if (isDevMode()) {
      this.logger.debug("On init called");
    }
  }
  /*
   * Each time we update the configuration a completely new configuration state is emitted, including new attribute objects,
   * regardless of whether an attribute actually changed or not. Hence, we compare the last rendered attribute with the current state
   * and only destroy and re-create the attribute component, if there are actual changes to its data. This improves performance significantly.
   */
  ngOnChanges() {
    const attributeChanged = !ObjectComparisonUtils.deepEqualObjects(this.lastRenderedAttribute, this.context.attribute);
    const groupChanged = this.lastRenderedGroupId !== this.context.group.id;
    if (attributeChanged || groupChanged) {
      const key = this.context.componentKey;
      this.renderComponent(this.attrComponentAssignment[key], key);
    }
  }
  renderComponent(component, componentKey) {
    if (component) {
      this.lastRenderedAttribute = this.context.attribute;
      this.lastRenderedGroupId = this.context.group.id;
      this.vcr.clear();
      this.vcr.createComponent(component, {
        injector: this.getComponentInjector()
      });
    } else {
      if (isDevMode()) {
        this.logger.warn("No attribute type component available for: " + componentKey);
      }
    }
  }
  getComponentInjector() {
    return Injector.create({
      providers: [{
        provide: ConfiguratorAttributeCompositionContext,
        useValue: this.context
      }],
      parent: this.vcr.injector
    });
  }
  static {
    this.ɵfac = function ConfiguratorAttributeCompositionDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeCompositionDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ConfiguratorAttributeCompositionConfig));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ConfiguratorAttributeCompositionDirective,
      selectors: [["", "cxConfiguratorAttributeComponent", ""]],
      inputs: {
        context: [0, "cxConfiguratorAttributeComponent", "context"]
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeCompositionDirective, [{
    type: Directive,
    args: [{
      selector: "[cxConfiguratorAttributeComponent]",
      standalone: false
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: ConfiguratorAttributeCompositionConfig
  }], {
    context: [{
      type: Input,
      args: ["cxConfiguratorAttributeComponent"]
    }]
  });
})();
var ConfiguratorAttributeCompositionModule = class _ConfiguratorAttributeCompositionModule {
  static {
    this.ɵfac = function ConfiguratorAttributeCompositionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeCompositionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeCompositionModule,
      declarations: [ConfiguratorAttributeCompositionDirective],
      imports: [CommonModule],
      exports: [ConfiguratorAttributeCompositionDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeCompositionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [ConfiguratorAttributeCompositionDirective],
      exports: [ConfiguratorAttributeCompositionDirective]
    }]
  }], null, null);
})();
var ConfiguratorUISettingsConfig = class _ConfiguratorUISettingsConfig {
  static {
    this.ɵfac = function ConfiguratorUISettingsConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorUISettingsConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorUISettingsConfig,
      factory: function ConfiguratorUISettingsConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _ConfiguratorUISettingsConfig)();
        } else {
          __ngConditionalFactory__ = ɵɵinject(Config);
        }
        return __ngConditionalFactory__;
      },
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorUISettingsConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var ConfiguratorAttributePriceChangeService = class _ConfiguratorAttributePriceChangeService {
  constructor() {
    this.configuratorRouterExtractorService = inject(ConfiguratorRouterExtractorService);
    this.configuratorCommonsService = inject(ConfiguratorCommonsService);
  }
  /**
   * Retrieves an observable that emits whenever the price of a monitored attribute (identified by the provided attribute key) changes,
   * hence allowing the subscriber to trigger rerendering of the prices on the UI.
   * This ensures that an enclosing UI component will initially render, even if the async pricing request is still running,
   * so that the UI is not blocked. Afterwards a rerender shall only occur if prices change.
   * This all assumes that the enclosing UI component itself gets recreated or rerendered (triggered elsewhere) whenever the attribute itself changes content wise.
   *
   * @param attributeKey key of the attribute for which the prices should be checked for changes
   * @returns observable that emits price of monitored attribute changes and hence there is the need to rerender the enclosing component
   */
  getChangedPrices(attributeKey) {
    let isInitialConfiguration = true;
    return this.configuratorRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => {
      return this.configuratorCommonsService.getConfiguration(routerData.owner).pipe(
        // Initially render attribute without prices, so UI is not blocked, otherwise only re-ender if prices changed.
        // Changes of attribute itself are already handled in the attribute composition directive.
        filter((config) => isInitialConfiguration || !!config.priceSupplements),
        switchMap((config) => {
          if (!config.priceSupplements) {
            return of({});
          }
          const changedPrices = this.checkForValuePriceChanges(config, attributeKey);
          return changedPrices ? of(changedPrices) : EMPTY;
        }),
        tap(() => isInitialConfiguration = false)
      );
    }), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  /**
   * Extracts the relevant value prices from the price supplements
   * and stores them within the component.
   * Returns price of a monitored attribute changes.
   *
   * @param config current configuration
   * @param attributeKey key of the attribute for which the prices should be checked for changes
   * @returns observable that emits price of a monitored attribute changes
   */
  checkForValuePriceChanges(config, attributeKey) {
    const attributeSupplement = config.priceSupplements?.find((supplement) => supplement.attributeUiKey === attributeKey);
    const changed = !ObjectComparisonUtils.deepEqualObjects(this.lastAttributeSupplement ?? {}, attributeSupplement ?? {});
    if (changed) {
      const changedPrices = {};
      this.lastAttributeSupplement = attributeSupplement;
      attributeSupplement?.valueSupplements.forEach((valueSupplement) => changedPrices[valueSupplement.attributeValueKey] = valueSupplement.priceValue);
      return changedPrices;
    }
    return void 0;
  }
  static {
    this.ɵfac = function ConfiguratorAttributePriceChangeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributePriceChangeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorAttributePriceChangeService,
      factory: _ConfiguratorAttributePriceChangeService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributePriceChangeService, [{
    type: Injectable
  }], null, null);
})();
var ConfiguratorAttributeBaseComponent = class _ConfiguratorAttributeBaseComponent {
  constructor() {
    this.configuratorUISettingsConfig = inject(ConfiguratorUISettingsConfig);
    this.translation = inject(TranslationService);
    this.configuratorAttributePriceChangeService = inject(ConfiguratorAttributePriceChangeService, {
      optional: true
    });
    this.configuratorStorefrontUtilsService = inject(ConfiguratorStorefrontUtilsService);
    this.changedPrices$ = of({});
  }
  static {
    this.SEPERATOR = "--";
  }
  static {
    this.PREFIX = "cx-configurator";
  }
  static {
    this.PREFIX_LABEL = "label";
  }
  static {
    this.PREFIX_OPTION_PRICE_VALUE = "price--optionsPriceValue";
  }
  static {
    this.PREFIX_DDLB_OPTION_PRICE_VALUE = "option--price";
  }
  static {
    this.MAX_IMAGE_LABEL_CHARACTERS = 16;
  }
  initPriceChangedEvent(isPricingAsync = false, attributeKey) {
    if (isPricingAsync && this.configuratorAttributePriceChangeService) {
      this.listenForPriceChanges = true;
      this.changedPrices$ = this.configuratorAttributePriceChangeService.getChangedPrices(attributeKey);
    }
  }
  /**
   * Creates unique key for config value on the UI
   *
   * @param prefix for key depending on usage (e.g. uiType, label)
   * @param attributeId
   * @param valueId
   */
  createValueUiKey(prefix, attributeId, valueId) {
    return this.createAttributeUiKey(prefix, attributeId) + _ConfiguratorAttributeBaseComponent.SEPERATOR + valueId;
  }
  /**
   * Creates unique key for config value to be sent to configurator
   *
   * @param currentAttribute
   * @param value
   */
  createAttributeValueIdForConfigurator(currentAttribute, value) {
    return this.createValueUiKey(this.getUiType(currentAttribute), currentAttribute.name, value);
  }
  getUiType(attribute) {
    return attribute.uiType ? attribute.uiType : Configurator.UiType.NOT_IMPLEMENTED;
  }
  /**
   * Creates unique key for config attribute on the UI
   *
   * @param prefix for key depending on usage (e.g. uiType, label)
   * @param attributeId
   */
  createAttributeUiKey(prefix, attributeId) {
    return _ConfiguratorAttributeBaseComponent.PREFIX + _ConfiguratorAttributeBaseComponent.SEPERATOR + prefix + _ConfiguratorAttributeBaseComponent.SEPERATOR + attributeId;
  }
  /**
   * Creates unique key for config attribute to be sent to configurator
   *
   * @param currentAttribute
   */
  createAttributeIdForConfigurator(currentAttribute) {
    return this.createAttributeUiKey(this.getUiType(currentAttribute), currentAttribute.name);
  }
  /**
   * Creates unique key for attribute 'aria-labelledby'
   *
   * @param prefix
   * @param attributeId
   * @param valueId
   * @param hasQuantity
   */
  createAriaLabelledBy(prefix, attributeId, valueId, hasQuantity) {
    let attributeUiKey = this.createAttributeUiKey(_ConfiguratorAttributeBaseComponent.PREFIX_LABEL, attributeId);
    if (valueId) {
      attributeUiKey += " " + this.createAttributeUiKey(prefix, attributeId) + _ConfiguratorAttributeBaseComponent.SEPERATOR + valueId + " ";
      if (typeof hasQuantity === "boolean" && !hasQuantity) {
        attributeUiKey += this.createAttributeUiKey(_ConfiguratorAttributeBaseComponent.PREFIX_DDLB_OPTION_PRICE_VALUE, attributeId) + _ConfiguratorAttributeBaseComponent.SEPERATOR + valueId;
      } else {
        attributeUiKey += this.createAttributeUiKey(_ConfiguratorAttributeBaseComponent.PREFIX_OPTION_PRICE_VALUE, attributeId) + _ConfiguratorAttributeBaseComponent.SEPERATOR + valueId;
      }
    }
    return attributeUiKey;
  }
  /**
   * Creates a unique key for focus handling for the given attribute and value
   *
   * @param attributeId
   * @param valueCode
   * @returns focus key
   */
  createFocusId(attributeId, valueCode) {
    return `${attributeId}--${valueCode}--focus`;
  }
  /**
   * Retrieves label with or without technical name depending whether the expert mode is set or not.
   *
   * @param expMode - Is expert mode set?
   * @param label - value label
   * @param techName - value technical name
   * @param value - Configurator value
   */
  getLabel(expMode, label, techName, value) {
    let title = label ? label : "";
    if (expMode && techName) {
      title += ` / [${techName}]`;
    }
    title += this.getValuePrice(value);
    return title;
  }
  /**
   * Retrieves image label with or without technical name depending whether the expert mode is set or not.
   * If the length of the label is longer than 'MAX_IMAGE_LABEL_CHARACTERS' characters, it will be shortened and ellipsis will be added at the end.
   *
   * @param expMode - Is expert mode set?
   * @param label - value label
   * @param techName - value technical name
   * @param value - Configurator value
   */
  getImageLabel(expMode, label, techName, value) {
    const labelForImage = this.getLabel(expMode, label, techName, value);
    return labelForImage?.trim().length >= _ConfiguratorAttributeBaseComponent.MAX_IMAGE_LABEL_CHARACTERS ? labelForImage.substring(0, _ConfiguratorAttributeBaseComponent.MAX_IMAGE_LABEL_CHARACTERS).concat("...") : labelForImage;
  }
  /**
   * Fetches the first image for a given value
   *
   * @param value Value
   * @returns Image
   */
  getImage(value) {
    const images = value.images;
    return images ? images[0] : void 0;
  }
  /**
   * Retrieves a translation key for a value with a price.
   *
   * @param isReadOnly - is attribute a read-only?
   * @returns - translation key for a value with price
   */
  getAriaLabelForValueWithPrice(isReadOnly) {
    return isReadOnly ? "configurator.a11y.readOnlyValueOfAttributeFullWithPrice" : "configurator.a11y.valueOfAttributeFullWithPrice";
  }
  /**
   * Retrieves a translation key for a value.
   *
   * @param isReadOnly - is attribute a read-only?
   * @returns - translation key for a value with price
   */
  getAriaLabelForValue(isReadOnly) {
    return isReadOnly ? "configurator.a11y.readOnlyValueOfAttributeFull" : "configurator.a11y.valueOfAttributeFull";
  }
  /**
   * Retrieves the styling classes for the image element.
   *
   * @param attribute
   * @param value
   * @param styleClass
   * @return - corresponding style classes for the image element
   */
  getImgStyleClasses(attribute, value, styleClass) {
    if (!this.isReadOnly(attribute)) {
      styleClass += " cx-img-hover";
      if (value.selected) {
        styleClass += " cx-img-selected";
      }
    }
    return styleClass;
  }
  getValuePrice(value) {
    if (value?.valuePrice?.value && !value.selected) {
      if (value.valuePrice.value < 0) {
        return ` [${value.valuePrice?.formattedValue}]`;
      } else if (value.valuePrice.value > 0) {
        return ` [+${value.valuePrice?.formattedValue}]`;
      }
    }
    return "";
  }
  /**
   * Get code from attribute.
   * The code is not a mandatory attribute (since not available for VC flavour),
   * still it is mandatory in the context of CPQ. Calling this method therefore only
   * makes sense when CPQ is active. In case the method is called in the wrong context, an exception will
   * be thrown
   *
   * @param {Configurator.Attribute} Attribute
   * @returns {number} Attribute code
   */
  getAttributeCode(attribute) {
    const code = attribute.attrCode;
    if (code) {
      return code;
    } else {
      throw new Error("No attribute code for: " + attribute.name);
    }
  }
  /**
   * Checks if attribute type allows additional values
   *
   * @param attribute Attribute
   * @returns true if attribute type allows to enter additional values
   */
  isWithAdditionalValues(attribute) {
    const uiType = attribute.uiType;
    return uiType === Configurator.UiType.RADIOBUTTON_ADDITIONAL_INPUT || uiType === Configurator.UiType.DROPDOWN_ADDITIONAL_INPUT;
  }
  isRequiredErrorMsg(attribute) {
    return attribute.required && attribute.incomplete || false;
  }
  isUserInput(attribute) {
    return attribute.uiType === Configurator.UiType.STRING || attribute.uiType === Configurator.UiType.NUMERIC;
  }
  isDropDown(attribute) {
    return attribute.uiType === Configurator.UiType.DROPDOWN || attribute.uiType === Configurator.UiType.DROPDOWN_PRODUCT;
  }
  getSelectedValue(attribute) {
    return attribute.values?.find((value) => value.selected);
  }
  isNoValueSelected(attribute) {
    const selectedValue = this.getSelectedValue(attribute);
    if (selectedValue) {
      return selectedValue.valueCode === Configurator.RetractValueCode;
    }
    return true;
  }
  /**
   * Retrieves the length of the value description.
   *
   * @returns - the length of the value description
   */
  getValueDescriptionLength() {
    return this.configuratorUISettingsConfig.productConfigurator?.descriptions?.valueDescriptionLength ?? 70;
  }
  isReadOnly(attribute) {
    if (attribute.uiType) {
      return attribute.uiType === Configurator.UiType.READ_ONLY || attribute.uiType === Configurator.UiType.READ_ONLY_SINGLE_SELECTION_IMAGE || attribute.uiType === Configurator.UiType.READ_ONLY_MULTI_SELECTION_IMAGE;
    }
    return false;
  }
  isValueDisplayed(attribute, value) {
    return this.isReadOnly(attribute) && value.selected || !this.isReadOnly(attribute);
  }
  /**
   * Creates a text describing the current attribute that can be used as ARIA label.
   * Includes price information. If a total price is available this price will be used,
   * otherwise it falls back to the value price, or if no price is available,
   * no price information will be included in the text.
   *
   * @param attribute the attribute
   * @param value the value
   * @param considerSelectionState - optional, depending on the underlying UI control the screen
   * might announce the selection state on its own, so it is not always desired to include it here.
   * @returns translated text
   */
  getAriaLabelGeneric(attribute, value, considerSelectionState = false) {
    let ariaLabel = "";
    if (value) {
      const params = {
        value: value.valueDisplay,
        attribute: attribute.label
      };
      const includedSelected = considerSelectionState && value.selected;
      let key = includedSelected ? "configurator.a11y.selectedValueOfAttributeFullWithPrice" : this.getAriaLabelForValueWithPrice(this.isReadOnly(attribute));
      if (value.valuePriceTotal && value.valuePriceTotal?.value !== 0) {
        params.price = value.valuePriceTotal.formattedValue;
      } else if (value.valuePrice && value.valuePrice?.value !== 0) {
        params.price = value.valuePrice.formattedValue;
      } else {
        key = includedSelected ? "configurator.a11y.selectedValueOfAttributeFull" : this.getAriaLabelForValue(this.isReadOnly(attribute));
      }
      this.translation.translate(key, params).pipe(take(1)).subscribe((text) => ariaLabel = text);
    }
    return ariaLabel;
  }
  /**
   * Extract corresponding value price formula parameters.
   * For all non-single selection types types the complete price formula should be displayed at the value level.
   *
   * @param value - Configurator value
   * @return new price formula
   */
  extractValuePriceFormulaParameters(value) {
    return {
      quantity: value?.quantity,
      price: value?.valuePrice,
      priceTotal: value?.valuePriceTotal,
      isLightedUp: value?.selected
    };
  }
  /**
   * Merges the stored value price data into the given value, if available.
   * As the value might be read-only a new object will be returned combining price and value.
   *
   * @param value the value
   * @param changedPrices record of changed prices
   * @returns the new value with price
   */
  enrichValueWithPrice(value, changedPrices) {
    if (value && changedPrices && value.valueCode in changedPrices) {
      const price = changedPrices[value.valueCode];
      if (price) {
        value = __spreadProps(__spreadValues({}, value), {
          valuePrice: price
        });
      }
    }
    return value;
  }
  /**
   * Checks if the value is the last selected value.
   *
   * @param valueCode code of the value
   * @returns true, only if this value is the last selected value
   */
  isLastSelected(attributeName, valueCode) {
    return this.configuratorStorefrontUtilsService.isLastSelected(attributeName, valueCode);
  }
};
var ConfiguratorAttributeFooterComponent = class _ConfiguratorAttributeFooterComponent extends ConfiguratorAttributeBaseComponent {
  constructor(configUtils, attributeComponentContext) {
    super();
    this.configUtils = configUtils;
    this.attributeComponentContext = attributeComponentContext;
    this.iconType = ICON_TYPE;
    this.attribute = attributeComponentContext.attribute;
    this.owner = attributeComponentContext.owner;
    this.groupId = attributeComponentContext.group.id;
  }
  ngOnInit() {
    this.showRequiredMessageForUserInput$ = this.configUtils.isCartEntryOrGroupVisited(this.owner, this.groupId).pipe(map((result) => result ? this.needsRequiredAttributeErrorMsg() : false));
  }
  needsRequiredAttributeErrorMsg() {
    return this.needsUserInputMsg() || this.needsDropDownMsg();
  }
  needsDropDownMsg() {
    return this.isRequiredErrorMsg(this.attribute) && this.isDropDown(this.attribute) && this.isNoValueSelected(this.attribute);
  }
  /**
   * Checks if attribute is a user input typed attribute with empty value.
   * Method will return false for domain based attributes
   * @param {string} input - user input
   */
  isUserInputEmpty(input) {
    return input !== void 0 && (!input.trim() || 0 === input.length);
  }
  needsUserInputMsg() {
    return this.isRequiredErrorMsg(this.attribute) && this.isUserInput(this.attribute) && this.isUserInputEmpty(this.attribute.userInput);
  }
  static {
    this.ɵfac = function ConfiguratorAttributeFooterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeFooterComponent)(ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeFooterComponent,
      selectors: [["cx-configurator-attribute-footer"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["class", "cx-required-error-msg", "aria-live", "assertive", "aria-atomic", "true", "role", "alert", 3, "id", 4, "ngIf"], ["aria-live", "assertive", "aria-atomic", "true", "role", "alert", 1, "cx-required-error-msg", 3, "id"], [3, "type"], [4, "ngIf"]],
      template: function ConfiguratorAttributeFooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorAttributeFooterComponent_div_0_Template, 6, 9, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.showRequiredMessageForUserInput$));
        }
      },
      dependencies: [NgIf, IconComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeFooterComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  *ngIf="showRequiredMessageForUserInput$ | async"
  class="cx-required-error-msg"
  id="{{ createAttributeUiKey('attribute-msg', attribute.name) }}"
  [attr.aria-label]="
    isUserInput(attribute)
      ? ('configurator.attribute.defaultRequiredMessage' | cxTranslate)
      : ('configurator.attribute.singleSelectRequiredMessage' | cxTranslate)
  "
  aria-live="assertive"
  aria-atomic="true"
  role="alert"
>
  <cx-icon [type]="iconType.ERROR"></cx-icon>
  <ng-container *ngIf="isUserInput(attribute)">
    {{ 'configurator.attribute.defaultRequiredMessage' | cxTranslate }}
  </ng-container>
  <ng-container *ngIf="isDropDown(attribute)">
    {{ 'configurator.attribute.singleSelectRequiredMessage' | cxTranslate }}
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: ConfiguratorStorefrontUtilsService
  }, {
    type: ConfiguratorAttributeCompositionContext
  }], null);
})();
var ConfiguratorAttributeFooterModule = class _ConfiguratorAttributeFooterModule {
  static {
    this.ɵfac = function ConfiguratorAttributeFooterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeFooterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeFooterModule,
      declarations: [ConfiguratorAttributeFooterComponent],
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule],
      exports: [ConfiguratorAttributeFooterComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            Footer: ConfiguratorAttributeFooterComponent
          }
        }
      })],
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeFooterModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            Footer: ConfiguratorAttributeFooterComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeFooterComponent],
      exports: [ConfiguratorAttributeFooterComponent]
    }]
  }], null, null);
})();
var ConfiguratorShowMoreComponent = class _ConfiguratorShowMoreComponent {
  constructor(cdRef) {
    this.cdRef = cdRef;
    this.showMore = false;
    this.showHiddenText = false;
    this.textSize = 60;
    this.tabIndex = -1;
  }
  ngAfterViewInit() {
    this.textNormalized = this.normalize(this.text);
    if (this.textNormalized.length > this.textSize) {
      this.showMore = true;
      this.textToShow = this.textNormalized.substring(0, this.textSize);
    } else {
      this.textToShow = this.textNormalized;
    }
    this.cdRef.detectChanges();
  }
  toggleShowMore() {
    this.showHiddenText = !this.showHiddenText;
    this.showHiddenText ? this.textToShow = this.textNormalized : this.textToShow = this.textNormalized.substring(0, this.textSize);
    this.cdRef.detectChanges();
  }
  normalize(text = "") {
    return text.replace(/<[^>]*>/g, "");
  }
  static {
    this.ɵfac = function ConfiguratorShowMoreComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorShowMoreComponent)(ɵɵdirectiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorShowMoreComponent,
      selectors: [["cx-configurator-show-more"]],
      inputs: {
        text: "text",
        textSize: "textSize",
        productName: "productName",
        tabIndex: "tabIndex"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["less", ""], [4, "ngIf"], [3, "innerHTML"], [3, "tabindex", "click", 4, "ngIf"], [3, "click", "tabindex"], [4, "ngIf", "ngIfElse"]],
      template: function ConfiguratorShowMoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorShowMoreComponent_ng_container_0_Template, 3, 2, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.text);
        }
      },
      dependencies: [NgIf, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorShowMoreComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-show-more",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="text">
  <span [innerHTML]="textToShow"></span>

  <button (click)="toggleShowMore()" *ngIf="showMore" tabindex="{{ tabIndex }}">
    <ng-container *ngIf="showHiddenText; else less"
      >&nbsp;... {{ 'configurator.button.less' | cxTranslate }}</ng-container
    >

    <ng-template #less>
      &nbsp;... {{ 'configurator.button.more' | cxTranslate }}</ng-template
    >
  </button>
</ng-container>
`
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    text: [{
      type: Input
    }],
    textSize: [{
      type: Input
    }],
    productName: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }]
  });
})();
var ConfiguratorShowOptionsComponent = class _ConfiguratorShowOptionsComponent {
  constructor(configuratorStorefrontUtilsService) {
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.configuratorCommonsService = inject(ConfiguratorCommonsService);
  }
  /**
   * fires a request to read the attribute domain,
   * so that all options of the attribute become visible on the UI
   */
  showOptions() {
    this.configuratorCommonsService.readAttributeDomain(this.attributeComponentContext.owner, this.attributeComponentContext.group, this.attributeComponentContext.attribute);
    this.focusFirstValue();
  }
  focusFirstValue() {
    this.configuratorCommonsService.isConfigurationLoading(this.attributeComponentContext.owner).pipe(
      distinctUntilChanged(),
      filter((isLoading) => !isLoading),
      take(1),
      delay(0)
      // we need to consider the re-rendering of the page
    ).subscribe(() => this.configuratorStorefrontUtilsService.focusFirstActiveElement("#" + this.configuratorStorefrontUtilsService.createAttributeUiKey("group-attribute", this.attributeComponentContext.attribute.name)));
  }
  static {
    this.ɵfac = function ConfiguratorShowOptionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorShowOptionsComponent)(ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorShowOptionsComponent,
      selectors: [["cx-configurator-show-options"]],
      inputs: {
        attributeComponentContext: "attributeComponentContext"
      },
      standalone: false,
      decls: 6,
      vars: 13,
      consts: [["tabindex", "0", 1, "btn", "btn-tertiary", 3, "click"]],
      template: function ConfiguratorShowOptionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainerStart(0);
          ɵɵelementStart(1, "button", 0);
          ɵɵpipe(2, "cxTranslate");
          ɵɵpipe(3, "cxTranslate");
          ɵɵlistener("click", function ConfiguratorShowOptionsComponent_Template_button_click_1_listener() {
            return ctx.showOptions();
          });
          ɵɵtext(4);
          ɵɵpipe(5, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵattribute("title", ɵɵpipeBind1(2, 4, "configurator.button.showOptions"))("aria-label", ɵɵpipeBind2(3, 6, "configurator.a11y.showOptionsForAttribute", ɵɵpureFunction1(11, _c0, ctx.attributeComponentContext.attribute.label)))("aria-describedby", "cx-configurator--label--" + ctx.attributeComponentContext.attribute.name);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 9, "configurator.button.showOptions"), " ");
        }
      },
      dependencies: [TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorShowOptionsComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-show-options",
      standalone: false,
      template: `<ng-container>
  <button
    class="btn btn-tertiary"
    tabindex="0"
    (click)="showOptions()"
    [attr.title]="'configurator.button.showOptions' | cxTranslate"
    [attr.aria-label]="
      'configurator.a11y.showOptionsForAttribute'
        | cxTranslate: { attribute: attributeComponentContext.attribute.label }
    "
    [attr.aria-describedby]="
      'cx-configurator--label--' + attributeComponentContext.attribute.name
    "
  >
    {{ 'configurator.button.showOptions' | cxTranslate }}
  </button>
</ng-container>
`
    }]
  }], () => [{
    type: ConfiguratorStorefrontUtilsService
  }], {
    attributeComponentContext: [{
      type: Input
    }]
  });
})();
var ConfiguratorAttributeHeaderComponent = class _ConfiguratorAttributeHeaderComponent extends ConfiguratorAttributeBaseComponent {
  constructor(configUtils, configuratorCommonsService, configuratorGroupsService, configuratorUiSettings, attributeComponentContext) {
    super();
    this.configUtils = configUtils;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorGroupsService = configuratorGroupsService;
    this.configuratorUiSettings = configuratorUiSettings;
    this.attributeComponentContext = attributeComponentContext;
    this.iconTypes = ICON_TYPE;
    this.logger = inject(LoggerService);
    this.config = inject(Config);
    this.attribute = attributeComponentContext.attribute;
    this.owner = attributeComponentContext.owner;
    this.groupId = attributeComponentContext.group.id;
    this.groupType = attributeComponentContext.group.groupType ?? Configurator.GroupType.ATTRIBUTE_GROUP;
    this.expMode = attributeComponentContext.expMode;
    this.isNavigationToGroupEnabled = attributeComponentContext.isNavigationToGroupEnabled ?? false;
  }
  ngOnInit() {
    this.showRequiredMessageForDomainAttribute$ = this.configUtils.isCartEntryOrGroupVisited(this.owner, this.groupId).pipe(map((result) => result && this.needsRequiredAttributeErrorMsg()));
  }
  /**
   * Get message key for the required message. Is different for multi- and single selection values
   *  @return {string} - required message key
   */
  getRequiredMessageKey() {
    if (this.isSingleSelection()) {
      return this.isWithAdditionalValues(this.attribute) ? "configurator.attribute.singleSelectAdditionalRequiredMessage" : "configurator.attribute.singleSelectRequiredMessage";
    } else if (this.isMultiSelection) {
      return "configurator.attribute.multiSelectRequiredMessage";
    } else {
      return "configurator.attribute.singleSelectRequiredMessage";
    }
  }
  get isMultiSelection() {
    switch (this.attribute.uiType) {
      case Configurator.UiType.CHECKBOXLIST:
      case Configurator.UiType.CHECKBOXLIST_PRODUCT:
      case Configurator.UiType.MULTI_SELECTION_IMAGE: {
        return true;
      }
    }
    return false;
  }
  isSingleSelection() {
    switch (this.attribute.uiType) {
      case Configurator.UiType.RADIOBUTTON:
      case Configurator.UiType.RADIOBUTTON_ADDITIONAL_INPUT:
      case Configurator.UiType.RADIOBUTTON_PRODUCT:
      case Configurator.UiType.CHECKBOX:
      case Configurator.UiType.DROPDOWN_ADDITIONAL_INPUT:
      case Configurator.UiType.SINGLE_SELECTION_IMAGE: {
        return true;
      }
    }
    return false;
  }
  isAttributeWithoutErrorMsg(uiType) {
    switch (uiType) {
      case Configurator.UiType.NOT_IMPLEMENTED:
      case Configurator.UiType.STRING:
      case Configurator.UiType.NUMERIC:
      case Configurator.UiType.CHECKBOX:
      case Configurator.UiType.DROPDOWN:
      case Configurator.UiType.DROPDOWN_PRODUCT: {
        return false;
      }
    }
    return true;
  }
  needsRequiredAttributeErrorMsg() {
    return this.isRequiredAttributeWithoutErrorMsg();
  }
  isRequiredAttributeWithoutErrorMsg() {
    return this.isRequiredErrorMsg(this.attribute) && this.isAttributeWithoutErrorMsg(this.attribute.uiType);
  }
  /**
   * Verifies whether the group type is attribute group
   *
   * @return {boolean} - 'true' if the group type is 'attribute group' otherwise 'false'
   */
  isAttributeGroup() {
    if (Configurator.GroupType.ATTRIBUTE_GROUP === this.groupType) {
      return true;
    }
    return false;
  }
  /**
   * Verifies whether the conflict resolution is active.
   *
   * @return {boolean} - 'true' if the conflict resolution is active otherwise 'false'
   */
  isConflictResolutionActive() {
    return this.isAttributeGroup() && this.isNavigationToGroupEnabled;
  }
  /**
   * Retrieves a certain conflict link key depending on the current group type for translation.
   *
   * @return {string} - the conflict link key
   */
  getConflictMessageKey() {
    return this.groupType === Configurator.GroupType.CONFLICT_GROUP ? "configurator.conflict.viewConfigurationDetails" : this.isNavigationToConflictEnabled() ? "configurator.conflict.viewConflictDetails" : "configurator.conflict.conflictDetected";
  }
  /**
   * Checks if an image is attached
   * @returns True if an only if at least one image exists
   */
  get hasImage() {
    const images = this.attribute.images;
    return images ? images.length > 0 : false;
  }
  /**
   * Returns image attached to the attribute (if available)
   * @returns Image
   */
  get image() {
    const images = this.attribute.images;
    return images && this.hasImage ? images[0] : void 0;
  }
  /**
   * Navigates to the group.
   */
  navigateToGroup() {
    this.configuratorCommonsService.getConfiguration(this.owner).pipe(take(1)).subscribe((configuration) => {
      let groupId;
      if (this.groupType === Configurator.GroupType.CONFLICT_GROUP) {
        groupId = this.attribute.groupId;
      } else {
        groupId = this.findConflictGroupId(configuration, this.attribute);
      }
      if (groupId) {
        this.configuratorGroupsService.navigateToGroup(configuration, groupId);
        this.focusValue(this.attribute);
        this.scrollToAttribute(this.attribute.name);
      } else {
        this.logError("Attribute was not found in any conflict group. Note that for this navigation, commerce 22.05 or later is required.");
      }
    });
  }
  /**
   * Scroll to conflicting attribute
   *
   * @protected
   */
  scrollToAttribute(name) {
    this.onNavigationCompleted(() => this.configUtils.scrollToConfigurationElement("#" + this.createAttributeUiKey("label", name)));
  }
  findConflictGroupId(configuration, currentAttribute) {
    return configuration.flatGroups.filter((group) => group.groupType === Configurator.GroupType.CONFLICT_GROUP).find((group) => {
      return group.attributes?.find((attribute) => attribute.key === currentAttribute.key);
    })?.id;
  }
  logError(text) {
    if (isDevMode()) {
      this.logger.error(text);
    }
  }
  focusValue(attribute) {
    this.onNavigationCompleted(() => this.configUtils.focusValue(attribute));
  }
  /**
   * The status of the configuration loading is retrieved twice:
   * firstly, wait that the navigation to the corresponding group is started,
   * secondly, wait that the navigation is completed and
   * finally, invoke the callback function
   *
   * @protected
   */
  onNavigationCompleted(callback) {
    this.configuratorCommonsService.isConfigurationLoading(this.owner).pipe(filter((isLoading) => isLoading), take(1), switchMap(() => this.configuratorCommonsService.isConfigurationLoading(this.owner).pipe(
      filter((isLoading) => !isLoading),
      take(1),
      delay(0)
      //we need to consider the re-rendering of the page
    ))).subscribe(callback);
  }
  /**
   * Verifies whether the navigation to a conflict group is enabled.
   *
   * @returns {boolean} true only if navigation to conflict groups is enabled.
   */
  isNavigationToConflictEnabled() {
    return this.isNavigationToGroupEnabled;
  }
  /**
   * Retrieves the length of the attribute description.
   *
   * @returns - the length of the attribute description
   */
  getAttributeDescriptionLength() {
    return this.configuratorUISettingsConfig.productConfigurator?.descriptions?.attributeDescriptionLength ?? 100;
  }
  static {
    this.ɵfac = function ConfiguratorAttributeHeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeHeaderComponent)(ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorGroupsService), ɵɵdirectiveInject(ConfiguratorUISettingsConfig), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeHeaderComponent,
      selectors: [["cx-configurator-attribute-header"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 12,
      vars: 9,
      consts: [["conflictGroup", ""], ["withoutLink", ""], ["class", "cx-hidden-msg", 4, "ngIf"], [4, "ngIf"], [3, "text", "textSize", "productName", "tabIndex", 4, "ngIf"], ["class", "cx-conflict-msg", 3, "id", 4, "ngIf"], ["class", "cx-required-error-msg", 3, "id", 4, "ngIf"], ["class", "cx-attribute-img", 3, "src", "alt", "title", 4, "ngIf"], [1, "cx-hidden-msg"], ["aria-hidden", "true", 3, "type"], [3, "id"], [1, "cx-header-label-container"], [3, "attributeComponentContext", 4, "ngIf"], [3, "attributeComponentContext"], [3, "text", "textSize", "productName", "tabIndex"], [1, "cx-conflict-msg", 3, "id"], ["aria-hidden", "true", 3, "type", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["tabindex", "0", "role", "link", 1, "link", "cx-action-link", 3, "click", "keydown.enter"], [1, "cx-required-error-msg", 3, "id"], [3, "type"], [1, "cx-attribute-img", 3, "src", "alt", "title"], ["class", "link cx-action-link", "tabindex", "0", "role", "link", 3, "click", "keydown.enter", 4, "ngIf"], [1, "cx-conflict-msg"]],
      template: function ConfiguratorAttributeHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorAttributeHeaderComponent_div_0_Template, 4, 4, "div", 2)(1, ConfiguratorAttributeHeaderComponent_ng_container_1_Template, 7, 20, "ng-container", 3)(2, ConfiguratorAttributeHeaderComponent_ng_container_2_Template, 9, 21, "ng-container", 3)(3, ConfiguratorAttributeHeaderComponent_cx_configurator_show_more_3_Template, 1, 4, "cx-configurator-show-more", 4)(4, ConfiguratorAttributeHeaderComponent_div_4_Template, 4, 10, "div", 5)(5, ConfiguratorAttributeHeaderComponent_div_5_Template, 5, 8, "div", 6);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, ConfiguratorAttributeHeaderComponent_img_7_Template, 1, 3, "img", 7)(8, ConfiguratorAttributeHeaderComponent_ng_template_8_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor)(10, ConfiguratorAttributeHeaderComponent_ng_template_10_Template, 3, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", !ctx.attribute.visible);
          ɵɵadvance();
          ɵɵproperty("ngIf", !(ctx.config.features == null ? null : ctx.config.features.enableReadDomainValuesOnDemand));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.config.features == null ? null : ctx.config.features.enableReadDomainValuesOnDemand);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.attribute.description);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.attribute.hasConflicts);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 7, ctx.showRequiredMessageForDomainAttribute$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.hasImage);
        }
      },
      dependencies: [NgIf, IconComponent, ConfiguratorShowMoreComponent, ConfiguratorShowOptionsComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeHeaderComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div *ngIf="!attribute.visible" class="cx-hidden-msg">
  <cx-icon [type]="iconTypes.WARNING" aria-hidden="true"></cx-icon>
  {{ 'configurator.attribute.notVisibleAttributeMsg' | cxTranslate }}
</div>
<ng-container *ngIf="!config.features?.enableReadDomainValuesOnDemand">
  <label
    id="{{ createAttributeUiKey('label', attribute.name) }}"
    [class.cx-required-error]="showRequiredMessageForDomainAttribute$ | async"
    [attr.aria-label]="
      !attribute.required
        ? ('configurator.a11y.attribute'
          | cxTranslate: { attribute: attribute.label })
        : ('configurator.a11y.requiredAttribute'
          | cxTranslate: { param: attribute.label })
    "
    ><span
      [class.cx-required-icon]="attribute.required"
      [attr.aria-describedby]="createAttributeUiKey('label', attribute.name)"
      >{{ getLabel(expMode, attribute.label, attribute.name) }}</span
    ></label
  >
</ng-container>
<ng-container *ngIf="config.features?.enableReadDomainValuesOnDemand">
  <div class="cx-header-label-container">
    <label
      id="{{ createAttributeUiKey('label', attribute.name) }}"
      [class.cx-required-error]="showRequiredMessageForDomainAttribute$ | async"
      [attr.aria-label]="
        !attribute.required
          ? ('configurator.a11y.attribute'
            | cxTranslate: { attribute: attribute.label })
          : ('configurator.a11y.requiredAttribute'
            | cxTranslate: { param: attribute.label })
      "
      ><span
        [class.cx-required-icon]="attribute.required"
        [attr.aria-describedby]="createAttributeUiKey('label', attribute.name)"
        >{{ getLabel(expMode, attribute.label, attribute.name) }}</span
      ></label
    >

    <cx-configurator-show-options
      *ngIf="attribute.domainOnDemand"
      [attributeComponentContext]="attributeComponentContext"
    ></cx-configurator-show-options>
  </div>
</ng-container>

<cx-configurator-show-more
  *ngIf="attribute.description"
  [text]="attribute.description"
  [textSize]="getAttributeDescriptionLength()"
  [productName]="getLabel(expMode, attribute.label, attribute.name)"
  [tabIndex]="0"
></cx-configurator-show-more>
<div
  *ngIf="attribute.hasConflicts"
  class="cx-conflict-msg"
  id="{{ createAttributeUiKey('attribute-msg', attribute.name) }}"
  [attr.aria-live]="isConflictResolutionActive() ? 'assertive' : 'off'"
  [attr.aria-atomic]="isConflictResolutionActive() ? true : false"
  [attr.role]="isConflictResolutionActive() ? 'alert' : null"
  [attr.aria-label]="
    isConflictResolutionActive()
      ? ('configurator.a11y.conflictDetected' | cxTranslate)
      : ''
  "
>
  <cx-icon
    *ngIf="isAttributeGroup()"
    [type]="iconTypes.WARNING"
    aria-hidden="true"
  ></cx-icon>
  <ng-container *ngIf="isAttributeGroup(); else conflictGroup">
    <ng-container *ngIf="isNavigationToConflictEnabled(); else withoutLink">
      <a
        class="link cx-action-link"
        (click)="navigateToGroup()"
        (keydown.enter)="navigateToGroup()"
        tabindex="0"
        role="link"
        [attr.aria-label]="
          'configurator.a11y.navigateToConflict'
            | cxTranslate: { attribute: attribute.label }
        "
      >
        {{ getConflictMessageKey() | cxTranslate }}
      </a>
    </ng-container>
  </ng-container>
</div>
<div
  *ngIf="showRequiredMessageForDomainAttribute$ | async"
  class="cx-required-error-msg"
  id="{{ createAttributeUiKey('attribute-msg', attribute.name) }}"
  [attr.aria-label]="getRequiredMessageKey() | cxTranslate"
>
  <cx-icon [type]="iconTypes.ERROR"></cx-icon>
  {{ getRequiredMessageKey() | cxTranslate }}
</div>
<img
  *ngIf="hasImage"
  class="cx-attribute-img"
  src="{{ image?.url }}"
  alt="{{ image?.altText }}"
  title="{{ image?.altText }}"
/>

<ng-template #conflictGroup>
  <a
    *ngIf="isNavigationToGroupEnabled"
    class="link cx-action-link"
    (click)="navigateToGroup()"
    (keydown.enter)="navigateToGroup()"
    tabindex="0"
    role="link"
  >
    {{ getConflictMessageKey() | cxTranslate }}
  </a>
</ng-template>

<ng-template #withoutLink>
  <div class="cx-conflict-msg">
    {{ getConflictMessageKey() | cxTranslate }}
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: ConfiguratorStorefrontUtilsService
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorGroupsService
  }, {
    type: ConfiguratorUISettingsConfig
  }, {
    type: ConfiguratorAttributeCompositionContext
  }], null);
})();
var ConfiguratorShowMoreModule = class _ConfiguratorShowMoreModule {
  static {
    this.ɵfac = function ConfiguratorShowMoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorShowMoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorShowMoreModule,
      declarations: [ConfiguratorShowMoreComponent],
      imports: [CommonModule, I18nModule],
      exports: [ConfiguratorShowMoreComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorShowMoreModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule],
      declarations: [ConfiguratorShowMoreComponent],
      exports: [ConfiguratorShowMoreComponent]
    }]
  }], null, null);
})();
var ConfiguratorShowOptionsModule = class _ConfiguratorShowOptionsModule {
  static {
    this.ɵfac = function ConfiguratorShowOptionsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorShowOptionsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorShowOptionsModule,
      declarations: [ConfiguratorShowOptionsComponent],
      imports: [CommonModule, I18nModule],
      exports: [ConfiguratorShowOptionsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorShowOptionsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule],
      providers: [],
      declarations: [ConfiguratorShowOptionsComponent],
      exports: [ConfiguratorShowOptionsComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeHeaderModule = class _ConfiguratorAttributeHeaderModule {
  static {
    this.ɵfac = function ConfiguratorAttributeHeaderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeHeaderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeHeaderModule,
      declarations: [ConfiguratorAttributeHeaderComponent],
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule, NgSelectModule, ConfiguratorShowMoreModule, ConfiguratorShowOptionsModule],
      exports: [ConfiguratorAttributeHeaderComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            Header: ConfiguratorAttributeHeaderComponent
          }
        }
      })],
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule, NgSelectModule, ConfiguratorShowMoreModule, ConfiguratorShowOptionsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeHeaderModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule, NgSelectModule, ConfiguratorShowMoreModule, ConfiguratorShowOptionsModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            Header: ConfiguratorAttributeHeaderComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeHeaderComponent],
      exports: [ConfiguratorAttributeHeaderComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeQuantityComponent = class _ConfiguratorAttributeQuantityComponent {
  constructor(config) {
    this.config = config;
    this.quantity = new UntypedFormControl(1);
    this.optionsChangeSub = new Subscription();
    this.quantityChangeSub = new Subscription();
    this.changeQuantity = new EventEmitter();
  }
  ngOnInit() {
    this.quantity.setValue(this.quantityOptions?.initialQuantity);
    this.optionsChangeSub.add(this.quantityOptions.disableQuantityActions$?.pipe(distinct()).subscribe((disable) => {
      if (disable) {
        this.quantity.disable();
        this.quantityChangeSub.unsubscribe();
      } else {
        this.quantity.enable();
        this.quantityChangeSub.add(this.subscribeToQuantityChange());
      }
    }));
  }
  subscribeToQuantityChange() {
    return this.quantity.valueChanges.pipe(debounce(() => timer(this.config.productConfigurator?.updateDebounceTime?.quantity ?? 0)), take(1)).subscribe(() => this.onChangeQuantity());
  }
  ngOnDestroy() {
    this.optionsChangeSub.unsubscribe();
    this.quantityChangeSub.unsubscribe();
  }
  onChangeQuantity() {
    this.changeQuantity.emit(this.quantity?.value);
  }
  static {
    this.ɵfac = function ConfiguratorAttributeQuantityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeQuantityComponent)(ɵɵdirectiveInject(ConfiguratorUISettingsConfig));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeQuantityComponent,
      selectors: [["cx-configurator-attribute-quantity"]],
      inputs: {
        quantityOptions: "quantityOptions"
      },
      outputs: {
        changeQuantity: "changeQuantity"
      },
      standalone: false,
      decls: 5,
      vars: 6,
      consts: [[1, "cx-quantity"], [3, "allowZero", "control", "min"]],
      template: function ConfiguratorAttributeQuantityComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "label");
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelement(4, "cx-item-counter", 1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_1_0;
          ɵɵadvance(2);
          ɵɵtextInterpolate(ɵɵpipeBind1(3, 4, "configurator.attribute.quantity"));
          ɵɵadvance(2);
          ɵɵproperty("allowZero", (tmp_1_0 = ctx.quantityOptions.allowZero) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : false)("control", ctx.quantity)("min", ctx.quantityOptions.allowZero ? 0 : 1);
        }
      },
      dependencies: [ItemCounterComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeQuantityComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-quantity",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="cx-quantity">
  <label>{{ 'configurator.attribute.quantity' | cxTranslate }}</label>
  <cx-item-counter
    [allowZero]="quantityOptions.allowZero ?? false"
    [control]="quantity"
    [min]="quantityOptions.allowZero ? 0 : 1"
  ></cx-item-counter>
</div>
`
    }]
  }], () => [{
    type: ConfiguratorUISettingsConfig
  }], {
    quantityOptions: [{
      type: Input
    }],
    changeQuantity: [{
      type: Output
    }]
  });
})();
var ConfiguratorPriceComponent = class _ConfiguratorPriceComponent {
  constructor(directionService) {
    this.directionService = directionService;
  }
  isRTLDirection() {
    return this.directionService.getDirection() === DirectionMode.RTL;
  }
  removeSign(value, sign) {
    if (value) {
      return value.replace(sign, "");
    }
    return "";
  }
  addSign(value, sign, before) {
    if (value) {
      return before ? sign + value : value + sign;
    }
    return "";
  }
  compileFormattedValue(priceValue, formattedValue, isRTL) {
    if (priceValue > 0) {
      return this.addSign(formattedValue, "+", !isRTL);
    } else {
      if (isRTL) {
        const withoutSign = this.removeSign(formattedValue, "-");
        return this.addSign(withoutSign, "-", false);
      }
      return formattedValue ?? "";
    }
  }
  /**
   * Retrieves price.
   *
   * @return {string} - value price formula
   */
  get price() {
    if (this.formula.priceTotal) {
      return this.priceTotal;
    } else {
      return this.compileFormattedValue(this.formula.price?.value ?? 0, this.formula.price?.formattedValue, this.isRTLDirection());
    }
  }
  /**
   * Retrieves the total price.
   *
   * @return {string} - total price formula
   */
  get priceTotal() {
    return this.compileFormattedValue(this.formula.priceTotal?.value ?? 0, this.formula.priceTotal?.formattedValue, this.isRTLDirection());
  }
  /**
   * Verifies whether quantity with price should be displayed.
   *
   * @return {boolean} - 'true' if quantity and price should be displayed, otherwise 'false'
   */
  displayQuantityAndPrice() {
    const quantity = this.formula.quantity;
    return quantity ? this.formula.price?.value !== 0 && quantity >= 1 : false;
  }
  /**
   * Verifies whether only price should be displayed.
   *
   * @return {boolean} - 'true' if only price should be displayed, otherwise 'false'
   */
  displayPriceOnly() {
    const priceValue = this.formula.price?.value ?? 0;
    const priceTotalValue = this.formula.priceTotal?.value ?? 0;
    return (priceValue !== 0 || priceTotalValue !== 0) && !this.displayQuantityAndPrice();
  }
  /**
   * Verifies whether the price formula should be displayed.
   *
   * @return {boolean} - 'true' if price formula should be displayed, otherwise 'false'
   */
  displayFormula() {
    const displayFormula = this.formula.quantity && this.formula.quantity !== 0 || this.formula.price && this.formula.price?.value !== 0 || this.formula.priceTotal && this.formula.priceTotal?.value !== 0;
    return displayFormula ?? false;
  }
  /**
   * Retrieves formula for quantity with price.
   *
   * @param {string} formattedQuantity- formatted quantity
   * @return {string} - price formula
   */
  quantityWithPrice(formattedQuantity) {
    return formattedQuantity + "x(" + this.formula.price?.formattedValue + ")";
  }
  /**
   * Verifies whether the price is lighted up.
   *
   * @return {boolean} - 'true' if price should be lighted up, otherwise 'false'
   */
  isPriceLightedUp() {
    return this.formula.isLightedUp ?? false;
  }
  /**
   * Retrieves the styling for the corresponding element.
   *
   * @return {string} - corresponding style class
   */
  get styleClass() {
    let styleClass = "cx-price";
    if (!this.isPriceLightedUp()) {
      styleClass += " cx-greyed-out";
    }
    return styleClass;
  }
  static {
    this.ɵfac = function ConfiguratorPriceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorPriceComponent)(ɵɵdirectiveInject(DirectionService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorPriceComponent,
      selectors: [["cx-configurator-price"]],
      inputs: {
        formula: "formula"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "ngClass"], [1, "cx-quantity-price"], [1, "cx-price-total"]],
      template: function ConfiguratorPriceComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorPriceComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.displayFormula());
        }
      },
      dependencies: [NgClass, NgIf, TranslatePipe, CxNumericPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorPriceComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-price",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="displayFormula()">
  <ng-container *ngIf="displayPriceOnly()">
    <div
      [ngClass]="styleClass"
      [attr.aria-label]="'configurator.a11y.valueSurcharge' | cxTranslate"
    >
      {{ price }}
    </div>
  </ng-container>
  <ng-container *ngIf="displayQuantityAndPrice()">
    <div
      class="cx-quantity-price"
      [attr.aria-label]="'configurator.a11y.valueSurcharge' | cxTranslate"
    >
      {{ quantityWithPrice(formula?.quantity | cxNumeric) }}
    </div>
    <div class="cx-price-total">{{ priceTotal }}</div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: DirectionService
  }], {
    formula: [{
      type: Input
    }]
  });
})();
var ConfiguratorAttributeProductCardComponent = class _ConfiguratorAttributeProductCardComponent extends ConfiguratorAttributeBaseComponent {
  constructor(productService, keyBoardFocus, translation) {
    super();
    this.productService = productService;
    this.keyBoardFocus = keyBoardFocus;
    this.translation = translation;
    this.loading$ = new BehaviorSubject(true);
    this.showDeselectionNotPossible = false;
    this.handleDeselect = new EventEmitter();
    this.handleQuantity = new EventEmitter();
    this.handleSelect = new EventEmitter();
    this.iconType = ICON_TYPE;
  }
  ngOnInit() {
    this.loading$.next(true);
    const productSystemId = this.productCardOptions.productBoundValue.productSystemId;
    this.product$ = this.productService.get(productSystemId ? productSystemId : "", ConfiguratorProductScope.CONFIGURATOR_PRODUCT_CARD).pipe(map((respProduct) => {
      return respProduct ? respProduct : this.transformToProductType(this.productCardOptions.productBoundValue);
    }), tap(() => this.loading$.next(false)));
  }
  get showQuantity() {
    return (this.productCardOptions.withQuantity && this.productCardOptions.productBoundValue.selected && this.productCardOptions.multiSelect) ?? false;
  }
  get focusConfig() {
    const focusConfig = {
      key: this.createFocusId(this.productCardOptions.attributeId.toString(), this.productCardOptions.productBoundValue.valueCode)
    };
    return focusConfig;
  }
  onHandleSelect() {
    this.loading$.next(true);
    if (this.productCardOptions.hideRemoveButton && this.productCardOptions.fallbackFocusId) {
      this.keyBoardFocus.set(this.productCardOptions.fallbackFocusId);
    }
    this.handleSelect.emit(this.productCardOptions.productBoundValue.valueCode);
  }
  onHandleDeselect() {
    {
      if (this.productCardOptions.productBoundValue.selected && this.productCardOptions.hideRemoveButton) {
        this.showDeselectionNotPossibleMessage();
        return;
      }
      this.loading$.next(true);
      this.handleDeselect.emit(this.productCardOptions.productBoundValue.valueCode);
    }
  }
  onChangeQuantity(eventObject) {
    if (!eventObject) {
      this.onHandleDeselect();
    } else {
      this.onHandleQuantity(eventObject);
    }
  }
  /**
   * Verifies whether the product card refers to a selected value
   * @return {boolean} - Selected?
   */
  isProductCardSelected() {
    const isProductCardSelected = this.productCardOptions.productBoundValue && this.productCardOptions.productBoundValue.selected && !this.productCardOptions.singleDropdown;
    return isProductCardSelected ?? false;
  }
  /**
   * Checks if price needs to be displayed. This is the
   * case if either value price, quantity or value price total
   * are present
   * @return {boolean} - Price display?
   */
  hasPriceDisplay() {
    const productPrice = this.productCardOptions.productBoundValue.valuePrice || this.productCardOptions.productBoundValue.quantity || this.productCardOptions.productBoundValue.valuePriceTotal;
    return productPrice ? true : false;
  }
  /**
   * Extract corresponding price formula parameters
   *
   *  @return {ConfiguratorPriceComponentOptions} - New price formula
   */
  extractPriceFormulaParameters() {
    if (!this.productCardOptions.multiSelect) {
      return {
        price: this.productCardOptions.productBoundValue.valuePrice,
        isLightedUp: this.productCardOptions.productBoundValue.selected
      };
    }
    return {
      quantity: this.productCardOptions.productBoundValue.quantity,
      price: this.productCardOptions.productBoundValue.valuePrice,
      priceTotal: this.productCardOptions.productBoundValue.valuePriceTotal,
      isLightedUp: this.productCardOptions.productBoundValue.selected
    };
  }
  /**
   *  Extract corresponding quantity parameters
   *
   * @return {ConfiguratorAttributeQuantityComponentOptions} - New quantity options
   */
  extractQuantityParameters() {
    const quantityFromOptions = this.productCardOptions.productBoundValue.quantity;
    const mergedLoading = this.productCardOptions.loading$ ? combineLatest([this.loading$, this.productCardOptions.loading$]).pipe(map((values) => {
      return values[0] || values[1];
    })) : this.loading$;
    return {
      allowZero: !this.productCardOptions.hideRemoveButton,
      initialQuantity: quantityFromOptions ? quantityFromOptions : 0,
      disableQuantityActions$: mergedLoading
    };
  }
  /**
   * Verifies whether the value code is defined.
   *
   * @param {string} valueCode - Value code
   * @return {boolean} - 'true' if the value code is defined, otherwise 'false'
   */
  isValueCodeDefined(valueCode) {
    return valueCode && valueCode !== Configurator.RetractValueCode ? true : false;
  }
  transformToProductType(value) {
    return {
      code: value?.productSystemId,
      description: value?.description,
      images: {},
      name: value?.valueDisplay
    };
  }
  onHandleQuantity(quantity) {
    this.loading$.next(true);
    this.handleQuantity.emit({
      quantity,
      valueCode: this.productCardOptions.productBoundValue.valueCode
    });
  }
  showDeselectionNotPossibleMessage() {
    this.showDeselectionNotPossible = true;
  }
  getAriaLabelSingleUnselected(product) {
    let translatedText = "";
    const index = this.productCardOptions.itemIndex + 1;
    if (this.isValueCodeDefined(this.productCardOptions?.productBoundValue?.valueCode)) {
      if (this.hasPriceDisplay() && this.productCardOptions.productBoundValue.valuePrice?.value !== 0) {
        this.translation.translate("configurator.a11y.itemOfAttributeUnselectedWithPrice", {
          item: product.code,
          attribute: this.productCardOptions?.attributeLabel,
          itemIndex: index,
          itemCount: this.productCardOptions.itemCount,
          price: this.productCardOptions.productBoundValue.valuePriceTotal?.formattedValue
        }).pipe(take(1)).subscribe((text) => translatedText = text);
      } else {
        this.translation.translate("configurator.a11y.itemOfAttributeUnselected", {
          item: product.code,
          attribute: this.productCardOptions?.attributeLabel,
          itemIndex: index,
          itemCount: this.productCardOptions.itemCount
        }).pipe(take(1)).subscribe((text) => translatedText = text);
      }
    } else {
      this.translation.translate("configurator.a11y.selectNoItemOfAttribute", {
        attribute: this.productCardOptions?.attributeLabel,
        itemIndex: index,
        itemCount: this.productCardOptions.itemCount
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    }
    return translatedText;
  }
  getAriaLabelSingleSelected(product) {
    let translatedText = "";
    const index = this.productCardOptions.itemIndex + 1;
    if (this.hasPriceDisplay() && this.productCardOptions.productBoundValue.valuePrice?.value !== 0) {
      this.translation.translate("configurator.a11y.itemOfAttributeSelectedPressToUnselectWithPrice", {
        item: product.code,
        attribute: this.productCardOptions?.attributeLabel,
        itemIndex: index,
        itemCount: this.productCardOptions.itemCount,
        price: this.productCardOptions.productBoundValue.valuePriceTotal?.formattedValue
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    } else {
      this.translation.translate("configurator.a11y.itemOfAttributeSelectedPressToUnselect", {
        item: product.code,
        attribute: this.productCardOptions?.attributeLabel,
        itemIndex: index,
        itemCount: this.productCardOptions.itemCount
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    }
    return translatedText;
  }
  getAriaLabelSingleSelectedNoButton(product) {
    let translatedText = "";
    const index = this.productCardOptions.itemIndex + 1;
    if (this.hasPriceDisplay() && this.productCardOptions.productBoundValue.valuePrice?.value !== 0) {
      this.translation.translate("configurator.a11y.itemOfAttributeSelectedWithPrice", {
        item: product.code,
        attribute: this.productCardOptions?.attributeLabel,
        itemIndex: index,
        itemCount: this.productCardOptions.itemCount,
        price: this.productCardOptions.productBoundValue.valuePriceTotal?.formattedValue
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    } else {
      this.translation.translate("configurator.a11y.itemOfAttributeSelected", {
        item: product.code,
        attribute: this.productCardOptions?.attributeLabel,
        itemIndex: index,
        itemCount: this.productCardOptions.itemCount
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    }
    return translatedText;
  }
  getAriaLabelMultiSelected(product) {
    let translatedText = "";
    const index = this.productCardOptions.itemIndex + 1;
    if (this.hasPriceDisplay() && this.productCardOptions.productBoundValue.valuePrice?.value !== 0) {
      this.translation.translate("configurator.a11y.itemOfAttributeSelectedPressToUnselectWithPrice", {
        item: product.code,
        attribute: this.productCardOptions?.attributeLabel,
        itemIndex: index,
        itemCount: this.productCardOptions.itemCount,
        price: this.productCardOptions.productBoundValue.valuePriceTotal?.formattedValue
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    } else {
      this.translation.translate("configurator.a11y.itemOfAttributeSelectedPressToUnselect", {
        item: product.code,
        attribute: this.productCardOptions?.attributeLabel,
        itemIndex: index,
        itemCount: this.productCardOptions.itemCount
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    }
    return translatedText;
  }
  getAriaLabelMultiUnselected(product) {
    let translatedText = "";
    const index = this.productCardOptions.itemIndex + 1;
    if (this.hasPriceDisplay() && this.productCardOptions.productBoundValue.valuePrice?.value !== 0) {
      this.translation.translate("configurator.a11y.itemOfAttributeUnselectedWithPrice", {
        item: product.code,
        attribute: this.productCardOptions?.attributeLabel,
        itemIndex: index,
        itemCount: this.productCardOptions.itemCount,
        price: this.productCardOptions.productBoundValue.valuePriceTotal?.formattedValue
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    } else {
      this.translation.translate("configurator.a11y.itemOfAttributeUnselected", {
        item: product.code,
        attribute: this.productCardOptions?.attributeLabel,
        itemIndex: index,
        itemCount: this.productCardOptions.itemCount
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    }
    return translatedText;
  }
  static {
    this.ɵfac = function ConfiguratorAttributeProductCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeProductCardComponent)(ɵɵdirectiveInject(ProductService), ɵɵdirectiveInject(KeyboardFocusService), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeProductCardComponent,
      selectors: [["cx-configurator-attribute-product-card"]],
      inputs: {
        productCardOptions: "productCardOptions"
      },
      outputs: {
        handleDeselect: "handleDeselect",
        handleQuantity: "handleQuantity",
        handleSelect: "handleSelect"
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 2,
      vars: 3,
      consts: [["single", ""], ["select", ""], ["deselect", ""], [4, "ngIf"], [1, "cx-product-card", 3, "ngClass"], [1, "cx-product-card-rows"], [1, "cx-product-card-imgs"], ["format", "product", "aria-hidden", "true", 3, "container"], [1, "cx-product-card-info"], [1, "cx-product-card-name"], ["class", "cx-product-card-code", 4, "ngIf"], [3, "text", "textSize", "productName", "tabIndex", 4, "ngIf"], ["class", "cx-product-card-rows column", 4, "ngIf"], [1, "cx-product-card-code"], [3, "text", "textSize", "productName", "tabIndex"], [1, "cx-product-card-rows", "column"], [1, "cx-product-card-quantity-price"], [1, "cx-product-card-quantity"], [3, "quantityOptions", "changeQuantity", 4, "ngIf"], [1, "cx-product-card-price"], [3, "formula"], [1, "cx-product-card-action"], ["class", "cx-product-card-action-btn", 4, "ngIf"], [3, "changeQuantity", "quantityOptions"], [1, "cx-product-card-action-btn"], [4, "ngIf", "ngIfElse"], ["class", "btn btn-secondary", 3, "cxFocus", "click", 4, "ngIf", "ngIfElse"], [1, "btn", "btn-secondary", 3, "click", "cxFocus"], [1, "btn", "btn-primary", 3, "click", "disabled", "cxFocus"], ["class", "btn btn-primary", 3, "disabled", "cxFocus", "click", 4, "ngIf", "ngIfElse"], ["class", "btn btn-secondary", 3, "disabled", "cxFocus", "click", 4, "ngIf"], ["class", "cx-visually-hidden", "tabindex", "0", 4, "ngIf"], [1, "btn", "btn-secondary", 3, "click", "disabled", "cxFocus"], ["tabindex", "0", 1, "cx-visually-hidden"], ["aria-live", "assertive", "aria-atomic", "true", "role", "alert", 1, "cx-product-card-rows", "deselection-error-message", 3, "id"], ["type", "ERROR", 1, "deselection-error-symbol"]],
      template: function ConfiguratorAttributeProductCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorAttributeProductCardComponent_ng_container_0_Template, 14, 15, "ng-container", 3);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.product$));
        }
      },
      dependencies: [NgClass, NgIf, ConfiguratorShowMoreComponent, ConfiguratorAttributeQuantityComponent, MediaComponent, ConfiguratorPriceComponent, FocusDirective, IconComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeProductCardComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-product-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="product$ | async as product">
  <div
    class="cx-product-card"
    [ngClass]="{
      'cx-product-card-selected': isProductCardSelected(),
    }"
    [attr.aria-label]="
      'configurator.a11y.itemOfAttribute'
        | cxTranslate
          : {
              attribute: productCardOptions.attributeLabel,
            }
    "
  >
    <div class="cx-product-card-rows">
      <div class="cx-product-card-imgs">
        <cx-media
          [container]="product.images?.PRIMARY"
          format="product"
          aria-hidden="true"
        ></cx-media>
      </div>

      <div class="cx-product-card-info">
        <div class="cx-product-card-name">
          <p>
            {{ product.name }}
          </p>
        </div>
        <div class="cx-product-card-code" *ngIf="product.code">
          {{ 'configurator.attribute.id' | cxTranslate }}:
          {{ product.code }}
        </div>
        <cx-configurator-show-more
          *ngIf="product.description && product.code"
          [text]="product.description"
          [textSize]="45"
          [productName]="product.code"
          [tabIndex]="0"
        ></cx-configurator-show-more>
      </div>
    </div>

    <div
      class="cx-product-card-rows column"
      *ngIf="!productCardOptions.singleDropdown || hasPriceDisplay()"
    >
      <div class="cx-product-card-quantity-price">
        <div class="cx-product-card-quantity">
          <cx-configurator-attribute-quantity
            *ngIf="showQuantity"
            (changeQuantity)="onChangeQuantity($event)"
            [quantityOptions]="extractQuantityParameters()"
          ></cx-configurator-attribute-quantity>
        </div>
        <div class="cx-product-card-price">
          <cx-configurator-price
            [formula]="extractPriceFormulaParameters()"
          ></cx-configurator-price>
        </div>
      </div>
      <div class="cx-product-card-action">
        <div
          class="cx-product-card-action-btn"
          *ngIf="!productCardOptions?.singleDropdown"
        >
          <ng-container *ngIf="productCardOptions?.multiSelect; else single">
            <button
              *ngIf="
                productCardOptions?.productBoundValue?.selected;
                else select
              "
              class="btn btn-secondary"
              (click)="onHandleDeselect()"
              [cxFocus]="focusConfig"
              [attr.aria-label]="getAriaLabelMultiSelected(product)"
              [attr.aria-describedby]="
                createAttributeUiKey('label', productCardOptions.attributeName)
              "
            >
              {{ 'configurator.button.remove' | cxTranslate }}
            </button>

            <ng-template #select>
              <button
                class="btn btn-primary"
                (click)="onHandleSelect()"
                [disabled]="
                  productCardOptions.disableAllButtons || (loading$ | async)
                "
                [cxFocus]="focusConfig"
                [attr.aria-label]="getAriaLabelMultiUnselected(product)"
                [attr.aria-describedby]="
                  createAttributeUiKey(
                    'label',
                    productCardOptions.attributeName
                  )
                "
              >
                {{ 'configurator.button.add' | cxTranslate }}
              </button>
            </ng-template>
          </ng-container>

          <ng-template #single>
            <button
              class="btn btn-primary"
              (click)="onHandleSelect()"
              [disabled]="
                productCardOptions.disableAllButtons || (loading$ | async)
              "
              *ngIf="
                !productCardOptions?.productBoundValue?.selected;
                else deselect
              "
              [cxFocus]="focusConfig"
              [attr.aria-label]="getAriaLabelSingleUnselected(product)"
              [attr.aria-describedby]="
                createAttributeUiKey('label', productCardOptions.attributeName)
              "
            >
              {{ 'configurator.button.select' | cxTranslate }}
            </button>
            <ng-template #deselect>
              <ng-container
                *ngIf="
                  isValueCodeDefined(
                    productCardOptions?.productBoundValue?.valueCode
                  )
                "
              >
                <button
                  *ngIf="!productCardOptions?.hideRemoveButton"
                  class="btn btn-secondary"
                  (click)="onHandleDeselect()"
                  [disabled]="
                    productCardOptions.hideRemoveButton || (loading$ | async)
                  "
                  [cxFocus]="focusConfig"
                  [attr.aria-label]="getAriaLabelSingleSelected(product)"
                  [attr.aria-describedby]="
                    createAttributeUiKey(
                      'label',
                      productCardOptions.attributeName
                    )
                  "
                >
                  {{ 'configurator.button.deselect' | cxTranslate }}
                </button>
                <span
                  *ngIf="productCardOptions?.hideRemoveButton"
                  class="cx-visually-hidden"
                  tabindex="0"
                >
                  {{ getAriaLabelSingleSelectedNoButton(product) }}
                </span>
              </ng-container>
            </ng-template>
          </ng-template>
        </div>
      </div>
    </div>
    <ng-container *ngIf="showDeselectionNotPossible">
      <div
        class="cx-product-card-rows deselection-error-message"
        aria-live="assertive"
        aria-atomic="true"
        role="alert"
        id="{{
          createAttributeUiKey(
            'attribute-msg',
            productCardOptions.attributeName
          )
        }}"
      >
        <cx-icon class="deselection-error-symbol" type="ERROR"></cx-icon>
        {{ 'configurator.attribute.deselectionNotPossible' | cxTranslate }}
      </div>
    </ng-container>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ProductService
  }, {
    type: KeyboardFocusService
  }, {
    type: TranslationService
  }], {
    productCardOptions: [{
      type: Input
    }],
    handleDeselect: [{
      type: Output
    }],
    handleQuantity: [{
      type: Output
    }],
    handleSelect: [{
      type: Output
    }]
  });
})();
var ConfiguratorPriceModule = class _ConfiguratorPriceModule {
  static {
    this.ɵfac = function ConfiguratorPriceModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorPriceModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorPriceModule,
      declarations: [ConfiguratorPriceComponent],
      imports: [CommonModule, I18nModule],
      exports: [ConfiguratorPriceComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorPriceModule, [{
    type: NgModule,
    args: [{
      declarations: [ConfiguratorPriceComponent],
      exports: [ConfiguratorPriceComponent],
      imports: [CommonModule, I18nModule]
    }]
  }], null, null);
})();
var defaultConfiguratorUISettingsConfig = {
  productConfigurator: {
    updateDebounceTime: {
      quantity: 750,
      input: 500,
      date: 1500
    },
    addRetractOption: false,
    descriptions: {
      attributeDescriptionLength: 100,
      valueDescriptionLength: 70
    }
  }
};
var ConfiguratorAttributeQuantityModule = class _ConfiguratorAttributeQuantityModule {
  static {
    this.ɵfac = function ConfiguratorAttributeQuantityModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeQuantityModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeQuantityModule,
      declarations: [ConfiguratorAttributeQuantityComponent],
      imports: [CommonModule, I18nModule, ItemCounterModule, KeyboardFocusModule],
      exports: [ConfiguratorAttributeQuantityComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultConfiguratorUISettingsConfig)],
      imports: [CommonModule, I18nModule, ItemCounterModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeQuantityModule, [{
    type: NgModule,
    args: [{
      declarations: [ConfiguratorAttributeQuantityComponent],
      exports: [ConfiguratorAttributeQuantityComponent],
      imports: [CommonModule, I18nModule, ItemCounterModule, KeyboardFocusModule],
      providers: [provideDefaultConfig(defaultConfiguratorUISettingsConfig)]
    }]
  }], null, null);
})();
var ConfiguratorAttributeProductCardModule = class _ConfiguratorAttributeProductCardModule {
  static {
    this.ɵfac = function ConfiguratorAttributeProductCardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeProductCardModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeProductCardModule,
      declarations: [ConfiguratorAttributeProductCardComponent],
      imports: [CommonModule, ConfiguratorShowMoreModule, ConfiguratorAttributeQuantityModule, I18nModule, RouterModule, UrlModule, FormsModule, ReactiveFormsModule, MediaModule, ConfiguratorPriceModule, KeyboardFocusModule, IconModule],
      exports: [ConfiguratorAttributeProductCardComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ConfiguratorShowMoreModule, ConfiguratorAttributeQuantityModule, I18nModule, RouterModule, UrlModule, FormsModule, ReactiveFormsModule, MediaModule, ConfiguratorPriceModule, KeyboardFocusModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeProductCardModule, [{
    type: NgModule,
    args: [{
      declarations: [ConfiguratorAttributeProductCardComponent],
      exports: [ConfiguratorAttributeProductCardComponent],
      imports: [CommonModule, ConfiguratorShowMoreModule, ConfiguratorAttributeQuantityModule, I18nModule, RouterModule, UrlModule, FormsModule, ReactiveFormsModule, MediaModule, ConfiguratorPriceModule, KeyboardFocusModule, IconModule]
    }]
  }], null, null);
})();
var ConfiguratorAttributeQuantityService = class _ConfiguratorAttributeQuantityService {
  /**
   * Checks if the interaction with the quantity control needs
   * to be disabled
   * @param {any} value Selected value
   * @returns {boolean} Quantity actions disabled?
   */
  disableQuantityActions(value) {
    return !value || value === "0" || value === Configurator.RetractValueCode;
  }
  /**
   * Checks if the interaction with the quantity control needs for multiselection components
   * to be disabled
   * @param {Configurator.Attribute} attribute Configurator Attribute
   * @returns {boolean} Quantity actions disabled?
   */
  disableQuantityActionsMultiSelection(attribute) {
    return attribute.dataType === Configurator.DataType.USER_SELECTION_QTY_ATTRIBUTE_LEVEL && (!attribute.values || !attribute.values.find((value) => value.selected) || attribute.quantity === 0);
  }
  /**
   * Checks if it is supposed to render a quantity control on attribute level
   *
   * @param {Configurator.Attribute} attribute Configurator Attribute
   * @return {boolean} - Display quantity picker on attribute level?
   */
  withQuantityOnAttributeLevel(attribute) {
    return attribute.dataType === Configurator.DataType.USER_SELECTION_QTY_ATTRIBUTE_LEVEL;
  }
  /**
   * Checks if an attribute needs to be equipped with the option to select
   * a quantity
   * @param {Configurator.DataType} dataType Attribute data type
   * @param {Configurator.UiType} uiType Attribute ui type, refers to how an attribute must be rendered
   * @returns  {boolean} Render a quantity component?
   */
  withQuantity(dataType, uiType) {
    switch (uiType) {
      case Configurator.UiType.DROPDOWN_PRODUCT:
      case Configurator.UiType.DROPDOWN:
      case Configurator.UiType.RADIOBUTTON_PRODUCT:
      case Configurator.UiType.RADIOBUTTON:
        return dataType === Configurator.DataType.USER_SELECTION_QTY_ATTRIBUTE_LEVEL;
      case Configurator.UiType.CHECKBOXLIST:
      case Configurator.UiType.CHECKBOXLIST_PRODUCT:
        return dataType === Configurator.DataType.USER_SELECTION_QTY_VALUE_LEVEL;
      default:
        return false;
    }
  }
  /**
   * Checks if the zero quantity is allowed
   *
   * @param {Configurator.Attribute} attribute Configurator Attribute
   * @return {boolean} - true when zero quantity is allowed
   */
  allowZeroValueQuantity(attribute) {
    const selectedValues = attribute.values ? attribute.values.filter((value) => value.selected).length : 0;
    if (attribute.required && selectedValues < 2) {
      return false;
    }
    return true;
  }
  static {
    this.ɵfac = function ConfiguratorAttributeQuantityService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeQuantityService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorAttributeQuantityService,
      factory: _ConfiguratorAttributeQuantityService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeQuantityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfiguratorAttributeSingleSelectionBaseComponent = class _ConfiguratorAttributeSingleSelectionBaseComponent extends ConfiguratorAttributeBaseComponent {
  constructor(quantityService, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService) {
    super();
    this.quantityService = quantityService;
    this.translation = translation;
    this.attributeComponentContext = attributeComponentContext;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.loading$ = new BehaviorSubject(false);
    this.showRequiredErrorMessage$ = of(false);
    this.attribute = attributeComponentContext.attribute;
    this.ownerKey = attributeComponentContext.owner.key;
    this.ownerType = attributeComponentContext.owner.type;
    this.language = attributeComponentContext.language;
    this.expMode = attributeComponentContext.expMode;
    this.showRequiredErrorMessage$ = this.configuratorStorefrontUtilsService.isCartEntryOrGroupVisited(attributeComponentContext.owner, attributeComponentContext.group.id).pipe(map((result) => result && this.isRequiredErrorMsg(this.attribute) && this.isDropDown(this.attribute) && this.isNoValueSelected(this.attribute) || false));
    this.initPriceChangedEvent(attributeComponentContext.isPricingAsync, attributeComponentContext.attribute.key);
  }
  /**
   * Checks if we are supposed to render a quantity control, which
   * can be derived from the attribute meta data
   *
   * @return {boolean} - Display quantity picker?
   */
  get withQuantity() {
    return this.quantityService.withQuantity(this.attribute.dataType ?? Configurator.DataType.NOT_IMPLEMENTED, this.attribute.uiType ?? Configurator.UiType.NOT_IMPLEMENTED);
  }
  /**
   * Checks if quantity control should be disabled
   *
   * @return {boolean} - Disable quantity picker?
   */
  get disableQuantityActions() {
    return this.quantityService.disableQuantityActions(this.attribute.selectedSingleValue);
  }
  onSelect(value) {
    this.loading$.next(true);
    this.configuratorCommonsService.updateConfiguration(this.ownerKey, __spreadProps(__spreadValues({}, this.attribute), {
      selectedSingleValue: value
    }), Configurator.UpdateType.ATTRIBUTE);
  }
  onSelectAdditionalValue(event) {
    const userInput = event.changedAttribute.userInput;
    if (userInput) {
      this.loading$.next(true);
      event.changedAttribute.selectedSingleValue = userInput;
      this.configuratorCommonsService.updateConfiguration(event.ownerKey, event.changedAttribute, Configurator.UpdateType.ATTRIBUTE);
    }
  }
  onHandleQuantity(quantity) {
    this.loading$.next(true);
    this.configuratorCommonsService.updateConfiguration(this.ownerKey, __spreadProps(__spreadValues({}, this.attribute), {
      quantity
    }), Configurator.UpdateType.ATTRIBUTE_QUANTITY);
  }
  onChangeQuantity(eventObject, form) {
    if (!eventObject) {
      if (form) {
        form.setValue("0");
      }
      this.onSelect("");
    } else {
      this.onHandleQuantity(eventObject);
    }
  }
  getInitialQuantity(form) {
    const quantity = this.attribute.quantity ?? 0;
    if (form) {
      return form.value !== "0" ? quantity : 0;
    } else {
      return this.attribute.selectedSingleValue ? quantity : 0;
    }
  }
  /**
   *  Extract corresponding quantity parameters
   *
   * @param {FormControl} form - Form control
   * @return {ConfiguratorAttributeQuantityComponentOptions} - New quantity options
   */
  extractQuantityParameters(form) {
    const initialQuantity = this.getInitialQuantity(form);
    const disableQuantityActions$ = this.loading$.pipe(map((loading) => {
      return loading || this.disableQuantityActions;
    }));
    return {
      allowZero: !this.attribute.required,
      initialQuantity,
      disableQuantityActions$
    };
  }
  /**
   * Extract corresponding price formula parameters.
   * For the single-selection attribute types the complete price formula should be displayed at the attribute level.
   *
   * @return {ConfiguratorPriceComponentOptions} - New price formula
   */
  extractPriceFormulaParameters() {
    return {
      quantity: this.attribute.quantity,
      price: this.getSelectedValuePrice(),
      priceTotal: this.attribute.attributePriceTotal,
      isLightedUp: true
    };
  }
  /**
   * Extract corresponding value price formula parameters.
   * For the single-selection attribute types only value price should be displayed at the value level.
   *
   * @param {Configurator.Value} value - Configurator value
   * @return {ConfiguratorPriceComponentOptions} - New price formula
   */
  extractValuePriceFormulaParameters(value) {
    return {
      price: value?.valuePrice,
      isLightedUp: value ? value.selected : false
    };
  }
  getSelectedValuePrice() {
    return this.attribute.values?.find((value) => value.selected)?.valuePrice;
  }
  get isAdditionalValueNumeric() {
    return this.isWithAdditionalValues(this.attribute) && this.attribute.validationType === Configurator.ValidationType.NUMERIC;
  }
  get isAdditionalValueAlphaNumeric() {
    return this.isWithAdditionalValues(this.attribute) && this.attribute.validationType === Configurator.ValidationType.NONE;
  }
  getAriaLabel(value, attribute) {
    const ariaLabel = this.getAriaLabelWithoutAdditionalValue(value, attribute);
    if (this.isWithAdditionalValues(this.attribute)) {
      const ariaLabelWithAdditionalValue = this.getAdditionalValueAriaLabel();
      return ariaLabel + " " + ariaLabelWithAdditionalValue;
    } else {
      return ariaLabel;
    }
  }
  getAdditionalValueAriaLabel() {
    let ariaLabel = "";
    this.translation.translate("configurator.a11y.additionalValue").pipe(take(1)).subscribe((text) => ariaLabel = text);
    return ariaLabel;
  }
  getAriaLabelWithoutAdditionalValue(value, attribute) {
    return this.getAriaLabelGeneric(attribute, value, true);
  }
  static {
    this.ɵfac = function ConfiguratorAttributeSingleSelectionBaseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeSingleSelectionBaseComponent)(ɵɵdirectiveInject(ConfiguratorAttributeQuantityService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ConfiguratorAttributeSingleSelectionBaseComponent,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeSingleSelectionBaseComponent, [{
    type: Directive
  }], () => [{
    type: ConfiguratorAttributeQuantityService
  }, {
    type: TranslationService
  }, {
    type: ConfiguratorAttributeCompositionContext
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }], null);
})();
var ConfiguratorAttributeMultiSelectionBaseComponent = class _ConfiguratorAttributeMultiSelectionBaseComponent extends ConfiguratorAttributeBaseComponent {
  constructor(quantityService, attributeComponentContext, configuratorCommonsService) {
    super();
    this.quantityService = quantityService;
    this.attributeComponentContext = attributeComponentContext;
    this.configuratorCommonsService = configuratorCommonsService;
    this.loading$ = new BehaviorSubject(false);
    this.attribute = attributeComponentContext.attribute;
    this.ownerKey = attributeComponentContext.owner.key;
    this.expMode = attributeComponentContext.expMode;
    this.initPriceChangedEvent(attributeComponentContext.isPricingAsync, attributeComponentContext.attribute.key);
  }
  /**
   * Checks if we are supposed to render a quantity control on attribute level, which
   * can be derived from the attribute meta data
   *
   * @return {boolean} - Display quantity picker on attribute level?
   */
  get withQuantityOnAttributeLevel() {
    return this.quantityService.withQuantityOnAttributeLevel(this.attribute);
  }
  /**
   * Checks if we are supposed to render a quantity control, which
   * can be derived from the attribute meta data
   *
   * @return {boolean} - Display quantity picker?
   */
  get withQuantity() {
    return this.quantityService.withQuantity(this.attribute.dataType ?? Configurator.DataType.NOT_IMPLEMENTED, this.attribute.uiType ?? Configurator.UiType.NOT_IMPLEMENTED);
  }
  /**
   * Checks if quantity control should be disabled
   *
   * @return {boolean} - Disable quantity picker?
   */
  get disableQuantityActions() {
    return this.quantityService.disableQuantityActionsMultiSelection(this.attribute);
  }
  /**
   *  Extract corresponding quantity parameters
   *
   * @param {number} initialQuantity - Initial quantity
   * @param {boolean} allowZero - Allow zero
   * @return {ConfiguratorAttributeQuantityComponentOptions} - New quantity options
   */
  extractQuantityParameters(initialQuantity, allowZero) {
    const disableQuantityActions$ = this.loading$.pipe(map((loading) => {
      return loading || this.disableQuantityActions;
    }));
    return {
      allowZero: allowZero ?? !this.attribute.required,
      initialQuantity,
      disableQuantityActions$
    };
  }
  onHandleAttributeQuantity(quantity) {
    this.loading$.next(true);
    this.configuratorCommonsService.updateConfiguration(this.ownerKey, __spreadProps(__spreadValues({}, this.attribute), {
      quantity
    }), Configurator.UpdateType.ATTRIBUTE_QUANTITY);
  }
  /**
   * Extract corresponding price formula parameters.
   * For the multi-selection attribute types only total price of the attribute should be displayed at the attribute level.
   *
   * @return {ConfiguratorPriceComponentOptions} - New price formula
   */
  extractPriceFormulaParameters() {
    return {
      quantity: 0,
      price: {
        value: 0,
        currencyIso: ""
      },
      priceTotal: this.attribute.attributePriceTotal,
      isLightedUp: true
    };
  }
  static {
    this.ɵfac = function ConfiguratorAttributeMultiSelectionBaseComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeMultiSelectionBaseComponent)(ɵɵdirectiveInject(ConfiguratorAttributeQuantityService), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext), ɵɵdirectiveInject(ConfiguratorCommonsService));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ConfiguratorAttributeMultiSelectionBaseComponent,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeMultiSelectionBaseComponent, [{
    type: Directive
  }], () => [{
    type: ConfiguratorAttributeQuantityService
  }, {
    type: ConfiguratorAttributeCompositionContext
  }, {
    type: ConfiguratorCommonsService
  }], null);
})();
var ConfiguratorAttributeCheckBoxListComponent = class _ConfiguratorAttributeCheckBoxListComponent extends ConfiguratorAttributeMultiSelectionBaseComponent {
  constructor(configUtilsService, quantityService, attributeComponentContext, configuratorCommonsService) {
    super(quantityService, attributeComponentContext, configuratorCommonsService);
    this.configUtilsService = configUtilsService;
    this.quantityService = quantityService;
    this.attributeComponentContext = attributeComponentContext;
    this.configuratorCommonsService = configuratorCommonsService;
    this.attributeCheckBoxForms = new Array();
    this.logger = inject(LoggerService);
    this.group = attributeComponentContext.group.id;
  }
  ngOnInit() {
    for (const value of this.attribute.values ?? []) {
      let attributeCheckBoxForm;
      if (value.selected) {
        attributeCheckBoxForm = new UntypedFormControl(true);
      } else {
        attributeCheckBoxForm = new UntypedFormControl(false);
      }
      this.attributeCheckBoxForms.push(attributeCheckBoxForm);
    }
  }
  get allowZeroValueQuantity() {
    return this.quantityService.allowZeroValueQuantity(this.attribute);
  }
  onSelect(valueCode) {
    const selectedValues = this.configUtilsService.assembleValuesForMultiSelectAttributes(this.attributeCheckBoxForms, this.attribute);
    if (valueCode && this.listenForPriceChanges) {
      this.configUtilsService.setLastSelected(this.attribute.name, valueCode);
    }
    this.configuratorCommonsService.updateConfiguration(this.ownerKey, __spreadProps(__spreadValues({}, this.attribute), {
      values: selectedValues
    }), Configurator.UpdateType.ATTRIBUTE);
  }
  onChangeValueQuantity(eventObject, valueCode, formIndex) {
    if (eventObject === 0) {
      this.attributeCheckBoxForms[formIndex].setValue(false);
      this.onSelect(valueCode);
      return;
    }
    const value = this.configUtilsService.assembleValuesForMultiSelectAttributes(this.attributeCheckBoxForms, this.attribute).find((item) => item.valueCode === valueCode);
    if (!value) {
      if (isDevMode()) {
        this.logger.warn("no value for event:", eventObject);
      }
      return;
    }
    value.quantity = eventObject;
    this.configuratorCommonsService.updateConfiguration(this.ownerKey, __spreadProps(__spreadValues({}, this.attribute), {
      values: [value]
    }), Configurator.UpdateType.VALUE_QUANTITY);
  }
  onChangeQuantity(eventObject) {
    if (!eventObject) {
      this.attributeCheckBoxForms.forEach((_, index) => this.attributeCheckBoxForms[index].setValue(false));
      this.onSelect();
    } else {
      this.onHandleAttributeQuantity(eventObject);
    }
  }
  static {
    this.ɵfac = function ConfiguratorAttributeCheckBoxListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeCheckBoxListComponent)(ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService), ɵɵdirectiveInject(ConfiguratorAttributeQuantityService), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext), ɵɵdirectiveInject(ConfiguratorCommonsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeCheckBoxListComponent,
      selectors: [["cx-configurator-attribute-checkbox-list"]],
      standalone: false,
      features: [ɵɵProvidersFeature([ConfiguratorAttributePriceChangeService]), ɵɵInheritDefinitionFeature],
      decls: 5,
      vars: 4,
      consts: [[2, "display", "none"], [3, "id", 4, "ngIf"], [3, "id"], ["class", "cx-attribute-level-quantity-price", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "cx-attribute-level-quantity-price"], [3, "changeQuantity", "quantityOptions"], [3, "formula"], [1, "form-check"], [1, "cx-value-label-pair"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "cxFocus", "value", "formControl", "name"], ["aria-hidden", "true", 1, "cx-configurator-attribute-value-label", "form-check-label", 3, "id", "for"], [3, "text", "textSize", "productName", "tabIndex", 4, "ngIf"], [1, "cx-value-price"], [3, "quantityOptions", "changeQuantity", 4, "ngIf"], [3, "text", "textSize", "productName", "tabIndex"]],
      template: function ConfiguratorAttributeCheckBoxListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "fieldset")(1, "legend", 0);
          ɵɵtext(2);
          ɵɵelementEnd();
          ɵɵtemplate(3, ConfiguratorAttributeCheckBoxListComponent_div_3_Template, 3, 3, "div", 1);
          ɵɵpipe(4, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate(ctx.attribute.label);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(4, 2, ctx.changedPrices$));
        }
      },
      dependencies: [FocusDirective, CheckboxControlValueAccessor, NgControlStatus, FormControlDirective, NgForOf, NgIf, ConfiguratorAttributeQuantityComponent, ConfiguratorPriceComponent, ConfiguratorShowMoreComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeCheckBoxListComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-checkbox-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfiguratorAttributePriceChangeService],
      standalone: false,
      template: `<fieldset>
  <legend style="display: none">{{ attribute.label }}</legend>
  <div
    *ngIf="changedPrices$ | async as changedPrices"
    id="{{ createAttributeIdForConfigurator(attribute) }}"
  >
    <div
      *ngIf="withQuantityOnAttributeLevel"
      class="cx-attribute-level-quantity-price"
    >
      <cx-configurator-attribute-quantity
        (changeQuantity)="onChangeQuantity($event)"
        [quantityOptions]="
          extractQuantityParameters(attribute.quantity, !attribute.required)
        "
      ></cx-configurator-attribute-quantity>
      <cx-configurator-price
        [formula]="extractPriceFormulaParameters()"
      ></cx-configurator-price>
    </div>
    <ng-container *ngFor="let value of attribute.values; let i = index">
      <div class="form-check">
        <div class="cx-value-label-pair">
          <input
            id="{{
              createAttributeValueIdForConfigurator(attribute, value.valueCode)
            }}"
            type="checkbox"
            class="form-check-input"
            [cxFocus]="{ key: attribute.name + '-' + value.name }"
            [value]="value.valueCode"
            (change)="onSelect(value.valueCode)"
            [formControl]="attributeCheckBoxForms[i]"
            name="{{ createAttributeIdForConfigurator(attribute) }}"
            [attr.aria-label]="
              getAriaLabelGeneric(
                attribute,
                enrichValueWithPrice(value, changedPrices)
              )
            "
            [attr.aria-describedby]="
              createAttributeUiKey('label', attribute.name)
            "
            [attr.aria-live]="
              isLastSelected(attribute.name, value.valueCode) ? 'polite' : null
            "
          />
          <label
            id="{{
              createValueUiKey('label', attribute.name, value.valueCode)
            }}"
            for="{{
              createAttributeValueIdForConfigurator(attribute, value.valueCode)
            }}"
            aria-hidden="true"
            class="cx-configurator-attribute-value-label form-check-label"
            >{{ getLabel(expMode, value.valueDisplay, value.valueCode) }}</label
          >
          <cx-configurator-show-more
            *ngIf="value.description"
            [text]="value.description"
            [textSize]="getValueDescriptionLength()"
            [productName]="
              getLabel(expMode, value.valueDisplay, value.valueCode)
            "
            [tabIndex]="0"
          ></cx-configurator-show-more>
        </div>
        <div class="cx-value-price">
          <cx-configurator-price
            [formula]="
              extractValuePriceFormulaParameters(
                enrichValueWithPrice(value, changedPrices)
              )
            "
          ></cx-configurator-price>
        </div>
      </div>
      <cx-configurator-attribute-quantity
        *ngIf="value.selected && withQuantity && !withQuantityOnAttributeLevel"
        (changeQuantity)="onChangeValueQuantity($event, value.valueCode, i)"
        [quantityOptions]="
          extractQuantityParameters(value.quantity, allowZeroValueQuantity)
        "
      ></cx-configurator-attribute-quantity>
    </ng-container>
  </div>
</fieldset>
`
    }]
  }], () => [{
    type: ConfiguratorStorefrontUtilsService
  }, {
    type: ConfiguratorAttributeQuantityService
  }, {
    type: ConfiguratorAttributeCompositionContext
  }, {
    type: ConfiguratorCommonsService
  }], null);
})();
var ConfiguratorAttributeCheckboxListModule = class _ConfiguratorAttributeCheckboxListModule {
  static {
    this.ɵfac = function ConfiguratorAttributeCheckboxListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeCheckboxListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeCheckboxListModule,
      declarations: [ConfiguratorAttributeCheckBoxListComponent],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, ConfiguratorAttributeQuantityModule, ConfiguratorPriceModule, ConfiguratorShowMoreModule],
      exports: [ConfiguratorAttributeCheckBoxListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_checkBoxList: ConfiguratorAttributeCheckBoxListComponent
          }
        }
      })],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, ConfiguratorAttributeQuantityModule, ConfiguratorPriceModule, ConfiguratorShowMoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeCheckboxListModule, [{
    type: NgModule,
    args: [{
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, ConfiguratorAttributeQuantityModule, ConfiguratorPriceModule, ConfiguratorShowMoreModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_checkBoxList: ConfiguratorAttributeCheckBoxListComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeCheckBoxListComponent],
      exports: [ConfiguratorAttributeCheckBoxListComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeCheckBoxComponent = class _ConfiguratorAttributeCheckBoxComponent extends ConfiguratorAttributeBaseComponent {
  constructor(attributeComponentContext, configuratorCommonsService) {
    super();
    this.attributeComponentContext = attributeComponentContext;
    this.configuratorCommonsService = configuratorCommonsService;
    this.attributeCheckBoxForm = new UntypedFormControl("");
    this.attribute = attributeComponentContext.attribute;
    this.group = attributeComponentContext.group.id;
    this.ownerKey = attributeComponentContext.owner.key;
    this.expMode = attributeComponentContext.expMode;
    this.initPriceChangedEvent(attributeComponentContext.isPricingAsync, attributeComponentContext.attribute.key);
  }
  ngOnInit() {
    this.attributeCheckBoxForm.setValue(this.attribute.selectedSingleValue);
    this.attributeValue = this.getValueFromAttribute();
  }
  /**
   * Fired when a check box has been selected i.e. when a value has been set
   */
  onSelect(valueCode) {
    const selectedValues = this.assembleSingleValue();
    if (valueCode && this.listenForPriceChanges) {
      this.configuratorStorefrontUtilsService.setLastSelected(this.attribute.name, valueCode);
    }
    this.configuratorCommonsService.updateConfiguration(this.ownerKey, __spreadProps(__spreadValues({}, this.attribute), {
      values: selectedValues
    }), Configurator.UpdateType.ATTRIBUTE);
  }
  getValueFromAttribute() {
    return this.attribute.values ? this.attribute.values[0] : {
      valueCode: ""
    };
  }
  assembleSingleValue() {
    const localAssembledValues = [];
    const value = this.getValueFromAttribute();
    const localAttributeValue = {
      valueCode: value.valueCode
    };
    localAttributeValue.name = value.name;
    localAttributeValue.selected = this.attributeCheckBoxForm.value;
    localAssembledValues.push(localAttributeValue);
    return localAssembledValues;
  }
  static {
    this.ɵfac = function ConfiguratorAttributeCheckBoxComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeCheckBoxComponent)(ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext), ɵɵdirectiveInject(ConfiguratorCommonsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeCheckBoxComponent,
      selectors: [["cx-configurator-attribute-checkbox"]],
      standalone: false,
      features: [ɵɵProvidersFeature([ConfiguratorAttributePriceChangeService]), ɵɵInheritDefinitionFeature],
      decls: 7,
      vars: 5,
      consts: [[2, "display", "none"], [3, "id"], ["class", "form-check", 4, "ngIf"], [1, "form-check"], [1, "cx-value-label-pair"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "value", "cxFocus", "formControl", "name"], ["aria-hidden", "true", 1, "form-check-label", 3, "id", "for"], [3, "text", "textSize", "productName", "tabIndex", 4, "ngIf"], [1, "cx-value-price"], [3, "formula"], [3, "text", "textSize", "productName", "tabIndex"]],
      template: function ConfiguratorAttributeCheckBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainerStart(0);
          ɵɵelementStart(1, "fieldset")(2, "legend", 0);
          ɵɵtext(3);
          ɵɵelementEnd();
          ɵɵelementStart(4, "div", 1);
          ɵɵtemplate(5, ConfiguratorAttributeCheckBoxComponent_div_5_Template, 8, 15, "div", 2);
          ɵɵpipe(6, "async");
          ɵɵelementEnd()();
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate(ctx.attribute.label);
          ɵɵadvance();
          ɵɵpropertyInterpolate("id", ctx.createAttributeIdForConfigurator(ctx.attribute));
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 3, ctx.changedPrices$));
        }
      },
      dependencies: [FocusDirective, CheckboxControlValueAccessor, NgControlStatus, FormControlDirective, NgIf, ConfiguratorPriceComponent, ConfiguratorShowMoreComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeCheckBoxComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-checkbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfiguratorAttributePriceChangeService],
      standalone: false,
      template: `<ng-container>
  <fieldset>
    <legend style="display: none">{{ attribute.label }}</legend>
    <div id="{{ createAttributeIdForConfigurator(attribute) }}">
      <div class="form-check" *ngIf="changedPrices$ | async as changedPrices">
        <div class="cx-value-label-pair">
          <input
            id="{{
              createAttributeValueIdForConfigurator(
                attribute,
                attributeValue.valueCode
              )
            }}"
            type="checkbox"
            class="form-check-input"
            [value]="attributeValue.valueCode"
            [cxFocus]="{
              key: attribute.name + '-' + attributeValue.name,
            }"
            (change)="onSelect(attributeValue.valueCode)"
            [formControl]="attributeCheckBoxForm"
            name="{{ createAttributeIdForConfigurator(attribute) }}"
            [attr.aria-label]="
              getAriaLabelGeneric(
                attribute,
                enrichValueWithPrice(attributeValue, changedPrices)
              )
            "
            [attr.aria-live]="
              isLastSelected(attribute.name, attributeValue.valueCode)
                ? 'polite'
                : null
            "
            [attr.aria-describedby]="
              createAttributeUiKey('label', attribute.name)
            "
          />
          <label
            id="{{
              createValueUiKey(
                'label',
                attribute.name,
                attributeValue.valueCode
              )
            }}"
            for="{{
              createAttributeValueIdForConfigurator(
                attribute,
                attributeValue.valueCode
              )
            }}"
            aria-hidden="true"
            class="form-check-label"
            >{{
              getLabel(
                expMode,
                attributeValue.valueDisplay,
                attributeValue.valueCode
              )
            }}</label
          >
          <cx-configurator-show-more
            *ngIf="attributeValue.description"
            [text]="attributeValue.description"
            [textSize]="getValueDescriptionLength()"
            [productName]="
              getLabel(
                expMode,
                attributeValue.valueDisplay,
                attributeValue.valueCode
              )
            "
            [tabIndex]="0"
          ></cx-configurator-show-more>
        </div>
        <div class="cx-value-price">
          <cx-configurator-price
            [formula]="
              extractValuePriceFormulaParameters(
                enrichValueWithPrice(attributeValue, changedPrices)
              )
            "
          ></cx-configurator-price>
        </div>
      </div>
    </div>
  </fieldset>
</ng-container>
`
    }]
  }], () => [{
    type: ConfiguratorAttributeCompositionContext
  }, {
    type: ConfiguratorCommonsService
  }], null);
})();
var ConfiguratorAttributeCheckboxModule = class _ConfiguratorAttributeCheckboxModule {
  static {
    this.ɵfac = function ConfiguratorAttributeCheckboxModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeCheckboxModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeCheckboxModule,
      declarations: [ConfiguratorAttributeCheckBoxComponent],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, ConfiguratorPriceModule, ConfiguratorShowMoreModule],
      exports: [ConfiguratorAttributeCheckBoxComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_checkBox: ConfiguratorAttributeCheckBoxComponent
          }
        }
      })],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, ConfiguratorPriceModule, ConfiguratorShowMoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, ConfiguratorPriceModule, ConfiguratorShowMoreModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_checkBox: ConfiguratorAttributeCheckBoxComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeCheckBoxComponent],
      exports: [ConfiguratorAttributeCheckBoxComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeInputFieldComponent = class _ConfiguratorAttributeInputFieldComponent extends ConfiguratorAttributeBaseComponent {
  constructor(config, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService) {
    super();
    this.config = config;
    this.attributeComponentContext = attributeComponentContext;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.attributeInputForm = new UntypedFormControl("");
    this.showRequiredErrorMessage$ = of(false);
    this.debounceForDateActive = false;
    this.FALLBACK_DEBOUNCE_TIME = 500;
    this.FALLBACK_DEBOUNCE_TIME_DATE = 1500;
    this.attribute = attributeComponentContext.attribute;
    this.group = attributeComponentContext.group.id;
    this.owner = attributeComponentContext.owner;
    this.ownerKey = attributeComponentContext.owner.key;
    this.ownerType = attributeComponentContext.owner.type;
    this.compileShowRequiredErrorMessage();
  }
  ngOnInit() {
    this.attributeInputForm.setValue(this.attribute.userInput);
    if (this.ownerType === CommonConfigurator.OwnerType.CART_ENTRY && this.attribute.required && this.attribute.incomplete && !this.attributeInputForm.value) {
      this.attributeInputForm.markAsTouched();
    }
    this.sub = this.attributeInputForm.valueChanges.pipe(debounce(() => timer(this.calculateDebounceTime()))).subscribe(() => {
      this.onChange();
    });
  }
  onChange() {
    if (!this.attributeInputForm.invalid) {
      this.configuratorCommonsService.updateConfiguration(this.ownerKey, __spreadProps(__spreadValues({}, this.attribute), {
        userInput: this.attributeInputForm.value,
        selectedSingleValue: this.attributeInputForm.value
      }), Configurator.UpdateType.ATTRIBUTE);
    }
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
  /**
   * Verifies if the user input has a non-blank value.
   * @returns {boolean} - 'True' if the user input is undefined, empty or contains only blanks, otherwise 'false'.
   */
  get isUserInputEmpty() {
    return !this.attribute.userInput || this.attribute.userInput.trim().length === 0;
  }
  /**
   * Checks if the component needs to be marked as required.
   * This is never the case if it is used as sub component for an attribute type which allows an additional value
   * @returns Required?
   */
  get isRequired() {
    return this.isUserInput(this.attribute) ? this.attribute.required ?? false : false;
  }
  /**
   * Returns the type for the input field. Depending on the UI type, that is text or date.
   */
  get inputType() {
    return this.isDateBased(this.attribute) ? "date" : "text";
  }
  /**
   * Activates a waiting period until date changes are sent. We only
   * want to enable that once the user tries to enter something
   * directly (when using date picker, changes should be sent instantly)
   */
  activateDebounceDate() {
    this.debounceForDateActive = true;
  }
  isDateBased(attribute) {
    return attribute.uiType === Configurator.UiType.SAP_DATE || this.isWithAdditionalValues(attribute) && attribute.validationType === Configurator.ValidationType.SAP_DATE;
  }
  compileShowRequiredErrorMessage() {
    this.showRequiredErrorMessage$ = this.configuratorStorefrontUtilsService.isCartEntryOrGroupVisited(this.owner, this.group).pipe(map((result) => result ? this.isRequiredErrorMsg(this.attribute) && this.isUserInput(this.attribute) : false));
  }
  calculateDebounceTime() {
    if (this.isDateBased(this.attribute)) {
      return this.debounceForDateActive ? this.config.productConfigurator?.updateDebounceTime?.date ?? this.FALLBACK_DEBOUNCE_TIME_DATE : 0;
    } else {
      return this.config.productConfigurator?.updateDebounceTime?.input ?? this.FALLBACK_DEBOUNCE_TIME;
    }
  }
  static {
    this.ɵfac = function ConfiguratorAttributeInputFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeInputFieldComponent)(ɵɵdirectiveInject(ConfiguratorUISettingsConfig), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeInputFieldComponent,
      selectors: [["cx-configurator-attribute-input-field"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 6,
      vars: 28,
      consts: [[1, "form-group", 3, "id"], ["class", "cx-visually-hidden", 3, "id", 4, "ngIf"], [1, "form-control", 3, "keydown", "formControl", "type", "ngClass", "maxlength", "cxFocus"], [1, "cx-visually-hidden", 3, "id"]],
      template: function ConfiguratorAttributeInputFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, ConfiguratorAttributeInputFieldComponent_label_1_Template, 3, 13, "label", 1);
          ɵɵelementStart(2, "input", 2);
          ɵɵpipe(3, "async");
          ɵɵpipe(4, "cxTranslate");
          ɵɵpipe(5, "cxTranslate");
          ɵɵlistener("keydown", function ConfiguratorAttributeInputFieldComponent_Template_input_keydown_2_listener() {
            return ctx.activateDebounceDate();
          });
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵpropertyInterpolate("id", ctx.createAttributeIdForConfigurator(ctx.attribute));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.inputType === "date");
          ɵɵadvance();
          ɵɵclassProp("ng-invalid", ctx.isRequired && ctx.isUserInputEmpty);
          ɵɵpropertyInterpolate("type", ctx.inputType);
          ɵɵpropertyInterpolate("maxlength", ctx.attribute.maxlength);
          ɵɵproperty("formControl", ctx.attributeInputForm)("ngClass", ɵɵpureFunction1(19, _c4, ɵɵpipeBind1(3, 11, ctx.showRequiredErrorMessage$)))("cxFocus", ɵɵpureFunction1(21, _c3, ctx.createAttributeIdForConfigurator(ctx.attribute)));
          ɵɵattribute("aria-label", ctx.isUserInputEmpty ? ɵɵpipeBind2(4, 13, "configurator.a11y.valueOfAttributeBlank", ɵɵpureFunction1(23, _c0, ctx.attribute.label)) : ɵɵpipeBind2(5, 16, "configurator.a11y.valueOfAttributeFull", ɵɵpureFunction2(25, _c5, ctx.attribute.userInput, ctx.attribute.label)))("aria-describedby", ctx.inputType === "date" ? ctx.createAttributeUiKey("labelForDate", ctx.attribute.name) : ctx.createAttributeUiKey("label", ctx.attribute.name));
        }
      },
      dependencies: [FocusDirective, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, FormControlDirective, NgClass, NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeInputFieldComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-input-field",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div id="{{ createAttributeIdForConfigurator(attribute) }}" class="form-group">
  <label
    *ngIf="inputType === 'date'"
    class="cx-visually-hidden"
    id="{{ createAttributeUiKey('labelForDate', attribute.name) }}"
    [attr.aria-label]="
      isUserInputEmpty
        ? ('configurator.a11y.valueOfDateAttributeBlank'
          | cxTranslate
            : {
                attribute: attribute.label,
              })
        : ('configurator.a11y.valueOfDateAttributeFull'
          | cxTranslate
            : {
                value: attribute.userInput,
                attribute: attribute.label,
              })
    "
  ></label>
  <input
    [formControl]="attributeInputForm"
    class="form-control"
    type="{{ inputType }}"
    (keydown)="activateDebounceDate()"
    [ngClass]="{
      'cx-required-error-msg ': (showRequiredErrorMessage$ | async),
    }"
    [class.ng-invalid]="isRequired && isUserInputEmpty"
    maxlength="{{ attribute.maxlength }}"
    [attr.aria-label]="
      isUserInputEmpty
        ? ('configurator.a11y.valueOfAttributeBlank'
          | cxTranslate
            : {
                attribute: attribute.label,
              })
        : ('configurator.a11y.valueOfAttributeFull'
          | cxTranslate
            : {
                value: attribute.userInput,
                attribute: attribute.label,
              })
    "
    [attr.aria-describedby]="
      inputType === 'date'
        ? createAttributeUiKey('labelForDate', attribute.name)
        : createAttributeUiKey('label', attribute.name)
    "
    [cxFocus]="{
      key: createAttributeIdForConfigurator(attribute),
    }"
  />
</div>
`
    }]
  }], () => [{
    type: ConfiguratorUISettingsConfig
  }, {
    type: ConfiguratorAttributeCompositionContext
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }], null);
})();
var ConfiguratorAttributeNumericInputFieldService = class _ConfiguratorAttributeNumericInputFieldService {
  /**
   * Validates numeric input according to settings that are not derived from the locale but from the attribute
   * meta data like the total number of digits and the maximum number of decimal places.
   *
   * @param input Numeric user input, formatted according to session locale
   * @param groupingSeparator Separator for grouping, e.g. ',' for 'en' locale. We allow the grouping separator but
   *   do not check exactly on the position of it in the numerical input. This e.g. is ok: '12,12,12', will be converted
   *   to '121,212' after the next roundtrip
   * @param decimalSeparator  Decimal separator, e.g. '.' for 'en' locale. Must not occur more that 1 time in the input.
   * @param numberTotalPlaces  Total number of places e.g. 10
   * @param numberDecimalPlaces  Number of decimal places e.g. 2
   *  @returns {boolean} Did we see a validation error?
   */
  performValidationAccordingToMetaData(input, groupingSeparator, decimalSeparator, numberTotalPlaces, numberDecimalPlaces) {
    const regexEscape = "\\";
    const search = new RegExp(regexEscape + groupingSeparator, "g");
    const woGrouping = input.replace(search, "");
    const splitParts = woGrouping.split(decimalSeparator);
    if (splitParts.length > 2) {
      return true;
    }
    if (splitParts.length === 1) {
      return woGrouping.length > numberTotalPlaces - numberDecimalPlaces;
    }
    return splitParts[0].length > numberTotalPlaces - numberDecimalPlaces || splitParts[1].length > numberDecimalPlaces;
  }
  formatIntervalValue(intervalValue, decimalPlaces, locale) {
    if (decimalPlaces === void 0) {
      decimalPlaces = 0;
    }
    const formatted = formatNumber(intervalValue, locale, "1." + decimalPlaces + "-" + decimalPlaces);
    return formatted;
  }
  /**
   * Parses the value names and returns the intervals.
   *
   * @param values values of the attribute
   * @returns {ConfiguratorAttributeNumericInterval[]} parsed intervals
   */
  getIntervals(values) {
    const intervals = [];
    if (values && values.length > 0) {
      values.forEach((value) => {
        const interval = this.getInterval(value);
        if (interval && Object.keys(interval).length !== 0) {
          intervals.push(interval);
        }
      });
    }
    return intervals;
  }
  /**
   * Parses the value name and returns the interval structure.
   * Valid interval strings:
   * Standard Interval
   * 5 - 10
   * 5 - <10
   * >5 - 10
   * >5 - <10
   * -10 - -5
   * 1.25 - 1.35
   *
   * Infinite Interval
   * >5
   * >=5
   * <5
   * <=5
   * >-5
   *
   * @param value value which will be parsed
   * @returns {ConfiguratorAttributeNumericInterval} parsed interval
   */
  getInterval(value) {
    const interval = {
      minValue: void 0,
      maxValue: void 0,
      minValueIncluded: false,
      maxValueIncluded: false
    };
    if (!value || !value.name || value.selected) {
      return void 0;
    }
    let minVal;
    let maxVal;
    if (value.name.includes(" - ")) {
      ({
        minVal,
        maxVal
      } = this.handleStandardInterval(value.name, interval));
    } else {
      ({
        minVal,
        maxVal
      } = this.handleSingleOrInfinite(value.name, interval));
    }
    if (minVal && minVal.length > 0) {
      interval.minValue = +minVal;
    }
    if (maxVal && maxVal.length > 0) {
      interval.maxValue = +maxVal;
    }
    return interval;
  }
  handleSingleOrInfinite(valueName, interval) {
    let minVal = "";
    let maxVal = "";
    if (valueName.includes(">")) {
      minVal = valueName;
      interval.minValueIncluded = false;
      minVal = minVal.replace(/>/g, "");
    }
    if (valueName.includes("<")) {
      maxVal = valueName;
      interval.maxValueIncluded = false;
      maxVal = maxVal.replace(/</g, "");
    }
    if (valueName.includes("≥")) {
      minVal = valueName;
      interval.minValueIncluded = true;
      minVal = minVal.replace(/≥/g, "");
    }
    if (valueName.includes("≤")) {
      maxVal = valueName;
      interval.maxValueIncluded = true;
      maxVal = maxVal.replace(/≤/g, "");
    }
    if (!valueName.includes(">") && !valueName.includes("<") && !valueName.includes("≤") && !valueName.includes("≥")) {
      minVal = valueName;
      maxVal = valueName;
      interval.maxValueIncluded = true;
      interval.minValueIncluded = true;
    }
    return {
      minVal,
      maxVal
    };
  }
  handleStandardInterval(valueName, interval) {
    const index = valueName.indexOf(" - ");
    let minVal = valueName.substring(0, index);
    let maxVal = valueName.substring(index + 3, valueName.length);
    interval.minValueIncluded = true;
    interval.maxValueIncluded = true;
    if (minVal.includes(">")) {
      interval.minValueIncluded = false;
      minVal = minVal.replace(">", "");
    }
    if (maxVal.includes("<")) {
      interval.maxValueIncluded = false;
      maxVal = maxVal.replace("<", "");
    }
    return {
      minVal,
      maxVal
    };
  }
  /**
   * Get pattern for the message that is displayed when the validation fails. This message e.g. looks like
   * 'Enter the number in the following format: ##,###,###.##'
   * for the 'en' locale for an attribute with total length of 10 and 2 decimal places.
   *
   * @param decimalPlaces Number of decimal places
   * @param totalLength Total number of digits
   * @param negativeAllowed Do we allow negative input?
   * @param locale  Locale
   *  @returns {string} The pattern that we display in the validation message
   */
  getPatternForValidationMessage(decimalPlaces, totalLength, negativeAllowed, locale) {
    let input = (10 ** totalLength - 1).toString();
    if (decimalPlaces > 0) {
      input = input.substring(0, totalLength - decimalPlaces) + "." + input.substring(totalLength - decimalPlaces, totalLength);
    }
    const inputAsNumber = Number(input);
    let formatted = formatNumber(inputAsNumber, locale, "1." + decimalPlaces + "-" + decimalPlaces).replace(/9/g, "#");
    if (negativeAllowed) {
      formatted = "-" + formatted;
    }
    return formatted;
  }
  /**
   * Returns the validator for the input component that represents numeric input.
   * The validator only allows the grouping separator, the decimal separator, an optional '-' sign,
   * and the digits between 0..9. This validator does not support the scientific notation of
   * attributes.
   *
   * @param locale The locale
   * @param numberDecimalPlaces Number of decimal places
   * @param numberTotalPlaces  Total number of digits
   * @param negativeAllowed: Do we allow negative input?
   * @returns {ValidatorFn} The validator
   */
  getNumberFormatValidator(locale, numberDecimalPlaces, numberTotalPlaces, negativeAllowed) {
    return (control) => {
      const input = control.value?.trim();
      if (input) {
        return this.getValidationErrorsNumericFormat(input, locale, numberDecimalPlaces, numberTotalPlaces, negativeAllowed);
      }
      return null;
    };
  }
  getValidationErrorsNumericFormat(input, locale, numberDecimalPlaces, numberTotalPlaces, negativeAllowed) {
    const groupingSeparator = getLocaleNumberSymbol(locale, NumberSymbol.Group);
    const decimalSeparator = getLocaleNumberSymbol(locale, NumberSymbol.Decimal);
    const expressionPrefix = negativeAllowed ? "^-?" : "^";
    const expressionOnlyNumericalInput = new RegExp(expressionPrefix + "[0123456789" + groupingSeparator + decimalSeparator + "]*$");
    if (!expressionOnlyNumericalInput.test(input)) {
      return this.createValidationError(true);
    }
    return this.createValidationError(this.performValidationAccordingToMetaData(input, groupingSeparator, decimalSeparator, numberTotalPlaces + (input.includes("-") ? 1 : 0), numberDecimalPlaces));
  }
  /**
   * Returns the interval validator for the input component that represents numeric input.
   * It becomes active only if intervals are provided (they originate from the attribute's values),
   * and matches the input with the list of intervals.
   * It also becomes active only if the validation for the numeric format itself is fine, in order
   * to avoid multiple validation messages.
   *
   * @param locale The locale
   * @param numberDecimalPlaces Number of decimal places
   * @param numberTotalPlaces  Total number of digits
   * @param negativeAllowed: Do we allow negative input?
   * @returns {ValidatorFn} The validator
   */
  getIntervalValidator(locale, numberDecimalPlaces, numberTotalPlaces, negativeAllowed, intervals, currentValue) {
    return (control) => {
      const input = control.value?.trim();
      if (input && input !== currentValue && //this is to ensure that selected interval consisting of only one value will not lead to a validation error
      // in the next roundtrip, when this value has been removed from the list of intervals
      intervals.length !== 0 && // perform validation only if intervals exist
      this.getValidationErrorsNumericFormat(input, locale, numberDecimalPlaces, numberTotalPlaces, negativeAllowed) == null) {
        return this.createIntervalValidationError(!this.checkIfPartOfIntervals(input, locale, intervals));
      }
      return null;
    };
  }
  checkIfPartOfIntervals(input, locale, intervals) {
    return intervals.find((interval) => this.inputMatchesInterval(input, locale, interval)) !== void 0;
  }
  inputMatchesInterval(input, locale, interval) {
    const inputNum = this.parseInput(input, locale);
    let matchesLower = true;
    if (interval.minValue) {
      matchesLower = interval.minValueIncluded ? interval.minValue <= inputNum : interval.minValue < inputNum;
    }
    let matchesHigher = true;
    if (interval.maxValue) {
      matchesHigher = interval.maxValueIncluded ? interval.maxValue >= inputNum : interval.maxValue > inputNum;
    }
    return matchesLower && matchesHigher;
  }
  parseInput(input, locale) {
    const groupingSeparator = getLocaleNumberSymbol(locale, NumberSymbol.Group);
    const decimalSeparator = getLocaleNumberSymbol(locale, NumberSymbol.Decimal);
    return this.parseInputForSeparators(input, groupingSeparator, decimalSeparator);
  }
  parseInputForSeparators(input, groupingSeparator, decimalSeparator) {
    const escapeString = "\\";
    const search = new RegExp(escapeString + groupingSeparator, "g");
    const normalizedInput = input.replace(search, "").replace(decimalSeparator, ".");
    return parseFloat(normalizedInput);
  }
  createValidationError(isError) {
    return isError ? {
      wrongFormat: {}
    } : null;
  }
  createIntervalValidationError(isError) {
    return isError ? {
      intervalNotMet: {}
    } : null;
  }
  static {
    this.ɵfac = function ConfiguratorAttributeNumericInputFieldService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeNumericInputFieldService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorAttributeNumericInputFieldService,
      factory: _ConfiguratorAttributeNumericInputFieldService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeNumericInputFieldService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfiguratorAttributeNumericInputFieldComponent = class _ConfiguratorAttributeNumericInputFieldComponent extends ConfiguratorAttributeInputFieldComponent {
  constructor(configAttributeNumericInputFieldService, config, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService) {
    super(config, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService);
    this.configAttributeNumericInputFieldService = configAttributeNumericInputFieldService;
    this.config = config;
    this.translation = translation;
    this.attributeComponentContext = attributeComponentContext;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.iconType = ICON_TYPE;
    this.intervals = [];
    this.logger = inject(LoggerService);
    this.language = attributeComponentContext.language;
  }
  /**
   * Do we need to display a validation message
   */
  mustDisplayValidationMessage() {
    const wrongFormat = (this.attributeInputForm.dirty || this.attributeInputForm.touched) && this.attributeInputForm.errors?.wrongFormat;
    return wrongFormat;
  }
  /**
   * Do we need to display a validation message concerning intervals
   */
  mustDisplayIntervalMessage() {
    const intervalNotMet = (this.attributeInputForm.dirty || this.attributeInputForm.touched) && this.attributeInputForm.errors?.intervalNotMet;
    return intervalNotMet;
  }
  ngOnInit() {
    this.initializeValidation();
    if (this.attribute.userInput) {
      this.attributeInputForm.setValue(this.attribute.userInput);
    }
    if (this.ownerType === CommonConfigurator.OwnerType.CART_ENTRY && this.attribute.required && this.attribute.incomplete && !this.attributeInputForm.value) {
      this.attributeInputForm.markAsTouched();
    }
    this.sub = this.attributeInputForm.valueChanges.pipe(debounce(() => timer(this.config.productConfigurator?.updateDebounceTime?.input ?? this.FALLBACK_DEBOUNCE_TIME))).subscribe(() => this.onChange());
  }
  initializeValidation() {
    this.locale = this.getInstalledLocale(this.language);
    let numDecimalPlaces = this.attribute.numDecimalPlaces;
    let numTotalLength = this.attribute.numTotalLength;
    let negativeAllowed = this.attribute.negativeAllowed;
    if (numDecimalPlaces === void 0 || numTotalLength === void 0 || negativeAllowed === void 0) {
      const defaultSettings = this.getDefaultSettings();
      numDecimalPlaces = defaultSettings.numDecimalPlaces;
      numTotalLength = defaultSettings.numTotalLength;
      negativeAllowed = defaultSettings.negativeAllowed;
      if (isDevMode()) {
        this.logger.warn("Meta data for numeric attribute not present, falling back to defaults");
      }
    }
    if (this.attribute.intervalInDomain) {
      this.intervals = this.configAttributeNumericInputFieldService.getIntervals(this.attribute.values);
    }
    const numberFormatValidator = this.configAttributeNumericInputFieldService.getNumberFormatValidator(this.locale, numDecimalPlaces, numTotalLength, negativeAllowed);
    const validatorArray = [numberFormatValidator, this.configAttributeNumericInputFieldService.getIntervalValidator(this.locale, numDecimalPlaces, numTotalLength, negativeAllowed, this.intervals, this.attribute.userInput)];
    this.attributeInputForm = new UntypedFormControl("", validatorArray);
    this.numericFormatPattern = this.configAttributeNumericInputFieldService.getPatternForValidationMessage(numDecimalPlaces, numTotalLength, negativeAllowed, this.locale);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  /**
   * Returns a concatenated help text for multiple intervals.
   */
  getHelpTextForInterval() {
    let intervalText = "";
    let concatenatedIntervalText = "";
    this.intervals.forEach((interval, index) => {
      intervalText = this.getIntervalText(interval);
      if (index > 0) {
        intervalText = intervalText.charAt(0).toLowerCase() + intervalText.slice(1);
        this.translation.translate("configurator.a11y.combinedIntervalsText", {
          combinedInterval: concatenatedIntervalText,
          newInterval: intervalText
        }).pipe(take(1)).subscribe((text) => concatenatedIntervalText = text);
      } else {
        concatenatedIntervalText = intervalText;
      }
    });
    return concatenatedIntervalText.trim();
  }
  /**
   * Returns the combined aria text for attribute and value and the interval help text
   */
  getAriaLabelComplete() {
    let completeAriaText = "";
    if (this.attribute.userInput?.length === 0) {
      this.translation.translate("configurator.a11y.valueOfAttributeBlank", {
        attribute: this.attribute.label
      }).pipe(take(1)).subscribe((text) => completeAriaText = text);
    } else {
      this.translation.translate("configurator.a11y.valueOfAttributeFull", {
        value: this.attribute.userInput,
        attribute: this.attribute.label
      }).pipe(take(1)).subscribe((text) => completeAriaText = text);
    }
    completeAriaText += " ";
    completeAriaText += this.getHelpTextForInterval();
    return completeAriaText;
  }
  getIntervalText(interval) {
    let intervalText = "";
    let formattedMinValue = "";
    let formattedMaxValue = "";
    if (interval.minValue) {
      formattedMinValue = this.configAttributeNumericInputFieldService.formatIntervalValue(interval.minValue, this.attribute.numDecimalPlaces, this.locale);
    }
    if (interval.maxValue) {
      formattedMaxValue = this.configAttributeNumericInputFieldService.formatIntervalValue(interval.maxValue, this.attribute.numDecimalPlaces, this.locale);
    }
    if (interval.minValue && interval.maxValue) {
      if (interval.minValue === interval.maxValue) {
        this.translation.translate("configurator.a11y.numericIntervalSingleValue", {
          value: formattedMinValue
        }).pipe(take(1)).subscribe((text) => intervalText = text);
        return intervalText;
      }
      intervalText = this.getTextForRealInterval(formattedMinValue, formattedMaxValue, intervalText, interval);
    } else {
      intervalText = this.getTextForPartialInterval(interval, intervalText, formattedMinValue, formattedMaxValue);
    }
    return intervalText;
  }
  getTextForPartialInterval(interval, intervalText, formattedMinValue, formattedMaxValue) {
    if (interval.minValue) {
      if (interval.minValueIncluded) {
        intervalText = this.getInfiniteIntervalText("configurator.a11y.numericInfiniteIntervalMinValueIncluded", formattedMinValue);
      } else {
        intervalText = this.getInfiniteIntervalText("configurator.a11y.numericInfiniteIntervalMinValue", formattedMinValue);
      }
    } else {
      if (interval.maxValue) {
        if (interval.maxValueIncluded) {
          intervalText = this.getInfiniteIntervalText("configurator.a11y.numericInfiniteIntervalMaxValueIncluded", formattedMaxValue);
        } else {
          intervalText = this.getInfiniteIntervalText("configurator.a11y.numericInfiniteIntervalMaxValue", formattedMaxValue);
        }
      }
    }
    return intervalText;
  }
  getTextForRealInterval(formattedMinValue, formattedMaxValue, intervalText, interval) {
    let textToReturn = intervalText;
    this.translation.translate("configurator.a11y.numericIntervalStandard", {
      minValue: formattedMinValue,
      maxValue: formattedMaxValue
    }).pipe(take(1)).subscribe((text) => textToReturn = text);
    if (!interval.minValueIncluded || !interval.maxValueIncluded) {
      if (!interval.minValueIncluded && !interval.maxValueIncluded) {
        textToReturn += " ";
        textToReturn += this.getAdditionalIntervalText("configurator.a11y.numericIntervalStandardOpen");
      } else {
        if (!interval.minValueIncluded) {
          textToReturn += " ";
          textToReturn += this.getAdditionalIntervalText("configurator.a11y.numericIntervalStandardLowerEndpointNotIncluded");
        }
        if (!interval.maxValueIncluded) {
          textToReturn += " ";
          textToReturn += this.getAdditionalIntervalText("configurator.a11y.numericIntervalStandardUpperEndpointNotIncluded");
        }
      }
    }
    return textToReturn;
  }
  getAdditionalIntervalText(key) {
    let intervalText = "";
    this.translation.translate(key).pipe(take(1)).subscribe((text) => intervalText = text);
    return intervalText;
  }
  getInfiniteIntervalText(key, value) {
    let intervalText = "";
    this.translation.translate(key, {
      value
    }).pipe(take(1)).subscribe((text) => intervalText = text);
    return intervalText;
  }
  getDefaultSettings() {
    return {
      numDecimalPlaces: 2,
      numTotalLength: 6,
      negativeAllowed: false
    };
  }
  getInstalledLocale(locale) {
    try {
      getLocaleId(locale);
      return locale;
    } catch {
      this.reportMissingLocaleData(locale);
      return "en";
    }
  }
  reportMissingLocaleData(lang) {
    if (isDevMode()) {
      this.logger.warn(`ConfigAttributeNumericInputFieldComponent: No locale data registered for '${lang}' (see https://angular.io/api/common/registerLocaleData).`);
    }
  }
  static {
    this.ɵfac = function ConfiguratorAttributeNumericInputFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeNumericInputFieldComponent)(ɵɵdirectiveInject(ConfiguratorAttributeNumericInputFieldService), ɵɵdirectiveInject(ConfiguratorUISettingsConfig), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeNumericInputFieldComponent,
      selectors: [["cx-configurator-attribute-numeric-input-field"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 6,
      vars: 20,
      consts: [["class", "cx-intervalHelpText", 4, "ngIf"], [1, "form-group", 3, "id"], [1, "form-control", 3, "change", "formControl", "ngClass", "maxlength", "cxFocus"], ["class", "cx-validation-msg", "aria-live", "assertive", "aria-atomic", "true", "role", "alert", 3, "id", 4, "ngIf"], [1, "cx-intervalHelpText"], ["aria-live", "assertive", "aria-atomic", "true", "role", "alert", 1, "cx-validation-msg", 3, "id"], [3, "type"]],
      template: function ConfiguratorAttributeNumericInputFieldComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorAttributeNumericInputFieldComponent_label_0_Template, 2, 1, "label", 0);
          ɵɵelementStart(1, "div", 1)(2, "input", 2);
          ɵɵpipe(3, "async");
          ɵɵlistener("change", function ConfiguratorAttributeNumericInputFieldComponent_Template_input_change_2_listener() {
            return ctx.onChange();
          });
          ɵɵelementEnd()();
          ɵɵtemplate(4, ConfiguratorAttributeNumericInputFieldComponent_div_4_Template, 4, 8, "div", 3)(5, ConfiguratorAttributeNumericInputFieldComponent_div_5_Template, 4, 5, "div", 3);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.attribute.intervalInDomain);
          ɵɵadvance();
          ɵɵpropertyInterpolate("id", ctx.createAttributeIdForConfigurator(ctx.attribute));
          ɵɵadvance();
          ɵɵclassProp("ng-invalid", ctx.isRequired && ctx.isUserInputEmpty);
          ɵɵpropertyInterpolate("maxlength", ctx.attribute.maxlength);
          ɵɵproperty("formControl", ctx.attributeInputForm)("ngClass", ɵɵpureFunction1(16, _c4, ɵɵpipeBind1(3, 14, ctx.showRequiredErrorMessage$)))("cxFocus", ɵɵpureFunction1(18, _c3, ctx.createAttributeIdForConfigurator(ctx.attribute)));
          ɵɵattribute("aria-describedby", ctx.mustDisplayValidationMessage() ? ctx.createAttributeUiKey("label", ctx.attribute.name) + " " + ctx.createAttributeUiKey("attribute-msg", ctx.attribute.name) : ctx.createAttributeUiKey("label", ctx.attribute.name))("role", ctx.attribute.dataType)("required", ctx.attribute.required === true ? "required" : null)("aria-label", ctx.getAriaLabelComplete());
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.mustDisplayValidationMessage());
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.mustDisplayIntervalMessage());
        }
      },
      dependencies: [FocusDirective, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, FormControlDirective, NgClass, NgIf, IconComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeNumericInputFieldComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-numeric-input-field",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<label *ngIf="attribute.intervalInDomain" class="cx-intervalHelpText">{{
  this.getHelpTextForInterval()
}}</label>
<div id="{{ createAttributeIdForConfigurator(attribute) }}" class="form-group">
  <input
    [formControl]="attributeInputForm"
    class="form-control"
    [ngClass]="{
      'cx-required-error-msg ': (showRequiredErrorMessage$ | async),
    }"
    [class.ng-invalid]="isRequired && isUserInputEmpty"
    [attr.aria-describedby]="
      mustDisplayValidationMessage()
        ? createAttributeUiKey('label', attribute.name) +
          ' ' +
          createAttributeUiKey('attribute-msg', attribute.name)
        : createAttributeUiKey('label', attribute.name)
    "
    attr.role="{{ attribute.dataType }}"
    [attr.required]="attribute.required === true ? 'required' : null"
    (change)="onChange()"
    maxlength="{{ attribute.maxlength }}"
    [attr.aria-label]="getAriaLabelComplete()"
    [cxFocus]="{
      key: createAttributeIdForConfigurator(attribute),
    }"
  />
</div>
<div
  class="cx-validation-msg"
  id="{{ createAttributeUiKey('attribute-msg', attribute.name) }}"
  *ngIf="mustDisplayValidationMessage()"
  aria-live="assertive"
  aria-atomic="true"
  role="alert"
>
  <cx-icon [type]="iconType.ERROR"></cx-icon>
  {{
    'configurator.attribute.wrongNumericFormatMessage'
      | cxTranslate: { pattern: numericFormatPattern }
  }}
</div>
<div
  class="cx-validation-msg"
  id="{{ createAttributeUiKey('attribute-msg', attribute.name) }}"
  *ngIf="mustDisplayIntervalMessage()"
  aria-live="assertive"
  aria-atomic="true"
  role="alert"
>
  <cx-icon [type]="iconType.ERROR"></cx-icon>
  {{ 'configurator.attribute.wrongIntervalFormat' | cxTranslate }}
</div>
`
    }]
  }], () => [{
    type: ConfiguratorAttributeNumericInputFieldService
  }, {
    type: ConfiguratorUISettingsConfig
  }, {
    type: TranslationService
  }, {
    type: ConfiguratorAttributeCompositionContext
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }], null);
})();
var ConfiguratorAttributeDropDownComponent = class _ConfiguratorAttributeDropDownComponent extends ConfiguratorAttributeSingleSelectionBaseComponent {
  constructor(quantityService, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService) {
    super(quantityService, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService);
    this.quantityService = quantityService;
    this.translation = translation;
    this.attributeComponentContext = attributeComponentContext;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.attributeDropDownForm = new UntypedFormControl("");
    this.config = inject(Config);
    this.group = attributeComponentContext.group.id;
  }
  ngOnInit() {
    this.attributeDropDownForm.setValue(this.attribute.selectedSingleValue);
  }
  getSelectedValue() {
    return this.attribute.values?.find((value) => value?.selected);
  }
  /**
   * Retrieves a selected value description.
   *
   * @returns - if a selected value description is defined then it will be returned, otherwise an empty string
   */
  getSelectedValueDescription() {
    return this.getSelectedValue()?.description ?? "";
  }
  static {
    this.ɵfac = function ConfiguratorAttributeDropDownComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeDropDownComponent)(ɵɵdirectiveInject(ConfiguratorAttributeQuantityService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeDropDownComponent,
      selectors: [["cx-configurator-attribute-drop-down"]],
      standalone: false,
      features: [ɵɵProvidersFeature([ConfiguratorAttributePriceChangeService]), ɵɵInheritDefinitionFeature],
      decls: 4,
      vars: 5,
      consts: [[4, "ngIf"], ["class", "cx-configurator-attribute-additional-value", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["class", "cx-attribute-level-quantity-price", 4, "ngIf"], [1, "form-group"], [1, "cx-visually-hidden", 3, "for"], [1, "cx-value-label-pair"], [1, "form-control", 3, "change", "id", "ngClass", "formControl", "cxFocus"], [3, "selected", "label", "value", 4, "ngFor", "ngForOf"], [3, "text", "textSize", "productName", "tabIndex", 4, "ngIf"], ["class", "cx-value-price", 4, "ngIf"], [3, "selected", "label", "value"], [3, "text", "textSize", "productName", "tabIndex"], [1, "cx-value-price"], [3, "formula"], [1, "cx-attribute-level-quantity-price"], [3, "changeQuantity", "quantityOptions"], [3, "formula", 4, "ngIf"], [1, "cx-configurator-attribute-additional-value"]],
      template: function ConfiguratorAttributeDropDownComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorAttributeDropDownComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ConfiguratorAttributeDropDownComponent_cx_configurator_attribute_numeric_input_field_2_Template, 2, 3, "cx-configurator-attribute-numeric-input-field", 1)(3, ConfiguratorAttributeDropDownComponent_cx_configurator_attribute_input_field_3_Template, 2, 3, "cx-configurator-attribute-input-field", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 3, ctx.changedPrices$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.isAdditionalValueNumeric);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isAdditionalValueAlphaNumeric);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, ConfiguratorAttributeQuantityComponent, NgSelectOption, ɵNgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, FocusDirective, FormControlDirective, ConfiguratorPriceComponent, ConfiguratorAttributeNumericInputFieldComponent, ConfiguratorAttributeInputFieldComponent, ConfiguratorShowMoreComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeDropDownComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-drop-down",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfiguratorAttributePriceChangeService],
      standalone: false,
      template: `<ng-container *ngIf="changedPrices$ | async as changedPrices">
  <div
    class="form-group"
    *ngIf="attribute.values && attribute.values.length !== 0"
  >
    <label
      for="{{ createAttributeIdForConfigurator(attribute) }}"
      class="cx-visually-hidden"
    >
      {{
        'configurator.a11y.listbox'
          | cxTranslate
            : {
                count: attribute.values.length,
              }
      }}
    </label>
    <div class="cx-value-label-pair">
      <select
        id="{{ createAttributeIdForConfigurator(attribute) }}"
        class="form-control"
        [ngClass]="{
          'cx-required-error-msg ': (showRequiredErrorMessage$ | async),
        }"
        [formControl]="attributeDropDownForm"
        [cxFocus]="{ key: attribute.name }"
        (change)="onSelect(attributeDropDownForm.value)"
        [attr.aria-describedby]="createAttributeUiKey('label', attribute.name)"
      >
        <option
          *ngFor="let item of attribute.values"
          [selected]="item.selected"
          [label]="
            getLabel(
              expMode,
              item.valueDisplay,
              item.valueCode,
              enrichValueWithPrice(item, changedPrices)
            )
          "
          [attr.aria-label]="getAriaLabel(item, attribute)"
          [value]="item.valueCode"
        >
          {{
            getLabel(
              expMode,
              item.valueDisplay,
              item.valueCode,
              enrichValueWithPrice(item, changedPrices)
            )
          }}
        </option>
      </select>
      <cx-configurator-show-more
        *ngIf="getSelectedValueDescription()"
        [text]="getSelectedValueDescription()"
        [textSize]="getValueDescriptionLength()"
        [productName]="
          getLabel(
            expMode,
            getSelectedValue()?.valueDisplay,
            getSelectedValue()?.valueCode,
            getSelectedValue()
          )
        "
        [tabIndex]="0"
      ></cx-configurator-show-more>
    </div>
    <div *ngIf="!withQuantity && getSelectedValue()" class="cx-value-price">
      <cx-configurator-price
        [formula]="
          extractValuePriceFormulaParameters(
            enrichValueWithPrice(getSelectedValue(), changedPrices)
          )
        "
      ></cx-configurator-price>
    </div>
  </div>
  <div *ngIf="withQuantity" class="cx-attribute-level-quantity-price">
    <cx-configurator-attribute-quantity
      (changeQuantity)="onChangeQuantity($event, attributeDropDownForm)"
      [quantityOptions]="extractQuantityParameters(attributeDropDownForm)"
    ></cx-configurator-attribute-quantity>
    <cx-configurator-price
      *ngIf="getSelectedValuePrice()"
      [formula]="extractPriceFormulaParameters()"
    ></cx-configurator-price>
  </div>
</ng-container>

<cx-configurator-attribute-numeric-input-field
  *ngIf="isAdditionalValueNumeric"
  class="cx-configurator-attribute-additional-value"
  [attr.aria-label]="'configurator.a11y.additionalValue' | cxTranslate"
></cx-configurator-attribute-numeric-input-field>

<cx-configurator-attribute-input-field
  *ngIf="isAdditionalValueAlphaNumeric"
  class="cx-configurator-attribute-additional-value"
  [attr.aria-label]="'configurator.a11y.additionalValue' | cxTranslate"
>
</cx-configurator-attribute-input-field>
`
    }]
  }], () => [{
    type: ConfiguratorAttributeQuantityService
  }, {
    type: TranslationService
  }, {
    type: ConfiguratorAttributeCompositionContext
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }], null);
})();
var ConfiguratorAttributeInputFieldModule = class _ConfiguratorAttributeInputFieldModule {
  static {
    this.ɵfac = function ConfiguratorAttributeInputFieldModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeInputFieldModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeInputFieldModule,
      declarations: [ConfiguratorAttributeInputFieldComponent],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule],
      exports: [ConfiguratorAttributeInputFieldComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_string: ConfiguratorAttributeInputFieldComponent,
            AttributeType_sap_date: ConfiguratorAttributeInputFieldComponent
          }
        }
      })],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeInputFieldModule, [{
    type: NgModule,
    args: [{
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_string: ConfiguratorAttributeInputFieldComponent,
            AttributeType_sap_date: ConfiguratorAttributeInputFieldComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeInputFieldComponent],
      exports: [ConfiguratorAttributeInputFieldComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeNumericInputFieldModule = class _ConfiguratorAttributeNumericInputFieldModule {
  static {
    this.ɵfac = function ConfiguratorAttributeNumericInputFieldModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeNumericInputFieldModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeNumericInputFieldModule,
      declarations: [ConfiguratorAttributeNumericInputFieldComponent],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule],
      exports: [ConfiguratorAttributeNumericInputFieldComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_numeric: ConfiguratorAttributeNumericInputFieldComponent
          }
        }
      })],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeNumericInputFieldModule, [{
    type: NgModule,
    args: [{
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_numeric: ConfiguratorAttributeNumericInputFieldComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeNumericInputFieldComponent],
      exports: [ConfiguratorAttributeNumericInputFieldComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeDropDownModule = class _ConfiguratorAttributeDropDownModule {
  static {
    this.ɵfac = function ConfiguratorAttributeDropDownModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeDropDownModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeDropDownModule,
      declarations: [ConfiguratorAttributeDropDownComponent],
      imports: [CommonModule, ConfiguratorAttributeQuantityModule, FormsModule, I18nModule, KeyboardFocusModule, NgSelectModule, ReactiveFormsModule, ConfiguratorPriceModule, ConfiguratorAttributeNumericInputFieldModule, ConfiguratorAttributeInputFieldModule, ConfiguratorShowMoreModule, FeaturesConfigModule],
      exports: [ConfiguratorAttributeDropDownComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_dropdown: ConfiguratorAttributeDropDownComponent,
            AttributeType_dropdown_add: ConfiguratorAttributeDropDownComponent
          }
        }
      })],
      imports: [CommonModule, ConfiguratorAttributeQuantityModule, FormsModule, I18nModule, KeyboardFocusModule, NgSelectModule, ReactiveFormsModule, ConfiguratorPriceModule, ConfiguratorAttributeNumericInputFieldModule, ConfiguratorAttributeInputFieldModule, ConfiguratorShowMoreModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeDropDownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ConfiguratorAttributeQuantityModule, FormsModule, I18nModule, KeyboardFocusModule, NgSelectModule, ReactiveFormsModule, ConfiguratorPriceModule, ConfiguratorAttributeNumericInputFieldModule, ConfiguratorAttributeInputFieldModule, ConfiguratorShowMoreModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_dropdown: ConfiguratorAttributeDropDownComponent,
            AttributeType_dropdown_add: ConfiguratorAttributeDropDownComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeDropDownComponent],
      exports: [ConfiguratorAttributeDropDownComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeMultiSelectionBundleComponent = class _ConfiguratorAttributeMultiSelectionBundleComponent extends ConfiguratorAttributeMultiSelectionBaseComponent {
  constructor() {
    super(...arguments);
    this.preventAction$ = new BehaviorSubject(false);
    this.multipleSelectionValues = [];
  }
  ngOnInit() {
    this.initialize();
  }
  /**
   * Initializes selection values and peventAction observable
   */
  initialize() {
    if (this.attribute.values && this.attribute.values.length > 0) {
      this.multipleSelectionValues = this.attribute.values.map(({
        name,
        quantity,
        selected,
        valueCode
      }) => ({
        name,
        quantity,
        selected,
        valueCode
      }));
    }
    if (this.attribute.required && this.multipleSelectionValues.filter((value) => value.selected).length < 2) {
      this.preventAction$.next(true);
    }
  }
  /**
   * Updates the value dependent on the provided state
   *
   * @param  {any} valueCode - value code to be updated
   * @param  {any} state - selected state
   *
   * @return {ConfigFormUpdateEvent} - form update event
   */
  updateMultipleSelectionValues(valueCode, state) {
    const index = this.multipleSelectionValues.findIndex((value) => value.valueCode === valueCode);
    this.multipleSelectionValues[index] = __spreadProps(__spreadValues({}, this.multipleSelectionValues[index]), {
      selected: state
    });
    const event = {
      changedAttribute: __spreadProps(__spreadValues({}, this.attribute), {
        values: this.multipleSelectionValues
      }),
      ownerKey: this.ownerKey,
      updateType: Configurator.UpdateType.ATTRIBUTE
    };
    return event;
  }
  /**
   * Updates the quantity of the given value
   *
   * @param  eventValue - event value
   *
   * @return {ConfigFormUpdateEvent} - form update event
   */
  updateMultipleSelectionValuesQuantity(eventValue) {
    const value = this.multipleSelectionValues.find((selectionValue) => selectionValue.valueCode === eventValue.valueCode);
    if (!value) {
      return;
    }
    value.quantity = eventValue.quantity;
    const event = {
      changedAttribute: __spreadProps(__spreadValues({}, this.attribute), {
        values: [value]
      }),
      ownerKey: this.ownerKey,
      updateType: Configurator.UpdateType.VALUE_QUANTITY
    };
    return event;
  }
  onSelect(eventValue) {
    this.loading$.next(true);
    const changes = this.updateMultipleSelectionValues(eventValue, true);
    this.configuratorCommonsService.updateConfiguration(changes.ownerKey, changes.changedAttribute, changes.updateType);
  }
  onDeselect(eventValue) {
    this.loading$.next(true);
    const changes = this.updateMultipleSelectionValues(eventValue, false);
    this.configuratorCommonsService.updateConfiguration(changes.ownerKey, changes.changedAttribute, changes.updateType);
  }
  onDeselectAll() {
    this.loading$.next(true);
    this.configuratorCommonsService.updateConfiguration(this.ownerKey, __spreadProps(__spreadValues({}, this.attribute), {
      values: []
    }), Configurator.UpdateType.ATTRIBUTE);
  }
  onChangeValueQuantity(eventValue) {
    this.loading$.next(true);
    const changes = this.updateMultipleSelectionValuesQuantity(eventValue);
    if (changes) {
      this.configuratorCommonsService.updateConfiguration(changes.ownerKey, changes.changedAttribute, changes.updateType);
    }
  }
  onChangeAttributeQuantity(eventObject) {
    this.loading$.next(true);
    if (!eventObject) {
      this.onDeselectAll();
    } else {
      this.onHandleAttributeQuantity(eventObject);
    }
  }
  /**
   * Extract corresponding price formula parameters
   *
   * @return {ConfiguratorPriceComponentOptions} - New price formula
   */
  extractPriceFormulaParameters() {
    return {
      quantity: 0,
      price: {
        value: 0,
        currencyIso: ""
      },
      priceTotal: this.attribute.attributePriceTotal,
      isLightedUp: true
    };
  }
  /**
   * Extract corresponding product card parameters
   * @param {boolean} disableAllButtons - Prevent all actions, e.g. while loading
   * @param {boolean} hideRemoveButton - hide remove action, e.g. if only value required attribute
   * @param {Configurator.Value} value - Value
   * @param {number} index - index of current value in list of values of attribute
   * @return {ConfiguratorAttributeProductCardComponentOptions} - New product card options
   */
  extractProductCardParameters(disableAllButtons, hideRemoveButton, value, index) {
    return {
      disableAllButtons: disableAllButtons ?? false,
      hideRemoveButton: hideRemoveButton ?? false,
      productBoundValue: value,
      multiSelect: true,
      withQuantity: this.withQuantity,
      loading$: this.loading$,
      attributeId: this.getAttributeCode(this.attribute),
      attributeLabel: this.attribute.label,
      attributeName: this.attribute.name,
      itemCount: this.attribute.values?.length ? this.attribute.values.length : 0,
      itemIndex: index
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵConfiguratorAttributeMultiSelectionBundleComponent_BaseFactory;
      return function ConfiguratorAttributeMultiSelectionBundleComponent_Factory(__ngFactoryType__) {
        return (ɵConfiguratorAttributeMultiSelectionBundleComponent_BaseFactory || (ɵConfiguratorAttributeMultiSelectionBundleComponent_BaseFactory = ɵɵgetInheritedFactory(_ConfiguratorAttributeMultiSelectionBundleComponent)))(__ngFactoryType__ || _ConfiguratorAttributeMultiSelectionBundleComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeMultiSelectionBundleComponent,
      selectors: [["cx-configurator-attribute-multi-selection-bundle"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 1,
      consts: [[3, "id", 4, "ngIf"], [3, "id"], ["class", "cx-attribute-level-quantity-price", 4, "ngIf"], [3, "id", "productCardOptions", "handleDeselect", "handleQuantity", "handleSelect", 4, "ngFor", "ngForOf"], [1, "cx-attribute-level-quantity-price"], [3, "changeQuantity", "quantityOptions"], [3, "formula"], [3, "handleDeselect", "handleQuantity", "handleSelect", "id", "productCardOptions"]],
      template: function ConfiguratorAttributeMultiSelectionBundleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorAttributeMultiSelectionBundleComponent_div_0_Template, 3, 3, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.attribute == null ? null : ctx.attribute.values == null ? null : ctx.attribute.values.length);
        }
      },
      dependencies: [NgForOf, NgIf, ConfiguratorAttributeProductCardComponent, ConfiguratorAttributeQuantityComponent, ConfiguratorPriceComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeMultiSelectionBundleComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-multi-selection-bundle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<div\n  id="{{ createAttributeIdForConfigurator(attribute) }}"\n  *ngIf="attribute?.values?.length"\n>\n  <div\n    *ngIf="withQuantityOnAttributeLevel"\n    class="cx-attribute-level-quantity-price"\n  >\n    <cx-configurator-attribute-quantity\n      (changeQuantity)="onChangeAttributeQuantity($event)"\n      [quantityOptions]="extractQuantityParameters(attribute.quantity)"\n    ></cx-configurator-attribute-quantity>\n\n    <cx-configurator-price\n      [formula]="extractPriceFormulaParameters()"\n    ></cx-configurator-price>\n  </div>\n\n  <cx-configurator-attribute-product-card\n    id="{{ createAttributeValueIdForConfigurator(attribute, value.valueCode) }}"\n    (handleDeselect)="onDeselect($event)"\n    (handleQuantity)="onChangeValueQuantity($event)"\n    (handleSelect)="onSelect($event)"\n    *ngFor="let value of attribute?.values; let i = index"\n    [productCardOptions]="\n      extractProductCardParameters(\n        loading$ | async,\n        preventAction$ | async,\n        value,\n        i\n      )\n    "\n  >\n  </cx-configurator-attribute-product-card>\n</div>\n'
    }]
  }], null, null);
})();
var ConfiguratorAttributeMultiSelectionBundleModule = class _ConfiguratorAttributeMultiSelectionBundleModule {
  static {
    this.ɵfac = function ConfiguratorAttributeMultiSelectionBundleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeMultiSelectionBundleModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeMultiSelectionBundleModule,
      declarations: [ConfiguratorAttributeMultiSelectionBundleComponent],
      imports: [CommonModule, ConfiguratorAttributeProductCardModule, FormsModule, I18nModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, ConfiguratorAttributeQuantityModule, ConfiguratorPriceModule],
      exports: [ConfiguratorAttributeMultiSelectionBundleComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_checkBoxListProduct: ConfiguratorAttributeMultiSelectionBundleComponent
          }
        }
      })],
      imports: [CommonModule, ConfiguratorAttributeProductCardModule, FormsModule, I18nModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, ConfiguratorAttributeQuantityModule, ConfiguratorPriceModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeMultiSelectionBundleModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ConfiguratorAttributeProductCardModule, FormsModule, I18nModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, ConfiguratorAttributeQuantityModule, ConfiguratorPriceModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_checkBoxListProduct: ConfiguratorAttributeMultiSelectionBundleComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeMultiSelectionBundleComponent],
      exports: [ConfiguratorAttributeMultiSelectionBundleComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeMultiSelectionImageComponent = class _ConfiguratorAttributeMultiSelectionImageComponent extends ConfiguratorAttributeBaseComponent {
  constructor(configUtilsService, attributeComponentContext, configuratorCommonsService) {
    super();
    this.configUtilsService = configUtilsService;
    this.attributeComponentContext = attributeComponentContext;
    this.configuratorCommonsService = configuratorCommonsService;
    this.iconTypes = ICON_TYPE;
    this.config = inject(Config);
    this.attributeCheckBoxForms = new Array();
    this.attribute = attributeComponentContext.attribute;
    this.ownerKey = attributeComponentContext.owner.key;
    this.expMode = attributeComponentContext.expMode;
    this.initPriceChangedEvent(attributeComponentContext.isPricingAsync, attributeComponentContext.attribute.key);
    useFeatureStyles("a11yDifferentiateFocusedAndSelected");
  }
  ngOnInit() {
    const values = this.attribute.values;
    if (values) {
      for (const value of values) {
        let attributeCheckBoxForm;
        if (value.selected) {
          attributeCheckBoxForm = new UntypedFormControl(true);
        } else {
          attributeCheckBoxForm = new UntypedFormControl(false);
        }
        this.attributeCheckBoxForms.push(attributeCheckBoxForm);
      }
    }
  }
  /**
   * Fired when a value has been selected
   * @param index Index of selected value
   */
  onSelect(index) {
    this.attributeCheckBoxForms[index].setValue(!this.attributeCheckBoxForms[index].value);
    const selectedValues = this.configUtilsService.assembleValuesForMultiSelectAttributes(this.attributeCheckBoxForms, this.attribute);
    if (this.listenForPriceChanges) {
      this.configUtilsService.setLastSelected(this.attribute.name, selectedValues[index].valueCode);
    }
    this.configuratorCommonsService.updateConfiguration(this.ownerKey, __spreadProps(__spreadValues({}, this.attribute), {
      values: selectedValues
    }), Configurator.UpdateType.ATTRIBUTE);
  }
  static {
    this.ɵfac = function ConfiguratorAttributeMultiSelectionImageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeMultiSelectionImageComponent)(ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext), ɵɵdirectiveInject(ConfiguratorCommonsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeMultiSelectionImageComponent,
      selectors: [["cx-configurator-attribute-multi-selection-image"]],
      standalone: false,
      features: [ɵɵProvidersFeature([ConfiguratorAttributePriceChangeService]), ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 4,
      consts: [[1, "cx-row", 3, "id"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "cx-configurator-select", 3, "id", 4, "ngIf"], [1, "cx-configurator-select", 3, "id"], ["type", "checkbox", 1, "form-input", 3, "click", "id", "value", "formControl", "name", "cxFocus"], [1, "cx-label-container"], [1, "form-check-label", 3, "id", "for"], [3, "ngClass", "src", "alt", "title", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "cxPopover", "cxPopoverOptions", "title", 4, "ngIf"], [3, "formula"], [3, "ngClass", "src", "alt", "title"], [3, "ngClass"], [3, "cxPopover", "cxPopoverOptions", "title"], [3, "type"]],
      template: function ConfiguratorAttributeMultiSelectionImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, ConfiguratorAttributeMultiSelectionImageComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵpropertyInterpolate("id", ctx.createAttributeIdForConfigurator(ctx.attribute));
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx.changedPrices$));
        }
      },
      dependencies: [FocusDirective, CheckboxControlValueAccessor, NgControlStatus, FormControlDirective, NgClass, NgForOf, NgIf, IconComponent, ConfiguratorPriceComponent, PopoverDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeMultiSelectionImageComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-multi-selection-image",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfiguratorAttributePriceChangeService],
      standalone: false,
      template: `<div id="{{ createAttributeIdForConfigurator(attribute) }}" class="cx-row">
  <ng-container *ngIf="changedPrices$ | async as changedPrices">
    <ng-container *ngFor="let value of attribute.values; let i = index">
      <div
        *ngIf="isValueDisplayed(attribute, value)"
        id="{{
          createAttributeValueIdForConfigurator(attribute, value.valueCode)
        }}"
        class="cx-configurator-select"
      >
        <input
          id="{{
            createAttributeValueIdForConfigurator(attribute, value.valueCode) +
              '-input'
          }}"
          type="checkbox"
          class="form-input"
          [value]="value.valueCode"
          [formControl]="attributeCheckBoxForms[i]"
          name="{{ createAttributeIdForConfigurator(attribute) }}"
          (click)="!isReadOnly(attribute) && onSelect(i)"
          [attr.aria-label]="
            getAriaLabelGeneric(
              attribute,
              enrichValueWithPrice(value, changedPrices)
            )
          "
          [attr.aria-live]="
            isLastSelected(attribute.name, value.valueCode) ? 'polite' : null
          "
          [attr.aria-describedby]="
            createAttributeUiKey('label', attribute.name)
          "
          [attr.checked]="attributeCheckBoxForms[i].value ? 'checked' : null"
          [cxFocus]="{ key: attribute.name + '-' + value.name }"
        />
        <div class="cx-label-container">
          <label
            id="{{
              createValueUiKey('label', attribute.name, value.valueCode)
            }}"
            for="{{
              createAttributeValueIdForConfigurator(
                attribute,
                value.valueCode
              ) + '-input'
            }}"
            class="form-check-label"
            [style.cursor]="!isReadOnly(attribute) ? 'pointer' : 'default'"
          >
            <img
              *ngIf="getImage(value) as image"
              [ngClass]="getImgStyleClasses(attribute, value, 'cx-img')"
              src="{{ image?.url }}"
              alt="{{ image?.altText }}"
              title="{{ image?.altText }}"
            />
            <div
              *ngIf="!getImage(value)"
              [ngClass]="getImgStyleClasses(attribute, value, 'cx-img-dummy')"
            ></div>
            {{ getImageLabel(expMode, value.valueDisplay, value.valueCode) }}
            <button
              *ngIf="value.description"
              [cxPopover]="value.description"
              [cxPopoverOptions]="{
                placement: 'auto',
                class: 'cx-value-description',
                appendToBody: true,
                displayCloseButton: true,
              }"
              title="{{
                'configurator.a11y.description'
                  | cxTranslate
                    : {
                        value: getImageLabel(
                          expMode,
                          value.valueDisplay,
                          value.valueCode
                        ),
                      }
              }}"
              [attr.aria-label]="
                'configurator.a11y.description'
                  | cxTranslate
                    : {
                        value: getImageLabel(
                          expMode,
                          value.valueDisplay,
                          value.valueCode
                        ),
                      }
              "
            >
              <cx-icon [type]="iconTypes.INFO"></cx-icon>
            </button>
            <cx-configurator-price
              [formula]="
                extractValuePriceFormulaParameters(
                  enrichValueWithPrice(value, changedPrices)
                )
              "
            ></cx-configurator-price>
          </label>
        </div>
      </div>
    </ng-container>
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: ConfiguratorStorefrontUtilsService
  }, {
    type: ConfiguratorAttributeCompositionContext
  }, {
    type: ConfiguratorCommonsService
  }], null);
})();
var ConfiguratorAttributeMultiSelectionImageModule = class _ConfiguratorAttributeMultiSelectionImageModule {
  static {
    this.ɵfac = function ConfiguratorAttributeMultiSelectionImageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeMultiSelectionImageModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeMultiSelectionImageModule,
      declarations: [ConfiguratorAttributeMultiSelectionImageComponent],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule, ConfiguratorPriceModule, PopoverModule],
      exports: [ConfiguratorAttributeMultiSelectionImageComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_multi_selection_image: ConfiguratorAttributeMultiSelectionImageComponent,
            AttributeType_read_only_multi_selection_image: ConfiguratorAttributeMultiSelectionImageComponent
          }
        }
      })],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule, ConfiguratorPriceModule, PopoverModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeMultiSelectionImageModule, [{
    type: NgModule,
    args: [{
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule, ConfiguratorPriceModule, PopoverModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_multi_selection_image: ConfiguratorAttributeMultiSelectionImageComponent,
            AttributeType_read_only_multi_selection_image: ConfiguratorAttributeMultiSelectionImageComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeMultiSelectionImageComponent],
      exports: [ConfiguratorAttributeMultiSelectionImageComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeNotSupportedComponent = class _ConfiguratorAttributeNotSupportedComponent {
  static {
    this.ɵfac = function ConfiguratorAttributeNotSupportedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeNotSupportedComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeNotSupportedComponent,
      selectors: [["cx-configurator-attribute-not-supported"]],
      standalone: false,
      decls: 3,
      vars: 3,
      template: function ConfiguratorAttributeNotSupportedComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "em");
          ɵɵtext(1);
          ɵɵpipe(2, "cxTranslate");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵtextInterpolate(ɵɵpipeBind1(2, 1, "configurator.attribute.notSupported"));
        }
      },
      dependencies: [TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeNotSupportedComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-not-supported",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: "<em>{{ 'configurator.attribute.notSupported' | cxTranslate }}</em>\n"
    }]
  }], null, null);
})();
var ConfiguratorAttributeNotSupportedModule = class _ConfiguratorAttributeNotSupportedModule {
  static {
    this.ɵfac = function ConfiguratorAttributeNotSupportedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeNotSupportedModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeNotSupportedModule,
      declarations: [ConfiguratorAttributeNotSupportedComponent],
      imports: [CommonModule, I18nModule],
      exports: [ConfiguratorAttributeNotSupportedComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_not_implemented: ConfiguratorAttributeNotSupportedComponent
          }
        }
      })],
      imports: [CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeNotSupportedModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_not_implemented: ConfiguratorAttributeNotSupportedComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeNotSupportedComponent],
      exports: [ConfiguratorAttributeNotSupportedComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeRadioButtonComponent = class _ConfiguratorAttributeRadioButtonComponent extends ConfiguratorAttributeSingleSelectionBaseComponent {
  constructor(quantityService, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService) {
    super(quantityService, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService);
    this.quantityService = quantityService;
    this.translation = translation;
    this.attributeComponentContext = attributeComponentContext;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.attributeRadioButtonForm = new UntypedFormControl("");
  }
  ngOnInit() {
    this.attributeRadioButtonForm.setValue(this.attribute.selectedSingleValue);
  }
  static {
    this.ɵfac = function ConfiguratorAttributeRadioButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeRadioButtonComponent)(ɵɵdirectiveInject(ConfiguratorAttributeQuantityService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeRadioButtonComponent,
      selectors: [["cx-configurator-attribute-radio-button"]],
      standalone: false,
      features: [ɵɵProvidersFeature([ConfiguratorAttributePriceChangeService]), ɵɵInheritDefinitionFeature],
      decls: 9,
      vars: 8,
      consts: [[2, "display", "none"], [3, "id"], ["class", "cx-attribute-level-quantity-price", 4, "ngIf"], [4, "ngIf"], ["class", "cx-configurator-attribute-additional-value", 4, "ngIf"], [1, "cx-attribute-level-quantity-price"], [3, "changeQuantity", "quantityOptions"], [3, "formula", 4, "ngIf"], [3, "formula"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "form-check"], [1, "cx-value-label-pair"], ["type", "radio", "formcontrolname", "attributeRadioButtonForm", 1, "form-check-input", 3, "change", "id", "formControl", "value", "name", "cxFocus"], ["aria-hidden", "true", 1, "form-check-label", "form-radio-label", 3, "id", "for"], [3, "text", "textSize", "productName", "tabIndex", 4, "ngIf"], [1, "cx-value-price"], [3, "text", "textSize", "productName", "tabIndex"], [1, "cx-configurator-attribute-additional-value"]],
      template: function ConfiguratorAttributeRadioButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "fieldset")(1, "legend", 0);
          ɵɵtext(2);
          ɵɵelementEnd();
          ɵɵelementStart(3, "div", 1);
          ɵɵtemplate(4, ConfiguratorAttributeRadioButtonComponent_div_4_Template, 3, 2, "div", 2)(5, ConfiguratorAttributeRadioButtonComponent_ng_container_5_Template, 2, 1, "ng-container", 3);
          ɵɵpipe(6, "async");
          ɵɵtemplate(7, ConfiguratorAttributeRadioButtonComponent_cx_configurator_attribute_numeric_input_field_7_Template, 1, 0, "cx-configurator-attribute-numeric-input-field", 4)(8, ConfiguratorAttributeRadioButtonComponent_cx_configurator_attribute_input_field_8_Template, 1, 0, "cx-configurator-attribute-input-field", 4);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate(ctx.attribute.label);
          ɵɵadvance();
          ɵɵpropertyInterpolate("id", ctx.createAttributeIdForConfigurator(ctx.attribute));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.withQuantity);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(6, 6, ctx.changedPrices$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.isAdditionalValueNumeric);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isAdditionalValueAlphaNumeric);
        }
      },
      dependencies: [NgForOf, NgIf, ConfiguratorAttributeQuantityComponent, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, FocusDirective, FormControlDirective, ConfiguratorPriceComponent, ConfiguratorAttributeNumericInputFieldComponent, ConfiguratorAttributeInputFieldComponent, ConfiguratorShowMoreComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeRadioButtonComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-radio-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfiguratorAttributePriceChangeService],
      standalone: false,
      template: `<fieldset>
  <legend style="display: none">{{ attribute.label }}</legend>
  <div id="{{ createAttributeIdForConfigurator(attribute) }}">
    <div *ngIf="withQuantity" class="cx-attribute-level-quantity-price">
      <cx-configurator-attribute-quantity
        (changeQuantity)="onChangeQuantity($event)"
        [quantityOptions]="extractQuantityParameters()"
      ></cx-configurator-attribute-quantity>
      <cx-configurator-price
        *ngIf="getSelectedValuePrice()"
        [formula]="extractPriceFormulaParameters()"
      ></cx-configurator-price>
    </div>
    <ng-container *ngIf="changedPrices$ | async as changedPrices">
      <div class="form-check" *ngFor="let value of attribute.values">
        <div class="cx-value-label-pair">
          <input
            id="{{
              createAttributeValueIdForConfigurator(attribute, value.valueCode)
            }}"
            class="form-check-input"
            type="radio"
            formcontrolname="attributeRadioButtonForm"
            [formControl]="attributeRadioButtonForm"
            [attr.required]="attribute.required === true ? 'required' : null"
            [value]="value.valueCode"
            name="{{ createAttributeIdForConfigurator(attribute) }}"
            attr.name="{{ createAttributeIdForConfigurator(attribute) }}"
            [cxFocus]="{ key: attribute.name + '-' + value.name }"
            [attr.aria-label]="
              getAriaLabel(
                enrichValueWithPrice(value, changedPrices),
                attribute
              )
            "
            [attr.aria-live]="
              listenForPriceChanges &&
              attributeRadioButtonForm.value === value.valueCode
                ? 'polite'
                : null
            "
            [attr.checked]="
              attributeRadioButtonForm.value === value.valueCode
                ? 'checked'
                : null
            "
            [attr.aria-describedby]="
              createAttributeUiKey('label', attribute.name)
            "
            (change)="onSelect(value.valueCode)"
          />
          <label
            id="{{
              createValueUiKey('label', attribute.name, value.valueCode)
            }}"
            for="{{
              createAttributeValueIdForConfigurator(attribute, value.valueCode)
            }}"
            aria-hidden="true"
            class="form-check-label form-radio-label"
            >{{ getLabel(expMode, value.valueDisplay, value.valueCode) }}</label
          >
          <cx-configurator-show-more
            *ngIf="value.description"
            [text]="value.description"
            [textSize]="getValueDescriptionLength()"
            [productName]="
              getLabel(expMode, value.valueDisplay, value.valueCode)
            "
            [tabIndex]="0"
          ></cx-configurator-show-more>
        </div>

        <div class="cx-value-price">
          <cx-configurator-price
            [formula]="
              extractValuePriceFormulaParameters(
                enrichValueWithPrice(value, changedPrices)
              )
            "
          ></cx-configurator-price>
        </div>
      </div>
    </ng-container>

    <cx-configurator-attribute-numeric-input-field
      *ngIf="isAdditionalValueNumeric"
      class="cx-configurator-attribute-additional-value"
    ></cx-configurator-attribute-numeric-input-field>

    <cx-configurator-attribute-input-field
      *ngIf="isAdditionalValueAlphaNumeric"
      class="cx-configurator-attribute-additional-value"
    >
    </cx-configurator-attribute-input-field>
  </div>
</fieldset>
`
    }]
  }], () => [{
    type: ConfiguratorAttributeQuantityService
  }, {
    type: TranslationService
  }, {
    type: ConfiguratorAttributeCompositionContext
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }], null);
})();
var ConfiguratorAttributeRadioButtonModule = class _ConfiguratorAttributeRadioButtonModule {
  static {
    this.ɵfac = function ConfiguratorAttributeRadioButtonModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeRadioButtonModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeRadioButtonModule,
      declarations: [ConfiguratorAttributeRadioButtonComponent],
      imports: [CommonModule, ConfiguratorAttributeQuantityModule, FormsModule, I18nModule, KeyboardFocusModule, ReactiveFormsModule, ConfiguratorPriceModule, ConfiguratorAttributeNumericInputFieldModule, ConfiguratorAttributeInputFieldModule, ConfiguratorShowMoreModule],
      exports: [ConfiguratorAttributeRadioButtonComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_radioGroup: ConfiguratorAttributeRadioButtonComponent,
            AttributeType_radioGroup_add: ConfiguratorAttributeRadioButtonComponent
          }
        }
      })],
      imports: [CommonModule, ConfiguratorAttributeQuantityModule, FormsModule, I18nModule, KeyboardFocusModule, ReactiveFormsModule, ConfiguratorPriceModule, ConfiguratorAttributeNumericInputFieldModule, ConfiguratorAttributeInputFieldModule, ConfiguratorShowMoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeRadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ConfiguratorAttributeQuantityModule, FormsModule, I18nModule, KeyboardFocusModule, ReactiveFormsModule, ConfiguratorPriceModule, ConfiguratorAttributeNumericInputFieldModule, ConfiguratorAttributeInputFieldModule, ConfiguratorShowMoreModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_radioGroup: ConfiguratorAttributeRadioButtonComponent,
            AttributeType_radioGroup_add: ConfiguratorAttributeRadioButtonComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeRadioButtonComponent],
      exports: [ConfiguratorAttributeRadioButtonComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeReadOnlyComponent = class _ConfiguratorAttributeReadOnlyComponent extends ConfiguratorAttributeBaseComponent {
  constructor(translationService, attributeComponentContext) {
    super();
    this.translationService = translationService;
    this.attributeComponentContext = attributeComponentContext;
    this.attribute = attributeComponentContext.attribute;
    this.group = attributeComponentContext.group.id;
    this.expMode = attributeComponentContext.expMode;
    this.initPriceChangedEvent(attributeComponentContext.isPricingAsync, attributeComponentContext.attribute.key);
  }
  getCurrentValueName(attribute, value) {
    let name = "";
    if (attribute.selectedSingleValue && !value) {
      name = attribute.selectedSingleValue;
    } else if (attribute.userInput && !value) {
      name = attribute.userInput;
    } else if (value && value.valueDisplay) {
      name = value?.valueDisplay;
    }
    return name;
  }
  getAriaLabel(attribute, value) {
    let ariaLabel = "";
    if (value) {
      const valueName = this.getCurrentValueName(attribute, value);
      if (value.valuePrice && value.valuePrice?.value !== 0) {
        if (value.valuePriceTotal && value.valuePriceTotal?.value !== 0) {
          ariaLabel = this.translate("configurator.a11y.readOnlyValueOfAttributeFullWithPrice", valueName, attribute, value.valuePriceTotal?.formattedValue);
        } else {
          ariaLabel = this.translate("configurator.a11y.readOnlyValueOfAttributeFullWithPrice", valueName, attribute, value.valuePrice?.formattedValue);
        }
      } else {
        ariaLabel = this.translate("configurator.a11y.readOnlyValueOfAttributeFull", valueName, attribute);
      }
    } else {
      const valueName = this.getCurrentValueName(attribute);
      ariaLabel = this.translate("configurator.a11y.readOnlyValueOfAttributeFull", valueName, attribute);
    }
    return ariaLabel;
  }
  translate(resourceKey, valueName, attribute, formattedPrice) {
    let ariaLabel = "";
    const options = formattedPrice ? {
      value: valueName,
      attribute: attribute.label,
      price: formattedPrice
    } : {
      value: valueName,
      attribute: attribute.label
    };
    this.translationService.translate(resourceKey, options).pipe(take(1)).subscribe((text) => ariaLabel = text);
    return ariaLabel;
  }
  static {
    this.ɵfac = function ConfiguratorAttributeReadOnlyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeReadOnlyComponent)(ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeReadOnlyComponent,
      selectors: [["cx-configurator-attribute-read-only"]],
      standalone: false,
      features: [ɵɵProvidersFeature([ConfiguratorAttributePriceChangeService]), ɵɵInheritDefinitionFeature],
      decls: 5,
      vars: 3,
      consts: [["noStaticDomain", ""], [3, "id"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "form-check", 4, "ngIf"], [1, "form-check"], ["role", "note", "tabindex", "0", 1, "cx-visually-hidden", 3, "id"], [1, "cx-value-label-pair"], ["aria-hidden", "true", 1, "cx-read-only-attribute-label", 3, "id"], [3, "text", "textSize", "productName", "tabIndex", 4, "ngIf"], [1, "cx-value-price"], [3, "formula"], [3, "text", "textSize", "productName", "tabIndex"], [4, "ngIf"], ["aria-hidden", "true", 1, "cx-read-only-attribute-label"], ["aria-hidden", "true"]],
      template: function ConfiguratorAttributeReadOnlyComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "fieldset")(1, "div", 1);
          ɵɵtemplate(2, ConfiguratorAttributeReadOnlyComponent_ng_container_2_Template, 2, 1, "ng-container", 2)(3, ConfiguratorAttributeReadOnlyComponent_ng_template_3_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          const noStaticDomain_r4 = ɵɵreference(4);
          ɵɵadvance();
          ɵɵpropertyInterpolate("id", ctx.createAttributeIdForConfigurator(ctx.attribute));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.attribute.values && ctx.attribute.values.length > 0)("ngIfElse", noStaticDomain_r4);
        }
      },
      dependencies: [ConfiguratorPriceComponent, ConfiguratorShowMoreComponent, NgForOf, NgIf, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeReadOnlyComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-read-only",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfiguratorAttributePriceChangeService],
      standalone: false,
      template: `<fieldset>
  <div id="{{ createAttributeIdForConfigurator(attribute) }}">
    <ng-container
      *ngIf="
        attribute.values && attribute.values.length > 0;
        else noStaticDomain
      "
    >
      <ng-container *ngFor="let value of attribute.values">
        <div
          *ngIf="value.selected && (changedPrices$ | async) as changedPrices"
          class="form-check"
        >
          <span
            id="{{
              createValueUiKey('aria-label', attribute.name, value.valueCode)
            }}"
            role="note"
            tabindex="0"
            class="cx-visually-hidden"
          >
            {{
              getAriaLabel(
                attribute,
                enrichValueWithPrice(value, changedPrices)
              )
            }}
          </span>
          <div class="cx-value-label-pair">
            <label
              id="{{
                createValueUiKey('label', attribute.name, value.valueCode)
              }}"
              aria-hidden="true"
              class="cx-read-only-attribute-label"
              >{{
                getLabel(expMode, value.valueDisplay, value.valueCode)
              }}</label
            >
            <cx-configurator-show-more
              *ngIf="value.description"
              [text]="value.description"
              [textSize]="getValueDescriptionLength()"
              [productName]="
                getLabel(expMode, value.valueDisplay, value.valueCode)
              "
              [tabIndex]="0"
            ></cx-configurator-show-more>
          </div>
          <div class="cx-value-price">
            <cx-configurator-price
              [formula]="
                extractValuePriceFormulaParameters(
                  enrichValueWithPrice(value, changedPrices)
                )
              "
            ></cx-configurator-price>
          </div>
        </div>
      </ng-container>
    </ng-container>
    <ng-template #noStaticDomain>
      <ng-container *ngIf="attribute.selectedSingleValue">
        <span
          id="{{
            createValueUiKey(
              'aria-label',
              attribute.name,
              attribute.selectedSingleValue
            )
          }}"
          role="note"
          tabindex="0"
          class="cx-visually-hidden"
        >
          {{ getAriaLabel(attribute) }}
        </span>
        <div class="cx-read-only-attribute-label" aria-hidden="true">
          <span aria-hidden="true">{{ attribute.selectedSingleValue }}</span>
        </div>
      </ng-container>
      <ng-container *ngIf="attribute.userInput">
        <span
          id="{{
            createValueUiKey('aria-label', attribute.name, attribute.userInput)
          }}"
          role="note"
          tabindex="0"
          class="cx-visually-hidden"
        >
          {{ getAriaLabel(attribute) }}
        </span>
        <div class="cx-read-only-attribute-label" aria-hidden="true">
          <span aria-hidden="true">{{ attribute.userInput }}</span>
        </div>
      </ng-container>
    </ng-template>
  </div>
</fieldset>
`
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: ConfiguratorAttributeCompositionContext
  }], null);
})();
var ConfiguratorAttributeReadOnlyModule = class _ConfiguratorAttributeReadOnlyModule {
  static {
    this.ɵfac = function ConfiguratorAttributeReadOnlyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeReadOnlyModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeReadOnlyModule,
      declarations: [ConfiguratorAttributeReadOnlyComponent],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, ConfiguratorPriceModule, ConfiguratorShowMoreModule, CommonModule, I18nModule],
      exports: [ConfiguratorAttributeReadOnlyComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_readonly: ConfiguratorAttributeReadOnlyComponent
          }
        }
      })],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, ConfiguratorPriceModule, ConfiguratorShowMoreModule, CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeReadOnlyModule, [{
    type: NgModule,
    args: [{
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, ConfiguratorPriceModule, ConfiguratorShowMoreModule, CommonModule, I18nModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_readonly: ConfiguratorAttributeReadOnlyComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeReadOnlyComponent],
      exports: [ConfiguratorAttributeReadOnlyComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeSingleSelectionBundleDropdownComponent = class _ConfiguratorAttributeSingleSelectionBundleDropdownComponent extends ConfiguratorAttributeSingleSelectionBaseComponent {
  constructor(quantityService, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService) {
    super(quantityService, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService);
    this.quantityService = quantityService;
    this.translation = translation;
    this.attributeComponentContext = attributeComponentContext;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.RETRACT_VALUE_CODE = Configurator.RetractValueCode;
    this.attributeDropDownForm = new UntypedFormControl("");
    this.group = attributeComponentContext.group.id;
  }
  ngOnInit() {
    this.attributeDropDownForm.setValue(this.attribute.selectedSingleValue);
    const values = this.attribute.values;
    if (values && values.length > 0) {
      const selectedValue = values.find((value) => value.selected);
      if (selectedValue) {
        this.selectionValue = selectedValue;
      }
    }
  }
  /**
   * Returns selected value. We assume that when this method is called,
   * a selection has been made before. In case this assumption is false,
   * an error is thrown
   * @returns selected value
   */
  get selectedValue() {
    let selectedValue;
    if (this.selectionValue) {
      selectedValue = this.selectionValue;
    } else {
      throw new Error("selectedValue called without a defined selectionValue");
    }
    return selectedValue;
  }
  /**
   * Extract corresponding product card parameters
   *
   * @return {ConfiguratorAttributeProductCardComponentOptions} - New product card options
   */
  extractProductCardParameters() {
    return {
      hideRemoveButton: true,
      productBoundValue: this.selectedValue,
      singleDropdown: true,
      withQuantity: false,
      loading$: this.loading$,
      attributeId: this.getAttributeCode(this.attribute),
      attributeName: this.attribute.name,
      itemCount: 0,
      itemIndex: 0
    };
  }
  /**
   * Verifies whether a selection value is defined and its value code is not a retract one.
   *
   * @returns {boolean} - 'True' if a selection value is defined and its value code is not a retract one, otherwise 'false'.
   */
  isNotRetractValue() {
    return (this.selectionValue && this.selectionValue?.valueCode !== Configurator.RetractValueCode) ?? false;
  }
  /**
   * Verifies whether a value code is a retract one.
   *
   * @param {string} valueCode - Value code
   * @returns {boolean} - 'True' if a value code is a retract one, otherwise 'false'.
   */
  isRetractValue(valueCode) {
    return valueCode === Configurator.RetractValueCode;
  }
  static {
    this.ɵfac = function ConfiguratorAttributeSingleSelectionBundleDropdownComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeSingleSelectionBundleDropdownComponent)(ɵɵdirectiveInject(ConfiguratorAttributeQuantityService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeSingleSelectionBundleDropdownComponent,
      selectors: [["cx-configurator-attribute-single-selection-bundle-dropdown"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 3,
      consts: [["class", "form-group", 4, "ngIf"], [3, "id", "productCardOptions", "handleDeselect", 4, "ngIf"], ["class", "cx-attribute-level-quantity-price", 4, "ngIf"], [1, "form-group"], [1, "cx-visually-hidden", 3, "for"], [1, "form-control", 3, "change", "id", "ngClass", "formControl", "cxFocus"], [3, "label", "selected", "value", 4, "ngFor", "ngForOf"], [3, "label", "selected", "value"], [3, "handleDeselect", "id", "productCardOptions"], [1, "cx-attribute-level-quantity-price"], [3, "changeQuantity", "quantityOptions"], [3, "formula"]],
      template: function ConfiguratorAttributeSingleSelectionBundleDropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorAttributeSingleSelectionBundleDropdownComponent_div_0_Template, 7, 19, "div", 0)(1, ConfiguratorAttributeSingleSelectionBundleDropdownComponent_cx_configurator_attribute_product_card_1_Template, 1, 2, "cx-configurator-attribute-product-card", 1)(2, ConfiguratorAttributeSingleSelectionBundleDropdownComponent_div_2_Template, 3, 2, "div", 2);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.attribute == null ? null : ctx.attribute.values == null ? null : ctx.attribute.values.length);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isNotRetractValue());
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.withQuantity);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, ConfiguratorAttributeProductCardComponent, NgSelectOption, ɵNgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, FocusDirective, FormControlDirective, ConfiguratorAttributeQuantityComponent, ConfiguratorPriceComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeSingleSelectionBundleDropdownComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-single-selection-bundle-dropdown",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="form-group" *ngIf="attribute?.values?.length">
  <label
    for="{{ createAttributeIdForConfigurator(attribute) }}"
    class="cx-visually-hidden"
  >
    {{
      'configurator.a11y.listbox'
        | cxTranslate
          : {
              count: attribute.values?.length,
            }
    }}
  </label>

  <select
    id="{{ createAttributeIdForConfigurator(attribute) }}"
    class="form-control"
    [ngClass]="{
      'cx-required-error-msg ': (showRequiredErrorMessage$ | async),
    }"
    [formControl]="attributeDropDownForm"
    [cxFocus]="{ key: attribute.name }"
    (change)="onSelect(attributeDropDownForm.value)"
    [attr.aria-describedby]="createAttributeUiKey('label', attribute.name)"
  >
    <option
      *ngFor="let item of attribute.values"
      [label]="getLabel(false, item.valueDisplay, undefined, item)"
      [selected]="item.selected"
      [value]="item.valueCode"
      [attr.aria-label]="
        isRetractValue(item.valueCode)
          ? ('configurator.a11y.forAttribute'
            | cxTranslate
              : { value: item.valueDisplay, attribute: attribute.label })
          : item.valuePrice && item.valuePrice?.value !== 0
            ? ('configurator.a11y.selectedValueOfAttributeFullWithPrice'
              | cxTranslate
                : {
                    value: item.valueDisplay,
                    attribute: attribute.label,
                    price: item.valuePriceTotal?.formattedValue ?? 0,
                  })
            : ('configurator.a11y.selectedValueOfAttributeFull'
              | cxTranslate
                : { value: item.valueDisplay, attribute: attribute.label })
      "
      [value]="item.valueCode"
    >
      {{ getLabel(false, item.valueDisplay, undefined, item) }}
    </option>
  </select>
</div>

<cx-configurator-attribute-product-card
  *ngIf="isNotRetractValue()"
  id="{{
    createAttributeValueIdForConfigurator(attribute, selectedValue.valueCode)
  }}"
  (handleDeselect)="onSelect(RETRACT_VALUE_CODE)"
  [productCardOptions]="extractProductCardParameters()"
>
</cx-configurator-attribute-product-card>

<div *ngIf="withQuantity" class="cx-attribute-level-quantity-price">
  <cx-configurator-attribute-quantity
    (changeQuantity)="onChangeQuantity($event, attributeDropDownForm)"
    [quantityOptions]="extractQuantityParameters(attributeDropDownForm)"
  ></cx-configurator-attribute-quantity>
  <cx-configurator-price
    [formula]="extractPriceFormulaParameters()"
  ></cx-configurator-price>
</div>
`
    }]
  }], () => [{
    type: ConfiguratorAttributeQuantityService
  }, {
    type: TranslationService
  }, {
    type: ConfiguratorAttributeCompositionContext
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }], null);
})();
var ConfiguratorAttributeSingleSelectionBundleDropdownModule = class _ConfiguratorAttributeSingleSelectionBundleDropdownModule {
  static {
    this.ɵfac = function ConfiguratorAttributeSingleSelectionBundleDropdownModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeSingleSelectionBundleDropdownModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeSingleSelectionBundleDropdownModule,
      declarations: [ConfiguratorAttributeSingleSelectionBundleDropdownComponent],
      imports: [CommonModule, ConfiguratorAttributeProductCardModule, FormsModule, I18nModule, KeyboardFocusModule, NgSelectModule, ReactiveFormsModule, ConfiguratorAttributeQuantityModule, ConfiguratorPriceModule],
      exports: [ConfiguratorAttributeSingleSelectionBundleDropdownComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_dropdownProduct: ConfiguratorAttributeSingleSelectionBundleDropdownComponent
          }
        }
      })],
      imports: [CommonModule, ConfiguratorAttributeProductCardModule, FormsModule, I18nModule, KeyboardFocusModule, NgSelectModule, ReactiveFormsModule, ConfiguratorAttributeQuantityModule, ConfiguratorPriceModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeSingleSelectionBundleDropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ConfiguratorAttributeProductCardModule, FormsModule, I18nModule, KeyboardFocusModule, NgSelectModule, ReactiveFormsModule, ConfiguratorAttributeQuantityModule, ConfiguratorPriceModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_dropdownProduct: ConfiguratorAttributeSingleSelectionBundleDropdownComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeSingleSelectionBundleDropdownComponent],
      exports: [ConfiguratorAttributeSingleSelectionBundleDropdownComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeSingleSelectionBundleComponent = class _ConfiguratorAttributeSingleSelectionBundleComponent extends ConfiguratorAttributeSingleSelectionBaseComponent {
  /**
   * Extract corresponding product card parameters
   *
   * @param {Configurator.Value} value - Value
   * @param {number} index - index of current value in list of values of attribute
   * @return {ConfiguratorAttributeProductCardComponentOptions} - New product card options
   */
  extractProductCardParameters(value, index) {
    return {
      hideRemoveButton: this.attribute.required,
      fallbackFocusId: this.getFocusIdOfNearestValue(value),
      productBoundValue: value,
      loading$: this.loading$,
      attributeId: this.getAttributeCode(this.attribute),
      attributeLabel: this.attribute.label,
      attributeName: this.attribute.name,
      itemCount: this.attribute.values?.length ? this.attribute.values.length : 0,
      itemIndex: index
    };
  }
  getFocusIdOfNearestValue(currentValue) {
    if (!this.attribute.values) {
      return "n/a";
    }
    let prevIdx = this.attribute.values.findIndex((value) => value.valueCode === currentValue.valueCode);
    prevIdx--;
    if (prevIdx < 0) {
      prevIdx = this.attribute.values.length > 1 ? 1 : 0;
    }
    return this.createFocusId(this.getAttributeCode(this.attribute).toString(), this.attribute.values[prevIdx].valueCode);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵConfiguratorAttributeSingleSelectionBundleComponent_BaseFactory;
      return function ConfiguratorAttributeSingleSelectionBundleComponent_Factory(__ngFactoryType__) {
        return (ɵConfiguratorAttributeSingleSelectionBundleComponent_BaseFactory || (ɵConfiguratorAttributeSingleSelectionBundleComponent_BaseFactory = ɵɵgetInheritedFactory(_ConfiguratorAttributeSingleSelectionBundleComponent)))(__ngFactoryType__ || _ConfiguratorAttributeSingleSelectionBundleComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeSingleSelectionBundleComponent,
      selectors: [["cx-configurator-attribute-single-selection-bundle"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 1,
      consts: [[3, "id", 4, "ngIf"], [3, "id"], ["class", "cx-attribute-level-quantity-price", 4, "ngIf"], [3, "id", "productCardOptions", "handleDeselect", "handleSelect", 4, "ngFor", "ngForOf"], [1, "cx-attribute-level-quantity-price"], [3, "changeQuantity", "quantityOptions"], [3, "formula"], [3, "handleDeselect", "handleSelect", "id", "productCardOptions"]],
      template: function ConfiguratorAttributeSingleSelectionBundleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorAttributeSingleSelectionBundleComponent_div_0_Template, 3, 3, "div", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.attribute == null ? null : ctx.attribute.values == null ? null : ctx.attribute.values.length);
        }
      },
      dependencies: [NgForOf, NgIf, ConfiguratorAttributeProductCardComponent, ConfiguratorAttributeQuantityComponent, ConfiguratorPriceComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeSingleSelectionBundleComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-single-selection-bundle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  id="{{ createAttributeIdForConfigurator(attribute) }}"
  *ngIf="attribute?.values?.length"
>
  <div *ngIf="withQuantity" class="cx-attribute-level-quantity-price">
    <cx-configurator-attribute-quantity
      (changeQuantity)="onChangeQuantity($event)"
      [quantityOptions]="extractQuantityParameters()"
    ></cx-configurator-attribute-quantity>

    <cx-configurator-price
      [formula]="extractPriceFormulaParameters()"
    ></cx-configurator-price>
  </div>

  <cx-configurator-attribute-product-card
    [id]="createAttributeValueIdForConfigurator(attribute, value.valueCode)"
    (handleDeselect)="onSelect('')"
    (handleSelect)="onSelect($event)"
    *ngFor="let value of attribute?.values; let i = index"
    [productCardOptions]="extractProductCardParameters(value, i)"
  >
  </cx-configurator-attribute-product-card>
</div>
`
    }]
  }], null, null);
})();
var ConfiguratorAttributeSingleSelectionBundleModule = class _ConfiguratorAttributeSingleSelectionBundleModule {
  static {
    this.ɵfac = function ConfiguratorAttributeSingleSelectionBundleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeSingleSelectionBundleModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeSingleSelectionBundleModule,
      declarations: [ConfiguratorAttributeSingleSelectionBundleComponent],
      imports: [CommonModule, ConfiguratorAttributeProductCardModule, ConfiguratorAttributeQuantityModule, FormsModule, I18nModule, ItemCounterModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, ConfiguratorPriceModule],
      exports: [ConfiguratorAttributeSingleSelectionBundleComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_radioGroupProduct: ConfiguratorAttributeSingleSelectionBundleComponent
          }
        }
      })],
      imports: [CommonModule, ConfiguratorAttributeProductCardModule, ConfiguratorAttributeQuantityModule, FormsModule, I18nModule, ItemCounterModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, ConfiguratorPriceModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeSingleSelectionBundleModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ConfiguratorAttributeProductCardModule, ConfiguratorAttributeQuantityModule, FormsModule, I18nModule, ItemCounterModule, KeyboardFocusModule, ReactiveFormsModule, RouterModule, UrlModule, ConfiguratorPriceModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_radioGroupProduct: ConfiguratorAttributeSingleSelectionBundleComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeSingleSelectionBundleComponent],
      exports: [ConfiguratorAttributeSingleSelectionBundleComponent]
    }]
  }], null, null);
})();
var ConfiguratorAttributeSingleSelectionImageComponent = class _ConfiguratorAttributeSingleSelectionImageComponent extends ConfiguratorAttributeBaseComponent {
  constructor(attributeComponentContext, configuratorCommonsService) {
    useFeatureStyles("a11yDifferentiateFocusedAndSelected");
    super();
    this.attributeComponentContext = attributeComponentContext;
    this.configuratorCommonsService = configuratorCommonsService;
    this.attributeRadioButtonForm = new UntypedFormControl("");
    this.iconTypes = ICON_TYPE;
    this.config = inject(Config);
    this.featureConfigService = inject(FeatureConfigService);
    this.attribute = attributeComponentContext.attribute;
    this.ownerKey = attributeComponentContext.owner.key;
    this.expMode = attributeComponentContext.expMode;
    this.initPriceChangedEvent(attributeComponentContext.isPricingAsync, attributeComponentContext.attribute.key);
  }
  ngOnInit() {
    this.attributeRadioButtonForm.setValue(this.attribute.selectedSingleValue);
  }
  /**
   * Submits a value.
   *
   * @param {string} value - Selected value
   */
  onClick(value) {
    this.configuratorCommonsService.updateConfiguration(this.ownerKey, __spreadProps(__spreadValues({}, this.attribute), {
      selectedSingleValue: value
    }), Configurator.UpdateType.ATTRIBUTE);
  }
  extractValuePriceFormulaParameters(value) {
    return {
      price: value?.valuePrice,
      isLightedUp: value ? value.selected : false
    };
  }
  getValueDescriptionStyleClasses() {
    return "cx-value-description santorini-updated";
  }
  static {
    this.ɵfac = function ConfiguratorAttributeSingleSelectionImageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeSingleSelectionImageComponent)(ɵɵdirectiveInject(ConfiguratorAttributeCompositionContext), ɵɵdirectiveInject(ConfiguratorCommonsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorAttributeSingleSelectionImageComponent,
      selectors: [["cx-configurator-attribute-single-selection-image"]],
      standalone: false,
      features: [ɵɵProvidersFeature([ConfiguratorAttributePriceChangeService]), ɵɵInheritDefinitionFeature],
      decls: 3,
      vars: 4,
      consts: [["role", "radiogroup", 1, "cx-row", 3, "id"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "cx-configurator-select", 3, "id", 4, "ngIf"], [1, "cx-configurator-select", 3, "id"], ["type", "radio", "formcontrolname", "attributeRadioButtonForm", "role", "radio", 1, "form-input", 3, "click", "id", "value", "formControl", "name", "cxFocus"], [1, "cx-label-container"], [1, "form-check-label", "form-radio-label", 3, "id", "for"], [3, "ngClass", "src", "alt", "title", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [3, "cxPopover", "cxPopoverOptions", "title", 4, "ngIf"], [3, "formula"], [3, "ngClass", "src", "alt", "title"], [3, "ngClass"], [3, "cxPopover", "cxPopoverOptions", "title"], [3, "type"]],
      template: function ConfiguratorAttributeSingleSelectionImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, ConfiguratorAttributeSingleSelectionImageComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵpropertyInterpolate("id", ctx.createAttributeIdForConfigurator(ctx.attribute));
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx.changedPrices$));
        }
      },
      dependencies: [FocusDirective, DefaultValueAccessor, RadioControlValueAccessor, NgControlStatus, FormControlDirective, NgClass, NgForOf, NgIf, IconComponent, ConfiguratorPriceComponent, PopoverDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeSingleSelectionImageComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-attribute-single-selection-image",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfiguratorAttributePriceChangeService],
      standalone: false,
      template: `<div
  id="{{ createAttributeIdForConfigurator(attribute) }}"
  class="cx-row"
  role="radiogroup"
>
  <ng-container *ngIf="changedPrices$ | async as changedPrices">
    <ng-container *ngFor="let value of attribute.values">
      <div
        *ngIf="isValueDisplayed(attribute, value)"
        id="{{
          createAttributeValueIdForConfigurator(attribute, value.valueCode)
        }}"
        class="cx-configurator-select"
      >
        <input
          id="{{
            createAttributeValueIdForConfigurator(attribute, value.valueCode) +
              '-input'
          }}"
          type="radio"
          class="form-input"
          [value]="value.valueCode"
          formcontrolname="attributeRadioButtonForm"
          [formControl]="attributeRadioButtonForm"
          [value]="value.valueCode"
          name="{{ createAttributeIdForConfigurator(attribute) }}"
          attr.name="{{ createAttributeIdForConfigurator(attribute) }}"
          [attr.required]="attribute.required === true ? 'required' : null"
          [attr.checked]="
            attributeRadioButtonForm.value === value.valueCode
              ? 'checked'
              : null
          "
          [attr.aria-checked]="
            attributeRadioButtonForm.value === value.valueCode
              ? 'true'
              : 'false'
          "
          [attr.aria-label]="
            getAriaLabelGeneric(
              attribute,
              enrichValueWithPrice(value, changedPrices)
            )
          "
          [attr.aria-live]="
            listenForPriceChanges &&
            attributeRadioButtonForm.value === value.valueCode
              ? 'polite'
              : null
          "
          [attr.aria-describedby]="
            createAttributeUiKey('label', attribute.name)
          "
          (click)="!isReadOnly(attribute) && onClick(value.valueCode)"
          [cxFocus]="{ key: attribute.name + '-' + value.name }"
          role="radio"
        />
        <div class="cx-label-container">
          <label
            id="{{
              createValueUiKey('label', attribute.name, value.valueCode)
            }}"
            for="{{
              createAttributeValueIdForConfigurator(
                attribute,
                value.valueCode
              ) + '-input'
            }}"
            class="form-check-label form-radio-label"
            [style.cursor]="!isReadOnly(attribute) ? 'pointer' : 'default'"
          >
            <img
              *ngIf="getImage(value)"
              [ngClass]="getImgStyleClasses(attribute, value, 'cx-img')"
              src="{{ getImage(value)?.url }}"
              alt="{{ getImage(value)?.altText }}"
              title="{{ getImage(value)?.altText }}"
            />
            <div
              *ngIf="!getImage(value)"
              [ngClass]="getImgStyleClasses(attribute, value, 'cx-img-dummy')"
            ></div>
            {{ getImageLabel(expMode, value.valueDisplay, value.valueCode) }}
            <button
              *ngIf="value.description"
              [cxPopover]="value.description"
              [cxPopoverOptions]="{
                placement: 'auto',
                class: getValueDescriptionStyleClasses(),
                appendToBody: true,
                displayCloseButton: true,
              }"
              title="{{
                'configurator.a11y.description'
                  | cxTranslate
                    : {
                        value: getImageLabel(
                          expMode,
                          value.valueDisplay,
                          value.valueCode
                        ),
                      }
              }}"
              [attr.aria-label]="
                'configurator.a11y.description'
                  | cxTranslate
                    : {
                        value: getImageLabel(
                          expMode,
                          value.valueDisplay,
                          value.valueCode
                        ),
                      }
              "
            >
              <cx-icon [type]="iconTypes.INFO"></cx-icon>
            </button>
            <cx-configurator-price
              [formula]="
                extractValuePriceFormulaParameters(
                  enrichValueWithPrice(value, changedPrices)
                )
              "
            ></cx-configurator-price>
          </label>
        </div>
      </div>
    </ng-container>
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: ConfiguratorAttributeCompositionContext
  }, {
    type: ConfiguratorCommonsService
  }], null);
})();
var ConfiguratorAttributeSingleSelectionImageModule = class _ConfiguratorAttributeSingleSelectionImageModule {
  static {
    this.ɵfac = function ConfiguratorAttributeSingleSelectionImageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorAttributeSingleSelectionImageModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorAttributeSingleSelectionImageModule,
      declarations: [ConfiguratorAttributeSingleSelectionImageComponent],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule, ConfiguratorPriceModule, PopoverModule],
      exports: [ConfiguratorAttributeSingleSelectionImageComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_single_selection_image: ConfiguratorAttributeSingleSelectionImageComponent,
            AttributeType_read_only_single_selection_image: ConfiguratorAttributeSingleSelectionImageComponent
          }
        }
      })],
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule, ConfiguratorPriceModule, PopoverModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorAttributeSingleSelectionImageModule, [{
    type: NgModule,
    args: [{
      imports: [KeyboardFocusModule, FormsModule, ReactiveFormsModule, CommonModule, I18nModule, IconModule, ConfiguratorPriceModule, PopoverModule],
      providers: [provideDefaultConfig({
        productConfigurator: {
          assignment: {
            AttributeType_single_selection_image: ConfiguratorAttributeSingleSelectionImageComponent,
            AttributeType_read_only_single_selection_image: ConfiguratorAttributeSingleSelectionImageComponent
          }
        }
      })],
      declarations: [ConfiguratorAttributeSingleSelectionImageComponent],
      exports: [ConfiguratorAttributeSingleSelectionImageComponent]
    }]
  }], null, null);
})();
var ConfiguratorMessageConfig = class {
};
LAUNCH_CALLER["CONFLICT_SOLVER"] = "CONFLICT_SOLVER";
LAUNCH_CALLER["CONFIGURATOR_OV_FILTER"] = "CONFIGURATOR_OV_FILTER";
LAUNCH_CALLER["CONFIGURATOR_RESTART_DIALOG"] = "CONFIGURATOR_RESTART_DIALOG";
var ConfiguratorConflictAndErrorMessagesComponent = class _ConfiguratorConflictAndErrorMessagesComponent {
  toggleWarnings() {
    this.showWarnings = !this.showWarnings;
  }
  toggleErrors() {
    this.showErrors = !this.showErrors;
  }
  constructor(configuratorCommonsService, configRouterExtractorService) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.iconTypes = ICON_TYPE;
    this.configuration$ = this.configRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => this.configuratorCommonsService.getConfiguration(routerData.owner)));
    this.showWarnings = false;
    this.showErrors = false;
  }
  static {
    this.ɵfac = function ConfiguratorConflictAndErrorMessagesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorConflictAndErrorMessagesComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorConflictAndErrorMessagesComponent,
      selectors: [["cx-configuration-conflict-and-error-messages"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["aria-live", "assertive", "aria-atomic", "true", 1, "alert-message", "alert-message-invalid-warning"], [1, "alert-icon"], ["type", "WARNING"], ["class", "cx-warning-text", 4, "ngIf"], ["class", "cx-warning-toggle", 3, "click", 4, "ngIf"], [1, "cx-warning-messages"], ["class", "cx-warning-message", 3, "open", 4, "ngFor", "ngForOf"], [1, "cx-warning-text"], [1, "cx-warning-toggle", 3, "click"], ["type", "CARET_DOWN"], ["type", "CARET_UP"], [1, "cx-warning-message"], ["aria-live", "assertive", "aria-atomic", "true", "role", "alert", 1, "alert-message", "alert-message-error"], ["type", "ERROR"], ["class", "cx-error-text", 4, "ngIf"], ["class", "cx-error-toggle", 3, "click", 4, "ngIf"], [1, "cx-error-messages"], ["class", "cx-error-message", 3, "open", 4, "ngFor", "ngForOf"], [1, "cx-error-text"], [1, "cx-error-toggle", 3, "click"], [1, "cx-error-message"]],
      template: function ConfiguratorConflictAndErrorMessagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorConflictAndErrorMessagesComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.configuration$));
        }
      },
      dependencies: [NgForOf, NgIf, IconComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorConflictAndErrorMessagesComponent, [{
    type: Component,
    args: [{
      selector: "cx-configuration-conflict-and-error-messages",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="configuration$ | async as configuration">
  <ng-container *ngIf="(configuration?.warningMessages?.length ?? 0) > 0">
    <div
      aria-live="assertive"
      aria-atomic="true"
      class="alert-message alert-message-invalid-warning"
    >
      <span class="alert-icon">
        <cx-icon type="WARNING"></cx-icon>
      </span>
      <span
        class="cx-warning-text"
        *ngIf="(configuration?.warningMessages?.length ?? 0) > 1"
      >
        {{ 'configurator.header.multipleWarnings' | cxTranslate }}</span
      >
      <button
        (click)="toggleWarnings()"
        *ngIf="(configuration?.warningMessages?.length ?? 0) > 1"
        class="cx-warning-toggle"
        [attr.aria-expanded]="showWarnings"
      >
        {{ 'configurator.header.reviewWarnings' | cxTranslate }}

        <ng-container *ngIf="!showWarnings">
          <cx-icon type="CARET_DOWN"></cx-icon>
        </ng-container>

        <ng-container *ngIf="showWarnings">
          <cx-icon type="CARET_UP"></cx-icon>
        </ng-container>
      </button>
      <div
        class="cx-warning-messages"
        [class.inline]="configuration?.warningMessages?.length === 1"
      >
        <div
          class="cx-warning-message"
          [class.open]="
            showWarnings || configuration?.warningMessages?.length === 1
          "
          *ngFor="let warningMessage of configuration.warningMessages"
        >
          {{ warningMessage }}
        </div>
      </div>
    </div>
  </ng-container>
  <ng-container *ngIf="(configuration?.errorMessages?.length ?? 0) > 0">
    <div
      aria-live="assertive"
      aria-atomic="true"
      role="alert"
      class="alert-message alert-message-error"
    >
      <span class="alert-icon">
        <cx-icon type="ERROR"></cx-icon>
      </span>
      <span
        class="cx-error-text"
        *ngIf="(configuration?.errorMessages?.length ?? 0) > 1"
      >
        {{ 'configurator.header.multipleErrors' | cxTranslate }}</span
      >
      <button
        (click)="toggleErrors()"
        *ngIf="(configuration?.errorMessages?.length ?? 0) > 1"
        class="cx-error-toggle"
        [attr.aria-expanded]="showErrors"
      >
        {{ 'configurator.header.reviewErrors' | cxTranslate }}
        <ng-container *ngIf="!showErrors">
          <cx-icon type="CARET_DOWN"></cx-icon>
        </ng-container>

        <ng-container *ngIf="showErrors">
          <cx-icon type="CARET_UP"></cx-icon>
        </ng-container>
      </button>
      <div
        class="cx-error-messages"
        [class.inline]="configuration?.errorMessages?.length === 1"
      >
        <div
          class="cx-error-message"
          [class.open]="
            showErrors || configuration?.errorMessages?.length === 1
          "
          *ngFor="let errorMessage of configuration.errorMessages"
        >
          {{ errorMessage }}
        </div>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorRouterExtractorService
  }], null);
})();
var ConfiguratorConflictAndErrorMessagesModule = class _ConfiguratorConflictAndErrorMessagesModule {
  static {
    this.ɵfac = function ConfiguratorConflictAndErrorMessagesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorConflictAndErrorMessagesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorConflictAndErrorMessagesModule,
      declarations: [ConfiguratorConflictAndErrorMessagesComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule],
      exports: [ConfiguratorConflictAndErrorMessagesComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CpqConfiguratorConflictAndErrorMessagesComponent: {
            component: ConfiguratorConflictAndErrorMessagesComponent
          }
        }
      })],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorConflictAndErrorMessagesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, IconModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CpqConfiguratorConflictAndErrorMessagesComponent: {
            component: ConfiguratorConflictAndErrorMessagesComponent
          }
        }
      })],
      declarations: [ConfiguratorConflictAndErrorMessagesComponent],
      exports: [ConfiguratorConflictAndErrorMessagesComponent]
    }]
  }], null, null);
})();
var ConfiguratorConflictDescriptionComponent = class _ConfiguratorConflictDescriptionComponent {
  constructor() {
    this.groupType = Configurator.GroupType;
    this.iconTypes = ICON_TYPE;
    this.tabindex = "0";
    this.role = "note";
  }
  /**
   * Verifies whether the  conflict description should be displayed for the current group.
   *
   * @param {Configurator.Group} group - Current group
   * @return {boolean} - 'True' if the conflict description should be displayed, otherwise 'false'.
   */
  displayConflictDescription(group) {
    return group.groupType === Configurator.GroupType.CONFLICT_GROUP;
  }
  static {
    this.ɵfac = function ConfiguratorConflictDescriptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorConflictDescriptionComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorConflictDescriptionComponent,
      selectors: [["cx-configurator-conflict-description"]],
      hostVars: 2,
      hostBindings: function ConfiguratorConflictDescriptionComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("tabindex", ctx.tabindex)("role", ctx.role);
        }
      },
      inputs: {
        currentGroup: "currentGroup"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["aria-hidden", "true", 3, "type"]],
      template: function ConfiguratorConflictDescriptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorConflictDescriptionComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.displayConflictDescription(ctx.currentGroup));
        }
      },
      dependencies: [NgIf, IconComponent],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorConflictDescriptionComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-conflict-description",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-container *ngIf="displayConflictDescription(currentGroup)">\n  <cx-icon [type]="iconTypes.WARNING" aria-hidden="true"></cx-icon>\n  {{ currentGroup.name }}\n</ng-container>\n'
    }]
  }], () => [], {
    currentGroup: [{
      type: Input
    }],
    tabindex: [{
      type: HostBinding,
      args: ["tabindex"]
    }],
    role: [{
      type: HostBinding,
      args: ["role"]
    }]
  });
})();
var ConfiguratorConflictDescriptionModule = class _ConfiguratorConflictDescriptionModule {
  static {
    this.ɵfac = function ConfiguratorConflictDescriptionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorConflictDescriptionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorConflictDescriptionModule,
      declarations: [ConfiguratorConflictDescriptionComponent],
      imports: [CommonModule, IconModule],
      exports: [ConfiguratorConflictDescriptionComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorConflictDescriptionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconModule],
      declarations: [ConfiguratorConflictDescriptionComponent],
      exports: [ConfiguratorConflictDescriptionComponent]
    }]
  }], null, null);
})();
var ConfiguratorConflictSuggestionComponent = class _ConfiguratorConflictSuggestionComponent {
  constructor() {
    this.groupType = Configurator.GroupType;
    this.tabindex = "0";
    this.role = "note";
  }
  /**
   * Verifies whether the conflict suggestion should be displayed for the current group.
   *
   * @param {Configurator.Group} group - Current group
   * @return {boolean} - 'True' if the conflict description should be displayed, otherwise 'false'.
   */
  displayConflictSuggestion(group) {
    return group.groupType === Configurator.GroupType.CONFLICT_GROUP && group.attributes ? group.attributes.length > 0 : false;
  }
  createSuggestionUiKey() {
    return "suggestion--" + this.suggestionNumber;
  }
  static {
    this.ɵfac = function ConfiguratorConflictSuggestionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorConflictSuggestionComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorConflictSuggestionComponent,
      selectors: [["cx-configurator-conflict-suggestion"]],
      hostVars: 2,
      hostBindings: function ConfiguratorConflictSuggestionComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("tabindex", ctx.tabindex)("role", ctx.role);
        }
      },
      inputs: {
        currentGroup: "currentGroup",
        attribute: "attribute",
        suggestionNumber: "suggestionNumber"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "cx-title"], ["aria-hidden", "true"]],
      template: function ConfiguratorConflictSuggestionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorConflictSuggestionComponent_ng_container_0_Template, 10, 23, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.displayConflictSuggestion(ctx.currentGroup));
        }
      },
      dependencies: [NgIf, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorConflictSuggestionComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-conflict-suggestion",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="displayConflictSuggestion(currentGroup)">
  <div
    class="cx-title"
    [attr.aria-label]="
      ('configurator.conflict.suggestionTitle'
        | cxTranslate: { number: suggestionNumber + 1 }) +
      ' ' +
      ('configurator.conflict.suggestionText'
        | cxTranslate: { attribute: attribute.label })
    "
  >
    <span aria-hidden="true">{{
      'configurator.conflict.suggestionTitle'
        | cxTranslate: { number: suggestionNumber + 1 }
    }}</span>
  </div>
  <span aria-hidden="true">{{
    'configurator.conflict.suggestionText'
      | cxTranslate: { attribute: attribute.label }
  }}</span>
</ng-container>
`
    }]
  }], () => [], {
    currentGroup: [{
      type: Input
    }],
    attribute: [{
      type: Input
    }],
    suggestionNumber: [{
      type: Input
    }],
    tabindex: [{
      type: HostBinding,
      args: ["tabindex"]
    }],
    role: [{
      type: HostBinding,
      args: ["role"]
    }]
  });
})();
var ConfiguratorConflictSuggestionModule = class _ConfiguratorConflictSuggestionModule {
  static {
    this.ɵfac = function ConfiguratorConflictSuggestionModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorConflictSuggestionModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorConflictSuggestionModule,
      declarations: [ConfiguratorConflictSuggestionComponent],
      imports: [CommonModule, I18nModule],
      exports: [ConfiguratorConflictSuggestionComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorConflictSuggestionModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule],
      declarations: [ConfiguratorConflictSuggestionComponent],
      exports: [ConfiguratorConflictSuggestionComponent]
    }]
  }], null, null);
})();
var ConfiguratorExitButtonComponent = class _ConfiguratorExitButtonComponent {
  constructor(productService, routingService, configRouterExtractorService, configuratorCommonsService, breakpointService, windowRef, location) {
    this.productService = productService;
    this.routingService = routingService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.configuratorCommonsService = configuratorCommonsService;
    this.breakpointService = breakpointService;
    this.windowRef = windowRef;
    this.location = location;
    this.container$ = this.configRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => this.configuratorCommonsService.getConfiguration(routerData.owner).pipe(map((configuration) => ({
      routerData,
      configuration
    }))).pipe(switchMap((cont) => this.productService.get(cont.configuration.productCode).pipe(map((product) => ({
      routerData: cont.routerData,
      configuration: cont.configuration,
      product
    })))))));
  }
  navigateToCart() {
    this.routingService.go("cart");
  }
  /**
   * Navigates to the product detail page of the product that is being configured.
   */
  exitConfiguration() {
    this.container$.pipe(take(1)).subscribe((container) => {
      if (container.routerData.owner.type === CommonConfigurator.OwnerType.CART_ENTRY) {
        this.navigateToCart();
      } else {
        this.routingService.go({
          cxRoute: "product",
          params: container.product
        });
      }
    });
  }
  /**
   * Verifies whether the current screen size equals or is larger than breakpoint `BREAKPOINT.md`.
   *
   * @returns {Observable<boolean>} - If the given breakpoint equals or is larger than`BREAKPOINT.md` returns `true`, otherwise `false`.
   */
  isDesktop() {
    return this.breakpointService.isUp(BREAKPOINT.md);
  }
  /**
   * Verifies whether the current screen size equals or is smaller than breakpoint `BREAKPOINT.sm`.
   *
   * @returns {Observable<boolean>} - If the given breakpoint equals or is smaller than`BREAKPOINT.sm` returns `true`, otherwise `false`.
   */
  isMobile() {
    return this.breakpointService.isDown(BREAKPOINT.sm);
  }
  static {
    this.ɵfac = function ConfiguratorExitButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorExitButtonComponent)(ɵɵdirectiveInject(ProductService), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(BreakpointService), ɵɵdirectiveInject(WindowRef), ɵɵdirectiveInject(Location));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorExitButtonComponent,
      selectors: [["cx-configurator-exit-button"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["tabindex", "0", 1, "btn", "btn-tertiary", 3, "click"]],
      template: function ConfiguratorExitButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorExitButtonComponent_ng_container_0_Template, 6, 7, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.container$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorExitButtonComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-exit-button",
      standalone: false,
      template: `<ng-container *ngIf="container$ | async as container">
  <button
    class="btn btn-tertiary"
    tabindex="0"
    (click)="exitConfiguration()"
    [attr.title]="
      container.routerData.isOwnerCartEntry
        ? ('configurator.button.cancelConfiguration' | cxTranslate)
        : ('configurator.button.exit' | cxTranslate)
    "
  >
    <ng-container *ngIf="!container.routerData.isOwnerCartEntry">
      <ng-container *ngIf="isDesktop() | async">
        {{ 'configurator.button.exit' | cxTranslate }}
      </ng-container>
      <ng-container *ngIf="isMobile() | async">
        {{ 'configurator.button.exitMobile' | cxTranslate }}
      </ng-container>
    </ng-container>
    <ng-container *ngIf="container.routerData.isOwnerCartEntry">
      <ng-container *ngIf="isMobile() | async">
        {{ 'configurator.button.cancelConfigurationMobile' | cxTranslate }}
      </ng-container>
      <ng-container *ngIf="isDesktop() | async">
        {{ 'configurator.button.cancelConfiguration' | cxTranslate }}
      </ng-container>
    </ng-container>
  </button>
</ng-container>
`
    }]
  }], () => [{
    type: ProductService
  }, {
    type: RoutingService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: BreakpointService
  }, {
    type: WindowRef
  }, {
    type: Location
  }], null);
})();
var ConfiguratorExitButtonModule = class _ConfiguratorExitButtonModule {
  static {
    this.ɵfac = function ConfiguratorExitButtonModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorExitButtonModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorExitButtonModule,
      declarations: [ConfiguratorExitButtonComponent],
      imports: [CommonModule, I18nModule],
      exports: [ConfiguratorExitButtonComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorExitButton: {
            component: ConfiguratorExitButtonComponent
          }
        }
      }), WindowRef],
      imports: [CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorExitButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorExitButton: {
            component: ConfiguratorExitButtonComponent
          }
        }
      }), WindowRef],
      declarations: [ConfiguratorExitButtonComponent],
      exports: [ConfiguratorExitButtonComponent]
    }]
  }], null, null);
})();
var ConfiguratorExpertModeService = class _ConfiguratorExpertModeService {
  constructor() {
    this._expModeRequested = new ReplaySubject(1);
    this._expModeActive = new ReplaySubject(1);
  }
  /**
   * Sets requested expert mode.
   *
   * @param expMode
   */
  setExpModeRequested(expMode) {
    this._expModeRequested.next(expMode);
  }
  /**
   * This function provides the requested expert mode the OCC calls should use, depending
   * on whether there is an active storefront session or not.
   */
  getExpModeRequested() {
    return this._expModeRequested;
  }
  /**
   * Sets requested expert mode.
   *
   * @param expMode
   */
  setExpModeActive(expMode) {
    this._expModeActive.next(expMode);
  }
  /**
   * This function provides the requested expert mode the OCC calls should use, depending
   * on whether there is an active storefront session or not.
   */
  getExpModeActive() {
    return this._expModeActive;
  }
  static {
    this.ɵfac = function ConfiguratorExpertModeService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorExpertModeService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorExpertModeService,
      factory: _ConfiguratorExpertModeService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorExpertModeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfiguratorGroupComponent = class _ConfiguratorGroupComponent {
  constructor(configuratorCommonsService, configuratorGroupsService, languageService, configUtils, configExpertModeService) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorGroupsService = configuratorGroupsService;
    this.languageService = languageService;
    this.configUtils = configUtils;
    this.configExpertModeService = configExpertModeService;
    this.typePrefix = "AttributeType_";
    this.activeLanguage$ = this.languageService.getActive();
    this.uiType = Configurator.UiType;
    this.trackByFn = (_index, attribute) => {
      return attribute.key;
    };
  }
  /**
   * Updates a configuration, specified by the configuration form update event.
   *
   * @param {ConfigFormUpdateEvent} event - Configuration form update event
   */
  updateConfiguration(event) {
    this.configuratorCommonsService.updateConfiguration(event.ownerKey, event.changedAttribute, event.updateType);
  }
  /**
   * Verifies whether the current group type is conflict one.
   *
   * @param {Configurator.GroupType | undefined} groupType - Group type
   * @return {boolean} - 'True' if the current group is conflict one, otherwise 'false'.
   */
  isConflictGroupType(groupType) {
    return groupType ? this.configuratorGroupsService.isConflictGroupType(groupType) : false;
  }
  /**
   * Display group description box only for conflict groups with a given group name (i.e. a conflict description)
   *
   * @param {Configurator.Group} group - Group
   * @returns {boolean} - 'True' if conflict description box should be displayed, otherwise 'false'.
   */
  displayConflictDescription(group) {
    return group.groupType !== void 0 && this.configuratorGroupsService.isConflictGroupType(group.groupType) && group.name !== "";
  }
  /**
   * Generates a group ID.
   *
   * @param {string} groupId - group ID
   * @returns {string | undefined} - generated group ID
   */
  createGroupId(groupId) {
    return this.configUtils.createGroupId(groupId);
  }
  /**
   * Creates unique key for config attribute on the UI
   *
   * @param prefix for key depending on usage (e.g. uiType, label)
   * @param attributeId
   */
  createAttributeUiKey(prefix, attributeId) {
    return this.configUtils.createAttributeUiKey(prefix, attributeId);
  }
  /**
   * Retrieves information whether the expert mode is active.
   *
   * @returns {Observable<boolean> | undefined } - 'True' if the expert mode is active, otherwise 'false'.
   */
  get expMode() {
    return this.configExpertModeService.getExpModeActive();
  }
  getComponentKey(attribute) {
    return attribute.uiTypeVariation?.includes(Configurator.CustomUiTypeIndicator) ? this.typePrefix + attribute.uiTypeVariation : this.typePrefix + attribute.uiType;
  }
  static {
    this.ɵfac = function ConfiguratorGroupComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorGroupComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorGroupsService), ɵɵdirectiveInject(LanguageService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService), ɵɵdirectiveInject(ConfiguratorExpertModeService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorGroupComponent,
      selectors: [["cx-configurator-group"]],
      inputs: {
        group: "group",
        owner: "owner",
        isNavigationToGroupEnabled: "isNavigationToGroupEnabled",
        isPricingAsync: "isPricingAsync"
      },
      standalone: false,
      decls: 3,
      vars: 4,
      consts: [["role", "tabpanel", 3, "id"], [4, "ngIf"], ["class", "cx-group-attribute", 3, "id", "cx-hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "currentGroup"], [1, "cx-group-attribute", 3, "id"], [3, "currentGroup", "attribute", "suggestionNumber"], [3, "cxConfiguratorAttributeComponent"]],
      template: function ConfiguratorGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, ConfiguratorGroupComponent_ng_container_1_Template, 2, 1, "ng-container", 1)(2, ConfiguratorGroupComponent_div_2_Template, 4, 7, "div", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵpropertyInterpolate("id", ctx.createGroupId(ctx.group.id));
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.displayConflictDescription(ctx.group));
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.group.attributes)("ngForTrackBy", ctx.trackByFn);
        }
      },
      dependencies: [NgForOf, NgIf, ConfiguratorConflictDescriptionComponent, ConfiguratorConflictSuggestionComponent, ConfiguratorAttributeCompositionDirective, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorGroupComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div id="{{ createGroupId(group.id) }}" role="tabpanel">
  <ng-container *ngIf="displayConflictDescription(group)">
    <cx-configurator-conflict-description
      [currentGroup]="group"
    ></cx-configurator-conflict-description>
  </ng-container>
  <div
    class="cx-group-attribute"
    id="{{ createAttributeUiKey('group-attribute', attribute.name) }}"
    [class.cx-hidden]="!attribute.visible"
    *ngFor="
      let attribute of group.attributes;
      let indexOfAttribute = index;
      trackBy: trackByFn
    "
  >
    <ng-container *ngIf="isConflictGroupType(group.groupType)">
      <cx-configurator-conflict-suggestion
        [currentGroup]="group"
        [attribute]="attribute"
        [suggestionNumber]="indexOfAttribute"
      ></cx-configurator-conflict-suggestion>
    </ng-container>

    <ng-container *ngIf="activeLanguage$ | async as activeLanguage">
      <div
        [cxConfiguratorAttributeComponent]="{
          componentKey: 'Header',
          attribute: attribute,
          owner: owner,
          group: group,
          language: activeLanguage,
          expMode: (expMode | async) ?? false,
          isNavigationToGroupEnabled: isNavigationToGroupEnabled,
          isPricingAsync: isPricingAsync,
        }"
      ></div>

      <div
        [cxConfiguratorAttributeComponent]="{
          componentKey: getComponentKey(attribute),
          attribute: attribute,
          owner: owner,
          group: group,
          language: activeLanguage,
          expMode: (expMode | async) ?? false,
          isPricingAsync: isPricingAsync,
        }"
      ></div>

      <div
        [cxConfiguratorAttributeComponent]="{
          componentKey: 'Footer',
          attribute: attribute,
          owner: owner,
          group: group,
          language: activeLanguage,
          expMode: (expMode | async) ?? false,
          isPricingAsync: isPricingAsync,
        }"
      ></div>
    </ng-container>
  </div>
</div>
`
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorGroupsService
  }, {
    type: LanguageService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }, {
    type: ConfiguratorExpertModeService
  }], {
    group: [{
      type: Input
    }],
    owner: [{
      type: Input
    }],
    isNavigationToGroupEnabled: [{
      type: Input
    }],
    isPricingAsync: [{
      type: Input
    }]
  });
})();
var ConfiguratorConflictSolverDialogComponent = class _ConfiguratorConflictSolverDialogComponent {
  constructor(configuratorStorefrontUtilsService, configuratorCommonsService, launchDialogService, focusService) {
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.configuratorCommonsService = configuratorCommonsService;
    this.launchDialogService = launchDialogService;
    this.focusService = focusService;
    this.iconTypes = ICON_TYPE;
    this.uiType = Configurator.UiType;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: true,
      focusOnEscape: true
    };
    this.subscription = new Subscription();
  }
  init(conflictGroup, routerData) {
    this.focusService.clear();
    this.conflictGroup$ = conflictGroup;
    this.routerData$ = routerData;
  }
  ngOnInit() {
    this.subscription.add(this.launchDialogService.data$.subscribe((dialogData) => {
      this.init(dialogData.conflictGroup, dialogData.routerData);
    }));
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  /**
   * Closes a modal with a certain reason.
   * Scrolls to the top of the configuration form.
   * Sets focus to the first attribute.
   *
   * @param {any} reason - Reason
   */
  dismissModal(reason) {
    this.routerData$.pipe(take(1)).subscribe((routerData) => this.configuratorCommonsService.dismissConflictSolverDialog(routerData.owner));
    this.launchDialogService.closeDialog(reason);
    this.configuratorStorefrontUtilsService.scrollToConfigurationElement(".VariantConfigurationTemplate");
    this.configuratorStorefrontUtilsService.focusFirstAttribute();
  }
  static {
    this.ɵfac = function ConfiguratorConflictSolverDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorConflictSolverDialogComponent)(ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(KeyboardFocusService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorConflictSolverDialogComponent,
      selectors: [["cx-configurator-conflict-solver-dialog"]],
      standalone: false,
      decls: 21,
      vars: 21,
      consts: [["role", "dialog", "aria-modal", "true", "aria-labelledby", "dialogTitle", 1, "cx-modal-container"], ["aria-atomic", "true", "aria-live", "assertive", "role", "alert", "aria-relevant", "additions", 1, "cx-visually-hidden"], [1, "cx-modal-content", 3, "cxFocus"], [1, "cx-dialog-header", "modal-header"], ["id", "dialogTitle", "tabindex", "0", 1, "cx-dialog-title", "modal-title"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [1, "cx-dialog-body", "modal-body"], [1, "cx-msg-warning"], [4, "ngIf"], [3, "group", "owner", "isNavigationToGroupEnabled"]],
      template: function ConfiguratorConflictSolverDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1);
          ɵɵtext(2);
          ɵɵpipe(3, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(4, "div", 2)(5, "div", 3)(6, "h3", 4);
          ɵɵtext(7);
          ɵɵpipe(8, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(9, "button", 5);
          ɵɵpipe(10, "cxTranslate");
          ɵɵpipe(11, "cxTranslate");
          ɵɵlistener("click", function ConfiguratorConflictSolverDialogComponent_Template_button_click_9_listener() {
            return ctx.dismissModal("Close conflict solver dialog");
          });
          ɵɵelementStart(12, "span", 6);
          ɵɵelement(13, "cx-icon", 7);
          ɵɵelementEnd()()();
          ɵɵelementStart(14, "div", 8)(15, "div", 9);
          ɵɵelement(16, "cx-icon", 7);
          ɵɵtext(17);
          ɵɵpipe(18, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(19, ConfiguratorConflictSolverDialogComponent_ng_container_19_Template, 3, 3, "ng-container", 10);
          ɵɵpipe(20, "async");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 9, "configurator.header.conflictWarning"), " ");
          ɵɵadvance(2);
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 11, "configurator.header.resolveIssue"), " ");
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(10, 13, "configurator.a11y.closeConflictSolverModal"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(11, 15, "configurator.a11y.closeConflictSolverModal"));
          ɵɵadvance(4);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.ERROR);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 17, "configurator.header.conflictWarning"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(20, 19, ctx.routerData$));
        }
      },
      dependencies: [NgIf, IconComponent, ConfiguratorGroupComponent, FocusDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorConflictSolverDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-conflict-solver-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  class="cx-modal-container"
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialogTitle"
>
  <!-- For screen reader purposes (not visual)-->
  <div
    class="cx-visually-hidden"
    aria-atomic="true"
    aria-live="assertive"
    role="alert"
    aria-relevant="additions"
  >
    {{ 'configurator.header.conflictWarning' | cxTranslate }}
  </div>
  <div class="cx-modal-content" [cxFocus]="focusConfig">
    <!-- Modal Header -->
    <div class="cx-dialog-header modal-header">
      <h3 id="dialogTitle" class="cx-dialog-title modal-title" tabindex="0">
        {{ 'configurator.header.resolveIssue' | cxTranslate }}
      </h3>
      <button
        type="button"
        class="close"
        attr.aria-label="{{
          'configurator.a11y.closeConflictSolverModal' | cxTranslate
        }}"
        title="{{ 'configurator.a11y.closeConflictSolverModal' | cxTranslate }}"
        (click)="dismissModal('Close conflict solver dialog')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>

    <!-- Modal Body -->
    <div class="cx-dialog-body modal-body">
      <div class="cx-msg-warning">
        <cx-icon [type]="iconTypes.ERROR"></cx-icon>
        {{ 'configurator.header.conflictWarning' | cxTranslate }}
      </div>
      <ng-container *ngIf="routerData$ | async as routerData">
        <ng-container *ngIf="conflictGroup$ | async as conflictGroup">
          <cx-configurator-group
            [group]="conflictGroup"
            [owner]="routerData.owner"
            [isNavigationToGroupEnabled]="false"
          >
          </cx-configurator-group> </ng-container
      ></ng-container>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: ConfiguratorStorefrontUtilsService
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: LaunchDialogService
  }, {
    type: KeyboardFocusService
  }], null);
})();
var ConfiguratorConflictSolverDialogLauncherService = class _ConfiguratorConflictSolverDialogLauncherService {
  constructor(launchDialogService, configRouterExtractorService, configuratorGroupsService) {
    this.launchDialogService = launchDialogService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.configuratorGroupsService = configuratorGroupsService;
    this.subscription = new Subscription();
    this.routerData$ = this.configRouterExtractorService.extractRouterData();
    this.conflictGroupAndRouterData$ = this.routerData$.pipe(
      switchMap((routerData) => this.configuratorGroupsService.getConflictGroupForImmediateConflictResolution(routerData.owner).pipe(map((conflictGroup) => ({
        conflictGroup,
        routerData
      })))),
      //Delay because we first want the form to react on data changes
      delay(0)
    );
    this.controlDialog();
  }
  controlDialog() {
    this.subscription.add(this.conflictGroupAndRouterData$.pipe(
      filter((data) => !!data.conflictGroup),
      // subscribeToCloseDialog triggers another emission of conflictGroup$ with the same conflict group and router data
      // so until we get a new navigation id in the router data, we ignore emissions of same conflict group
      distinctUntilChanged((prev, cur) => prev.conflictGroup === cur.conflictGroup && prev.routerData.navigationId === cur.routerData.navigationId)
    ).subscribe(() => {
      this.openModal();
      this.subscribeToCloseDialog();
    }));
  }
  subscribeToCloseDialog() {
    this.subscription.add(this.conflictGroupAndRouterData$.pipe(first((data) => !data.conflictGroup)).subscribe(() => this.closeModal("CLOSE_NO_CONFLICTS_EXIST")));
  }
  openModal() {
    this.launchDialogService.openDialogAndSubscribe(LAUNCH_CALLER.CONFLICT_SOLVER, void 0, {
      conflictGroup: this.conflictGroupAndRouterData$.pipe(map((data) => data.conflictGroup)),
      routerData: this.routerData$
    });
  }
  closeModal(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function ConfiguratorConflictSolverDialogLauncherService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorConflictSolverDialogLauncherService)(ɵɵinject(LaunchDialogService), ɵɵinject(ConfiguratorRouterExtractorService), ɵɵinject(ConfiguratorGroupsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorConflictSolverDialogLauncherService,
      factory: _ConfiguratorConflictSolverDialogLauncherService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorConflictSolverDialogLauncherService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: ConfiguratorGroupsService
  }], null);
})();
var ConfiguratorGroupModule = class _ConfiguratorGroupModule {
  static {
    this.ɵfac = function ConfiguratorGroupModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorGroupModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorGroupModule,
      declarations: [ConfiguratorGroupComponent],
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, NgSelectModule, ConfiguratorAttributeNotSupportedModule, ConfiguratorAttributeInputFieldModule, ConfiguratorAttributeFooterModule, ConfiguratorAttributeNumericInputFieldModule, ConfiguratorAttributeHeaderModule, ConfiguratorAttributeRadioButtonModule, ConfiguratorAttributeSingleSelectionBundleModule, ConfiguratorAttributeMultiSelectionBundleModule, ConfiguratorAttributeReadOnlyModule, ConfiguratorAttributeSingleSelectionImageModule, ConfiguratorAttributeSingleSelectionBundleDropdownModule, ConfiguratorAttributeCheckboxModule, ConfiguratorAttributeCheckboxListModule, ConfiguratorAttributeDropDownModule, ConfiguratorAttributeMultiSelectionImageModule, ConfiguratorConflictDescriptionModule, ConfiguratorConflictSuggestionModule, ConfiguratorAttributeCompositionModule],
      exports: [ConfiguratorGroupComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorForm: {
            component: ConfiguratorGroupComponent
          }
        }
      })],
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, NgSelectModule, ConfiguratorAttributeNotSupportedModule, ConfiguratorAttributeInputFieldModule, ConfiguratorAttributeFooterModule, ConfiguratorAttributeNumericInputFieldModule, ConfiguratorAttributeHeaderModule, ConfiguratorAttributeRadioButtonModule, ConfiguratorAttributeSingleSelectionBundleModule, ConfiguratorAttributeMultiSelectionBundleModule, ConfiguratorAttributeReadOnlyModule, ConfiguratorAttributeSingleSelectionImageModule, ConfiguratorAttributeSingleSelectionBundleDropdownModule, ConfiguratorAttributeCheckboxModule, ConfiguratorAttributeCheckboxListModule, ConfiguratorAttributeDropDownModule, ConfiguratorAttributeMultiSelectionImageModule, ConfiguratorConflictDescriptionModule, ConfiguratorConflictSuggestionModule, ConfiguratorAttributeCompositionModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorGroupModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, NgSelectModule, ConfiguratorAttributeNotSupportedModule, ConfiguratorAttributeInputFieldModule, ConfiguratorAttributeFooterModule, ConfiguratorAttributeNumericInputFieldModule, ConfiguratorAttributeHeaderModule, ConfiguratorAttributeRadioButtonModule, ConfiguratorAttributeSingleSelectionBundleModule, ConfiguratorAttributeMultiSelectionBundleModule, ConfiguratorAttributeReadOnlyModule, ConfiguratorAttributeSingleSelectionImageModule, ConfiguratorAttributeSingleSelectionBundleDropdownModule, ConfiguratorAttributeCheckboxModule, ConfiguratorAttributeCheckboxListModule, ConfiguratorAttributeDropDownModule, ConfiguratorAttributeMultiSelectionImageModule, ConfiguratorConflictDescriptionModule, ConfiguratorConflictSuggestionModule, ConfiguratorAttributeCompositionModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorForm: {
            component: ConfiguratorGroupComponent
          }
        }
      })],
      declarations: [ConfiguratorGroupComponent],
      exports: [ConfiguratorGroupComponent]
    }]
  }], null, null);
})();
var defaultConfiguratorConflictSolverLayoutConfig = {
  launch: {
    CONFLICT_SOLVER: {
      inlineRoot: true,
      component: ConfiguratorConflictSolverDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var ConfiguratorConflictSolverDialogModule = class _ConfiguratorConflictSolverDialogModule {
  constructor(_configuratorConflictSolverDialogLauncherService) {
  }
  static {
    this.ɵfac = function ConfiguratorConflictSolverDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorConflictSolverDialogModule)(ɵɵinject(ConfiguratorConflictSolverDialogLauncherService));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorConflictSolverDialogModule,
      declarations: [ConfiguratorConflictSolverDialogComponent],
      imports: [CommonModule, IconModule, I18nModule, ConfiguratorGroupModule, KeyboardFocusModule, FeaturesConfigModule],
      exports: [ConfiguratorConflictSolverDialogComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultConfiguratorConflictSolverLayoutConfig)],
      imports: [CommonModule, IconModule, I18nModule, ConfiguratorGroupModule, KeyboardFocusModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorConflictSolverDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, IconModule, I18nModule, ConfiguratorGroupModule, KeyboardFocusModule, FeaturesConfigModule],
      providers: [provideDefaultConfig(defaultConfiguratorConflictSolverLayoutConfig)],
      declarations: [ConfiguratorConflictSolverDialogComponent],
      exports: [ConfiguratorConflictSolverDialogComponent]
    }]
  }], () => [{
    type: ConfiguratorConflictSolverDialogLauncherService
  }], null);
})();
var ConfiguratorFormComponent = class _ConfiguratorFormComponent {
  constructor(configuratorCommonsService, configuratorGroupsService, configRouterExtractorService, configExpertModeService, launchDialogService, globalMessageService) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorGroupsService = configuratorGroupsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.configExpertModeService = configExpertModeService;
    this.launchDialogService = launchDialogService;
    this.globalMessageService = globalMessageService;
    this.subscription = new Subscription();
    this.keyboardFocusService = inject(KeyboardFocusService);
    this.routerData$ = this.configRouterExtractorService.extractRouterData();
    this.configuration$ = this.routerData$.pipe(filter((routerData) => routerData.pageType === ConfiguratorRouter.PageType.CONFIGURATION), switchMap((routerData) => {
      return this.configuratorCommonsService.getOrCreateConfiguration(routerData.owner, routerData.configIdTemplate);
    }));
    this.currentGroup$ = this.routerData$.pipe(switchMap((routerData) => this.configuratorGroupsService.getCurrentGroup(routerData.owner)));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  listenForConflictResolution() {
    this.subscription.add(this.routerData$.pipe(
      switchMap((routerData) => this.configuratorCommonsService.hasConflicts(routerData.owner)),
      distinctUntilChanged(),
      // we are interested only in status changes
      skip(1),
      // we skip the very first emission to avoid the change fron undefined -> no conflicts
      filter((hasConflicts) => !hasConflicts)
    ).subscribe(() => this.displayConflictResolvedMessage()));
  }
  displayConflictResolvedMessage() {
    this.globalMessageService.add({
      key: "configurator.header.conflictsResolved"
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
  }
  ngOnInit() {
    this.listenForConflictResolution();
    this.routerData$.pipe(switchMap((routerData) => {
      return this.configuratorCommonsService.getConfiguration(routerData.owner);
    }), take(1)).subscribe((configuration) => {
      this.configuratorCommonsService.checkConflictSolverDialog(configuration.owner);
    });
    this.routerData$.pipe(
      filter((routingData) => routingData.displayRestartDialog === true),
      switchMap((routerData) => {
        return this.configuratorCommonsService.getConfiguration(routerData.owner);
      }),
      take(1),
      filter((configuration) => configuration.interactionState.newConfiguration === false),
      delay(0)
      // Delay because we first want the form to react on data changes
    ).subscribe((configuration) => {
      this.launchDialogService.openDialogAndSubscribe(LAUNCH_CALLER.CONFIGURATOR_RESTART_DIALOG, void 0, {
        owner: configuration.owner
      });
    });
    this.routerData$.pipe(take(1)).subscribe((routingData) => {
      if (routingData.resolveIssues) {
        this.configuratorCommonsService.hasConflicts(routingData.owner).pipe(take(1)).subscribe((hasConflicts) => {
          if (hasConflicts && !routingData.skipConflicts) {
            this.configuratorGroupsService.navigateToConflictSolver(routingData.owner);
          } else {
            this.configuratorGroupsService.navigateToFirstIncompleteGroup(routingData.owner);
          }
        });
      } else {
        this.keyboardFocusService.clear();
      }
      if (routingData.expMode) {
        this.configExpertModeService?.setExpModeRequested(routingData.expMode);
      }
    });
  }
  /**
   * Verifies whether the navigation to a conflict group is enabled.
   * @param configuration Current configuration
   * @returns {boolean} Returns 'true' if the navigation to a conflict group is enabled, otherwise 'false'.
   */
  isNavigationToGroupEnabled(configuration) {
    return !configuration.immediateConflictResolution;
  }
  /**
   * Checks if conflict solver dialog is active
   * @param configuration
   * @returns Conflict solver dialog active?
   */
  isDialogActive(configuration) {
    return configuration.interactionState.showConflictSolverDialog ?? false;
  }
  static {
    this.ɵfac = function ConfiguratorFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorFormComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorGroupsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(ConfiguratorExpertModeService), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(GlobalMessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorFormComponent,
      selectors: [["cx-configurator-form"]],
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["ghostForm", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [3, "group", "owner", "isNavigationToGroupEnabled", "isPricingAsync"], [4, "ngFor", "ngForOf"], [1, "cx-ghost-attribute"], [1, "cx-ghost-header"], [1, "cx-ghost-title", "ghost"], [1, "cx-ghost-icon", "ghost"], [1, "cx-ghost-body"], [1, "cx-ghost-text", "ghost"], [1, "cx-ghost-price", "ghost"], [1, "cx-ghost-description-box"], [1, "cx-ghost-description", "ghost"], ["class", "cx-ghost-radiobutton-value", 4, "ngFor", "ngForOf"], [1, "cx-ghost-radiobutton-value"], [1, "cx-ghost-value-label-pair"], [1, "cx-ghost-value-icon", "ghost"], [1, "cx-ghost-label", "ghost"], [1, "cx-ghost-value-price", "ghost"], [1, "cx-ghost-price"]],
      template: function ConfiguratorFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorFormComponent_ng_container_0_Template, 2, 2, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ConfiguratorFormComponent_ng_template_2_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const ghostForm_r4 = ɵɵreference(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.configuration$))("ngIfElse", ghostForm_r4);
        }
      },
      dependencies: [NgForOf, NgIf, ConfiguratorGroupComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-form",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-container *ngIf="configuration$ | async as configuration; else ghostForm">\n  <ng-container *ngIf="!isDialogActive(configuration); else ghostForm">\n    <ng-container *ngIf="currentGroup$ | async as group">\n      <cx-configurator-group\n        [group]="group"\n        [owner]="configuration.owner"\n        [isNavigationToGroupEnabled]="isNavigationToGroupEnabled(configuration)"\n        [isPricingAsync]="configuration.isPricingAsync"\n      >\n      </cx-configurator-group>\n    </ng-container>\n  </ng-container>\n</ng-container>\n\n<ng-template #ghostForm>\n  <ng-container *ngFor="let number of [0, 1, 2]">\n    <div class="cx-ghost-attribute">\n      <div class="cx-ghost-header">\n        <div class="cx-ghost-title ghost"></div>\n        <div class="cx-ghost-icon ghost"></div>\n      </div>\n      <div class="cx-ghost-body">\n        <div class="cx-ghost-text ghost"></div>\n        <div class="cx-ghost-price ghost"></div>\n      </div>\n    </div>\n\n    <div class="cx-ghost-attribute">\n      <div class="cx-ghost-header">\n        <div class="cx-ghost-title ghost"></div>\n        <div class="cx-ghost-icon ghost"></div>\n        <div class="cx-ghost-description-box">\n          <div class="cx-ghost-description ghost"></div>\n        </div>\n      </div>\n      <div class="cx-ghost-body">\n        <div\n          *ngFor="let number of [0, 1, 2]; let i = index"\n          class="cx-ghost-radiobutton-value"\n        >\n          <div class="cx-ghost-value-label-pair">\n            <div class="cx-ghost-value-icon ghost"></div>\n            <div class="cx-ghost-label ghost"></div>\n          </div>\n          <div class="cx-ghost-value-price ghost">\n            <ng-container *ngIf="i !== 0">\n              <div class="cx-ghost-price"></div>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-template>\n'
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorGroupsService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: ConfiguratorExpertModeService
  }, {
    type: LaunchDialogService
  }, {
    type: GlobalMessageService
  }], null);
})();
var ConfigFormUpdateEvent = class {
};
var ConfiguratorFormModule = class _ConfiguratorFormModule {
  static {
    this.ɵfac = function ConfiguratorFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorFormModule,
      declarations: [ConfiguratorFormComponent],
      imports: [CommonModule, I18nModule, NgSelectModule, ConfiguratorGroupModule],
      exports: [ConfiguratorFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorForm: {
            component: ConfiguratorFormComponent
          }
        }
      })],
      imports: [CommonModule, I18nModule, NgSelectModule, ConfiguratorGroupModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, NgSelectModule, ConfiguratorGroupModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorForm: {
            component: ConfiguratorFormComponent
          }
        }
      })],
      declarations: [ConfiguratorFormComponent],
      exports: [ConfiguratorFormComponent]
    }]
  }], null, null);
})();
var ConfiguratorGroupMenuService = class _ConfiguratorGroupMenuService {
  constructor(windowRef) {
    this.windowRef = windowRef;
  }
  /**
   * Retrieves the focused group index.
   *
   * @param {QueryList<ElementRef<HTMLElement>>} groups - List of the groups
   * @returns {number | undefined} - focused group index
   * @protected
   */
  getFocusedGroupIndex(groups) {
    if (groups) {
      const group = groups.find((groupHTMLEl) => groupHTMLEl.nativeElement?.id === this.windowRef?.document?.activeElement?.id);
      if (group) {
        return groups.toArray().indexOf(group);
      }
    }
    return void 0;
  }
  /**
   * Updates the current group index, if the current group index is not equal focused group index.
   * Otherwise the current group index stays unchanged.
   *
   * @param {number} currentGroupIndex - Current group index
   * @param {number} focusedGroupIndex - Focused group index
   * @returns {number} - updated group index
   * @protected
   */
  updateCurrentGroupIndex(currentGroupIndex, focusedGroupIndex) {
    if (focusedGroupIndex) {
      return focusedGroupIndex !== currentGroupIndex ? focusedGroupIndex : currentGroupIndex;
    }
    return currentGroupIndex;
  }
  /**
   * Focuses the next group.
   *
   * @param {number} currentGroupIndex - Current group index
   * @param {QueryList<ElementRef<HTMLElement>>} groups - List of the groups
   * @protected
   */
  focusNextGroup(currentGroupIndex, groups) {
    const focusedGroupIndex = this.getFocusedGroupIndex(groups);
    currentGroupIndex = this.updateCurrentGroupIndex(currentGroupIndex, focusedGroupIndex);
    if (groups) {
      if (currentGroupIndex === groups.length - 1) {
        groups.first?.nativeElement?.focus();
      } else {
        groups.toArray()[currentGroupIndex + 1]?.nativeElement.focus();
      }
    }
  }
  /**
   * Focuses the previous group.
   *
   * @param {number} currentGroupIndex - Current group index
   * @param {QueryList<ElementRef<HTMLElement>>} groups - List of the groups
   * @protected
   */
  focusPreviousGroup(currentGroupIndex, groups) {
    const focusedGroupIndex = this.getFocusedGroupIndex(groups);
    currentGroupIndex = this.updateCurrentGroupIndex(currentGroupIndex, focusedGroupIndex);
    if (groups) {
      if (currentGroupIndex === 0) {
        groups.last?.nativeElement?.focus();
      } else {
        groups.toArray()[currentGroupIndex - 1]?.nativeElement?.focus();
      }
    }
  }
  /**
   * Switches the group on pressing an arrow key.
   *
   * @param {KeyboardEvent} event - keyboard event
   * @param {number} groupIndex - Group index
   * @param {QueryList<ElementRef<HTMLElement>>} groups - List of the groups
   */
  switchGroupOnArrowPress(event, groupIndex, groups) {
    event.preventDefault();
    if (event.code === "ArrowUp") {
      this.focusPreviousGroup(groupIndex, groups);
    } else if (event.code === "ArrowDown") {
      this.focusNextGroup(groupIndex, groups);
    }
  }
  /**
   * Verifies whether the first group in the group list is `Back` button.
   *
   * @param {QueryList<ElementRef<HTMLElement>>} groups - List of the groups
   * @returns {boolean} - returns `true` if the first group in the group list is `Back` button, otherwise `false`
   */
  isBackBtnFocused(groups) {
    if (groups) {
      return groups.first?.nativeElement?.classList?.value?.indexOf("cx-menu-back") !== -1 && this.windowRef?.document?.activeElement === groups.first?.nativeElement;
    }
    return void 0;
  }
  /**
   * Verifies whether the active group is part of the group list.
   *
   * @param {QueryList<ElementRef<HTMLElement>>} groups - List of the groups
   * @returns {boolean} - returns `true` if the active group is in the group list, otherwise `false`
   */
  isActiveGroupInGroupList(groups) {
    let activeGroup;
    if (groups) {
      activeGroup = groups.find((group) => group.nativeElement?.classList?.value?.indexOf("active") !== -1);
    }
    return activeGroup !== void 0;
  }
  static {
    this.ɵfac = function ConfiguratorGroupMenuService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorGroupMenuService)(ɵɵinject(WindowRef));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorGroupMenuService,
      factory: _ConfiguratorGroupMenuService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorGroupMenuService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: WindowRef
  }], null);
})();
var ConfiguratorGroupMenuComponent = class _ConfiguratorGroupMenuComponent {
  constructor(configCommonsService, configuratorGroupsService, hamburgerMenuService, configRouterExtractorService, configUtils, configGroupMenuService, directionService, translation, configExpertModeService) {
    this.configCommonsService = configCommonsService;
    this.configuratorGroupsService = configuratorGroupsService;
    this.hamburgerMenuService = hamburgerMenuService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.configUtils = configUtils;
    this.configGroupMenuService = configGroupMenuService;
    this.directionService = directionService;
    this.translation = translation;
    this.configExpertModeService = configExpertModeService;
    this.breakpointService = inject(BreakpointService);
    this.routerData$ = this.configRouterExtractorService.extractRouterData();
    this.configuration$ = this.routerData$.pipe(switchMap((routerData) => this.configCommonsService.getConfiguration(routerData.owner).pipe(
      map((configuration) => ({
        routerData,
        configuration
      })),
      //We need to ensure that the navigation to conflict groups or
      //groups with mandatory attributes already has taken place, as this happens
      //in an onInit of another component.
      //otherwise we risk that this component is completely initialized too early,
      //in dev mode resulting in ExpressionChangedAfterItHasBeenCheckedError
      filter((cont) => cont.configuration.complete && cont.configuration.consistent || cont.configuration.interactionState.issueNavigationDone || !cont.routerData.resolveIssues)
    ).pipe(map((cont) => cont.configuration))));
    this.currentGroup$ = this.routerData$.pipe(switchMap((routerData) => this.configuratorGroupsService.getCurrentGroup(routerData.owner)));
    this.displayedParentGroup$ = this.configuration$.pipe(switchMap((configuration) => this.configuratorGroupsService.getMenuParentGroup(configuration.owner)), switchMap((parentGroup) => {
      return parentGroup ? this.getCondensedParentGroup(parentGroup) : of(parentGroup);
    }));
    this.displayedGroups$ = this.displayedParentGroup$.pipe(switchMap((parentGroup) => {
      return this.configuration$.pipe(map((configuration) => {
        if (parentGroup) {
          return this.condenseGroups(parentGroup.subGroups);
        } else {
          return this.condenseGroups(configuration.groups);
        }
      }));
    }));
    this.iconTypes = ICON_TYPE;
    this.ERROR = " ERROR";
    this.COMPLETE = " COMPLETE";
    this.WARNING = " WARNING";
    this.ICON = "ICON";
    this.trackByFn = (_index, group) => {
      return group.id;
    };
  }
  /**
   * Selects group or navigates to sub-group depending on clicked group
   *
   * @param {Configurator.Group} group - Target Group
   * @param {Configurator.Group} currentGroup - Current group
   */
  click(group, currentGroup) {
    this.configuration$.pipe(take(1)).subscribe((configuration) => {
      if (configuration.interactionState.currentGroup === group.id) {
        return;
      }
      if (!this.configuratorGroupsService.hasSubGroups(group)) {
        this.configuratorGroupsService.navigateToGroup(configuration, group.id);
        this.hamburgerMenuService.toggle(true);
        this.configUtils.scrollToConfigurationElement(".VariantConfigurationTemplate, .CpqConfigurationTemplate");
      } else {
        this.configuratorGroupsService.setMenuParentGroup(configuration.owner, group.id);
        if (currentGroup) {
          this.setFocusForSubGroup(group, currentGroup.id);
        }
      }
    });
  }
  /**
   * Navigate up and set focus if current group information is provided
   *
   * @param {Configurator.Group} currentGroup - Current group
   */
  navigateUp(currentGroup) {
    this.displayedParentGroup$.pipe(take(1)).subscribe((displayedParentGroup) => {
      if (displayedParentGroup) {
        const grandParentGroup$ = this.getParentGroup(displayedParentGroup);
        this.configuration$.pipe(take(1)).subscribe((configuration) => {
          grandParentGroup$.pipe(take(1)).subscribe((grandParentGroup) => {
            this.configuratorGroupsService.setMenuParentGroup(configuration.owner, grandParentGroup ? grandParentGroup.id : void 0);
          });
        });
      }
    });
    if (currentGroup) {
      this.setFocusForMainMenu(currentGroup.id);
    }
  }
  /**
   * Retrieves the number of conflicts for the current group.
   *
   * @param {Configurator.Group} group - Current group
   * @return {string} - number of conflicts
   */
  getConflictNumber(group) {
    if (group && group.groupType === Configurator.GroupType.CONFLICT_HEADER_GROUP) {
      return "(" + group.subGroups.length + ")";
    }
    return "";
  }
  /**
   * Verifies whether the current group has subgroups.
   *
   * @param {Configurator.Group} group - Current group
   * @return {boolean} - Returns 'true' if the current group has a subgroups, otherwise 'false'.
   */
  hasSubGroups(group) {
    return this.configuratorGroupsService.hasSubGroups(group);
  }
  /**
   * Retrieves observable of parent group for a group
   * @param group
   * @returns Parent group, undefined in case input group is already on root level
   */
  getParentGroup(group) {
    return this.configuration$.pipe(map((configuration) => this.configuratorGroupsService.getParentGroup(configuration.groups, group)));
  }
  getCondensedParentGroup(parentGroup) {
    if (parentGroup && parentGroup.subGroups && parentGroup.subGroups.length === 1 && parentGroup.groupType !== Configurator.GroupType.CONFLICT_HEADER_GROUP) {
      return this.getParentGroup(parentGroup).pipe(switchMap((group) => {
        return group ? this.getCondensedParentGroup(group) : of(group);
      }));
    } else {
      return of(parentGroup);
    }
  }
  condenseGroups(groups) {
    return groups.flatMap((group) => {
      if (group.subGroups.length === 1 && group.groupType !== Configurator.GroupType.CONFLICT_HEADER_GROUP) {
        return this.condenseGroups(group.subGroups);
      } else {
        return group;
      }
    });
  }
  /**
   * Returns true if group has been visited and if the group is not a conflict group.
   *
   * @param {Configurator.Group} group - Current group
   * @param {Configurator.Configuration} configuration - Configuration
   * @return {Observable<boolean>} - true if visited and not a conflict group
   */
  isGroupVisited(group, configuration) {
    return this.configuratorGroupsService.isGroupVisited(configuration.owner, group.id).pipe(map((isVisited) => isVisited && !this.isConflictGroupType(group.groupType ?? Configurator.GroupType.ATTRIBUTE_GROUP)), take(1));
  }
  /**
   * Verifies whether the current group is conflict one.
   *
   * @param {Configurator.GroupType} groupType - Group type
   * @return {boolean} - 'True' if the current group is conflict one, otherwise 'false'.
   */
  isConflictGroupType(groupType) {
    return groupType ? this.configuratorGroupsService.isConflictGroupType(groupType) : false;
  }
  /**
   * Returns true if group is conflict header group.
   *
   * @param {Configurator.Group} group - Current group
   *  @return {boolean} - Returns 'true' if the current group is conflict header group, otherwise 'false'.
   */
  isConflictHeader(group) {
    return group && group.groupType === Configurator.GroupType.CONFLICT_HEADER_GROUP;
  }
  /**
   * Returns true if group is conflict group.
   *
   * @param {Configurator.Group} group - Current group
   *  @return {boolean} - Returns 'true' if the current group is conflict group, otherwise 'false'.
   */
  isConflictGroup(group) {
    return group && group.groupType === Configurator.GroupType.CONFLICT_GROUP;
  }
  /**
   * Returns group-status style classes dependent on completeness, conflicts, visited status and configurator type.
   *
   * @param {Configurator.Group} group - Current group
   * @param {Configurator.Configuration} configuration - Configuration
   * @return {Observable<boolean>} - true if visited and not a conflict group
   */
  getGroupStatusStyles(group, configuration) {
    return this.isGroupVisited(group, configuration).pipe(map((isVisited) => {
      const CLOUDCPQ_CONFIGURATOR_TYPE = "CLOUDCPQCONFIGURATOR";
      let groupStatusStyle = "cx-menu-item";
      if (configuration.owner.configuratorType !== CLOUDCPQ_CONFIGURATOR_TYPE && !group.consistent) {
        groupStatusStyle = groupStatusStyle + this.WARNING;
      }
      if (configuration.owner.configuratorType !== CLOUDCPQ_CONFIGURATOR_TYPE && group.complete && group.consistent && isVisited) {
        groupStatusStyle = groupStatusStyle + this.COMPLETE;
      }
      if (!group.complete && isVisited) {
        groupStatusStyle = groupStatusStyle + this.ERROR;
      }
      return groupStatusStyle;
    }));
  }
  isLTRDirection() {
    return this.directionService.getDirection() === DirectionMode.LTR;
  }
  isRTLDirection() {
    return this.directionService.getDirection() === DirectionMode.RTL;
  }
  /**
   * Verifies whether the user navigates into a subgroup of the main group menu.
   *
   * @param {KeyboardEvent} event - Keyboard event
   * @returns {boolean} -'true' if the user navigates into the subgroup, otherwise 'false'.
   * @protected
   */
  isForwardsNavigation(event) {
    return event.code === "ArrowRight" && this.isLTRDirection() || event.code === "ArrowLeft" && this.isRTLDirection();
  }
  /**
   * Verifies whether the user navigates from a subgroup back to the main group menu.
   *
   * @param {KeyboardEvent} event - Keyboard event
   * @returns {boolean} -'true' if the user navigates back into the main group menu, otherwise 'false'.
   * @protected
   */
  isBackNavigation(event) {
    return event.code === "ArrowLeft" && this.isLTRDirection() || event.code === "ArrowRight" && this.isRTLDirection();
  }
  /**
   * Switches the group on pressing an arrow key.
   *
   * @param {KeyboardEvent} event - Keyboard event
   * @param {string} groupIndex - Group index
   * @param {Configurator.Group} targetGroup - Target group
   * @param {Configurator.Group} currentGroup - Current group
   */
  switchGroupOnArrowPress(event, groupIndex, targetGroup, currentGroup) {
    this.handleFocusLoopInMobileMode(event);
    if (event.code === "ArrowUp" || event.code === "ArrowDown") {
      this.configGroupMenuService.switchGroupOnArrowPress(event, groupIndex, this.groups);
    } else if (this.isForwardsNavigation(event)) {
      if (targetGroup && this.hasSubGroups(targetGroup)) {
        this.click(targetGroup, currentGroup);
      }
    } else if (this.isBackNavigation(event)) {
      if (this.configGroupMenuService.isBackBtnFocused(this.groups)) {
        this.navigateUp(currentGroup);
      }
    }
  }
  /**
   * In mobile mode the focus should be set to the first element of the menu ('X') if tab is pressed on the active group menu item.
   * If the focus is currently on the back-button it needs to be checked if the active group is currently in the list of displayed groups.
   * Only if the active group is not in the list of displayed groups, the focus should be set to the first element of the menu ('X') otherwise
   * the focus is set to the active group menu item.
   *
   * @param {KeyboardEvent} event - Keyboard event
   */
  handleFocusLoopInMobileMode(event) {
    this.breakpointService.isDown(BREAKPOINT.md).pipe(take(1)).subscribe((isMobile) => {
      if (isMobile && event.code === "Tab" && !event.shiftKey) {
        if (this.configGroupMenuService.isBackBtnFocused(this.groups)) {
          if (!this.configGroupMenuService.isActiveGroupInGroupList(this.groups)) {
            event.preventDefault();
            this.configUtils.focusFirstActiveElement("cx-hamburger-menu");
          }
        } else {
          event.preventDefault();
          this.configUtils.focusFirstActiveElement("cx-hamburger-menu");
        }
      }
    });
  }
  /**
   * Persists the keyboard focus state for the given key
   * from the main group menu by back navigation.
   *
   * @param {string} currentGroupId - Current group ID
   */
  setFocusForMainMenu(currentGroupId) {
    let key = currentGroupId;
    this.configuration$.pipe(take(1)).subscribe((configuration) => {
      configuration.groups?.forEach((group) => {
        if (group.subGroups?.length !== 1 && (this.isGroupSelected(group.id, currentGroupId) || this.containsSelectedGroup(group, currentGroupId))) {
          key = group.id;
        }
      });
    });
    this.configUtils.setFocus(key);
  }
  /**
   * Persists the keyboard focus state for the given key
   * from the subgroup menu by forwards navigation.
   *
   * @param {Configurator.Group} group - Group
   * @param {string} currentGroupId - Current group ID
   */
  setFocusForSubGroup(group, currentGroupId) {
    let key = "cx-menu-back";
    if (this.containsSelectedGroup(group, currentGroupId)) {
      key = currentGroupId;
    }
    this.configUtils.setFocus(key);
  }
  /**
   * Verifies whether the parent group contains a selected group.
   *
   * @param {Configurator.Group} group - Group
   * @param {string} currentGroupId - Current group ID
   * @returns {boolean} - 'true' if the parent group contains a selected group, otherwise 'false'
   */
  containsSelectedGroup(group, currentGroupId) {
    return !!group.subGroups?.find((subGroup) => this.isGroupSelected(subGroup.id, currentGroupId) || this.containsSelectedGroup(subGroup, currentGroupId));
  }
  /**
   * Retrieves the tab index depending on if the the current group is selected
   * or the parent group contains the selected group.
   *
   * @param {Configurator.Group} group - Group
   * @param {string} currentGroupId - Current group ID
   * @returns {number} - tab index
   */
  getTabIndex(group, currentGroupId) {
    const isCurrentGroupPartOfGroupHierarchy = this.isGroupSelected(group.id, currentGroupId) || this.containsSelectedGroup(group, currentGroupId);
    return isCurrentGroupPartOfGroupHierarchy ? 0 : -1;
  }
  /**
   * Verifies whether the current group is selected.
   *
   * @param {string} groupId - group ID
   * @param {string} currentGroupId - Current group ID
   * @returns {boolean} - 'true' if the current group is selected, otherwise 'false'
   */
  isGroupSelected(groupId, currentGroupId) {
    return groupId === currentGroupId;
  }
  /**
   * Generates a group ID for aria-controls.
   *
   * @param {string} groupId - group ID
   * @returns {string | undefined} - generated group ID
   */
  createAriaControls(groupId) {
    return this.configUtils.createGroupId(groupId);
  }
  /**
   * Generates aria-label for group menu item
   *
   * @param {Configurator.Group} group - group
   * @returns {string | undefined} - generated group ID
   */
  getAriaLabel(group) {
    let translatedText = "";
    if (group && group.groupType && this.isConflictGroupType(group.groupType)) {
      if (this.isConflictHeader(group)) {
        this.translation.translate("configurator.a11y.conflictsInConfiguration", {
          numberOfConflicts: this.getConflictNumber(group)
        }).pipe(take(1)).subscribe((text) => translatedText = text);
      } else {
        translatedText = group.description ? group.description : "";
      }
    } else {
      this.translation.translate("configurator.a11y.groupName", {
        group: group.description
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    }
    return translatedText;
  }
  /**
   * Generates an id for icons.
   *
   * @param {ICON_TYPE} type - icon type
   * @param {string} groupId - group id
   * @returns {string | undefined} - generated icon id
   */
  createIconId(type, groupId) {
    return this.ICON + type + groupId;
  }
  /**
   * Generates aria-describedby
   *
   * @param {Configurator.Group} group - Current group
   * @param {Configurator.Configuration} configuration - Configuration
   * @return {Observable<string>} - aria-describedby
   */
  getAriaDescribedby(group, configuration) {
    return this.isGroupVisited(group, configuration).pipe(map((isVisited) => {
      const CLOUDCPQ_CONFIGURATOR_TYPE = "CLOUDCPQCONFIGURATOR";
      let ariaDescribedby = "";
      if (configuration.owner.configuratorType !== CLOUDCPQ_CONFIGURATOR_TYPE && !group.consistent && group.groupType && !this.isConflictGroupType(group.groupType)) {
        ariaDescribedby = ariaDescribedby + this.createIconId(ICON_TYPE.WARNING, group.id);
      }
      if (configuration.owner.configuratorType !== CLOUDCPQ_CONFIGURATOR_TYPE && group.complete && group.consistent && isVisited) {
        ariaDescribedby = ariaDescribedby + " " + this.createIconId(ICON_TYPE.SUCCESS, group.id);
      }
      if (!group.complete && isVisited) {
        ariaDescribedby = ariaDescribedby + " " + this.createIconId(ICON_TYPE.ERROR, group.id);
      }
      if (this.hasSubGroups(group)) {
        ariaDescribedby = ariaDescribedby + " " + this.createIconId(ICON_TYPE.CARET_RIGHT, group.id);
      }
      ariaDescribedby = ariaDescribedby + " inListOfGroups";
      return ariaDescribedby;
    }));
  }
  getGroupMenuTitle(group) {
    let title = group.description;
    if (!this.isConflictHeader(group) && !this.isConflictGroup(group)) {
      this.configExpertModeService.getExpModeActive().pipe(take(1)).subscribe((expMode) => {
        if (expMode) {
          title += ` / [${group.name}]`;
        }
      });
    }
    return title;
  }
  displayMenuItem(group) {
    return this.configuration$.pipe(map((configuration) => {
      let displayMenuItem = true;
      if (configuration.immediateConflictResolution && group.groupType === Configurator.GroupType.CONFLICT_HEADER_GROUP) {
        displayMenuItem = false;
      }
      return displayMenuItem;
    }));
  }
  /**
   * Checks if conflict solver dialog is active
   * @param configuration
   * @returns Conflict solver dialog active?
   */
  isDialogActive(configuration) {
    return configuration.interactionState.showConflictSolverDialog ?? false;
  }
  static {
    this.ɵfac = function ConfiguratorGroupMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorGroupMenuComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorGroupsService), ɵɵdirectiveInject(HamburgerMenuService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService), ɵɵdirectiveInject(ConfiguratorGroupMenuService), ɵɵdirectiveInject(DirectionService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ConfiguratorExpertModeService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorGroupMenuComponent,
      selectors: [["cx-configurator-group-menu"]],
      viewQuery: function ConfiguratorGroupMenuComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c17, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groups = _t);
        }
      },
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["ghostGroups", ""], ["groupItem", ""], [4, "ngIf", "ngIfElse"], ["role", "tablist", 1, "cx-group-menu"], ["id", "listOfGroups", 1, "cx-visually-hidden"], ["id", "inListOfGroups", "aria-hidden", "true", 1, "cx-visually-hidden"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cx-menu-back", "role", "tab", "aria-describedby", "listOfGroups", 3, "cxFocus", "click", "keydown", 4, "ngIf"], ["role", "tab", "aria-describedby", "listOfGroups", 1, "cx-menu-back", 3, "click", "keydown", "cxFocus"], [3, "type"], ["role", "tab", 3, "click", "keydown", "id", "ngClass", "cxFocus", "tabindex"], [3, "title"], [1, "groupIndicators"], [1, "conflictNumberIndicator"], [1, "groupStatusIndicator"], [1, "WARNING", 3, "type", "id", "title"], [1, "ERROR", 3, "type", "id", "title"], [1, "COMPLETE", 3, "type", "id", "title"], [1, "subGroupIndicator"], [3, "type", "id", "title", 4, "ngIf"], [3, "type", "id", "title"], [1, "cx-ghost-group-menu"], ["class", "cx-ghost-menu-item", 4, "ngFor", "ngForOf"], [1, "cx-ghost-menu-item"], [1, "cx-ghost-item-title", "ghost"]],
      template: function ConfiguratorGroupMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorGroupMenuComponent_ng_container_0_Template, 2, 2, "ng-container", 2);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ConfiguratorGroupMenuComponent_ng_template_2_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const ghostGroups_r11 = ɵɵreference(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.configuration$))("ngIfElse", ghostGroups_r11);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, IconComponent, FocusDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorGroupMenuComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-group-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="configuration$ | async as configuration; else ghostGroups">
  <ng-container *ngIf="!isDialogActive(configuration); else ghostGroups">
    <div class="cx-group-menu" role="tablist">
      <span id="listOfGroups" class="cx-visually-hidden">
        {{ 'configurator.a11y.listOfGroups' | cxTranslate }}
      </span>
      <span id="inListOfGroups" class="cx-visually-hidden" aria-hidden="true">
        {{ 'configurator.a11y.inListOfGroups' | cxTranslate }}
      </span>
      <ng-container *ngIf="displayedGroups$ | async as groups">
        <ng-container *ngIf="currentGroup$ | async as currentGroup">
          <ng-container
            *ngFor="
              let group of groups;
              let groupIndex = index;
              trackBy: trackByFn
            "
          >
            <ng-container *ngIf="displayedParentGroup$ | async as parentGroup">
              <button
                *ngIf="parentGroup !== null && groupIndex === 0"
                #groupItem
                class="cx-menu-back"
                role="tab"
                [attr.aria-selected]="false"
                [attr.aria-label]="
                  isConflictGroupType(parentGroup.groupType)
                    ? ('configurator.a11y.conflictBack' | cxTranslate)
                    : ('configurator.a11y.groupBack' | cxTranslate)
                "
                aria-describedby="listOfGroups"
                [cxFocus]="{ key: 'cx-menu-back' }"
                (click)="navigateUp(currentGroup)"
                (keydown)="
                  switchGroupOnArrowPress(
                    $event,
                    groupIndex,
                    group,
                    currentGroup
                  )
                "
              >
                <cx-icon [type]="iconTypes.CARET_LEFT"></cx-icon>
                {{ 'configurator.button.back' | cxTranslate }}
              </button>
            </ng-container>
            <ng-container *ngIf="displayMenuItem(group) | async">
              <button
                #groupItem
                id="{{ group.id }}"
                ngClass="{{
                  getGroupStatusStyles(group, configuration) | async
                }}"
                role="tab"
                [class.DISABLED]="!group.configurable"
                [class.cx-menu-conflict]="isConflictGroupType(group.groupType)"
                [class.active]="isGroupSelected(group.id, currentGroup.id)"
                [class.disable]="!group.configurable"
                [attr.aria-describedby]="
                  getAriaDescribedby(group, configuration) | async
                "
                [attr.aria-selected]="
                  isGroupSelected(group.id, currentGroup.id)
                "
                [attr.aria-controls]="
                  isGroupSelected(group.id, currentGroup.id)
                    ? createAriaControls(group.id)
                    : null
                "
                [attr.aria-label]="getAriaLabel(group)"
                [cxFocus]="{
                  key: group.id,
                }"
                (click)="click(group, currentGroup)"
                [tabindex]="getTabIndex(group, currentGroup.id)"
                (keydown)="
                  switchGroupOnArrowPress(
                    $event,
                    groupIndex,
                    group,
                    currentGroup
                  )
                "
              >
                <span title="{{ group.description }}">{{
                  getGroupMenuTitle(group)
                }}</span>
                <div class="groupIndicators">
                  <div class="conflictNumberIndicator">
                    {{ getConflictNumber(group) }}
                  </div>
                  <div class="groupStatusIndicator">
                    <cx-icon
                      class="WARNING"
                      [type]="iconTypes.WARNING"
                      id="{{ createIconId(iconTypes.WARNING, group.id) }}"
                      [attr.aria-label]="
                        'configurator.a11y.iconConflict' | cxTranslate
                      "
                      title="{{
                        'configurator.icon.groupConflict' | cxTranslate
                      }}"
                    ></cx-icon>
                  </div>
                  <div class="groupStatusIndicator">
                    <cx-icon
                      class="ERROR"
                      [type]="iconTypes.ERROR"
                      id="{{ createIconId(iconTypes.ERROR, group.id) }}"
                      [attr.aria-label]="
                        'configurator.a11y.iconIncomplete' | cxTranslate
                      "
                      title="{{
                        'configurator.icon.groupIncomplete' | cxTranslate
                      }}"
                    ></cx-icon>
                    <cx-icon
                      class="COMPLETE"
                      [type]="iconTypes.SUCCESS"
                      id="{{ createIconId(iconTypes.SUCCESS, group.id) }}"
                      [attr.aria-label]="
                        'configurator.a11y.iconComplete' | cxTranslate
                      "
                      title="{{
                        'configurator.icon.groupComplete' | cxTranslate
                      }}"
                    ></cx-icon>
                  </div>
                  <div class="subGroupIndicator">
                    <cx-icon
                      *ngIf="hasSubGroups(group)"
                      [type]="iconTypes.CARET_RIGHT"
                      id="{{ createIconId(iconTypes.CARET_RIGHT, group.id) }}"
                      [attr.aria-label]="
                        'configurator.a11y.iconSubGroup' | cxTranslate
                      "
                      title="{{ 'configurator.icon.subgroup' | cxTranslate }}"
                    ></cx-icon>
                  </div>
                </div>
              </button>
            </ng-container>
          </ng-container>
        </ng-container>
      </ng-container>
    </div> </ng-container
></ng-container>
<ng-template #ghostGroups>
  <div class="cx-ghost-group-menu">
    <div
      *ngFor="let number of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"
      class="cx-ghost-menu-item"
    >
      <div class="cx-ghost-item-title ghost"></div>
    </div>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorGroupsService
  }, {
    type: HamburgerMenuService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }, {
    type: ConfiguratorGroupMenuService
  }, {
    type: DirectionService
  }, {
    type: TranslationService
  }, {
    type: ConfiguratorExpertModeService
  }], {
    groups: [{
      type: ViewChildren,
      args: ["groupItem"]
    }]
  });
})();
var ConfiguratorGroupMenuModule = class _ConfiguratorGroupMenuModule {
  static {
    this.ɵfac = function ConfiguratorGroupMenuModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorGroupMenuModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorGroupMenuModule,
      declarations: [ConfiguratorGroupMenuComponent],
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule],
      exports: [ConfiguratorGroupMenuComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorMenu: {
            component: ConfiguratorGroupMenuComponent
          }
        }
      })],
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorGroupMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorMenu: {
            component: ConfiguratorGroupMenuComponent
          }
        }
      })],
      declarations: [ConfiguratorGroupMenuComponent],
      exports: [ConfiguratorGroupMenuComponent]
    }]
  }], null, null);
})();
var ConfiguratorGroupTitleComponent = class _ConfiguratorGroupTitleComponent {
  constructor(configuratorCommonsService, configuratorGroupsService, configRouterExtractorService, configExpertModeService, breakpointService, configuratorStorefrontUtilsService, hamburgerMenuService) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorGroupsService = configuratorGroupsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.configExpertModeService = configExpertModeService;
    this.breakpointService = breakpointService;
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.hamburgerMenuService = hamburgerMenuService;
    this.ghostStyle = true;
    this.subscription = new Subscription();
    this.PRE_HEADER = ".PreHeader";
    this.ADD_TO_CART_BUTTON = "cx-configurator-add-to-cart-button";
    this.focusFirstElementInMobileGroupList = false;
    this.displayedGroup$ = this.configRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => this.configuratorGroupsService.getCurrentGroup(routerData.owner).pipe(tap(() => {
      this.ghostStyle = false;
    }))));
    this.iconTypes = ICON_TYPE;
  }
  ngOnInit() {
    this.subscription.add(this.hamburgerMenuService.isExpanded.subscribe((isExpanded) => {
      if (!isExpanded) {
        this.configuratorStorefrontUtilsService.changeStyling(this.PRE_HEADER, "display", "none");
        this.configuratorStorefrontUtilsService.changeStyling(this.ADD_TO_CART_BUTTON, "z-index", "calc(var(--cx-popover-z-index) + 10)");
        this.configuratorStorefrontUtilsService.focusFirstActiveElement(".cx-group-title");
      } else {
        this.configuratorStorefrontUtilsService.changeStyling(this.PRE_HEADER, "display", "block");
        this.configuratorStorefrontUtilsService.changeStyling(this.ADD_TO_CART_BUTTON, "z-index", "0");
        this.focusFirstElementInMobileGroupList = true;
      }
    }));
  }
  ngAfterContentChecked() {
    if (this.focusFirstElementInMobileGroupList) {
      this.configuratorStorefrontUtilsService.focusFirstActiveElement("cx-configurator-group-menu");
      this.focusFirstElementInMobileGroupList = false;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.configuratorStorefrontUtilsService.removeStyling(this.PRE_HEADER, "display");
  }
  getGroupTitle(group) {
    let title = group.description;
    if (group.groupType !== Configurator.GroupType.CONFLICT_GROUP) {
      this.configExpertModeService.getExpModeActive().pipe(take(1)).subscribe((expMode) => {
        if (expMode) {
          title += ` / [${group.name}]`;
        }
      });
    }
    return title;
  }
  /**
   * Verifies whether the current screen size equals or is smaller than breakpoint `BREAKPOINT.md`.
   *
   * @returns {Observable<boolean>} - If the given breakpoint equals or is smaller than`BREAKPOINT.md` returns `true`, otherwise `false`.
   */
  isMobile() {
    return this.breakpointService.isDown(BREAKPOINT.md);
  }
  static {
    this.ɵfac = function ConfiguratorGroupTitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorGroupTitleComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorGroupsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(ConfiguratorExpertModeService), ɵɵdirectiveInject(BreakpointService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService), ɵɵdirectiveInject(HamburgerMenuService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorGroupTitleComponent,
      selectors: [["cx-configurator-group-title"]],
      hostVars: 2,
      hostBindings: function ConfiguratorGroupTitleComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ghost", ctx.ghostStyle);
        }
      },
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["ghostGroup", ""], [4, "ngIf", "ngIfElse"], ["role", "heading", "aria-level", "2", 1, "cx-group-title"], [4, "ngIf"], [1, "cx-ghost-group-title"]],
      template: function ConfiguratorGroupTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorGroupTitleComponent_ng_container_0_Template, 5, 4, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ConfiguratorGroupTitleComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const ghostGroup_r3 = ɵɵreference(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.displayedGroup$))("ngIfElse", ghostGroup_r3);
        }
      },
      dependencies: [NgIf, HamburgerMenuComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorGroupTitleComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-group-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-container *ngIf="displayedGroup$ | async as group; else ghostGroup">\n  <div role="heading" aria-level="2" class="cx-group-title">\n    <ng-container *ngIf="isMobile() | async">\n      <cx-hamburger-menu></cx-hamburger-menu>\n    </ng-container>\n\n    {{ getGroupTitle(group) }}\n  </div>\n</ng-container>\n<ng-template #ghostGroup>\n  <div class="cx-ghost-group-title"></div>\n</ng-template>\n'
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorGroupsService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: ConfiguratorExpertModeService
  }, {
    type: BreakpointService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }, {
    type: HamburgerMenuService
  }], {
    ghostStyle: [{
      type: HostBinding,
      args: ["class.ghost"]
    }]
  });
})();
var ConfiguratorGroupTitleModule = class _ConfiguratorGroupTitleModule {
  static {
    this.ɵfac = function ConfiguratorGroupTitleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorGroupTitleModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorGroupTitleModule,
      declarations: [ConfiguratorGroupTitleComponent],
      imports: [CommonModule, HamburgerMenuModule],
      exports: [ConfiguratorGroupTitleComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorGroupTitle: {
            component: ConfiguratorGroupTitleComponent
          }
        }
      })],
      imports: [CommonModule, HamburgerMenuModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorGroupTitleModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, HamburgerMenuModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorGroupTitle: {
            component: ConfiguratorGroupTitleComponent
          }
        }
      })],
      declarations: [ConfiguratorGroupTitleComponent],
      exports: [ConfiguratorGroupTitleComponent]
    }]
  }], null, null);
})();
var ConfiguratorOverviewAttributeComponent = class _ConfiguratorOverviewAttributeComponent {
  constructor(breakpointService) {
    this.breakpointService = breakpointService;
  }
  extractPriceFormulaParameters() {
    return {
      quantity: this.attributeOverview.quantity,
      price: this.attributeOverview.valuePrice,
      priceTotal: this.attributeOverview.valuePriceTotal,
      isLightedUp: true
    };
  }
  /**
   * Verifies whether the current screen size equals or is larger than breakpoint `BREAKPOINT.md`.
   *
   * @returns {Observable<boolean>} - If the given breakpoint equals or is larger than`BREAKPOINT.md` returns `true`, otherwise `false`.
   */
  isDesktop() {
    return this.breakpointService.isUp(BREAKPOINT.md);
  }
  static {
    this.ɵfac = function ConfiguratorOverviewAttributeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewAttributeComponent)(ɵɵdirectiveInject(BreakpointService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorOverviewAttributeComponent,
      selectors: [["cx-configurator-overview-attribute"]],
      inputs: {
        attributeOverview: "attributeOverview"
      },
      standalone: false,
      decls: 11,
      vars: 26,
      consts: [["mobile", ""], [1, "cx-visually-hidden"], ["aria-hidden", "true", 1, "cx-attribute-value"], [4, "ngIf", "ngIfElse"], ["aria-hidden", "true", 1, "cx-attribute-label"], ["aria-hidden", "true", 1, "cx-attribute-price"], [3, "formula"]],
      template: function ConfiguratorOverviewAttributeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "span", 1);
          ɵɵtext(1);
          ɵɵpipe(2, "cxTranslate");
          ɵɵpipe(3, "cxTranslate");
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "div", 2);
          ɵɵtext(6);
          ɵɵelementEnd();
          ɵɵtemplate(7, ConfiguratorOverviewAttributeComponent_ng_container_7_Template, 5, 2, "ng-container", 3);
          ɵɵpipe(8, "async");
          ɵɵtemplate(9, ConfiguratorOverviewAttributeComponent_ng_template_9_Template, 4, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const mobile_r2 = ɵɵreference(10);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.attributeOverview.valuePrice && (ctx.attributeOverview.valuePrice == null ? null : ctx.attributeOverview.valuePrice.value) !== 0 ? ctx.attributeOverview.valuePriceTotal && (ctx.attributeOverview.valuePriceTotal == null ? null : ctx.attributeOverview.valuePriceTotal.value) !== 0 ? ɵɵpipeBind2(2, 4, "configurator.a11y.valueOfAttributeFullWithPrice", ɵɵpureFunction3(15, _c10, ctx.attributeOverview.value, ctx.attributeOverview.attribute, ctx.attributeOverview.valuePriceTotal.formattedValue)) : ɵɵpipeBind2(3, 7, "configurator.a11y.valueOfAttributeFullWithPrice", ɵɵpureFunction3(19, _c10, ctx.attributeOverview.value, ctx.attributeOverview.attribute, ctx.attributeOverview.valuePrice.formattedValue)) : ɵɵpipeBind2(4, 10, "configurator.a11y.valueOfAttributeFull", ɵɵpureFunction2(23, _c5, ctx.attributeOverview.value, ctx.attributeOverview.attribute)), "\n");
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ctx.attributeOverview.value, "\n");
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(8, 13, ctx.isDesktop()))("ngIfElse", mobile_r2);
        }
      },
      dependencies: [NgIf, ConfiguratorPriceComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewAttributeComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-overview-attribute",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<span class="cx-visually-hidden">
  {{
    attributeOverview.valuePrice && attributeOverview.valuePrice?.value !== 0
      ? attributeOverview.valuePriceTotal &&
        attributeOverview.valuePriceTotal?.value !== 0
        ? ('configurator.a11y.valueOfAttributeFullWithPrice'
          | cxTranslate
            : {
                value: attributeOverview.value,
                attribute: attributeOverview.attribute,
                price: attributeOverview.valuePriceTotal.formattedValue,
              })
        : ('configurator.a11y.valueOfAttributeFullWithPrice'
          | cxTranslate
            : {
                value: attributeOverview.value,
                attribute: attributeOverview.attribute,
                price: attributeOverview.valuePrice.formattedValue,
              })
      : ('configurator.a11y.valueOfAttributeFull'
        | cxTranslate
          : {
              value: attributeOverview.value,
              attribute: attributeOverview.attribute,
            })
  }}
</span>
<div class="cx-attribute-value" aria-hidden="true">
  {{ attributeOverview.value }}
</div>
<ng-container *ngIf="isDesktop() | async; else mobile">
  <div class="cx-attribute-label" aria-hidden="true">
    {{ attributeOverview.attribute }}
  </div>
  <div class="cx-attribute-price" aria-hidden="true">
    <cx-configurator-price
      [formula]="extractPriceFormulaParameters()"
    ></cx-configurator-price>
  </div>
</ng-container>
<ng-template #mobile>
  <div class="cx-attribute-price" aria-hidden="true">
    <cx-configurator-price
      [formula]="extractPriceFormulaParameters()"
    ></cx-configurator-price>
  </div>
  <div class="cx-attribute-label" aria-hidden="true">
    {{ attributeOverview.attribute }}
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: BreakpointService
  }], {
    attributeOverview: [{
      type: Input
    }]
  });
})();
var ConfiguratorOverviewAttributeModule = class _ConfiguratorOverviewAttributeModule {
  static {
    this.ɵfac = function ConfiguratorOverviewAttributeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewAttributeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorOverviewAttributeModule,
      declarations: [ConfiguratorOverviewAttributeComponent],
      imports: [CommonModule, I18nModule, ConfiguratorPriceModule],
      exports: [ConfiguratorOverviewAttributeComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, ConfiguratorPriceModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewAttributeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, ConfiguratorPriceModule],
      declarations: [ConfiguratorOverviewAttributeComponent],
      exports: [ConfiguratorOverviewAttributeComponent]
    }]
  }], null, null);
})();
var ConfiguratorOverviewBundleAttributeComponent = class _ConfiguratorOverviewBundleAttributeComponent {
  constructor(productService, translation) {
    this.productService = productService;
    this.translation = translation;
  }
  ngOnInit() {
    const noCommerceProduct = {
      images: {}
    };
    if (this.attributeOverview.productCode) {
      this.product$ = this.productService.get(this.attributeOverview.productCode, ProductScope.LIST).pipe(map((respProduct) => {
        return respProduct ? respProduct : noCommerceProduct;
      }));
    } else {
      this.product$ = of(noCommerceProduct);
    }
  }
  /**
   * Returns primary image from product object
   *
   * @param {Product} product
   * @returns {(ImageGroup | ImageGroup[] | undefined)} - primary image. View can handle an undefined image
   */
  getProductPrimaryImage(product) {
    return product?.images?.PRIMARY;
  }
  /**
   * Extract corresponding price formula parameters
   *
   * @return {ConfiguratorPriceComponentOptions} - New price formula
   */
  extractPriceFormulaParameters() {
    return {
      quantity: this.attributeOverview.quantity,
      price: this.attributeOverview.valuePrice,
      priceTotal: this.attributeOverview.valuePriceTotal,
      isLightedUp: true
    };
  }
  /**
   * Verifies whether the quantity should be displayed.
   *
   * @return {boolean} - 'true' if the quantity should be displayed, otherwise 'false'
   */
  displayQuantity() {
    const quantity = this.attributeOverview.quantity;
    return quantity !== void 0 && quantity > 0;
  }
  /**
   * Verifies whether the item price should be displayed.
   *
   * @return {boolean} - 'true' if the item price price should be displayed, otherwise 'false'
   */
  displayPrice() {
    return this.attributeOverview.valuePrice?.value !== void 0 && this.attributeOverview.valuePrice?.value > 0;
  }
  getAriaLabel() {
    let translatedText = "";
    if (this.displayQuantity()) {
      if (this.attributeOverview.valuePrice?.value !== void 0 && this.attributeOverview.valuePrice?.value !== 0) {
        this.translation.translate("configurator.a11y.itemOfAttributeFullWithPriceAndQuantity", {
          item: this.attributeOverview.value,
          attribute: this.attributeOverview.attribute,
          price: this.attributeOverview.valuePriceTotal?.formattedValue,
          quantity: this.attributeOverview.quantity
        }).pipe(take(1)).subscribe((text) => translatedText = text);
      } else {
        this.translation.translate("configurator.a11y.itemOfAttributeFullWithQuantity", {
          item: this.attributeOverview.value,
          attribute: this.attributeOverview.attribute,
          quantity: this.attributeOverview.quantity
        }).pipe(take(1)).subscribe((text) => translatedText = text);
      }
    } else {
      if (this.attributeOverview.valuePrice?.value !== void 0 && this.attributeOverview.valuePrice?.value !== 0) {
        this.translation.translate("configurator.a11y.itemOfAttributeFullWithPrice", {
          item: this.attributeOverview.value,
          attribute: this.attributeOverview.attribute,
          price: this.attributeOverview.valuePriceTotal?.formattedValue
        }).pipe(take(1)).subscribe((text) => translatedText = text);
      } else {
        this.translation.translate("configurator.a11y.itemOfAttributeFull", {
          item: this.attributeOverview.value,
          attribute: this.attributeOverview.attribute
        }).pipe(take(1)).subscribe((text) => translatedText = text);
      }
    }
    return translatedText;
  }
  static {
    this.ɵfac = function ConfiguratorOverviewBundleAttributeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewBundleAttributeComponent)(ɵɵdirectiveInject(ProductService), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorOverviewBundleAttributeComponent,
      selectors: [["cx-configurator-cpq-overview-attribute"]],
      inputs: {
        attributeOverview: "attributeOverview"
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-value-container"], [1, "cx-thumbnail"], ["format", "product", "aria-hidden", "true", 3, "container"], [1, "cx-visually-hidden"], ["aria-hidden", "true", 1, "cx-value-info"], ["class", "cx-code", 4, "ngIf"], ["class", "cx-quantity", 4, "ngIf"], ["class", "cx-price", 4, "ngIf"], ["aria-hidden", "true", 1, "cx-attribute-price-container"], [1, "cx-attribute-label"], [3, "formula"], [1, "cx-code"], [1, "cx-quantity"], [1, "cx-identifier"], [1, "cx-item"], [1, "cx-price"]],
      template: function ConfiguratorOverviewBundleAttributeComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorOverviewBundleAttributeComponent_ng_container_0_Template, 16, 8, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.product$));
        }
      },
      dependencies: [NgIf, MediaComponent, ConfiguratorPriceComponent, AsyncPipe, TranslatePipe, CxNumericPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewBundleAttributeComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-cpq-overview-attribute",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="product$ | async as product">
  <div class="cx-value-container">
    <div class="cx-thumbnail">
      <cx-media
        [container]="getProductPrimaryImage(product)"
        format="product"
        aria-hidden="true"
      ></cx-media>
    </div>
    <span class="cx-visually-hidden">
      {{ getAriaLabel() }}
    </span>
    <div class="cx-value-info" aria-hidden="true">
      <div>
        {{ attributeOverview.value }}
      </div>
      <span class="cx-code" *ngIf="attributeOverview?.productCode">
        {{ 'configurator.attribute.id' | cxTranslate }}:
        {{ attributeOverview.productCode }}</span
      >
      <div *ngIf="displayQuantity()" class="cx-quantity">
        <span class="cx-identifier">{{
          'configurator.attribute.quantity' | cxTranslate
        }}</span>
        <span class="cx-item">{{
          attributeOverview.quantity | cxNumeric
        }}</span>
      </div>
      <div *ngIf="displayPrice()" class="cx-price">
        <span class="cx-identifier">{{
          'configurator.overviewForm.itemPrice' | cxTranslate
        }}</span>
        <span class="cx-item">{{
          attributeOverview.valuePrice?.formattedValue
        }}</span>
      </div>
    </div>
  </div>

  <div class="cx-attribute-price-container" aria-hidden="true">
    <span class="cx-attribute-label">{{ attributeOverview.attribute }}</span>
    <cx-configurator-price
      [formula]="extractPriceFormulaParameters()"
    ></cx-configurator-price>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ProductService
  }, {
    type: TranslationService
  }], {
    attributeOverview: [{
      type: Input
    }]
  });
})();
var ConfiguratorOverviewBundleAttributeModule = class _ConfiguratorOverviewBundleAttributeModule {
  static {
    this.ɵfac = function ConfiguratorOverviewBundleAttributeModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewBundleAttributeModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorOverviewBundleAttributeModule,
      declarations: [ConfiguratorOverviewBundleAttributeComponent],
      imports: [CommonModule, MediaModule, I18nModule, ConfiguratorPriceModule],
      exports: [ConfiguratorOverviewBundleAttributeComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, MediaModule, I18nModule, ConfiguratorPriceModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewBundleAttributeModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, MediaModule, I18nModule, ConfiguratorPriceModule],
      declarations: [ConfiguratorOverviewBundleAttributeComponent],
      exports: [ConfiguratorOverviewBundleAttributeComponent]
    }]
  }], null, null);
})();
var ConfiguratorOverviewFilterBarComponent = class _ConfiguratorOverviewFilterBarComponent {
  constructor(configuratorCommonsService) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.PREFIX_ID = "cx-overview-filter-applied-";
    this.FIRST_FILTER_CHECKBOX_ID = "cx-configurator-overview-filter-option-price";
    this.configuratorStorefrontUtilsService = inject(ConfiguratorStorefrontUtilsService);
    this.iconTypes = ICON_TYPE;
    this.attributeFilterTypes = Configurator.OverviewFilter;
  }
  /**
   * gets the description for the given group id
   *
   * @param groupId groupId
   * @param config - current configuration with overview data
   */
  getGroupFilterDescription(overview, groupId) {
    return overview.possibleGroups?.find((group) => group.id === groupId)?.groupDescription ?? "";
  }
  /**
   * removes the given attribute filter and updates the configuration overview accordingly
   *
   * @param attrToRemove attribute filter to remove
   * @param config - current configuration with overview data
   */
  onAttrFilterRemove(config, attrToRemove) {
    let [attrFilters, groupFilters] = this.getInputFilters(config.overview);
    const indexToRemove = attrFilters.indexOf(attrToRemove);
    attrFilters = attrFilters.filter((attrFilterName) => attrToRemove !== attrFilterName);
    let idToFocus = this.getNextElementIdToFocusForAttributeFilter(indexToRemove, attrFilters);
    if (idToFocus === null) {
      idToFocus = this.getNextElementIdToFocusForGroupFilter(0, attrFilters, groupFilters);
    }
    this.focusElementById(idToFocus);
    this.configuratorCommonsService.updateConfigurationOverview(this.createInputConfig(config, attrFilters, groupFilters));
  }
  /**
   * removes the given group filter and updates the configuration overview accordingly
   *
   * @param groupIdToRemove id of the group to be removed from filtering
   * @param config - current configuration with overview data
   */
  onGroupFilterRemove(config, groupIdToRemove) {
    let [attrFilters, groupFilters] = this.getInputFilters(config.overview);
    const indexToRemove = groupFilters.indexOf(groupIdToRemove);
    groupFilters = groupFilters.filter((groupId) => groupIdToRemove !== groupId);
    const idToFocus = this.getNextElementIdToFocusForGroupFilter(indexToRemove, attrFilters, groupFilters);
    this.focusElementById(idToFocus);
    this.configuratorCommonsService.updateConfigurationOverview(this.createInputConfig(config, attrFilters, groupFilters));
  }
  /**
   * Determines the next element to focus on after removing an attribute filter.
   * Return null if removed attribute filter was the last one in the list.
   *
   * @param indexOfRemoved - The index of the attribute filter that has been removed.
   * @param attrFilters - The list of attribute filters.
   * @returns - The next element to focus on, or null if there is none.
   */
  getNextElementIdToFocusForAttributeFilter(indexOfRemoved, attrFilters) {
    let nextElementIdToFocus;
    if (indexOfRemoved < attrFilters.length) {
      nextElementIdToFocus = this.PREFIX_ID + attrFilters[indexOfRemoved];
    } else {
      nextElementIdToFocus = null;
    }
    return nextElementIdToFocus;
  }
  /**
   * Determines the next element to focus on after removing a group filter.
   * Return id of remove all button if removed group filter was the last one in the list and there are more than one filters (attribute and group combined) left.
   * Return id of first filter checkbox if removed group filter was the last one in the list and only one filter (attribute and group filters conbined) is left.
   *
   * @param indexOfRemoved - The index of the attribute filter that has been removed.
   * @param attrFilters - The list of attribute filters.
   * @param groupFilters - The list of attribute filters.
   * @returns - The next element to focus on
   */
  getNextElementIdToFocusForGroupFilter(indexOfRemoved, attrFilters, groupFilters) {
    let nextElementIdToFocus;
    if (indexOfRemoved < groupFilters.length) {
      nextElementIdToFocus = this.PREFIX_ID + groupFilters[indexOfRemoved];
    } else {
      if (attrFilters.length + groupFilters.length > 1) {
        nextElementIdToFocus = this.PREFIX_ID + "REMOVE_ALL";
      } else {
        nextElementIdToFocus = this.FIRST_FILTER_CHECKBOX_ID;
      }
    }
    return nextElementIdToFocus;
  }
  /**
   * Focuses the HTML element with the specified ID.
   *
   * This method retrieves the HTML element using the provided ID and calls
   * the `focus` method on it if the element exists.
   *
   * @param elementId - The ID of the HTML element to focus.
   */
  focusElementById(elementId) {
    const element = this.configuratorStorefrontUtilsService.getElement("#" + elementId);
    if (element) {
      element.focus();
    }
  }
  /**
   * check whether the button to remove all filters should be shown
   *
   * @param overview - current configuration overview data
   * @returns - 'true' only if the button to remove all filters should be shown
   */
  isShowRemoveAll(overview) {
    const numFilters = (overview.attributeFilters?.length ?? 0) + (overview.groupFilters?.length ?? 0);
    return numFilters > 1;
  }
  /**
   * removes all filters and updates the configuration overview accordingly
   *
   * @param config - current configuration with overview data
   */
  onRemoveAll(config) {
    this.focusElementById(this.FIRST_FILTER_CHECKBOX_ID);
    this.configuratorCommonsService.updateConfigurationOverview(this.createInputConfig(config, [], []));
  }
  getInputFilters(overview) {
    return [overview.attributeFilters ?? [], overview.groupFilters ?? []];
  }
  createInputConfig(config, attrFilters, groupFilers) {
    return __spreadProps(__spreadValues({}, config), {
      overview: {
        configId: config.configId,
        productCode: config.productCode,
        attributeFilters: attrFilters,
        groupFilters: groupFilers,
        possibleGroups: config.overview?.possibleGroups
      }
    });
  }
  static {
    this.ɵfac = function ConfiguratorOverviewFilterBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewFilterBarComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorOverviewFilterBarComponent,
      selectors: [["cx-configurator-overview-filter-bar"]],
      inputs: {
        config: "config"
      },
      standalone: false,
      decls: 3,
      vars: 3,
      consts: [[4, "ngFor", "ngForOf"], [4, "ngIf"], ["aria-keyshortcuts", "Delete", 1, "cx-overview-filter-applied", 3, "keydown.delete", "click", "id", "title"], ["aria-hidden", "true"], [3, "type"], ["id", "cx-overview-filter-applied-REMOVE_ALL", "aria-keyshortcuts", "Delete", 1, "cx-overview-filter-applied", 3, "keydown.delete", "click", "title"]],
      template: function ConfiguratorOverviewFilterBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorOverviewFilterBarComponent_ng_container_0_Template, 7, 9, "ng-container", 0)(1, ConfiguratorOverviewFilterBarComponent_ng_container_1_Template, 6, 10, "ng-container", 0)(2, ConfiguratorOverviewFilterBarComponent_ng_container_2_Template, 7, 7, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.config.overview.attributeFilters);
          ɵɵadvance();
          ɵɵproperty("ngForOf", ctx.config.overview.groupFilters);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.isShowRemoveAll(ctx.config.overview));
        }
      },
      dependencies: [NgForOf, NgIf, IconComponent, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewFilterBarComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-overview-filter-bar",
      standalone: false,
      template: `<ng-container
  *ngFor="let filter of config.overview.attributeFilters; let i = index"
>
  <button
    class="cx-overview-filter-applied"
    id="cx-overview-filter-applied-{{
      filter === attributeFilterTypes.PRICE_RELEVANT
        ? attributeFilterTypes.PRICE_RELEVANT
        : attributeFilterTypes.USER_INPUT
    }}"
    title="{{
      (filter === attributeFilterTypes.PRICE_RELEVANT
        ? 'configurator.overviewFilter.removeByPrice'
        : 'configurator.overviewFilter.removeMySelections'
      ) | cxTranslate
    }}"
    (keydown.delete)="onAttrFilterRemove(config, filter)"
    aria-keyshortcuts="Delete"
    (click)="onAttrFilterRemove(config, filter)"
  >
    {{
      (filter === attributeFilterTypes.PRICE_RELEVANT
        ? 'configurator.overviewFilter.byPrice'
        : 'configurator.overviewFilter.mySelections'
      ) | cxTranslate
    }}
    <span aria-hidden="true">
      <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
    </span>
  </button>
</ng-container>

<ng-container
  *ngFor="let groupId of config.overview.groupFilters; let i = index"
>
  <button
    id="cx-overview-filter-applied-{{ groupId }}"
    class="cx-overview-filter-applied"
    title="{{
      'configurator.overviewFilter.removeByGroup'
        | cxTranslate
          : { group: getGroupFilterDescription(config.overview, groupId) }
    }}"
    (keydown.delete)="onGroupFilterRemove(config, groupId)"
    aria-keyshortcuts="Delete"
    (click)="onGroupFilterRemove(config, groupId)"
  >
    {{ getGroupFilterDescription(config.overview, groupId) }}
    <span aria-hidden="true">
      <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
    </span>
  </button>
</ng-container>

<ng-container *ngIf="isShowRemoveAll(config.overview)">
  <button
    class="cx-overview-filter-applied"
    id="cx-overview-filter-applied-REMOVE_ALL"
    title="{{ 'configurator.overviewFilter.removeAllFilters' | cxTranslate }}"
    (keydown.delete)="onRemoveAll(config)"
    aria-keyshortcuts="Delete"
    (click)="onRemoveAll(config)"
  >
    {{ 'configurator.overviewFilter.removeAll' | cxTranslate }}
    <span aria-hidden="true">
      <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
    </span>
  </button>
</ng-container>
`
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }], {
    config: [{
      type: Input
    }]
  });
})();
var ConfiguratorOverviewFilterComponent = class _ConfiguratorOverviewFilterComponent {
  constructor(configuratorCommonsService) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuratorStorefrontUtilsService = inject(ConfiguratorStorefrontUtilsService);
    this.showFilterBar = true;
    this.priceFilter = new UntypedFormControl("");
    this.mySelectionsFilter = new UntypedFormControl("");
    this.groupFilters = new Array();
  }
  ngOnChanges() {
    this.extractAttrFilterState(this.config);
    this.extractGroupFilterState(this.config);
  }
  /**
   * Updates the overview based on the filters currently selected in the UI
   *
   * @param config - current configuration with overview data
   */
  onFilter(config) {
    const inputConfig = this.createInputConfig(config, this.collectAttrFilters(), this.collectGroupFilters(config.overview));
    this.configuratorCommonsService.updateConfigurationOverview(inputConfig);
  }
  /**
   * Verifies whether a product is a variant product in the display only view.
   *
   * @returns - if `baseProduct` property of the current product is defined
   * and provides the product code of the base product,
   * and the current product is in the display only view
   * then returns `true`, otherwise `false`.
   */
  isDisplayOnlyVariant() {
    return this.configuratorStorefrontUtilsService.isDisplayOnlyVariant();
  }
  extractGroupFilterState(configuration) {
    this.groupFilters = [];
    configuration.overview.possibleGroups?.forEach((group) => {
      let isSelected = false;
      if (configuration.overview.groupFilters) {
        isSelected = configuration.overview.groupFilters.indexOf(group.id) >= 0;
      }
      this.groupFilters.push(new UntypedFormControl(isSelected));
    });
  }
  extractAttrFilterState(configuration) {
    if (configuration.overview.attributeFilters) {
      const isPriceFilterSelected = configuration.overview.attributeFilters.indexOf(Configurator.OverviewFilter.PRICE_RELEVANT) >= 0;
      this.priceFilter.setValue(isPriceFilterSelected);
      const isMySelectionsFilterSelected = configuration.overview.attributeFilters.indexOf(Configurator.OverviewFilter.USER_INPUT) >= 0;
      this.mySelectionsFilter.setValue(isMySelectionsFilterSelected);
    }
  }
  collectGroupFilters(overview) {
    const filters = [];
    let idx = 0;
    this.groupFilters.forEach((groupFilter) => {
      if (groupFilter.value && overview?.possibleGroups) {
        filters.push(overview.possibleGroups[idx].id);
      }
      idx++;
    });
    return filters;
  }
  collectAttrFilters() {
    const filters = [];
    if (this.priceFilter.value) {
      filters.push(Configurator.OverviewFilter.PRICE_RELEVANT);
    }
    if (this.mySelectionsFilter.value) {
      filters.push(Configurator.OverviewFilter.USER_INPUT);
    }
    return filters;
  }
  createInputConfig(config, attrFilters, groupFilers) {
    return __spreadProps(__spreadValues({}, config), {
      overview: {
        configId: config.configId,
        productCode: config.productCode,
        attributeFilters: attrFilters,
        groupFilters: groupFilers,
        possibleGroups: config.overview?.possibleGroups
      }
    });
  }
  static {
    this.ɵfac = function ConfiguratorOverviewFilterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewFilterComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorOverviewFilterComponent,
      selectors: [["cx-configurator-overview-filter"]],
      inputs: {
        showFilterBar: "showFilterBar",
        config: "config"
      },
      standalone: false,
      features: [ɵɵNgOnChangesFeature],
      decls: 6,
      vars: 8,
      consts: [[4, "ngIf"], ["class", "cx-no-overview-filters-available", 4, "ngIf"], [3, "config"], [1, "cx-overview-filter-header"], [1, "cx-overview-filter-option"], [1, "form-check"], ["id", "cx-configurator-overview-filter-option-price", "type", "checkbox", "name", "config-overview-price-filter", 1, "form-check-input", 3, "change", "formControl"], ["for", "cx-configurator-overview-filter-option-price", 1, "form-check-label"], ["id", "cx-configurator-overview-filter-option-mySelections", "type", "checkbox", "name", "config-overview-my-selection-filter", 1, "form-check-input", 3, "change", "formControl"], ["for", "cx-configurator-overview-filter-option-mySelections", 1, "form-check-label"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "formControl", "name"], [1, "form-check-label", 3, "for"], [1, "cx-no-overview-filters-available"]],
      template: function ConfiguratorOverviewFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorOverviewFilterComponent_ng_container_0_Template, 2, 1, "ng-container", 0)(1, ConfiguratorOverviewFilterComponent_ng_container_1_Template, 18, 17, "ng-container", 0);
          ɵɵpipe(2, "async");
          ɵɵtemplate(3, ConfiguratorOverviewFilterComponent_ng_container_3_Template, 5, 4, "ng-container", 0)(4, ConfiguratorOverviewFilterComponent_div_4_Template, 3, 3, "div", 1);
          ɵɵpipe(5, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.showFilterBar);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ɵɵpipeBind1(2, 4, ctx.isDisplayOnlyVariant()));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.config.overview.possibleGroups && ctx.config.overview.possibleGroups.length > 1);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(5, 6, ctx.isDisplayOnlyVariant()) && (ctx.config.overview.possibleGroups == null ? null : ctx.config.overview.possibleGroups.length) === 1);
        }
      },
      dependencies: [NgForOf, NgIf, CheckboxControlValueAccessor, NgControlStatus, FormControlDirective, ConfiguratorOverviewFilterBarComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewFilterComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-overview-filter",
      standalone: false,
      template: `<ng-container *ngIf="showFilterBar">
  <cx-configurator-overview-filter-bar
    [config]="config"
  ></cx-configurator-overview-filter-bar>
</ng-container>
<ng-container *ngIf="!(isDisplayOnlyVariant() | async)">
  <div class="cx-overview-filter-header">
    {{ 'configurator.overviewFilter.byOption' | cxTranslate }}
  </div>
  <div class="cx-overview-filter-option">
    <div class="form-check">
      <input
        id="cx-configurator-overview-filter-option-price"
        type="checkbox"
        class="form-check-input"
        [formControl]="priceFilter"
        (change)="onFilter(config)"
        name="config-overview-price-filter"
        [attr.aria-label]="
          'configurator.a11y.filterOverviewByPrice' | cxTranslate
        "
      />
      <label
        class="form-check-label"
        for="cx-configurator-overview-filter-option-price"
      >
        {{ 'configurator.overviewFilter.byPrice' | cxTranslate }}</label
      >
    </div>
  </div>
  <div class="cx-overview-filter-option">
    <div class="form-check">
      <input
        id="cx-configurator-overview-filter-option-mySelections"
        type="checkbox"
        class="form-check-input"
        [formControl]="mySelectionsFilter"
        (change)="onFilter(config)"
        name="config-overview-my-selection-filter"
        [attr.aria-label]="
          'configurator.a11y.filterOverviewByMySelections' | cxTranslate
        "
      />
      <label
        class="form-check-label"
        for="cx-configurator-overview-filter-option-mySelections"
      >
        {{ 'configurator.overviewFilter.mySelections' | cxTranslate }}</label
      >
    </div>
  </div>
</ng-container>
<ng-container
  *ngIf="
    config.overview.possibleGroups && config.overview.possibleGroups.length > 1
  "
>
  <div class="cx-overview-filter-header">
    {{ 'configurator.overviewFilter.byGroup' | cxTranslate }}
  </div>
  <ng-container
    *ngFor="let group of config.overview.possibleGroups; let i = index"
  >
    <div class="cx-overview-filter-option">
      <div class="form-check">
        <input
          id="{{ 'cx-configurator-overview-filter-option-group-' + group.id }}"
          type="checkbox"
          class="form-check-input"
          [formControl]="groupFilters[i]"
          (change)="onFilter(config)"
          name="{{ 'config-overview-group-filter-' + group.id }}"
          [attr.aria-label]="
            'configurator.a11y.filterOverviewByGroup'
              | cxTranslate: { groupName: group.groupDescription }
          "
        />
        <label
          class="form-check-label"
          for="{{ 'cx-configurator-overview-filter-option-group-' + group.id }}"
          >{{ group.groupDescription }}</label
        >
      </div>
    </div>
  </ng-container>
</ng-container>
<div
  *ngIf="
    (isDisplayOnlyVariant() | async) &&
    config.overview.possibleGroups?.length === 1
  "
  class="cx-no-overview-filters-available"
>
  {{ 'configurator.overviewFilter.noFiltersAvailable' | cxTranslate }}
</div>
`
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }], {
    showFilterBar: [{
      type: Input
    }],
    config: [{
      type: Input
    }]
  });
})();
var ConfiguratorOverviewFilterBarModule = class _ConfiguratorOverviewFilterBarModule {
  static {
    this.ɵfac = function ConfiguratorOverviewFilterBarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewFilterBarModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorOverviewFilterBarModule,
      declarations: [ConfiguratorOverviewFilterBarComponent],
      imports: [CommonModule, I18nModule, IconModule, FormsModule, ReactiveFormsModule],
      exports: [ConfiguratorOverviewFilterBarComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, IconModule, FormsModule, ReactiveFormsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewFilterBarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, FormsModule, ReactiveFormsModule],
      declarations: [ConfiguratorOverviewFilterBarComponent],
      exports: [ConfiguratorOverviewFilterBarComponent]
    }]
  }], null, null);
})();
var ConfiguratorOverviewFilterModule = class _ConfiguratorOverviewFilterModule {
  static {
    this.ɵfac = function ConfiguratorOverviewFilterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewFilterModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorOverviewFilterModule,
      declarations: [ConfiguratorOverviewFilterComponent],
      imports: [CommonModule, I18nModule, FormsModule, ReactiveFormsModule, ConfiguratorOverviewFilterBarModule],
      exports: [ConfiguratorOverviewFilterComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, FormsModule, ReactiveFormsModule, ConfiguratorOverviewFilterBarModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewFilterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, FormsModule, ReactiveFormsModule, ConfiguratorOverviewFilterBarModule],
      declarations: [ConfiguratorOverviewFilterComponent],
      exports: [ConfiguratorOverviewFilterComponent]
    }]
  }], null, null);
})();
var ConfiguratorOverviewFilterButtonComponent = class _ConfiguratorOverviewFilterButtonComponent {
  constructor(launchDialogService, configuratorCommonsService, configRouterExtractorService) {
    this.launchDialogService = launchDialogService;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.configuratorStorefrontUtilsService = inject(ConfiguratorStorefrontUtilsService);
    this.ghostStyle = true;
    this.configurationWithOv$ = this.configRouterExtractorService.extractRouterData().pipe(
      switchMap((routerData) => this.configuratorCommonsService.getConfiguration(routerData.owner)),
      // filter 'strict null check safe'
      filter((configuration) => configuration.overview != null),
      tap(() => {
        this.ghostStyle = false;
      })
    );
  }
  /**
   * Retrieves the number of filters currently applied to the overview page
   *
   * @param {Configurator.Overview} overview - current configuration overview data
   * @returns {number} - number of applied filters
   */
  getNumFilters(overview) {
    return (overview.attributeFilters?.length ?? 0) + (overview.groupFilters?.length ?? 0);
  }
  /**
   * Opens the filter modal
   *
   * @param {Configurator.ConfigurationWithOverview} config - current configuration with overview data
   */
  openFilterModal(config) {
    this.launchDialogService.openDialogAndSubscribe(LAUNCH_CALLER.CONFIGURATOR_OV_FILTER, this.filterButton, config);
  }
  /**
   * Verifies whether a product is a variant product in the display only view.
   *
   * @returns - if `baseProduct` property of the current product is defined
   * and provides the product code of the base product,
   * and the current product is in the display only view
   * then returns `true`, otherwise `false`.
   */
  isDisplayOnlyVariant() {
    return this.configuratorStorefrontUtilsService.isDisplayOnlyVariant();
  }
  static {
    this.ɵfac = function ConfiguratorOverviewFilterButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewFilterButtonComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorOverviewFilterButtonComponent,
      selectors: [["cx-configurator-overview-filter-button"]],
      viewQuery: function ConfiguratorOverviewFilterButtonComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c22, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterButton = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function ConfiguratorOverviewFilterButtonComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ghost", ctx.ghostStyle);
        }
      },
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["ghostFilterButton", ""], ["filterButton", ""], [4, "ngIf", "ngIfElse"], [4, "ngIf"], [3, "config"], ["tabindex", "0", 1, "btn", "btn-secondary", "cx-config-filter-button", 3, "click", "title"], [1, "cx-ghost-filter-button", "ghost"]],
      template: function ConfiguratorOverviewFilterButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorOverviewFilterButtonComponent_ng_container_0_Template, 4, 4, "ng-container", 2);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ConfiguratorOverviewFilterButtonComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const ghostFilterButton_r4 = ɵɵreference(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.configurationWithOv$))("ngIfElse", ghostFilterButton_r4);
        }
      },
      dependencies: [NgIf, ConfiguratorOverviewFilterBarComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewFilterButtonComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-overview-filter-button",
      standalone: false,
      template: `<ng-container
  *ngIf="
    configurationWithOv$ | async as configurationWithOv;
    else ghostFilterButton
  "
>
  <ng-container
    *ngIf="
      !(isDisplayOnlyVariant() | async) ||
      configurationWithOv.overview.possibleGroups?.length !== 1
    "
  >
    <button
      #filterButton
      class="btn btn-secondary cx-config-filter-button"
      tabindex="0"
      (click)="openFilterModal(configurationWithOv)"
      title="{{
        (getNumFilters(configurationWithOv.overview) > 0
          ? 'configurator.a11y.filterOverviewWithCount'
          : 'configurator.a11y.filterOverview'
        )
          | cxTranslate
            : { numAppliedFilters: getNumFilters(configurationWithOv.overview) }
      }}"
    >
      {{
        (getNumFilters(configurationWithOv.overview) > 0
          ? 'configurator.button.filterOverviewWithCount'
          : 'configurator.button.filterOverview'
        )
          | cxTranslate
            : { numAppliedFilters: getNumFilters(configurationWithOv.overview) }
      }}
    </button>
  </ng-container>
  <cx-configurator-overview-filter-bar
    [config]="configurationWithOv"
  ></cx-configurator-overview-filter-bar>
</ng-container>

<ng-template #ghostFilterButton>
  <div class="cx-ghost-filter-button ghost"></div>
</ng-template>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorRouterExtractorService
  }], {
    filterButton: [{
      type: ViewChild,
      args: ["filterButton"]
    }],
    ghostStyle: [{
      type: HostBinding,
      args: ["class.ghost"]
    }]
  });
})();
var ConfiguratorOverviewFilterButtonModule = class _ConfiguratorOverviewFilterButtonModule {
  static {
    this.ɵfac = function ConfiguratorOverviewFilterButtonModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewFilterButtonModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorOverviewFilterButtonModule,
      declarations: [ConfiguratorOverviewFilterButtonComponent],
      imports: [CommonModule, I18nModule, ConfiguratorOverviewFilterBarModule],
      exports: [ConfiguratorOverviewFilterButtonComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorOverviewFilterButton: {
            component: ConfiguratorOverviewFilterButtonComponent
          }
        }
      })],
      imports: [CommonModule, I18nModule, ConfiguratorOverviewFilterBarModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewFilterButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, ConfiguratorOverviewFilterBarModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorOverviewFilterButton: {
            component: ConfiguratorOverviewFilterButtonComponent
          }
        }
      })],
      declarations: [ConfiguratorOverviewFilterButtonComponent],
      exports: [ConfiguratorOverviewFilterButtonComponent]
    }]
  }], null, null);
})();
var ConfiguratorOverviewFilterDialogComponent = class _ConfiguratorOverviewFilterDialogComponent {
  constructor(launchDialogService) {
    this.launchDialogService = launchDialogService;
    this.config$ = this.launchDialogService.data$;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
  }
  /**
   * closes the filter modal
   */
  closeFilterModal() {
    this.launchDialogService.closeDialog("Close Filtering");
  }
  static {
    this.ɵfac = function ConfiguratorOverviewFilterDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewFilterDialogComponent)(ɵɵdirectiveInject(LaunchDialogService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorOverviewFilterDialogComponent,
      selectors: [["cx-configurator-overview-filter-dialog"]],
      standalone: false,
      decls: 12,
      vars: 11,
      consts: [["role", "dialog", "aria-labelledby", "dialogTitle", 1, "cx-configurator-overview-filter-dialog", "cx-modal-container", 3, "click"], [1, "cx-modal-content", 3, "click", "esc", "cxFocus"], [1, "cx-dialog-header", "modal-header"], ["id", "dialogTitle", 1, "cx-dialog-title", "modal-title"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [4, "ngIf"], [1, "cx-dialog-body", "modal-body"], [3, "config", "showFilterBar"]],
      template: function ConfiguratorOverviewFilterDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("click", function ConfiguratorOverviewFilterDialogComponent_Template_div_click_0_listener() {
            return ctx.closeFilterModal();
          });
          ɵɵelementStart(1, "div", 1);
          ɵɵlistener("click", function ConfiguratorOverviewFilterDialogComponent_Template_div_click_1_listener($event) {
            return $event.stopPropagation();
          })("esc", function ConfiguratorOverviewFilterDialogComponent_Template_div_esc_1_listener() {
            return ctx.closeFilterModal();
          });
          ɵɵelementStart(2, "div", 2)(3, "h3", 3);
          ɵɵtext(4);
          ɵɵpipe(5, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(6, "button", 4);
          ɵɵpipe(7, "cxTranslate");
          ɵɵlistener("click", function ConfiguratorOverviewFilterDialogComponent_Template_button_click_6_listener() {
            return ctx.closeFilterModal();
          });
          ɵɵelementStart(8, "span", 5);
          ɵɵelement(9, "cx-icon", 6);
          ɵɵelementEnd()()();
          ɵɵtemplate(10, ConfiguratorOverviewFilterDialogComponent_ng_container_10_Template, 3, 2, "ng-container", 7);
          ɵɵpipe(11, "async");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "configurator.overviewFilter.title"), " ");
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(7, 7, "configurator.a11y.closeFilterMenu"));
          ɵɵadvance(3);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(11, 9, ctx.config$));
        }
      },
      dependencies: [NgIf, IconComponent, ConfiguratorOverviewFilterComponent, FocusDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewFilterDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-overview-filter-dialog",
      standalone: false,
      template: `<div
  class="cx-configurator-overview-filter-dialog cx-modal-container"
  role="dialog"
  (click)="closeFilterModal()"
  aria-labelledby="dialogTitle"
>
  <div
    class="cx-modal-content"
    (click)="$event.stopPropagation()"
    [cxFocus]="focusConfig"
    (esc)="closeFilterModal()"
  >
    <div class="cx-dialog-header modal-header">
      <h3 id="dialogTitle" class="cx-dialog-title modal-title">
        {{ 'configurator.overviewFilter.title' | cxTranslate }}
      </h3>
      <button
        title="{{ 'configurator.a11y.closeFilterMenu' | cxTranslate }}"
        type="button"
        class="close"
        (click)="closeFilterModal()"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>
    <ng-container *ngIf="config$ | async as config">
      <div class="cx-dialog-body modal-body">
        <cx-configurator-overview-filter
          [config]="config"
          [showFilterBar]="false"
        ></cx-configurator-overview-filter>
      </div>
    </ng-container>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }], null);
})();
var defaultConfiguratorOverviewFilterDialogLayoutConfig = {
  launch: {
    CONFIGURATOR_OV_FILTER: {
      inlineRoot: true,
      component: ConfiguratorOverviewFilterDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var ConfiguratorOverviewFilterDialogModule = class _ConfiguratorOverviewFilterDialogModule {
  static {
    this.ɵfac = function ConfiguratorOverviewFilterDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewFilterDialogModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorOverviewFilterDialogModule,
      declarations: [ConfiguratorOverviewFilterDialogComponent],
      imports: [CommonModule, I18nModule, IconModule, ConfiguratorOverviewFilterModule, KeyboardFocusModule, FeaturesConfigModule],
      exports: [ConfiguratorOverviewFilterDialogComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultConfiguratorOverviewFilterDialogLayoutConfig)],
      imports: [CommonModule, I18nModule, IconModule, ConfiguratorOverviewFilterModule, KeyboardFocusModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewFilterDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, ConfiguratorOverviewFilterModule, KeyboardFocusModule, FeaturesConfigModule],
      providers: [provideDefaultConfig(defaultConfiguratorOverviewFilterDialogLayoutConfig)],
      declarations: [ConfiguratorOverviewFilterDialogComponent],
      exports: [ConfiguratorOverviewFilterDialogComponent]
    }]
  }], null, null);
})();
var ConfiguratorOverviewFormComponent = class _ConfiguratorOverviewFormComponent {
  constructor(configuratorCommonsService, configRouterExtractorService, configuratorStorefrontUtilsService) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.ghostStyle = true;
    this.attributeOverviewType = Configurator.AttributeOverviewType;
    this.configuration$ = this.configRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => this.configuratorCommonsService.getOrCreateConfiguration(routerData.owner)), distinctUntilKeyChanged("configId"), switchMap((configuration) => this.configuratorCommonsService.getConfigurationWithOverview(configuration)), filter((configuration) => configuration.overview != null), tap(() => {
      this.ghostStyle = false;
    }));
  }
  /**
   * Does the configuration contain any selected attribute values?
   * @param {Configurator.Configuration} configuration - Current configuration
   * @returns {boolean} - Any attributes available
   */
  hasAttributes(configuration) {
    return this.hasGroupWithAttributes(configuration.overview?.groups);
  }
  hasGroupWithAttributes(groups) {
    if (groups) {
      let hasAttributes = groups.find((group) => (group.attributes ? group.attributes.length : 0) > 0) !== void 0;
      if (!hasAttributes) {
        hasAttributes = groups.find((group) => this.hasGroupWithAttributes(group.subGroups)) !== void 0;
      }
      return hasAttributes;
    } else {
      return false;
    }
  }
  /**
   * Verifies whether the next or the previous attributes are same.
   *
   * @param {Configurator.AttributeOverview[]} attributes - Attribute array
   * @param {number} index - Index of the attribute in the array
   * @return {boolean} - 'True' if it is the same attribute, otherwise 'false'
   */
  isSameAttribute(attributes, index) {
    if (attributes.length > 1) {
      if (index === 0) {
        return attributes[index]?.attribute === attributes[index + 1]?.attribute;
      } else {
        return attributes[index]?.attribute === attributes[index - 1]?.attribute;
      }
    }
    return false;
  }
  /**
   * Retrieves the styling for the corresponding element.
   *
   * @param {Configurator.AttributeOverview[]} attributes - Attribute array
   * @param {number} index - Index of the attribute in the array
   * @return {string} - corresponding style class
   */
  getStyleClasses(attributes, index) {
    let styleClass = "";
    switch (attributes[index]?.type) {
      case this.attributeOverviewType.BUNDLE:
        styleClass += "bundle";
        break;
      case this.attributeOverviewType.GENERAL:
        styleClass += "general";
        break;
    }
    if (index === 0 || !this.isSameAttribute(attributes, index)) {
      styleClass += " margin";
    }
    if (!this.isSameAttribute(attributes, index + 1) && !styleClass.includes("bundle")) {
      styleClass += " last-value-pair";
    }
    return styleClass;
  }
  /**
   * Retrieves the styling for the group levels.
   *
   * @param {number} level - Group level. 1 is top level.
   * @param {Configurator.GroupOverview[]} subGroups - subgroups array
   * @return {string} - corresponding style classes
   */
  getGroupLevelStyleClasses(level, subGroups) {
    let styleClass = "cx-group";
    if (level === 1) {
      styleClass += " topLevel";
      if (subGroups && subGroups.length > 0) {
        styleClass += " subgroupTopLevel";
      }
    } else {
      styleClass += " subgroup";
      styleClass += " subgroupLevel" + level;
    }
    return styleClass;
  }
  /**
   * Retrieves a unique prefix ID.
   *
   * @param {string | undefined} prefix - prefix that we need to make the ID unique
   * @param {string} groupId - group ID
   * @returns {string} - prefix ID
   */
  getPrefixId(idPrefix, groupId) {
    return this.configuratorStorefrontUtilsService.getPrefixId(idPrefix, groupId);
  }
  /**
   * Retrieves the ids for the overview group headers
   *
   * @param {string} idPrefix - Prefix (reflects the parent groups in the hierarchy)
   * @param {string} groupId - local group id
   * @return {string} - unique group id
   */
  getGroupId(idPrefix, groupId) {
    return this.configuratorStorefrontUtilsService.createOvGroupId(idPrefix, groupId);
  }
  static {
    this.ɵfac = function ConfiguratorOverviewFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewFormComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorOverviewFormComponent,
      selectors: [["cx-configurator-overview-form"]],
      hostVars: 2,
      hostBindings: function ConfiguratorOverviewFormComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ghost", ctx.ghostStyle);
        }
      },
      standalone: false,
      decls: 8,
      vars: 4,
      consts: [["noAttributes", ""], ["groups", ""], ["ghostForm", ""], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "cx-no-attribute-value-pairs"], [1, "cx-visually-hidden"], [4, "ngFor", "ngForOf"], [3, "id", "ngClass"], [4, "cxFeature"], ["class", "cx-attribute-value-pair", 3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["aria-hidden", "true"], [1, "cx-attribute-value-pair", 3, "ngClass"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "attributeOverview"], [1, "cx-ghost-group"], [1, "cx-ghost-header", "ghost"], [1, "cx-ghost-body"], [1, "cx-ghost-attribute-value"], [1, "cx-ghost-value", "ghost"], [1, "cx-ghost-attribute-label"], [1, "cx-ghost-label", "ghost"], [1, "cx-ghost-attribute-price", "ghost"]],
      template: function ConfiguratorOverviewFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorOverviewFormComponent_ng_container_0_Template, 2, 2, "ng-container", 3);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ConfiguratorOverviewFormComponent_ng_template_2_Template, 7, 6, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, ConfiguratorOverviewFormComponent_ng_template_4_Template, 4, 4, "ng-template", null, 1, ɵɵtemplateRefExtractor)(6, ConfiguratorOverviewFormComponent_ng_template_6_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const ghostForm_r12 = ɵɵreference(7);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.configuration$))("ngIfElse", ghostForm_r12);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, NgSwitchDefault, ConfiguratorOverviewAttributeComponent, ConfiguratorOverviewBundleAttributeComponent, FeatureDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-overview-form",
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: false,
      template: `<ng-container *ngIf="configuration$ | async as configuration; else ghostForm">
  <ng-container *ngIf="hasAttributes(configuration); else noAttributes">
    <ng-container
      *ngTemplateOutlet="
        groups;
        context: {
          overviewGroups: configuration.overview?.groups,
          level: 1,
          idPrefix: '',
        }
      "
    ></ng-container>
  </ng-container>
</ng-container>

<ng-template #noAttributes>
  <div class="cx-no-attribute-value-pairs">
    <h2>{{ 'configurator.overviewForm.noAttributeHeader' | cxTranslate }}</h2>
    <p>{{ 'configurator.overviewForm.noAttributeText' | cxTranslate }}</p>
  </div>
</ng-template>

<ng-template
  #groups
  let-overviewGroups="overviewGroups"
  let-level="level"
  let-idPrefix="idPrefix"
>
  <span class="cx-visually-hidden">
    {{ 'configurator.a11y.listOfAttributesAndValues' | cxTranslate }}
  </span>

  <ng-container *ngFor="let group of overviewGroups">
    <div
      id="{{ getGroupId(idPrefix, group.id) }}"
      [ngClass]="getGroupLevelStyleClasses(level, group.subGroups)"
    >
      <ng-container *cxFeature="'a11yConfiguratorOverviewHeaderVPC'">
        <h2>
          <span class="cx-visually-hidden">
            {{
              'configurator.a11y.group'
                | cxTranslate: { group: group.groupDescription }
            }}
          </span>
          <span aria-hidden="true">
            {{ group.groupDescription }}
          </span>
        </h2>
      </ng-container>
      <ng-container *cxFeature="'!a11yConfiguratorOverviewHeaderVPC'">
        <span class="cx-visually-hidden">
          {{
            'configurator.a11y.group'
              | cxTranslate
                : {
                    group: group.groupDescription,
                  }
          }}
        </span>
        <h2 aria-hidden="true">
          <span>{{ group.groupDescription }}</span>
        </h2>
      </ng-container>

      <div
        *ngFor="let attributeOverview of group.attributes; let i = index"
        class="cx-attribute-value-pair"
        [ngClass]="getStyleClasses(group.attributes, i)"
      >
        <ng-container [ngSwitch]="attributeOverview?.type">
          <ng-container *ngSwitchCase="attributeOverviewType.GENERAL">
            <cx-configurator-overview-attribute
              [attributeOverview]="attributeOverview"
            >
            </cx-configurator-overview-attribute>
          </ng-container>

          <ng-container *ngSwitchCase="attributeOverviewType.BUNDLE">
            <cx-configurator-cpq-overview-attribute
              [attributeOverview]="attributeOverview"
            >
            </cx-configurator-cpq-overview-attribute>
          </ng-container>

          <ng-container *ngSwitchDefault>
            <cx-configurator-overview-attribute
              [attributeOverview]="attributeOverview"
            >
            </cx-configurator-overview-attribute>
          </ng-container>
        </ng-container>
      </div>
      <ng-container *ngIf="group.subGroups?.length > 0">
        <ng-container
          *ngTemplateOutlet="
            groups;
            context: {
              overviewGroups: group.subGroups,
              level: level + 1,
              idPrefix: getPrefixId(idPrefix, group.id),
            }
          "
        ></ng-container>
      </ng-container>
    </div>
  </ng-container>
</ng-template>

<ng-template #ghostForm>
  <ng-container *ngFor="let number of [0, 1, 2]">
    <div class="cx-ghost-group">
      <div class="cx-ghost-header ghost"></div>
      <div class="cx-ghost-body">
        <ng-container *ngFor="let number of [0, 1, 2, 3, 4, 5]">
          <div class="cx-ghost-attribute-value">
            <div class="cx-ghost-value ghost"></div>
          </div>
          <div class="cx-ghost-attribute-label">
            <div class="cx-ghost-label ghost"></div>
          </div>
          <div class="cx-ghost-attribute-price ghost"></div>
        </ng-container>
      </div>
    </div>
  </ng-container>
</ng-template>
`
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }], {
    ghostStyle: [{
      type: HostBinding,
      args: ["class.ghost"]
    }]
  });
})();
var ConfiguratorOverviewFormModule = class _ConfiguratorOverviewFormModule {
  static {
    this.ɵfac = function ConfiguratorOverviewFormModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewFormModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorOverviewFormModule,
      declarations: [ConfiguratorOverviewFormComponent],
      imports: [CommonModule, ConfiguratorOverviewAttributeModule, ConfiguratorOverviewBundleAttributeModule, I18nModule, FeaturesConfigModule],
      exports: [ConfiguratorOverviewFormComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorOverviewForm: {
            component: ConfiguratorOverviewFormComponent
          }
        }
      })],
      imports: [CommonModule, ConfiguratorOverviewAttributeModule, ConfiguratorOverviewBundleAttributeModule, I18nModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewFormModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ConfiguratorOverviewAttributeModule, ConfiguratorOverviewBundleAttributeModule, I18nModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorOverviewForm: {
            component: ConfiguratorOverviewFormComponent
          }
        }
      })],
      declarations: [ConfiguratorOverviewFormComponent],
      exports: [ConfiguratorOverviewFormComponent]
    }]
  }], null, null);
})();
var ConfiguratorOverviewMenuComponent = class _ConfiguratorOverviewMenuComponent {
  constructor(configuratorStorefrontUtilsService) {
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.height = this.getHeight();
    this.VARIANT_CONFIG_OVERVIEW_NAVIGATION_SLOT = "cx-page-slot.VariantConfigOverviewNavigation";
    this.CX_CONFIGURATOR_OVERVIEW_MENU = "cx-configurator-overview-menu";
    this.CX_MENU_ITEM_BUTTONS = "button.cx-menu-item";
    this.CX_GROUPS = "div.cx-group";
    this.CX_MENU_GROUP = "cx-menu-group";
    this.OV_MENU_ITEM = "-ovMenuItem";
    this.OV_GROUP = "-ovGroup";
    this.ACTIVE_CLASS = "active";
    this.MENU_ITEM_HEIGHT = 39.5;
    this.iconTypes = ICON_TYPE;
    this.styles = [["margin-block-end", "268px"], ["position", "-webkit-sticky"], ["position", "sticky"], ["top", "0"]];
  }
  ngAfterViewInit() {
    this.amount = this.getAmount(this.config);
    this.menuItemsHeight = this.getMenuItemsHeight();
    this.adjustStyling();
    this.onScroll();
  }
  onScroll() {
    this.menuItem = this.getMenuItemToHighlight();
    this.highlight(this.menuItem);
    this.height = this.getHeight();
    this.ensureElementVisible(this.menuItem);
  }
  onResize() {
    this.height = this.getHeight();
    this.ensureElementVisible(this.menuItem);
  }
  /**
   *  Retrieves amount of groups and all its subgroups in the overview.
   *
   *  If there are no groups in the overview then zero will be returned.
   *  Otherwise the amount of groups and all its subgroups will be returned.
   *
   * @param {Configurator.Configuration} configuration - Configuration
   * @returns {number} - Amount of groups and all its subgroups
   * @protected
   */
  getAmount(configuration) {
    if (configuration.overview?.groups) {
      return this.getAmountOfGroups(0, configuration.overview.groups);
    }
    return 0;
  }
  getAmountOfGroups(amount, groups) {
    if (groups) {
      amount = amount + groups.length;
      groups.forEach((group) => {
        if (group.subGroups) {
          amount = this.getAmountOfGroups(amount, group.subGroups);
        }
      });
    }
    return amount;
  }
  /**
   * Calculates the total height of existing menu items.
   *
   * @returns {number} - total height of existing menu items
   * @protected
   */
  getMenuItemsHeight() {
    return this.amount * this.MENU_ITEM_HEIGHT;
  }
  /**
   * Adjust the styling of VariantConfigOverviewNavigation slot.
   *
   * If the amount is larger than 1 then the styling will be applied.
   * Otherwise the styling will be removed.
   *
   * @protected
   */
  adjustStyling() {
    if (this.amount >= 1) {
      this.changeStyling();
    } else {
      this.removeStyling();
    }
  }
  /**
   * Retrieves the height of the menu in pixels.
   *
   * If the menu items are rendered, it will be checked whether
   * the height of all menu items equals zero or is larger than the actual height of the spare viewport.
   * If it is a case then the actual height of the spare viewport will be returned, otherwise no height will be returned.
   *
   * @returns {string} - Menu height in pixels
   * @protected
   */
  getHeight() {
    const spareViewportHeight = this.configuratorStorefrontUtilsService.getSpareViewportHeight();
    if (this.menuItemsHeight > spareViewportHeight) {
      return spareViewportHeight + "px";
    }
    return "";
  }
  /**
   * Applies the styling of element according to the passed list of CSS styles.
   *
   * @protected
   */
  changeStyling() {
    this.styles.forEach((style) => {
      this.configuratorStorefrontUtilsService.changeStyling(this.VARIANT_CONFIG_OVERVIEW_NAVIGATION_SLOT, style[0], style[1]);
    });
  }
  /**
   * Removes the styling of element according to the passed list of CSS styles.
   *
   * @protected
   */
  removeStyling() {
    this.styles.forEach((style) => {
      this.configuratorStorefrontUtilsService.removeStyling(this.VARIANT_CONFIG_OVERVIEW_NAVIGATION_SLOT, style[0]);
    });
  }
  getMenuItemToHighlight() {
    let menuItem;
    const groups = this.configuratorStorefrontUtilsService.getElements(this.CX_GROUPS);
    const verticallyScrolledPixels = this.configuratorStorefrontUtilsService.getVerticallyScrolledPixels();
    groups?.forEach((group) => {
      if (verticallyScrolledPixels && verticallyScrolledPixels >= group.offsetTop) {
        const id = group.id.replace(this.OV_GROUP, this.OV_MENU_ITEM);
        if (id) {
          const querySelector = "#" + id;
          menuItem = this.configuratorStorefrontUtilsService.getElement(querySelector);
        }
      }
    });
    return menuItem;
  }
  highlight(elementToHighlight) {
    if (elementToHighlight) {
      const menuItems = this.configuratorStorefrontUtilsService.getElements(this.CX_MENU_ITEM_BUTTONS);
      menuItems?.forEach((menuItem) => {
        menuItem.classList.remove(this.ACTIVE_CLASS);
        if (menuItem.id === elementToHighlight.id) {
          elementToHighlight.classList.add(this.ACTIVE_CLASS);
        }
      });
    }
  }
  ensureElementVisible(element) {
    if (element && this.configuratorStorefrontUtilsService.hasScrollbar(this.CX_CONFIGURATOR_OVERVIEW_MENU)) {
      this.configuratorStorefrontUtilsService.ensureElementVisible(this.CX_CONFIGURATOR_OVERVIEW_MENU, element);
    }
  }
  /**
   * Retrieves the styling for the group levels.
   *
   * @param {number} level - Group level. 1 is top level.
   * @return {string} - corresponding style classes
   */
  getGroupLevelStyleClasses(level) {
    return this.CX_MENU_GROUP + " groupLevel" + level;
  }
  /**
   * Navigates to group in OV form
   *
   * @param {string} prefix - Prefix (reflects the parent groups in the hierarchy)
   * @param {string} id - Group id
   */
  navigateToGroup(prefix, id) {
    const ovGroupId = this.configuratorStorefrontUtilsService.createOvGroupId(prefix, id);
    this.configuratorStorefrontUtilsService.scrollToConfigurationElement("#" + ovGroupId + " h2");
  }
  /**
   * Retrieves a unique prefix ID.
   *
   * @param {string | undefined} prefix - prefix that we need to make the ID unique
   * @param {string} groupId - group ID
   * @returns {string} - prefix ID
   */
  getPrefixId(idPrefix, groupId) {
    return this.configuratorStorefrontUtilsService.getPrefixId(idPrefix, groupId);
  }
  /**
   * Retrieves the ids for the overview group headers
   *
   * @param {string} idPrefix - Prefix (reflects the parent groups in the hierarchy)
   * @param {string} groupId - local group id
   * @return {string} - unique group id
   */
  getGroupId(idPrefix, groupId) {
    return this.configuratorStorefrontUtilsService.createOvGroupId(idPrefix, groupId);
  }
  /**
   * Retrieves the ids for the overview menu group items
   *
   * @param {string} idPrefix - Prefix (reflects the parent groups in the hierarchy)
   * @param {string} groupId - local group id
   * @return {string} - unique group id
   */
  getMenuItemId(idPrefix, groupId) {
    return this.configuratorStorefrontUtilsService.createOvMenuItemId(idPrefix, groupId);
  }
  static {
    this.ɵfac = function ConfiguratorOverviewMenuComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewMenuComponent)(ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorOverviewMenuComponent,
      selectors: [["cx-configurator-overview-menu"]],
      hostVars: 2,
      hostBindings: function ConfiguratorOverviewMenuComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("scroll", function ConfiguratorOverviewMenuComponent_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          }, false, ɵɵresolveWindow)("resize", function ConfiguratorOverviewMenuComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, ɵɵresolveWindow);
        }
        if (rf & 2) {
          ɵɵstyleProp("height", ctx.height);
        }
      },
      inputs: {
        config: "config"
      },
      standalone: false,
      decls: 3,
      vars: 1,
      consts: [["groups", ""], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "cx-menu-item", 3, "click", "id"], ["aria-hidden", "true"], ["aria-hidden", "true", 3, "type"]],
      template: function ConfiguratorOverviewMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorOverviewMenuComponent_ng_container_0_Template, 2, 4, "ng-container", 1)(1, ConfiguratorOverviewMenuComponent_ng_template_1_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.config);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, IconComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewMenuComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-overview-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="config">
  <ng-container
    *ngTemplateOutlet="
      groups;
      context: {
        overviewGroups: config.overview.groups,
        level: 1,
        idPrefix: '',
      }
    "
  ></ng-container>
</ng-container>

<ng-template
  #groups
  let-overviewGroups="overviewGroups"
  let-level="level"
  let-idPrefix="idPrefix"
>
  <ul>
    <ng-container *ngFor="let group of overviewGroups">
      <li [ngClass]="getGroupLevelStyleClasses(level)">
        <button
          id="{{ getMenuItemId(idPrefix, group.id) }}"
          class="cx-menu-item"
          [attr.aria-label]="
            'configurator.a11y.groupName'
              | cxTranslate: { group: group.groupDescription }
          "
          (click)="navigateToGroup(idPrefix, group.id)"
        >
          <span aria-hidden="true"> {{ group.groupDescription }}</span>
          <cx-icon [type]="iconTypes.ARROW_LEFT" aria-hidden="true"></cx-icon>
        </button>
        <ng-container *ngIf="group.subGroups?.length > 0">
          <ng-container
            *ngTemplateOutlet="
              groups;
              context: {
                overviewGroups: group.subGroups,
                level: level + 1,
                idPrefix: getPrefixId(idPrefix, group.id),
              }
            "
          ></ng-container>
        </ng-container>
      </li>
    </ng-container>
  </ul>
</ng-template>
`
    }]
  }], () => [{
    type: ConfiguratorStorefrontUtilsService
  }], {
    height: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    config: [{
      type: Input
    }],
    onScroll: [{
      type: HostListener,
      args: ["window:scroll", ["$event"]]
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize", ["$event"]]
    }]
  });
})();
var ConfiguratorOverviewMenuModule = class _ConfiguratorOverviewMenuModule {
  static {
    this.ɵfac = function ConfiguratorOverviewMenuModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewMenuModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorOverviewMenuModule,
      declarations: [ConfiguratorOverviewMenuComponent],
      imports: [CommonModule, I18nModule, IconModule],
      exports: [ConfiguratorOverviewMenuComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule],
      declarations: [ConfiguratorOverviewMenuComponent],
      exports: [ConfiguratorOverviewMenuComponent]
    }]
  }], null, null);
})();
var ConfiguratorOverviewNotificationBannerComponent = class _ConfiguratorOverviewNotificationBannerComponent {
  constructor(configuratorCommonsService, configRouterExtractorService, commonConfigUtilsService) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.commonConfigUtilsService = commonConfigUtilsService;
    this.routerData$ = this.configRouterExtractorService.extractRouterData();
    this.configuration$ = this.routerData$.pipe(filter((routerData) => routerData.owner.type === CommonConfigurator.OwnerType.PRODUCT || routerData.owner.type === CommonConfigurator.OwnerType.CART_ENTRY), switchMap((routerData) => this.configuratorCommonsService.getConfiguration(routerData.owner)));
    this.configurationOverview$ = this.configuration$.pipe(map((configuration) => configuration.overview));
    this.numberOfIssues$ = this.configuration$.pipe(map((configuration) => {
      const configOv = configuration.overview;
      if (configOv?.totalNumberOfIssues) {
        return configOv.numberOfIncompleteCharacteristics !== void 0 ? configOv.numberOfIncompleteCharacteristics : configOv.totalNumberOfIssues;
      } else {
        return configuration.totalNumberOfIssues ? configuration.totalNumberOfIssues : 0;
      }
    }));
    this.numberOfConflicts$ = this.configuration$.pipe(map((configuration) => {
      return configuration.overview?.numberOfConflicts ?? 0;
    }));
    this.skipConflictsOnIssueNavigation$ = this.configuration$.pipe(map((configuration) => {
      return (configuration.overview?.numberOfConflicts ?? 0) > 0;
    }));
    this.iconTypes = ICON_TYPE;
  }
  static {
    this.ɵfac = function ConfiguratorOverviewNotificationBannerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewNotificationBannerComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(CommonConfiguratorUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorOverviewNotificationBannerComponent,
      selectors: [["cx-configurator-overview-notification-banner"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "cx-error-notification-banner", 4, "ngIf"], ["class", "cx-conflict-notification-banner", 4, "ngIf"], [1, "cx-error-notification-banner"], [3, "type"], ["id", "cx-configurator-overview-error-msg", 1, "cx-error-msg"], ["aria-describedby", "cx-configurator-overview-error-msg", "cxAutoFocus", "", 1, "link", "cx-action-link", 3, "routerLink", "queryParams"], [1, "cx-conflict-notification-banner"], ["id", "cx-configurator-overview-conflict-msg", 1, "cx-conflict-msg"], ["aria-describedby", "cx-configurator-overview-conflict-msg", "cxAutoFocus", "", 1, "link", "cx-action-link", 3, "routerLink", "queryParams"]],
      template: function ConfiguratorOverviewNotificationBannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorOverviewNotificationBannerComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.routerData$));
        }
      },
      dependencies: [NgIf, IconComponent, RouterLink, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewNotificationBannerComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-overview-notification-banner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="routerData$ | async as routerData">
  <ng-container *ngIf="configurationOverview$ | async">
    <div
      class="cx-error-notification-banner"
      *ngIf="numberOfIssues$ | async as numberOfIssues"
    >
      <cx-icon [type]="iconTypes.ERROR"></cx-icon>
      <div class="cx-error-msg" id="cx-configurator-overview-error-msg">
        {{
          'configurator.notificationBanner.numberOfIssues'
            | cxTranslate: { count: numberOfIssues }
        }}
        <button
          class="link cx-action-link"
          aria-describedby="cx-configurator-overview-error-msg"
          [routerLink]="
            {
              cxRoute: 'configure' + routerData.owner.configuratorType,
              params: {
                entityKey: routerData.owner.id,
                ownerType: routerData.owner.type,
              },
            } | cxUrl
          "
          [queryParams]="{
            resolveIssues: true,
            skipConflicts: skipConflictsOnIssueNavigation$ | async,
            productCode: routerData.productCode,
          }"
          cxAutoFocus
        >
          {{ 'configurator.header.resolveIssues' | cxTranslate }}
        </button>
      </div>
    </div>
    <div
      class="cx-conflict-notification-banner"
      *ngIf="numberOfConflicts$ | async as numberOfConflicts"
    >
      <cx-icon [type]="iconTypes.WARNING"></cx-icon>
      <div class="cx-conflict-msg" id="cx-configurator-overview-conflict-msg">
        {{
          'configurator.notificationBanner.numberOfConflicts'
            | cxTranslate: { count: numberOfConflicts }
        }}
        <button
          class="link cx-action-link"
          aria-describedby="cx-configurator-overview-conflict-msg"
          [routerLink]="
            {
              cxRoute: 'configure' + routerData.owner.configuratorType,
              params: {
                entityKey: routerData.owner.id,
                ownerType: routerData.owner.type,
              },
            } | cxUrl
          "
          [queryParams]="{
            resolveIssues: true,
            productCode: routerData.productCode,
          }"
          cxAutoFocus
        >
          {{ 'configurator.header.resolveConflicts' | cxTranslate }}
        </button>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: CommonConfiguratorUtilsService
  }], null);
})();
var ConfiguratorOverviewNotificationBannerModule = class _ConfiguratorOverviewNotificationBannerModule {
  static {
    this.ɵfac = function ConfiguratorOverviewNotificationBannerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewNotificationBannerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorOverviewNotificationBannerModule,
      declarations: [ConfiguratorOverviewNotificationBannerComponent],
      imports: [CommonModule, I18nModule, UrlModule, IconModule, RouterModule],
      exports: [ConfiguratorOverviewNotificationBannerComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorOverviewBanner: {
            component: ConfiguratorOverviewNotificationBannerComponent
          }
        }
      })],
      imports: [CommonModule, I18nModule, UrlModule, IconModule, RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewNotificationBannerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, UrlModule, IconModule, RouterModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorOverviewBanner: {
            component: ConfiguratorOverviewNotificationBannerComponent
          }
        }
      })],
      declarations: [ConfiguratorOverviewNotificationBannerComponent],
      exports: [ConfiguratorOverviewNotificationBannerComponent]
    }]
  }], null, null);
})();
var ConfiguratorOverviewSidebarComponent = class _ConfiguratorOverviewSidebarComponent {
  constructor(configuratorCommonsService, configRouterExtractorService, configuratorStorefrontUtilsService) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
    this.ghostStyle = true;
    this.showFilter = false;
    this.configurationWithOv$ = this.configRouterExtractorService.extractRouterData().pipe(
      switchMap((routerData) => this.configuratorCommonsService.getConfiguration(routerData.owner)),
      // filter 'strict null check safe'
      filter((configuration) => configuration.overview != null),
      tap((data) => {
        if (data) {
          this.ghostStyle = false;
        }
      })
    );
  }
  /**
   * Triggers display of the filter view in the overview sidebar
   */
  onFilter() {
    this.showFilter = true;
  }
  /**
   * Triggers display of the menu view in the overview sidebar
   */
  onMenu() {
    this.showFilter = false;
  }
  /**
   * Returns the tabindex for the menu tab.
   *
   * The menu tab is excluded from the tab chain if currently the filter tab content is displayed.
   * @returns tabindex of the menu tab
   */
  getTabIndexForMenuTab() {
    return this.showFilter ? -1 : 0;
  }
  /**
   * Returns the tabindex for the filter tab.
   * The filter tab is excluded from the tab chain if currently the menu tab content is displayed.
   * @returns tabindex of the fitler tab
   */
  getTabIndexForFilterTab() {
    return this.showFilter ? 0 : -1;
  }
  /**
   * Switches the focus of the tabs on pressing left or right arrow key.
   * @param {KeyboardEvent} event - Keyboard event
   * @param {string} currentTab - Current tab
   */
  switchTabOnArrowPress(event, currentTab) {
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
      event.preventDefault();
      if (currentTab === "#menuTab") {
        this.filterTab.nativeElement?.focus();
      } else {
        this.menuTab.nativeElement?.focus();
      }
    }
  }
  static {
    this.ɵfac = function ConfiguratorOverviewSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewSidebarComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorOverviewSidebarComponent,
      selectors: [["cx-configurator-overview-sidebar"]],
      viewQuery: function ConfiguratorOverviewSidebarComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c31, 5);
          ɵɵviewQuery(_c32, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menuTab = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterTab = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function ConfiguratorOverviewSidebarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ghost", ctx.ghostStyle);
        }
      },
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["ghostSidebar", ""], ["menuTab", ""], ["filterTab", ""], [4, "ngIf", "ngIfElse"], ["role", "tablist", 1, "cx-menu-bar"], ["role", "tab", 3, "keydown", "keydown.enter", "keydown.space", "click", "tabindex"], [3, "config", 4, "ngIf"], [3, "config"], [1, "cx-ghost-menu"], [1, "cx-ghost-menu-bar", "ghost"], [4, "ngFor", "ngForOf"], [1, "cx-ghost-menu-level1"], [1, "cx-ghost-menu-item"], [1, "cx-ghost-menu-item-title", "ghost"], [4, "ngIf"], [1, "cx-ghost-menu-level2"], ["class", "cx-ghost-menu-item", 4, "ngFor", "ngForOf"], [1, "cx-ghost-menu-level3"]],
      template: function ConfiguratorOverviewSidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorOverviewSidebarComponent_ng_container_0_Template, 12, 16, "ng-container", 3);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ConfiguratorOverviewSidebarComponent_ng_template_2_Template, 3, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const ghostSidebar_r5 = ɵɵreference(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.configurationWithOv$))("ngIfElse", ghostSidebar_r5);
        }
      },
      dependencies: [NgForOf, NgIf, ConfiguratorOverviewFilterComponent, ConfiguratorOverviewMenuComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewSidebarComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-overview-sidebar",
      standalone: false,
      template: `<ng-container
  *ngIf="configurationWithOv$ | async as configurationWithOv; else ghostSidebar"
>
  <div class="cx-menu-bar" role="tablist">
    <button
      #menuTab
      [tabindex]="getTabIndexForMenuTab()"
      role="tab"
      [attr.aria-selected]="!showFilter"
      [class.active]="!showFilter"
      (keydown)="switchTabOnArrowPress($event, '#menuTab')"
      (keydown.enter)="onMenu()"
      (keydown.space)="onMenu()"
      (click)="onMenu()"
    >
      {{ 'configurator.overviewSidebar.menu' | cxTranslate }}
    </button>
    <button
      #filterTab
      [tabindex]="getTabIndexForFilterTab()"
      role="tab"
      [attr.aria-selected]="showFilter"
      [class.active]="showFilter"
      (keydown)="switchTabOnArrowPress($event, '#filterTab')"
      (keydown.enter)="onFilter()"
      (keydown.space)="onFilter()"
      (click)="onFilter()"
    >
      {{ 'configurator.overviewSidebar.filter' | cxTranslate }}
    </button>
  </div>

  <cx-configurator-overview-filter
    *ngIf="showFilter"
    [config]="configurationWithOv"
  >
  </cx-configurator-overview-filter>

  <cx-configurator-overview-menu
    *ngIf="!showFilter"
    [config]="configurationWithOv"
  >
  </cx-configurator-overview-menu>
</ng-container>

<ng-template #ghostSidebar>
  <div class="cx-ghost-menu">
    <div class="cx-ghost-menu-bar ghost"></div>
    <ng-container *ngFor="let number of [0, 1]">
      <ng-container *ngFor="let number of [0, 1, 2]; let i = index">
        <div class="cx-ghost-menu-level1">
          <div class="cx-ghost-menu-item">
            <div class="cx-ghost-menu-item-title ghost"></div>
          </div>

          <ng-container *ngIf="i === 0">
            <div class="cx-ghost-menu-level2">
              <div
                *ngFor="let number of [0, 1, 2, 3]"
                class="cx-ghost-menu-item"
              >
                <div class="cx-ghost-menu-item-title ghost"></div>
              </div>
            </div>
          </ng-container>

          <ng-container *ngIf="i === 1">
            <div class="cx-ghost-menu-level2">
              <div *ngFor="let number of [0, 1, 2]" class="cx-ghost-menu-item">
                <div class="cx-ghost-menu-item-title ghost"></div>
              </div>
              <div class="cx-ghost-menu-level3">
                <div
                  *ngFor="let number of [0, 1, 2]"
                  class="cx-ghost-menu-item"
                >
                  <div class="cx-ghost-menu-item-title ghost"></div>
                </div>
              </div>
            </div>
          </ng-container>

          <ng-container *ngIf="i === 2">
            <div class="cx-ghost-menu-level1">
              <div *ngFor="let number of [0, 1]" class="cx-ghost-menu-item">
                <div class="cx-ghost-menu-item-title ghost"></div>
              </div>
            </div>
          </ng-container>
        </div>
      </ng-container>
    </ng-container>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }], {
    ghostStyle: [{
      type: HostBinding,
      args: ["class.ghost"]
    }],
    menuTab: [{
      type: ViewChild,
      args: ["menuTab"]
    }],
    filterTab: [{
      type: ViewChild,
      args: ["filterTab"]
    }]
  });
})();
var ConfiguratorOverviewSidebarModule = class _ConfiguratorOverviewSidebarModule {
  static {
    this.ɵfac = function ConfiguratorOverviewSidebarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorOverviewSidebarModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorOverviewSidebarModule,
      declarations: [ConfiguratorOverviewSidebarComponent],
      imports: [CommonModule, I18nModule, ConfiguratorOverviewFilterModule, ConfiguratorOverviewMenuModule],
      exports: [ConfiguratorOverviewSidebarComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorOverviewSidebar: {
            component: ConfiguratorOverviewSidebarComponent
          }
        }
      })],
      imports: [CommonModule, I18nModule, ConfiguratorOverviewFilterModule, ConfiguratorOverviewMenuModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorOverviewSidebarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, ConfiguratorOverviewFilterModule, ConfiguratorOverviewMenuModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorOverviewSidebar: {
            component: ConfiguratorOverviewSidebarComponent
          }
        }
      })],
      declarations: [ConfiguratorOverviewSidebarComponent],
      exports: [ConfiguratorOverviewSidebarComponent]
    }]
  }], null, null);
})();
var ConfiguratorPreviousNextButtonsComponent = class _ConfiguratorPreviousNextButtonsComponent {
  constructor(configuratorGroupsService, configuratorCommonsService, configRouterExtractorService, configUtils) {
    this.configuratorGroupsService = configuratorGroupsService;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.configUtils = configUtils;
    this.configuration$ = this.configRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => this.configuratorCommonsService.getConfiguration(routerData.owner)));
  }
  onPrevious(configuration) {
    this.configuratorGroupsService.getPreviousGroupId(configuration.owner).pipe(take(1)).subscribe((groupId) => {
      if (groupId) {
        this.configuratorGroupsService.navigateToGroup(configuration, groupId);
        this.focusFirstAttribute();
      }
    });
    this.configUtils.scrollToConfigurationElement(".VariantConfigurationTemplate, .CpqConfigurationTemplate");
  }
  onNext(configuration) {
    this.configuratorGroupsService.getNextGroupId(configuration.owner).pipe(take(1)).subscribe((groupId) => {
      if (groupId) {
        this.configuratorGroupsService.navigateToGroup(configuration, groupId);
        this.focusFirstAttribute();
      }
    });
    this.configUtils.scrollToConfigurationElement(".VariantConfigurationTemplate, .CpqConfigurationTemplate");
  }
  getPreviousGroupDescription(configuration) {
    return this.configuratorGroupsService.getPreviousGroupDescription(configuration);
  }
  getNextGroupDescription(configuration) {
    return this.configuratorGroupsService.getNextGroupDescription(configuration);
  }
  isFirstGroup(owner) {
    return this.configuratorGroupsService.getPreviousGroupId(owner).pipe(map((group) => !group));
  }
  isLastGroup(owner) {
    return this.configuratorGroupsService.getNextGroupId(owner).pipe(map((group) => !group));
  }
  focusFirstAttribute() {
    this.configRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => this.configuratorCommonsService.isConfigurationLoading(routerData.owner).pipe(filter((isLoading) => isLoading), take(1), switchMap(() => this.configuratorCommonsService.isConfigurationLoading(routerData.owner).pipe(
      filter((isLoading) => !isLoading),
      take(1),
      delay(0)
      //we need to consider the re-rendering of the page
    ))))).subscribe(() => this.configUtils.focusFirstAttribute());
  }
  static {
    this.ɵfac = function ConfiguratorPreviousNextButtonsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorPreviousNextButtonsComponent)(ɵɵdirectiveInject(ConfiguratorGroupsService), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(ConfiguratorStorefrontUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorPreviousNextButtonsComponent,
      selectors: [["cx-configurator-previous-next-buttons"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "btn", "btn-block", "btn-secondary", "cx-previous", 3, "click", "disabled"], [1, "btn", "btn-block", "btn-secondary", "cx-next", 3, "click", "disabled"]],
      template: function ConfiguratorPreviousNextButtonsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorPreviousNextButtonsComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.configuration$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorPreviousNextButtonsComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-previous-next-buttons",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="configuration$ | async as configuration">
  <ng-container *ngIf="configuration.groups.length > 1">
    <button
      class="btn btn-block btn-secondary cx-previous"
      [disabled]="isFirstGroup(configuration.owner) | async"
      (click)="onPrevious(configuration)"
      [attr.aria-label]="
        'configurator.a11y.previous'
          | cxTranslate
            : {
                group: getPreviousGroupDescription(configuration) | async,
              }
      "
    >
      {{ 'configurator.button.previous' | cxTranslate }}
    </button>
    <button
      class="btn btn-block btn-secondary cx-next"
      [disabled]="isLastGroup(configuration.owner) | async"
      (click)="onNext(configuration)"
      [attr.aria-label]="
        'configurator.a11y.next'
          | cxTranslate
            : {
                group: getNextGroupDescription(configuration) | async,
              }
      "
    >
      {{ 'configurator.button.next' | cxTranslate }}
    </button>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: ConfiguratorGroupsService
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: ConfiguratorStorefrontUtilsService
  }], null);
})();
var ConfiguratorPreviousNextButtonsModule = class _ConfiguratorPreviousNextButtonsModule {
  static {
    this.ɵfac = function ConfiguratorPreviousNextButtonsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorPreviousNextButtonsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorPreviousNextButtonsModule,
      declarations: [ConfiguratorPreviousNextButtonsComponent],
      imports: [CommonModule, I18nModule, KeyboardFocusModule],
      exports: [ConfiguratorPreviousNextButtonsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorPrevNext: {
            component: ConfiguratorPreviousNextButtonsComponent
          }
        }
      })],
      imports: [CommonModule, I18nModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorPreviousNextButtonsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, KeyboardFocusModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorPrevNext: {
            component: ConfiguratorPreviousNextButtonsComponent
          }
        }
      })],
      declarations: [ConfiguratorPreviousNextButtonsComponent],
      exports: [ConfiguratorPreviousNextButtonsComponent]
    }]
  }], null, null);
})();
var ConfiguratorPriceSummaryComponent = class _ConfiguratorPriceSummaryComponent {
  constructor(configuratorCommonsService, configRouterExtractorService) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.configuration$ = this.configRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => {
      return this.configuratorCommonsService.getConfiguration(routerData.owner);
    }));
  }
  static {
    this.ɵfac = function ConfiguratorPriceSummaryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorPriceSummaryComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorPriceSummaryComponent,
      selectors: [["cx-configurator-price-summary"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-price-summary-container"], [1, "cx-total-summary"], [1, "cx-summary-row", "cx-total-price"], [1, "cx-label"], [1, "cx-amount"], [1, "cx-summary-row", "cx-base-price"], [1, "cx-summary-row", "cx-selected-options"]],
      template: function ConfiguratorPriceSummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorPriceSummaryComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.configuration$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorPriceSummaryComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-price-summary",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="configuration$ | async as configuration">
  <ng-container *ngIf="configuration.pricingEnabled">
    <div class="cx-price-summary-container">
      <div class="cx-total-summary">
        <ng-container *ngIf="!configuration.hideBasePriceAndSelectedOptions">
          <div class="cx-summary-row cx-base-price">
            <div class="cx-label">
              {{ 'configurator.priceSummary.basePrice' | cxTranslate }}:
            </div>
            <div class="cx-amount">
              {{ configuration?.priceSummary?.basePrice?.formattedValue }}
            </div>
          </div>
          <div class="cx-summary-row cx-selected-options">
            <div class="cx-label">
              {{ 'configurator.priceSummary.selectedOptions' | cxTranslate }}:
            </div>
            <div class="cx-amount">
              {{ configuration?.priceSummary?.selectedOptions?.formattedValue }}
            </div>
          </div>
        </ng-container>
        <div class="cx-summary-row cx-total-price">
          <div class="cx-label">
            {{ 'configurator.priceSummary.totalPricePerItem' | cxTranslate }}:
          </div>
          <div class="cx-amount">
            {{ configuration?.priceSummary?.currentTotal?.formattedValue }}
          </div>
        </div>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorRouterExtractorService
  }], null);
})();
var ConfiguratorPriceSummaryModule = class _ConfiguratorPriceSummaryModule {
  static {
    this.ɵfac = function ConfiguratorPriceSummaryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorPriceSummaryModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorPriceSummaryModule,
      declarations: [ConfiguratorPriceSummaryComponent],
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule],
      exports: [ConfiguratorPriceSummaryComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorPriceSummary: {
            component: ConfiguratorPriceSummaryComponent
          }
        }
      })],
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorPriceSummaryModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorPriceSummary: {
            component: ConfiguratorPriceSummaryComponent
          }
        }
      })],
      declarations: [ConfiguratorPriceSummaryComponent],
      exports: [ConfiguratorPriceSummaryComponent]
    }]
  }], null, null);
})();
var ConfiguratorMainAriaLabelledByDirective = class _ConfiguratorMainAriaLabelledByDirective {
  constructor() {
    this.winRef = inject(WindowRef);
    this.mainEl = null;
  }
  ngOnInit() {
    this.mainEl = this.winRef.document.querySelector("main");
    if (this.mainEl && this.labelledbyId) {
      this.mainEl.setAttribute("aria-labelledby", this.labelledbyId);
    }
  }
  ngOnDestroy() {
    if (this.mainEl) {
      this.mainEl.removeAttribute("aria-labelledby");
    }
  }
  static {
    this.ɵfac = function ConfiguratorMainAriaLabelledByDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorMainAriaLabelledByDirective)();
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ConfiguratorMainAriaLabelledByDirective,
      selectors: [["", "cxConfiguratorMainAriaLabelledBy", ""]],
      inputs: {
        labelledbyId: [0, "cxConfiguratorMainAriaLabelledBy", "labelledbyId"]
      }
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorMainAriaLabelledByDirective, [{
    type: Directive,
    args: [{
      selector: "[cxConfiguratorMainAriaLabelledBy]",
      standalone: true
    }]
  }], null, {
    labelledbyId: [{
      type: Input,
      args: ["cxConfiguratorMainAriaLabelledBy"]
    }]
  });
})();
var ConfiguratorProductTitleComponent = class _ConfiguratorProductTitleComponent {
  getProductCode(container) {
    if (!!container.routerData.productCode) {
      return container.routerData.productCode;
    }
    return !!container.configuration.productCode ? container.configuration.productCode : container.configuration.overview?.productCode;
  }
  constructor(configuratorCommonsService, configRouterExtractorService, productService, configExpertModeService) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.productService = productService;
    this.configExpertModeService = configExpertModeService;
    this.ghostStyle = true;
    this.routerData$ = this.configRouterExtractorService.extractRouterData();
    this.configuration$ = this.routerData$.pipe(switchMap((routerData) => {
      return this.configuratorCommonsService.getConfiguration(routerData.owner);
    }));
    this.product$ = this.routerData$.pipe(switchMap((routerData) => this.configuration$.pipe(map((configuration) => ({
      routerData,
      configuration
    }))).pipe(map((container) => {
      return this.getProductCode(container);
    }), switchMap((productCode) => productCode ? this.productService.get(productCode, ProductScope.LIST) : EMPTY)).pipe(tap(() => {
      this.ghostStyle = false;
    }))));
    this.showMore = false;
    this.iconTypes = ICON_TYPE;
    useFeatureStyles("a11yWideScreenImprovements");
  }
  triggerDetails() {
    this.showMore = !this.showMore;
  }
  get expMode() {
    return this.configExpertModeService.getExpModeActive();
  }
  static {
    this.ɵfac = function ConfiguratorProductTitleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorProductTitleComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(ProductService), ɵɵdirectiveInject(ConfiguratorExpertModeService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorProductTitleComponent,
      selectors: [["cx-configurator-product-title"]],
      hostVars: 2,
      hostBindings: function ConfiguratorProductTitleComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ghost", ctx.ghostStyle);
        }
      },
      standalone: false,
      decls: 4,
      vars: 4,
      consts: [["ghostProductTitle", ""], [4, "ngIf", "ngIfElse"], [1, "cx-general-product-info"], [1, "cx-title"], ["id", "cxConfigProductName", "role", "heading", "aria-level", "1", 3, "cxConfiguratorMainAriaLabelledBy"], [3, "click"], [4, "ngIf"], [1, "cx-details"], ["aria-hidden", "true", 1, "cx-details-image"], ["format", "product", 3, "container"], [1, "cx-details-content"], [1, "cx-detail-title"], [1, "cx-code"], [1, "cx-description"], [1, "cx-toggle-details-link-text"], ["aria-hidden", "true"], [3, "type"], ["aria-hidden", "true", 1, "cx-toggle-details-link-text"], [1, "cx-kb-key-details"], [1, "cx-kb-pair"], [1, "cx-label"], [1, "cx-value"], [1, "cx-ghost-general-product-info"]],
      template: function ConfiguratorProductTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorProductTitleComponent_ng_container_0_Template, 20, 15, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, ConfiguratorProductTitleComponent_ng_template_2_Template, 1, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const ghostProductTitle_r5 = ɵɵreference(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.product$))("ngIfElse", ghostProductTitle_r5);
        }
      },
      dependencies: [NgIf, IconComponent, MediaComponent, ConfiguratorMainAriaLabelledByDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorProductTitleComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-product-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="product$ | async as product; else ghostProductTitle">
  <div class="cx-general-product-info">
    <div class="cx-title">
      <span
        id="cxConfigProductName"
        [cxConfiguratorMainAriaLabelledBy]="'cxConfigProductName'"
        role="heading"
        aria-level="1"
      >
        {{ product.name }}
      </span>
    </div>
    <button (click)="triggerDetails()" [attr.aria-expanded]="showMore">
      <ng-container *ngIf="!showMore">
        <div class="cx-toggle-details-link-text">
          <span aria-hidden="true">{{
            'configurator.header.showMore' | cxTranslate
          }}</span>
        </div>
        <cx-icon
          [attr.aria-label]="
            'configurator.a11y.showMoreProductInfo'
              | cxTranslate: { product: product.name }
          "
          [type]="iconTypes.CARET_DOWN"
        ></cx-icon>
      </ng-container>

      <ng-container *ngIf="showMore">
        <div class="cx-toggle-details-link-text" aria-hidden="true">
          {{ 'configurator.header.showLess' | cxTranslate }}
        </div>
        <cx-icon
          [attr.aria-label]="
            'configurator.a11y.showLessProductInfo'
              | cxTranslate: { product: product.name }
          "
          [type]="iconTypes.CARET_UP"
        ></cx-icon>
      </ng-container>
    </button>
    <div class="cx-details" [class.open]="showMore">
      <div class="cx-details-image" aria-hidden="true">
        <cx-media
          [container]="product?.images?.PRIMARY"
          format="product"
        ></cx-media>
      </div>
      <div
        class="cx-details-content"
        [attr.aria-hidden]="showMore ? false : true"
      >
        <div class="cx-detail-title">
          <span
            *ngIf="product.name"
            [attr.title]="'configurator.a11y.productName' | cxTranslate"
          >
            {{ product.name }}
          </span>
        </div>
        <div class="cx-code">
          <span
            *ngIf="product.code"
            [attr.title]="'configurator.a11y.productCode' | cxTranslate"
          >
            {{ product.code }}
          </span>
        </div>
        <div class="cx-description">
          <span
            *ngIf="product.description"
            [attr.title]="'configurator.a11y.productDescription' | cxTranslate"
          >
            {{ product.description }}
          </span>
        </div>

        <ng-container *ngIf="expMode | async">
          <ng-container *ngIf="configuration$ | async as configuration">
            <ng-container *ngIf="configuration.kbKey">
              <div class="cx-kb-key-details">
                <ng-container *ngIf="configuration.kbKey.kbName">
                  <div class="cx-kb-pair">
                    <span
                      class="cx-label"
                      [attr.aria-label]="
                        'configurator.a11y.kbKeyName'
                          | cxTranslate: { name: configuration.kbKey.kbName }
                      "
                    >
                      {{ 'configurator.header.kbKeyName' | cxTranslate }}
                    </span>
                    <span class="cx-value">
                      {{ configuration.kbKey.kbName }}
                    </span>
                  </div>
                </ng-container>
                <ng-container *ngIf="configuration.kbKey.kbLogsys">
                  <div class="cx-kb-pair">
                    <span
                      class="cx-label"
                      [attr.aria-label]="
                        'configurator.a11y.kbKeyLogsys'
                          | cxTranslate
                            : { logsys: configuration.kbKey.kbLogsys }
                      "
                    >
                      {{ 'configurator.header.kbKeyLogsys' | cxTranslate }}
                    </span>
                    <span class="cx-value">
                      {{ configuration.kbKey.kbLogsys }}
                    </span>
                  </div>
                </ng-container>
                <ng-container *ngIf="configuration.kbKey.kbVersion">
                  <div class="cx-kb-pair">
                    <span
                      class="cx-label"
                      [attr.aria-label]="
                        'configurator.a11y.kbKeyVersion'
                          | cxTranslate
                            : { version: configuration.kbKey.kbVersion }
                      "
                    >
                      {{ 'configurator.header.kbKeyVersion' | cxTranslate }}
                    </span>
                    <span class="cx-value">
                      {{ configuration.kbKey.kbVersion }}
                    </span>
                  </div>
                </ng-container>
                <ng-container *ngIf="configuration.kbKey.kbBuildNumber">
                  <div class="cx-kb-pair">
                    <span
                      class="cx-label"
                      [attr.aria-label]="
                        'configurator.a11y.kbKeyBuildNr'
                          | cxTranslate
                            : { number: configuration.kbKey.kbBuildNumber }
                      "
                    >
                      {{ 'configurator.header.kbKeyBuildNr' | cxTranslate }}
                    </span>
                    <span class="cx-value">
                      {{ configuration.kbKey.kbBuildNumber }}
                    </span>
                  </div>
                </ng-container>
              </div>
            </ng-container>
          </ng-container>
        </ng-container>
      </div>
    </div>
  </div>
</ng-container>
<ng-template #ghostProductTitle>
  <div class="cx-ghost-general-product-info"></div>
</ng-template>
`
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: ProductService
  }, {
    type: ConfiguratorExpertModeService
  }], {
    ghostStyle: [{
      type: HostBinding,
      args: ["class.ghost"]
    }]
  });
})();
var ConfiguratorProductTitleModule = class _ConfiguratorProductTitleModule {
  static {
    this.ɵfac = function ConfiguratorProductTitleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorProductTitleModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorProductTitleModule,
      declarations: [ConfiguratorProductTitleComponent],
      imports: [FormsModule, ReactiveFormsModule, NgSelectModule, CommonModule, I18nModule, IconModule, MediaModule, ConfiguratorMainAriaLabelledByDirective],
      exports: [ConfiguratorProductTitleComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorProductTitle: {
            component: ConfiguratorProductTitleComponent
          }
        }
      })],
      imports: [FormsModule, ReactiveFormsModule, NgSelectModule, CommonModule, I18nModule, IconModule, MediaModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorProductTitleModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, ReactiveFormsModule, NgSelectModule, CommonModule, I18nModule, IconModule, MediaModule, ConfiguratorMainAriaLabelledByDirective],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorProductTitle: {
            component: ConfiguratorProductTitleComponent
          }
        }
      })],
      declarations: [ConfiguratorProductTitleComponent],
      exports: [ConfiguratorProductTitleComponent]
    }]
  }], null, null);
})();
var ConfiguratorRestartDialogComponent = class _ConfiguratorRestartDialogComponent {
  constructor(launchDialogService, configuratorCommonsService, routingService, productService) {
    this.launchDialogService = launchDialogService;
    this.configuratorCommonsService = configuratorCommonsService;
    this.routingService = routingService;
    this.productService = productService;
    this.dialogData$ = this.launchDialogService.data$.pipe(
      // In case conflict solver opens as well we need to filter out is data
      filter((dialogData) => dialogData && dialogData.owner)
    );
    this.product$ = this.dialogData$.pipe(switchMap((dialogData) => this.productService.get(dialogData.owner.id)));
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: ".btn-primary",
      focusOnEscape: true
    };
  }
  /**
   * Closes the dialog
   */
  close() {
    this.launchDialogService.closeDialog("Close restart configuration dialog");
  }
  /**
   * Resume with current configuration
   * @param product owning this configuration
   */
  resume(product) {
    this.close();
    this.routingService.go({
      cxRoute: "configure" + product.configuratorType,
      params: {
        ownerType: CommonConfigurator.OwnerType.PRODUCT,
        entityKey: product.code
      }
    }, {
      queryParams: {
        productCode: product.code
      }
    });
  }
  /**
   * Discards current configuration and requests a new default configuration
   * @param owner owner of the current configuration that will be reused for next configuration
   */
  restart(owner) {
    this.configuratorCommonsService.forceNewConfiguration(owner);
    this.close();
  }
  /**
   * Navigates back to product detail page without making a decision
   * @param product owning this configuration
   */
  backToPDP(product) {
    this.close();
    this.routingService.go({
      cxRoute: "product",
      params: product
    });
  }
  static {
    this.ɵfac = function ConfiguratorRestartDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorRestartDialogComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(ProductService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorRestartDialogComponent,
      selectors: [["cx-configurator-restart-dialog"]],
      standalone: false,
      decls: 3,
      vars: 3,
      consts: [["role", "dialog", "aria-modal", "true", "aria-labelledby", "dialogTitle", 1, "cx-modal-container"], [4, "ngIf"], [1, "cx-modal-content", 3, "esc", "cxFocus"], [1, "cx-dialog-header", "modal-header"], ["id", "dialogTitle", 1, "cx-dialog-title", "modal-title"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [1, "cx-dialog-body", "modal-body"], ["id", "cx-configurator-restart-dialog-description"], ["aria-describedby", "cx-configurator-restart-dialog-description", 1, "btn", "btn-primary", "btn-block", 3, "click"], ["type", "button", "aria-describedby", "cx-configurator-restart-dialog-description", 1, "btn", "btn-secondary", "btn-block", 3, "click"]],
      template: function ConfiguratorRestartDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵtemplate(1, ConfiguratorRestartDialogComponent_ng_container_1_Template, 3, 3, "ng-container", 1);
          ɵɵpipe(2, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx.dialogData$));
        }
      },
      dependencies: [NgIf, IconComponent, FocusDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorRestartDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-restart-dialog",
      standalone: false,
      template: `<div
  class="cx-modal-container"
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialogTitle"
>
  <ng-container *ngIf="dialogData$ | async as dialogData">
    <ng-container *ngIf="product$ | async as product">
      <div
        class="cx-modal-content"
        [cxFocus]="focusConfig"
        (esc)="backToPDP(product)"
      >
        <div class="cx-dialog-header modal-header">
          <h3 id="dialogTitle" class="cx-dialog-title modal-title">
            {{ 'configurator.restartDialog.title' | cxTranslate }}
          </h3>
          <button
            title="{{ 'configurator.a11y.closeRestartDialog' | cxTranslate }}"
            type="button"
            class="close"
            (click)="backToPDP(product)"
          >
            <span aria-hidden="true">
              <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
            </span>
          </button>
        </div>

        <div class="cx-dialog-body modal-body">
          <div id="cx-configurator-restart-dialog-description">
            {{ 'configurator.restartDialog.description' | cxTranslate }}
          </div>
          <button
            class="btn btn-primary btn-block"
            (click)="resume(product)"
            aria-describedby="cx-configurator-restart-dialog-description"
          >
            {{ 'configurator.restartDialog.resumeButton' | cxTranslate }}
          </button>
          <button
            type="button"
            class="btn btn-secondary btn-block"
            (click)="restart(dialogData.owner)"
            aria-describedby="cx-configurator-restart-dialog-description"
          >
            {{ 'configurator.restartDialog.restartButton' | cxTranslate }}
          </button>
        </div>
      </div>
    </ng-container>
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ConfiguratorCommonsService
  }, {
    type: RoutingService
  }, {
    type: ProductService
  }], null);
})();
var defaultConfiguratorRestartDialogLayoutConfig = {
  launch: {
    CONFIGURATOR_RESTART_DIALOG: {
      inlineRoot: true,
      component: ConfiguratorRestartDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var ConfiguratorRestartDialogModule = class _ConfiguratorRestartDialogModule {
  static {
    this.ɵfac = function ConfiguratorRestartDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorRestartDialogModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorRestartDialogModule,
      declarations: [ConfiguratorRestartDialogComponent],
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule, FeaturesConfigModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultConfiguratorRestartDialogLayoutConfig)],
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorRestartDialogModule, [{
    type: NgModule,
    args: [{
      declarations: [ConfiguratorRestartDialogComponent],
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule, FeaturesConfigModule],
      providers: [provideDefaultConfig(defaultConfiguratorRestartDialogLayoutConfig)]
    }]
  }], null, null);
})();
var ConfiguratorTabBarComponent = class _ConfiguratorTabBarComponent {
  static {
    this.TAB_BAR_QUERY_SELECTOR = "cx-configurator-tab-bar";
  }
  determinePageFromRouterData(routerData) {
    return routerData.pageType ?? ConfiguratorRouter.PageType.CONFIGURATION;
  }
  /**
   * Checks whether the current page is the overview page.
   *
   * @param pageType - Page type
   * @returns Page is overview page?
   */
  isOverviewPage(pageType) {
    return pageType === ConfiguratorRouter.PageType.OVERVIEW;
  }
  /**
   * Navigates to the overview page and sets the focus on the overview element in the tab-bar.
   *
   * @param routerData - Router data
   */
  navigateToOverview(routerData) {
    this.routingService.go({
      cxRoute: "configureOverview" + routerData.owner.configuratorType,
      params: {
        entityKey: routerData.owner.id,
        ownerType: routerData.owner.type
      }
    }, {
      queryParams: {
        productCode: routerData.productCode
      }
    }).then(() => {
      this.focusOverviewInTabBar();
    });
  }
  /**
   * Navigates to the configuration page and sets the focus on the configuration element in the tab-bar.
   *
   * @param routerData - Router data
   */
  navigateToConfiguration(routerData) {
    this.routingService.go({
      cxRoute: "configure" + routerData.owner.configuratorType,
      params: {
        entityKey: routerData.owner.id,
        ownerType: routerData.owner.type
      }
    }, {
      queryParams: {
        productCode: routerData.productCode
      }
    }).then(() => {
      this.focusConfigurationInTabBar();
    });
  }
  focusOverviewInTabBar() {
    this.configRouterExtractorService.extractRouterData().pipe(
      switchMap((routerData) => this.configuratorCommonsService.getConfiguration(routerData.owner)),
      filter((configuration) => configuration.overview != null),
      take(1),
      delay(0)
      //we need to consider the re-rendering of the page
    ).subscribe(() => {
      this.focusService.clear();
      this.configUtils.focusFirstActiveElement(_ConfiguratorTabBarComponent.TAB_BAR_QUERY_SELECTOR);
    });
  }
  focusConfigurationInTabBar() {
    this.configRouterExtractorService.extractRouterData().pipe(
      filter((routerData) => routerData.pageType === ConfiguratorRouter.PageType.CONFIGURATION),
      switchMap((routerData) => {
        return this.configuratorCommonsService.getConfiguration(routerData.owner);
      }),
      take(1),
      delay(0)
      //we need to consider the re-rendering of the page
    ).subscribe(() => {
      this.focusService.clear();
      this.configUtils.focusFirstActiveElement(_ConfiguratorTabBarComponent.TAB_BAR_QUERY_SELECTOR);
    });
  }
  /**
   * Returns the tabindex for the configuration tab.
   *
   * The configuration tab is excluded from the tab chain if currently the overview page is displayed.
   * @param pageType - Page type
   * @returns tabindex of the configuration tab
   */
  getTabIndexForConfigTab(pageType) {
    return this.isOverviewPage(pageType) ? -1 : 0;
  }
  /**
   * Returns the tabindex for the overview tab.
   * The overview tab is excluded from the tab chain if currently the configuration page is displayed.
   * @param pageType
   * @returns tabindex of the overview tab
   */
  getTabIndexForOverviewTab(pageType) {
    return this.isOverviewPage(pageType) ? 0 : -1;
  }
  /**
   * Switches the focus of the tabs on pressing left or right arrow key.
   * @param {KeyboardEvent} event - Keyboard event
   * @param {string} currentTab - Current tab
   */
  switchTabOnArrowPress(event, currentTab) {
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
      event.preventDefault();
      if (currentTab === "#configTab") {
        this.overviewTab.nativeElement?.focus();
      } else {
        this.configTab.nativeElement?.focus();
      }
    }
  }
  constructor(configRouterExtractorService, configuratorCommonsService) {
    this.configRouterExtractorService = configRouterExtractorService;
    this.configuratorCommonsService = configuratorCommonsService;
    this.ghostStyle = true;
    this.routingService = inject(RoutingService);
    this.configUtils = inject(ConfiguratorStorefrontUtilsService);
    this.focusService = inject(KeyboardFocusService);
    this.routerData$ = this.configRouterExtractorService.extractRouterData();
    this.configuration$ = this.routerData$.pipe(switchMap((routerData) => this.configuratorCommonsService.getConfiguration(routerData.owner).pipe(tap(() => {
      this.ghostStyle = false;
    }))));
    this.pageType$ = this.routerData$.pipe(map((routerData) => this.determinePageFromRouterData(routerData)));
  }
  static {
    this.ɵfac = function ConfiguratorTabBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorTabBarComponent)(ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(ConfiguratorCommonsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorTabBarComponent,
      selectors: [["cx-configurator-tab-bar"]],
      viewQuery: function ConfiguratorTabBarComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c39, 5);
          ɵɵviewQuery(_c40, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.configTab = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overviewTab = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function ConfiguratorTabBarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassProp("ghost", ctx.ghostStyle);
        }
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["ghostTabBar", ""], ["configTab", ""], ["overviewTab", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "cx-tab-bar", "role", "tablist", 4, "ngIf"], ["role", "tablist", 1, "cx-tab-bar"], ["role", "tab", 3, "keydown", "keydown.enter", "keydown.space", "click", "tabindex"], [1, "cx-ghost-tab-bar"]],
      template: function ConfiguratorTabBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorTabBarComponent_ng_container_0_Template, 5, 4, "ng-container", 3);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.routerData$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorTabBarComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-tab-bar",
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: false,
      template: `<ng-container *ngIf="routerData$ | async as routerData">
  <ng-container *ngIf="configuration$ | async; else ghostTabBar">
    <ng-container *ngIf="!routerData.displayOnly">
      <div
        class="cx-tab-bar"
        role="tablist"
        *ngIf="pageType$ | async as pageType"
      >
        <a
          #configTab
          [tabindex]="getTabIndexForConfigTab(pageType)"
          role="tab"
          [class.active]="!isOverviewPage(pageType)"
          [attr.aria-selected]="!isOverviewPage(pageType)"
          (keydown)="switchTabOnArrowPress($event, '#configTab')"
          (keydown.enter)="navigateToConfiguration(routerData)"
          (keydown.space)="navigateToConfiguration(routerData)"
          (click)="navigateToConfiguration(routerData)"
          [attr.aria-label]="
            !isOverviewPage(pageType)
              ? ('configurator.a11y.configurationPage' | cxTranslate)
              : ('configurator.a11y.configurationPageLink' | cxTranslate)
          "
          >{{ 'configurator.tabBar.configuration' | cxTranslate }}</a
        >
        <a
          #overviewTab
          [tabindex]="getTabIndexForOverviewTab(pageType)"
          role="tab"
          [class.active]="isOverviewPage(pageType)"
          [attr.aria-selected]="isOverviewPage(pageType)"
          (keydown)="switchTabOnArrowPress($event, '#overviewTab')"
          (keydown.enter)="navigateToOverview(routerData)"
          (keydown.space)="navigateToOverview(routerData)"
          (click)="navigateToOverview(routerData)"
          [attr.aria-label]="
            isOverviewPage(pageType)
              ? ('configurator.a11y.overviewPage' | cxTranslate)
              : ('configurator.a11y.overviewPageLink' | cxTranslate)
          "
          >{{ 'configurator.tabBar.overview' | cxTranslate }}</a
        >
      </div>
    </ng-container>
  </ng-container>
  <ng-template #ghostTabBar>
    <div class="cx-ghost-tab-bar"></div>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: ConfiguratorRouterExtractorService
  }, {
    type: ConfiguratorCommonsService
  }], {
    ghostStyle: [{
      type: HostBinding,
      args: ["class.ghost"]
    }],
    configTab: [{
      type: ViewChild,
      args: ["configTab"]
    }],
    overviewTab: [{
      type: ViewChild,
      args: ["overviewTab"]
    }]
  });
})();
var ConfiguratorTabBarModule = class _ConfiguratorTabBarModule {
  static {
    this.ɵfac = function ConfiguratorTabBarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorTabBarModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorTabBarModule,
      declarations: [ConfiguratorTabBarComponent],
      imports: [FormsModule, ReactiveFormsModule, KeyboardFocusModule, NgSelectModule, CommonModule, I18nModule, UrlModule, RouterModule],
      exports: [ConfiguratorTabBarComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorTabBar: {
            component: ConfiguratorTabBarComponent
          }
        }
      })],
      imports: [FormsModule, ReactiveFormsModule, KeyboardFocusModule, NgSelectModule, CommonModule, I18nModule, UrlModule, RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorTabBarModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, ReactiveFormsModule, KeyboardFocusModule, NgSelectModule, CommonModule, I18nModule, UrlModule, RouterModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorTabBar: {
            component: ConfiguratorTabBarComponent
          }
        }
      })],
      declarations: [ConfiguratorTabBarComponent],
      exports: [ConfiguratorTabBarComponent]
    }]
  }], null, null);
})();
var defaultConfiguratorMessageConfig = {
  productConfigurator: {
    updateConfigurationMessage: {
      waitingTime: 1e3
    }
  }
};
var ConfiguratorUpdateMessageComponent = class _ConfiguratorUpdateMessageComponent {
  constructor(configuratorCommonsService, configRouterExtractorService, config) {
    this.configuratorCommonsService = configuratorCommonsService;
    this.configRouterExtractorService = configRouterExtractorService;
    this.config = config;
    this.hasPendingChanges$ = this.configRouterExtractorService.extractRouterData().pipe(
      switchMap((routerData) => this.configuratorCommonsService.hasPendingChanges(routerData.owner)),
      distinctUntilChanged(),
      // avoid subsequent emissions of the same value from the source observable
      switchMap(
        (isLoading) => isLoading ? of(isLoading).pipe(delay(this.config.productConfigurator?.updateConfigurationMessage?.waitingTime || 1e3)) : of(isLoading)
        // inform immediately if it's not loading anymore
      )
    );
  }
  static {
    this.ɵfac = function ConfiguratorUpdateMessageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorUpdateMessageComponent)(ɵɵdirectiveInject(ConfiguratorCommonsService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(ConfiguratorMessageConfig));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorUpdateMessageComponent,
      selectors: [["cx-configurator-update-message"]],
      standalone: false,
      decls: 7,
      vars: 7,
      consts: [["aria-live", "polite", "aria-atomic", "false"], [1, "cx-update-msg"]],
      template: function ConfiguratorUpdateMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1);
          ɵɵpipe(2, "async");
          ɵɵelement(3, "cx-spinner");
          ɵɵelementStart(4, "strong");
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵclassProp("visible", ɵɵpipeBind1(2, 3, ctx.hasPendingChanges$));
          ɵɵadvance(4);
          ɵɵtextInterpolate(ɵɵpipeBind1(6, 5, "configurator.header.updateMessage"));
        }
      },
      dependencies: [SpinnerComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorUpdateMessageComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-update-message",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div aria-live="polite" aria-atomic="false">
  <div class="cx-update-msg" [class.visible]="hasPendingChanges$ | async">
    <cx-spinner></cx-spinner>
    <strong>{{ 'configurator.header.updateMessage' | cxTranslate }}</strong>
  </div>
</div>
`
    }]
  }], () => [{
    type: ConfiguratorCommonsService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: ConfiguratorMessageConfig
  }], null);
})();
var ConfiguratorUpdateMessageModule = class _ConfiguratorUpdateMessageModule {
  static {
    this.ɵfac = function ConfiguratorUpdateMessageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorUpdateMessageModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorUpdateMessageModule,
      declarations: [ConfiguratorUpdateMessageComponent],
      imports: [CommonModule, SpinnerModule, I18nModule],
      exports: [ConfiguratorUpdateMessageComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorUpdateMessage: {
            component: ConfiguratorUpdateMessageComponent
          }
        }
      }), provideDefaultConfig(defaultConfiguratorMessageConfig), {
        provide: ConfiguratorMessageConfig,
        useExisting: Config
      }],
      imports: [CommonModule, SpinnerModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorUpdateMessageModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SpinnerModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorUpdateMessage: {
            component: ConfiguratorUpdateMessageComponent
          }
        }
      }), provideDefaultConfig(defaultConfiguratorMessageConfig), {
        provide: ConfiguratorMessageConfig,
        useExisting: Config
      }],
      declarations: [ConfiguratorUpdateMessageComponent],
      exports: [ConfiguratorUpdateMessageComponent]
    }]
  }], null, null);
})();
var ConfiguratorVariantCarouselComponent = class _ConfiguratorVariantCarouselComponent {
  constructor(productService, translationService, configuratorRouterExtractorService, configuratorCommonsService) {
    this.productService = productService;
    this.translationService = translationService;
    this.configuratorRouterExtractorService = configuratorRouterExtractorService;
    this.configuratorCommonsService = configuratorCommonsService;
    this.configuration$ = this.configuratorRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => this.configuratorCommonsService.getConfiguration(routerData.owner)));
    this.title$ = this.translationService.translate("configurator.variantCarousel.title");
    this.items$ = this.configuration$.pipe(map((configuration) => configuration.variants ? configuration.variants : []), map((variants) => {
      return variants.map((variant) => this.productService.get(variant.productCode));
    }));
  }
  static {
    this.ɵfac = function ConfiguratorVariantCarouselComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorVariantCarouselComponent)(ɵɵdirectiveInject(ProductService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ConfiguratorRouterExtractorService), ɵɵdirectiveInject(ConfiguratorCommonsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorVariantCarouselComponent,
      selectors: [["cx-configurator-variant-carousel"]],
      standalone: false,
      decls: 3,
      vars: 5,
      consts: [["carouselItem", ""], [4, "ngIf"], [1, "cx-variant-carousel-container"], ["role", "region", "itemWidth", "285px", 3, "items", "title", "template"], [3, "item"]],
      template: function ConfiguratorVariantCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorVariantCarouselComponent_ng_container_0_Template, 8, 13, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
        }
        if (rf & 2) {
          let tmp_0_0;
          ɵɵproperty("ngIf", ((tmp_0_0 = (tmp_0_0 = ɵɵpipeBind1(1, 1, ctx.items$)) == null ? null : tmp_0_0.length) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : 0) > 0 && ɵɵpipeBind1(2, 3, ctx.items$));
        }
      },
      dependencies: [NgIf, CarouselComponent, ProductCarouselItemComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorVariantCarouselComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-variant-carousel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container
  *ngIf="((items$ | async)?.length ?? 0) > 0 && (items$ | async) as items"
>
  <div class="cx-variant-carousel-container">
    <cx-carousel
      role="region"
      [attr.aria-label]="
        'productCarousel.carouselLabel' | cxTranslate: { title: title$ | async }
      "
      [items]="items"
      [title]="title$ | async"
      [template]="carouselItem"
      itemWidth="285px"
    >
    </cx-carousel>

    <ng-template #carouselItem let-item="item">
      <cx-product-carousel-item [item]="item"></cx-product-carousel-item>
    </ng-template>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ProductService
  }, {
    type: TranslationService
  }, {
    type: ConfiguratorRouterExtractorService
  }, {
    type: ConfiguratorCommonsService
  }], null);
})();
var ConfiguratorVariantCarouselModule = class _ConfiguratorVariantCarouselModule {
  static {
    this.ɵfac = function ConfiguratorVariantCarouselModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorVariantCarouselModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorVariantCarouselModule,
      declarations: [ConfiguratorVariantCarouselComponent],
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, CarouselModule, ProductCarouselModule],
      exports: [ConfiguratorVariantCarouselComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorVariantCarousel: {
            component: ConfiguratorVariantCarouselComponent
          }
        }
      })],
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, CarouselModule, ProductCarouselModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorVariantCarouselModule, [{
    type: NgModule,
    args: [{
      imports: [FormsModule, ReactiveFormsModule, CommonModule, I18nModule, CarouselModule, ProductCarouselModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ConfiguratorVariantCarousel: {
            component: ConfiguratorVariantCarouselComponent
          }
        }
      })],
      declarations: [ConfiguratorVariantCarouselComponent],
      exports: [ConfiguratorVariantCarouselComponent]
    }]
  }], null, null);
})();
var RulebasedConfiguratorComponentsModule = class _RulebasedConfiguratorComponentsModule {
  static {
    this.ɵfac = function RulebasedConfiguratorComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RulebasedConfiguratorComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RulebasedConfiguratorComponentsModule,
      imports: [ConfiguratorPriceSummaryModule, ConfiguratorAddToCartButtonModule, ConfiguratorGroupMenuModule, ConfiguratorProductTitleModule, ConfiguratorTabBarModule, ConfiguratorGroupModule, ConfiguratorFormModule, ConfiguratorGroupTitleModule, ConfiguratorUpdateMessageModule, ConfiguratorPreviousNextButtonsModule, ConfiguratorOverviewAttributeModule, ConfiguratorOverviewFormModule, ConfiguratorOverviewMenuModule, ConfiguratorOverviewNotificationBannerModule, ConfiguratorConflictAndErrorMessagesModule, ConfiguratorExitButtonModule, ConfiguratorAttributeCompositionModule, ConfiguratorVariantCarouselModule, ConfiguratorOverviewFilterModule, ConfiguratorOverviewFilterButtonModule, ConfiguratorOverviewFilterDialogModule, ConfiguratorOverviewSidebarModule, ConfiguratorConflictSolverDialogModule, ConfiguratorRestartDialogModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ConfiguratorPriceSummaryModule, ConfiguratorAddToCartButtonModule, ConfiguratorGroupMenuModule, ConfiguratorProductTitleModule, ConfiguratorTabBarModule, ConfiguratorGroupModule, ConfiguratorFormModule, ConfiguratorGroupTitleModule, ConfiguratorUpdateMessageModule, ConfiguratorPreviousNextButtonsModule, ConfiguratorOverviewAttributeModule, ConfiguratorOverviewFormModule, ConfiguratorOverviewMenuModule, ConfiguratorOverviewNotificationBannerModule, ConfiguratorConflictAndErrorMessagesModule, ConfiguratorExitButtonModule, ConfiguratorAttributeCompositionModule, ConfiguratorVariantCarouselModule, ConfiguratorOverviewFilterModule, ConfiguratorOverviewFilterButtonModule, ConfiguratorOverviewFilterDialogModule, ConfiguratorOverviewSidebarModule, ConfiguratorConflictSolverDialogModule, ConfiguratorRestartDialogModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RulebasedConfiguratorComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [ConfiguratorPriceSummaryModule, ConfiguratorAddToCartButtonModule, ConfiguratorGroupMenuModule, ConfiguratorProductTitleModule, ConfiguratorTabBarModule, ConfiguratorGroupModule, ConfiguratorFormModule, ConfiguratorGroupTitleModule, ConfiguratorUpdateMessageModule, ConfiguratorPreviousNextButtonsModule, ConfiguratorOverviewAttributeModule, ConfiguratorOverviewFormModule, ConfiguratorOverviewMenuModule, ConfiguratorOverviewNotificationBannerModule, ConfiguratorConflictAndErrorMessagesModule, ConfiguratorExitButtonModule, ConfiguratorAttributeCompositionModule, ConfiguratorVariantCarouselModule, ConfiguratorOverviewFilterModule, ConfiguratorOverviewFilterButtonModule, ConfiguratorOverviewFilterDialogModule, ConfiguratorOverviewSidebarModule, ConfiguratorConflictSolverDialogModule, ConfiguratorRestartDialogModule]
    }]
  }], null, null);
})();
var ConfiguratorCoreConfig = class _ConfiguratorCoreConfig {
  static {
    this.ɵfac = function ConfiguratorCoreConfig_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorCoreConfig)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorCoreConfig,
      factory: function ConfiguratorCoreConfig_Factory(__ngFactoryType__) {
        let __ngConditionalFactory__ = null;
        if (__ngFactoryType__) {
          __ngConditionalFactory__ = new (__ngFactoryType__ || _ConfiguratorCoreConfig)();
        } else {
          __ngConditionalFactory__ = ɵɵinject(Config);
        }
        return __ngConditionalFactory__;
      },
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorCoreConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useExisting: Config
    }]
  }], null, null);
})();
var RulebasedConfiguratorAdapter = class {
};
var RulebasedConfiguratorConnector = class _RulebasedConfiguratorConnector {
  static {
    this.CONFIGURATOR_ADAPTER_LIST = new InjectionToken("ConfiguratorAdapterList");
  }
  constructor(adapters, configUtilsService, config) {
    this.adapters = adapters;
    this.configUtilsService = configUtilsService;
    this.config = config;
  }
  createConfiguration(owner, configIdTemplate, forceReset = false) {
    return this.getAdapter(owner.configuratorType).createConfiguration(owner, configIdTemplate, forceReset);
  }
  readConfiguration(configId, groupId, configurationOwner, attributeKey) {
    return this.getAdapter(configurationOwner.configuratorType).readConfiguration(configId, groupId, configurationOwner, attributeKey);
  }
  updateConfiguration(configuration) {
    return this.getAdapter(configuration.owner.configuratorType).updateConfiguration(configuration);
  }
  addToCart(parameters) {
    return this.getAdapter(parameters.owner.configuratorType).addToCart(parameters);
  }
  readConfigurationForCartEntry(parameters) {
    return this.getAdapter(parameters.owner.configuratorType).readConfigurationForCartEntry(parameters);
  }
  updateConfigurationForCartEntry(parameters) {
    return this.getAdapter(parameters.configuration.owner.configuratorType).updateConfigurationForCartEntry(parameters);
  }
  readConfigurationForOrderEntry(parameters) {
    return this.getAdapter(parameters.owner.configuratorType).readConfigurationForOrderEntry(parameters);
  }
  readPriceSummary(configuration) {
    return this.getAdapter(configuration.owner.configuratorType).readPriceSummary(configuration);
  }
  getConfigurationOverview(configuration) {
    return this.getAdapter(configuration.owner.configuratorType).getConfigurationOverview(configuration.configId);
  }
  updateConfigurationOverview(configuration) {
    const overview = configuration.overview;
    return overview ? this.getAdapter(configuration.owner.configuratorType).updateConfigurationOverview(overview) : this.getAdapter(configuration.owner.configuratorType).getConfigurationOverview(configuration.configId);
  }
  searchVariants(configuration) {
    return this.getAdapter(configuration.owner.configuratorType).searchVariants(configuration.configId);
  }
  getAdapter(configuratorType) {
    const adapterResult = this.adapters.find((adapter) => this.isAdapterMatching(adapter, configuratorType));
    if (adapterResult) {
      return adapterResult;
    } else {
      throw new Error("No adapter found for configurator type: " + configuratorType);
    }
  }
  isAdapterMatching(adapter, configuratorType) {
    return adapter.getConfiguratorType() === configuratorType;
  }
  static {
    this.ɵfac = function RulebasedConfiguratorConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RulebasedConfiguratorConnector)(ɵɵinject(_RulebasedConfiguratorConnector.CONFIGURATOR_ADAPTER_LIST), ɵɵinject(CommonConfiguratorUtilsService), ɵɵinject(ConfiguratorCoreConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RulebasedConfiguratorConnector,
      factory: _RulebasedConfiguratorConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RulebasedConfiguratorConnector, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [RulebasedConfiguratorConnector.CONFIGURATOR_ADAPTER_LIST]
    }]
  }, {
    type: CommonConfiguratorUtilsService
  }, {
    type: ConfiguratorCoreConfig
  }], null);
})();
var ConfiguratorRouterListener = class _ConfiguratorRouterListener {
  constructor(configuratorCartService, routingService, configuratorQuantityService) {
    this.configuratorCartService = configuratorCartService;
    this.routingService = routingService;
    this.configuratorQuantityService = configuratorQuantityService;
    this.subscription = new Subscription();
    this.observeRouterChanges();
  }
  observeRouterChanges() {
    this.subscription.add(this.routingService.getRouterState().subscribe((routerState) => {
      if (!this.isConfiguratorRelatedRoute(routerState.state.semanticRoute)) {
        this.configuratorCartService.removeCartBoundConfigurations();
        this.configuratorQuantityService.setQuantity(1);
      }
    }));
  }
  isConfiguratorRelatedRoute(semanticRoute) {
    return semanticRoute ? semanticRoute.includes("configure") : false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function ConfiguratorRouterListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorRouterListener)(ɵɵinject(ConfiguratorCartService), ɵɵinject(RoutingService), ɵɵinject(ConfiguratorQuantityService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorRouterListener,
      factory: _ConfiguratorRouterListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorRouterListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConfiguratorCartService
  }, {
    type: RoutingService
  }, {
    type: ConfiguratorQuantityService
  }], null);
})();
var ConfiguratorRouterModule = class _ConfiguratorRouterModule {
  constructor(_configuratorRouterListener) {
  }
  static {
    this.ɵfac = function ConfiguratorRouterModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorRouterModule)(ɵɵinject(ConfiguratorRouterListener));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorRouterModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorRouterModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: ConfiguratorRouterListener
  }], null);
})();
var defaultConfiguratorCoreConfig = {
  productConfigurator: {
    enableVariantSearch: false
  }
};
var ConfiguratorBasicEffectService = class _ConfiguratorBasicEffectService {
  /**
   * Finds first attribute group with attributes for a configuration (ignores conflict groups per default).
   * If optional parameter 'includeConflicts' is set to true it finds first group with attributes including conflict groups.
   * Throws error if such a group does not exist, as this is an illegal state
   * @param configuration
   * @param includeConflicts (optional) if true it includes also conflict groups in the search
   * @returns Group id
   *
   */
  getFirstGroupWithAttributes(configuration, includeConflicts = false) {
    const id = this.getFirstGroupWithAttributesForList(configuration.groups, includeConflicts);
    if (id) {
      return id;
    } else {
      throw new Error("Configuration does not have any attributes");
    }
  }
  /**
   * Finds first group with attributes in a list of groups. Dependent on 'includeConflicts' parameters it includes conflict groups in the search or it ignores them.
   * @param groups
   * @param includeConflicts set to true in order to include conflict groups in the seach
   * @returns Group id
   */
  getFirstGroupWithAttributesForList(groups, includeConflicts) {
    let groupWithAttributes;
    if (includeConflicts && groups.length > 0 && groups[0].groupType === Configurator.GroupType.CONFLICT_HEADER_GROUP) {
      groupWithAttributes = groups[0].subGroups.filter((currentGroup) => currentGroup.attributes && currentGroup.attributes.length > 0).shift();
    }
    if (groupWithAttributes === void 0) {
      groupWithAttributes = groups.filter((currentGroup) => currentGroup.attributes && currentGroup.attributes.length > 0 && currentGroup.groupType !== Configurator.GroupType.CONFLICT_GROUP).shift();
    }
    let id;
    if (groupWithAttributes) {
      id = groupWithAttributes.id;
    } else {
      id = groups.filter((currentGroup) => currentGroup.subGroups && currentGroup.subGroups.length > 0).flatMap((currentGroup) => this.getFirstGroupWithAttributesForList(currentGroup.subGroups, includeConflicts)).filter((groupId) => groupId).shift();
    }
    return id;
  }
  static {
    this.ɵfac = function ConfiguratorBasicEffectService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorBasicEffectService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorBasicEffectService,
      factory: _ConfiguratorBasicEffectService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorBasicEffectService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfiguratorBasicEffects = class _ConfiguratorBasicEffects {
  constructor(actions$, configuratorCommonsConnector, commonConfigUtilsService, configuratorGroupUtilsService, configuratorGroupStatusService, store, configuratorBasicEffectService) {
    this.actions$ = actions$;
    this.configuratorCommonsConnector = configuratorCommonsConnector;
    this.commonConfigUtilsService = commonConfigUtilsService;
    this.configuratorGroupUtilsService = configuratorGroupUtilsService;
    this.configuratorGroupStatusService = configuratorGroupStatusService;
    this.store = store;
    this.configuratorBasicEffectService = configuratorBasicEffectService;
    this.logger = inject(LoggerService);
    this.createConfiguration$ = createEffect(() => this.actions$.pipe(ofType(CREATE_CONFIGURATION), mergeMap((action) => {
      return this.configuratorCommonsConnector.createConfiguration(action.payload.owner, action.payload.configIdTemplate, action.payload.forceReset).pipe(switchMap((configuration) => {
        const currentGroup = this.configuratorBasicEffectService.getFirstGroupWithAttributes(configuration);
        this.store.dispatch(new UpdatePriceSummary(__spreadProps(__spreadValues({}, configuration), {
          interactionState: {
            currentGroup
          }
        })));
        return [new CreateConfigurationSuccess(configuration), new SearchVariants(configuration)];
      }), catchError((error) => [new CreateConfigurationFail({
        ownerKey: action.payload.owner.key,
        error: tryNormalizeHttpError(error, this.logger)
      })]));
    })));
    this.readConfiguration$ = createEffect(() => this.actions$.pipe(ofType(READ_CONFIGURATION), mergeMap((action) => {
      return this.configuratorCommonsConnector.readConfiguration(action.payload.configuration.configId, action.payload.groupId, action.payload.configuration.owner).pipe(switchMap((configuration) => [new ReadConfigurationSuccess(configuration)]), catchError((error) => [new ReadConfigurationFail({
        ownerKey: action.payload.configuration.owner.key,
        error: tryNormalizeHttpError(error, this.logger)
      })]));
    })));
    this.readAttributeDomain$ = createEffect(() => this.actions$.pipe(ofType(READ_ATTRIBUTE_DOMAIN), mergeMap((action) => {
      return this.configuratorCommonsConnector.readConfiguration(action.payload.configuration.configId, action.payload.groupId, action.payload.configuration.owner, action.payload.attributeKey).pipe(switchMap((configuration) => {
        return [new ReadConfigurationSuccess(configuration), new UpdatePriceSummary(__spreadProps(__spreadValues({}, configuration), {
          interactionState: {
            currentGroup: action.payload.groupId
          }
        }))];
      }), catchError((error) => [new ReadConfigurationFail({
        ownerKey: action.payload.configuration.owner.key,
        error: tryNormalizeHttpError(error, this.logger)
      })]));
    })));
    this.updateConfiguration$ = createEffect(() => this.actions$.pipe(
      ofType(UPDATE_CONFIGURATION),
      map((action) => action.payload),
      //mergeMap here as we need to process each update
      //(which only sends one changed attribute at a time),
      //so we must not cancel inner emissions
      mergeMap((payload) => {
        return this.configuratorCommonsConnector.updateConfiguration(payload).pipe(map((configuration) => {
          return new UpdateConfigurationSuccess(__spreadProps(__spreadValues({}, configuration), {
            interactionState: {
              isConflictResolutionMode: payload.interactionState.isConflictResolutionMode
            }
          }));
        }), catchError((error) => {
          const errorPayload = tryNormalizeHttpError(error, this.logger);
          return [new UpdateConfigurationFail({
            configuration: payload,
            error: errorPayload
          })];
        }));
      })
    ));
    this.updatePriceSummary$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_PRICE_SUMMARY), map((action) => action.payload), filter((configuration) => configuration.pricingEnabled === true), mergeMap((payload) => {
      return this.configuratorCommonsConnector.readPriceSummary(payload).pipe(map((configuration) => {
        return new UpdatePriceSummarySuccess(configuration);
      }), catchError((error) => {
        const errorPayload = tryNormalizeHttpError(error, this.logger);
        return [new UpdatePriceSummaryFail({
          ownerKey: payload.owner.key,
          error: errorPayload
        })];
      }));
    })));
    this.getOverview$ = createEffect(() => this.actions$.pipe(ofType(GET_CONFIGURATION_OVERVIEW), map((action) => action.payload), mergeMap((payload) => {
      return this.configuratorCommonsConnector.getConfigurationOverview(payload).pipe(map((overview) => {
        return new GetConfigurationOverviewSuccess({
          ownerKey: payload.owner.key,
          overview
        });
      }), catchError((error) => {
        const errorPayload = tryNormalizeHttpError(error, this.logger);
        return [new GetConfigurationOverviewFail({
          ownerKey: payload.owner.key,
          error: errorPayload
        })];
      }));
    })));
    this.updateOverview$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_CONFIGURATION_OVERVIEW), map((action) => action.payload), mergeMap((payload) => {
      return this.configuratorCommonsConnector.updateConfigurationOverview(payload).pipe(map((overview) => {
        return new UpdateConfigurationOverviewSuccess({
          ownerKey: payload.owner.key,
          overview
        });
      }), catchError((error) => {
        const errorPayload = tryNormalizeHttpError(error, this.logger);
        return [new UpdateConfigurationOverviewFail({
          ownerKey: payload.owner.key,
          error: errorPayload
        })];
      }));
    })));
    this.updateConfigurationSuccess$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_CONFIGURATION_SUCCESS), map((action) => action.payload), mergeMap((payload) => {
      return this.store.pipe(select(hasPendingChanges(payload.owner.key)), take(1), filter((hasPendingChanges2) => hasPendingChanges2 === false), switchMap(() => this.store.pipe(select(getCurrentGroup(payload.owner.key)), take(1), map((currentGroupId) => {
        const groupIdFromPayload = this.configuratorBasicEffectService.getFirstGroupWithAttributes(payload, payload.interactionState.isConflictResolutionMode);
        const parentGroupFromPayload = this.configuratorGroupUtilsService.getParentGroup(payload.groups, this.configuratorGroupUtilsService.getGroupById(payload.groups, groupIdFromPayload), void 0);
        return {
          currentGroupId,
          groupIdFromPayload,
          parentGroupFromPayload
        };
      }), switchMap((container) => {
        const updateFinalizeSuccessAction = new UpdateConfigurationFinalizeSuccess(payload);
        const updatePriceSummaryAction = new UpdatePriceSummary(__spreadProps(__spreadValues({}, payload), {
          interactionState: {
            currentGroup: container.groupIdFromPayload
          }
        }));
        const searchVariantsAction = new SearchVariants(payload);
        return container.currentGroupId === container.groupIdFromPayload ? [updateFinalizeSuccessAction, updatePriceSummaryAction, searchVariantsAction] : [updateFinalizeSuccessAction, updatePriceSummaryAction, searchVariantsAction, new ChangeGroup({
          configuration: payload,
          groupId: container.groupIdFromPayload,
          parentGroupId: container.parentGroupFromPayload?.id
        })];
      }))));
    })));
    this.updateConfigurationFail$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_CONFIGURATION_FAIL), map((action) => action.payload), mergeMap((payload) => {
      return this.store.pipe(select(hasPendingChanges(payload.configuration.owner.key)), take(1), filter((hasPendingChanges2) => hasPendingChanges2 === false), map(() => new UpdateConfigurationFinalizeFail(payload.configuration)));
    })));
    this.handleErrorOnUpdate$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_CONFIGURATION_FINALIZE_FAIL), map((action) => action.payload), map((payload) => new ReadConfiguration({
      configuration: payload,
      groupId: this.configuratorBasicEffectService.getFirstGroupWithAttributes(payload)
    }))));
    this.groupChange$ = createEffect(() => this.actions$.pipe(ofType(CHANGE_GROUP), switchMap((action) => {
      return this.store.pipe(select(hasPendingChanges(action.payload.configuration.owner.key)), take(1), filter((hasPendingChanges2) => hasPendingChanges2 === false), switchMap(() => {
        return this.configuratorCommonsConnector.readConfiguration(action.payload.configuration.configId, action.payload.groupId, action.payload.configuration.owner).pipe(switchMap((configuration) => {
          return [new SetCurrentGroup({
            entityKey: action.payload.configuration.owner.key,
            currentGroup: action.payload.groupId
          }), new SetMenuParentGroup({
            entityKey: action.payload.configuration.owner.key,
            menuParentGroup: action.payload.parentGroupId
          }), new ReadConfigurationSuccess(configuration), new UpdatePriceSummary(__spreadProps(__spreadValues({}, configuration), {
            interactionState: {
              currentGroup: action.payload.groupId
            }
          }))];
        }), catchError((error) => [new ReadConfigurationFail({
          ownerKey: action.payload.configuration.owner.key,
          error: tryNormalizeHttpError(error, this.logger)
        })]));
      }));
    })));
    this.removeProductBoundConfigurations$ = createEffect(() => this.actions$.pipe(ofType(REMOVE_PRODUCT_BOUND_CONFIGURATIONS), switchMap(() => {
      return this.store.pipe(select(getConfigurationsState), take(1), map((configuratorState) => {
        const entities = configuratorState.configurations.entities;
        const ownerKeysToRemove = [];
        for (const ownerKey in entities) {
          if (ownerKey.includes(CommonConfigurator.OwnerType.PRODUCT)) {
            ownerKeysToRemove.push(ownerKey);
          }
        }
        return new RemoveConfiguration({
          ownerKey: ownerKeysToRemove
        });
      }));
    })));
  }
  static {
    this.ɵfac = function ConfiguratorBasicEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorBasicEffects)(ɵɵinject(Actions), ɵɵinject(RulebasedConfiguratorConnector), ɵɵinject(CommonConfiguratorUtilsService), ɵɵinject(ConfiguratorUtilsService), ɵɵinject(ConfiguratorGroupStatusService), ɵɵinject(Store), ɵɵinject(ConfiguratorBasicEffectService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorBasicEffects,
      factory: _ConfiguratorBasicEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorBasicEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: RulebasedConfiguratorConnector
  }, {
    type: CommonConfiguratorUtilsService
  }, {
    type: ConfiguratorUtilsService
  }, {
    type: ConfiguratorGroupStatusService
  }, {
    type: Store
  }, {
    type: ConfiguratorBasicEffectService
  }], null);
})();
var ERROR_MESSAGE_NO_ENTRY_NUMBER_FOUND = "Entry number is required in addToCart response";
var ConfiguratorCartEffects = class _ConfiguratorCartEffects {
  constructor(actions$, configuratorCommonsConnector, commonConfigUtilsService, configuratorGroupUtilsService, store, configuratorBasicEffectService) {
    this.actions$ = actions$;
    this.configuratorCommonsConnector = configuratorCommonsConnector;
    this.commonConfigUtilsService = commonConfigUtilsService;
    this.configuratorGroupUtilsService = configuratorGroupUtilsService;
    this.store = store;
    this.configuratorBasicEffectService = configuratorBasicEffectService;
    this.logger = inject(LoggerService);
    this.addToCart$ = createEffect(() => this.actions$.pipe(ofType(ADD_TO_CART), map((action) => action.payload), switchMap((payload) => {
      return this.configuratorCommonsConnector.addToCart(payload).pipe(switchMap((entry) => {
        const entryNumber = entry.entry?.entryNumber;
        if (entryNumber === void 0) {
          throw Error(ERROR_MESSAGE_NO_ENTRY_NUMBER_FOUND);
        } else {
          return [new AddNextOwner({
            ownerKey: payload.owner.key,
            cartEntryNo: entryNumber.toString()
          }), new cartGroup_actions.CartAddEntrySuccess(__spreadProps(__spreadValues({}, entry), {
            userId: payload.userId,
            cartId: payload.cartId,
            productCode: payload.productCode,
            quantity: payload.quantity,
            deliveryModeChanged: entry.deliveryModeChanged,
            entry: entry.entry,
            quantityAdded: entry.quantityAdded,
            statusCode: entry.statusCode,
            statusMessage: entry.statusMessage
          }))];
        }
      }), catchError((error) => of(new cartGroup_actions.CartAddEntryFail({
        userId: payload.userId,
        cartId: payload.cartId,
        productCode: payload.productCode,
        quantity: payload.quantity,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.updateCartEntry$ = createEffect(() => this.actions$.pipe(ofType(UPDATE_CART_ENTRY), map((action) => action.payload), switchMap((payload) => {
      return this.configuratorCommonsConnector.updateConfigurationForCartEntry(payload).pipe(switchMap((cartModification) => {
        return [new cartGroup_actions.CartUpdateEntrySuccess({
          userId: payload.userId,
          cartId: payload.cartId,
          entryNumber: payload.cartEntryNumber,
          quantity: cartModification.quantity
        })];
      }), catchError((error) => of(new cartGroup_actions.CartUpdateEntryFail({
        userId: payload.userId,
        cartId: payload.cartId,
        entryNumber: payload.cartEntryNumber,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.readConfigurationForCartEntry$ = createEffect(() => this.actions$.pipe(ofType(READ_CART_ENTRY_CONFIGURATION), switchMap((action) => {
      const parameters = action.payload;
      return this.configuratorCommonsConnector.readConfigurationForCartEntry(parameters).pipe(switchMap((result) => {
        const updatePriceSummaryAction = new UpdatePriceSummary(__spreadProps(__spreadValues({}, result), {
          interactionState: {
            currentGroup: this.configuratorBasicEffectService.getFirstGroupWithAttributes(result, !result.immediateConflictResolution)
          }
        }));
        return [new ReadCartEntryConfigurationSuccess(result), updatePriceSummaryAction, new SearchVariants(result)];
      }), catchError((error) => [new ReadCartEntryConfigurationFail({
        ownerKey: action.payload.owner.key,
        error: tryNormalizeHttpError(error, this.logger)
      })]));
    })));
    this.readConfigurationForOrderEntry$ = createEffect(() => this.actions$.pipe(ofType(READ_ORDER_ENTRY_CONFIGURATION), switchMap((action) => {
      const parameters = action.payload;
      return this.configuratorCommonsConnector.readConfigurationForOrderEntry(parameters).pipe(switchMap((result) => [new ReadOrderEntryConfigurationSuccess(result)]), catchError((error) => [new ReadOrderEntryConfigurationFail({
        ownerKey: action.payload.owner.key,
        error: tryNormalizeHttpError(error, this.logger)
      })]));
    })));
    this.removeCartBoundConfigurations$ = createEffect(() => this.actions$.pipe(ofType(REMOVE_CART_BOUND_CONFIGURATIONS), switchMap(() => {
      return this.store.pipe(select(getConfigurationsState), take(1), map((configuratorState) => {
        const entities = configuratorState.configurations.entities;
        const ownerKeysToRemove = [];
        const ownerKeysProductBound = [];
        for (const ownerKey in entities) {
          if (ownerKey.includes(CommonConfigurator.OwnerType.CART_ENTRY)) {
            ownerKeysToRemove.push(ownerKey);
          } else if (ownerKey.includes(CommonConfigurator.OwnerType.PRODUCT)) {
            ownerKeysProductBound.push(ownerKey);
          }
        }
        ownerKeysProductBound.forEach((ownerKey) => {
          const configuration = entities[ownerKey];
          if (configuration.value?.nextOwner !== void 0) {
            ownerKeysToRemove.push(ownerKey);
          }
        });
        return new RemoveConfiguration({
          ownerKey: ownerKeysToRemove
        });
      }));
    })));
    this.addOwner$ = createEffect(() => this.actions$.pipe(ofType(ADD_NEXT_OWNER), switchMap((action) => {
      return this.store.pipe(select(getConfigurationFactory(action.payload.ownerKey)), take(1), switchMap((configuration) => {
        const newOwner = ConfiguratorModelUtils.createOwner(CommonConfigurator.OwnerType.CART_ENTRY, action.payload.cartEntryNo);
        this.commonConfigUtilsService.setOwnerKey(newOwner);
        return [new SetNextOwnerCartEntry({
          configuration,
          cartEntryNo: action.payload.cartEntryNo
        }), new SetInteractionState({
          entityKey: newOwner.key,
          interactionState: configuration.interactionState
        })];
      }));
    })));
  }
  static {
    this.ɵfac = function ConfiguratorCartEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorCartEffects)(ɵɵinject(Actions), ɵɵinject(RulebasedConfiguratorConnector), ɵɵinject(CommonConfiguratorUtilsService), ɵɵinject(ConfiguratorUtilsService), ɵɵinject(Store), ɵɵinject(ConfiguratorBasicEffectService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorCartEffects,
      factory: _ConfiguratorCartEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorCartEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: RulebasedConfiguratorConnector
  }, {
    type: CommonConfiguratorUtilsService
  }, {
    type: ConfiguratorUtilsService
  }, {
    type: Store
  }, {
    type: ConfiguratorBasicEffectService
  }], null);
})();
var ConfiguratorVariantEffects = class _ConfiguratorVariantEffects {
  constructor(actions$, configuratorCommonsConnector, configuratorCoreConfig) {
    this.actions$ = actions$;
    this.configuratorCommonsConnector = configuratorCommonsConnector;
    this.configuratorCoreConfig = configuratorCoreConfig;
    this.logger = inject(LoggerService);
    this.searchVariants$ = createEffect(() => this.actions$.pipe(ofType(SEARCH_VARIANTS), filter(() => this.configuratorCoreConfig.productConfigurator?.enableVariantSearch === true), filter((action) => action.payload.owner.configuratorType === ConfiguratorType.VARIANT), switchMap((action) => {
      return this.configuratorCommonsConnector.searchVariants(action.payload).pipe(switchMap((result) => [new SearchVariantsSuccess({
        ownerKey: action.payload.owner.key,
        variants: result
      })]), catchError((error) => [new SearchVariantsFail({
        ownerKey: action.payload.owner.key,
        error: tryNormalizeHttpError(error, this.logger)
      })]));
    })));
    this.searchVariantsInCaseNotActive$ = createEffect(() => this.actions$.pipe(ofType(SEARCH_VARIANTS), filter((action) => this.configuratorCoreConfig.productConfigurator?.enableVariantSearch === false || action.payload.owner.configuratorType !== ConfiguratorType.VARIANT), map((action) => new SearchVariantsSuccess({
      ownerKey: action.payload.owner.key,
      variants: []
    }))));
  }
  static {
    this.ɵfac = function ConfiguratorVariantEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorVariantEffects)(ɵɵinject(Actions), ɵɵinject(RulebasedConfiguratorConnector), ɵɵinject(ConfiguratorCoreConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorVariantEffects,
      factory: _ConfiguratorVariantEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorVariantEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: RulebasedConfiguratorConnector
  }, {
    type: ConfiguratorCoreConfig
  }], null);
})();
var ConfiguratorEffects = [ConfiguratorBasicEffects, ConfiguratorCartEffects, ConfiguratorVariantEffects];
var initialState = {
  configId: "",
  productCode: "",
  groups: [],
  flatGroups: [],
  interactionState: {
    currentGroup: void 0,
    groupsVisited: {},
    menuParentGroup: void 0
  },
  owner: ConfiguratorModelUtils.createInitialOwner()
};
var reducerMap;
function configuratorReducer(state = initialState, action) {
  ensureReducerMapCreated();
  if (reducerMap.has(action.type)) {
    return reducerMap.get(action.type)(state, action);
  } else {
    return state;
  }
}
function ensureReducerMapCreated() {
  if (reducerMap === void 0) {
    reducerMap = /* @__PURE__ */ new Map();
    reducerMap.set(UPDATE_CONFIGURATION_FINALIZE_SUCCESS, handleActionUpdateConfigurationFinalizeSuccess);
    reducerMap.set(UPDATE_CART_ENTRY, handleActionUpdateCartEntry);
    reducerMap.set(CREATE_CONFIGURATION_SUCCESS, handleCreateSuccess);
    reducerMap.set(READ_CONFIGURATION_SUCCESS, handleReadSucess);
    reducerMap.set(READ_CART_ENTRY_CONFIGURATION_SUCCESS, handleCartEntryReadSucess);
    reducerMap.set(UPDATE_PRICE_SUMMARY_SUCCESS, handleUpdatePriceSummarySuccess);
    reducerMap.set(GET_CONFIGURATION_OVERVIEW_SUCCESS, handleGetConfigurationOverviewSuccess);
    reducerMap.set(UPDATE_CONFIGURATION_OVERVIEW_SUCCESS, handleUpdateConfigurationOverviewSuccess);
    reducerMap.set(SEARCH_VARIANTS_SUCCESS, handleSearchVariantsSuccess);
    reducerMap.set(READ_ORDER_ENTRY_CONFIGURATION_SUCCESS, handleReadOrderEntryConfigurationSuccess);
    reducerMap.set(SET_NEXT_OWNER_CART_ENTRY, handleSetNextOwnerCartEntry);
    reducerMap.set(SET_INTERACTION_STATE, handleSetInteractionState);
    reducerMap.set(SET_CURRENT_GROUP, handleSetCurrentGroup);
    reducerMap.set(SET_MENU_PARENT_GROUP, handleSetMenuParentGroup);
    reducerMap.set(SET_GROUPS_VISITED, handleSetGroupsVisited);
    reducerMap.set(DISMISS_CONFLICT_DIALOG, handleActionDismissConflictSolverDialog);
    reducerMap.set(CHECK_CONFLICT_DIALOG, handleActionCheckConflictSolverDialog);
    reducerMap.set(CHANGE_GROUP, handleChangeGroup);
  }
}
function handleActionUpdateConfigurationFinalizeSuccess(state, action) {
  const result = takeOverChanges(action, state);
  checkConflictSolverDialog(result);
  result.isCartEntryUpdateRequired = true;
  result.overview = void 0;
  if (state.interactionState.newConfiguration !== void 0) {
    result.interactionState.newConfiguration = false;
  }
  return result;
}
function checkConflictSolverDialog(configuration) {
  configuration.interactionState.showConflictSolverDialog = configuration.immediateConflictResolution && !configuration.consistent;
  if (configuration.interactionState.showConflictSolverDialog) {
    configuration.interactionState.issueNavigationDone = true;
  }
}
function handleActionDismissConflictSolverDialog(state, action) {
  if (action.type === DISMISS_CONFLICT_DIALOG) {
    const result = __spreadProps(__spreadValues({}, state), {
      interactionState: __spreadProps(__spreadValues({}, state.interactionState), {
        showConflictSolverDialog: false
      })
    });
    return result;
  }
}
function handleActionCheckConflictSolverDialog(state) {
  const result = __spreadProps(__spreadValues({}, state), {
    interactionState: __spreadValues({}, state.interactionState)
  });
  checkConflictSolverDialog(result);
  return result;
}
function handleActionUpdateCartEntry(state) {
  const result = __spreadValues({}, state);
  result.isCartEntryUpdateRequired = false;
  return result;
}
function handleCreateSuccess(state, action) {
  const result = setInitialCurrentGroup(takeOverChanges(action, state));
  checkConflictSolverDialog(result);
  result.interactionState.newConfiguration = result.newConfiguration;
  return result;
}
function handleReadSucess(state, action) {
  const result = setInitialCurrentGroup(takeOverChanges(action, state));
  checkConflictSolverDialog(result);
  return result;
}
function handleCartEntryReadSucess(state, action) {
  return setInitialCurrentGroup(takeOverChanges(action, state));
}
function handleUpdatePriceSummarySuccess(state, action) {
  return setInitialCurrentGroup(takeOverPricingChanges(action, state));
}
function handleGetConfigurationOverviewSuccess(state, action) {
  const content = __spreadProps(__spreadValues({}, action.payload.overview), {
    possibleGroups: action.payload.overview.groups
  });
  return __spreadProps(__spreadValues({}, state), {
    overview: content,
    priceSummary: content.priceSummary,
    interactionState: __spreadProps(__spreadValues({}, state.interactionState), {
      issueNavigationDone: false
    })
  });
}
function handleUpdateConfigurationOverviewSuccess(state, action) {
  const content = __spreadValues({}, action.payload.overview);
  return __spreadProps(__spreadValues({}, state), {
    overview: content,
    priceSummary: content.priceSummary,
    interactionState: __spreadProps(__spreadValues({}, state.interactionState), {
      issueNavigationDone: false
    })
  });
}
function handleSearchVariantsSuccess(state, action) {
  return __spreadProps(__spreadValues({}, state), {
    variants: action.payload.variants
  });
}
function handleReadOrderEntryConfigurationSuccess(state, action) {
  const overview = action.payload.overview;
  const configuration = overview ? __spreadProps(__spreadValues({}, action.payload), {
    overview: __spreadProps(__spreadValues({}, overview), {
      possibleGroups: overview.groups
    })
  }) : action.payload;
  const result = __spreadProps(__spreadValues(__spreadValues({}, state), configuration), {
    priceSummary: configuration.overview?.priceSummary
  });
  return result;
}
function handleSetNextOwnerCartEntry(state, action) {
  const content = __spreadValues({}, action.payload.configuration);
  content.nextOwner = ConfiguratorModelUtils.createOwner(CommonConfigurator.OwnerType.CART_ENTRY, action.payload.cartEntryNo);
  const result = __spreadValues(__spreadValues({}, state), content);
  return result;
}
function handleSetInteractionState(state, action) {
  const newInteractionState = action.payload.interactionState;
  return __spreadProps(__spreadValues({}, state), {
    interactionState: newInteractionState
  });
}
function handleSetCurrentGroup(state, action) {
  const newCurrentGroup = action.payload.currentGroup;
  const result = __spreadProps(__spreadValues({}, state), {
    interactionState: __spreadProps(__spreadValues({}, state.interactionState), {
      currentGroup: newCurrentGroup
    })
  });
  checkConflictSolverDialog(result);
  return result;
}
function handleSetMenuParentGroup(state, action) {
  const newMenuParentGroup = action.payload.menuParentGroup;
  return __spreadProps(__spreadValues({}, state), {
    interactionState: __spreadProps(__spreadValues({}, state.interactionState), {
      menuParentGroup: newMenuParentGroup
    })
  });
}
function handleSetGroupsVisited(state, action) {
  const groupIds = action.payload.visitedGroups;
  const changedInteractionState = {
    groupsVisited: {}
  };
  if (state.interactionState.groupsVisited) {
    Object.keys(state.interactionState.groupsVisited).forEach((groupId) => setGroupsVisited(changedInteractionState, groupId));
  }
  groupIds.forEach((groupId) => setGroupsVisited(changedInteractionState, groupId));
  return __spreadProps(__spreadValues({}, state), {
    interactionState: __spreadProps(__spreadValues({}, state.interactionState), {
      groupsVisited: changedInteractionState.groupsVisited
    })
  });
}
function handleChangeGroup(state, action) {
  const isConflictResolutionMode = action.payload.conflictResolutionMode;
  return __spreadProps(__spreadValues({}, state), {
    interactionState: __spreadProps(__spreadValues({}, state.interactionState), {
      isConflictResolutionMode
    })
  });
}
function setGroupsVisited(changedInteractionState, groupId) {
  const groupsVisited = changedInteractionState.groupsVisited;
  if (groupsVisited) {
    groupsVisited[groupId] = true;
  }
}
function setInitialCurrentGroup(state) {
  if (state.interactionState.currentGroup) {
    return state;
  }
  let initialCurrentGroup;
  const flatGroups = state.flatGroups;
  if (flatGroups && flatGroups.length > 0) {
    initialCurrentGroup = state.immediateConflictResolution ? flatGroups.find((group) => !group.id.startsWith(Configurator.ConflictIdPrefix))?.id : flatGroups[0].id;
  }
  const menuParentGroup = initialCurrentGroup?.startsWith(Configurator.ConflictIdPrefix) ? Configurator.ConflictHeaderId : void 0;
  return __spreadProps(__spreadValues({}, state), {
    interactionState: __spreadProps(__spreadValues({}, state.interactionState), {
      currentGroup: initialCurrentGroup,
      menuParentGroup
    })
  });
}
function takeOverChanges(action, state) {
  const content = __spreadValues({}, action.payload);
  const groups = content.groups.length > 0 ? content.groups : state.groups;
  const result = __spreadProps(__spreadValues(__spreadValues({}, state), content), {
    groups,
    interactionState: __spreadProps(__spreadValues(__spreadValues({}, state.interactionState), content.interactionState), {
      showConflictSolverDialog: state.interactionState.showConflictSolverDialog,
      issueNavigationDone: true
    })
  });
  if (result.priceSupplements) {
    result.priceSupplements = void 0;
  }
  return result;
}
function takeOverPricingChanges(action, state) {
  const content = __spreadValues({}, action.payload);
  const groups = state.groups;
  const result = __spreadProps(__spreadValues(__spreadValues({}, state), content), {
    groups,
    interactionState: __spreadProps(__spreadValues(__spreadValues({}, state.interactionState), content.interactionState), {
      issueNavigationDone: true
    })
  });
  return result;
}
function getConfiguratorReducers() {
  return {
    // @ts-ignore TODO (#12620)
    configurations: utilsGroup.entityProcessesLoaderReducer(
      CONFIGURATOR_DATA,
      // @ts-ignore TODO (#12620)
      configuratorReducer
    )
  };
}
var configuratorReducerToken = new InjectionToken("ConfiguratorReducers");
var configuratorReducerProvider = {
  provide: configuratorReducerToken,
  useFactory: getConfiguratorReducers
};
var RulebasedConfiguratorStateModule = class _RulebasedConfiguratorStateModule {
  static {
    this.ɵfac = function RulebasedConfiguratorStateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RulebasedConfiguratorStateModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RulebasedConfiguratorStateModule,
      imports: [CommonModule, StateModule, StoreFeatureModule, EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [configuratorReducerProvider],
      imports: [CommonModule, StateModule, StoreModule.forFeature(CONFIGURATOR_FEATURE, configuratorReducerToken), EffectsModule.forFeature(ConfiguratorEffects)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RulebasedConfiguratorStateModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, StateModule, StoreModule.forFeature(CONFIGURATOR_FEATURE, configuratorReducerToken), EffectsModule.forFeature(ConfiguratorEffects)],
      providers: [configuratorReducerProvider]
    }]
  }], null, null);
})();
var ConfiguratorLogoutEventListener = class _ConfiguratorLogoutEventListener {
  constructor(eventService, configExpertModeService, configuratorCommonsService) {
    this.eventService = eventService;
    this.configExpertModeService = configExpertModeService;
    this.configuratorCommonsService = configuratorCommonsService;
    this.subscription = new Subscription();
    this.onLogout();
  }
  onLogout() {
    this.subscription.add(merge(this.eventService.get(LogoutEvent)).subscribe(() => {
      this.configExpertModeService.setExpModeActive(false);
      this.configExpertModeService.setExpModeRequested(false);
      this.configuratorCommonsService.removeProductBoundConfigurations();
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function ConfiguratorLogoutEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorLogoutEventListener)(ɵɵinject(EventService), ɵɵinject(ConfiguratorExpertModeService), ɵɵinject(ConfiguratorCommonsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorLogoutEventListener,
      factory: _ConfiguratorLogoutEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorLogoutEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: EventService
  }, {
    type: ConfiguratorExpertModeService
  }, {
    type: ConfiguratorCommonsService
  }], null);
})();
var ConfiguratorLanguageSetEventListener = class _ConfiguratorLanguageSetEventListener {
  constructor() {
    this.subscription = new Subscription();
    this.eventService = inject(EventService);
    this.configuratorCommonsService = inject(ConfiguratorCommonsService);
    this.onLanguageSet();
  }
  onLanguageSet() {
    this.subscription.add(merge(this.eventService.get(LanguageSetEvent)).subscribe(() => {
      this.configuratorCommonsService.removeProductBoundConfigurations();
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function ConfiguratorLanguageSetEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorLanguageSetEventListener)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorLanguageSetEventListener,
      factory: _ConfiguratorLanguageSetEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorLanguageSetEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var RulebasedConfiguratorCoreModule = class _RulebasedConfiguratorCoreModule {
  constructor(_configuratorLogoutEventListener, _configuratorLanguageSetEventListener) {
  }
  static {
    this.ɵfac = function RulebasedConfiguratorCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RulebasedConfiguratorCoreModule)(ɵɵinject(ConfiguratorLogoutEventListener), ɵɵinject(ConfiguratorLanguageSetEventListener));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RulebasedConfiguratorCoreModule,
      imports: [RulebasedConfiguratorStateModule, ConfiguratorRouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [RulebasedConfiguratorConnector, provideDefaultConfig(defaultConfiguratorCoreConfig)],
      imports: [RulebasedConfiguratorStateModule, ConfiguratorRouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RulebasedConfiguratorCoreModule, [{
    type: NgModule,
    args: [{
      imports: [RulebasedConfiguratorStateModule, ConfiguratorRouterModule],
      providers: [RulebasedConfiguratorConnector, provideDefaultConfig(defaultConfiguratorCoreConfig)]
    }]
  }], () => [{
    type: ConfiguratorLogoutEventListener
  }, {
    type: ConfiguratorLanguageSetEventListener
  }], null);
})();
var OccConfiguratorVariantAddToCartSerializer = class _OccConfiguratorVariantAddToCartSerializer {
  constructor() {
  }
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
    this.ɵfac = function OccConfiguratorVariantAddToCartSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorVariantAddToCartSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorVariantAddToCartSerializer,
      factory: _OccConfiguratorVariantAddToCartSerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorVariantAddToCartSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var OccConfigurator;
(function(OccConfigurator2) {
  let GroupType;
  (function(GroupType2) {
    GroupType2["CSTIC_GROUP"] = "CSTIC_GROUP";
    GroupType2["INSTANCE"] = "INSTANCE";
    GroupType2["CONFLICT_HEADER"] = "CONFLICT_HEADER";
    GroupType2["CONFLICT"] = "CONFLICT";
  })(GroupType = OccConfigurator2.GroupType || (OccConfigurator2.GroupType = {}));
  let UiType;
  (function(UiType2) {
    UiType2["STRING"] = "STRING";
    UiType2["NUMERIC"] = "NUMERIC";
    UiType2["SAP_DATE"] = "SAP_DATE";
    UiType2["CHECK_BOX"] = "CHECK_BOX";
    UiType2["CHECK_BOX_LIST"] = "CHECK_BOX_LIST";
    UiType2["RADIO_BUTTON"] = "RADIO_BUTTON";
    UiType2["RADIO_BUTTON_ADDITIONAL_INPUT"] = "RADIO_BUTTON_ADDITIONAL_INPUT";
    UiType2["DROPDOWN"] = "DROPDOWN";
    UiType2["DROPDOWN_ADDITIONAL_INPUT"] = "DROPDOWN_ADDITIONAL_INPUT";
    UiType2["READ_ONLY"] = "READ_ONLY";
    UiType2["READ_ONLY_SINGLE_SELECTION_IMAGE"] = "READ_ONLY_SINGLE_SELECTION_IMAGE";
    UiType2["READ_ONLY_MULTI_SELECTION_IMAGE"] = "READ_ONLY_MULTI_SELECTION_IMAGE";
    UiType2["NOT_IMPLEMENTED"] = "NOT_IMPLEMENTED";
    UiType2["SINGLE_SELECTION_IMAGE"] = "SINGLE_SELECTION_IMAGE";
    UiType2["MULTI_SELECTION_IMAGE"] = "MULTI_SELECTION_IMAGE";
  })(UiType = OccConfigurator2.UiType || (OccConfigurator2.UiType = {}));
  let PriceType;
  (function(PriceType2) {
    PriceType2["BUY"] = "BUY";
  })(PriceType = OccConfigurator2.PriceType || (OccConfigurator2.PriceType = {}));
  let ImageFormatType;
  (function(ImageFormatType2) {
    ImageFormatType2["VALUE_IMAGE"] = "VALUE_IMAGE";
    ImageFormatType2["CSTIC_IMAGE"] = "CSTIC_IMAGE";
  })(ImageFormatType = OccConfigurator2.ImageFormatType || (OccConfigurator2.ImageFormatType = {}));
  let ImageType;
  (function(ImageType2) {
    ImageType2["PRIMARY"] = "PRIMARY";
    ImageType2["GALLERY"] = "GALLERY";
  })(ImageType = OccConfigurator2.ImageType || (OccConfigurator2.ImageType = {}));
  let OverviewFilterEnum;
  (function(OverviewFilterEnum2) {
    OverviewFilterEnum2["VISIBLE"] = "PRIMARY";
    OverviewFilterEnum2["USER_INPUT"] = "USER_INPUT";
    OverviewFilterEnum2["PRICE_RELEVANT"] = "PRICE_RELEVANT";
  })(OverviewFilterEnum = OccConfigurator2.OverviewFilterEnum || (OccConfigurator2.OverviewFilterEnum = {}));
})(OccConfigurator || (OccConfigurator = {}));
var OccConfiguratorVariantNormalizer = class _OccConfiguratorVariantNormalizer {
  constructor(config, translation, uiSettingsConfig) {
    this.config = config;
    this.translation = translation;
    this.uiSettingsConfig = uiSettingsConfig;
  }
  convert(source, target) {
    const resultTarget = __spreadProps(__spreadValues({}, target), {
      owner: target?.owner ?? ConfiguratorModelUtils.createInitialOwner(),
      interactionState: target?.interactionState ?? {},
      configId: source.configId,
      complete: source.complete,
      consistent: source.consistent,
      totalNumberOfIssues: source.totalNumberOfIssues,
      productCode: source.rootProduct,
      groups: [],
      flatGroups: [],
      kbKey: source.kbKey ?? void 0,
      pricingEnabled: source.pricingEnabled ?? true,
      hideBasePriceAndSelectedOptions: source.hideBasePriceAndSelectedOptions,
      immediateConflictResolution: source.immediateConflictResolution ?? false,
      newConfiguration: source.newConfiguration,
      // we need a trinary state true, false, undefined!
      isPricingAsync: true
    });
    const flatGroups = [];
    source.groups?.forEach((group) => this.convertGroup(group, resultTarget.groups, flatGroups));
    resultTarget.flatGroups = flatGroups;
    return resultTarget;
  }
  convertGroup(source, groupList, flatGroupList) {
    const attributes = [];
    if (source.attributes) {
      source.attributes.forEach((sourceAttribute) => this.convertAttribute(sourceAttribute, attributes));
    }
    const group = {
      description: source.description,
      configurable: source.configurable,
      complete: source.complete,
      consistent: source.consistent,
      groupType: this.convertGroupType(source.groupType),
      name: source.name,
      id: source.id,
      attributes,
      subGroups: []
    };
    this.setGroupDescription(group);
    if (source.subGroups) {
      source.subGroups.forEach((sourceSubGroup) => this.convertGroup(sourceSubGroup, group.subGroups, flatGroupList));
    }
    if (group.groupType === Configurator.GroupType.ATTRIBUTE_GROUP || group.groupType === Configurator.GroupType.CONFLICT_GROUP) {
      flatGroupList.push(group);
    }
    groupList.push(group);
  }
  getGroupId(key, name) {
    return key.replace("@" + name, "");
  }
  convertAttribute(sourceAttribute, attributeList) {
    const numberOfConflicts = sourceAttribute.conflicts ? sourceAttribute.conflicts.length : 0;
    const attributeImages = [];
    const attributeValues = [];
    if (sourceAttribute.images) {
      sourceAttribute.images.forEach((occImage) => this.convertImage(occImage, attributeImages));
    }
    this.addRetractValue(sourceAttribute, attributeValues);
    if (sourceAttribute.domainValues) {
      sourceAttribute.domainValues.forEach((value) => this.convertValue(value, attributeValues));
    }
    const uiType = this.convertAttributeType(sourceAttribute);
    const attribute = {
      name: sourceAttribute.name,
      label: sourceAttribute.langDepName,
      required: sourceAttribute.required,
      uiType,
      uiTypeVariation: sourceAttribute.type,
      groupId: this.getGroupId(sourceAttribute.key, sourceAttribute.name),
      userInput: this.compileUserInput(sourceAttribute),
      maxlength: (sourceAttribute.maxlength ?? 0) + (sourceAttribute.negativeAllowed ? 1 : 0),
      numDecimalPlaces: sourceAttribute.numberScale,
      negativeAllowed: sourceAttribute.negativeAllowed,
      numTotalLength: sourceAttribute.typeLength,
      selectedSingleValue: void 0,
      hasConflicts: numberOfConflicts > 0,
      images: attributeImages,
      values: attributeValues,
      intervalInDomain: sourceAttribute.intervalInDomain,
      key: sourceAttribute.key,
      validationType: sourceAttribute.validationType,
      visible: sourceAttribute.visible,
      description: sourceAttribute.longText,
      domainOnDemand: sourceAttribute.domainOnDemand
    };
    this.setSelectedSingleValue(attribute);
    this.compileAttributeIncomplete(attribute);
    attributeList.push(attribute);
  }
  compileUserInput(sourceAttribute) {
    let userInput;
    if (sourceAttribute.type === OccConfigurator.UiType.NUMERIC || sourceAttribute.type === OccConfigurator.UiType.STRING || sourceAttribute.type === OccConfigurator.UiType.READ_ONLY) {
      userInput = sourceAttribute.formattedValue ? sourceAttribute.formattedValue : "";
    }
    if (sourceAttribute.type === OccConfigurator.UiType.SAP_DATE) {
      userInput = sourceAttribute.value ? sourceAttribute.value : "";
    }
    return userInput;
  }
  setSelectedSingleValue(attribute) {
    if (attribute.values) {
      const selectedValues = attribute.values.map((entry) => entry).filter((entry) => entry.selected);
      if (selectedValues && selectedValues.length === 1) {
        attribute.selectedSingleValue = selectedValues[0].valueCode;
      }
    }
  }
  isRetractValueSelected(sourceAttribute) {
    return sourceAttribute.domainValues && sourceAttribute.domainValues.filter((value) => value.selected).length ? false : true;
  }
  setRetractValueDisplay(attributeType, value) {
    if (attributeType === Configurator.UiType.DROPDOWN || attributeType === Configurator.UiType.RADIOBUTTON || attributeType === Configurator.UiType.SINGLE_SELECTION_IMAGE) {
      if (attributeType === Configurator.UiType.DROPDOWN && value.selected) {
        this.translation.translate("configurator.attribute.dropDownSelectMsg").pipe(take(1)).subscribe((text) => value.valueDisplay = text);
      } else {
        this.translation.translate("configurator.attribute.noOptionSelectedMsg").pipe(take(1)).subscribe((text) => value.valueDisplay = text);
      }
    }
  }
  hasSourceAttributeConflicts(sourceAttribute) {
    return sourceAttribute.conflicts ? sourceAttribute.conflicts.length > 0 : false;
  }
  isSourceAttributeTypeReadOnly(sourceAttribute) {
    return sourceAttribute.type === OccConfigurator.UiType.READ_ONLY || sourceAttribute.type === OccConfigurator.UiType.READ_ONLY_SINGLE_SELECTION_IMAGE || sourceAttribute.type === OccConfigurator.UiType.READ_ONLY_MULTI_SELECTION_IMAGE;
  }
  isRetractBlocked(sourceAttribute) {
    return sourceAttribute.retractBlocked ? sourceAttribute.retractBlocked : false;
  }
  addRetractValue(sourceAttribute, values) {
    const isRetractBlocked = this.isRetractBlocked(sourceAttribute);
    const isConflicting = this.hasSourceAttributeConflicts(sourceAttribute);
    if (!isRetractBlocked) {
      if (this.uiSettingsConfig?.productConfigurator?.addRetractOption || this.isSourceAttributeTypeReadOnly(sourceAttribute) && isConflicting && !sourceAttribute.domainOnDemand) {
        const attributeType = this.convertAttributeType(sourceAttribute);
        if (attributeType === Configurator.UiType.RADIOBUTTON || attributeType === Configurator.UiType.DROPDOWN || attributeType === Configurator.UiType.SINGLE_SELECTION_IMAGE) {
          const value = {
            valueCode: Configurator.RetractValueCode,
            selected: this.isRetractValueSelected(sourceAttribute)
          };
          this.setRetractValueDisplay(attributeType, value);
          values.push(value);
        }
      }
    }
  }
  convertValue(occValue, values) {
    const valueImages = [];
    if (occValue.images) {
      occValue.images.forEach((occImage) => this.convertImage(occImage, valueImages));
    }
    const value = {
      valueCode: occValue.key,
      valueDisplay: occValue.langDepName,
      name: occValue.name,
      selected: occValue.selected,
      images: valueImages,
      description: occValue.longText
    };
    values.push(value);
  }
  convertImage(occImage, images) {
    const image = {
      /**
       * Traditionally, in an on-prem world, medias and other backend related calls
       * are hosted at the same platform, but in a cloud setup, applications are
       * typically distributed cross different environments. For media, we use the
       * `backend.media.baseUrl` by default, but fallback to `backend.occ.baseUrl`
       * if none provided.
       */
      url: (this.config?.backend?.media?.baseUrl || this.config?.backend?.occ?.baseUrl || "") + occImage.url,
      altText: occImage.altText,
      galleryIndex: occImage.galleryIndex,
      type: this.convertImageType(occImage.imageType),
      format: this.convertImageFormatType(occImage.format)
    };
    images.push(image);
  }
  getSingleSelectionUiType(coreSourceType, uiType) {
    switch (coreSourceType) {
      case OccConfigurator.UiType.RADIO_BUTTON: {
        uiType = Configurator.UiType.RADIOBUTTON;
        break;
      }
      case OccConfigurator.UiType.RADIO_BUTTON_ADDITIONAL_INPUT: {
        uiType = Configurator.UiType.RADIOBUTTON_ADDITIONAL_INPUT;
        break;
      }
      case OccConfigurator.UiType.DROPDOWN: {
        uiType = Configurator.UiType.DROPDOWN;
        break;
      }
      case OccConfigurator.UiType.DROPDOWN_ADDITIONAL_INPUT: {
        uiType = Configurator.UiType.DROPDOWN_ADDITIONAL_INPUT;
        break;
      }
      case OccConfigurator.UiType.CHECK_BOX: {
        uiType = Configurator.UiType.CHECKBOX;
        break;
      }
      case OccConfigurator.UiType.SINGLE_SELECTION_IMAGE: {
        uiType = Configurator.UiType.SINGLE_SELECTION_IMAGE;
        break;
      }
    }
    return uiType;
  }
  getMultiSelectionUiType(coreSourceType, uiType) {
    switch (coreSourceType) {
      case OccConfigurator.UiType.CHECK_BOX_LIST: {
        uiType = Configurator.UiType.CHECKBOXLIST;
        break;
      }
      case OccConfigurator.UiType.MULTI_SELECTION_IMAGE: {
        uiType = Configurator.UiType.MULTI_SELECTION_IMAGE;
        break;
      }
    }
    return uiType;
  }
  getReadOnlyUiType(sourceAttribute, coreSourceType, uiType) {
    switch (coreSourceType) {
      case OccConfigurator.UiType.READ_ONLY: {
        uiType = !sourceAttribute.retractBlocked && this.hasSourceAttributeConflicts(sourceAttribute) ? Configurator.UiType.RADIOBUTTON : Configurator.UiType.READ_ONLY;
        break;
      }
      case OccConfigurator.UiType.READ_ONLY_SINGLE_SELECTION_IMAGE: {
        uiType = !sourceAttribute.retractBlocked && this.hasSourceAttributeConflicts(sourceAttribute) ? Configurator.UiType.SINGLE_SELECTION_IMAGE : Configurator.UiType.READ_ONLY_SINGLE_SELECTION_IMAGE;
        break;
      }
      case OccConfigurator.UiType.READ_ONLY_MULTI_SELECTION_IMAGE: {
        uiType = !sourceAttribute.retractBlocked && this.hasSourceAttributeConflicts(sourceAttribute) ? Configurator.UiType.MULTI_SELECTION_IMAGE : Configurator.UiType.READ_ONLY_MULTI_SELECTION_IMAGE;
        break;
      }
    }
    return uiType;
  }
  getInputUiType(coreSourceType, uiType) {
    switch (coreSourceType) {
      case OccConfigurator.UiType.STRING: {
        uiType = Configurator.UiType.STRING;
        break;
      }
      case OccConfigurator.UiType.NUMERIC: {
        uiType = Configurator.UiType.NUMERIC;
        break;
      }
      case OccConfigurator.UiType.SAP_DATE: {
        uiType = Configurator.UiType.SAP_DATE;
        break;
      }
    }
    return uiType;
  }
  convertAttributeType(sourceAttribute) {
    let uiType = Configurator.UiType.NOT_IMPLEMENTED;
    const sourceType = sourceAttribute.type?.toString() ?? "";
    const coreSourceType = this.determineCoreUiType(sourceType);
    uiType = this.getSingleSelectionUiType(coreSourceType, uiType);
    uiType = this.getMultiSelectionUiType(coreSourceType, uiType);
    uiType = this.getInputUiType(coreSourceType, uiType);
    uiType = this.getReadOnlyUiType(sourceAttribute, coreSourceType, uiType);
    return uiType;
  }
  determineCoreUiType(sourceType) {
    const indexCustomSeparator = sourceType.indexOf(Configurator.CustomUiTypeIndicator);
    return indexCustomSeparator > 0 ? sourceType.substring(0, indexCustomSeparator) : sourceType;
  }
  convertGroupType(groupType) {
    switch (groupType) {
      case OccConfigurator.GroupType.CSTIC_GROUP:
        return Configurator.GroupType.ATTRIBUTE_GROUP;
      case OccConfigurator.GroupType.INSTANCE:
        return Configurator.GroupType.SUB_ITEM_GROUP;
      case OccConfigurator.GroupType.CONFLICT_HEADER:
        return Configurator.GroupType.CONFLICT_HEADER_GROUP;
      case OccConfigurator.GroupType.CONFLICT:
        return Configurator.GroupType.CONFLICT_GROUP;
    }
  }
  setGroupDescription(group) {
    switch (group.groupType) {
      case Configurator.GroupType.CONFLICT_HEADER_GROUP:
        this.translation.translate("configurator.group.conflictHeader").pipe(take(1)).subscribe((conflictHeaderText) => group.description = conflictHeaderText);
        break;
      case Configurator.GroupType.CONFLICT_GROUP:
        const conflictDescription = group.description;
        this.translation.translate("configurator.group.conflictGroup", {
          attribute: group.name
        }).pipe(take(1)).subscribe((conflictGroupText) => group.description = conflictGroupText);
        group.name = conflictDescription;
        break;
      default:
        if (group.name !== "_GEN") {
          return;
        }
        this.translation.translate("configurator.group.general").pipe(take(1)).subscribe((generalText) => group.description = generalText);
    }
  }
  convertImageType(imageType) {
    switch (imageType) {
      case OccConfigurator.ImageType.GALLERY:
        return Configurator.ImageType.GALLERY;
      case OccConfigurator.ImageType.PRIMARY:
        return Configurator.ImageType.PRIMARY;
    }
  }
  convertImageFormatType(formatType) {
    switch (formatType) {
      case OccConfigurator.ImageFormatType.VALUE_IMAGE:
        return Configurator.ImageFormatType.VALUE_IMAGE;
      case OccConfigurator.ImageFormatType.CSTIC_IMAGE:
        return Configurator.ImageFormatType.ATTRIBUTE_IMAGE;
    }
  }
  compileAttributeIncomplete(attribute) {
    attribute.incomplete = false;
    const singleValueTypes = [Configurator.UiType.RADIOBUTTON, Configurator.UiType.RADIOBUTTON_ADDITIONAL_INPUT, Configurator.UiType.DROPDOWN_ADDITIONAL_INPUT, Configurator.UiType.DROPDOWN];
    const inputTypes = [Configurator.UiType.NUMERIC, Configurator.UiType.SAP_DATE, Configurator.UiType.STRING];
    const multiValueTypes = [Configurator.UiType.CHECKBOXLIST, Configurator.UiType.CHECKBOX, Configurator.UiType.MULTI_SELECTION_IMAGE];
    const uiType = attribute.uiType ?? Configurator.UiType.NOT_IMPLEMENTED;
    if (singleValueTypes.includes(uiType)) {
      this.compileAttributeIncompleteSingleLevel(attribute);
    } else if (uiType === Configurator.UiType.SINGLE_SELECTION_IMAGE) {
      this.compileAttributeIncompleteSingleSelectionImage(attribute);
    } else if (inputTypes.includes(uiType)) {
      this.compileAttributeIncompleteInputTypes(attribute);
    } else if (multiValueTypes.includes(uiType)) {
      this.compileAttributeIncompleteMultiSelect(attribute);
    }
  }
  compileAttributeIncompleteSingleLevel(attribute) {
    if (!attribute.selectedSingleValue || attribute.selectedSingleValue === Configurator.RetractValueCode) {
      attribute.incomplete = true;
    }
  }
  compileAttributeIncompleteSingleSelectionImage(attribute) {
    if (!attribute.selectedSingleValue) {
      attribute.incomplete = true;
    }
  }
  compileAttributeIncompleteInputTypes(attribute) {
    if (!attribute.userInput) {
      attribute.incomplete = true;
    }
  }
  compileAttributeIncompleteMultiSelect(attribute) {
    const isOneValueSelected = attribute.values?.find((value) => value.selected) !== void 0;
    attribute.incomplete = !isOneValueSelected;
  }
  static {
    this.ɵfac = function OccConfiguratorVariantNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorVariantNormalizer)(ɵɵinject(OccConfig), ɵɵinject(TranslationService), ɵɵinject(ConfiguratorUISettingsConfig));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorVariantNormalizer,
      factory: _OccConfiguratorVariantNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorVariantNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OccConfig
  }, {
    type: TranslationService
  }, {
    type: ConfiguratorUISettingsConfig
  }], null);
})();
var VARIANT_CONFIGURATOR_NORMALIZER = new InjectionToken("VariantConfiguratorNormalizer");
var VARIANT_CONFIGURATOR_SERIALIZER = new InjectionToken("VariantConfiguratorSerializer");
var VARIANT_CONFIGURATOR_PRICE_SUMMARY_NORMALIZER = new InjectionToken("VariantConfiguratorPriceSummaryNormalizer");
var VARIANT_CONFIGURATOR_PRICE_NORMALIZER = new InjectionToken("VariantConfiguratorPriceNormalizer");
var VARIANT_CONFIGURATOR_ADD_TO_CART_SERIALIZER = new InjectionToken("VariantConfiguratorAddToCartSerializer");
var VARIANT_CONFIGURATOR_UPDATE_CART_ENTRY_SERIALIZER = new InjectionToken("VariantConfiguratorUpdateCartEntrySerializer");
var VARIANT_CONFIGURATOR_OVERVIEW_NORMALIZER = new InjectionToken("VariantConfiguratorOverviewNormalizer");
var VARIANT_CONFIGURATOR_OVERVIEW_SERIALIZER = new InjectionToken("VariantConfiguratorOverviewSerializer");
var OccConfiguratorVariantOverviewNormalizer = class _OccConfiguratorVariantOverviewNormalizer {
  constructor(translation, converterService) {
    this.translation = translation;
    this.converterService = converterService;
  }
  convert(source, target) {
    const prices = {
      priceSummary: source.pricing,
      configId: source.id
    };
    const resultTarget = __spreadProps(__spreadValues({}, target), {
      configId: source.id,
      groups: source.groups?.flatMap((group) => this.convertGroup(group)),
      priceSummary: this.converterService.convert(prices, VARIANT_CONFIGURATOR_PRICE_SUMMARY_NORMALIZER),
      productCode: source.productCode
    });
    this.setIssueCounters(resultTarget, source);
    return resultTarget;
  }
  convertGroup(source) {
    const result = [];
    const characteristicValues = source.characteristicValues;
    const subGroups = source.subGroups;
    const group = {
      id: source.id,
      groupDescription: source.groupDescription,
      attributes: characteristicValues ? characteristicValues.map((characteristic) => {
        return {
          attribute: characteristic.characteristic,
          attributeId: characteristic.characteristicId,
          value: characteristic.value,
          valueId: characteristic.valueId,
          valuePrice: characteristic.price
        };
      }) : []
    };
    this.setGeneralDescription(group);
    if (subGroups) {
      const resultSubGroups = [];
      subGroups.forEach((subGroup) => this.convertGroup(subGroup).forEach((groupArray) => resultSubGroups.push(groupArray)));
      group.subGroups = resultSubGroups;
    }
    result.push(group);
    return result;
  }
  setGeneralDescription(group) {
    if (group.id !== "_GEN") {
      return;
    }
    this.translation.translate("configurator.group.general").pipe(take(1)).subscribe((generalText) => group.groupDescription = generalText);
  }
  setIssueCounters(target, source) {
    target.totalNumberOfIssues = source.totalNumberOfIssues;
    target.numberOfConflicts = source.numberOfConflicts;
    target.numberOfIncompleteCharacteristics = source.numberOfIncompleteCharacteristics;
  }
  static {
    this.ɵfac = function OccConfiguratorVariantOverviewNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorVariantOverviewNormalizer)(ɵɵinject(TranslationService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorVariantOverviewNormalizer,
      factory: _OccConfiguratorVariantOverviewNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorVariantOverviewNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: ConverterService
  }], null);
})();
var OccConfiguratorVariantOverviewSerializer = class _OccConfiguratorVariantOverviewSerializer {
  constructor(converterService) {
    this.converterService = converterService;
  }
  convert(source, target) {
    return __spreadProps(__spreadValues({}, target), {
      id: source.configId,
      productCode: source.productCode,
      appliedCsticFilter: this.convertAttributeFilters(source.attributeFilters),
      groupFilterList: this.convertGroupFilters(source.groupFilters)
    });
  }
  convertAttributeFilters(attributeFilters) {
    const result = [];
    attributeFilters?.forEach((filter2) => {
      result.push({
        key: filter2,
        selected: true
      });
    });
    return result;
  }
  convertGroupFilters(groupFilters) {
    const result = [];
    groupFilters?.forEach((filter2) => {
      result.push({
        key: filter2,
        selected: true
      });
    });
    return result;
  }
  static {
    this.ɵfac = function OccConfiguratorVariantOverviewSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorVariantOverviewSerializer)(ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorVariantOverviewSerializer,
      factory: _OccConfiguratorVariantOverviewSerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorVariantOverviewSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ConverterService
  }], null);
})();
var OccConfiguratorVariantPriceSummaryNormalizer = class _OccConfiguratorVariantPriceSummaryNormalizer {
  convert(source, target) {
    const resultTarget = __spreadValues(__spreadValues({}, target), source.priceSummary);
    return resultTarget;
  }
  static {
    this.ɵfac = function OccConfiguratorVariantPriceSummaryNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorVariantPriceSummaryNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorVariantPriceSummaryNormalizer,
      factory: _OccConfiguratorVariantPriceSummaryNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorVariantPriceSummaryNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccConfiguratorVariantSerializer = class _OccConfiguratorVariantSerializer {
  convert(source, target) {
    const resultGroups = [];
    source.groups.forEach((group) => this.convertGroup(group, resultGroups));
    const resultTarget = __spreadProps(__spreadValues({}, target), {
      configId: source.configId,
      rootProduct: source.productCode,
      complete: source.complete,
      groups: resultGroups
    });
    return resultTarget;
  }
  convertGroup(source, occGroups) {
    const resultSubGroups = [];
    const resultAttributes = [];
    if (source.attributes) {
      source.attributes.forEach((attribute) => this.convertAttribute(attribute, resultAttributes));
    }
    if (source.subGroups) {
      source.subGroups.forEach((subGroup) => this.convertGroup(subGroup, resultSubGroups));
    }
    const group = {
      name: source.name,
      id: source.id,
      configurable: source.configurable,
      groupType: this.convertGroupType(source.groupType ?? Configurator.GroupType.ATTRIBUTE_GROUP),
      description: source.description,
      attributes: resultAttributes,
      subGroups: resultSubGroups
    };
    occGroups.push(group);
  }
  isRetractValue(attribute) {
    return attribute.selectedSingleValue === Configurator.RetractValueCode;
  }
  getRetractedValue(attribute) {
    return attribute.values?.find((value) => value.selected)?.valueCode;
  }
  retractValue(attribute, targetAttribute) {
    if (!this.isRetractValue(attribute)) {
      targetAttribute.value = attribute.selectedSingleValue;
    } else {
      targetAttribute.value = this.getRetractedValue(attribute);
      targetAttribute.retractTriggered = true;
    }
  }
  convertAttribute(attribute, occAttributes) {
    const uiType = attribute.uiType ?? Configurator.UiType.NOT_IMPLEMENTED;
    const targetAttribute = {
      key: attribute.name,
      name: attribute.name,
      langDepName: attribute.label,
      required: attribute.required,
      retractTriggered: attribute.retractTriggered,
      type: this.convertCharacteristicType(uiType)
    };
    const singleValueTypes = [Configurator.UiType.RADIOBUTTON, Configurator.UiType.RADIOBUTTON_ADDITIONAL_INPUT, Configurator.UiType.DROPDOWN_ADDITIONAL_INPUT, Configurator.UiType.DROPDOWN, Configurator.UiType.SINGLE_SELECTION_IMAGE];
    const multiValueTypes = [Configurator.UiType.CHECKBOXLIST, Configurator.UiType.CHECKBOX, Configurator.UiType.MULTI_SELECTION_IMAGE];
    const inputTypesSetValue = [Configurator.UiType.STRING, Configurator.UiType.SAP_DATE];
    const inputTypesSetFormattedValue = [Configurator.UiType.NUMERIC];
    if (singleValueTypes.includes(uiType)) {
      this.retractValue(attribute, targetAttribute);
    } else if (inputTypesSetValue.includes(uiType)) {
      targetAttribute.value = attribute.userInput;
    } else if (inputTypesSetFormattedValue.includes(uiType)) {
      targetAttribute.formattedValue = attribute.userInput;
    } else if (multiValueTypes.includes(uiType)) {
      const domainValues = [];
      if (attribute.values) {
        attribute.values.forEach((value) => {
          this.convertValue(value, domainValues);
        });
      }
      targetAttribute.domainValues = domainValues;
    }
    occAttributes.push(targetAttribute);
  }
  convertValue(value, values) {
    values.push({
      key: value.valueCode,
      langDepName: value.valueDisplay,
      name: value.name,
      selected: value.selected
    });
  }
  convertCharacteristicType(type) {
    const singleValueTypes = [Configurator.UiType.RADIOBUTTON, Configurator.UiType.RADIOBUTTON_ADDITIONAL_INPUT, Configurator.UiType.DROPDOWN_ADDITIONAL_INPUT, Configurator.UiType.DROPDOWN, Configurator.UiType.SINGLE_SELECTION_IMAGE];
    if (singleValueTypes.includes(type)) {
      return this.convertCharacteristicTypeSingleValue(type);
    } else {
      return this.convertCharacteristicTypeMultiValueAndInput(type);
    }
  }
  convertCharacteristicTypeSingleValue(type) {
    let uiType;
    switch (type) {
      case Configurator.UiType.RADIOBUTTON: {
        uiType = OccConfigurator.UiType.RADIO_BUTTON;
        break;
      }
      case Configurator.UiType.RADIOBUTTON_ADDITIONAL_INPUT: {
        uiType = OccConfigurator.UiType.RADIO_BUTTON_ADDITIONAL_INPUT;
        break;
      }
      case Configurator.UiType.DROPDOWN: {
        uiType = OccConfigurator.UiType.DROPDOWN;
        break;
      }
      case Configurator.UiType.DROPDOWN_ADDITIONAL_INPUT: {
        uiType = OccConfigurator.UiType.DROPDOWN_ADDITIONAL_INPUT;
        break;
      }
      case Configurator.UiType.SINGLE_SELECTION_IMAGE: {
        uiType = OccConfigurator.UiType.SINGLE_SELECTION_IMAGE;
        break;
      }
      default: {
        uiType = OccConfigurator.UiType.NOT_IMPLEMENTED;
      }
    }
    return uiType;
  }
  convertCharacteristicTypeMultiValueAndInput(type) {
    let uiType;
    switch (type) {
      case Configurator.UiType.STRING: {
        uiType = OccConfigurator.UiType.STRING;
        break;
      }
      case Configurator.UiType.NUMERIC: {
        uiType = OccConfigurator.UiType.NUMERIC;
        break;
      }
      case Configurator.UiType.SAP_DATE: {
        uiType = OccConfigurator.UiType.SAP_DATE;
        break;
      }
      case Configurator.UiType.CHECKBOX: {
        uiType = OccConfigurator.UiType.CHECK_BOX;
        break;
      }
      case Configurator.UiType.CHECKBOXLIST: {
        uiType = OccConfigurator.UiType.CHECK_BOX_LIST;
        break;
      }
      case Configurator.UiType.MULTI_SELECTION_IMAGE: {
        uiType = OccConfigurator.UiType.MULTI_SELECTION_IMAGE;
        break;
      }
      default: {
        uiType = OccConfigurator.UiType.NOT_IMPLEMENTED;
      }
    }
    return uiType;
  }
  convertGroupType(groupType) {
    switch (groupType) {
      case Configurator.GroupType.ATTRIBUTE_GROUP:
        return OccConfigurator.GroupType.CSTIC_GROUP;
      case Configurator.GroupType.SUB_ITEM_GROUP:
        return OccConfigurator.GroupType.INSTANCE;
      case Configurator.GroupType.CONFLICT_GROUP:
        return OccConfigurator.GroupType.CONFLICT;
      case Configurator.GroupType.CONFLICT_HEADER_GROUP:
        return OccConfigurator.GroupType.CONFLICT_HEADER;
    }
  }
  static {
    this.ɵfac = function OccConfiguratorVariantSerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorVariantSerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorVariantSerializer,
      factory: _OccConfiguratorVariantSerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorVariantSerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var OccConfiguratorVariantUpdateCartEntrySerializer = class _OccConfiguratorVariantUpdateCartEntrySerializer {
  convert(source, target) {
    const resultTarget = __spreadProps(__spreadValues({}, target), {
      userId: source.userId,
      cartId: source.cartId,
      product: {
        code: source.configuration.productCode
      },
      entryNumber: source.cartEntryNumber,
      configId: source.configuration.configId,
      configurationInfos: [{
        configuratorType: ConfiguratorType.VARIANT
      }]
    });
    return resultTarget;
  }
  static {
    this.ɵfac = function OccConfiguratorVariantUpdateCartEntrySerializer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorVariantUpdateCartEntrySerializer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorVariantUpdateCartEntrySerializer,
      factory: _OccConfiguratorVariantUpdateCartEntrySerializer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorVariantUpdateCartEntrySerializer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VariantConfiguratorOccAdapter = class _VariantConfiguratorOccAdapter {
  constructor(http, occEndpointsService, converterService, configExpertModeService) {
    this.http = http;
    this.occEndpointsService = occEndpointsService;
    this.converterService = converterService;
    this.configExpertModeService = configExpertModeService;
  }
  getConfiguratorType() {
    return ConfiguratorType.VARIANT;
  }
  getExpModeRequested() {
    let expMode = false;
    this.configExpertModeService.getExpModeRequested().pipe(take(1)).subscribe((mode) => expMode = mode);
    return expMode;
  }
  setExpModeActive(expMode) {
    this.configExpertModeService.setExpModeActive(expMode);
  }
  createConfiguration(owner, configIdTemplate, forceReset = false) {
    const productCode = owner.id;
    const expMode = this.getExpModeRequested();
    return this.http.get(this.occEndpointsService.buildUrl("createVariantConfiguration", {
      urlParams: {
        productCode
      },
      queryParams: configIdTemplate ? {
        configIdTemplate,
        expMode,
        forceReset
      } : {
        expMode,
        forceReset
      }
    }), {
      context: this.indicateSendUserForAsm()
    }).pipe(this.converterService.pipeable(VARIANT_CONFIGURATOR_NORMALIZER), tap((resultConfiguration) => {
      this.setExpModeActive(resultConfiguration.kbKey !== void 0);
    }), map((resultConfiguration) => {
      return __spreadProps(__spreadValues({}, resultConfiguration), {
        owner
      });
    }));
  }
  readConfiguration(configId, groupId, configurationOwner, attributeKey) {
    const expMode = this.getExpModeRequested();
    const attributeKeyRequiresDomain = attributeKey;
    return this.http.get(this.occEndpointsService.buildUrl("readVariantConfiguration", {
      urlParams: {
        configId
      },
      queryParams: {
        groupId,
        expMode,
        attributeKeyRequiresDomain
      }
    }), {
      context: this.indicateSendUserForAsm()
    }).pipe(this.converterService.pipeable(VARIANT_CONFIGURATOR_NORMALIZER), tap((resultConfiguration) => {
      this.setExpModeActive(resultConfiguration.kbKey !== void 0);
    }), map((resultConfiguration) => {
      return __spreadProps(__spreadValues({}, resultConfiguration), {
        owner: configurationOwner,
        newConfiguration: false
      });
    }));
  }
  updateConfiguration(configuration) {
    const configId = configuration.configId;
    const expMode = this.getExpModeRequested();
    const url = this.occEndpointsService.buildUrl("updateVariantConfiguration", {
      urlParams: {
        configId
      },
      queryParams: {
        expMode
      }
    });
    const occConfiguration = this.converterService.convert(configuration, VARIANT_CONFIGURATOR_SERIALIZER);
    return this.http.patch(url, occConfiguration, {
      context: this.indicateSendUserForAsm()
    }).pipe(this.converterService.pipeable(VARIANT_CONFIGURATOR_NORMALIZER), tap((resultConfiguration) => {
      this.setExpModeActive(resultConfiguration.kbKey !== void 0);
    }), map((resultConfiguration) => {
      return __spreadProps(__spreadValues({}, resultConfiguration), {
        owner: configuration.owner
      });
    }));
  }
  addToCart(parameters) {
    const url = this.occEndpointsService.buildUrl("addVariantConfigurationToCart", {
      urlParams: {
        userId: parameters.userId,
        cartId: parameters.cartId
      }
    });
    const occAddToCartParameters = this.converterService.convert(parameters, VARIANT_CONFIGURATOR_ADD_TO_CART_SERIALIZER);
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.post(url, occAddToCartParameters, {
      headers
    }).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }
  readConfigurationForCartEntry(parameters) {
    const expMode = this.getExpModeRequested();
    const url = this.occEndpointsService.buildUrl("readVariantConfigurationForCartEntry", {
      urlParams: {
        userId: parameters.userId,
        cartId: parameters.cartId,
        cartEntryNumber: parameters.cartEntryNumber
      },
      queryParams: {
        expMode
      }
    });
    return this.http.get(url).pipe(this.converterService.pipeable(VARIANT_CONFIGURATOR_NORMALIZER), tap((resultConfiguration) => {
      this.setExpModeActive(resultConfiguration.kbKey !== void 0);
    }), map((resultConfiguration) => {
      return __spreadProps(__spreadValues({}, resultConfiguration), {
        owner: parameters.owner
      });
    }));
  }
  updateConfigurationForCartEntry(parameters) {
    const url = this.occEndpointsService.buildUrl("updateVariantConfigurationForCartEntry", {
      urlParams: {
        userId: parameters.userId,
        cartId: parameters.cartId,
        cartEntryNumber: parameters.cartEntryNumber
      }
    });
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const occUpdateCartEntryParameters = this.converterService.convert(parameters, VARIANT_CONFIGURATOR_UPDATE_CART_ENTRY_SERIALIZER);
    return this.http.put(url, occUpdateCartEntryParameters, {
      headers
    }).pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }
  readConfigurationForOrderEntry(parameters) {
    const ownerType = parameters.owner.type;
    let url;
    if (ownerType === CommonConfigurator.OwnerType.QUOTE_ENTRY) {
      url = this.occEndpointsService.buildUrl("readVariantConfigurationOverviewForQuoteEntry", {
        urlParams: {
          userId: parameters.userId,
          quoteId: parameters.orderId,
          quoteEntryNumber: parameters.orderEntryNumber
        }
      });
    } else if (ownerType === CommonConfigurator.OwnerType.SAVED_CART_ENTRY) {
      url = this.occEndpointsService.buildUrl("readVariantConfigurationOverviewForSavedCartEntry", {
        urlParams: {
          userId: parameters.userId,
          cartId: parameters.orderId,
          cartEntryNumber: parameters.orderEntryNumber
        }
      });
    } else {
      url = this.occEndpointsService.buildUrl("readVariantConfigurationOverviewForOrderEntry", {
        urlParams: {
          userId: parameters.userId,
          orderId: parameters.orderId,
          orderEntryNumber: parameters.orderEntryNumber
        }
      });
    }
    return this.http.get(url).pipe(this.converterService.pipeable(VARIANT_CONFIGURATOR_OVERVIEW_NORMALIZER), map((overview) => {
      const configuration = {
        configId: overview.configId,
        productCode: overview.productCode,
        groups: [],
        flatGroups: [],
        interactionState: {},
        overview,
        owner: ConfiguratorModelUtils.createInitialOwner()
      };
      return configuration;
    }), map((resultConfiguration) => {
      return __spreadProps(__spreadValues({}, resultConfiguration), {
        owner: parameters.owner
      });
    }));
  }
  readPriceSummary(configuration) {
    const url = this.occEndpointsService.buildUrl("readVariantConfigurationPriceSummary", {
      urlParams: {
        configId: configuration.configId
      },
      queryParams: {
        groupId: configuration.interactionState.currentGroup
      }
    });
    return this.http.get(url, {
      context: this.indicateSendUserForAsm()
    }).pipe(this.converterService.pipeable(VARIANT_CONFIGURATOR_PRICE_NORMALIZER), map((configResult) => {
      const result = __spreadProps(__spreadValues({}, configuration), {
        priceSummary: configResult.priceSummary,
        priceSupplements: configResult.priceSupplements
      });
      return result;
    }));
  }
  getConfigurationOverview(configId) {
    const url = this.occEndpointsService.buildUrl("getVariantConfigurationOverview", {
      urlParams: {
        configId
      }
    });
    return this.http.get(url, {
      context: this.indicateSendUserForAsm()
    }).pipe(this.converterService.pipeable(VARIANT_CONFIGURATOR_OVERVIEW_NORMALIZER));
  }
  updateConfigurationOverview(ovInput) {
    const url = this.occEndpointsService.buildUrl("getVariantConfigurationOverview", {
      urlParams: {
        configId: ovInput.configId
      }
    });
    const occOverview = this.converterService.convert(ovInput, VARIANT_CONFIGURATOR_OVERVIEW_SERIALIZER);
    return this.http.patch(url, occOverview, {
      context: this.indicateSendUserForAsm()
    }).pipe(this.converterService.pipeable(VARIANT_CONFIGURATOR_OVERVIEW_NORMALIZER), map((overview) => __spreadProps(__spreadValues({}, overview), {
      attributeFilters: ovInput.attributeFilters,
      groupFilters: ovInput.groupFilters,
      possibleGroups: ovInput.possibleGroups
    })));
  }
  searchVariants(configId) {
    const url = this.occEndpointsService.buildUrl("searchConfiguratorVariants", {
      urlParams: {
        configId
      }
    });
    return this.http.get(url, {
      context: this.indicateSendUserForAsm()
    });
  }
  /**
   * Prepares http context indicating that emulated user has to be added to the request in ASM mode
   *
   * The actual calls to the commerce backend will only be changed if the ASM setting
   * userIdHttpHeader:{
   *  enable:true
   * },
   * is active
   * @returns http context indicating that emulated user has to be added to the request in ASM mode
   */
  indicateSendUserForAsm() {
    return new HttpContext().set(OCC_HTTP_TOKEN, {
      sendUserIdAsHeader: true
    });
  }
  static {
    this.ɵfac = function VariantConfiguratorOccAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VariantConfiguratorOccAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService), ɵɵinject(ConfiguratorExpertModeService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _VariantConfiguratorOccAdapter,
      factory: _VariantConfiguratorOccAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VariantConfiguratorOccAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }, {
    type: ConfiguratorExpertModeService
  }], null);
})();
var OccConfiguratorVariantPriceNormalizer = class _OccConfiguratorVariantPriceNormalizer {
  convert(source, target) {
    const priceSupplements = [];
    source.attributes?.forEach((attr) => {
      this.convertAttributeSupplements(attr, priceSupplements);
    });
    const resultTarget = __spreadProps(__spreadValues({}, target), {
      configId: source.configId,
      productCode: "",
      groups: [],
      flatGroups: [],
      owner: ConfiguratorModelUtils.createInitialOwner(),
      interactionState: {},
      priceSummary: source?.priceSummary,
      priceSupplements
    });
    return resultTarget;
  }
  convertAttributeSupplements(source, priceSupplements) {
    const attributeSupplement = {
      attributeUiKey: source?.csticUiKey,
      valueSupplements: []
    };
    source?.priceSupplements?.forEach((value) => {
      this.convertValueSupplement(value, attributeSupplement?.valueSupplements);
    });
    priceSupplements.push(attributeSupplement);
  }
  convertValueSupplement(source, valueSupplements) {
    const valueSupplement = {
      attributeValueKey: source?.attributeValueKey,
      priceValue: source?.priceValue,
      obsoletePriceValue: source?.obsoletePriceValue
    };
    valueSupplements.push(valueSupplement);
  }
  static {
    this.ɵfac = function OccConfiguratorVariantPriceNormalizer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccConfiguratorVariantPriceNormalizer)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccConfiguratorVariantPriceNormalizer,
      factory: _OccConfiguratorVariantPriceNormalizer.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccConfiguratorVariantPriceNormalizer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function defaultOccVariantConfiguratorConfigFactory() {
  return {
    backend: {
      occ: {
        endpoints: {
          createVariantConfiguration: "products/${productCode}/configurators/ccpconfigurator",
          readVariantConfiguration: "ccpconfigurator/${configId}",
          updateVariantConfiguration: "ccpconfigurator/${configId}",
          addVariantConfigurationToCart: "users/${userId}/carts/${cartId}/entries/ccpconfigurator",
          readVariantConfigurationForCartEntry: "users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/ccpconfigurator",
          updateVariantConfigurationForCartEntry: "users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/ccpconfigurator",
          readVariantConfigurationOverviewForOrderEntry: "users/${userId}/orders/${orderId}/entries/${orderEntryNumber}/ccpconfigurator/configurationOverview",
          readVariantConfigurationOverviewForSavedCartEntry: "users/${userId}/carts/${cartId}/entries/${cartEntryNumber}/ccpconfigurator/configurationOverview",
          readVariantConfigurationOverviewForQuoteEntry: "users/${userId}/quotes/${quoteId}/entries/${quoteEntryNumber}/ccpconfigurator/configurationOverview",
          readVariantConfigurationPriceSummary: "ccpconfigurator/${configId}/pricing",
          getVariantConfigurationOverview: "ccpconfigurator/${configId}/configurationOverview",
          searchConfiguratorVariants: "ccpconfigurator/${configId}/variants"
        }
      }
    }
  };
}
var VariantConfiguratorOccModule = class _VariantConfiguratorOccModule {
  static {
    this.ɵfac = function VariantConfiguratorOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VariantConfiguratorOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _VariantConfiguratorOccModule,
      imports: [CommonModule, ConfigModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: RulebasedConfiguratorConnector.CONFIGURATOR_ADAPTER_LIST,
        useClass: VariantConfiguratorOccAdapter,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_NORMALIZER,
        useExisting: OccConfiguratorVariantNormalizer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_SERIALIZER,
        useExisting: OccConfiguratorVariantSerializer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_PRICE_SUMMARY_NORMALIZER,
        useExisting: OccConfiguratorVariantPriceSummaryNormalizer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_PRICE_NORMALIZER,
        useExisting: OccConfiguratorVariantPriceNormalizer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_ADD_TO_CART_SERIALIZER,
        useExisting: OccConfiguratorVariantAddToCartSerializer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_UPDATE_CART_ENTRY_SERIALIZER,
        useExisting: OccConfiguratorVariantUpdateCartEntrySerializer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_OVERVIEW_NORMALIZER,
        useExisting: OccConfiguratorVariantOverviewNormalizer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_OVERVIEW_SERIALIZER,
        useExisting: OccConfiguratorVariantOverviewSerializer,
        multi: true
      }],
      imports: [CommonModule, ConfigModule.withConfigFactory(defaultOccVariantConfiguratorConfigFactory)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VariantConfiguratorOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ConfigModule.withConfigFactory(defaultOccVariantConfiguratorConfigFactory)],
      providers: [{
        provide: RulebasedConfiguratorConnector.CONFIGURATOR_ADAPTER_LIST,
        useClass: VariantConfiguratorOccAdapter,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_NORMALIZER,
        useExisting: OccConfiguratorVariantNormalizer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_SERIALIZER,
        useExisting: OccConfiguratorVariantSerializer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_PRICE_SUMMARY_NORMALIZER,
        useExisting: OccConfiguratorVariantPriceSummaryNormalizer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_PRICE_NORMALIZER,
        useExisting: OccConfiguratorVariantPriceNormalizer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_ADD_TO_CART_SERIALIZER,
        useExisting: OccConfiguratorVariantAddToCartSerializer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_UPDATE_CART_ENTRY_SERIALIZER,
        useExisting: OccConfiguratorVariantUpdateCartEntrySerializer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_OVERVIEW_NORMALIZER,
        useExisting: OccConfiguratorVariantOverviewNormalizer,
        multi: true
      }, {
        provide: VARIANT_CONFIGURATOR_OVERVIEW_SERIALIZER,
        useExisting: OccConfiguratorVariantOverviewSerializer,
        multi: true
      }]
    }]
  }], null, null);
})();
var RulebasedConfiguratorModule = class _RulebasedConfiguratorModule {
  static {
    this.ɵfac = function RulebasedConfiguratorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RulebasedConfiguratorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RulebasedConfiguratorModule,
      imports: [VariantConfiguratorOccModule, RulebasedConfiguratorCoreModule, RulebasedConfiguratorComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [VariantConfiguratorOccModule, RulebasedConfiguratorCoreModule, RulebasedConfiguratorComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RulebasedConfiguratorModule, [{
    type: NgModule,
    args: [{
      imports: [VariantConfiguratorOccModule, RulebasedConfiguratorCoreModule, RulebasedConfiguratorComponentsModule]
    }]
  }], null, null);
})();

export {
  Configurator,
  CONFIGURATOR_FEATURE,
  CONFIGURATOR_DATA,
  configuratorGroup_actions,
  configuratorGroup_selectors,
  ConfiguratorUtilsService,
  ConfiguratorCartService,
  ConfiguratorCommonsService,
  ConfiguratorGroupStatusService,
  ConfiguratorGroupsService,
  ConfiguratorStorefrontUtilsService,
  ConfiguratorQuantityService,
  ConfiguratorAddToCartButtonComponent,
  ConfiguratorAddToCartButtonModule,
  ConfiguratorAttributeCompositionConfig,
  ConfiguratorAttributeCompositionContext,
  ConfiguratorAttributeCompositionDirective,
  ConfiguratorAttributeCompositionModule,
  ConfiguratorUISettingsConfig,
  ConfiguratorAttributePriceChangeService,
  ConfiguratorAttributeBaseComponent,
  ConfiguratorAttributeFooterComponent,
  ConfiguratorAttributeFooterModule,
  ConfiguratorShowMoreComponent,
  ConfiguratorShowOptionsComponent,
  ConfiguratorAttributeHeaderComponent,
  ConfiguratorShowMoreModule,
  ConfiguratorShowOptionsModule,
  ConfiguratorAttributeHeaderModule,
  ConfiguratorAttributeQuantityComponent,
  ConfiguratorPriceComponent,
  ConfiguratorAttributeProductCardComponent,
  ConfiguratorPriceModule,
  ConfiguratorAttributeQuantityModule,
  ConfiguratorAttributeProductCardModule,
  ConfiguratorAttributeQuantityService,
  ConfiguratorAttributeSingleSelectionBaseComponent,
  ConfiguratorAttributeMultiSelectionBaseComponent,
  ConfiguratorAttributeCheckBoxListComponent,
  ConfiguratorAttributeCheckboxListModule,
  ConfiguratorAttributeCheckBoxComponent,
  ConfiguratorAttributeCheckboxModule,
  ConfiguratorAttributeInputFieldComponent,
  ConfiguratorAttributeNumericInputFieldService,
  ConfiguratorAttributeNumericInputFieldComponent,
  ConfiguratorAttributeDropDownComponent,
  ConfiguratorAttributeInputFieldModule,
  ConfiguratorAttributeNumericInputFieldModule,
  ConfiguratorAttributeDropDownModule,
  ConfiguratorAttributeMultiSelectionBundleComponent,
  ConfiguratorAttributeMultiSelectionBundleModule,
  ConfiguratorAttributeMultiSelectionImageComponent,
  ConfiguratorAttributeMultiSelectionImageModule,
  ConfiguratorAttributeNotSupportedComponent,
  ConfiguratorAttributeNotSupportedModule,
  ConfiguratorAttributeRadioButtonComponent,
  ConfiguratorAttributeRadioButtonModule,
  ConfiguratorAttributeReadOnlyComponent,
  ConfiguratorAttributeReadOnlyModule,
  ConfiguratorAttributeSingleSelectionBundleDropdownComponent,
  ConfiguratorAttributeSingleSelectionBundleDropdownModule,
  ConfiguratorAttributeSingleSelectionBundleComponent,
  ConfiguratorAttributeSingleSelectionBundleModule,
  ConfiguratorAttributeSingleSelectionImageComponent,
  ConfiguratorAttributeSingleSelectionImageModule,
  ConfiguratorMessageConfig,
  ConfiguratorConflictAndErrorMessagesComponent,
  ConfiguratorConflictAndErrorMessagesModule,
  ConfiguratorConflictDescriptionComponent,
  ConfiguratorConflictDescriptionModule,
  ConfiguratorConflictSuggestionComponent,
  ConfiguratorConflictSuggestionModule,
  ConfiguratorExitButtonComponent,
  ConfiguratorExitButtonModule,
  ConfiguratorExpertModeService,
  ConfiguratorGroupComponent,
  ConfiguratorConflictSolverDialogComponent,
  ConfiguratorConflictSolverDialogLauncherService,
  ConfiguratorGroupModule,
  ConfiguratorConflictSolverDialogModule,
  ConfiguratorFormComponent,
  ConfigFormUpdateEvent,
  ConfiguratorFormModule,
  ConfiguratorGroupMenuComponent,
  ConfiguratorGroupMenuModule,
  ConfiguratorGroupTitleComponent,
  ConfiguratorGroupTitleModule,
  ConfiguratorOverviewAttributeComponent,
  ConfiguratorOverviewAttributeModule,
  ConfiguratorOverviewBundleAttributeComponent,
  ConfiguratorOverviewBundleAttributeModule,
  ConfiguratorOverviewFilterBarComponent,
  ConfiguratorOverviewFilterComponent,
  ConfiguratorOverviewFilterBarModule,
  ConfiguratorOverviewFilterModule,
  ConfiguratorOverviewFilterButtonComponent,
  ConfiguratorOverviewFilterButtonModule,
  ConfiguratorOverviewFilterDialogComponent,
  ConfiguratorOverviewFilterDialogModule,
  ConfiguratorOverviewFormComponent,
  ConfiguratorOverviewFormModule,
  ConfiguratorOverviewMenuComponent,
  ConfiguratorOverviewMenuModule,
  ConfiguratorOverviewNotificationBannerComponent,
  ConfiguratorOverviewNotificationBannerModule,
  ConfiguratorOverviewSidebarComponent,
  ConfiguratorOverviewSidebarModule,
  ConfiguratorPreviousNextButtonsComponent,
  ConfiguratorPreviousNextButtonsModule,
  ConfiguratorPriceSummaryComponent,
  ConfiguratorPriceSummaryModule,
  ConfiguratorProductTitleComponent,
  ConfiguratorProductTitleModule,
  ConfiguratorRestartDialogComponent,
  ConfiguratorRestartDialogModule,
  ConfiguratorTabBarComponent,
  ConfiguratorTabBarModule,
  ConfiguratorUpdateMessageComponent,
  ConfiguratorUpdateMessageModule,
  ConfiguratorVariantCarouselComponent,
  ConfiguratorVariantCarouselModule,
  RulebasedConfiguratorComponentsModule,
  ConfiguratorCoreConfig,
  RulebasedConfiguratorAdapter,
  RulebasedConfiguratorConnector,
  ConfiguratorRouterListener,
  ConfiguratorRouterModule,
  ConfiguratorBasicEffectService,
  ConfiguratorLogoutEventListener,
  ConfiguratorLanguageSetEventListener,
  RulebasedConfiguratorCoreModule,
  OccConfiguratorVariantAddToCartSerializer,
  OccConfigurator,
  OccConfiguratorVariantNormalizer,
  VARIANT_CONFIGURATOR_NORMALIZER,
  VARIANT_CONFIGURATOR_SERIALIZER,
  VARIANT_CONFIGURATOR_PRICE_SUMMARY_NORMALIZER,
  VARIANT_CONFIGURATOR_PRICE_NORMALIZER,
  VARIANT_CONFIGURATOR_ADD_TO_CART_SERIALIZER,
  VARIANT_CONFIGURATOR_UPDATE_CART_ENTRY_SERIALIZER,
  VARIANT_CONFIGURATOR_OVERVIEW_NORMALIZER,
  VARIANT_CONFIGURATOR_OVERVIEW_SERIALIZER,
  OccConfiguratorVariantOverviewNormalizer,
  OccConfiguratorVariantOverviewSerializer,
  OccConfiguratorVariantPriceSummaryNormalizer,
  OccConfiguratorVariantSerializer,
  OccConfiguratorVariantUpdateCartEntrySerializer,
  VariantConfiguratorOccAdapter,
  VariantConfiguratorOccModule,
  RulebasedConfiguratorModule
};
//# sourceMappingURL=chunk-CUFULLR5.js.map
