import {
  OutletPosition,
  ProductListItemContext,
  ProductListOutlets,
  StarRatingComponent,
  StarRatingModule,
  provideOutlet
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  I18nModule,
  TranslatePipe,
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
import "./chunk-2A6OHZCE.js";
import "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  EMPTY
} from "./chunk-R6FETK65.js";
import "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product-multi-dimensional/fesm2022/spartacus-product-multi-dimensional-list-root.mjs
function ProductMultiDimensionalListItemDetailsComponent_ng_container_0_cx_star_rating_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-star-rating", 4);
  }
  if (rf & 2) {
    let tmp_3_0;
    const product_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("rating", (tmp_3_0 = product_r1 == null ? null : product_r1.averageRating) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0);
  }
}
function ProductMultiDimensionalListItemDetailsComponent_ng_container_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "productDetails.noReviews"), " ");
  }
}
function ProductMultiDimensionalListItemDetailsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ProductMultiDimensionalListItemDetailsComponent_ng_container_0_cx_star_rating_1_Template, 1, 1, "cx-star-rating", 1)(2, ProductMultiDimensionalListItemDetailsComponent_ng_container_0_div_2_Template, 3, 3, "div", 2);
    ɵɵelementStart(3, "div", 3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const product_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", product_r1.averageRating);
    ɵɵadvance();
    ɵɵproperty("ngIf", !product_r1.averageRating);
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind1(4, 4, "productDetails.productPrice"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.getProductPrice(product_r1), " ");
  }
}
var PRODUCT_MULTI_DIMENSIONAL_LIST_FEATURE = "productMultiDimensionalList";
var ProductMultiDimensionalListItemDetailsComponent = class _ProductMultiDimensionalListItemDetailsComponent {
  constructor() {
    this.productListItemContext = inject(ProductListItemContext);
    this.product$ = this.productListItemContext?.product$ ?? EMPTY;
  }
  getProductPrice(product) {
    const defaultValue = "0";
    if (!product.multidimensional) {
      return product.price?.formattedValue ?? defaultValue;
    }
    const priceRange = product.priceRange;
    const maxPrice = priceRange?.maxPrice?.formattedValue;
    const minPrice = priceRange?.minPrice?.formattedValue;
    return maxPrice && minPrice ? `${minPrice} - ${maxPrice}` : "";
  }
  static {
    this.ɵfac = function ProductMultiDimensionalListItemDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalListItemDetailsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductMultiDimensionalListItemDetailsComponent,
      selectors: [["cx-product-multi-dimensional-list-item-details"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [3, "rating", 4, "ngIf"], ["class", "cx-product-no-review", 4, "ngIf"], [1, "cx-product-price"], [3, "rating"], [1, "cx-product-no-review"]],
      template: function ProductMultiDimensionalListItemDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ProductMultiDimensionalListItemDetailsComponent_ng_container_0_Template, 6, 6, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.product$));
        }
      },
      dependencies: [NgIf, StarRatingComponent, TranslatePipe, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalListItemDetailsComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-multi-dimensional-list-item-details",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="product$ | async as product">
  <cx-star-rating
    *ngIf="product.averageRating"
    [rating]="product?.averageRating ?? 0"
  ></cx-star-rating>

  <div *ngIf="!product.averageRating" class="cx-product-no-review">
    {{ 'productDetails.noReviews' | cxTranslate }}
  </div>

  <div
    class="cx-product-price"
    [attr.aria-label]="'productDetails.productPrice' | cxTranslate"
  >
    {{ getProductPrice(product) }}
  </div>
</ng-container>
`
    }]
  }], null, null);
})();
var ProductMultiDimensionalListItemDetailsModule = class _ProductMultiDimensionalListItemDetailsModule {
  static {
    this.ɵfac = function ProductMultiDimensionalListItemDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalListItemDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductMultiDimensionalListItemDetailsModule,
      declarations: [ProductMultiDimensionalListItemDetailsComponent],
      imports: [I18nModule, NgIf, AsyncPipe, StarRatingModule],
      exports: [ProductMultiDimensionalListItemDetailsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [I18nModule, StarRatingModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalListItemDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [I18nModule, NgIf, AsyncPipe, StarRatingModule],
      declarations: [ProductMultiDimensionalListItemDetailsComponent],
      exports: [ProductMultiDimensionalListItemDetailsComponent]
    }]
  }], null, null);
})();
function defaultProductMultiDimensionalListConfig() {
  return {
    featureModules: {
      [PRODUCT_MULTI_DIMENSIONAL_LIST_FEATURE]: {
        cmsComponents: ["CMSProductListComponent", "ProductGridComponent", "SearchResultsListComponent"]
      }
    }
  };
}
var ProductMultiDimensionalListRootModule = class _ProductMultiDimensionalListRootModule {
  static {
    this.ɵfac = function ProductMultiDimensionalListRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalListRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductMultiDimensionalListRootModule,
      imports: [ProductMultiDimensionalListItemDetailsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultProductMultiDimensionalListConfig), provideOutlet({
        id: ProductListOutlets.ITEM_DETAILS,
        position: OutletPosition.REPLACE,
        component: ProductMultiDimensionalListItemDetailsComponent
      })],
      imports: [ProductMultiDimensionalListItemDetailsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalListRootModule, [{
    type: NgModule,
    args: [{
      imports: [ProductMultiDimensionalListItemDetailsModule],
      providers: [provideDefaultConfigFactory(defaultProductMultiDimensionalListConfig), provideOutlet({
        id: ProductListOutlets.ITEM_DETAILS,
        position: OutletPosition.REPLACE,
        component: ProductMultiDimensionalListItemDetailsComponent
      })]
    }]
  }], null, null);
})();
export {
  PRODUCT_MULTI_DIMENSIONAL_LIST_FEATURE,
  ProductMultiDimensionalListItemDetailsComponent,
  ProductMultiDimensionalListItemDetailsModule,
  ProductMultiDimensionalListRootModule,
  defaultProductMultiDimensionalListConfig
};
//# sourceMappingURL=@spartacus_product-multi-dimensional_list_root.js.map
