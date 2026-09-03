import { Injectable, inject } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
} from '@angular/router';
import {
  AuthService,
  RoutingService,
  CmsService,
  ProtectedRoutesGuard,
  RoutingConfigService,
  User,
  OCC_USER_ID_CURRENT,
  OCC_USER_ID_ANONYMOUS,
} from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { switchMap, first, take, tap } from 'rxjs/operators';
import { UserRoleService } from '../services/user-role.service';
import { HttpClient } from '@angular/common/http';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';
import { ApiService } from '../../core/http/api.service';

@Injectable({ providedIn: 'root' })
export class UserRoleGuardClass {
  user$: Observable<User>;
  userType = '';
  productLine: string;

  constructor(
    protected authService: AuthService,
    private router: Router,
    private apiService: ApiService,
    protected routingService: RoutingService,
    protected cmsService: CmsService,
    protected protectedRoutesGuard: ProtectedRoutesGuard,
    protected routingConfig: RoutingConfigService,
    private userRoleService: UserRoleService,
    private http: HttpClient,
    private customerAccountService: CustomerAccountService
  ) {
    this.customerAccountService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }

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
                  switchMap((pageData) =>
                    this.authService.isUserLoggedIn().pipe(
                      first(),
                      take(1),
                      switchMap((isLoggedIn) =>
                        this.getUserRoleAccess(isLoggedIn, pageData)
                      )
                    )
                  )
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

  getUserRoleAccess(isLoggedIn, pageData): Observable<any> {
    // return of(true);
    const userType = isLoggedIn ? OCC_USER_ID_CURRENT : OCC_USER_ID_ANONYMOUS;
    if (pageData) {
      const urlParams = ['users', userType, 'roleAccessCheck'];
      const apiUrl =
        this.apiService.constructUrl(urlParams) + '?pageId=' + pageData.pageId;
      return this.http.get(apiUrl, { responseType: 'json' }).pipe(
        switchMap((res: any) => {
          this.userRoleService.userRoleInfo.next(res);
          return of(res);
        })
      );
    }
  }
}
export const UserRoleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  return inject(UserRoleGuardClass).canActivate(route, state);
};
