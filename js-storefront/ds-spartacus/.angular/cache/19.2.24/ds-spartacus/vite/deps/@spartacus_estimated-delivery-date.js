import {
  OrderHistoryFacade
} from "./chunk-UIW5AQFA.js";
import {
  CartItemContext,
  CartOutlets
} from "./chunk-KEAKWHYV.js";
import {
  IconModule,
  OutletPosition,
  provideOutlet
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  CxDatePipe,
  I18nModule,
  TranslatePipe,
  TranslationService,
  UrlModule,
  provideDefaultConfig,
  useFeatureStyles
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
  NgModule,
  Optional,
  inject,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  EMPTY,
  map
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/estimated-delivery-date/fesm2022/spartacus-estimated-delivery-date.mjs
var _c0 = (a0, a1) => ({
  quantity: a0,
  date: a1
});
function EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵpipe(3, "cxDate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const arrivalSlot_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "estimatedDeliveryDate.ETA"), " ", ɵɵpipeBind2(3, 4, arrivalSlot_r1 == null ? null : arrivalSlot_r1.at, "M/d/yyyy"), " ");
  }
}
function EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_2_ng_container_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const arrivalSlot_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "estimatedDeliveryDate.quantity"), " ", arrivalSlot_r1 == null ? null : arrivalSlot_r1.quantity, " ");
  }
}
function EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_2_ng_container_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const arrivalSlot_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "estimatedDeliveryDate.quantityFull"), " ", arrivalSlot_r1 == null ? null : arrivalSlot_r1.quantity, " ");
  }
}
function EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_2_ng_container_5_div_1_Template, 3, 4, "div", 8)(2, EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_2_ng_container_5_div_2_Template, 3, 4, "div", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
  }
}
function EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "div", 5);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(4, EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_2_div_4_Template, 4, 7, "div", 6)(5, EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_2_ng_container_5_Template, 3, 2, "ng-container", 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const arrivalSlot_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("aria-describedby", ctx_r2.getArrivalSlotInfoId(i_r2));
    ɵɵadvance();
    ɵɵproperty("id", ctx_r2.getArrivalSlotInfoId(i_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 5, "estimatedDeliveryDate.estimatedDeliveryDateEntryInfo", ɵɵpureFunction2(8, _c0, arrivalSlot_r1.quantity, ctx_r2.getLongDate(arrivalSlot_r1.at))), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", arrivalSlot_r1 == null ? null : arrivalSlot_r1.quantity);
    ɵɵadvance();
    ɵɵproperty("ngIf", arrivalSlot_r1 == null ? null : arrivalSlot_r1.quantity);
  }
}
function EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵpipe(3, "cxDate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const orderEntry_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "estimatedDeliveryDate.ETA"), " ", ɵɵpipeBind2(3, 4, orderEntry_r4.arrivalSlots == null ? null : (tmp_4_0 = orderEntry_r4.arrivalSlots.at(0)) == null ? null : tmp_4_0.at, "M/d/yyyy"), " ");
  }
}
function EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵtemplate(2, EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_2_Template, 6, 11, "div", 2)(3, EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_div_3_Template, 4, 7, "div", 3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const orderEntry_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", orderEntry_r4.arrivalSlots);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(orderEntry_r4.arrivalSlots == null ? null : (tmp_4_0 = orderEntry_r4.arrivalSlots.at(0)) == null ? null : tmp_4_0.quantity));
  }
}
function EstimatedDeliveryDateComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, EstimatedDeliveryDateComponent_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r4 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hasOrderEntryArrivalSlots(orderEntry_r4));
  }
}
function EstimatedDeliveryDateComponent_ng_container_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 10);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵpipe(4, "cxDate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const consignments_r5 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(3, 2, "estimatedDeliveryDate.ETA"), " ", ɵɵpipeBind2(4, 4, consignments_r5.arrivalSlot == null ? null : consignments_r5.arrivalSlot.at, "M/d/yyyy"), " ");
  }
}
function EstimatedDeliveryDateComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, EstimatedDeliveryDateComponent_ng_container_2_ng_container_1_ng_container_1_Template, 5, 7, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r6 = ctx.ngIf;
    const consignments_r5 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hasConsignmentEntryArrivalSlot(consignments_r5) && !ctx_r2.hasOrderEntryArrivalSlots(orderEntry_r6));
  }
}
function EstimatedDeliveryDateComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, EstimatedDeliveryDateComponent_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 0);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.orderEntry$));
  }
}
var EstimatedDeliveryDateComponent = class _EstimatedDeliveryDateComponent {
  constructor() {
    this.cartItemContext = inject(CartItemContext);
    this.orderHistoryFacade = inject(OrderHistoryFacade);
    this.translationService = inject(TranslationService);
    this.datePipe = inject(CxDatePipe);
    this.orderEntry$ = this.cartItemContext?.item$ ?? EMPTY;
    this.consignments$ = this.orderHistoryFacade.getOrderDetails().pipe(map((order) => order?.consignments ?? [])).pipe(switchMap((consignments) => consignments));
    useFeatureStyles("a11yQTY2Quantity");
  }
  /**
   * Verifies whether the arrival slots infos (from Order Entry) have any entries.
   * Only in this case we want to display the arrival slot summary
   *
   * @param {OrderEntry} item - Cart item
   * @returns {boolean} - whether the arrival slot information is present for the order
   */
  hasOrderEntryArrivalSlots(item) {
    const arrivalSlots = item.arrivalSlots;
    return arrivalSlots != null && arrivalSlots.length > 0;
  }
  /**
   * Verifies whether the arrival slot infos (from Consignment) have any entries.
   * Only in this case we want to display the arrival slot summary
   *
   * @param {Consignment} item - Consignment item
   * @returns {boolean} - whether the arrival slot information is present for the order
   */
  hasConsignmentEntryArrivalSlot(item) {
    const arrivalSlot = item.arrivalSlot;
    return arrivalSlot != null && arrivalSlot.at != null;
  }
  getArrivalSlotInfoId(index) {
    return "cx-estimated-delivery-date-info-" + index.toString();
  }
  getLongDate(date) {
    if (!date) {
      return "";
    }
    return this.datePipe.transform(date);
  }
  static {
    this.ɵfac = function EstimatedDeliveryDateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EstimatedDeliveryDateComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _EstimatedDeliveryDateComponent,
      selectors: [["cx-estimated-delivery-date"]],
      standalone: false,
      features: [ɵɵProvidersFeature([CxDatePipe])],
      decls: 4,
      vars: 6,
      consts: [[4, "ngIf"], [1, "cx-code"], ["class", "cx-estimated-delivery-date-info", 4, "ngFor", "ngForOf"], ["class", "cx-label", "aria-hidden", "true", 4, "ngIf"], [1, "cx-estimated-delivery-date-info"], [1, "cx-visually-hidden", 3, "id"], ["class", "cx-value", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "cx-value"], ["class", "cx-value", "aria-hidden", "true", 4, "cxFeature"], ["aria-hidden", "true", 1, "cx-label"], ["aria-hidden", "true", 1, "cx-code"]],
      template: function EstimatedDeliveryDateComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, EstimatedDeliveryDateComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, EstimatedDeliveryDateComponent_ng_container_2_Template, 3, 3, "ng-container", 0);
          ɵɵpipe(3, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.orderEntry$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx.consignments$));
        }
      },
      dependencies: [NgForOf, NgIf, AsyncPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstimatedDeliveryDateComponent, [{
    type: Component,
    args: [{
      selector: "cx-estimated-delivery-date",
      providers: [CxDatePipe],
      standalone: false,
      template: `<ng-container *ngIf="orderEntry$ | async as orderEntry">
  <ng-container *ngIf="hasOrderEntryArrivalSlots(orderEntry)">
    <div class="cx-code">
      <div
        *ngFor="let arrivalSlot of orderEntry.arrivalSlots; let i = index"
        class="cx-estimated-delivery-date-info"
        [attr.aria-describedby]="getArrivalSlotInfoId(i)"
      >
        <div [id]="getArrivalSlotInfoId(i)" class="cx-visually-hidden">
          {{
            'estimatedDeliveryDate.estimatedDeliveryDateEntryInfo'
              | cxTranslate
                : {
                    quantity: arrivalSlot.quantity,
                    date: getLongDate(arrivalSlot.at),
                  }
          }}
        </div>
        <div class="cx-value" aria-hidden="true" *ngIf="arrivalSlot?.quantity">
          {{ 'estimatedDeliveryDate.ETA' | cxTranslate }}
          {{ arrivalSlot?.at | cxDate: 'M/d/yyyy' }}
        </div>
        <ng-container *ngIf="arrivalSlot?.quantity">
          <div
            *cxFeature="'a11yQTY2Quantity'"
            class="cx-value"
            aria-hidden="true"
          >
            {{ 'estimatedDeliveryDate.quantity' | cxTranslate }}
            {{ arrivalSlot?.quantity }}
          </div>
          <div
            *cxFeature="'a11yQTY2Quantity'"
            class="cx-value"
            aria-hidden="true"
          >
            {{ 'estimatedDeliveryDate.quantityFull' | cxTranslate }}
            {{ arrivalSlot?.quantity }}
          </div>
        </ng-container>
      </div>
      <div
        class="cx-label"
        aria-hidden="true"
        *ngIf="!orderEntry.arrivalSlots?.at(0)?.quantity"
      >
        {{ 'estimatedDeliveryDate.ETA' | cxTranslate }}
        {{ orderEntry.arrivalSlots?.at(0)?.at | cxDate: 'M/d/yyyy' }}
      </div>
    </div>
  </ng-container>
</ng-container>

<ng-container *ngIf="consignments$ | async as consignments">
  <ng-container *ngIf="orderEntry$ | async as orderEntry">
    <ng-container
      *ngIf="
        hasConsignmentEntryArrivalSlot(consignments) &&
        !hasOrderEntryArrivalSlots(orderEntry)
      "
    >
      <div class="cx-code" aria-hidden="true">
        {{ 'estimatedDeliveryDate.ETA' | cxTranslate }}
        {{ consignments.arrivalSlot?.at | cxDate: 'M/d/yyyy' }}
      </div>
    </ng-container>
  </ng-container>
</ng-container>
`
    }]
  }], () => [], {
    cartItemContext: [{
      type: Optional
    }]
  });
})();
var defaultEddOccEndpoints = {
  carts: "users/${userId}/carts?fields=carts(DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),arrivalSlots,basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user,saveTime,name,description)",
  cart: "users/${userId}/carts/${cartId}?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),arrivalSlots,basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user,saveTime,name,description",
  createCart: "users/${userId}/carts?fields=DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),arrivalSlots,basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),user"
};
var defaultOccCartWithEddConfig = {
  backend: {
    occ: {
      endpoints: __spreadValues({}, defaultEddOccEndpoints)
    }
  }
};
var ShowEstimatedDeliveryDateModule = class _ShowEstimatedDeliveryDateModule {
  static {
    this.ɵfac = function ShowEstimatedDeliveryDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShowEstimatedDeliveryDateModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ShowEstimatedDeliveryDateModule,
      declarations: [EstimatedDeliveryDateComponent],
      imports: [CommonModule, UrlModule, I18nModule, IconModule],
      exports: [EstimatedDeliveryDateComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultOccCartWithEddConfig), provideOutlet({
        id: CartOutlets.ITEM_DETAILS,
        position: OutletPosition.AFTER,
        component: EstimatedDeliveryDateComponent
      })],
      imports: [CommonModule, UrlModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowEstimatedDeliveryDateModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, IconModule],
      declarations: [EstimatedDeliveryDateComponent],
      exports: [EstimatedDeliveryDateComponent],
      providers: [provideDefaultConfig(defaultOccCartWithEddConfig), provideOutlet({
        id: CartOutlets.ITEM_DETAILS,
        position: OutletPosition.AFTER,
        component: EstimatedDeliveryDateComponent
      })]
    }]
  }], null, null);
})();
var EstimatedDeliveryDateModule = class _EstimatedDeliveryDateModule {
  static {
    this.ɵfac = function EstimatedDeliveryDateModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EstimatedDeliveryDateModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _EstimatedDeliveryDateModule,
      imports: [ShowEstimatedDeliveryDateModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ShowEstimatedDeliveryDateModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EstimatedDeliveryDateModule, [{
    type: NgModule,
    args: [{
      imports: [ShowEstimatedDeliveryDateModule]
    }]
  }], null, null);
})();
export {
  EstimatedDeliveryDateComponent,
  EstimatedDeliveryDateModule,
  ShowEstimatedDeliveryDateModule
};
//# sourceMappingURL=@spartacus_estimated-delivery-date.js.map
