import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActiveCartFacade, Cart, OrderEntry } from '@spartacus/cart/base/root';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'cx-cart-totals',
  templateUrl: './cart-totals.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartTotalsComponent implements OnInit {
  cart$: Observable<Cart>;
  entries$: Observable<OrderEntry[]>;

  constructor(protected activeCartFacade: ActiveCartFacade) {}

  ngOnInit() {
    this.cart$ = this.activeCartFacade.getActive();
    this.entries$ = this.activeCartFacade
      .getEntries()
      .pipe(filter((entries) => entries.length > 0));
  }
}
