import {
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  ConfigModule,
  I18nModule,
  ProductScope,
  ProductService,
  RoutingService,
  TranslatePipe,
  provideDefaultConfig
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
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  Component,
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  of
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/product/fesm2022/spartacus-product-bulk-pricing-core.mjs
ProductScope["BULK_PRICES"] = "bulkPrices";
var BulkPricingService = class _BulkPricingService {
  constructor(productService) {
    this.productService = productService;
    this.PRODUCT_SCOPE = ProductScope.BULK_PRICES;
  }
  getBulkPrices(productCode) {
    return this.productService.get(productCode, this.PRODUCT_SCOPE).pipe(switchMap((productPriceScope) => {
      return of(this.convert(productPriceScope));
    }));
  }
  convert(productPriceScope) {
    let bulkPrices = [];
    if (productPriceScope) {
      const basePrice = productPriceScope.price?.value;
      const volumePrices = productPriceScope.volumePrices;
      bulkPrices = volumePrices?.map((volumePrice) => this.parsePrice(volumePrice, basePrice));
    }
    return bulkPrices;
  }
  parsePrice(priceTier, basePrice) {
    const bulkPriceTemplate = {
      currencyIso: priceTier.currencyIso,
      formattedValue: priceTier.formattedValue,
      maxQuantity: priceTier.maxQuantity,
      minQuantity: priceTier.minQuantity,
      priceType: priceTier.priceType,
      value: priceTier.value,
      formattedDiscount: "",
      discount: 0
    };
    return this.calculateDiscount(bulkPriceTemplate, basePrice);
  }
  calculateDiscount(bulkPriceTemplate, basePrice) {
    const bulkPrice = Object.assign({}, bulkPriceTemplate);
    const tierPrice = bulkPriceTemplate.value;
    if (tierPrice && basePrice) {
      const discount = Math.round(100 - tierPrice / basePrice * 100);
      const formatted = discount === 0 ? `${discount}%` : `-${discount}%`;
      bulkPrice.formattedDiscount = formatted;
      bulkPrice.discount = discount;
    }
    return bulkPrice;
  }
  static {
    this.ɵfac = function BulkPricingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkPricingService)(ɵɵinject(ProductService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _BulkPricingService,
      factory: _BulkPricingService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkPricingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductService
  }], null);
})();

// node_modules/@spartacus/product/fesm2022/spartacus-product-bulk-pricing.mjs
function BulkPricingTableComponent_ng_container_0_div_1_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "td");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "td");
    ɵɵtext(6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const tier_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r1.formatQuantity(tier_r1));
    ɵɵadvance(2);
    ɵɵtextInterpolate(tier_r1.formattedValue);
    ɵɵadvance(2);
    ɵɵtextInterpolate(tier_r1.formattedDiscount);
  }
}
function BulkPricingTableComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "table", 3)(2, "thead", 4)(3, "tr")(4, "th", 5);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "th", 5);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "th", 5);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(13, "tbody");
    ɵɵtemplate(14, BulkPricingTableComponent_ng_container_0_div_1_tr_14_Template, 7, 3, "tr", 6);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const priceTiers_r3 = ɵɵnextContext().ngIf;
    ɵɵadvance(5);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 4, "bulkPricingTable.quantity"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(9, 6, "bulkPricingTable.price"));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 8, "bulkPricingTable.discount"));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", priceTiers_r3);
  }
}
function BulkPricingTableComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BulkPricingTableComponent_ng_container_0_div_1_Template, 15, 10, "div", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const priceTiers_r3 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", priceTiers_r3.length > 0);
  }
}
var BulkPricingTableComponent = class _BulkPricingTableComponent {
  constructor(routingService, bulkPricingService) {
    this.routingService = routingService;
    this.bulkPricingService = bulkPricingService;
    this.PRODUCT_KEY = "productCode";
  }
  ngOnInit() {
    this.priceTiers$ = this.getPrices();
  }
  formatQuantity(tier) {
    let formattedQuantityRange = "";
    if (!tier.maxQuantity) {
      formattedQuantityRange = tier.minQuantity + "+";
    } else {
      formattedQuantityRange = tier.minQuantity + " - " + tier.maxQuantity;
    }
    return formattedQuantityRange;
  }
  getPrices() {
    return this.routingService.getRouterState().pipe(switchMap((state) => {
      const productCode = state.state.params[this.PRODUCT_KEY];
      return this.bulkPricingService.getBulkPrices(productCode);
    }));
  }
  static {
    this.ɵfac = function BulkPricingTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkPricingTableComponent)(ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(BulkPricingService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _BulkPricingTableComponent,
      selectors: [["cx-bulk-pricing-table"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "cx-bulk-pricing-table-container", 4, "ngIf"], [1, "cx-bulk-pricing-table-container"], [1, "table"], [1, "thead-light"], ["scope", "col"], [4, "ngFor", "ngForOf"]],
      template: function BulkPricingTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, BulkPricingTableComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.priceTiers$));
        }
      },
      dependencies: [NgForOf, NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkPricingTableComponent, [{
    type: Component,
    args: [{
      selector: "cx-bulk-pricing-table",
      standalone: false,
      template: `<ng-container *ngIf="priceTiers$ | async as priceTiers">
  <div class="cx-bulk-pricing-table-container" *ngIf="priceTiers.length > 0">
    <table class="table">
      <thead class="thead-light">
        <tr>
          <th scope="col">{{ 'bulkPricingTable.quantity' | cxTranslate }}</th>
          <th scope="col">{{ 'bulkPricingTable.price' | cxTranslate }}</th>
          <th scope="col">{{ 'bulkPricingTable.discount' | cxTranslate }}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let tier of priceTiers">
          <td>{{ formatQuantity(tier) }}</td>
          <td>{{ tier.formattedValue }}</td>
          <td>{{ tier.formattedDiscount }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: BulkPricingService
  }], null);
})();
var BulkPricingTableModule = class _BulkPricingTableModule {
  static {
    this.ɵfac = function BulkPricingTableModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkPricingTableModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BulkPricingTableModule,
      declarations: [BulkPricingTableComponent],
      imports: [CommonModule, I18nModule, SpinnerModule, ConfigModule],
      exports: [BulkPricingTableComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, SpinnerModule, ConfigModule.withConfig({
        cmsComponents: {
          BulkPricingTableComponent: {
            component: BulkPricingTableComponent
          }
        }
      })]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkPricingTableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, SpinnerModule, ConfigModule.withConfig({
        cmsComponents: {
          BulkPricingTableComponent: {
            component: BulkPricingTableComponent
          }
        }
      })],
      declarations: [BulkPricingTableComponent],
      exports: [BulkPricingTableComponent]
    }]
  }], null, null);
})();
var defaultOccBulkPricingConfig = {
  backend: {
    occ: {
      endpoints: {
        product: {
          bulkPrices: "orgProducts/${productCode}?fields=price(DEFAULT),volumePrices(FULL)"
        }
      }
    }
  }
};
var BulkPricingOccModule = class _BulkPricingOccModule {
  static {
    this.ɵfac = function BulkPricingOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkPricingOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BulkPricingOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccBulkPricingConfig)],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkPricingOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfig(defaultOccBulkPricingConfig)]
    }]
  }], null, null);
})();
var BulkPricingModule = class _BulkPricingModule {
  static {
    this.ɵfac = function BulkPricingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BulkPricingModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _BulkPricingModule,
      imports: [BulkPricingOccModule, BulkPricingTableModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [BulkPricingOccModule, BulkPricingTableModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BulkPricingModule, [{
    type: NgModule,
    args: [{
      imports: [BulkPricingOccModule, BulkPricingTableModule]
    }]
  }], null, null);
})();
export {
  BulkPricingModule
};
//# sourceMappingURL=@spartacus_product_bulk-pricing.js.map
