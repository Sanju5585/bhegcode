import {
  CheckoutSupportedDeliveryModesQueryReloadEvent
} from "./chunk-X6DUCLWC.js";
import {
  CartOutlets
} from "./chunk-KEAKWHYV.js";
import {
  CardComponent,
  CardModule,
  DatePickerComponent,
  DatePickerModule,
  OutletContextData,
  OutletPosition,
  provideOutlet
} from "./chunk-D5RDRHN5.js";
import {
  CxDatePipe,
  EventService,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  TranslatePipe,
  TranslationService,
  facadeFactory,
  provideDefaultConfigFactory
} from "./chunk-VIVIQI6G.js";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgIf
} from "./chunk-S7KROBXW.js";
import {
  Component,
  Injectable,
  NgModule,
  Optional,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import {
  filter,
  map
} from "./chunk-R6FETK65.js";
import {
  Subscription
} from "./chunk-WTM5FSU4.js";

// node_modules/@spartacus/requested-delivery-date/fesm2022/spartacus-requested-delivery-date-root.mjs
function DeliveryModeDatePickerComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 3);
    ɵɵpipe(2, "cxDate");
    ɵɵpipe(3, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(3, 3, ctx_r0.getRequestedDeliveryDateCardContent(ɵɵpipeBind1(2, 1, ctx_r0.requestedRetrievalAt))));
  }
}
function DeliveryModeDatePickerComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "form", 5)(2, "label", 6)(3, "div", 7);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 8)(7, "cx-date-picker", 9);
    ɵɵlistener("update", function DeliveryModeDatePickerComponent_ng_container_0_ng_template_2_Template_cx_date_picker_update_7_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.setRequestedDeliveryDate());
    });
    ɵɵelementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r0.form);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "requestedDeliveryDate.datePickerLabel"), " ");
    ɵɵadvance(3);
    ɵɵproperty("control", ctx_r0.form.get("requestDeliveryDate"))("min", ctx_r0.earliestRetrievalAt)("required", true);
  }
}
function DeliveryModeDatePickerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DeliveryModeDatePickerComponent_ng_container_0_ng_container_1_Template, 4, 5, "ng-container", 2)(2, DeliveryModeDatePickerComponent_ng_container_0_ng_template_2_Template, 8, 7, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const datePickerEnabled_r3 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isDatePickerReadOnly)("ngIfElse", datePickerEnabled_r3);
  }
}
function OrderOverviewDeliveryDateComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 1);
    ɵɵpipe(2, "cxDate");
    ɵɵpipe(3, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(3, 3, ctx_r0.getRequestedDeliveryDateCardContent(ɵɵpipeBind1(2, 1, ctx_r0.order == null ? null : ctx_r0.order.requestedRetrievalAt))));
  }
}
var REQUESTED_DELIVERY_DATE_FEATURE = "requestedDeliveryDate";
var REQUESTED_DELIVERY_DATE_CORE_FEATURE = "requestedDeliveryDateCore";
function requestedDeliveryDateFacadeFactory() {
  return facadeFactory({
    facade: RequestedDeliveryDateFacade,
    feature: REQUESTED_DELIVERY_DATE_FEATURE,
    methods: ["setRequestedDeliveryDate"]
  });
}
var RequestedDeliveryDateFacade = class _RequestedDeliveryDateFacade {
  static {
    this.ɵfac = function RequestedDeliveryDateFacade_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestedDeliveryDateFacade)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _RequestedDeliveryDateFacade,
      factory: () => requestedDeliveryDateFacadeFactory(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateFacade, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: requestedDeliveryDateFacadeFactory
    }]
  }], null, null);
})();
var DateValidationService = class _DateValidationService {
  /**
   * Validates if the string is containing a date string.
   * @param value Date string in the format 'dd-mm-yyy'
   * @returns true if valid, false if invalid
   */
  isDateStringValid(value) {
    return value != null && value !== void 0 && value.length > 0 && !isNaN(
      this.getDateFromDateString(value).getDate()
      //convert 'dd-mm-yyyy' into 'mm/dd/yyyy'
    );
  }
  /**
   * Returns a Date object from a date string in the format 'dd-mm-yyy'
   * @param value Date string in the format 'dd-mm-yyy'
   */
  getDateFromDateString(value) {
    return new Date(value.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
  }
  /**
   * Checks if the source date is greater than or equal to the target
   * @param source Date string in the format 'dd-mm-yyy'
   * @param target Date string in the format 'dd-mm-yyy'
   * @returns true if `source` date is greater than or equal to `target` date
   */
  isDateGreaterOrEqual(source, target) {
    if (source.length === 0 || target.length === 0) {
      return false;
    }
    const d1 = this.getDateFromDateString(source);
    const d2 = this.getDateFromDateString(target);
    return d1 < d2 ? false : true;
  }
  static {
    this.ɵfac = function DateValidationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateValidationService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _DateValidationService,
      factory: _DateValidationService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateValidationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var DeliveryModeDatePickerComponent = class _DeliveryModeDatePickerComponent {
  constructor(datePipe, requestedDelDateFacade, dateValidationService, eventService, translation, globalMessageService, deliveryOutlet) {
    this.datePipe = datePipe;
    this.requestedDelDateFacade = requestedDelDateFacade;
    this.dateValidationService = dateValidationService;
    this.eventService = eventService;
    this.translation = translation;
    this.globalMessageService = globalMessageService;
    this.deliveryOutlet = deliveryOutlet;
    this.cartEntry = {};
    this.subscription = new Subscription();
    this.form = new FormGroup({
      requestDeliveryDate: new FormControl()
    });
    this.isDatePickerReadOnly = true;
  }
  ngOnInit() {
    if (this.deliveryOutlet?.context$) {
      this.subscription.add(this.deliveryOutlet.context$.subscribe((context) => {
        this.cartEntry = context?.item;
        this.isDatePickerReadOnly = context?.readonly || false;
      }));
    }
    if (this.isEarliestRetrievalDatePresent()) {
      this.earliestRetrievalAt = this.cartEntry.earliestRetrievalAt;
    }
    if (this.isRequestedDeliveryDatePresent()) {
      this.requestedRetrievalAt = this.cartEntry.requestedRetrievalAt;
    } else {
      this.requestedRetrievalAt = this.earliestRetrievalAt;
      this.form.patchValue({
        requestDeliveryDate: this.requestedRetrievalAt
      });
      this.setRequestedDeliveryDate();
    }
    this.form.patchValue({
      requestDeliveryDate: this.requestedRetrievalAt
    });
  }
  isEarliestRetrievalDatePresent() {
    return this.dateValidationService.isDateStringValid(this.cartEntry?.earliestRetrievalAt);
  }
  isRequestedDeliveryDatePresent() {
    return this.dateValidationService.isDateStringValid(this.cartEntry?.requestedRetrievalAt);
  }
  getRequestedDeliveryDateCardContent(isoDate) {
    return this.translation.translate("requestedDeliveryDate.readOnlyTextLabel").pipe(filter(() => Boolean(isoDate)), map((textTitle) => {
      return {
        text: [textTitle, isoDate]
      };
    }));
  }
  setRequestedDeliveryDate() {
    const userId = this.cartEntry?.user?.uid || "";
    const cartId = this.cartEntry?.code || "";
    const requestedDate = this.form?.get("requestDeliveryDate")?.value || "";
    if (userId.length === 0 || cartId.length === 0 || requestedDate.length === 0 || !this.dateValidationService.isDateStringValid(requestedDate) || !this.dateValidationService.isDateGreaterOrEqual(requestedDate, this.earliestRetrievalAt || "")) {
      return;
    }
    this.subscription.add(this.requestedDelDateFacade.setRequestedDeliveryDate(userId, cartId, requestedDate).subscribe({
      next: () => {
        this.eventService.dispatch({}, CheckoutSupportedDeliveryModesQueryReloadEvent);
        this.globalMessageService.add({
          key: "requestedDeliveryDate.successMessage"
        }, GlobalMessageType.MSG_TYPE_INFO);
      },
      error: (error) => {
        if (error && this.getErrors(error)?.length) {
          this.globalMessageService.add({
            key: "requestedDeliveryDate.errorMessage"
          }, GlobalMessageType.MSG_TYPE_ERROR);
        }
      }
    }));
  }
  getErrors(response) {
    return (response.error?.errors ?? []).filter((error) => error?.type === "UnknownResourceError");
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function DeliveryModeDatePickerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeliveryModeDatePickerComponent)(ɵɵdirectiveInject(CxDatePipe), ɵɵdirectiveInject(RequestedDeliveryDateFacade), ɵɵdirectiveInject(DateValidationService), ɵɵdirectiveInject(EventService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(OutletContextData, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DeliveryModeDatePickerComponent,
      selectors: [["cx-request-delivery-date"]],
      standalone: false,
      features: [ɵɵProvidersFeature([CxDatePipe])],
      decls: 1,
      vars: 1,
      consts: [["datePickerEnabled", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "content"], [1, "form-check"], [3, "formGroup"], [1, "row"], [1, "pl-4", "col-8"], [1, "col-4"], [3, "update", "control", "min", "required"]],
      template: function DeliveryModeDatePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, DeliveryModeDatePickerComponent_ng_container_0_Template, 4, 2, "ng-container", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.isEarliestRetrievalDatePresent());
        }
      },
      dependencies: [NgIf, DatePickerComponent, ɵNgNoValidate, NgControlStatusGroup, FormGroupDirective, CardComponent, AsyncPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeliveryModeDatePickerComponent, [{
    type: Component,
    args: [{
      selector: "cx-request-delivery-date",
      providers: [CxDatePipe],
      standalone: false,
      template: `<ng-container *ngIf="isEarliestRetrievalDatePresent()">
  <ng-container *ngIf="isDatePickerReadOnly; else datePickerEnabled">
    <cx-card
      [content]="
        getRequestedDeliveryDateCardContent(requestedRetrievalAt | cxDate)
          | async
      "
    ></cx-card>
  </ng-container>
  <ng-template #datePickerEnabled>
    <div class="form-check">
      <form [formGroup]="form">
        <label class="row">
          <div class="pl-4 col-8">
            {{ 'requestedDeliveryDate.datePickerLabel' | cxTranslate }}
          </div>
          <div class="col-4">
            <cx-date-picker
              [control]="$any(form.get('requestDeliveryDate'))"
              [min]="earliestRetrievalAt"
              [required]="true"
              (update)="setRequestedDeliveryDate()"
            >
            </cx-date-picker>
          </div>
        </label>
      </form>
    </div>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: CxDatePipe
  }, {
    type: RequestedDeliveryDateFacade
  }, {
    type: DateValidationService
  }, {
    type: EventService
  }, {
    type: TranslationService
  }, {
    type: GlobalMessageService
  }, {
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var OrderOverviewDeliveryDateComponent = class _OrderOverviewDeliveryDateComponent {
  constructor(dateValidationService, translation, orderOutlet) {
    this.dateValidationService = dateValidationService;
    this.translation = translation;
    this.orderOutlet = orderOutlet;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    if (this.orderOutlet?.context$) {
      this.subscription.add(this.orderOutlet.context$.subscribe((context) => this.order = context?.item));
    }
  }
  isRequestedDeliveryDatePresent() {
    return this.dateValidationService.isDateStringValid(this.order?.requestedRetrievalAt);
  }
  getRequestedDeliveryDateCardContent(isoDate) {
    return this.translation.translate("requestedDeliveryDate.readOnlyTextLabel").pipe(filter(() => Boolean(isoDate)), map((textTitle) => {
      return {
        title: textTitle,
        text: [isoDate]
      };
    }));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function OrderOverviewDeliveryDateComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderOverviewDeliveryDateComponent)(ɵɵdirectiveInject(DateValidationService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(OutletContextData, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderOverviewDeliveryDateComponent,
      selectors: [["cx-order-overview-delivery-date"]],
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [3, "content"]],
      template: function OrderOverviewDeliveryDateComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderOverviewDeliveryDateComponent_ng_container_0_Template, 4, 5, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.order && ctx.isRequestedDeliveryDatePresent());
        }
      },
      dependencies: [NgIf, CardComponent, AsyncPipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderOverviewDeliveryDateComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-overview-delivery-date",
      standalone: false,
      template: '<ng-container *ngIf="order && isRequestedDeliveryDatePresent()">\n  <cx-card\n    [content]="\n      getRequestedDeliveryDateCardContent(order?.requestedRetrievalAt | cxDate)\n        | async\n    "\n  ></cx-card>\n</ng-container>\n'
    }]
  }], () => [{
    type: DateValidationService
  }, {
    type: TranslationService
  }, {
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var RequestedDeliveryDateComponentsModule = class _RequestedDeliveryDateComponentsModule {
  static {
    this.ɵfac = function RequestedDeliveryDateComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestedDeliveryDateComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RequestedDeliveryDateComponentsModule,
      declarations: [DeliveryModeDatePickerComponent, OrderOverviewDeliveryDateComponent],
      imports: [CommonModule, DatePickerModule, I18nModule, ReactiveFormsModule, CardModule],
      exports: [DeliveryModeDatePickerComponent, OrderOverviewDeliveryDateComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, DatePickerModule, I18nModule, ReactiveFormsModule, CardModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, DatePickerModule, I18nModule, ReactiveFormsModule, CardModule],
      declarations: [DeliveryModeDatePickerComponent, OrderOverviewDeliveryDateComponent],
      exports: [DeliveryModeDatePickerComponent, OrderOverviewDeliveryDateComponent]
    }]
  }], null, null);
})();
function defaultRequestedDeliveryDateComponentsConfig() {
  const config = {
    featureModules: {
      [REQUESTED_DELIVERY_DATE_FEATURE]: {
        cmsComponents: ["DeliveryModeDatePickerComponent", "OrderOverviewDeliveryDateComponent"]
      },
      // by default core is bundled together with components
      [REQUESTED_DELIVERY_DATE_CORE_FEATURE]: REQUESTED_DELIVERY_DATE_FEATURE
    }
  };
  return config;
}
var RequestedDeliveryDateRootModule = class _RequestedDeliveryDateRootModule {
  static {
    this.ɵfac = function RequestedDeliveryDateRootModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RequestedDeliveryDateRootModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _RequestedDeliveryDateRootModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideOutlet({
        id: CartOutlets.DELIVERY_MODE,
        position: OutletPosition.AFTER,
        component: DeliveryModeDatePickerComponent
      }), provideOutlet({
        id: CartOutlets.ORDER_OVERVIEW,
        position: OutletPosition.AFTER,
        component: OrderOverviewDeliveryDateComponent
      }), provideDefaultConfigFactory(defaultRequestedDeliveryDateComponentsConfig)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestedDeliveryDateRootModule, [{
    type: NgModule,
    args: [{
      providers: [provideOutlet({
        id: CartOutlets.DELIVERY_MODE,
        position: OutletPosition.AFTER,
        component: DeliveryModeDatePickerComponent
      }), provideOutlet({
        id: CartOutlets.ORDER_OVERVIEW,
        position: OutletPosition.AFTER,
        component: OrderOverviewDeliveryDateComponent
      }), provideDefaultConfigFactory(defaultRequestedDeliveryDateComponentsConfig)]
    }]
  }], null, null);
})();

export {
  REQUESTED_DELIVERY_DATE_FEATURE,
  REQUESTED_DELIVERY_DATE_CORE_FEATURE,
  requestedDeliveryDateFacadeFactory,
  RequestedDeliveryDateFacade,
  DeliveryModeDatePickerComponent,
  OrderOverviewDeliveryDateComponent,
  RequestedDeliveryDateComponentsModule,
  defaultRequestedDeliveryDateComponentsConfig,
  RequestedDeliveryDateRootModule
};
//# sourceMappingURL=chunk-AKUGUBF6.js.map
