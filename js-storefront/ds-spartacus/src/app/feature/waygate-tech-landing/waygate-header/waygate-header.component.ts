import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  SecurityContext,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import {
  AuthService,
  HttpErrorModel,
  LanguageService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
  CmsService,
  AuthStorageService,
  OccEndpointsService,
} from '@spartacus/core';
import { NavItems } from '../../header/navigation-menu/navigation-menu.component';

import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, startWith, switchMap, take } from 'rxjs/operators';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { ActiveCartFacade, MultiCartFacade } from '@spartacus/cart/base/root';
import { CartActions } from '@spartacus/cart/base/core';
import { DIALOG_TYPE, LaunchDialogService } from '@spartacus/storefront';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import {
  SalesArea,
  CustomerAccount,
} from '../../../core/customer-account/store/customer-account.model';
import { DS_DIALOG } from '../../../core/dialog/dialog.config';
import { ProductCategory } from '../../../core/product-catalog/model/product-categories.model';
import { ProductCategoriesService } from '../../../core/product-catalog/services/product-categories.service';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { CommerceTypes } from '../../../shared/models/commerceTypes.model';
import { LANGUAGES } from '../../../shared/models/language.model';
import { UserRoleService } from '../../../shared/services/user-role.service';

@Component({
  standalone: false,
  selector: 'app-waygate-header',
  templateUrl: './waygate-header.component.html',
  styleUrls: ['./waygate-header.component.scss'],
})
export class WaygateHeaderComponent implements OnInit {
  notificationOpened = false;
  helpOpened = false;
  supportOpened: boolean = false;
  currentLanguage = '';
  props: any = {};
  navSelected;
  navItems = NavItems;
  showProdCat = false;
  showBrandList: boolean = false;
  legalEntities: SalesArea[];
  registerUrl: string = environment.registerUrl;
  openMenu = false;
  totalNumberOfCart;
  cartitem: any;
  commerceTypes = CommerceTypes;
  isLoggedInUser = false;
  showEqMenu: boolean = false;
  showCustomerFiles = false;
  servicesOpened: boolean = false;
  industriesOpened: boolean = false;
  @Input() isChooseBrandPage: boolean = false;
  // @Output() closeMenu = new EventEmitter<any>();
  showSlider: boolean = false;
  showHamSlider: boolean = false;
  headerMenuOpened: boolean = false;
  @ViewChild('searchFocusInput') searchFocusInput: ElementRef;
  showWaygate: boolean;
  favCustomerAccounts$: any;
  recentCustomerAccounts$: any;
  currentCustomerAccount$: Observable<CustomerAccount>;
  fixed: boolean;
  productLine: string;
  logoPath: string;
  availableProductLines: any[];
  @ViewChild('productListTempRef')
  productListTempRef: ElementRef<HTMLInputElement>;
  orderData: any;
  isRead: boolean = false;
  b2bUnit: String;
  mobCartOpenflag = false;
  allProductLine = AllProductLine;
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.fixed = window?.pageYOffset > 36 ? true : false;
  }
  contactUsUrl: string = 'contactus';
  helpResourceUrl : string ='help-resources';
  constructor(
    protected languageService: LanguageService,
    private router: Router,
    private custAccService: CustomerAccountService,
    private ref: ChangeDetectorRef,
    protected activeCartFacade: ActiveCartFacade,
    private authService: AuthService,
    private globalMessageService: GlobalMessageService,
    private userAccountFacade: UserAccountFacade,
    private productCatService: ProductCategoriesService,
    private actions$: Actions,
    private multiCartFacade: MultiCartFacade,
    private cmsService: CmsService,
    private launchDialogService: LaunchDialogService,
    private customerAccService: CustomerAccountService,
    private authStorageService: AuthStorageService,
    private occEndpointsService: OccEndpointsService,
    private http: HttpClient,
    private userRoleService: UserRoleService,
    private sanitizer: DomSanitizer,
    private translate: TranslationService
  ) {}
  guestSalesAreas$: Observable<SalesArea[]>;
  activeSalesArea$: Observable<SalesArea>;
  cart$: Observable<any> = this.activeCartFacade.getActive();
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  productCategories$: Observable<ProductCategory[] | HttpErrorModel>;

  logoParagraphComponent$: Observable<any> = this.cmsService.getComponentData(
    'DSSiteLogoParagraphComponent'
  );
  user$: Observable<any>;
  quantity$: Observable<number> = this.activeCartFacade.getActive().pipe(
    startWith({ deliveryItemsQuantity: 0 }),
    map((cart) => cart.deliveryItemsQuantity || 0)
  );

  total$: Observable<string> = this.activeCartFacade.getActive().pipe(
    filter((cart) => !!cart.totalPrice),
    map((cart) => cart.totalPrice.formattedValue)
  );

  ngOnInit(): void {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      if (
        productLine == AllProductLine.waygate ||
        productLine == AllProductLine.bently ||
        productLine == AllProductLine.panametrics ||
        productLine == AllProductLine.druck ||
        productLine == AllProductLine.reuterStokes
      ) {
        this.showWaygate = true;
      } else {
        this.showWaygate = false;
      }
      this.getLogoPath();
    });

    this.custAccService.notificationData.subscribe((list) => {
      this.orderData = list;
      if (!!this.orderData) {
        this.isRead = this.orderData.some((item) => {
          if (item.isOrderRead == false) {
            return true;
          }
        });
      }
    });
    const itemsArr = [];
    // tslint:disable-next-line: forin
    for (const key in LANGUAGES) {
      itemsArr.push({
        label: LANGUAGES[key],
        value: key,
      });
    }
    this.props = {
      itemGroups: [
        {
          items: [...itemsArr],
        },
      ],
    };
    this.getDefaultLanguage();
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res: any) => {
        if (res) {
          this.isLoggedInUser = true;
          this.ref.detectChanges();
        } else {
          this.isLoggedInUser = false;
          this.ref.detectChanges();
        }
        if (res?.hasOwnProperty('isPrivateFolderExists')) {
          this.showCustomerFiles = res?.isPrivateFolderExists;
        } else {
          this.showCustomerFiles = false;
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
    this.userLoggedIn$.subscribe((res) => {
      if (res) {
        this.custAccService.removeGuestActiveFromStorage();
        this.productCatService.loadDefaultProductCategories(
          OCC_USER_ID_CURRENT
        );
      } else {
        this.productCatService.loadDefaultProductCategories(
          OCC_USER_ID_ANONYMOUS
        );
      }
      this.productCategories$ =
        this.productCatService.fetchDefaultProductCategories();
      this.custAccService.loadFavCustomerAccounts();
      this.favCustomerAccounts$ = this.custAccService.getFavCustomerAccounts();

      this.custAccService.loadRecentCustomerAccounts();
      this.recentCustomerAccounts$ =
        this.custAccService.getRecentCustomerAccounts();

      this.currentCustomerAccount$ =
        this.custAccService.getCurrentCustomerAccount();
      this.currentCustomerAccount$.subscribe((currentCustomerAccount) => {
        this.availableProductLines =
          currentCustomerAccount?.visibleCategories ?? [];

        this.ref.detectChanges();
      });
    });
    this.guestSalesAreas$ = this.custAccService.getGuestSalesAreas();
    this.activeSalesArea$ = this.custAccService.getCurrentGuestSalesArea();

    this.guestSalesAreas$.subscribe((res) => {
      this.legalEntities = res;
    });
    this.cart$.subscribe((res) => {
      this.totalNumberOfCart = null;
      this.cartitem = res.totalItems;
      if (this.cartitem == 0) {
        this.totalNumberOfCart = this.cartitem;
      } else {
        this.totalNumberOfCart = localStorage.getItem('numberOfCart')
          ? JSON.parse(localStorage['numberOfCart']) == 0
            ? 0
            : localStorage.getItem('numberOfCart')
          : 0;
      }
    });
    this.actions$
      .pipe(ofType(CartActions.CREATE_CART_SUCCESS), take(2))
      .subscribe((res: any) => {
        this.multiCartFacade.reloadCart(res.payload.cartId, { active: true });
      });

    this.custAccService.getNotificationSliderState.subscribe((slider) => {
      this.showSlider = slider;
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res: any) => {
      message = res;
    });
    return message;
  }

  onLanguageChange(event) {
    this.languageService.setActive(event.detail?.value);
    if (this.isChooseBrandPage) {
      window.location.reload();
    } else {
      // for other branch navigation shgould be base on productline
      this.router.navigate([`/${this.productLine}`]);
    }
  }

  getDefaultLanguage() {
    this.languageService.getActive().subscribe((res) => {
      this.currentLanguage = LANGUAGES[res];
    });
  }
  languagedropdown() {
    this.notificationOpened = false;
  }
  togglehelp() {
    this.helpOpened = !this.helpOpened;
    this.notificationOpened = false;
  }
  toggleSupport() {
    this.supportOpened = !this.supportOpened;
    this.notificationOpened = false;
  }
  redirectToBynder() {
    this.router.navigate(['/search-private-folder']);
    const bynderUrl = environment.bynderUrl;
    window.open(bynderUrl, '_blank');
  }
  activeTabs(item: any) {
    switch (item) {
      case 'Home':
        this.navSelected = this.navItems.HOME;
        this.ref.detectChanges();
        break;
      case 'Products':
        this.navSelected = this.navItems.PRODUCTS;
        this.ref.detectChanges();
        break;
      case 'Status_tracker':
        this.navSelected = this.navItems.STATUS_TRACKER;
        this.ref.detectChanges();
        break;
      case 'Return_process':
        this.navSelected = this.navItems.RETURN_PROCESS;
        this.ref.detectChanges();
        break;
      case 'Calibration_data':
        this.navSelected = this.navItems.CALIBRATION_DATA;
        this.ref.detectChanges();
        break;
      case 'Other_portals_links':
        this.navSelected = this.navItems.OTHER_PORTALS_LINKS;
        this.ref.detectChanges();
        break;
      case 'My_orders':
        this.navSelected = this.navItems.MY_ORDERS;
        this.ref.detectChanges();
        break;
      case 'My_returns':
        this.navSelected = this.navItems.MY_RETURNS;
        this.ref.detectChanges();
        break;
      case 'My_equipment_data':
        this.navSelected = this.navItems.MY_EQUIPMENT_DATA;
        this.ref.detectChanges();
        break;
      case 'support':
        this.navSelected = this.navItems.SUPPORT;
        this.ref.detectChanges();
        break;
      default:
        this.navSelected = this.navItems.HOME;
        this.ref.detectChanges();
    }
  }
  register() {}
  signIn() {
    this.router.navigate(['/login']);
  }
  closeMenu(event) {
    this.openMenu = false;
  }
  openSearch() {
    this.searchFocusInput.nativeElement.blur();
    const searchDialog = this.launchDialogService.openDialog(
      DS_DIALOG.WAYGATE_SEARCH,
      undefined,
      undefined,
      {}
    );
    if (searchDialog) {
      searchDialog.subscribe((value) => {});
    }
  }

  WaygatePage() {
    this.custAccService.disableChangeAccount.next(false);
    this.router.navigate(['/', this.productLine]);
  }

  getLogoPath() {
    if (this.productLine === AllProductLine.waygate) {
      this.logoPath = '../../../../../assets/img/WaygateTechLogo.png';
    } else if (this.productLine === AllProductLine.bently) {
      this.logoPath = '../../../../../assets/img/bannernav4.png';
    } else if (this.productLine === AllProductLine.panametrics) {
      this.logoPath = '../../../../../assets/img/New_Panametrics_Shop.png';
    } else if (this.productLine === AllProductLine.druck) {
      this.logoPath = '../../../../../assets/img/New_Druck_Shop.png';
    } else if (this.productLine === AllProductLine.reuterStokes) {
      this.logoPath = '../../../../../assets/img/bannernav5.png';
    }
  }

  toggleBrandList(event) {
    if (event) {
      event.stopPropagation();
      this.showBrandList = !this.showBrandList;
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
                      localStorage.clear();
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

  openSlider() {
    this.showSlider = !this.showSlider;
    // this.closeMenu.emit(true);
    this.customerAccService.openNotifiactionSlider();
  }

  openHamSlider() {
    this.showHamSlider = !this.showHamSlider;
    // this.closeMenu.emit(true);
    // this.customerAccService.openNotifiactionSlider();
  }
  closeham() {
    this.showHamSlider = !this.showHamSlider;
  }
  headerMenuSelected() {
    this.headerMenuOpened = !this.headerMenuOpened;
  }
}
