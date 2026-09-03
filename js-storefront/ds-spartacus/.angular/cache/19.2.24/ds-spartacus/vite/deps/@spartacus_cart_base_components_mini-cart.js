import {
  ActiveCartFacade,
  CreateCartEvent
} from "./chunk-KEAKWHYV.js";
import {
  ICON_TYPE,
  IconComponent,
  IconModule
} from "./chunk-D5RDRHN5.js";
import "./chunk-AK2YBVEG.js";
import {
  AuthService,
  BASE_SITE_CONTEXT_ID,
  EventService,
  I18nModule,
  SiteContextParamsService,
  StatePersistenceService,
  StorageSyncType,
  TranslatePipe,
  UrlModule,
  UrlPipe,
  provideDefaultConfig,
  useFeatureStyles
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
  Injectable,
  NgModule,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-7OJSO65L.js";
import "./chunk-FBVS4YZX.js";
import "./chunk-3OYD2U7R.js";
import {
  combineLatest,
  distinctUntilChanged,
  map,
  of,
  startWith,
  takeWhile
} from "./chunk-R6FETK65.js";
import {
  switchMap
} from "./chunk-WTM5FSU4.js";
import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/cart/fesm2022/spartacus-cart-base-components-mini-cart.mjs
var _c0 = (a0) => ({
  quantity: a0
});
var _c1 = (a0) => ({
  count: a0
});
var _c2 = () => ({
  cxRoute: "cart"
});
var _c3 = (a0) => ({
  total: a0
});
function MiniCartComponent_a_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 1);
    ɵɵpipe(1, "cxTranslate");
    ɵɵpipe(2, "cxUrl");
    ɵɵpipe(3, "cxTranslate");
    ɵɵelement(4, "cx-icon", 2);
    ɵɵelementStart(5, "span", 3);
    ɵɵtext(6);
    ɵɵpipe(7, "async");
    ɵɵpipe(8, "cxTranslate");
    ɵɵelementEnd();
    ɵɵelementStart(9, "span", 4);
    ɵɵtext(10);
    ɵɵpipe(11, "async");
    ɵɵpipe(12, "cxTranslate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("title", ɵɵpipeBind2(1, 6, "miniCart.item", ɵɵpureFunction1(24, _c1, data_r1.quantity)))("routerLink", ɵɵpipeBind1(2, 9, ɵɵpureFunction0(26, _c2)));
    ɵɵattribute("aria-label", ɵɵpipeBind2(3, 11, "miniCart.item", ɵɵpureFunction1(27, _c1, data_r1.quantity)));
    ɵɵadvance(4);
    ɵɵproperty("type", ctx_r1.iconTypes.CART);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(8, 16, "miniCart.total", ɵɵpureFunction1(29, _c3, ɵɵpipeBind1(7, 14, ctx_r1.total$))), " ");
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(12, 21, "miniCart.count", ɵɵpureFunction1(31, _c1, ɵɵpipeBind1(11, 19, ctx_r1.quantity$))), " ");
  }
}
var MiniCartComponentService = class _MiniCartComponentService {
  constructor(activeCartFacade, authService, statePersistenceService, siteContextParamsService, eventService) {
    this.activeCartFacade = activeCartFacade;
    this.authService = authService;
    this.statePersistenceService = statePersistenceService;
    this.siteContextParamsService = siteContextParamsService;
    this.eventService = eventService;
  }
  /**
   * This function supports lazy loading of the cart functionality's code. We only call
   * the activeCartFacade if we know there is actually a cart.
   * Without a cart, we can return a default value and
   * avoid loading the cart library code.
   */
  getQuantity() {
    return this.activeCartRequired().pipe(switchMap((activeCartRequired) => {
      if (activeCartRequired) {
        return this.activeCartFacade.getActive().pipe(startWith({
          totalUnitCount: 0
        }), map((cart) => cart.totalUnitCount || 0));
      } else {
        return of(0);
      }
    }));
  }
  /**
   * This function supports lazy loading of the cart functionality's code. We only call
   * the activeCartFacade if we know there is actually a cart.
   * Without a cart, we can return a default value and
   * avoid loading the cart library code.
   */
  getTotalPrice() {
    return this.activeCartRequired().pipe(switchMap((activeCartRequired) => {
      if (activeCartRequired) {
        return this.activeCartFacade.getActive().pipe(map((cart) => cart.totalPrice?.formattedValue ?? ""));
      } else {
        return of("");
      }
    }));
  }
  /**
   * This function determines if it is required to get active cart data from ActiveCartFacade.
   * It is required to call the ActiveCartFacade if one of these criteria is met:
   * - There is an active cart id in the browser local storage
   * - A user is authenticated
   * - The cart library code chunk with the ActiveCartFacade implementation is already loaded.
   *
   * Once the observable returned by activeCartRequired emits true, it completes.
   * activeCartRequired helps to make the mini cart compatible with some level of lazy loading.
   */
  activeCartRequired() {
    return combineLatest([this.hasActiveCartInStorage(), this.authService.isUserLoggedIn(), this.isCartCreated()]).pipe(map(([hasCartInStorage, isUserLoggedIn, isCartCreated]) => hasCartInStorage || isUserLoggedIn || isCartCreated), distinctUntilChanged(), takeWhile((hasCart) => !hasCart, true));
  }
  hasActiveCartInStorage() {
    return this.getCartStateFromBrowserStorage().pipe(map((state) => Boolean(state?.active)));
  }
  isCartCreated() {
    return this.eventService.get(CreateCartEvent).pipe(map((_) => true), startWith(false));
  }
  getCartStateFromBrowserStorage() {
    return this.siteContextParamsService.getValues([BASE_SITE_CONTEXT_ID]).pipe(map((context) => {
      return this.statePersistenceService.readStateFromStorage({
        key: "cart",
        context,
        storageType: StorageSyncType.LOCAL_STORAGE
      });
    }));
  }
  static {
    this.ɵfac = function MiniCartComponentService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MiniCartComponentService)(ɵɵinject(ActiveCartFacade), ɵɵinject(AuthService), ɵɵinject(StatePersistenceService), ɵɵinject(SiteContextParamsService), ɵɵinject(EventService));
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _MiniCartComponentService,
      factory: _MiniCartComponentService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiniCartComponentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ActiveCartFacade
  }, {
    type: AuthService
  }, {
    type: StatePersistenceService
  }, {
    type: SiteContextParamsService
  }, {
    type: EventService
  }], null);
})();
var MiniCartComponent = class _MiniCartComponent {
  constructor(miniCartComponentService) {
    this.miniCartComponentService = miniCartComponentService;
    this.iconTypes = ICON_TYPE;
    this.quantity$ = this.miniCartComponentService.getQuantity();
    this.total$ = this.miniCartComponentService.getTotalPrice();
    useFeatureStyles("a11yMiniCartFocusOnMobile");
  }
  static {
    this.ɵfac = function MiniCartComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MiniCartComponent)(ɵɵdirectiveInject(MiniCartComponentService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _MiniCartComponent,
      selectors: [["cx-mini-cart"]],
      standalone: false,
      decls: 2,
      vars: 5,
      consts: [[3, "title", "routerLink", 4, "ngIf"], [3, "title", "routerLink"], [3, "type"], [1, "total"], [1, "count"]],
      template: function MiniCartComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, MiniCartComponent_a_0_Template, 13, 33, "a", 0);
          ɵɵpipe(1, "async");
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpureFunction1(3, _c0, ɵɵpipeBind1(1, 1, ctx.quantity$)));
        }
      },
      dependencies: [NgIf, RouterLink, IconComponent, AsyncPipe, UrlPipe, TranslatePipe],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiniCartComponent, [{
    type: Component,
    args: [{
      selector: "cx-mini-cart",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<a
  *ngIf="{ quantity: quantity$ | async } as data"
  [attr.aria-label]="'miniCart.item' | cxTranslate: { count: data.quantity }"
  [title]="'miniCart.item' | cxTranslate: { count: data.quantity }"
  [routerLink]="{ cxRoute: 'cart' } | cxUrl"
>
  <cx-icon [type]="iconTypes.CART"></cx-icon>

  <span class="total">
    {{ 'miniCart.total' | cxTranslate: { total: total$ | async } }}
  </span>

  <span class="count">
    {{ 'miniCart.count' | cxTranslate: { count: quantity$ | async } }}
  </span>
</a>
`
    }]
  }], () => [{
    type: MiniCartComponentService
  }], null);
})();
var MiniCartModule = class _MiniCartModule {
  static {
    this.ɵfac = function MiniCartModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MiniCartModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _MiniCartModule,
      declarations: [MiniCartComponent],
      imports: [CommonModule, RouterModule, UrlModule, IconModule, I18nModule],
      exports: [MiniCartComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [provideDefaultConfig({
        cmsComponents: {
          MiniCartComponent: {
            component: MiniCartComponent
          }
        }
      })],
      imports: [CommonModule, RouterModule, UrlModule, IconModule, I18nModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MiniCartModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, UrlModule, IconModule, I18nModule],
      providers: [provideDefaultConfig({
        cmsComponents: {
          MiniCartComponent: {
            component: MiniCartComponent
          }
        }
      })],
      declarations: [MiniCartComponent],
      exports: [MiniCartComponent]
    }]
  }], null, null);
})();
export {
  MiniCartComponent,
  MiniCartComponentService,
  MiniCartModule
};
//# sourceMappingURL=@spartacus_cart_base_components_mini-cart.js.map
