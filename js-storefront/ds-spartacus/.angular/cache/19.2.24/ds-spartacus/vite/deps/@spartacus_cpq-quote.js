import {
  CartItemListComponentService
} from "./chunk-ZPMY6JFV.js";
import "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import {
  CartItemContext,
  CartOutlets
} from "./chunk-KEAKWHYV.js";
import {
  IconModule,
  OutletContextData,
  OutletPosition,
  provideOutlet
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  I18nModule,
  TranslatePipe,
  TranslationService,
  UrlModule
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
  CommonModule,
  DecimalPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  Component,
  Inject,
  Injectable,
  Input,
  NgModule,
  Optional,
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
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  BehaviorSubject
} from "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cpq-quote/fesm2022/spartacus-cpq-quote.mjs
function CpqQuoteHeadingComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 1);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r0.discountLabel, " ");
  }
}
var _c0 = (a0) => ({
  "strike-through": a0
});
function CpqQuoteDiscountComponent_td_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 5);
    ɵɵtext(2);
    ɵɵpipe(3, "number");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const discount_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", discount_r1.isoCode, "", ɵɵpipeBind3(3, 2, ctx_r1.getDiscountedPrice((tmp_4_0 = ctx_r1.quoteDiscountData.basePrice == null ? null : ctx_r1.quoteDiscountData.basePrice.value) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0, discount_r1.appliedValue, ctx_r1.quoteDiscountData.quantity), "1.2-2", "en-US"), " ");
  }
}
function CpqQuoteDiscountComponent_td_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CpqQuoteDiscountComponent_td_0_ng_container_1_ng_container_1_Template, 4, 6, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.quoteDiscountData.cpqDiscounts);
  }
}
function CpqQuoteDiscountComponent_td_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 1);
    ɵɵtemplate(1, CpqQuoteDiscountComponent_td_0_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementStart(2, "span", 3);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.quoteDiscountData && (ctx_r1.quoteDiscountData.basePrice == null ? null : ctx_r1.quoteDiscountData.basePrice.value) !== void 0 && ctx_r1.quoteDiscountData.cpqDiscounts && ctx_r1.quoteDiscountData.cpqDiscounts.length > 0);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c0, ctx_r1.quoteDiscountData && ctx_r1.quoteDiscountData.cpqDiscounts && ctx_r1.quoteDiscountData.cpqDiscounts.length > 0));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.quoteDiscountData == null ? null : ctx_r1.quoteDiscountData.basePrice == null ? null : ctx_r1.quoteDiscountData.basePrice.formattedValue, " ");
  }
}
var _c1 = (a0) => ({
  discount: a0
});
function CpqQuoteOfferComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const discount_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 1, "discountCaption", ɵɵpureFunction1(4, _c1, ctx_r1.formatDiscount(ctx_r1.getDiscountPercentage((tmp_3_0 = ctx_r1.quoteDiscountData.basePrice == null ? null : ctx_r1.quoteDiscountData.basePrice.value) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : 0, discount_r1.appliedValue, ctx_r1.quoteDiscountData.quantity)))), " ");
  }
}
function CpqQuoteOfferComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 1);
    ɵɵtemplate(1, CpqQuoteOfferComponent_ng_container_0_ng_container_1_Template, 4, 6, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.quoteDiscountData.cpqDiscounts);
  }
}
var CpqQuoteService = class _CpqQuoteService {
  constructor() {
    this.isFlagSubject = new BehaviorSubject(true);
    this.isFlag$ = this.isFlagSubject.asObservable();
  }
  setFlag(value) {
    this.isFlagSubject.next(value);
  }
  getFlag$() {
    return this.isFlagSubject.getValue();
  }
  static {
    this.ɵfac = function CpqQuoteService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqQuoteService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CpqQuoteService,
      factory: _CpqQuoteService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqQuoteService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CpqQuoteHeadingComponent = class _CpqQuoteHeadingComponent {
  constructor(outlet, translationService, cpqQuoteService) {
    this.outlet = outlet;
    this.translationService = translationService;
    this.cpqQuoteService = cpqQuoteService;
    this.subscription = new Subscription();
    this.dataAvailable = false;
  }
  ngOnInit() {
    this.subscription.add(this.translationService.translate("cpqQuoteHeading").subscribe((translation) => {
      this.discountLabel = translation;
    }));
    if (this.outlet?.context$) {
      this.subscription.add(this.outlet.context$.subscribe((context) => {
        this.datacheck = context;
        const hasDiscounts = this.datacheck.some((item) => item.cpqDiscounts && item.cpqDiscounts.length > 0);
        this.cpqQuoteService.setFlag(!hasDiscounts);
        if (context && context.length > 0) {
          this.dataAvailable = context.some((item) => item.cpqDiscounts && item.cpqDiscounts.length > 0);
        } else {
          this.dataAvailable = false;
        }
      }));
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function CpqQuoteHeadingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqQuoteHeadingComponent)(ɵɵdirectiveInject(OutletContextData, 8), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(CpqQuoteService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CpqQuoteHeadingComponent,
      selectors: [["cx-cpq-quote-heading"]],
      inputs: {
        quoteDiscountData: "quoteDiscountData"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["role", "columnheader", 1, "cx-item-list-discount"]],
      template: function CpqQuoteHeadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CpqQuoteHeadingComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.dataAvailable);
        }
      },
      dependencies: [NgIf],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqQuoteHeadingComponent, [{
    type: Component,
    args: [{
      selector: "cx-cpq-quote-heading",
      standalone: false,
      template: '<ng-container *ngIf="dataAvailable">\n  <th role="columnheader" class="cx-item-list-discount">\n    {{ discountLabel }}\n  </th></ng-container\n>\n'
    }]
  }], () => [{
    type: OutletContextData,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [OutletContextData]
    }]
  }, {
    type: TranslationService
  }, {
    type: CpqQuoteService
  }], {
    quoteDiscountData: [{
      type: Input
    }]
  });
})();
var CpqQuoteDiscountComponent = class _CpqQuoteDiscountComponent {
  constructor(cartItemContext, cpqQuoteService) {
    this.cartItemContext = cartItemContext;
    this.cpqQuoteService = cpqQuoteService;
    this.orderEntry$ = this.cartItemContext?.item$;
    this.isFlagQuote = true;
    this.subscription = this.cpqQuoteService.isFlag$.subscribe((isFlag) => {
      this.isFlagQuote = isFlag;
    });
  }
  ngOnInit() {
    if (this.cartItemContext) {
      this.subscription = this.orderEntry$.subscribe((data) => {
        this.quoteDiscountData = data;
      });
    } else {
      this.quoteDiscountData = null;
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  getDiscountedPrice(basePrice, appliedDiscount, quantity) {
    if (basePrice > 0 && appliedDiscount !== void 0 && quantity !== void 0 && quantity > 0) {
      const totalBasePrice = basePrice * quantity;
      const discountedPrice = totalBasePrice - appliedDiscount;
      return discountedPrice / quantity;
    }
    return void 0;
  }
  static {
    this.ɵfac = function CpqQuoteDiscountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqQuoteDiscountComponent)(ɵɵdirectiveInject(CartItemContext, 8), ɵɵdirectiveInject(CpqQuoteService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CpqQuoteDiscountComponent,
      selectors: [["cx-cpq-quote"]],
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["class", "cx-center", 4, "ngIf"], [1, "cx-center"], [4, "ngIf"], [1, "cx-formatted-value", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["role", "cell", 1, "cx-total", "cx-discount"]],
      template: function CpqQuoteDiscountComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CpqQuoteDiscountComponent_td_0_Template, 4, 5, "td", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", !ctx.isFlagQuote);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, DecimalPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqQuoteDiscountComponent, [{
    type: Component,
    args: [{
      selector: "cx-cpq-quote",
      standalone: false,
      template: `<td class="cx-center" *ngIf="!isFlagQuote">
  <ng-container
    *ngIf="
      quoteDiscountData &&
      quoteDiscountData.basePrice?.value !== undefined &&
      quoteDiscountData.cpqDiscounts &&
      quoteDiscountData.cpqDiscounts.length > 0
    "
  >
    <ng-container *ngFor="let discount of quoteDiscountData.cpqDiscounts">
      <span role="cell" class="cx-total cx-discount">
        {{ discount.isoCode
        }}{{
          getDiscountedPrice(
            quoteDiscountData.basePrice?.value ?? 0,
            discount.appliedValue,
            quoteDiscountData.quantity
          ) | number: '1.2-2' : 'en-US'
        }}
      </span>
    </ng-container>
  </ng-container>
  <!-- Iterate over quoteDiscountData.basePrice -->
  <span
    class="cx-formatted-value"
    [ngClass]="{
      'strike-through':
        quoteDiscountData &&
        quoteDiscountData.cpqDiscounts &&
        quoteDiscountData.cpqDiscounts.length > 0,
    }"
  >
    {{ quoteDiscountData?.basePrice?.formattedValue }}
  </span>
</td>
`
    }]
  }], () => [{
    type: CartItemContext,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CartItemContext]
    }]
  }, {
    type: CpqQuoteService
  }], null);
})();
var CpqQuoteOfferComponent = class _CpqQuoteOfferComponent {
  constructor(cartItemContext) {
    this.cartItemContext = cartItemContext;
    this.orderEntry$ = this.cartItemContext?.item$;
  }
  ngOnInit() {
    if (this.cartItemContext) {
      this.subscription = this.orderEntry$.subscribe((data) => {
        this.quoteDiscountData = data;
      });
    } else {
      this.quoteDiscountData = null;
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  getDiscountPercentage(basePrice, appliedDiscount, quantity) {
    if (basePrice > 0 && appliedDiscount !== void 0 && quantity !== void 0 && quantity > 0) {
      const totalBasePrice = basePrice * quantity;
      return appliedDiscount / totalBasePrice * 100;
    }
    return void 0;
  }
  formatDiscount(value) {
    if (value === void 0) {
      return "";
    }
    return Number.isInteger(value) ? value.toFixed(0) : value.toFixed(2);
  }
  static {
    this.ɵfac = function CpqQuoteOfferComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqQuoteOfferComponent)(ɵɵdirectiveInject(CartItemContext, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CpqQuoteOfferComponent,
      selectors: [["cx-cpq-quote-offer"]],
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["class", "cx-cpq-quote-discount", 4, "ngIf"], [1, "cx-cpq-quote-discount"], [4, "ngFor", "ngForOf"], [1, "cx-offer"]],
      template: function CpqQuoteOfferComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CpqQuoteOfferComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.quoteDiscountData && (ctx.quoteDiscountData.basePrice == null ? null : ctx.quoteDiscountData.basePrice.value) !== void 0 && ctx.quoteDiscountData.cpqDiscounts && ctx.quoteDiscountData.cpqDiscounts.length > 0);
        }
      },
      dependencies: [NgForOf, NgIf, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqQuoteOfferComponent, [{
    type: Component,
    args: [{
      selector: "cx-cpq-quote-offer",
      standalone: false,
      template: `<ng-container
  *ngIf="
    quoteDiscountData &&
    quoteDiscountData.basePrice?.value !== undefined &&
    quoteDiscountData.cpqDiscounts &&
    quoteDiscountData.cpqDiscounts.length > 0
  "
  class="cx-cpq-quote-discount"
>
  <ng-container *ngFor="let discount of quoteDiscountData.cpqDiscounts">
    <div class="cx-offer">
      {{
        'discountCaption'
          | cxTranslate
            : {
                discount: formatDiscount(
                  getDiscountPercentage(
                    quoteDiscountData.basePrice?.value ?? 0,
                    discount.appliedValue,
                    quoteDiscountData.quantity
                  )
                ),
              }
      }}
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: CartItemContext,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CartItemContext]
    }]
  }], null);
})();
var CpqQuoteSharedService = class _CpqQuoteSharedService extends CartItemListComponentService {
  constructor(flagService) {
    super();
    this.flagService = flagService;
  }
  showBasePriceWithDiscount() {
    return this.flagService.getFlag$();
  }
  static {
    this.ɵfac = function CpqQuoteSharedService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqQuoteSharedService)(ɵɵinject(CpqQuoteService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _CpqQuoteSharedService,
      factory: _CpqQuoteSharedService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqQuoteSharedService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: CpqQuoteService
  }], null);
})();
var CpqDiscountModule = class _CpqDiscountModule {
  static {
    this.ɵfac = function CpqDiscountModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqDiscountModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CpqDiscountModule,
      declarations: [CpqQuoteHeadingComponent, CpqQuoteDiscountComponent, CpqQuoteOfferComponent],
      imports: [CommonModule, UrlModule, I18nModule, IconModule],
      exports: [CpqQuoteHeadingComponent, CpqQuoteDiscountComponent, CpqQuoteOfferComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [CpqQuoteService, {
        provide: CartItemListComponentService,
        useClass: CpqQuoteSharedService
      }, provideOutlet({
        id: CartOutlets.CPQ_QUOTE_MODULE,
        position: OutletPosition.AFTER,
        component: CpqQuoteDiscountComponent
      }), provideOutlet({
        id: CartOutlets.CPQ_QUOTE_HEADING,
        position: OutletPosition.AFTER,
        component: CpqQuoteHeadingComponent
      }), provideOutlet({
        id: CartOutlets.CPQ_QUOTE,
        position: OutletPosition.AFTER,
        component: CpqQuoteOfferComponent
      })],
      imports: [CommonModule, UrlModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqDiscountModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, IconModule],
      declarations: [CpqQuoteHeadingComponent, CpqQuoteDiscountComponent, CpqQuoteOfferComponent],
      exports: [CpqQuoteHeadingComponent, CpqQuoteDiscountComponent, CpqQuoteOfferComponent],
      providers: [CpqQuoteService, {
        provide: CartItemListComponentService,
        useClass: CpqQuoteSharedService
      }, provideOutlet({
        id: CartOutlets.CPQ_QUOTE_MODULE,
        position: OutletPosition.AFTER,
        component: CpqQuoteDiscountComponent
      }), provideOutlet({
        id: CartOutlets.CPQ_QUOTE_HEADING,
        position: OutletPosition.AFTER,
        component: CpqQuoteHeadingComponent
      }), provideOutlet({
        id: CartOutlets.CPQ_QUOTE,
        position: OutletPosition.AFTER,
        component: CpqQuoteOfferComponent
      })]
    }]
  }], null, null);
})();
var CpqQuoteModule = class _CpqQuoteModule {
  static {
    this.ɵfac = function CpqQuoteModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CpqQuoteModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CpqQuoteModule,
      imports: [CpqDiscountModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CpqDiscountModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CpqQuoteModule, [{
    type: NgModule,
    args: [{
      imports: [CpqDiscountModule]
    }]
  }], null, null);
})();
export {
  CpqDiscountModule,
  CpqQuoteDiscountComponent,
  CpqQuoteHeadingComponent,
  CpqQuoteModule,
  CpqQuoteOfferComponent,
  CpqQuoteService,
  CpqQuoteSharedService
};
//# sourceMappingURL=@spartacus_cpq-quote.js.map
