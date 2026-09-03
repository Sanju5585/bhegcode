import { Injectable, inject } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  CanActivateFn,
} from '@angular/router';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';

@Injectable({ providedIn: 'root' })
export class CustomLoginGuardClass {
  constructor(
    protected authService: AuthService,
    private globalMessageService: GlobalMessageService,
    private router: Router,
    private translate: TranslationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot) {
    this.authService.isUserLoggedIn().subscribe((res) => {
      console.log('login-auth-guard-res', res);
      if (res) {
        return true;
      } else {
        this.globalMessageService.add(
          this.getTranslatedText('userData.accessedByLoggedInUser'),
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        this.router.navigate(['/login']);
        return true;
      }
    });
    return true;
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
}
export const CustomLoginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot
) => {
  return inject(CustomLoginGuardClass).canActivate(route);
};
