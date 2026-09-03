import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,combineLatest, of, switchMap } from 'rxjs';
import { AuthService,CmsService  } from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { NavigationService } from '@spartacus/storefront';

@Component({
  standalone: false,
  selector: 'app-waygate-hamburger-slider',
  templateUrl: './waygate-hamburger-slider.component.html',
  styleUrls: ['./waygate-hamburger-slider.component.scss'],
})
export class WaygateHamburgerSliderComponent implements OnInit {
  @Output() closeSlider = new EventEmitter();
  @Output() logOut = new EventEmitter();
  @Input() loggerIn: boolean;
  @Input() productLine;
  user$: Observable<any>;
  contactUsUrl: string = 'contactus';
  @Input() isChooseBrandPage: boolean = false;
  nodeList = [];
  navComp$ = this.cmsService.getComponentData('MyAccountComponent');
  node$ = this.navService.getNavigationNode(this.navComp$);
  showCSRMenue = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private cmsService: CmsService,
    private navService: NavigationService,
    private custAccService: CustomerAccountService
  ) { }

  ngOnInit(): void {
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );
    this.fetchMenuList();
     window.scrollTo(0, 0);
  }
  fetchMenuList() {
    combineLatest(
      this.custAccService.getMyProfile(),
      this.node$
    ).subscribe(([customerAccount, nodes]: [any, any]) => {
      this.custAccService.setCustomerUserType(customerAccount.userType);
      const accessCSRProductLines = customerAccount.accessCSRProductLines || [];
      this.custAccService.setAccessCSRProductLines(
        customerAccount.accessCSRProductLines || []
      );
      this.custAccService.getProductLine().subscribe((brand) => {
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
    });
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
      } else if (item.url == '/my-favorites') {
        this.router.navigateByUrl(`/${this.productLine}/my-favorites`);
      } else if (item.url == '/saved-carts') {
        this.router.navigateByUrl(`/${this.productLine}/saved-carts`);
      } else if (item.url == '/dashboard') {
        this.router.navigateByUrl(`/${this.productLine}/dashboard`);
      } else if (item.url == '/manageuser') {
        this.router.navigateByUrl(`/${this.productLine}/manageuser`);
      } else {
        this.router.navigate([item.url]);
      }
    }
    this.close();
  }
  close() {
    this.closeSlider.emit();
  }

  signOut() {
    this.logOut.emit();
  }

  onRegisterClick() {
    this.router.navigate(['register'], { relativeTo: this.route });
  }

  navToLogin() {
    this.router.navigateByUrl('/login');
  }

  onAvatarClick() { }
}
