import {
  CurrentProductService,
  FocusDirective,
  KeyboardFocusModule,
  MediaComponent,
  MediaModule,
  NgSelectA11yDirective,
  NgSelectA11yModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  Config,
  I18nModule,
  ProductScope,
  ProductService,
  RoutingService,
  SemanticPathService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  isNotNullable,
  isNotUndefined,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  NgSelectComponent,
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
import "./chunk-6KXUHIAW.js";
import "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import "./chunk-2A6OHZCE.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-YST33EXT.js";
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
  NgModule,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  distinctUntilChanged,
  filter,
  map,
  of,
  shareReplay,
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

// node_modules/@spartacus/product-multi-dimensional/fesm2022/spartacus-product-multi-dimensional-selector-core.mjs
var ProductMultiDimensionalSelectorImagesService = class _ProductMultiDimensionalSelectorImagesService {
  constructor() {
    this.config = inject(Config);
  }
  /**
   * Retrieves the image for variant option qualifiers that match the specified format.
   */
  getVariantOptionImage(variantOptionQualifiers, variantOptionValue) {
    const format = this.config.multiDimensional?.imageFormat;
    const optionImage = variantOptionQualifiers.find((optionQualifier) => optionQualifier.image?.format === format);
    const altText = optionImage?.image?.altText ?? variantOptionValue;
    return optionImage ? {
      altText,
      url: this.getBaseUrl() + optionImage?.image?.url
    } : void 0;
  }
  getBaseUrl() {
    return this.config.backend?.media?.baseUrl ?? this.config.backend?.occ?.baseUrl ?? "";
  }
  static {
    this.ɵfac = function ProductMultiDimensionalSelectorImagesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalSelectorImagesService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductMultiDimensionalSelectorImagesService,
      factory: _ProductMultiDimensionalSelectorImagesService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalSelectorImagesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ProductMultiDimensionalSelectorService = class _ProductMultiDimensionalSelectorService {
  constructor() {
    this.imagesService = inject(ProductMultiDimensionalSelectorImagesService);
  }
  /**
   * Retrieves variant categories for a given product, extracting options recursively
   * from the variant matrix and adjusting for currently selected elements.
   *
   * @param {Product} product - The product object containing variant data.
   * @returns {VariantCategoryGroup[]} - An array of variant categories with their options.
   *
   * @description
   * This method processes a product's variant matrix to create an array of variant categories,
   * each containing its respective options. It handles model conversions to ensure that the
   * returned data is structured appropriately for the UI. Without these conversions, the UI
   * would not be able to display the variant options correctly, and some attributes required
   * for navigation would be missing.
   *
   * @example
   * Given initially selected option "Blue 2 L":
   * Color:        Red             (Blue)
   * Size:      1     2         1      (2)
   * Fit:     M  L  M   L     M   L   M   (L)
   *
   * The method extracts all available colors (e.g., Red and Blue) and recursively retrieves options
   * until all variant options are exhausted, based on the currently selected options. For example the second row
   * contains multiple sizes of the same value, representing different products. Since the user can change
   * only one variant at a time, we need to identify only the products that reflect the current selections,
   * as shown in the tree with rows like (Blue), (2), (L).
   *
   * Color:        Red             (Blue)
   * Size:                       1      (2)
   * Fit:                              M   (L)
   *
   * @see checkIfEveryOptionHasImages
   * @see imagesService.getVariantOptionImage
   */
  getVariants(product) {
    let variantMatrix2 = product.variantMatrix ?? [];
    const levels = product.categories ?? [];
    const code = product.code ?? "";
    const variantCategories = [];
    levels.forEach((_) => {
      const variantCategoryGroup = this.createVariantCategoryGroup(variantMatrix2);
      variantMatrix2.forEach((element) => {
        const variantOptionCategory = this.createVariantOptionCategory(element);
        variantCategoryGroup.variantOptions.push(variantOptionCategory);
        if (element.variantOption?.code === code && element.elements?.length) {
          variantMatrix2 = element.elements;
        }
      });
      variantCategories.push(variantCategoryGroup);
    });
    return this.checkIfEveryOptionHasImages(variantCategories);
  }
  /**
   * Checks if every variant option in the category has images.
   *
   * @param {VariantCategoryGroup[]} variantCategories - An array of variant categories.
   * @returns {VariantCategoryGroup[]} - An array of variant categories with updated image information.
   */
  checkIfEveryOptionHasImages(variantCategories) {
    return variantCategories.map((variantCategoryGroup) => {
      const variantOptions = variantCategoryGroup.variantOptions;
      const hasImages = variantCategoryGroup.hasImages && variantOptions.every((option) => !!option.image);
      return __spreadProps(__spreadValues({}, variantCategoryGroup), {
        variantOptions,
        hasImages
      });
    });
  }
  /**
   * Creates a variant option category from a variant matrix element.
   *
   * @param {VariantMatrixElement} element - The variant matrix element.
   * @returns {VariantCategoryOption} - The variant category option.
   *
   * @description
   * This method converts a variant matrix element into a variant category option.
   * It extracts the variant category name, option qualifiers, and images to create
   * the appropriate data structure for the UI.
   *
   * @see imagesService.getVariantOptionImage
   */
  createVariantOptionCategory(element) {
    const variantCategoryName = element.variantValueCategory?.name ?? "";
    const variantOptionQualifiers = element.variantOption?.variantOptionQualifiers ?? [];
    const image = this.imagesService.getVariantOptionImage(variantOptionQualifiers, variantCategoryName);
    return {
      image,
      value: variantCategoryName,
      code: element.variantOption?.code ?? ""
    };
  }
  /**
   * Creates a variant category group from a variant matrix.
   *
   * @param {VariantMatrixElement[]} elements - The variant matrix elements.
   * @returns {VariantCategoryGroup} - The variant category.
   *
   * @description
   * This method creates a variant category from the first element of a variant matrix.
   * The category name and image presence status (`hasImages`) are consistent for each
   * element in the array. It initializes the category's name, option list, and image presence status.
   */
  createVariantCategoryGroup(elements2) {
    const parentVariantCategory = elements2.length ? elements2[0]?.parentVariantCategory : void 0;
    return {
      name: parentVariantCategory?.name ?? "",
      variantOptions: [],
      hasImages: !!parentVariantCategory?.hasImage
    };
  }
  static {
    this.ɵfac = function ProductMultiDimensionalSelectorService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalSelectorService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductMultiDimensionalSelectorService,
      factory: _ProductMultiDimensionalSelectorService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalSelectorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// node_modules/@spartacus/product-multi-dimensional/fesm2022/spartacus-product-multi-dimensional-selector.mjs
var _c0 = (a0) => ({
  active: a0
});
var _c1 = (a0) => ({
  key: a0
});
var _c2 = (a0) => ({
  category: a0
});
var _c3 = (a0) => ({
  ariaLabel: a0
});
function ProductMultiDimensionalSelectorComponent_ng_container_0_ng_container_2_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7)(1, "button", 8);
    ɵɵpipe(2, "async");
    ɵɵlistener("click", function ProductMultiDimensionalSelectorComponent_ng_container_0_ng_container_2_div_4_div_1_Template_button_click_1_listener() {
      const option_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.changeVariant(option_r2.code));
    });
    ɵɵelement(3, "cx-media", 9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const category_r4 = ɵɵnextContext(2).$implicit;
    const product_r5 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c0, (option_r2 == null ? null : option_r2.code) === product_r5.code))("cxFocus", ɵɵpureFunction1(8, _c1, option_r2.code));
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 4, ctx_r2.onAriaLabel(option_r2, category_r4.name)));
    ɵɵadvance(2);
    ɵɵproperty("container", option_r2.image);
  }
}
function ProductMultiDimensionalSelectorComponent_ng_container_0_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, ProductMultiDimensionalSelectorComponent_ng_container_0_ng_container_2_div_4_div_1_Template, 4, 10, "div", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const category_r4 = ɵɵnextContext().$implicit;
    ɵɵattribute("aria-label", category_r4.name);
    ɵɵadvance();
    ɵɵproperty("ngForOf", category_r4.variantOptions);
  }
}
function ProductMultiDimensionalSelectorComponent_ng_container_0_ng_container_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 10)(1, "ng-select", 11);
    ɵɵpipe(2, "cxTranslate");
    ɵɵtwoWayListener("ngModelChange", function ProductMultiDimensionalSelectorComponent_ng_container_0_ng_container_2_ng_template_5_Template_ng_select_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(3);
      ɵɵtwoWayBindingSet(ctx_r2.selectedProductCode, $event) || (ctx_r2.selectedProductCode = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("change", function ProductMultiDimensionalSelectorComponent_ng_container_0_ng_container_2_ng_template_5_Template_ng_select_change_1_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.changeVariant($event.code));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const category_r4 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("clearable", false)("searchable", false)("items", category_r4.variantOptions);
    ɵɵtwoWayProperty("ngModel", ctx_r2.selectedProductCode);
    ɵɵproperty("cxNgSelectA11y", ɵɵpureFunction1(10, _c3, ɵɵpipeBind2(2, 5, "multiDimensionalSelector.variantThumbnailTitle", ɵɵpureFunction1(8, _c2, category_r4.name))));
  }
}
function ProductMultiDimensionalSelectorComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label")(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, ProductMultiDimensionalSelectorComponent_ng_container_0_ng_container_2_div_4_Template, 2, 2, "div", 4);
    ɵɵelementEnd();
    ɵɵtemplate(5, ProductMultiDimensionalSelectorComponent_ng_container_0_ng_container_2_ng_template_5_Template, 3, 12, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const noImages_r7 = ɵɵreference(6);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.getCategoryName(category_r4), " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", category_r4.hasImages)("ngIfElse", noImages_r7);
  }
}
function ProductMultiDimensionalSelectorComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵtemplate(2, ProductMultiDimensionalSelectorComponent_ng_container_0_ng_container_2_Template, 7, 3, "ng-container", 3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.categories);
  }
}
var ProductMultiDimensionalSelectorComponent = class _ProductMultiDimensionalSelectorComponent {
  constructor() {
    this.multiDimensionalService = inject(ProductMultiDimensionalSelectorService);
    this.productService = inject(ProductService);
    this.routingService = inject(RoutingService);
    this.route = inject(ActivatedRoute);
    this.currentProductService = inject(CurrentProductService);
    this.translationService = inject(TranslationService);
    this.categories = [];
    this.product$ = this.currentProductService.getProduct(ProductScope.MULTI_DIMENSIONAL).pipe(filter(isNotNullable), filter((product) => !!product.multidimensional), distinctUntilChanged(), shareReplay(1), tap((product) => {
      this.categories = this.getVariants(product);
      this.selectedProductCode = product.code ?? "";
    }));
  }
  changeVariant(code) {
    if (code) {
      this.productService.get(code, ProductScope.LIST).pipe(filter(Boolean), take(1)).subscribe((product) => {
        this.routingService.go({
          cxRoute: "product",
          params: product
        });
      });
    }
  }
  getSelectedValue(categoryName) {
    const category = this.categories.find((cat) => cat.name === categoryName);
    if (category && this.selectedProductCode) {
      const selectedOption = category.variantOptions.find((option) => option.code === this.selectedProductCode);
      return selectedOption ? selectedOption.value : "";
    }
    return "";
  }
  onAriaLabel(option, categoryName) {
    const isSelected = this.isSelected(option.code);
    if (isSelected) {
      return this.translationService.translate("multiDimensionalSelector.selectedVariant").pipe(map((text) => `${text}, ${option.value} ${categoryName}`));
    }
    return this.translationService.translate("multiDimensionalSelector.variantThumbnailTitle", {
      value: option.value,
      category: categoryName
    }).pipe(map((text) => `${text}`));
  }
  getCategoryName(category) {
    const label = `${category.name}: `;
    if (category.hasImages) {
      const selectedValue = this.getSelectedValue(category.name);
      return `${label}${selectedValue ?? ""}`;
    }
    return label;
  }
  isSelected(code) {
    return code === this.selectedProductCode;
  }
  getVariants(product) {
    return this.multiDimensionalService.getVariants(product);
  }
  static {
    this.ɵfac = function ProductMultiDimensionalSelectorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalSelectorComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ProductMultiDimensionalSelectorComponent,
      selectors: [["cx-product-multi-dimensional-selector"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["noImages", ""], [4, "ngIf"], [1, "variant-generic-selector"], [4, "ngFor", "ngForOf"], ["role", "list", "class", "image-variant-container", 4, "ngIf", "ngIfElse"], ["role", "list", 1, "image-variant-container"], ["role", "listitem", 4, "ngFor", "ngForOf"], ["role", "listitem"], ["type", "button", 1, "image-variant", 3, "click", "ngClass", "cxFocus"], ["role", "img", 3, "container"], [1, "select-variant-container"], ["bindValue", "code", "bindLabel", "value", 3, "ngModelChange", "change", "clearable", "searchable", "items", "ngModel", "cxNgSelectA11y"]],
      template: function ProductMultiDimensionalSelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ProductMultiDimensionalSelectorComponent_ng_container_0_Template, 3, 1, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.product$));
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, MediaComponent, FocusDirective, NgSelectComponent, NgControlStatus, NgModel, NgSelectA11yDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalSelectorComponent, [{
    type: Component,
    args: [{
      selector: "cx-product-multi-dimensional-selector",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="product$ | async as product">
  <div class="variant-generic-selector">
    <ng-container *ngFor="let category of categories">
      <label>
        <span>
          {{ getCategoryName(category) }}
        </span>

        <div
          *ngIf="category.hasImages; else noImages"
          role="list"
          [attr.aria-label]="category.name"
          class="image-variant-container"
        >
          <div *ngFor="let option of category.variantOptions" role="listitem">
            <button
              type="button"
              class="image-variant"
              [ngClass]="{ active: option?.code === product.code }"
              [attr.aria-label]="onAriaLabel(option, category.name) | async"
              (click)="changeVariant(option.code)"
              [cxFocus]="{ key: option.code }"
            >
              <cx-media [container]="option.image" role="img" />
            </button>
          </div>
        </div>
      </label>

      <ng-template #noImages>
        <div class="select-variant-container">
          <ng-select
            [clearable]="false"
            [searchable]="false"
            [items]="category.variantOptions"
            [(ngModel)]="selectedProductCode"
            (change)="changeVariant($event.code)"
            [cxNgSelectA11y]="{
              ariaLabel:
                ('multiDimensionalSelector.variantThumbnailTitle'
                | cxTranslate
                  : {
                      category: category.name,
                    }),
            }"
            bindValue="code"
            bindLabel="value"
          />
        </div>
      </ng-template>
    </ng-container>
  </div>
</ng-container>
`
    }]
  }], null, null);
})();
var ProductMultiDimensionalSelectorGuard = class _ProductMultiDimensionalSelectorGuard {
  constructor() {
    this.productService = inject(ProductService);
    this.semanticPathService = inject(SemanticPathService);
    this.router = inject(Router);
  }
  canActivate(activatedRoute) {
    const productCode = activatedRoute.params?.productCode;
    if (!productCode) {
      return of(!!activatedRoute.queryParams?.cmsTicketId);
    }
    return this.productService.get(productCode, ProductScope.MULTI_DIMENSIONAL_AVAILABILITY).pipe(filter(isNotUndefined), switchMap((multiDimensionalProduct) => {
      const isNotPurchasableAndHasVariantOptions = !multiDimensionalProduct.purchasable && !!multiDimensionalProduct.variantOptions?.length;
      return isNotPurchasableAndHasVariantOptions ? this.findValidProductCodeAndReturnUrlTree(multiDimensionalProduct) : of(!!multiDimensionalProduct.purchasable);
    }));
  }
  /**
   * Finds a valid product code from variant options and returns a URL tree for redirection.
   *
   * @param {Product} product - The product with variant options.
   * @returns {Observable<GuardResult>} - An observable that resolves to a `UrlTree` for
   * redirection if a valid product code is found, or `false` if no valid code is available.
   *
   * @description
   * This method examines the product's variant options to find one with available stock. If a valid
   * variant is found, it fetches the corresponding product and generates a URL for redirection. If
   * no valid variant code is found, it resolves to `false`.
   */
  findValidProductCodeAndReturnUrlTree(product) {
    const validVariantCode = this.getValidVariantCode(product);
    const fallbackProductCode = this.getFallbackProductCode(product);
    const productCode = validVariantCode ?? fallbackProductCode;
    if (productCode) {
      return this.productService.get(productCode, ProductScope.LIST).pipe(filter(isNotUndefined), take(1), map((multiDimensionalProduct) => this.router.createUrlTree(this.semanticPathService.transform({
        cxRoute: "product",
        params: multiDimensionalProduct
      }))));
    }
    return of(false);
  }
  getValidVariantCode(product) {
    return product.variantOptions?.find((variant) => variant.stock && variant.stock.stockLevel)?.code;
  }
  getFallbackProductCode(product) {
    return product.variantOptions?.length ? product.variantOptions[0]?.code : "";
  }
  static {
    this.ɵfac = function ProductMultiDimensionalSelectorGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalSelectorGuard)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ProductMultiDimensionalSelectorGuard,
      factory: _ProductMultiDimensionalSelectorGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalSelectorGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ProductMultiDimensionalSelectorComponentModule = class _ProductMultiDimensionalSelectorComponentModule {
  static {
    this.ɵfac = function ProductMultiDimensionalSelectorComponentModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalSelectorComponentModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductMultiDimensionalSelectorComponentModule,
      declarations: [ProductMultiDimensionalSelectorComponent],
      imports: [CommonModule, RouterModule, UrlModule, MediaModule, KeyboardFocusModule, NgSelectModule, FormsModule, NgSelectA11yModule, I18nModule],
      exports: [ProductMultiDimensionalSelectorComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ProductMultiDimensionalSelectorComponent: {
            component: ProductMultiDimensionalSelectorComponent,
            guards: [ProductMultiDimensionalSelectorGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, UrlModule, MediaModule, KeyboardFocusModule, NgSelectModule, FormsModule, NgSelectA11yModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalSelectorComponentModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, MediaModule, KeyboardFocusModule, NgSelectModule, FormsModule, NgSelectA11yModule, I18nModule],
      declarations: [ProductMultiDimensionalSelectorComponent],
      exports: [ProductMultiDimensionalSelectorComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ProductMultiDimensionalSelectorComponent: {
            component: ProductMultiDimensionalSelectorComponent,
            guards: [ProductMultiDimensionalSelectorGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var ProductMultiDimensionalSelectorComponentsModule = class _ProductMultiDimensionalSelectorComponentsModule {
  static {
    this.ɵfac = function ProductMultiDimensionalSelectorComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalSelectorComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductMultiDimensionalSelectorComponentsModule,
      imports: [ProductMultiDimensionalSelectorComponentModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ProductMultiDimensionalSelectorComponentModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalSelectorComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [ProductMultiDimensionalSelectorComponentModule]
    }]
  }], null, null);
})();
var elements = "variantOption(code,variantOptionQualifiers(image(url,format))),variantValueCategory(name),parentVariantCategory(hasImage,name)";
var variantMatrix = `variantMatrix(${elements},elements(${elements},elements(${elements},elements)))`;
var defaultOccProductMultiDimensionalSelectorConfig = {
  backend: {
    occ: {
      endpoints: {
        product: {
          multi_dimensional: "products/${productCode}?fields=multidimensional,categories," + variantMatrix,
          multi_dimensional_availability: "products/${productCode}?fields=variantOptions(stock(stockLevel),code),purchasable"
        }
      }
    }
  }
};
var ProductMultiDimensionalSelectorOccModule = class _ProductMultiDimensionalSelectorOccModule {
  static {
    this.ɵfac = function ProductMultiDimensionalSelectorOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalSelectorOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductMultiDimensionalSelectorOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccProductMultiDimensionalSelectorConfig)],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalSelectorOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccProductMultiDimensionalSelectorConfig)]
    }]
  }], null, null);
})();
var ProductMultiDimensionalSelectorModule = class _ProductMultiDimensionalSelectorModule {
  static {
    this.ɵfac = function ProductMultiDimensionalSelectorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProductMultiDimensionalSelectorModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ProductMultiDimensionalSelectorModule,
      imports: [ProductMultiDimensionalSelectorOccModule, ProductMultiDimensionalSelectorComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ProductMultiDimensionalSelectorOccModule, ProductMultiDimensionalSelectorComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMultiDimensionalSelectorModule, [{
    type: NgModule,
    args: [{
      imports: [ProductMultiDimensionalSelectorOccModule, ProductMultiDimensionalSelectorComponentsModule]
    }]
  }], null, null);
})();
export {
  ProductMultiDimensionalSelectorModule
};
//# sourceMappingURL=@spartacus_product-multi-dimensional_selector.js.map
