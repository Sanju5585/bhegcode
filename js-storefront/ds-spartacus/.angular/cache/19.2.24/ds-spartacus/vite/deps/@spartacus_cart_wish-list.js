import {
  WishListFacade
} from "./chunk-OS2ZNFTQ.js";
import {
  CartConnector,
  MULTI_CART_DATA,
  cartGroup_actions,
  getCartIdByUserId,
  multiCartGroup_selectors
} from "./chunk-Q7WXRDFA.js";
import "./chunk-YJXUXPBZ.js";
import {
  UserAccountFacade
} from "./chunk-LZQV6UAH.js";
import {
  CartType,
  MultiCartFacade
} from "./chunk-KEAKWHYV.js";
import {
  AtMessageDirective,
  AtMessageModule,
  InnerComponentsHostDirective,
  ItemCounterModule,
  MediaComponent,
  MediaModule,
  PageComponentModule,
  ProductListItemContext,
  ProductListItemContextSource,
  StarRatingModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthGuard,
  FeaturesConfigModule,
  I18nModule,
  LoggerService,
  OCC_USER_ID_ANONYMOUS,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  UserIdService,
  isNotUndefined,
  provideDefaultConfig,
  siteContextGroup_actions,
  tryNormalizeHttpError,
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
  Store,
  select
} from "./chunk-2FUOVDAV.js";
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
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  inject,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  EMPTY,
  catchError,
  combineLatest,
  concatMap,
  distinctUntilChanged,
  filter,
  from,
  map,
  take,
  tap,
  withLatestFrom
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list-components.mjs
var _c0 = ["cx-wish-list-item", ""];
var _c1 = (a0) => ({
  cxRoute: "product",
  params: a0
});
function WishListItemComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13)(1, "a", 14);
    ɵɵpipe(2, "cxUrl");
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 2, ɵɵpureFunction1(4, _c1, ctx_r0.cartEntry.product)));
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.cartEntry.product == null ? null : ctx_r0.cartEntry.product.name);
  }
}
function WishListItemComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, "cartItems.id"), " ", ctx_r0.cartEntry.product == null ? null : ctx_r0.cartEntry.product.code, " ");
  }
}
function WishListItemComponent_ng_container_8_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", variant_r2.name, ": ", variant_r2.value, " ");
  }
}
function WishListItemComponent_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, WishListItemComponent_ng_container_8_div_1_div_1_Template, 2, 2, "div", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const variant_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", variant_r2.name && variant_r2.value);
  }
}
function WishListItemComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, WishListItemComponent_ng_container_8_div_1_Template, 2, 1, "div", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.cartEntry.product == null ? null : ctx_r0.cartEntry.product.baseOptions[0] == null ? null : ctx_r0.cartEntry.product.baseOptions[0].selected == null ? null : ctx_r0.cartEntry.product.baseOptions[0].selected.variantOptionQualifiers);
  }
}
function WishListItemComponent_td_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.cartEntry.basePrice == null ? null : ctx_r0.cartEntry.basePrice.formattedValue, " ");
  }
}
function WishListItemComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 20)(1, "div", 21);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵtemplate(4, WishListItemComponent_td_9_div_4_Template, 2, 1, "div", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 2, "cartItems.itemPrice"), " ");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.cartEntry.basePrice);
  }
}
function WishListItemComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 24);
  }
}
function WishListItemComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 25);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "addToCart.outOfStock"), " ");
  }
}
function WishListItemComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 26);
    ɵɵpipe(1, "cxTranslate");
    ɵɵlistener("click", function WishListItemComponent_button_14_Template_button_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.removeEntry(ctx_r0.cartEntry));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("cxAtMessage", ɵɵpipeBind1(1, 3, "wishlist.itemRemoved"))("disabled", ctx_r0.isLoading);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "common.remove"), " ");
  }
}
function WishListComponent_ng_container_0_table_1_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 11);
    ɵɵpipe(1, "async");
    ɵɵlistener("remove", function WishListComponent_ng_container_0_table_1_tr_16_Template_tr_remove_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.removeEntry($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("cartEntry", entry_r3)("isLoading", ɵɵpipeBind1(1, 2, ctx_r1.loading$));
  }
}
function WishListComponent_ng_container_0_table_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 3)(1, "caption", 4);
    ɵɵtext(2);
    ɵɵpipe(3, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "thead")(5, "tr", 5)(6, "th", 6);
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "th", 7);
    ɵɵtext(10);
    ɵɵpipe(11, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(12, "th", 8);
    ɵɵtext(13);
    ɵɵpipe(14, "cxTranslate");
    ɵɵelementEnd()()();
    ɵɵelementStart(15, "tbody", 9);
    ɵɵtemplate(16, WishListComponent_ng_container_0_table_1_tr_16_Template, 2, 4, "tr", 10);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const wishList_r4 = ɵɵnextContext().ngIf;
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 5, "wishlist.caption"), " ");
    ɵɵadvance(5);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(8, 7, "cartItems.description"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(11, 9, "cartItems.itemPrice"), " ");
    ɵɵadvance(3);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(14, 11, "cartItems.actions"), " ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", wishList_r4 == null ? null : wishList_r4.entries);
  }
}
function WishListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, WishListComponent_ng_container_0_table_1_Template, 17, 13, "table", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const wishList_r4 = ctx.ngIf;
    ɵɵnextContext();
    const emptyWishList_r5 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", (wishList_r4 == null ? null : wishList_r4.entries == null ? null : wishList_r4.entries.length) > 0)("ngIfElse", emptyWishList_r5);
  }
}
function WishListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 12);
    ɵɵtext(1);
    ɵɵpipe(2, "cxTranslate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, "wishlist.empty"), " ");
  }
}
var WishListItemComponent = class _WishListItemComponent {
  constructor(productListItemContextSource) {
    this.productListItemContextSource = productListItemContextSource;
    this.isLoading = false;
    this.remove = new EventEmitter();
  }
  ngOnChanges(changes) {
    if (changes?.cartEntry) {
      this.productListItemContextSource.product$.next(this.cartEntry.product);
    }
  }
  removeEntry(item) {
    this.remove.emit(item);
  }
  static {
    this.ɵfac = function WishListItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishListItemComponent)(ɵɵdirectiveInject(ProductListItemContextSource));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _WishListItemComponent,
      selectors: [["", "cx-wish-list-item", ""], ["cx-wish-list-item"]],
      inputs: {
        isLoading: "isLoading",
        cartEntry: "cartEntry"
      },
      outputs: {
        remove: "remove"
      },
      standalone: false,
      features: [ɵɵProvidersFeature([ProductListItemContextSource, {
        provide: ProductListItemContext,
        useExisting: ProductListItemContextSource
      }]), ɵɵNgOnChangesFeature],
      attrs: _c0,
      decls: 15,
      vars: 12,
      consts: [["outOfStock", ""], ["role", "cell"], [1, "cx-table-item-container"], ["tabindex", "-1", 3, "routerLink"], ["format", "thumbnail", 3, "container"], [1, "cx-info"], ["class", "cx-name", 4, "ngIf"], ["class", "cx-code", 4, "ngIf"], [4, "ngIf"], ["role", "cell", "class", "cx-price", 4, "ngIf"], ["role", "cell", 1, "cx-actions"], ["cxInnerComponentsHost", "", 4, "ngIf"], ["class", "link cx-action-link cx-remove-btn", 3, "cxAtMessage", "disabled", "click", 4, "ngIf"], [1, "cx-name"], [1, "cx-link", 3, "routerLink"], [1, "cx-code"], ["class", "cx-property", 4, "ngFor", "ngForOf"], [1, "cx-property"], ["class", "cx-label", 4, "ngIf"], [1, "cx-label"], ["role", "cell", 1, "cx-price"], [1, "cx-mobile-header"], ["class", "cx-value", 4, "ngIf"], [1, "cx-value"], ["cxInnerComponentsHost", ""], [1, "cx-out-of-stock"], [1, "link", "cx-action-link", "cx-remove-btn", 3, "click", "cxAtMessage", "disabled"]],
      template: function WishListItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "td", 1)(1, "div", 2)(2, "a", 3);
          ɵɵpipe(3, "cxUrl");
          ɵɵelement(4, "cx-media", 4);
          ɵɵelementEnd();
          ɵɵelementStart(5, "div", 5);
          ɵɵtemplate(6, WishListItemComponent_div_6_Template, 4, 6, "div", 6)(7, WishListItemComponent_div_7_Template, 3, 4, "div", 7);
          ɵɵelementEnd()();
          ɵɵtemplate(8, WishListItemComponent_ng_container_8_Template, 2, 1, "ng-container", 8);
          ɵɵelementEnd();
          ɵɵtemplate(9, WishListItemComponent_td_9_Template, 5, 4, "td", 9);
          ɵɵelementStart(10, "td", 10);
          ɵɵtemplate(11, WishListItemComponent_ng_container_11_Template, 1, 0, "ng-container", 11)(12, WishListItemComponent_ng_template_12_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(14, WishListItemComponent_button_14_Template, 4, 7, "button", 12);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(2);
          ɵɵproperty("routerLink", ɵɵpipeBind1(3, 8, ɵɵpureFunction1(10, _c1, ctx.cartEntry.product)));
          ɵɵadvance(2);
          ɵɵproperty("container", ctx.cartEntry.product == null ? null : ctx.cartEntry.product.images == null ? null : ctx.cartEntry.product.images.PRIMARY);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.cartEntry.product == null ? null : ctx.cartEntry.product.name);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.cartEntry.product == null ? null : ctx.cartEntry.product.code);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.cartEntry.product == null ? null : ctx.cartEntry.product.baseOptions == null ? null : ctx.cartEntry.product.baseOptions.length);
          ɵɵadvance();
          ɵɵproperty("ngIf", ctx.cartEntry.basePrice);
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ctx.cartEntry.updateable);
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ctx.cartEntry.updateable);
        }
      },
      dependencies: [AtMessageDirective, NgForOf, NgIf, MediaComponent, InnerComponentsHostDirective, RouterLink, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListItemComponent, [{
    type: Component,
    args: [{
      selector: "[cx-wish-list-item], cx-wish-list-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ProductListItemContextSource, {
        provide: ProductListItemContext,
        useExisting: ProductListItemContextSource
      }],
      standalone: false,
      template: `<td role="cell">
  <div class="cx-table-item-container">
    <!-- Item Image -->
    <a
      [routerLink]="{ cxRoute: 'product', params: cartEntry.product } | cxUrl"
      tabindex="-1"
    >
      <cx-media
        [container]="cartEntry.product?.images?.PRIMARY"
        format="thumbnail"
      ></cx-media>
    </a>
    <div class="cx-info">
      <div *ngIf="cartEntry.product?.name" class="cx-name">
        <a
          class="cx-link"
          [routerLink]="
            { cxRoute: 'product', params: cartEntry.product } | cxUrl
          "
          >{{ cartEntry.product?.name }}</a
        >
      </div>
      <div *ngIf="cartEntry.product?.code" class="cx-code">
        {{ 'cartItems.id' | cxTranslate }} {{ cartEntry.product?.code }}
      </div>
    </div>
  </div>
  <!-- Variants -->
  <ng-container *ngIf="cartEntry.product?.baseOptions?.length">
    <div
      *ngFor="
        let variant of cartEntry.product?.baseOptions[0]?.selected
          ?.variantOptionQualifiers
      "
      class="cx-property"
    >
      <div class="cx-label" *ngIf="variant.name && variant.value">
        {{ variant.name }}: {{ variant.value }}
      </div>
    </div>
  </ng-container>
</td>
<!-- Item Price -->
<td role="cell" *ngIf="cartEntry.basePrice" class="cx-price">
  <div class="cx-mobile-header">
    {{ 'cartItems.itemPrice' | cxTranslate }}
  </div>
  <div *ngIf="cartEntry.basePrice" class="cx-value">
    {{ cartEntry.basePrice?.formattedValue }}
  </div>
</td>
<!-- Action -->
<td role="cell" class="cx-actions">
  <ng-container
    *ngIf="cartEntry.updateable"
    cxInnerComponentsHost
  ></ng-container>
  <ng-template #outOfStock>
    <span class="cx-out-of-stock">
      {{ 'addToCart.outOfStock' | cxTranslate }}
    </span>
  </ng-template>
  <button
    *ngIf="cartEntry.updateable"
    (click)="removeEntry(cartEntry)"
    [cxAtMessage]="'wishlist.itemRemoved' | cxTranslate"
    [disabled]="isLoading"
    class="link cx-action-link cx-remove-btn"
  >
    {{ 'common.remove' | cxTranslate }}
  </button>
</td>
`
    }]
  }], () => [{
    type: ProductListItemContextSource
  }], {
    isLoading: [{
      type: Input
    }],
    cartEntry: [{
      type: Input
    }],
    remove: [{
      type: Output
    }]
  });
})();
var WishListComponent = class _WishListComponent {
  constructor(wishListFacade) {
    this.wishListFacade = wishListFacade;
    this.wishList$ = this.wishListFacade.getWishList();
    this.loading$ = this.wishListFacade.getWishListLoading();
  }
  removeEntry(item) {
    this.wishListFacade.removeEntry(item);
  }
  static {
    this.ɵfac = function WishListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishListComponent)(ɵɵdirectiveInject(WishListFacade));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _WishListComponent,
      selectors: [["cx-wish-list"]],
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [["emptyWishList", ""], [4, "ngIf"], ["role", "table", 4, "ngIf", "ngIfElse"], ["role", "table"], [1, "cx-visually-hidden"], ["role", "row", 1, "cx-item-list-header", "cx-wish-list-header"], ["role", "columnheader", 1, "cx-item-list-desc"], ["role", "columnheader", 1, "cx-item-list-price"], ["role", "columnheader", 1, "cx-item-list-actions"], [1, "cx-item-list-items"], ["cx-wish-list-item", "", "role", "row", "class", "cx-item-list-row cx-wish-list-item-row", 3, "cartEntry", "isLoading", "remove", 4, "ngFor", "ngForOf"], ["cx-wish-list-item", "", "role", "row", 1, "cx-item-list-row", "cx-wish-list-item-row", 3, "remove", "cartEntry", "isLoading"], [1, "cx-empty-wish-list"]],
      template: function WishListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, WishListComponent_ng_container_0_Template, 2, 2, "ng-container", 1);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, WishListComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.wishList$));
        }
      },
      dependencies: [NgForOf, NgIf, WishListItemComponent, AsyncPipe, TranslatePipe],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListComponent, [{
    type: Component,
    args: [{
      selector: "cx-wish-list",
      standalone: false,
      template: `<ng-container *ngIf="wishList$ | async as wishList">
  <table role="table" *ngIf="wishList?.entries?.length > 0; else emptyWishList">
    <caption class="cx-visually-hidden">
      {{
        'wishlist.caption' | cxTranslate
      }}
    </caption>
    <thead>
      <tr role="row" class="cx-item-list-header cx-wish-list-header">
        <th role="columnheader" class="cx-item-list-desc">
          {{ 'cartItems.description' | cxTranslate }}
        </th>
        <th role="columnheader" class="cx-item-list-price">
          {{ 'cartItems.itemPrice' | cxTranslate }}
        </th>
        <th role="columnheader" class="cx-item-list-actions">
          {{ 'cartItems.actions' | cxTranslate }}
        </th>
      </tr>
    </thead>
    <tbody class="cx-item-list-items">
      <tr
        cx-wish-list-item
        role="row"
        class="cx-item-list-row cx-wish-list-item-row"
        *ngFor="let entry of wishList?.entries"
        [cartEntry]="entry"
        [isLoading]="loading$ | async"
        (remove)="removeEntry($event)"
      ></tr>
    </tbody>
  </table>
</ng-container>

<ng-template #emptyWishList>
  <p class="cx-empty-wish-list">
    {{ 'wishlist.empty' | cxTranslate }}
  </p>
</ng-template>
`
    }]
  }], () => [{
    type: WishListFacade
  }], null);
})();
var WishListComponentsModule = class _WishListComponentsModule {
  static {
    this.ɵfac = function WishListComponentsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishListComponentsModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _WishListComponentsModule,
      declarations: [WishListComponent, WishListItemComponent],
      imports: [AtMessageModule, CommonModule, I18nModule, ItemCounterModule, MediaModule, PageComponentModule, RouterModule, StarRatingModule, UrlModule, FeaturesConfigModule],
      exports: [WishListComponent, WishListItemComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          WishListComponent: {
            component: WishListComponent,
            data: {
              composition: {
                inner: ["ProductAddToCartComponent"]
              }
            },
            guards: [AuthGuard]
          }
        }
      })],
      imports: [AtMessageModule, CommonModule, I18nModule, ItemCounterModule, MediaModule, PageComponentModule, RouterModule, StarRatingModule, UrlModule, FeaturesConfigModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListComponentsModule, [{
    type: NgModule,
    args: [{
      imports: [AtMessageModule, CommonModule, I18nModule, ItemCounterModule, MediaModule, PageComponentModule, RouterModule, StarRatingModule, UrlModule, FeaturesConfigModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          WishListComponent: {
            component: WishListComponent,
            data: {
              composition: {
                inner: ["ProductAddToCartComponent"]
              }
            },
            guards: [AuthGuard]
          }
        }
      })],
      declarations: [WishListComponent, WishListItemComponent],
      exports: [WishListComponent, WishListItemComponent]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list-core.mjs
var CREATE_WISH_LIST = "[Wish List] Create Wish List";
var CREATE_WISH_LIST_FAIL = "[Wish List] Create Wish List Fail";
var CREATE_WISH_LIST_SUCCESS = "[Wish List] Create Wish List Success";
var LOAD_WISH_LIST = "[Wish List] Load Wish List";
var LOAD_WISH_LIST_SUCCESS = "[Wish List] Load Wish List Success";
var LOAD_WISH_LIST_FAIL = "[Wish List] Load Wish List Fail";
var CreateWishList = class {
  constructor(payload) {
    this.payload = payload;
    this.type = CREATE_WISH_LIST;
  }
};
var CreateWishListSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = CREATE_WISH_LIST_SUCCESS;
  }
};
var CreateWishListFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId, payload.error);
    this.payload = payload;
    this.type = CREATE_WISH_LIST_FAIL;
  }
};
var LoadWishList = class extends utilsGroup.EntityLoadAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = LOAD_WISH_LIST;
  }
};
var LoadWishListSuccess = class extends utilsGroup.EntitySuccessAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId);
    this.payload = payload;
    this.type = LOAD_WISH_LIST_SUCCESS;
  }
};
var LoadWishListFail = class extends utilsGroup.EntityFailAction {
  constructor(payload) {
    super(MULTI_CART_DATA, payload.cartId, payload.error);
    this.payload = payload;
    this.type = LOAD_WISH_LIST_FAIL;
  }
};
var wishList_action = Object.freeze({
  __proto__: null,
  CREATE_WISH_LIST,
  CREATE_WISH_LIST_FAIL,
  CREATE_WISH_LIST_SUCCESS,
  CreateWishList,
  CreateWishListFail,
  CreateWishListSuccess,
  LOAD_WISH_LIST,
  LOAD_WISH_LIST_FAIL,
  LOAD_WISH_LIST_SUCCESS,
  LoadWishList,
  LoadWishListFail,
  LoadWishListSuccess
});
function getWishlistName(customerId) {
  return `wishlist${customerId}`;
}
var WishListService = class _WishListService {
  constructor(store, userAccountFacade, multiCartFacade, userIdService) {
    this.store = store;
    this.userAccountFacade = userAccountFacade;
    this.multiCartFacade = multiCartFacade;
    this.userIdService = userIdService;
  }
  createWishList(userId, name, description) {
    this.store.dispatch(new CreateWishList({
      userId,
      name,
      description
    }));
  }
  getWishList() {
    return combineLatest([this.getWishListId(), this.userAccountFacade.get(), this.userIdService.getUserId()]).pipe(distinctUntilChanged(), tap(([wishListId, user, userId]) => {
      if (!Boolean(wishListId) && userId !== OCC_USER_ID_ANONYMOUS && user?.customerId) {
        this.loadWishList(userId, user.customerId);
      }
    }), filter(([wishListId]) => Boolean(wishListId)), switchMap(([wishListId]) => this.multiCartFacade.getCart(wishListId)));
  }
  loadWishList(userId, customerId) {
    this.store.dispatch(new LoadWishList({
      userId,
      cartId: getWishlistName(customerId)
    }));
  }
  addEntry(productCode) {
    this.getWishListIdWithUserId().subscribe(([wishListId, userId]) => this.multiCartFacade.addEntry(userId, wishListId, productCode, 1));
  }
  removeEntry(entry) {
    this.getWishListIdWithUserId().subscribe(([wishListId, userId]) => this.multiCartFacade.removeEntry(userId, wishListId, entry.entryNumber));
  }
  getWishListLoading() {
    return this.getWishListId().pipe(switchMap((wishListId) => this.multiCartFacade.isStable(wishListId).pipe(map((stable) => !stable))));
  }
  getWishListId() {
    return this.multiCartFacade.getCartIdByType(CartType.WISH_LIST);
  }
  getWishListIdWithUserId() {
    return this.getWishListId().pipe(distinctUntilChanged(), withLatestFrom(this.userIdService.getUserId(), this.userAccountFacade.get()), tap(([wishListId, userId, user]) => {
      if (!Boolean(wishListId) && user?.customerId) {
        this.loadWishList(userId, user.customerId);
      }
    }), filter(([wishListId]) => Boolean(wishListId)), map(([wishListId, userId]) => [wishListId, userId]), take(1));
  }
  static {
    this.ɵfac = function WishListService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishListService)(ɵɵinject(Store), ɵɵinject(UserAccountFacade), ɵɵinject(MultiCartFacade), ɵɵinject(UserIdService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _WishListService,
      factory: _WishListService.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListService, [{
    type: Injectable
  }], () => [{
    type: Store
  }, {
    type: UserAccountFacade
  }, {
    type: MultiCartFacade
  }, {
    type: UserIdService
  }], null);
})();
var facadeProviders = [WishListService, {
  provide: WishListFacade,
  useExisting: WishListService
}];
var WishListEffects = class _WishListEffects {
  constructor(actions$, cartConnector, userIdService, store) {
    this.actions$ = actions$;
    this.cartConnector = cartConnector;
    this.userIdService = userIdService;
    this.store = store;
    this.logger = inject(LoggerService);
    this.createWishList$ = createEffect(() => this.actions$.pipe(ofType(CREATE_WISH_LIST), map((action) => action.payload), switchMap((payload) => {
      return this.cartConnector.create(payload.userId).pipe(switchMap((cart) => {
        return this.cartConnector.save(payload.userId, cart.code ?? "", payload.name, payload.description).pipe(switchMap((savedCart) => [new CreateWishListSuccess({
          cart: savedCart,
          cartId: getCartIdByUserId(savedCart, payload.userId)
        })]), catchError((error) => from([new CreateWishListFail({
          cartId: cart.code ?? "",
          error: tryNormalizeHttpError(error, this.logger)
        })])));
      }));
    })));
    this.loadWishList$ = createEffect(() => this.actions$.pipe(ofType(LOAD_WISH_LIST), map((action) => action.payload), concatMap((payload) => {
      const {
        userId,
        cartId
      } = payload;
      return this.cartConnector.loadAll(userId).pipe(switchMap((carts) => {
        const wishListName = cartId;
        const wishList = carts.find((cart) => cart.name === wishListName);
        const actions = [];
        actions.push(wishList ? new LoadWishListSuccess({
          cart: wishList,
          cartId: getCartIdByUserId(wishList, userId)
        }) : new CreateWishList({
          userId,
          name: wishListName
        }));
        actions.push(new cartGroup_actions.RemoveCart({
          cartId: wishListName
        }));
        return actions;
      }), catchError((error) => from([new LoadWishListFail({
        cartId,
        error: tryNormalizeHttpError(error, this.logger)
      })])));
    })));
    this.resetWishList$ = createEffect(() => this.actions$.pipe(ofType(siteContextGroup_actions.LANGUAGE_CHANGE, siteContextGroup_actions.CURRENCY_CHANGE), withLatestFrom(this.userIdService.getUserId(), this.store.pipe(filter((store2) => !!store2.cart), select(multiCartGroup_selectors.getCartIdByTypeFactory(CartType.WISH_LIST)))), switchMap(([, userId, wishListId]) => {
      if (Boolean(wishListId)) {
        return this.cartConnector.load(userId, wishListId).pipe(switchMap((wishList) => [new LoadWishListSuccess({
          cart: wishList ?? {},
          cartId: getCartIdByUserId(wishList, userId)
        })]), catchError((error) => from([new LoadWishListFail({
          cartId: wishListId,
          error: tryNormalizeHttpError(error, this.logger)
        })])));
      }
      return EMPTY;
    })));
    this.setWishListId$ = createEffect(() => this.actions$.pipe(ofType(CREATE_WISH_LIST_SUCCESS, LOAD_WISH_LIST_SUCCESS), map((action) => {
      switch (action.type) {
        case CREATE_WISH_LIST_SUCCESS:
        case LOAD_WISH_LIST_SUCCESS: {
          return new cartGroup_actions.SetCartTypeIndex({
            cartType: CartType.WISH_LIST,
            cartId: action.meta.entityId
          });
        }
      }
    }), filter(isNotUndefined)));
    this.setWishListData$ = createEffect(() => this.actions$.pipe(ofType(CREATE_WISH_LIST_SUCCESS, LOAD_WISH_LIST_SUCCESS), map((action) => {
      switch (action.type) {
        case CREATE_WISH_LIST_SUCCESS:
        case LOAD_WISH_LIST_SUCCESS: {
          return new cartGroup_actions.SetCartData({
            cart: action.payload.cart,
            cartId: action.payload.cartId
          });
        }
      }
    }), filter(isNotUndefined)));
  }
  static {
    this.ɵfac = function WishListEffects_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishListEffects)(ɵɵinject(Actions), ɵɵinject(CartConnector), ɵɵinject(UserIdService), ɵɵinject(Store));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _WishListEffects,
      factory: _WishListEffects.ɵfac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListEffects, [{
    type: Injectable
  }], () => [{
    type: Actions
  }, {
    type: CartConnector
  }, {
    type: UserIdService
  }, {
    type: Store
  }], null);
})();
var effects = [WishListEffects];
var WishListStoreModule = class _WishListStoreModule {
  static {
    this.ɵfac = function WishListStoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishListStoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _WishListStoreModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListStoreModule, [{
    type: NgModule,
    args: [{
      imports: [EffectsModule.forFeature(effects)]
    }]
  }], null, null);
})();
var WishListCoreModule = class _WishListCoreModule {
  static {
    this.ɵfac = function WishListCoreModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishListCoreModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _WishListCoreModule,
      imports: [WishListStoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [...facadeProviders],
      imports: [WishListStoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListCoreModule, [{
    type: NgModule,
    args: [{
      imports: [WishListStoreModule],
      providers: [...facadeProviders]
    }]
  }], null, null);
})();

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list.mjs
var WishListModule = class _WishListModule {
  static {
    this.ɵfac = function WishListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WishListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _WishListModule,
      imports: [WishListComponentsModule, WishListCoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [WishListComponentsModule, WishListCoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishListModule, [{
    type: NgModule,
    args: [{
      imports: [WishListComponentsModule, WishListCoreModule]
    }]
  }], null, null);
})();
export {
  WishListModule
};
//# sourceMappingURL=@spartacus_cart_wish-list.js.map
