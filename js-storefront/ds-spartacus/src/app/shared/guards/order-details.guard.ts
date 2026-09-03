import { Injectable, SecurityContext, inject } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService, OccEndpointsService, WindowRef } from '@spartacus/core';
import { CustomerAccountService } from '../../core/customer-account/customer-account.service';
import { MyProfileService } from '../../feature/user/my-profile/service/my-profile.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';
import {
  AllProductLine,
  ProductLineHomePageURL,
} from '../enums/availableProductList.enum';

@Injectable({ providedIn: 'root' })
export class OrderDetailsGuardClass {
  productLine: string;

  constructor(
    protected authService: AuthService,
    private custAccService: CustomerAccountService,
    private myProfile: MyProfileService,
    private occEndpointsService: OccEndpointsService,
    private domSanitizer: DomSanitizer,
    private windowRef: WindowRef,
    private router: Router
  ) {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const storedUrlKey = 'storedUrl';
    const win = this.windowRef.nativeWindow;

    //if (!win.localStorage.getItem(storedUrlKey)) {
    const parsedUrl = new URL(state.url, win.location.origin);

    if (parsedUrl.searchParams.has('customer')) {
      win.localStorage.setItem(
        storedUrlKey,
        state.url?.split(' ')[0]?.trim()?.split('%20')[0]?.trim()
      );
    }
    // }

    const storedUrl = localStorage.getItem('storedUrl');

    let urlCustomer: string | null = null;

    if (storedUrl) {
      const urlWithoutSpace = storedUrl
        ?.split(' ')[0]
        ?.trim()
        ?.split('%20')[0]
        ?.trim();
      const parsedUrl = new URL(urlWithoutSpace, window.location.origin);
      urlCustomer = parsedUrl.searchParams.get('customer');
      console.log('getting customer from URL' + urlCustomer);
    }

    // const urlCustomer: string = route.queryParams['customer'];

    return this.authService.isUserLoggedIn().pipe(
      switchMap((isLoggedIn) => {
        if (!isLoggedIn) {
          this.router.navigate['login'];
          return of(false);
        }

        return this.custAccService.getMyProfile().pipe(
          take(1),
          switchMap((profile) => {
            const currentCustomer = profile?.orgUnit?.uid;

            if (urlCustomer) {
              console.log('Switching customer');
              return this.myProfile.getSalesAreaForSoldTo(urlCustomer).pipe(
                take(1),
                switchMap((res: any[]) => {
                  if (!Array.isArray(res) || res.length === 0) {
                    return of(true);
                  }
                  const salesAreaId = res[0].soldToId;

                  return this.custAccService
                    .updateSalesArea(salesAreaId, urlCustomer)
                    .pipe(
                      take(1),
                      map(() => {
                        this.custAccService.setProductLineForUser(
                          AllProductLine.waygate
                        );
                        this.custAccService.setProductLine(
                          AllProductLine.waygate
                        );
                        return true;
                      })
                    );
                })
              );
            }else{
              return of(true);
            }
          })
        );
      })
    );
  }
}

export const OrderDetailsGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => inject(OrderDetailsGuardClass).canActivate(route, state);
