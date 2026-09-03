import {
  InvoicesListComponent,
  PDFInvoicesComponentsModule
} from "./chunk-22AER76T.js";
import {
  MyAccountV2OrderHistoryService
} from "./chunk-KW2L2NIV.js";
import {
  DownloadOrderInvoicesEvent,
  OrderAttachmentsFacade,
  OrderConfig,
  OrderConfirmationOrderEntriesContextToken,
  OrderDetailsOrderEntriesContextToken,
  OrderFacade,
  OrderHistoryFacade,
  OrderOutlets,
  OrderReturnRequestFacade,
  ReorderOrderFacade,
  ReplenishmentOrderHistoryFacade,
  USE_MY_ACCOUNT_V2_ORDER,
  billingAddressCard,
  deliveryAddressCard,
  deliveryModeCard,
  paymentMethodCard
} from "./chunk-UIW5AQFA.js";
import {
  AbstractOrderContextDirective,
  AbstractOrderContextModule
} from "./chunk-ZPMY6JFV.js";
import {
  UserRegisterFacade
} from "./chunk-YJXUXPBZ.js";
import {
  AddToCartComponent,
  AddToCartModule
} from "./chunk-P4IPRL4B.js";
import {
  AbstractOrderType,
  CartOutlets,
  CartValidationStatusCode,
  MultiCartFacade,
  OrderEntriesSource,
  PromotionLocation
} from "./chunk-KEAKWHYV.js";
import {
  AddToHomeScreenBannerComponent,
  BtnLikeLinkDirective,
  BtnLikeLinkModule,
  CardComponent,
  CardModule,
  CmsComponentData,
  CustomFormValidators,
  DIALOG_TYPE,
  FocusDirective,
  FormErrorsComponent,
  FormErrorsModule,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  ICON_TYPE,
  IconComponent,
  IconModule,
  ItemCounterComponent,
  ItemCounterModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  ListNavigationModule,
  MediaComponent,
  MediaModule,
  MessageComponent,
  MessageComponentModule,
  OutletContextData,
  OutletDirective,
  OutletModule,
  OutletPosition,
  OutletService,
  PaginationComponent,
  PaginationModule,
  PasswordVisibilityToggleDirective,
  PasswordVisibilityToggleModule,
  PromotionsComponent,
  PromotionsModule,
  PwaModule,
  SelectFocusUtility,
  SortingComponent,
  SortingModule,
  SpinnerComponent,
  SpinnerModule,
  provideOutlet
} from "./chunk-D5RDRHN5.js";
import {
  AuthGuard,
  AuthService,
  CxDatePipe,
  EventService,
  FeatureConfigService,
  FeatureDirective,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  MODULE_INITIALIZER,
  OCC_CART_ID_CURRENT,
  RoutingService,
  SemanticPathService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  isNotUndefined,
  provideDefaultConfig,
  provideDefaultConfigFactory,
  useFeatureStyles
} from "./chunk-VIVIQI6G.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-EBCNDD52.js";
import {
  NgSelectModule
} from "./chunk-YMQEGXEG.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-OP73Q372.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  SlicePipe,
  TitleCasePipe,
  formatCurrency,
  getCurrencySymbol
} from "./chunk-S7KROBXW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  DestroyRef,
  ElementRef,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Optional,
  ViewChild,
  ViewContainerRef,
  inject,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
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
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  BehaviorSubject,
  EMPTY,
  catchError,
  combineLatest,
  distinctUntilChanged,
  filter,
  first,
  map,
  of,
  share,
  shareReplay,
  startWith,
  take,
  tap,
  withLatestFrom
} from "./chunk-R6FETK65.js";
import {
  Subscription,
  switchMap
} from "./chunk-WTM5FSU4.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/order/fesm2022/spartacus-order-components.mjs
var _c0 = (a0) => ({
  code: a0
});
var _c1 = (a0, a1) => ({
  cxRoute: a0,
  params: a1
});
function AmendOrderActionsComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function AmendOrderActionsComponent_button_6_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.continue($event));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "common.continue"), " ");
  }
}
function AmendOrderActionsComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "button", 5);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 2, "orderDetails.cancellationAndReturn.submitDescription"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "orderDetails.cancellationAndReturn.submit"), " ");
  }
}
function CancelOrReturnItemsComponent_div_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function CancelOrReturnItemsComponent_div_0_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r1);
      const form_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.setAll(form_r2));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "orderDetails.cancellationAndReturn.setAll"), " ");
  }
}
function CancelOrReturnItemsComponent_div_0_th_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "orderDetails.cancellationAndReturn.quantity"), " ");
  }
}
function CancelOrReturnItemsComponent_div_0_th_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 13);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "orderDetails.cancellationAndReturn.totalPrice"), " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "cartItems.id"), " ", item_r4.product.code, " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 33);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r5 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", variant_r5.name, ": ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r5 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", variant_r5.value, " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 30);
    ɵɵtemplate(1, CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_div_1_Template, 2, 1, "div", 31)(2, CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_div_2_Template, 2, 1, "div", 32);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r5 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", variant_r5.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", variant_r5.value);
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_div_1_Template, 3, 2, "div", 29);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngForOf", item_r4.product.baseOptions[0] == null ? null : item_r4.product.baseOptions[0].selected == null ? null : item_r4.product.baseOptions[0].selected.variantOptionQualifiers);
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_td_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 34)(1, "div", 24);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 25);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "orderDetails.cancellationAndReturn.itemPrice"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", item_r4.basePrice == null ? null : item_r4.basePrice.formattedValue, " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_td_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 35)(1, "div", 36);
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 25);
    ɵɵtext(6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(2, 3, "cartItems.quantityTitle"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 5, "orderDetails.cancellationAndReturn.quantity"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r2.getMaxAmendQuantity(item_r4), " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    const form_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getControl(form_r2, item_r4).value, " ");
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_cx_item_counter_17_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-item-counter", 37);
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    const form_r2 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("min", 0)("max", ctx_r2.getMaxAmendQuantity(item_r4))("control", ctx_r2.getControl(form_r2, item_r4));
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_td_18_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 38)(1, "div", 24);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 25);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const item_r4 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "orderDetails.cancellationAndReturn.totalPrice"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate((tmp_7_0 = ctx_r2.getItemPrice(item_r4)) == null ? null : tmp_7_0.formattedValue);
  }
}
function CancelOrReturnItemsComponent_div_0_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 14)(1, "td", 15)(2, "div", 16);
    ɵɵelement(3, "cx-media", 17);
    ɵɵelementStart(4, "div", 18)(5, "div", 19);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵtemplate(7, CancelOrReturnItemsComponent_div_0_tr_20_div_7_Template, 3, 4, "div", 20);
    ɵɵelementEnd();
    ɵɵtemplate(8, CancelOrReturnItemsComponent_div_0_tr_20_ng_container_8_Template, 2, 1, "ng-container", 0);
    ɵɵelementEnd()();
    ɵɵtemplate(9, CancelOrReturnItemsComponent_div_0_tr_20_td_9_Template, 6, 4, "td", 21)(10, CancelOrReturnItemsComponent_div_0_tr_20_td_10_Template, 7, 7, "td", 22);
    ɵɵelementStart(11, "td", 23)(12, "div", 24);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 25);
    ɵɵtemplate(16, CancelOrReturnItemsComponent_div_0_tr_20_ng_container_16_Template, 2, 1, "ng-container", 0)(17, CancelOrReturnItemsComponent_div_0_tr_20_cx_item_counter_17_Template, 1, 3, "cx-item-counter", 26);
    ɵɵelementEnd()();
    ɵɵtemplate(18, CancelOrReturnItemsComponent_div_0_tr_20_td_18_Template, 6, 4, "td", 27);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance(3);
    ɵɵproperty("container", item_r4.product.images == null ? null : item_r4.product.images.PRIMARY);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", item_r4.product.name, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r4.product.code);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r4.product.baseOptions == null ? null : item_r4.product.baseOptions.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r4.basePrice);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isConfirmation);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 10, ctx_r2.isCancellation() ? "orderDetails.cancellationAndReturn.cancelQty" : "orderDetails.cancellationAndReturn.returnQty"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.isConfirmation);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isConfirmation);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isConfirmation);
  }
}
function CancelOrReturnItemsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, CancelOrReturnItemsComponent_div_0_button_1_Template, 3, 3, "button", 1);
    ɵɵelementStart(2, "table", 2)(3, "caption", 3);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "thead")(7, "tr")(8, "th", 4);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "th", 5);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(14, CancelOrReturnItemsComponent_div_0_th_14_Template, 3, 3, "th", 6);
    ɵɵelementStart(15, "th", 7);
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(18, CancelOrReturnItemsComponent_div_0_th_18_Template, 3, 3, "th", 8);
    ɵɵelementEnd()();
    ɵɵelementStart(19, "tbody", 9);
    ɵɵtemplate(20, CancelOrReturnItemsComponent_div_0_tr_20_Template, 19, 12, "tr", 10);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isConfirmation);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 8, "orderDetails.caption"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 10, "orderDetails.cancellationAndReturn.item"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 12, "orderDetails.cancellationAndReturn.itemPrice"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.isConfirmation);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 14, ctx_r2.isCancellation() ? "orderDetails.cancellationAndReturn.cancelQty" : "orderDetails.cancellationAndReturn.returnQty"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.isConfirmation);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.entries);
  }
}
function CancelOrderConfirmationComponent_form_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CancelOrderConfirmationComponent_form_0_cx_amend_order_items_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-amend-order-items", 5);
  }
  if (rf & 2) {
    const entries_r4 = ctx.ngIf;
    ɵɵproperty("entries", entries_r4)("isConfirmation", true);
  }
}
function CancelOrderConfirmationComponent_form_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CancelOrderConfirmationComponent_form_0_ng_template_5_cx_amend_order_actions_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-amend-order-actions", 7);
  }
  if (rf & 2) {
    const form_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("orderCode", ctx_r2.orderCode)("amendOrderForm", form_r2);
  }
}
function CancelOrderConfirmationComponent_form_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CancelOrderConfirmationComponent_form_0_ng_template_5_cx_amend_order_actions_0_Template, 1, 2, "cx-amend-order-actions", 6);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2.orderCode);
  }
}
function CancelOrderConfirmationComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 2);
    ɵɵlistener("ngSubmit", function CancelOrderConfirmationComponent_form_0_Template_form_ngSubmit_0_listener() {
      const form_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.submit(form_r2));
    });
    ɵɵtemplate(1, CancelOrderConfirmationComponent_form_0_ng_container_1_Template, 1, 0, "ng-container", 3)(2, CancelOrderConfirmationComponent_form_0_cx_amend_order_items_2_Template, 1, 2, "cx-amend-order-items", 4);
    ɵɵpipe(3, "async");
    ɵɵtemplate(4, CancelOrderConfirmationComponent_form_0_ng_container_4_Template, 1, 0, "ng-container", 3)(5, CancelOrderConfirmationComponent_form_0_ng_template_5_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const form_r2 = ctx.ngIf;
    const actions_r5 = ɵɵreference(6);
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("formGroup", form_r2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", actions_r5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx_r2.entries$));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", actions_r5);
  }
}
function CancelOrderComponent_ng_container_0_cx_message_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-message", 5);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("text", ɵɵpipeBind1(1, 3, "formErrors.cxNoSelectedItemToCancel"))("isVisibleCloseButton", false)("type", ctx_r0.globalMessageType.MSG_TYPE_ERROR);
  }
}
function CancelOrderComponent_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CancelOrderComponent_ng_container_0_cx_amend_order_items_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-amend-order-items", 6);
  }
  if (rf & 2) {
    const entries_r2 = ctx.ngIf;
    ɵɵproperty("entries", entries_r2);
  }
}
function CancelOrderComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CancelOrderComponent_ng_container_0_ng_template_6_cx_amend_order_actions_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-amend-order-actions", 8);
  }
  if (rf & 2) {
    const form_r3 = ɵɵnextContext(2).ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("orderCode", ctx_r0.orderCode)("amendOrderForm", form_r3);
  }
}
function CancelOrderComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, CancelOrderComponent_ng_container_0_ng_template_6_cx_amend_order_actions_0_Template, 1, 2, "cx-amend-order-actions", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r0.orderCode);
  }
}
function CancelOrderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CancelOrderComponent_ng_container_0_cx_message_1_Template, 2, 5, "cx-message", 2)(2, CancelOrderComponent_ng_container_0_ng_container_2_Template, 1, 0, "ng-container", 3)(3, CancelOrderComponent_ng_container_0_cx_amend_order_items_3_Template, 1, 1, "cx-amend-order-items", 4);
    ɵɵpipe(4, "async");
    ɵɵtemplate(5, CancelOrderComponent_ng_container_0_ng_container_5_Template, 1, 0, "ng-container", 3)(6, CancelOrderComponent_ng_container_0_ng_template_6_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const form_r3 = ctx.ngIf;
    const actions_r4 = ɵɵreference(7);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !form_r3.get("entries").valid && form_r3.get("entries").touched);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", actions_r4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx_r0.entries$));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", actions_r4);
  }
}
function ReturnOrderConfirmationComponent_form_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ReturnOrderConfirmationComponent_form_0_cx_amend_order_items_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-amend-order-items", 5);
  }
  if (rf & 2) {
    const entries_r4 = ctx.ngIf;
    ɵɵproperty("entries", entries_r4)("isConfirmation", true);
  }
}
function ReturnOrderConfirmationComponent_form_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ReturnOrderConfirmationComponent_form_0_ng_template_5_cx_amend_order_actions_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-amend-order-actions", 7);
  }
  if (rf & 2) {
    const form_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("orderCode", ctx_r2.orderCode)("amendOrderForm", form_r2);
  }
}
function ReturnOrderConfirmationComponent_form_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ReturnOrderConfirmationComponent_form_0_ng_template_5_cx_amend_order_actions_0_Template, 1, 2, "cx-amend-order-actions", 6);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2.orderCode);
  }
}
function ReturnOrderConfirmationComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "form", 2);
    ɵɵlistener("ngSubmit", function ReturnOrderConfirmationComponent_form_0_Template_form_ngSubmit_0_listener() {
      const form_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.submit(form_r2));
    });
    ɵɵtemplate(1, ReturnOrderConfirmationComponent_form_0_ng_container_1_Template, 1, 0, "ng-container", 3)(2, ReturnOrderConfirmationComponent_form_0_cx_amend_order_items_2_Template, 1, 2, "cx-amend-order-items", 4);
    ɵɵpipe(3, "async");
    ɵɵtemplate(4, ReturnOrderConfirmationComponent_form_0_ng_container_4_Template, 1, 0, "ng-container", 3)(5, ReturnOrderConfirmationComponent_form_0_ng_template_5_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const form_r2 = ctx.ngIf;
    const actions_r5 = ɵɵreference(6);
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("formGroup", form_r2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", actions_r5);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx_r2.entries$));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", actions_r5);
  }
}
function ReturnOrderComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ReturnOrderComponent_ng_container_0_cx_amend_order_items_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-amend-order-items", 5);
  }
  if (rf & 2) {
    const entries_r1 = ctx.ngIf;
    ɵɵproperty("entries", entries_r1);
  }
}
function ReturnOrderComponent_ng_container_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ReturnOrderComponent_ng_container_0_ng_template_6_cx_amend_order_actions_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-amend-order-actions", 7);
  }
  if (rf & 2) {
    const form_r2 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("orderCode", ctx_r2.orderCode)("amendOrderForm", form_r2);
  }
}
function ReturnOrderComponent_ng_container_0_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ReturnOrderComponent_ng_container_0_ng_template_6_cx_amend_order_actions_0_Template, 1, 2, "cx-amend-order-actions", 6);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2.orderCode);
  }
}
function ReturnOrderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ReturnOrderComponent_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2)(2, ReturnOrderComponent_ng_container_0_cx_amend_order_items_2_Template, 1, 1, "cx-amend-order-items", 3);
    ɵɵpipe(3, "async");
    ɵɵelement(4, "cx-form-errors", 4);
    ɵɵtemplate(5, ReturnOrderComponent_ng_container_0_ng_container_5_Template, 1, 0, "ng-container", 2)(6, ReturnOrderComponent_ng_container_0_ng_template_6_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const form_r2 = ctx.ngIf;
    const actions_r4 = ɵɵreference(7);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", actions_r4);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx_r2.entries$));
    ɵɵadvance(2);
    ɵɵproperty("control", form_r2.get("entries"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", actions_r4);
  }
}
var _c2 = () => ({
  cxRoute: "orders"
});
var _c3 = (a0) => ({
  value: a0
});
var _c4 = (a0) => ({
  cxRoute: "orderDetails",
  params: a0
});
var _c5 = () => ({
  value: 1
});
var _c6 = (a0) => ({
  cxRoute: "orderReturn",
  params: a0
});
var _c7 = () => ({
  cxRoute: "home"
});
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().$implicit;
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 2, "myAccountV2Orders.orderStatusLabel"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "orderDetails.statusDisplay_" + order_r1.statusDisplay), " ");
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" + ", ɵɵpipeBind2(2, 1, "myAccountV2Orders.items", ɵɵpureFunction1(4, _c3, order_r1.totalItems - 1)), " ");
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" + ", ɵɵpipeBind2(2, 1, "myAccountV2Orders.item", ɵɵpureFunction0(4, _c5)), " ");
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_28_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementStart(2, "a", 27);
    ɵɵpipe(3, "cxUrl");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", " | ", "");
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(3, 3, ɵɵpureFunction1(7, _c6, order_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "myAccountV2Orders.returnOrder"), " ");
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 16)(2, "div", 17);
    ɵɵelement(3, "cx-media", 18);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 19)(5, "div", 20)(6, "div", 21);
    ɵɵtext(7);
    ɵɵtemplate(8, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_8_Template, 3, 6, "span", 14)(9, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_9_Template, 3, 5, "span", 14);
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 22);
    ɵɵtext(11);
    ɵɵpipe(12, "cxDate");
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 23);
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(17, "div", 24)(18, "div", 25);
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd()()()();
    ɵɵelementStart(21, "div", 26)(22, "span")(23, "a", 27);
    ɵɵpipe(24, "cxUrl");
    ɵɵpipe(25, "cxTranslate");
    ɵɵtext(26);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(28, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_span_28_Template, 6, 9, "span", 14);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.ngIf;
    const order_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(3);
    ɵɵproperty("container", product_r2.images == null ? null : product_r2.images.PRIMARY);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", product_r2.name, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r1.totalItems - 1 > 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r1.totalItems - 1 === 1);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(13, 14, "myAccountV2Orders.purchasedOn", ɵɵpureFunction1(30, _c3, ɵɵpipeBind2(12, 11, order_r1.placed, "d, MMMM, yyyy"))), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(16, 17, "myAccountV2Orders.orderedItems", ɵɵpureFunction1(32, _c3, order_r1.totalItems)), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(20, 20, "myAccountV2Orders.totalPrice", ɵɵpureFunction1(34, _c3, order_r1.total == null ? null : order_r1.total.formattedValue)), " ");
    ɵɵadvance(4);
    ɵɵproperty("routerLink", ɵɵpipeBind1(24, 23, ɵɵpureFunction1(36, _c4, order_r1)));
    ɵɵattribute("aria-label", ɵɵpipeBind2(25, 25, "myAccountV2Orders.orderDetailsLabel", ɵɵpureFunction1(38, _c3, order_r1.code)));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 28, "myAccountV2Orders.orderDetails"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r1.returnable);
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 9)(2, "div", 10);
    ɵɵtemplate(3, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_div_3_Template, 4, 6, "div", 11);
    ɵɵelementStart(4, "div", 12);
    ɵɵpipe(5, "cxTranslate");
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 13);
    ɵɵtemplate(9, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_ng_container_9_Template, 29, 40, "ng-container", 14);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", order_r1.statusDisplay);
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind1(5, 4, "myAccountV2OrderHistory.orderCodeLabel"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(7, 6, "myAccountV2Orders.orderNumber", ɵɵpureFunction1(9, _c3, order_r1.code)), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r2.getProduct(order_r1));
  }
}
function MyAccountV2OrdersComponent_div_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 7);
    ɵɵtemplate(2, MyAccountV2OrdersComponent_div_11_ng_container_1_ng_container_2_Template, 10, 11, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderHistory_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", orderHistory_r4.orders);
  }
}
function MyAccountV2OrdersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, MyAccountV2OrdersComponent_div_11_ng_container_1_Template, 3, 1, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const orderHistory_r4 = ctx.ngIf;
    ɵɵnextContext();
    const noOrder_r5 = ɵɵreference(14);
    ɵɵadvance();
    ɵɵproperty("ngIf", orderHistory_r4.pagination.totalResults > 0)("ngIfElse", noOrder_r5);
  }
}
function MyAccountV2OrdersComponent_ng_template_13_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 29)(1, "div");
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 30);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 4, "orderHistory.notFound"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 6, "orderHistory.noOrders"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 8, ɵɵpureFunction0(12, _c7)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 10, "orderHistory.startShopping"));
  }
}
function MyAccountV2OrdersComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MyAccountV2OrdersComponent_ng_template_13_div_0_Template, 9, 13, "div", 28);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const loading_r6 = ɵɵreference(16);
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx_r2.isLoaded$))("ngIfElse", loading_r6);
  }
}
function MyAccountV2OrdersComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function OrderDetailBillingComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "cx-card", 6);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const paymentDetails_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 1, ctx_r1.getPaymentMethodCard(paymentDetails_r1)));
  }
}
function OrderDetailBillingComponent_div_0_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵelement(1, "cx-card", 6);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const paymentDetails_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 1, ctx_r1.getBillingAddressCard(paymentDetails_r1)));
  }
}
function OrderDetailBillingComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, OrderDetailBillingComponent_div_0_div_1_div_1_Template, 3, 3, "div", 4)(2, OrderDetailBillingComponent_div_0_div_1_div_2_Template, 3, 3, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const paymentDetails_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isPaymentInfoCardFull(paymentDetails_r1));
    ɵɵadvance();
    ɵɵproperty("ngIf", paymentDetails_r1 == null ? null : paymentDetails_r1.billingAddress);
  }
}
function OrderDetailBillingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, OrderDetailBillingComponent_div_0_div_1_Template, 3, 2, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r3 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r3.paymentInfo);
  }
}
var _c8 = (a0) => ({
  item: a0,
  readonly: true
});
var _c9 = (a0) => ({
  sapQuoteCode: a0
});
var _c10 = (a0) => ({
  id: a0
});
var _c11 = (a0) => ({
  quoteId: a0
});
var _c12 = (a0) => ({
  cxRoute: "quoteDetails",
  params: a0
});
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_1_ng_template_15_Template(rf, ctx) {
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8);
    ɵɵelement(2, "cx-card", 10);
    ɵɵpipe(3, "async");
    ɵɵelement(4, "cx-card", 10);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 8);
    ɵɵelement(7, "cx-card", 10);
    ɵɵpipe(8, "cxDate");
    ɵɵpipe(9, "async");
    ɵɵelement(10, "cx-card", 10);
    ɵɵpipe(11, "async");
    ɵɵelement(12, "cx-card", 10);
    ɵɵpipe(13, "cxDate");
    ɵɵpipe(14, "async");
    ɵɵtemplate(15, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_1_ng_template_15_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(3).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(3, 7, ctx_r1.getReplenishmentCodeCardContent(order_r1 == null ? null : order_r1.replenishmentOrderCode)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(5, 9, ctx_r1.getReplenishmentActiveCardContent(order_r1 == null ? null : order_r1.active)));
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(9, 13, ctx_r1.getReplenishmentStartOnCardContent(ɵɵpipeBind1(8, 11, order_r1 == null ? null : order_r1.firstDate))));
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(11, 15, ctx_r1.getReplenishmentFrequencyCardContent(order_r1 == null ? null : order_r1.trigger == null ? null : order_r1.trigger.displayTimeTable)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(14, 19, ctx_r1.getReplenishmentNextDateCardContent(ɵɵpipeBind1(13, 17, order_r1 == null ? null : order_r1.trigger == null ? null : order_r1.trigger.activationTime))));
    ɵɵadvance(3);
    ɵɵproperty("cxOutlet", ctx_r1.cartOutlets.ORDER_OVERVIEW)("cxOutletContext", ɵɵpureFunction1(21, _c8, order_r1));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_2_ng_template_9_Template(rf, ctx) {
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelement(1, "cx-card", 10);
    ɵɵpipe(2, "async");
    ɵɵelement(3, "cx-card", 10);
    ɵɵpipe(4, "cxDate");
    ɵɵpipe(5, "async");
    ɵɵelement(6, "cx-card", 10);
    ɵɵpipe(7, "async");
    ɵɵtemplate(8, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_2_ng_container_8_Template, 1, 0, "ng-container", 11)(9, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_2_ng_template_9_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(3).ngIf;
    const ctx_r1 = ɵɵnextContext();
    const showQuoteCode_r3 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 7, ctx_r1.getOrderCodeCardContent(order_r1 == null ? null : order_r1.code)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(5, 11, ctx_r1.getOrderCurrentDateCardContent(ɵɵpipeBind1(4, 9, order_r1 == null ? null : order_r1.created))));
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(7, 13, ctx_r1.getOrderStatusCardContent(order_r1.statusDisplay)));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", showQuoteCode_r3)("ngTemplateOutletContext", ɵɵpureFunction1(15, _c9, order_r1.sapQuoteCode));
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r1.cartOutlets.ORDER_OVERVIEW)("cxOutletContext", ɵɵpureFunction1(17, _c8, order_r1));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 10);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(4).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 1, ctx_r1.getCostCenterCardContent(order_r1 == null ? null : order_r1.costCenter)));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 8);
    ɵɵelement(2, "cx-card", 10);
    ɵɵpipe(3, "async");
    ɵɵelement(4, "cx-card", 10);
    ɵɵpipe(5, "async");
    ɵɵtemplate(6, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_4_ng_container_6_Template, 3, 3, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(3).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(3, 3, ctx_r1.getPurchaseOrderNumber(order_r1 == null ? null : order_r1.purchaseOrderNumber)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(5, 5, ctx_r1.getMethodOfPaymentCardContent(order_r1.paymentInfo)));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r1.costCenter);
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 10);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(3).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 1, ctx_r1.getAddressCardContent(order_r1 == null ? null : order_r1.deliveryAddress)));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 10);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(3).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 1, ctx_r1.getDeliveryModeCardContent(order_r1 == null ? null : order_r1.deliveryMode)));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_8_Template(rf, ctx) {
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_9_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-card", 10);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(5).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(2, 1, ctx_r1.getPaymentInfoCardContent(order_r1 == null ? null : order_r1.paymentInfo)));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_9_div_1_ng_container_1_Template, 3, 3, "ng-container", 4);
    ɵɵelement(2, "cx-card", 10);
    ɵɵpipe(3, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(4).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isPaymentInfoCardFull(order_r1 == null ? null : order_r1.paymentInfo));
    ɵɵadvance();
    ɵɵproperty("content", ɵɵpipeBind1(3, 2, ctx_r1.getBillingAddressCardContent(order_r1 == null ? null : order_r1.paymentInfo == null ? null : order_r1.paymentInfo.billingAddress)));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_9_div_1_Template, 4, 4, "div", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(3).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", (order_r1 == null ? null : order_r1.paymentInfo == null ? null : order_r1.paymentInfo.billingAddress) || ctx_r1.isPaymentInfoCardFull(order_r1 == null ? null : order_r1.paymentInfo));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_1_Template, 16, 23, "ng-container", 7)(2, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_2_Template, 10, 19, "ng-template", null, 1, ɵɵtemplateRefExtractor)(4, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_4_Template, 7, 7, "ng-container", 4);
    ɵɵelementStart(5, "div", 8);
    ɵɵtemplate(6, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_6_Template, 3, 3, "ng-container", 4)(7, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_7_Template, 3, 3, "ng-container", 4)(8, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_template_8_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
    ɵɵtemplate(9, OrderOverviewComponent_div_0_ng_container_1_div_1_ng_container_9_Template, 2, 1, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const otherOrder_r4 = ɵɵreference(3);
    const order_r1 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r1.replenishmentOrderCode)("ngIfElse", otherOrder_r4);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", order_r1.purchaseOrderNumber || order_r1.purchaseOrderNumber === "");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r1.deliveryAddress);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.shouldShowDeliveryMode(order_r1.deliveryMode));
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r1.orderOutlets.SERVICE_DETAILS)("cxOutletContext", ɵɵpureFunction1(8, _c8, order_r1));
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r1.paymentInfo);
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_3_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_3_ng_template_10_Template(rf, ctx) {
}
function OrderOverviewComponent_div_0_ng_container_1_div_3_cx_order_detail_billing_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-order-detail-billing");
  }
}
function OrderOverviewComponent_div_0_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "div", 13);
    ɵɵelement(2, "cx-card", 10);
    ɵɵpipe(3, "async");
    ɵɵelement(4, "cx-card", 10);
    ɵɵpipe(5, "cxDate");
    ɵɵpipe(6, "async");
    ɵɵelement(7, "cx-card", 10);
    ɵɵpipe(8, "async");
    ɵɵtemplate(9, OrderOverviewComponent_div_0_ng_container_1_div_3_ng_container_9_Template, 1, 0, "ng-container", 11)(10, OrderOverviewComponent_div_0_ng_container_1_div_3_ng_template_10_Template, 0, 0, "ng-template", 9);
    ɵɵelementEnd();
    ɵɵtemplate(11, OrderOverviewComponent_div_0_ng_container_1_div_3_cx_order_detail_billing_11_Template, 1, 0, "cx-order-detail-billing", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    const showQuoteCode_r3 = ɵɵreference(3);
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(3, 8, ctx_r1.getOrderCodeCardContent(order_r1 == null ? null : order_r1.code)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(6, 12, ctx_r1.getOrderCurrentDateCardContent(ɵɵpipeBind1(5, 10, order_r1 == null ? null : order_r1.created))));
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(8, 14, ctx_r1.getOrderStatusCardContent(order_r1.statusDisplay)));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", showQuoteCode_r3)("ngTemplateOutletContext", ɵɵpureFunction1(16, _c9, order_r1.sapQuoteCode));
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r1.cartOutlets.ORDER_OVERVIEW)("cxOutletContext", ɵɵpureFunction1(18, _c8, order_r1));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isPaymentInfoCardFull(order_r1 == null ? null : order_r1.paymentInfo) || (order_r1 == null ? null : order_r1.paymentInfo == null ? null : order_r1.paymentInfo.billingAddress));
  }
}
function OrderOverviewComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderOverviewComponent_div_0_ng_container_1_div_1_Template, 10, 10, "div", 5);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, OrderOverviewComponent_div_0_ng_container_1_div_3_Template, 12, 20, "div", 5);
    ɵɵpipe(4, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ɵɵpipeBind1(2, 2, ctx_r1.simple$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(4, 4, ctx_r1.simple$));
  }
}
function OrderOverviewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, OrderOverviewComponent_div_0_ng_container_1_Template, 5, 6, "ng-container", 4);
    ɵɵpipe(2, "async");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ɵɵpipeBind1(2, 1, ctx_r1.isOrderLoading$));
  }
}
function OrderOverviewComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15)(1, "div", 16);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "a", 17);
    ɵɵpipe(5, "cxUrl");
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const quoteCode_r5 = ɵɵnextContext().sapQuoteCode;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 3, "orderDetails.quoteCode", ɵɵpureFunction1(10, _c10, quoteCode_r5)), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 6, ɵɵpureFunction1(14, _c12, ɵɵpureFunction1(12, _c11, quoteCode_r5))));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 8, "orderDetails.quoteDetail"), " ");
  }
}
function OrderOverviewComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderOverviewComponent_ng_template_2_div_0_Template, 8, 16, "div", 14);
  }
  if (rf & 2) {
    const quoteCode_r5 = ctx.sapQuoteCode;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.orderConfig.showOrderQuoteLink && quoteCode_r5);
  }
}
var _c13 = () => [];
var _c14 = (a0, a1) => ({
  id: a0,
  type: a1
});
var _c15 = (a0, a1) => ({
  items: a0,
  readonly: true,
  promotionLocation: a1
});
function OrderConfirmationItemsComponent_div_0_ng_template_5_Template(rf, ctx) {
}
function OrderConfirmationItemsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "h3", 2);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(4, "cx-promotions", 3);
    ɵɵtemplate(5, OrderConfirmationItemsComponent_div_0_ng_template_5_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "checkoutOrderConfirmation.orderItems"), " ");
    ɵɵadvance(2);
    ɵɵproperty("promotions", order_r1.appliedOrderPromotions || ɵɵpureFunction0(7, _c13));
    ɵɵadvance();
    ɵɵproperty("cxAbstractOrderContext", ɵɵpureFunction2(8, _c14, order_r1.code, ctx_r1.abstractOrderType.ORDER))("cxOutlet", ctx_r1.cartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction2(11, _c15, order_r1.entries, ctx_r1.promotionLocation));
  }
}
var _c16 = (a0) => ({
  items: a0,
  readonly: true
});
function OrderConfirmationShippingComponent_div_0_ng_container_1_div_13_ng_template_1_Template(rf, ctx) {
}
function OrderConfirmationShippingComponent_div_0_ng_container_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, OrderConfirmationShippingComponent_div_0_ng_container_1_div_13_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("cxAbstractOrderContext", ɵɵpureFunction2(3, _c14, order_r1.code, ctx_r1.abstractOrderType.ORDER))("cxOutlet", ctx_r1.cartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction1(6, _c16, ctx_r1.entries));
  }
}
function OrderConfirmationShippingComponent_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h2", 3);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 4)(5, "div", 5)(6, "div", 6);
    ɵɵelement(7, "cx-card", 7);
    ɵɵpipe(8, "async");
    ɵɵelementEnd()();
    ɵɵelementStart(9, "div", 5)(10, "div", 6);
    ɵɵelement(11, "cx-card", 7);
    ɵɵpipe(12, "async");
    ɵɵelementEnd()()();
    ɵɵtemplate(13, OrderConfirmationShippingComponent_div_0_ng_container_1_div_13_Template, 2, 8, "div", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "checkoutMode.deliveryEntries"), " ");
    ɵɵadvance(5);
    ɵɵproperty("content", ɵɵpipeBind1(8, 6, ctx_r1.getDeliveryAddressCard(order_r1.deliveryAddress)));
    ɵɵadvance(4);
    ɵɵproperty("content", ɵɵpipeBind1(12, 8, ctx_r1.getDeliveryModeCard(order_r1.deliveryMode)));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.showItemList);
  }
}
function OrderConfirmationShippingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, OrderConfirmationShippingComponent_div_0_ng_container_1_Template, 14, 10, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.showItemList || (ctx_r1.entries == null ? null : ctx_r1.entries.length) > 0);
  }
}
var _c17 = (a0) => ({
  email: a0
});
var _c18 = (a0) => ({
  label: a0
});
function OrderConfirmationThankYouMessageComponent_ng_container_0_div_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "cx-guest-register-form", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("guid", ctx_r1.orderGuid)("email", order_r1.paymentInfo.billingAddress.email);
  }
}
function OrderConfirmationThankYouMessageComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "span", 2);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(5, "div", 3)(6, "h2");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "p");
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(12, OrderConfirmationThankYouMessageComponent_ng_container_0_div_12_Template, 2, 2, "div", 0);
    ɵɵelement(13, "cx-add-to-home-screen-banner");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const order_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(4, 5, "checkoutOrderConfirmation.confirmationOfOrder"), " ", (tmp_2_0 = order_r1.replenishmentOrderCode) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : order_r1.code, " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 7, "checkoutOrderConfirmation.thankYou"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 9, "checkoutOrderConfirmation.invoiceHasBeenSentByEmail"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.isGuestCustomer && ctx_r1.orderGuid && (order_r1 == null ? null : order_r1.paymentInfo == null ? null : order_r1.paymentInfo.billingAddress == null ? null : order_r1.paymentInfo.billingAddress.email));
  }
}
function OrderConfirmationTotalsComponent_div_0_ng_template_3_Template(rf, ctx) {
}
function OrderConfirmationTotalsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    ɵɵtemplate(3, OrderConfirmationTotalsComponent_div_0_ng_template_3_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("cxOutlet", ctx_r1.cartOutlets.ORDER_SUMMARY)("cxOutletContext", order_r1);
  }
}
var _c19 = (a0) => ({
  cxRoute: "orderCancel",
  params: a0
});
function OrderDetailActionsComponent_ng_container_0_a_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 5);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(6, _c19, order_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "orderDetails.cancellationAndReturn.cancelAction"), " ");
  }
}
function OrderDetailActionsComponent_ng_container_0_a_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 5);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(6, _c6, order_r1)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "orderDetails.cancellationAndReturn.returnAction"), " ");
  }
}
function OrderDetailActionsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "button", 3);
    ɵɵpipe(4, "cxUrl");
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 2);
    ɵɵtemplate(8, OrderDetailActionsComponent_ng_container_0_a_8_Template, 4, 8, "a", 4)(9, OrderDetailActionsComponent_ng_container_0_a_9_Template, 4, 8, "a", 4);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    ɵɵadvance(3);
    ɵɵproperty("routerLink", ɵɵpipeBind1(4, 4, ɵɵpureFunction0(8, _c2)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 6, "common.back"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", order_r1.cancellable);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r1.returnable);
  }
}
function MyAccountV2OrderDetailsActionsComponent_ng_container_0_span_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8)(1, "button", 10);
    ɵɵpipe(2, "cxUrl");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 2, ɵɵpureFunction1(6, _c19, ctx_r1.order)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, "myAccountV2OrderDetails.cancelItems"), " ");
  }
}
function MyAccountV2OrderDetailsActionsComponent_ng_container_0_span_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8)(1, "button", 11);
    ɵɵpipe(2, "cxUrl");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 2, ɵɵpureFunction1(6, _c6, ctx_r1.order)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, "myAccountV2OrderDetails.returnItems"), " ");
  }
}
function MyAccountV2OrderDetailsActionsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "span", 3)(4, "span", 4)(5, "button", 5);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()()()();
    ɵɵelementStart(9, "div", 6)(10, "span", 3);
    ɵɵtemplate(11, MyAccountV2OrderDetailsActionsComponent_ng_container_0_span_11_Template, 5, 8, "span", 7)(12, MyAccountV2OrderDetailsActionsComponent_ng_container_0_span_12_Template, 5, 8, "span", 7);
    ɵɵelementStart(13, "span", 8)(14, "button", 9);
    ɵɵlistener("click", function MyAccountV2OrderDetailsActionsComponent_ng_container_0_Template_button_click_14_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.showDialog(ctx_r1.order));
    });
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd()()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 5, ɵɵpureFunction0(11, _c2)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 7, "myAccountV2OrderDetails.viewAllOrders"), " ");
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r1.order.cancellable);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.order.returnable);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 9, "myAccountV2OrderDetails.downloadInvoices"), " ");
  }
}
function MyAccountV2DownloadInvoicesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "myAccountV2OrderDetails.noInvoices"), " ");
  }
}
function MyAccountV2DownloadInvoicesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var _c20 = ["element"];
function ConsignmentTrackingComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "button", 1);
    ɵɵlistener("click", function ConsignmentTrackingComponent_ng_container_0_div_1_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.openTrackingDialog(ctx_r1.consignment));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "orderDetails.consignmentTracking.action"), " ");
  }
}
function ConsignmentTrackingComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConsignmentTrackingComponent_ng_container_0_div_1_Template, 4, 3, "div", 0);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.consignmentStatus.includes(ctx_r1.consignment.status));
  }
}
var _c21 = (a0, a1) => ({
  item: a0,
  order: a1
});
var _c22 = (a0, a1, a2) => ({
  displayAddToCart: a0,
  addToCartString: a1,
  optionalBtn: a2
});
var _c23 = (a0, a1, a2) => ({
  items: a0,
  readonly: true,
  promotionLocation: a1,
  options: a2
});
function OrderConsignedEntriesComponent_div_0_ng_template_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "titlecase");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const consignment_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 3, ɵɵpipeBind1(2, 1, ctx_r1.getStatusText(consignment_r1 == null ? null : consignment_r1.status))), " ");
  }
}
function OrderConsignedEntriesComponent_div_0_ng_template_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11)(1, "div");
    ɵɵtext(2);
    ɵɵpipe(3, "cxDate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const consignment_r1 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 1, consignment_r1 == null ? null : consignment_r1.statusDate));
  }
}
function OrderConsignedEntriesComponent_div_0_ng_template_1_cx_consignment_tracking_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-consignment-tracking", 12);
  }
  if (rf & 2) {
    const consignment_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("orderCode", ctx_r1.order.code)("consignment", consignment_r1);
  }
}
function OrderConsignedEntriesComponent_div_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 6)(1, "div", 7);
    ɵɵtemplate(2, OrderConsignedEntriesComponent_div_0_ng_template_1_span_2_Template, 4, 5, "span", 8);
    ɵɵelementEnd();
    ɵɵtemplate(3, OrderConsignedEntriesComponent_div_0_ng_template_1_div_3_Template, 4, 3, "div", 9)(4, OrderConsignedEntriesComponent_div_0_ng_template_1_cx_consignment_tracking_4_Template, 1, 2, "cx-consignment-tracking", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const consignment_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵproperty("ngIf", consignment_r1);
    ɵɵadvance();
    ɵɵproperty("ngIf", consignment_r1 == null ? null : consignment_r1.statusDate);
    ɵɵadvance();
    ɵɵproperty("cxFeature", "consignmentTracking");
  }
}
function OrderConsignedEntriesComponent_div_0_ng_template_3_Template(rf, ctx) {
}
function OrderConsignedEntriesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2);
    ɵɵtemplate(1, OrderConsignedEntriesComponent_div_0_ng_template_1_Template, 5, 3, "ng-template", 3);
    ɵɵelementStart(2, "div", 4);
    ɵɵtemplate(3, OrderConsignedEntriesComponent_div_0_ng_template_3_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const consignment_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    const addToCartBtn_r3 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵproperty("cxOutlet", ctx_r1.OrderOutlets.ORDER_CONSIGNMENT)("cxOutletContext", ɵɵpureFunction2(5, _c21, consignment_r1, ctx_r1.order));
    ɵɵadvance(2);
    ɵɵproperty("cxAbstractOrderContext", ɵɵpureFunction2(8, _c14, ctx_r1.order.code, ctx_r1.abstractOrderType.ORDER))("cxOutlet", ctx_r1.CartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction3(15, _c23, consignment_r1.entries, ctx_r1.promotionLocation, ɵɵpureFunction3(11, _c22, ctx_r1.enableAddToCart, ctx_r1.buyItAgainTranslation, addToCartBtn_r3)));
  }
}
function OrderConsignedEntriesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-add-to-cart", 13);
  }
  if (rf & 2) {
    const ctx_ir4 = ctx.$implicit;
    ɵɵproperty("productCode", ctx_ir4.item.product == null ? null : ctx_ir4.item.product.code)("product", ctx_ir4.item.product)("showQuantity", false)("options", ctx_ir4.options)("pickupStore", ctx_ir4.item.deliveryPointOfService == null ? null : ctx_ir4.item.deliveryPointOfService.name);
  }
}
var _c24 = (a0) => ({
  showItemList: false,
  order: a0
});
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-promotions", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("promotions", order_r1.appliedOrderPromotions || ɵɵpureFunction0(1, _c13));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "deliveryPointOfServiceDetails.itemsToBePickUp"), " ");
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_cx_order_consigned_entries_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-order-consigned-entries", 6);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "cxTranslate");
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("order", order_r1)("consignments", ctx_r1.pickupConsignments)("enableAddToCart", ɵɵpipeBind1(1, 4, ctx_r1.enableAddToCart$))("buyItAgainTranslation", ɵɵpipeBind1(2, 6, "addToCart.buyItAgain"));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_4_ng_template_0_Template(rf, ctx) {
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderDetailItemsComponent_ng_container_0_ng_container_1_4_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("cxOutlet", ctx_r1.OrderOutlets.CONSIGNMENT_DELIVERY_INFO)("cxOutletContext", ɵɵpureFunction1(2, _c24, order_r1));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_cx_order_consigned_entries_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-order-consigned-entries", 6);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "cxTranslate");
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("order", order_r1)("consignments", ctx_r1.deliveryConsignments)("enableAddToCart", ɵɵpipeBind1(1, 4, ctx_r1.enableAddToCart$))("buyItAgainTranslation", ɵɵpipeBind1(2, 6, "addToCart.buyItAgain"));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9)(1, "div", 10);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(3).ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "orderDetails.statusDisplay_" + (order_r1 == null ? null : order_r1.statusDisplay)), " ");
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_h2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2", 14);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "checkoutMode.deliveryEntries"), " ");
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_ng_template_4_Template(rf, ctx) {
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_h2_1_Template, 3, 3, "h2", 11);
    ɵɵpipe(2, "async");
    ɵɵelementStart(3, "div", 12);
    ɵɵtemplate(4, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_ng_template_4_Template, 0, 0, "ng-template", 13);
    ɵɵpipe(5, "async");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(3).ngIf;
    const addToCartBtn_r3 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 4, ctx_r1.groupCartItems$));
    ɵɵadvance(3);
    ɵɵproperty("cxAbstractOrderContext", ɵɵpureFunction2(10, _c14, order_r1.code, ctx_r1.abstractOrderType.ORDER))("cxOutlet", ctx_r1.CartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction3(17, _c23, ctx_r1.deliveryUnConsignedEntries, ctx_r1.promotionLocation, ɵɵpureFunction3(13, _c22, ɵɵpipeBind1(5, 6, ctx_r1.enableAddToCart$), ɵɵpipeBind1(6, 8, "addToCart.buyItAgain"), addToCartBtn_r3)));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_3_ng_template_5_Template(rf, ctx) {
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "h2", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 12);
    ɵɵtemplate(5, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_3_ng_template_5_Template, 0, 0, "ng-template", 13);
    ɵɵpipe(6, "async");
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(3).ngIf;
    const addToCartBtn_r3 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "checkoutPickupInStore.heading"), " ");
    ɵɵadvance(3);
    ɵɵproperty("cxAbstractOrderContext", ɵɵpureFunction2(10, _c14, order_r1.code, ctx_r1.abstractOrderType.ORDER))("cxOutlet", ctx_r1.CartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction3(17, _c23, ctx_r1.pickupUnconsignedEntries, ctx_r1.promotionLocation, ɵɵpureFunction3(13, _c22, ɵɵpipeBind1(6, 6, ctx_r1.enableAddToCart$), ɵɵpipeBind1(7, 8, "addToCart.buyItAgain"), addToCartBtn_r3)));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_div_1_Template, 4, 3, "div", 8)(2, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_2_Template, 7, 21, "ng-container", 1)(3, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_ng_container_3_Template, 8, 21, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r1 == null ? null : order_r1.statusDisplay);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.deliveryUnConsignedEntries == null ? null : ctx_r1.deliveryUnConsignedEntries.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.pickupUnconsignedEntries == null ? null : ctx_r1.pickupUnconsignedEntries.length);
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9)(1, "div", 10);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(3).ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "orderDetails.statusDisplay_" + (order_r1 == null ? null : order_r1.statusDisplay)), " ");
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_ng_template_4_Template(rf, ctx) {
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 15);
    ɵɵtemplate(2, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_div_2_Template, 4, 3, "div", 8);
    ɵɵelementStart(3, "div", 12);
    ɵɵtemplate(4, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_ng_template_4_Template, 0, 0, "ng-template", 13);
    ɵɵpipe(5, "async");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext(2).ngIf;
    const addToCartBtn_r3 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r1 == null ? null : order_r1.statusDisplay);
    ɵɵadvance(2);
    ɵɵproperty("cxAbstractOrderContext", ɵɵpureFunction2(8, _c14, order_r1.code, ctx_r1.abstractOrderType.ORDER))("cxOutlet", ctx_r1.CartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction3(15, _c23, order_r1.entries, ctx_r1.promotionLocation, ɵɵpureFunction3(11, _c22, ɵɵpipeBind1(5, 4, ctx_r1.enableAddToCart$), ɵɵpipeBind1(6, 6, "addToCart.buyItAgain"), addToCartBtn_r3)));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 1)(2, OrderDetailItemsComponent_ng_container_0_ng_container_1_div_2_Template, 3, 3, "div", 2)(3, OrderDetailItemsComponent_ng_container_0_ng_container_1_cx_order_consigned_entries_3_Template, 3, 8, "cx-order-consigned-entries", 3)(4, OrderDetailItemsComponent_ng_container_0_ng_container_1_4_Template, 1, 4, null, 1);
    ɵɵpipe(5, "async");
    ɵɵtemplate(6, OrderDetailItemsComponent_ng_container_0_ng_container_1_cx_order_consigned_entries_6_Template, 3, 8, "cx-order-consigned-entries", 3)(7, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_7_Template, 4, 3, "ng-container", 1)(8, OrderDetailItemsComponent_ng_container_0_ng_container_1_ng_container_8_Template, 7, 19, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", (order_r1.consignments == null ? null : order_r1.consignments.length) || (order_r1.unconsignedEntries == null ? null : order_r1.unconsignedEntries.length) || order_r1.replenishmentOrderCode);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.pickupConsignments == null ? null : ctx_r1.pickupConsignments.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.pickupConsignments);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.deliveryConsignments && ctx_r1.deliveryConsignments.length > 0 && ɵɵpipeBind1(5, 7, ctx_r1.groupCartItems$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.deliveryConsignments);
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r1 == null ? null : order_r1.unconsignedEntries == null ? null : order_r1.unconsignedEntries.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", (order_r1 == null ? null : order_r1.entries) && (order_r1 == null ? null : order_r1.replenishmentOrderCode));
  }
}
function OrderDetailItemsComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-add-to-cart", 16);
  }
  if (rf & 2) {
    const ctx_ir4 = ctx.$implicit;
    ɵɵproperty("productCode", ctx_ir4.item.product == null ? null : ctx_ir4.item.product.code)("product", ctx_ir4.item.product)("showQuantity", false)("options", ctx_ir4.options)("pickupStore", ctx_ir4.item.deliveryPointOfService == null ? null : ctx_ir4.item.deliveryPointOfService.name);
  }
}
function OrderDetailItemsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderDetailItemsComponent_ng_container_0_ng_container_1_Template, 9, 9, "ng-container", 1);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, OrderDetailItemsComponent_ng_container_0_ng_template_3_Template, 1, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ɵɵpipeBind1(2, 1, ctx_r1.isOrderLoading$));
  }
}
function TrackingEventsComponent_ng_container_2_ng_container_9_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 17);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const consignmentTracking_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("href", consignmentTracking_r4.trackingUrl, ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵtextInterpolate(consignmentTracking_r4 == null ? null : consignmentTracking_r4.trackingID);
  }
}
function TrackingEventsComponent_ng_container_2_ng_container_9_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const consignmentTracking_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", consignmentTracking_r4 == null ? null : consignmentTracking_r4.trackingID, " ");
  }
}
function TrackingEventsComponent_ng_container_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "div", 14);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 15);
    ɵɵtext(8);
    ɵɵpipe(9, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(10, "div", 13)(11, "div", 14);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(14, "div", 15);
    ɵɵtext(15);
    ɵɵpipe(16, "cxDate");
    ɵɵelementEnd()()();
    ɵɵelementStart(17, "div", 12)(18, "div", 13)(19, "div", 14);
    ɵɵtext(20);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(22, "div", 15);
    ɵɵtext(23);
    ɵɵelementEnd()();
    ɵɵelementStart(24, "div", 13)(25, "div", 14);
    ɵɵtext(26);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(28, "div", 15);
    ɵɵtemplate(29, TrackingEventsComponent_ng_container_2_ng_container_9_ng_container_29_Template, 3, 2, "ng-container", 16)(30, TrackingEventsComponent_ng_container_2_ng_container_9_ng_container_30_Template, 3, 1, "ng-container", 16);
    ɵɵelementEnd()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const consignmentTracking_r4 = ɵɵnextContext().ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 9, "orderDetails.consignmentTracking.dialog.shipped"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(9, 11, ctx_r2.shipDate, "medium"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 14, "orderDetails.consignmentTracking.dialog.estimate"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(16, 16, consignmentTracking_r4 == null ? null : consignmentTracking_r4.targetArrivalDate, "medium"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(21, 19, "orderDetails.consignmentTracking.dialog.carrier"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", consignmentTracking_r4 == null ? null : consignmentTracking_r4.carrierDetails == null ? null : consignmentTracking_r4.carrierDetails.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 21, "orderDetails.consignmentTracking.dialog.trackingId"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", consignmentTracking_r4 == null ? null : consignmentTracking_r4.trackingUrl);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(consignmentTracking_r4 == null ? null : consignmentTracking_r4.trackingUrl));
  }
}
function TrackingEventsComponent_ng_container_2_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 18)(2, "div", 19);
    ɵɵtext(3);
    ɵɵpipe(4, "cxDate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 20);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 19);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 21);
    ɵɵtext(10);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const consignmentEvent_r5 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 4, consignmentEvent_r5.eventDate, "medium"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", consignmentEvent_r5.referenceCode, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", consignmentEvent_r5.detail, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" location: ", consignmentEvent_r5.location, " ");
  }
}
function TrackingEventsComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5)(2, "div", 6);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 7);
    ɵɵpipe(6, "cxTranslate");
    ɵɵlistener("click", function TrackingEventsComponent_ng_container_2_Template_button_click_5_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.close("Cross click"));
    });
    ɵɵelementStart(7, "span", 8);
    ɵɵtext(8, "×");
    ɵɵelementEnd()()();
    ɵɵtemplate(9, TrackingEventsComponent_ng_container_2_ng_container_9_Template, 31, 23, "ng-container", 4);
    ɵɵelementStart(10, "div", 9);
    ɵɵtemplate(11, TrackingEventsComponent_ng_container_2_ng_container_11_Template, 11, 7, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const consignmentTracking_r4 = ctx.ngIf;
    ɵɵnextContext();
    const noTracking_r6 = ɵɵreference(5);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 5, "orderDetails.consignmentTracking.dialog.header"), " ");
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind1(6, 7, "common.close"));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", (consignmentTracking_r4 == null ? null : consignmentTracking_r4.carrierDetails) && (consignmentTracking_r4 == null ? null : consignmentTracking_r4.trackingID))("ngIfElse", noTracking_r6);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", consignmentTracking_r4.trackingEvents);
  }
}
function TrackingEventsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22)(1, "div", 15);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "orderDetails.consignmentTracking.dialog.noTracking"), " ");
  }
}
function TrackingEventsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 26);
    ɵɵpipe(6, "cxTranslate");
    ɵɵlistener("click", function TrackingEventsComponent_ng_template_6_Template_button_click_5_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.close("Cross click"));
    });
    ɵɵelementStart(7, "span", 8);
    ɵɵtext(8, "×");
    ɵɵelementEnd()()();
    ɵɵelementStart(9, "div", 27)(10, "div", 12)(11, "div", 28);
    ɵɵelement(12, "cx-spinner");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 2, "orderDetails.consignmentTracking.dialog.loadingHeader"), " ");
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind1(6, 4, "common.close"));
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "orderDetails.deliveryStatus_" + ctx_r0.consignment.status), " ");
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_span_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementStart(3, "a", 8);
    ɵɵlistener("click", function MyAccountV2ConsignmentTrackingComponent_div_0_span_3_span_1_Template_a_click_3_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.openTrackingDialog(ctx_r0.consignment));
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 2, "orderDetails.consignmentTracking.dialog.trackingId"), ": ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r0.consignment.trackingID, " ");
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵtemplate(1, MyAccountV2ConsignmentTrackingComponent_div_0_span_3_span_1_Template, 5, 4, "span", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const showNoTrackingMessage_r3 = ɵɵreference(6);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.consignment.trackingID)("ngIfElse", showNoTrackingMessage_r3);
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtext(1);
    ɵɵpipe(2, "cxDate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, ctx_r0.consignment.statusDate), " ");
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 8);
    ɵɵlistener("click", function MyAccountV2ConsignmentTrackingComponent_div_0_ng_template_5_Template_a_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.openTrackingDialog(ctx_r0.consignment));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "orderDetails.consignmentTracking.action"), " ");
  }
}
function MyAccountV2ConsignmentTrackingComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "span");
    ɵɵtemplate(2, MyAccountV2ConsignmentTrackingComponent_div_0_span_2_Template, 3, 3, "span", 3)(3, MyAccountV2ConsignmentTrackingComponent_div_0_span_3_Template, 2, 2, "span", 4);
    ɵɵelementEnd();
    ɵɵtemplate(4, MyAccountV2ConsignmentTrackingComponent_div_0_span_4_Template, 3, 3, "span", 5)(5, MyAccountV2ConsignmentTrackingComponent_div_0_ng_template_5_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.consignment.status);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.consignmentStatus.includes((tmp_3_0 = ctx_r0.consignment.status) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ""));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.consignment == null ? null : ctx_r0.consignment.statusDate);
  }
}
function OrderDetailReorderComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2)(2, "div", 3)(3, "button", 4, 0);
    ɵɵlistener("click", function OrderDetailReorderComponent_ng_container_0_ng_container_1_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const order_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onReorderClick(order_r2));
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 1, "reorder.button"), " ");
  }
}
function OrderDetailReorderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderDetailReorderComponent_ng_container_0_ng_container_1_Template, 7, 3, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r2.code);
  }
}
var _c25 = (a0, a1, a2, a3) => ({
  quantity: a0,
  quantityAdded: a1,
  productCode: a2,
  productName: a3
});
function ReorderDialogComponent_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14)(2, "p");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 15)(6, "div", 16)(7, "div", 17)(8, "button", 18);
    ɵɵlistener("click", function ReorderDialogComponent_ng_container_13_ng_container_1_Template_button_click_8_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.close("Cancel creating cart from order"));
    });
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 19);
    ɵɵlistener("click", function ReorderDialogComponent_ng_container_13_ng_container_1_Template_button_click_11_listener() {
      ɵɵrestoreView(_r1);
      const data_r3 = ɵɵnextContext().ngIf;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.createCartFromOrder(data_r3.orderCode));
    });
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd()()()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "reorder.dialog.areYouSureToReplaceCart"), " ");
    ɵɵadvance(6);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 5, "reorder.dialog.cancel"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 7, "reorder.dialog.continue"), " ");
  }
}
function ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 21)(2, "span", 22);
    ɵɵelement(3, "cx-icon", 23);
    ɵɵelementEnd();
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r1.iconTypes.SUCCESS);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 2, "reorder.dialog.messages.success"), " ");
  }
}
function ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_ng_template_3_span_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 22);
    ɵɵelement(2, "cx-icon", 25);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r1.iconTypes.INFO);
  }
}
function ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_ng_template_3_span_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵelement(1, "cx-icon", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r1.iconTypes.ERROR);
  }
}
function ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtemplate(1, ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_ng_template_3_span_0_ng_container_1_Template, 3, 1, "ng-container", 13)(2, ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_ng_template_3_span_0_ng_template_2_Template, 2, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const cartModification_r4 = ctx.$implicit;
    const errorIcon_r5 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", cartModification_r4.statusCode === ctx_r1.cartValidationStatusCode.LOW_STOCK)("ngIfElse", errorIcon_r5);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(6, 3, "reorder.dialog.messages." + cartModification_r4.statusCode, ɵɵpureFunction4(6, _c25, cartModification_r4.quantity, cartModification_r4.quantityAdded, cartModification_r4.entry.product.code, cartModification_r4.entry.product.name)), " ");
  }
}
function ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_ng_template_3_span_0_Template, 7, 11, "span", 24);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngForOf", ctx_r1.cartModifications);
  }
}
function ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p", 20);
    ɵɵtemplate(2, ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_ng_container_2_Template, 6, 4, "ng-container", 13)(3, ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_ng_template_3_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cartResponse_r6 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !(ctx_r1.cartModifications == null ? null : ctx_r1.cartModifications.length))("ngIfElse", cartResponse_r6);
  }
}
function ReorderDialogComponent_ng_container_13_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function ReorderDialogComponent_ng_container_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ReorderDialogComponent_ng_container_13_ng_template_3_ng_container_0_Template, 5, 2, "ng-container", 13);
    ɵɵpipe(1, "async");
    ɵɵtemplate(2, ReorderDialogComponent_ng_container_13_ng_template_3_ng_template_2_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const loading_r7 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ɵɵpipeBind1(1, 2, ctx_r1.loading$))("ngIfElse", loading_r7);
  }
}
function ReorderDialogComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ReorderDialogComponent_ng_container_13_ng_container_1_Template, 14, 9, "ng-container", 13);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, ReorderDialogComponent_ng_container_13_ng_template_3_Template, 4, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const result_r8 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r1.showDecisionPrompt$))("ngIfElse", result_r8);
  }
}
function OrderDetailTotalsComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
}
function OrderDetailTotalsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2);
    ɵɵtemplate(3, OrderDetailTotalsComponent_ng_container_0_ng_template_3_Template, 0, 0, "ng-template", 3);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("cxOutlet", ctx_r1.CartOutlets.ORDER_SUMMARY)("cxOutletContext", order_r1);
  }
}
function OrderAttachmentsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2)(2, "div", 3)(3, "button", 4, 0);
    ɵɵlistener("click", function OrderAttachmentsComponent_ng_container_0_ng_container_1_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const order_r2 = ɵɵnextContext().ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onOrderAttachmentsClick(order_r2.code));
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 1, "attachments.button"), " ");
  }
}
function OrderAttachmentsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderAttachmentsComponent_ng_container_0_ng_container_1_Template, 7, 3, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", order_r2.code);
  }
}
var _c26 = (a0) => ({
  disabled: a0
});
var _c27 = (a0) => ({
  hidden: a0
});
function OrderAttachmentsDialogComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const count_r2 = ctx.ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", "(" + count_r2 + ")", " ");
  }
}
function OrderAttachmentsDialogComponent_cx_message_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-message", 17);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("closeMessage", function OrderAttachmentsDialogComponent_cx_message_14_Template_cx_message_closeMessage_0_listener() {
      const errorId_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.closeErrorMessage(errorId_r4));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("text", ɵɵpipeBind1(1, 2, "attachments.dialog.downloadError"))("type", ctx_r4.globalMessageType.MSG_TYPE_ERROR);
  }
}
function OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_ng_container_1_ng_container_2_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 21)(1, "td")(2, "a", 22);
    ɵɵpipe(3, "cxTranslate");
    ɵɵpipe(4, "cxTranslate");
    ɵɵlistener("mousedown", function OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_ng_container_1_ng_container_2_tr_1_Template_a_mousedown_2_listener($event) {
      ɵɵrestoreView(_r6);
      const attachment_r7 = ɵɵnextContext().$implicit;
      const ctx_r4 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r4.onMouseDown($event, attachment_r7.sapAttachmentId, attachment_r7.sapFileName));
    })("keydown.enter", function OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_ng_container_1_ng_container_2_tr_1_Template_a_keydown_enter_2_listener() {
      ɵɵrestoreView(_r6);
      const attachment_r7 = ɵɵnextContext().$implicit;
      const ctx_r4 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r4.openOrderAttachment(attachment_r7.sapAttachmentId, attachment_r7.sapFileName));
    });
    ɵɵtext(5);
    ɵɵelementEnd()();
    ɵɵelementStart(6, "td")(7, "div", 23);
    ɵɵelement(8, "cx-spinner");
    ɵɵelementEnd()();
    ɵɵelementStart(9, "td")(10, "a", 24);
    ɵɵpipe(11, "cxTranslate");
    ɵɵpipe(12, "cxTranslate");
    ɵɵlistener("click", function OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_ng_container_1_ng_container_2_tr_1_Template_a_click_10_listener() {
      ɵɵrestoreView(_r6);
      const attachment_r7 = ɵɵnextContext().$implicit;
      const ctx_r4 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r4.openOrderAttachment(attachment_r7.sapAttachmentId, attachment_r7.sapFileName));
    })("keydown.enter", function OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_ng_container_1_ng_container_2_tr_1_Template_a_keydown_enter_10_listener() {
      ɵɵrestoreView(_r6);
      const attachment_r7 = ɵɵnextContext().$implicit;
      const ctx_r4 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r4.openOrderAttachment(attachment_r7.sapAttachmentId, attachment_r7.sapFileName));
    });
    ɵɵelement(13, "cx-icon", 10);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const attachment_r7 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext(4);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(3, 9, "attachments.dialog.preview"));
    ɵɵproperty("ngClass", ɵɵpureFunction1(17, _c26, ctx_r4.loadingAttachments.includes(attachment_r7.sapAttachmentId)));
    ɵɵattribute("aria-label", ɵɵpipeBind1(4, 11, "attachments.dialog.preview"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", attachment_r7.sapFileName, " ");
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(19, _c27, !ctx_r4.loadingAttachments.includes(attachment_r7.sapAttachmentId)));
    ɵɵadvance(3);
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(11, 13, "attachments.dialog.preview"));
    ɵɵproperty("ngClass", ɵɵpureFunction1(21, _c26, ctx_r4.loadingAttachments.includes(attachment_r7.sapAttachmentId)));
    ɵɵattribute("aria-label", ɵɵpipeBind1(12, 15, "attachments.dialog.preview"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r4.iconTypes.FILE);
  }
}
function OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_ng_container_1_ng_container_2_tr_1_Template, 14, 23, "tr", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const attachment_r7 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", attachment_r7.sapAttachmentId);
  }
}
function OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "table", 18);
    ɵɵtemplate(2, OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 19);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const attachments_r8 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", attachments_r8);
  }
}
function OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_ng_container_1_Template, 3, 1, "ng-container", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    const empty_r9 = ɵɵreference(25);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r4.attachmentsCount())("ngIfElse", empty_r9);
  }
}
function OrderAttachmentsDialogComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderAttachmentsDialogComponent_ng_container_15_ng_container_1_Template, 2, 2, "ng-container", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const error_r10 = ɵɵreference(23);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r4.loadError())("ngIfElse", error_r10);
  }
}
function OrderAttachmentsDialogComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-message", 25);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("text", ɵɵpipeBind1(1, 3, "attachments.dialog.error"))("type", ctx_r4.globalMessageType.MSG_TYPE_ERROR)("isVisibleCloseButton", false);
  }
}
function OrderAttachmentsDialogComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-message", 26);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("text", ɵɵpipeBind1(1, 3, "attachments.dialog.empty"))("type", ctx_r4.globalMessageType.MSG_TYPE_INFO)("isVisibleCloseButton", false);
  }
}
function OrderAttachmentsDialogComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var _c28 = (a0, a1) => ({
  orderHistory: a0,
  replenishmentOrder: a1
});
var _c29 = (a0) => ({
  "cx-order-history-table-po": a0
});
function OrderHistoryComponent_ng_container_0_ng_container_1_h4_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h4");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "orderHistory.replenishmentHistory"), " ");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "h2");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "orderHistory.orderHistory"), " ");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "cx-pagination", 19);
    ɵɵlistener("viewPageEvent", function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_10_Template_cx_pagination_viewPageEvent_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const type_r4 = ɵɵnextContext(3).ngIf;
    ɵɵadvance();
    ɵɵproperty("pagination", type_r4.orderHistory.pagination);
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "th", 15);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "th", 15);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "orderHistory.PONumber"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 4, "orderHistory.costCenter"), " ");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 23);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r6 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction1(5, _c4, order_r6)))("queryParams", ctx_r1.getQueryParams(order_r6));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", order_r6.purchaseOrderNumber, "");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_a_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 23);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r6 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 3, ɵɵpureFunction1(5, _c4, order_r6)))("queryParams", ctx_r1.getQueryParams(order_r6));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", order_r6.costCenter == null ? null : order_r6.costCenter.name, "");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "td", 27)(2, "div", 22);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(5, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_a_5_Template, 3, 7, "a", 28);
    ɵɵelementEnd();
    ɵɵelementStart(6, "td", 29)(7, "div", 22);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(10, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_a_10_Template, 3, 7, "a", 28);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r6 = ɵɵnextContext().$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, "orderHistory.PONumber"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r6.purchaseOrderNumber);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 6, "orderHistory.costCenter"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", order_r6.costCenter == null ? null : order_r6.costCenter.name);
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 20);
    ɵɵlistener("click", function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_Template_tr_click_0_listener() {
      const order_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.goToOrderDetail(order_r6));
    });
    ɵɵelementStart(1, "td", 21)(2, "div", 22);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 23);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵtemplate(8, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_ng_container_8_Template, 11, 8, "ng-container", 2);
    ɵɵelementStart(9, "td", 24)(10, "div", 22);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "a", 23);
    ɵɵpipe(14, "cxUrl");
    ɵɵtext(15);
    ɵɵpipe(16, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(17, "td", 25)(18, "div", 22);
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(21, "a", 23);
    ɵɵpipe(22, "cxUrl");
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(25, "td", 26)(26, "div", 22);
    ɵɵtext(27);
    ɵɵpipe(28, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(29, "a", 23);
    ɵɵpipe(30, "cxUrl");
    ɵɵtext(31);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const order_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵattribute("aria-rowindex", i_r7 + 1);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 18, "orderHistory.orderId"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 20, ɵɵpureFunction1(39, _c4, order_r6)))("queryParams", ctx_r1.getQueryParams(order_r6));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", order_r6 == null ? null : order_r6.code, "");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hasPONumber);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 22, "orderHistory.date"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(14, 24, ɵɵpureFunction1(41, _c4, order_r6)))("queryParams", ctx_r1.getQueryParams(order_r6));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(16, 26, order_r6 == null ? null : order_r6.placed, "longDate"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 29, "orderHistory.status"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(22, 31, ɵɵpureFunction1(43, _c4, order_r6)))("queryParams", ctx_r1.getQueryParams(order_r6));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 33, "orderDetails.statusDisplay_" + (order_r6 == null ? null : order_r6.statusDisplay)), "");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(28, 35, "orderHistory.total"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(30, 37, ɵɵpureFunction1(45, _c4, order_r6)))("queryParams", ctx_r1.getQueryParams(order_r6));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", order_r6 == null ? null : order_r6.total.formattedValue, "");
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "cx-pagination", 30);
    ɵɵlistener("viewPageEvent", function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_33_Template_cx_pagination_viewPageEvent_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const type_r4 = ɵɵnextContext(3).ngIf;
    ɵɵadvance();
    ɵɵproperty("pagination", type_r4.orderHistory.pagination);
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 7)(2, "label", 8)(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "cx-sorting", 9);
    ɵɵpipe(7, "cxTranslate");
    ɵɵpipe(8, "async");
    ɵɵpipe(9, "cxTranslate");
    ɵɵlistener("sortListEvent", function OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_Template_cx_sorting_sortListEvent_6_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.changeSortCode($event));
    });
    ɵɵelementEnd()();
    ɵɵtemplate(10, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_10_Template, 2, 1, "div", 10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "table", 11)(12, "caption", 12);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(15, "thead", 13)(16, "tr", 14)(17, "th", 15);
    ɵɵtext(18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(20, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_ng_container_20_Template, 7, 6, "ng-container", 2);
    ɵɵelementStart(21, "th", 15);
    ɵɵtext(22);
    ɵɵpipe(23, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(24, "th", 15);
    ɵɵtext(25);
    ɵɵpipe(26, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(27, "th", 15);
    ɵɵtext(28);
    ɵɵpipe(29, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(30, "tbody");
    ɵɵtemplate(31, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_tr_31_Template, 32, 47, "tr", 16);
    ɵɵelementEnd()();
    ɵɵelementStart(32, "div", 17);
    ɵɵtemplate(33, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_div_33_Template, 2, 1, "div", 10);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const type_r4 = ɵɵnextContext(2).ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 16, "orderHistory.sortBy"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(7, 18, "orderHistory.sortBy"));
    ɵɵproperty("sortOptions", type_r4.orderHistory.sorts)("sortLabels", ɵɵpipeBind1(8, 20, ctx_r1.getSortLabels()))("selectedOption", type_r4.orderHistory.pagination.sort)("ariaLabel", ɵɵpipeBind1(9, 22, "orderHistory.sortOrders"));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", type_r4.orderHistory.pagination.totalPages > 1);
    ɵɵadvance();
    ɵɵproperty("ngClass", ɵɵpureFunction1(34, _c29, ctx_r1.hasPONumber));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 24, "orderHistory.orderHistory"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 26, "orderHistory.orderId"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.hasPONumber);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 28, "orderHistory.date"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(26, 30, "orderHistory.status"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(29, 32, "orderHistory.total"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", type_r4.orderHistory.orders);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", type_r4.orderHistory.pagination.totalPages > 1);
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(3, 1, "orderHistory.notFound"));
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(3, "a", 32);
    ɵɵpipe(4, "cxUrl");
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate(ɵɵpipeBind1(2, 3, "orderHistory.noOrders"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(4, 5, ɵɵpureFunction0(9, _c7)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 7, "orderHistory.startShopping"));
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4)(1, "div");
    ɵɵtemplate(2, OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_ng_container_2_Template, 4, 3, "ng-container", 6)(3, OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_ng_template_3_Template, 7, 10, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const otherOrder_r9 = ɵɵreference(4);
    const type_r4 = ɵɵnextContext(3).ngIf;
    ɵɵproperty("ngClass", type_r4.replenishmentOrder ? "cx-replenishment-details-order-history-no-order" : "cx-order-history-no-order");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", type_r4.replenishmentOrder)("ngIfElse", otherOrder_r9);
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_div_0_Template, 5, 3, "div", 31);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r1.isLoaded$));
  }
}
function OrderHistoryComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3)(2, "div", 4);
    ɵɵtemplate(3, OrderHistoryComponent_ng_container_0_ng_container_1_h4_3_Template, 3, 3, "h4", 2)(4, OrderHistoryComponent_ng_container_0_ng_container_1_h2_4_Template, 3, 3, "h2", 2);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 5);
    ɵɵtemplate(6, OrderHistoryComponent_ng_container_0_ng_container_1_ng_container_6_Template, 34, 36, "ng-container", 6)(7, OrderHistoryComponent_ng_container_0_ng_container_1_ng_template_7_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const noOrder_r10 = ɵɵreference(8);
    const type_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵproperty("ngClass", type_r4.replenishmentOrder ? "cx-replenishment-details-order-history-header" : "cx-order-history-header");
    ɵɵadvance();
    ɵɵproperty("ngIf", type_r4.replenishmentOrder);
    ɵɵadvance();
    ɵɵproperty("ngIf", !type_r4.replenishmentOrder);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", type_r4.orderHistory.pagination.totalResults > 0)("ngIfElse", noOrder_r10);
  }
}
function OrderHistoryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderHistoryComponent_ng_container_0_ng_container_1_Template, 9, 5, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const type_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵproperty("ngIf", type_r4.orderHistory);
  }
}
var _c30 = (a0) => ({
  param: a0
});
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 7);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tracking_r1 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("href", tracking_r1.trackingUrl, ɵɵsanitizeUrl);
    ɵɵadvance();
    ɵɵtextInterpolate(tracking_r1.trackingID);
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const tracking_r1 = ɵɵnextContext().ngIf;
    ɵɵtextInterpolate1(" ", tracking_r1.trackingID, " ");
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵtemplate(5, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_ng_container_5_Template, 3, 2, "ng-container", 5);
    ɵɵtext(6, " | ");
    ɵɵelementEnd();
    ɵɵelementStart(7, "span");
    ɵɵpipe(8, "cxTranslate");
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵpipe(11, "cxDate");
    ɵɵelementEnd();
    ɵɵtemplate(12, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_ng_template_12_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const tracking_r1 = ctx.ngIf;
    const showNumber_r2 = ɵɵreference(13);
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 7, "orderDetails.consignmentTracking.dialog.trackingId"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 9, "orderDetails.consignmentTracking.dialog.trackingId"), ": ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", tracking_r1.trackingUrl)("ngIfElse", showNumber_r2);
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind1(8, 11, "myAccountV2OrderHistory.estimateDeliveryLabel"));
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(10, 13, "orderDetails.consignmentTracking.dialog.estimate"), ": ", ɵɵpipeBind2(11, 15, tracking_r1.targetArrivalDate, "d, MMMM, yyyy"), " ");
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_ng_container_1_Template, 14, 18, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const consignment_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", consignment_r3.consignmentTracking);
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const consignment_r3 = ɵɵnextContext(3).$implicit;
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 2, "myAccountV2OrderHistory.consignmentStatusLabel"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "orderDetails.deliveryStatus_" + (consignment_r3 == null ? null : consignment_r3.status == null ? null : consignment_r3.status.toUpperCase())), " ");
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵpipe(1, "cxTranslate");
    ɵɵtext(2);
    ɵɵpipe(3, "cxDate");
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const consignment_r3 = ɵɵnextContext(3).$implicit;
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 2, "myAccountV2OrderHistory.consignmentStatusDateLabel"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" | ", ɵɵpipeBind2(4, 7, "myAccountV2OrderHistory.statusDate", ɵɵpureFunction1(10, _c30, ɵɵpipeBind2(3, 4, consignment_r3.statusDate, "d, MMMM, yyyy"))), " ");
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_span_0_Template, 4, 6, "span", 6)(1, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_span_1_Template, 5, 12, "span", 6);
  }
  if (rf & 2) {
    const consignment_r3 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngIf", consignment_r3.status);
    ɵɵadvance();
    ɵɵproperty("ngIf", consignment_r3.statusDate);
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵpipe(1, "cxTranslate");
    ɵɵelementStart(2, "span");
    ɵɵpipe(3, "cxTranslate");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtext(6, " | ");
    ɵɵtemplate(7, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_container_7_Template, 2, 1, "ng-container", 5)(8, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_ng_template_8_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const showLastUpdated_r4 = ɵɵreference(9);
    const ctx_r4 = ɵɵnextContext();
    const consignment_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 5, "myAccountV2OrderHistory.consignmentDetailLabel"));
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind1(3, 7, "myAccountV2OrderHistory.consignmentNumberLabel"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 9, "myAccountV2OrderHistory.consignmentCode", ɵɵpureFunction1(12, _c30, i_r6 + 1)), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", consignment_r3.trackingID)("ngIfElse", showLastUpdated_r4);
  }
}
function MyAccountV2ConsignmentEntriesComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MyAccountV2ConsignmentEntriesComponent_ng_container_0_div_1_Template, 10, 14, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const consignment_r3 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", consignment_r3);
  }
}
var _c31 = (a0) => ({
  count: a0
});
var _c32 = (a0) => ({
  cxRoute: "returnRequestDetails",
  params: a0
});
var _c33 = () => ({
  param: 1
});
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 10);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵtemplate(4, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_2_ng_container_4_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵelement(5, "cx-my-account-v2-consignment-entries", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r0 = ɵɵnextContext(2);
    const showManyItems_r2 = ɵɵreference(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "myAccountV2OrderHistory.deliveryPointOfServiceDetails.itemsToBePickUp"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", ɵɵpureFunction1(8, _c31, ctx_r0.getConsignmentsCount(ctx_r0.getPickupConsignments((tmp_6_0 = ctx_r0.order.consignments) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ɵɵpureFunction0(7, _c13)))));
    ɵɵadvance();
    ɵɵproperty("orderCode", (tmp_7_0 = ctx_r0.order.code) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "")("consignments", ctx_r0.getPickupConsignments((tmp_8_0 = ctx_r0.order.consignments) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : ɵɵpureFunction0(10, _c13)));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 10);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵtemplate(4, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_3_ng_container_4_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
    ɵɵelement(5, "cx-my-account-v2-consignment-entries", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r0 = ɵɵnextContext(2);
    const showManyItems_r2 = ɵɵreference(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "myAccountV2OrderHistory.checkoutMode.deliveryEntries"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", ɵɵpureFunction1(8, _c31, ctx_r0.getConsignmentsCount(ctx_r0.getDeliveryConsignments((tmp_6_0 = ctx_r0.order.consignments) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ɵɵpureFunction0(7, _c13)))));
    ɵɵadvance();
    ɵɵproperty("orderCode", (tmp_7_0 = ctx_r0.order.code) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : "")("consignments", ctx_r0.getDeliveryConsignments((tmp_8_0 = ctx_r0.order.consignments) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : ɵɵpureFunction0(10, _c13)));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵtemplate(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_div_1_ng_container_3_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    const showManyItems_r2 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "orderDetails.statusDisplay_" + ctx_r0.order.statusDisplay), " - ");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c31, ctx_r0.getOrderEntriesCount(ctx_r0.order.unconsignedEntries)));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵtemplate(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_ng_template_2_ng_container_3_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    const showManyItems_r2 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "orderDetails.statusDisplay_" + ctx_r0.order.statusDisplay), " - ");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c31, ctx_r0.getOrderEntriesCount(ctx_r0.order.unconsignedEntries)));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_div_1_Template, 4, 7, "div", 14)(2, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_ng_template_2_Template, 4, 7, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const nonCritical_r3 = ɵɵreference(3);
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isStatusCritical(ctx_r0.order.statusDisplay))("ngIfElse", nonCritical_r3);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵtemplate(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_2_ng_container_3_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = ɵɵnextContext(3);
    const showManyItems_r2 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "myAccountV2OrderHistory.checkoutMode.deliveryEntries"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c31, ctx_r0.getOrderEntriesCount(ctx_r0.getDeliveryUnconsignedEntries((tmp_7_0 = ctx_r0.order.unconsignedEntries) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : ɵɵpureFunction0(5, _c13)))));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵtemplate(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_3_ng_container_3_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = ɵɵnextContext(3);
    const showManyItems_r2 = ɵɵreference(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 3, "myAccountV2OrderHistory.checkoutPickupInStore.heading"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", showManyItems_r2)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c31, ctx_r0.getOrderEntriesCount(ctx_r0.getPickupUnconsignedEntries((tmp_7_0 = ctx_r0.order.unconsignedEntries) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : ɵɵpureFunction0(5, _c13)))));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_1_Template, 4, 2, "div", 7)(2, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_2_Template, 4, 8, "div", 13)(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_div_3_Template, 4, 8, "div", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.order.statusDisplay);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getOrderEntriesCount(ctx_r0.getDeliveryUnconsignedEntries((tmp_5_0 = ctx_r0.order.unconsignedEntries) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : ɵɵpureFunction0(3, _c13))) > 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getOrderEntriesCount(ctx_r0.getPickupUnconsignedEntries((tmp_6_0 = ctx_r0.order.unconsignedEntries) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : ɵɵpureFunction0(4, _c13))) > 0);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_a_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 18);
    ɵɵpipe(1, "cxUrl");
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const returnRequest_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("routerLink", ɵɵpipeBind1(1, 2, ɵɵpureFunction1(4, _c32, returnRequest_r4)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", returnRequest_r4.rma, "");
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const returnRequest_r4 = ɵɵnextContext().$implicit;
    ɵɵtextInterpolate1(" ", returnRequest_r4.code, " ");
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtext(1);
    ɵɵpipe(2, "cxDate");
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const creationTime_r5 = ctx.ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(3, 4, "myAccountV2OrderHistory.returnProcessed", ɵɵpureFunction1(7, _c30, ɵɵpipeBind2(2, 1, creationTime_r5, "d, MMMM, yyyy"))), " ");
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div", 15);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵtemplate(4, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_a_4_Template, 3, 6, "a", 17);
    ɵɵelementEnd();
    ɵɵtemplate(5, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_ng_template_5_Template, 1, 1, "ng-template", null, 3, ɵɵtemplateRefExtractor)(7, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_div_7_Template, 4, 9, "div", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const returnRequest_r4 = ctx.$implicit;
    const showReturnCode_r6 = ɵɵreference(6);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "returnRequestList.returnRequestId"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", returnRequest_r4.rma)("ngIfElse", showReturnCode_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", returnRequest_r4.creationTime);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "cx-media", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("container", item_r7.PRIMARY);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MyAccountV2OrderConsolidatedInformationComponent_div_0_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.getProductImages(ctx_r0.order.entries));
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5)(1, "div", 6);
    ɵɵtemplate(2, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_2_Template, 6, 11, "div", 7)(3, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_3_Template, 6, 11, "div", 7)(4, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_4_Template, 4, 5, "div", 7)(5, MyAccountV2OrderConsolidatedInformationComponent_div_0_div_5_Template, 8, 6, "div", 8);
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 9);
    ɵɵtemplate(7, MyAccountV2OrderConsolidatedInformationComponent_div_0_ng_container_7_Template, 2, 1, "ng-container", 7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.getConsignmentsCount(ctx_r0.getPickupConsignments((tmp_3_0 = ctx_r0.order.consignments) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ɵɵpureFunction0(5, _c13))) > 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getConsignmentsCount(ctx_r0.getDeliveryConsignments((tmp_4_0 = ctx_r0.order.consignments) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : ɵɵpureFunction0(6, _c13))) > 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.getOrderEntriesCount(ctx_r0.order.unconsignedEntries) > 0);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.order.returnRequests);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.order.entries);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const count_r8 = ɵɵnextContext().count;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 1, "myAccountV2OrderHistory.items", ɵɵpureFunction1(4, _c30, count_r8)), " ");
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MyAccountV2OrderConsolidatedInformationComponent_ng_template_1_ng_container_0_Template, 3, 6, "ng-container", 20);
  }
  if (rf & 2) {
    const count_r8 = ctx.count;
    ɵɵnextContext();
    const showOneItem_r9 = ɵɵreference(4);
    ɵɵproperty("ngIf", count_r8 > 1)("ngIfElse", showOneItem_r9);
  }
}
function MyAccountV2OrderConsolidatedInformationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "cxTranslate");
  }
  if (rf & 2) {
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, "myAccountV2OrderHistory.item", ɵɵpureFunction0(4, _c33)), "\n");
  }
}
function MyAccountV2OrderHistoryComponent_div_0_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 7)(2, "div", 8);
    ɵɵpipe(3, "cxTranslate");
    ɵɵlistener("click", function MyAccountV2OrderHistoryComponent_div_0_ng_container_8_ng_container_1_Template_div_click_2_listener() {
      const order_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.goToOrderDetail(order_r2));
    });
    ɵɵelementStart(4, "a", 9);
    ɵɵpipe(5, "cxUrl");
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 10)(9, "span");
    ɵɵpipe(10, "cxTranslate");
    ɵɵtext(11);
    ɵɵpipe(12, "cxDate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "span");
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementStart(15, "strong");
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelement(18, "cx-my-account-v2-order-consolidated-information", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind1(3, 10, "myAccountV2OrderHistory.orderCodeLabel"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(5, 12, ɵɵpureFunction1(26, _c4, order_r2)))("queryParams", ctx_r2.getQueryParams(order_r2));
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(7, 14, "orderHistory.orderId"), " ", order_r2 == null ? null : order_r2.code, "");
    ɵɵadvance(3);
    ɵɵattribute("aria-label", ɵɵpipeBind1(10, 16, "myAccountV2OrderHistory.orderPlaced"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(12, 18, order_r2.placed, "d, MMMM, yyyy"), " | ");
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind1(14, 21, "myAccountV2OrderHistory.totalPriceLabel"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(17, 23, "myAccountV2OrderHistory.totalPrice", ɵɵpureFunction1(28, _c30, order_r2.total == null ? null : order_r2.total.formattedValue)), " ");
    ɵɵadvance(2);
    ɵɵproperty("order", order_r2);
  }
}
function MyAccountV2OrderHistoryComponent_div_0_ng_container_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12);
    ɵɵpipe(1, "cxTranslate");
    ɵɵelementStart(2, "cx-pagination", 13);
    ɵɵlistener("viewPageEvent", function MyAccountV2OrderHistoryComponent_div_0_ng_container_8_div_2_Template_cx_pagination_viewPageEvent_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.pageChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const orderHistory_r5 = ɵɵnextContext(2).ngIf;
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 2, "myAccountV2OrderHistory.orderListPagination"));
    ɵɵadvance(2);
    ɵɵproperty("pagination", orderHistory_r5.pagination);
  }
}
function MyAccountV2OrderHistoryComponent_div_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MyAccountV2OrderHistoryComponent_div_0_ng_container_8_ng_container_1_Template, 19, 30, "ng-container", 5)(2, MyAccountV2OrderHistoryComponent_div_0_ng_container_8_div_2_Template, 3, 4, "div", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const orderHistory_r5 = ɵɵnextContext().ngIf;
    ɵɵadvance();
    ɵɵproperty("ngForOf", orderHistory_r5.orders);
    ɵɵadvance();
    ɵɵproperty("ngIf", orderHistory_r5.pagination.totalPages > 1);
  }
}
function MyAccountV2OrderHistoryComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵpipe(1, "cxTranslate");
    ɵɵelementStart(2, "div", 3)(3, "h2");
    ɵɵtext(4);
    ɵɵpipe(5, "async");
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 4);
    ɵɵtemplate(8, MyAccountV2OrderHistoryComponent_div_0_ng_container_8_Template, 3, 2, "ng-container", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const orderHistory_r5 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    const noOrder_r6 = ɵɵreference(3);
    ɵɵattribute("aria-label", ɵɵpipeBind1(1, 4, "myAccountV2OrderHistory.orderListResults"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(6, 8, "myAccountV2OrderHistory.heading", ɵɵpureFunction1(11, _c30, ɵɵpipeBind1(5, 6, ctx_r2.tabTitleParam$))), " ");
    ɵɵadvance(4);
    ɵɵproperty("ngIf", orderHistory_r5.pagination.totalResults > 0)("ngIfElse", noOrder_r6);
  }
}
function MyAccountV2OrderHistoryComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div");
    ɵɵpipe(2, "cxTranslate");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 14);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵattribute("aria-label", ɵɵpipeBind1(2, 4, "orderHistory.notFound"));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 6, "orderHistory.noOrders"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 8, ɵɵpureFunction0(12, _c7)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 10, "orderHistory.startShopping"));
  }
}
function MyAccountV2OrderHistoryComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MyAccountV2OrderHistoryComponent_ng_template_2_div_0_Template, 9, 13, "div", 2);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const loading_r7 = ɵɵreference(5);
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx_r2.isLoaded$))("ngIfElse", loading_r7);
  }
}
function MyAccountV2OrderHistoryComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
var _c34 = () => ({
  cxRoute: "replenishmentOrders"
});
function ReplenishmentOrderCancellationComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "button", 5, 0);
    ɵɵlistener("click", function ReplenishmentOrderCancellationComponent_div_6_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.openDialog());
    });
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 1, "orderDetails.cancelReplenishment.title"), " ");
  }
}
var _c35 = (a0) => ({
  cxRoute: "replenishmentDetails",
  params: a0
});
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 16)(1, "cx-pagination", 18);
    ɵɵlistener("viewPageEvent", function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_div_10_Template_cx_pagination_viewPageEvent_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const replenishmentOrders_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance();
    ɵɵproperty("pagination", replenishmentOrders_r4.pagination);
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_thead_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 19)(1, "th", 20)(2, "span", 21);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(5, "th", 20)(6, "span", 21);
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(9, "th", 20)(10, "span", 21);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(13, "th", 20)(14, "span", 21);
    ɵɵtext(15);
    ɵɵpipe(16, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(17, "th", 20)(18, "span", 21);
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(21, "th", 22)(22, "span", 21);
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(25, "th", 20)(26, "span", 21);
    ɵɵtext(27);
    ɵɵpipe(28, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "orderHistory.replenishmentOrderId"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 9, "orderHistory.purchaseOrderNumber"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 11, "orderHistory.startOn"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 13, "orderHistory.frequency"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 15, "orderHistory.nextOrderDate"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 17, "orderHistory.total"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(28, 19, "orderHistory.actions"), " ");
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_thead_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 19)(1, "tr")(2, "th", 23)(3, "span", 21);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(6, "th", 23)(7, "span", 21);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(10, "th", 23)(11, "span", 21);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(14, "th", 23)(15, "span", 21);
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(18, "th", 23)(19, "span", 21);
    ɵɵtext(20);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(22, "th", 24)(23, "span", 21);
    ɵɵtext(24);
    ɵɵpipe(25, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(26, "th", 23)(27, "span", 21);
    ɵɵtext(28);
    ɵɵpipe(29, "cxTranslate");
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 7, "orderHistory.replenishmentOrderId"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 9, "orderHistory.purchaseOrderNumber"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 11, "orderHistory.startOn"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 13, "orderHistory.frequency"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(21, 15, "orderHistory.nextOrderDate"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(25, 17, "orderHistory.total"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(29, 19, "orderHistory.actions"), " ");
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_18_button_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 36, 1);
    ɵɵlistener("click", function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_18_button_50_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const order_r6 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.openDialog($event, order_r6 == null ? null : order_r6.replenishmentOrderCode));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "orderHistory.cancel"), " ");
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 25);
    ɵɵlistener("click", function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_18_Template_tr_click_0_listener() {
      const order_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.goToOrderDetail(order_r6));
    });
    ɵɵelementStart(1, "td", 26)(2, "div", 27);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 28);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "td", 29)(9, "div", 27);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "a", 30);
    ɵɵpipe(13, "cxUrl");
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(16, "td", 29)(17, "div", 27);
    ɵɵtext(18);
    ɵɵpipe(19, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(20, "a", 28);
    ɵɵpipe(21, "cxUrl");
    ɵɵtext(22);
    ɵɵpipe(23, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(24, "td", 31)(25, "div", 27);
    ɵɵtext(26);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(28, "a", 28);
    ɵɵpipe(29, "cxUrl");
    ɵɵtext(30);
    ɵɵpipe(31, "slice");
    ɵɵelementEnd()();
    ɵɵelementStart(32, "td", 29)(33, "div", 27);
    ɵɵtext(34);
    ɵɵpipe(35, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(36, "a", 32);
    ɵɵpipe(37, "cxUrl");
    ɵɵtext(38);
    ɵɵpipe(39, "cxDate");
    ɵɵpipe(40, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(41, "td", 33)(42, "div", 27);
    ɵɵtext(43);
    ɵɵpipe(44, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(45, "a", 28);
    ɵɵpipe(46, "cxUrl");
    ɵɵtext(47);
    ɵɵelementEnd()();
    ɵɵelementStart(48, "td", 34);
    ɵɵelement(49, "div", 27);
    ɵɵtemplate(50, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_18_button_50_Template, 4, 3, "button", 35);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const order_r6 = ctx.$implicit;
    const i_r8 = ctx.index;
    ɵɵattribute("aria-rowindex", i_r8 + 1);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 20, "orderHistory.replenishmentOrderId"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 22, ɵɵpureFunction1(58, _c35, order_r6)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", order_r6 == null ? null : order_r6.replenishmentOrderCode, "");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 24, "orderHistory.purchaseOrderNumber"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(13, 26, ɵɵpureFunction1(60, _c35, order_r6)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", (order_r6 == null ? null : order_r6.purchaseOrderNumber == null ? null : order_r6.purchaseOrderNumber.length) > 0 ? order_r6 == null ? null : order_r6.purchaseOrderNumber : ɵɵpipeBind1(15, 28, "orderHistory.emptyPurchaseOrderId"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 30, "orderHistory.startOn"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(21, 32, ɵɵpureFunction1(62, _c35, order_r6)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(23, 34, order_r6 == null ? null : order_r6.firstDate, "M/d/yyyy"), "");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 37, "orderHistory.frequency"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(29, 39, ɵɵpureFunction1(64, _c35, order_r6)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind3(31, 41, order_r6 == null ? null : order_r6.trigger.displayTimeTable, 0, -12), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(35, 45, "orderHistory.nextOrderDate"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(37, 47, ɵɵpureFunction1(66, _c35, order_r6)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", (order_r6 == null ? null : order_r6.active) ? ɵɵpipeBind2(39, 49, order_r6 == null ? null : order_r6.trigger.activationTime, "M/d/yyyy") : ɵɵpipeBind1(40, 52, "orderHistory.cancelled"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(44, 54, "orderHistory.total"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(46, 56, ɵɵpureFunction1(68, _c35, order_r6)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", order_r6 == null ? null : order_r6.totalPriceWithTax.formattedValue, "");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", order_r6 == null ? null : order_r6.active);
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_cx_pagination_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "cx-pagination", 37);
    ɵɵlistener("viewPageEvent", function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_cx_pagination_21_Template_cx_pagination_viewPageEvent_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const replenishmentOrders_r4 = ɵɵnextContext(2).ngIf;
    ɵɵproperty("pagination", replenishmentOrders_r4.pagination);
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 7)(2, "label", 8)(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "cx-sorting", 9);
    ɵɵpipe(7, "cxTranslate");
    ɵɵpipe(8, "async");
    ɵɵpipe(9, "cxTranslate");
    ɵɵlistener("sortListEvent", function ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_Template_cx_sorting_sortListEvent_6_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changeSortCode($event));
    });
    ɵɵelementEnd()();
    ɵɵtemplate(10, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_div_10_Template, 2, 1, "div", 10);
    ɵɵelementEnd();
    ɵɵelementStart(11, "table", 11)(12, "caption", 12);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(15, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_thead_15_Template, 29, 21, "thead", 13)(16, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_thead_16_Template, 30, 21, "thead", 13);
    ɵɵelementStart(17, "tbody");
    ɵɵtemplate(18, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_tr_18_Template, 51, 70, "tr", 14);
    ɵɵelementEnd()();
    ɵɵelementStart(19, "div", 15)(20, "div", 16);
    ɵɵtemplate(21, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_cx_pagination_21_Template, 1, 1, "cx-pagination", 17);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const replenishmentOrders_r4 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 12, "orderHistory.sortBy"));
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(7, 14, "orderHistory.sortBy"));
    ɵɵproperty("sortOptions", replenishmentOrders_r4.sorts)("sortLabels", ɵɵpipeBind1(8, 16, ctx_r1.getSortLabels()))("selectedOption", replenishmentOrders_r4.pagination.sort)("ariaLabel", ɵɵpipeBind1(9, 18, "orderHistory.sortOrders"));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", replenishmentOrders_r4.pagination.totalPages > 1);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 20, "orderHistory.orderHistory"), " ");
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "!a11yTableHeaderReadout");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yTableHeaderReadout");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", replenishmentOrders_r4.replenishmentOrders);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", replenishmentOrders_r4.pagination.totalPages > 1);
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_template_8_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 39)(1, "div", 40)(2, "div");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 41);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 3, "orderHistory.noReplenishmentOrders"));
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 5, ɵɵpureFunction0(9, _c7)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 7, "orderHistory.startShopping"));
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ReplenishmentOrderHistoryComponent_ng_container_0_ng_template_8_div_0_Template, 9, 10, "div", 38);
    ɵɵpipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx_r1.isLoaded$));
  }
}
function ReplenishmentOrderHistoryComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "h3");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 5);
    ɵɵtemplate(7, ReplenishmentOrderHistoryComponent_ng_container_0_ng_container_7_Template, 22, 22, "ng-container", 6)(8, ReplenishmentOrderHistoryComponent_ng_container_0_ng_template_8_Template, 2, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const replenishmentOrders_r4 = ctx.ngIf;
    const noOrder_r10 = ɵɵreference(9);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 3, "orderHistory.replenishmentOrderHistory"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", replenishmentOrders_r4.pagination.totalResults > 0)("ngIfElse", noOrder_r10);
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const returnEntry_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.name, " ");
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const returnEntry_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "cartItems.id"), " ", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.code, " ");
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", variant_r2.name, ": ");
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", variant_r2.value, " ");
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵtemplate(1, ReturnRequestItemsComponent_table_0_tr_19_div_7_div_1_Template, 2, 1, "div", 25)(2, ReturnRequestItemsComponent_table_0_tr_19_div_7_div_2_Template, 2, 1, "div", 26);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", variant_r2.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", variant_r2.value);
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_td_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 28)(1, "div", 19);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 20);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const returnEntry_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "returnRequest.itemPrice"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.basePrice == null ? null : returnEntry_r1.orderEntry.basePrice.formattedValue, " ");
  }
}
function ReturnRequestItemsComponent_table_0_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 9)(1, "td", 10)(2, "div", 11);
    ɵɵelement(3, "cx-media", 12);
    ɵɵelementStart(4, "div", 13);
    ɵɵtemplate(5, ReturnRequestItemsComponent_table_0_tr_19_div_5_Template, 2, 1, "div", 14)(6, ReturnRequestItemsComponent_table_0_tr_19_div_6_Template, 3, 4, "div", 15)(7, ReturnRequestItemsComponent_table_0_tr_19_div_7_Template, 3, 2, "div", 16);
    ɵɵelementEnd()()();
    ɵɵtemplate(8, ReturnRequestItemsComponent_table_0_tr_19_td_8_Template, 6, 4, "td", 17);
    ɵɵelementStart(9, "td", 18)(10, "div", 19);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 20);
    ɵɵtext(14);
    ɵɵelementEnd()();
    ɵɵelementStart(15, "td", 21)(16, "div", 19);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(19, "div", 20);
    ɵɵtext(20);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const returnEntry_r1 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵproperty("container", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.images == null ? null : returnEntry_r1.orderEntry.product.images.PRIMARY);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.name);
    ɵɵadvance();
    ɵɵproperty("ngIf", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.code);
    ɵɵadvance();
    ɵɵproperty("ngForOf", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.product.baseOptions[0] == null ? null : returnEntry_r1.orderEntry.product.baseOptions[0].selected == null ? null : returnEntry_r1.orderEntry.product.baseOptions[0].selected.variantOptionQualifiers);
    ɵɵadvance();
    ɵɵproperty("ngIf", returnEntry_r1.orderEntry == null ? null : returnEntry_r1.orderEntry.basePrice);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 9, "returnRequest.returnQty"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", returnEntry_r1.expectedQuantity, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 11, "returnRequest.total"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", returnEntry_r1.refundAmount == null ? null : returnEntry_r1.refundAmount.formattedValue, " ");
  }
}
function ReturnRequestItemsComponent_table_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 1)(1, "caption", 2);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "thead")(5, "tr")(6, "th", 3);
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "th", 4);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "th", 5);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(15, "th", 6);
    ɵɵtext(16);
    ɵɵpipe(17, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(18, "tbody", 7);
    ɵɵtemplate(19, ReturnRequestItemsComponent_table_0_tr_19_Template, 21, 13, "tr", 8);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const returnRequest_r3 = ctx.ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 6, "returnRequest.caption"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 8, "returnRequest.item"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 10, "returnRequest.itemPrice"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 12, "returnRequest.returnQty"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(17, 14, "returnRequest.total"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", returnRequest_r3.returnEntries);
  }
}
function ReturnRequestOverviewComponent_ng_container_0_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 9);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function ReturnRequestOverviewComponent_ng_container_0_button_7_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const returnRequest_r4 = ɵɵnextContext().ngIf;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.cancelReturn(returnRequest_r4.rma));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("disabled", ɵɵpipeBind1(1, 2, ctx_r1.isCancelling$));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "returnRequest.cancel"), " ");
  }
}
function ReturnRequestOverviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "button", 3);
    ɵɵlistener("click", function ReturnRequestOverviewComponent_ng_container_0_Template_button_click_3_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.back());
    });
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 2);
    ɵɵtemplate(7, ReturnRequestOverviewComponent_ng_container_0_button_7_Template, 4, 6, "button", 4);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "div", 5)(9, "div", 6)(10, "div", 7);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 8);
    ɵɵtext(14);
    ɵɵelementEnd()();
    ɵɵelementStart(15, "div", 6)(16, "div", 7);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(19, "div", 8);
    ɵɵtext(20);
    ɵɵelementEnd()();
    ɵɵelementStart(21, "div", 6)(22, "div", 7);
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(25, "div", 8);
    ɵɵtext(26);
    ɵɵpipe(27, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const returnRequest_r4 = ctx.ngIf;
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 8, "common.back"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", returnRequest_r4.cancellable);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 10, "returnRequest.returnRequestId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(returnRequest_r4.rma);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 12, "returnRequest.orderCode"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(returnRequest_r4.order == null ? null : returnRequest_r4.order.code);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 14, "returnRequest.status"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(27, 16, "returnRequestList.statusDisplay_" + (returnRequest_r4 == null ? null : returnRequest_r4.status)), " ");
  }
}
function ReturnRequestTotalsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "h4");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 3)(7, "div", 4);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 5);
    ɵɵtext(11);
    ɵɵelementEnd()();
    ɵɵelementStart(12, "div", 3)(13, "div", 4);
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(16, "div", 5);
    ɵɵtext(17);
    ɵɵelementEnd()();
    ɵɵelementStart(18, "div", 6)(19, "div", 4);
    ɵɵtext(20);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(22, "div", 5);
    ɵɵtext(23);
    ɵɵelementEnd()();
    ɵɵelementStart(24, "div", 7);
    ɵɵtext(25);
    ɵɵpipe(26, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const returnRequest_r1 = ctx.ngIf;
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 8, "returnRequest.summary"));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 10, "returnRequest.subtotal"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", returnRequest_r1.subTotal == null ? null : returnRequest_r1.subTotal.formattedValue, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 12, "returnRequest.deliveryCode"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", returnRequest_r1.deliveryCost == null ? null : returnRequest_r1.deliveryCost.formattedValue, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(21, 14, "returnRequest.estimatedRefund"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", returnRequest_r1.totalPrice == null ? null : returnRequest_r1.totalPrice.formattedValue, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(26, 16, "returnRequest.note"), " ");
  }
}
function OrderReturnRequestListComponent_ng_container_0_ng_container_3_thead_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 13)(1, "th", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "th", 14);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "th", 14);
    ɵɵtext(8);
    ɵɵpipe(9, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "th", 14);
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "returnRequestList.returnRequestId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 6, "returnRequestList.orderId"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 8, "returnRequestList.date"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 10, "returnRequestList.status"));
  }
}
function OrderReturnRequestListComponent_ng_container_0_ng_container_3_thead_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 13)(1, "tr")(2, "th", 14);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "th", 14);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "th", 14);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(11, "th", 14);
    ɵɵtext(12);
    ɵɵpipe(13, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 4, "returnRequestList.returnRequestId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 6, "returnRequestList.orderId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 8, "returnRequestList.date"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 10, "returnRequestList.status"), " ");
  }
}
function OrderReturnRequestListComponent_ng_container_0_ng_container_3_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr")(1, "td", 15)(2, "div", 16);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 17);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "td", 15)(9, "div", 16);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "a", 17);
    ɵɵpipe(13, "cxUrl");
    ɵɵtext(14);
    ɵɵelementEnd()();
    ɵɵelementStart(15, "td", 18)(16, "div", 16);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtext(19);
    ɵɵpipe(20, "cxDate");
    ɵɵelementEnd();
    ɵɵelementStart(21, "td", 19)(22, "div", 16);
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtext(25);
    ɵɵpipe(26, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const return_r3 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 10, "returnRequestList.returnRequestId"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 12, ɵɵpureFunction1(27, _c32, return_r3)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", return_r3 == null ? null : return_r3.rma, "");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 14, "returnRequestList.orderId"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(13, 16, ɵɵpureFunction1(29, _c4, return_r3 == null ? null : return_r3.order)));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", return_r3 == null ? null : return_r3.order == null ? null : return_r3.order.code, "");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 18, "returnRequestList.date"), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(20, 20, return_r3 == null ? null : return_r3.creationTime, "longDate"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(24, 23, "returnRequestList.status"), " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(26, 25, "returnRequestList.statusDisplay_" + (return_r3 == null ? null : return_r3.status)), " ");
  }
}
function OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3)(2, "label", 4)(3, "span");
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(6, "cx-sorting", 5);
    ɵɵpipe(7, "async");
    ɵɵpipe(8, "cxTranslate");
    ɵɵlistener("sortListEvent", function OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template_cx_sorting_sortListEvent_6_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changeSortCode($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(9, "div", 6)(10, "cx-pagination", 7);
    ɵɵlistener("viewPageEvent", function OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template_cx_pagination_viewPageEvent_10_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd()()();
    ɵɵelementStart(11, "table", 8);
    ɵɵtemplate(12, OrderReturnRequestListComponent_ng_container_0_ng_container_3_thead_12_Template, 13, 12, "thead", 9)(13, OrderReturnRequestListComponent_ng_container_0_ng_container_3_thead_13_Template, 14, 12, "thead", 9);
    ɵɵelementStart(14, "tbody");
    ɵɵtemplate(15, OrderReturnRequestListComponent_ng_container_0_ng_container_3_tr_15_Template, 27, 31, "tr", 10);
    ɵɵelementEnd()();
    ɵɵelementStart(16, "div", 11)(17, "label", 4)(18, "span");
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(21, "cx-sorting", 5);
    ɵɵpipe(22, "async");
    ɵɵpipe(23, "cxTranslate");
    ɵɵlistener("sortListEvent", function OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template_cx_sorting_sortListEvent_21_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.changeSortCode($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(24, "div", 6)(25, "cx-pagination", 12);
    ɵɵlistener("viewPageEvent", function OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template_cx_pagination_viewPageEvent_25_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.pageChange($event));
    });
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const returnRequests_r4 = ɵɵnextContext().ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 15, "returnRequestList.sortBy"));
    ɵɵadvance(2);
    ɵɵproperty("sortOptions", returnRequests_r4.sorts)("sortLabels", ɵɵpipeBind1(7, 17, ctx_r1.getSortLabels()))("selectedOption", returnRequests_r4.pagination.sort)("ariaLabel", ɵɵpipeBind1(8, 19, "returnRequestList.sortReturns"));
    ɵɵadvance(4);
    ɵɵproperty("pagination", returnRequests_r4.pagination);
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "!a11yTableHeaderReadout");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yTableHeaderReadout");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", returnRequests_r4.returnRequests);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(20, 21, "returnRequestList.sortBy"));
    ɵɵadvance(2);
    ɵɵproperty("sortOptions", returnRequests_r4.sorts)("sortLabels", ɵɵpipeBind1(22, 23, ctx_r1.getSortLabels()))("selectedOption", returnRequests_r4.pagination.sort)("ariaLabel", ɵɵpipeBind1(23, 25, "returnRequestList.sortReturns"));
    ɵɵadvance(4);
    ɵɵproperty("pagination", returnRequests_r4.pagination);
  }
}
function OrderReturnRequestListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 1)(2, "div", 2);
    ɵɵtemplate(3, OrderReturnRequestListComponent_ng_container_0_ng_container_3_Template, 26, 27, "ng-container", 0);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const returnRequests_r4 = ctx.ngIf;
    ɵɵadvance(3);
    ɵɵproperty("ngIf", returnRequests_r4.pagination.totalResults > 0);
  }
}
var AmendOrderActionsComponent = class _AmendOrderActionsComponent {
  constructor(routingService) {
    this.routingService = routingService;
    this.styles = "row";
  }
  continue(event) {
    if (this.amendOrderForm.valid) {
      this.routingService.go({
        cxRoute: this.forwardRoute,
        params: {
          code: this.orderCode
        }
      });
    } else {
      this.amendOrderForm.markAllAsTouched();
      event.stopPropagation();
    }
  }
  static {
    this.ɵfac = function AmendOrderActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AmendOrderActionsComponent)(ɵɵdirectiveInject(RoutingService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AmendOrderActionsComponent,
      selectors: [["cx-amend-order-actions"]],
      hostVars: 2,
      hostBindings: function AmendOrderActionsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵclassMap(ctx.styles);
        }
      },
      inputs: {
        orderCode: "orderCode",
        amendOrderForm: "amendOrderForm",
        backRoute: "backRoute",
        forwardRoute: "forwardRoute"
      },
      standalone: false,
      decls: 8,
      vars: 13,
      consts: [[1, "col-xs-12", "col-md-4", "col-lg-3"], ["cxBtnLikeLink", "", 1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], ["class", "btn btn-block btn-primary", 3, "click", 4, "ngIf"], ["class", "btn btn-block btn-primary", "type", "submit", 4, "ngIf"], [1, "btn", "btn-block", "btn-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"]],
      template: function AmendOrderActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "a", 1);
          ɵɵpipe(2, "cxUrl");
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(5, "div", 0);
          ɵɵtemplate(6, AmendOrderActionsComponent_button_6_Template, 3, 3, "button", 2)(7, AmendOrderActionsComponent_button_7_Template, 4, 6, "button", 3);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance();
          ɵɵproperty("routerLink", ɵɵpipeBind1(2, 4, ɵɵpureFunction2(10, _c1, ctx.backRoute, ɵɵpureFunction1(8, _c0, ctx.orderCode))));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 6, "common.back"), " ");
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.forwardRoute);
          ɵɵadvance();
          ɵɵproperty("ngIf", !ctx.forwardRoute);
        }
      },
      dependencies: [NgIf, RouterLink, BtnLikeLinkDirective, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmendOrderActionsComponent, [{
    type: Component,
    args: [{
      selector: "cx-amend-order-actions",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="col-xs-12 col-md-4 col-lg-3">
  <a
    [routerLink]="
      {
        cxRoute: backRoute,
        params: { code: orderCode },
      } | cxUrl
    "
    cxBtnLikeLink
    class="btn btn-block btn-secondary"
  >
    {{ 'common.back' | cxTranslate }}
  </a>
</div>
<div class="col-xs-12 col-md-4 col-lg-3">
  <button
    *ngIf="forwardRoute"
    class="btn btn-block btn-primary"
    (click)="continue($event)"
  >
    {{ 'common.continue' | cxTranslate }}
  </button>

  <button
    *ngIf="!forwardRoute"
    class="btn btn-block btn-primary"
    type="submit"
    [attr.aria-label]="
      'orderDetails.cancellationAndReturn.submitDescription' | cxTranslate
    "
  >
    {{ 'orderDetails.cancellationAndReturn.submit' | cxTranslate }}
  </button>
</div>
`
    }]
  }], () => [{
    type: RoutingService
  }], {
    orderCode: [{
      type: Input
    }],
    amendOrderForm: [{
      type: Input
    }],
    backRoute: [{
      type: Input
    }],
    forwardRoute: [{
      type: Input
    }],
    styles: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var AmendOrderActionsModule = class _AmendOrderActionsModule {
  static {
    this.ɵfac = function AmendOrderActionsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AmendOrderActionsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AmendOrderActionsModule,
      declarations: [AmendOrderActionsComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, BtnLikeLinkModule],
      exports: [AmendOrderActionsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, BtnLikeLinkModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmendOrderActionsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, BtnLikeLinkModule],
      declarations: [AmendOrderActionsComponent],
      exports: [AmendOrderActionsComponent]
    }]
  }], null, null);
})();
var AmendOrderType;
(function(AmendOrderType2) {
  AmendOrderType2[AmendOrderType2["CANCEL"] = 0] = "CANCEL";
  AmendOrderType2[AmendOrderType2["RETURN"] = 1] = "RETURN";
})(AmendOrderType || (AmendOrderType = {}));
var OrderDetailsService = class _OrderDetailsService {
  constructor(orderHistoryFacade, routingService) {
    this.orderHistoryFacade = orderHistoryFacade;
    this.routingService = routingService;
    this.orderCode$ = this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params.orderCode), distinctUntilChanged());
    this.orderLoad$ = this.orderCode$.pipe(tap((orderCode) => {
      if (orderCode) {
        this.orderHistoryFacade.loadOrderDetails(orderCode);
      } else {
        this.orderHistoryFacade.clearOrderDetails();
      }
    }), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  isOrderDetailsLoading() {
    return this.orderHistoryFacade.getOrderDetailsLoading();
  }
  getOrderDetails() {
    return this.orderLoad$.pipe(switchMap(() => this.orderHistoryFacade.getOrderDetails()));
  }
  static {
    this.ɵfac = function OrderDetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailsService)(ɵɵinject(OrderHistoryFacade), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderDetailsService,
      factory: _OrderDetailsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderHistoryFacade
  }, {
    type: RoutingService
  }], null);
})();
function ValidateQuantityToCancel(control) {
  if (!control.value) {
    return null;
  }
  const quantity = Object.values(control.value).reduce((acc, val) => acc + val, 0);
  return quantity > 0 ? null : {
    cxNoSelectedItemToCancel: true
  };
}
var OrderAmendService = class _OrderAmendService {
  constructor(orderDetailsService) {
    this.orderDetailsService = orderDetailsService;
  }
  /**
   * Returns entries with an amended quantity.
   */
  getAmendedEntries() {
    return this.getForm().pipe(switchMap((form) => {
      return this.getEntries().pipe(map((entries) => entries.filter((entry) => this.getFormControl(form, entry).value > 0)));
    }));
  }
  getOrder() {
    return this.orderDetailsService.getOrderDetails();
  }
  /**
   * returns the form with form data at runtime
   */
  getForm() {
    return this.getOrder().pipe(tap((order) => {
      if (!this.form || this.form.get("orderCode")?.value !== order.code) {
        this.buildForm(order);
      }
    }), map(() => this.form));
  }
  buildForm(order) {
    this.form = new UntypedFormGroup({});
    this.form.addControl("orderCode", new UntypedFormControl(order.code));
    const entryGroup = new UntypedFormGroup({}, {
      validators: [ValidateQuantityToCancel]
    });
    this.form.addControl("entries", entryGroup);
    (order.entries || []).forEach((entry) => {
      const key = entry?.entryNumber?.toString() ?? "";
      entryGroup.addControl(key, new UntypedFormControl(0, {
        validators: [Validators.min(0), Validators.max(this.getMaxAmendQuantity(entry))]
      }));
    });
  }
  getFormControl(form, entry) {
    return form.get("entries")?.get(entry.entryNumber?.toString() ?? "");
  }
  /**
   * As discussed, this calculation is moved to SPA side.
   * The calculation and validation should be in backend facade layer.
   */
  getAmendedPrice(entry) {
    const amendedQuantity = this.getFormControl(this.form, entry).value;
    const amendedPrice = Object.assign({}, entry.basePrice);
    amendedPrice.value = Math.round((entry.basePrice?.value ?? 0) * amendedQuantity * 100) / 100;
    amendedPrice.formattedValue = formatCurrency(
      amendedPrice.value,
      // TODO: user current language
      "en",
      getCurrencySymbol(amendedPrice.currencyIso ?? "", "narrow"),
      amendedPrice.currencyIso
    );
    return amendedPrice;
  }
  getMaxAmendQuantity(entry) {
    return (this.isCancellation() ? entry.cancellableQuantity : entry.returnableQuantity) || entry.quantity || 0;
  }
  isCancellation() {
    return this.amendType === AmendOrderType.CANCEL;
  }
  static {
    this.ɵfac = function OrderAmendService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderAmendService)(ɵɵinject(OrderDetailsService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderAmendService,
      factory: _OrderAmendService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderAmendService, [{
    type: Injectable
  }], () => [{
    type: OrderDetailsService
  }], null);
})();
var CancelOrReturnItemsComponent = class _CancelOrReturnItemsComponent {
  constructor(orderAmendService) {
    this.orderAmendService = orderAmendService;
    this.isConfirmation = false;
    this.form$ = this.orderAmendService.getForm();
  }
  getControl(form, entry) {
    const control = form.get("entries")?.get(entry.entryNumber?.toString() ?? "");
    return control;
  }
  setAll(form) {
    this.entries.forEach((entry) => this.getControl(form, entry).setValue(this.getMaxAmendQuantity(entry)));
  }
  getItemPrice(entry) {
    return this.orderAmendService.getAmendedPrice(entry);
  }
  getMaxAmendQuantity(entry) {
    return this.orderAmendService.getMaxAmendQuantity(entry);
  }
  isCancellation() {
    return this.orderAmendService.isCancellation();
  }
  static {
    this.ɵfac = function CancelOrReturnItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelOrReturnItemsComponent)(ɵɵdirectiveInject(OrderAmendService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CancelOrReturnItemsComponent,
      selectors: [["cx-amend-order-items"]],
      inputs: {
        entries: "entries",
        isConfirmation: "isConfirmation"
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], ["class", "btn btn-link cx-action-link", 3, "click", 4, "ngIf"], [1, "cx-amend-order-items"], [1, "cx-visually-hidden"], ["role", "columnheader", 1, "cx-item-list-desc"], ["role", "columnheader", 1, "cx-item-list-price"], ["role", "columnheader", "class", "cx-item-list-amend-qty", 4, "ngIf"], ["role", "columnheader", 1, "cx-item-list-qty"], ["role", "columnheader", "class", "cx-item-list-total", 4, "ngIf"], [1, "cx-item-list-items"], ["class", "cx-item-list-row cx-amend-order-item-row", 4, "ngFor", "ngForOf"], [1, "btn", "btn-link", "cx-action-link", 3, "click"], ["role", "columnheader", 1, "cx-item-list-amend-qty"], ["role", "columnheader", 1, "cx-item-list-total"], [1, "cx-item-list-row", "cx-amend-order-item-row"], ["role", "cell"], [1, "cx-table-item-container"], ["format", "thumbnail", 3, "container"], [1, "cx-info"], [1, "cx-name"], ["class", "cx-code", 4, "ngIf"], ["role", "cell", "class", "cx-price", 4, "ngIf"], ["role", "cell", "class", "cx-request-qty", 4, "ngIf"], ["role", "cell", 1, "cx-quantity"], [1, "cx-mobile-header"], [1, "cx-value"], [3, "min", "max", "control", 4, "ngIf"], ["role", "cell", "class", "cx-total", 4, "ngIf"], [1, "cx-code"], ["class", "cx-property", 4, "ngFor", "ngForOf"], [1, "cx-property"], ["class", "cx-label", 4, "ngIf"], ["class", "cx-value", 4, "ngIf"], [1, "cx-label"], ["role", "cell", 1, "cx-price"], ["role", "cell", 1, "cx-request-qty"], [1, "cx-mobile-header", 3, "title"], [3, "min", "max", "control"], ["role", "cell", 1, "cx-total"]],
      template: function CancelOrReturnItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CancelOrReturnItemsComponent_div_0_Template, 21, 16, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.form$));
        }
      },
      dependencies: [NgForOf, NgIf, MediaComponent, ItemCounterComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelOrReturnItemsComponent, [{
    type: Component,
    args: [{
      selector: "cx-amend-order-items",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div *ngIf="form$ | async as form">
  <button
    *ngIf="!isConfirmation"
    class="btn btn-link cx-action-link"
    (click)="setAll(form)"
  >
    {{ 'orderDetails.cancellationAndReturn.setAll' | cxTranslate }}
  </button>

  <table class="cx-amend-order-items">
    <caption class="cx-visually-hidden">
      {{
        'orderDetails.caption' | cxTranslate
      }}
    </caption>
    <thead>
      <tr>
        <th role="columnheader" class="cx-item-list-desc">
          {{ 'orderDetails.cancellationAndReturn.item' | cxTranslate }}
        </th>
        <th role="columnheader" class="cx-item-list-price">
          {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}
        </th>
        <th
          *ngIf="!isConfirmation"
          role="columnheader"
          class="cx-item-list-amend-qty"
        >
          {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}
        </th>
        <th role="columnheader" class="cx-item-list-qty">
          {{
            (isCancellation()
              ? 'orderDetails.cancellationAndReturn.cancelQty'
              : 'orderDetails.cancellationAndReturn.returnQty'
            ) | cxTranslate
          }}
        </th>
        <th
          *ngIf="isConfirmation"
          role="columnheader"
          class="cx-item-list-total"
        >
          {{ 'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate }}
        </th>
      </tr>
    </thead>
    <tbody class="cx-item-list-items">
      <!--    TODO: This should be a separate component-->
      <tr
        *ngFor="let item of entries; let i = index"
        class="cx-item-list-row cx-amend-order-item-row"
      >
        <td role="cell">
          <div class="cx-table-item-container">
            <cx-media
              [container]="item.product.images?.PRIMARY"
              format="thumbnail"
            ></cx-media>

            <div class="cx-info">
              <div class="cx-name">
                {{ item.product.name }}
              </div>

              <div *ngIf="item.product.code" class="cx-code">
                {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}
              </div>
            </div>

            <ng-container *ngIf="item.product.baseOptions?.length">
              <div
                *ngFor="
                  let variant of item.product.baseOptions[0]?.selected
                    ?.variantOptionQualifiers
                "
                class="cx-property"
              >
                <div class="cx-label" *ngIf="variant.name">
                  {{ variant.name }}:
                </div>
                <div class="cx-value" *ngIf="variant.value">
                  {{ variant.value }}
                </div>
              </div>
            </ng-container>
          </div>
        </td>

        <td role="cell" class="cx-price" *ngIf="item.basePrice">
          <div class="cx-mobile-header">
            {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}
          </div>
          <div class="cx-value">
            {{ item.basePrice?.formattedValue }}
          </div>
        </td>

        <td role="cell" *ngIf="!isConfirmation" class="cx-request-qty">
          <div
            class="cx-mobile-header"
            title="{{ 'cartItems.quantityTitle' | cxTranslate }}"
          >
            {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}
          </div>
          <div class="cx-value">
            {{ getMaxAmendQuantity(item) }}
          </div>
        </td>

        <td role="cell" class="cx-quantity">
          <div class="cx-mobile-header">
            {{
              (isCancellation()
                ? 'orderDetails.cancellationAndReturn.cancelQty'
                : 'orderDetails.cancellationAndReturn.returnQty'
              ) | cxTranslate
            }}
          </div>
          <div class="cx-value">
            <ng-container *ngIf="isConfirmation">
              {{ getControl(form, item).value }}
            </ng-container>
            <cx-item-counter
              *ngIf="!isConfirmation"
              [min]="0"
              [max]="getMaxAmendQuantity(item)"
              [control]="getControl(form, item)"
            ></cx-item-counter>
          </div>
        </td>

        <td role="cell" *ngIf="isConfirmation" class="cx-total">
          <div class="cx-mobile-header">
            {{ 'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate }}
          </div>
          <div class="cx-value">{{ getItemPrice(item)?.formattedValue }}</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`
    }]
  }], () => [{
    type: OrderAmendService
  }], {
    entries: [{
      type: Input
    }],
    isConfirmation: [{
      type: Input
    }]
  });
})();
var AmendOrderItemsModule = class _AmendOrderItemsModule {
  static {
    this.ɵfac = function AmendOrderItemsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AmendOrderItemsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AmendOrderItemsModule,
      declarations: [CancelOrReturnItemsComponent],
      imports: [CommonModule, ReactiveFormsModule, I18nModule, MediaModule, ItemCounterModule, FormErrorsModule],
      exports: [CancelOrReturnItemsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, ReactiveFormsModule, I18nModule, MediaModule, ItemCounterModule, FormErrorsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmendOrderItemsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, I18nModule, MediaModule, ItemCounterModule, FormErrorsModule],
      declarations: [CancelOrReturnItemsComponent],
      exports: [CancelOrReturnItemsComponent]
    }]
  }], null, null);
})();
var CancelOrderConfirmationComponent = class _CancelOrderConfirmationComponent {
  constructor(orderAmendService) {
    this.orderAmendService = orderAmendService;
    this.form$ = this.orderAmendService.getForm().pipe(tap((form) => this.orderCode = form.value.orderCode));
    this.entries$ = this.orderAmendService.getAmendedEntries();
  }
  submit(form) {
    if (form.valid) {
      this.orderAmendService.save();
    } else {
      form.markAllAsTouched();
    }
  }
  static {
    this.ɵfac = function CancelOrderConfirmationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelOrderConfirmationComponent)(ɵɵdirectiveInject(OrderAmendService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CancelOrderConfirmationComponent,
      selectors: [["cx-cancel-order-confirmation"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["actions", ""], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [4, "ngTemplateOutlet"], [3, "entries", "isConfirmation", 4, "ngIf"], [3, "entries", "isConfirmation"], ["backRoute", "orderCancel", 3, "orderCode", "amendOrderForm", 4, "ngIf"], ["backRoute", "orderCancel", 3, "orderCode", "amendOrderForm"]],
      template: function CancelOrderConfirmationComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CancelOrderConfirmationComponent_form_0_Template, 7, 6, "form", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.form$));
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, ɵNgNoValidate, NgControlStatusGroup, FormGroupDirective, CancelOrReturnItemsComponent, AmendOrderActionsComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelOrderConfirmationComponent, [{
    type: Component,
    args: [{
      selector: "cx-cancel-order-confirmation",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<form\n  *ngIf="form$ | async as form"\n  [formGroup]="form"\n  (ngSubmit)="submit(form)"\n>\n  <ng-container *ngTemplateOutlet="actions"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf="entries$ | async as entries"\n    [entries]="entries"\n    [isConfirmation]="true"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet="actions"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf="orderCode"\n      [orderCode]="orderCode"\n      [amendOrderForm]="form"\n      backRoute="orderCancel"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n'
    }]
  }], () => [{
    type: OrderAmendService
  }], null);
})();
var OrderCancellationService = class _OrderCancellationService extends OrderAmendService {
  constructor(orderDetailsService, orderHistoryFacade, routing, globalMessageService) {
    super(orderDetailsService);
    this.orderDetailsService = orderDetailsService;
    this.orderHistoryFacade = orderHistoryFacade;
    this.routing = routing;
    this.globalMessageService = globalMessageService;
    this.amendType = AmendOrderType.CANCEL;
  }
  /**
   * Return cancellable order entries.
   */
  getEntries() {
    return this.getOrder().pipe(filter((order) => !!order?.entries), map((order) => order.entries?.filter((entry) => entry.entryNumber !== -1 && entry.cancellableQuantity && entry.cancellableQuantity > 0) ?? []));
  }
  save() {
    const orderCode = this.form.value.orderCode;
    const entries = this.form.value.entries;
    const inputs = Object.keys(entries).filter((entryNumber) => entries[entryNumber] > 0).map((entryNumber) => ({
      orderEntryNumber: Number(entryNumber),
      quantity: entries[entryNumber]
    }));
    this.form.reset();
    this.orderHistoryFacade.cancelOrder(orderCode, {
      cancellationRequestEntryInputs: inputs
    });
    this.orderHistoryFacade.getCancelOrderSuccess().pipe(first(Boolean)).subscribe(() => this.afterSave(orderCode));
  }
  afterSave(orderCode) {
    this.orderHistoryFacade.resetCancelOrderProcessState();
    this.globalMessageService.add({
      key: "orderDetails.cancellationAndReturn.cancelSuccess",
      params: {
        orderCode
      }
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.routing.go({
      cxRoute: "orders"
    });
  }
  static {
    this.ɵfac = function OrderCancellationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderCancellationService)(ɵɵinject(OrderDetailsService), ɵɵinject(OrderHistoryFacade), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderCancellationService,
      factory: _OrderCancellationService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderCancellationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderDetailsService
  }, {
    type: OrderHistoryFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }], null);
})();
var OrderCancellationGuard = class _OrderCancellationGuard {
  constructor(orderAmendService, semanticPathService, router) {
    this.orderAmendService = orderAmendService;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    return this.orderAmendService.getForm().pipe(map((form) => {
      if (!form.valid) {
        return this.router.parseUrl(this.semanticPathService.get("orders") ?? "");
      } else {
        return true;
      }
    }));
  }
  static {
    this.ɵfac = function OrderCancellationGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderCancellationGuard)(ɵɵinject(OrderCancellationService), ɵɵinject(SemanticPathService), ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderCancellationGuard,
      factory: _OrderCancellationGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderCancellationGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderCancellationService
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var CancelOrderConfirmationModule = class _CancelOrderConfirmationModule {
  static {
    this.ɵfac = function CancelOrderConfirmationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelOrderConfirmationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CancelOrderConfirmationModule,
      declarations: [CancelOrderConfirmationComponent],
      imports: [CommonModule, ReactiveFormsModule, AmendOrderItemsModule, AmendOrderActionsModule],
      exports: [CancelOrderConfirmationComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CancelOrderConfirmationComponent: {
            component: CancelOrderConfirmationComponent,
            guards: [AuthGuard, OrderCancellationGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderCancellationService
            }]
          }
        }
      })],
      imports: [CommonModule, ReactiveFormsModule, AmendOrderItemsModule, AmendOrderActionsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelOrderConfirmationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, AmendOrderItemsModule, AmendOrderActionsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CancelOrderConfirmationComponent: {
            component: CancelOrderConfirmationComponent,
            guards: [AuthGuard, OrderCancellationGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderCancellationService
            }]
          }
        }
      })],
      declarations: [CancelOrderConfirmationComponent],
      exports: [CancelOrderConfirmationComponent]
    }]
  }], null, null);
})();
var CancelOrderComponent = class _CancelOrderComponent {
  constructor(orderAmendService) {
    this.orderAmendService = orderAmendService;
    this.globalMessageType = GlobalMessageType;
    this.form$ = this.orderAmendService.getForm().pipe(tap((form) => this.orderCode = form.value.orderCode));
    this.entries$ = this.orderAmendService.getEntries();
  }
  static {
    this.ɵfac = function CancelOrderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelOrderComponent)(ɵɵdirectiveInject(OrderAmendService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _CancelOrderComponent,
      selectors: [["cx-cancel-order"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["actions", ""], [4, "ngIf"], ["role", "alert", 3, "text", "isVisibleCloseButton", "type", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "entries", 4, "ngIf"], ["role", "alert", 3, "text", "isVisibleCloseButton", "type"], [3, "entries"], ["backRoute", "orderDetails", "forwardRoute", "orderCancelConfirmation", 3, "orderCode", "amendOrderForm", 4, "ngIf"], ["backRoute", "orderDetails", "forwardRoute", "orderCancelConfirmation", 3, "orderCode", "amendOrderForm"]],
      template: function CancelOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, CancelOrderComponent_ng_container_0_Template, 8, 6, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.form$));
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, CancelOrReturnItemsComponent, AmendOrderActionsComponent, MessageComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-cancel-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="form$ | async as form">
  <cx-message
    role="alert"
    *ngIf="!form.get('entries').valid && form.get('entries').touched"
    [text]="'formErrors.cxNoSelectedItemToCancel' | cxTranslate"
    [isVisibleCloseButton]="false"
    [type]="globalMessageType.MSG_TYPE_ERROR"
  >
  </cx-message>
  <ng-container *ngTemplateOutlet="actions"></ng-container>
  <cx-amend-order-items *ngIf="entries$ | async as entries" [entries]="entries">
  </cx-amend-order-items>

  <ng-container *ngTemplateOutlet="actions"></ng-container>

  <ng-template #actions>
    <cx-amend-order-actions
      *ngIf="orderCode"
      [orderCode]="orderCode"
      [amendOrderForm]="form"
      backRoute="orderDetails"
      forwardRoute="orderCancelConfirmation"
    ></cx-amend-order-actions>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: OrderAmendService
  }], null);
})();
var CancelOrderModule = class _CancelOrderModule {
  static {
    this.ɵfac = function CancelOrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CancelOrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _CancelOrderModule,
      declarations: [CancelOrderComponent],
      imports: [CommonModule, I18nModule, AmendOrderItemsModule, AmendOrderActionsModule, FormErrorsModule, MessageComponentModule, FeaturesConfigModule],
      exports: [CancelOrderComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          CancelOrderComponent: {
            component: CancelOrderComponent,
            guards: [AuthGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderCancellationService
            }]
          }
        }
      })],
      imports: [CommonModule, I18nModule, AmendOrderItemsModule, AmendOrderActionsModule, FormErrorsModule, MessageComponentModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelOrderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, AmendOrderItemsModule, AmendOrderActionsModule, FormErrorsModule, MessageComponentModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          CancelOrderComponent: {
            component: CancelOrderComponent,
            guards: [AuthGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderCancellationService
            }]
          }
        }
      })],
      declarations: [CancelOrderComponent],
      exports: [CancelOrderComponent]
    }]
  }], null, null);
})();
var OrderCancellationModule = class _OrderCancellationModule {
  static {
    this.ɵfac = function OrderCancellationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderCancellationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderCancellationModule,
      imports: [CancelOrderModule, CancelOrderConfirmationModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CancelOrderModule, CancelOrderConfirmationModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderCancellationModule, [{
    type: NgModule,
    args: [{
      imports: [CancelOrderModule, CancelOrderConfirmationModule]
    }]
  }], null, null);
})();
var OrderReturnService = class _OrderReturnService extends OrderAmendService {
  constructor(orderDetailsService, returnRequestService, routing, globalMessageService) {
    super(orderDetailsService);
    this.orderDetailsService = orderDetailsService;
    this.returnRequestService = returnRequestService;
    this.routing = routing;
    this.globalMessageService = globalMessageService;
    this.amendType = AmendOrderType.RETURN;
  }
  getEntries() {
    return this.getOrder().pipe(filter((order) => !!order.entries), map((order) => order.entries?.filter((entry) => entry.entryNumber !== -1 && entry.returnableQuantity && entry.returnableQuantity > 0) ?? []));
  }
  save() {
    const orderCode = this.form.value.orderCode;
    const entries = this.form.value.entries;
    const inputs = Object.keys(entries).filter((entryNumber) => entries[entryNumber] > 0).map((entryNumber) => ({
      orderEntryNumber: Number(entryNumber),
      quantity: entries[entryNumber]
    }));
    this.returnRequestService.createOrderReturnRequest({
      orderCode,
      returnRequestEntryInputs: inputs
    });
    this.returnRequestService.getReturnRequestSuccess().pipe(first(Boolean)).subscribe(() => {
      this.form.reset();
      this.afterSave();
    });
  }
  afterSave() {
    this.returnRequestService.getOrderReturnRequest().pipe(first((r) => !!r)).subscribe((returnRequest) => {
      const rma = returnRequest.rma;
      this.globalMessageService.add({
        key: "orderDetails.cancellationAndReturn.returnSuccess",
        params: {
          rma
        }
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
      this.routing.go({
        cxRoute: "returnRequestDetails",
        params: {
          rma
        }
      });
    });
  }
  static {
    this.ɵfac = function OrderReturnService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderReturnService)(ɵɵinject(OrderDetailsService), ɵɵinject(OrderReturnRequestFacade), ɵɵinject(RoutingService), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderReturnService,
      factory: _OrderReturnService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderDetailsService
  }, {
    type: OrderReturnRequestFacade
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }], null);
})();
var OrderReturnGuard = class _OrderReturnGuard {
  constructor(orderAmendService, semanticPathService, router) {
    this.orderAmendService = orderAmendService;
    this.semanticPathService = semanticPathService;
    this.router = router;
  }
  canActivate() {
    return this.orderAmendService.getForm().pipe(map((form) => {
      if (!form.valid) {
        return this.router.parseUrl(this.semanticPathService.get("orders") ?? "");
      } else {
        return true;
      }
    }));
  }
  static {
    this.ɵfac = function OrderReturnGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderReturnGuard)(ɵɵinject(OrderReturnService), ɵɵinject(SemanticPathService), ɵɵinject(Router));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderReturnGuard,
      factory: _OrderReturnGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderReturnService
  }, {
    type: SemanticPathService
  }, {
    type: Router
  }], null);
})();
var ReturnOrderConfirmationComponent = class _ReturnOrderConfirmationComponent {
  constructor(orderAmendService) {
    this.orderAmendService = orderAmendService;
    this.form$ = this.orderAmendService.getForm().pipe(tap((form) => this.orderCode = form.value.orderCode));
    this.entries$ = this.orderAmendService.getAmendedEntries();
  }
  submit(form) {
    form.disable();
    this.orderAmendService.save();
  }
  static {
    this.ɵfac = function ReturnOrderConfirmationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReturnOrderConfirmationComponent)(ɵɵdirectiveInject(OrderAmendService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ReturnOrderConfirmationComponent,
      selectors: [["cx-return-order-confirmation"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["actions", ""], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "ngSubmit", "formGroup"], [4, "ngTemplateOutlet"], [3, "entries", "isConfirmation", 4, "ngIf"], [3, "entries", "isConfirmation"], ["backRoute", "orderReturn", 3, "orderCode", "amendOrderForm", 4, "ngIf"], ["backRoute", "orderReturn", 3, "orderCode", "amendOrderForm"]],
      template: function ReturnOrderConfirmationComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ReturnOrderConfirmationComponent_form_0_Template, 7, 6, "form", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.form$));
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, CancelOrReturnItemsComponent, ɵNgNoValidate, NgControlStatusGroup, FormGroupDirective, AmendOrderActionsComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnOrderConfirmationComponent, [{
    type: Component,
    args: [{
      selector: "cx-return-order-confirmation",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<form\n  *ngIf="form$ | async as form"\n  [formGroup]="form"\n  (ngSubmit)="submit(form)"\n>\n  <ng-container *ngTemplateOutlet="actions"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf="entries$ | async as entries"\n    [entries]="entries"\n    [isConfirmation]="true"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet="actions"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf="orderCode"\n      [orderCode]="orderCode"\n      [amendOrderForm]="form"\n      backRoute="orderReturn"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n'
    }]
  }], () => [{
    type: OrderAmendService
  }], null);
})();
var ReturnOrderConfirmationModule = class _ReturnOrderConfirmationModule {
  static {
    this.ɵfac = function ReturnOrderConfirmationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReturnOrderConfirmationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ReturnOrderConfirmationModule,
      declarations: [ReturnOrderConfirmationComponent],
      imports: [CommonModule, AmendOrderItemsModule, I18nModule, ReactiveFormsModule, AmendOrderActionsModule],
      exports: [ReturnOrderConfirmationComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturnOrderConfirmationComponent: {
            component: ReturnOrderConfirmationComponent,
            guards: [AuthGuard, OrderReturnGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderReturnService
            }]
          }
        }
      })],
      imports: [CommonModule, AmendOrderItemsModule, I18nModule, ReactiveFormsModule, AmendOrderActionsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnOrderConfirmationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AmendOrderItemsModule, I18nModule, ReactiveFormsModule, AmendOrderActionsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturnOrderConfirmationComponent: {
            component: ReturnOrderConfirmationComponent,
            guards: [AuthGuard, OrderReturnGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderReturnService
            }]
          }
        }
      })],
      declarations: [ReturnOrderConfirmationComponent],
      exports: [ReturnOrderConfirmationComponent]
    }]
  }], null, null);
})();
var ReturnOrderComponent = class _ReturnOrderComponent {
  constructor(orderAmendService) {
    this.orderAmendService = orderAmendService;
    this.form$ = this.orderAmendService.getForm().pipe(tap((form) => this.orderCode = form.value.orderCode));
    this.consignments$ = this.orderAmendService.getOrder().pipe(map((order) => order.consignments ?? []));
    this.entries$ = combineLatest([this.orderAmendService.getEntries(), this.consignments$]).pipe(map(([entries, consignments]) => {
      const consignmentEntries = consignments.flatMap((consignment) => consignment.entries || []);
      return entries.map((entry) => {
        const consignmentEntry = consignmentEntries.find((ce) => ce.orderEntry?.product?.code === entry.product?.code);
        return consignmentEntry ? __spreadProps(__spreadValues({}, entry), {
          returnableQuantity: consignmentEntry.shippedQuantity ?? 0
        }) : null;
      }).filter((entry) => !!entry && entry.returnableQuantity !== 0);
    }));
  }
  static {
    this.ɵfac = function ReturnOrderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReturnOrderComponent)(ɵɵdirectiveInject(OrderAmendService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ReturnOrderComponent,
      selectors: [["cx-return-order"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["actions", ""], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "entries", 4, "ngIf"], [3, "control"], [3, "entries"], ["backRoute", "orderDetails", "forwardRoute", "orderReturnConfirmation", 3, "orderCode", "amendOrderForm", 4, "ngIf"], ["backRoute", "orderDetails", "forwardRoute", "orderReturnConfirmation", 3, "orderCode", "amendOrderForm"]],
      template: function ReturnOrderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ReturnOrderComponent_ng_container_0_Template, 8, 6, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.form$));
        }
      },
      dependencies: [NgIf, NgTemplateOutlet, CancelOrReturnItemsComponent, AmendOrderActionsComponent, FormErrorsComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnOrderComponent, [{
    type: Component,
    args: [{
      selector: "cx-return-order",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="form$ | async as form">
  <ng-container *ngTemplateOutlet="actions"></ng-container>

  <cx-amend-order-items *ngIf="entries$ | async as entries" [entries]="entries">
  </cx-amend-order-items>

  <cx-form-errors [control]="form.get('entries')"></cx-form-errors>

  <ng-container *ngTemplateOutlet="actions"></ng-container>

  <ng-template #actions>
    <cx-amend-order-actions
      *ngIf="orderCode"
      [orderCode]="orderCode"
      [amendOrderForm]="form"
      backRoute="orderDetails"
      forwardRoute="orderReturnConfirmation"
    ></cx-amend-order-actions>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: OrderAmendService
  }], null);
})();
var ReturnOrderModule = class _ReturnOrderModule {
  static {
    this.ɵfac = function ReturnOrderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReturnOrderModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ReturnOrderModule,
      declarations: [ReturnOrderComponent],
      imports: [CommonModule, AmendOrderItemsModule, AmendOrderActionsModule, FormErrorsModule],
      exports: [ReturnOrderComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturnOrderComponent: {
            component: ReturnOrderComponent,
            guards: [AuthGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderReturnService
            }]
          }
        }
      })],
      imports: [CommonModule, AmendOrderItemsModule, AmendOrderActionsModule, FormErrorsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnOrderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AmendOrderItemsModule, AmendOrderActionsModule, FormErrorsModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturnOrderComponent: {
            component: ReturnOrderComponent,
            guards: [AuthGuard],
            providers: [{
              provide: OrderAmendService,
              useExisting: OrderReturnService
            }]
          }
        }
      })],
      declarations: [ReturnOrderComponent],
      exports: [ReturnOrderComponent]
    }]
  }], null, null);
})();
var OrderReturnModule = class _OrderReturnModule {
  static {
    this.ɵfac = function OrderReturnModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderReturnModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderReturnModule,
      imports: [ReturnOrderModule, ReturnOrderConfirmationModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [ReturnOrderModule, ReturnOrderConfirmationModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnModule, [{
    type: NgModule,
    args: [{
      imports: [ReturnOrderModule, ReturnOrderConfirmationModule]
    }]
  }], null, null);
})();
var OrderConfirmationGuard = class _OrderConfirmationGuard {
  constructor(orderFacade, router, semanticPathService) {
    this.orderFacade = orderFacade;
    this.router = router;
    this.semanticPathService = semanticPathService;
  }
  canActivate() {
    return this.orderFacade.getOrderDetails().pipe(map((orderDetails) => {
      if (orderDetails && Object.keys(orderDetails).length !== 0) {
        return true;
      } else {
        return this.router.parseUrl(this.semanticPathService.get("orders") ?? "");
      }
    }));
  }
  static {
    this.ɵfac = function OrderConfirmationGuard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConfirmationGuard)(ɵɵinject(OrderFacade), ɵɵinject(Router), ɵɵinject(SemanticPathService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderConfirmationGuard,
      factory: _OrderConfirmationGuard.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderFacade
  }, {
    type: Router
  }, {
    type: SemanticPathService
  }], null);
})();
var MyAccountV2OrdersComponent = class _MyAccountV2OrdersComponent {
  constructor() {
    this.service = inject(MyAccountV2OrderHistoryService);
    this.PAGE_SIZE = 3;
    this.orders$ = this.service.getOrderHistoryList(this.PAGE_SIZE).pipe(tap(() => this.isLoaded$.next(true)));
    this.isLoaded$ = new BehaviorSubject(false);
  }
  getProduct(order) {
    if (order.entries) {
      for (const entry of order.entries) {
        if (entry.product && entry.product.name && entry.product.images) {
          return entry.product;
        }
      }
      return order.entries[0].product;
    }
  }
  ngOnDestroy() {
    this.isLoaded$.next(false);
    this.service.clearOrderList();
  }
  static {
    this.ɵfac = function MyAccountV2OrdersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2OrdersComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyAccountV2OrdersComponent,
      selectors: [["cx-my-account-v2-orders"]],
      standalone: false,
      decls: 17,
      vars: 20,
      consts: [["noOrder", ""], ["loading", ""], [1, "cx-my-account-view-header"], ["role", "heading", "aria-level", "4", 1, "cx-my-account-view-heading"], [1, "cx-my-account-view-show-more"], ["id", "show-more-orders", 1, "btn-link", "cx-action-link", 3, "routerLink"], [4, "ngIf", "ngIfElse"], [1, "cx-my-account-view-body"], [4, "ngFor", "ngForOf"], [1, "cx-my-account-view-order"], [1, "cx-my-account-view-order-header"], ["class", "cx-my-account-view-status", 4, "ngIf"], [1, "cx-my-account-view-code"], [1, "cx-my-account-view-order-body"], [4, "ngIf"], [1, "cx-my-account-view-status"], [1, "cx-my-account-view-order-column-1"], [1, "cx-my-account-view-order-column-1-image"], ["format", "thumbnail", "role", "presentation", 1, "cx-my-account-view-order-img", 3, "container"], [1, "cx-my-account-view-order-column-1-details"], [1, "cx-my-account-view-order-column-1-details-top"], [1, "cx-my-account-view-product-name"], [1, "cx-my-account-view-purchased-on"], [1, "cx-my-account-view-item-count"], [1, "cx-my-account-view-order-column-1-details-bottom"], [1, "cx-my-account-view-total-price"], [1, "cx-my-account-view-order-column-2"], [1, "btn-link", "cx-action-link", 3, "routerLink"], ["class", "cx-my-account-no-order", 4, "ngIf", "ngIfElse"], [1, "cx-my-account-no-order"], ["routerLinkActive", "active", 1, "cx-no-order", 3, "routerLink"], [1, "cx-spinner"]],
      template: function MyAccountV2OrdersComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 2)(1, "div", 3);
          ɵɵpipe(2, "cxTranslate");
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "div", 4)(6, "a", 5);
          ɵɵpipe(7, "cxUrl");
          ɵɵpipe(8, "cxTranslate");
          ɵɵtext(9);
          ɵɵpipe(10, "cxTranslate");
          ɵɵelementEnd()()();
          ɵɵtemplate(11, MyAccountV2OrdersComponent_div_11_Template, 2, 2, "div", 6);
          ɵɵpipe(12, "async");
          ɵɵtemplate(13, MyAccountV2OrdersComponent_ng_template_13_Template, 2, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(15, MyAccountV2OrdersComponent_ng_template_15_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const noOrder_r5 = ɵɵreference(14);
          ɵɵadvance();
          ɵɵattribute("aria-label", ɵɵpipeBind1(2, 7, "myAccountV2OrderHistory.orderListResults"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 9, "myAccountV2Orders.heading"), " ");
          ɵɵadvance(3);
          ɵɵproperty("routerLink", ɵɵpipeBind1(7, 11, ɵɵpureFunction0(19, _c2)));
          ɵɵattribute("aria-label", ɵɵpipeBind1(8, 13, "myAccountV2Orders.showMoreLabel"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 15, "myAccountV2Orders.showMore"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(12, 17, ctx.orders$))("ngIfElse", noOrder_r5);
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive, SpinnerComponent, MediaComponent, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrdersComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-orders",
      standalone: false,
      template: `<div class="cx-my-account-view-header">
  <!-- HEADER -->
  <div
    class="cx-my-account-view-heading"
    role="heading"
    aria-level="4"
    [attr.aria-label]="'myAccountV2OrderHistory.orderListResults' | cxTranslate"
  >
    {{ 'myAccountV2Orders.heading' | cxTranslate }}
  </div>

  <!-- SHOW MORE -->
  <div class="cx-my-account-view-show-more">
    <a
      id="show-more-orders"
      [attr.aria-label]="'myAccountV2Orders.showMoreLabel' | cxTranslate"
      class="btn-link cx-action-link"
      [routerLink]="
        {
          cxRoute: 'orders',
        } | cxUrl
      "
    >
      {{ 'myAccountV2Orders.showMore' | cxTranslate }}
    </a>
  </div>
</div>

<div *ngIf="orders$ | async as orderHistory; else noOrder">
  <!-- BODY -->
  <ng-container *ngIf="orderHistory.pagination.totalResults > 0; else noOrder">
    <div class="cx-my-account-view-body">
      <ng-container *ngFor="let order of orderHistory.orders">
        <div class="cx-my-account-view-order">
          <div class="cx-my-account-view-order-header">
            <div
              class="cx-my-account-view-status"
              *ngIf="order.statusDisplay"
              [attr.aria-label]="
                'myAccountV2Orders.orderStatusLabel' | cxTranslate
              "
            >
              {{
                'orderDetails.statusDisplay_' + order.statusDisplay
                  | cxTranslate
              }}
            </div>
            <div
              class="cx-my-account-view-code"
              [attr.aria-label]="
                'myAccountV2OrderHistory.orderCodeLabel' | cxTranslate
              "
            >
              {{
                'myAccountV2Orders.orderNumber'
                  | cxTranslate: { value: order.code }
              }}
            </div>
          </div>
          <div class="cx-my-account-view-order-body">
            <ng-container *ngIf="getProduct(order) as product">
              <div class="cx-my-account-view-order-column-1">
                <div class="cx-my-account-view-order-column-1-image">
                  <cx-media
                    [container]="product.images?.PRIMARY"
                    class="cx-my-account-view-order-img"
                    format="thumbnail"
                    role="presentation"
                  ></cx-media>
                </div>
                <div class="cx-my-account-view-order-column-1-details">
                  <div class="cx-my-account-view-order-column-1-details-top">
                    <div class="cx-my-account-view-product-name">
                      {{ product.name }}
                      <span *ngIf="order.totalItems - 1 > 1">
                        +
                        {{
                          'myAccountV2Orders.items'
                            | cxTranslate: { value: order.totalItems - 1 }
                        }}
                      </span>
                      <span *ngIf="order.totalItems - 1 === 1">
                        +
                        {{
                          'myAccountV2Orders.item' | cxTranslate: { value: 1 }
                        }}
                      </span>
                    </div>
                    <div class="cx-my-account-view-purchased-on">
                      {{
                        'myAccountV2Orders.purchasedOn'
                          | cxTranslate
                            : {
                                value: order.placed | cxDate: 'd, MMMM, yyyy',
                              }
                      }}
                    </div>
                    <div class="cx-my-account-view-item-count">
                      {{
                        'myAccountV2Orders.orderedItems'
                          | cxTranslate: { value: order.totalItems }
                      }}
                    </div>
                  </div>
                  <div class="cx-my-account-view-order-column-1-details-bottom">
                    <div class="cx-my-account-view-total-price">
                      {{
                        'myAccountV2Orders.totalPrice'
                          | cxTranslate: { value: order.total?.formattedValue }
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="cx-my-account-view-order-column-2">
                <!-- order details -->
                <span>
                  <a
                    class="btn-link cx-action-link"
                    [attr.aria-label]="
                      'myAccountV2Orders.orderDetailsLabel'
                        | cxTranslate: { value: order.code }
                    "
                    [routerLink]="
                      {
                        cxRoute: 'orderDetails',
                        params: order,
                      } | cxUrl
                    "
                  >
                    {{ 'myAccountV2Orders.orderDetails' | cxTranslate }}
                  </a>
                </span>
                <!-- return order -->
                <span *ngIf="order.returnable">
                  {{ ' | '
                  }}<a
                    class="btn-link cx-action-link"
                    [routerLink]="
                      {
                        cxRoute: 'orderReturn',
                        params: order,
                      } | cxUrl
                    "
                  >
                    {{ 'myAccountV2Orders.returnOrder' | cxTranslate }}
                  </a>
                </span>
              </div>
            </ng-container>
          </div>
        </div>
      </ng-container>
    </div>
  </ng-container>
</div>
<!-- NO ORDER CONTAINER -->
<ng-template #noOrder>
  <div class="cx-my-account-no-order" *ngIf="isLoaded$ | async; else loading">
    <div [attr.aria-label]="'orderHistory.notFound' | cxTranslate">
      {{ 'orderHistory.noOrders' | cxTranslate }}
    </div>
    <a
      [routerLink]="{ cxRoute: 'home' } | cxUrl"
      routerLinkActive="active"
      class="cx-no-order"
      >{{ 'orderHistory.startShopping' | cxTranslate }}</a
    >
  </div>
</ng-template>

<!-- ORDER HISTORY DATA STILL LOADING -->
<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], null, null);
})();
var MyAccountV2OrdersModule = class _MyAccountV2OrdersModule {
  static {
    this.ɵfac = function MyAccountV2OrdersModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2OrdersModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MyAccountV2OrdersModule,
      declarations: [MyAccountV2OrdersComponent],
      imports: [CommonModule, RouterModule, FormsModule, SpinnerModule, UrlModule, I18nModule, MediaModule],
      exports: [MyAccountV2OrdersComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          MyAccountViewOrderComponent: {
            component: MyAccountV2OrdersComponent,
            guards: [AuthGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, FormsModule, SpinnerModule, UrlModule, I18nModule, MediaModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrdersModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, FormsModule, SpinnerModule, UrlModule, I18nModule, MediaModule],
      declarations: [MyAccountV2OrdersComponent],
      exports: [MyAccountV2OrdersComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          MyAccountViewOrderComponent: {
            component: MyAccountV2OrdersComponent,
            guards: [AuthGuard]
          }
        }
      })]
    }]
  }], null, null);
})();
var OrderDetailBillingComponent = class _OrderDetailBillingComponent {
  constructor(orderDetailsService, translationService) {
    this.orderDetailsService = orderDetailsService;
    this.translationService = translationService;
    this.order$ = this.orderDetailsService.getOrderDetails();
  }
  getPaymentMethodCard(paymentDetails) {
    return combineLatest([this.translationService.translate("paymentForm.payment"), this.translationService.translate("paymentCard.expires", {
      month: paymentDetails.expiryMonth,
      year: paymentDetails.expiryYear
    })]).pipe(map(([textTitle, textExpires]) => paymentMethodCard(textTitle, textExpires, paymentDetails)));
  }
  getBillingAddressCard(paymentDetails) {
    return combineLatest([this.translationService.translate("paymentForm.billingAddress"), this.translationService.translate("addressCard.billTo")]).pipe(map(([billingAddress, billTo]) => billingAddressCard(billingAddress, billTo, paymentDetails)));
  }
  isPaymentInfoCardFull(payment) {
    return !!payment?.cardNumber && !!payment?.expiryMonth && !!payment?.expiryYear;
  }
  static {
    this.ɵfac = function OrderDetailBillingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailBillingComponent)(ɵɵdirectiveInject(OrderDetailsService), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderDetailBillingComponent,
      selectors: [["cx-order-detail-billing"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["class", "cx-order-items", 4, "ngIf"], [1, "cx-order-items"], ["class", "cx-review-summary", 4, "ngIf"], [1, "cx-review-summary"], ["class", "cx-review-summary-card cx-review-summary-payment-card", 4, "ngIf"], [1, "cx-review-summary-card", "cx-review-summary-payment-card"], [3, "content"]],
      template: function OrderDetailBillingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderDetailBillingComponent_div_0_Template, 2, 1, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [CardComponent, NgIf, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailBillingComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-detail-billing",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<div class="cx-order-items" *ngIf="order$ | async as order">\n  <div class="cx-review-summary" *ngIf="order.paymentInfo as paymentDetails">\n    <div\n      class="cx-review-summary-card cx-review-summary-payment-card"\n      *ngIf="isPaymentInfoCardFull(paymentDetails)"\n    >\n      <cx-card\n        [content]="getPaymentMethodCard(paymentDetails) | async"\n      ></cx-card>\n    </div>\n    <div\n      class="cx-review-summary-card cx-review-summary-payment-card"\n      *ngIf="paymentDetails?.billingAddress"\n    >\n      <cx-card\n        [content]="getBillingAddressCard(paymentDetails) | async"\n      ></cx-card>\n    </div>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: OrderDetailsService
  }, {
    type: TranslationService
  }], null);
})();
var OrderOverviewComponentService = class _OrderOverviewComponentService {
  shouldShowDeliveryMode(mode) {
    return mode !== void 0;
  }
  static {
    this.ɵfac = function OrderOverviewComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderOverviewComponentService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderOverviewComponentService,
      factory: _OrderOverviewComponentService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderOverviewComponentService, [{
    type: Injectable
  }], null, null);
})();
var OrderOverviewComponent = class _OrderOverviewComponent {
  constructor(translation, orderDetailsService, component) {
    this.translation = translation;
    this.orderDetailsService = orderDetailsService;
    this.component = component;
    this.orderOverviewComponentService = inject(OrderOverviewComponentService);
    this.orderConfig = inject(OrderConfig);
    this.cartOutlets = CartOutlets;
    this.orderOutlets = OrderOutlets;
    this.order$ = this.orderDetailsService.getOrderDetails();
    this.isOrderLoading$ = typeof this.orderDetailsService.isOrderDetailsLoading === "function" ? this.orderDetailsService.isOrderDetailsLoading() : of(false);
    this.simple$ = this.component.data$.pipe(map((data) => data.simple));
  }
  getReplenishmentCodeCardContent(orderCode) {
    return this.translation.translate("orderDetails.replenishmentId").pipe(filter(() => Boolean(orderCode)), map((textTitle) => ({
      title: textTitle,
      text: [orderCode]
    })));
  }
  getReplenishmentActiveCardContent(active) {
    return combineLatest([this.translation.translate("orderDetails.status"), this.translation.translate("orderDetails.active"), this.translation.translate("orderDetails.cancelled")]).pipe(map(([textTitle, textActive, textCancelled]) => ({
      title: textTitle,
      text: [active ? textActive : textCancelled]
    })));
  }
  getReplenishmentStartOnCardContent(isoDate) {
    return this.translation.translate("orderDetails.startOn").pipe(filter(() => Boolean(isoDate)), map((textTitle) => {
      return {
        title: textTitle,
        text: [isoDate]
      };
    }));
  }
  getReplenishmentFrequencyCardContent(frequency) {
    return this.translation.translate("orderDetails.frequency").pipe(filter(() => Boolean(frequency)), map((textTitle) => ({
      title: textTitle,
      text: [frequency]
    })));
  }
  getReplenishmentNextDateCardContent(isoDate) {
    return this.translation.translate("orderDetails.nextOrderDate").pipe(filter(() => Boolean(isoDate)), map((textTitle) => {
      return {
        title: textTitle,
        text: [isoDate]
      };
    }));
  }
  getOrderCodeCardContent(orderCode) {
    return this.translation.translate("orderDetails.orderNumber").pipe(filter(() => Boolean(orderCode)), map((textTitle) => ({
      title: textTitle,
      text: [orderCode]
    })));
  }
  getOrderCurrentDateCardContent(isoDate) {
    return this.translation.translate("orderDetails.placedOn").pipe(filter(() => Boolean(isoDate)), map((textTitle) => {
      return {
        title: textTitle,
        text: [isoDate]
      };
    }));
  }
  getOrderStatusCardContent(status) {
    return combineLatest([this.translation.translate("orderDetails.status"), this.translation.translate("orderDetails.statusDisplay_" + status)]).pipe(map(([textTitle, textStatus]) => ({
      title: textTitle,
      text: [textStatus]
    })));
  }
  getPurchaseOrderNumber(poNumber) {
    return combineLatest([this.translation.translate("orderDetails.purchaseOrderNumber"), this.translation.translate("orderDetails.emptyPurchaseOrderId")]).pipe(map(([textTitle, noneTextTitle]) => ({
      title: textTitle,
      text: [poNumber ? poNumber : noneTextTitle]
    })));
  }
  getMethodOfPaymentCardContent(hasPaymentInfo) {
    return combineLatest([this.translation.translate("orderDetails.methodOfPayment"), this.translation.translate("paymentTypes.paymentType_ACCOUNT"), this.translation.translate("paymentTypes.paymentType_CARD")]).pipe(map(([textTitle, textAccount, textCard]) => ({
      title: textTitle,
      text: [Boolean(hasPaymentInfo) ? textCard : textAccount]
    })));
  }
  getCostCenterCardContent(costCenter) {
    return this.translation.translate("orderDetails.costCenter").pipe(filter(() => Boolean(costCenter)), map((textTitle) => ({
      title: textTitle,
      textBold: costCenter?.name,
      text: ["(" + costCenter?.unit?.name + ")"]
    })));
  }
  getAddressCardContent(deliveryAddress) {
    return this.translation.translate("addressCard.shipTo").pipe(filter(() => Boolean(deliveryAddress)), map((textTitle) => {
      const formattedAddress = this.normalizeFormattedAddress(deliveryAddress.formattedAddress ?? "");
      return {
        title: textTitle,
        textBold: `${deliveryAddress.firstName} ${deliveryAddress.lastName}`,
        text: [formattedAddress, deliveryAddress.country?.name]
      };
    }));
  }
  shouldShowDeliveryMode(mode) {
    return this.orderOverviewComponentService.shouldShowDeliveryMode(mode);
  }
  getDeliveryModeCardContent(deliveryMode) {
    return this.translation.translate("orderDetails.shippingMethod").pipe(filter(() => Boolean(deliveryMode)), map((textTitle) => ({
      title: textTitle,
      textBold: deliveryMode.name,
      text: [deliveryMode.description, deliveryMode.deliveryCost?.formattedValue ? deliveryMode.deliveryCost?.formattedValue : ""]
    })));
  }
  getPaymentInfoCardContent(payment) {
    return combineLatest([this.translation.translate("paymentForm.payment"), this.translation.translate("paymentCard.expires", {
      month: Boolean(payment) ? payment.expiryMonth : "",
      year: Boolean(payment) ? payment.expiryYear : ""
    })]).pipe(filter(() => Boolean(payment)), map(([textTitle, textExpires]) => paymentMethodCard(textTitle, textExpires, payment)));
  }
  isPaymentInfoCardFull(payment) {
    return !!payment?.cardNumber && !!payment?.expiryMonth && !!payment?.expiryYear;
  }
  getBillingAddressCardContent(billingAddress) {
    return this.translation.translate("paymentForm.billingAddress").pipe(filter(() => Boolean(billingAddress)), map((textTitle) => ({
      title: textTitle,
      textBold: `${billingAddress.firstName} ${billingAddress.lastName}`,
      text: [billingAddress.formattedAddress, billingAddress.country?.name]
    })));
  }
  normalizeFormattedAddress(formattedAddress) {
    const addresses = formattedAddress.split(",").map((address) => address.trim());
    return addresses.filter(Boolean).join(", ");
  }
  static {
    this.ɵfac = function OrderOverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderOverviewComponent)(ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(OrderDetailsService), ɵɵdirectiveInject(CmsComponentData));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderOverviewComponent,
      selectors: [["cx-order-overview"]],
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [["showQuoteCode", ""], ["otherOrder", ""], ["class", "cx-order-summary", 4, "ngIf"], [1, "cx-order-summary"], [4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container"], [4, "ngIf", "ngIfElse"], [1, "cx-summary-card"], [3, "cxOutlet", "cxOutletContext"], [3, "content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "cx-summary-card", 4, "ngIf"], [1, "cx-order-details-cards"], ["id", "quote-container", "class", "card-body cx-card-body", 4, "ngIf"], ["id", "quote-container", 1, "card-body", "cx-card-body"], [1, "cx-card-title"], [1, "cx-card-actions", 3, "routerLink"]],
      template: function OrderOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderOverviewComponent_div_0_Template, 3, 3, "div", 2);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, OrderOverviewComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [CardComponent, NgIf, NgTemplateOutlet, RouterLink, OutletDirective, OrderDetailBillingComponent, AsyncPipe, TranslatePipe, CxDatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderOverviewComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-overview",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="cx-order-summary" *ngIf="order$ | async as order">
  <ng-container *ngIf="!(isOrderLoading$ | async)">
    <div *ngIf="!(simple$ | async)" class="container">
      <ng-container *ngIf="order.replenishmentOrderCode; else otherOrder">
        <div class="cx-summary-card">
          <cx-card
            [content]="
              getReplenishmentCodeCardContent(order?.replenishmentOrderCode)
                | async
            "
          ></cx-card>

          <cx-card
            [content]="getReplenishmentActiveCardContent(order?.active) | async"
          ></cx-card>
        </div>

        <div class="cx-summary-card">
          <cx-card
            [content]="
              getReplenishmentStartOnCardContent(order?.firstDate | cxDate)
                | async
            "
          ></cx-card>

          <cx-card
            [content]="
              getReplenishmentFrequencyCardContent(
                order?.trigger?.displayTimeTable
              ) | async
            "
          ></cx-card>

          <cx-card
            [content]="
              getReplenishmentNextDateCardContent(
                order?.trigger?.activationTime | cxDate
              ) | async
            "
          ></cx-card>

          <ng-template
            [cxOutlet]="cartOutlets.ORDER_OVERVIEW"
            [cxOutletContext]="{ item: order, readonly: true }"
          >
          </ng-template>
        </div>
      </ng-container>

      <ng-template #otherOrder>
        <div class="cx-summary-card">
          <cx-card
            [content]="getOrderCodeCardContent(order?.code) | async"
          ></cx-card>

          <cx-card
            [content]="
              getOrderCurrentDateCardContent(order?.created | cxDate) | async
            "
          ></cx-card>

          <cx-card
            [content]="getOrderStatusCardContent(order.statusDisplay) | async"
          ></cx-card>

          <ng-container
            *ngTemplateOutlet="
              showQuoteCode;
              context: { sapQuoteCode: order.sapQuoteCode }
            "
          ></ng-container>

          <ng-template
            [cxOutlet]="cartOutlets.ORDER_OVERVIEW"
            [cxOutletContext]="{ item: order, readonly: true }"
          >
          </ng-template>
        </div>
      </ng-template>

      <ng-container
        *ngIf="order.purchaseOrderNumber || order.purchaseOrderNumber === ''"
      >
        <div class="cx-summary-card">
          <cx-card
            [content]="
              getPurchaseOrderNumber(order?.purchaseOrderNumber) | async
            "
          ></cx-card>

          <cx-card
            [content]="getMethodOfPaymentCardContent(order.paymentInfo) | async"
          ></cx-card>

          <ng-container *ngIf="order.costCenter">
            <cx-card
              [content]="getCostCenterCardContent(order?.costCenter) | async"
            ></cx-card>
          </ng-container>
        </div>
      </ng-container>

      <div class="cx-summary-card">
        <ng-container *ngIf="order.deliveryAddress">
          <cx-card
            [content]="getAddressCardContent(order?.deliveryAddress) | async"
          ></cx-card>
        </ng-container>

        <ng-container *ngIf="shouldShowDeliveryMode(order.deliveryMode)">
          <cx-card
            [content]="getDeliveryModeCardContent(order?.deliveryMode) | async"
          ></cx-card>
        </ng-container>

        <ng-template
          [cxOutlet]="orderOutlets.SERVICE_DETAILS"
          [cxOutletContext]="{ item: order, readonly: true }"
        >
        </ng-template>
      </div>

      <ng-container *ngIf="order.paymentInfo">
        <div
          class="cx-summary-card"
          *ngIf="
            order?.paymentInfo?.billingAddress ||
            isPaymentInfoCardFull(order?.paymentInfo)
          "
        >
          <ng-container *ngIf="isPaymentInfoCardFull(order?.paymentInfo)">
            <cx-card
              [content]="getPaymentInfoCardContent(order?.paymentInfo) | async"
            ></cx-card>
          </ng-container>

          <cx-card
            [content]="
              getBillingAddressCardContent(order?.paymentInfo?.billingAddress)
                | async
            "
          ></cx-card>
        </div>
      </ng-container>
    </div>

    <div *ngIf="simple$ | async" class="container">
      <div class="cx-order-details-cards">
        <cx-card
          [content]="getOrderCodeCardContent(order?.code) | async"
        ></cx-card>

        <cx-card
          [content]="
            getOrderCurrentDateCardContent(order?.created | cxDate) | async
          "
        ></cx-card>

        <cx-card
          [content]="getOrderStatusCardContent(order.statusDisplay) | async"
        ></cx-card>

        <ng-container
          *ngTemplateOutlet="
            showQuoteCode;
            context: { sapQuoteCode: order.sapQuoteCode }
          "
        ></ng-container>

        <ng-template
          [cxOutlet]="cartOutlets.ORDER_OVERVIEW"
          [cxOutletContext]="{ item: order, readonly: true }"
        >
        </ng-template>
      </div>
      <cx-order-detail-billing
        *ngIf="
          isPaymentInfoCardFull(order?.paymentInfo) ||
          order?.paymentInfo?.billingAddress
        "
      ></cx-order-detail-billing>
    </div>
  </ng-container>
</div>

<ng-template #showQuoteCode let-quoteCode="sapQuoteCode">
  <div
    id="quote-container"
    class="card-body cx-card-body"
    *ngIf="orderConfig.showOrderQuoteLink && quoteCode"
  >
    <div class="cx-card-title">
      {{ 'orderDetails.quoteCode' | cxTranslate: { id: quoteCode } }}
    </div>
    <a
      [routerLink]="
        { cxRoute: 'quoteDetails', params: { quoteId: quoteCode } } | cxUrl
      "
      class="cx-card-actions"
    >
      {{ 'orderDetails.quoteDetail' | cxTranslate }}
    </a>
  </div>
</ng-template>
`
    }]
  }], () => [{
    type: TranslationService
  }, {
    type: OrderDetailsService
  }, {
    type: CmsComponentData
  }], null);
})();
var OrderConfirmationOrderEntriesContext = class _OrderConfirmationOrderEntriesContext {
  constructor(orderFacade) {
    this.orderFacade = orderFacade;
    this.type = OrderEntriesSource.ORDER_CONFIRMATION;
  }
  getEntries() {
    return this.orderFacade.getOrderDetails().pipe(map((order) => order?.entries ?? []));
  }
  static {
    this.ɵfac = function OrderConfirmationOrderEntriesContext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConfirmationOrderEntriesContext)(ɵɵinject(OrderFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderConfirmationOrderEntriesContext,
      factory: _OrderConfirmationOrderEntriesContext.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderFacade
  }], null);
})();
var OrderConfirmationItemsComponent = class _OrderConfirmationItemsComponent {
  constructor(orderFacade) {
    this.orderFacade = orderFacade;
    this.cartOutlets = CartOutlets;
    this.abstractOrderType = AbstractOrderType;
    this.promotionLocation = PromotionLocation.Checkout;
    this.order$ = this.orderFacade.getOrderDetails();
  }
  ngOnDestroy() {
    this.orderFacade.clearPlacedOrder();
  }
  static {
    this.ɵfac = function OrderConfirmationItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConfirmationItemsComponent)(ɵɵdirectiveInject(OrderFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderConfirmationItemsComponent,
      selectors: [["cx-order-confirmation-items"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["class", "cx-order-items container", 4, "ngIf"], [1, "cx-order-items", "container"], [1, "cx-order-items-header"], [3, "promotions"], [3, "cxAbstractOrderContext", "cxOutlet", "cxOutletContext"]],
      template: function OrderConfirmationItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderConfirmationItemsComponent_div_0_Template, 6, 14, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgIf, PromotionsComponent, OutletDirective, AbstractOrderContextDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationItemsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-confirmation-items",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="cx-order-items container" *ngIf="order$ | async as order">
  <h3 class="cx-order-items-header">
    {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}
  </h3>
  <cx-promotions
    [promotions]="order.appliedOrderPromotions || []"
  ></cx-promotions>

  <ng-template
    [cxAbstractOrderContext]="{
      id: order.code,
      type: abstractOrderType.ORDER,
    }"
    [cxOutlet]="cartOutlets.CART_ITEM_LIST"
    [cxOutletContext]="{
      items: order.entries,
      readonly: true,
      promotionLocation: promotionLocation,
    }"
  >
  </ng-template>
</div>
`
    }]
  }], () => [{
    type: OrderFacade
  }], null);
})();
var OrderConfirmationShippingComponent = class _OrderConfirmationShippingComponent {
  constructor(orderFacade, translationService, cd, outlet) {
    this.orderFacade = orderFacade;
    this.translationService = translationService;
    this.cd = cd;
    this.outlet = outlet;
    this.showItemList = true;
    this.cartOutlets = CartOutlets;
    this.abstractOrderType = AbstractOrderType;
    this.order$ = this.orderFacade.getOrderDetails().pipe(tap((order) => {
      this.entries = order?.entries?.filter((entry) => !entry.deliveryPointOfService);
    }));
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.subscription.add(this.outlet?.context$.subscribe((context) => {
      if (context.showItemList !== void 0) {
        this.showItemList = context.showItemList;
      }
      if (context.order) {
        this.order$ = of(context.order);
      }
      this.cd.markForCheck();
    }));
  }
  getDeliveryAddressCard(deliveryAddress, countryName) {
    return combineLatest([this.translationService.translate("addressCard.shipTo"), this.translationService.translate("addressCard.phoneNumber"), this.translationService.translate("addressCard.mobileNumber")]).pipe(map(([textTitle, textPhone, textMobile]) => deliveryAddressCard(textTitle, textPhone, textMobile, deliveryAddress, countryName)));
  }
  getDeliveryModeCard(deliveryMode) {
    return combineLatest([this.translationService.translate("checkoutMode.deliveryMethod")]).pipe(map(([textTitle]) => deliveryModeCard(textTitle, deliveryMode)));
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function OrderConfirmationShippingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConfirmationShippingComponent)(ɵɵdirectiveInject(OrderFacade), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(OutletContextData, 8));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderConfirmationShippingComponent,
      selectors: [["cx-order-confirmation-shipping"]],
      inputs: {
        showItemList: "showItemList"
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["class", "cx-order-items", 4, "ngIf"], [1, "cx-order-items"], [4, "ngIf"], [1, "cx-review-header"], [1, "cx-review-summary", "cx-review-shipping-summary"], [1, "cx-review-summary-card-container"], [1, "cx-review-summary-card", "cx-review-card-address"], [3, "content"], ["class", "cx-review-cart-item", 4, "ngIf"], [1, "cx-review-cart-item"], [3, "cxAbstractOrderContext", "cxOutlet", "cxOutletContext"]],
      template: function OrderConfirmationShippingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderConfirmationShippingComponent_div_0_Template, 2, 1, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgIf, CardComponent, OutletDirective, AbstractOrderContextDirective, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationShippingComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-confirmation-shipping",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="cx-order-items" *ngIf="order$ | async as order">
  <ng-container *ngIf="!showItemList || entries?.length > 0">
    <h2 class="cx-review-header">
      {{ 'checkoutMode.deliveryEntries' | cxTranslate }}
    </h2>

    <div class="cx-review-summary cx-review-shipping-summary">
      <!-- DELIVERY ADDRESS SECTION -->
      <div class="cx-review-summary-card-container">
        <div class="cx-review-summary-card cx-review-card-address">
          <cx-card
            [content]="getDeliveryAddressCard(order.deliveryAddress) | async"
          ></cx-card>
        </div>
      </div>

      <!-- DELIVERY MODE SECTION -->
      <div class="cx-review-summary-card-container">
        <div class="cx-review-summary-card cx-review-card-address">
          <cx-card
            [content]="getDeliveryModeCard(order.deliveryMode) | async"
          ></cx-card>
        </div>
      </div>
    </div>

    <!-- CART ITEM SECTION -->
    <div *ngIf="showItemList" class="cx-review-cart-item">
      <ng-template
        [cxAbstractOrderContext]="{
          id: order.code,
          type: abstractOrderType.ORDER,
        }"
        [cxOutlet]="cartOutlets.CART_ITEM_LIST"
        [cxOutletContext]="{
          items: entries,
          readonly: true,
        }"
      >
      </ng-template>
    </div>
  </ng-container>
</div>
`
    }]
  }], () => [{
    type: OrderFacade
  }, {
    type: TranslationService
  }, {
    type: ChangeDetectorRef
  }, {
    type: OutletContextData,
    decorators: [{
      type: Optional
    }]
  }], {
    showItemList: [{
      type: Input
    }]
  });
})();
var OrderGuestRegisterFormComponent = class _OrderGuestRegisterFormComponent {
  constructor(userRegisterFacade, routingService, authService, fb) {
    this.userRegisterFacade = userRegisterFacade;
    this.routingService = routingService;
    this.authService = authService;
    this.fb = fb;
    this.featureConfigService = inject(FeatureConfigService);
    this.passwordValidators = this.featureConfigService.isEnabled("enableSecurePasswordValidation") ? CustomFormValidators.securePasswordValidators : [...CustomFormValidators.passwordValidators, CustomFormValidators.noConsecutiveCharacters];
    this.guestRegisterForm = this.fb.group({
      password: ["", [Validators.required, ...this.passwordValidators]],
      passwordconf: ["", Validators.required]
    }, {
      validators: CustomFormValidators.passwordsMustMatch("password", "passwordconf")
    });
    useFeatureStyles("a11yPasswordVisibliltyBtnValueOverflow");
  }
  submit() {
    if (this.guestRegisterForm.valid) {
      this.userRegisterFacade.registerGuest(this.guid, this.guestRegisterForm.value.password);
      if (!this.subscription && !this.featureConfigService.isEnabled("authorizationCodeFlowByDefault")) {
        this.subscription = this.authService.isUserLoggedIn().subscribe((isLoggedIn) => {
          if (isLoggedIn) {
            this.routingService.go({
              cxRoute: "home"
            });
          }
        });
      }
    } else {
      this.guestRegisterForm.markAllAsTouched();
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function OrderGuestRegisterFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderGuestRegisterFormComponent)(ɵɵdirectiveInject(UserRegisterFacade), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderGuestRegisterFormComponent,
      selectors: [["cx-guest-register-form"]],
      hostAttrs: ["ngSkipHydration", "true"],
      inputs: {
        guid: "guid",
        email: "email"
      },
      standalone: false,
      decls: 35,
      vars: 47,
      consts: [[1, "register-guest"], [1, "col-md-6", "col-lg-4"], [3, "ngSubmit", "formGroup"], [1, "form-group"], [1, "label-content"], ["required", "true", "type", "password", "name", "password", "formControlName", "password", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "passwordError", 3, "translationParams", "control"], ["required", "true", "type", "password", "name", "passwordconf", "formControlName", "passwordconf", "cxPasswordVisibilitySwitch", "", 1, "form-control", 3, "placeholder"], ["id", "passwordconfError", 3, "translationParams", "control"], ["type", "submit", 1, "btn", "btn-block", "btn-primary"]],
      template: function OrderGuestRegisterFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h3");
          ɵɵtext(3);
          ɵɵpipe(4, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(5, "p");
          ɵɵtext(6);
          ɵɵpipe(7, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(8, "form", 2);
          ɵɵlistener("ngSubmit", function OrderGuestRegisterFormComponent_Template_form_ngSubmit_8_listener() {
            return ctx.submit();
          });
          ɵɵelement(9, "cx-form-required-legend");
          ɵɵelementStart(10, "div", 3)(11, "label")(12, "span", 4);
          ɵɵtext(13);
          ɵɵpipe(14, "cxTranslate");
          ɵɵelement(15, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(16, "input", 5);
          ɵɵpipe(17, "cxTranslate");
          ɵɵpipe(18, "cxTranslate");
          ɵɵelement(19, "cx-form-errors", 6);
          ɵɵpipe(20, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(21, "div", 3)(22, "label")(23, "span", 4);
          ɵɵtext(24);
          ɵɵpipe(25, "cxTranslate");
          ɵɵelement(26, "cx-form-required-asterisks");
          ɵɵelementEnd();
          ɵɵelement(27, "input", 7);
          ɵɵpipe(28, "cxTranslate");
          ɵɵpipe(29, "cxTranslate");
          ɵɵelement(30, "cx-form-errors", 8);
          ɵɵpipe(31, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(32, "button", 9);
          ɵɵtext(33);
          ɵɵpipe(34, "cxTranslate");
          ɵɵelementEnd()()()();
        }
        if (rf & 2) {
          let tmp_6_0;
          let tmp_13_0;
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(4, 18, "checkoutOrderConfirmation.createAccount"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(7, 20, "checkoutOrderConfirmation.createAccountForNext", ɵɵpureFunction1(41, _c17, ctx.email)), " ");
          ɵɵadvance(2);
          ɵɵproperty("formGroup", ctx.guestRegisterForm);
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 23, "register.password.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(17, 25, "register.password.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(18, 27, "register.password.placeholder"))("aria-invalid", ((tmp_6_0 = ctx.guestRegisterForm.get("password")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx.guestRegisterForm.get("password")) == null ? null : tmp_6_0.invalid))("aria-errormessage", "passwordError");
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(43, _c18, ɵɵpipeBind1(20, 29, "register.password.label")))("control", ctx.guestRegisterForm.get("password"));
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(25, 31, "register.confirmPassword.label"), " ");
          ɵɵadvance(3);
          ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind1(28, 33, "register.confirmPassword.placeholder"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(29, 35, "register.confirmPassword.placeholder"))("aria-invalid", ((tmp_13_0 = ctx.guestRegisterForm.get("passwordconf")) == null ? null : tmp_13_0.touched) && ((tmp_13_0 = ctx.guestRegisterForm.get("passwordconf")) == null ? null : tmp_13_0.invalid))("aria-errormessage", "passwordconfError");
          ɵɵadvance(3);
          ɵɵproperty("translationParams", ɵɵpureFunction1(45, _c18, ɵɵpipeBind1(31, 37, "register.confirmPassword.label")))("control", ctx.guestRegisterForm.get("passwordconf"));
          ɵɵadvance(3);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(34, 39, "common.submit"), " ");
        }
      },
      dependencies: [ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, PasswordVisibilityToggleDirective, FormRequiredAsterisksComponent, FormRequiredLegendComponent, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderGuestRegisterFormComponent, [{
    type: Component,
    args: [{
      selector: "cx-guest-register-form",
      standalone: false,
      host: {
        ngSkipHydration: "true"
      },
      template: `<div class="register-guest">
  <div class="col-md-6 col-lg-4">
    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>
    <p>
      {{
        'checkoutOrderConfirmation.createAccountForNext'
          | cxTranslate: { email: email }
      }}
    </p>

    <form (ngSubmit)="submit()" [formGroup]="guestRegisterForm">
      <cx-form-required-legend />
      <div class="form-group">
        <label>
          <span class="label-content">
            {{ 'register.password.label' | cxTranslate }}
            <cx-form-required-asterisks />
          </span>
          <input
            required="true"
            class="form-control"
            type="password"
            name="password"
            placeholder="{{ 'register.password.placeholder' | cxTranslate }}"
            formControlName="password"
            [attr.aria-label]="'register.password.placeholder' | cxTranslate"
            [attr.aria-invalid]="
              guestRegisterForm.get('password')?.touched &&
              guestRegisterForm.get('password')?.invalid
            "
            [attr.aria-errormessage]="'passwordError'"
            cxPasswordVisibilitySwitch
          />

          <cx-form-errors
            id="passwordError"
            [translationParams]="{
              label: 'register.password.label' | cxTranslate,
            }"
            [control]="guestRegisterForm.get('password')"
          ></cx-form-errors>
        </label>
      </div>

      <div class="form-group">
        <label>
          <span class="label-content">
            {{ 'register.confirmPassword.label' | cxTranslate }}
            <cx-form-required-asterisks />
          </span>
          <input
            required="true"
            class="form-control"
            type="password"
            name="passwordconf"
            placeholder="{{
              'register.confirmPassword.placeholder' | cxTranslate
            }}"
            formControlName="passwordconf"
            [attr.aria-label]="
              'register.confirmPassword.placeholder' | cxTranslate
            "
            [attr.aria-invalid]="
              guestRegisterForm.get('passwordconf')?.touched &&
              guestRegisterForm.get('passwordconf')?.invalid
            "
            [attr.aria-errormessage]="'passwordconfError'"
            cxPasswordVisibilitySwitch
          />

          <cx-form-errors
            id="passwordconfError"
            [translationParams]="{
              label: 'register.confirmPassword.label' | cxTranslate,
            }"
            [control]="guestRegisterForm.get('passwordconf')"
          ></cx-form-errors>
        </label>
      </div>

      <button type="submit" class="btn btn-block btn-primary">
        {{ 'common.submit' | cxTranslate }}
      </button>
    </form>
  </div>
</div>
`
    }]
  }], () => [{
    type: UserRegisterFacade
  }, {
    type: RoutingService
  }, {
    type: AuthService
  }, {
    type: UntypedFormBuilder
  }], {
    guid: [{
      type: Input
    }],
    email: [{
      type: Input
    }]
  });
})();
var OrderConfirmationThankYouMessageComponent = class _OrderConfirmationThankYouMessageComponent {
  constructor(orderFacade, globalMessageService, translationService) {
    this.orderFacade = orderFacade;
    this.globalMessageService = globalMessageService;
    this.translationService = translationService;
    this.isGuestCustomer = false;
  }
  ngOnInit() {
    this.order$ = this.orderFacade.getOrderDetails().pipe(tap((order) => {
      this.isGuestCustomer = order && "guestCustomer" in order ? order.guestCustomer ?? false : false;
      this.orderGuid = order?.guid;
    }));
  }
  ngAfterViewInit() {
    this.addThankYouMessage();
  }
  ngOnDestroy() {
    this.orderFacade.clearPlacedOrder();
  }
  addThankYouMessage() {
    this.getThankYouAssistiveMessage().pipe(take(1)).subscribe(([order, confirmationOfOrderMessage, thankYouMessage, invoiceHasBeenSentByEmailMessage]) => {
      const code = order.replenishmentOrderCode ?? order.code;
      const message = `${confirmationOfOrderMessage} ${code}. ${thankYouMessage} ${invoiceHasBeenSentByEmailMessage}`;
      this.globalMessageService.add(message, GlobalMessageType.MSG_TYPE_ASSISTIVE);
    });
  }
  getThankYouAssistiveMessage() {
    const confirmationOfOrderMessage$ = this.translationService.translate("checkoutOrderConfirmation.confirmationOfOrder");
    const thankYouMessage$ = this.translationService.translate("checkoutOrderConfirmation.thankYou");
    const invoiceHasBeenSentByEmailMessage$ = this.translationService.translate("checkoutOrderConfirmation.invoiceHasBeenSentByEmail");
    return this.order$.pipe(filter((order) => !!order), withLatestFrom(confirmationOfOrderMessage$, thankYouMessage$, invoiceHasBeenSentByEmailMessage$));
  }
  static {
    this.ɵfac = function OrderConfirmationThankYouMessageComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConfirmationThankYouMessageComponent)(ɵɵdirectiveInject(OrderFacade), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderConfirmationThankYouMessageComponent,
      selectors: [["cx-order-confirmation-thank-you-message"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-page-header"], [1, "cx-page-title"], [1, "cx-order-confirmation-message"], [3, "guid", "email"]],
      template: function OrderConfirmationThankYouMessageComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderConfirmationThankYouMessageComponent_ng_container_0_Template, 14, 11, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgIf, AddToHomeScreenBannerComponent, OrderGuestRegisterFormComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationThankYouMessageComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-confirmation-thank-you-message",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="order$ | async as order">
  <div class="cx-page-header">
    <span class="cx-page-title">
      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}
      {{ order.replenishmentOrderCode ?? order.code }}
    </span>
  </div>

  <div class="cx-order-confirmation-message">
    <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>
    <p>
      {{ 'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate }}
    </p>
  </div>
  <div
    *ngIf="
      isGuestCustomer && orderGuid && order?.paymentInfo?.billingAddress?.email
    "
  >
    <cx-guest-register-form
      [guid]="orderGuid"
      [email]="order.paymentInfo.billingAddress.email"
    ></cx-guest-register-form>
  </div>

  <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>
</ng-container>
`
    }]
  }], () => [{
    type: OrderFacade
  }, {
    type: GlobalMessageService
  }, {
    type: TranslationService
  }], null);
})();
var OrderConfirmationTotalsComponent = class _OrderConfirmationTotalsComponent {
  constructor(orderFacade) {
    this.orderFacade = orderFacade;
    this.cartOutlets = CartOutlets;
    this.order$ = this.orderFacade.getOrderDetails();
    useFeatureStyles("a11yWideScreenImprovements");
  }
  ngOnDestroy() {
    this.orderFacade.clearPlacedOrder();
  }
  static {
    this.ɵfac = function OrderConfirmationTotalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConfirmationTotalsComponent)(ɵɵdirectiveInject(OrderFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderConfirmationTotalsComponent,
      selectors: [["cx-order-confirmation-totals"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["class", "cx-order-summary container", 4, "ngIf"], [1, "cx-order-summary", "container"], [1, "row", "justify-content-end"], [1, "col-sm-12", "col-md-6", "col-lg-5", "col-xl-4"], [3, "cxOutlet", "cxOutletContext"]],
      template: function OrderConfirmationTotalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderConfirmationTotalsComponent_div_0_Template, 4, 2, "div", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgIf, OutletDirective, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationTotalsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-confirmation-totals",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<div class="cx-order-summary container" *ngIf="order$ | async as order">\n  <div class="row justify-content-end">\n    <div class="col-sm-12 col-md-6 col-lg-5 col-xl-4">\n      <ng-template\n        [cxOutlet]="cartOutlets.ORDER_SUMMARY"\n        [cxOutletContext]="order"\n      >\n      </ng-template>\n    </div>\n  </div>\n</div>\n'
    }]
  }], () => [{
    type: OrderFacade
  }], null);
})();
var orderConfirmationComponents = [OrderConfirmationItemsComponent, OrderConfirmationThankYouMessageComponent, OrderConfirmationTotalsComponent, OrderGuestRegisterFormComponent, OrderConfirmationShippingComponent];
var OrderConfirmationModule = class _OrderConfirmationModule {
  static {
    this.ɵfac = function OrderConfirmationModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConfirmationModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderConfirmationModule,
      declarations: [OrderConfirmationItemsComponent, OrderConfirmationThankYouMessageComponent, OrderConfirmationTotalsComponent, OrderGuestRegisterFormComponent, OrderConfirmationShippingComponent],
      imports: [CommonModule, CardModule, PwaModule, PromotionsModule, I18nModule, ReactiveFormsModule, FormErrorsModule, OutletModule, PasswordVisibilityToggleModule, AbstractOrderContextModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [OrderConfirmationItemsComponent, OrderConfirmationThankYouMessageComponent, OrderConfirmationTotalsComponent, OrderGuestRegisterFormComponent, OrderConfirmationShippingComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          OrderConfirmationThankMessageComponent: {
            component: OrderConfirmationThankYouMessageComponent,
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationMessageComponent: {
            component: OrderConfirmationThankYouMessageComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationItemsComponent: {
            component: OrderConfirmationItemsComponent,
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationItemsComponent: {
            component: OrderConfirmationItemsComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationTotalsComponent: {
            component: OrderConfirmationTotalsComponent,
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationTotalsComponent: {
            component: OrderConfirmationTotalsComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationOverviewComponent: {
            component: OrderOverviewComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderFacade
            }],
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationOverviewComponent: {
            component: OrderOverviewComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderFacade
            }],
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationShippingComponent: {
            component: OrderConfirmationShippingComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationBillingComponent: {
            component: OrderDetailBillingComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderFacade
            }],
            guards: [OrderConfirmationGuard]
          }
        }
      }), {
        provide: OrderConfirmationOrderEntriesContextToken,
        useExisting: OrderConfirmationOrderEntriesContext
      }, provideOutlet({
        id: OrderOutlets.CONSIGNMENT_DELIVERY_INFO,
        component: OrderConfirmationShippingComponent
      })],
      imports: [CommonModule, CardModule, PwaModule, PromotionsModule, I18nModule, ReactiveFormsModule, FormErrorsModule, OutletModule.forChild(), PasswordVisibilityToggleModule, AbstractOrderContextModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConfirmationModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, CardModule, PwaModule, PromotionsModule, I18nModule, ReactiveFormsModule, FormErrorsModule, OutletModule.forChild(), PasswordVisibilityToggleModule, AbstractOrderContextModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      providers: [provideDefaultConfig({
        cmsComponents: {
          OrderConfirmationThankMessageComponent: {
            component: OrderConfirmationThankYouMessageComponent,
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationMessageComponent: {
            component: OrderConfirmationThankYouMessageComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationItemsComponent: {
            component: OrderConfirmationItemsComponent,
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationItemsComponent: {
            component: OrderConfirmationItemsComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationTotalsComponent: {
            component: OrderConfirmationTotalsComponent,
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationTotalsComponent: {
            component: OrderConfirmationTotalsComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationOverviewComponent: {
            component: OrderOverviewComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderFacade
            }],
            guards: [OrderConfirmationGuard]
          },
          ReplenishmentConfirmationOverviewComponent: {
            component: OrderOverviewComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderFacade
            }],
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationShippingComponent: {
            component: OrderConfirmationShippingComponent,
            guards: [OrderConfirmationGuard]
          },
          OrderConfirmationBillingComponent: {
            component: OrderDetailBillingComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: OrderFacade
            }],
            guards: [OrderConfirmationGuard]
          }
        }
      }), {
        provide: OrderConfirmationOrderEntriesContextToken,
        useExisting: OrderConfirmationOrderEntriesContext
      }, provideOutlet({
        id: OrderOutlets.CONSIGNMENT_DELIVERY_INFO,
        component: OrderConfirmationShippingComponent
      })],
      declarations: [...orderConfirmationComponents],
      exports: [...orderConfirmationComponents]
    }]
  }], null, null);
})();
var OrderDetailActionsComponent = class _OrderDetailActionsComponent {
  constructor(orderDetailsService) {
    this.orderDetailsService = orderDetailsService;
    this.order$ = this.orderDetailsService.getOrderDetails();
  }
  static {
    this.ɵfac = function OrderDetailActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailActionsComponent)(ɵɵdirectiveInject(OrderDetailsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderDetailActionsComponent,
      selectors: [["cx-order-details-actions"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-nav", "row"], [1, "col-xs-12", "col-md-4", "col-lg-3"], [1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], ["cxBtnLikeLink", "", "class", "btn btn-block btn-secondary", 3, "routerLink", 4, "ngIf"], ["cxBtnLikeLink", "", 1, "btn", "btn-block", "btn-secondary", 3, "routerLink"]],
      template: function OrderDetailActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderDetailActionsComponent_ng_container_0_Template, 10, 9, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgIf, RouterLink, BtnLikeLinkDirective, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailActionsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-details-actions",
      standalone: false,
      template: `<ng-container *ngIf="order$ | async as order">
  <div class="cx-nav row">
    <div class="col-xs-12 col-md-4 col-lg-3">
      <button
        [routerLink]="{ cxRoute: 'orders' } | cxUrl"
        class="btn btn-block btn-secondary"
      >
        {{ 'common.back' | cxTranslate }}
      </button>
    </div>

    <div class="col-xs-12 col-md-4 col-lg-3">
      <a
        *ngIf="order.cancellable"
        [routerLink]="
          {
            cxRoute: 'orderCancel',
            params: order,
          } | cxUrl
        "
        cxBtnLikeLink
        class="btn btn-block btn-secondary"
      >
        {{ 'orderDetails.cancellationAndReturn.cancelAction' | cxTranslate }}
      </a>

      <a
        *ngIf="order.returnable"
        [routerLink]="
          {
            cxRoute: 'orderReturn',
            params: order,
          } | cxUrl
        "
        cxBtnLikeLink
        class="btn btn-block btn-secondary"
      >
        {{ 'orderDetails.cancellationAndReturn.returnAction' | cxTranslate }}
      </a>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: OrderDetailsService
  }], null);
})();
var MyAccountV2OrderDetailsActionsComponent = class _MyAccountV2OrderDetailsActionsComponent extends OrderDetailActionsComponent {
  constructor() {
    super(...arguments);
    this.eventService = inject(EventService);
  }
  ngOnInit() {
    this.order$.subscribe((order) => {
      this.order = order;
    });
  }
  showDialog(order) {
    const newEvent = new DownloadOrderInvoicesEvent();
    newEvent.order = order;
    this.eventService.dispatch(newEvent);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMyAccountV2OrderDetailsActionsComponent_BaseFactory;
      return function MyAccountV2OrderDetailsActionsComponent_Factory(__ngFactoryType__) {
        return (ɵMyAccountV2OrderDetailsActionsComponent_BaseFactory || (ɵMyAccountV2OrderDetailsActionsComponent_BaseFactory = ɵɵgetInheritedFactory(_MyAccountV2OrderDetailsActionsComponent)))(__ngFactoryType__ || _MyAccountV2OrderDetailsActionsComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyAccountV2OrderDetailsActionsComponent,
      selectors: [["cx-my-account-v2-order-details-actions"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "cx-order-details-actions", "row"], [1, "cx-view-all-orders"], [1, "col-xs-12", "col-md-4", "col-lg-3"], [1, "cx-action-button-left"], ["id", "view-all-orders-btn", 1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], [1, "cx-other-actions"], ["class", "cx-action-button", 4, "ngIf"], [1, "cx-action-button"], ["id", "download-invoices-btn", 1, "btn", "btn-block", "btn-secondary", 3, "click"], ["id", "cancel-items-btn", 1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], ["id", "return-items-btn", 1, "btn", "btn-block", "btn-secondary", 3, "routerLink"]],
      template: function MyAccountV2OrderDetailsActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, MyAccountV2OrderDetailsActionsComponent_ng_container_0_Template, 17, 12, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.order);
        }
      },
      dependencies: [NgIf, RouterLink, TranslatePipe, UrlPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrderDetailsActionsComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-order-details-actions",
      standalone: false,
      template: `<ng-container *ngIf="order">
  <div class="cx-order-details-actions row">
    <div class="cx-view-all-orders">
      <span class="col-xs-12 col-md-4 col-lg-3">
        <span class="cx-action-button-left">
          <button
            id="view-all-orders-btn"
            [routerLink]="{ cxRoute: 'orders' } | cxUrl"
            class="btn btn-block btn-secondary"
          >
            {{ 'myAccountV2OrderDetails.viewAllOrders' | cxTranslate }}
          </button>
        </span>
      </span>
    </div>
    <div class="cx-other-actions">
      <span class="col-xs-12 col-md-4 col-lg-3">
        <span *ngIf="order.cancellable" class="cx-action-button">
          <button
            id="cancel-items-btn"
            [routerLink]="
              {
                cxRoute: 'orderCancel',
                params: order,
              } | cxUrl
            "
            class="btn btn-block btn-secondary"
          >
            {{ 'myAccountV2OrderDetails.cancelItems' | cxTranslate }}
          </button>
        </span>
        <span *ngIf="order.returnable" class="cx-action-button">
          <button
            id="return-items-btn"
            [routerLink]="
              {
                cxRoute: 'orderReturn',
                params: order,
              } | cxUrl
            "
            class="btn btn-block btn-secondary"
          >
            {{ 'myAccountV2OrderDetails.returnItems' | cxTranslate }}
          </button>
        </span>
        <span class="cx-action-button">
          <button
            id="download-invoices-btn"
            class="btn btn-block btn-secondary"
            (click)="showDialog(order)"
          >
            {{ 'myAccountV2OrderDetails.downloadInvoices' | cxTranslate }}
          </button>
        </span>
      </span>
    </div>
  </div>
</ng-container>
`
    }]
  }], null, null);
})();
var MyAccountV2DownloadInvoicesComponent = class _MyAccountV2DownloadInvoicesComponent {
  constructor() {
    this.OrderOutlets = OrderOutlets;
    this.invoiceCount = void 0;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: true,
      focusOnEscape: true
    };
    this.launchDialogService = inject(LaunchDialogService);
    this.cdr = inject(ChangeDetectorRef);
  }
  ngAfterViewChecked() {
    this.cdr.detectChanges();
    if (this.invoiceComponent && this.invoiceComponent.pagination !== void 0) {
      this.invoiceCount = this.invoiceComponent.pagination.totalResults;
    }
  }
  close(reason, _message) {
    this.launchDialogService.closeDialog(reason);
  }
  static {
    this.ɵfac = function MyAccountV2DownloadInvoicesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2DownloadInvoicesComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyAccountV2DownloadInvoicesComponent,
      selectors: [["cx-my-account-v2-download-invoices"]],
      viewQuery: function MyAccountV2DownloadInvoicesComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(InvoicesListComponent, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.invoiceComponent = _t.first);
        }
      },
      standalone: false,
      decls: 15,
      vars: 13,
      consts: [["role", "dialog", "aria-describedby", "downloadInvoicesContent", 1, "cx-modal-container", 3, "esc", "cxFocus"], ["id", "downloadInvoicesContent", 1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], ["id", "downloadInvoicesTitle", "aria-labelledby", "downloadInvoicesTitle", "tabindex", "-1", 1, "cx-dialog-title", "modal-title"], ["type", "button", "aria-controls", "downloadInvoicesContent", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [1, "cx-dialog-body", "modal-body"], ["id", "noInvoice", "role", "alert", 4, "ngIf"], ["class", "cx-spinner", "aria-live", "polite", "role", "alert", 4, "ngIf"], ["id", "noInvoice", "role", "alert"], ["aria-live", "polite", "role", "alert", 1, "cx-spinner"]],
      template: function MyAccountV2DownloadInvoicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("esc", function MyAccountV2DownloadInvoicesComponent_Template_div_esc_0_listener() {
            return ctx.close("Escape clicked");
          });
          ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "div", 3);
          ɵɵtext(4);
          ɵɵpipe(5, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(6, "button", 4);
          ɵɵpipe(7, "cxTranslate");
          ɵɵpipe(8, "cxTranslate");
          ɵɵlistener("click", function MyAccountV2DownloadInvoicesComponent_Template_button_click_6_listener() {
            return ctx.close("Close download invoices dialog");
          });
          ɵɵelementStart(9, "span", 5);
          ɵɵelement(10, "cx-icon", 6);
          ɵɵelementEnd()()();
          ɵɵelementStart(11, "div", 7);
          ɵɵelement(12, "cx-invoices-list");
          ɵɵtemplate(13, MyAccountV2DownloadInvoicesComponent_div_13_Template, 3, 3, "div", 8)(14, MyAccountV2DownloadInvoicesComponent_div_14_Template, 2, 0, "div", 9);
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 7, "myAccountV2OrderDetails.downloadInvoices"), " ");
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(7, 9, "addToCart.closeModal"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(8, 11, "addToCart.closeModal"));
          ɵɵadvance(4);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.invoiceCount === 0);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.invoiceCount === void 0);
        }
      },
      dependencies: [NgIf, FocusDirective, IconComponent, SpinnerComponent, InvoicesListComponent, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2DownloadInvoicesComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-download-invoices",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
  class="cx-modal-container"
  role="dialog"
  aria-describedby="downloadInvoicesContent"
>
  <div id="downloadInvoicesContent" class="cx-modal-content">
    <div class="cx-dialog-header modal-header">
      <div
        id="downloadInvoicesTitle"
        class="cx-dialog-title modal-title"
        aria-labelledby="downloadInvoicesTitle"
        tabindex="-1"
      >
        {{ 'myAccountV2OrderDetails.downloadInvoices' | cxTranslate }}
      </div>
      <button
        type="button"
        class="close"
        attr.aria-label="{{ 'addToCart.closeModal' | cxTranslate }}"
        aria-controls="downloadInvoicesContent"
        title="{{ 'addToCart.closeModal' | cxTranslate }}"
        (click)="close('Close download invoices dialog')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>

    <div class="cx-dialog-body modal-body">
      <cx-invoices-list> </cx-invoices-list>
      <div id="noInvoice" *ngIf="invoiceCount === 0" role="alert">
        {{ 'myAccountV2OrderDetails.noInvoices' | cxTranslate }}
      </div>
      <div
        *ngIf="invoiceCount === undefined"
        class="cx-spinner"
        aria-live="polite"
        role="alert"
      >
        <cx-spinner></cx-spinner>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], null, {
    invoiceComponent: [{
      type: ViewChild,
      args: [InvoicesListComponent, {
        static: false
      }]
    }]
  });
})();
var defaultMyAccountV2DownloadInvoicesLayoutConfig = {
  launch: {
    DOWNLOAD_ORDER_INVOICES: {
      inlineRoot: true,
      component: MyAccountV2DownloadInvoicesComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var MyAccountV2DownloadInvoicesEventListener = class _MyAccountV2DownloadInvoicesEventListener {
  constructor() {
    this.subscription = new Subscription();
    this.eventService = inject(EventService);
    this.launchDialogService = inject(LaunchDialogService);
    this.onDownloadInvoices();
  }
  onDownloadInvoices() {
    this.subscription.add(this.eventService.get(DownloadOrderInvoicesEvent).subscribe((event) => {
      this.openDialog(event);
    }));
  }
  openDialog(event) {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.DOWNLOAD_ORDER_INVOICES, void 0, void 0, event.order);
    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function MyAccountV2DownloadInvoicesEventListener_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2DownloadInvoicesEventListener)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MyAccountV2DownloadInvoicesEventListener,
      factory: _MyAccountV2DownloadInvoicesEventListener.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2DownloadInvoicesEventListener, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var MyAccountV2DownloadInvoicesModule = class _MyAccountV2DownloadInvoicesModule {
  constructor() {
    this.downloadInvoicesDialogEventListener = inject(MyAccountV2DownloadInvoicesEventListener);
  }
  static {
    this.ɵfac = function MyAccountV2DownloadInvoicesModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2DownloadInvoicesModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MyAccountV2DownloadInvoicesModule,
      declarations: [MyAccountV2DownloadInvoicesComponent],
      imports: [CommonModule, KeyboardFocusModule, IconModule, I18nModule, PaginationModule, SortingModule, SpinnerModule, PDFInvoicesComponentsModule],
      exports: [MyAccountV2DownloadInvoicesComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultMyAccountV2DownloadInvoicesLayoutConfig)],
      imports: [CommonModule, KeyboardFocusModule, IconModule, I18nModule, PaginationModule, SortingModule, SpinnerModule, PDFInvoicesComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2DownloadInvoicesModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, KeyboardFocusModule, IconModule, I18nModule, PaginationModule, SortingModule, SpinnerModule, PDFInvoicesComponentsModule],
      providers: [provideDefaultConfig(defaultMyAccountV2DownloadInvoicesLayoutConfig)],
      exports: [MyAccountV2DownloadInvoicesComponent],
      declarations: [MyAccountV2DownloadInvoicesComponent]
    }]
  }], null, null);
})();
var completedValues = ["DELIVERY_COMPLETED", "PICKUP_COMPLETE"];
var cancelledValues = ["CANCELLED"];
var MyAccountV2OrderConsignmentsService = class _MyAccountV2OrderConsignmentsService {
  getGroupedConsignments(order, pickup) {
    const consignments = pickup ? order.consignments?.filter((consignment) => consignment.deliveryPointOfService !== void 0) : order.consignments?.filter((consignment) => consignment.deliveryPointOfService === void 0);
    return this.groupConsignments(consignments);
  }
  getUnconsignedEntries(order, pickup) {
    if (order.replenishmentOrderCode) {
      return [];
    }
    return pickup ? order.unconsignedEntries?.filter((entry) => entry.deliveryPointOfService !== void 0) : order.unconsignedEntries?.filter((entry) => entry.deliveryPointOfService === void 0);
  }
  groupConsignments(consignments) {
    const grouped = consignments?.reduce((result, current) => {
      const key = this.getStatusGroupKey(current.status || "");
      result[key] = result[key] || [];
      result[key].push(current);
      return result;
    }, {});
    return grouped ? [...grouped[1] || [], ...grouped[0] || [], ...grouped[-1] || []] : void 0;
  }
  /**
   * complete: 0
   * processing: 1
   * cancel: -1
   */
  getStatusGroupKey(status) {
    if (completedValues.includes(status)) {
      return 0;
    }
    if (cancelledValues.includes(status)) {
      return -1;
    }
    return 1;
  }
  static {
    this.ɵfac = function MyAccountV2OrderConsignmentsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2OrderConsignmentsService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MyAccountV2OrderConsignmentsService,
      factory: _MyAccountV2OrderConsignmentsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrderConsignmentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ConsignmentTrackingComponent = class _ConsignmentTrackingComponent {
  constructor(orderHistoryFacade, launchDialogService, vcr) {
    this.orderHistoryFacade = orderHistoryFacade;
    this.launchDialogService = launchDialogService;
    this.vcr = vcr;
    this.consignmentStatus = ["SHIPPED", "IN_TRANSIT", "DELIVERY_COMPLETED", "DELIVERY_REJECTED", "DELIVERING"];
  }
  ngOnInit() {
    this.consignmentTracking$ = this.orderHistoryFacade.getConsignmentTracking();
  }
  openTrackingDialog(consignment) {
    if (consignment.code) {
      this.orderHistoryFacade.loadConsignmentTracking(this.orderCode, consignment.code);
    }
    const modalInstanceData = {
      tracking$: this.consignmentTracking$,
      shipDate: consignment.statusDate
    };
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.CONSIGNMENT_TRACKING, this.element, this.vcr, modalInstanceData);
    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
  ngOnDestroy() {
    this.orderHistoryFacade.clearConsignmentTracking();
  }
  static {
    this.ɵfac = function ConsignmentTrackingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConsignmentTrackingComponent)(ɵɵdirectiveInject(OrderHistoryFacade), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ConsignmentTrackingComponent,
      selectors: [["cx-consignment-tracking"]],
      viewQuery: function ConsignmentTrackingComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c20, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      inputs: {
        consignment: "consignment",
        orderCode: "orderCode"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", "btn-track", 3, "click"]],
      template: function ConsignmentTrackingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ConsignmentTrackingComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.consignment && ctx.consignment.status);
        }
      },
      dependencies: [NgIf, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConsignmentTrackingComponent, [{
    type: Component,
    args: [{
      selector: "cx-consignment-tracking",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="consignment && consignment.status">
  <div *ngIf="consignmentStatus.includes(consignment.status)">
    <button
      (click)="openTrackingDialog(consignment)"
      class="btn btn-secondary btn-track"
      type="button"
    >
      {{ 'orderDetails.consignmentTracking.action' | cxTranslate }}
    </button>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: OrderHistoryFacade
  }, {
    type: LaunchDialogService
  }, {
    type: ViewContainerRef
  }], {
    element: [{
      type: ViewChild,
      args: ["element"]
    }],
    consignment: [{
      type: Input
    }],
    orderCode: [{
      type: Input
    }]
  });
})();
var OrderConsignedEntriesComponent = class _OrderConsignedEntriesComponent {
  constructor() {
    this.translationService = inject(TranslationService);
    this.promotionLocation = PromotionLocation.Order;
    this.OrderOutlets = OrderOutlets;
    this.CartOutlets = CartOutlets;
    this.abstractOrderType = AbstractOrderType;
  }
  getStatusText(status) {
    return this.translationService.translate("orderDetails.deliveryStatus_" + status).pipe(map((value) => {
      if (value.includes("orderDetails.deliveryStatus_")) {
        return status;
      } else {
        return value;
      }
    }));
  }
  static {
    this.ɵfac = function OrderConsignedEntriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderConsignedEntriesComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderConsignedEntriesComponent,
      selectors: [["cx-order-consigned-entries"]],
      inputs: {
        consignments: "consignments",
        order: "order",
        enableAddToCart: "enableAddToCart",
        buyItAgainTranslation: "buyItAgainTranslation"
      },
      standalone: false,
      decls: 3,
      vars: 1,
      consts: [["addToCartBtn", ""], ["class", "cx-list row", 4, "ngFor", "ngForOf"], [1, "cx-list", "row"], [3, "cxOutlet", "cxOutletContext"], [1, "cx-list-item", "col-12"], [3, "cxAbstractOrderContext", "cxOutlet", "cxOutletContext"], [1, "cx-list-header", "col-12"], [1, "cx-list-status"], [4, "ngIf"], ["class", "cx-list-date", 4, "ngIf"], [3, "orderCode", "consignment", 4, "cxFeature"], [1, "cx-list-date"], [3, "orderCode", "consignment"], [1, "add-to-cart", 3, "productCode", "product", "showQuantity", "options", "pickupStore"]],
      template: function OrderConsignedEntriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderConsignedEntriesComponent_div_0_Template, 4, 19, "div", 1)(1, OrderConsignedEntriesComponent_ng_template_1_Template, 1, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.consignments);
        }
      },
      dependencies: [NgForOf, NgIf, FeatureDirective, OutletDirective, AddToCartComponent, AbstractOrderContextDirective, ConsignmentTrackingComponent, AsyncPipe, TitleCasePipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderConsignedEntriesComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-consigned-entries",
      standalone: false,
      template: `<div *ngFor="let consignment of consignments" class="cx-list row">
  <ng-template
    [cxOutlet]="OrderOutlets.ORDER_CONSIGNMENT"
    [cxOutletContext]="{ item: consignment, order: order }"
  >
    <div class="cx-list-header col-12">
      <div class="cx-list-status">
        <span *ngIf="consignment">
          {{ getStatusText(consignment?.status) | async | titlecase }}
        </span>
      </div>
      <div *ngIf="consignment?.statusDate" class="cx-list-date">
        <div>{{ consignment?.statusDate | cxDate }}</div>
      </div>

      <cx-consignment-tracking
        [orderCode]="order.code"
        [consignment]="consignment"
        *cxFeature="'consignmentTracking'"
      >
      </cx-consignment-tracking>
    </div>
  </ng-template>
  <div class="cx-list-item col-12">
    <ng-template
      [cxAbstractOrderContext]="{
        id: order.code,
        type: abstractOrderType.ORDER,
      }"
      [cxOutlet]="CartOutlets.CART_ITEM_LIST"
      [cxOutletContext]="{
        items: consignment.entries,
        readonly: true,
        promotionLocation: promotionLocation,
        options: {
          displayAddToCart: enableAddToCart,
          addToCartString: buyItAgainTranslation,
          optionalBtn: addToCartBtn,
        },
      }"
    >
    </ng-template>
  </div>
</div>

<ng-template let-ctx #addToCartBtn>
  <cx-add-to-cart
    [productCode]="ctx.item.product?.code"
    [product]="ctx.item.product"
    [showQuantity]="false"
    [options]="ctx.options"
    [pickupStore]="ctx.item.deliveryPointOfService?.name"
    class="add-to-cart"
  >
  </cx-add-to-cart>
</ng-template>
`
    }]
  }], null, {
    consignments: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    enableAddToCart: [{
      type: Input
    }],
    buyItAgainTranslation: [{
      type: Input
    }]
  });
})();
var OrderDetailItemsComponent = class _OrderDetailItemsComponent {
  constructor(orderDetailsService, component) {
    this.orderDetailsService = orderDetailsService;
    this.component = component;
    this.orderConsignmentsService = inject(MyAccountV2OrderConsignmentsService);
    this.OrderOutlets = OrderOutlets;
    this.CartOutlets = CartOutlets;
    this.abstractOrderType = AbstractOrderType;
    this.promotionLocation = PromotionLocation.Order;
    this.order$ = this.orderDetailsService.getOrderDetails().pipe(tap((order) => {
      this.pickupConsignments = this.getGroupedConsignments(order, true);
      this.deliveryConsignments = this.getGroupedConsignments(order, false);
      this.pickupUnconsignedEntries = this.getUnconsignedEntries(order, true);
      this.deliveryUnConsignedEntries = this.getUnconsignedEntries(order, false);
    }));
    this.enableAddToCart$ = this.component.data$.pipe(map((data) => data.enableAddToCart));
    this.isOrderLoading$ = typeof this.orderDetailsService.isOrderDetailsLoading === "function" ? this.orderDetailsService.isOrderDetailsLoading() : of(false);
    this.groupCartItems$ = this.component.data$.pipe(map((data) => data.groupCartItems));
  }
  getGroupedConsignments(order, pickup) {
    return this.orderConsignmentsService.getGroupedConsignments(order, pickup);
  }
  getUnconsignedEntries(order, pickup) {
    return this.orderConsignmentsService.getUnconsignedEntries(order, pickup);
  }
  static {
    this.ɵfac = function OrderDetailItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailItemsComponent)(ɵɵdirectiveInject(OrderDetailsService), ɵɵdirectiveInject(CmsComponentData));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderDetailItemsComponent,
      selectors: [["cx-order-details-items"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["addToCartBtn", ""], [4, "ngIf"], ["class", "cx-pickup-order-consigned-entries-header", 4, "ngIf"], [3, "order", "consignments", "enableAddToCart", "buyItAgainTranslation", 4, "ngIf"], [3, "promotions"], [1, "cx-pickup-order-consigned-entries-header"], [3, "order", "consignments", "enableAddToCart", "buyItAgainTranslation"], [3, "cxOutlet", "cxOutletContext"], ["class", "cx-list-header", 4, "ngIf"], [1, "cx-list-header"], [1, "cx-list-status"], ["class", "cx-review-header", 4, "ngIf"], [1, "cx-list-item"], [3, "cxAbstractOrderContext", "cxOutlet", "cxOutletContext"], [1, "cx-review-header"], [1, "cx-list"], [1, "add-to-cart", 3, "productCode", "product", "showQuantity", "options", "pickupStore"]],
      template: function OrderDetailItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderDetailItemsComponent_ng_container_0_Template, 5, 3, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgIf, PromotionsComponent, OutletDirective, AddToCartComponent, AbstractOrderContextDirective, OrderConsignedEntriesComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailItemsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-details-items",
      standalone: false,
      template: `<ng-container *ngIf="order$ | async as order">
  <ng-container *ngIf="!(isOrderLoading$ | async)">
    <ng-container
      *ngIf="
        order.consignments?.length ||
        order.unconsignedEntries?.length ||
        order.replenishmentOrderCode
      "
    >
      <cx-promotions
        [promotions]="order.appliedOrderPromotions || []"
      ></cx-promotions>
    </ng-container>

    <!-- pickup consigned entries -->
    <div
      *ngIf="pickupConsignments?.length"
      class="cx-pickup-order-consigned-entries-header"
    >
      {{ 'deliveryPointOfServiceDetails.itemsToBePickUp' | cxTranslate }}
    </div>
    <cx-order-consigned-entries
      *ngIf="pickupConsignments"
      [order]="order"
      [consignments]="pickupConsignments"
      [enableAddToCart]="enableAddToCart$ | async"
      [buyItAgainTranslation]="'addToCart.buyItAgain' | cxTranslate"
    ></cx-order-consigned-entries>

    <!-- delivery consignment address and delivery mode -->
    <ng-template
      *ngIf="
        deliveryConsignments &&
        deliveryConsignments.length > 0 &&
        (groupCartItems$ | async)
      "
      [cxOutlet]="OrderOutlets.CONSIGNMENT_DELIVERY_INFO"
      [cxOutletContext]="{
        showItemList: false,
        order: order,
      }"
    >
    </ng-template>

    <!-- delivery consigned entries -->
    <cx-order-consigned-entries
      *ngIf="deliveryConsignments"
      [order]="order"
      [consignments]="deliveryConsignments"
      [enableAddToCart]="enableAddToCart$ | async"
      [buyItAgainTranslation]="'addToCart.buyItAgain' | cxTranslate"
    ></cx-order-consigned-entries>

    <!-- unconsigned entries -->
    <ng-container *ngIf="order?.unconsignedEntries?.length">
      <div *ngIf="order?.statusDisplay" class="cx-list-header">
        <div class="cx-list-status">
          {{
            'orderDetails.statusDisplay_' + order?.statusDisplay | cxTranslate
          }}
        </div>
      </div>
      <!-- delivery unconsigned entries -->
      <ng-container *ngIf="deliveryUnConsignedEntries?.length">
        <h2 *ngIf="groupCartItems$ | async" class="cx-review-header">
          {{ 'checkoutMode.deliveryEntries' | cxTranslate }}
        </h2>
        <div class="cx-list-item">
          <ng-template
            [cxAbstractOrderContext]="{
              id: order.code,
              type: abstractOrderType.ORDER,
            }"
            [cxOutlet]="CartOutlets.CART_ITEM_LIST"
            [cxOutletContext]="{
              items: deliveryUnConsignedEntries,
              readonly: true,
              promotionLocation: promotionLocation,
              options: {
                displayAddToCart: enableAddToCart$ | async,
                addToCartString: 'addToCart.buyItAgain' | cxTranslate,
                optionalBtn: addToCartBtn,
              },
            }"
          >
          </ng-template>
        </div>
      </ng-container>
      <!-- pickup unconsigned entries, b2b does not have pickup items -->
      <ng-container *ngIf="pickupUnconsignedEntries?.length">
        <h2 class="cx-review-header">
          {{ 'checkoutPickupInStore.heading' | cxTranslate }}
        </h2>
        <div class="cx-list-item">
          <ng-template
            [cxAbstractOrderContext]="{
              id: order.code,
              type: abstractOrderType.ORDER,
            }"
            [cxOutlet]="CartOutlets.CART_ITEM_LIST"
            [cxOutletContext]="{
              items: pickupUnconsignedEntries,
              readonly: true,
              promotionLocation: promotionLocation,
              options: {
                displayAddToCart: enableAddToCart$ | async,
                addToCartString: 'addToCart.buyItAgain' | cxTranslate,
                optionalBtn: addToCartBtn,
              },
            }"
          >
          </ng-template>
        </div>
      </ng-container>
    </ng-container>

    <!-- replenishment other entries -->
    <ng-container *ngIf="order?.entries && order?.replenishmentOrderCode">
      <div class="cx-list">
        <div *ngIf="order?.statusDisplay" class="cx-list-header">
          <div class="cx-list-status">
            {{
              'orderDetails.statusDisplay_' + order?.statusDisplay | cxTranslate
            }}
          </div>
        </div>
        <div class="cx-list-item">
          <ng-template
            [cxAbstractOrderContext]="{
              id: order.code,
              type: abstractOrderType.ORDER,
            }"
            [cxOutlet]="CartOutlets.CART_ITEM_LIST"
            [cxOutletContext]="{
              items: order.entries,
              readonly: true,
              promotionLocation: promotionLocation,
              options: {
                displayAddToCart: enableAddToCart$ | async,
                addToCartString: 'addToCart.buyItAgain' | cxTranslate,
                optionalBtn: addToCartBtn,
              },
            }"
          >
          </ng-template>
        </div>
      </div>
    </ng-container>
  </ng-container>

  <ng-template let-ctx #addToCartBtn>
    <cx-add-to-cart
      [productCode]="ctx.item.product?.code"
      [product]="ctx.item.product"
      [showQuantity]="false"
      [options]="ctx.options"
      [pickupStore]="ctx.item.deliveryPointOfService?.name"
      class="add-to-cart"
    >
    </cx-add-to-cart>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: OrderDetailsService
  }, {
    type: CmsComponentData
  }], null);
})();
var TrackingEventsComponent = class _TrackingEventsComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.close("Cross click");
    }
  }
  constructor(orderHistoryFacade, launchDialogService, el) {
    this.orderHistoryFacade = orderHistoryFacade;
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.subscription = new Subscription();
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
  }
  ngOnInit() {
    this.subscription.add(this.launchDialogService.data$.subscribe((data) => {
      if (data) {
        this.init(data.tracking$, data.shipDate);
      }
    }));
  }
  ngOnDestroy() {
    this.orderHistoryFacade.clearConsignmentTracking();
    this.subscription?.unsubscribe();
  }
  init(tracking$, shipDate) {
    this.tracking$ = tracking$;
    this.shipDate = shipDate;
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  static {
    this.ɵfac = function TrackingEventsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TrackingEventsComponent)(ɵɵdirectiveInject(OrderHistoryFacade), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TrackingEventsComponent,
      selectors: [["cx-tracking-events"]],
      hostBindings: function TrackingEventsComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function TrackingEventsComponent_click_HostBindingHandler($event) {
            return ctx.handleClick($event);
          });
        }
      },
      standalone: false,
      decls: 8,
      vars: 5,
      consts: [["noTracking", ""], ["loading", ""], [1, "modal-dialog", "modal-dialog-centered", "modal-lg", "cx-consignment-tracking-dialog", 3, "esc", "cxFocus"], [1, "modal-content", "cx-consignment-tracking-container"], [4, "ngIf", "ngIfElse"], [1, "modal-header", "cx-modal-header"], [1, "modal-title", "cx-consignment-tracking-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "cx-tracking-events", "modal-body"], [4, "ngFor", "ngForOf"], [1, "cx-shipment-heading"], [1, "row"], [1, "col-sm-12", "col-md-6"], [1, "cx-shipment-title"], [1, "cx-shipment-content"], [4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "cx-tracking-event-body"], [1, "cx-tracking-event-content"], [1, "cx-tracking-event-title"], [1, "cx-tracking-event-city"], [1, "cx-no-tracking-heading"], [1, "cx-tracking-loading"], [1, "header", "modal-header"], [1, "title", "modal-title"], ["type", "button", 1, "close", "btn-dismiss", 3, "click"], [1, "body", "modal-body"], [1, "col-sm-12"]],
      template: function TrackingEventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 2);
          ɵɵlistener("esc", function TrackingEventsComponent_Template_div_esc_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.close("Escape clicked"));
          });
          ɵɵelementStart(1, "div", 3);
          ɵɵtemplate(2, TrackingEventsComponent_ng_container_2_Template, 12, 9, "ng-container", 4);
          ɵɵpipe(3, "async");
          ɵɵtemplate(4, TrackingEventsComponent_ng_template_4_Template, 4, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(6, TrackingEventsComponent_ng_template_6_Template, 13, 6, "ng-template", null, 1, ɵɵtemplateRefExtractor);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          const loading_r8 = ɵɵreference(7);
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(3, 3, ctx.tracking$))("ngIfElse", loading_r8);
        }
      },
      dependencies: [NgForOf, NgIf, SpinnerComponent, FocusDirective, AsyncPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackingEventsComponent, [{
    type: Component,
    args: [{
      selector: "cx-tracking-events",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  class="modal-dialog modal-dialog-centered modal-lg cx-consignment-tracking-dialog"
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
>
  <div class="modal-content cx-consignment-tracking-container">
    <ng-container
      *ngIf="tracking$ | async as consignmentTracking; else loading"
    >
      <!-- Modal Header -->
      <div class="modal-header cx-modal-header">
        <div class="modal-title cx-consignment-tracking-title">
          {{ 'orderDetails.consignmentTracking.dialog.header' | cxTranslate }}
        </div>
        <button
          type="button"
          class="close"
          [attr.aria-label]="'common.close' | cxTranslate"
          (click)="close('Cross click')"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <!-- Modal Body -->
      <!-- shipment header -->
      <ng-container
        *ngIf="
          consignmentTracking?.carrierDetails &&
            consignmentTracking?.trackingID;
          else noTracking
        "
      >
        <div class="cx-shipment-heading">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="cx-shipment-title">
                {{
                  'orderDetails.consignmentTracking.dialog.shipped'
                    | cxTranslate
                }}
              </div>
              <div class="cx-shipment-content">
                {{ shipDate | cxDate: 'medium' }}
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="cx-shipment-title">
                {{
                  'orderDetails.consignmentTracking.dialog.estimate'
                    | cxTranslate
                }}
              </div>
              <div class="cx-shipment-content">
                {{ consignmentTracking?.targetArrivalDate | cxDate: 'medium' }}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12 col-md-6">
              <div class="cx-shipment-title">
                {{
                  'orderDetails.consignmentTracking.dialog.carrier'
                    | cxTranslate
                }}
              </div>
              <div class="cx-shipment-content">
                {{ consignmentTracking?.carrierDetails?.name }}
              </div>
            </div>
            <div class="col-sm-12 col-md-6">
              <div class="cx-shipment-title">
                {{
                  'orderDetails.consignmentTracking.dialog.trackingId'
                    | cxTranslate
                }}
              </div>
              <div class="cx-shipment-content">
                <ng-container *ngIf="consignmentTracking?.trackingUrl">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    [href]="consignmentTracking.trackingUrl"
                    >{{ consignmentTracking?.trackingID }}</a
                  >
                </ng-container>
                <ng-container *ngIf="!consignmentTracking?.trackingUrl">
                  <label>
                    {{ consignmentTracking?.trackingID }}
                  </label>
                </ng-container>
              </div>
            </div>
          </div>
        </div>
      </ng-container>

      <!-- tracking events -->
      <div class="cx-tracking-events modal-body">
        <ng-container
          *ngFor="let consignmentEvent of consignmentTracking.trackingEvents"
        >
          <div class="cx-tracking-event-body">
            <div class="cx-tracking-event-content">
              {{ consignmentEvent.eventDate | cxDate: 'medium' }}
            </div>
            <div class="cx-tracking-event-title">
              {{ consignmentEvent.referenceCode }}
            </div>
            <div class="cx-tracking-event-content">
              {{ consignmentEvent.detail }}
            </div>
            <div class="cx-tracking-event-city">
              location: {{ consignmentEvent.location }}
            </div>
          </div>
        </ng-container>
      </div>
    </ng-container>

    <ng-template #noTracking>
      <div class="cx-no-tracking-heading">
        <div class="cx-shipment-content">
          {{
            'orderDetails.consignmentTracking.dialog.noTracking' | cxTranslate
          }}
        </div>
      </div>
    </ng-template>

    <ng-template #loading>
      <div class="cx-tracking-loading">
        <div class="header modal-header">
          <div class="title modal-title">
            {{
              'orderDetails.consignmentTracking.dialog.loadingHeader'
                | cxTranslate
            }}
          </div>
          <button
            type="button"
            class="close btn-dismiss"
            [attr.aria-label]="'common.close' | cxTranslate"
            (click)="close('Cross click')"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <!-- Modal Body -->
        <div class="body modal-body">
          <div class="row">
            <div class="col-sm-12">
              <cx-spinner></cx-spinner>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  </div>
</div>
`
    }]
  }], () => [{
    type: OrderHistoryFacade
  }, {
    type: LaunchDialogService
  }, {
    type: ElementRef
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var MyAccountV2ConsignmentTrackingComponent = class _MyAccountV2ConsignmentTrackingComponent extends ConsignmentTrackingComponent {
  constructor() {
    super(...arguments);
    this.componentClass = "cx-list-header col-12";
    this.outlet = inject(OutletContextData);
  }
  ngOnInit() {
    this.outlet?.context$.subscribe((context) => {
      this.consignment = context.item;
    });
    this.outlet?.context$.subscribe((context) => {
      this.orderCode = context?.order?.code ?? "";
    });
    super.ngOnInit();
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMyAccountV2ConsignmentTrackingComponent_BaseFactory;
      return function MyAccountV2ConsignmentTrackingComponent_Factory(__ngFactoryType__) {
        return (ɵMyAccountV2ConsignmentTrackingComponent_BaseFactory || (ɵMyAccountV2ConsignmentTrackingComponent_BaseFactory = ɵɵgetInheritedFactory(_MyAccountV2ConsignmentTrackingComponent)))(__ngFactoryType__ || _MyAccountV2ConsignmentTrackingComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyAccountV2ConsignmentTrackingComponent,
      selectors: [["cx-my-account-v2-consignment-tracking"]],
      hostVars: 1,
      hostBindings: function MyAccountV2ConsignmentTrackingComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          ɵɵhostProperty("className", ctx.componentClass);
        }
      },
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 1,
      vars: 1,
      consts: [["showNoTrackingMessage", ""], ["class", "cx-list-status", 4, "ngIf"], [1, "cx-list-status"], [4, "ngIf"], ["class", "cx-item-list-tracking-id", 4, "ngIf"], ["class", "cx-consignment-status-date", 4, "ngIf"], [1, "cx-item-list-tracking-id"], [4, "ngIf", "ngIfElse"], [1, "cx-tracking-id-link", 3, "click"], [1, "cx-consignment-status-date"]],
      template: function MyAccountV2ConsignmentTrackingComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, MyAccountV2ConsignmentTrackingComponent_div_0_Template, 7, 3, "div", 1);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.consignment);
        }
      },
      dependencies: [NgIf, TranslatePipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2ConsignmentTrackingComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-consignment-tracking",
      standalone: false,
      template: `<div *ngIf="consignment" class="cx-list-status">
  <span>
    <span *ngIf="consignment.status">
      {{ 'orderDetails.deliveryStatus_' + consignment.status | cxTranslate }}
    </span>
    <span
      *ngIf="consignmentStatus.includes(consignment.status ?? '')"
      class="cx-item-list-tracking-id"
    >
      <span *ngIf="consignment.trackingID; else showNoTrackingMessage">
        {{
          'orderDetails.consignmentTracking.dialog.trackingId' | cxTranslate
        }}:
        <a
          class="cx-tracking-id-link"
          (click)="openTrackingDialog(consignment)"
        >
          {{ consignment.trackingID }}
        </a>
      </span>
    </span>
  </span>
  <span *ngIf="consignment?.statusDate" class="cx-consignment-status-date">
    {{ consignment.statusDate | cxDate }}
  </span>
  <ng-template #showNoTrackingMessage>
    <a class="cx-tracking-id-link" (click)="openTrackingDialog(consignment)">
      {{ 'orderDetails.consignmentTracking.action' | cxTranslate }}
    </a>
  </ng-template>
</div>
`
    }]
  }], null, {
    componentClass: [{
      type: HostBinding,
      args: ["className"]
    }]
  });
})();
var defaultConsignmentTrackingLayoutConfig = {
  launch: {
    CONSIGNMENT_TRACKING: {
      inlineRoot: true,
      component: TrackingEventsComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var OrderDetailReorderComponent = class _OrderDetailReorderComponent {
  constructor(orderDetailsService, launchDialogService, vcr) {
    this.orderDetailsService = orderDetailsService;
    this.launchDialogService = launchDialogService;
    this.vcr = vcr;
    this.subscription = new Subscription();
  }
  ngOnInit() {
    this.order$ = this.orderDetailsService.getOrderDetails();
  }
  onReorderClick(order) {
    this.launchDialog(order.code);
  }
  launchDialog(orderCode) {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.REORDER, this.element, this.vcr, {
      orderCode
    });
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function OrderDetailReorderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailReorderComponent)(ɵɵdirectiveInject(OrderDetailsService), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ViewContainerRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderDetailReorderComponent,
      selectors: [["cx-order-details-reorder"]],
      viewQuery: function OrderDetailReorderComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c20, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["element", ""], [4, "ngIf"], [1, "cx-nav", "row"], [1, "col-xs-12", "col-md-10", "col-lg-8"], [1, "btn", "btn-primary", 3, "click"]],
      template: function OrderDetailReorderComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderDetailReorderComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailReorderComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-details-reorder",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="order$ | async as order">
  <ng-container *ngIf="order.code">
    <div class="cx-nav row">
      <div class="col-xs-12 col-md-10 col-lg-8">
        <button
          #element
          class="btn btn-primary"
          (click)="onReorderClick(order)"
        >
          {{ 'reorder.button' | cxTranslate }}
        </button>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: OrderDetailsService
  }, {
    type: LaunchDialogService
  }, {
    type: ViewContainerRef
  }], {
    element: [{
      type: ViewChild,
      args: ["element"]
    }]
  });
})();
var ReorderDialogComponent = class _ReorderDialogComponent {
  constructor(launchDialogService, reorderOrderFacade, multiCartFacade) {
    this.launchDialogService = launchDialogService;
    this.reorderOrderFacade = reorderOrderFacade;
    this.multiCartFacade = multiCartFacade;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: true,
      focusOnEscape: true
    };
    this.loading$ = new BehaviorSubject(false);
    this.showDecisionPrompt$ = new BehaviorSubject(true);
    this.data$ = this.launchDialogService.data$;
    this.selectFocusUtility = inject(SelectFocusUtility);
    this.elementRef = inject(ElementRef, {
      optional: true
    });
  }
  createCartFromOrder(orderCode) {
    this.showDecisionPrompt$.next(false);
    this.loading$.next(true);
    this.reorderOrderFacade.reorder(orderCode).subscribe((cartModificationList) => {
      this.multiCartFacade.reloadCart(OCC_CART_ID_CURRENT);
      this.cartModifications = cartModificationList.cartModifications;
      this.loading$.next(false);
      this.recaptureFocus();
    });
  }
  recaptureFocus() {
    this.selectFocusUtility?.findFirstFocusable(this.elementRef?.nativeElement)?.focus();
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  get cartValidationStatusCode() {
    return CartValidationStatusCode;
  }
  static {
    this.ɵfac = function ReorderDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReorderDialogComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ReorderOrderFacade), ɵɵdirectiveInject(MultiCartFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ReorderDialogComponent,
      selectors: [["cx-reorder-dialog"]],
      standalone: false,
      decls: 15,
      vars: 14,
      consts: [["result", ""], ["loading", ""], ["cartResponse", ""], ["errorIcon", ""], ["role", "dialog", "aria-labelledby", "dialogTitle", "aria-modal", "true", 1, "cx-modal-container", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], ["id", "dialogTitle", 1, "cx-dialog-title", "modal-title"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [1, "cx-dialog-body", "modal-body"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "cx-reorder-dialog-areyousure-section"], [1, "cx-reorder-dialog-footer"], [1, "row"], [1, "col-12"], [1, "btn", "btn-action", 3, "click"], [1, "btn", "btn-primary", 3, "click"], ["aria-live", "polite"], [1, "cx-cart-mod-entry-container"], [1, "alert-icon"], [1, "success", 3, "type"], ["class", "cx-cart-mod-entry-container", 4, "ngFor", "ngForOf"], [1, "warning", 3, "type"], [1, "error", 3, "type"], [1, "cx-spinner"]],
      template: function ReorderDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 4);
          ɵɵlistener("esc", function ReorderDialogComponent_Template_div_esc_0_listener() {
            return ctx.close("Escape clicked");
          });
          ɵɵelementStart(1, "div", 5);
          ɵɵelementContainerStart(2);
          ɵɵelementStart(3, "div", 6)(4, "div", 7);
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(7, "button", 8);
          ɵɵpipe(8, "cxTranslate");
          ɵɵpipe(9, "cxTranslate");
          ɵɵlistener("click", function ReorderDialogComponent_Template_button_click_7_listener() {
            return ctx.close("Close reorder result dialog");
          });
          ɵɵelementStart(10, "span", 9);
          ɵɵelement(11, "cx-icon", 10);
          ɵɵelementEnd()()();
          ɵɵelementContainerEnd();
          ɵɵelementStart(12, "div", 11);
          ɵɵtemplate(13, ReorderDialogComponent_ng_container_13_Template, 5, 4, "ng-container", 12);
          ɵɵpipe(14, "async");
          ɵɵelementEnd()()();
        }
        if (rf & 2) {
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 6, "reorder.dialog.reorderProducts"), " ");
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(8, 8, "addToCart.closeModal"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(9, 10, "addToCart.closeModal"));
          ɵɵadvance(4);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(14, 12, ctx.data$));
        }
      },
      dependencies: [NgForOf, NgIf, SpinnerComponent, FocusDirective, IconComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-reorder-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
  class="cx-modal-container"
  role="dialog"
  aria-labelledby="dialogTitle"
  aria-modal="true"
>
  <div class="cx-modal-content">
    <ng-container>
      <div class="cx-dialog-header modal-header">
        <div id="dialogTitle" class="cx-dialog-title modal-title">
          {{ 'reorder.dialog.reorderProducts' | cxTranslate }}
        </div>
        <button
          type="button"
          class="close"
          attr.aria-label="{{ 'addToCart.closeModal' | cxTranslate }}"
          title="{{ 'addToCart.closeModal' | cxTranslate }}"
          (click)="close('Close reorder result dialog')"
        >
          <span aria-hidden="true">
            <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
          </span>
        </button>
      </div>
    </ng-container>

    <!-- Modal Body -->
    <div class="cx-dialog-body modal-body">
      <ng-container *ngIf="data$ | async as data">
        <ng-container *ngIf="showDecisionPrompt$ | async; else result">
          <div class="cx-reorder-dialog-areyousure-section">
            <p>
              {{ 'reorder.dialog.areYouSureToReplaceCart' | cxTranslate }}
            </p>
            <div class="cx-reorder-dialog-footer">
              <div class="row">
                <div class="col-12">
                  <button
                    class="btn btn-action"
                    (click)="close('Cancel creating cart from order')"
                  >
                    {{ 'reorder.dialog.cancel' | cxTranslate }}
                  </button>
                  <button
                    class="btn btn-primary"
                    (click)="createCartFromOrder(data.orderCode)"
                  >
                    {{ 'reorder.dialog.continue' | cxTranslate }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ng-container>
        <ng-template #result>
          <ng-container *ngIf="!(loading$ | async); else loading">
            <p aria-live="polite">
              <ng-container
                *ngIf="!cartModifications?.length; else cartResponse"
              >
                <span class="cx-cart-mod-entry-container">
                  <span class="alert-icon">
                    <cx-icon
                      class="success"
                      [type]="iconTypes.SUCCESS"
                    ></cx-icon>
                  </span>
                  {{ 'reorder.dialog.messages.success' | cxTranslate }}
                </span>
              </ng-container>
              <ng-template #cartResponse>
                <span
                  *ngFor="let cartModification of cartModifications"
                  class="cx-cart-mod-entry-container"
                >
                  <ng-container
                    *ngIf="
                      cartModification.statusCode ===
                        cartValidationStatusCode.LOW_STOCK;
                      else errorIcon
                    "
                  >
                    <span class="alert-icon">
                      <cx-icon
                        class="warning"
                        [type]="iconTypes.INFO"
                      ></cx-icon>
                    </span>
                  </ng-container>
                  <ng-template #errorIcon>
                    <span class="alert-icon">
                      <cx-icon class="error" [type]="iconTypes.ERROR"></cx-icon>
                    </span>
                  </ng-template>
                  <span>
                    {{
                      'reorder.dialog.messages.' + cartModification.statusCode
                        | cxTranslate
                          : {
                              quantity: cartModification.quantity,
                              quantityAdded: cartModification.quantityAdded,
                              productCode: cartModification.entry.product.code,
                              productName: cartModification.entry.product.name,
                            }
                    }}
                  </span>
                </span>
              </ng-template>
            </p>
          </ng-container>
          <ng-template #loading>
            <div class="cx-spinner">
              <cx-spinner></cx-spinner>
            </div>
          </ng-template>
        </ng-template>
      </ng-container>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ReorderOrderFacade
  }, {
    type: MultiCartFacade
  }], null);
})();
var OrderDetailTotalsComponent = class _OrderDetailTotalsComponent {
  constructor(orderDetailsService) {
    this.orderDetailsService = orderDetailsService;
    this.CartOutlets = CartOutlets;
  }
  ngOnInit() {
    this.order$ = this.orderDetailsService.getOrderDetails();
  }
  static {
    this.ɵfac = function OrderDetailTotalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailTotalsComponent)(ɵɵdirectiveInject(OrderDetailsService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderDetailTotalsComponent,
      selectors: [["cx-order-details-totals"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "row", "justify-content-end"], [1, "cx-summary", "col-sm-12", "col-md-6", "col-lg-5", "col-xl-4"], [3, "cxOutlet", "cxOutletContext"]],
      template: function OrderDetailTotalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderDetailTotalsComponent_ng_container_0_Template, 4, 2, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgIf, OutletDirective, AsyncPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailTotalsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-details-totals",
      standalone: false,
      template: '<ng-container *ngIf="order$ | async as order">\n  <div class="row justify-content-end">\n    <div class="cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4">\n      <ng-template\n        [cxOutlet]="CartOutlets.ORDER_SUMMARY"\n        [cxOutletContext]="order"\n      >\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n'
    }]
  }], () => [{
    type: OrderDetailsService
  }], null);
})();
var defaultReorderLayoutConfig = {
  launch: {
    REORDER: {
      inline: true,
      component: ReorderDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var OrderAttachmentsComponent = class _OrderAttachmentsComponent {
  constructor() {
    this.orderDetailsService = inject(OrderDetailsService);
    this.launchDialogService = inject(LaunchDialogService);
    this.vcr = inject(ViewContainerRef);
    this.destroyRef = inject(DestroyRef);
    this.order$ = this.orderDetailsService.getOrderDetails();
  }
  onOrderAttachmentsClick(orderCode) {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.ORDER_ATTACHMENTS, this.element, this.vcr, {
      orderCode
    });
    if (dialog) {
      dialog.pipe(take(1), takeUntilDestroyed(this.destroyRef)).subscribe();
    }
  }
  static {
    this.ɵfac = function OrderAttachmentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderAttachmentsComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderAttachmentsComponent,
      selectors: [["cx-order-attachments"]],
      viewQuery: function OrderAttachmentsComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c20, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["element", ""], [4, "ngIf"], [1, "row", "justify-content-end"], [1, "col-sm-12", "col-md-6", "col-lg-5", "col-xl-4"], [1, "btn", "btn-secondary", "w-100", "order-attachments-dialog-btn", 3, "click"]],
      template: function OrderAttachmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderAttachmentsComponent_ng_container_0_Template, 2, 1, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.order$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderAttachmentsComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-attachments",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="order$ | async as order">
  <ng-container *ngIf="order.code">
    <div class="row justify-content-end">
      <div class="col-sm-12 col-md-6 col-lg-5 col-xl-4">
        <button
          #element
          class="btn btn-secondary w-100 order-attachments-dialog-btn"
          (click)="onOrderAttachmentsClick(order.code)"
        >
          {{ 'attachments.button' | cxTranslate }}
        </button>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], null, {
    element: [{
      type: ViewChild,
      args: ["element"]
    }]
  });
})();
var OrderAttachmentsDialogComponent = class _OrderAttachmentsDialogComponent {
  constructor() {
    this.config = inject(OrderConfig);
    this.launchDialogService = inject(LaunchDialogService);
    this.orderAttachmentsFacade = inject(OrderAttachmentsFacade);
    this.translation = inject(TranslationService);
    this.cd = inject(ChangeDetectorRef);
    this.destroyRef = inject(DestroyRef);
    this.globalMessageType = GlobalMessageType;
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: true,
      focusOnEscape: true
    };
    this.orderCode$ = this.launchDialogService.data$.pipe(map((data) => data.orderCode));
    this.attachments$ = this.orderCode$.pipe(switchMap((orderId) => this.orderAttachmentsFacade.getOrderAttachments(orderId)), map((attachments) => attachments.sapAttachments ?? []), catchError(() => {
      this.loadError.set(true);
      return of([]);
    }), share());
    this.loadError = signal(false);
    this.attachmentsCount = toSignal(this.attachments$.pipe(map((attachments) => attachments.length)), {
      initialValue: 0
    });
    this.loadingAttachments = [];
    this.erroredAttachments = [];
    this.errorCounter = 0;
  }
  openOrderAttachment(attachmentId, fileName) {
    this.orderCode$.pipe(filter(() => !this.loadingAttachments.includes(attachmentId)), tap(() => this.setAttachmentLoadingState(attachmentId, true)), switchMap((orderId) => this.orderAttachmentsFacade.downloadOrderAttachment(orderId, attachmentId)), tap((blob) => {
      if (blob.type && this.config.orderAttachments?.previewMimeTypes.includes(blob.type.split(";")[0])) {
        this.previewFile(blob);
        return;
      }
      this.downloadFile(blob, fileName);
    }), tap(() => this.setAttachmentLoadingState(attachmentId, false)), catchError(() => {
      this.setAttachmentLoadingState(attachmentId, false);
      this.addErrorMessage(attachmentId);
      return EMPTY;
    }), takeUntilDestroyed(this.destroyRef)).subscribe();
  }
  previewFile(blob) {
    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, "_blank", "noopener,noreferrer");
  }
  downloadFile(blob, fileName) {
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  onMouseDown(event, attachmentId, fileName) {
    const leftMouseButton = 0;
    const middleMouseButton = 1;
    if (event.button === leftMouseButton || event.button === middleMouseButton) {
      this.openOrderAttachment(attachmentId, fileName);
    }
  }
  setAttachmentLoadingState(attachmentId, state) {
    if (state) {
      this.loadingAttachments.push(attachmentId);
    } else {
      this.loadingAttachments = this.loadingAttachments.filter((id) => id !== attachmentId);
    }
    this.cd.detectChanges();
  }
  addErrorMessage(attachmentId) {
    this.erroredAttachments.push(`${attachmentId}_${this.errorCounter}`);
    this.errorCounter++;
    this.cd.detectChanges();
  }
  closeErrorMessage(attachmentId) {
    this.erroredAttachments = this.erroredAttachments.filter((id) => id !== attachmentId);
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  static {
    this.ɵfac = function OrderAttachmentsDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderAttachmentsDialogComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderAttachmentsDialogComponent,
      selectors: [["cx-order-attachments-dialog"]],
      standalone: false,
      decls: 28,
      vars: 23,
      consts: [["error", ""], ["empty", ""], ["loading", ""], ["role", "dialog", "aria-labelledby", "dialogTitle", "aria-modal", "true", 1, "cx-modal-container", 3, "esc", "cxFocus"], [1, "cx-modal-content"], [1, "cx-dialog-header", "modal-header"], ["id", "dialogTitle", 1, "cx-dialog-title", "modal-title"], ["class", "attachments-counter", 4, "ngIf"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [1, "cx-dialog-body", "modal-body"], ["class", "cx-dialog-message attachment-error", 3, "text", "type", "closeMessage", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "cx-dialog-footer", "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "cancel-button", 3, "click"], [1, "attachments-counter"], [1, "cx-dialog-message", "attachment-error", 3, "closeMessage", "text", "type"], [1, "table"], [4, "ngFor", "ngForOf"], ["class", "order-attachment-row", 4, "ngIf"], [1, "order-attachment-row"], [3, "mousedown", "keydown.enter", "title", "ngClass"], [1, "inline-spinner", 3, "ngClass"], ["tabindex", "0", "role", "button", 1, "file-icon", 3, "click", "keydown.enter", "title", "ngClass"], [1, "cx-dialog-message", "error-message", 3, "text", "type", "isVisibleCloseButton"], [1, "cx-dialog-message", "info-message", 3, "text", "type", "isVisibleCloseButton"], [1, "cx-spinner"]],
      template: function OrderAttachmentsDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = ɵɵgetCurrentView();
          ɵɵelementStart(0, "div", 3);
          ɵɵlistener("esc", function OrderAttachmentsDialogComponent_Template_div_esc_0_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.close("Escape clicked"));
          });
          ɵɵelementStart(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "span");
          ɵɵtext(5);
          ɵɵpipe(6, "cxTranslate");
          ɵɵelementEnd();
          ɵɵtemplate(7, OrderAttachmentsDialogComponent_span_7_Template, 2, 1, "span", 7);
          ɵɵelementEnd();
          ɵɵelementStart(8, "button", 8);
          ɵɵpipe(9, "cxTranslate");
          ɵɵpipe(10, "cxTranslate");
          ɵɵlistener("click", function OrderAttachmentsDialogComponent_Template_button_click_8_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.close("Close dialog"));
          });
          ɵɵelementStart(11, "span", 9);
          ɵɵelement(12, "cx-icon", 10);
          ɵɵelementEnd()()();
          ɵɵelementStart(13, "div", 11);
          ɵɵtemplate(14, OrderAttachmentsDialogComponent_cx_message_14_Template, 2, 4, "cx-message", 12)(15, OrderAttachmentsDialogComponent_ng_container_15_Template, 2, 2, "ng-container", 13);
          ɵɵpipe(16, "async");
          ɵɵelementEnd();
          ɵɵelementStart(17, "div", 14)(18, "button", 15);
          ɵɵpipe(19, "cxTranslate");
          ɵɵlistener("click", function OrderAttachmentsDialogComponent_Template_button_click_18_listener() {
            ɵɵrestoreView(_r1);
            return ɵɵresetView(ctx.close("Cancel dialog"));
          });
          ɵɵtext(20);
          ɵɵpipe(21, "cxTranslate");
          ɵɵelementEnd()()()();
          ɵɵtemplate(22, OrderAttachmentsDialogComponent_ng_template_22_Template, 2, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor)(24, OrderAttachmentsDialogComponent_ng_template_24_Template, 2, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor)(26, OrderAttachmentsDialogComponent_ng_template_26_Template, 2, 0, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const loading_r11 = ɵɵreference(27);
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 11, "attachments.dialog.title"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.attachmentsCount());
          ɵɵadvance();
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(9, 13, "attachments.dialog.closeModal"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(10, 15, "attachments.dialog.closeModal"));
          ɵɵadvance(4);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance(2);
          ɵɵproperty("ngForOf", ctx.erroredAttachments);
          ɵɵadvance();
          ɵɵproperty("ngIf", ɵɵpipeBind1(16, 17, ctx.attachments$))("ngIfElse", loading_r11);
          ɵɵadvance(3);
          ɵɵattribute("aria-label", ɵɵpipeBind1(19, 19, "common.cancel"));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(21, 21, "common.cancel"), " ");
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, SpinnerComponent, FocusDirective, IconComponent, MessageComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderAttachmentsDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-attachments-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
  class="cx-modal-container"
  role="dialog"
  aria-labelledby="dialogTitle"
  aria-modal="true"
>
  <div class="cx-modal-content">
    <div class="cx-dialog-header modal-header">
      <div id="dialogTitle" class="cx-dialog-title modal-title">
        <span>
          {{ 'attachments.dialog.title' | cxTranslate }}
        </span>
        <span *ngIf="attachmentsCount() as count" class="attachments-counter">
          {{ '(' + count + ')' }}
        </span>
      </div>
      <button
        type="button"
        class="close"
        attr.aria-label="{{ 'attachments.dialog.closeModal' | cxTranslate }}"
        title="{{ 'attachments.dialog.closeModal' | cxTranslate }}"
        (click)="close('Close dialog')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>

    <!-- Modal Body -->
    <div class="cx-dialog-body modal-body">
      <cx-message
        *ngFor="let errorId of erroredAttachments"
        [text]="'attachments.dialog.downloadError' | cxTranslate"
        [type]="globalMessageType.MSG_TYPE_ERROR"
        (closeMessage)="closeErrorMessage(errorId)"
        class="cx-dialog-message attachment-error"
      >
      </cx-message>
      <ng-container *ngIf="attachments$ | async as attachments; else loading">
        <ng-container *ngIf="!loadError(); else error">
          <ng-container *ngIf="attachmentsCount(); else empty">
            <table class="table">
              <ng-container *ngFor="let attachment of attachments">
                <tr
                  *ngIf="attachment.sapAttachmentId"
                  class="order-attachment-row"
                >
                  <td>
                    <a
                      attr.aria-label="{{
                        'attachments.dialog.preview' | cxTranslate
                      }}"
                      title="{{ 'attachments.dialog.preview' | cxTranslate }}"
                      [ngClass]="{
                        disabled: loadingAttachments.includes(
                          attachment.sapAttachmentId
                        ),
                      }"
                      (mousedown)="
                        onMouseDown(
                          $event,
                          attachment.sapAttachmentId,
                          attachment.sapFileName
                        )
                      "
                      (keydown.enter)="
                        openOrderAttachment(
                          attachment.sapAttachmentId,
                          attachment.sapFileName
                        )
                      "
                    >
                      {{ attachment.sapFileName }}
                    </a>
                  </td>
                  <td>
                    <div
                      class="inline-spinner"
                      [ngClass]="{
                        hidden: !loadingAttachments.includes(
                          attachment.sapAttachmentId
                        ),
                      }"
                    >
                      <cx-spinner></cx-spinner>
                    </div>
                  </td>
                  <td>
                    <a
                      tabindex="0"
                      role="button"
                      class="file-icon"
                      attr.aria-label="{{
                        'attachments.dialog.preview' | cxTranslate
                      }}"
                      title="{{ 'attachments.dialog.preview' | cxTranslate }}"
                      [ngClass]="{
                        disabled: loadingAttachments.includes(
                          attachment.sapAttachmentId
                        ),
                      }"
                      (click)="
                        openOrderAttachment(
                          attachment.sapAttachmentId,
                          attachment.sapFileName
                        )
                      "
                      (keydown.enter)="
                        openOrderAttachment(
                          attachment.sapAttachmentId,
                          attachment.sapFileName
                        )
                      "
                    >
                      <cx-icon [type]="iconTypes.FILE"></cx-icon>
                    </a>
                  </td>
                </tr>
              </ng-container>
            </table>
          </ng-container>
        </ng-container>
      </ng-container>
    </div>

    <!-- Modal Footer -->
    <div class="cx-dialog-footer modal-footer">
      <button
        (click)="close('Cancel dialog')"
        [attr.aria-label]="'common.cancel' | cxTranslate"
        class="btn btn-secondary cancel-button"
        type="button"
      >
        {{ 'common.cancel' | cxTranslate }}
      </button>
    </div>
  </div>
</div>

<ng-template #error>
  <cx-message
    [text]="'attachments.dialog.error' | cxTranslate"
    [type]="globalMessageType.MSG_TYPE_ERROR"
    [isVisibleCloseButton]="false"
    class="cx-dialog-message error-message"
  >
  </cx-message>
</ng-template>
<ng-template #empty>
  <cx-message
    [text]="'attachments.dialog.empty' | cxTranslate"
    [type]="globalMessageType.MSG_TYPE_INFO"
    [isVisibleCloseButton]="false"
    class="cx-dialog-message info-message"
  >
  </cx-message>
</ng-template>
<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], null, null);
})();
var defaultOrderAttachmentsDialogLayoutConfig = {
  launch: {
    ORDER_ATTACHMENTS: {
      inline: true,
      component: OrderAttachmentsDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
function registerOrderOutletFactory() {
  const isMyAccountV2 = inject(USE_MY_ACCOUNT_V2_ORDER);
  const outletService = inject(OutletService);
  const componentFactoryResolver = inject(ComponentFactoryResolver$1);
  return () => {
    const config = {
      component: MyAccountV2ConsignmentTrackingComponent,
      id: OrderOutlets.ORDER_CONSIGNMENT,
      position: OutletPosition.REPLACE
    };
    if (isMyAccountV2) {
      const template = componentFactoryResolver.resolveComponentFactory(config.component);
      outletService.add(config.id, template, config.position);
    }
  };
}
var myAccountV2CmsMapping$1 = {
  cmsComponents: {
    AccountOrderDetailsActionsComponent: {
      component: MyAccountV2OrderDetailsActionsComponent
      //guards: inherited from standard config,
    }
  }
};
var moduleComponents$2 = [OrderOverviewComponent, OrderDetailActionsComponent, OrderDetailItemsComponent, OrderDetailTotalsComponent, OrderDetailBillingComponent, TrackingEventsComponent, ConsignmentTrackingComponent, OrderConsignedEntriesComponent, OrderDetailReorderComponent, ReorderDialogComponent, MyAccountV2OrderDetailsActionsComponent, MyAccountV2ConsignmentTrackingComponent, OrderAttachmentsComponent, OrderAttachmentsDialogComponent];
var OrderDetailsModule = class _OrderDetailsModule {
  static {
    this.ɵfac = function OrderDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderDetailsModule,
      declarations: [OrderOverviewComponent, OrderDetailActionsComponent, OrderDetailItemsComponent, OrderDetailTotalsComponent, OrderDetailBillingComponent, TrackingEventsComponent, ConsignmentTrackingComponent, OrderConsignedEntriesComponent, OrderDetailReorderComponent, ReorderDialogComponent, MyAccountV2OrderDetailsActionsComponent, MyAccountV2ConsignmentTrackingComponent, OrderAttachmentsComponent, OrderAttachmentsDialogComponent],
      imports: [CardModule, CommonModule, I18nModule, FeaturesConfigModule, PromotionsModule, UrlModule, SpinnerModule, RouterModule, OutletModule, AddToCartModule, KeyboardFocusModule, IconModule, MyAccountV2DownloadInvoicesModule, AbstractOrderContextModule, BtnLikeLinkModule, MessageComponentModule],
      exports: [OrderOverviewComponent, OrderDetailActionsComponent, OrderDetailItemsComponent, OrderDetailTotalsComponent, OrderDetailBillingComponent, TrackingEventsComponent, ConsignmentTrackingComponent, OrderConsignedEntriesComponent, OrderDetailReorderComponent, ReorderDialogComponent, MyAccountV2OrderDetailsActionsComponent, MyAccountV2ConsignmentTrackingComponent, OrderAttachmentsComponent, OrderAttachmentsDialogComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [OrderOverviewComponentService, provideDefaultConfig({
        cmsComponents: {
          AccountOrderDetailsActionsComponent: {
            component: OrderDetailActionsComponent,
            guards: [AuthGuard]
          },
          AccountOrderDetailsItemsComponent: {
            component: OrderDetailItemsComponent,
            guards: [AuthGuard],
            data: {
              enableAddToCart: true
            }
          },
          AccountOrderDetailsGroupedItemsComponent: {
            component: OrderDetailItemsComponent,
            guards: [AuthGuard],
            data: {
              enableAddToCart: true,
              groupCartItems: true
            }
          },
          AccountOrderDetailsTotalsComponent: {
            component: OrderDetailTotalsComponent,
            guards: [AuthGuard]
          },
          AccountOrderDetailsOverviewComponent: {
            component: OrderOverviewComponent,
            guards: [AuthGuard]
          },
          AccountOrderDetailsSimpleOverviewComponent: {
            component: OrderOverviewComponent,
            guards: [AuthGuard],
            data: {
              simple: true
            }
          },
          AccountOrderDetailsReorderComponent: {
            component: OrderDetailReorderComponent,
            guards: [AuthGuard]
          },
          AccountOrderAttachmentsComponent: {
            component: OrderAttachmentsComponent,
            guards: [AuthGuard]
          }
        },
        features: {
          consignmentTracking: "1.2"
        }
      }), provideDefaultConfig(defaultConsignmentTrackingLayoutConfig), provideDefaultConfig(defaultReorderLayoutConfig), provideDefaultConfig(defaultOrderAttachmentsDialogLayoutConfig), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_ORDER) ? myAccountV2CmsMapping$1 : {}), {
        provide: MODULE_INITIALIZER,
        useFactory: registerOrderOutletFactory,
        multi: true
      }],
      imports: [CardModule, CommonModule, I18nModule, FeaturesConfigModule, PromotionsModule, UrlModule, SpinnerModule, RouterModule, OutletModule, AddToCartModule, KeyboardFocusModule, IconModule, MyAccountV2DownloadInvoicesModule, AbstractOrderContextModule, BtnLikeLinkModule, MessageComponentModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CardModule, CommonModule, I18nModule, FeaturesConfigModule, PromotionsModule, UrlModule, SpinnerModule, RouterModule, OutletModule, AddToCartModule, KeyboardFocusModule, IconModule, MyAccountV2DownloadInvoicesModule, AbstractOrderContextModule, BtnLikeLinkModule, MessageComponentModule],
      providers: [OrderOverviewComponentService, provideDefaultConfig({
        cmsComponents: {
          AccountOrderDetailsActionsComponent: {
            component: OrderDetailActionsComponent,
            guards: [AuthGuard]
          },
          AccountOrderDetailsItemsComponent: {
            component: OrderDetailItemsComponent,
            guards: [AuthGuard],
            data: {
              enableAddToCart: true
            }
          },
          AccountOrderDetailsGroupedItemsComponent: {
            component: OrderDetailItemsComponent,
            guards: [AuthGuard],
            data: {
              enableAddToCart: true,
              groupCartItems: true
            }
          },
          AccountOrderDetailsTotalsComponent: {
            component: OrderDetailTotalsComponent,
            guards: [AuthGuard]
          },
          AccountOrderDetailsOverviewComponent: {
            component: OrderOverviewComponent,
            guards: [AuthGuard]
          },
          AccountOrderDetailsSimpleOverviewComponent: {
            component: OrderOverviewComponent,
            guards: [AuthGuard],
            data: {
              simple: true
            }
          },
          AccountOrderDetailsReorderComponent: {
            component: OrderDetailReorderComponent,
            guards: [AuthGuard]
          },
          AccountOrderAttachmentsComponent: {
            component: OrderAttachmentsComponent,
            guards: [AuthGuard]
          }
        },
        features: {
          consignmentTracking: "1.2"
        }
      }), provideDefaultConfig(defaultConsignmentTrackingLayoutConfig), provideDefaultConfig(defaultReorderLayoutConfig), provideDefaultConfig(defaultOrderAttachmentsDialogLayoutConfig), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_ORDER) ? myAccountV2CmsMapping$1 : {}), {
        provide: MODULE_INITIALIZER,
        useFactory: registerOrderOutletFactory,
        multi: true
      }],
      declarations: [...moduleComponents$2],
      exports: [...moduleComponents$2]
    }]
  }], null, null);
})();
var OrderHistoryComponent = class _OrderHistoryComponent {
  constructor(routing, orderHistoryFacade, translation, replenishmentOrderHistoryFacade) {
    this.routing = routing;
    this.orderHistoryFacade = orderHistoryFacade;
    this.translation = translation;
    this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
    this.PAGE_SIZE = 5;
    this.orders$ = this.orderHistoryFacade.getOrderHistoryList(this.PAGE_SIZE).pipe(tap((orders) => {
      this.setOrderHistoryParams(orders);
    }));
    this.hasReplenishmentOrder$ = this.replenishmentOrderHistoryFacade.getReplenishmentOrderDetails().pipe(map((order) => order && Object.keys(order).length !== 0));
    this.isLoaded$ = this.orderHistoryFacade.getOrderHistoryListLoaded();
    this.tabTitleParam$ = this.orders$.pipe(map((order) => order?.pagination?.totalResults), filter(isNotUndefined), take(1));
  }
  setOrderHistoryParams(orders) {
    if (orders?.pagination?.sort) {
      this.sortType = orders.pagination.sort;
    }
    this.hasPONumber = orders?.orders?.[0]?.purchaseOrderNumber !== void 0;
  }
  ngOnDestroy() {
    this.orderHistoryFacade.clearOrderList();
  }
  changeSortCode(sortCode) {
    const event = {
      sortCode,
      currentPage: 0
    };
    this.sortType = sortCode;
    this.fetchOrders(event);
  }
  pageChange(page) {
    const event = {
      sortCode: this.sortType,
      currentPage: page
    };
    this.fetchOrders(event);
  }
  goToOrderDetail(order) {
    this.routing.go({
      cxRoute: "orderDetails",
      params: order
    }, {
      queryParams: this.getQueryParams(order)
    });
  }
  getQueryParams(order) {
    return this.orderHistoryFacade.getQueryParams(order);
  }
  getSortLabels() {
    return combineLatest([this.translation.translate("sorting.date"), this.translation.translate("sorting.orderNumber")]).pipe(map(([textByDate, textByOrderNumber]) => {
      return {
        byDate: textByDate,
        byOrderNumber: textByOrderNumber
      };
    }));
  }
  fetchOrders(event) {
    this.orderHistoryFacade.loadOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
  }
  static {
    this.ɵfac = function OrderHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderHistoryComponent)(ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(OrderHistoryFacade), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ReplenishmentOrderHistoryFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderHistoryComponent,
      selectors: [["cx-order-history"]],
      standalone: false,
      decls: 3,
      vars: 8,
      consts: [["noOrder", ""], ["otherOrder", ""], [4, "ngIf"], [1, "cx-order-history-container"], [3, "ngClass"], [1, "cx-order-history-body"], [4, "ngIf", "ngIfElse"], [1, "cx-order-history-sort", "top"], [1, "cx-order-history-form-group", "form-group"], ["ariaControls", "order-history-table", 3, "sortListEvent", "sortOptions", "sortLabels", "selectedOption", "placeholder", "ariaLabel"], ["class", "cx-order-history-pagination", 4, "ngIf"], ["role", "table", "id", "order-history-table", 1, "table", "cx-order-history-table", 3, "ngClass"], [1, "cx-visually-hidden"], [1, "cx-order-history-thead-mobile"], ["role", "row"], ["role", "columnheader", "scope", "col"], ["role", "row", 3, "click", 4, "ngFor", "ngForOf"], [1, "cx-order-history-sort", "bottom"], [1, "cx-order-history-pagination"], ["paginationID", "pagination-top", 3, "viewPageEvent", "pagination"], ["role", "row", 3, "click"], ["role", "cell", 1, "cx-order-history-code"], [1, "cx-order-history-label"], [1, "cx-order-history-value", 3, "routerLink", "queryParams"], ["role", "cell", 1, "cx-order-history-placed"], ["role", "cell", 1, "cx-order-history-status"], ["role", "cell", 1, "cx-order-history-total"], ["role", "cell", 1, "cx-order-history-po"], ["class", "cx-order-history-value", 3, "routerLink", "queryParams", 4, "ngIf"], ["role", "cell", 1, "cx-order-history-cost-center"], ["paginationID", "pagination-bottom", 3, "viewPageEvent", "pagination"], [3, "ngClass", 4, "ngIf"], ["routerLinkActive", "active", "cxBtnLikeLink", "", 1, "btn", "btn-primary", "btn-block", 3, "routerLink"]],
      template: function OrderHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderHistoryComponent_ng_container_0_Template, 2, 1, "ng-container", 2);
          ɵɵpipe(1, "async");
          ɵɵpipe(2, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpureFunction2(5, _c28, ɵɵpipeBind1(1, 1, ctx.orders$), ɵɵpipeBind1(2, 3, ctx.hasReplenishmentOrder$)));
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, RouterLink, RouterLinkActive, SortingComponent, PaginationComponent, BtnLikeLinkDirective, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-history",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container
  *ngIf="{
    orderHistory: orders$ | async,
    replenishmentOrder: hasReplenishmentOrder$ | async,
  } as type"
>
  <ng-container *ngIf="type.orderHistory">
    <div class="cx-order-history-container">
      <!-- HEADER -->
      <div
        [ngClass]="
          type.replenishmentOrder
            ? 'cx-replenishment-details-order-history-header'
            : 'cx-order-history-header'
        "
      >
        <h4 *ngIf="type.replenishmentOrder">
          {{ 'orderHistory.replenishmentHistory' | cxTranslate }}
        </h4>
        <h2 *ngIf="!type.replenishmentOrder">
          {{ 'orderHistory.orderHistory' | cxTranslate }}
        </h2>
      </div>

      <!-- BODY -->
      <div class="cx-order-history-body">
        <ng-container
          *ngIf="type.orderHistory.pagination.totalResults > 0; else noOrder"
        >
          <!-- Select Form and Pagination Top -->
          <div class="cx-order-history-sort top">
            <label class="cx-order-history-form-group form-group"
              ><span>
                {{ 'orderHistory.sortBy' | cxTranslate }}
              </span>
              <cx-sorting
                [sortOptions]="type.orderHistory.sorts"
                [sortLabels]="getSortLabels() | async"
                (sortListEvent)="changeSortCode($event)"
                [selectedOption]="type.orderHistory.pagination.sort"
                placeholder="{{ 'orderHistory.sortBy' | cxTranslate }}"
                [ariaLabel]="'orderHistory.sortOrders' | cxTranslate"
                ariaControls="order-history-table"
              ></cx-sorting>
            </label>
            <div
              *ngIf="type.orderHistory.pagination.totalPages > 1"
              class="cx-order-history-pagination"
            >
              <cx-pagination
                [pagination]="type.orderHistory.pagination"
                (viewPageEvent)="pageChange($event)"
                paginationID="pagination-top"
              ></cx-pagination>
            </div>
          </div>

          <table
            role="table"
            id="order-history-table"
            class="table cx-order-history-table"
            [ngClass]="{ 'cx-order-history-table-po': hasPONumber }"
          >
            <caption class="cx-visually-hidden">
              {{
                'orderHistory.orderHistory' | cxTranslate
              }}
            </caption>
            <thead class="cx-order-history-thead-mobile">
              <tr role="row">
                <th role="columnheader" scope="col">
                  {{ 'orderHistory.orderId' | cxTranslate }}
                </th>
                <ng-container *ngIf="hasPONumber">
                  <th role="columnheader" scope="col">
                    {{ 'orderHistory.PONumber' | cxTranslate }}
                  </th>
                  <th role="columnheader" scope="col">
                    {{ 'orderHistory.costCenter' | cxTranslate }}
                  </th>
                </ng-container>
                <th role="columnheader" scope="col">
                  {{ 'orderHistory.date' | cxTranslate }}
                </th>
                <th role="columnheader" scope="col">
                  {{ 'orderHistory.status' | cxTranslate }}
                </th>
                <th role="columnheader" scope="col">
                  {{ 'orderHistory.total' | cxTranslate }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                role="row"
                *ngFor="let order of type.orderHistory.orders; let i = index"
                (click)="goToOrderDetail(order)"
                [attr.aria-rowindex]="i + 1"
              >
                <td role="cell" class="cx-order-history-code">
                  <div class="cx-order-history-label">
                    {{ 'orderHistory.orderId' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'orderDetails',
                        params: order,
                      } | cxUrl
                    "
                    [queryParams]="getQueryParams(order)"
                    class="cx-order-history-value"
                  >
                    {{ order?.code }}</a
                  >
                </td>
                <ng-container *ngIf="hasPONumber">
                  <td role="cell" class="cx-order-history-po">
                    <div class="cx-order-history-label">
                      {{ 'orderHistory.PONumber' | cxTranslate }}
                    </div>
                    <a
                      *ngIf="order.purchaseOrderNumber"
                      [routerLink]="
                        {
                          cxRoute: 'orderDetails',
                          params: order,
                        } | cxUrl
                      "
                      [queryParams]="getQueryParams(order)"
                      class="cx-order-history-value"
                    >
                      {{ order.purchaseOrderNumber }}</a
                    >
                  </td>
                  <td role="cell" class="cx-order-history-cost-center">
                    <div class="cx-order-history-label">
                      {{ 'orderHistory.costCenter' | cxTranslate }}
                    </div>
                    <a
                      *ngIf="order.costCenter?.name"
                      [routerLink]="
                        {
                          cxRoute: 'orderDetails',
                          params: order,
                        } | cxUrl
                      "
                      [queryParams]="getQueryParams(order)"
                      class="cx-order-history-value"
                    >
                      {{ order.costCenter?.name }}</a
                    >
                  </td>
                </ng-container>

                <td role="cell" class="cx-order-history-placed">
                  <div class="cx-order-history-label">
                    {{ 'orderHistory.date' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'orderDetails',
                        params: order,
                      } | cxUrl
                    "
                    [queryParams]="getQueryParams(order)"
                    class="cx-order-history-value"
                    >{{ order?.placed | cxDate: 'longDate' }}</a
                  >
                </td>
                <td role="cell" class="cx-order-history-status">
                  <div class="cx-order-history-label">
                    {{ 'orderHistory.status' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'orderDetails',
                        params: order,
                      } | cxUrl
                    "
                    [queryParams]="getQueryParams(order)"
                    class="cx-order-history-value"
                  >
                    {{
                      'orderDetails.statusDisplay_' + order?.statusDisplay
                        | cxTranslate
                    }}</a
                  >
                </td>
                <td role="cell" class="cx-order-history-total">
                  <div class="cx-order-history-label">
                    {{ 'orderHistory.total' | cxTranslate }}
                  </div>
                  <a
                    [routerLink]="
                      {
                        cxRoute: 'orderDetails',
                        params: order,
                      } | cxUrl
                    "
                    [queryParams]="getQueryParams(order)"
                    class="cx-order-history-value"
                  >
                    {{ order?.total.formattedValue }}</a
                  >
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Select Form and Pagination Bottom -->
          <div class="cx-order-history-sort bottom">
            <div
              *ngIf="type.orderHistory.pagination.totalPages > 1"
              class="cx-order-history-pagination"
            >
              <cx-pagination
                [pagination]="type.orderHistory.pagination"
                (viewPageEvent)="pageChange($event)"
                paginationID="pagination-bottom"
              ></cx-pagination>
            </div>
          </div>
        </ng-container>

        <!-- NO ORDER CONTAINER -->
        <ng-template #noOrder>
          <div
            *ngIf="isLoaded$ | async"
            [ngClass]="
              type.replenishmentOrder
                ? 'cx-replenishment-details-order-history-no-order'
                : 'cx-order-history-no-order'
            "
          >
            <div>
              <ng-container *ngIf="type.replenishmentOrder; else otherOrder">
                <div>{{ 'orderHistory.notFound' | cxTranslate }}</div>
              </ng-container>

              <ng-template #otherOrder>
                <div>{{ 'orderHistory.noOrders' | cxTranslate }}</div>
                <a
                  [routerLink]="{ cxRoute: 'home' } | cxUrl"
                  routerLinkActive="active"
                  class="btn btn-primary btn-block"
                  cxBtnLikeLink
                  >{{ 'orderHistory.startShopping' | cxTranslate }}</a
                >
              </ng-template>
            </div>
          </div>
        </ng-template>
      </div>
    </div>
  </ng-container>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: OrderHistoryFacade
  }, {
    type: TranslationService
  }, {
    type: ReplenishmentOrderHistoryFacade
  }], null);
})();
var OrderCriticalStatus;
(function(OrderCriticalStatus2) {
  OrderCriticalStatus2["CANCELLED"] = "CANCELLED";
  OrderCriticalStatus2["ERROR"] = "ERROR";
  OrderCriticalStatus2["REJECTED"] = "REJECTED";
})(OrderCriticalStatus || (OrderCriticalStatus = {}));
var MyAccountV2ConsignmentEntriesComponent = class _MyAccountV2ConsignmentEntriesComponent {
  getConsignmentNumber(code) {
    if (code) {
      const consignmentNumber = Number(code.split("_")[1]);
      if (!isNaN(consignmentNumber)) {
        return (consignmentNumber + 1).toString();
      }
    }
    return code;
  }
  static {
    this.ɵfac = function MyAccountV2ConsignmentEntriesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2ConsignmentEntriesComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyAccountV2ConsignmentEntriesComponent,
      selectors: [["cx-my-account-v2-consignment-entries"]],
      inputs: {
        consignments: "consignments",
        orderCode: "orderCode"
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["showLastUpdated", ""], ["showNumber", ""], [4, "ngFor", "ngForOf"], ["class", "cx-consignment-info", 4, "ngIf"], [1, "cx-consignment-info"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["target", "_blank", "rel", "noopener noreferrer", 1, "cx-tracking-id", 3, "href"]],
      template: function MyAccountV2ConsignmentEntriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, MyAccountV2ConsignmentEntriesComponent_ng_container_0_Template, 2, 1, "ng-container", 2);
        }
        if (rf & 2) {
          ɵɵproperty("ngForOf", ctx.consignments);
        }
      },
      dependencies: [NgForOf, NgIf, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2ConsignmentEntriesComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-consignment-entries",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngFor="let consignment of consignments; index as i">
  <!--
example:
Consignment 1 | In Process | Last Updated: 13, September, 2023
Consignment 2 | Tracking Number: 5657474 | Estimated Delivery: 22, September, 2023
  -->
  <div
    class="cx-consignment-info"
    [attr.aria-label]="
      'myAccountV2OrderHistory.consignmentDetailLabel' | cxTranslate
    "
    *ngIf="consignment"
  >
    <span
      [attr.aria-label]="
        'myAccountV2OrderHistory.consignmentNumberLabel' | cxTranslate
      "
    >
      {{
        'myAccountV2OrderHistory.consignmentCode'
          | cxTranslate: { param: i + 1 }
      }}
    </span>
    |
    <ng-container *ngIf="consignment.trackingID; else showLastUpdated">
      <ng-container *ngIf="consignment.consignmentTracking as tracking">
        <span
          [attr.aria-label]="
            'orderDetails.consignmentTracking.dialog.trackingId' | cxTranslate
          "
        >
          {{
            'orderDetails.consignmentTracking.dialog.trackingId' | cxTranslate
          }}:
          <ng-container *ngIf="tracking.trackingUrl; else showNumber">
            <a
              class="cx-tracking-id"
              target="_blank"
              rel="noopener noreferrer"
              [href]="tracking.trackingUrl"
              >{{ tracking.trackingID }}</a
            >
          </ng-container>
          |
        </span>
        <span
          [attr.aria-label]="
            'myAccountV2OrderHistory.estimateDeliveryLabel' | cxTranslate
          "
        >
          {{
            'orderDetails.consignmentTracking.dialog.estimate' | cxTranslate
          }}:
          {{ tracking.targetArrivalDate | cxDate: 'd, MMMM, yyyy' }}
        </span>
        <ng-template #showNumber>
          {{ tracking.trackingID }}
        </ng-template>
      </ng-container>
    </ng-container>
    <ng-template #showLastUpdated>
      <span
        [attr.aria-label]="
          'myAccountV2OrderHistory.consignmentStatusLabel' | cxTranslate
        "
        *ngIf="consignment.status"
      >
        {{
          'orderDetails.deliveryStatus_' + consignment?.status?.toUpperCase()
            | cxTranslate
        }}
      </span>
      <span
        *ngIf="consignment.statusDate"
        [attr.aria-label]="
          'myAccountV2OrderHistory.consignmentStatusDateLabel' | cxTranslate
        "
      >
        |
        {{
          'myAccountV2OrderHistory.statusDate'
            | cxTranslate
              : { param: consignment.statusDate | cxDate: 'd, MMMM, yyyy' }
        }}
      </span>
    </ng-template>
  </div>
</ng-container>
`
    }]
  }], null, {
    consignments: [{
      type: Input
    }],
    orderCode: [{
      type: Input
    }]
  });
})();
var MyAccountV2OrderConsolidatedInformationComponent = class _MyAccountV2OrderConsolidatedInformationComponent {
  constructor() {
    this.orderConsignmentsService = inject(MyAccountV2OrderConsignmentsService);
    this.criticalStatuses = Object.values(OrderCriticalStatus);
    this.IMAGE_COUNT = 4;
  }
  getConsignmentsCount(consignments) {
    let count = 0;
    if (consignments) {
      for (const consignment of consignments) {
        if (consignment.entries) {
          count = count + consignment.entries.length;
        }
      }
    }
    return count;
  }
  getOrderEntriesCount(orderEntries) {
    return orderEntries?.length ?? 0;
  }
  isStatusCritical(status) {
    return this.criticalStatuses.includes(status.toUpperCase());
  }
  getPickupConsignments(consignments) {
    const orderDetail = {};
    orderDetail.consignments = consignments;
    return this.orderConsignmentsService.getGroupedConsignments(orderDetail, true) ?? [];
  }
  getDeliveryConsignments(consignments) {
    const orderDetail = {};
    orderDetail.consignments = consignments;
    return this.orderConsignmentsService.getGroupedConsignments(orderDetail, false) ?? [];
  }
  getDeliveryUnconsignedEntries(unconsignedEntries) {
    const orderDetail = {};
    orderDetail.unconsignedEntries = unconsignedEntries;
    return this.orderConsignmentsService.getUnconsignedEntries(orderDetail, false) ?? [];
  }
  getPickupUnconsignedEntries(unconsignedEntries) {
    const orderDetail = {};
    orderDetail.unconsignedEntries = unconsignedEntries;
    return this.orderConsignmentsService.getUnconsignedEntries(orderDetail, true) ?? [];
  }
  getProductImages(entries) {
    const images = [];
    let index = 0;
    for (const item of entries) {
      if (item.product?.images) {
        if (index >= this.IMAGE_COUNT) {
          break;
        }
        index++;
        images.push(item.product?.images);
      }
    }
    return images;
  }
  static {
    this.ɵfac = function MyAccountV2OrderConsolidatedInformationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MyAccountV2OrderConsolidatedInformationComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyAccountV2OrderConsolidatedInformationComponent,
      selectors: [["cx-my-account-v2-order-consolidated-information"]],
      inputs: {
        order: "order"
      },
      standalone: false,
      decls: 5,
      vars: 1,
      consts: [["showManyItems", ""], ["showOneItem", ""], ["nonCritical", ""], ["showReturnCode", ""], ["class", "cx-consolidated-order-info", 4, "ngIf"], [1, "cx-consolidated-order-info"], [1, "cx-order-info"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "cx-order-images-container"], [1, "cx-order-status"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "orderCode", "consignments"], ["class", "cx-consignment-info", 4, "ngIf"], ["class", "cx-order-status-critical", 4, "ngIf", "ngIfElse"], [1, "cx-order-status-critical"], [1, "cx-consignment-info"], ["class", "cx-order-status-critical-link", 3, "routerLink", 4, "ngIf", "ngIfElse"], [1, "cx-order-status-critical-link", 3, "routerLink"], ["format", "thumbnail", "role", "presentation", 1, "cx-order-img", 3, "container"], [4, "ngIf", "ngIfElse"]],
      template: function MyAccountV2OrderConsolidatedInformationComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, MyAccountV2OrderConsolidatedInformationComponent_div_0_Template, 8, 7, "div", 4)(1, MyAccountV2OrderConsolidatedInformationComponent_ng_template_1_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(3, MyAccountV2OrderConsolidatedInformationComponent_ng_template_3_Template, 2, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.order);
        }
      },
      dependencies: [NgForOf, NgIf, NgTemplateOutlet, RouterLink, MediaComponent, MyAccountV2ConsignmentEntriesComponent, UrlPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrderConsolidatedInformationComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-order-consolidated-information",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="cx-consolidated-order-info" *ngIf="order">
  <div class="cx-order-info">
    <!-- pickup consigned entries 
  eg: To Be Picked Up - 3 Items
  -->
    <div
      *ngIf="
        getConsignmentsCount(getPickupConsignments(order.consignments ?? [])) >
        0
      "
    >
      <div class="cx-order-status">
        {{
          'myAccountV2OrderHistory.deliveryPointOfServiceDetails.itemsToBePickUp'
            | cxTranslate
        }}
        <ng-container
          *ngTemplateOutlet="
            showManyItems;
            context: {
              count: getConsignmentsCount(
                getPickupConsignments(order.consignments ?? [])
              ),
            }
          "
        ></ng-container>
      </div>
      <cx-my-account-v2-consignment-entries
        [orderCode]="order.code ?? ''"
        [consignments]="getPickupConsignments(order.consignments ?? [])"
      ></cx-my-account-v2-consignment-entries>
    </div>

    <!-- delivery consigned entries
  eg: To Be Shipped - 6 Items
  -->
    <div
      *ngIf="
        getConsignmentsCount(
          getDeliveryConsignments(order.consignments ?? [])
        ) > 0
      "
    >
      <!--heading taken from feature-libs/order/components/order-confirmation/order-confirmation-shipping/order-confirmation-shipping.component.html-->
      <!--instead of [cxOutlet]="OrderOutlets.CONSIGNMENT_DELIVERY_INFO"-->
      <div class="cx-order-status">
        {{
          'myAccountV2OrderHistory.checkoutMode.deliveryEntries' | cxTranslate
        }}
        <ng-container
          *ngTemplateOutlet="
            showManyItems;
            context: {
              count: getConsignmentsCount(
                getDeliveryConsignments(order.consignments ?? [])
              ),
            }
          "
        ></ng-container>
      </div>
      <cx-my-account-v2-consignment-entries
        [orderCode]="order.code ?? ''"
        [consignments]="getDeliveryConsignments(order.consignments ?? [])"
      ></cx-my-account-v2-consignment-entries>
    </div>

    <!-- unconsigned entries 
  eg: Some_Status - 1 Item
  -->
    <div *ngIf="getOrderEntriesCount(order.unconsignedEntries) > 0">
      <div *ngIf="order.statusDisplay">
        <div
          class="cx-order-status-critical"
          *ngIf="isStatusCritical(order.statusDisplay); else nonCritical"
        >
          {{
            'orderDetails.statusDisplay_' + order.statusDisplay | cxTranslate
          }}
          -
          <ng-container
            *ngTemplateOutlet="
              showManyItems;
              context: { count: getOrderEntriesCount(order.unconsignedEntries) }
            "
          ></ng-container>
        </div>
        <ng-template #nonCritical>
          <div class="cx-order-status">
            {{
              'orderDetails.statusDisplay_' + order.statusDisplay | cxTranslate
            }}
            -
            <ng-container
              *ngTemplateOutlet="
                showManyItems;
                context: {
                  count: getOrderEntriesCount(order.unconsignedEntries),
                }
              "
            ></ng-container>
          </div>
        </ng-template>
      </div>

      <!-- delivery unconsigned entries 
      eg: To Be Shipped - 6 Items //showing this is in extra information format
    -->
      <div
        class="cx-consignment-info"
        *ngIf="
          getOrderEntriesCount(
            getDeliveryUnconsignedEntries(order.unconsignedEntries ?? [])
          ) > 0
        "
      >
        {{
          'myAccountV2OrderHistory.checkoutMode.deliveryEntries' | cxTranslate
        }}
        <ng-container
          *ngTemplateOutlet="
            showManyItems;
            context: {
              count: getOrderEntriesCount(
                getDeliveryUnconsignedEntries(order.unconsignedEntries ?? [])
              ),
            }
          "
        ></ng-container>
      </div>

      <!-- pickup unconsigned entries, b2b does not have pickup items
      eg: To Be Picked Up - 7 Items //showing this is as an extra information format
    -->
      <div
        class="cx-consignment-info"
        *ngIf="
          getOrderEntriesCount(
            getPickupUnconsignedEntries(order.unconsignedEntries ?? [])
          ) > 0
        "
      >
        {{
          'myAccountV2OrderHistory.checkoutPickupInStore.heading' | cxTranslate
        }}
        <ng-container
          *ngTemplateOutlet="
            showManyItems;
            context: {
              count: getOrderEntriesCount(
                getPickupUnconsignedEntries(order.unconsignedEntries ?? [])
              ),
            }
          "
        ></ng-container>
      </div>
    </div>

    <!--return request details
  eg: Returned: 2 Items
      Return Processed: 15, September, 2022
  -->
    <div *ngFor="let returnRequest of order.returnRequests">
      <div class="cx-order-status-critical">
        {{ 'returnRequestList.returnRequestId' | cxTranslate }}
        <a
          *ngIf="returnRequest.rma; else showReturnCode"
          [routerLink]="
            {
              cxRoute: 'returnRequestDetails',
              params: returnRequest,
            } | cxUrl
          "
          class="cx-order-status-critical-link"
        >
          {{ returnRequest.rma }}</a
        >
      </div>
      <ng-template #showReturnCode>
        {{ returnRequest.code }}
      </ng-template>
      <div
        class="cx-consignment-info"
        *ngIf="returnRequest.creationTime as creationTime"
      >
        {{
          'myAccountV2OrderHistory.returnProcessed'
            | cxTranslate: { param: creationTime | cxDate: 'd, MMMM, yyyy' }
        }}
      </div>
    </div>
  </div>
  <div class="cx-order-images-container">
    <ng-container *ngIf="order.entries">
      <ng-container *ngFor="let item of getProductImages(order.entries)">
        <cx-media
          [container]="item.PRIMARY"
          class="cx-order-img"
          format="thumbnail"
          role="presentation"
        ></cx-media>
      </ng-container>
    </ng-container>
  </div>
</div>

<ng-template #showManyItems let-count="count">
  <ng-container *ngIf="count > 1; else showOneItem">
    {{ 'myAccountV2OrderHistory.items' | cxTranslate: { param: count } }}
  </ng-container>
</ng-template>
<ng-template #showOneItem>
  {{ 'myAccountV2OrderHistory.item' | cxTranslate: { param: 1 } }}
</ng-template>
`
    }]
  }], null, {
    order: [{
      type: Input
    }]
  });
})();
var MyAccountV2OrderHistoryComponent = class _MyAccountV2OrderHistoryComponent extends OrderHistoryComponent {
  constructor() {
    super(...arguments);
    this.service = inject(MyAccountV2OrderHistoryService);
    this.ITEMS_PER_PAGE = 5;
    this.isLoaded$ = new BehaviorSubject(false);
    this.orders$ = this.service.getOrderHistoryList(this.ITEMS_PER_PAGE).pipe(tap((orders) => {
      this.isLoaded$.next(true);
      super.setOrderHistoryParams(orders);
    }));
  }
  pageChange(page) {
    this.isLoaded$.next(false);
    this.service.clearOrderList();
    super.pageChange(page);
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵMyAccountV2OrderHistoryComponent_BaseFactory;
      return function MyAccountV2OrderHistoryComponent_Factory(__ngFactoryType__) {
        return (ɵMyAccountV2OrderHistoryComponent_BaseFactory || (ɵMyAccountV2OrderHistoryComponent_BaseFactory = ɵɵgetInheritedFactory(_MyAccountV2OrderHistoryComponent)))(__ngFactoryType__ || _MyAccountV2OrderHistoryComponent);
      };
    })();
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MyAccountV2OrderHistoryComponent,
      selectors: [["cx-my-account-v2-order-history"]],
      standalone: false,
      features: [ɵɵInheritDefinitionFeature],
      decls: 6,
      vars: 4,
      consts: [["noOrder", ""], ["loading", ""], [4, "ngIf", "ngIfElse"], [1, "cx-my-account-v2-order-history-header"], [1, "cx-my-account-v2-order-history-body"], [4, "ngFor", "ngForOf"], ["class", "cx-order-history-pagination", 4, "ngIf"], [1, "cx-each-order"], [1, "cx-my-account-v2-order-history-code", 3, "click"], [3, "routerLink", "queryParams"], [1, "cx-my-account-v2-order-summary"], [3, "order"], [1, "cx-order-history-pagination"], [3, "viewPageEvent", "pagination"], ["routerLinkActive", "active", 1, "cx-no-order", 3, "routerLink"], [1, "cx-spinner"]],
      template: function MyAccountV2OrderHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, MyAccountV2OrderHistoryComponent_div_0_Template, 9, 13, "div", 2);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, MyAccountV2OrderHistoryComponent_ng_template_2_Template, 2, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, MyAccountV2OrderHistoryComponent_ng_template_4_Template, 2, 0, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          const noOrder_r6 = ɵɵreference(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 2, ctx.orders$))("ngIfElse", noOrder_r6);
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive, PaginationComponent, SpinnerComponent, MyAccountV2OrderConsolidatedInformationComponent, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyAccountV2OrderHistoryComponent, [{
    type: Component,
    args: [{
      selector: "cx-my-account-v2-order-history",
      standalone: false,
      template: `<div
  *ngIf="orders$ | async as orderHistory; else noOrder"
  [attr.aria-label]="'myAccountV2OrderHistory.orderListResults' | cxTranslate"
>
  <!-- HEADER -->
  <div class="cx-my-account-v2-order-history-header">
    <h2>
      {{
        'myAccountV2OrderHistory.heading'
          | cxTranslate: { param: tabTitleParam$ | async }
      }}
    </h2>
  </div>
  <!--BODY-->
  <div class="cx-my-account-v2-order-history-body">
    <ng-container
      *ngIf="orderHistory.pagination.totalResults > 0; else noOrder"
    >
      <ng-container *ngFor="let order of orderHistory.orders">
        <div class="cx-each-order">
          <!--eg: Order # 12345-->
          <div
            class="cx-my-account-v2-order-history-code"
            [attr.aria-label]="
              'myAccountV2OrderHistory.orderCodeLabel' | cxTranslate
            "
            (click)="goToOrderDetail(order)"
          >
            <a
              [routerLink]="
                {
                  cxRoute: 'orderDetails',
                  params: order,
                } | cxUrl
              "
              [queryParams]="getQueryParams(order)"
            >
              {{ 'orderHistory.orderId' | cxTranslate }} {{ order?.code }}</a
            >
          </div>

          <!--eg: 12,October,2022 | Total Price: $12.00-->
          <div class="cx-my-account-v2-order-summary">
            <span
              [attr.aria-label]="
                'myAccountV2OrderHistory.orderPlaced' | cxTranslate
              "
            >
              {{ order.placed | cxDate: 'd, MMMM, yyyy' }} |
            </span>
            <span
              [attr.aria-label]="
                'myAccountV2OrderHistory.totalPriceLabel' | cxTranslate
              "
            >
              <strong>
                {{
                  'myAccountV2OrderHistory.totalPrice'
                    | cxTranslate: { param: order.total?.formattedValue }
                }}
              </strong>
            </span>
          </div>

          <!--eg: Display consolidated order information-->
          <cx-my-account-v2-order-consolidated-information [order]="order">
          </cx-my-account-v2-order-consolidated-information>
        </div>
      </ng-container>

      <!-- PAGINATION -->
      <div
        *ngIf="orderHistory.pagination.totalPages > 1"
        class="cx-order-history-pagination"
        [attr.aria-label]="
          'myAccountV2OrderHistory.orderListPagination' | cxTranslate
        "
      >
        <cx-pagination
          [pagination]="orderHistory.pagination"
          (viewPageEvent)="pageChange($event)"
        ></cx-pagination>
      </div>
    </ng-container>
  </div>
</div>

<!-- NO ORDER CONTAINER -->
<ng-template #noOrder>
  <div *ngIf="isLoaded$ | async; else loading">
    <div [attr.aria-label]="'orderHistory.notFound' | cxTranslate">
      {{ 'orderHistory.noOrders' | cxTranslate }}
    </div>
    <a
      [routerLink]="{ cxRoute: 'home' } | cxUrl"
      routerLinkActive="active"
      class="cx-no-order"
      >{{ 'orderHistory.startShopping' | cxTranslate }}</a
    >
  </div>
</ng-template>

<!-- ORDER HISTORY DATA STILL LOADING -->
<ng-template #loading>
  <div class="cx-spinner">
    <cx-spinner></cx-spinner>
  </div>
</ng-template>
`
    }]
  }], null, null);
})();
var myAccountV2CmsMapping = {
  cmsComponents: {
    AccountOrderHistoryComponent: {
      component: MyAccountV2OrderHistoryComponent
      //guards: inherited from standard config,
    }
  }
};
var moduleComponents$1 = [MyAccountV2OrderHistoryComponent, MyAccountV2OrderConsolidatedInformationComponent, MyAccountV2ConsignmentEntriesComponent];
var OrderHistoryModule = class _OrderHistoryModule {
  static {
    this.ɵfac = function OrderHistoryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderHistoryModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderHistoryModule,
      declarations: [OrderHistoryComponent, MyAccountV2OrderHistoryComponent, MyAccountV2OrderConsolidatedInformationComponent, MyAccountV2ConsignmentEntriesComponent],
      imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, ListNavigationModule, UrlModule, I18nModule, SpinnerModule, MediaModule, BtnLikeLinkModule],
      exports: [OrderHistoryComponent, MyAccountV2OrderHistoryComponent, MyAccountV2OrderConsolidatedInformationComponent, MyAccountV2ConsignmentEntriesComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountOrderHistoryComponent: {
            component: OrderHistoryComponent,
            guards: [AuthGuard]
          }
        }
      }), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_ORDER) ? myAccountV2CmsMapping : {})],
      imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, ListNavigationModule, UrlModule, I18nModule, SpinnerModule, MediaModule, BtnLikeLinkModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderHistoryModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, FormsModule, NgSelectModule, ListNavigationModule, UrlModule, I18nModule, SpinnerModule, MediaModule, BtnLikeLinkModule],
      declarations: [OrderHistoryComponent, ...moduleComponents$1],
      exports: [OrderHistoryComponent, ...moduleComponents$1],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountOrderHistoryComponent: {
            component: OrderHistoryComponent,
            guards: [AuthGuard]
          }
        }
      }), provideDefaultConfigFactory(() => inject(USE_MY_ACCOUNT_V2_ORDER) ? myAccountV2CmsMapping : {})]
    }]
  }], null, null);
})();
var OrderDetailsOrderEntriesContext = class _OrderDetailsOrderEntriesContext {
  constructor(orderHistoryFacade) {
    this.orderHistoryFacade = orderHistoryFacade;
    this.type = OrderEntriesSource.ORDER_DETAILS;
  }
  getEntries() {
    return this.orderHistoryFacade.getOrderDetails().pipe(map((order) => order?.entries ?? []));
  }
  static {
    this.ɵfac = function OrderDetailsOrderEntriesContext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderDetailsOrderEntriesContext)(ɵɵinject(OrderHistoryFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OrderDetailsOrderEntriesContext,
      factory: _OrderDetailsOrderEntriesContext.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailsOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: OrderHistoryFacade
  }], null);
})();
var ReplenishmentOrderCancellationDialogComponent = class _ReplenishmentOrderCancellationDialogComponent {
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.close("Cross click");
    }
  }
  constructor(replenishmentOrderHistoryFacade, globalMessageService, launchDialogService, el) {
    this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
    this.globalMessageService = globalMessageService;
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.subscription = new Subscription();
    this.iconTypes = ICON_TYPE;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
  }
  ngOnInit() {
    this.subscription.add(combineLatest([this.replenishmentOrderHistoryFacade.getReplenishmentOrderDetails().pipe(startWith(null)), this.launchDialogService.data$]).subscribe(([replenishmentOrder, code]) => {
      this.replenishmentOrderCode = code || replenishmentOrder?.replenishmentOrderCode;
    }));
    this.subscription.add(this.replenishmentOrderHistoryFacade.getCancelReplenishmentOrderSuccess().subscribe((value) => this.onSuccess(value)));
  }
  onSuccess(value) {
    if (value) {
      this.launchDialogService.closeDialog("Successffully cancelled replenishment");
      this.globalMessageService.add({
        key: "orderDetails.cancelReplenishment.cancelSuccess",
        params: {
          replenishmentOrderCode: this.replenishmentOrderCode
        }
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
    this.replenishmentOrderHistoryFacade.clearCancelReplenishmentOrderProcessState();
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  cancelReplenishment() {
    this.replenishmentOrderHistoryFacade.cancelReplenishmentOrder(this.replenishmentOrderCode);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  static {
    this.ɵfac = function ReplenishmentOrderCancellationDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrderCancellationDialogComponent)(ɵɵdirectiveInject(ReplenishmentOrderHistoryFacade), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ElementRef));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ReplenishmentOrderCancellationDialogComponent,
      selectors: [["cx-replenishment-order-cancellation-dialog"]],
      hostBindings: function ReplenishmentOrderCancellationDialogComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function ReplenishmentOrderCancellationDialogComponent_click_HostBindingHandler($event) {
            return ctx.handleClick($event);
          });
        }
      },
      standalone: false,
      decls: 24,
      vars: 20,
      consts: [["role", "dialog", "aria-labelledby", "dialogTitle", 1, "modal-dialog", "modal-dialog-centered", "modal-sm", 3, "esc", "cxFocus"], [1, "modal-content"], [1, "modal-header"], ["id", "dialogTitle"], ["type", "button", 1, "close", 3, "click", "title"], ["aria-hidden", "true"], [3, "type"], [1, "cx-cancel-replenishment-dialog-description"], [1, "modal-body"], [1, "cx-cancel-replenishment-btns", "row"], [1, "col-md-6"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "click"]],
      template: function ReplenishmentOrderCancellationDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0);
          ɵɵlistener("esc", function ReplenishmentOrderCancellationDialogComponent_Template_div_esc_0_listener() {
            return ctx.close("Escape clicked");
          });
          ɵɵelementStart(1, "div", 1)(2, "div", 2)(3, "h3", 3);
          ɵɵtext(4);
          ɵɵpipe(5, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(6, "button", 4);
          ɵɵpipe(7, "cxTranslate");
          ɵɵpipe(8, "cxTranslate");
          ɵɵlistener("click", function ReplenishmentOrderCancellationDialogComponent_Template_button_click_6_listener() {
            return ctx.close("Cross click");
          });
          ɵɵelementStart(9, "span", 5);
          ɵɵelement(10, "cx-icon", 6);
          ɵɵelementEnd()()();
          ɵɵelementStart(11, "div", 7);
          ɵɵtext(12);
          ɵɵpipe(13, "cxTranslate");
          ɵɵelementEnd();
          ɵɵelementStart(14, "div", 8)(15, "div", 9)(16, "div", 10)(17, "button", 11);
          ɵɵlistener("click", function ReplenishmentOrderCancellationDialogComponent_Template_button_click_17_listener() {
            return ctx.close("Close Replenishment Dialog");
          });
          ɵɵtext(18);
          ɵɵpipe(19, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵelementStart(20, "div", 10)(21, "button", 12);
          ɵɵlistener("click", function ReplenishmentOrderCancellationDialogComponent_Template_button_click_21_listener() {
            return ctx.cancelReplenishment();
          });
          ɵɵtext(22);
          ɵɵpipe(23, "cxTranslate");
          ɵɵelementEnd()()()()()();
        }
        if (rf & 2) {
          ɵɵproperty("cxFocus", ctx.focusConfig);
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 8, "orderDetails.cancelReplenishment.title"), " ");
          ɵɵadvance(2);
          ɵɵpropertyInterpolate("title", ɵɵpipeBind1(7, 10, "common.close"));
          ɵɵattribute("aria-label", ɵɵpipeBind1(8, 12, "common.close"));
          ɵɵadvance(4);
          ɵɵproperty("type", ctx.iconTypes.CLOSE);
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(13, 14, "orderDetails.cancelReplenishment.description"), " ");
          ɵɵadvance(6);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(19, 16, "orderDetails.cancelReplenishment.reject"), " ");
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(23, 18, "orderDetails.cancelReplenishment.accept"), " ");
        }
      },
      dependencies: [IconComponent, FocusDirective, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderCancellationDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-replenishment-order-cancellation-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div
  [cxFocus]="focusConfig"
  (esc)="close('Escape clicked')"
  class="modal-dialog modal-dialog-centered modal-sm"
  role="dialog"
  aria-labelledby="dialogTitle"
>
  <div class="modal-content">
    <div class="modal-header">
      <h3 id="dialogTitle">
        {{ 'orderDetails.cancelReplenishment.title' | cxTranslate }}
      </h3>
      <button
        type="button"
        class="close"
        title="{{ 'common.close' | cxTranslate }}"
        [attr.aria-label]="'common.close' | cxTranslate"
        (click)="close('Cross click')"
      >
        <span aria-hidden="true">
          <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
        </span>
      </button>
    </div>
    <div class="cx-cancel-replenishment-dialog-description">
      {{ 'orderDetails.cancelReplenishment.description' | cxTranslate }}
    </div>

    <div class="modal-body">
      <div class="cx-cancel-replenishment-btns row">
        <div class="col-md-6">
          <button
            class="btn btn-block btn-secondary"
            (click)="close('Close Replenishment Dialog')"
          >
            {{ 'orderDetails.cancelReplenishment.reject' | cxTranslate }}
          </button>
        </div>
        <div class="col-md-6">
          <button
            class="btn btn-block btn-primary"
            (click)="cancelReplenishment()"
          >
            {{ 'orderDetails.cancelReplenishment.accept' | cxTranslate }}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`
    }]
  }], () => [{
    type: ReplenishmentOrderHistoryFacade
  }, {
    type: GlobalMessageService
  }, {
    type: LaunchDialogService
  }, {
    type: ElementRef
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ReplenishmentOrderCancellationDialogModule = class _ReplenishmentOrderCancellationDialogModule {
  static {
    this.ɵfac = function ReplenishmentOrderCancellationDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrderCancellationDialogModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ReplenishmentOrderCancellationDialogModule,
      declarations: [ReplenishmentOrderCancellationDialogComponent],
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule],
      exports: [ReplenishmentOrderCancellationDialogComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderCancellationDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, KeyboardFocusModule],
      declarations: [ReplenishmentOrderCancellationDialogComponent],
      exports: [ReplenishmentOrderCancellationDialogComponent]
    }]
  }], null, null);
})();
var defaultReplenishmentOrderCancellationLayoutConfig = {
  launch: {
    REPLENISHMENT_ORDER: {
      inline: true,
      component: ReplenishmentOrderCancellationDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var ReplenishmentOrderCancellationComponent = class _ReplenishmentOrderCancellationComponent {
  constructor(replenishmentOrderHistoryFacade, vcr, launchDialogService) {
    this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.replenishmentOrder$ = this.replenishmentOrderHistoryFacade.getReplenishmentOrderDetails();
  }
  openDialog() {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.REPLENISHMENT_ORDER, this.element, this.vcr);
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.replenishmentOrderHistoryFacade.clearReplenishmentOrderDetails();
  }
  static {
    this.ɵfac = function ReplenishmentOrderCancellationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrderCancellationComponent)(ɵɵdirectiveInject(ReplenishmentOrderHistoryFacade), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(LaunchDialogService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ReplenishmentOrderCancellationComponent,
      selectors: [["cx-replenishment-order-cancellation"]],
      viewQuery: function ReplenishmentOrderCancellationComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c20, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      standalone: false,
      decls: 8,
      vars: 10,
      consts: [["element", ""], [1, "cx-cancel-replenishment-btns", "row"], [1, "col-xs-12", "col-md-5", "col-lg-4"], ["cxBtnLikeLink", "", 1, "btn", "btn-block", "btn-secondary", 3, "routerLink"], ["class", "col-xs-12 col-md-5 col-lg-4", 4, "ngIf"], [1, "btn", "btn-block", "btn-secondary", 3, "click"]],
      template: function ReplenishmentOrderCancellationComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "a", 3);
          ɵɵpipe(3, "cxUrl");
          ɵɵtext(4);
          ɵɵpipe(5, "cxTranslate");
          ɵɵelementEnd()();
          ɵɵtemplate(6, ReplenishmentOrderCancellationComponent_div_6_Template, 5, 3, "div", 4);
          ɵɵpipe(7, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_2_0;
          ɵɵadvance(2);
          ɵɵproperty("routerLink", ɵɵpipeBind1(3, 3, ɵɵpureFunction0(9, _c34)));
          ɵɵadvance(2);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(5, 5, "common.back"), " ");
          ɵɵadvance(2);
          ɵɵproperty("ngIf", (tmp_2_0 = ɵɵpipeBind1(7, 7, ctx.replenishmentOrder$)) == null ? null : tmp_2_0.active);
        }
      },
      dependencies: [NgIf, RouterLink, BtnLikeLinkDirective, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderCancellationComponent, [{
    type: Component,
    args: [{
      selector: "cx-replenishment-order-cancellation",
      standalone: false,
      template: `<div class="cx-cancel-replenishment-btns row">
  <div class="col-xs-12 col-md-5 col-lg-4">
    <a
      class="btn btn-block btn-secondary"
      [routerLink]="
        {
          cxRoute: 'replenishmentOrders',
        } | cxUrl
      "
      cxBtnLikeLink
    >
      {{ 'common.back' | cxTranslate }}
    </a>
  </div>
  <div
    *ngIf="(replenishmentOrder$ | async)?.active"
    class="col-xs-12 col-md-5 col-lg-4"
  >
    <button #element class="btn btn-block btn-secondary" (click)="openDialog()">
      {{ 'orderDetails.cancelReplenishment.title' | cxTranslate }}
    </button>
  </div>
</div>
`
    }]
  }], () => [{
    type: ReplenishmentOrderHistoryFacade
  }, {
    type: ViewContainerRef
  }, {
    type: LaunchDialogService
  }], {
    element: [{
      type: ViewChild,
      args: ["element"]
    }]
  });
})();
var ReplenishmentOrderDetailsService = class _ReplenishmentOrderDetailsService {
  constructor(routingService, replenishmentOrderHistoryFacade) {
    this.routingService = routingService;
    this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
    this.replenishmentOrderCode$ = this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params.replenishmentOrderCode), distinctUntilChanged());
    this.replenishmentOrderLoad$ = this.replenishmentOrderCode$.pipe(tap((replenishmentOrderCode) => {
      if (Boolean(replenishmentOrderCode)) {
        this.replenishmentOrderHistoryFacade.loadReplenishmentOrderDetails(replenishmentOrderCode);
      } else {
        this.replenishmentOrderHistoryFacade.clearReplenishmentOrderDetails();
      }
    }), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  getOrderDetails() {
    return this.replenishmentOrderLoad$.pipe(switchMap((_) => this.replenishmentOrderHistoryFacade.getReplenishmentOrderDetails()));
  }
  static {
    this.ɵfac = function ReplenishmentOrderDetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrderDetailsService)(ɵɵinject(RoutingService), ɵɵinject(ReplenishmentOrderHistoryFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ReplenishmentOrderDetailsService,
      factory: _ReplenishmentOrderDetailsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderDetailsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: ReplenishmentOrderHistoryFacade
  }], null);
})();
var moduleComponents = [ReplenishmentOrderCancellationComponent];
var ReplenishmentOrderDetailsModule = class _ReplenishmentOrderDetailsModule {
  static {
    this.ɵfac = function ReplenishmentOrderDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrderDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ReplenishmentOrderDetailsModule,
      declarations: [ReplenishmentOrderCancellationComponent],
      imports: [CardModule, CommonModule, I18nModule, PromotionsModule, UrlModule, ReplenishmentOrderCancellationDialogModule, SpinnerModule, ListNavigationModule, RouterModule, BtnLikeLinkModule],
      exports: [ReplenishmentOrderCancellationComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultReplenishmentOrderCancellationLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          ReplenishmentDetailItemsComponent: {
            component: OrderDetailItemsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: ReplenishmentOrderDetailsService
            }]
          },
          ReplenishmentDetailTotalsComponent: {
            component: OrderDetailTotalsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: ReplenishmentOrderDetailsService
            }]
          },
          ReplenishmentDetailShippingComponent: {
            component: OrderOverviewComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: ReplenishmentOrderDetailsService
            }]
          },
          ReplenishmentDetailActionsComponent: {
            component: ReplenishmentOrderCancellationComponent
          },
          ReplenishmentDetailOrderHistoryComponent: {
            component: OrderHistoryComponent
          }
        }
      })],
      imports: [CardModule, CommonModule, I18nModule, PromotionsModule, UrlModule, ReplenishmentOrderCancellationDialogModule, SpinnerModule, ListNavigationModule, RouterModule, BtnLikeLinkModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CardModule, CommonModule, I18nModule, PromotionsModule, UrlModule, ReplenishmentOrderCancellationDialogModule, SpinnerModule, ListNavigationModule, RouterModule, BtnLikeLinkModule],
      providers: [provideDefaultConfig(defaultReplenishmentOrderCancellationLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          ReplenishmentDetailItemsComponent: {
            component: OrderDetailItemsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: ReplenishmentOrderDetailsService
            }]
          },
          ReplenishmentDetailTotalsComponent: {
            component: OrderDetailTotalsComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: ReplenishmentOrderDetailsService
            }]
          },
          ReplenishmentDetailShippingComponent: {
            component: OrderOverviewComponent,
            providers: [{
              provide: OrderDetailsService,
              useExisting: ReplenishmentOrderDetailsService
            }]
          },
          ReplenishmentDetailActionsComponent: {
            component: ReplenishmentOrderCancellationComponent
          },
          ReplenishmentDetailOrderHistoryComponent: {
            component: OrderHistoryComponent
          }
        }
      })],
      declarations: [...moduleComponents],
      exports: [...moduleComponents]
    }]
  }], null, null);
})();
var ReplenishmentOrderHistoryComponent = class _ReplenishmentOrderHistoryComponent {
  constructor(routing, replenishmentOrderHistoryFacade, translation, vcr, launchDialogService) {
    this.routing = routing;
    this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
    this.translation = translation;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.PAGE_SIZE = 5;
    this.replenishmentOrders$ = this.replenishmentOrderHistoryFacade.getReplenishmentOrderHistoryList(this.PAGE_SIZE).pipe(tap((replenishmentOrders) => {
      if (replenishmentOrders?.pagination?.sort) {
        this.sortType = replenishmentOrders.pagination.sort;
      }
    }));
    this.isLoaded$ = this.replenishmentOrderHistoryFacade.getReplenishmentOrderHistoryListSuccess();
  }
  changeSortCode(sortCode) {
    const event = {
      sortCode,
      currentPage: 0
    };
    this.sortType = sortCode;
    this.fetchReplenishmentOrders(event);
  }
  pageChange(page) {
    const event = {
      sortCode: this.sortType,
      currentPage: page
    };
    this.fetchReplenishmentOrders(event);
  }
  goToOrderDetail(order) {
    this.routing.go({
      cxRoute: "replenishmentDetails",
      params: order
    });
  }
  getSortLabels() {
    return combineLatest([this.translation.translate("sorting.date"), this.translation.translate("sorting.replenishmentNumber"), this.translation.translate("sorting.nextOrderDate")]).pipe(map(([textByDate, textByOrderNumber, textbyNextOrderDate]) => {
      return {
        byDate: textByDate,
        byReplenishmentNumber: textByOrderNumber,
        byNextOrderDate: textbyNextOrderDate
      };
    }));
  }
  openDialog(event, replenishmentOrderCode) {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.REPLENISHMENT_ORDER, this.element, this.vcr, replenishmentOrderCode);
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
    event.stopPropagation();
  }
  fetchReplenishmentOrders(event) {
    this.replenishmentOrderHistoryFacade.loadReplenishmentOrderList(this.PAGE_SIZE, event.currentPage, event.sortCode);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.replenishmentOrderHistoryFacade.clearReplenishmentOrderList();
  }
  static {
    this.ɵfac = function ReplenishmentOrderHistoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrderHistoryComponent)(ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(ReplenishmentOrderHistoryFacade), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(LaunchDialogService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ReplenishmentOrderHistoryComponent,
      selectors: [["cx-replenishment-order-history"]],
      viewQuery: function ReplenishmentOrderHistoryComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c20, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["noOrder", ""], ["element", ""], [4, "ngIf"], [1, "container"], [1, "cx-replenishment-order-history-header"], [1, "cx-replenishment-order-history-body"], [4, "ngIf", "ngIfElse"], [1, "cx-replenishment-order-history-sort", "top", "row"], [1, "cx-replenishment-order-history-form-group", "form-group", "col-sm-12", "col-md-4", "col-lg-4"], ["ariaControls", "replenishment-order-history-table", 3, "sortListEvent", "sortOptions", "sortLabels", "selectedOption", "placeholder", "ariaLabel"], ["class", "cx-replenishment-order-history-pagination", 4, "ngIf"], ["id", "replenishment-order-history-table", "role", "table", 1, "table", "cx-replenishment-order-history-table"], [1, "cx-visually-hidden"], ["class", "cx-replenishment-order-history-thead-mobile", 4, "cxFeature"], ["role", "row", 3, "click", 4, "ngFor", "ngForOf"], [1, "cx-replenishment-order-history-sort", "bottom", "row"], [1, "cx-replenishment-order-history-pagination"], ["paginationID", "pagination-bottom", 3, "pagination", "viewPageEvent", 4, "ngIf"], ["paginationID", "pagination-top", 3, "viewPageEvent", "pagination"], [1, "cx-replenishment-order-history-thead-mobile"], ["scope", "col"], [1, "cx-replenishment-order-history-ellipses"], ["scope", "col", 1, "cx-replenishment-order-history-total"], ["role", "columnheader", "scope", "col", "aria-sort", "none"], ["role", "columnheader", "scope", "col", "aria-sort", "none", 1, "cx-replenishment-order-history-total"], ["role", "row", 3, "click"], ["role", "cell", 1, "cx-replenishment-order-history-code"], [1, "d-md-none", "cx-replenishment-order-history-label"], [1, "cx-replenishment-order-history-value", 3, "routerLink"], ["role", "cell"], [1, "cx-replenishment-order-history-value", "cx-purchase-order-number", 3, "routerLink"], ["role", "cell", 1, "cx-replenishment-order-history-frequency"], [1, "cx-replenishment-order-history-value", "cx-next-order-date", 3, "routerLink"], [1, "cx-replenishment-order-history-total"], ["role", "cell", 1, "cx-replenishment-order-history-cancel"], ["class", "cx-order-cancel btn btn-secondary", 3, "click", 4, "ngIf"], [1, "cx-order-cancel", "btn", "btn-secondary", 3, "click"], ["paginationID", "pagination-bottom", 3, "viewPageEvent", "pagination"], ["class", "cx-replenishment-order-history-no-order row", 4, "ngIf"], [1, "cx-replenishment-order-history-no-order", "row"], [1, "col-sm-12", "col-md-6", "col-lg-4"], ["routerLinkActive", "active", "cxBtnLikeLink", "", 1, "btn", "btn-primary", "btn-block", 3, "routerLink"]],
      template: function ReplenishmentOrderHistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ReplenishmentOrderHistoryComponent_ng_container_0_Template, 10, 5, "ng-container", 2);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.replenishmentOrders$));
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, RouterLinkActive, SortingComponent, PaginationComponent, BtnLikeLinkDirective, FeatureDirective, AsyncPipe, SlicePipe, UrlPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderHistoryComponent, [{
    type: Component,
    args: [{
      selector: "cx-replenishment-order-history",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="replenishmentOrders$ | async as replenishmentOrders">
  <div class="container">
    <!-- HEADER -->
    <div class="cx-replenishment-order-history-header">
      <h3>
        {{ 'orderHistory.replenishmentOrderHistory' | cxTranslate }}
      </h3>
    </div>

    <!-- BODY -->
    <div class="cx-replenishment-order-history-body">
      <ng-container
        *ngIf="replenishmentOrders.pagination.totalResults > 0; else noOrder"
      >
        <!-- Select Form and Pagination Top -->
        <div class="cx-replenishment-order-history-sort top row">
          <label
            class="cx-replenishment-order-history-form-group form-group col-sm-12 col-md-4 col-lg-4"
          >
            <span>{{ 'orderHistory.sortBy' | cxTranslate }}</span>
            <cx-sorting
              [sortOptions]="replenishmentOrders.sorts"
              [sortLabels]="getSortLabels() | async"
              (sortListEvent)="changeSortCode($event)"
              [selectedOption]="replenishmentOrders.pagination.sort"
              placeholder="{{ 'orderHistory.sortBy' | cxTranslate }}"
              [ariaLabel]="'orderHistory.sortOrders' | cxTranslate"
              ariaControls="replenishment-order-history-table"
            ></cx-sorting>
          </label>
          <div
            class="cx-replenishment-order-history-pagination"
            *ngIf="replenishmentOrders.pagination.totalPages > 1"
          >
            <cx-pagination
              [pagination]="replenishmentOrders.pagination"
              (viewPageEvent)="pageChange($event)"
              paginationID="pagination-top"
            ></cx-pagination>
          </div>
        </div>
        <!-- TABLE -->
        <table
          id="replenishment-order-history-table"
          class="table cx-replenishment-order-history-table"
          role="table"
        >
          <caption class="cx-visually-hidden">
            {{
              'orderHistory.orderHistory' | cxTranslate
            }}
          </caption>
          <thead
            *cxFeature="'!a11yTableHeaderReadout'"
            class="cx-replenishment-order-history-thead-mobile"
          >
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.replenishmentOrderId' | cxTranslate }}
              </span>
            </th>
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.purchaseOrderNumber' | cxTranslate }}
              </span>
            </th>
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.startOn' | cxTranslate }}
              </span>
            </th>
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.frequency' | cxTranslate }}
              </span>
            </th>
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.nextOrderDate' | cxTranslate }}
              </span>
            </th>
            <th scope="col" class="cx-replenishment-order-history-total">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.total' | cxTranslate }}
              </span>
            </th>
            <th scope="col">
              <span class="cx-replenishment-order-history-ellipses">
                {{ 'orderHistory.actions' | cxTranslate }}
              </span>
            </th>
          </thead>
          <thead
            *cxFeature="'a11yTableHeaderReadout'"
            class="cx-replenishment-order-history-thead-mobile"
          >
            <tr>
              <th role="columnheader" scope="col" aria-sort="none">
                <span class="cx-replenishment-order-history-ellipses">
                  {{ 'orderHistory.replenishmentOrderId' | cxTranslate }}
                </span>
              </th>
              <th role="columnheader" scope="col" aria-sort="none">
                <span class="cx-replenishment-order-history-ellipses">
                  {{ 'orderHistory.purchaseOrderNumber' | cxTranslate }}
                </span>
              </th>
              <th role="columnheader" scope="col" aria-sort="none">
                <span class="cx-replenishment-order-history-ellipses">
                  {{ 'orderHistory.startOn' | cxTranslate }}
                </span>
              </th>
              <th role="columnheader" scope="col" aria-sort="none">
                <span class="cx-replenishment-order-history-ellipses">
                  {{ 'orderHistory.frequency' | cxTranslate }}
                </span>
              </th>
              <th role="columnheader" scope="col" aria-sort="none">
                <span class="cx-replenishment-order-history-ellipses">
                  {{ 'orderHistory.nextOrderDate' | cxTranslate }}
                </span>
              </th>
              <th
                role="columnheader"
                scope="col"
                aria-sort="none"
                class="cx-replenishment-order-history-total"
              >
                <span class="cx-replenishment-order-history-ellipses">
                  {{ 'orderHistory.total' | cxTranslate }}
                </span>
              </th>
              <th role="columnheader" scope="col" aria-sort="none">
                <span class="cx-replenishment-order-history-ellipses">
                  {{ 'orderHistory.actions' | cxTranslate }}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              role="row"
              *ngFor="
                let order of replenishmentOrders.replenishmentOrders;
                let i = index
              "
              (click)="goToOrderDetail(order)"
              [attr.aria-rowindex]="i + 1"
            >
              <td class="cx-replenishment-order-history-code" role="cell">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.replenishmentOrderId' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order,
                    } | cxUrl
                  "
                  class="cx-replenishment-order-history-value"
                >
                  {{ order?.replenishmentOrderCode }}</a
                >
              </td>
              <td role="cell">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.purchaseOrderNumber' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order,
                    } | cxUrl
                  "
                  class="cx-replenishment-order-history-value cx-purchase-order-number"
                >
                  {{
                    order?.purchaseOrderNumber?.length > 0
                      ? order?.purchaseOrderNumber
                      : ('orderHistory.emptyPurchaseOrderId' | cxTranslate)
                  }}
                </a>
              </td>
              <td role="cell">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.startOn' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order,
                    } | cxUrl
                  "
                  class="cx-replenishment-order-history-value"
                >
                  {{ order?.firstDate | cxDate: 'M/d/yyyy' }}</a
                >
              </td>
              <td class="cx-replenishment-order-history-frequency" role="cell">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.frequency' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order,
                    } | cxUrl
                  "
                  class="cx-replenishment-order-history-value"
                >
                  {{ order?.trigger.displayTimeTable | slice: 0 : -12 }}
                </a>
              </td>
              <td role="cell">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.nextOrderDate' | cxTranslate }}
                </div>

                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order,
                    } | cxUrl
                  "
                  class="cx-replenishment-order-history-value cx-next-order-date"
                >
                  {{
                    order?.active
                      ? (order?.trigger.activationTime | cxDate: 'M/d/yyyy')
                      : ('orderHistory.cancelled' | cxTranslate)
                  }}
                </a>
              </td>
              <td class="cx-replenishment-order-history-total">
                <div class="d-md-none cx-replenishment-order-history-label">
                  {{ 'orderHistory.total' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'replenishmentDetails',
                      params: order,
                    } | cxUrl
                  "
                  class="cx-replenishment-order-history-value"
                >
                  {{ order?.totalPriceWithTax.formattedValue }}</a
                >
              </td>
              <td class="cx-replenishment-order-history-cancel" role="cell">
                <div
                  class="d-md-none cx-replenishment-order-history-label"
                ></div>
                <button
                  (click)="openDialog($event, order?.replenishmentOrderCode)"
                  class="cx-order-cancel btn btn-secondary"
                  #element
                  *ngIf="order?.active"
                >
                  {{ 'orderHistory.cancel' | cxTranslate }}
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Select Form and Pagination Bottom -->
        <div class="cx-replenishment-order-history-sort bottom row">
          <div class="cx-replenishment-order-history-pagination">
            <cx-pagination
              [pagination]="replenishmentOrders.pagination"
              (viewPageEvent)="pageChange($event)"
              *ngIf="replenishmentOrders.pagination.totalPages > 1"
              paginationID="pagination-bottom"
            ></cx-pagination>
          </div>
        </div>
      </ng-container>

      <!-- NO ORDER CONTAINER -->
      <ng-template #noOrder>
        <div
          class="cx-replenishment-order-history-no-order row"
          *ngIf="isLoaded$ | async"
        >
          <div class="col-sm-12 col-md-6 col-lg-4">
            <div>{{ 'orderHistory.noReplenishmentOrders' | cxTranslate }}</div>
            <a
              [routerLink]="{ cxRoute: 'home' } | cxUrl"
              routerLinkActive="active"
              class="btn btn-primary btn-block"
              cxBtnLikeLink
              >{{ 'orderHistory.startShopping' | cxTranslate }}</a
            >
          </div>
        </div>
      </ng-template>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: ReplenishmentOrderHistoryFacade
  }, {
    type: TranslationService
  }, {
    type: ViewContainerRef
  }, {
    type: LaunchDialogService
  }], {
    element: [{
      type: ViewChild,
      args: ["element"]
    }]
  });
})();
var ReplenishmentOrderHistoryModule = class _ReplenishmentOrderHistoryModule {
  static {
    this.ɵfac = function ReplenishmentOrderHistoryModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReplenishmentOrderHistoryModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ReplenishmentOrderHistoryModule,
      declarations: [ReplenishmentOrderHistoryComponent],
      imports: [CommonModule, RouterModule, ListNavigationModule, UrlModule, I18nModule, BtnLikeLinkModule, FeaturesConfigModule],
      exports: [ReplenishmentOrderHistoryComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig(defaultReplenishmentOrderCancellationLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          AccountReplenishmentHistoryComponent: {
            component: ReplenishmentOrderHistoryComponent,
            guards: [AuthGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, ListNavigationModule, UrlModule, I18nModule, BtnLikeLinkModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReplenishmentOrderHistoryModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, ListNavigationModule, UrlModule, I18nModule, BtnLikeLinkModule, FeaturesConfigModule],
      providers: [provideDefaultConfig(defaultReplenishmentOrderCancellationLayoutConfig), provideDefaultConfig({
        cmsComponents: {
          AccountReplenishmentHistoryComponent: {
            component: ReplenishmentOrderHistoryComponent,
            guards: [AuthGuard]
          }
        }
      })],
      declarations: [ReplenishmentOrderHistoryComponent],
      exports: [ReplenishmentOrderHistoryComponent]
    }]
  }], null, null);
})();
var ReturnRequestService = class _ReturnRequestService {
  constructor(routingService, returnRequestService, globalMessageService) {
    this.routingService = routingService;
    this.returnRequestService = returnRequestService;
    this.globalMessageService = globalMessageService;
  }
  get isCancelling$() {
    return this.returnRequestService.getCancelReturnRequestLoading();
  }
  get isCancelSuccess$() {
    return this.returnRequestService.getCancelReturnRequestSuccess();
  }
  getReturnRequest() {
    return combineLatest([this.routingService.getRouterState(), this.returnRequestService.getOrderReturnRequest(), this.returnRequestService.getReturnRequestLoading()]).pipe(map(([routingState, returnRequest, isLoading]) => [routingState.state.params["returnCode"], returnRequest, isLoading]), filter(([returnCode]) => Boolean(returnCode)), tap(([returnCode, returnRequest, isLoading]) => {
      if ((returnRequest === void 0 || returnRequest.rma !== returnCode) && !isLoading) {
        this.returnRequestService.loadOrderReturnRequestDetail(returnCode);
      }
    }), map(([_, returnRequest]) => returnRequest), filter((returnRequest) => Boolean(returnRequest)), distinctUntilChanged());
  }
  clearReturnRequest() {
    this.returnRequestService.clearOrderReturnRequestDetail();
  }
  cancelReturnRequest(returnRequestCode) {
    this.returnRequestService.cancelOrderReturnRequest(returnRequestCode, {
      status: "CANCELLING"
    });
  }
  cancelSuccess(rma) {
    this.returnRequestService.resetCancelReturnRequestProcessState();
    this.globalMessageService.add({
      key: "returnRequest.cancelSuccess",
      params: {
        rma
      }
    }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    this.routingService.go({
      cxRoute: "orders"
    });
  }
  backToList() {
    this.routingService.go({
      cxRoute: "orders"
    }, {
      state: {
        activeTab: 1
      }
    });
  }
  static {
    this.ɵfac = function ReturnRequestService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReturnRequestService)(ɵɵinject(RoutingService), ɵɵinject(OrderReturnRequestFacade), ɵɵinject(GlobalMessageService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ReturnRequestService,
      factory: _ReturnRequestService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: OrderReturnRequestFacade
  }, {
    type: GlobalMessageService
  }], null);
})();
var ReturnRequestItemsComponent = class _ReturnRequestItemsComponent {
  constructor(returnRequestService) {
    this.returnRequestService = returnRequestService;
    this.returnRequest$ = this.returnRequestService.getReturnRequest();
  }
  static {
    this.ɵfac = function ReturnRequestItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReturnRequestItemsComponent)(ɵɵdirectiveInject(ReturnRequestService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ReturnRequestItemsComponent,
      selectors: [["cx-return-request-items"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["class", "cx-return-request-items", 4, "ngIf"], [1, "cx-return-request-items"], [1, "cx-visually-hidden"], ["role", "columnheader", 1, "cx-item-list-desc"], ["role", "columnheader", 1, "cx-item-list-price"], ["role", "columnheader", 1, "cx-item-list-qty"], ["role", "columnheader", 1, "cx-item-list-total"], [1, "cx-item-list-items"], ["class", "cx-item-list-row cx-return-request-item-row", 4, "ngFor", "ngForOf"], [1, "cx-item-list-row", "cx-return-request-item-row"], ["role", "cell"], [1, "cx-table-item-container"], ["format", "thumbnail", 3, "container"], [1, "cx-info"], ["class", "cx-name", 4, "ngIf"], ["class", "cx-code", 4, "ngIf"], ["class", "cx-property", 4, "ngFor", "ngForOf"], ["role", "cell", "class", "cx-price", 4, "ngIf"], ["role", "cell", 1, "cx-quantity"], [1, "cx-mobile-header"], [1, "cx-value"], ["role", "cell", 1, "cx-total"], [1, "cx-name"], [1, "cx-code"], [1, "cx-property"], ["class", "cx-label", 4, "ngIf"], ["class", "cx-value", 4, "ngIf"], [1, "cx-label"], ["role", "cell", 1, "cx-price"]],
      template: function ReturnRequestItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ReturnRequestItemsComponent_table_0_Template, 20, 16, "table", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.returnRequest$));
        }
      },
      dependencies: [NgForOf, NgIf, MediaComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestItemsComponent, [{
    type: Component,
    args: [{
      selector: "cx-return-request-items",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<table
  class="cx-return-request-items"
  *ngIf="returnRequest$ | async as returnRequest"
>
  <caption class="cx-visually-hidden">
    {{
      'returnRequest.caption' | cxTranslate
    }}
  </caption>
  <thead>
    <tr>
      <th role="columnheader" class="cx-item-list-desc">
        {{ 'returnRequest.item' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-price">
        {{ 'returnRequest.itemPrice' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-qty">
        {{ 'returnRequest.returnQty' | cxTranslate }}
      </th>
      <th role="columnheader" class="cx-item-list-total">
        {{ 'returnRequest.total' | cxTranslate }}
      </th>
    </tr>
  </thead>

  <tbody class="cx-item-list-items">
    <!-- TODO: This should be a separate component-->
    <tr
      class="cx-item-list-row cx-return-request-item-row"
      *ngFor="let returnEntry of returnRequest.returnEntries; let i = index"
    >
      <td role="cell">
        <!-- Item Image -->
        <div class="cx-table-item-container">
          <cx-media
            [container]="returnEntry.orderEntry?.product.images?.PRIMARY"
            format="thumbnail"
          ></cx-media>
          <!-- Item Description -->
          <div class="cx-info">
            <div *ngIf="returnEntry.orderEntry?.product.name" class="cx-name">
              {{ returnEntry.orderEntry?.product.name }}
            </div>
            <div *ngIf="returnEntry.orderEntry?.product.code" class="cx-code">
              {{ 'cartItems.id' | cxTranslate }}
              {{ returnEntry.orderEntry?.product.code }}
            </div>
            <!-- Variants -->
            <div
              *ngFor="
                let variant of (returnEntry.orderEntry?.product.baseOptions)[0]
                  ?.selected?.variantOptionQualifiers
              "
              class="cx-property"
            >
              <div class="cx-label" *ngIf="variant.name">
                {{ variant.name }}:
              </div>
              <div class="cx-value" *ngIf="variant.value">
                {{ variant.value }}
              </div>
            </div>
          </div>
        </div>
      </td>
      <!-- Item Price -->
      <td
        role="cell"
        class="cx-price"
        *ngIf="returnEntry.orderEntry?.basePrice"
      >
        <div class="cx-mobile-header">
          {{ 'returnRequest.itemPrice' | cxTranslate }}
        </div>
        <div class="cx-value">
          {{ returnEntry.orderEntry?.basePrice?.formattedValue }}
        </div>
      </td>
      <!-- return Quantity -->
      <td role="cell" class="cx-quantity">
        <div class="cx-mobile-header">
          {{ 'returnRequest.returnQty' | cxTranslate }}
        </div>
        <div class="cx-value">
          {{ returnEntry.expectedQuantity }}
        </div>
      </td>
      <!-- Total Price -->
      <td role="cell" class="cx-total">
        <div class="cx-mobile-header">
          {{ 'returnRequest.total' | cxTranslate }}
        </div>
        <div class="cx-value">
          {{ returnEntry.refundAmount?.formattedValue }}
        </div>
      </td>
    </tr>
  </tbody>
</table>
`
    }]
  }], () => [{
    type: ReturnRequestService
  }], null);
})();
var ReturnRequestOverviewComponent = class _ReturnRequestOverviewComponent {
  constructor(returnRequestService) {
    this.returnRequestService = returnRequestService;
    this.returnRequest$ = this.returnRequestService.getReturnRequest().pipe(tap((returnRequest) => this.rma = returnRequest.rma ?? ""));
    this.isCancelling$ = this.returnRequestService.isCancelling$;
  }
  ngOnInit() {
    this.subscription = this.returnRequestService.isCancelSuccess$.subscribe((success) => {
      if (success) {
        this.returnRequestService.cancelSuccess(this.rma);
      }
    });
  }
  cancelReturn(returnRequestCode) {
    this.returnRequestService.cancelReturnRequest(returnRequestCode);
  }
  back() {
    this.returnRequestService.backToList();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static {
    this.ɵfac = function ReturnRequestOverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReturnRequestOverviewComponent)(ɵɵdirectiveInject(ReturnRequestService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ReturnRequestOverviewComponent,
      selectors: [["cx-return-request-overview"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "cx-nav", "row"], [1, "col-xs-12", "col-md-4", "col-lg-3"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], ["class", "btn btn-block btn-primary", 3, "disabled", "click", 4, "ngIf"], [1, "cx-header", "row"], [1, "cx-detail", "col-sm-12", "col-md-4"], [1, "cx-detail-label"], [1, "cx-detail-value"], [1, "btn", "btn-block", "btn-primary", 3, "click", "disabled"]],
      template: function ReturnRequestOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ReturnRequestOverviewComponent_ng_container_0_Template, 28, 18, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.returnRequest$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestOverviewComponent, [{
    type: Component,
    args: [{
      selector: "cx-return-request-overview",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="returnRequest$ | async as returnRequest">
  <div class="cx-nav row">
    <div class="col-xs-12 col-md-4 col-lg-3">
      <button (click)="back()" class="btn btn-block btn-secondary">
        {{ 'common.back' | cxTranslate }}
      </button>
    </div>

    <div class="col-xs-12 col-md-4 col-lg-3">
      <button
        *ngIf="returnRequest.cancellable"
        class="btn btn-block btn-primary"
        (click)="cancelReturn(returnRequest.rma)"
        [disabled]="isCancelling$ | async"
      >
        {{ 'returnRequest.cancel' | cxTranslate }}
      </button>
    </div>
  </div>
  <div class="cx-header row">
    <div class="cx-detail col-sm-12 col-md-4">
      <div class="cx-detail-label">
        {{ 'returnRequest.returnRequestId' | cxTranslate }}
      </div>
      <div class="cx-detail-value">{{ returnRequest.rma }}</div>
    </div>
    <div class="cx-detail col-sm-12 col-md-4">
      <div class="cx-detail-label">
        {{ 'returnRequest.orderCode' | cxTranslate }}
      </div>
      <div class="cx-detail-value">{{ returnRequest.order?.code }}</div>
    </div>
    <div class="cx-detail col-sm-12 col-md-4">
      <div class="cx-detail-label">
        {{ 'returnRequest.status' | cxTranslate }}
      </div>
      <div class="cx-detail-value">
        {{
          'returnRequestList.statusDisplay_' + returnRequest?.status
            | cxTranslate
        }}
      </div>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ReturnRequestService
  }], null);
})();
var ReturnRequestTotalsComponent = class _ReturnRequestTotalsComponent {
  constructor(returnRequestService) {
    this.returnRequestService = returnRequestService;
    this.returnRequest$ = this.returnRequestService.getReturnRequest();
  }
  ngOnDestroy() {
    this.returnRequestService.clearReturnRequest();
  }
  static {
    this.ɵfac = function ReturnRequestTotalsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReturnRequestTotalsComponent)(ɵɵdirectiveInject(ReturnRequestService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ReturnRequestTotalsComponent,
      selectors: [["cx-return-request-totals"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "row", "justify-content-end"], [1, "cx-summary", "col-sm-12", "col-md-6", "col-lg-5", "col-xl-4"], [1, "cx-summary-row"], [1, "col-6", "cx-summary-label"], [1, "col-6", "cx-summary-amount"], [1, "cx-summary-row", "cx-summary-total"], [1, "cx-summary-row", "cx-footnote"]],
      template: function ReturnRequestTotalsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, ReturnRequestTotalsComponent_ng_container_0_Template, 27, 18, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.returnRequest$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestTotalsComponent, [{
    type: Component,
    args: [{
      selector: "cx-return-request-totals",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="returnRequest$ | async as returnRequest">
  <div class="row justify-content-end">
    <div class="cx-summary col-sm-12 col-md-6 col-lg-5 col-xl-4">
      <h4>{{ 'returnRequest.summary' | cxTranslate }}</h4>
      <div class="cx-summary-row">
        <div class="col-6 cx-summary-label">
          {{ 'returnRequest.subtotal' | cxTranslate }}
        </div>
        <div class="col-6 cx-summary-amount">
          {{ returnRequest.subTotal?.formattedValue }}
        </div>
      </div>
      <div class="cx-summary-row">
        <div class="col-6 cx-summary-label">
          {{ 'returnRequest.deliveryCode' | cxTranslate }}
        </div>
        <div class="col-6 cx-summary-amount">
          {{ returnRequest.deliveryCost?.formattedValue }}
        </div>
      </div>
      <div class="cx-summary-row cx-summary-total">
        <div class="col-6 cx-summary-label">
          {{ 'returnRequest.estimatedRefund' | cxTranslate }}
        </div>
        <div class="col-6 cx-summary-amount">
          {{ returnRequest.totalPrice?.formattedValue }}
        </div>
      </div>
      <div class="cx-summary-row cx-footnote">
        {{ 'returnRequest.note' | cxTranslate }}
      </div>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ReturnRequestService
  }], null);
})();
var components = [ReturnRequestOverviewComponent, ReturnRequestItemsComponent, ReturnRequestTotalsComponent];
var ReturnRequestDetailModule = class _ReturnRequestDetailModule {
  static {
    this.ɵfac = function ReturnRequestDetailModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReturnRequestDetailModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ReturnRequestDetailModule,
      declarations: [ReturnRequestOverviewComponent, ReturnRequestItemsComponent, ReturnRequestTotalsComponent],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, MediaModule],
      exports: [ReturnRequestOverviewComponent, ReturnRequestItemsComponent, ReturnRequestTotalsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturnRequestOverviewComponent: {
            component: ReturnRequestOverviewComponent
          },
          ReturnRequestItemsComponent: {
            component: ReturnRequestItemsComponent
          },
          ReturnRequestTotalsComponent: {
            component: ReturnRequestTotalsComponent
          }
        }
      })],
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, MediaModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestDetailModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, I18nModule, MediaModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          ReturnRequestOverviewComponent: {
            component: ReturnRequestOverviewComponent
          },
          ReturnRequestItemsComponent: {
            component: ReturnRequestItemsComponent
          },
          ReturnRequestTotalsComponent: {
            component: ReturnRequestTotalsComponent
          }
        }
      })],
      declarations: [...components],
      exports: [...components]
    }]
  }], null, null);
})();
var OrderReturnRequestListComponent = class _OrderReturnRequestListComponent {
  constructor(returnRequestService, translation) {
    this.returnRequestService = returnRequestService;
    this.translation = translation;
    this.PAGE_SIZE = 5;
    this.returnRequests$ = this.returnRequestService.getOrderReturnRequestList(this.PAGE_SIZE).pipe(tap((requestList) => {
      if (requestList?.pagination?.sort) {
        this.sortType = requestList.pagination.sort;
      }
    }));
    this.tabTitleParam$ = this.returnRequests$.pipe(map((returnRequests) => returnRequests?.pagination?.totalResults), filter(isNotUndefined), take(1));
  }
  ngOnDestroy() {
    this.returnRequestService.clearOrderReturnRequestList();
  }
  changeSortCode(sortCode) {
    const event = {
      sortCode,
      currentPage: 0
    };
    this.sortType = sortCode;
    this.fetchReturnRequests(event);
  }
  pageChange(page) {
    const event = {
      sortCode: this.sortType,
      currentPage: page
    };
    this.fetchReturnRequests(event);
  }
  getSortLabels() {
    return combineLatest([this.translation.translate("sorting.date"), this.translation.translate("sorting.rma")]).pipe(map(([textByDate, textByRma]) => {
      return {
        byDate: textByDate,
        byRMA: textByRma
      };
    }));
  }
  fetchReturnRequests(event) {
    this.returnRequestService.loadOrderReturnRequestList(this.PAGE_SIZE, event.currentPage, event.sortCode);
  }
  static {
    this.ɵfac = function OrderReturnRequestListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderReturnRequestListComponent)(ɵɵdirectiveInject(OrderReturnRequestFacade), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderReturnRequestListComponent,
      selectors: [["cx-order-return-request-list"]],
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "container"], [1, "cx-order-history-body"], [1, "cx-order-history-sort", "top"], [1, "cx-order-history-form-group", "form-group"], ["ariaControls", "order-return-table", 3, "sortListEvent", "sortOptions", "sortLabels", "selectedOption", "ariaLabel"], [1, "cx-order-history-pagination"], ["paginationID", "pagination-top", 3, "viewPageEvent", "pagination"], ["id", "order-return-table", 1, "table", "cx-order-history-table"], ["class", "cx-order-history-thead-mobile", 4, "cxFeature"], [4, "ngFor", "ngForOf"], [1, "cx-order-history-sort", "bottom"], ["paginationID", "pagination-bottom", 3, "viewPageEvent", "pagination"], [1, "cx-order-history-thead-mobile"], ["scope", "col"], [1, "cx-order-history-code"], [1, "cx-order-history-label"], [1, "cx-order-history-value", 3, "routerLink"], [1, "cx-order-history-placed"], [1, "cx-order-history-status"]],
      template: function OrderReturnRequestListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, OrderReturnRequestListComponent_ng_container_0_Template, 4, 1, "ng-container", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.returnRequests$));
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, SortingComponent, PaginationComponent, FeatureDirective, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderReturnRequestListComponent, [{
    type: Component,
    args: [{
      selector: "cx-order-return-request-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="returnRequests$ | async as returnRequests">
  <div class="container">
    <!-- BODY -->
    <div class="cx-order-history-body">
      <ng-container *ngIf="returnRequests.pagination.totalResults > 0">
        <!-- Select Form and Pagination Top -->
        <div class="cx-order-history-sort top">
          <label class="cx-order-history-form-group form-group"
            ><span>{{ 'returnRequestList.sortBy' | cxTranslate }}</span>
            <cx-sorting
              [sortOptions]="returnRequests.sorts"
              [sortLabels]="getSortLabels() | async"
              (sortListEvent)="changeSortCode($event)"
              [selectedOption]="returnRequests.pagination.sort"
              [ariaLabel]="'returnRequestList.sortReturns' | cxTranslate"
              ariaControls="order-return-table"
            ></cx-sorting>
          </label>
          <div class="cx-order-history-pagination">
            <cx-pagination
              [pagination]="returnRequests.pagination"
              (viewPageEvent)="pageChange($event)"
              paginationID="pagination-top"
            ></cx-pagination>
          </div>
        </div>
        <!-- TABLE -->
        <table id="order-return-table" class="table cx-order-history-table">
          <thead
            *cxFeature="'!a11yTableHeaderReadout'"
            class="cx-order-history-thead-mobile"
          >
            <th scope="col">
              {{ 'returnRequestList.returnRequestId' | cxTranslate }}
            </th>
            <th scope="col">{{ 'returnRequestList.orderId' | cxTranslate }}</th>
            <th scope="col">
              {{ 'returnRequestList.date' | cxTranslate }}
            </th>
            <th scope="col">{{ 'returnRequestList.status' | cxTranslate }}</th>
          </thead>
          <thead
            *cxFeature="'a11yTableHeaderReadout'"
            class="cx-order-history-thead-mobile"
          >
            <tr>
              <th scope="col">
                {{ 'returnRequestList.returnRequestId' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'returnRequestList.orderId' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'returnRequestList.date' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'returnRequestList.status' | cxTranslate }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let return of returnRequests.returnRequests">
              <td class="cx-order-history-code">
                <div class="cx-order-history-label">
                  {{ 'returnRequestList.returnRequestId' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'returnRequestDetails',
                      params: return,
                    } | cxUrl
                  "
                  class="cx-order-history-value"
                >
                  {{ return?.rma }}</a
                >
              </td>
              <td class="cx-order-history-code">
                <div class="cx-order-history-label">
                  {{ 'returnRequestList.orderId' | cxTranslate }}
                </div>
                <a
                  [routerLink]="
                    {
                      cxRoute: 'orderDetails',
                      params: return?.order,
                    } | cxUrl
                  "
                  class="cx-order-history-value"
                >
                  {{ return?.order?.code }}</a
                >
              </td>

              <td class="cx-order-history-placed">
                <div class="cx-order-history-label">
                  {{ 'returnRequestList.date' | cxTranslate }}
                </div>
                {{ return?.creationTime | cxDate: 'longDate' }}
              </td>
              <td class="cx-order-history-status">
                <div class="cx-order-history-label">
                  {{ 'returnRequestList.status' | cxTranslate }}
                </div>
                {{
                  'returnRequestList.statusDisplay_' + return?.status
                    | cxTranslate
                }}
              </td>
            </tr>
          </tbody>
        </table>
        <!-- Select Form and Pagination Bottom -->
        <div class="cx-order-history-sort bottom">
          <label class="cx-order-history-form-group form-group"
            ><span>{{ 'returnRequestList.sortBy' | cxTranslate }}</span>
            <cx-sorting
              [sortOptions]="returnRequests.sorts"
              [sortLabels]="getSortLabels() | async"
              (sortListEvent)="changeSortCode($event)"
              [selectedOption]="returnRequests.pagination.sort"
              [ariaLabel]="'returnRequestList.sortReturns' | cxTranslate"
              ariaControls="order-return-table"
            ></cx-sorting>
          </label>
          <div class="cx-order-history-pagination">
            <cx-pagination
              [pagination]="returnRequests.pagination"
              (viewPageEvent)="pageChange($event)"
              paginationID="pagination-bottom"
            ></cx-pagination>
          </div>
        </div>
      </ng-container>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: OrderReturnRequestFacade
  }, {
    type: TranslationService
  }], null);
})();
var ReturnRequestListModule = class _ReturnRequestListModule {
  static {
    this.ɵfac = function ReturnRequestListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReturnRequestListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ReturnRequestListModule,
      declarations: [OrderReturnRequestListComponent],
      imports: [CommonModule, RouterModule, ListNavigationModule, UrlModule, I18nModule, FeaturesConfigModule],
      exports: [OrderReturnRequestListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          OrderReturnRequestListComponent: {
            component: OrderReturnRequestListComponent,
            guards: [AuthGuard]
          }
        }
      })],
      imports: [CommonModule, RouterModule, ListNavigationModule, UrlModule, I18nModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReturnRequestListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, ListNavigationModule, UrlModule, I18nModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          OrderReturnRequestListComponent: {
            component: OrderReturnRequestListComponent,
            guards: [AuthGuard]
          }
        }
      })],
      declarations: [OrderReturnRequestListComponent],
      exports: [OrderReturnRequestListComponent]
    }]
  }], null, null);
})();
var OrderComponentsModule = class _OrderComponentsModule {
  static {
    this.ɵfac = function OrderComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderComponentsModule,
      imports: [OrderHistoryModule, OrderDetailsModule, ReplenishmentOrderDetailsModule, OrderCancellationModule, OrderReturnModule, ReplenishmentOrderHistoryModule, ReturnRequestListModule, ReturnRequestDetailModule, OrderConfirmationModule, MyAccountV2OrdersModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: OrderDetailsOrderEntriesContextToken,
        useExisting: OrderDetailsOrderEntriesContext
      }],
      imports: [OrderHistoryModule, OrderDetailsModule, ReplenishmentOrderDetailsModule, OrderCancellationModule, OrderReturnModule, ReplenishmentOrderHistoryModule, ReturnRequestListModule, ReturnRequestDetailModule, OrderConfirmationModule, MyAccountV2OrdersModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [OrderHistoryModule, OrderDetailsModule, ReplenishmentOrderDetailsModule, OrderCancellationModule, OrderReturnModule, ReplenishmentOrderHistoryModule, ReturnRequestListModule, ReturnRequestDetailModule, OrderConfirmationModule, MyAccountV2OrdersModule],
      providers: [{
        provide: OrderDetailsOrderEntriesContextToken,
        useExisting: OrderDetailsOrderEntriesContext
      }]
    }]
  }], null, null);
})();

export {
  OrderDetailsService,
  OrderOverviewComponentService,
  OrderOverviewComponent,
  OrderDetailActionsComponent,
  OrderDetailItemsComponent,
  OrderDetailTotalsComponent,
  OrderComponentsModule
};
//# sourceMappingURL=chunk-ODL34PK5.js.map
