import {
  CurrentProductService
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  I18nModule,
  OccConfig,
  ProductScope,
  ProductService,
  RoutingService,
  SemanticPathService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  VariantQualifier,
  VariantType,
  isNotNullable,
  isNotUndefined,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  Router,
  RouterModule
} from "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  Input,
  NgModule,
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
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  distinctUntilChanged,
  filter,
  map,
  of,
  take,
  tap
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product/fesm2022/spartacus-product-variants-occ.mjs
var defaultOccProductVariantsConfig = {
  backend: {
    occ: {
      endpoints: {
        product: {
          variants: "products/${productCode}?fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType"
        }
      }
    }
  }
};
var ProductVariantsOccModule = class _ProductVariantsOccModule {
  static {
    this.ɵfac = function ProductVariantsOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantsOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductVariantsOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccProductVariantsConfig)],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccProductVariantsConfig)]
    }]
  }], null, null);
})();

// node_modules/@spartacus/product/fesm2022/spartacus-product-variants-components.mjs
function ProductVariantColorSelectorComponent_option_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵpropertyInterpolate("value", v_r1.code);
    ɵɵproperty("selected", v_r1.code === (ctx_r1.product == null ? null : ctx_r1.product.code));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getVariantOptionValue(v_r1.variantOptionQualifiers), " ");
  }
}
function ProductVariantSizeSelectorComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 5);
    ɵɵpipe(1, "async");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵpropertyInterpolate("value", v_r1.code);
    ɵɵproperty("selected", v_r1.code === (ctx_r2.product == null ? null : ctx_r2.product.code));
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 4, ctx_r2.ariaLabel$(v_r1.variantOptionQualifiers, i_r2, ctx_r2.variants == null ? null : ctx_r2.variants.options == null ? null : ctx_r2.variants.options.length)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r2.getVariantOptionValue(v_r1.variantOptionQualifiers), " ");
  }
}
var _c0 = (a0) => ({
  "selected-variant": a0
});
function ProductVariantStyleSelectorComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementStart(3, "span", 5);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "productVariants.style"), ": ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.getVariantOptionValue(ctx_r0.variants == null ? null : ctx_r0.variants.selected.variantOptionQualifiers));
  }
}
function ProductVariantStyleSelectorComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 6)(1, "button", 7);
    ɵɵlistener("click", function ProductVariantStyleSelectorComponent_li_4_Template_button_click_1_listener() {
      const v_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.changeStyle(v_r3.code));
    });
    ɵɵelement(2, "img", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const v_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c0, v_r3.code === (ctx_r0.variants == null ? null : ctx_r0.variants.selected == null ? null : ctx_r0.variants.selected.code)));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("src", ctx_r0.getVariantThumbnailUrl(v_r3.variantOptionQualifiers), ɵɵsanitizeUrl);
    ɵɵpropertyInterpolate("title", ctx_r0.getVariantOptionValue(v_r3.variantOptionQualifiers));
    ɵɵpropertyInterpolate("alt", ctx_r0.getVariantOptionValue(v_r3.variantOptionQualifiers));
  }
}
function ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_style_selector_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-product-variant-style-selector", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("variants", ctx_r0.variants[ctx_r0.variantType.STYLE]);
  }
}
function ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_size_selector_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-product-variant-size-selector", 6);
  }
  if (rf & 2) {
    const product_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("product", product_r2)("variants", ctx_r0.variants[ctx_r0.variantType.SIZE]);
  }
}
function ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_color_selector_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-product-variant-color-selector", 6);
  }
  if (rf & 2) {
    const product_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("product", product_r2)("variants", ctx_r0.variants[ctx_r0.variantType.COLOR]);
  }
}
function ProductVariantsContainerComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_style_selector_1_Template, 1, 1, "cx-product-variant-style-selector", 3)(2, ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_size_selector_2_Template, 1, 2, "cx-product-variant-size-selector", 4)(3, ProductVariantsContainerComponent_ng_container_0_div_1_cx_product_variant_color_selector_3_Template, 1, 2, "cx-product-variant-color-selector", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.variants[ctx_r0.variantType.STYLE]);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.variants[ctx_r0.variantType.SIZE]);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.variants[ctx_r0.variantType.COLOR]);
  }
}
function ProductVariantsContainerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductVariantsContainerComponent_ng_container_0_div_1_Template, 4, 3, "div", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", product_r2.baseOptions == null ? null : product_r2.baseOptions.length);
  }
}
var ProductVariantColorSelectorComponent = class _ProductVariantColorSelectorComponent {
  constructor(routingService) {
    this.routingService = routingService;
  }
  changeColor(code, name) {
    if (code) {
      this.routingService.go({
        cxRoute: "product",
        params: {
          code,
          name
        }
      });
    }
    return null;
  }
  getVariantOptionValue(qualifiers) {
    const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.COLOR);
    return obj ? obj.value : "";
  }
  static {
    this.ɵfac = function ProductVariantColorSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantColorSelectorComponent)(ɵɵdirectiveInject(RoutingService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductVariantColorSelectorComponent,
      selectors: [["cx-product-variant-color-selector"]],
      inputs: {
        product: "product",
        variants: "variants"
      },
      standalone: false,
      decls: 7,
      vars: 4,
      consts: [[1, "variant-selector"], [1, "variant-name"], [1, "form-control", "variant-select", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
      template: function ProductVariantColorSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainerStart(0);
          ɵɵelementStart(1, "div", 0)(2, "div", 1);
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "select", 2);
          ɵɵlistener("change", function ProductVariantColorSelectorComponent_Template_select_change_5_listener($event) {
            return ctx.changeColor($event.target.value, ctx.product == null ? null : ctx.product.name);
          });
          ɵɵtemplate(6, ProductVariantColorSelectorComponent_option_6_Template, 2, 3, "option", 3);
          ɵɵelementEnd()();
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(4, 2, "productVariants.color"), ":");
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.variants == null ? null : ctx.variants.options);
        }
      },
      dependencies: [NgForOf, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantColorSelectorComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-variant-color-selector",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container>
  <div class="variant-selector">
    <div class="variant-name">{{ 'productVariants.color' | cxTranslate }}:</div>

    <select
      (change)="changeColor($event.target.value, product?.name)"
      class="form-control variant-select"
    >
      <option
        *ngFor="let v of variants?.options"
        value="{{ v.code }}"
        [selected]="v.code === product?.code"
      >
        {{ getVariantOptionValue(v.variantOptionQualifiers) }}
      </option>
    </select>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }], {
    product: [{
      type: Input
    }],
    variants: [{
      type: Input
    }]
  });
})();
var ProductVariantColorSelectorModule = class _ProductVariantColorSelectorModule {
  static {
    this.ɵfac = function ProductVariantColorSelectorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantColorSelectorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductVariantColorSelectorModule,
      declarations: [ProductVariantColorSelectorComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      exports: [ProductVariantColorSelectorComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, UrlModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantColorSelectorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      declarations: [ProductVariantColorSelectorComponent],
      exports: [ProductVariantColorSelectorComponent]
    }]
  }], null, null);
})();
var ProductVariantSizeSelectorComponent = class _ProductVariantSizeSelectorComponent {
  constructor(productService, routingService) {
    this.productService = productService;
    this.routingService = routingService;
    this.translationService = inject(TranslationService);
  }
  changeSize(code) {
    if (code) {
      this.productService.get(code, ProductScope.LIST).pipe(
        // below call might looks redundant but in fact this data is going to be loaded anyways
        // we're just calling it earlier and storing
        filter(isNotUndefined),
        take(1)
      ).subscribe((product) => {
        this.routingService.go({
          cxRoute: "product",
          params: product
        });
      });
    }
    return null;
  }
  getVariantOptionValue(qualifiers) {
    const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.SIZE);
    return obj ? obj.value : "";
  }
  ariaLabel$(qualifiers, index, quantity) {
    return this.translationService.translate("common.of").pipe(take(1), map((ofTranslation) => {
      return `${this.getVariantOptionValue(qualifiers)}, ${index + 1} ${ofTranslation} ${quantity}`;
    }));
  }
  static {
    this.ɵfac = function ProductVariantSizeSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantSizeSelectorComponent)(ɵɵdirectiveInject(ProductService), ɵɵdirectiveInject(RoutingService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductVariantSizeSelectorComponent,
      selectors: [["cx-product-variant-size-selector"]],
      inputs: {
        product: "product",
        variants: "variants"
      },
      standalone: false,
      decls: 12,
      vars: 13,
      consts: [[1, "variant-selector"], [1, "variant-name"], [1, "form-control", "variant-select", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["href", "#", 1, "size-guide", 3, "title"], [3, "value", "selected"]],
      template: function ProductVariantSizeSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainerStart(0);
          ɵɵelementStart(1, "div", 0)(2, "div", 1);
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "select", 2);
          ɵɵpipe(6, "cxTranslate");
          ɵɵlistener("change", function ProductVariantSizeSelectorComponent_Template_select_change_5_listener($event) {
            return ctx.changeSize($event.target.value);
          });
          ɵɵtemplate(7, ProductVariantSizeSelectorComponent_option_7_Template, 3, 6, "option", 3);
          ɵɵelementEnd();
          ɵɵelementStart(8, "a", 4);
          ɵɵpipe(9, "cxTranslate");
          ɵɵtext(10);
          ɵɵpipe(11, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate1("", ɵɵpipeBind1(4, 5, "productVariants.size"), ":");
          ɵɵadvance(2);
          ɵɵattribute("aria-label", ɵɵpipeBind1(6, 7, "productVariants.size"));
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.variants == null ? null : ctx.variants.options);
          ɵɵadvance();
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(9, 9, "productVariants.sizeGuideLabel"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 11, "productVariants.sizeGuideLabel"), " ");
        }
      },
      dependencies: [NgForOf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantSizeSelectorComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-variant-size-selector",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container>
  <div class="variant-selector">
    <div class="variant-name">{{ 'productVariants.size' | cxTranslate }}:</div>
    <select
      [attr.aria-label]="'productVariants.size' | cxTranslate"
      (change)="changeSize($event.target.value)"
      class="form-control variant-select"
    >
      <option
        *ngFor="let v of variants?.options; index as i"
        value="{{ v.code }}"
        [attr.aria-label]="
          ariaLabel$(v.variantOptionQualifiers, i, variants?.options?.length)
            | async
        "
        [selected]="v.code === product?.code"
      >
        {{ getVariantOptionValue(v.variantOptionQualifiers) }}
      </option>
    </select>
    <a
      href="#"
      class="size-guide"
      title="{{ 'productVariants.sizeGuideLabel' | cxTranslate }}"
    >
      {{ 'productVariants.sizeGuideLabel' | cxTranslate }}
    </a>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ProductService
  }, {
    type: RoutingService
  }], {
    product: [{
      type: Input
    }],
    variants: [{
      type: Input
    }]
  });
})();
var ProductVariantSizeSelectorModule = class _ProductVariantSizeSelectorModule {
  static {
    this.ɵfac = function ProductVariantSizeSelectorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantSizeSelectorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductVariantSizeSelectorModule,
      declarations: [ProductVariantSizeSelectorComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      exports: [ProductVariantSizeSelectorComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, UrlModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantSizeSelectorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      declarations: [ProductVariantSizeSelectorComponent],
      exports: [ProductVariantSizeSelectorComponent]
    }]
  }], null, null);
})();
var ProductVariantStyleSelectorComponent = class _ProductVariantStyleSelectorComponent {
  constructor(config, productService, routingService) {
    this.config = config;
    this.productService = productService;
    this.routingService = routingService;
    this.variantQualifier = VariantQualifier;
  }
  getVariantOptionValue(qualifiers) {
    const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.STYLE);
    return obj ? obj.value : "";
  }
  getVariantThumbnailUrl(variantOptionQualifiers) {
    const qualifier = variantOptionQualifiers.find((item) => item.image);
    return qualifier ? `${this.config?.backend?.occ?.baseUrl}${qualifier.image?.url}` : "";
  }
  changeStyle(code) {
    if (code) {
      this.productService.get(code, ProductScope.LIST).pipe(
        // below call might looks redundant but in fact this data is going to be loaded anyways
        // we're just calling it earlier and storing
        filter(isNotUndefined),
        take(1)
      ).subscribe((product) => {
        this.routingService.go({
          cxRoute: "product",
          params: product
        });
      });
    }
    return null;
  }
  static {
    this.ɵfac = function ProductVariantStyleSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantStyleSelectorComponent)(ɵɵdirectiveInject(OccConfig), ɵɵdirectiveInject(ProductService), ɵɵdirectiveInject(RoutingService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductVariantStyleSelectorComponent,
      selectors: [["cx-product-variant-style-selector"]],
      inputs: {
        variants: "variants"
      },
      standalone: false,
      decls: 5,
      vars: 2,
      consts: [[1, "variant-selector"], ["class", "variant-name", 4, "ngIf"], [1, "variant-list"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "variant-name"], [1, "style-name"], [3, "ngClass"], [1, "variant-button", 3, "click"], [3, "src", "title", "alt"]],
      template: function ProductVariantStyleSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementContainerStart(0);
          ɵɵelementStart(1, "div", 0);
          ɵɵtemplate(2, ProductVariantStyleSelectorComponent_div_2_Template, 5, 4, "div", 1);
          ɵɵelementStart(3, "ul", 2);
          ɵɵtemplate(4, ProductVariantStyleSelectorComponent_li_4_Template, 3, 6, "li", 3);
          ɵɵelementEnd()();
          ɵɵelementContainerEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.variants.selected);
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.variants == null ? null : ctx.variants.options);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantStyleSelectorComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-variant-style-selector",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container>
  <div class="variant-selector">
    <div *ngIf="variants.selected" class="variant-name">
      {{ 'productVariants.style' | cxTranslate }}:
      <span class="style-name">{{
        getVariantOptionValue(variants?.selected.variantOptionQualifiers)
      }}</span>
    </div>
    <ul class="variant-list">
      <li
        *ngFor="let v of variants?.options"
        [ngClass]="{ 'selected-variant': v.code === variants?.selected?.code }"
      >
        <button class="variant-button" (click)="changeStyle(v.code)">
          <img
            src="{{ getVariantThumbnailUrl(v.variantOptionQualifiers) }}"
            title="{{ getVariantOptionValue(v.variantOptionQualifiers) }}"
            alt="{{ getVariantOptionValue(v.variantOptionQualifiers) }}"
          />
        </button>
      </li>
    </ul>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: OccConfig
  }, {
    type: ProductService
  }, {
    type: RoutingService
  }], {
    variants: [{
      type: Input
    }]
  });
})();
var ProductVariantStyleSelectorModule = class _ProductVariantStyleSelectorModule {
  static {
    this.ɵfac = function ProductVariantStyleSelectorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantStyleSelectorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductVariantStyleSelectorModule,
      declarations: [ProductVariantStyleSelectorComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      exports: [ProductVariantStyleSelectorComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, UrlModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantStyleSelectorModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      declarations: [ProductVariantStyleSelectorComponent],
      exports: [ProductVariantStyleSelectorComponent]
    }]
  }], null, null);
})();
var ProductVariantsContainerComponent = class _ProductVariantsContainerComponent {
  constructor(currentProductService) {
    this.currentProductService = currentProductService;
    this.variants = {};
    this.variantType = VariantType;
  }
  ngOnInit() {
    this.product$ = this.currentProductService.getProduct().pipe(filter(isNotNullable), filter((product) => !!product.baseOptions), distinctUntilChanged(), tap((product) => {
      product.baseOptions.forEach((option) => {
        if (option?.variantType) {
          this.variants[option.variantType] = option;
        }
      });
    }));
  }
  static {
    this.ɵfac = function ProductVariantsContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantsContainerComponent)(ɵɵdirectiveInject(CurrentProductService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductVariantsContainerComponent,
      selectors: [["cx-product-variants-container"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "variant-section", 4, "ngIf"], [1, "variant-section"], [3, "variants", 4, "ngIf"], [3, "product", "variants", 4, "ngIf"], [3, "variants"], [3, "product", "variants"]],
      template: function ProductVariantsContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ProductVariantsContainerComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.product$));
        }
      },
      dependencies: [NgIf, ProductVariantStyleSelectorComponent, ProductVariantSizeSelectorComponent, ProductVariantColorSelectorComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsContainerComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-variants-container",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-container *ngIf="product$ | async as product">\n  <div class="variant-section" *ngIf="product.baseOptions?.length">\n    <cx-product-variant-style-selector\n      *ngIf="variants[variantType.STYLE]"\n      [variants]="variants[variantType.STYLE]"\n    ></cx-product-variant-style-selector>\n    <cx-product-variant-size-selector\n      *ngIf="variants[variantType.SIZE]"\n      [product]="product"\n      [variants]="variants[variantType.SIZE]"\n    ></cx-product-variant-size-selector>\n    <cx-product-variant-color-selector\n      *ngIf="variants[variantType.COLOR]"\n      [product]="product"\n      [variants]="variants[variantType.COLOR]"\n    ></cx-product-variant-color-selector>\n  </div>\n</ng-container>\n'
    }]
  }], () => [{
    type: CurrentProductService
  }], null);
})();
var ProductVariantsContainerModule = class _ProductVariantsContainerModule {
  static {
    this.ɵfac = function ProductVariantsContainerModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantsContainerModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductVariantsContainerModule,
      declarations: [ProductVariantsContainerComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, ProductVariantStyleSelectorModule, ProductVariantSizeSelectorModule, ProductVariantColorSelectorModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, ProductVariantStyleSelectorModule, ProductVariantSizeSelectorModule, ProductVariantColorSelectorModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsContainerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, ProductVariantStyleSelectorModule, ProductVariantSizeSelectorModule, ProductVariantColorSelectorModule],
      declarations: [ProductVariantsContainerComponent]
    }]
  }], null, null);
})();
var ProductVariantsGuard = class _ProductVariantsGuard {
  constructor(productService, semanticPathService, router) {
    this.productService = productService;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate(activatedRoute) {
    const productCode = activatedRoute.params?.productCode;
    if (!productCode) {
      return of(true);
    }
    return this.productService.get(productCode, ProductScope.VARIANTS).pipe(filter(isNotUndefined), switchMap((product) => {
      if (!product.purchasable) {
        const purchasableCode = this.findPurchasableProductCode(product);
        if (purchasableCode) {
          return this.productService.get(purchasableCode, ProductScope.LIST).pipe(filter(isNotUndefined), take(1), map((_product) => {
            return this.router.createUrlTree(this.semanticPathService.transform({
              cxRoute: "product",
              params: _product
            }));
          }));
        }
      }
      return of(true);
    }));
  }
  /**
   * Finds a purchasable product code looking at variant options, if any
   *
   * @param product
   */
  findPurchasableProductCode(product) {
    if (product.variantOptions?.length) {
      const results = product.variantOptions.filter((variant) => {
        return variant.stock && variant.stock.stockLevel ? variant : false;
      });
      return results && results.length ? results[0]?.code : product.variantOptions[0]?.code;
    }
    return void 0;
  }
  static {
    this.ɵfac = function ProductVariantsGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantsGuard)(ɵɵinject(ProductService), ɵɵinject(SemanticPathService), ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductVariantsGuard,
      factory: _ProductVariantsGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductService
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var ProductVariantsComponentsModule = class _ProductVariantsComponentsModule {
  static {
    this.ɵfac = function ProductVariantsComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantsComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductVariantsComponentsModule,
      imports: [ProductVariantsContainerModule, ProductVariantColorSelectorModule, ProductVariantSizeSelectorModule, ProductVariantStyleSelectorModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ProductVariantSelectorComponent: {
            component: ProductVariantsContainerComponent,
            guards: [ProductVariantsGuard]
          }
        }
      })],
      imports: [ProductVariantsContainerModule, ProductVariantColorSelectorModule, ProductVariantSizeSelectorModule, ProductVariantStyleSelectorModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [ProductVariantsContainerModule, ProductVariantColorSelectorModule, ProductVariantSizeSelectorModule, ProductVariantStyleSelectorModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ProductVariantSelectorComponent: {
            component: ProductVariantsContainerComponent,
            guards: [ProductVariantsGuard]
          }
        }
      })]
    }]
  }], null, null);
})();

// node_modules/@spartacus/product/fesm2022/spartacus-product-variants.mjs
var ProductVariantsModule = class _ProductVariantsModule {
  static {
    this.ɵfac = function ProductVariantsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductVariantsModule,
      imports: [ProductVariantsOccModule, ProductVariantsComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ProductVariantsOccModule, ProductVariantsComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsModule, [{
    type: NgModule,
    args: [{
      imports: [ProductVariantsOccModule, ProductVariantsComponentsModule]
    }]
  }], null, null);
})();
export {
  ProductVariantsModule
};
//# sourceMappingURL=@spartacus_product_variants.js.map
