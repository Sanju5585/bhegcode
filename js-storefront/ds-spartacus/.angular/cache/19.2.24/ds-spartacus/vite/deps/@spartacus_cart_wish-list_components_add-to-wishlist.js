import {
  WishListFacade
} from "./chunk-OS2ZNFTQ.js";
import "./chunk-KEAKWHYV.js";
import {
  AtMessageDirective,
  AtMessageModule,
  BtnLikeLinkDirective,
  BtnLikeLinkModule,
  CurrentProductService,
  ICON_TYPE,
  IconComponent,
  IconModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthService,
  FeatureDirective,
  FeaturesConfigModule,
  I18nModule,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  isNotNullable,
  provideDefaultConfig
} from "./chunk-VIVIQI6G.js";
import "./chunk-WEHTOAST.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-EBCNDD52.js";
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
  NgIf
} from "./chunk-S7KROBXW.js";
import "./chunk-5AFE3VT7.js";
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  ViewChild,
  setClassMetadata,
  ɵɵadvance,
  ɵɵdefineComponent,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  filter,
  map,
  take,
  tap
} from "./chunk-R6FETK65.js";
import "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-wish-list-components-add-to-wishlist.mjs
var _c0 = ["addToWishlistButton"];
var _c1 = ["removeFromWishlistButton"];
var _c2 = () => ({
  cxRoute: "login"
});
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "button", 7, 2);
    ɵɵpipe(3, "async");
    ɵɵpipe(4, "cxTranslate");
    ɵɵlistener("click", function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_div_1_Template_button_click_1_listener() {
      const entry_r2 = ɵɵrestoreView(_r1).ngIf;
      const ctx_r2 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r2.remove(entry_r2));
    });
    ɵɵelement(5, "cx-icon", 8);
    ɵɵelementStart(6, "span", 9);
    ɵɵtext(7);
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("disabled", ɵɵpipeBind1(3, 4, ctx_r2.loading$))("cxAtMessage", ɵɵpipeBind1(4, 6, "addToWishList.removedFromWishList"));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r2.iconTypes.HEART);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(8, 8, "addToWishList.remove"));
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 10, 3);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "cxTranslate");
    ɵɵlistener("click", function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_template_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r4);
      const product_r5 = ɵɵnextContext(5).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.add(product_r5));
    });
    ɵɵelement(4, "cx-icon", 8);
    ɵɵelementStart(5, "span", 9);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(6);
    ɵɵproperty("disabled", ɵɵpipeBind1(2, 4, ctx_r2.loading$))("cxAtMessage", ɵɵpipeBind1(3, 6, "addToWishList.addedToWishList"));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r2.iconTypes.EMPTY_HEART);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(7, 8, "addToWishList.add"));
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_div_1_Template, 9, 10, "div", 5)(2, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_ng_template_2_Template, 8, 10, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const addItem_r6 = ɵɵreference(3);
    const entries_r7 = ɵɵnextContext(2).ngIf;
    const product_r5 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getProductInWishList(product_r5, entries_r7))("ngIfElse", addItem_r6);
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div")(1, "button", 11);
    ɵɵpipe(2, "async");
    ɵɵpipe(3, "cxTranslate");
    ɵɵlistener("click", function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_2_div_1_Template_button_click_1_listener() {
      const entry_r9 = ɵɵrestoreView(_r8).ngIf;
      const ctx_r2 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r2.remove(entry_r9));
    });
    ɵɵelement(4, "cx-icon", 8);
    ɵɵelementStart(5, "span", 9);
    ɵɵtext(6);
    ɵɵpipe(7, "cxTranslate");
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("disabled", ɵɵpipeBind1(2, 4, ctx_r2.loading$))("cxAtMessage", ɵɵpipeBind1(3, 6, "addToWishList.removedFromWishList"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.HEART);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(7, 8, "addToWishList.remove"));
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵpipe(1, "async");
    ɵɵpipe(2, "cxTranslate");
    ɵɵlistener("click", function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r10);
      const product_r5 = ɵɵnextContext(5).ngIf;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.add(product_r5));
    });
    ɵɵelement(3, "cx-icon", 8);
    ɵɵelementStart(4, "span", 9);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(6);
    ɵɵproperty("disabled", ɵɵpipeBind1(1, 4, ctx_r2.loading$))("cxAtMessage", ɵɵpipeBind1(2, 6, "addToWishList.addedToWishList"));
    ɵɵadvance(3);
    ɵɵproperty("type", ctx_r2.iconTypes.EMPTY_HEART);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 8, "addToWishList.add"));
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_2_div_1_Template, 8, 10, "div", 5)(2, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_2_ng_template_2_Template, 7, 10, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const addItem_r11 = ɵɵreference(3);
    const entries_r7 = ɵɵnextContext(2).ngIf;
    const product_r5 = ɵɵnextContext(2).ngIf;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getProductInWishList(product_r5, entries_r7))("ngIfElse", addItem_r11);
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 6)(2, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵadvance();
    ɵɵproperty("cxFeature", "a11yLinkBtnsToTertiaryBtns");
    ɵɵadvance();
    ɵɵproperty("cxFeature", "!a11yLinkBtnsToTertiaryBtns");
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.hasStock);
  }
}
function AddToWishListComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddToWishListComponent_ng_container_0_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 1, ctx_r2.wishListEntries$));
  }
}
function AddToWishListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AddToWishListComponent_ng_container_0_ng_container_1_Template, 3, 3, "ng-container", 5);
    ɵɵpipe(2, "async");
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const loginPrompt_r12 = ɵɵreference(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", ɵɵpipeBind1(2, 2, ctx_r2.userLoggedIn$))("ngIfElse", loginPrompt_r12);
  }
}
function AddToWishListComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "a", 13);
    ɵɵpipe(2, "cxUrl");
    ɵɵelement(3, "cx-icon", 8);
    ɵɵelementStart(4, "span", 9);
    ɵɵtext(5);
    ɵɵpipe(6, "cxTranslate");
    ɵɵelementEnd()();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("routerLink", ɵɵpipeBind1(2, 3, ɵɵpureFunction0(7, _c2)));
    ɵɵadvance(2);
    ɵɵproperty("type", ctx_r2.iconTypes.EMPTY_HEART);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ɵɵpipeBind1(6, 5, "addToWishList.anonymous"));
  }
}
function AddToWishListComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, AddToWishListComponent_ng_template_2_ng_container_0_Template, 7, 8, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r2.hasStock);
  }
}
var AddToWishListComponent = class _AddToWishListComponent {
  constructor(wishListFacade, currentProductService, authService) {
    this.wishListFacade = wishListFacade;
    this.currentProductService = currentProductService;
    this.authService = authService;
    this.product$ = this.currentProductService.getProduct().pipe(filter(isNotNullable), tap((product) => this.setStockInfo(product)));
    this.userLoggedIn$ = this.authService.isUserLoggedIn().pipe(tap((isLogin) => {
      if (isLogin) {
        this.wishListEntries$ = this.getWishListEntries();
        this.loading$ = this.wishListFacade.getWishListLoading();
      }
    }));
    this.hasStock = false;
    this.iconTypes = ICON_TYPE;
  }
  add(product) {
    if (product.code) {
      this.wishListFacade.addEntry(product.code);
      this.restoreFocus();
    }
  }
  remove(entry) {
    this.wishListFacade.removeEntry(entry);
    this.restoreFocus();
  }
  getProductInWishList(product, entries) {
    const item = entries.find((entry) => entry.product?.code === product.code);
    return item;
  }
  setStockInfo(product) {
    this.hasStock = Boolean(product.stock && product.stock.stockLevelStatus !== "outOfStock");
  }
  getWishListEntries() {
    return this.wishListFacade.getWishList().pipe(filter((wishlist) => Boolean(wishlist)), map((wishList) => wishList.entries ?? []));
  }
  /**
   * When disabling the button, the focus gets lost unexpecedly.
   * This method makes sure that it is restored after.
   */
  restoreFocus() {
    this.loading$.pipe(filter((isLoading) => !isLoading), take(1)).subscribe(() => {
      this.removeFromWishlistButton?.nativeElement.focus() || this.addToWishlistButton?.nativeElement.focus();
    });
  }
  static {
    this.ɵfac = function AddToWishListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddToWishListComponent)(ɵɵdirectiveInject(WishListFacade), ɵɵdirectiveInject(CurrentProductService), ɵɵdirectiveInject(AuthService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _AddToWishListComponent,
      selectors: [["cx-add-to-wishlist"]],
      viewQuery: function AddToWishListComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5);
          ɵɵviewQuery(_c1, 5);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.addToWishlistButton = _t.first);
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.removeFromWishlistButton = _t.first);
        }
      },
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [["loginPrompt", ""], ["addItem", ""], ["removeFromWishlistButton", ""], ["addToWishlistButton", ""], [4, "ngIf"], [4, "ngIf", "ngIfElse"], [4, "cxFeature"], [1, "btn", "btn-tertiary", "button-remove", 3, "click", "disabled", "cxAtMessage"], ["aria-hidden", "true", 3, "type"], [1, "button-text"], [1, "btn", "btn-tertiary", "button-add", 3, "click", "disabled", "cxAtMessage"], [1, "btn", "btn-link", "button-remove", "cx-action-link", 3, "click", "disabled", "cxAtMessage"], [1, "btn", "btn-link", "button-add", "cx-action-link", 3, "click", "disabled", "cxAtMessage"], ["cxBtnLikeLink", "", 1, "btn", "btn-link", "button-add-link", "cx-action-link", 3, "routerLink"]],
      template: function AddToWishListComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, AddToWishListComponent_ng_container_0_Template, 3, 4, "ng-container", 4);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, AddToWishListComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.product$));
        }
      },
      dependencies: [NgIf, IconComponent, RouterLink, AtMessageDirective, FeatureDirective, BtnLikeLinkDirective, AsyncPipe, TranslatePipe, UrlPipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToWishListComponent, [{
    type: Component,
    args: [{
      selector: "cx-add-to-wishlist",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<ng-container *ngIf="product$ | async as product">
  <ng-container *ngIf="userLoggedIn$ | async; else loginPrompt">
    <ng-container *ngIf="wishListEntries$ | async as entries">
      <ng-container *ngIf="hasStock">
        <!-- TODO: (CXSPA-7603) - Remove feature flag next major release. -->
        <ng-container *cxFeature="'a11yLinkBtnsToTertiaryBtns'">
          <div
            *ngIf="
              getProductInWishList(product, entries) as entry;
              else addItem
            "
          >
            <button
              #removeFromWishlistButton
              class="btn btn-tertiary button-remove"
              (click)="remove(entry)"
              [disabled]="loading$ | async"
              [cxAtMessage]="'addToWishList.removedFromWishList' | cxTranslate"
            >
              <cx-icon aria-hidden="true" [type]="iconTypes.HEART"></cx-icon>
              <span class="button-text">{{
                'addToWishList.remove' | cxTranslate
              }}</span>
            </button>
          </div>
          <ng-template #addItem>
            <button
              #addToWishlistButton
              class="btn btn-tertiary button-add"
              (click)="add(product)"
              [disabled]="loading$ | async"
              [cxAtMessage]="'addToWishList.addedToWishList' | cxTranslate"
            >
              <cx-icon
                aria-hidden="true"
                [type]="iconTypes.EMPTY_HEART"
              ></cx-icon>
              <span class="button-text">{{
                'addToWishList.add' | cxTranslate
              }}</span>
            </button>
          </ng-template>
        </ng-container>
        <ng-container *cxFeature="'!a11yLinkBtnsToTertiaryBtns'"
          ><div
            *ngIf="
              getProductInWishList(product, entries) as entry;
              else addItem
            "
          >
            <button
              class="btn btn-link button-remove cx-action-link"
              (click)="remove(entry)"
              [disabled]="loading$ | async"
              [cxAtMessage]="'addToWishList.removedFromWishList' | cxTranslate"
            >
              <cx-icon aria-hidden="true" [type]="iconTypes.HEART"></cx-icon>
              <span class="button-text">{{
                'addToWishList.remove' | cxTranslate
              }}</span>
            </button>
          </div>
          <ng-template #addItem>
            <button
              class="btn btn-link button-add cx-action-link"
              (click)="add(product)"
              [disabled]="loading$ | async"
              [cxAtMessage]="'addToWishList.addedToWishList' | cxTranslate"
            >
              <cx-icon
                aria-hidden="true"
                [type]="iconTypes.EMPTY_HEART"
              ></cx-icon>
              <span class="button-text">{{
                'addToWishList.add' | cxTranslate
              }}</span>
            </button>
          </ng-template>
        </ng-container>
      </ng-container>
    </ng-container>
  </ng-container>
</ng-container>

<ng-template #loginPrompt>
  <ng-container *ngIf="hasStock">
    <a
      class="btn btn-link button-add-link cx-action-link"
      [routerLink]="{ cxRoute: 'login' } | cxUrl"
      cxBtnLikeLink
    >
      <cx-icon aria-hidden="true" [type]="iconTypes.EMPTY_HEART"></cx-icon>
      <span class="button-text">{{
        'addToWishList.anonymous' | cxTranslate
      }}</span>
    </a>
  </ng-container>
</ng-template>
`
    }]
  }], () => [{
    type: WishListFacade
  }, {
    type: CurrentProductService
  }, {
    type: AuthService
  }], {
    addToWishlistButton: [{
      type: ViewChild,
      args: ["addToWishlistButton"]
    }],
    removeFromWishlistButton: [{
      type: ViewChild,
      args: ["removeFromWishlistButton"]
    }]
  });
})();
var AddToWishListModule = class _AddToWishListModule {
  static {
    this.ɵfac = function AddToWishListModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddToWishListModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _AddToWishListModule,
      declarations: [AddToWishListComponent],
      imports: [CommonModule, I18nModule, IconModule, RouterModule, UrlModule, AtMessageModule, FeaturesConfigModule, BtnLikeLinkModule],
      exports: [AddToWishListComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          AddToWishListComponent: {
            component: AddToWishListComponent
          }
        }
      })],
      imports: [CommonModule, I18nModule, IconModule, RouterModule, UrlModule, AtMessageModule, FeaturesConfigModule, BtnLikeLinkModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddToWishListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, I18nModule, IconModule, RouterModule, UrlModule, AtMessageModule, FeaturesConfigModule, BtnLikeLinkModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          AddToWishListComponent: {
            component: AddToWishListComponent
          }
        }
      })],
      declarations: [AddToWishListComponent],
      exports: [AddToWishListComponent]
    }]
  }], null, null);
})();
export {
  AddToWishListComponent,
  AddToWishListModule
};
//# sourceMappingURL=@spartacus_cart_wish-list_components_add-to-wishlist.js.map
