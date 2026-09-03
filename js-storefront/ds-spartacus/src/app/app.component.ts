import { Component, OnDestroy, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  NavigationEnd,
  NavigationStart,
  ResolveEnd,
  Router,
} from '@angular/router';
import {
  AuthRedirectStorageService,
  AuthService,
  AuthStorageService,
  GlobalMessageService,
  GlobalMessageType,
  OccEndpointsService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  WindowRef,
  SiteContextActions,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { debounceTime, mergeMap, take } from 'rxjs/operators';
import { DSAuthService } from './core/auth/ds-auth.service';
import { CustomerAccountService } from './core/customer-account/customer-account.service';
import { ApiService } from './core/http/api.service';
import { GoogleTagManagerService } from './shared/services/gtm.service';
import { UserRoleService } from './shared/services/user-role.service';
import { DS_DIALOG } from './core/dialog/dialog.config';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import {
  AllProductLine,
  ProductLineStorageKey,
} from './shared/enums/availableProductList.enum';
import { fromEvent, merge, Observable } from 'rxjs';

export const TIMEOUT = 1000 * 60 * 60 * 1;
@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'Dsstore';
  public data: any;
  loggedIn: boolean;
  userType: string;
  cartId: string;
  count = 0;
  prevBool = false;

  // timeout code
  idleState = 'Not started.';
  idleTimeoutStart = false;
  timedOut = false;
  lastPing?: Date = null;

  idleTimeoutModalRef = null;
  currentCustAccount;
  lastActionTime: Date;
  private intervalId: any;
  productLine: any;
  constructor(
    private authRedirectStorageService: AuthRedirectStorageService,
    private launchDialogService: LaunchDialogService,
    public auth: AuthService,
    private router: Router,
    private gtmService: GoogleTagManagerService,
    private custAccService: CustomerAccountService,
    private userRoleService: UserRoleService,
    private dsAuthService: DSAuthService,
    private windowRef: WindowRef,
    private store: Store,
    private authStorageService: AuthStorageService,
    private occEndpointsService: OccEndpointsService,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService
  ) {
    this.authRedirectStorageService.setRedirectUrl('homepage');
    this.auth.isUserLoggedIn().subscribe((success: any) => {
      this.loggedIn = success;
      if (this.loggedIn) {
        this.setIdleTimerSettings();
        this.custAccService.getProductLine().subscribe((productLine) => {
          this.productLine = productLine;
        });
        this.intervalId = setInterval(() => {
          if (
            new Date().getTime() - this.lastActionTime.getTime() >= TIMEOUT &&
            !this.timedOut &&
            this.loggedIn
          ) {
            this.clearSetInterval();
            this.openSessionTimeoutDialog();
          }
        }, 1000);
        if (this.windowRef?.isBrowser()) {
          const localSelectedBrand =
            this.windowRef.localStorage.getItem(
              ProductLineStorageKey.productLine
            ) || '';

          const localAvaiableProductLine =
            this.custAccService.getAvaiableProductLineToFromStorage() || [];
          if (localAvaiableProductLine?.length) {
            this.custAccService.updateAvaiableProductLine(
              localAvaiableProductLine
            );
          }
          if (localSelectedBrand?.length) {
            this.custAccService.setProductLine(localSelectedBrand);
          }
        }
      }
    });

    const userType = this.loggedIn
      ? OCC_USER_ID_CURRENT
      : OCC_USER_ID_ANONYMOUS;
    this.userRoleService.getCurrentUserRole(userType);
    /* GTM Snippet */
    this.custAccService
      .getCurrentCustomerAccount()
      .pipe(
        mergeMap((res: any) => {
          this.currentCustAccount = res;
          if (res.currency) {
            this.store.dispatch(
              new SiteContextActions.SetActiveCurrency(res?.currency?.isocode)
            );
          }
          return this.router.events;
        })
      )
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (Object.keys(this.currentCustAccount).length > 0) {
            const userType = this.dsAuthService.getUserTypeFromStorage();
            this.gtmService.sendEvent({
              event: 'pageView',
              pagePath: event.urlAfterRedirects,
            });
          } else if (!this.loggedIn) {
            this.gtmService.sendEvent({
              event: 'pageView',
              userType: 'Guest',
              pagePath: event.urlAfterRedirects,
            });
          }
        }
      });
    this.browserInactive$(TIMEOUT / 60).subscribe((data) => {
      this.setIdleTimerSettings();
    });
    /* GTM Snippet */
  }
  browserInactive$ = (graceTime: number): Observable<Event> => {
    const activityIndicatorEvents = [
      'click',
      'mousemove',
      'mousedown',
      'scroll',
      'keypress',
      'ontouchstart',
    ];
    return merge(
      ...activityIndicatorEvents.map((eventName) =>
        fromEvent(document, eventName)
      )
    );
  };
  setIdleTimerSettings() {
    this.lastActionTime = new Date();
  }

  reset() {
    this.timedOut = false;
  }

  openSessionTimeoutDialog() {
    this.timedOut = true;
    const componentdata = {
      timeout: 60,
    };
    const idleTimeoutModalRef = this.launchDialogService.openDialog(
      DS_DIALOG.IDLE_TIMEOUT,
      undefined,
      undefined,
      componentdata
    );
    if (idleTimeoutModalRef) {
      idleTimeoutModalRef.pipe(take(1)).subscribe((value) => {});
      this.launchDialogService.dialogClose.subscribe((value) => {
        console.log('====', value);
        if (value != undefined) {
          if (value == 'logout' || value?.instance?.reason == 'logout') {
            this.logout();
          } else {
            this.reset();
          }
        }
      });
    }
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  logout() {
    console.log('here');
    //this.router.navigate(['logout']);
    this.authStorageService
      .getToken()
      .pipe()
      .subscribe(
        (data) => {
          if (data && data.access_token) {
            if (data.access_token) {
              const url = `dslogin/revoke/${data.access_token}`;
              const loginUrl = this.occEndpointsService.buildUrl(url);
              this.http
                .get(loginUrl, { responseType: 'text' as 'json' })
                .subscribe(
                  (res: any) => {
                    if (res) {
                      const userType = OCC_USER_ID_ANONYMOUS;
                      this.userRoleService.getCurrentUserRole(userType);
                      localStorage.clear();
                      let returnUrl = res?.split('?')[1]?.split('=')[1];
                      if (this.windowRef?.isBrowser()) {
                        returnUrl = returnUrl
                          ? returnUrl
                          : this.sanitizer.sanitize(
                              SecurityContext.URL,
                              this.windowRef.nativeWindow.location.origin
                            );
                        returnUrl = `${returnUrl}/${this.productLine}`;
                        this.windowRef.nativeWindow.location.href =
                          this.sanitizer.sanitize(
                            SecurityContext.URL,
                            returnUrl
                          );
                      }
                    } else {
                      this.globalMessageService.add(
                        this.getTranslatedText('siteLogin.logoutIssue'),
                        GlobalMessageType.MSG_TYPE_ERROR,
                        10000
                      );
                    }
                  },
                  (err) => {
                    this.globalMessageService.add(
                      this.getTranslatedText('siteLogin.logoutIssue'),
                      GlobalMessageType.MSG_TYPE_ERROR,
                      10000
                    );
                  }
                );
            }
          }
        },
        (error) => {
          this.globalMessageService.add(
            error,
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          if (this.windowRef?.isBrowser()) {
            this.windowRef.nativeWindow.scrollTo(0, 0);
          }
        }
      );
  }
  ngOnDestroy(): void {
    if (this.windowRef?.isBrowser()) {
      this.windowRef.nativeWindow.sessionStorage.clear();
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.launchDialogService.closeDialog('close');
        if (!this.loggedIn) {
          if (evt.url.includes(`/${AllProductLine.waygate}`)) {
            this.custAccService.setProductLine(AllProductLine.waygate);
          } else if (evt.url.includes(`/${AllProductLine.bently}`)) {
            this.custAccService.setProductLine(AllProductLine.bently);
          } else if (evt.url.includes(`/${AllProductLine.panametrics}`)) {
            this.custAccService.setProductLine(AllProductLine.panametrics);
          } else if (evt.url.includes(`/${AllProductLine.druck}`)) {
            this.custAccService.setProductLine(AllProductLine.druck);
          } else if (evt.url.includes(`/${AllProductLine.reuterStokes}`)) {
            this.custAccService.setProductLine(AllProductLine.reuterStokes);
          } else if (evt.url.includes(`/bently-nevada`)) {
            this.custAccService.setProductLine(AllProductLine.bently);
          } else {
            this.custAccService.setProductLine('');
          }
        }
      }
    });
  }

  private clearSetInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
