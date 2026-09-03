import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BREADCRUMB } from './quote-cart.model';
import { TranslationService } from '@spartacus/core';
import { ActiveCartFacade, OrderEntry } from '@spartacus/cart/base/root';
import { filter, Observable, Subscription } from 'rxjs';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';

@Component({
  standalone: false,
  selector: 'ds-quote-cart',
  templateUrl: './quote-cart.component.html',
  styleUrls: ['./quote-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteCartComponent implements OnInit, OnDestroy {
  breadcrumbs: BREADCRUMB[] = [];
  cart$: Observable<any>;
  cart: any;
  deletedProductsCodeList = [];
  entries$: Observable<OrderEntry[]>;
  cartEntries: any;
  subscriptions: Subscription[] = [];
  cartEntryList: any;
  userType: string = 'current';
  productLine: AllProductLine;
  customerType$: Observable<string>;
  constructor(
    private translationService: TranslationService,
    private activeCartFacade: ActiveCartFacade,
    private customerAccService: CustomerAccountService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.translationService
        .translate('quoteCart.pageTitle')
        .subscribe((res: string) => {
          this.breadcrumbs = [
            {
              name: res,
              url: '/waygate/quote/cart',
            },
          ];
        })
    );
    this.subscriptions.push(
      this.customerAccService
        .getProductLine()
        .subscribe((productLine: AllProductLine) => {
          this.productLine = productLine;
        })
    );
    this.customerType$ = this.customerAccService.getCustomerUserType();
    this.loadQuoteCart();
  }

  OnUpdateCart(ev) {
    this.loadQuoteCart();
  }

  loadQuoteCart() {
    this.cart$ = this.activeCartFacade.getActive();
    this.subscriptions.push(
      this.cart$.subscribe((res) => {
        this.cart = res;
        this.checkDeletedProducts(res);
      })
    );
    this.entries$ = this.activeCartFacade
      .getEntries()
      .pipe(filter((entries) => entries.length > 0));
    this.subscriptions.push(
      this.entries$.subscribe((res) => {
        this.cartEntries = res;
      })
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

  setCartEntryList(e) {
    this.cartEntryList = e;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((item) => item.unsubscribe);
  }
}
