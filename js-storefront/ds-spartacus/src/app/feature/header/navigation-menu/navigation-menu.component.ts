import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  EventEmitter,
  Renderer2,
  Input,
  Output,
} from '@angular/core';
import {
  AuthService,
  HttpErrorModel,
  LanguageService,
  OCC_USER_ID_ANONYMOUS,
  OCC_USER_ID_CURRENT,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LandingPagesService } from '../../landing/landing-pages.service';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { switchMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { SalesArea } from '../../../core/customer-account/store/customer-account.model';
import { ProductCategory } from '../../../core/product-catalog/model/product-categories.model';
import { ProductCategoriesService } from '../../../core/product-catalog/services/product-categories.service';
import { AllProductLine } from '../../../shared/enums/availableProductList.enum';
import { LANGUAGES } from '../../../shared/models/language.model';
import {
  wayagteGuestSalesId,
  bentlyGuestSalesId,
  panametricsGuestSalesId,
  druckGuestSalesId,
  reuterStokesGuestSalesId,
} from '../../../shared/products-constants';
import { NotificationsService } from '../../notifications/notifications.service';

export enum NavItems {
  HOME = 'Home',
  PRODUCTS = 'Products',
  STATUS_TRACKER = 'Status_tracker',
  RETURN_PROCESS = 'Return_process',
  CALIBRATION_DATA = 'Calibration_data',
  OTHER_PORTALS_LINKS = 'Other_portals_links',
  MY_ORDERS = 'My_orders',
  MY_RETURNS = 'My_returns',
  MY_EQUIPMENT_DATA = 'My_equipment_data',
  SUPPORT = 'support',
}

@Component({
  standalone: false,
  selector: 'ds-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuComponent implements OnInit {
  props: any = {};
  productCategories$: Observable<ProductCategory[] | HttpErrorModel>;
  currentLanguage = '';
  showProdCat = false;
  showEqMenu = false;
  notificationOpened = false;
  helpOpened = false;
  notificationsResponse = [];
  notificationsList: any;
  getNotificationCount: number = 0;
  updatedLegalEntityObj: any;
  guestSalesAreas$: Observable<SalesArea[]>;
  activeSalesArea$: Observable<SalesArea>;
  legalEntities: SalesArea[];
  changeText: boolean;
  waygateText: boolean;
  nexusText: boolean;
  bentlyText: boolean;
  druckText: boolean;
  panametricsText: boolean;
  reuterStokesText: boolean;
  selectedItem: string;
  guestCustomerAcc: boolean = true;
  navbarAllBrands: boolean = true;
  showCustomerFiles: boolean = false;
  userDetails;
  navSelected;
  navItems = NavItems;
  customerAccount$: Observable<any> =
    this.custAccService.getCurrentCustomerAccount();
  showWaygate: boolean;
  user$: Observable<any>;
  bently: string = AllProductLine.bently;
  availableProductLines: any[];

  constructor(
    private authService: AuthService,
    private productCatService: ProductCategoriesService,
    protected languageService: LanguageService,
    private custAccService: CustomerAccountService,
    private router: Router,
    public eqService: NotificationsService,
    private datePipe: DatePipe,
    private cRef: ChangeDetectorRef,
    private landingPageService: LandingPagesService,
    private renderer: Renderer2,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    private ref: ChangeDetectorRef,
    private userAccountFacade: UserAccountFacade
  ) {
    this.noticationFilters.fromDate = this.datePipe.transform(
      this.defaultFromDate.setMonth(this.defaultToDate.getMonth() - 2),
      'yyyy-MM-dd'
    );
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.commonRouterLink();
        if (
          event.url === '/' ||
          event.url === 'homepage' ||
          event.url === 'home'
        ) {
          this.navbarAllBrands = true;
        } else {
          this.navbarAllBrands = false;
        }
      }
    });
    this.hideNavbar();
  }

  propsNotifications = {
    itemGroups: [
      {
        items: [],
      },
    ],
  };

  public defaultFromDate: Date = new Date();
  public defaultToDate: Date = new Date();

  noticationFilters: any = {
    MANorMELflag: 'CP_ALL',
    fields: 'DEFAULT',
    filterBy: 'totalItems',
    fromDate: this.datePipe.transform(this.defaultFromDate, 'yyyy-MM-dd'),
    refreshFlag: true,
    toDate: this.datePipe.transform(this.defaultToDate, 'yyyy-MM-dd'),
  };

  ngOnInit(): void {
    const itemsArr = [];
    this.commonRouterLink();
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
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.productCatService.loadDefaultProductCategories(
            OCC_USER_ID_CURRENT
          );
          return this.userAccountFacade.get();
        } else {
          this.loadWaygate();
          this.productCatService.loadDefaultProductCategories(
            OCC_USER_ID_ANONYMOUS
          );
          return of(undefined);
        }
      })
    );
    this.user$.subscribe((user) => {
      this.productCategories$ =
        this.productCatService.fetchDefaultProductCategories();
    });
    // To check private folder access
    this.userAccountFacade.get().subscribe((res) => {
      this.userDetails = res;
      if (res?.hasOwnProperty('isPrivateFolderExists')) {
        this.showCustomerFiles = this.userDetails?.isPrivateFolderExists;
      } else {
        this.showCustomerFiles = false;
      }
    });
    this.getDefaultLanguage();
    this.getNotifications();
    this.guestSalesAreas$ = this.custAccService.getGuestSalesAreas();
    this.activeSalesArea$ = this.custAccService.getCurrentGuestSalesArea();
    this.activeSalesArea$.subscribe((res) => {
      if (Object.keys(res).length > 0) {
        if (res.salesAreaId === wayagteGuestSalesId)
          this.selectedItem = AllProductLine.waygate;
        else if (res.salesAreaId === bentlyGuestSalesId)
          this.selectedItem = AllProductLine.bently;
        else if (res.salesAreaId === panametricsGuestSalesId)
          this.selectedItem = AllProductLine.panametrics;
        else if (res.salesAreaId === druckGuestSalesId)
          this.selectedItem = AllProductLine.druck;
        else if (res.salesAreaId === reuterStokesGuestSalesId)
          this.selectedItem = AllProductLine.reuterStokes;
        else this.selectedItem = '';
        this.ref.detectChanges();
      }
    });
    this.custAccService.getProductLine().subscribe((productLine) => {
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
      this.cRef.detectChanges();
    });
    this.customerAccount$.subscribe((currentCustomerAccount) => {
      this.availableProductLines =
        currentCustomerAccount?.visibleCategories ?? [];
    });
    this.guestSalesAreas$.subscribe((res) => {
      this.legalEntities = res;
    });
  }

  onLanguageChange(event) {
    this.languageService.setActive(event.detail?.value);
    this.custAccService.refreshPostCustomAccSwitch();
  }

  getDefaultLanguage() {
    this.languageService.getActive().subscribe((res) => {
      this.currentLanguage = LANGUAGES[res];
    });
  }
  languagedropdown() {
    this.notificationOpened = false;
  }
  toggleProdCat() {
    this.showProdCat = !this.showProdCat;
    this.ref.detectChanges();
  }

  toggleEqMenu() {
    this.showEqMenu = !this.showEqMenu;
  }

  toggleNotification() {
    this.notificationOpened = !this.notificationOpened;
  }
  togglehelp() {
    this.helpOpened = !this.helpOpened;
    this.notificationOpened = false;
  }
  viewDetailedNotifications() {
    this.router.navigate(['/detailed-notification-page']);
  }
  getNotifications() {
    this.eqService
      .getAllNotifications(this.noticationFilters)
      .subscribe((res: any) => {
        if (res) {
          this.notificationsResponse = res;
          let filterNotification = this.notificationsResponse.filter(
            (notifications) => notifications.isDismissed === false
          );
          if (filterNotification.length) {
            this.getNotificationCount = filterNotification.length;
          } else {
            this.getNotificationCount = 0;
          }
          this.cRef.detectChanges();
        }
      });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  loadWaygate() {
    this.selectedItem = AllProductLine.waygate;
    let param =
      '{"active":true,"address":{"country":{"isocode":"US"},"formattedAddress":"Skaneateles, NY","id":"8822995582999","town":"Skaneateles, NY"},"salesAreaId":"1800_GE_GE","salesAreaName":"Waygate Technologies USA, LP"}';
    this.custAccService.updateGuestSalesArea(JSON.parse(param));
  }

  onUpdateBtnClick(value, selectedItem) {
    this.selectedItem = selectedItem;
    // if (selectedItem == 'nexus'|| selectedItem == 'panametrics') {
    //   this.selectedItem = false;
    // }
    (this.updatedLegalEntityObj = this.getLegalEntityFromUid(value)[0]),
      (this.updatedLegalEntityObj = {
        ...this.updatedLegalEntityObj,
        active: true,
      });
    this.custAccService.updateGuestSalesArea(this.updatedLegalEntityObj);
    //  this.custAccService.refreshPostGuestSalesAreaSwitch();
    this.globalMessageService.add(
      this.getTranslatedText('customer-account.companyChangedSuccess'),
      GlobalMessageType.MSG_TYPE_CONFIRMATION
    );
    this.changeRouteThroughCompany(selectedItem);
  }

  changeThroughRouting(account, value) {
    this.selectedItem = value;
    // if (value == 'nexus' || value == 'panametrics') {
    //   this.selectedItem = false;
    // }

    (this.updatedLegalEntityObj = this.getLegalEntityFromUid(account)[0]),
      (this.updatedLegalEntityObj = {
        ...this.updatedLegalEntityObj,
        active: true,
      });
    this.custAccService.updateGuestSalesArea(this.updatedLegalEntityObj);
  }

  getLegalEntityFromUid(uid) {
    return Object.values(this.legalEntities).filter(
      (val) => val.salesAreaId == uid
    );
  }

  routeToPLPWaygate(account, value) {
    this.router.navigate(['/Waygate']);
    this.changeThroughRouting(account, value);
  }

  routeToPLPNexus(account, value) {
    this.router.navigate(['/Nexus-Controls/c/ECOM_LVL1_00000007']);
    this.changeThroughRouting(account, value);
  }

  routeToPLPPanametric(account, value) {
    this.router.navigate(['/Panametrics/c/ECOM_LVL1_00000002']);
    this.changeThroughRouting(account, value);
  }

  hideNavbar() {
    if (
      this.router.url === '/' ||
      this.router.url === '/homepage' ||
      this.router.url === '/home'
    ) {
      this.navbarAllBrands = true;
    } else {
      this.navbarAllBrands = false;
    }
  }

  redirectToBynder() {
    this.router.navigate(['/search-private-folder']);
    this.toggleEqMenu();
    const bynderUrl = environment.bynderUrl;
    window.open(bynderUrl, '_blank');
  }

  changeRouteThroughCompany(company) {
    if (company == 'waygate') {
      this.router.navigate(['/Waygate']);
      this.waygateText = false;
    }

    if (company == 'nexus') {
      this.router.navigate(['/Nexus-Controls/c/ECOM_LVL1_00000007']);
      this.nexusText = false;
    }

    if (company == 'panametrics') {
      this.router.navigate(['/Panametrics/c/ECOM_LVL1_00000002']);
      this.nexusText = false;
    }
  }

  commonRouterLink() {
    let substring = '/c/';
    let childCategory = 'product/';
    let defaultHome = '/spa_redirect';
    if (
      this.router.url === '/' ||
      this.router.url === 'homepage' ||
      this.router.url === 'home'
    ) {
      this.navSelected = this.navItems.HOME;
    } else if (this.router.url === '/quick-status') {
      this.navSelected = this.navItems.STATUS_TRACKER;
    } else if (this.router.url === '/calibration-data') {
      this.navSelected = this.navItems.CALIBRATION_DATA;
    } else if (this.router.url === '/list-of-portals') {
      this.navSelected = this.navItems.OTHER_PORTALS_LINKS;
    } else if (this.router.url === '/my-orders') {
      this.navSelected = this.navItems.MY_ORDERS;
    } else if (this.router.url === '/rma-tracking') {
      this.navSelected = this.navItems.MY_RETURNS;
    } else if (this.router.url === '/my-equipments') {
      this.navSelected = this.navItems.MY_EQUIPMENT_DATA;
    } else if (
      this.router.url.indexOf(substring) > -1 ||
      this.router.url.indexOf(childCategory) > -1
    ) {
      this.navSelected = this.navItems.PRODUCTS;
    } else if (this.router.url.indexOf(defaultHome) > -1) {
      this.navSelected = this.navItems.HOME;
    } else {
      this.navSelected = this.navItems.HOME;
    }
    this.cRef.detectChanges();
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
      default:
        this.navSelected = this.navItems.HOME;
        this.ref.detectChanges();
    }
  }
}
