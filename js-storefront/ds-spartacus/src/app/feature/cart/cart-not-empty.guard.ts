import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ActiveCartFacade, Cart } from '@spartacus/cart/base/root';
import { RoutingService } from '@spartacus/core';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';
import { ProductLineHomePageURL } from '../../shared/enums/availableProductList.enum';

@Injectable({
  providedIn: 'root',
})
export class CartNotEmptyGuardClass {
  selectedBrand$: Observable<string>;
  constructor(
    protected routingService: RoutingService,
    protected activeCartFacade: ActiveCartFacade,
    protected router: Router,
    private custAccountService: CustomerAccountService
  ) {}

  canActivate(): Observable<boolean> {
    return combineLatest([
      this.activeCartFacade.getActive(),
      this.activeCartFacade.isStable(),
    ]).pipe(
      filter(([_, loaded]) => loaded),
      map(([cart]) => {
        if (this.isEmpty(cart)) {
          this.selectedBrand$ = this.custAccountService.getProductLine();
          this.selectedBrand$.subscribe((brand) => {
            if (brand) {
              this.router.navigate([ProductLineHomePageURL[brand]]);
            } else {
              this.routingService.go({ cxRoute: 'home' });
            }
          });
          return false;
        }
        return true;
      })
    );
  }

  private isEmpty(cart: Cart): boolean {
    return cart && !cart.totalItems;
  }
}

export const CartNotEmptyGuard: CanActivateFn = (): Observable<boolean> => {
  return inject(CartNotEmptyGuardClass).canActivate();
};
