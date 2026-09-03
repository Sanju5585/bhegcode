import {
  OutletPosition,
  ProductListItemContext,
  ProductListOutlets,
  provideOutlet
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  I18nModule,
  OccConfig,
  UrlModule,
  VariantQualifier,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
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
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
  Optional,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  EMPTY
} from "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product/fesm2022/spartacus-product-variants-root.mjs
function ProductVariantStyleIconsComponent_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵelement(1, "img");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const v_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵattribute("src", ctx_r1.getVariantThumbnailUrl(v_r1.variantOptionQualifiers), ɵɵsanitizeUrl)("title", ctx_r1.variantNames[v_r1.code])("alt", ctx_r1.variantNames[v_r1.code]);
  }
}
function ProductVariantStyleIconsComponent_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 1);
    ɵɵtemplate(1, ProductVariantStyleIconsComponent_ul_0_li_1_Template, 2, 3, "li", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.variants);
  }
}
var PRODUCT_VARIANTS_FEATURE = "productVariants";
var ProductVariantStyleIconsComponent = class _ProductVariantStyleIconsComponent {
  constructor(config, productListItemContext) {
    this.config = config;
    this.productListItemContext = productListItemContext;
    this.subscriptions = new Subscription();
    this.ProductListOutlets = ProductListOutlets;
    this.product$ = this.productListItemContext?.product$ ?? EMPTY;
    this.variantNames = {};
  }
  ngOnInit() {
    this.setVariantsNames();
    this.subscriptions.add(this.product$.subscribe((product) => {
      if (product.variantOptions && product.variantOptions.length) {
        this.variants = product.variantOptions;
        this.setVariantsNames();
      }
    }));
  }
  setVariantsNames() {
    this.variants?.forEach((variant) => {
      if (variant.code && variant.variantOptionQualifiers) {
        this.variantNames[variant.code] = this.getVariantName(variant.variantOptionQualifiers) || "";
      }
    });
  }
  getVariantThumbnailUrl(variantOptionQualifiers) {
    const thumbnail = variantOptionQualifiers.find((item) => item.qualifier === VariantQualifier.THUMBNAIL);
    return thumbnail ? `${this.config?.backend?.occ?.baseUrl}${thumbnail.image?.url}` : "";
  }
  getVariantName(variantOptionQualifiers) {
    const rollupProperty = variantOptionQualifiers.find((item) => item.qualifier === VariantQualifier.ROLLUP_PROPERTY);
    const property = rollupProperty ? variantOptionQualifiers.find((item) => item.qualifier === rollupProperty.value) : null;
    return property ? property.value : "";
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function ProductVariantStyleIconsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantStyleIconsComponent)(ɵɵdirectiveInject(OccConfig), ɵɵdirectiveInject(ProductListItemContext, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductVariantStyleIconsComponent,
      selectors: [["cx-variant-style-icons"]],
      inputs: {
        variants: "variants"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["class", "variant-list", 4, "ngIf"], [1, "variant-list"], [4, "ngFor", "ngForOf"]],
      template: function ProductVariantStyleIconsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ProductVariantStyleIconsComponent_ul_0_Template, 2, 1, "ul", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.variants && ctx.variants.length);
        }
      },
      dependencies: [NgForOf, NgIf],
      styles: ["ul[_ngcontent-%COMP%]{padding:0;white-space:nowrap;overflow:hidden}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantStyleIconsComponent, [{
    type: Component,
    args: [{
      selector: "cx-variant-style-icons",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ul class="variant-list" *ngIf="variants && variants.length">\n  <li *ngFor="let v of variants">\n    <img\n      [attr.src]="getVariantThumbnailUrl(v.variantOptionQualifiers)"\n      [attr.title]="variantNames[v.code]"\n      [attr.alt]="variantNames[v.code]"\n    />\n  </li>\n</ul>\n',
      styles: ["ul{padding:0;white-space:nowrap;overflow:hidden}ul li{display:inline}ul li img{width:50px}\n"]
    }]
  }], () => [{
    type: OccConfig
  }, {
    type: ProductListItemContext,
    decorators: [{
      type: Optional
    }]
  }], {
    variants: [{
      type: Input
    }]
  });
})();
var ProductVariantStyleIconsModule = class _ProductVariantStyleIconsModule {
  static {
    this.ɵfac = function ProductVariantStyleIconsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantStyleIconsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductVariantStyleIconsModule,
      declarations: [ProductVariantStyleIconsComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      exports: [ProductVariantStyleIconsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, UrlModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantStyleIconsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule],
      declarations: [ProductVariantStyleIconsComponent],
      exports: [ProductVariantStyleIconsComponent]
    }]
  }], null, null);
})();
function defaultProductVariantsComponentsConfig() {
  const config = {
    featureModules: {
      [PRODUCT_VARIANTS_FEATURE]: {
        cmsComponents: ["ProductVariantSelectorComponent"]
      }
    }
  };
  return config;
}
var ProductVariantsRootModule = class _ProductVariantsRootModule {
  static {
    this.ɵfac = function ProductVariantsRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductVariantsRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductVariantsRootModule,
      imports: [ProductVariantStyleIconsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultProductVariantsComponentsConfig), provideOutlet({
        id: ProductListOutlets.ITEM_DETAILS,
        position: OutletPosition.AFTER,
        component: ProductVariantStyleIconsComponent
      })],
      imports: [ProductVariantStyleIconsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductVariantsRootModule, [{
    type: NgModule,
    args: [{
      imports: [ProductVariantStyleIconsModule],
      providers: [provideDefaultConfigFactory(defaultProductVariantsComponentsConfig), provideOutlet({
        id: ProductListOutlets.ITEM_DETAILS,
        position: OutletPosition.AFTER,
        component: ProductVariantStyleIconsComponent
      })]
    }]
  }], null, null);
})();
export {
  PRODUCT_VARIANTS_FEATURE,
  ProductVariantStyleIconsComponent,
  ProductVariantStyleIconsModule,
  ProductVariantsRootModule,
  defaultProductVariantsComponentsConfig
};
//# sourceMappingURL=@spartacus_product_variants_root.js.map
