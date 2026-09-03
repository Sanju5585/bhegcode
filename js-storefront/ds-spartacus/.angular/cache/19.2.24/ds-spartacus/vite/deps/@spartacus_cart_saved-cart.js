import {
  CartConnector,
  MULTI_CART_DATA,
  ProductImportInfoService,
  cartGroup_actions,
  isSelectiveCart
} from "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import {
  AddToCartComponent,
  AddToCartModule
} from "./chunk-P4IPRL4B.js";
import {
  CloneSavedCartEvent,
  CloneSavedCartFailEvent,
  CloneSavedCartSuccessEvent,
  EditSavedCartEvent,
  EditSavedCartFailEvent,
  EditSavedCartSuccessEvent,
  NewSavedCartOrderEntriesContextToken,
  RestoreSavedCartEvent,
  RestoreSavedCartFailEvent,
  RestoreSavedCartSuccessEvent,
  SaveCartEvent,
  SaveCartFailEvent,
  SaveCartSuccessEvent,
  SavedCartFacade,
  SavedCartFormType,
  SavedCartOrderEntriesContextToken
} from "./chunk-OOT34BER.js";
import {
  UserAccountFacade
} from "./chunk-LZQV6UAH.js";
import {
  ActiveCartFacade,
  CART_NORMALIZER,
  CartOutlets,
  CartType,
  DeleteCartEvent,
  DeleteCartFailEvent,
  DeleteCartSuccessEvent,
  MultiCartFacade,
  OrderEntriesSource,
  ProductImportStatus,
  PromotionLocation
} from "./chunk-KEAKWHYV.js";
import {
  CardComponent,
  CardModule,
  DIALOG_TYPE,
  FocusDirective,
  FormErrorsComponent,
  FormErrorsModule,
  FormRequiredAsterisksComponent,
  FormRequiredLegendComponent,
  FormUtils,
  ICON_TYPE,
  IconComponent,
  IconModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  LaunchDialogService,
  ListNavigationModule,
  MediaModule,
  OutletDirective,
  OutletModule,
  SiteContextComponentService,
  SiteContextType,
  SpinnerComponent,
  SpinnerModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthGuard,
  AuthService,
  ConfigModule,
  ConverterService,
  CxDatePipe,
  EventService,
  FeatureDirective,
  FeaturesConfigModule,
  GlobalMessageService,
  GlobalMessageType,
  I18nModule,
  LoggerService,
  OccEndpointsService,
  PROCESS_FEATURE,
  RoutingService,
  StateEventService,
  TranslatePipe,
  TranslationService,
  UrlModule,
  UrlPipe,
  UserIdService,
  createFrom,
  process_selectors,
  provideDefaultConfig,
  provideDefaultConfigFactory,
  tryNormalizeHttpError,
  useFeatureStyles,
  utilsGroup
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
import "./chunk-YMQEGXEG.js";
import {
  Actions,
  EffectsFeatureModule,
  EffectsModule,
  createEffect,
  ofType
} from "./chunk-6KXUHIAW.js";
import {
  ActionsSubject,
  Store,
  select
} from "./chunk-2FUOVDAV.js";
import "./chunk-V3UYZOGB.js";
import "./chunk-GSAK4XRA.js";
import "./chunk-QLAXSOB2.js";
import "./chunk-OP73Q372.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-2A6OHZCE.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
  ɵNgNoValidate
} from "./chunk-YST33EXT.js";
import {
  AsyncPipe,
  CommonModule,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Injectable,
  NgModule,
  ViewChild,
  ViewContainerRef,
  inject,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import {
  merge,
  queueScheduler
} from "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  EMPTY,
  catchError,
  combineLatest,
  debounce,
  distinctUntilChanged,
  every,
  filter,
  from,
  map,
  mergeMap,
  observeOn,
  of,
  shareReplay,
  skip,
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

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-saved-cart-components.mjs
var _c0 = ["element"];
var _c1 = () => ({
  cxRoute: "savedCarts"
});
function AddToSavedCartComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2)(2, "a", 3);
    ɵɵpipe(3, "cxUrl");
    ɵɵelementStart(4, "span");
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "button", 4, 0);
    ɵɵpipe(9, "async");
    ɵɵlistener("click", function AddToSavedCartComponent_ng_container_0_Template_button_click_7_listener() {
      const cart_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.saveCart(cart_r2));
    });
    ɵɵelementStart(10, "span");
    ɵɵtext(11);
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(3, 5, ɵɵpureFunction0(13, _c1)));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 7, "addToSavedCart.savedCarts"));
    ɵɵadvance(2);
    ɵɵclassProp("disabled", ɵɵpipeBind1(9, 9, ctx_r2.disableSaveCartForLater$));
    ɵɵadvance(4);
    ɵɵtextInterpolate(ɵɵpipeBind1(12, 11, "addToSavedCart.saveCartForLater"));
  }
}
function SavedCartDetailsActionComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2)(2, "div", 3)(3, "button", 4, 0);
    ɵɵlistener("click", function SavedCartDetailsActionComponent_ng_container_0_Template_button_click_3_listener() {
      const cart_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.openDialog(cart_r2, ctx_r2.savedCartFormType.DELETE));
    });
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementStart(7, "div", 3)(8, "button", 5, 0);
    ɵɵlistener("click", function SavedCartDetailsActionComponent_ng_container_0_Template_button_click_8_listener() {
      const cart_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.openDialog(cart_r2, ctx_r2.savedCartFormType.RESTORE));
    });
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 2, "savedCartDetails.deleteSavedCart"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 4, "savedCartList.makeCartActive"), " ");
  }
}
var _c2 = (a0, a1, a2) => ({
  displayAddToCart: true,
  addToCartString: a0,
  optionalBtn: a1,
  cartType: a2
});
var _c3 = (a0, a1, a2, a3, a4) => ({
  cartId: a0,
  cartIsLoading: a1,
  items: a2,
  promotionLocation: a3,
  options: a4
});
function SavedCartDetailsItemsComponent_ng_container_0_ng_container_1_ng_template_2_Template(rf, ctx) {
}
function SavedCartDetailsItemsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4);
    ɵɵtemplate(2, SavedCartDetailsItemsComponent_ng_container_0_ng_container_1_ng_template_2_Template, 0, 0, "ng-template", 5);
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "async");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cart_r1 = ɵɵnextContext().ngIf;
    const addToCartBtn_r2 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("cxOutlet", ctx_r2.CartOutlets.CART_ITEM_LIST)("cxOutletContext", ɵɵpureFunction5(10, _c3, cart_r1.code, !ɵɵpipeBind1(3, 2, ctx_r2.cartLoaded$), cart_r1.entries, ctx_r2.CartLocation.SavedCart, ɵɵpureFunction3(6, _c2, ɵɵpipeBind1(4, 4, ctx_r2.buyItAgainTranslation$), addToCartBtn_r2, ctx_r2.CartType.SELECTIVE)));
  }
}
function SavedCartDetailsItemsComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "cx-add-to-cart", 6);
  }
  if (rf & 2) {
    const ctx_ir4 = ctx.$implicit;
    const cart_r1 = ɵɵnextContext().ngIf;
    ɵɵproperty("productCode", ctx_ir4.item.product == null ? null : ctx_ir4.item.product.code)("product", ctx_ir4.item.product)("showQuantity", false)("options", ctx_ir4.options)("pickupStore", ctx_ir4.item.deliveryPointOfService == null ? null : ctx_ir4.item.deliveryPointOfService.name)("savedCart", cart_r1);
  }
}
function SavedCartDetailsItemsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SavedCartDetailsItemsComponent_ng_container_0_ng_container_1_Template, 5, 16, "ng-container", 3)(2, SavedCartDetailsItemsComponent_ng_container_0_ng_template_2_Template, 1, 6, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cart_r1 = ctx.ngIf;
    ɵɵnextContext();
    const emptyCartItems_r5 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", (cart_r1 == null ? null : cart_r1.entries == null ? null : cart_r1.entries.length) > 0)("ngIfElse", emptyCartItems_r5);
  }
}
function SavedCartDetailsItemsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function SavedCartDetailsOverviewComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    ɵɵelement(5, "cx-card", 6);
    ɵɵpipe(6, "async");
    ɵɵelementStart(7, "button", 7, 0);
    ɵɵpipe(9, "cxTranslate");
    ɵɵpipe(10, "cxTranslate");
    ɵɵlistener("click", function SavedCartDetailsOverviewComponent_ng_container_0_Template_button_click_7_listener() {
      const cart_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.openDialog(cart_r2));
    });
    ɵɵelement(11, "cx-icon", 8);
    ɵɵelementEnd()();
    ɵɵelementStart(12, "div", 9);
    ɵɵelement(13, "cx-card", 10);
    ɵɵpipe(14, "async");
    ɵɵelementEnd()();
    ɵɵelementStart(15, "div", 4);
    ɵɵelement(16, "cx-card", 6);
    ɵɵpipe(17, "async");
    ɵɵelementEnd();
    ɵɵelementStart(18, "div", 4);
    ɵɵelement(19, "cx-card", 6);
    ɵɵpipe(20, "cxDate");
    ɵɵpipe(21, "async");
    ɵɵelement(22, "cx-card", 6);
    ɵɵpipe(23, "async");
    ɵɵelementEnd();
    ɵɵelementStart(24, "div", 4);
    ɵɵelement(25, "cx-card", 6);
    ɵɵpipe(26, "async");
    ɵɵelement(27, "cx-card", 6);
    ɵɵpipe(28, "async");
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const cart_r2 = ctx.ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵproperty("content", ɵɵpipeBind1(6, 12, ctx_r2.getCartName(cart_r2 == null ? null : cart_r2.name)));
    ɵɵadvance(2);
    ɵɵattribute("aria-label", ɵɵpipeBind1(9, 14, "savedCartDetails.editSavedCart"))("title", ɵɵpipeBind1(10, 16, "savedCartDetails.editSavedCart"));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r2.iconTypes.PENCIL);
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(14, 18, ctx_r2.getCartDescription(cart_r2 == null ? null : cart_r2.description)))("truncateText", true)("charactersLimit", 30);
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(17, 20, ctx_r2.getCartId(cart_r2 == null ? null : cart_r2.code)));
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(21, 24, ctx_r2.getDateSaved(ɵɵpipeBind1(20, 22, cart_r2 == null ? null : cart_r2.saveTime))));
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(23, 26, ctx_r2.getCartItems(cart_r2 == null ? null : cart_r2.totalItems)));
    ɵɵadvance(3);
    ɵɵproperty("content", ɵɵpipeBind1(26, 28, ctx_r2.getCartQuantity(cart_r2 == null ? null : cart_r2.totalUnitCount)));
    ɵɵadvance(2);
    ɵɵproperty("content", ɵɵpipeBind1(28, 30, ctx_r2.getCartTotal(cart_r2 == null ? null : cart_r2.totalPriceWithTax == null ? null : cart_r2.totalPriceWithTax.formattedValue)));
  }
}
var _c4 = (a0) => ({
  count: a0
});
var _c5 = (a0) => ({
  savedCartId: a0
});
var _c6 = (a0) => ({
  cxRoute: "savedCartsDetails",
  params: a0
});
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_th_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 14);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartList.quantityFull"), " ");
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_th_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 14);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartList.quantity"), " ");
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_thead_19_th_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 19);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartList.quantityFull"), " ");
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_thead_19_th_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 19);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartList.quantity"), " ");
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_thead_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 15)(1, "tr")(2, "th", 16);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "th", 16);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "th", 16);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(11, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_thead_19_th_11_Template, 3, 3, "th", 17)(12, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_thead_19_th_12_Template, 3, 3, "th", 17);
    ɵɵelementStart(13, "th", 18);
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(16, "th", 16);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 7, "savedCartList.cartName"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 9, "savedCartList.cartId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 11, "savedCartList.dateSaved"), " ");
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 13, "savedCartList.total"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 15, "savedCartList.actions"), " ");
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "thead", 9)(1, "thead", 9)(2, "th", 10);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "th", 10);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(8, "th", 10);
    ɵɵtext(9);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(11, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_th_11_Template, 3, 3, "th", 11)(12, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_th_12_Template, 3, 3, "th", 11);
    ɵɵelementStart(13, "th", 12);
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(16, "th", 10);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(19, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_thead_19_Template, 19, 17, "thead", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 8, "savedCartList.cartName"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 10, "savedCartList.cartId"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(10, 12, "savedCartList.dateSaved"), " ");
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(15, 14, "savedCartList.total"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 16, "savedCartList.actions"), " ");
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "a11yTableHeaderReadout");
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_tr_4_div_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartList.quantityFull"), " ");
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_tr_4_div_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartList.quantity"), " ");
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 20);
    ɵɵlistener("click", function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_tr_4_Template_tr_click_0_listener() {
      const savedCart_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.goToSavedCartDetails(savedCart_r2));
    });
    ɵɵelementStart(1, "td", 21)(2, "div", 22);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(5, "a", 23);
    ɵɵpipe(6, "cxUrl");
    ɵɵtext(7);
    ɵɵelementEnd()();
    ɵɵelementStart(8, "td", 24)(9, "div", 22);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "a", 23);
    ɵɵpipe(13, "cxUrl");
    ɵɵtext(14);
    ɵɵelementEnd()();
    ɵɵelementStart(15, "td", 25)(16, "div", 22);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(19, "a", 23);
    ɵɵpipe(20, "cxUrl");
    ɵɵtext(21);
    ɵɵpipe(22, "cxDate");
    ɵɵelementEnd()();
    ɵɵelementStart(23, "td", 26);
    ɵɵtemplate(24, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_tr_4_div_24_Template, 3, 3, "div", 27)(25, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_tr_4_div_25_Template, 3, 3, "div", 27);
    ɵɵelementStart(26, "a", 23);
    ɵɵpipe(27, "cxUrl");
    ɵɵtext(28);
    ɵɵelementEnd()();
    ɵɵelementStart(29, "td", 28)(30, "div", 22);
    ɵɵtext(31);
    ɵɵpipe(32, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(33, "a", 23);
    ɵɵpipe(34, "cxUrl");
    ɵɵtext(35);
    ɵɵelementEnd()();
    ɵɵelementStart(36, "td", 29)(37, "div", 22);
    ɵɵtext(38);
    ɵɵpipe(39, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(40, "button", 30, 2);
    ɵɵlistener("click", function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_tr_4_Template_button_click_40_listener($event) {
      const savedCart_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r2.openDialog($event, savedCart_r2));
    });
    ɵɵtext(42);
    ɵɵpipe(43, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const savedCart_r2 = ctx.$implicit;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 18, "savedCartList.cartName"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(6, 20, ɵɵpureFunction1(45, _c6, ɵɵpureFunction1(43, _c5, savedCart_r2 == null ? null : savedCart_r2.code))));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", savedCart_r2 == null ? null : savedCart_r2.name, "");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 22, "savedCartList.cartId"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(13, 24, ɵɵpureFunction1(49, _c6, ɵɵpureFunction1(47, _c5, savedCart_r2 == null ? null : savedCart_r2.code))));
    ɵɵadvance(2);
    ɵɵtextInterpolate(savedCart_r2 == null ? null : savedCart_r2.code);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(18, 26, "savedCartList.dateSaved"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(20, 28, ɵɵpureFunction1(53, _c6, ɵɵpureFunction1(51, _c5, savedCart_r2 == null ? null : savedCart_r2.code))));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind2(22, 30, savedCart_r2 == null ? null : savedCart_r2.saveTime, "longDate"));
    ɵɵadvance(3);
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(27, 33, ɵɵpureFunction1(57, _c6, ɵɵpureFunction1(55, _c5, savedCart_r2 == null ? null : savedCart_r2.code))));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", savedCart_r2 == null ? null : savedCart_r2.totalUnitCount, "");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(32, 35, "savedCartList.total"), " ");
    ɵɵadvance(2);
    ɵɵproperty("routerLink", ɵɵpipeBind1(34, 37, ɵɵpureFunction1(61, _c6, ɵɵpureFunction1(59, _c5, savedCart_r2 == null ? null : savedCart_r2.code))));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", savedCart_r2 == null ? null : savedCart_r2.totalPrice == null ? null : savedCart_r2.totalPrice.formattedValue, "");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(39, 39, "savedCartList.actions"), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(43, 41, "savedCartList.makeCartActive"), " ");
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "table", 6);
    ɵɵtemplate(2, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_thead_2_Template, 20, 18, "thead", 7);
    ɵɵelementStart(3, "tbody");
    ɵɵtemplate(4, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_tr_4_Template, 44, 63, "tr", 8);
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const savedCarts_r4 = ɵɵnextContext(2).ngIf;
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "!a11yTableHeaderReadout");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", savedCarts_r4);
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 31)(1, "div", 32)(2, "div");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    ɵɵadvance(3);
    ɵɵtextInterpolate(ɵɵpipeBind1(4, 1, "savedCartList.notFound"));
  }
}
function SavedCartListComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 5)(2, "h2");
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(5, SavedCartListComponent_ng_container_0_ng_container_1_ng_container_5_Template, 5, 2, "ng-container", 4)(6, SavedCartListComponent_ng_container_0_ng_container_1_ng_template_6_Template, 5, 3, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const noSavedCarts_r5 = ɵɵreference(7);
    const savedCarts_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 3, "savedCartList.savedCarts", ɵɵpureFunction1(6, _c4, savedCarts_r4.length)), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", (savedCarts_r4 == null ? null : savedCarts_r4.length) > 0)("ngIfElse", noSavedCarts_r5);
  }
}
function SavedCartListComponent_ng_container_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 33);
    ɵɵelement(1, "cx-spinner");
    ɵɵelementEnd();
  }
}
function SavedCartListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SavedCartListComponent_ng_container_0_ng_container_1_Template, 8, 8, "ng-container", 4);
    ɵɵpipe(2, "async");
    ɵɵtemplate(3, SavedCartListComponent_ng_container_0_ng_template_3_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const loading_r6 = ɵɵreference(4);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ɵɵpipeBind1(2, 2, ctx_r2.isLoading$))("ngIfElse", loading_r6);
  }
}
var _c7 = (a0) => ({
  name: a0
});
var _c8 = (a0) => ({
  label: a0
});
function SavedCartFormDialogComponent_ng_container_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartDialog.editSavedCart"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartDialog.deleteSavedCart"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartDialog.saveForLater"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartDialog.restoreSavedCart"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_17_div_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartDialog.quantityFull"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_17_div_25_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "savedCartDialog.quantity"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_container_34_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26)(1, "label")(2, "span", 27);
    ɵɵtext(3);
    ɵɵpipe(4, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(5, "input", 28);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(4, 3, "savedCartDialog.nameOfCloneCart"), " ");
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("placeholder", ɵɵpipeBind2(6, 5, "savedCartDialog.defaultCloneCartName", ɵɵpureFunction1(8, _c7, (tmp_7_0 = ctx_r1.form.get("name")) == null ? null : tmp_7_0.value)));
    ɵɵproperty("maxLength", ctx_r1.nameMaxLength);
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 22)(2, "input", 23);
    ɵɵlistener("change", function SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_container_34_Template_input_change_2_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleIsCloneSavedCart());
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 24);
    ɵɵtext(4);
    ɵɵpipe(5, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵtemplate(6, SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_container_34_div_6_Template, 7, 10, "div", 25);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("checked", ctx_r1.isCloneSavedCart);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(5, 3, "savedCartDialog.keepCopySavedCart"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.isCloneSavedCart);
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_container_39_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_container_39_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.deleteCart(ctx_r1.cart.code));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("disabled", ɵɵpipeBind1(1, 2, ctx_r1.isDisableDeleteButton$));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "savedCartDialog.delete"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_container_39_button_1_Template, 4, 6, "button", 29);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.cart.code);
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_template_40_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 30);
    ɵɵpipe(1, "async");
    ɵɵlistener("click", function SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_template_40_button_0_Template_button_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.restoreSavedCart(ctx_r1.cart.code));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("disabled", ɵɵpipeBind1(1, 2, ctx_r1.isDisableRestoreButton$));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 4, "savedCartDialog.restore"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_template_40_button_0_Template, 4, 6, "button", 29);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r1.cart.code);
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 15)(5, "div", 16)(6, "div", 17);
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 18);
    ɵɵtext(10);
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 16)(12, "div", 17);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(15, "div", 18);
    ɵɵtext(16);
    ɵɵelementEnd()();
    ɵɵelementStart(17, "div", 16)(18, "div", 17);
    ɵɵtext(19);
    ɵɵpipe(20, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(21, "div", 18);
    ɵɵtext(22);
    ɵɵelementEnd()();
    ɵɵelementStart(23, "div", 16);
    ɵɵtemplate(24, SavedCartFormDialogComponent_ng_container_0_ng_container_17_div_24_Template, 3, 3, "div", 19)(25, SavedCartFormDialogComponent_ng_container_0_ng_container_17_div_25_Template, 3, 3, "div", 19);
    ɵɵelementStart(26, "div", 18);
    ɵɵtext(27);
    ɵɵelementEnd()();
    ɵɵelementStart(28, "div", 16)(29, "div", 17);
    ɵɵtext(30);
    ɵɵpipe(31, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(32, "div", 18);
    ɵɵtext(33);
    ɵɵelementEnd()()();
    ɵɵtemplate(34, SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_container_34_Template, 7, 5, "ng-container", 2);
    ɵɵelementStart(35, "div", 20)(36, "button", 21);
    ɵɵlistener("click", function SavedCartFormDialogComponent_ng_container_0_ng_container_17_Template_button_click_36_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.close("Close Save Cart Dialog"));
    });
    ɵɵtext(37);
    ɵɵpipe(38, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(39, SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_container_39_Template, 2, 1, "ng-container", 13)(40, SavedCartFormDialogComponent_ng_container_0_ng_container_17_ng_template_40_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const isRestoreSavedCart_r7 = ɵɵreference(41);
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 16, ctx_r1.layoutOption === ctx_r1.savedCartFormType.DELETE ? "savedCartDialog.followingCartDelete" : "savedCartDialog.followingCartRestore"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 18, "savedCartDialog.name"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.cart == null ? null : ctx_r1.cart.name, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 20, "savedCartDialog.id"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.cart == null ? null : ctx_r1.cart.code, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(20, 22, "savedCartDialog.description"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.cart == null ? null : ctx_r1.cart.description, " ");
    ɵɵadvance(2);
    ɵɵproperty("cxFeature", "a11yQTY2Quantity");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yQTY2Quantity");
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r1.cart == null ? null : ctx_r1.cart.totalUnitCount, " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(31, 24, "savedCartDialog.total"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ctx_r1.cart == null ? null : ctx_r1.cart.totalPriceWithTax == null ? null : ctx_r1.cart.totalPriceWithTax.formattedValue, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.layoutOption === ctx_r1.savedCartFormType.RESTORE);
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(38, 26, "savedCartDialog.cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.layoutOption === ctx_r1.savedCartFormType.DELETE)("ngIfElse", isRestoreSavedCart_r7);
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_template_18_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p", 14);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelement(4, "cx-form-required-legend");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 1, "savedCartDialog.itemsSavedForLater"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵtemplate(0, SavedCartFormDialogComponent_ng_container_0_ng_template_18_ng_container_0_Template, 5, 3, "ng-container", 2);
    ɵɵelementStart(1, "div", 15);
    ɵɵelementContainerStart(2);
    ɵɵelementStart(3, "label")(4, "span", 31);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelement(7, "cx-form-required-asterisks");
    ɵɵelementEnd();
    ɵɵelement(8, "input", 32)(9, "cx-form-errors", 33);
    ɵɵpipe(10, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "div", 15)(12, "label")(13, "span", 31);
    ɵɵtext(14);
    ɵɵpipe(15, "cxTranslate");
    ɵɵelementStart(16, "span", 34);
    ɵɵtext(17);
    ɵɵpipe(18, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelement(19, "textarea", 35)(20, "cx-form-errors", 36);
    ɵɵpipe(21, "cxTranslate");
    ɵɵelementStart(22, "p", 37);
    ɵɵtext(23);
    ɵɵpipe(24, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(25, "div", 20)(26, "button", 38);
    ɵɵpipe(27, "async");
    ɵɵlistener("click", function SavedCartFormDialogComponent_ng_container_0_ng_template_18_Template_button_click_26_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.close("Close Save Cart Dialog"));
    });
    ɵɵtext(28);
    ɵɵpipe(29, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(30, "button", 39);
    ɵɵpipe(31, "async");
    ɵɵlistener("click", function SavedCartFormDialogComponent_ng_container_0_ng_template_18_Template_button_click_30_listener() {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.saveOrEditCart(ctx_r1.cart == null ? null : ctx_r1.cart.code));
    });
    ɵɵtext(32);
    ɵɵpipe(33, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_13_0;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.layoutOption === ctx_r1.savedCartFormType.SAVE);
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(6, 19, "savedCartDialog.savedCartName"), " ");
    ɵɵadvance(3);
    ɵɵproperty("maxLength", ctx_r1.nameMaxLength);
    ɵɵattribute("aria-invalid", ((tmp_6_0 = ctx_r1.form.get("name")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r1.form.get("name")) == null ? null : tmp_6_0.invalid))("aria-errormessage", "nameError");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(40, _c8, ɵɵpipeBind1(10, 21, "savedCartDialog.savedCartName")))("control", ctx_r1.form.get("name"));
    ɵɵadvance(5);
    ɵɵtextInterpolate1("", ɵɵpipeBind1(15, 23, "savedCartDialog.savedCartDescription"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" (", ɵɵpipeBind1(18, 25, "savedCartDialog.optional"), ") ");
    ɵɵadvance(2);
    ɵɵproperty("maxLength", ctx_r1.descriptionMaxLength);
    ɵɵattribute("aria-invalid", ((tmp_13_0 = ctx_r1.form.get("description")) == null ? null : tmp_13_0.touched) && ((tmp_13_0 = ctx_r1.form.get("description")) == null ? null : tmp_13_0.invalid))("aria-errormessage", "descriptionError");
    ɵɵadvance();
    ɵɵproperty("translationParams", ɵɵpureFunction1(42, _c8, ɵɵpipeBind1(21, 27, "savedCartDialog.savedCartDescription")))("control", ctx_r1.form.get("description"));
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(24, 29, "savedCartDialog.charactersLeft", ɵɵpureFunction1(44, _c4, ctx_r1.descriptionsCharacterLeft)), " ");
    ɵɵadvance(3);
    ɵɵproperty("disabled", ɵɵpipeBind1(27, 32, ctx_r1.isLoading$));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(29, 34, "savedCartDialog.cancel"), " ");
    ɵɵadvance(2);
    ɵɵproperty("disabled", ɵɵpipeBind1(31, 36, ctx_r1.isLoading$));
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(33, 38, "savedCartDialog.save"), " ");
  }
}
function SavedCartFormDialogComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 3);
    ɵɵlistener("esc", function SavedCartFormDialogComponent_ng_container_0_Template_div_esc_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close("Escape clicked"));
    });
    ɵɵelementStart(2, "form", 4)(3, "div", 5);
    ɵɵelementContainerStart(4, 6);
    ɵɵelementStart(5, "h3", 7);
    ɵɵtemplate(6, SavedCartFormDialogComponent_ng_container_0_ng_container_6_Template, 3, 3, "ng-container", 8)(7, SavedCartFormDialogComponent_ng_container_0_ng_container_7_Template, 3, 3, "ng-container", 8)(8, SavedCartFormDialogComponent_ng_container_0_ng_container_8_Template, 3, 3, "ng-container", 8)(9, SavedCartFormDialogComponent_ng_container_0_ng_container_9_Template, 3, 3, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
    ɵɵelementStart(10, "button", 9);
    ɵɵpipe(11, "cxTranslate");
    ɵɵpipe(12, "async");
    ɵɵpipe(13, "cxTranslate");
    ɵɵlistener("click", function SavedCartFormDialogComponent_ng_container_0_Template_button_click_10_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close("Close Save Cart Dialog"));
    });
    ɵɵelementStart(14, "span", 10);
    ɵɵelement(15, "cx-icon", 11);
    ɵɵelementEnd()()();
    ɵɵelementStart(16, "div", 12);
    ɵɵtemplate(17, SavedCartFormDialogComponent_ng_container_0_ng_container_17_Template, 42, 28, "ng-container", 13)(18, SavedCartFormDialogComponent_ng_container_0_ng_template_18_Template, 34, 46, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const saveAndEditCart_r9 = ɵɵreference(19);
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("cxFocus", ctx_r1.focusConfig);
    ɵɵadvance();
    ɵɵproperty("formGroup", ctx_r1.form);
    ɵɵadvance(2);
    ɵɵproperty("ngSwitch", ctx_r1.layoutOption);
    ɵɵadvance(2);
    ɵɵproperty("ngSwitchCase", ctx_r1.savedCartFormType.EDIT);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.savedCartFormType.DELETE);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.savedCartFormType.SAVE);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", ctx_r1.savedCartFormType.RESTORE);
    ɵɵadvance();
    ɵɵpropertyInterpolate("title", ɵɵpipeBind1(11, 13, "common.close"));
    ɵɵproperty("disabled", ɵɵpipeBind1(12, 15, ctx_r1.isLoading$));
    ɵɵattribute("aria-label", ɵɵpipeBind1(13, 17, "common.close"));
    ɵɵadvance(5);
    ɵɵproperty("type", ctx_r1.iconTypes.CLOSE);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.layoutOption === ctx_r1.savedCartFormType.DELETE || ctx_r1.layoutOption === ctx_r1.savedCartFormType.RESTORE)("ngIfElse", saveAndEditCart_r9);
  }
}
var AddToSavedCartComponent = class _AddToSavedCartComponent {
  constructor(activeCartFacade, authService, routingService, vcr, launchDialogService) {
    this.activeCartFacade = activeCartFacade;
    this.authService = authService;
    this.routingService = routingService;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.loggedIn = false;
  }
  ngOnInit() {
    this.cart$ = combineLatest([this.activeCartFacade.getActive(), this.authService.isUserLoggedIn()]).pipe(tap(([_, loggedIn]) => this.loggedIn = loggedIn), map(([activeCart]) => activeCart));
    this.disableSaveCartForLater$ = this.cart$.pipe(map((cart) => !cart.entries?.length));
  }
  saveCart(cart) {
    this.subscription.add(this.disableSaveCartForLater$.pipe(distinctUntilChanged(), filter((isDisabled) => !isDisabled)).subscribe(() => {
      if (this.loggedIn) {
        this.openDialog(cart);
      } else {
        this.routingService.go({
          cxRoute: "login"
        });
      }
    }));
  }
  openDialog(cart) {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.SAVED_CART, this.element, this.vcr, {
      cart,
      layoutOption: "save"
    });
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function AddToSavedCartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddToSavedCartComponent)(ɵɵdirectiveInject(ActiveCartFacade), ɵɵdirectiveInject(AuthService), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(LaunchDialogService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AddToSavedCartComponent,
      selectors: [["cx-add-to-saved-cart"]],
      viewQuery: function AddToSavedCartComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["element", ""], [4, "ngIf"], [1, "cx-add-to-saved-cart-container"], ["cxAutoFocus", "", 1, "link", "cx-action-link", 3, "routerLink"], ["cxAutoFocus", "", 1, "link", "cx-action-link", 3, "click"]],
      template: function AddToSavedCartComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AddToSavedCartComponent_ng_container_0_Template, 13, 14, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.cart$));
        }
      },
      dependencies: [NgIf, RouterLink, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToSavedCartComponent, [{
    type: Component,
    args: [{
      selector: "cx-add-to-saved-cart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="cart$ | async as cart">
  <div class="cx-add-to-saved-cart-container">
    <a
      class="link cx-action-link"
      [routerLink]="
        {
          cxRoute: 'savedCarts',
        } | cxUrl
      "
      cxAutoFocus
    >
      <span>{{ 'addToSavedCart.savedCarts' | cxTranslate }}</span>
    </a>
    <button
      #element
      class="link cx-action-link"
      [class.disabled]="disableSaveCartForLater$ | async"
      (click)="saveCart(cart)"
      cxAutoFocus
    >
      <span>{{ 'addToSavedCart.saveCartForLater' | cxTranslate }}</span>
    </button>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: AuthService
  }, {
    type: RoutingService
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
var AddToSavedCartModule = class _AddToSavedCartModule {
  static {
    this.ɵfac = function AddToSavedCartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddToSavedCartModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AddToSavedCartModule,
      declarations: [AddToSavedCartComponent],
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, FeaturesConfigModule],
      exports: [AddToSavedCartComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          AddToSavedCartsComponent: {
            component: AddToSavedCartComponent
          }
        }
      })],
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToSavedCartModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, I18nModule, UrlModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AddToSavedCartsComponent: {
            component: AddToSavedCartComponent
          }
        }
      })],
      exports: [AddToSavedCartComponent],
      declarations: [AddToSavedCartComponent]
    }]
  }], null, null);
})();
var SavedCartDetailsService = class _SavedCartDetailsService {
  constructor(routingService, savedCartService) {
    this.routingService = routingService;
    this.savedCartService = savedCartService;
    this.savedCartId$ = this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params.savedCartId), distinctUntilChanged());
    this.savedCart$ = this.savedCartId$.pipe(filter((cartId) => Boolean(cartId)), tap((savedCartId) => this.savedCartService.loadSavedCart(savedCartId)), switchMap((savedCartId) => this.savedCartService.get(savedCartId)), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  getSavedCartId() {
    return this.savedCartId$;
  }
  getCartDetails() {
    return this.savedCart$;
  }
  static {
    this.ɵfac = function SavedCartDetailsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartDetailsService)(ɵɵinject(RoutingService), ɵɵinject(SavedCartFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SavedCartDetailsService,
      factory: _SavedCartDetailsService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartDetailsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: SavedCartFacade
  }], null);
})();
var SavedCartDetailsActionComponent = class _SavedCartDetailsActionComponent {
  constructor(savedCartDetailsService, vcr, launchDialogService) {
    this.savedCartDetailsService = savedCartDetailsService;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.savedCartFormType = SavedCartFormType;
    this.savedCart$ = this.savedCartDetailsService.getCartDetails();
  }
  openDialog(cart, type) {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.SAVED_CART, this.element, this.vcr, {
      cart,
      layoutOption: type
    });
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function SavedCartDetailsActionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartDetailsActionComponent)(ɵɵdirectiveInject(SavedCartDetailsService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(LaunchDialogService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SavedCartDetailsActionComponent,
      selectors: [["cx-saved-cart-details-action"]],
      viewQuery: function SavedCartDetailsActionComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["element", ""], [4, "ngIf"], [1, "cx-saved-cart-restore-btns", "row"], [1, "col-xs-12", "col-md-5", "col-lg-4"], [1, "btn", "btn-block", "btn-secondary", 3, "click"], [1, "btn", "btn-block", "btn-primary", 3, "click"]],
      template: function SavedCartDetailsActionComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SavedCartDetailsActionComponent_ng_container_0_Template, 12, 6, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.savedCart$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartDetailsActionComponent, [{
    type: Component,
    args: [{
      selector: "cx-saved-cart-details-action",
      standalone: false,
      template: `<ng-container *ngIf="savedCart$ | async as cart">
  <div class="cx-saved-cart-restore-btns row">
    <div class="col-xs-12 col-md-5 col-lg-4">
      <button
        #element
        class="btn btn-block btn-secondary"
        (click)="openDialog(cart, savedCartFormType.DELETE)"
      >
        {{ 'savedCartDetails.deleteSavedCart' | cxTranslate }}
      </button>
    </div>
    <div class="col-xs-12 col-md-5 col-lg-4">
      <button
        #element
        class="btn btn-block btn-primary"
        (click)="openDialog(cart, savedCartFormType.RESTORE)"
      >
        {{ 'savedCartList.makeCartActive' | cxTranslate }}
      </button>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: SavedCartDetailsService
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
var SavedCartDetailsItemsComponent = class _SavedCartDetailsItemsComponent {
  constructor(savedCartDetailsService, savedCartService, eventSercvice, globalMessageService, routingService, translation) {
    this.savedCartDetailsService = savedCartDetailsService;
    this.savedCartService = savedCartService;
    this.eventSercvice = eventSercvice;
    this.globalMessageService = globalMessageService;
    this.routingService = routingService;
    this.translation = translation;
    this.subscription = new Subscription();
    this.CartOutlets = CartOutlets;
    this.CartType = CartType;
    this.CartLocation = PromotionLocation;
    this.cartLoaded$ = this.savedCartDetailsService.getSavedCartId().pipe(switchMap((cartId) => this.savedCartService.isStable(cartId)));
    this.savedCart$ = this.savedCartDetailsService.getCartDetails().pipe(tap((cart) => {
      if ((cart?.entries ?? []).length <= 0 && !!cart?.code) {
        this.savedCartService.deleteSavedCart(cart.code);
      }
    }));
  }
  ngOnInit() {
    this.subscription.add(this.eventSercvice.get(DeleteCartSuccessEvent).pipe(take(1), map(() => true)).subscribe((success) => this.onDeleteComplete(success)));
    this.buyItAgainTranslation$ = this.translation.translate("addToCart.addToActiveCart");
  }
  onDeleteComplete(success) {
    if (success) {
      this.routingService.go({
        cxRoute: "savedCarts"
      });
      this.globalMessageService.add({
        key: "savedCartDialog.deleteCartSuccess"
      }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function SavedCartDetailsItemsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartDetailsItemsComponent)(ɵɵdirectiveInject(SavedCartDetailsService), ɵɵdirectiveInject(SavedCartFacade), ɵɵdirectiveInject(EventService), ɵɵdirectiveInject(GlobalMessageService), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(TranslationService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SavedCartDetailsItemsComponent,
      selectors: [["cx-saved-cart-details-items"]],
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [["emptyCartItems", ""], ["addToCartBtn", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "cart-details-wrapper"], [3, "cxOutlet", "cxOutletContext"], [3, "productCode", "product", "showQuantity", "options", "pickupStore", "savedCart"], [1, "cx-spinner"]],
      template: function SavedCartDetailsItemsComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SavedCartDetailsItemsComponent_ng_container_0_Template, 4, 2, "ng-container", 2);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, SavedCartDetailsItemsComponent_ng_template_2_Template, 2, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.savedCart$));
        }
      },
      dependencies: [NgIf, SpinnerComponent, OutletDirective, AddToCartComponent, AsyncPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartDetailsItemsComponent, [{
    type: Component,
    args: [{
      selector: "cx-saved-cart-details-items",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: '<ng-container *ngIf="savedCart$ | async as cart">\n  <ng-container *ngIf="cart?.entries?.length > 0; else emptyCartItems">\n    <div class="cart-details-wrapper">\n      <ng-template\n        [cxOutlet]="CartOutlets.CART_ITEM_LIST"\n        [cxOutletContext]="{\n          cartId: cart.code,\n          cartIsLoading: !(cartLoaded$ | async),\n          items: cart.entries,\n          promotionLocation: CartLocation.SavedCart,\n          options: {\n            displayAddToCart: true,\n            addToCartString: (buyItAgainTranslation$ | async),\n            optionalBtn: addToCartBtn,\n            cartType: CartType.SELECTIVE,\n          },\n        }"\n      >\n      </ng-template>\n    </div>\n  </ng-container>\n\n  <ng-template let-ctx #addToCartBtn>\n    <cx-add-to-cart\n      [productCode]="ctx.item.product?.code"\n      [product]="ctx.item.product"\n      [showQuantity]="false"\n      [options]="ctx.options"\n      [pickupStore]="ctx.item.deliveryPointOfService?.name"\n      [savedCart]="cart"\n    >\n    </cx-add-to-cart>\n  </ng-template>\n</ng-container>\n\n<ng-template #emptyCartItems>\n  <div class="cx-spinner">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n'
    }]
  }], () => [{
    type: SavedCartDetailsService
  }, {
    type: SavedCartFacade
  }, {
    type: EventService
  }, {
    type: GlobalMessageService
  }, {
    type: RoutingService
  }, {
    type: TranslationService
  }], null);
})();
var SavedCartDetailsOverviewComponent = class _SavedCartDetailsOverviewComponent {
  constructor(savedCartDetailsService, translation, vcr, launchDialogService) {
    this.savedCartDetailsService = savedCartDetailsService;
    this.translation = translation;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.iconTypes = ICON_TYPE;
    this.savedCart$ = this.savedCartDetailsService.getCartDetails();
  }
  getCartName(cartName) {
    return this.translation.translate("savedCartDetails.cartName").pipe(filter(() => Boolean(cartName)), map((textTitle) => ({
      title: textTitle,
      text: [cartName]
    })));
  }
  getCartDescription(cartDescription) {
    return this.translation.translate("savedCartDetails.cartDescription").pipe(filter(() => Boolean(cartDescription)), map((textTitle) => ({
      title: textTitle,
      text: [cartDescription]
    })));
  }
  getCartId(cartId) {
    return this.translation.translate("savedCartDetails.cartId").pipe(filter(() => Boolean(cartId)), map((textTitle) => ({
      title: textTitle,
      text: [cartId]
    })));
  }
  getDateSaved(saveTime) {
    return this.translation.translate("savedCartDetails.dateSaved").pipe(filter(() => Boolean(saveTime)), map((textTitle) => {
      return {
        title: textTitle,
        text: [saveTime ?? ""]
      };
    }));
  }
  getCartItems(totalItems) {
    return this.translation.translate("savedCartDetails.items").pipe(filter(() => Boolean(totalItems)), map((textTitle) => ({
      title: textTitle,
      text: [totalItems.toString()]
    })));
  }
  getCartQuantity(totalUnitCount) {
    return this.translation.translate("savedCartDetails.quantity").pipe(filter(() => Boolean(totalUnitCount)), map((textTitle) => ({
      title: textTitle,
      text: [totalUnitCount.toString()]
    })));
  }
  getCartTotal(totalPriceWithTax) {
    return this.translation.translate("savedCartDetails.total").pipe(filter(() => Boolean(totalPriceWithTax)), map((textTitle) => ({
      title: textTitle,
      text: [totalPriceWithTax]
    })));
  }
  openDialog(cart) {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.SAVED_CART, this.element, this.vcr, {
      cart,
      layoutOption: "edit"
    });
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function SavedCartDetailsOverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartDetailsOverviewComponent)(ɵɵdirectiveInject(SavedCartDetailsService), ɵɵdirectiveInject(TranslationService), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(LaunchDialogService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SavedCartDetailsOverviewComponent,
      selectors: [["cx-saved-cart-details-overview"]],
      viewQuery: function SavedCartDetailsOverviewComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.element = _t.first);
        }
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["element", ""], [4, "ngIf"], [1, "cx-cart-summary"], [1, "container"], [1, "cx-summary-card"], [1, "cx-edit-container"], [3, "content"], [1, "cx-edit-cart", 3, "click"], [3, "type"], [1, "cx-card-description"], [3, "content", "truncateText", "charactersLimit"]],
      template: function SavedCartDetailsOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SavedCartDetailsOverviewComponent_ng_container_0_Template, 29, 32, "ng-container", 1);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.savedCart$));
        }
      },
      dependencies: [NgIf, CardComponent, IconComponent, AsyncPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartDetailsOverviewComponent, [{
    type: Component,
    args: [{
      selector: "cx-saved-cart-details-overview",
      standalone: false,
      template: `<ng-container *ngIf="savedCart$ | async as cart">
  <div class="cx-cart-summary">
    <div class="container">
      <div class="cx-summary-card">
        <div class="cx-edit-container">
          <cx-card [content]="getCartName(cart?.name) | async"></cx-card>
          <button
            [attr.aria-label]="'savedCartDetails.editSavedCart' | cxTranslate"
            [attr.title]="'savedCartDetails.editSavedCart' | cxTranslate"
            class="cx-edit-cart"
            #element
            (click)="openDialog(cart)"
          >
            <cx-icon [type]="iconTypes.PENCIL"></cx-icon>
          </button>
        </div>
        <div class="cx-card-description">
          <cx-card
            [content]="getCartDescription(cart?.description) | async"
            [truncateText]="true"
            [charactersLimit]="30"
          ></cx-card>
        </div>
      </div>
      <div class="cx-summary-card">
        <cx-card [content]="getCartId(cart?.code) | async"></cx-card>
      </div>
      <div class="cx-summary-card">
        <cx-card
          [content]="getDateSaved(cart?.saveTime | cxDate) | async"
        ></cx-card>
        <cx-card [content]="getCartItems(cart?.totalItems) | async"></cx-card>
      </div>
      <div class="cx-summary-card">
        <cx-card
          [content]="getCartQuantity(cart?.totalUnitCount) | async"
        ></cx-card>
        <cx-card
          [content]="
            getCartTotal(cart?.totalPriceWithTax?.formattedValue) | async
          "
        ></cx-card>
      </div>
    </div>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: SavedCartDetailsService
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
var SavedCartDetailsModule = class _SavedCartDetailsModule {
  static {
    this.ɵfac = function SavedCartDetailsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartDetailsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SavedCartDetailsModule,
      declarations: [SavedCartDetailsOverviewComponent, SavedCartDetailsActionComponent, SavedCartDetailsItemsComponent],
      imports: [CommonModule, I18nModule, UrlModule, RouterModule, CardModule, MediaModule, IconModule, SpinnerModule, OutletModule, AddToCartModule, ConfigModule, FeaturesConfigModule],
      exports: [SavedCartDetailsOverviewComponent, SavedCartDetailsActionComponent, SavedCartDetailsItemsComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, I18nModule, UrlModule, RouterModule, CardModule, MediaModule, IconModule, SpinnerModule, OutletModule, AddToCartModule, ConfigModule.withConfig({
        cmsComponents: {
          SavedCartDetailsOverviewComponent: {
            component: SavedCartDetailsOverviewComponent,
            guards: [AuthGuard]
          },
          SavedCartDetailsItemsComponent: {
            component: SavedCartDetailsItemsComponent,
            guards: [AuthGuard]
          },
          SavedCartDetailsActionComponent: {
            component: SavedCartDetailsActionComponent,
            guards: [AuthGuard]
          }
        }
      }), FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartDetailsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, UrlModule, RouterModule, CardModule, MediaModule, IconModule, SpinnerModule, OutletModule, AddToCartModule, ConfigModule.withConfig({
        cmsComponents: {
          SavedCartDetailsOverviewComponent: {
            component: SavedCartDetailsOverviewComponent,
            guards: [AuthGuard]
          },
          SavedCartDetailsItemsComponent: {
            component: SavedCartDetailsItemsComponent,
            guards: [AuthGuard]
          },
          SavedCartDetailsActionComponent: {
            component: SavedCartDetailsActionComponent,
            guards: [AuthGuard]
          }
        }
      }), FeaturesConfigModule],
      declarations: [SavedCartDetailsOverviewComponent, SavedCartDetailsActionComponent, SavedCartDetailsItemsComponent],
      exports: [SavedCartDetailsOverviewComponent, SavedCartDetailsActionComponent, SavedCartDetailsItemsComponent]
    }]
  }], null, null);
})();
var SavedCartListComponent = class _SavedCartListComponent {
  constructor(routing, savedCartService, vcr, launchDialogService) {
    this.routing = routing;
    this.savedCartService = savedCartService;
    this.vcr = vcr;
    this.launchDialogService = launchDialogService;
    this.subscription = new Subscription();
    this.siteContextService = inject(SiteContextComponentService, {
      optional: true
    });
    this.savedCarts$ = this.savedCartService.getList().pipe(map((lists) => lists.sort((a, b) => {
      const date1 = a.saveTime ? new Date(a.saveTime).getTime() : (/* @__PURE__ */ new Date()).getTime();
      const date2 = b.saveTime ? new Date(b.saveTime).getTime() : (/* @__PURE__ */ new Date()).getTime();
      return date2 - date1;
    })));
    useFeatureStyles("a11yQTY2Quantity");
    useFeatureStyles("a11yHighContrastBorders");
  }
  ngOnInit() {
    this.isLoading$ = this.savedCartService.getSavedCartListProcessLoading();
    this.savedCartService.loadSavedCarts();
    this.observeAndReloadSavedCartOnContextChange();
  }
  goToSavedCartDetails(cart) {
    this.routing.go({
      cxRoute: "savedCartsDetails",
      params: {
        savedCartId: cart?.code
      }
    });
  }
  openDialog(event, cart) {
    const dialog = this.launchDialogService.openDialog(LAUNCH_CALLER.SAVED_CART, this.restoreButton, this.vcr, {
      cart,
      layoutOption: SavedCartFormType.RESTORE
    });
    if (dialog) {
      this.subscription.add(dialog.pipe(take(1)).subscribe());
    }
    event.stopPropagation();
  }
  observeAndReloadSavedCartOnContextChange() {
    if (this.siteContextService) {
      const contexts = Object.values(SiteContextType);
      const siteContextService = this.siteContextService;
      if (!contexts.length) {
        return;
      }
      this.subscription.add(from(contexts).pipe(mergeMap((context) => {
        return siteContextService.getActiveItem(context).pipe(skip(1));
      })).subscribe(() => {
        this.savedCartService.loadSavedCarts();
      }));
    }
  }
  ngOnDestroy() {
    this.savedCartService.clearSavedCarts();
    this.savedCartService.clearSaveCart();
    this.savedCartService.clearRestoreSavedCart();
    this.subscription?.unsubscribe();
  }
  static {
    this.ɵfac = function SavedCartListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartListComponent)(ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(SavedCartFacade), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(LaunchDialogService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SavedCartListComponent,
      selectors: [["cx-saved-cart-list"]],
      viewQuery: function SavedCartListComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.restoreButton = _t.first);
        }
      },
      standalone: false,
      decls: 2,
      vars: 3,
      consts: [["loading", ""], ["noSavedCarts", ""], ["element", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "cx-saved-cart-list-header"], ["role", "table", 1, "table", "cx-saved-cart-list-table"], ["role", "row", "class", "cx-saved-cart-list-thead-mobile", 4, "cxFeature"], ["role", "row", 3, "click", 4, "ngFor", "ngForOf"], ["role", "row", 1, "cx-saved-cart-list-thead-mobile"], ["role", "columnheader", "scope", "col"], ["role", "columnheader", "scope", "col", "class", "cx-saved-cart-list-th-qty", 4, "cxFeature"], ["role", "columnheader", "scope", "col", 1, "cx-saved-cart-list-th-total"], ["class", "cx-saved-cart-list-thead-mobile", 4, "cxFeature"], ["role", "columnheader", "scope", "col", 1, "cx-saved-cart-list-th-qty"], [1, "cx-saved-cart-list-thead-mobile"], ["scope", "col"], ["scope", "col", "class", "cx-saved-cart-list-th-qty", 4, "cxFeature"], ["scope", "col", 1, "cx-saved-cart-list-th-total"], ["scope", "col", 1, "cx-saved-cart-list-th-qty"], ["role", "row", 3, "click"], [1, "cx-saved-cart-list-cart-name"], [1, "cx-table-label-mobile", "cx-saved-cart-list-label"], [1, "cx-saved-cart-list-value", 3, "routerLink"], [1, "cx-saved-cart-list-cart-id"], [1, "cx-saved-cart-list-date-saved"], [1, "cx-saved-cart-list-quantity"], ["class", "cx-table-label-mobile cx-saved-cart-list-label", 4, "cxFeature"], [1, "cx-saved-cart-list-total"], [1, "cx-saved-cart-list-make-cart-active"], [1, "btn", "btn-tertiary", "cx-saved-cart-make-active", 3, "click"], [1, "cx-saved-cart-list-no-saved-carts", "row"], [1, "col-sm-12", "col-md-6", "col-lg-4"], [1, "cx-spinner"]],
      template: function SavedCartListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SavedCartListComponent_ng_container_0_Template, 5, 4, "ng-container", 3);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.savedCarts$));
        }
      },
      dependencies: [NgForOf, NgIf, RouterLink, SpinnerComponent, FeatureDirective, AsyncPipe, UrlPipe, TranslatePipe, CxDatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartListComponent, [{
    type: Component,
    args: [{
      selector: "cx-saved-cart-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="savedCarts$ | async as savedCarts">
  <ng-container *ngIf="!(isLoading$ | async); else loading">
    <div class="cx-saved-cart-list-header">
      <h2>
        {{
          'savedCartList.savedCarts' | cxTranslate: { count: savedCarts.length }
        }}
      </h2>
    </div>

    <ng-container *ngIf="savedCarts?.length > 0; else noSavedCarts">
      <table role="table" class="table cx-saved-cart-list-table">
        <thead
          *cxFeature="'!a11yTableHeaderReadout'"
          role="row"
          class="cx-saved-cart-list-thead-mobile"
        >
          <thead role="row" class="cx-saved-cart-list-thead-mobile">
            <th role="columnheader" scope="col">
              {{ 'savedCartList.cartName' | cxTranslate }}
            </th>
            <th role="columnheader" scope="col">
              {{ 'savedCartList.cartId' | cxTranslate }}
            </th>
            <th role="columnheader" scope="col">
              {{ 'savedCartList.dateSaved' | cxTranslate }}
            </th>
            <th
              *cxFeature="'a11yQTY2Quantity'"
              role="columnheader"
              scope="col"
              class="cx-saved-cart-list-th-qty"
            >
              {{ 'savedCartList.quantityFull' | cxTranslate }}
            </th>
            <th
              *cxFeature="'!a11yQTY2Quantity'"
              role="columnheader"
              scope="col"
              class="cx-saved-cart-list-th-qty"
            >
              {{ 'savedCartList.quantity' | cxTranslate }}
            </th>
            <th
              role="columnheader"
              scope="col"
              class="cx-saved-cart-list-th-total"
            >
              {{ 'savedCartList.total' | cxTranslate }}
            </th>
            <th role="columnheader" scope="col">
              {{ 'savedCartList.actions' | cxTranslate }}
            </th>
          </thead>
          <thead
            *cxFeature="'a11yTableHeaderReadout'"
            class="cx-saved-cart-list-thead-mobile"
          >
            <tr>
              <th scope="col">
                {{ 'savedCartList.cartName' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'savedCartList.cartId' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'savedCartList.dateSaved' | cxTranslate }}
              </th>
              <th
                *cxFeature="'a11yQTY2Quantity'"
                scope="col"
                class="cx-saved-cart-list-th-qty"
              >
                {{ 'savedCartList.quantityFull' | cxTranslate }}
              </th>
              <th
                *cxFeature="'!a11yQTY2Quantity'"
                scope="col"
                class="cx-saved-cart-list-th-qty"
              >
                {{ 'savedCartList.quantity' | cxTranslate }}
              </th>
              <th scope="col" class="cx-saved-cart-list-th-total">
                {{ 'savedCartList.total' | cxTranslate }}
              </th>
              <th scope="col">
                {{ 'savedCartList.actions' | cxTranslate }}
              </th>
            </tr>
          </thead>
        </thead>
        <tbody>
          <tr
            role="row"
            *ngFor="let savedCart of savedCarts"
            (click)="goToSavedCartDetails(savedCart)"
          >
            <td class="cx-saved-cart-list-cart-name">
              <div class="cx-table-label-mobile cx-saved-cart-list-label">
                {{ 'savedCartList.cartName' | cxTranslate }}
              </div>
              <a
                [routerLink]="
                  {
                    cxRoute: 'savedCartsDetails',
                    params: { savedCartId: savedCart?.code },
                  } | cxUrl
                "
                class="cx-saved-cart-list-value"
              >
                {{ savedCart?.name }}</a
              >
            </td>
            <td class="cx-saved-cart-list-cart-id">
              <div class="cx-table-label-mobile cx-saved-cart-list-label">
                {{ 'savedCartList.cartId' | cxTranslate }}
              </div>
              <a
                [routerLink]="
                  {
                    cxRoute: 'savedCartsDetails',
                    params: { savedCartId: savedCart?.code },
                  } | cxUrl
                "
                class="cx-saved-cart-list-value"
                >{{ savedCart?.code }}</a
              >
            </td>
            <td class="cx-saved-cart-list-date-saved">
              <div class="cx-table-label-mobile cx-saved-cart-list-label">
                {{ 'savedCartList.dateSaved' | cxTranslate }}
              </div>
              <a
                [routerLink]="
                  {
                    cxRoute: 'savedCartsDetails',
                    params: { savedCartId: savedCart?.code },
                  } | cxUrl
                "
                class="cx-saved-cart-list-value"
                >{{ savedCart?.saveTime | cxDate: 'longDate' }}</a
              >
            </td>
            <td class="cx-saved-cart-list-quantity">
              <div
                *cxFeature="'a11yQTY2Quantity'"
                class="cx-table-label-mobile cx-saved-cart-list-label"
              >
                {{ 'savedCartList.quantityFull' | cxTranslate }}
              </div>
              <div
                *cxFeature="'!a11yQTY2Quantity'"
                class="cx-table-label-mobile cx-saved-cart-list-label"
              >
                {{ 'savedCartList.quantity' | cxTranslate }}
              </div>
              <a
                [routerLink]="
                  {
                    cxRoute: 'savedCartsDetails',
                    params: { savedCartId: savedCart?.code },
                  } | cxUrl
                "
                class="cx-saved-cart-list-value"
              >
                {{ savedCart?.totalUnitCount }}</a
              >
            </td>
            <td class="cx-saved-cart-list-total">
              <div class="cx-table-label-mobile cx-saved-cart-list-label">
                {{ 'savedCartList.total' | cxTranslate }}
              </div>
              <a
                [routerLink]="
                  {
                    cxRoute: 'savedCartsDetails',
                    params: { savedCartId: savedCart?.code },
                  } | cxUrl
                "
                class="cx-saved-cart-list-value"
              >
                {{ savedCart?.totalPrice?.formattedValue }}</a
              >
            </td>
            <td class="cx-saved-cart-list-make-cart-active">
              <div class="cx-table-label-mobile cx-saved-cart-list-label">
                {{ 'savedCartList.actions' | cxTranslate }}
              </div>
              <button
                #element
                class="btn btn-tertiary cx-saved-cart-make-active"
                (click)="openDialog($event, savedCart)"
              >
                {{ 'savedCartList.makeCartActive' | cxTranslate }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </ng-container>

    <!-- NO SAVED CART CONTAINER -->
    <ng-template #noSavedCarts>
      <div class="cx-saved-cart-list-no-saved-carts row">
        <div class="col-sm-12 col-md-6 col-lg-4">
          <div>{{ 'savedCartList.notFound' | cxTranslate }}</div>
        </div>
      </div>
    </ng-template>
  </ng-container>

  <ng-template #loading>
    <div class="cx-spinner">
      <cx-spinner></cx-spinner>
    </div>
  </ng-template>
</ng-container>
`
    }]
  }], () => [{
    type: RoutingService
  }, {
    type: SavedCartFacade
  }, {
    type: ViewContainerRef
  }, {
    type: LaunchDialogService
  }], {
    restoreButton: [{
      type: ViewChild,
      args: ["element"]
    }]
  });
})();
var SavedCartListModule = class _SavedCartListModule {
  static {
    this.ɵfac = function SavedCartListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SavedCartListModule,
      declarations: [SavedCartListComponent],
      imports: [CommonModule, UrlModule, RouterModule, ListNavigationModule, I18nModule, SpinnerModule, FeaturesConfigModule],
      exports: [SavedCartListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountSavedCartHistoryComponent: {
            component: SavedCartListComponent,
            guards: [AuthGuard]
          }
        }
      })],
      imports: [CommonModule, UrlModule, RouterModule, ListNavigationModule, I18nModule, SpinnerModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, UrlModule, RouterModule, ListNavigationModule, I18nModule, SpinnerModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AccountSavedCartHistoryComponent: {
            component: SavedCartListComponent,
            guards: [AuthGuard]
          }
        }
      })],
      declarations: [SavedCartListComponent],
      exports: [SavedCartListComponent]
    }]
  }], null, null);
})();
var SavedCartOrderEntriesContext = class _SavedCartOrderEntriesContext {
  constructor(importInfoService, userIdService, multiCartService, savedCartService, routingService) {
    this.importInfoService = importInfoService;
    this.userIdService = userIdService;
    this.multiCartService = multiCartService;
    this.savedCartService = savedCartService;
    this.routingService = routingService;
    this.type = OrderEntriesSource.SAVED_CART;
    this.savedCartId$ = this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params.savedCartId), distinctUntilChanged());
  }
  addEntries(products) {
    return this.add(products).pipe(switchMap((cartId) => this.importInfoService.getResults(cartId)), take(products.length));
  }
  getEntries() {
    return this.savedCartId$.pipe(switchMap((cartId) => this.savedCartService.get(cartId)), map((cart) => cart?.entries ?? []));
  }
  add(products) {
    return combineLatest([this.userIdService.takeUserId(), this.savedCartId$]).pipe(tap(([userId, cartId]) => this.multiCartService.addEntries(userId, cartId, products)), map(([_userId, cartId]) => cartId));
  }
  static {
    this.ɵfac = function SavedCartOrderEntriesContext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartOrderEntriesContext)(ɵɵinject(ProductImportInfoService), ɵɵinject(UserIdService), ɵɵinject(MultiCartFacade), ɵɵinject(SavedCartFacade), ɵɵinject(RoutingService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SavedCartOrderEntriesContext,
      factory: _SavedCartOrderEntriesContext.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductImportInfoService
  }, {
    type: UserIdService
  }, {
    type: MultiCartFacade
  }, {
    type: SavedCartFacade
  }, {
    type: RoutingService
  }], null);
})();
var NewSavedCartOrderEntriesContext = class _NewSavedCartOrderEntriesContext {
  constructor(importInfoService, userIdService, multiCartService, savedCartService) {
    this.importInfoService = importInfoService;
    this.userIdService = userIdService;
    this.multiCartService = multiCartService;
    this.savedCartService = savedCartService;
    this.type = OrderEntriesSource.NEW_SAVED_CART;
  }
  addEntries(products, savedCartInfo) {
    return this.add(products, savedCartInfo).pipe(tap((cartId) => {
      this.importInfoService.getResults(cartId).pipe(take(products.length), every((productInfo) => productInfo.statusCode === ProductImportStatus.UNKNOWN_IDENTIFIER || productInfo.statusCode === ProductImportStatus.UNKNOWN_ERROR)).subscribe((isInvalid) => {
        if (isInvalid) {
          this.savedCartService.deleteSavedCart(cartId);
        }
      });
    }), switchMap((cartId) => this.importInfoService.getResults(cartId)), take(products.length));
  }
  add(products, savedCartInfo) {
    return this.userIdService.takeUserId().pipe(switchMap((userId) => this.multiCartService.createCart({
      userId,
      extraData: {
        active: false
      }
    }).pipe(map((cart) => cart.code), tap((cartId) => {
      this.savedCartService.saveCart({
        cartId,
        saveCartName: savedCartInfo?.name,
        saveCartDescription: savedCartInfo?.description
      });
      this.savedCartService.loadSavedCarts();
    }), observeOn(queueScheduler), debounce(() => this.savedCartService.getSaveCartProcessLoading().pipe(filter((loading) => !loading))), tap((cartId) => this.multiCartService.addEntries(userId, cartId, products)))));
  }
  static {
    this.ɵfac = function NewSavedCartOrderEntriesContext_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewSavedCartOrderEntriesContext)(ɵɵinject(ProductImportInfoService), ɵɵinject(UserIdService), ɵɵinject(MultiCartFacade), ɵɵinject(SavedCartFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _NewSavedCartOrderEntriesContext,
      factory: _NewSavedCartOrderEntriesContext.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewSavedCartOrderEntriesContext, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ProductImportInfoService
  }, {
    type: UserIdService
  }, {
    type: MultiCartFacade
  }, {
    type: SavedCartFacade
  }], null);
})();
var SavedCartFormDialogComponent = class _SavedCartFormDialogComponent {
  get descriptionsCharacterLeft() {
    return this.descriptionMaxLength - (this.form.get("description")?.value?.length || 0);
  }
  handleClick(event) {
    if (event.target.tagName === this.el.nativeElement.tagName) {
      this.close("Cross click");
    }
  }
  constructor(launchDialogService, el, savedCartService, eventService, routingService, globalMessageService) {
    this.launchDialogService = launchDialogService;
    this.el = el;
    this.savedCartService = savedCartService;
    this.eventService = eventService;
    this.routingService = routingService;
    this.globalMessageService = globalMessageService;
    this.subscription = new Subscription();
    this.savedCartFormType = SavedCartFormType;
    this.iconTypes = ICON_TYPE;
    this.descriptionMaxLength = 250;
    this.nameMaxLength = 50;
    this.isCloneSavedCart = false;
    this.focusConfig = {
      trap: true,
      block: true,
      autofocus: "button",
      focusOnEscape: true
    };
    useFeatureStyles("a11yQTY2Quantity");
  }
  ngOnInit() {
    this.resetSavedCartStates();
    this.isLoading$ = this.savedCartService.getSaveCartProcessLoading();
    this.isDisableDeleteButton$ = merge(this.eventService.get(DeleteCartEvent).pipe(take(1), map(() => true)), this.eventService.get(DeleteCartFailEvent).pipe(take(1), map(() => false)));
    this.isDisableRestoreButton$ = combineLatest([this.savedCartService.getCloneSavedCartProcessLoading(), this.savedCartService.getRestoreSavedCartProcessLoading()]).pipe(map(([isCloneLoading, isRestoreLoading]) => isCloneLoading || isRestoreLoading));
    this.subscription.add(this.launchDialogService.data$.subscribe((data) => {
      this.cart = data.cart;
      this.layoutOption = data.layoutOption;
      this.build(this.cart);
    }));
    this.subscription.add(this.savedCartService.getSaveCartProcessSuccess().subscribe((success) => this.onComplete(success)));
    this.subscription.add(this.eventService.get(DeleteCartSuccessEvent).pipe(take(1), map(() => true)).subscribe((success) => this.onComplete(success)));
    this.subscription.add(this.savedCartService.getRestoreSavedCartProcessSuccess().subscribe((success) => this.onComplete(success)));
  }
  saveOrEditCart(cartId) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      FormUtils.deepUpdateValueAndValidity(this.form);
    } else {
      const name = this.form.get("name")?.value;
      const description = this.form.get("description")?.value || "-";
      switch (this.layoutOption) {
        case SavedCartFormType.SAVE: {
          this.savedCartService.saveCart({
            cartId,
            saveCartName: name,
            saveCartDescription: description
          });
          break;
        }
        case SavedCartFormType.EDIT: {
          this.savedCartService.editSavedCart({
            cartId,
            saveCartName: name,
            saveCartDescription: description
          });
          break;
        }
      }
    }
  }
  deleteCart(cartId) {
    this.savedCartService.deleteSavedCart(cartId);
  }
  restoreSavedCart(cartId) {
    if (this.isCloneSavedCart) {
      this.savedCartService.cloneSavedCart(cartId, this.form.get("cloneName")?.value);
    } else {
      this.savedCartService.restoreSavedCart(cartId);
    }
  }
  close(reason) {
    this.launchDialogService.closeDialog(reason);
  }
  onComplete(success) {
    if (success) {
      switch (this.layoutOption) {
        case SavedCartFormType.DELETE: {
          this.routingService.go({
            cxRoute: "savedCarts"
          });
          this.globalMessageService.add({
            key: "savedCartDialog.deleteCartSuccess"
          }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
          this.close("Successfully deleted a saved cart");
          break;
        }
        case SavedCartFormType.SAVE: {
          this.close("Successfully saved cart");
          this.savedCartService.clearSaveCart();
          this.globalMessageService.add({
            key: "savedCartCartPage.messages.cartSaved",
            params: {
              cartName: this.form.get("name")?.value || this.cart?.code
            }
          }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
          break;
        }
        case SavedCartFormType.EDIT: {
          this.close("Successfully edited saved cart");
          this.savedCartService.clearSaveCart();
          this.globalMessageService.add({
            key: "savedCartDialog.editCartSuccess",
            params: {
              cartName: this.form.get("name")?.value || this.cart?.code
            }
          }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
          break;
        }
        case SavedCartFormType.RESTORE: {
          this.close("Successfully restored saved cart");
          this.routingService.go({
            cxRoute: "savedCarts"
          });
          this.resetSavedCartStates();
          break;
        }
      }
    }
  }
  toggleIsCloneSavedCart() {
    return this.isCloneSavedCart = !this.isCloneSavedCart;
  }
  build(cart) {
    const form = new UntypedFormGroup({});
    form.setControl("name", new UntypedFormControl("", [Validators.required, Validators.maxLength(this.nameMaxLength)]));
    form.setControl("description", new UntypedFormControl("", [Validators.maxLength(this.descriptionMaxLength)]));
    form.setControl("isCloneSavedCart", new UntypedFormControl(""));
    form.setControl("cloneName", new UntypedFormControl(""));
    this.form = form;
    this.patchData(cart);
  }
  patchData(item) {
    this.form.patchValue(__spreadValues({}, item));
  }
  resetSavedCartStates() {
    this.savedCartService.clearCloneSavedCart();
    this.savedCartService.clearSaveCart();
    this.savedCartService.clearRestoreSavedCart();
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.close("close dialog");
  }
  static {
    this.ɵfac = function SavedCartFormDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartFormDialogComponent)(ɵɵdirectiveInject(LaunchDialogService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(SavedCartFacade), ɵɵdirectiveInject(EventService), ɵɵdirectiveInject(RoutingService), ɵɵdirectiveInject(GlobalMessageService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _SavedCartFormDialogComponent,
      selectors: [["cx-saved-cart-form-dialog"]],
      hostBindings: function SavedCartFormDialogComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          ɵɵlistener("click", function SavedCartFormDialogComponent_click_HostBindingHandler($event) {
            return ctx.handleClick($event);
          });
        }
      },
      standalone: false,
      decls: 1,
      vars: 1,
      consts: [["saveAndEditCart", ""], ["isRestoreSavedCart", ""], [4, "ngIf"], ["role", "dialog", "aria-labelledby", "dialogTitle", 1, "modal-dialog", "modal-dialog-centered", "cx-saved-cart-form-dialog", 3, "esc", "cxFocus"], [1, "modal-content", "cx-saved-cart-form-container", 3, "formGroup"], [1, "modal-header", "cx-saved-cart-form-header"], [3, "ngSwitch"], ["id", "dialogTitle", 1, "cx-saved-cart-form-title", "modal-title"], [4, "ngSwitchCase"], ["type", "button", 1, "cx-saved-cart-form-close", "close", 3, "click", "disabled", "title"], ["aria-hidden", "true"], [3, "type"], [1, "modal-body", "cx-saved-cart-form-body"], [4, "ngIf", "ngIfElse"], [1, "cx-saved-cart-form-subtitle"], [1, "cx-saved-cart-form-row"], [1, "cx-saved-cart-values-container"], [1, "cx-saved-cart-label"], [1, "cx-saved-cart-value"], ["class", "cx-saved-cart-label", 4, "cxFeature"], [1, "cx-saved-cart-form-footer"], ["type", "button", 1, "mr-2", "btn", "btn-secondary", 3, "click"], [1, "cx-copy-saved-cart-row", "form-check"], ["id", "cx-copy-saved-cart", "type", "checkbox", 1, "cx-copy-saved-cart-input", 3, "change", "checked"], ["for", "cx-copy-saved-cart", 1, "cx-copy-saved-cart-label"], ["class", "cx-copy-saved-cart-row", 4, "ngIf"], [1, "cx-copy-saved-cart-row"], [1, "label-content"], ["formControlName", "cloneName", "type", "text", 1, "form-control", 3, "maxLength", "placeholder"], ["class", "ml-2 btn btn-primary", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["type", "button", 1, "ml-2", "btn", "btn-primary", 3, "click", "disabled"], [1, "cx-saved-carts-label", "label-content"], ["required", "true", "formControlName", "name", "required", "", "type", "text", 1, "form-control", 3, "maxLength"], ["id", "nameError", 3, "translationParams", "control"], [1, "cx-saved-carts-label-optional"], ["formControlName", "description", "rows", "5", 1, "form-control", 3, "maxLength"], ["id", "descriptionError", 3, "translationParams", "control"], [1, "cx-saved-carts-input-hint"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"]],
      template: function SavedCartFormDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, SavedCartFormDialogComponent_ng_container_0_Template, 20, 19, "ng-container", 2);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ctx.cart);
        }
      },
      dependencies: [NgIf, NgSwitch, NgSwitchCase, ɵNgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, FormGroupDirective, FormControlName, FormErrorsComponent, IconComponent, FocusDirective, FeatureDirective, FormRequiredAsterisksComponent, FormRequiredLegendComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartFormDialogComponent, [{
    type: Component,
    args: [{
      selector: "cx-saved-cart-form-dialog",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="cart">
  <div
    [cxFocus]="focusConfig"
    (esc)="close('Escape clicked')"
    class="modal-dialog modal-dialog-centered cx-saved-cart-form-dialog"
    role="dialog"
    aria-labelledby="dialogTitle"
  >
    <form [formGroup]="form" class="modal-content cx-saved-cart-form-container">
      <!-- Modal Header -->
      <div class="modal-header cx-saved-cart-form-header">
        <ng-container [ngSwitch]="layoutOption">
          <h3 id="dialogTitle" class="cx-saved-cart-form-title modal-title">
            <ng-container *ngSwitchCase="savedCartFormType.EDIT">
              {{ 'savedCartDialog.editSavedCart' | cxTranslate }}
            </ng-container>
            <ng-container *ngSwitchCase="savedCartFormType.DELETE">
              {{ 'savedCartDialog.deleteSavedCart' | cxTranslate }}
            </ng-container>
            <ng-container *ngSwitchCase="savedCartFormType.SAVE">
              {{ 'savedCartDialog.saveForLater' | cxTranslate }}
            </ng-container>
            <ng-container *ngSwitchCase="savedCartFormType.RESTORE">
              {{ 'savedCartDialog.restoreSavedCart' | cxTranslate }}
            </ng-container>
          </h3>
        </ng-container>

        <button
          (click)="close('Close Save Cart Dialog')"
          [disabled]="isLoading$ | async"
          class="cx-saved-cart-form-close close"
          type="button"
          title="{{ 'common.close' | cxTranslate }}"
          [attr.aria-label]="'common.close' | cxTranslate"
        >
          <span aria-hidden="true">
            <cx-icon [type]="iconTypes.CLOSE"></cx-icon>
          </span>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body cx-saved-cart-form-body">
        <!-- start DELETE and RESTORE form -->
        <ng-container
          *ngIf="
            layoutOption === savedCartFormType.DELETE ||
              layoutOption === savedCartFormType.RESTORE;
            else saveAndEditCart
          "
        >
          <p class="cx-saved-cart-form-subtitle">
            {{
              (layoutOption === savedCartFormType.DELETE
                ? 'savedCartDialog.followingCartDelete'
                : 'savedCartDialog.followingCartRestore'
              ) | cxTranslate
            }}
          </p>

          <div class="cx-saved-cart-form-row">
            <div class="cx-saved-cart-values-container">
              <div class="cx-saved-cart-label">
                {{ 'savedCartDialog.name' | cxTranslate }}
              </div>
              <div class="cx-saved-cart-value">
                {{ cart?.name }}
              </div>
            </div>

            <div class="cx-saved-cart-values-container">
              <div class="cx-saved-cart-label">
                {{ 'savedCartDialog.id' | cxTranslate }}
              </div>
              <div class="cx-saved-cart-value">
                {{ cart?.code }}
              </div>
            </div>

            <div class="cx-saved-cart-values-container">
              <div class="cx-saved-cart-label">
                {{ 'savedCartDialog.description' | cxTranslate }}
              </div>
              <div class="cx-saved-cart-value">
                {{ cart?.description }}
              </div>
            </div>

            <div class="cx-saved-cart-values-container">
              <div *cxFeature="'a11yQTY2Quantity'" class="cx-saved-cart-label">
                {{ 'savedCartDialog.quantityFull' | cxTranslate }}
              </div>
              <div *cxFeature="'!a11yQTY2Quantity'" class="cx-saved-cart-label">
                {{ 'savedCartDialog.quantity' | cxTranslate }}
              </div>
              <div class="cx-saved-cart-value">
                {{ cart?.totalUnitCount }}
              </div>
            </div>

            <div class="cx-saved-cart-values-container">
              <div class="cx-saved-cart-label">
                {{ 'savedCartDialog.total' | cxTranslate }}
              </div>
              <div class="cx-saved-cart-value">
                {{ cart?.totalPriceWithTax?.formattedValue }}
              </div>
            </div>
          </div>

          <ng-container *ngIf="layoutOption === savedCartFormType.RESTORE">
            <div class="cx-copy-saved-cart-row form-check">
              <input
                id="cx-copy-saved-cart"
                type="checkbox"
                class="cx-copy-saved-cart-input"
                [checked]="isCloneSavedCart"
                (change)="toggleIsCloneSavedCart()"
              />
              <label
                for="cx-copy-saved-cart"
                class="cx-copy-saved-cart-label"
                >{{ 'savedCartDialog.keepCopySavedCart' | cxTranslate }}</label
              >
            </div>

            <div *ngIf="isCloneSavedCart" class="cx-copy-saved-cart-row">
              <label>
                <span class="label-content">
                  {{ 'savedCartDialog.nameOfCloneCart' | cxTranslate }}
                </span>

                <input
                  [maxLength]="nameMaxLength"
                  class="form-control"
                  formControlName="cloneName"
                  type="text"
                  placeholder="{{
                    'savedCartDialog.defaultCloneCartName'
                      | cxTranslate: { name: form.get('name')?.value }
                  }}"
                />
              </label>
            </div>
          </ng-container>

          <div class="cx-saved-cart-form-footer">
            <button
              (click)="close('Close Save Cart Dialog')"
              class="mr-2 btn btn-secondary"
              type="button"
            >
              {{ 'savedCartDialog.cancel' | cxTranslate }}
            </button>

            <ng-container
              *ngIf="
                layoutOption === savedCartFormType.DELETE;
                else isRestoreSavedCart
              "
            >
              <button
                *ngIf="cart.code"
                (click)="deleteCart(cart.code)"
                [disabled]="isDisableDeleteButton$ | async"
                class="ml-2 btn btn-primary"
                type="button"
              >
                {{ 'savedCartDialog.delete' | cxTranslate }}
              </button>
            </ng-container>

            <ng-template #isRestoreSavedCart>
              <button
                *ngIf="cart.code"
                (click)="restoreSavedCart(cart.code)"
                [disabled]="isDisableRestoreButton$ | async"
                class="ml-2 btn btn-primary"
                type="button"
              >
                {{ 'savedCartDialog.restore' | cxTranslate }}
              </button>
            </ng-template>
          </div>
        </ng-container>
        <!-- end DELETE form -->

        <!-- start SAVE and EDIT form -->
        <ng-template #saveAndEditCart>
          <ng-container *ngIf="layoutOption === savedCartFormType.SAVE">
            <p class="cx-saved-cart-form-subtitle">
              {{ 'savedCartDialog.itemsSavedForLater' | cxTranslate }}
            </p>
            <cx-form-required-legend />
          </ng-container>

          <div class="cx-saved-cart-form-row">
            <ng-container>
              <label>
                <span class="cx-saved-carts-label label-content"
                  >{{ 'savedCartDialog.savedCartName' | cxTranslate }}
                  <cx-form-required-asterisks />
                </span>
                <input
                  required="true"
                  [maxLength]="nameMaxLength"
                  class="form-control"
                  [attr.aria-invalid]="
                    form.get('name')?.touched && form.get('name')?.invalid
                  "
                  [attr.aria-errormessage]="'nameError'"
                  formControlName="name"
                  required
                  type="text"
                />

                <cx-form-errors
                  id="nameError"
                  [translationParams]="{
                    label: 'savedCartDialog.savedCartName' | cxTranslate,
                  }"
                  [control]="form.get('name')"
                ></cx-form-errors>
              </label>
            </ng-container>
          </div>

          <div class="cx-saved-cart-form-row">
            <label>
              <span class="cx-saved-carts-label label-content"
                >{{ 'savedCartDialog.savedCartDescription' | cxTranslate }}
                <span class="cx-saved-carts-label-optional">
                  ({{ 'savedCartDialog.optional' | cxTranslate }})
                </span></span
              >
              <textarea
                [maxLength]="descriptionMaxLength"
                class="form-control"
                [attr.aria-invalid]="
                  form.get('description')?.touched &&
                  form.get('description')?.invalid
                "
                [attr.aria-errormessage]="'descriptionError'"
                formControlName="description"
                rows="5"
              ></textarea>

              <cx-form-errors
                id="descriptionError"
                [translationParams]="{
                  label: 'savedCartDialog.savedCartDescription' | cxTranslate,
                }"
                [control]="form.get('description')"
              ></cx-form-errors>

              <p class="cx-saved-carts-input-hint">
                {{
                  'savedCartDialog.charactersLeft'
                    | cxTranslate: { count: descriptionsCharacterLeft }
                }}
              </p>
            </label>
          </div>
          <div class="cx-saved-cart-form-footer">
            <button
              (click)="close('Close Save Cart Dialog')"
              [disabled]="isLoading$ | async"
              class="btn btn-secondary"
              type="button"
            >
              {{ 'savedCartDialog.cancel' | cxTranslate }}
            </button>
            <button
              (click)="saveOrEditCart(cart?.code)"
              [disabled]="isLoading$ | async"
              class="btn btn-primary"
              type="button"
            >
              {{ 'savedCartDialog.save' | cxTranslate }}
            </button>
          </div>
        </ng-template>
        <!-- end SAVE and EDIT form -->
      </div>
    </form>
  </div>
</ng-container>
`
    }]
  }], () => [{
    type: LaunchDialogService
  }, {
    type: ElementRef
  }, {
    type: SavedCartFacade
  }, {
    type: EventService
  }, {
    type: RoutingService
  }, {
    type: GlobalMessageService
  }], {
    handleClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var defaultSavedCartFormLayoutConfig = {
  launch: {
    SAVED_CART: {
      inline: true,
      component: SavedCartFormDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG
    }
  }
};
var SavedCartFormDialogModule = class _SavedCartFormDialogModule {
  static {
    this.ɵfac = function SavedCartFormDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartFormDialogModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SavedCartFormDialogModule,
      declarations: [SavedCartFormDialogComponent],
      imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorsModule, I18nModule, IconModule, KeyboardFocusModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      exports: [SavedCartFormDialogComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorsModule, I18nModule, IconModule, KeyboardFocusModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartFormDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, ReactiveFormsModule, FormErrorsModule, I18nModule, IconModule, KeyboardFocusModule, FeaturesConfigModule, FormRequiredAsterisksComponent, FormRequiredLegendComponent],
      declarations: [SavedCartFormDialogComponent],
      exports: [SavedCartFormDialogComponent]
    }]
  }], null, null);
})();
var SavedCartComponentsModule = class _SavedCartComponentsModule {
  static {
    this.ɵfac = function SavedCartComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SavedCartComponentsModule,
      imports: [RouterModule, AddToSavedCartModule, SavedCartFormDialogModule, SavedCartListModule, SavedCartDetailsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [{
        provide: SavedCartOrderEntriesContextToken,
        useExisting: SavedCartOrderEntriesContext
      }, {
        provide: NewSavedCartOrderEntriesContextToken,
        useExisting: NewSavedCartOrderEntriesContext
      }, provideDefaultConfig(defaultSavedCartFormLayoutConfig)],
      imports: [RouterModule, AddToSavedCartModule, SavedCartFormDialogModule, SavedCartListModule, SavedCartDetailsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, AddToSavedCartModule, SavedCartFormDialogModule, SavedCartListModule, SavedCartDetailsModule],
      providers: [{
        provide: SavedCartOrderEntriesContextToken,
        useExisting: SavedCartOrderEntriesContext
      }, {
        provide: NewSavedCartOrderEntriesContextToken,
        useExisting: NewSavedCartOrderEntriesContext
      }, provideDefaultConfig(defaultSavedCartFormLayoutConfig)]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-saved-cart-core.mjs
var SavedCartAdapter = class {
};
var SavedCartConnector = class _SavedCartConnector {
  constructor(adapter) {
    this.adapter = adapter;
  }
  get(userId, cartId) {
    return this.adapter.load(userId, cartId);
  }
  getList(userId) {
    return this.adapter.loadList(userId);
  }
  restoreSavedCart(userId, cartId) {
    return this.adapter.restoreSavedCart(userId, cartId);
  }
  cloneSavedCart(userId, cartId, saveCartName) {
    return this.adapter.cloneSavedCart(userId, cartId, saveCartName);
  }
  static {
    this.ɵfac = function SavedCartConnector_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartConnector)(ɵɵinject(SavedCartAdapter));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SavedCartConnector,
      factory: _SavedCartConnector.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartConnector, [{
    type: Injectable
  }], () => [{
    type: SavedCartAdapter
  }], null);
})();
var SAVED_CART_LIST_PROCESS_ID = "saved-cart-list";
var SAVED_CART_RESTORE_CART_PROCESS_ID = "saved-cart-restore-cart";
var SAVED_CART_SAVE_CART_PROCESS_ID = "saved-cart-save-cart";
var SAVED_CART_CLONE_CART_PROCESS_ID = "saved-cart-clone-cart";
var LOAD_SAVED_CART = "[Saved Cart] Load Saved Cart";
var LOAD_SAVED_CART_SUCCESS = "[Saved Cart] Load Saved Cart Success";
var LOAD_SAVED_CART_FAIL = "[Saved Cart] Load Saved Cart Fail";
var LOAD_SAVED_CARTS = "[Saved Cart] Load Saved Carts";
var LOAD_SAVED_CARTS_SUCCESS = "[Saved Cart] Load Saved Carts Success";
var LOAD_SAVED_CARTS_FAIL = "[Saved Cart] Load Saved Carts Fail";
var CLEAR_SAVED_CARTS = "[Saved Cart] Clear Saved Carts";
var RESTORE_SAVED_CART = "[Saved Cart] Restore Saved Cart";
var RESTORE_SAVED_CART_SUCCESS = "[Saved Cart] Restore Saved Cart Success";
var RESTORE_SAVED_CART_FAIL = "[Saved Cart] Restore Saved Cart Fail";
var CLEAR_RESTORE_SAVED_CART = "[Saved Cart] Clear Restore Saved Cart";
var SAVE_CART = "[Saved Cart] Save Cart";
var SAVE_CART_SUCCESS = "[Saved Cart] Save Cart Success";
var SAVE_CART_FAIL = "[Saved Cart] Save Cart Fail";
var CLEAR_SAVE_CART = "[Saved Cart] Clear Save Cart";
var EDIT_SAVED_CART = "[Saved Cart] Edit Saved Cart";
var EDIT_SAVED_CART_SUCCESS = "[Saved Cart] Edit Saved Cart Success";
var EDIT_SAVED_CART_FAIL = "[Saved Cart] Edit Saved Cart Fail";
var CLONE_SAVED_CART = "[Saved Cart] Clone Saved Cart";
var CLONE_SAVED_CART_SUCCESS = "[Saved Cart] Clone Saved Cart Success";
var CLONE_SAVED_CART_FAIL = "[Saved Cart] Clone Saved Cart Fail";
var CLEAR_CLONE_SAVED_CART = "[Saved Cart] Clear Clone Saved Cart";
var LoadSavedCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = LOAD_SAVED_CART;
  }
};
var LoadSavedCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = LOAD_SAVED_CART_SUCCESS;
  }
};
var LoadSavedCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId, payload?.error);
    this.payload = payload;
    this.type = LOAD_SAVED_CART_FAIL;
  }
};
var LoadSavedCarts = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_LIST_PROCESS_ID);
    this.payload = payload;
    this.type = LOAD_SAVED_CARTS;
  }
};
var LoadSavedCartsSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_LIST_PROCESS_ID);
    this.payload = payload;
    this.type = LOAD_SAVED_CARTS_SUCCESS;
  }
};
var LoadSavedCartsFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_LIST_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = LOAD_SAVED_CARTS_FAIL;
  }
};
var ClearSavedCarts = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, SAVED_CART_LIST_PROCESS_ID);
    this.type = CLEAR_SAVED_CARTS;
  }
};
var RestoreSavedCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_RESTORE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = RESTORE_SAVED_CART;
  }
};
var RestoreSavedCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_RESTORE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = RESTORE_SAVED_CART_SUCCESS;
  }
};
var RestoreSavedCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_RESTORE_CART_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = RESTORE_SAVED_CART_FAIL;
  }
};
var ClearRestoreSavedCart = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, SAVED_CART_RESTORE_CART_PROCESS_ID);
    this.type = CLEAR_RESTORE_SAVED_CART;
  }
};
var SaveCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = SAVE_CART;
  }
};
var SaveCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = SAVE_CART_SUCCESS;
  }
};
var SaveCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = SAVE_CART_FAIL;
  }
};
var ClearSaveCart = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID);
    this.type = CLEAR_SAVE_CART;
  }
};
var EditSavedCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = EDIT_SAVED_CART;
  }
};
var EditSavedCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = EDIT_SAVED_CART_SUCCESS;
  }
};
var EditSavedCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_SAVE_CART_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = EDIT_SAVED_CART_FAIL;
  }
};
var CloneSavedCart = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_CLONE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = CLONE_SAVED_CART;
  }
};
var CloneSavedCartSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_CLONE_CART_PROCESS_ID);
    this.payload = payload;
    this.type = CLONE_SAVED_CART_SUCCESS;
  }
};
var CloneSavedCartFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(PROCESS_FEATURE, SAVED_CART_CLONE_CART_PROCESS_ID, payload.error);
    this.payload = payload;
    this.type = CLONE_SAVED_CART_FAIL;
  }
};
var ClearCloneSavedCart = class extends utilsGroup.EntityLoaderResetAction {
  constructor() {
    super(PROCESS_FEATURE, SAVED_CART_CLONE_CART_PROCESS_ID);
    this.type = CLEAR_CLONE_SAVED_CART;
  }
};
var savedCart_action = Object.freeze({
  __proto__: null,
  CLEAR_CLONE_SAVED_CART,
  CLEAR_RESTORE_SAVED_CART,
  CLEAR_SAVED_CARTS,
  CLEAR_SAVE_CART,
  CLONE_SAVED_CART,
  CLONE_SAVED_CART_FAIL,
  CLONE_SAVED_CART_SUCCESS,
  ClearCloneSavedCart,
  ClearRestoreSavedCart,
  ClearSaveCart,
  ClearSavedCarts,
  CloneSavedCart,
  CloneSavedCartFail,
  CloneSavedCartSuccess,
  EDIT_SAVED_CART,
  EDIT_SAVED_CART_FAIL,
  EDIT_SAVED_CART_SUCCESS,
  EditSavedCart,
  EditSavedCartFail,
  EditSavedCartSuccess,
  LOAD_SAVED_CART,
  LOAD_SAVED_CARTS,
  LOAD_SAVED_CARTS_FAIL,
  LOAD_SAVED_CARTS_SUCCESS,
  LOAD_SAVED_CART_FAIL,
  LOAD_SAVED_CART_SUCCESS,
  LoadSavedCart,
  LoadSavedCartFail,
  LoadSavedCartSuccess,
  LoadSavedCarts,
  LoadSavedCartsFail,
  LoadSavedCartsSuccess,
  RESTORE_SAVED_CART,
  RESTORE_SAVED_CART_FAIL,
  RESTORE_SAVED_CART_SUCCESS,
  RestoreSavedCart,
  RestoreSavedCartFail,
  RestoreSavedCartSuccess,
  SAVE_CART,
  SAVE_CART_FAIL,
  SAVE_CART_SUCCESS,
  SaveCart,
  SaveCartFail,
  SaveCartSuccess
});
var SavedCartEventBuilder = class _SavedCartEventBuilder {
  constructor(actionsSubject, eventService, stateEventService, multiCartService) {
    this.actionsSubject = actionsSubject;
    this.eventService = eventService;
    this.stateEventService = stateEventService;
    this.multiCartService = multiCartService;
    this.register();
  }
  /**
   * Registers events for the saved cart
   */
  register() {
    this.registerRestoreSavedCartEvents();
    this.registerSaveCartEvents();
    this.registerEditSavedCartEvents();
    this.registerCloneSavedCartEvents();
  }
  /**
   * Registers restore saved cart events
   */
  registerRestoreSavedCartEvents() {
    this.buildRestoreSavedCartEvents({
      action: RESTORE_SAVED_CART,
      event: RestoreSavedCartEvent
    });
    this.buildRestoreSavedCartEvents({
      action: RESTORE_SAVED_CART_SUCCESS,
      event: RestoreSavedCartSuccessEvent
    });
    this.buildRestoreSavedCartEvents({
      action: RESTORE_SAVED_CART_FAIL,
      event: RestoreSavedCartFailEvent
    });
  }
  /**
   * Registers save cart events
   */
  registerSaveCartEvents() {
    this.buildSaveCartSuccessEvent({
      action: SAVE_CART_SUCCESS,
      event: SaveCartSuccessEvent
    });
    this.stateEventService.register({
      action: SAVE_CART_FAIL,
      event: SaveCartFailEvent,
      factory: (action) => createFrom(SaveCartFailEvent, __spreadProps(__spreadValues({}, action.payload), {
        cartCode: action.payload.cartId
      }))
    });
    this.stateEventService.register({
      action: SAVE_CART,
      event: SaveCartEvent,
      factory: (action) => {
        return createFrom(SaveCartEvent, __spreadProps(__spreadValues({}, action.payload), {
          cartCode: action.payload.cartId
        }));
      }
    });
  }
  /**
   * Registers edit saved cart events
   */
  registerEditSavedCartEvents() {
    this.buildSaveCartSuccessEvent({
      action: EDIT_SAVED_CART_SUCCESS,
      event: EditSavedCartSuccessEvent
    });
    this.stateEventService.register({
      action: EDIT_SAVED_CART_FAIL,
      event: EditSavedCartFailEvent,
      factory: (action) => createFrom(EditSavedCartFailEvent, __spreadProps(__spreadValues({}, action.payload), {
        cartCode: action.payload.cartId
      }))
    });
    this.stateEventService.register({
      action: EDIT_SAVED_CART,
      event: EditSavedCartEvent,
      factory: (action) => {
        return createFrom(EditSavedCartEvent, __spreadProps(__spreadValues({}, action.payload), {
          cartCode: action.payload.cartId
        }));
      }
    });
  }
  /**
   * Registers clone saved cart events
   */
  registerCloneSavedCartEvents() {
    this.buildRestoreSavedCartEvents({
      action: CLONE_SAVED_CART,
      event: CloneSavedCartEvent
    });
    this.buildRestoreSavedCartEvents({
      action: CLONE_SAVED_CART_SUCCESS,
      event: CloneSavedCartSuccessEvent
    });
    this.buildRestoreSavedCartEvents({
      action: CLONE_SAVED_CART_FAIL,
      event: CloneSavedCartFailEvent
    });
  }
  /**
   * Builds the restore save cart events from the action and cart
   *
   * @param mapping mapping declaration from `action` string type to `event` class type
   * @param saveTime should the saveTime attribute be added to the event
   * @returns
   */
  buildRestoreSavedCartEvents(mapping) {
    const eventStream$ = this.getAction(mapping.action).pipe(switchMap((action) => of(action).pipe(withLatestFrom(this.multiCartService.getCart(action.payload.cartId)))), map(([action, cart]) => createFrom(mapping.event, __spreadValues(__spreadProps(__spreadValues({}, action.payload), {
      cartCode: cart.code,
      saveCartName: cart.name,
      saveCartDescription: cart.description
    }), cart.saveTime && {
      saveTime: cart.saveTime
    }))));
    return this.eventService.register(mapping.event, eventStream$);
  }
  /**
   * Builds save cart event by adding the saveTime from the cart
   *
   * @param mapping mapping declaration from `action` string type to `event` class type
   * @returns events register function
   */
  buildSaveCartSuccessEvent(mapping) {
    const eventStream$ = this.getAction(mapping.action).pipe(switchMap((action) => of(action).pipe(withLatestFrom(this.multiCartService.getCart(action.payload.cartId)))), filter(([, cart]) => Boolean(cart)), map(([action, cart]) => createFrom(mapping.event, __spreadProps(__spreadValues({}, action.payload), {
      cartCode: cart.code,
      saveTime: cart.saveTime
    }))));
    return this.eventService.register(mapping.event, eventStream$);
  }
  /**
   * Returns a stream of actions only of a given type(s)
   *
   * @param actionType type(s) of actions
   */
  getAction(actionType) {
    return this.actionsSubject.pipe(ofType(...[].concat(actionType)));
  }
  static {
    this.ɵfac = function SavedCartEventBuilder_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartEventBuilder)(ɵɵinject(ActionsSubject), ɵɵinject(EventService), ɵɵinject(StateEventService), ɵɵinject(MultiCartFacade));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SavedCartEventBuilder,
      factory: _SavedCartEventBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartEventBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActionsSubject
  }, {
    type: EventService
  }, {
    type: StateEventService
  }, {
    type: MultiCartFacade
  }], null);
})();
var SavedCartEventsModule = class _SavedCartEventsModule {
  constructor(_savedCartEventBuilder) {
  }
  static {
    this.ɵfac = function SavedCartEventsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartEventsModule)(ɵɵinject(SavedCartEventBuilder));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SavedCartEventsModule
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartEventsModule, [{
    type: NgModule,
    args: [{}]
  }], () => [{
    type: SavedCartEventBuilder
  }], null);
})();
var SavedCartEffects = class _SavedCartEffects {
  constructor(actions$, savedCartConnector, activeCartService, globalMessageService, cartConnector) {
    this.actions$ = actions$;
    this.savedCartConnector = savedCartConnector;
    this.activeCartService = activeCartService;
    this.globalMessageService = globalMessageService;
    this.cartConnector = cartConnector;
    this.logger = inject(LoggerService);
    this.loadSavedCart$ = createEffect(() => this.actions$.pipe(ofType(LOAD_SAVED_CART), map((action) => action.payload), switchMap(({
      userId,
      cartId
    }) => this.savedCartConnector.get(userId, cartId).pipe(switchMap((savedCart) => {
      return [new cartGroup_actions.LoadCartSuccess({
        userId,
        cartId,
        cart: savedCart
      }), new LoadSavedCartSuccess({
        userId,
        cartId
      })];
    }), catchError((error) => of(new LoadSavedCartFail({
      userId,
      cartId,
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
    this.loadSavedCarts$ = createEffect(() => this.actions$.pipe(ofType(LOAD_SAVED_CARTS), map((action) => action.payload), switchMap(({
      userId
    }) => this.savedCartConnector.getList(userId).pipe(switchMap((savedCarts) => {
      return [new cartGroup_actions.LoadCartsSuccess(savedCarts), new LoadSavedCartsSuccess({
        userId
      })];
    }), catchError((error) => of(new LoadSavedCartsFail({
      userId,
      error: tryNormalizeHttpError(error, this.logger)
    })))))));
    this.restoreSavedCart$ = createEffect(() => this.actions$.pipe(ofType(RESTORE_SAVED_CART), map((action) => action.payload), withLatestFrom(this.activeCartService.getActive()), switchMap(([{
      userId,
      cartId
    }, activeCart]) => {
      const actions = [];
      if ((activeCart?.entries ?? []).length > 0 && !activeCart.quoteCode && activeCart.code) {
        actions.push(new EditSavedCart({
          userId,
          cartId: activeCart.code,
          saveCartName: "",
          saveCartDescription: ""
        }));
      }
      return this.savedCartConnector.restoreSavedCart(userId, cartId).pipe(switchMap((savedCart) => {
        this.globalMessageService.add({
          key: (activeCart?.entries ?? []).length > 0 && !activeCart.quoteCode ? "savedCartList.swapCartWithActiveCart" : "savedCartList.swapCartNoActiveCart",
          params: {
            cartName: cartId,
            previousCartName: activeCart.code
          }
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        return [...actions, new cartGroup_actions.LoadCartSuccess({
          userId,
          cartId,
          cart: savedCart,
          extraData: {
            active: true
          }
        }), new RestoreSavedCartSuccess({
          userId,
          cartId
        })];
      }), catchError((error) => of(new RestoreSavedCartFail({
        userId,
        cartId,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.saveCart$ = createEffect(() => this.actions$.pipe(ofType(SAVE_CART), map((action) => action.payload), switchMap(({
      userId,
      cartId,
      saveCartName,
      saveCartDescription
    }) => {
      return this.cartConnector.save(userId, cartId, saveCartName, saveCartDescription).pipe(switchMap((savedCart) => {
        return [new cartGroup_actions.ClearCartState(), new cartGroup_actions.LoadCartSuccess({
          userId,
          cartId,
          cart: savedCart
        }), new SaveCartSuccess({
          userId,
          cartId,
          saveCartName,
          saveCartDescription
        })];
      }), catchError((error) => of(new SaveCartFail({
        userId,
        cartId,
        saveCartName,
        saveCartDescription,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.editSavedCart$ = createEffect(() => this.actions$.pipe(ofType(EDIT_SAVED_CART), map((action) => action.payload), switchMap(({
      userId,
      cartId,
      saveCartName,
      saveCartDescription
    }) => {
      return this.cartConnector.save(userId, cartId, saveCartName, saveCartDescription).pipe(switchMap((savedCart) => {
        return [new cartGroup_actions.LoadCartSuccess({
          userId,
          cartId,
          cart: savedCart
        }), new EditSavedCartSuccess({
          userId,
          cartId,
          saveCartName,
          saveCartDescription
        })];
      }), catchError((error) => of(new EditSavedCartFail({
        userId,
        cartId,
        saveCartName,
        saveCartDescription,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
    this.cloneSavedCart$ = createEffect(() => this.actions$.pipe(ofType(CLONE_SAVED_CART), map((action) => action.payload), switchMap(({
      userId,
      cartId,
      saveCartName
    }) => {
      return this.savedCartConnector.cloneSavedCart(userId, cartId, saveCartName).pipe(switchMap((_) => {
        return [new CloneSavedCartSuccess({
          userId,
          cartId,
          saveCartName
        }), new RestoreSavedCart({
          userId,
          cartId
        }), new LoadSavedCarts({
          userId
        })];
      }), catchError((error) => of(new CloneSavedCartFail({
        userId,
        cartId,
        saveCartName,
        error: tryNormalizeHttpError(error, this.logger)
      }))));
    })));
  }
  static {
    this.ɵfac = function SavedCartEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartEffects)(ɵɵinject(Actions), ɵɵinject(SavedCartConnector), ɵɵinject(ActiveCartFacade), ɵɵinject(GlobalMessageService), ɵɵinject(CartConnector));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SavedCartEffects,
      factory: _SavedCartEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: SavedCartConnector
  }, {
    type: ActiveCartFacade
  }, {
    type: GlobalMessageService
  }, {
    type: CartConnector
  }], null);
})();
var effects = [SavedCartEffects];
var SavedCartStoreModule = class _SavedCartStoreModule {
  static {
    this.ɵfac = function SavedCartStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SavedCartStoreModule,
      imports: [EffectsFeatureModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [EffectsModule.forFeature(effects)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartStoreModule, [{
    type: NgModule,
    args: [{
      imports: [EffectsModule.forFeature(effects)]
    }]
  }], null, null);
})();
var SavedCartService = class _SavedCartService {
  constructor(store, userIdService, userAccountFacade, multiCartService, eventService) {
    this.store = store;
    this.userIdService = userIdService;
    this.userAccountFacade = userAccountFacade;
    this.multiCartService = multiCartService;
    this.eventService = eventService;
  }
  /**
   * Loads a single saved cart
   */
  loadSavedCart(cartId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new LoadSavedCart({
          userId,
          cartId
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Gets a single saved cart
   * it won't emit if the delete saved cart event gets triggered to avoid race condition between actions
   *
   * @param cartId
   * @returns observable with cart
   */
  get(cartId) {
    return this.getSavedCart(cartId).pipe(observeOn(queueScheduler), withLatestFrom(this.eventService.get(DeleteCartEvent).pipe(startWith({}))), filter(([state, _event]) => !!state), tap(([state, event]) => {
      if (Object.keys(event).length > 0) {
        return EMPTY;
      }
      if (!(state.loading || state.success || state.error)) {
        this.loadSavedCart(cartId);
      }
    }), filter(([state]) => state.success || !!state.error), map(([state]) => state.value));
  }
  /**
   * Gets the selected cart state
   *
   * @param cartId
   * @returns observable of selected cart with loader state
   */
  getSavedCart(cartId) {
    return this.multiCartService.getCartEntity(cartId);
  }
  /**
   * Returns true when there are no operations on that in progress and it is not currently loading
   *
   * @param cartId
   */
  isStable(cartId) {
    return this.multiCartService.isStable(cartId);
  }
  /**
   * Loads a list of saved carts
   */
  loadSavedCarts() {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new LoadSavedCarts({
          userId
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Gets a list of saved carts
   *
   * @returns observable with list of saved carts
   */
  getList() {
    return this.getSavedCartList().pipe(withLatestFrom(this.getSavedCartListProcess()), tap(([_, state]) => {
      if (!(state.loading || state.success || state.error)) {
        this.loadSavedCarts();
      }
    }), map(([savedCartList, _]) => savedCartList), shareReplay({
      bufferSize: 1,
      refCount: true
    }));
  }
  /**
   * Gets a list of saved carts from all carts in the state
   * by filtering through the carts that are not wishlist and not saved cart
   *
   * @returns observable with list of saved carts
   */
  getSavedCartList() {
    return combineLatest([this.multiCartService.getCarts(), this.userAccountFacade.get()]).pipe(distinctUntilChanged(), map(([carts, user]) => carts.filter((cart) => (user?.customerId !== void 0 ? cart?.name !== `wishlist${user?.customerId}` : true) && !isSelectiveCart(cart?.code) && cart?.saveTime)));
  }
  /**
   * Gets the loading flag of getting a list of saved carts
   *
   * @returns observable with boolean of the loading state
   */
  getSavedCartListProcessLoading() {
    return this.store.pipe(select(process_selectors.getProcessLoadingFactory(SAVED_CART_LIST_PROCESS_ID)));
  }
  /**
   * Gets the loading state of getting a list of saved carts
   *
   * @returns observable with boolean of the loader state
   */
  getSavedCartListProcess() {
    return this.store.pipe(select(process_selectors.getProcessStateFactory(SAVED_CART_LIST_PROCESS_ID)));
  }
  /**
   * Clears the process state of performing a saved cart
   */
  clearSavedCarts() {
    this.store.dispatch(new ClearSavedCarts());
  }
  /**
   * Triggers a restore saved cart
   *
   * @param cartId
   */
  restoreSavedCart(cartId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new RestoreSavedCart({
          userId,
          cartId
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Gets the loading state of restoring saved cart
   *
   * @returns observable with boolean of the loading state
   */
  getRestoreSavedCartProcessLoading() {
    return this.store.pipe(select(process_selectors.getProcessLoadingFactory(SAVED_CART_RESTORE_CART_PROCESS_ID)));
  }
  /**
   * Gets the success state of restoring saved cart
   *
   * @returns observable with boolean of the success state
   */
  getRestoreSavedCartProcessSuccess() {
    return this.store.pipe(select(process_selectors.getProcessSuccessFactory(SAVED_CART_RESTORE_CART_PROCESS_ID)));
  }
  /**
   * Gets the error state of restoring saved cart
   *
   * @returns observable with boolean of the error state
   */
  getRestoreSavedCartProcessError() {
    return this.store.pipe(select(process_selectors.getProcessErrorFactory(SAVED_CART_RESTORE_CART_PROCESS_ID)));
  }
  /**
   * Clears the process state of performing a restore saved cart
   */
  clearRestoreSavedCart() {
    this.store.dispatch(new ClearRestoreSavedCart());
  }
  /**
   * Triggers delete saved cart
   * @param cartId
   */
  deleteSavedCart(cartId) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.multiCartService.deleteCart(cartId, userId);
      },
      error: () => {
      }
    });
  }
  /**
   * Triggers a saved cart
   *
   */
  saveCart({
    cartId,
    saveCartName,
    saveCartDescription
  }) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new SaveCart({
          userId,
          cartId,
          saveCartName,
          saveCartDescription
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Gets the loading state of saving a cart
   *
   * @returns observable with boolean of the loading state
   */
  getSaveCartProcessLoading() {
    return this.store.pipe(select(process_selectors.getProcessLoadingFactory(SAVED_CART_SAVE_CART_PROCESS_ID)));
  }
  /**
   * Gets the success state of saving a cart
   *
   * @returns observable with boolean of the success state
   */
  getSaveCartProcessSuccess() {
    return this.store.pipe(select(process_selectors.getProcessSuccessFactory(SAVED_CART_SAVE_CART_PROCESS_ID)));
  }
  /**
   * Gets the error state of saving a cart
   *
   * @returns observable with boolean of the error state
   */
  getSaveCartProcessError() {
    return this.store.pipe(select(process_selectors.getProcessErrorFactory(SAVED_CART_SAVE_CART_PROCESS_ID)));
  }
  /**
   * Clears the process state of performing a save cart
   */
  clearSaveCart() {
    this.store.dispatch(new ClearSaveCart());
  }
  /**
   * Triggers an edit saved cart
   *
   */
  editSavedCart({
    cartId,
    saveCartName,
    saveCartDescription
  }) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new EditSavedCart({
          userId,
          cartId,
          saveCartName,
          saveCartDescription
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Triggers a clone saved cart
   *
   * @param cartId
   */
  cloneSavedCart(cartId, saveCartName) {
    this.userIdService.takeUserId(true).subscribe({
      next: (userId) => {
        return this.store.dispatch(new CloneSavedCart({
          userId,
          cartId,
          saveCartName
        }));
      },
      error: () => {
      }
    });
  }
  /**
   * Gets the loading state of cloning a saved cart
   *
   * @returns observable with boolean of the loading state
   */
  getCloneSavedCartProcessLoading() {
    return this.store.pipe(select(process_selectors.getProcessLoadingFactory(SAVED_CART_CLONE_CART_PROCESS_ID)));
  }
  /**
   * Gets the success state of cloning a saved cart
   *
   * @returns observable with boolean of the success state
   */
  getCloneSavedCartProcessSuccess() {
    return this.store.pipe(select(process_selectors.getProcessSuccessFactory(SAVED_CART_CLONE_CART_PROCESS_ID)));
  }
  /**
   * Gets the error state of cloning a saved cart
   *
   * @returns observable with boolean of the error state
   */
  getCloneSavedCartProcessError() {
    return this.store.pipe(select(process_selectors.getProcessErrorFactory(SAVED_CART_CLONE_CART_PROCESS_ID)));
  }
  /**
   * Clears the process state of cloning a saved cart
   */
  clearCloneSavedCart() {
    this.store.dispatch(new ClearCloneSavedCart());
  }
  static {
    this.ɵfac = function SavedCartService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartService)(ɵɵinject(Store), ɵɵinject(UserIdService), ɵɵinject(UserAccountFacade), ɵɵinject(MultiCartFacade), ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _SavedCartService,
      factory: _SavedCartService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: UserIdService
  }, {
    type: UserAccountFacade
  }, {
    type: MultiCartFacade
  }, {
    type: EventService
  }], null);
})();
var facadeProviders = [SavedCartService, {
  provide: SavedCartFacade,
  useExisting: SavedCartService
}];
var SavedCartCoreModule = class _SavedCartCoreModule {
  static {
    this.ɵfac = function SavedCartCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SavedCartCoreModule,
      imports: [SavedCartStoreModule, SavedCartEventsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [SavedCartConnector, ...facadeProviders],
      imports: [SavedCartStoreModule, SavedCartEventsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartCoreModule, [{
    type: NgModule,
    args: [{
      imports: [SavedCartStoreModule, SavedCartEventsModule],
      providers: [SavedCartConnector, ...facadeProviders]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-saved-cart-occ.mjs
var OccSavedCartAdapter = class _OccSavedCartAdapter {
  constructor(http, occEndpoints, converter) {
    this.http = http;
    this.occEndpoints = occEndpoints;
    this.converter = converter;
  }
  load(userId, cartId) {
    return this.http.get(this.getSavedCartEndpoint(userId, cartId)).pipe(map((cartResponse) => cartResponse.savedCartData), this.converter.pipeable(CART_NORMALIZER));
  }
  loadList(userId) {
    return this.http.get(this.getSavedCartListEndpoint(userId)).pipe(map((cartList) => cartList.carts ?? []), this.converter.pipeableMany(CART_NORMALIZER));
  }
  restoreSavedCart(userId, cartId) {
    return this.http.patch(this.getRestoreSavedCartEndpoint(userId, cartId), cartId).pipe(map((cartResponse) => cartResponse.savedCartData), this.converter.pipeable(CART_NORMALIZER));
  }
  cloneSavedCart(userId, cartId, saveCartName) {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("name", saveCartName);
    const endpoint = this.getCloneSavedCartEndpoint(userId, cartId, saveCartName);
    return this.http.post(endpoint, httpParams).pipe(map((cartResponse) => cartResponse.savedCartData), this.converter.pipeable(CART_NORMALIZER));
  }
  getSavedCartEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("savedCart", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  getSavedCartListEndpoint(userId) {
    return this.occEndpoints.buildUrl("savedCarts", {
      urlParams: {
        userId
      }
    });
  }
  getRestoreSavedCartEndpoint(userId, cartId) {
    return this.occEndpoints.buildUrl("restoreSavedCart", {
      urlParams: {
        userId,
        cartId
      }
    });
  }
  getCloneSavedCartEndpoint(userId, cartId, saveCartName) {
    return this.occEndpoints.buildUrl("cloneSavedCart", {
      urlParams: {
        userId,
        cartId,
        saveCartName
      }
    });
  }
  static {
    this.ɵfac = function OccSavedCartAdapter_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OccSavedCartAdapter)(ɵɵinject(HttpClient), ɵɵinject(OccEndpointsService), ɵɵinject(ConverterService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _OccSavedCartAdapter,
      factory: _OccSavedCartAdapter.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OccSavedCartAdapter, [{
    type: Injectable
  }], () => [{
    type: HttpClient
  }, {
    type: OccEndpointsService
  }, {
    type: ConverterService
  }], null);
})();
function defaultOccSavedCartConfigFactory() {
  return {
    backend: {
      occ: {
        endpoints: {
          savedCarts: "/users/${userId}/carts?savedCartsOnly=true&fields=carts(DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue,value),updateable),totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),totalUnitCount,deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue, value),pickupItemsQuantity,net,appliedVouchers,productDiscounts(formattedValue),saveTime,user,name,description)",
          savedCart: "/users/${userId}/carts/${cartId}/savedcart",
          restoreSavedCart: "/users/${userId}/carts/${cartId}/restoresavedcart",
          cloneSavedCart: "/users/${userId}/carts/${cartId}/clonesavedcart"
        }
      }
    }
  };
}
var SavedCartOccModule = class _SavedCartOccModule {
  static {
    this.ɵfac = function SavedCartOccModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartOccModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SavedCartOccModule,
      imports: [CommonModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfigFactory(defaultOccSavedCartConfigFactory), {
        provide: SavedCartAdapter,
        useClass: OccSavedCartAdapter
      }],
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartOccModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      providers: [provideDefaultConfigFactory(defaultOccSavedCartConfigFactory), {
        provide: SavedCartAdapter,
        useClass: OccSavedCartAdapter
      }]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-saved-cart.mjs
var SavedCartModule = class _SavedCartModule {
  static {
    this.ɵfac = function SavedCartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SavedCartModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _SavedCartModule,
      imports: [SavedCartCoreModule, SavedCartOccModule, SavedCartComponentsModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [SavedCartCoreModule, SavedCartOccModule, SavedCartComponentsModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SavedCartModule, [{
    type: NgModule,
    args: [{
      imports: [SavedCartCoreModule, SavedCartOccModule, SavedCartComponentsModule]
    }]
  }], null, null);
})();
export {
  SavedCartModule
};
//# sourceMappingURL=@spartacus_cart_saved-cart.js.map
