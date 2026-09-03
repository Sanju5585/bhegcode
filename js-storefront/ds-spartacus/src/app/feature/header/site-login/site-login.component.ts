import { Component, OnInit, SecurityContext } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthService,
  AuthStorageService,
  CmsService,
  GlobalMessageService,
  GlobalMessageType,
  OccEndpointsService,
  OCC_USER_ID_ANONYMOUS,
  TranslationService,
} from '@spartacus/core';

import { NavigationService } from '@spartacus/storefront';
import { combineLatest, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User, UserAccountFacade } from '@spartacus/user/account/root';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { UserRoleService } from '../../../shared/services/user-role.service';

@Component({
  standalone: false,
  // tslint:disable-next-line:component-selector
  selector: 'ds-site-login',
  templateUrl: './site-login.component.html',
  styleUrls: ['./site-login.component.scss'],
})
export class SiteLoginComponent implements OnInit {
  user$: Observable<User | any | undefined>;
  registerUrl: string = environment.registerUrl;
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();

  navComp$ = this.cmsService.getComponentData('MyAccountComponent');
  node$ = this.navService.getNavigationNode(this.navComp$);
  nodeList = [];
  menuOpened = false;
  showCSRMenue = false;
  selectedBrand: string;
  productLine: string;
  constructor(
    private authService: AuthService,
    private cmsService: CmsService,
    private navService: NavigationService,
    private router: Router,
    private translate: TranslationService,
    private userAccountFacade: UserAccountFacade,
    private authStorageService: AuthStorageService,
    private occEndpointsService: OccEndpointsService,
    private http: HttpClient,
    private userRoleService: UserRoleService,
    private sanitizer: DomSanitizer,
    private customerAccountService: CustomerAccountService,
    private globalMessageService: GlobalMessageService
  ) {}
  ngOnInit(): void {
    this.customerAccountService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
    });
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.fetchMenuList();
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );
    /* node$ is subscribed to reduce the lag during menu items fetch */
  }

  fetchMenuList() {
    combineLatest(
      this.customerAccountService.getMyProfile(),
      this.node$
    ).subscribe(([customerAccount, nodes]: [any, any]) => {
      const accessCSRProductLines = customerAccount.accessCSRProductLines || [];
      this.customerAccountService.getProductLine().subscribe((brand) => {
        this.selectedBrand = brand;
        this.showCSRMenue =
          brand && accessCSRProductLines.includes(brand) ? true : false;
      });
      this.nodeList = !this.showCSRMenue
        ? nodes.children.filter((nav) => nav.title != 'Application Dashboard')
        : nodes.children;
      this.nodeList = this.nodeList.filter((nav) =>
        nav.url === '/my-quotes'
          ? this.productLine === 'waygate'
            ? nav
            : ''
          : nav
      );
    });
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  onRegisterClick() {
    window.location.href = this.registerUrl;
  }

  onAvatarClick() {
    this.menuOpened = !this.menuOpened;
  }

  getItem(item, event) {
    if (item.uid === 'SignOutNavNode' || item.title === 'Sign Out') {
      return;
    } else if (item?.url.indexOf('http') > -1) {
      window.open(item.url, '_blank');
    } else {
      this.router.navigate([item.url]);
      this.menuOpened = false;
    }
  }

  logout() {
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
                      let returnUrl = res?.split('?')[1]?.split('=')[1];
                      returnUrl = returnUrl
                        ? returnUrl
                        : this.sanitizer.sanitize(
                            SecurityContext.URL,
                            window.location.origin
                          );
                      window.location.href = this.sanitizer.sanitize(
                        SecurityContext.URL,
                        returnUrl
                      );
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
          window.scrollTo(0, 0);
        }
      );
  }
  navToLogin() {
    this.router.navigateByUrl('/login');
  }
}
