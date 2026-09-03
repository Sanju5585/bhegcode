import { Injectable, inject } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService, WindowRef } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';
import { ProductLineStorageKey } from '../enums/availableProductList.enum';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';

@Injectable({ providedIn: 'root' })
export class LoggedInHomeGuardClass {
  constructor(
    protected authService: AuthService,
    private router: Router,
    private custAccService: CustomerAccountService,
    private winRef: WindowRef
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authService.isUserLoggedIn().subscribe((res) => {
      if (res) {
        //taking values from local storage first
        const availableProductLines =
          this.custAccService.getAvaiableProductLineToFromStorage();
        const productLine = this.winRef.localStorage.getItem(
          ProductLineStorageKey.productLine
        );
        if (availableProductLines && availableProductLines.length >= 1) {
          if (availableProductLines.length > 1) {
            this.router.navigate(['/choose-brand']);
          } else if (availableProductLines.length == 1) {
            this.custAccService.setProductLine(availableProductLines[0]);
            this.router.navigate([availableProductLines[0]]);
          }
          return true;
        } else if (productLine) {
          this.custAccService.setProductLine(productLine);
          this.router.navigate([`/${productLine}`]);
          return true;
        } else if (!availableProductLines) {
          let currentCustomer = this.custAccService
            .getMyProfile()
            .subscribe((currentCustomer) => {
              const availableProductLines =
                currentCustomer?.visibleCategories ?? [];
              if (availableProductLines.length > 1) {
                this.router.navigate(['/choose-brand']);
                return true;
              } else if (availableProductLines.length == 1) {
                this.custAccService.setProductLine(availableProductLines[0]);
                this.router.navigate([availableProductLines[0]]);
                return true;
              }
            });
        } else if (!productLine) {
          let getProductLine$ = this.custAccService.getProductLine();
          getProductLine$.subscribe((productLine) => {
            if (productLine) {
              this.router.navigate([productLine]);
              return true;
            }
          });
        }
      } else {
        return true;
      }
    });
    return true;
  }
}
export const LoggedInHomeGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(LoggedInHomeGuardClass).canActivate(route, state);
};
