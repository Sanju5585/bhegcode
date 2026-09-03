import { Injectable, inject } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '@spartacus/core';
import {
  AllProductLine,
  ProductLineHomePageURL,
} from '../enums/availableProductList.enum';

@Injectable({ providedIn: 'root' })
export class AnonymousUserGaurdClass {
  constructor(
    protected authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.authService.isUserLoggedIn().subscribe((res) => {
      if (!res) {
        return true;
      } else {
        this.router.navigate([
          ProductLineHomePageURL[this.getProductLineKeyFromUrl(state)],
        ]);
        return true;
      }
    });
    return true;
  }

  getProductLineKeyFromUrl(state): AllProductLine | string {
    for (const key in AllProductLine) {
      if (state.url.includes(AllProductLine[key])) {
        return AllProductLine[key];
      }
    }
    return '/';
  }
}

export const AnonymousUserGaurd: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(AnonymousUserGaurdClass).canActivate(route, state);
};
