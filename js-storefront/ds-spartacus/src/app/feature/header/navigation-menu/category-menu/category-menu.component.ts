import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  HttpErrorModel,
  TranslationService,
} from '@spartacus/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import { ProductCategory } from '../../../../core/product-catalog/model/product-categories.model';
import { ProductCategoriesService } from '../../../../core/product-catalog/services/product-categories.service';
import { AllProductLine } from '../../../../shared/enums/availableProductList.enum';
import { productLineCode } from '../../../../shared/products-constants';

@Component({
  standalone: false,
  selector: 'ds-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
})
export class CategoryMenuComponent implements OnInit {
  productCategories$: Observable<ProductCategory[] | HttpErrorModel>;
  selectedMenu: any = [];
  catHeaders: any = [];
  imageSrc = null;
  apiurl = environment.occBaseUrl;
  brandSelectedIndex = 0;
  logedInUser: boolean = false;
  @Input() legalEntities;
  @Output()
  toggleCategoryMenu: EventEmitter<any> = new EventEmitter();
  userLoggedIn$: Observable<boolean> = this.authService.isUserLoggedIn();
  activeSalesArea: any;

  constructor(
    private productCatService: ProductCategoriesService,
    private router: Router,
    private custAccService: CustomerAccountService,
    private authService: AuthService,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService
  ) {}

  ngOnInit(): void {
    this.userLoggedIn$.subscribe((res) => {
      this.logedInUser = res;
    });
    this.productCategories$ =
      this.productCatService.fetchDefaultProductCategories();

    this.productCategories$.subscribe((res) => {
      this.activeSalesArea =
        this.custAccService.getGuestActiveSalesAreaFromStorage();

      if (Object.keys(res).length > 0) {
        if (!this.logedInUser) {
          if (this.activeSalesArea.salesAreaId == '1800_GE_GE') {
            this.onBrandCatHover(res[0], 0);
            this.openSubCategory(res[0].categories, 0);
          } else if (this.activeSalesArea.salesAreaId == '1830_GE_GE') {
            this.onBrandCatHover(res[4], 4);
            this.openSubCategory(res[4].categories, 4);
          } else {
            this.onBrandCatHover(res[1], 1);
            this.openSubCategory(res[1].categories, 1);
          }
        } else {
          this.onBrandCatHover(res[0], 0);
          this.openSubCategory(res[0].categories, 0);
        }
      }
    });
  }

  onBrandCatHover(childCats, index) {
    if (
      (childCats.name === 'Waygate Technologies' ||
        childCats.name === 'Bently Nevada' ||
        childCats.name === 'Panametrics' ||
        childCats.name === 'Druck' ||
        childCats.name === 'Reuter-Stokes') &&
      !this.logedInUser
    ) {
      this.commonData(childCats, index);
    } else {
      this.selectedMenu = [];
      this.brandSelectedIndex = index;
      this.imageSrc = '';
    }
    if (this.logedInUser) {
      this.commonData(childCats, index);
    }
  }

  commonData(childCats, index) {
    if (childCats?.categories) {
      this.selectedMenu = [];
      this.selectedMenu[0] = childCats?.categories;
      this.catHeaders = [childCats?.name];
      this.brandSelectedIndex = index;
      if (childCats?.categoryImageUrl) {
        this.imageSrc = '/' + childCats.categoryImageUrl;
      }
    } else {
      this.selectedMenu = [];
      this.brandSelectedIndex = index;
      this.imageSrc = '';
    }
  }

  openSubCategory(cat, index) {
    if (cat?.categories) {
      this.selectedMenu.splice(index + 1, this.selectedMenu.length);
      this.catHeaders.splice(index + 1, this.selectedMenu.length);
      this.selectedMenu.push(cat.categories);
      this.catHeaders[index + 1] = cat.name;
      if (cat.categoryImageUrl) {
        this.imageSrc = cat.categoryImageUrl;
      } else {
        this.imageSrc = null;
      }
    } else {
      this.selectedMenu.splice(index + 1, this.selectedMenu.length);
      this.catHeaders.splice(index + 1, this.selectedMenu.length);
      this.imageSrc = null;
    }
  }

  redirecToCatProducts(cat, url) {
    if (!this.logedInUser) {
      if (cat.code === productLineCode[AllProductLine.waygate]) {
        this.router.navigate([AllProductLine.waygate]);
        this.toggleCategoryMenu.emit();
      } else if (cat.code === productLineCode[AllProductLine.bently]) {
        this.router.navigate([AllProductLine.bently]);
        this.toggleCategoryMenu.emit();
      } else if (cat.code === productLineCode[AllProductLine.panametrics]) {
        this.router.navigate([AllProductLine.panametrics]);
        this.toggleCategoryMenu.emit();
      } else if (cat.code === productLineCode[AllProductLine.druck]) {
        this.router.navigate([AllProductLine.druck]);
        this.toggleCategoryMenu.emit();
      } else if (cat.code === productLineCode[AllProductLine.reuterStokes]) {
        this.router.navigate([AllProductLine.reuterStokes]);
        this.toggleCategoryMenu.emit();
      } else {
        if (this.activeSalesArea.salesAreaId != cat?.salesAreaId)
          this.changeDSCompany(cat?.salesAreaId);
        this.router.navigate([url]);
        this.toggleCategoryMenu.emit();
      }
    }
    if (this.logedInUser) {
      this.router.navigate([url]);
      this.toggleCategoryMenu.emit();
    }
  }

  changeDSCompany(account) {
    if (account) {
      let updatedLegalEntityObj: any;
      updatedLegalEntityObj = this.getLegalEntityFromUid(account)[0];
      updatedLegalEntityObj = {
        ...updatedLegalEntityObj,
        active: true,
      };
      this.custAccService.updateGuestSalesArea(updatedLegalEntityObj);
      this.globalMessageService.add(
        this.getTranslatedText('customer-account.companyChangedSuccess'),
        GlobalMessageType.MSG_TYPE_CONFIRMATION
      );
    }
  }

  getLegalEntityFromUid(uid) {
    return Object.values(this.legalEntities).filter(
      (val) => val['salesAreaId'] == uid
    );
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
}
