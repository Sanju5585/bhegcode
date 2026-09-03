import { Injectable, inject } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateFn,
} from '@angular/router';
import { Store } from '@ngrx/store';
import {
  AuthActions,
  AuthService,
  AuthToken,
  OccEndpointsService,
  AuthStorageService,
  UserIdService,
  OCC_USER_ID_CURRENT,
  StateWithClientAuth,
  AuthRedirectService,
  GlobalMessageType,
  GlobalMessageService,
  SiteContextActions,
  WindowRef,
  StorageSyncType,
} from '@spartacus/core';
import { OAuthService } from 'angular-oauth2-oidc';
import moment from 'moment';
import { CustomerAccountService } from '../customer-account/customer-account.service';
import { ApiService } from '../http/api.service';
import { DSAuthService, UserTypes } from './ds-auth.service';
import { map } from 'rxjs/operators';
import { UserRoleService } from '../../shared/services/user-role.service';
import { GoogleTagManagerService } from '../../shared/services/gtm.service';
import { SpinnerOverlayService } from '../../shared/components/spinner-overlay/spinner-overlay.service';
import { ProductLineHomePageURL } from '../../shared/enums/availableProductList.enum';
import { GtmEvents, LoginMethod } from '../../shared/enums/gtm.enum';
import { CommonService } from '../../shared/services/common.service';

export const localStorageCartId = 'spartacus⚿bhge⚿cart';
@Injectable({ providedIn: 'root' })
export class DSAuthGuardClass {
  constructor(
    protected oAuthService: OAuthService,
    protected authService: AuthService,
    protected apiService: ApiService,
    protected router: Router,
    protected occEndpointsService: OccEndpointsService,
    protected authStorageService: AuthStorageService,
    protected userIdService: UserIdService,
    protected store: Store<StateWithClientAuth>,
    protected authRedirectService: AuthRedirectService,
    private dsAuthService: DSAuthService,
    private globalMessageService: GlobalMessageService,
    private custAccountService: CustomerAccountService,
    private userRoleService: UserRoleService,
    protected gtmService: GoogleTagManagerService,
    private spinnerOverlayService: SpinnerOverlayService,
    private commonService: CommonService,
    protected winRef: WindowRef
  ) {}

  canActivate(route: ActivatedRouteSnapshot | any, state: RouterStateSnapshot) {
    let authCode = route.queryParams.code;
    let error = route.queryParams.error;
    
    const token: AuthToken = {
      access_token: '',
      access_token_stored_at: '',
    };
    let accessToken = '';
    if (authCode) {
      let url = this.occEndpointsService.buildUrl('dslogin/token/' + authCode);
      this.spinnerOverlayService.show();
      this.apiService.getData(url).subscribe(
        (authData: any) => {
          if (authData) {
            accessToken = authData?.access_token;
            if (accessToken == undefined || accessToken == '') {
              this.loginFailEvent();
              this.spinnerOverlayService.hide();
              this.dsAuthService.setAuthErrors({
                code: 2001,
              });
              return true;
            } else {
              token.access_token = authData.access_token;
              token.token_type = authData.token_type;
              token.refresh_token = authData.refresh_token;
              token.expires_at = authData.expires_in;
              token.granted_scopes = authData.scope.split(' ');
              // token.userId = authData.userId
              const date = new Date();
              const expirationTime = moment(date)
                .add(token.expires_at, 's')
                .toDate();
              // date.setSeconds(date.getSeconds() + token.expires_in);
              token.access_token_stored_at = '' + Date.now();
              this.custAccountService.removeGuestActiveFromStorage();
              const storageType = StorageSyncType.LOCAL_STORAGE;
              const storage = this.commonService.getStorage(
                storageType,
                this.winRef
              );
              storage.removeItem(localStorageCartId);
              this.authStorageService.setToken(token);
              this.userIdService.setUserId(OCC_USER_ID_CURRENT);
              this.store.dispatch(new AuthActions.Login());
              const userType = OCC_USER_ID_CURRENT;
              this.userRoleService.getCurrentUserRole(userType);
              this.custAccountService.loadCurrentCustomerAccount();
              let url = this.occEndpointsService.buildUrl(
                'users/current/myprofile'
              );
              this.apiService
                .getData(url)
                .pipe(
                  map((res) => {
                    return {
                      ...res['orgUnit'],
                      ...res['recentSalesArea'],
                      ...res['email'],
                      ...res['userType'],
                    };
                  })
                )
                .subscribe((customerAccount: any) => {
                  this.gtmService.sendEvent({
                    event: GtmEvents.Login,
                    authentication_method: LoginMethod.Okta,
                    user_id: customerAccount.email,
                    userType: customerAccount.userType,
                  });
                  this.spinnerOverlayService.hide();                 

                  const storedUrl =
                    localStorage.getItem('storedUrl');
                  if (storedUrl) {
                    console.log("Removing stored URL");
                    localStorage.removeItem('storedUrl');
                    this.router.navigateByUrl(storedUrl);
                    return; 
                  }

                  const orderDetail = JSON.parse(
                    this.winRef.nativeWindow.localStorage.getItem(
                      'mywagateOrderDetails'
                    )
                  );
                  console.log(`'orderDetail', ${orderDetail}`);
                  if (
                    orderDetail &&
                    Object.keys(orderDetail).length > 0 &&
                    !orderDetail?.isLogin
                  ) {
                    this.custAccountService.fetchNotificationFromBackend(
                      orderDetail?.MyWagateCustId
                    );
                    this.custAccountService.fetchOrderDetails(
                      orderDetail?.orderId,
                      orderDetail?.MyWagateCustId,
                      'orderNumber',
                      orderDetail?.MyWagateSalesId
                    );

                    this.router.navigate(['/choose-brand']);
                  } else {
                    this.custAccountService.fetchNotificationFromBackend(
                      customerAccount?.orgUnit?.uid
                    );
                    this.custAccountService.updateAvaiableProductLine(
                      authData?.visibleCategories || []
                    );
                    if (
                      authData?.visibleCategories &&
                      authData?.visibleCategories.length > 1
                    ) {
                      this.router.navigate(['/choose-brand']);
                    } else if (
                      authData?.visibleCategories &&
                      authData?.visibleCategories.length == 1
                    ) {
                      this.custAccountService.setProductLine(
                        authData?.visibleCategories[0]
                      );
                     this.router.navigate(['/choose-brand']);
                    } else {
                      this.custAccountService.setProductLine('');
                      this.router.navigate(['/homepage']);
                    }
                  }
                });
            }
          }

          // token.expiration_time = expirationTime.toJSON()

          if (authData.internalUser) {
            this.dsAuthService.setUserTypeToStorage(UserTypes.INTERNAL);
          } else {
            this.dsAuthService.setUserTypeToStorage(UserTypes.EXTERNAL);
          }
          if (authData.default_currency) {
            this.store.dispatch(
              new SiteContextActions.SetActiveCurrency(
                authData.default_currency
              )
            );
          }
        },
        (er) => {
          this.loginFailEvent();
          this.spinnerOverlayService.hide();
          if (er.error?.errors[0]?.reason) {
            this.dsAuthService.setAuthErrors({
              code: er.error.errors[0].reason,
              message: er.error.errors[0].message,
              subject: er.error.errors[0].subject,
            });
            return true;
          } else {
            this.globalMessageService.add(
              'Login failed due a technical issue. Please try again later or contact customer care',
              GlobalMessageType.MSG_TYPE_ERROR,
              10000
            );
            this.router.navigate(['/login']);
          }
        }
      );
    } else if (error == 'access_denied') {
      this.loginFailEvent();
      this.spinnerOverlayService.hide();
      this.dsAuthService.setAuthErrors({
        code: 2009,
      });
      return true;
    } else {
      this.loginFailEvent();
      this.spinnerOverlayService.hide();
      this.globalMessageService.add(
        'Account has been disabled',
        GlobalMessageType.MSG_TYPE_ERROR,
        10000
      );
      this.router.navigate(['/login']);
    }

    return true;
  }

  loginFailEvent() {
    this.gtmService.sendEvent({
      event: GtmEvents.LoginError,
      authentication_method: LoginMethod.Okta,
    });
  }
}
export const DSAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(DSAuthGuardClass).canActivate(route, state);
};
