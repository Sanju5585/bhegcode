import { Component, EventEmitter, Input, Output } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { AuthService, HttpErrorModel } from '@spartacus/core';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  servicesList,
  industriesList,
  supportList,
  supportListGuest,
  loadproductListForGuest,
  quickOrderDisplay,
  productLineCode,
} from './../../../../shared/products-constants';
import { environment } from '../../../../../environments/environment';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { SalesArea } from '../../../../core/customer-account/store/customer-account.model';
import { AllProductLine } from '../../../../shared/enums/availableProductList.enum';
import { ProductCategoriesService } from '../../../../core/product-catalog/services/product-categories.service';
import { ProductCategory } from '../../../../core/product-catalog/model/product-categories.model';

@Component({
  standalone: false,
  selector: 'app-waygate-nav-bar',
  templateUrl: './waygate-nav-bar.component.html',
  styleUrls: ['./waygate-nav-bar.component.scss'],
})
export class WaygateNavBarComponent {
  servicesList: any[];
  industriesList: any[];
  supportList: any[];
  @Output() closeSlider = new EventEmitter();
  @Input() isChooseBrandPage = false;
  supportListGuest: any[];
  industriesOpened: boolean;
  servicesOpened: boolean;
  showProdCat: boolean;
  showEqMenu: boolean;
  user$: Observable<any>;
  showCustomerFiles: any;
  guestSalesAreas$: Observable<SalesArea[]>;
  legalEntities: SalesArea[];
  showSlider = false;
  salesAreaData;
  activeSalesArea;
  selectedItem: string;
  productLine: string;
  waygate: string;
  loggedIn: boolean;
  storedScrollPosition = 0;
  isQuickOrderDisplay: boolean;
  industries: string;
  isIndustriesVisible: boolean = true;
  industryValue: any;
  isServicesVisible: boolean = true;
  productCategories$: Observable<ProductCategory[] | HttpErrorModel>;
  productLineCode: string[];

  constructor(
    private authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private router: Router,
    private custAccService: CustomerAccountService,
    private productCategoriesService: ProductCategoriesService
  ) {
    this.waygate = AllProductLine.waygate;
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );
    this.custAccService.getSliderState.subscribe((slider) => {
      if (slider) {
        this.storedScrollPosition = window.scrollY || 0;
        window.scrollTo(0, 0);
      } else if (slider === false) {
        window.scrollTo(0, this.storedScrollPosition);
      }
      this.showSlider = slider;
    });
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.productLineCode = productLineCode[this.productLine]?.split(' ');
      this.isIndustriesVisible =
        this.productLine === AllProductLine.reuterStokes ? false : true;
      this.isServicesVisible =
        this.productLine === AllProductLine.druck ? false : true;
      this.servicesList = servicesList[this.productLine];
      this.industriesList = industriesList[this.productLine];
      this.supportList = supportList[this.productLine];
      this.supportListGuest = supportListGuest[this.productLine];
      this.isQuickOrderDisplay = quickOrderDisplay[this.productLine];
      if (!this.loggedIn && this.isIndustriesVisible) {
        this.loadProductLineGuestData();
      }
    });

    this.user$.subscribe((res: any) => {
      if (res) {
        this.loggedIn = !!res;
      }
    });

    this.guestSalesAreas$ = this.custAccService.getGuestSalesAreas();
    this.guestSalesAreas$.subscribe((res) => {
      this.legalEntities = res;
    });
    combineLatest(this.user$, this.custAccService.getProductLine()).subscribe(
      ([user, productLine]) => {
        this.isIndustriesVisible =
          this.productLine === AllProductLine.reuterStokes ? false : true;
        this.productLine = productLine;
        this.productLine = productLine;
        if (user) {
          this.loggedIn = true;
        } else {
          this.loadProductLineGuestData();
        }
        if (this.productLine) {
          this.servicesList = servicesList[this.productLine];
          this.industriesList = industriesList[this.productLine];
          this.supportList = supportList[this.productLine];
          this.supportListGuest = supportListGuest[this.productLine];
          this.isQuickOrderDisplay = quickOrderDisplay[this.productLine];
        }
        if (user?.hasOwnProperty('isPrivateFolderExists')) {
          this.showCustomerFiles = user?.isPrivateFolderExists;
          if (this.showCustomerFiles) {
            if (
              this.supportList.find(
                (el) => el?.url === '/search-private-folder'
              )
            ) {
            } else {
              this.supportList.push({
                name: 'Customer Files',
                url: '/search-private-folder',
                externalUrl: environment.bynderUrl,
              });
            }
          }
        } else {
          this.showCustomerFiles = false;
        }

        if (!user && this.isIndustriesVisible) {
          this.loadProductLineGuestData();
        }
      }
    );
    this.productCategories$ =
      this.productCategoriesService.fetchDefaultProductCategories();
    this.productCategoriesService
      .fetchDefaultProductCategories()
      .subscribe((res) => console.log(res));
  }
  toggleIndustries() {
    this.industriesOpened = !this.industriesOpened;
    this.industryListSort();
  }
  toggleService() {
    this.servicesOpened = !this.servicesOpened;
  }
  toggleProdCat() {
    this.showProdCat = !this.showProdCat;
  }
  toggleEqMenu() {
    this.showEqMenu = !this.showEqMenu;
  }

  quickOrderRedirect() {
    window.location.href = `/${this.productLine}/quick-order`;
  }

  industryListSort() {
    this.industryValue = industriesList[this.productLine];
    this.industriesList = this.industryValue.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
  }

  loadProductLineGuestData() {
    let param = loadproductListForGuest[this.productLine];
    // '{"active":true,"address":{"country":{"isocode":"US"},"formattedAddress":"Skaneateles, NY","id":"8822995582999","town":"Skaneateles, NY"},"salesAreaId":"1800_GE_GE","salesAreaName":"Waygate Technologies USA, LP"}';
    if (param) {
      this.custAccService.updateGuestSalesArea(JSON.parse(param));
    }
  }

  constructCategoryUrl(category) {
    let url = `/${this.productLine}/categories/${encodeURIComponent(
      category.code
    )}/${encodeURIComponent(category.name)}`;
    return url;
  }

  close(){
    this.closeSlider.emit();
  }
  getProductCatalogURL(catalog) {
    return `/${this.productLine}/categories/${
      catalog?.code
    }/${catalog?.name.replace(' ', '-')}`;
  }
  clicked(event) {
    this.closeSlider.emit();
  }
}
