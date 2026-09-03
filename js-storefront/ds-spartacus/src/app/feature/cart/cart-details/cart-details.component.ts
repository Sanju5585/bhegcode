import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  RoutingService,
  TranslationService,
} from '@spartacus/core';
// import { PromotionService } from '@spartacus/storefront';
import { combineLatest, Observable, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Item } from '../cart-shared/cart-item/cart-item.component';
import { SharedCartService } from '../cart-shared/shared-cart.service';
import { UserAccountFacade } from '@spartacus/user/account/root';
import {
  ActiveCartFacade,
  OrderEntry,
  PromotionLocation,
  PromotionResult,
} from '@spartacus/cart/base/root';
import {
  CartConfigService,
  SelectiveCartService,
} from '@spartacus/cart/base/core';
import { ApiService } from '../../../core/http/api.service';
import { BreadcrumbService } from '../../../shared/components/breadcrumb/breadcrumb.service';

@Component({
  standalone: false,
  selector: 'ds-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss'],
  host: { class: 'DSCartPageTemplate' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDetailsComponent implements OnInit {
  cart$: Observable<any>;
  entries$: Observable<OrderEntry[]>;
  cartLoaded$: Observable<boolean>;
  loggedIn = false;
  orderPromotions$: Observable<PromotionResult[]>;
  promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;
  promotions$: Observable<PromotionResult[]>;
  selectiveCartEnabled: boolean;
  cartDetail;
  cartEntryList: any;
  userType = '';
  user$: Observable<unknown>;
  displayMaxSavedCartErrorMsg: boolean;

  constructor(
    protected activeCartFacade: ActiveCartFacade,
    // protected promotionService: PromotionService,
    // protected selectiveCartService: SelectiveCartService,
    protected authService: AuthService,
    protected routingService: RoutingService,
    public apiService: ApiService,
    private userAccountFacade: UserAccountFacade,
    private globalMessageService: GlobalMessageService,
    private sharedCartService: SharedCartService,
    private cRef: ChangeDetectorRef,
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService,
    protected cartConfig: CartConfigService
  ) {}

  ngOnInit() {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('buyCart.buyCart')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );

    this.loadShoppingCart();
  }

  saveForLater(item: Item) {
    if (this.loggedIn) {
      this.activeCartFacade.removeEntry(item);
      this.activeCartFacade.addEntry(item.product.code, item.quantity);
    } else {
      this.routingService.go({ cxRoute: 'login' });
    }
  }
  scrollCartEntryIntoView(index) {
    const elementToScrollInto = this.cartEntryList.find(
      (el) => el.cartNumber === index
    );
    elementToScrollInto.elRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }

  setCartEntryList(e) {
    this.cartEntryList = e;
  }

  reloadCart(event) {
    this.loadShoppingCart();
  }

  loadShoppingCart() {
    this.cart$ = this.activeCartFacade.getActive();
    // this.promotions$ = this.promotionService.getOrderPromotionsFromCart();

    this.entries$ = this.activeCartFacade
      .getEntries()
      .pipe(filter((entries) => entries.length > 0));

    this.selectiveCartEnabled = this.cartConfig.isSelectiveCartEnabled();

    // this.cartLoaded$ = combineLatest([
    //   this.activeCartFacade.isStable(),
    //   this.selectiveCartEnabled
    //     ? this.selectiveCartService.isStable()
    //     : of(false),
    //   this.authService.isUserLoggedIn(),
    // ]).pipe(
    //   tap(([, , loggedIn]) => (this.loggedIn = loggedIn)),
    //   map(([cartLoaded, sflLoaded, loggedIn]) =>
    //     loggedIn && this.selectiveCartEnabled
    //       ? cartLoaded && sflLoaded
    //       : cartLoaded
    //   )
    // );

    // this.orderPromotions$ = this.promotionService.getOrderPromotions(
    //   this.promotionLocation
    // );

    this.sharedCartService.maxSavedCartErrorNotification.subscribe(
      (data) => {
        this.displayMaxSavedCartErrorMsg = data;
        this.cRef.detectChanges();
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          5000
        );
        window.scrollTo(0, 0);
      }
    );
  }
}
