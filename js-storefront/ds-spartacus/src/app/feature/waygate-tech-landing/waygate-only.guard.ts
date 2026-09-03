import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import {
  AuthService,
  CmsService,
  ProtectedRoutesGuard,
  RoutingConfigService,
  RoutingService,
} from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { first, switchMap, tap } from 'rxjs/operators';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';
import { AllProductLine } from '../../shared/enums/availableProductList.enum';

@Injectable({
  providedIn: 'root',
})
export class WaygateOnlyGuardClass {
  productLine: string;
  constructor(
    protected authService: AuthService,
    private router: Router,
    protected routingService: RoutingService,
    protected cmsService: CmsService,
    protected protectedRoutesGuard: ProtectedRoutesGuard,
    protected routingConfig: RoutingConfigService,
    private custAccountService: CustomerAccountService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.protectedRoutesGuard.canActivate(route).pipe(
      switchMap((canActivate) =>
        canActivate
          ? this.routingService.getNextPageContext().pipe(
              switchMap((pageContext) =>
                this.cmsService.getPage(pageContext).pipe(
                  first(),
                  switchMap((pageData) => this.iswaygate())
                )
              )
            )
          : of(false)
      ),
      tap((val) => {
        if (!val) {
          this.router.navigate([this.productLine, 'access-denied']);
        }
      })
    );
  }

  iswaygate(): Observable<any> {
    // return of(true);
    return this.custAccountService.getProductLine().pipe(
      switchMap((productLine: string) => {
        if (
          productLine == AllProductLine.waygate ||
          productLine == AllProductLine.bently ||
          productLine == AllProductLine.panametrics ||
          productLine == AllProductLine.druck ||
          productLine == AllProductLine.reuterStokes
        ) {
          this.productLine = productLine;
          return of(true);
        }
        return of(false);
      })
    );
  }
}
export const WaygateOnlyGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  return inject(WaygateOnlyGuardClass).canActivate(route, state);
};
