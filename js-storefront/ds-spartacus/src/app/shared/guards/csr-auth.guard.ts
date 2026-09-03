import { first, switchMap, tap } from 'rxjs/operators';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';

@Injectable({
  providedIn: 'root',
})
export class CSRAuthGuardClass {
  productLine: string;
  constructor(
    protected authService: AuthService,
    private customerAccountService: CustomerAccountService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    return this.authService.isUserLoggedIn().pipe(
      first(),
      switchMap((isUserLoggedIn) =>
        isUserLoggedIn
          ? this.customerAccountService.getProductLine().pipe(
              switchMap((selectedBrand) => {
                this.productLine = selectedBrand;
                return this.checkProductLineAccess(selectedBrand);
              })
            )
          : of(false)
      )
    );
  }

  checkProductLineAccess(selectedBrand): Observable<any> {
    return this.customerAccountService.getMyProfile().pipe(
      switchMap((customerAccount: any) => {
        const accessCSRProductLines =
          customerAccount.accessCSRProductLines &&
          customerAccount.accessCSRProductLines.length > 0
            ? customerAccount.accessCSRProductLines
            : [];
        if (accessCSRProductLines.includes(selectedBrand)) return of(true);
        return of(false);
      }),
      tap((val) => {
        if (!val) {
          this.router.navigate([selectedBrand, 'access-denied']);
        }
      })
    );
  }
}

export const CSRAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot
): Observable<boolean> => {
  return inject(CSRAuthGuardClass).canActivate(route);
};
