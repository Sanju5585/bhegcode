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
import { Observable, of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { UserAccountFacade } from '@spartacus/user/account/root';
import {
  ActiveCartFacade,
  OrderEntry,
  PromotionLocation,
  PromotionResult,
} from '@spartacus/cart/base/root';
import { CartConfigService } from '@spartacus/cart/base/core';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { ApiService } from '../../../../core/http/api.service';
import { BreadcrumbService } from '../../../../shared/components/breadcrumb/breadcrumb.service';
import { Item } from '../../../cart';
import { SharedCartService } from '../../../cart/cart-shared/shared-cart.service';

@Component({
  standalone: false,
  selector: 'app-waygate-cart-detail',
  templateUrl: './waygate-cart-detail.component.html',
  styleUrls: ['./waygate-cart-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaygateCartDetailComponent implements OnInit {
  cart$: Observable<any>;
  cart: any;
  entries$: Observable<OrderEntry[]>;
  cartEntries: any;
  cartLoaded$: Observable<boolean>;
  loggedIn = false;
  orderPromotions$: Observable<PromotionResult[]>;
  promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;
  promotions$: Observable<PromotionResult[]>;
  selectiveCartEnabled: boolean;
  cartDetail;
  cartEntryList: any;
  userType = '';
  customerType$: Observable<string>;
  user$: Observable<unknown>;
  displayMaxSavedCartErrorMsg: boolean;
  breadcrumbs: any[] = [];
  isPartialShipment: boolean = false;
  productLine: string;
  deletedProductsCodeList = [];
  earlyShipment: boolean;
  isQuoteOrderConvertFlow: boolean;
  constructor(
    protected activeCartFacade: ActiveCartFacade,
    protected authService: AuthService,
    protected routingService: RoutingService,
    public apiService: ApiService,
    private userAccountFacade: UserAccountFacade,
    private globalMessageService: GlobalMessageService,
    private sharedCartService: SharedCartService,
    private cRef: ChangeDetectorRef,
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService,
    protected cartConfig: CartConfigService,
    private customerAccService: CustomerAccountService
  ) {
    this.breadcrumbs = [
      {
        name: 'Cart',
      },
    ];
  }

  ngOnInit() {
    this.customerAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });

    this.isQuoteOrderConvertFlow = JSON.parse(
      sessionStorage.getItem('isQuoteToOrder')
    );
    this.customerType$ = this.customerAccService.getCustomerUserType();
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
    this.cart$.subscribe((res) => {
      this.earlyShipment = res.earlyShipment;
      this.cart = res;
      this.checkDeletedProducts(res);
    });
    this.entries$ = this.activeCartFacade
      .getEntries()
      .pipe(filter((entries) => entries.length > 0));
    this.entries$.subscribe((res) => {
      this.cartEntries = res;
    });

    this.selectiveCartEnabled = this.cartConfig.isSelectiveCartEnabled();
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

  checkDeletedProducts(res) {
    const deletedProductCodes = res.deletedProductCodes;
    if (deletedProductCodes) {
      this.deletedProductsCodeList = deletedProductCodes.split(',');
    } else {
      this.deletedProductsCodeList = [];
    }
  }

  onCloseClick() {
    this.deletedProductsCodeList = [];
  }
}
