import {
  RequestedDeliveryDateComponentsModule
} from "./chunk-AKUGUBF6.js";
import {
  PDFInvoicesComponentsModule
} from "./chunk-22AER76T.js";
import "./chunk-DM7JC3BZ.js";
import "./chunk-X6DUCLWC.js";
import "./chunk-UIW5AQFA.js";
import "./chunk-OOT34BER.js";
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
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction2,
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

// node_modules/@spartacus/s4om/fesm2022/spartacus-s4om-root.mjs
var _c0 = (a0, a1) => ({
  quantity: a0,
  date: a1
});
function ScheduleLinesComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 4);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5);
    ɵɵtext(5);
    ɵɵpipe(6, "cxDate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 6);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 5);
    ɵɵtext(11);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const scheduleLine_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵattribute("aria-describedby", ctx_r2.getScheduleLineInfoId(i_r2));
    ɵɵadvance();
    ɵɵpropertyInterpolate("id", ctx_r2.getScheduleLineInfoId(i_r2));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 6, "s4omScheduleLines.a11y.scheduleLineEntryInfo", ɵɵpureFunction2(14, _c0, scheduleLine_r1.confirmedQuantity, ctx_r2.getLongDate(scheduleLine_r1.confirmedAt))), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(6, 9, scheduleLine_r1 == null ? null : scheduleLine_r1.confirmedAt, "M/d/yyyy"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 12, "s4omScheduleLines.quantity"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", scheduleLine_r1 == null ? null : scheduleLine_r1.confirmedQuantity, " ");
  }
}
function ScheduleLinesComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1);
    ɵɵtemplate(2, ScheduleLinesComponent_ng_container_0_ng_container_1_div_2_Template, 12, 17, "div", 2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", orderEntry_r4.scheduleLines);
  }
}
function ScheduleLinesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ScheduleLinesComponent_ng_container_0_ng_container_1_Template, 3, 1, "ng-container", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderEntry_r4 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hasScheduleLines(orderEntry_r4));
  }
}
var ScheduleLinesComponent = class _ScheduleLinesComponent {
  constructor(cartItemContext, translationService, datePipe) {
    this.cartItemContext = cartItemContext;
    this.translationService = translationService;
    this.datePipe = datePipe;
    this.orderEntry$ = this.cartItemContext?.item$ ?? EMPTY;
  }
  /**
   * Verifies whether the Schedule Line infos have any entries.
   * Only in this case we want to display the schedule line summary
   *
   * @param {OrderEntry} item - Cart item
   * @returns {boolean} - whether the Schedule Line information is present for the order
   */
  hasScheduleLines(item) {
    const scheduleLines = item.scheduleLines;
    return scheduleLines != null && scheduleLines.length > 0;
  }
  getScheduleLineInfoId(index) {
    return "cx-schedule-line-info-" + index.toString();
  }
  getLongDate(date) {
    if (!date) {
      return "";
    }
    return this.datePipe.transform(date);
  }
  static {
    this.ɵfac = function ScheduleLinesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleLinesComponent)(ɵɵdirectiveInject(CartItemContext, 8), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(CxDatePipe));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ScheduleLinesComponent,
      selectors: [["cx-schedule-lines"]],
      standalone: false,
      features: [ɵɵProvidersFeature([CxDatePipe])],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-code"], ["class", "cx-schedule-line-info", 4, "ngFor", "ngForOf"], [1, "cx-schedule-line-info"], [1, "cx-visually-hidden", 3, "id"], ["aria-hidden", "true", 1, "cx-value"], ["aria-hidden", "true", 1, "cx-label"]],
      template: function ScheduleLinesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ScheduleLinesComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.orderEntry$));
        }
      },
      dependencies: [NgForOf, NgIf, AsyncPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleLinesComponent, [{
    type: Component,
    args: [{
      selector: "cx-schedule-lines",
      providers: [CxDatePipe],
      standalone: false,
      template: `<ng-container *ngIf="orderEntry$ | async as orderEntry">
  <ng-container *ngIf="hasScheduleLines(orderEntry)">
    <div class="cx-code">
      <div
        *ngFor="let scheduleLine of orderEntry.scheduleLines; let i = index"
        class="cx-schedule-line-info"
        attr.aria-describedby="{{ getScheduleLineInfoId(i) }}"
      >
        <div id="{{ getScheduleLineInfoId(i) }}" class="cx-visually-hidden">
          {{
            's4omScheduleLines.a11y.scheduleLineEntryInfo'
              | cxTranslate
                : {
                    quantity: scheduleLine.confirmedQuantity,
                    date: getLongDate(scheduleLine.confirmedAt),
                  }
          }}
        </div>
        <div class="cx-value" aria-hidden="true">
          {{ scheduleLine?.confirmedAt | cxDate: 'M/d/yyyy' }}
        </div>
        <div class="cx-label" aria-hidden="true">
          {{ 's4omScheduleLines.quantity' | cxTranslate }}
        </div>
        <div class="cx-value" aria-hidden="true">
          {{ scheduleLine?.confirmedQuantity }}
        </div>
      </div>
    </div>
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
    type: TranslationService
  }, {
    type: CxDatePipe
  }], null);
})();
var ScheduleLinesModule = class _ScheduleLinesModule {
  static {
    this.ɵfac = function ScheduleLinesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleLinesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ScheduleLinesModule,
      declarations: [ScheduleLinesComponent],
      imports: [CommonModule, UrlModule, I18nModule, IconModule],
      exports: [ScheduleLinesComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, UrlModule, I18nModule, IconModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleLinesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, I18nModule, IconModule],
      declarations: [ScheduleLinesComponent],
      exports: [ScheduleLinesComponent]
    }]
  }], null, null);
})();
var S4OM_FEATURE = "S4HANA-Order-Management";
var S4omRootModule = class _S4omRootModule {
  static {
    this.ɵfac = function S4omRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _S4omRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _S4omRootModule,
      imports: [
        ScheduleLinesModule,
        RequestedDeliveryDateComponentsModule,
        //Adding dependency with Requested Delivery Date so that the library gets installed along with S4OM
        PDFInvoicesComponentsModule
      ]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: CartOutlets.ITEM_DETAILS,
        position: OutletPosition.AFTER,
        component: ScheduleLinesComponent
      })],
      imports: [
        ScheduleLinesModule,
        RequestedDeliveryDateComponentsModule,
        //Adding dependency with Requested Delivery Date so that the library gets installed along with S4OM
        PDFInvoicesComponentsModule
      ]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(S4omRootModule, [{
    type: NgModule,
    args: [{
      imports: [
        ScheduleLinesModule,
        RequestedDeliveryDateComponentsModule,
        //Adding dependency with Requested Delivery Date so that the library gets installed along with S4OM
        PDFInvoicesComponentsModule
        //Adding dependency with PDF Invoices so that the library gets installed along with S4OM
      ],
      providers: [provideOutlet({
        id: CartOutlets.ITEM_DETAILS,
        position: OutletPosition.AFTER,
        component: ScheduleLinesComponent
      })]
    }]
  }], null, null);
})();
export {
  S4OM_FEATURE,
  S4omRootModule,
  ScheduleLinesComponent,
  ScheduleLinesModule
};
//# sourceMappingURL=@spartacus_s4om_root.js.map
