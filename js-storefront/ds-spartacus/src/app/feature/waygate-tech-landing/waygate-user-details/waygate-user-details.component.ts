import { HttpClient } from '@angular/common/http';
import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthActions } from '@spartacus/core';
import {
  AuthService,
  AuthStorageService,
  CmsService,
  GlobalMessageService,
  GlobalMessageType,
  OCC_USER_ID_ANONYMOUS,
  OccEndpointsService,
  TranslationService,
  User,
} from '@spartacus/core';
import { NavigationService } from '@spartacus/storefront';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { combineLatest, Observable, of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { UserRoleService } from '../../../shared/services/user-role.service';

@Component({
  standalone: false,
  selector: 'app-waygate-user-details',
  templateUrl: './waygate-user-details.component.html',
  styleUrls: ['./waygate-user-details.component.scss'],
})
export class WaygateUserDetailsComponent {
  user$: Observable<User | any | undefined>;
  registerUrl: string = environment.registerUrl;
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  logInMenuOpened: boolean = false;
  navComp$ = this.cmsService.getComponentData('MyAccountComponent');
  node$ = this.navService.getNavigationNode(this.navComp$);
  nodeList = [];
  menuOpened = false;
  productLine: string;
  newRegistration = false;
  showCSRMenue = false;
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
    private globalMessageService: GlobalMessageService,
    private customerAccountService: CustomerAccountService,
    private route: ActivatedRoute
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
    /* node $ is subscribed to reduce the lag during menu items fetch */
  }

  fetchMenuList() {
    combineLatest(
      this.customerAccountService.getMyProfile(),
      this.node$
    ).subscribe(([customerAccount, nodes]: [any, any]) => {
      this.customerAccountService.setCustomerUserType(customerAccount.userType);
      const accessCSRProductLines = customerAccount.accessCSRProductLines || [];
      this.customerAccountService.setAccessCSRProductLines(
        customerAccount.accessCSRProductLines || []
      );
      this.customerAccountService.getProductLine().subscribe((brand) => {
        this.showCSRMenue =
          brand && accessCSRProductLines.includes(brand) ? true : false;
      });
      const listForCSRUser: string[] = [
        'Registration Requests',
        'Manage Users',
      ];
      this.nodeList = !this.showCSRMenue
        ? nodes.children.filter((nav) => !listForCSRUser.includes(nav.title))
        : nodes.children;
      this.nodeList = this.nodeList.filter((nav) =>
        nav.url === '/my-quotes'
          ? this.productLine === 'waygate'
            ? nav
            : ''
          : nav
      );
      // this.nodeList.push({
      //   styleAttributes: 'list_alt',
      //   title: 'My Invoices',
      //   url: '/my-invoices',
      // });
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
    this.router.navigate(['register'], { relativeTo: this.route });
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
      if (item.url == '/my-orders') {
        this.router.navigateByUrl(`/${this.productLine}${item.url}`);
      } else if (item.url == '/my-profile') {
        this.router.navigateByUrl(`/${this.productLine}/manage-account`);
      } else if (item.url == '/rma-tracking') {
        this.router.navigateByUrl(`/${this.productLine}/my-returns`);
      } else if (item.url == '/my-favorites') {
        this.router.navigateByUrl(`/${this.productLine}/my-favorites`);
      } else if (item.url == '/saved-carts') {
        this.router.navigateByUrl(`/${this.productLine}/saved-carts`);
      } else if (item.url == '/dashboard') {
        this.router.navigateByUrl(`/${this.productLine}/dashboard`);
      } else if (item.url == '/manageuser') {
        this.router.navigateByUrl(`/${this.productLine}/manageuser`);
      } else if (item.url == '/my-quotes') {
        this.router.navigateByUrl(`/${this.productLine}/my-quotes`);
      } else if (item.url == '/my-invoices') {
        this.router.navigateByUrl(`/${this.productLine}/my-invoices`);
      } else {
        this.router.navigate([item.url]);
      }
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
                      this.authService.logout();
                      localStorage.clear();
                      let returnUrl = res?.split('?')[1]?.split('=')[1];
                      returnUrl = returnUrl
                        ? returnUrl
                        : this.sanitizer.sanitize(
                            SecurityContext.URL,
                            window.location.origin
                          );
                      returnUrl = `${returnUrl}/${this.productLine}`;
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
  toggleMenu() {
    this.logInMenuOpened = !this.logInMenuOpened;
  }
}
