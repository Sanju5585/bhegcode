import { Injectable, inject } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';

@Injectable({ providedIn: 'root' })
export class ProductLineGuardClass {
  constructor(
    protected authService: AuthService,
    private router: Router,
    private custAccService: CustomerAccountService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authService.isUserLoggedIn().subscribe((res) => {
      if (res) {
        let currentCustomer$ = this.custAccService.getCurrentCustomerAccount();
        let getProductLine$ = this.custAccService.getProductLine();
        combineLatest([currentCustomer$, getProductLine$])
          .pipe(take(1))
          .subscribe(([currentCust, proLine]) => {
            const availableProductLines = currentCust?.visibleCategories ?? [];
            const productLine = proLine;
            if (productLine) {
              if (state.url.includes(productLine)) {
                return true;
              } else if (availableProductLines.length > 1) {
                this.router.navigate(['/choose-brand']);
              } else {
                this.router.navigate([`/${productLine}`]);
              }
              return true;
            } else {
              if (availableProductLines.length > 1) {
                this.router.navigate(['/choose-brand']);
              } else if (availableProductLines.length == 1) {
                this.custAccService.setProductLine(availableProductLines[0]);
                this.router.navigate([availableProductLines[0]]);
              }

              return true;
            }
          });
      } else {
        return true;
      }
    });
    return true;
  }
}
export const ProductLineGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(ProductLineGuardClass).canActivate(route, state);
};
