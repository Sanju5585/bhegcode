import {
  AbstractOrderContext
} from "./chunk-ZPMY6JFV.js";
import {
  AbstractOrderType,
  CartItemContext,
  CartOutlets,
  PromotionLocation
} from "./chunk-KEAKWHYV.js";
import {
  BreakpointService,
  BtnLikeLinkModule,
  CurrentProductService,
  ICON_TYPE,
  IconComponent,
  IconModule,
  OutletPosition,
  ProductListItemContext,
  ProductListOutlets,
  provideOutlet
} from "./chunk-D5RDRHN5.js";
import {
  ConfigModule,
  CxNumericPipe,
  I18nModule,
  LoggerService,
  OCC_USER_ID_ANONYMOUS,
  ProductScope,
  RoutingService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserIdService,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  Input,
  NgModule,
  Optional,
  inject,
  isDevMode,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import {
  EMPTY,
  filter,
  map,
  of,
  take
} from "./chunk-R6FETK65.js";

// node_modules/@spartacus/product-configurator/fesm2022/spartacus-product-configurator-common.mjs
var _c0 = (a0, a1, a2) => ({
  ownerType: a0,
  entityKey: a1,
  displayOnly: a2
});
var _c1 = (a0, a1) => ({
  cxRoute: a0,
  params: a1
});
function ConfigureCartEntryComponent_ng_container_0_ng_container_1_label_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfigureCartEntryComponent_ng_container_0_ng_container_1_label_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "label", 4);
    ɵɵtemplate(1, ConfigureCartEntryComponent_ng_container_0_ng_container_1_label_1_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext(2);
    const configureText_r1 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isDisabled())("ngIfThen", configureText_r1);
  }
}
function ConfigureCartEntryComponent_ng_container_0_ng_container_1_a_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfigureCartEntryComponent_ng_container_0_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 6);
    ɵɵpipe(1, "cxUrl");
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, ConfigureCartEntryComponent_ng_container_0_ng_container_1_a_2_ng_container_3_Template, 1, 0, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const abstractOrderKey_r3 = ɵɵnextContext(2).ngIf;
    const configureText_r1 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 5, ɵɵpureFunction2(13, _c1, ctx_r1.getRoute(), ɵɵpureFunction3(9, _c0, ctx_r1.retrieveOwnerTypeFromAbstractOrderType(abstractOrderKey_r3), ctx_r1.retrieveEntityKey(abstractOrderKey_r3), ctx_r1.getDisplayOnly()))))("queryParams", ɵɵpipeBind1(2, 7, ctx_r1.queryParams$));
    ɵɵattribute("aria-describedby", ctx_r1.getResolveIssuesA11yDescription());
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r1.isDisabled())("ngIfThen", configureText_r1);
  }
}
function ConfigureCartEntryComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfigureCartEntryComponent_ng_container_0_ng_container_1_label_1_Template, 2, 2, "label", 2)(2, ConfigureCartEntryComponent_ng_container_0_ng_container_1_a_2_Template, 4, 16, "a", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isDisabled());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.isDisabled());
  }
}
function ConfigureCartEntryComponent_ng_container_0_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.header.displayConfiguration"), "");
  }
}
function ConfigureCartEntryComponent_ng_container_0_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.header.editConfiguration"), " ");
  }
}
function ConfigureCartEntryComponent_ng_container_0_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.header.resolveIssues"), " ");
  }
}
function ConfigureCartEntryComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfigureCartEntryComponent_ng_container_0_ng_template_2_ng_container_0_Template, 3, 3, "ng-container", 1)(1, ConfigureCartEntryComponent_ng_container_0_ng_template_2_ng_container_1_Template, 3, 3, "ng-container", 1)(2, ConfigureCartEntryComponent_ng_container_0_ng_template_2_ng_container_2_Template, 3, 3, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.getDisplayOnly());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.getDisplayOnly() && !ctx_r1.msgBanner);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.getDisplayOnly() && ctx_r1.msgBanner);
  }
}
function ConfigureCartEntryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfigureCartEntryComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 1)(2, ConfigureCartEntryComponent_ng_container_0_ng_template_2_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.cartEntry);
  }
}
var _c2 = (a0) => ({
  count: a0
});
function ConfiguratorIssuesNotificationComponent_ng_container_0_ng_container_1_ng_container_5_cx_configure_cart_entry_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configure-cart-entry", 4);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    let tmp_7_0;
    const quantityControl_r1 = ɵɵnextContext().ngIf;
    const orderEntry_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("cartEntry", orderEntry_r2)("readOnly", (tmp_7_0 = ɵɵpipeBind1(1, 4, ctx_r2.readonly$)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : false)("msgBanner", true)("disabled", quantityControl_r1.disabled);
  }
}
function ConfiguratorIssuesNotificationComponent_ng_container_0_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorIssuesNotificationComponent_ng_container_0_ng_container_1_ng_container_5_cx_configure_cart_entry_1_Template, 2, 6, "cx-configure-cart-entry", 3);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.shouldShowButton$) && (orderEntry_r2 == null ? null : orderEntry_r2.product == null ? null : orderEntry_r2.product.configurable));
  }
}
function ConfiguratorIssuesNotificationComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-icon", 1);
    ɵɵelementStart(2, "div", 2);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵtemplate(5, ConfiguratorIssuesNotificationComponent_ng_container_0_ng_container_1_ng_container_5_Template, 3, 3, "ng-container", 0);
    ɵɵpipe(6, "async");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("type", ctx_r2.iconTypes.ERROR);
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r2.getErrorMessageId(orderEntry_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 4, "configurator.notificationBanner.numberOfIssues", ɵɵpureFunction1(9, _c2, ctx_r2.getNumberOfIssues(orderEntry_r2))), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(6, 7, ctx_r2.quantityControl$));
  }
}
function ConfiguratorIssuesNotificationComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorIssuesNotificationComponent_ng_container_0_ng_container_1_Template, 7, 11, "ng-container", 0);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r2 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hasIssues(orderEntry_r2) && !ɵɵpipeBind1(2, 1, ctx_r2.readonly$));
  }
}
var _c3 = (a0, a1) => ({
  attribute: a0,
  value: a1
});
function ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "configurator.a11y.cartEntryInfoIntro"), " ");
  }
}
function ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "span", 5);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 6);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 7);
    ɵɵtext(7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const info_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵattribute("aria-describedby", ctx_r2.getHiddenConfigurationInfoId(i_r2));
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r2.getHiddenConfigurationInfoId(i_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 5, "configurator.a11y.cartEntryInfo", ɵɵpureFunction2(8, _c3, info_r1.configurationLabel, info_r1.configurationValue)), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", info_r1 == null ? null : info_r1.configurationLabel, ": ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", info_r1 == null ? null : info_r1.configurationValue, " ");
  }
}
function ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_ng_container_1_span_1_Template, 3, 3, "span", 1)(2, ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_ng_container_1_div_2_Template, 8, 11, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const orderEntry_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", (tmp_4_0 = orderEntry_r4.configurationInfos == null ? null : orderEntry_r4.configurationInfos.length) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0 > 0);
    ɵɵadvance();
    ɵɵproperty("ngForOf", orderEntry_r4.configurationInfos);
  }
}
function ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_ng_container_2_cx_configure_cart_entry_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configure-cart-entry", 9);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    let tmp_7_0;
    const quantityControl_r5 = ɵɵnextContext().ngIf;
    const orderEntry_r4 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("cartEntry", orderEntry_r4)("readOnly", (tmp_7_0 = ɵɵpipeBind1(1, 4, ctx_r2.readonly$)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : false)("msgBanner", false)("disabled", quantityControl_r5.disabled);
  }
}
function ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_ng_container_2_cx_configure_cart_entry_1_Template, 2, 6, "cx-configure-cart-entry", 8);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r4 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.shouldShowButton$) && (orderEntry_r4 == null ? null : orderEntry_r4.product == null ? null : orderEntry_r4.product.configurable));
  }
}
function ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 0)(2, ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_ng_container_2_Template, 3, 3, "ng-container", 0);
    ɵɵpipe(3, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r4 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hasStatus(orderEntry_r4));
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 2, ctx_r2.quantityControl$));
  }
}
function ConfiguratorCartEntryInfoComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorCartEntryInfoComponent_ng_container_0_ng_container_1_Template, 4, 4, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r4 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isAttributeBasedConfigurator(orderEntry_r4));
  }
}
function ConfigureProductComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function ConfigureProductComponent_ng_container_0_ng_container_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const product_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navigateToConfigurator(product_r2));
    });
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const product_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 2, ctx_r2.getAriaLabelTranslationKey(product_r2.configuratorType)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, ctx_r2.getTranslationKey(product_r2.configuratorType)), " ");
  }
}
function ConfigureProductComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfigureProductComponent_ng_container_0_ng_container_1_Template, 5, 6, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", product_r2.configurable && !ctx_r2.isReadOnlyBaseProduct(product_r2));
  }
}
function ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_1_div_8_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 11);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 12);
    ɵɵtext(5);
    ɵɵpipe(6, "cxNumeric");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const lineItem_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "configurator.attribute.quantity"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 4, lineItem_r3 == null ? null : lineItem_r3.formattedQuantity));
  }
}
function ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_1_div_8_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 11);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 12);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const lineItem_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 2, "configurator.overviewForm.itemPrice"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(lineItem_r3 == null ? null : lineItem_r3.formattedPrice);
  }
}
function ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "span", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 8);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 9);
    ɵɵtemplate(6, ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_1_div_8_ng_container_6_Template, 7, 6, "ng-container", 0);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 10);
    ɵɵtemplate(8, ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_1_div_8_ng_container_8_Template, 6, 4, "ng-container", 0);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const lineItem_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵattribute("aria-describedby", ctx_r1.getHiddenItemInfoId(i_r4));
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r1.getHiddenItemInfoId(i_r4));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getHiddenItemInfo(lineItem_r3), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", lineItem_r3 == null ? null : lineItem_r3.name, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", lineItem_r3 == null ? null : lineItem_r3.formattedQuantity);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", lineItem_r3 == null ? null : lineItem_r3.formattedPrice);
  }
}
function ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 2);
    ɵɵlistener("click", function ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_1_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleItems());
    });
    ɵɵelementStart(5, "div", 3);
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 4);
    ɵɵtemplate(8, ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_1_div_8_Template, 9, 6, "div", 5);
    ɵɵpipe(9, "async");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const numberOfItems_r5 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 7, "configurator.header.items", ɵɵpureFunction1(12, _c2, numberOfItems_r5)), " ");
    ɵɵadvance(2);
    ɵɵattribute("aria-expanded", !ctx_r1.hideItems)("aria-label", ctx_r1.getItemsMsg(numberOfItems_r5));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.getButtonText(), " ");
    ɵɵadvance();
    ɵɵclassProp("open", !ctx_r1.hideItems);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ɵɵpipeBind1(9, 10, ctx_r1.lineItems$));
  }
}
function ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_3_cx_configure_cart_entry_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-configure-cart-entry", 14);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    let tmp_7_0;
    const quantityControl_r6 = ɵɵnextContext().ngIf;
    const orderEntry_r7 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cartEntry", orderEntry_r7)("readOnly", (tmp_7_0 = ɵɵpipeBind1(1, 4, ctx_r1.readonly$)) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : false)("msgBanner", false)("disabled", quantityControl_r6.disabled);
  }
}
function ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_3_cx_configure_cart_entry_1_Template, 2, 6, "cx-configure-cart-entry", 13);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r7 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r1.shouldShowButton$) && (orderEntry_r7 == null ? null : orderEntry_r7.product == null ? null : orderEntry_r7.product.configurable));
  }
}
function ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_1_Template, 10, 14, "ng-container", 0);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_ng_container_3_Template, 3, 3, "ng-container", 0);
    ɵɵpipe(4, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r1.numberOfLineItems$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx_r1.quantityControl$));
  }
}
function ConfiguratorCartEntryBundleInfoComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfiguratorCartEntryBundleInfoComponent_ng_container_0_ng_container_1_Template, 5, 6, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r7 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isBundleBasedConfigurator(orderEntry_r7));
  }
}
var CommonConfigurator;
(function(CommonConfigurator2) {
  let OwnerType;
  (function(OwnerType2) {
    OwnerType2["PRODUCT"] = "product";
    OwnerType2["CART_ENTRY"] = "cartEntry";
    OwnerType2["ORDER_ENTRY"] = "orderEntry";
    OwnerType2["QUOTE_ENTRY"] = "quoteEntry";
    OwnerType2["SAVED_CART_ENTRY"] = "savedCartEntry";
  })(OwnerType = CommonConfigurator2.OwnerType || (CommonConfigurator2.OwnerType = {}));
})(CommonConfigurator || (CommonConfigurator = {}));
var ConfiguratorType;
(function(ConfiguratorType2) {
  ConfiguratorType2["CPQ"] = "CLOUDCPQCONFIGURATOR";
  ConfiguratorType2["VARIANT"] = "CPQCONFIGURATOR";
  ConfiguratorType2["TEXTFIELD"] = "TEXTFIELD";
})(ConfiguratorType || (ConfiguratorType = {}));
var ReadOnlyPostfix = "_READ_ONLY";
var OrderEntryStatus;
(function(OrderEntryStatus2) {
  OrderEntryStatus2["Success"] = "SUCCESS";
  OrderEntryStatus2["Info"] = "INFO";
  OrderEntryStatus2["Warning"] = "WARNING";
  OrderEntryStatus2["Error"] = "ERROR";
})(OrderEntryStatus || (OrderEntryStatus = {}));
var ConfigurationInfoFields;
(function(ConfigurationInfoFields2) {
  ConfigurationInfoFields2["KEY"] = "KEY";
  ConfigurationInfoFields2["NAME"] = "NAME";
  ConfigurationInfoFields2["QTY"] = "QTY";
  ConfigurationInfoFields2["FORMATTED_PRICE"] = "FORMATTED_PRICE";
  ConfigurationInfoFields2["PRICE_VALUE"] = "PRICE_VALUE";
})(ConfigurationInfoFields || (ConfigurationInfoFields = {}));
var ConfigurationInfoSpecialFields;
(function(ConfigurationInfoSpecialFields2) {
  ConfigurationInfoSpecialFields2["VERSION"] = "CI#@#VERSION";
  ConfigurationInfoSpecialFields2["CURRENCY"] = "CI#@#CURRENCY";
  ConfigurationInfoSpecialFields2["LINE_ITEM"] = "LI";
  ConfigurationInfoSpecialFields2["LINE_ITEM_DELIMITER"] = "#";
})(ConfigurationInfoSpecialFields || (ConfigurationInfoSpecialFields = {}));
var initialIndicator = "INITIAL";
var ConfiguratorModelUtils = class _ConfiguratorModelUtils {
  /**
   * Compiles a unique key for a configuration owner from id and type
   * @param owner Specifies the owner of a product configuration
   * @returns Owner key
   */
  static getOwnerKey(ownerType, ownerId) {
    if (!ownerId || !ownerType) {
      throw new Error("We expect an owner ID and an owner type");
    }
    return ownerType + "/" + ownerId;
  }
  /**
   * Creates an initial owner object
   * @returns Initial owner
   */
  static createInitialOwner() {
    return {
      key: initialIndicator,
      configuratorType: initialIndicator,
      id: initialIndicator,
      type: CommonConfigurator.OwnerType.PRODUCT
    };
  }
  /**
   * Checks if an owner is an initial one
   * @param owner Owner
   * @returns Is owner initial?
   */
  static isInitialOwner(owner) {
    return owner.configuratorType === initialIndicator;
  }
  /**
   * Creates a configuration owner object based on its essential attributes
   * @param ownerType Owner type (Does it refer to product, cart or order?)
   * @param ownerId Owner identifier
   * @param configuratorType Configurator type
   * @returns Owner
   */
  static createOwner(ownerType, ownerId, configuratorType = ConfiguratorType.VARIANT) {
    return {
      type: ownerType,
      id: ownerId,
      configuratorType,
      key: _ConfiguratorModelUtils.getOwnerKey(ownerType, ownerId)
    };
  }
};
var CommonConfiguratorUtilsService = class _CommonConfiguratorUtilsService {
  constructor(userIdService) {
    this.userIdService = userIdService;
  }
  /**
   * Compiles a unique key for a configuration owner and sets it into the 'key'
   * attribute
   * @param {CommonConfigurator.Owner }owner - Specifies the owner of a product configuration
   */
  setOwnerKey(owner) {
    owner.key = ConfiguratorModelUtils.getOwnerKey(owner.type, owner.id);
  }
  /**
   * Composes owner ID from document ID and entry number
   * @param {string} documentId - ID of document the entry is part of, like the order or quote code
   * @param {string} entryNumber - Entry number
   * @returns {string} - owner ID
   */
  getComposedOwnerId(documentId, entryNumber) {
    return documentId + "+" + entryNumber;
  }
  /**
   * Decomposes an owner ID into documentId and entryNumber
   * @param {string} ownerId - ID of owner
   * @returns {any} object containing documentId and entryNumber
   */
  decomposeOwnerId(ownerId) {
    const parts = ownerId.split("+");
    if (parts.length !== 2) {
      throw new Error("We only expect 2 parts in ownerId, separated by +, but was: " + ownerId);
    }
    const result = {
      documentId: parts[0],
      entryNumber: parts[1]
    };
    return result;
  }
  /**
   * Gets cart ID (which can be either its guid or its code)
   * @param {Cart} cart - Cart
   * @returns {string} - Cart identifier
   */
  getCartId(cart) {
    const cartId = cart?.user?.uid === OCC_USER_ID_ANONYMOUS ? cart.guid : cart?.code;
    if (!cartId) {
      throw new Error("Cart ID is not defined");
    }
    return cartId;
  }
  /**
   * Verifies whether the item has any issues.
   *
   * @param {OrderEntry} cartItem - Cart item
   * @returns {boolean} - whether there are any issues
   */
  hasIssues(cartItem) {
    return this.getNumberOfIssues(cartItem) > 0;
  }
  /**
   * Retrieves the number of issues at the cart item.
   *
   * @param {OrderEntry} cartItem - Cart item
   * @returns {number} - the number of issues at the cart item
   */
  getNumberOfIssues(cartItem) {
    let numberOfIssues = 0;
    cartItem?.statusSummaryList?.forEach((statusSummary) => {
      if (statusSummary.status === OrderEntryStatus.Error) {
        const numberOfIssuesFromStatus = statusSummary.numberOfIssues;
        numberOfIssues = numberOfIssuesFromStatus ? numberOfIssuesFromStatus : 0;
      }
    });
    return numberOfIssues;
  }
  /**
   * Verifies whether the configurator type is an attribute based one.
   *
   * @param {string} configuratorType - Configurator type
   * @returns {boolean} - 'True' if the expected configurator type, otherwise 'false'
   */
  isAttributeBasedConfigurator(configuratorType) {
    if (configuratorType) {
      return configuratorType === ConfiguratorType.VARIANT || configuratorType === ConfiguratorType.TEXTFIELD;
    }
    return false;
  }
  /**
   * Verifies whether the configurator type is a bundle based one.
   *
   * @param {string} configuratorType - Configurator type
   * @returns {boolean} - 'True' if the expected configurator type, otherwise 'fasle'
   */
  isBundleBasedConfigurator(configuratorType) {
    if (configuratorType) {
      return configuratorType === ConfiguratorType.CPQ;
    }
    return false;
  }
  /**
   * Determines whether we are in the context of an active cart
   * @param cartItemContext Cart item context
   * @returns Item part of an active cart?
   */
  isActiveCartContext(cartItemContext) {
    return (cartItemContext?.location$ ?? EMPTY).pipe(map((location) => location !== PromotionLocation.SaveForLater && location !== PromotionLocation.SavedCart));
  }
  /**
   * Reads slots from layout config, taking the breakpoint into account
   * @param layoutConfig Layout config
   * @param templateName Page template name
   * @param sectionName Section name like 'header'
   * @param breakPoint Current breakpoint
   * @returns Array of slots
   */
  getSlotsFromLayoutConfiguration(layoutConfig, templateName, sectionName, breakPoint) {
    const slots = layoutConfig.layoutSlots;
    if (slots) {
      const slotsForTemplate = slots[templateName];
      const slotGroupForSection = slotsForTemplate[sectionName];
      const slotConfigForBreakpoint = slotGroupForSection[breakPoint];
      return slotConfigForBreakpoint["slots"];
    } else {
      return [];
    }
  }
  static {
    this.ɵfac = function CommonConfiguratorUtilsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommonConfiguratorUtilsService)(ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CommonConfiguratorUtilsService,
      factory: _CommonConfiguratorUtilsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonConfiguratorUtilsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: UserIdService
  }], null);
})();
var ConfigureCartEntryComponent = class _ConfigureCartEntryComponent {
  /**
   * Verifies whether the entry has any issues.
   *
   * @returns - whether there are any issues
   */
  hasIssues() {
    return this.commonConfigUtilsService.hasIssues(this.cartEntry);
  }
  /**
   * Retrieves owner for an abstract order type
   *
   * @returns - an owner type
   */
  retrieveOwnerTypeFromAbstractOrderType(abstractOrderKey) {
    switch (abstractOrderKey.type) {
      case AbstractOrderType.ORDER: {
        return CommonConfigurator.OwnerType.ORDER_ENTRY;
      }
      case AbstractOrderType.QUOTE: {
        return CommonConfigurator.OwnerType.QUOTE_ENTRY;
      }
      case AbstractOrderType.SAVED_CART: {
        return CommonConfigurator.OwnerType.SAVED_CART_ENTRY;
      }
      default: {
        return CommonConfigurator.OwnerType.CART_ENTRY;
      }
    }
  }
  /**
   * Verifies whether the cart entry has an order code, retrieves a composed owner ID
   * and concatenates a corresponding entry number.
   *
   * @returns - an entry key
   */
  retrieveEntityKey(abstractOrderKey) {
    const entryNumber = this.cartEntry.entryNumber;
    if (entryNumber === void 0) {
      throw new Error("No entryNumber present in entry");
    }
    return abstractOrderKey.type !== AbstractOrderType.CART ? this.commonConfigUtilsService.getComposedOwnerId(abstractOrderKey.id, entryNumber) : entryNumber.toString();
  }
  /**
   * Retrieves a corresponding route depending whether the configuration is read only or not.
   *
   * @returns - a route
   */
  getRoute() {
    const configuratorType = this.cartEntry.product?.configuratorType;
    return !this.readOnly || configuratorType?.endsWith(ReadOnlyPostfix) ? "configure" + configuratorType : "configureOverview" + configuratorType;
  }
  /**
   * Retrieves the state of the configuration.
   *
   *  @returns - 'true' if the configuration is read only or configurator type contains a read-only postfix, otherwise 'false'
   */
  getDisplayOnly() {
    const configuratorType = this.cartEntry.product?.configuratorType;
    return this.readOnly || !configuratorType || configuratorType.endsWith(ReadOnlyPostfix);
  }
  /**
   * Verifies whether the link to the configuration is disabled.
   *
   *  @returns - 'true' if the the configuration is not read only, otherwise 'false'
   */
  isDisabled() {
    return this.readOnly ? false : this.disabled;
  }
  /**
   * Retrieves the additional resolve issues accessibility description.
   *
   * @returns - If there is a 'resolve issues' link, the ID to the element with additional description will be returned.
   */
  getResolveIssuesA11yDescription() {
    const errorMsgId = "cx-error-msg-" + this.cartEntry.entryNumber;
    return !this.getDisplayOnly() && this.msgBanner ? errorMsgId : void 0;
  }
  isInCheckout() {
    return this.routingService.getRouterState().pipe(map((routerState) => {
      return routerState.state.semanticRoute === "checkoutReviewOrder";
    }));
  }
  constructor(commonConfigUtilsService) {
    this.commonConfigUtilsService = commonConfigUtilsService;
    this.routingService = inject(RoutingService);
    this.abstractOrderContext = inject(AbstractOrderContext, {
      optional: true
    });
    this.abstractOrderKey$ = this.abstractOrderContext ? this.abstractOrderContext.key$ : of({
      type: AbstractOrderType.CART
    });
    this.queryParams$ = this.isInCheckout().pipe(map((isInCheckout) => ({
      forceReload: true,
      resolveIssues: this.msgBanner && this.hasIssues(),
      navigateToCheckout: isInCheckout,
      productCode: this.cartEntry.product?.code
    })));
  }
  static {
    this.ɵfac = function ConfigureCartEntryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigureCartEntryComponent)(ɵɵdirectiveInject(CommonConfiguratorUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfigureCartEntryComponent,
      selectors: [["cx-configure-cart-entry"]],
      inputs: {
        cartEntry: "cartEntry",
        readOnly: "readOnly",
        msgBanner: "msgBanner",
        disabled: "disabled"
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["configureText", ""], [4, "ngIf"], ["class", "disabled-link", 4, "ngIf"], ["class", "link cx-action-link", "cxAutoFocus", "", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "disabled-link"], [4, "ngIf", "ngIfThen"], ["cxAutoFocus", "", 1, "link", "cx-action-link", 3, "routerLink", "queryParams"]],
      template: function ConfigureCartEntryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfigureCartEntryComponent_ng_container_0_Template, 4, 1, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.abstractOrderKey$));
        }
      },
      dependencies: [NgIf, RouterLink, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigureCartEntryComponent, [{
    type: Component,
    args: [{
      selector: "cx-configure-cart-entry",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="abstractOrderKey$ | async as abstractOrderKey">
  <ng-container *ngIf="cartEntry">
    <label *ngIf="isDisabled()" class="disabled-link">
      <ng-container *ngIf="isDisabled(); then configureText"> </ng-container>
    </label>

    <a
      *ngIf="!isDisabled()"
      class="link cx-action-link"
      [routerLink]="
        {
          cxRoute: getRoute(),
          params: {
            ownerType: retrieveOwnerTypeFromAbstractOrderType(abstractOrderKey),
            entityKey: retrieveEntityKey(abstractOrderKey),
            displayOnly: getDisplayOnly(),
          },
        } | cxUrl
      "
      [queryParams]="queryParams$ | async"
      cxAutoFocus
      attr.aria-describedby="{{ getResolveIssuesA11yDescription() }}"
    >
      <ng-container *ngIf="!isDisabled(); then configureText"> </ng-container>
    </a>
  </ng-container>

  <ng-template #configureText>
    <ng-container *ngIf="getDisplayOnly()">
      {{
        'configurator.header.displayConfiguration' | cxTranslate
      }}</ng-container
    >
    <ng-container *ngIf="!getDisplayOnly() && !msgBanner">
      {{ 'configurator.header.editConfiguration' | cxTranslate }}
    </ng-container>

    <ng-container *ngIf="!getDisplayOnly() && msgBanner">
      {{ 'configurator.header.resolveIssues' | cxTranslate }}
    </ng-container>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: CommonConfiguratorUtilsService
  }], {
    cartEntry: [{
      type: Input
    }],
    readOnly: [{
      type: Input
    }],
    msgBanner: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }]
  });
})();
var ConfigureCartEntryModule = class _ConfigureCartEntryModule {
  static {
    this.ɵfac = function ConfigureCartEntryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigureCartEntryModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfigureCartEntryModule,
      declarations: [ConfigureCartEntryComponent],
      imports: [CommonModule, UrlModule, I18nModule, IconModule, RouterModule],
      exports: [ConfigureCartEntryComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, UrlModule, I18nModule, IconModule, RouterModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigureCartEntryModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, IconModule, RouterModule],
      declarations: [ConfigureCartEntryComponent],
      exports: [ConfigureCartEntryComponent]
    }]
  }], null, null);
})();
var ConfiguratorIssuesNotificationComponent = class _ConfiguratorIssuesNotificationComponent {
  constructor(commonConfigUtilsService, cartItemContext) {
    this.commonConfigUtilsService = commonConfigUtilsService;
    this.cartItemContext = cartItemContext;
    this.iconTypes = ICON_TYPE;
    this.orderEntry$ = this.cartItemContext?.item$ ?? EMPTY;
    this.quantityControl$ = this.cartItemContext?.quantityControl$ ?? EMPTY;
    this.readonly$ = this.cartItemContext?.readonly$ ?? EMPTY;
    this.shouldShowButton$ = this.commonConfigUtilsService.isActiveCartContext(this.cartItemContext);
  }
  /**
   * Verifies whether the item has any issues.
   *
   * @param item - Cart item
   * @returns - whether there are any issues
   */
  hasIssues(item) {
    return this.commonConfigUtilsService.hasIssues(item);
  }
  /**
   * Retrieves the number of issues at the cart item.
   *
   * @param item - Cart item
   * @returns - the number of issues at the cart item
   */
  getNumberOfIssues(item) {
    return this.commonConfigUtilsService.getNumberOfIssues(item);
  }
  /**
   * Retrieves the unique id for the error message.
   *
   * @param item - Cart item
   * @returns - Unique id for error message
   */
  getErrorMessageId(item) {
    return "cx-error-msg-" + item.entryNumber;
  }
  static {
    this.ɵfac = function ConfiguratorIssuesNotificationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorIssuesNotificationComponent)(ɵɵdirectiveInject(CommonConfiguratorUtilsService), ɵɵdirectiveInject(CartItemContext, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorIssuesNotificationComponent,
      selectors: [["cx-configurator-issues-notification"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [3, "type"], [3, "id"], ["class", "cx-error-msg-action", 3, "cartEntry", "readOnly", "msgBanner", "disabled", 4, "ngIf"], [1, "cx-error-msg-action", 3, "cartEntry", "readOnly", "msgBanner", "disabled"]],
      template: function ConfiguratorIssuesNotificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorIssuesNotificationComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.orderEntry$));
        }
      },
      dependencies: [NgIf, IconComponent, ConfigureCartEntryComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorIssuesNotificationComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-issues-notification",
      standalone: false,
      template: `<ng-container *ngIf="orderEntry$ | async as orderEntry">
  <ng-container *ngIf="hasIssues(orderEntry) && !(readonly$ | async)">
    <cx-icon [type]="iconTypes.ERROR"></cx-icon>
    <div id="{{ getErrorMessageId(orderEntry) }}">
      {{
        'configurator.notificationBanner.numberOfIssues'
          | cxTranslate: { count: getNumberOfIssues(orderEntry) }
      }}
      <ng-container *ngIf="quantityControl$ | async as quantityControl">
        <cx-configure-cart-entry
          class="cx-error-msg-action"
          *ngIf="
            (shouldShowButton$ | async) && orderEntry?.product?.configurable
          "
          [cartEntry]="orderEntry"
          [readOnly]="(readonly$ | async) ?? false"
          [msgBanner]="true"
          [disabled]="quantityControl.disabled"
        ></cx-configure-cart-entry>
      </ng-container>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: CommonConfiguratorUtilsService
  }, {
    type: CartItemContext,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ConfiguratorIssuesNotificationModule = class _ConfiguratorIssuesNotificationModule {
  static {
    this.ɵfac = function ConfiguratorIssuesNotificationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorIssuesNotificationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorIssuesNotificationModule,
      declarations: [ConfiguratorIssuesNotificationComponent],
      imports: [CommonModule, UrlModule, I18nModule, IconModule, ConfigureCartEntryModule],
      exports: [ConfiguratorIssuesNotificationComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: CartOutlets.ITEM_CONFIGURATOR_ISSUES,
        position: OutletPosition.REPLACE,
        component: ConfiguratorIssuesNotificationComponent
      })],
      imports: [CommonModule, UrlModule, I18nModule, IconModule, ConfigureCartEntryModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorIssuesNotificationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, IconModule, ConfigureCartEntryModule],
      declarations: [ConfiguratorIssuesNotificationComponent],
      providers: [provideOutlet({
        id: CartOutlets.ITEM_CONFIGURATOR_ISSUES,
        position: OutletPosition.REPLACE,
        component: ConfiguratorIssuesNotificationComponent
      })],
      exports: [ConfiguratorIssuesNotificationComponent]
    }]
  }], null, null);
})();
var ConfiguratorCartEntryInfoComponent = class _ConfiguratorCartEntryInfoComponent {
  constructor(cartItemContext, commonConfigUtilsService) {
    this.cartItemContext = cartItemContext;
    this.commonConfigUtilsService = commonConfigUtilsService;
    this.orderEntry$ = this.cartItemContext?.item$ ?? EMPTY;
    this.quantityControl$ = this.cartItemContext?.quantityControl$ ?? EMPTY;
    this.readonly$ = this.cartItemContext?.readonly$ ?? EMPTY;
    this.shouldShowButton$ = this.commonConfigUtilsService.isActiveCartContext(this.cartItemContext);
  }
  /**
   * Verifies whether the configuration infos have any entries and the first entry has a status.
   * Only in this case we want to display the configuration summary
   *
   * @param {OrderEntry} item - Cart item
   * @returns {boolean} - whether the status of configuration infos entry has status
   */
  hasStatus(item) {
    const configurationInfos = item.configurationInfos;
    return configurationInfos ? configurationInfos.length > 0 && configurationInfos[0].status !== "NONE" : false;
  }
  /**
   * Verifies whether the configurator type is attribute based one.
   *
   * @param {OrderEntry} item - Order entry item
   * @returns {boolean} - 'True' if the expected configurator type, otherwise 'fasle'
   */
  isAttributeBasedConfigurator(item) {
    const configurationInfos = item.configurationInfos;
    return configurationInfos ? this.commonConfigUtilsService.isAttributeBasedConfigurator(configurationInfos[0]?.configuratorType) : false;
  }
  getHiddenConfigurationInfoId(index) {
    return "cx-configuration-hidden-info-" + index.toString();
  }
  static {
    this.ɵfac = function ConfiguratorCartEntryInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorCartEntryInfoComponent)(ɵɵdirectiveInject(CartItemContext, 8), ɵɵdirectiveInject(CommonConfiguratorUtilsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorCartEntryInfoComponent,
      selectors: [["cx-configurator-cart-entry-info"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "cx-intro cx-visually-hidden", 4, "ngIf"], ["class", "cx-configuration-info", 4, "ngFor", "ngForOf"], [1, "cx-intro", "cx-visually-hidden"], [1, "cx-configuration-info"], [1, "cx-visually-hidden", 3, "id"], ["aria-hidden", "true", 1, "cx-label"], ["aria-hidden", "true", 1, "cx-value"], [3, "cartEntry", "readOnly", "msgBanner", "disabled", 4, "ngIf"], [3, "cartEntry", "readOnly", "msgBanner", "disabled"]],
      template: function ConfiguratorCartEntryInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorCartEntryInfoComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.orderEntry$));
        }
      },
      dependencies: [NgForOf, NgIf, ConfigureCartEntryComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorCartEntryInfoComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-cart-entry-info",
      standalone: false,
      template: `<ng-container *ngIf="orderEntry$ | async as orderEntry">
  <ng-container *ngIf="isAttributeBasedConfigurator(orderEntry)">
    <ng-container *ngIf="hasStatus(orderEntry)">
      <span
        *ngIf="orderEntry.configurationInfos?.length ?? 0 > 0"
        class="cx-intro cx-visually-hidden"
      >
        {{ 'configurator.a11y.cartEntryInfoIntro' | cxTranslate }}
      </span>
      <div
        *ngFor="let info of orderEntry.configurationInfos; let i = index"
        class="cx-configuration-info"
        attr.aria-describedby="{{ getHiddenConfigurationInfoId(i) }}"
      >
        <span
          id="{{ getHiddenConfigurationInfoId(i) }}"
          class="cx-visually-hidden"
        >
          {{
            'configurator.a11y.cartEntryInfo'
              | cxTranslate
                : {
                    attribute: info.configurationLabel,
                    value: info.configurationValue,
                  }
          }}
        </span>
        <div class="cx-label" aria-hidden="true">
          {{ info?.configurationLabel }}:
        </div>
        <div class="cx-value" aria-hidden="true">
          {{ info?.configurationValue }}
        </div>
      </div>
    </ng-container>
    <ng-container *ngIf="quantityControl$ | async as quantityControl">
      <cx-configure-cart-entry
        *ngIf="(shouldShowButton$ | async) && orderEntry?.product?.configurable"
        [cartEntry]="orderEntry"
        [readOnly]="(readonly$ | async) ?? false"
        [msgBanner]="false"
        [disabled]="quantityControl.disabled"
      ></cx-configure-cart-entry
    ></ng-container>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: CartItemContext,
    decorators: [{
      type: Optional
    }]
  }, {
    type: CommonConfiguratorUtilsService
  }], null);
})();
var ConfiguratorCartEntryInfoModule = class _ConfiguratorCartEntryInfoModule {
  static {
    this.ɵfac = function ConfiguratorCartEntryInfoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorCartEntryInfoModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorCartEntryInfoModule,
      declarations: [ConfiguratorCartEntryInfoComponent],
      imports: [CommonModule, UrlModule, I18nModule, IconModule, ConfiguratorIssuesNotificationModule, ConfigureCartEntryModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: CartOutlets.ITEM_DETAILS,
        position: OutletPosition.AFTER,
        component: ConfiguratorCartEntryInfoComponent
      })],
      imports: [CommonModule, UrlModule, I18nModule, IconModule, ConfiguratorIssuesNotificationModule, ConfigureCartEntryModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorCartEntryInfoModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, IconModule, ConfiguratorIssuesNotificationModule, ConfigureCartEntryModule],
      declarations: [ConfiguratorCartEntryInfoComponent],
      providers: [provideOutlet({
        id: CartOutlets.ITEM_DETAILS,
        position: OutletPosition.AFTER,
        component: ConfiguratorCartEntryInfoComponent
      })]
    }]
  }], null, null);
})();
var ConfiguratorProductScope;
(function(ConfiguratorProductScope2) {
  ConfiguratorProductScope2["CONFIGURATOR"] = "configurator";
  ConfiguratorProductScope2["CONFIGURATOR_PRODUCT_CARD"] = "configuratorProductCard";
})(ConfiguratorProductScope || (ConfiguratorProductScope = {}));
var ConfigureProductComponent = class _ConfigureProductComponent {
  getProduct() {
    if (this.productListItemContext) {
      return this.productListItemContext.product$;
    }
    return this.currentProductService ? this.currentProductService.getProduct([ProductScope.DETAILS, ConfiguratorProductScope.CONFIGURATOR]) : of(null);
  }
  /**
   * Retrieves a translation key for aria-label depending on the condition.
   *
   * @param configuratorType - configurator type
   * @returns - If the configurator type contains a read-only postfix then 'configurator.a11y.showDetailsProduct' translation key will be returned,
   * otherwise 'configurator.a11y.configureProduct'.
   */
  getAriaLabelTranslationKey(configuratorType) {
    return this.isConfiguratorTypeReadOnly(configuratorType) ? "configurator.a11y.showDetailsProduct" : "configurator.a11y.configureProduct";
  }
  /**
   * Retrieves a translation key depending on the condition.
   *
   * @param configuratorType - configurator type
   * @returns - If the configurator type contains a read-only postfix then 'configurator.header.toConfigReadOnly' translation key will be returned,
   * otherwise 'configurator.header.toconfig'.
   */
  getTranslationKey(configuratorType) {
    return this.isConfiguratorTypeReadOnly(configuratorType) ? "configurator.header.toConfigReadOnly" : "configurator.header.toconfig";
  }
  /**
   * Verifies whether restart dialog should be displayed or not.
   *
   * @param configuratorType
   * @returns - If the configurator type contains a read-only postfix then false will be returned, otherwise true.
   */
  isDisplayRestartDialog(configuratorType) {
    return this.isConfiguratorTypeReadOnly(configuratorType) ? "false" : "true";
  }
  /**
   * Verifies whether a configurator type of a product contains a read-only postfix and
   * a product is a base product.
   *
   * @param product - product
   * @returns - If the configurator type contains a read-only postfix and
   * a product is a base product then returns true, otherwise false.
   */
  isReadOnlyBaseProduct(product) {
    return this.isConfiguratorTypeReadOnly(product.configuratorType) && this.isBaseProduct(product);
  }
  /**
   * Verifies whether a product is a base product.
   *
   * The `baseProduct` property contains the product code of the base product.
   * If the `baseProduct` is undefined or if the provided product code equals the code of the base product,
   * then this product is a base product.
   *
   * @param product - product
   * @returns - If a product is a base product then returns true, otherwise false.
   * @protected
   */
  isBaseProduct(product) {
    return !product.baseProduct || product.baseProduct === product.code;
  }
  navigateToConfigurator(product) {
    this.routingService?.go({
      cxRoute: "configure" + product.configuratorType,
      params: {
        ownerType: this.ownerTypeProduct,
        entityKey: product.code
      }
    }, {
      queryParams: {
        displayRestartDialog: this.isDisplayRestartDialog(product.configuratorType),
        productCode: product.code
      }
    });
  }
  isConfiguratorTypeReadOnly(configuratorType) {
    return !!configuratorType && configuratorType.trim().endsWith(ReadOnlyPostfix);
  }
  constructor(productListItemContext, currentProductService) {
    this.productListItemContext = productListItemContext;
    this.currentProductService = currentProductService;
    this.nonConfigurable = {
      configurable: false
    };
    this.product$ = this.getProduct().pipe(
      //needed because also currentProductService might return null
      map((product) => product ? product : this.nonConfigurable)
    );
    this.ownerTypeProduct = CommonConfigurator.OwnerType.PRODUCT;
    this.routingService = inject(RoutingService, {
      optional: true
    });
  }
  static {
    this.ɵfac = function ConfigureProductComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigureProductComponent)(ɵɵdirectiveInject(ProductListItemContext, 8), ɵɵdirectiveInject(CurrentProductService, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfigureProductComponent,
      selectors: [["cx-configure-product"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["cxAutoFocus", "", 1, "btn", "btn-primary", "btn-block", 3, "click"]],
      template: function ConfigureProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfigureProductComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.product$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigureProductComponent, [{
    type: Component,
    args: [{
      selector: "cx-configure-product",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-container *ngIf="product$ | async as product">\n  <ng-container *ngIf="product.configurable && !isReadOnlyBaseProduct(product)">\n    <button\n      (click)="navigateToConfigurator(product)"\n      class="btn btn-primary btn-block"\n      cxAutoFocus\n      [attr.aria-label]="\n        getAriaLabelTranslationKey(product.configuratorType) | cxTranslate\n      "\n    >\n      {{ getTranslationKey(product.configuratorType) | cxTranslate }}\n    </button>\n  </ng-container>\n</ng-container>\n'
    }]
  }], () => [{
    type: ProductListItemContext,
    decorators: [{
      type: Optional
    }]
  }, {
    type: CurrentProductService,
    decorators: [{
      type: Optional
    }]
  }], {
    routingService: [{
      type: Optional
    }]
  });
})();
var ConfigureProductModule = class _ConfigureProductModule {
  static {
    this.ɵfac = function ConfigureProductModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigureProductModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfigureProductModule,
      declarations: [ConfigureProductComponent],
      imports: [CommonModule, RouterModule, ConfigModule, UrlModule, I18nModule, IconModule, BtnLikeLinkModule],
      exports: [ConfigureProductComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: ProductListOutlets.ITEM_ACTIONS,
        position: OutletPosition.AFTER,
        component: ConfigureProductComponent
      })],
      imports: [CommonModule, RouterModule, ConfigModule.withConfig({
        cmsComponents: {
          ConfigureProductComponent: {
            component: ConfigureProductComponent
          }
        }
      }), UrlModule, I18nModule, IconModule, BtnLikeLinkModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigureProductModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, ConfigModule.withConfig({
        cmsComponents: {
          ConfigureProductComponent: {
            component: ConfigureProductComponent
          }
        }
      }), UrlModule, I18nModule, IconModule, BtnLikeLinkModule],
      providers: [provideOutlet({
        id: ProductListOutlets.ITEM_ACTIONS,
        position: OutletPosition.AFTER,
        component: ConfigureProductComponent
      })],
      declarations: [ConfigureProductComponent],
      exports: [ConfigureProductComponent]
    }]
  }], null, null);
})();
var ConfiguratorCartEntryBundleInfoService = class _ConfiguratorCartEntryBundleInfoService {
  constructor() {
    this.logger = inject(LoggerService);
  }
  /**
   * Retrieves the CPQ line items for an order entry
   *
   * @param {OrderEntry} entry - Order entry
   * @returns {LineItem[]} - Line item array
   */
  retrieveLineItems(entry) {
    let lineItems = [];
    if (entry.configurationInfos) {
      const configurationInfos = entry.configurationInfos.filter((configurationInfo) => configurationInfo && (configurationInfo.configurationLabel || configurationInfo.configurationValue));
      const firstLabel = configurationInfos[0]?.configurationLabel;
      const firstValue = configurationInfos[0]?.configurationValue;
      if (firstLabel !== ConfigurationInfoSpecialFields.VERSION) {
        configurationInfos.forEach((configurationInfo) => lineItems.push(this.prepareLineItem(configurationInfo)));
      } else if (firstLabel === ConfigurationInfoSpecialFields.VERSION && Number(firstValue) >= 2) {
        lineItems = this.processConfigurationInfos(configurationInfos);
      } else {
        this.logWarning("Wrong ConfigurationInfo version");
      }
    }
    return lineItems;
  }
  prepareLineItem(configurationInfo) {
    const quantityAndPrice = configurationInfo.configurationValue ? configurationInfo.configurationValue.split("x") : [];
    return {
      name: configurationInfo.configurationLabel ? this.removeDelimiter(configurationInfo.configurationLabel) : "",
      formattedQuantity: quantityAndPrice.length >= 1 ? quantityAndPrice[0].trim() : "",
      formattedPrice: quantityAndPrice.length >= 2 ? quantityAndPrice[1].trim() : ""
    };
  }
  removeDelimiter(label) {
    let preparedLabel = label.trim();
    const lastCharacter = preparedLabel.charAt(preparedLabel.length - 1);
    if (lastCharacter === ":") {
      preparedLabel = preparedLabel.substring(0, preparedLabel.length - 1);
    }
    return preparedLabel;
  }
  processConfigurationInfos(configurationInfos) {
    const lineItemMap = /* @__PURE__ */ new Map();
    configurationInfos.forEach((configurationInfo) => this.processConfigurationInfoEntry(lineItemMap, configurationInfo));
    const lineItemMapSorted = new Map(Array.from(lineItemMap).sort((a, b) => {
      return a[0] - b[0];
    }));
    const lineItems = Array.from(lineItemMapSorted.values());
    return lineItems;
  }
  processConfigurationInfoEntry(lineItemMap, configurationInfo) {
    if (configurationInfo.configurationLabel) {
      const configurationInfoSplit = configurationInfo.configurationLabel.split(ConfigurationInfoSpecialFields.LINE_ITEM_DELIMITER);
      if (configurationInfoSplit[0] === ConfigurationInfoSpecialFields.LINE_ITEM) {
        const configurationInfoValue = configurationInfo.configurationValue ? configurationInfo.configurationValue : "";
        this.addLineItemData(lineItemMap, configurationInfoSplit, configurationInfoValue);
      }
    }
  }
  addLineItemData(lineItemMap, configurationInfoSplit, configurationInfoValue) {
    if (configurationInfoSplit.length === 3) {
      const lineItemNumber = Number(configurationInfoSplit[1]);
      let lineItem;
      switch (configurationInfoSplit[2]) {
        case ConfigurationInfoFields.NAME:
          lineItem = this.getOrCreateLineItem(lineItemMap, lineItemNumber);
          lineItem.name = configurationInfoValue;
          break;
        case ConfigurationInfoFields.QTY:
          lineItem = this.getOrCreateLineItem(lineItemMap, lineItemNumber);
          lineItem.formattedQuantity = configurationInfoValue;
          break;
        case ConfigurationInfoFields.FORMATTED_PRICE:
          lineItem = this.getOrCreateLineItem(lineItemMap, lineItemNumber);
          lineItem.formattedPrice = configurationInfoValue;
          break;
        case ConfigurationInfoFields.KEY:
        case ConfigurationInfoFields.PRICE_VALUE:
          break;
        default: {
          this.logWarning("Wrong LineItem format");
        }
      }
    } else {
      this.logWarning("Wrong LineItem format");
    }
  }
  getOrCreateLineItem(lineItemMap, lineItemNumber) {
    const lineItem = lineItemMap.get(lineItemNumber) ?? {
      name: "",
      formattedQuantity: "",
      formattedPrice: ""
    };
    if (!lineItemMap.get(lineItemNumber)) {
      lineItemMap.set(lineItemNumber, lineItem);
    }
    return lineItem;
  }
  logWarning(text) {
    if (isDevMode()) {
      this.logger.warn(text);
    }
  }
  static {
    this.ɵfac = function ConfiguratorCartEntryBundleInfoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorCartEntryBundleInfoService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorCartEntryBundleInfoService,
      factory: _ConfiguratorCartEntryBundleInfoService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorCartEntryBundleInfoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConfiguratorCartEntryBundleInfoComponent = class _ConfiguratorCartEntryBundleInfoComponent {
  constructor(commonConfigUtilsService, configCartEntryBundleInfoService, breakpointService, translation, cartItemContext) {
    this.commonConfigUtilsService = commonConfigUtilsService;
    this.configCartEntryBundleInfoService = configCartEntryBundleInfoService;
    this.breakpointService = breakpointService;
    this.translation = translation;
    this.cartItemContext = cartItemContext;
    this.orderEntry$ = this.cartItemContext?.item$ ?? EMPTY;
    this.quantityControl$ = this.cartItemContext?.quantityControl$ ?? EMPTY;
    this.readonly$ = this.cartItemContext?.readonly$ ?? EMPTY;
    this.hideItems = true;
    this.lineItems$ = this.orderEntry$.pipe(map((entry) => this.configCartEntryBundleInfoService.retrieveLineItems(entry)));
    this.numberOfLineItems$ = this.lineItems$.pipe(map((items) => items.length));
    this.shouldShowButton$ = this.commonConfigUtilsService.isActiveCartContext(this.cartItemContext);
  }
  /**
   * Toggles the state of the items list.
   */
  toggleItems() {
    this.hideItems = !this.hideItems;
  }
  /**
   * Verifies whether the configurator type is a bundle based one.
   *
   * @param {OrderEntry} entry - Order entry
   * @returns {boolean} - 'true' if the expected configurator type, otherwise 'false'
   */
  isBundleBasedConfigurator(entry) {
    const configInfos = entry.configurationInfos;
    return configInfos ? this.commonConfigUtilsService.isBundleBasedConfigurator(configInfos[0]?.configuratorType) : false;
  }
  getButtonText(translatedText) {
    if (!translatedText) {
      translatedText = "";
    }
    if (this.hideItems) {
      this.translation.translate("configurator.header.show").pipe(take(1)).subscribe((text) => translatedText += text);
    } else {
      this.translation.translate("configurator.header.hide").pipe(take(1)).subscribe((text) => translatedText += text);
    }
    return translatedText;
  }
  getItemsMsg(items) {
    let translatedText = "";
    this.translation.translate("configurator.a11y.cartEntryBundleInfo", {
      items
    }).pipe(take(1)).subscribe((text) => translatedText = text);
    return this.getButtonText(translatedText);
  }
  getHiddenItemInfo(item) {
    let translatedText = "";
    if (item.name && item.formattedPrice && item.formattedQuantity) {
      this.translation.translate("configurator.a11y.cartEntryBundle", {
        name: item.name,
        price: item.formattedPrice,
        quantity: item.formattedQuantity
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    } else if (item.name && item.formattedPrice) {
      this.translation.translate("configurator.a11y.cartEntryBundleNameWithPrice", {
        name: item.name,
        price: item.formattedPrice
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    } else if (item.name && item.formattedQuantity) {
      this.translation.translate("configurator.a11y.cartEntryBundleNameWithQuantity", {
        name: item.name,
        quantity: item.formattedQuantity
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    } else {
      this.translation.translate("configurator.a11y.cartEntryBundleName", {
        name: item.name
      }).pipe(take(1)).subscribe((text) => translatedText = text);
    }
    return translatedText;
  }
  getHiddenItemInfoId(index) {
    return "cx-item-hidden-info-" + index.toString();
  }
  static {
    this.ɵfac = function ConfiguratorCartEntryBundleInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorCartEntryBundleInfoComponent)(ɵɵdirectiveInject(CommonConfiguratorUtilsService), ɵɵdirectiveInject(ConfiguratorCartEntryBundleInfoService), ɵɵdirectiveInject(BreakpointService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(CartItemContext, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConfiguratorCartEntryBundleInfoComponent,
      selectors: [["cx-configurator-cart-entry-bundle-info"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-number-items"], [3, "click"], [1, "cx-toggle-hide-items"], [1, "cx-item-infos"], ["class", "cx-item-info", 4, "ngFor", "ngForOf"], [1, "cx-item-info"], [1, "cx-visually-hidden", 3, "id"], ["aria-hidden", "true", 1, "cx-item-name"], ["aria-hidden", "true", 1, "cx-item-quantity"], ["aria-hidden", "true", 1, "cx-item-price"], [1, "cx-identifier"], [1, "cx-item"], [3, "cartEntry", "readOnly", "msgBanner", "disabled", 4, "ngIf"], [3, "cartEntry", "readOnly", "msgBanner", "disabled"]],
      template: function ConfiguratorCartEntryBundleInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConfiguratorCartEntryBundleInfoComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.orderEntry$));
        }
      },
      dependencies: [NgForOf, NgIf, ConfigureCartEntryComponent, AsyncPipe, TranslatePipe, CxNumericPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorCartEntryBundleInfoComponent, [{
    type: Component,
    args: [{
      selector: "cx-configurator-cart-entry-bundle-info",
      standalone: false,
      template: `<ng-container *ngIf="orderEntry$ | async as orderEntry">
  <ng-container *ngIf="isBundleBasedConfigurator(orderEntry)">
    <ng-container *ngIf="numberOfLineItems$ | async as numberOfItems">
      <div class="cx-number-items">
        {{
          'configurator.header.items' | cxTranslate: { count: numberOfItems }
        }}
      </div>
      <button
        (click)="toggleItems()"
        [attr.aria-expanded]="!this.hideItems"
        [attr.aria-label]="getItemsMsg(numberOfItems)"
      >
        <div class="cx-toggle-hide-items">
          {{ getButtonText() }}
        </div>
      </button>

      <div class="cx-item-infos" [class.open]="!hideItems">
        <div
          *ngFor="let lineItem of lineItems$ | async; let i = index"
          class="cx-item-info"
          attr.aria-describedby="{{ getHiddenItemInfoId(i) }}"
        >
          <span id="{{ getHiddenItemInfoId(i) }}" class="cx-visually-hidden">
            {{ getHiddenItemInfo(lineItem) }}
          </span>
          <div class="cx-item-name" aria-hidden="true">
            {{ lineItem?.name }}
          </div>
          <div class="cx-item-quantity" aria-hidden="true">
            <ng-container *ngIf="lineItem?.formattedQuantity">
              <span class="cx-identifier">{{
                'configurator.attribute.quantity' | cxTranslate
              }}</span>
              <span class="cx-item">{{
                lineItem?.formattedQuantity | cxNumeric
              }}</span>
            </ng-container>
          </div>
          <div class="cx-item-price" aria-hidden="true">
            <ng-container *ngIf="lineItem?.formattedPrice">
              <span class="cx-identifier">{{
                'configurator.overviewForm.itemPrice' | cxTranslate
              }}</span>
              <span class="cx-item">{{ lineItem?.formattedPrice }}</span>
            </ng-container>
          </div>
        </div>
      </div>
    </ng-container>
    <ng-container *ngIf="quantityControl$ | async as quantityControl">
      <cx-configure-cart-entry
        *ngIf="(shouldShowButton$ | async) && orderEntry?.product?.configurable"
        [cartEntry]="orderEntry"
        [readOnly]="(readonly$ | async) ?? false"
        [msgBanner]="false"
        [disabled]="quantityControl.disabled"
      ></cx-configure-cart-entry
    ></ng-container>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: CommonConfiguratorUtilsService
  }, {
    type: ConfiguratorCartEntryBundleInfoService
  }, {
    type: BreakpointService
  }, {
    type: TranslationService
  }, {
    type: CartItemContext,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var ConfiguratorCartEntryBundleInfoModule = class _ConfiguratorCartEntryBundleInfoModule {
  static {
    this.ɵfac = function ConfiguratorCartEntryBundleInfoModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorCartEntryBundleInfoModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ConfiguratorCartEntryBundleInfoModule,
      declarations: [ConfiguratorCartEntryBundleInfoComponent],
      imports: [CommonModule, I18nModule, ConfigureCartEntryModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: CartOutlets.ITEM_BUNDLE_DETAILS,
        position: OutletPosition.AFTER,
        component: ConfiguratorCartEntryBundleInfoComponent
      })],
      imports: [CommonModule, I18nModule, ConfigureCartEntryModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorCartEntryBundleInfoModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, ConfigureCartEntryModule],
      declarations: [ConfiguratorCartEntryBundleInfoComponent],
      providers: [provideOutlet({
        id: CartOutlets.ITEM_BUNDLE_DETAILS,
        position: OutletPosition.AFTER,
        component: ConfiguratorCartEntryBundleInfoComponent
      })]
    }]
  }], null, null);
})();
var CommonConfiguratorComponentsModule = class _CommonConfiguratorComponentsModule {
  static {
    this.ɵfac = function CommonConfiguratorComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommonConfiguratorComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CommonConfiguratorComponentsModule,
      imports: [ConfiguratorIssuesNotificationModule, ConfiguratorCartEntryInfoModule, ConfiguratorCartEntryBundleInfoModule, ConfigureCartEntryModule, ConfigureProductModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ConfiguratorIssuesNotificationModule, ConfiguratorCartEntryInfoModule, ConfiguratorCartEntryBundleInfoModule, ConfigureCartEntryModule, ConfigureProductModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonConfiguratorComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [ConfiguratorIssuesNotificationModule, ConfiguratorCartEntryInfoModule, ConfiguratorCartEntryBundleInfoModule, ConfigureCartEntryModule, ConfigureProductModule]
    }]
  }], null, null);
})();
var defaultOccConfiguratorProductConfig = {
  backend: {
    occ: {
      endpoints: {
        product: {
          configurator: "products/${productCode}?fields=code,configurable,configuratorType",
          configuratorProductCard: "products/${productCode}?fields=code,description,images(DEFAULT)"
        }
      }
    },
    loadingScopes: {
      product: {
        list: {
          include: [ConfiguratorProductScope.CONFIGURATOR]
        }
      }
    }
  }
};
var CommonConfiguratorOccModule = class _CommonConfiguratorOccModule {
  static {
    this.ɵfac = function CommonConfiguratorOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommonConfiguratorOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CommonConfiguratorOccModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccConfiguratorProductConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonConfiguratorOccModule, [{
    type: NgModule,
    args: [{
      providers: [provideDefaultConfig(defaultOccConfiguratorProductConfig)]
    }]
  }], null, null);
})();
var CommonConfiguratorModule = class _CommonConfiguratorModule {
  static {
    this.ɵfac = function CommonConfiguratorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CommonConfiguratorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CommonConfiguratorModule,
      imports: [CommonConfiguratorOccModule, CommonConfiguratorComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonConfiguratorOccModule, CommonConfiguratorComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommonConfiguratorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonConfiguratorOccModule, CommonConfiguratorComponentsModule]
    }]
  }], null, null);
})();
var ConfiguratorRouter;
(function(ConfiguratorRouter2) {
  let PageType;
  (function(PageType2) {
    PageType2["CONFIGURATION"] = "configuration";
    PageType2["OVERVIEW"] = "overview";
  })(PageType = ConfiguratorRouter2.PageType || (ConfiguratorRouter2.PageType = {}));
})(ConfiguratorRouter || (ConfiguratorRouter = {}));
var ConfiguratorRouterExtractorService = class _ConfiguratorRouterExtractorService {
  constructor(configUtilsService, routingService) {
    this.configUtilsService = configUtilsService;
    this.routingService = routingService;
    this.ROUTE_FRAGMENT_CONFIGURE = "configure";
    this.ROUTE_FRAGMENT_OVERVIEW = "configureOverview";
  }
  extractRouterData() {
    return this.routingService.getRouterState().pipe(
      filter((routingData) => routingData.state.params.entityKey),
      //we don't need to cover the intermediate router states where a future route is already known.
      //only changes to the URL are relevant. Otherwise we get wrong hits where e.g. the config form fires although
      //the OV already loads
      filter((routingData) => routingData.nextState === void 0),
      map((routingData) => {
        const owner = this.createOwnerFromRouterState(routingData);
        const semanticRoute = routingData.state.semanticRoute;
        const routerData = {
          owner,
          isOwnerCartEntry: owner.type === CommonConfigurator.OwnerType.CART_ENTRY,
          displayOnly: routingData.state.params.displayOnly,
          resolveIssues: routingData.state.queryParams?.resolveIssues === "true",
          skipConflicts: routingData.state.queryParams?.skipConflicts === "true",
          forceReload: routingData.state.queryParams?.forceReload === "true",
          expMode: routingData.state.queryParams?.expMode === "true",
          displayRestartDialog: routingData.state.queryParams?.displayRestartDialog === "true",
          configIdTemplate: routingData.state.queryParams?.configIdTemplate,
          navigationId: routingData.navigationId,
          pageType: semanticRoute && semanticRoute.includes(this.ROUTE_FRAGMENT_OVERVIEW) ? ConfiguratorRouter.PageType.OVERVIEW : ConfiguratorRouter.PageType.CONFIGURATION,
          navigateToCheckout: routingData.state.queryParams?.navigateToCheckout === "true",
          productCode: routingData.state.queryParams?.productCode
        };
        return routerData;
      })
    );
  }
  createOwnerFromRouterState(routerState) {
    const owner = ConfiguratorModelUtils.createInitialOwner();
    const params = routerState.state.params;
    if (params.ownerType) {
      const entityKey = params.entityKey;
      owner.type = params.ownerType;
      owner.id = entityKey;
    } else {
      owner.type = CommonConfigurator.OwnerType.PRODUCT;
      owner.id = params.rootProduct;
    }
    const semanticRoute = routerState.state.semanticRoute;
    if (semanticRoute) {
      const configuratorType = this.getConfiguratorTypeFromSemanticRoute(semanticRoute);
      owner.configuratorType = configuratorType;
    }
    this.configUtilsService.setOwnerKey(owner);
    return owner;
  }
  /**
   * Compiles the configurator type from the semantic route
   * @param semanticRoute Consists of a prefix that indicates if target is interactive configuration or overview and
   *                      the commerce configurator type as postfix.
   *                      Example: configureTEXTFIELD or configureOverviewCPQCONFIGURATOR
   * @returns Configurator type
   */
  getConfiguratorTypeFromSemanticRoute(semanticRoute) {
    if (semanticRoute.startsWith(this.ROUTE_FRAGMENT_OVERVIEW)) {
      return semanticRoute.split(this.ROUTE_FRAGMENT_OVERVIEW)[1];
    } else if (semanticRoute.startsWith(this.ROUTE_FRAGMENT_CONFIGURE)) {
      return semanticRoute.split(this.ROUTE_FRAGMENT_CONFIGURE)[1];
    } else {
      throw new Error("Not able to determine configurator type");
    }
  }
  static {
    this.ɵfac = function ConfiguratorRouterExtractorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguratorRouterExtractorService)(ɵɵinject(CommonConfiguratorUtilsService), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ConfiguratorRouterExtractorService,
      factory: _ConfiguratorRouterExtractorService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguratorRouterExtractorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CommonConfiguratorUtilsService
  }, {
    type: RoutingService
  }], null);
})();

export {
  CommonConfigurator,
  ConfiguratorType,
  ReadOnlyPostfix,
  OrderEntryStatus,
  ConfigurationInfoFields,
  ConfigurationInfoSpecialFields,
  ConfiguratorModelUtils,
  CommonConfiguratorUtilsService,
  ConfigureCartEntryComponent,
  ConfigureCartEntryModule,
  ConfiguratorIssuesNotificationComponent,
  ConfiguratorIssuesNotificationModule,
  ConfiguratorCartEntryInfoComponent,
  ConfiguratorCartEntryInfoModule,
  ConfiguratorProductScope,
  ConfigureProductComponent,
  ConfigureProductModule,
  ConfiguratorCartEntryBundleInfoService,
  ConfiguratorCartEntryBundleInfoComponent,
  ConfiguratorCartEntryBundleInfoModule,
  CommonConfiguratorComponentsModule,
  CommonConfiguratorOccModule,
  CommonConfiguratorModule,
  ConfiguratorRouter,
  ConfiguratorRouterExtractorService
};
//# sourceMappingURL=chunk-2H7NFAMW.js.map
