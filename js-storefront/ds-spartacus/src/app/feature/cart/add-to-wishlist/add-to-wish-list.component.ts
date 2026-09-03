import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OrderEntry } from '@spartacus/cart/base/root';
import { AuthService, Product } from '@spartacus/core';
import { CurrentProductService, ICON_TYPE } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { WishListFacade } from '@spartacus/cart/wish-list/root';

@Component({
  standalone: false,
  selector: 'cx-add-to-wishlist',
  templateUrl: './add-to-wish-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddToWishListComponent {
  product$: Observable<Product> = this.currentProductService.getProduct().pipe(
    filter((product) => Boolean(product)),
    tap((product) => this.setStockInfo(product))
  );

  wishListEntries$: Observable<OrderEntry[]> = this.wishListFacade
    .getWishList()
    .pipe(
      filter((wishlist) => Boolean(wishlist)),
      map((wishList: any) => wishList.entries)
    );

  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  loading$: Observable<boolean> = this.wishListFacade.getWishListLoading();

  hasStock = false;
  iconTypes = ICON_TYPE;

  constructor(
    protected wishListFacade: WishListFacade,
    protected currentProductService: CurrentProductService,
    protected authService: AuthService
  ) {}

  add(product: Product): void {
    this.wishListFacade.addEntry(product.code);
  }

  remove(entry: OrderEntry): void {
    this.wishListFacade.removeEntry(entry);
  }

  getProductInWishList(product: Product, entries: OrderEntry[]): OrderEntry {
    const item = entries.find((entry) => entry.product.code === product.code);
    return item;
  }

  private setStockInfo(product: Product): void {
    this.hasStock =
      product.stock && product.stock.stockLevelStatus !== 'outOfStock';
  }
}
