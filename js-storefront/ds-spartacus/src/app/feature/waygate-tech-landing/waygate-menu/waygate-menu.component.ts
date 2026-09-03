import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService, HttpErrorModel } from '@spartacus/core';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { productLineCode } from './../../../shared/products-constants';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';
import { ProductCategory } from '../../../core/product-catalog/model/product-categories.model';
import { ProductCategoriesService } from '../../../core/product-catalog/services/product-categories.service';
@Component({
  standalone: false,
  selector: 'app-waygate-menu',
  templateUrl: './waygate-menu.component.html',
  styleUrls: ['./waygate-menu.component.scss'],
})
export class WaygateMenuComponent {
  productCategories$: Observable<ProductCategory[] | HttpErrorModel>;
  // salesAreas = ['ECOM_LVL1_00000001'];
  productLineCode: string[];
  productLine: string;
  user$: Observable<any>;
  categories = [];
  selecteds = [];

  @Output() closeMenu = new EventEmitter<any>();
  constructor(
    private productCategoriesService: ProductCategoriesService,
    private authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private custAccService: CustomerAccountService
  ) {
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.productLineCode = productLineCode[this.productLine]?.split(' ');
    });
    this.productCategories$ =
      this.productCategoriesService.fetchDefaultProductCategories();
    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          return this.userAccountFacade.get();
        } else {
          return of(undefined);
        }
      })
    );
  }
  openSubCategory(categories, index, i) {
    this.categories[index] = categories;
    this.selecteds[index] = i;
    this.categories.splice(index + 1);
    this.selecteds.splice(index + 1);
    if (index == 0) {
      this.categories[1] = [];
      this.selecteds[1] = [];
      this.categories.splice(2);
      this.selecteds.splice(2);
    }
  }
  constructCategoryUrl(category) {
    let url = `/${this.productLine}/categories/${encodeURIComponent(
      category.code
    )}/${encodeURIComponent(category.name)}`;
    return url;
  }
  clicked(event) {
    this.closeMenu.emit(event);
  }
  getProductCatalogURL(catalog) {
    return `/${this.productLine}/categories/${
      catalog?.code
    }/${catalog?.name.replace(' ', '-')}`;
  }
}
